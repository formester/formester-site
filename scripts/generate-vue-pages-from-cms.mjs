// Pulls live data straight from Strapi's public REST API and writes real
// static .vue page files under pages/ — the same output shape as
// scripts/generate-pages-from-content.mjs, but sourced directly from the
// CMS instead of the committed content/*.json snapshots. Useful for
// re-generating one or a few pages after a CMS edit without re-running the
// full content/ migration first.
//
// Every fetched/filtered entry is also dumped to ./tmp/vue_gen_data/ before
// generation, so a bad CMS entry (or a generator bug) can be diagnosed from
// the exact data that produced it.
//
// Usage:
//   node scripts/generate-vue-pages-from-cms.mjs --generate-all
//   node scripts/generate-vue-pages-from-cms.mjs --slugs="best-poll-maker,pricing,home"
//
// Covers the three CMS collections that map to static pages: `pages`
// (including the slug-less home entry, addressed as slug "home"),
// `features`, and `blogs`. Each entry is generated independently — one
// failing entry is logged and skipped, the rest still run.

import fs from 'node:fs'
import path from 'node:path'
import { fetchAllPaginated, attrs } from './vue_gen_helpers/strapi-client.mjs'
import { loadComponentMapping } from './vue_gen_helpers/component-mapping.mjs'
import { processItem } from './vue_gen_helpers/process-item.mjs'
import { buildGenericPage } from './vue_gen_helpers/render-page.mjs'
import { buildBlogPage, normalizeBlogAttrs } from './vue_gen_helpers/render-blog.mjs'
import { writeFile, writeJson } from './vue_gen_helpers/fs-utils.mjs'

const ROOT = path.resolve(import.meta.dirname, '..')
const PAGES_DIR = path.join(ROOT, 'pages')
const MAPPING_FILE = path.join(ROOT, 'constants/componentMapping.js')
const REVIEW_DIR = path.join(ROOT, 'tmp/vue_gen_data')
const STRAPI_URL = process.env.NUXT_PUBLIC_STRAPI_URL || 'https://cms.formester.com'

const HOME_SLUG = 'home'

function printHelp() {
  console.log(`
Generate static pages/*.vue files directly from the live Strapi CMS.

Usage:
  node scripts/generate-vue-pages-from-cms.mjs --generate-all
  node scripts/generate-vue-pages-from-cms.mjs --slugs="best-poll-maker,pricing,home"

Options:
  --generate-all       Generate every page/feature/blog entry currently in the CMS.
  --slugs="a,b,c"      Only generate entries whose slug is in this comma-separated
                        list (matched across pages, features, and blogs). Use the
                        literal slug "home" for the home page.
  -h, --help            Show this help.

Data pulled from the CMS is also written to ./tmp/vue_gen_data/ (one JSON
file per entry) before any .vue file is generated, so you can review exactly
what was fetched if a generated page looks wrong.

Running with no options prints this help and exits without contacting the CMS.
`)
}

