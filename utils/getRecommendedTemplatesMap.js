import { STRAPI_URL } from '../constants/urls.js'
import fetchWithRetry from './fetchWithRetry.js'

let cachePromise = null

// Extract showcase tabs from a dynamic-zone `content` array.
// Returns the tabs array of the first macro-components.template-showcase
// component found in the zone, or [] if none.
function extractTabsFromContent(content) {
  const items = Array.isArray(content) ? content : []
  for (const item of items) {
    if (item?.__component === 'macro-components.template-showcase') {
      return item.tabs || []
    }
  }
  return []
}

async function _fetchRecommendedTemplatesMap() {
  console.log(
    '[getRecommendedTemplatesMap] Fetching all recommended templates from CMS...',
  )
  try {
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

      const defaultSlugs = (item.recommendedTemplates || [])
        .map((rt) => (rt ? rt.text : null))
        .filter(Boolean)

      map[templateSlug] = {
        defaultRecommendedSlugs: [...new Set(defaultSlugs)],
        hideDefaultRecommended: Boolean(item.hideDefaultRecommended),
        customTabs: extractTabsFromContent(item.content),
        title: item.title || [],
        description: item.description || '',
      }
    }

    console.log(
      `[getRecommendedTemplatesMap] Cached recommendations for ${Object.keys(map).length} templates`,
    )
    return map
  } catch (e) {
    console.warn(
      '[getRecommendedTemplatesMap] Could not fetch recommended templates, returning empty map:',
      e.message,
    )
    return {}
  }
}

export default async function getRecommendedTemplatesMap() {
  if (!cachePromise) {
    cachePromise = _fetchRecommendedTemplatesMap()
  }
  return cachePromise
}
