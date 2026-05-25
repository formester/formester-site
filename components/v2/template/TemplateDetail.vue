<template>
  <div class="tmpl-detail">

    <div class="tmpl-detail__sticky-header" :style="{ '--hero-h': heroHeight + 'px' }">
      <div ref="heroWrapRef">
        <TemplateHero :template="template" :pdf-data="pdfData" />
      </div>

      <TemplateTabNav v-if="template.tabs?.length" :tabs="template.tabs" :active-tab-id="activeTabId"
        @update:active-tab-id="activeTabId = $event" />
    </div>

    <TemplateTabContent :template="template" :active-tab-id="activeTabId" />

  </div>
</template>

<script setup>
import TemplateHero from './TemplateHero.vue'
import TemplateTabNav from './TemplateTabNav.vue'
import TemplateTabContent from './TemplateTabContent.vue'

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

const activeTabId = ref(props.template.tabs?.[0]?.id ?? null)

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
