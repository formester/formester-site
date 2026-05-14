<template>
  <section class="container py-2 py-lg-5">
    <SectionTitle v-if="title.length" :heading="title" />
    <h2 v-else class="section__heading text-center">
      Looking for more templates?
    </h2>
    <p class="text-center mb-4 mb-lg-5">
      {{ description || 'Simplify your form creation process with our range of professionally designed form templates. Choose from a variety of styles and designs, including contact forms, surveys, job applications, and more - all available now for free!' }}
    </p>

    <TemplateTabsView
      v-model:activeTabId="activeTabId"
      :tabs="tabsForView"
      :loading="loading"
      @change="onTabChange"
    />

    <div class="d-flex align-items-center justify-content-center mt-4">
      <NuxtLink :to="`/templates/`">
        <button class="btn-all-templates">View All Templates</button>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import TemplateTabsView from './TemplateTabsView.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const props = defineProps({
  categories: {
    type: Object,
    default: () => ({}),
  },
  templateSlug: {
    type: String,
    default: '',
  },
  showcaseTabs: {
    type: Array,
    default: () => [],
  },
  hasCustomShowcase: {
    type: Boolean,
    default: false,
  },
  title: {
    type: Array,
    default: () => [],
  },
  description: {
    type: String,
    default: '',
  },
})

// Legacy category tabs — lazy-loaded from the app on click.
const legacyCategoryTabs = computed(() =>
  Object.values(props.categories)
    .flat()
    .map((cat) => ({
      id: `legacy-${cat.id}`,
      name: cat.name,
      slug: cat.slug,
      templates: [],
      isLegacy: true,
    })),
)

// When a Custom Template Showcase is configured, it REPLACES legacy categories.
// Otherwise, legacy categories are appended after any CMS-driven tabs.
const baseTabs = computed(() =>
  props.hasCustomShowcase
    ? props.showcaseTabs
    : [...props.showcaseTabs, ...legacyCategoryTabs.value],
)

const firstTabId = baseTabs.value[0]?.id ?? null
const activeTabId = ref(firstTabId)
const loading = ref(false)
const categoryTemplatesCache = ref({})
const categoryTemplates = ref([])

// Inject lazy-loaded templates into the currently active legacy tab.
const tabsForView = computed(() =>
  baseTabs.value.map((tab) => {
    if (tab.isLegacy && tab.id === activeTabId.value) {
      return { ...tab, templates: categoryTemplates.value }
    }
    return tab
  }),
)

const config = useRuntimeConfig()
const appUrl = config.public.appUrl

async function loadCategoryTemplates(categorySlug) {
  if (categoryTemplatesCache.value[categorySlug]) {
    categoryTemplates.value = categoryTemplatesCache.value[categorySlug]
    return
  }

  loading.value = true
  try {
    const data = await $fetch(`${appUrl}/templates.json`, {
      params: { category_slug: categorySlug, limit: 7 },
    })
    const filtered = data
      .filter((el) => el.slug !== props.templateSlug)
      .slice(0, 6)
    categoryTemplatesCache.value[categorySlug] = filtered
    categoryTemplates.value = filtered
  } catch (err) {
    console.error('Error fetching category templates:', err)
    categoryTemplates.value = []
  } finally {
    loading.value = false
  }
}

async function onTabChange(tab) {
  if (tab.isLegacy) {
    await loadCategoryTemplates(tab.slug)
  }
}

onMounted(async () => {
  const firstTab = baseTabs.value[0]
  if (firstTab?.isLegacy) {
    await loadCategoryTemplates(firstTab.slug)
  }
})
</script>

<style scoped>
.btn-all-templates {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  transition: all 0.2s ease-out;
  background: var(--clr-primary);
  color: white;
}

.btn-all-templates:hover {
  background: #4f3895eb;
}
</style>
