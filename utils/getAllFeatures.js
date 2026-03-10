import getSiteMeta from './getSiteMeta.js'
import { STRAPI_URL } from '../constants/urls.js'
import fetchWithRetry from './fetchWithRetry.js'

let cachePromise = null

function processItem(item) {
  const components = item?.components || []
  const meta = item?.meta || null
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
    meta: [...siteMetaData],
  }
  jsonld = normalizeJsonLd(meta?.jsonld)

  return { head, jsonld, components }
}

async function _fetchAllFeatures() {
  console.log('[getAllFeatures] Fetching all features from CMS...')
  const {
    data: { data },
  } = await fetchWithRetry(`${STRAPI_URL}/api/features`, {
    params: {
      populate: 'deep',
    },
  })

  const items = data || []
  const map = {}
  for (const item of items) {
    if (item.slug) {
      map[item.slug] = processItem(item)
    }
  }

  console.log(`[getAllFeatures] Cached ${Object.keys(map).length} features`)
  return map
}

export async function getAllFeatures() {
  if (!cachePromise) {
    cachePromise = _fetchAllFeatures()
  }
  return cachePromise
}

export async function getFeatureBySlug(slug) {
  const features = await getAllFeatures()
  return features[slug] || null
}
