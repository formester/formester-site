<template>
  <WorkflowTemplateList
    :templates="categoryTemplates"
    :categories="categories"
    :items-per-page="itemsPerPage"
    :active-category="category"
  >
    <FaqSection v-if="category.faqs?.length" :faq-list="category.faqs" :description-fallback="false" />
    <CtaDark
      class="category-cta"
      badge="Ready when you are"
      heading="Start with a workflow template today."
      description="Pick a template, link it to your form and publish."
      :buttons="ctaButtons"
    />
  </WorkflowTemplateList>
</template>

<script setup>
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import WorkflowTemplateList from '@/components/workflow-template/WorkflowTemplateList.vue'
import { useWorkflowTemplateData } from '@/composables/useWorkflowTemplateData'
import { useWorkflowTemplateCategorySeo } from '@/composables/useWorkflowTemplateListSeo'
import { WORKFLOW_TEMPLATES_PATH } from '@/utils/getWorkflowTemplates'

const route = useRoute()
const { appUrl } = useRuntimeConfig().public
const { templates, categories, itemsPerPage } = await useWorkflowTemplateData()

const category = categories.value.find((candidate) => candidate.slug === route.params.slug)
const categoryTemplates = templates.value.filter((template) =>
  template.categories.some(({ slug }) => slug === route.params.slug)
)

// An unknown slug, or a category whose templates are all unpublished, has no page.
if (!category || categoryTemplates.length === 0) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const ctaButtons = [
  { id: 'sign-up', link: `${appUrl}/users/sign_up`, text: 'Sign up free', type: 'Primary' },
  { id: 'browse', link: `${WORKFLOW_TEMPLATES_PATH}/`, text: 'Browse templates', type: 'Secondary' },
]

useWorkflowTemplateCategorySeo({ category, templates: categoryTemplates })
</script>

<style scoped>
/* The band sits in the content column here, so it is shorter than the full-width one on landing pages. */
.category-cta {
  margin-top: var(--space-12);
  padding: var(--space-12) var(--space-6);
  border-radius: var(--r-3xl);
}

.category-cta :deep(.cta-dark__heading) {
  font-size: var(--fs-3xl);
  line-height: 1.2;
}
</style>
