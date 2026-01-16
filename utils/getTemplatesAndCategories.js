import { getTemplateData, getPdfTemplates } from './templateDataCache'

// Single global cache for all requests
let cache = null

/**
 * Fetch templates and categories using the shared cache
 * This ensures data is fetched only once during the entire build process
 * Works during SSR/build without HTTP requests
 */
export default async (params = {}) => {
  // Return cached data if available
  if (cache) {
    return cache
  }

  // Fetch all template data from shared cache (direct import, no HTTP)
  const { templates, categories, groupedCategories } = await getTemplateData('all')

  const dummyDescription =
    'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

  // Fetch PDF templates
  const pdfTemplates = await getPdfTemplates()

  const processedTemplates = templates.map((template) => ({
    ...template,
    description: template.description || dummyDescription,
  }))

  const templateRoutes = processedTemplates.map((template) => {
    const pdfTemplate = pdfTemplates.find((pdfTemplate) => pdfTemplate.slug === template.slug)
    return {
      route: `/templates/${template.slug}`,
      payload: { template, categories, data: pdfTemplate },
    }
  })

  templateRoutes.push({
    route: `/templates`,
    payload: { templates: processedTemplates, categories },
  })

  const categorieRoutes = groupedCategories.map((item) => ({
    route: `/templates/categories/${item.categorySlug}`,
    payload: {
      templates: item.templates,
      categories,
    },
  }))

  const result = {
    templateRoutes,
    categorieRoutes,
    templates: processedTemplates,
    categories
  }

  // Cache result globally
  cache = result

  return result
}
