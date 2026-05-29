<template>
  <div v-if="template.tabs?.length" ref="contentRef" class="tmpl-detail__content-area" :style="{ 'scroll-margin-top': scrollOffset + 'px' }">
    <div v-for="tab in template.tabs" :key="tab.id" v-show="activeTabId === tab.id">
      <component :is="resolvedComponents[tab.type]" v-bind="tab.props" />
    </div>
  </div>
</template>

<script setup>
import componentMapping from '@/constants/componentMapping'

const props = defineProps({
  template:     { type: Object, required: true },
  activeTabId:  { type: String, default: null },
  scrollOffset: { type: Number, default: 80 },
})

const resolvedComponents = computed(() => {
  const types = [...new Set(props.template.tabs?.map(t => t.type) ?? [])]
  return Object.fromEntries(
    types
      .filter(t => componentMapping[t])
      .map(t => [t, defineAsyncComponent(componentMapping[t])])
  )
})

const contentRef = useTemplateRef('contentRef')

watch(() => props.activeTabId, () => {
  nextTick(() => {
    contentRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})
</script>

<style scoped>
.tmpl-detail__content-area {
  min-height: 200px;
}
</style>
