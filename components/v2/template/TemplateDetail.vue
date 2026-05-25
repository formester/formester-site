<template>
  <div class="tmpl-detail">

    <div class="tmpl-detail__sticky-header" :style="{ '--hero-h': heroHeight + 'px' }">
      <div ref="heroWrapRef">
        <TemplateHero :template="templateData" :pdf-data="pdfData" />
      </div>

      <TemplateTabNav v-if="templateData.tabs?.length" :tabs="templateData.tabs" :active-tab-id="activeTabId"
        @update:active-tab-id="activeTabId = $event" />
    </div>

    <TemplateTabContent :template="templateData" :active-tab-id="activeTabId" />

  </div>
</template>

<script setup>
import TemplateHero from './TemplateHero.vue'
import TemplateTabNav from './TemplateTabNav.vue'
import TemplateTabContent from './TemplateTabContent.vue'

const MoreTemplates = defineAsyncComponent(() => import('@/components/template/MoreTemplates.vue'))

const props = defineProps({
  template: { type: Object, required: true },
  pdfData: { type: Object, default: null },
  categories: { type: [Object, Array], default: () => ({}) },
  showcaseTabs: { type: Array, default: () => [] },
  hasCustomShowcase: { type: Boolean, default: false },
  moreTemplatesTitle: { type: Array, default: () => [] },
  moreTemplatesDescription: { type: String, default: '' },
  showMoreTemplates: { type: Boolean, default: true },
})

const hasHtmlBlockForTab = (tabId) => props.template.rawHtmlBlocks?.some(b => b.tabId && b.tabId === tabId)

const templateData = computed(() => {
  // return early if tabs are defined and we can be sure about their content (i.e. no possibility of empty "Overview" or "FAQ" tabs)
  if (props.template.tabs?.length) return {
    ...props.template, tabs: props.template.tabs.filter(tab => {
      if (tab.id == 'overview') return props.template.aboutTemplate?.replace(/(<([^>]+)>)/gi, '').trim() || hasHtmlBlockForTab('overview')
      if (tab.id == 'faq') return props.template.faqs?.length || hasHtmlBlockForTab('faq')
      return true
    })
  }

  // fallback for unmigrated older data : use 'overview' and 'faq' tabs if there's content for them, even if tabs aren't defined.
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

const heroWrapRef = useTemplateRef('heroWrapRef')
const heroHeight = ref(0)

onMounted(() => {
  const ro = new ResizeObserver(([entry]) => {
    heroHeight.value = entry.contentRect.height
  })
  if (heroWrapRef.value) ro.observe(heroWrapRef.value)
  onBeforeUnmount(() => ro.disconnect())
})
</script>

<style scoped>
.tmpl-detail {
  /* consumed by TemplateHero via CSS custom property cascade */
  --hero-top-pad: 6rem;
}

.tmpl-detail__sticky-header {
  position: sticky;
  /* stick when hero has scrolled fully out; 80px = site navbar height */
  top: calc(-1 * var(--hero-h, 0px) + 80px);
  z-index: 20;
  background: var(--bg-primary);
}
</style>
