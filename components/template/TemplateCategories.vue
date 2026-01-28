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
      <h3
        class="all-category-heading"
        :class="{
          'd-none': !showCategories && isMobile,
        }"
      >
        All Templates
      </h3>
    </NuxtLink>
    <div
      v-for="(categories, categoryType) in templateCategories"
      :key="categoryType"
      class="category-block"
      :class="{ 'd-none': !showCategories && isMobile }"
    >
      <div @click="toggleCollapse(categoryType)">
        <div
          class="categoryType-container d-flex align-items-center justify-content-between"
        >
          <h3 class="category-heading pointer">{{ formatCategoryHeading(categoryType) }}</h3>
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
        :class="{ 'categories-collapsed': !isExpanded[categoryType] }"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="`/templates/categories/${category.slug}/`"
        >
          <h6
            class="category"
            :class="{ active: activeCategory?.slug === category.slug }"
          >
            {{ category.name }}
          </h6>
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
    }
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
  padding: 4px 36px 4px 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  color: #272727;
  user-select: none;
  margin-bottom: 4px;
  font-weight: 400;
}
.category.active {
  color: #4f3895;
  font-weight: 600;
}
.category:hover {
  color: #643ed6;
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
