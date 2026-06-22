import getSiteMeta from './getSiteMeta.js'
import { STRAPI_URL } from '../constants/urls.js'
import fetchWithRetry from './fetchWithRetry.js'

let cachePromise = null

function processItem(item) {
  const components = item?.components || []
  const meta = item?.meta || null
  const updatedAt = item?.updatedAt || null
  let head = {}
  let jsonld = []

  const normalizeJsonLd = (input) => {
    if (!input) return []
    let arr = Array.isArray(input) ? input : [input]
    return arr
      .filter((entry) => entry && typeof entry === 'object')
      .map((entry) => {
        if (!entry['@context'] || typeof entry['@context'] !== 'string') {
          return { '@context': 'https://schema.org', ...entry }
        }
        return entry
      })
  }

  if (!components.length || !meta) {
    return { head, jsonld, components }
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
  // Canonical: prefer meta.link (cleaner) over meta.url, trailing-slashed to match og:url.
  const toSlash = (h) => (h ? h.replace(/([^/])$/, '$1/') : h)
  const authoredCanonical = (meta?.link || []).find((l) => l?.rel === 'canonical')
  const canonical = toSlash(authoredCanonical?.href || meta?.url)
  head = {
    title: meta?.title,
    link: canonical ? [{ hid: 'canonical', rel: 'canonical', href: canonical }] : [],
    meta: [...siteMetaData],
  }
  jsonld = normalizeJsonLd(meta?.jsonld)

  return { head, jsonld, components }
}

async function _fetchAllPages() {
  console.log('[getAllPages] Fetching all pages from CMS...')
  const {
    data: { data },
  } = await fetchWithRetry(`${STRAPI_URL}/api/pages`, {
    params: {
      populate: 'deep',
    },
  })

  const items = data || []
  const map = { __home__: null }
  for (const item of items) {
    const processed = processItem(item)
    if (item.slug) {
      map[item.slug] = processed
    } else {
      map.__home__ = processed
    }
  }

  console.log(`[getAllPages] Cached ${Object.keys(map).length} pages`)
  return map
}

export async function getAllPages() {
  if (!cachePromise || import.meta.dev) {
    cachePromise = _fetchAllPages()
  }
  return cachePromise
}

export async function getPageBySlug(slug) {
  const pages = await getAllPages()
  return pages[slug] || null
}

export async function getHomePage() {
  const pages = await getAllPages()
  return pages.__home__ || null
}
