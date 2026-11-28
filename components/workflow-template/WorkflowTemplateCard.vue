<template>
  <TemplateCard
    :template="template"
    :to="workflowTemplateUrl(template.slug)"
    :use-url="workflowTemplateUseUrl(appUrl, template.slug)"
    :show-category-label="false"
    :heading-tag="headingTag"
  >
    <template #preview>
      <WorkflowStepIcons :step-types="template.stepTypes" />
    </template>
    <template v-if="template.categories.length" #tags>
      <WorkflowCategoryTags :categories="template.categories" />
    </template>
  </TemplateCard>
</template>

<script setup>
import TemplateCard from '@/components/template/TemplateCard.vue'
import WorkflowCategoryTags from '@/components/workflow-template/WorkflowCategoryTags.vue'
import WorkflowStepIcons from '@/components/workflow-template/WorkflowStepIcons.vue'
import { workflowTemplateUrl, workflowTemplateUseUrl } from '@/utils/getWorkflowTemplates'

defineProps({
  // e.g. {slug: "expense-claim-approval", name: "Expense claim approval", stepTypes: ["form_submission"], categories: [{slug: "approvals", name: "Approvals"}]}
  template: { type: Object, required: true },
  headingTag: { type: String, default: 'h3' },
})

const { appUrl } = useRuntimeConfig().public
</script>
