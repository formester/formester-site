import axios from 'axios'
import { STRAPI_URL } from '../constants/urls.js'

const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

let cachePromise = null

async function fetchWithRetry(url, config = {}, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url, { ...config, timeout: 30000 })
    } catch (error) {
      const isRetryable =
        error.code === 'ECONNRESET' ||
        error.code === 'ETIMEDOUT' ||
        error.code === 'ECONNABORTED' ||
        error.code === 'EPIPE' ||
        error.code === 'EAI_AGAIN' ||
        (error.response && error.response.status >= 500)

      if (isRetryable && attempt < retries) {
        const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1)
        console.warn(
          `[getRecommendedTemplatesMap] Attempt ${attempt}/${retries} failed (${error.code || error.message}). Retrying in ${delay}ms...`
        )
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }
      throw error
    }
  }
}

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
