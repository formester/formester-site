import { getTemplateData } from '~/utils/templateDataCache'

/**
 * Global composable for template data caching
 * Uses useState to ensure single instance across all components
 * Prevents memory duplication during build
 */

// Fetch all templates once - shared instance
export const useAllTemplates = async () => {
  const templates = useState('all-templates-global')

  // If not already loaded, fetch and cache
  if (!templates.value) {
    try {
      templates.value = await getTemplateData('templates')
    } catch (err) {
      console.error('Error fetching all templates:', err)
      templates.value = []
    }
  }

  return { data: templates }
}

// Fetch categories once - shared instance
export const useCategories = async () => {
  const categories = useState('categories-global')

  // If not already loaded, fetch and cache
  if (!categories.value) {
    try {
      categories.value = await getTemplateData('categories')
    } catch (err) {
      console.error('Error fetching categories:', err)
      categories.value = {}
    }
  }

  return { data: categories }
}

// Fetch grouped templates once - shared instance with memoized map
export const useGroupedTemplates = async () => {
  const grouped = useState('grouped-templates-global')

  // If not already loaded, fetch and cache
  if (!grouped.value) {
    try {
      const data = await getTemplateData('grouped')

      // Convert array to map for easy lookup - done once
      const templatesMap = {}
      if (Array.isArray(data)) {
        data.forEach((item) => {
          templatesMap[item.categorySlug] = item.templates.slice(0, 6)
        })
      }

      grouped.value = templatesMap
    } catch (err) {
      console.error('Error fetching grouped templates:', err)
      grouped.value = {}
    }
  }

  return { data: grouped }
}

// Fetch all template data at once - shared instance
export const useAllTemplateData = async () => {
  const allData = useState('all-template-data-global')

  // If not already loaded, fetch and cache
  if (!allData.value) {
    try {
      allData.value = await getTemplateData('all')
    } catch (err) {
      console.error('Error fetching template data:', err)
      allData.value = {
        templates: [],
        categories: {},
        groupedCategories: []
      }
    }
  }

  return { data: allData }
}

// Fetch recommended template slugs from CMS - per template
export const useRecommendedSlugs = async (templateSlug) => {
  const slugs = useState(`recommended-slugs-${templateSlug}`)

  // If not already loaded, fetch and cache
  if (!slugs.value) {
    try {
      const data = await $fetch('https://cms.formester.com/api/recommended-templates', {
        params: {
          'filters[specificTemplate][$eq]': templateSlug,
          'pagination[pageSize]': 1,
          populate: 'deep',
        },
      })
      const items = (data && data.data) || []
      const found = items && items.length ? items[0] : null
      if (!found || !found.recommendedTemplates) {
        slugs.value = []
      } else {
        const result = found.recommendedTemplates
          .map((rt) => (rt ? rt.text : null))
          .filter(Boolean)
        slugs.value = [...new Set(result)]
      }
    } catch (e) {
      console.error('Error fetching recommended slugs:', e)
      slugs.value = []
    }
  }

  return { data: slugs }
}
