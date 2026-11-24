import getWorkflowTemplatesAndCategories from '@/utils/getWorkflowTemplates'

const ITEMS_PER_PAGE = 12

/**
 * Every listed workflow template and category for the listing pages, fetched once and shared between them.
 * @returns {Promise<{templates: ComputedRef<Array>, categories: ComputedRef<Array>, totalPages: ComputedRef<number>, itemsPerPage: number}>}
 */
export const useWorkflowTemplateData = async () => {
  const { data, error } = await useAsyncData('workflow-templates-global', async () => {
    try {
      return await getWorkflowTemplatesAndCategories()
    } catch (fetchError) {
      // The API is not live yet, or is down: build the pages empty instead of failing the whole build.
      console.error('[useWorkflowTemplateData] Error fetching workflow templates:', fetchError)
      return { templates: [], categories: [] }
    }
  })

  if (error.value) {
    console.error('[useWorkflowTemplateData] Fetch error:', error.value)
  }

  const templates = computed(() => data.value?.templates || [])

  return {
    templates,
    categories: computed(() => data.value?.categories || []),
    totalPages: computed(() => Math.max(1, Math.ceil(templates.value.length / ITEMS_PER_PAGE))),
    itemsPerPage: ITEMS_PER_PAGE,
  }
}
