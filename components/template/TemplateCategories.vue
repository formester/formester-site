<template>
  <div class="template-categories">
    <!-- Category bar for small devices to show hide categories -->
    <div class="category-bar" @click="showCategories = !showCategories">
      <h2 class="our-template-heading">Our Templates</h2>
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
      :to="{
        name: 'templates',
      }"
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
          <h2 class="category-heading pointer">{{ categoryType }}</h2>
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
        class="categories collapse"
        :id="'categories' + categoryType"
        :class="{ show: isExpanded[categoryType] }"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="{
            name: 'templates-categories-slug',
            params: { slug: category.slug },
          }"
        >
          <h3
            class="category"
            :class="{ active: activeCategory?.slug === category.slug }"
          >
            {{ category.name }}
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
      isExpanded: {},
      isMobile: false,
    }
  },
  methods: {
    toggleCollapse(categoryType) {
      this.$set(this.isExpanded, categoryType, !this.isExpanded[categoryType])
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
    }

    const savedState = localStorage.getItem('isCollapsedState')
    if (savedState) {
      this.isExpanded = JSON.parse(savedState)
    } else {
      // Set first category type as expanded
      this.isExpanded = { [Object.keys(this.templateCategories)[0]]: true }
    }

    window.addEventListener('beforeunload', this.clearIsExpandedState)
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
