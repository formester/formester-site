<template>
  <WorkflowTemplateList
    :templates="templates"
    :categories="categories"
    :current-page="currentPage"
    :total-pages="totalPages"
    :items-per-page="itemsPerPage"
  />
</template>

<script setup>
import WorkflowTemplateList from '@/components/workflow-template/WorkflowTemplateList.vue'
import { useWorkflowTemplateData } from '@/composables/useWorkflowTemplateData'
import { useWorkflowTemplateListSeo } from '@/composables/useWorkflowTemplateListSeo'
import { WORKFLOW_TEMPLATES_PATH } from '@/utils/getWorkflowTemplates'

const route = useRoute()

// Only canonical positive integers are real pages; /page/abc/ or /page/0/ 404 instead of coercing to page 1.
if (!/^[1-9]\d*$/.test(String(route.params.number))) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const currentPage = Number(route.params.number)
const { templates, categories, totalPages, itemsPerPage } = await useWorkflowTemplateData()

if (currentPage > totalPages.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

if (currentPage === 1) {
  await navigateTo(`${WORKFLOW_TEMPLATES_PATH}/`, { redirectCode: 301 })
}

const start = (currentPage - 1) * itemsPerPage

useWorkflowTemplateListSeo({
  currentPage,
  totalPages: totalPages.value,
  templates: templates.value.slice(start, start + itemsPerPage),
})
</script>
