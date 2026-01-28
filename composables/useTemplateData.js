import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'

export const useTemplateData = async () => {
  const itemsPerPage = 12

  // Fetch all template data once and cache it
  const { data: templateData, error: fetchError } = await useAsyncData('templates-global', async () => {
    try {
      const { templates, categories } = await getTemplatesAndCategories()

      const totalTemplates = templates.length
      const totalPages = Math.ceil(totalTemplates / itemsPerPage)

      return {
        templates,
        categories,
        totalPages,
        itemsPerPage,
      }
    } catch (error) {
      console.error('Error fetching templates:', error)
      return {
        templates: [],
        categories: [],
        totalPages: 1,
        itemsPerPage,
      }
    }
  })

  if (fetchError.value) {
    console.error('Template fetch error:', fetchError.value)
  }

  return {
    templates: computed(() => templateData.value?.templates || []),
    categories: computed(() => templateData.value?.categories || []),
    totalPages: computed(() => templateData.value?.totalPages || 1),
    itemsPerPage,
  }
}

export const getPaginatedTemplates = (templates, page, itemsPerPage) => {
  const start = (page - 1) * itemsPerPage
  return templates.slice(start, start + itemsPerPage)
}
