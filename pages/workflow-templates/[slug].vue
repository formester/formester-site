<template>
  <TemplateDetail :template="{ tabs }">
    <template #hero>
      <TemplateHero
        :template="heroTemplate"
        root-label="Workflow Templates"
        :base-path="WORKFLOW_TEMPLATES_PATH"
        :description-lines="6"
      >
        <template #preview>
          <WorkflowTemplatePreview
            ref="previewRef"
            v-model:tab="previewTab"
            :graph="template.graph"
            :form="template.formTemplate"
          />
        </template>

        <template #meta>
          <div class="hero-tags">
            <WorkflowCategoryTags :categories="template.categories" />
            <FTag v-if="template.includesForm">Includes form</FTag>
          </div>
        </template>

        <template #actions>
          <FButton size="lg" class="hero-action" :href="workflowTemplateUseUrl(appUrl, template.slug)">
            Use Template
          </FButton>
          <FButton size="lg" variant="violet-text" class="hero-action" @click="previewRef?.openPreview()">
            {{ PREVIEW_BUTTON_LABELS[previewTab] }}
          </FButton>
        </template>
      </TemplateHero>
    </template>
  </TemplateDetail>
</template>

<script setup>
import FButton from '@/components/UI/FButton.vue'
import FTag from '@/components/UI/FTag.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import TemplateDetail from '@/components/v2/template/TemplateDetail.vue'
import TemplateHero from '@/components/v2/template/TemplateHero.vue'
import TemplateOverviewPanel from '@/components/v2/template/TemplateOverviewPanel.vue'
import WorkflowCategoryTags from '@/components/workflow-template/WorkflowCategoryTags.vue'
import WorkflowRelatedTemplates from '@/components/workflow-template/WorkflowRelatedTemplates.vue'
import WorkflowTemplatePreview from '@/components/workflow-template/WorkflowTemplatePreview.vue'
import { useWorkflowTemplateSeo } from '@/composables/useWorkflowTemplateListSeo'
import {
  WORKFLOW_TEMPLATES_PATH,
  getWorkflowTemplate,
  workflowTemplateUseUrl,
} from '@/utils/getWorkflowTemplates'

const route = useRoute()
const { appUrl } = useRuntimeConfig().public

const { data: template, error } = await useAsyncData(`workflow-template-${route.params.slug}`, () =>
  getWorkflowTemplate(route.params.slug, appUrl)
)

if (error.value) {
  const notFound = error.value.statusCode === 404 || error.value.cause?.response?.status === 404
  if (!notFound) console.error('[workflow-templates/[slug]] Error fetching workflow template:', error.value)
  throw createError({
    statusCode: notFound ? 404 : 500,
    statusMessage: notFound ? 'Page not found' : 'Failed to load template',
    fatal: true,
  })
}

// The hero's second button opens the preview tab being looked at, full screen.
const PREVIEW_BUTTON_LABELS = { workflow: 'Preview the workflow', form: 'Preview the form' }

const previewRef = useTemplateRef('previewRef')
const previewTab = ref('workflow')

// The hero's breadcrumb links the first category, as a form template's links its one category.
const heroTemplate = computed(() => ({
  name: template.value.name,
  description: template.value.description,
  category: template.value.categories[0],
}))

const tabs = computed(() => {
  const {
    aboutTemplate,
    howItWorks,
    updatedAt,
    categories,
    graph,
    formTemplate,
    faqs,
    relatedTemplates,
  } = template.value
  const overview = {
    aboutTemplate,
    howItWorks,
    updatedAt,
    categories,
    categoryBasePath: `${WORKFLOW_TEMPLATES_PATH}/categories`,
    stepCount: graph.nodes.length,
    form: formTemplate && { name: formTemplate.name, to: `/templates/${formTemplate.slug}/` },
  }

  return [
    { id: 'overview', name: 'Overview', component: TemplateOverviewPanel, props: overview },
    faqs.length && { id: 'faq', name: 'FAQ', component: FaqSection, props: { faqList: faqs, badge: '' } },
    relatedTemplates.length && {
      id: 'related',
      name: 'Related Templates',
      component: WorkflowRelatedTemplates,
      props: { relatedTemplates },
    },
  ].filter(Boolean)
})

useWorkflowTemplateSeo(template.value)
</script>

<style scoped>
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.hero-action {
  width: 100%;
  justify-content: center;
}
</style>
