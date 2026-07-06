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

    <NuxtLink to="/templates/">
      <h2 class="all-category-heading" :class="{ 'd-none': !showCategories && isMobile }">
        <LucideIcon name="layout-grid" :size="17" class="all-category-heading__icon" />
        All Templates
      </h2>
    </NuxtLink>

    <div class="category-search" :class="{ 'd-none': !showCategories && isMobile }">
      <TemplateSearch placeholder="Search categories" @searchInput="search = $event" />
    </div>

    <div class="category-list" :class="{ 'd-none': !showCategories && isMobile }">
      <div v-for="group in groupedCategories" :key="group.kind" class="category-group">
        <div class="by-category-label">{{ group.label }}</div>
        <NuxtLink
          v-for="category in group.items"
          :key="category.id"
          :to="`/templates/categories/${category.slug}/`"
        >
          <h3 class="category" :class="{ active: activeCategory?.slug === category.slug }">
            <LucideIcon :name="category.icon" :size="17" class="category__icon" />
            <span class="category__name">{{ category.name }}</span>
            <span v-if="category.templateCount" class="category__count">{{ category.templateCount }}</span>
          </h3>
        </NuxtLink>
      </div>
      <p v-if="!groupedCategories.length" class="category-empty">No categories found</p>
    </div>
  </div>
</template>

<script>
// Kind groups, in display order, each with its uppercase eyebrow label.
const KIND_ORDER = ['purpose', 'department', 'industry', 'pdfTemplates']
const KIND_LABELS = {
  purpose: 'BY PURPOSE',
  department: 'BY DEPARTMENT',
  industry: 'BY INDUSTRY',
  pdfTemplates: 'PDF TEMPLATES',
}

export default {
  props: ['activeCategory', 'templateCategories'],
  data() {
    return {
      showCategories: true,
      isMobile: false,
      search: '',
    }
  },
  computed: {
    // Grouped by kind (purpose → department → industry → pdf), each an
    // alphabetically-sorted list, filtered by the search box; empty kinds dropped.
    groupedCategories() {
      const term = this.search.trim().toLowerCase()
      const src = this.templateCategories || {}
      return KIND_ORDER.map((kind) => {
        let items = src[kind] || []
        if (term) items = items.filter((c) => c.name?.toLowerCase().includes(term))
        items = [...items].sort((a, b) => (a.name || '').localeCompare(b.name || ''))
        return { kind, label: KIND_LABELS[kind], items }
      }).filter((g) => g.items.length)
    },
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 840
    },
  },
  mounted() {
    if (process.client) {
      this.handleResize()
      this.showCategories = !this.isMobile
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
}
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
   pill + focus ring; override its min-width so it fits the narrow sidebar). ── */
.category-search {
  margin: 12px 0 18px;
}
.category-search :deep(.search-box) {
  min-width: 0;
}

.category-menu-btn {
  display: none;
}

@media only screen and (max-width: 840px) {
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
