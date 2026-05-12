<template>
  <section class="container py-2 py-lg-5">
    <h2 class="section__heading text-center">Looking for more templates?</h2>
    <p class="text-center">
      Simplify your form creation process with our range of professionally
      designed form templates. Choose from a variety of styles and designs,
      including contact forms, surveys, job applications, and more - all
      available now for free!
    </p>

    <div class="categories">
      <div class="tab-container">
        <div class="icon pointer">
          <nuxt-img
            src="/arrow-icon.svg"
            id="left"
            @click="scrollTabs('left')"
          />
        </div>
        <ul class="tabs-box" ref="tabsBox">
          <li
            class="tab"
            v-for="tab in availableTabs"
            :key="tab.id"
            :id="tab.slug"
            :class="{ active: activeTab === tab.id }"
            @click="setActiveTab(tab)"
          >
            {{ tab.name }}
          </li>
        </ul>

        <div class="icon pointer">
          <nuxt-img
            src="/arrow-icon.svg"
            id="right"
            @click="scrollTabs('right')"
          />
        </div>
      </div>
    </div>

    <div class="mb-5">
      <template v-for="tab in availableTabs" :key="tab.id">
        <div v-show="activeTab === tab.id">
          <!-- CMS-resolved tabs: pre-rendered templates -->
          <div
            v-if="!tab.isLegacy && tab.templates && tab.templates.length"
            class="templates"
          >
            <div
              v-for="(template, idx) in tab.templates"
              :key="`${tab.id}-${idx}`"
              class="template"
            >
              <NuxtLink :to="`/templates/${template.slug}/`">
                <img
                  v-if="template.previewImageUrl"
                  class="img-fluid pointer template_img"
                  :src="template.previewImageUrl"
                  :alt="template.previewImageAlt || template.name"
                />
                <nuxt-img
                  v-else
                  class="img-fluid"
                  src="/templates/create_form.png"
                  alt="Template placeholder image"
                />
                <h2 class="template-name pointer">
                  {{ template.name }}
                </h2>
              </NuxtLink>
            </div>
          </div>

          <!-- Legacy tabs: render from runtime-fetched categoryTemplates -->
          <div
            v-else-if="tab.isLegacy && categoryTemplates.length"
            class="templates"
          >
            <div
              v-for="(template, idx) in categoryTemplates"
              :key="`legacy-${tab.id}-${idx}`"
              class="template"
            >
              <NuxtLink :to="`/templates/${template.slug}/`">
                <img
                  v-if="template.previewImageUrl"
                  class="img-fluid pointer template_img"
                  :src="template.previewImageUrl"
                  :alt="template.previewImageAlt || template.name"
                />
                <nuxt-img
                  v-else
                  class="img-fluid"
                  src="/templates/create_form.png"
                  alt="Template placeholder image"
                />
                <h2 class="template-name pointer">
                  {{ template.name }}
                </h2>
              </NuxtLink>
            </div>
          </div>

          <div
            v-else-if="!loading && tab.isLegacy"
            class="d-flex align-items-center justify-content-center mt-5 p-5"
          >
            No Templates
          </div>
        </div>
      </template>
      <Loader :loading="loading" class="mt-5 p-5" />
    </div>

    <div class="d-flex align-items-center justify-content-center mt-4">
      <NuxtLink :to="`/templates/`">
        <button class="btn-all-templates">View All Templates</button>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import Loader from '../Loader.vue'

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
})

// Legacy category tabs (lazy-loaded from app on click).
// Marked with isLegacy: true so setActiveTab knows to call loadCategoryTemplates.
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
// Otherwise, legacy categories are appended after any CMS-driven tabs
// (default Recommended tab from slug list).
const availableTabs = computed(() => {
  if (props.hasCustomShowcase) {
    return props.showcaseTabs
  }
  return [...props.showcaseTabs, ...legacyCategoryTabs.value]
})

const tabsBox = ref(null)
const loading = ref(false)

const firstTab = availableTabs.value[0] || null
const activeTab = ref(firstTab?.id ?? null)
// Holds templates for the currently-active legacy category tab.
// CMS-resolved tabs render directly from their own .templates array.
const categoryTemplates = ref([])

const config = useRuntimeConfig()
const appUrl = config.public.appUrl

// Cache for category templates by slug
const categoryTemplatesCache = ref({})

