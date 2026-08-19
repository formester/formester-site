// One-off migration script: pulls published pages/features/home-page from the
// live Strapi API (public, populate=deep) and writes them as Nuxt Content
// data files under content/. Mirrors the transform utils/getAllPages.js's
// processItem() already does, so the adapter functions stay near-trivial.
//
// Run once: node scripts/migrate-from-strapi.mjs
// Safe to delete after the migration lands (see plans/nuxt-content-migration.md).

import fs from 'node:fs'
import path from 'node:path'
import getSiteMeta from '../utils/getSiteMeta.js'

const STRAPI_URL = process.env.NUXT_PUBLIC_STRAPI_URL || 'https://cms.formester.com'
const CONTENT_DIR = path.resolve(import.meta.dirname, '../content')
const PAGE_SIZE = 100

function normalizeJsonLd(input) {
  if (!input) return []
  const arr = Array.isArray(input) ? input : [input]
  return arr
    .filter((entry) => entry && typeof entry === 'object')
    .map((entry) =>
      !entry['@context'] || typeof entry['@context'] !== 'string'
        ? { '@context': 'https://schema.org', ...entry }
        : entry
    )
}

// Same shape utils/getAllPages.js's processItem() produces today.
function processItem(item) {
  const components = item?.components || []
  const meta = item?.meta || null
  const updatedAt = item?.updatedAt || null

  if (!components.length || !meta) {
    return { head: {}, jsonld: [], components }
  }

  const metaData = {
    url: meta?.url,
    type: meta?.type,
    title: meta?.title,
    description: meta?.description,
    mainImage: meta?.mainImage?.imageUrl || meta?.mainImage?.image?.url,
    mainImageAlt: meta?.mainImage?.imageAlt,
    keywords: meta?.keywords?.map((k) => k?.text),
    updatedAt,
  }
  const siteMetaData = getSiteMeta(metaData)
  const toSlash = (h) => (h ? h.replace(/([^/])$/, '$1/') : h)
  const authoredCanonical = (meta?.link || []).find((l) => l?.rel === 'canonical')
  const canonical = toSlash(authoredCanonical?.href || meta?.url)

  const head = {
    title: meta?.title,
    link: canonical ? [{ hid: 'canonical', rel: 'canonical', href: canonical }] : [],
    meta: [...siteMetaData],
  }
  const jsonld = normalizeJsonLd(meta?.jsonld)

  return { head, jsonld, components }
}

