<template>
  <section class="container py-2 py-lg-5 template-showcase">
    <TemplateTabsView
      v-model:activeTabId="activeTabId"
      :tabs="resolvedTabs || []"
    />
  </section>
</template>

<script setup>
import TemplateTabsView from '@/components/template/TemplateTabsView.vue'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'
import resolveShowcaseTabs from '@/utils/resolveShowcaseTabs'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
})

const { data: resolvedTabs } = await useAsyncData(
  `template-showcase-${(props.tabs || []).map((t) => t.id || t.tabName).join('-')}`,
  async () => {
    const { templates } = await getTemplatesAndCategories()
    return resolveShowcaseTabs(props.tabs, templates, null, {
      sourceLabel: 'template-showcase-page',
      idPrefix: 'ts',
    })
  },
  { default: () => [] },
)

const activeTabId = ref(resolvedTabs.value?.[0]?.id ?? null)
</script>
