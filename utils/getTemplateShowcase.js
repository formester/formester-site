import { STRAPI_URL } from '../constants/urls.js'
import fetchWithRetry from './fetchWithRetry.js'

let cachePromise = null

async function _fetchTemplateShowcase() {
  console.log('[getTemplateShowcase] Fetching template showcase config from CMS...')
  try {
    const {
      data: { data },
    } = await fetchWithRetry(`${STRAPI_URL}/api/template-showcase`, {
      params: {
        populate: 'deep',
      },
    })

    const tabs = data?.tabs || []
    tabs.sort((a, b) => (a.tabOrder || 0) - (b.tabOrder || 0))

    console.log(`[getTemplateShowcase] Cached ${tabs.length} showcase tabs`)
    return tabs
  } catch (e) {
    console.warn('[getTemplateShowcase] Could not fetch template showcase, falling back to empty:', e.message)
    return []
  }
}

export default async function getTemplateShowcase() {
  if (!cachePromise) {
    cachePromise = _fetchTemplateShowcase()
  }
  return cachePromise
}
