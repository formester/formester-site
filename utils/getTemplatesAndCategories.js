import axios from 'axios'

// Single global cache for all requests
let cache = null

// Retry helper function
const fetchWithRetry = async (url, config, retries = 3, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await axios.get(url, { ...config, timeout: 30000 })
    } catch (error) {
      if (i === retries - 1) throw error
      console.log(`Retry ${i + 1}/${retries} for ${url}`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
}

const getTemplatesAndCategories = async (params = {}) => {
  // Return cached data if available (build or dev)
  if (cache) {
    return cache
  }

  let { data: templates } = await fetchWithRetry(
    "https://app.formester.com/templates.json",
    {
      params: {
        ...params,
        with_details: true,
      },
    }
  )

  const { data: categories } = await fetchWithRetry(
    "https://app.formester.com/template_categories.json"
  )

  const dummyDescription =
    'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

    const {
      data: { data },
    } = await fetchWithRetry(`https://cms.formester.com/api/pdf-templates`, {
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

  const { data: templatesGroupedByCategory } = await fetchWithRetry(
    "https://app.formester.com/template_categories/grouped_by_category.json"
  )

  const categorieRoutes = templatesGroupedByCategory.map((item) => ({
    route: `/templates/categories/${item.categorySlug}`,
    payload: {
      templates: item.templates,
      categories,
    },
  }))

  const result = { templateRoutes, categorieRoutes, templates, categories }

  // Cache result globally
  cache = result

  return result
}

export default getTemplatesAndCategories

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
