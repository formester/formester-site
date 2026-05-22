<template>
  <div class="tmpl-detail">

    <TemplateHero
      :template="templateData"
      :pdf-data="pdfData"
    />

    <TemplateTabNav
      v-if="templateData.tabs?.length"
      :tabs="templateData.tabs"
      :active-tab-id="activeTabId"
      @update:active-tab-id="activeTabId = $event"
    />

    <TemplateTabContent
      :template="templateData"
      :active-tab-id="activeTabId"
    />

    <!-- <MoreTemplates
      v-if="showMoreTemplates"
      :categories="categories"
      :template-slug="template.slug"
      :showcase-tabs="showcaseTabs"
      :has-custom-showcase="hasCustomShowcase"
      :title="moreTemplatesTitle"
      :description="moreTemplatesDescription"
    /> -->

  </div>
</template>

<script setup>
import TemplateHero from './TemplateHero.vue'
import TemplateTabNav from './TemplateTabNav.vue'
import TemplateTabContent from './TemplateTabContent.vue'

const MoreTemplates = defineAsyncComponent(() => import('@/components/template/MoreTemplates.vue'))

const props = defineProps({
  template:                { type: Object,           required: true },
  pdfData:                 { type: Object,           default: null },
  categories:              { type: [Object, Array],  default: () => ({}) },
  showcaseTabs:            { type: Array,            default: () => [] },
  hasCustomShowcase:       { type: Boolean,          default: false },
  moreTemplatesTitle:      { type: Array,            default: () => [] },
  moreTemplatesDescription:{ type: String,           default: '' },
  showMoreTemplates:       { type: Boolean,          default: true },
})

const templateData = computed(() => {
  if (props.template.tabs?.length) return props.template

  const syntheticTabs = []

  const hasOverview = props.template.aboutTemplate?.replace(/(<([^>]+)>)/gi, '').trim()
  if (hasOverview) syntheticTabs.push({ id: 'overview', name: 'Overview' })

  if (props.template.faqs?.length) syntheticTabs.push({ id: 'faq', name: 'FAQ' })
  console.log('faqs', props.template.faqs)

  return syntheticTabs.length
    ? { ...props.template, tabs: syntheticTabs }
    : props.template
})

const activeTabId = ref(templateData.value.tabs?.[0]?.id ?? null)
</script>

<style scoped>
.tmpl-detail {
  /* consumed by TemplateHero via CSS custom property cascade */
  --hero-top-pad: 6rem;
}
</style>