function parseArgs(argv) {
  const args = { generateAll: false, slugs: null, help: false }
  for (const raw of argv) {
    if (raw === '-h' || raw === '--help') {
      args.help = true
    } else if (raw === '--generate-all') {
      args.generateAll = true
    } else if (raw.startsWith('--slugs=')) {
      const value = raw.slice('--slugs='.length).replace(/^["']|["']$/g, '')
      args.slugs = value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    }
  }
  return args
}

function slugToReviewPath(type, slug) {
  return path.join(REVIEW_DIR, type, `${slug === HOME_SLUG ? 'home' : slug}.json`)
}

async function fetchCollection(endpoint) {
  const raw = await fetchAllPaginated(STRAPI_URL, endpoint)
  return raw.map(attrs)
}

function buildCandidates({ pageEntries, featureEntries, blogEntries }) {
  const candidates = []

  for (const item of pageEntries) {
    if (!item.slug) {
      candidates.push({ type: 'pages', slug: HOME_SLUG, isHome: true, item })
    } else {
      candidates.push({ type: 'pages', slug: item.slug, isHome: false, item })
    }
  }
  for (const item of featureEntries) {
    if (!item.slug) continue
    candidates.push({ type: 'features', slug: item.slug, item })
  }
  for (const item of blogEntries) {
    if (!item.slug) continue
    candidates.push({ type: 'blogs', slug: item.slug, item })
  }

  return candidates
}

function outputPathFor(candidate) {
  if (candidate.type === 'pages' && candidate.isHome) return path.join(PAGES_DIR, 'index.vue')
  if (candidate.type === 'pages') return path.join(PAGES_DIR, `${candidate.slug}.vue`)
  if (candidate.type === 'features') return path.join(PAGES_DIR, 'features', `${candidate.slug}.vue`)
  return path.join(PAGES_DIR, 'blog', `${candidate.slug}.vue`)
}

function generateOne(candidate, ctx, warnings) {
  if (candidate.type === 'pages' || candidate.type === 'features') {
    const data = processItem(candidate.item)
    return buildGenericPage(data, ctx.mapping, warnings)
  }
  return buildBlogPage(candidate.item, ctx.blogLookupBySlug, ctx.allBlogSlugsSorted)
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  if (args.help || (!args.generateAll && !args.slugs)) {
    printHelp()
    process.exit(0)
  }

  console.log(`[generate-vue-pages-from-cms] fetching from ${STRAPI_URL} ...`)
  const [pageEntries, featureEntries, rawBlogEntries] = await Promise.all([
    fetchCollection('pages'),
    fetchCollection('features'),
    fetchCollection('blogs'),
  ])
  // Flatten the coverImg media relation and the raw `schema` field into the
  // shape buildBlogPage() expects — see normalizeBlogAttrs() for why.
  const blogEntries = rawBlogEntries.map(normalizeBlogAttrs)
  console.log(
    `[generate-vue-pages-from-cms] fetched ${pageEntries.length} pages, ${featureEntries.length} features, ${blogEntries.length} blogs`
  )

  const allCandidates = buildCandidates({ pageEntries, featureEntries, blogEntries })

  const targetSlugs = args.slugs ? new Set(args.slugs) : null
  const selected = targetSlugs ? allCandidates.filter((c) => targetSlugs.has(c.slug)) : allCandidates

  if (targetSlugs) {
    const found = new Set(selected.map((c) => c.slug))
    for (const slug of targetSlugs) {
      if (!found.has(slug)) console.warn(`[generate-vue-pages-from-cms] warning: slug "${slug}" not found in any CMS collection`)
    }
  }

  if (!selected.length) {
    console.log('[generate-vue-pages-from-cms] nothing matched the given filters, exiting')
    return
  }

  // Related-article lookups on blog pages need the FULL blog set, not just
  // the filtered subset being (re)generated this run — otherwise a related
  // card can point at a slug that isn't in `selected`.
  const blogLookupBySlug = new Map(blogEntries.map((b) => [b.slug, b]))
  const allBlogSlugsSorted = [...blogLookupBySlug.keys()].sort()
  const mapping = loadComponentMapping(MAPPING_FILE)
  const ctx = { mapping, blogLookupBySlug, allBlogSlugsSorted }

  fs.rmSync(REVIEW_DIR, { recursive: true, force: true })
  for (const candidate of selected) {
    writeJson(slugToReviewPath(candidate.type, candidate.slug), candidate.item)
  }
  console.log(`[generate-vue-pages-from-cms] wrote ${selected.length} review json file(s) to ${path.relative(ROOT, REVIEW_DIR)}/`)

  const warnings = []
  const errors = []
  const generatedByType = { pages: 0, features: 0, blogs: 0 }

  for (const candidate of selected) {
    const label = candidate.isHome ? `${candidate.type}/home` : `${candidate.type}/${candidate.slug}`
    try {
      const fileContent = generateOne(candidate, ctx, warnings)
      const outPath = outputPathFor(candidate)
      writeFile(outPath, fileContent)
      generatedByType[candidate.type] += 1
      console.log(`[generate-vue-pages-from-cms] ok:    ${label} -> ${path.relative(ROOT, outPath)}`)
    } catch (err) {
      console.error(`[generate-vue-pages-from-cms] FAILED: ${label}: ${err.message}`)
      errors.push({ type: candidate.type, slug: candidate.slug, error: err.message })
    }
  }

  console.log('\n[generate-vue-pages-from-cms] summary:')
  console.log(`  pages:    ${generatedByType.pages}`)
  console.log(`  features: ${generatedByType.features}`)
  console.log(`  blogs:    ${generatedByType.blogs}`)

  if (warnings.length) {
    console.log(`\n[generate-vue-pages-from-cms] ${warnings.length} warning(s):`)
    warnings.forEach((w) => console.log(`  - ${w}`))
  }

  if (errors.length) {
    console.log(`\n[generate-vue-pages-from-cms] ${errors.length} error(s):`)
    errors.forEach((e) => console.log(`  - ${e.type}/${e.slug}: ${e.error}`))
    process.exitCode = 1
  }
}

main()
