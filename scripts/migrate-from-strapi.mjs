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

async function fetchAllPaginated(endpoint) {
  const items = []
  let page = 1
  for (;;) {
    const url = `${STRAPI_URL}/api/${endpoint}?populate=deep&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`
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

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n')
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

async function main() {
  await migratePagesAndHome()
  await migrateFeatures()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
