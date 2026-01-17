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

  // Fetch all template data from pre-fetched JSON file (no HTTP calls)
  const { templates, categories, groupedCategories } = await getTemplateData('all')

  // Fetch PDF templates from pre-fetched data
  const pdfTemplates = await getPdfTemplates()

  // Templates already have descriptions added in cache layer
  const processedTemplates = templates

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
