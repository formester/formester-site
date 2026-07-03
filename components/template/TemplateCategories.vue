<template>
  <div class="template-categories">
    <!-- Category bar for small devices to show hide categories -->
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

    <NuxtLink
      to="/templates/"
    >
      <h2
        class="all-category-heading"
        :class="{
          'd-none': !showCategories && isMobile,
        }"
      >
        All Templates
      </h2>
    </NuxtLink>

    <div
      class="category-search"
      :class="{ 'd-none': !showCategories && isMobile }"
    >
      <img class="category-search__icon" src="~/assets/images/icons/chevron-right.svg" alt="" aria-hidden="true" />
      <input
        v-model="search"
        class="category-search__input"
        type="text"
        placeholder="Search categories"
        aria-label="Search categories"
      />
    </div>

    <div
      v-for="(categories, categoryType) in filteredCategories"
      :key="categoryType"
      class="category-block"
      :class="{ 'd-none': !showCategories && isMobile }"
    >
      <div @click="toggleCollapse(categoryType)">
        <div
          class="categoryType-container d-flex align-items-center justify-content-between"
        >
          <h2 class="category-heading pointer">{{ formatCategoryHeading(categoryType) }}</h2>
          <div>
            <nuxt-img
              class="collapse-arrow-btn pointer"
              :class="{ 'rotate-arrow': isExpanded[categoryType] }"
              src="templates/collapseDown-arrow.svg"
              alt="category-arrow-button"
            />
          </div>
        </div>
      </div>
      <div
        class="categories"
        :id="'categories' + categoryType"
        :class="{ 'categories-collapsed': !isExpanded[categoryType] && !search.trim() }"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="`/templates/categories/${category.slug}/`"
        >
          <h3
            class="category"
            :class="{ active: activeCategory?.slug === category.slug }"
          >
            <span class="category__name">{{ category.name }}</span>
            <span v-if="category.templateCount" class="category__count">{{ category.templateCount }}</span>
          </h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activeCategory', 'templateCategories'],
  data() {
    return {
      showCategories: true,
      isExpanded: this.initializeExpandedState(),
      isMobile: false,
      search: '',
    }
  },
  computed: {
    // Filter categories by name; drop kinds with no matches. Empty search = all.
    filteredCategories() {
      const term = this.search.trim().toLowerCase()
      if (!term) return this.templateCategories || {}
      const result = {}
      Object.entries(this.templateCategories || {}).forEach(([kind, cats]) => {
        const matched = (cats || []).filter((c) => c.name?.toLowerCase().includes(term))
        if (matched.length) result[kind] = matched
      })
      return result
    },
  },
  methods: {
    initializeExpandedState() {
      // For SSR: expand all categories by default for SEO
      const allExpanded = {}
      if (this.templateCategories) {
        Object.keys(this.templateCategories).forEach(key => {
          allExpanded[key] = true
        })
      }
      return allExpanded
    },
    formatCategoryHeading(str) {
      if (!str) return '';
      // Insert space before all caps and replace underscores with space
      let formatted = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
      // Replace any occurrence of 'Pdf' (case-insensitive) with 'PDF'
      return formatted.replace(/Pdf/gi, 'PDF');
    },
    toggleCollapse(categoryType) {
      this.isExpanded[categoryType] = !this.isExpanded[categoryType]
      localStorage.setItem('isCollapsedState', JSON.stringify(this.isExpanded))
    },
    clearIsExpandedState() {
      localStorage.removeItem('isCollapsedState')
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 840
    },
  },
  mounted() {
    if (process.client) {
      this.handleResize()
      this.showCategories = !this.isMobile
      window.addEventListener('resize', this.handleResize)

      // On client-side, apply saved state or collapse all except first
      const savedState = localStorage.getItem('isCollapsedState')
      if (savedState) {
        this.isExpanded = JSON.parse(savedState)
      } else {
        // Collapse all except first category after initial render
        const collapsedState = {}
        Object.keys(this.templateCategories).forEach((key, index) => {
          collapsedState[key] = index === 0
        })
        this.isExpanded = collapsedState
      }

      window.addEventListener('beforeunload', this.clearIsExpandedState)
    }
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('beforeunload', this.clearIsExpandedState)
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
  color: var(--neutral-900, #404040);
  padding: 8px 36px 8px 0;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  user-select: none;
  font-weight: 500;
  letter-spacing: 0em;
}
.category-block {
  margin-top: 16px;
}
h2::first-letter {
  text-transform: uppercase;
}
.category-heading {
  color: var(--neutral-700, #404040);
  padding: 8px 0;
  margin: 0;
  font-size: 16px;
  font-weight: 500 !important;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: capitalize;
}
.categoryType-container {
  padding-right: 35px;
}
.category-menu-btn {
  display: none;
}
.category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  color: #272727;
  user-select: none;
  margin-bottom: 2px;
  font-weight: 400;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;
}
.category.active {
  color: #4f3895;
  font-weight: 600;
  background: var(--background-color-violet-25, #f7f3ff);
}
.category:hover {
  color: #643ed6;
  background: var(--background-color-grey-50, #f9fafb);
}
.category__count {
  font-size: 12px;
  color: #98a2b3;
  flex-shrink: 0;
}

/* ── Category search ── */
.category-search {
  position: relative;
  margin: 12px 0 8px;
}
.category-search__icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 13px;
  opacity: 0.4;
}
.category-search__input {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px 8px 30px;
  font-size: 13px;
  color: var(--clr-text-secondary, #475467);
  border: 1px solid var(--clr-border, #d0d5dd);
  border-radius: 8px;
  outline: none;
  background: #fff;
}
.category-search__input:focus {
  border-color: var(--clr-primary, #7f56d9);
}
.collapse-arrow-btn {
  transition: all 0.3s ease-in-out;
}
.rotate-arrow {
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
}

.categories {
  max-height: 2000px; /* Large enough to fit all categories */
  overflow: visible;
  transition: max-height 0.3s ease;
}

.categories-collapsed {
  max-height: 0;
  overflow: hidden;
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
  .sidebar-heading {
    display: none;
  }
  .our-template-heading {
    display: block;
  }
  .category-heading {
    color: var(--neutral-900, #171717);
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  .category-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .all-category-heading {
    color: var(--neutral-900, #171717);
    padding: 4px 8px 4px 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    transition: none;
  }
  .categoryType-container {
    padding: 0 8px 4px 8px;
  }
  .category {
    padding: 4px 8px 4px 8px;
    font-weight: 400;
    line-height: 21px;
    transition: none;
  }
}
</style>