// Lazy-load category templates one category at a time (client-side only)
async function loadCategoryTemplates(categorySlug) {
  // Check cache first
  if (categoryTemplatesCache.value[categorySlug]) {
    categoryTemplates.value = categoryTemplatesCache.value[categorySlug]
    return
  }

  loading.value = true
  try {
    const data = await $fetch(`${appUrl}/templates.json`, {
      params: {
        category_slug: categorySlug,
        limit: 7,
      },
    })
    const filtered = data
      .filter((el) => el.slug !== props.templateSlug)
      .slice(0, 6)

    // Cache the result
    categoryTemplatesCache.value[categorySlug] = filtered
    categoryTemplates.value = filtered
  } catch (err) {
    console.error('Error fetching category templates:', err)
    categoryTemplates.value = []
  } finally {
    loading.value = false
  }
}

// Switch active tab. CMS tabs are pre-rendered (no fetch); legacy
// app-category tabs lazy-load from the app on first click.
async function setActiveTab(tab) {
  if (!tab) return
  activeTab.value = tab.id

  if (tab.isLegacy) {
    await loadCategoryTemplates(tab.slug)
  }

  const element = document.getElementById(tab.slug)
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  })

  setTimeout(() => {
    handleIcons()
  }, 300)
}

function handleIcons() {
  const leftArrow = document.querySelector('#left')
  const rightArrow = document.querySelector('#right')
  if (!tabsBox.value) return

  const scrollLeft = Math.ceil(tabsBox.value.scrollLeft)
  const scrollableWidth = tabsBox.value.scrollWidth - tabsBox.value.clientWidth

  if (leftArrow?.parentElement) {
    leftArrow.parentElement.style.display = scrollLeft > 0 ? 'flex' : 'none'
  }
  if (rightArrow?.parentElement) {
    rightArrow.parentElement.style.display =
      scrollableWidth > scrollLeft ? 'flex' : 'none'
  }
}

function scrollTabs(direction) {
  const scrollAmount = 180

  if (direction === 'left') {
    if (tabsBox.value.scrollLeft <= 100) {
      tabsBox.value.scrollLeft = 0
    } else {
      tabsBox.value.scrollLeft -= scrollAmount
    }
  } else if (direction === 'right') {
    tabsBox.value.scrollLeft += scrollAmount
  }

  setTimeout(() => {
    handleIcons()
  }, 300)
}

onMounted(async () => {
  // If the first tab is a legacy category, kick off the runtime fetch on mount
  if (firstTab?.isLegacy) {
    await loadCategoryTemplates(firstTab.slug)
  }
  handleIcons()
})
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
}

.tab-container {
  position: relative;
  overflow-x: hidden;
  max-width: 100%;
}

.icon {
  position: absolute;
  top: 0;
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
}

.icon:first-child {
  left: 0;
  display: none;
  background: #fff;
}

.icon:last-child {
  right: 0;
  justify-content: flex-end;
  background: #fff;
}

.icon img {
  width: 20px;
}

.icon:last-child img {
  rotate: 180deg;
}

.tabs-box {
  display: flex;
  gap: 12px;
  list-style: none;
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

.tabs-box .tab {
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  background: #f5f4fd;
  padding: 3px 20px;
  border-radius: 30px;
  border: 1px solid #d8d5f2;
}

.tabs-box .tab:hover {
  background: #efedfb;
}

.tabs-box.dragging .tab {
  user-select: none;
  pointer-events: none;
}

.tabs-box .tab.active {
  color: #fff;
  background: var(--clr-primary);
  border-color: transparent;
}

.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
  place-items: center;
}

.template {
  border-radius: 4px;
  padding: 12px;
  transition: all 500ms ease;
  min-height: 130px;
}

.template_img {
  border-radius: 10px;
}

.template-name {
  font-weight: 500;
  font-size: 16px;
  margin-top: 14px;
  line-height: 24px;
  color: #211447;
  user-select: none;
}

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

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .template-name {
    font-size: 14px;
  }
}

@media only screen and (max-width: 840px) {
  .template_container {
    flex-direction: column;
    gap: 0.5rem;
  }
  .template-name {
    font-size: 12px;
  }
}

@media only screen and (max-width: 800px) {
  .templates {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .template-name {
    font-size: 16px;
  }
}
</style>
