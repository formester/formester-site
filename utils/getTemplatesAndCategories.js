import axios from 'axios'
import { STRAPI_URL, APP_URL } from '../constants/urls.js'

const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

let cachePromise = null
let categorieRoutesPromise = null

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
          `[getTemplatesAndCategories] Attempt ${attempt}/${retries} failed (${error.code || error.message}). Retrying in ${delay}ms...`
        )
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }
      throw error
    }
  }
}

async function _fetchTemplatesAndCategories(params = {}) {
  console.log('[getTemplatesAndCategories] Fetching all templates and categories...')
  let { data: templates } = await fetchWithRetry(
    `${APP_URL}/templates.json`,
    {
      params: {
        ...params,
        with_details: true,
      },
    }
  )

  const { data: categories } = await fetchWithRetry(
    `${APP_URL}/template_categories.json`
  )

  const dummyDescription =
    'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

    const {
      data: { data },
    } = await fetchWithRetry(`${STRAPI_URL}/api/pdf-templates`, {
    params: {

      populate: 'deep',
    },
  })

  templates = templates.map((template) => ({
    ...template,
    description: template.description || dummyDescription,
  }))

  const templateRoutes = templates.map((template) => {
    const pdfTemplate = data.find((pdfTemplate) => pdfTemplate.slug === template.slug)
    return {
      route: `/templates/${template.slug}`,
      payload: { template, categories, data: pdfTemplate },
    }
  })
  templateRoutes.push({
    route: `/templates`,
    payload: { templates, categories },
  })

  const result = { templateRoutes, templates, categories }

  console.log(`[getTemplatesAndCategories] Cached ${templates.length} templates`)
  return result
}

const getTemplatesAndCategories = async (params = {}) => {
  if (!cachePromise) {
    cachePromise = _fetchTemplatesAndCategories(params)
  }
  return cachePromise
}

export default getTemplatesAndCategories

async function _fetchCategorieRoutes() {
  console.log('[getTemplatesAndCategories] Fetching grouped_by_category...')
  const { categories } = await getTemplatesAndCategories()
  const { data: templatesGroupedByCategory } = await fetchWithRetry(
    `${APP_URL}/template_categories/grouped_by_category.json`
  )
  return templatesGroupedByCategory.map((item) => ({
    route: `/templates/categories/${item.categorySlug}`,
    payload: {
      templates: item.templates,
      categories,
    },
  }))
}

export async function getCategorieRoutes() {
  if (!categorieRoutesPromise) {
    categorieRoutesPromise = _fetchCategorieRoutes()
  }
  return categorieRoutesPromise
}

/**
 * Get random templates from the cached data (without making new API calls)
 * @param {number} count - Number of random templates to return (default: 6)
 * @param {string} categorySlug - Optional category slug to filter by
 * @param {Array} specificSlugs - Optional array of specific template slugs to filter by
 * @returns {Array} Array of random templates
 */
export const getRandomTemplates = async (count = 6, categorySlug = null, specificSlugs = null) => {
  const { templates } = await getTemplatesAndCategories()

  let filteredTemplates = templates

  // Filter by specific slugs if provided (takes priority)
  if (specificSlugs && specificSlugs.length > 0) {
    return templates.filter(template => specificSlugs.includes(template.slug))
  }

  // Filter by category if provided
  if (categorySlug) {
    filteredTemplates = templates.filter(template =>
      template.categories?.some(cat => cat.slug === categorySlug)
    )
  }

  // Return empty array if not enough templates
  if (filteredTemplates.length === 0) {
    return []
  }

  // If requesting more templates than available, return all
  if (count >= filteredTemplates.length) {
    return filteredTemplates
  }

  // Get random templates using Fisher-Yates shuffle
  const shuffled = [...filteredTemplates]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled.slice(0, count)
}
