import { STRAPI_URL } from '../constants/urls.js'
import fetchWithRetry from './fetchWithRetry.js'

let cachePromise = null

async function _fetchRecommendedTemplatesMap() {
  console.log('[getRecommendedTemplatesMap] Fetching all recommended templates from CMS...')
  const {
    data: { data },
  } = await fetchWithRetry(`${STRAPI_URL}/api/recommended-templates`, {
    params: {
      'pagination[pageSize]': 1000,
      populate: 'deep',
    },
  })

  const map = {}
  const items = data || []
  for (const item of items) {
    const templateSlug = item.specificTemplate
    if (!templateSlug) continue

    const slugs = (item.recommendedTemplates || [])
      .map((rt) => (rt ? rt.text : null))
      .filter(Boolean)

    map[templateSlug] = [...new Set(slugs)]
  }

  console.log(`[getRecommendedTemplatesMap] Cached recommendations for ${Object.keys(map).length} templates`)
  return map
}

export default async function getRecommendedTemplatesMap() {
  if (!cachePromise) {
    cachePromise = _fetchRecommendedTemplatesMap()
  }
  return cachePromise
}
