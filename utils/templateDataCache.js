import axios from 'axios'

// Global in-memory cache shared across all imports
let templatesCache = null
let categoriesCache = null
let groupedCategoriesCache = null
let pdfTemplatesCache = null

/**
 * Fetch and cache template data - works during SSR/build
 * This is imported directly, no HTTP calls needed
 * Returns same reference to prevent memory duplication
 */
export async function getTemplateData(type = 'all') {
  const appUrl = process.env.NUXT_PUBLIC_APP_URL || 'https://app.formester.com'

  try {
    // Fetch templates if not cached
    if (!templatesCache) {
      console.log('🔄 Fetching templates (first time)...')
      const { data } = await axios.get(`${appUrl}/templates.json`, {
        params: { with_details: true },
        timeout: 30000
      })
      // Freeze to prevent accidental mutations and ensure same reference
      templatesCache = Object.freeze(data)
      console.log(`✅ Cached ${templatesCache.length} templates`)
    }

    // Fetch categories if not cached
    if (!categoriesCache) {
      console.log('🔄 Fetching categories (first time)...')
      const { data } = await axios.get(`${appUrl}/template_categories.json`, {
        timeout: 30000
      })
      categoriesCache = Object.freeze(data)
      console.log(`✅ Cached categories`)
    }

    // Fetch grouped categories if not cached
    if (!groupedCategoriesCache) {
      console.log('🔄 Fetching grouped categories (first time)...')
      const { data } = await axios.get(`${appUrl}/template_categories/grouped_by_category.json`, {
        timeout: 30000
      })
      groupedCategoriesCache = Object.freeze(data)
      console.log(`✅ Cached ${groupedCategoriesCache.length} grouped categories`)
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
 * Fetch PDF templates - cached separately
 */
export async function getPdfTemplates() {
  if (!pdfTemplatesCache) {
    try {
      console.log('🔄 Fetching PDF templates...')
      const { data: { data } } = await axios.get('https://cms.formester.com/api/pdf-templates', {
        params: { populate: 'deep' },
        timeout: 30000
      })
      pdfTemplatesCache = data
      console.log(`✅ Cached ${pdfTemplatesCache.length} PDF templates`)
    } catch (error) {
      console.error('Error fetching PDF templates:', error.message)
      pdfTemplatesCache = []
    }
  }
  return pdfTemplatesCache
}
