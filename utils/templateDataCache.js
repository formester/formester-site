import templateData from '~/constants/templates.json'

// Global in-memory cache shared across all imports
// Data is pre-fetched into templates.json during build
let templatesCache = null
let categoriesCache = null
let groupedCategoriesCache = null
let pdfTemplatesCache = null

/**
 * Get template data from pre-fetched JSON file
 * No HTTP calls during build - data is already in constants/templates.json
 * Returns frozen objects to prevent mutations
 */
export async function getTemplateData(type = 'all') {
  try {
    // Initialize caches from pre-fetched JSON file (only once)
    if (!templatesCache) {
      console.log('📦 Loading templates from constants/templates.json...')
      templatesCache = Object.freeze(templateData.templates)
      categoriesCache = Object.freeze(templateData.categories)
      groupedCategoriesCache = Object.freeze(templateData.groupedCategories)
      pdfTemplatesCache = templateData.pdfTemplates || []
      console.log(`✅ Loaded ${templatesCache.length} templates from JSON file`)
    }

    // Return requested data (same reference each time)
    switch (type) {
      case 'templates':
        return templatesCache
      case 'categories':
        return categoriesCache
      case 'grouped':
        return groupedCategoriesCache
      case 'all':
      default:
        return {
          templates: templatesCache,
          categories: categoriesCache,
          groupedCategories: groupedCategoriesCache
        }
    }
  } catch (error) {
    console.error('❌ Error fetching template data:', error.message)
    throw error
  }
}

/**
 * Get PDF templates from pre-fetched data
 */
export async function getPdfTemplates() {
  // Initialize from JSON if not already done
  if (!pdfTemplatesCache) {
    await getTemplateData('all') // This will initialize all caches
  }
  return pdfTemplatesCache
}
