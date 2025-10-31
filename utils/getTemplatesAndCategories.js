import axios from 'axios'

// Build-time cache with proper key management
let cache = null
let cacheKey = null

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

export default async (params = {}) => {
  // Create cache key
  const currentKey = JSON.stringify(params)
  
  // Return cached data during build if available
  if (cache && cacheKey === currentKey && typeof window === 'undefined') {
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
  
  // Cache result during build only
  if (typeof window === 'undefined') {
    cache = result
    cacheKey = currentKey
  }
  
  return result
}
