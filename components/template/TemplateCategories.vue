<template>
  <div class="template-categories">
    <!-- Category bar for small devices to show/hide categories -->
    <div class="category-bar" @click="showCategories = !showCategories">
      <span class="our-template-heading">Our Templates</span>
      <nuxt-img
        v-show="!showCategories"
        class="category-menu-btn pointer"
        src="/templates/right-arrow.png"
        alt="open-category"
      />
      <nuxt-img
        v-show="showCategories"
        class="category-menu-btn pointer"
        src="/templates/cross.png"
        alt="close-category"
      />
    </div>

    <NuxtLink :to="`${basePath}/`">
      <span class="all-category-heading" :class="{ 'd-none': !showCategories && isMobile }">
        <LucideIcon name="layout-grid" :size="17" class="all-category-heading__icon" />
        {{ allLabel }}
      </span>
    </NuxtLink>

    <div class="category-search" :class="{ 'd-none': !showCategories && isMobile }">
      <TemplateSearch placeholder="Search categories" @searchInput="search = $event" />
    </div>

    <div class="category-list" :class="{ 'd-none': !showCategories && isMobile }">
      <div v-for="group in groupedCategories" :key="group.kind" class="category-group">
        <h2 class="by-category-label">{{ group.label }}</h2>
        <NuxtLink
          v-for="category in group.items"
          :key="category.id"
          :to="`${basePath}/categories/${category.slug}/`"
        >
          <!-- The count sits outside the h3 so the heading text is the name alone, not "Approvals7". -->
          <div class="category" :class="{ active: activeCategory?.slug === category.slug }">
            <LucideIcon :name="category.icon" :size="17" class="category__icon" />
            <h3 class="category__name">{{ category.name }}</h3>
            <span v-if="category.templateCount" class="category__count">{{ category.templateCount }}</span>
          </div>
        </NuxtLink>
      </div>
      <p v-if="!groupedCategories.length" class="category-empty">No categories found</p>
    </div>
  </div>
</template>

<script setup>
// Kind groups, in display order, each with its eyebrow label (uppercased by CSS, so the H2 text reads normally).
const KIND_ORDER = ['purpose', 'department', 'industry', 'pdfTemplates']
const KIND_LABELS = {
  purpose: 'By purpose',
  department: 'By department',
  industry: 'By industry',
  pdfTemplates: 'PDF templates',
}
const MOBILE_MAX_WIDTH = 840

const props = defineProps({
  activeCategory: { type: Object, default: null },
  // Categories keyed by kind, e.g. {purpose: [{id, slug, name, icon, templateCount}]}.
  templateCategories: { type: Object, default: () => ({}) },
  // The listing's root path without a trailing slash; category pages live under <basePath>/categories/.
  basePath: { type: String, default: '/templates' },
  allLabel: { type: String, default: 'All Templates' },
  // Overrides for the group labels by kind, e.g. {purpose: 'Categories'}.
  groupLabels: { type: Object, default: () => ({}) },
})

const showCategories = ref(true)
const isMobile = ref(false)
const search = ref('')

// Grouped by kind (purpose → department → industry → pdf), each an
// alphabetically-sorted list, filtered by the search box; empty kinds dropped.
const groupedCategories = computed(() => {
  const term = search.value.trim().toLowerCase()
  const src = props.templateCategories || {}
  return KIND_ORDER.map((kind) => {
    let items = src[kind] || []
    if (term) items = items.filter((c) => c.name?.toLowerCase().includes(term))
    items = [...items].sort((a, b) => (a.name || '').localeCompare(b.name || ''))
    return { kind, label: props.groupLabels[kind] || KIND_LABELS[kind], items }
  }).filter((g) => g.items.length)
})

const handleResize = () => {
  isMobile.value = window.innerWidth <= MOBILE_MAX_WIDTH
}

onMounted(() => {
  handleResize()
  showCategories.value = !isMobile.value
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.our-template-heading {
  color: var(--neutral-900, #171717);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
  display: none;
}
.all-category-heading {
  margin-bottom: 0.5rem;
  color: var(--neutral-900, #101828);
  padding: 8px 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  user-select: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.all-category-heading__icon {
  color: var(--clr-primary, #7f56d9);
}

/* ── BY CATEGORY list ── */
.by-category-label {
  margin: 0;
  line-height: 1.5;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #98a2b3;
  padding: 0 10px 8px;
}
.category-list {
  margin-top: 6px;
}
.category-group {
  margin-bottom: 16px;
}
.category {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
  user-select: none;
  margin-bottom: 2px;
  font-weight: 500;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;
}
.category.active {
  color: #53389e;
  font-weight: 600;
  background: var(--background-color-violet-25, #f7f3ff);
}
.category:hover {
  color: #101828;
  background: var(--background-color-grey-50, #f9fafb);
}
.category__name {
  flex: 1;
  margin: 0;
  font: inherit;
  color: inherit;
}
.category__count {
  font-size: 12px;
  color: #98a2b3;
  flex-shrink: 0;
}
.category__icon {
  flex-shrink: 0;
  color: #667085;
}
.category.active .category__icon {
  color: #53389e;
}
.category-empty {
  padding: 8px 10px;
  font-size: 13px;
  color: #98a2b3;
}

/* ── Category search (reuses the shared TemplateSearch for a consistent
   box + focus ring; override its min-width so it fits the narrow sidebar). ── */
.category-search {
  margin: 12px 0 18px;
}
.category-search :deep(.search-box) {
  min-width: 0;
}

.category-menu-btn {
  display: none;
}

@media only screen and (max-width: 900px) {
  .category-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    margin: 0 0 4px;
    border-radius: 12px;
    background: var(--neutral-100, #f5f5f5);
  }
  .our-template-heading {
    display: block;
  }
  .category-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .all-category-heading {
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 600;
  }
  .category {
    padding: 6px 8px;
    transition: none;
  }
}
</style>
