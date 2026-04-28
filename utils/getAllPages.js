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
  }
  const siteMetaData = getSiteMeta(metaData)
  head = {
    title: meta?.title,
    link: meta?.link,
    meta: [
      ...siteMetaData,
      ...(updatedAt ? [{ property: 'article:modified_time', content: updatedAt }] : []),
    ],
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
  if (!cachePromise) {
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