async function fetchAllPaginated(endpoint, extraParams = 'populate=deep') {
  const items = []
  let page = 1
  for (;;) {
    const url = `${STRAPI_URL}/api/${endpoint}?${extraParams}&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`${endpoint} page ${page} failed: ${res.status}`)
    const json = await res.json()
    items.push(...(json.data || []))
    const pagination = json.meta?.pagination
    if (!pagination || page >= pagination.pageCount) break
    page += 1
  }
  return items
}

// Slug-safe filename for content types with no natural slug field.
function slugifyName(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n')
}

// Writes a `type: 'page'` Nuxt Content file: YAML frontmatter (one
// `key: JSON.stringify(value)` line per field — valid YAML, since JSON is a
// YAML subset, with none of the hand-rolled-escaping risk) followed by the
// raw body text verbatim. See scripts/convert-blog-json-to-md.mjs for the
// one-off JSON->MD conversion this mirrors for blog.
function writeMarkdown(filePath, { body, ...frontmatterFields }) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  const frontmatterLines = Object.entries(frontmatterFields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
  const md = `---\n${frontmatterLines.join('\n')}\n---\n${body || ''}\n`
  fs.writeFileSync(filePath, md)
}

// Home page is NOT the separate `home-page` singleton (stale — the live site
// never reads it). It's the `pages` collection entry with no slug, exactly
// like utils/getAllPages.js's `map.__home__` handling.
async function migratePagesAndHome() {
  const items = await fetchAllPaginated('pages')
  let count = 0
  let homeCount = 0
  for (const item of items) {
    if (!item.slug) {
      const processed = processItem(item)
      writeJson(path.join(CONTENT_DIR, 'home.json'), processed)
      homeCount += 1
      continue
    }
    const processed = processItem(item)
    writeJson(path.join(CONTENT_DIR, 'pages', `${item.slug}.json`), {
      slug: item.slug,
      ...processed,
    })
    count += 1
  }
  console.log(`[migrate] wrote ${count} pages, ${homeCount} home entry`)
}

async function migrateFeatures() {
  const items = await fetchAllPaginated('features')
  let count = 0
  for (const item of items) {
    if (!item.slug) continue
    const processed = processItem(item)
    writeJson(path.join(CONTENT_DIR, 'features', `${item.slug}.json`), {
      slug: item.slug,
      navTitle: item.navTitle,
      navDescription: item.navDescription,
      featureCategory: item.featureCategory,
      featurePlan: item.featurePlan,
      ...processed,
    })
    count += 1
  }
  console.log(`[migrate] wrote ${count} features`)
}

// blogs/form-builders/form-builder-features come back as classic Strapi v4
// {id, attributes: {...}} — unlike pages/features/recommended-templates,
// which the CMS's response-flattening returns flat. Both shapes exist side
// by side depending on content type; this just unwraps the nested one.
function attrs(item) {
  return { id: item.id, ...(item.attributes || {}) }
}

async function migrateBlog() {
  const items = await fetchAllPaginated('blogs')
  let count = 0
  for (const raw of items) {
    const item = attrs(raw)
    if (!item.slug) continue
    const cover = item.coverImg?.data?.attributes
    writeMarkdown(path.join(CONTENT_DIR, 'blog', `${item.slug}.md`), {
      slug: item.slug,
      title: item.title,
      description: item.description,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      keywords: item.keywords,
      author: item.author,
      authorProfile: item.authorProfile,
      coverImgAlt: item.coverImgAlt,
      featured: Boolean(item.featured),
      body: item.body,
      coverImg: cover ? { url: cover.url, width: cover.width, height: cover.height } : null,
      metaImage: item.metaImage || [],
      jsonld: normalizeJsonLd((item.schema || []).map((s) => s.type)),
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    })
    count += 1
  }
  console.log(`[migrate] wrote ${count} blog posts`)
}

// Flattens the awkward plan.features[].form_builder_feature.data.attributes
// relation nesting into a clean `feature: {id, title, description}` so the
// committed JSON doesn't carry Strapi's relation-wrapper shape forever.
function flattenPlans(planList) {
  return (planList || []).map((p) => ({
    id: p.id,
    name: p.name,
    amount: p.amount,
    features: (p.features || []).map((f) => {
      const fbf = f.form_builder_feature?.data
      return {
        id: f.id,
        value: f.value,
        feature: fbf ? { id: fbf.id, title: fbf.attributes?.title, description: fbf.attributes?.description } : null,
      }
    }),
  }))
}

async function migrateFormBuilders() {
  const items = await fetchAllPaginated('form-builders')
  let count = 0
  for (const raw of items) {
    const item = attrs(raw)
    const logo = item.logo?.data?.attributes
    writeJson(path.join(CONTENT_DIR, 'comparison-tool', 'form-builders', `${item.id}.json`), {
      strapiId: item.id,
      name: item.name,
      logo: logo ? { url: logo.url, alternativeText: logo.alternativeText } : null,
      plan: flattenPlans(item.plan),
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    })
    count += 1
  }
  console.log(`[migrate] wrote ${count} form builders`)
}

async function migrateFormBuilderFeatures() {
  const items = await fetchAllPaginated('form-builder-features')
  let count = 0
  for (const raw of items) {
    const item = attrs(raw)
    writeJson(path.join(CONTENT_DIR, 'comparison-tool', 'form-builder-features', `${item.id}.json`), {
      strapiId: item.id,
      title: item.title,
      description: item.description,
      category: item.category || null,
    })
    count += 1
  }
  console.log(`[migrate] wrote ${count} form builder features`)
}

async function migratePlatformTestimonials() {
  const items = await fetchAllPaginated('platform-testimonials')
  let count = 0
  for (const item of items) {
    writeJson(path.join(CONTENT_DIR, 'platform-testimonials', `${item.id}.json`), {
      strapiId: item.id,
      platform: item.platform,
      rating: item.rating,
      text: item.text,
      authorName: item.authorName,
      authorRole: item.authorRole,
      reviewDate: item.reviewDate,
      verified: Boolean(item.verified),
      hidden: Boolean(item.hidden),
    })
    count += 1
  }
  console.log(`[migrate] wrote ${count} platform testimonials`)
}

async function migratePdfTemplates() {
  const items = await fetchAllPaginated('pdf-templates')
  let count = 0
  for (const item of items) {
    if (!item.slug) continue
    writeJson(path.join(CONTENT_DIR, 'templates', 'pdf-templates', `${item.slug}.json`), {
      slug: item.slug,
      previewImages: item.previewImages || [],
    })
    count += 1
  }
  console.log(`[migrate] wrote ${count} pdf templates`)
}

async function migrateRecommendedTemplates() {
  const items = await fetchAllPaginated('recommended-templates')
  let count = 0
  for (const item of items) {
    if (!item.specificTemplate) continue
    writeJson(
      path.join(CONTENT_DIR, 'templates', 'recommended-templates', `${slugifyName(item.specificTemplate)}.json`),
      {
        specificTemplate: item.specificTemplate,
        description: item.description || '',
        hideDefaultRecommended: Boolean(item.hideDefaultRecommended),
        title: item.title || [],
        content: item.content || [],
        recommendedTemplates: item.recommendedTemplates || [],
      }
    )
    count += 1
  }
  console.log(`[migrate] wrote ${count} recommended-template entries`)
}

async function main() {
  await migratePagesAndHome()
  await migrateFeatures()
  await migrateBlog()
  await migrateFormBuilders()
  await migrateFormBuilderFeatures()
  await migratePlatformTestimonials()
  await migratePdfTemplates()
  await migrateRecommendedTemplates()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
