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
            id="recommend"
            :class="{ active: activeTab === null }"
            @click="setActiveTab()"
          >
            Recommended
          </li>
          <!-- Flatten categories in single Array so we can loop on it  -->
          <li
            class="tab"
            v-for="category in Object.values(categories).flat()"
            :key="category.id"
            :id="category.slug"
            :class="{ active: activeTab === category.id }"
            @click="setActiveTab(category)"
          >
            {{ category.name }}
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

    <!-- Recommended Tab Templates -->
    <div v-show="activeTab === null">
      <div class="templates">
        <div
          v-for="(template, idx) in recommendedTemplates"
          :key="`rec-${idx}`"
          class="template"
        >
          <NuxtLink :to="`/templates/${template.slug}/`">
            <img
              v-if="template.previewImageUrl"
              class="img-fluid pointer template_img"
              :src="template.previewImageUrl"
              :alt="template.name"
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
    </div>

    <!-- Category Tab Templates -->
    <div v-show="activeTab !== null" class="mb-5">
      <div
        v-if="categoryTemplates && categoryTemplates.length"
        class="templates"
      >
        <div
          v-for="(template, idx) in categoryTemplates"
          :key="`cat-${idx}`"
          class="template"
        >
          <NuxtLink :to="`/templates/${template.slug}/`">
            <img
              v-if="template.previewImageUrl"
              class="img-fluid pointer template_img"
              :src="template.previewImageUrl"
              :alt="template.name"
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
        v-if="!loading && categoryTemplates.length === 0"
        class="d-flex align-items-center justify-content-center mt-5 p-5"
      >
        No Templates
      </div>
      <!-- Loader -->
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
    default: {},
  },
  templateSlug: {
    type: String,
    default: '',
  },
  recommendedTemplates: {
    type: Array,
    default: () => [],
  },
})

const activeTab = ref(null)
const tabsBox = ref(null)
const categoryTemplates = ref([])
const loading = ref(false)

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

// Switch active tab and lazy-load category templates if needed
async function setActiveTab(tab) {
  const id = tab ? tab.slug : 'recommend'
  activeTab.value = tab?.id || null

  // Load category templates on tab click (client-side only)
  if (tab?.slug) {
    await loadCategoryTemplates(tab.slug)
  }

  const element = document.getElementById(id)
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

onMounted(() => {
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
