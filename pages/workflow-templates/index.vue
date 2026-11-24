<template>
  <WorkflowTemplateList
    :templates="templates"
    :categories="categories"
    :current-page="1"
    :total-pages="totalPages"
    :items-per-page="itemsPerPage"
  />
</template>

<script setup>
import WorkflowTemplateList from '@/components/workflow-template/WorkflowTemplateList.vue'
import { useWorkflowTemplateData } from '@/composables/useWorkflowTemplateData'
import { useWorkflowTemplateListSeo } from '@/composables/useWorkflowTemplateListSeo'

const { templates, categories, totalPages, itemsPerPage } = await useWorkflowTemplateData()

useWorkflowTemplateListSeo({
  currentPage: 1,
  totalPages: totalPages.value,
  templates: templates.value.slice(0, itemsPerPage),
})
</script>
