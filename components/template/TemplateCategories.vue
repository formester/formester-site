<template>
  <div class="template-categories py-2">
    <h2 class="sidebar-heading">Our Templates</h2>
    <!-- Category bar for small devices to show hide categories -->
    <div class="category-bar" @click="isCollapsedSm = !isCollapsedSm">
      <h2 class="our-template-heading">Our Templates</h2>
      <nuxt-img
        class="category-menu-btn pointer"
        :src="imageSrc"
        alt="category-menu-button"
      />
    </div>

    <NuxtLink
      :to="{
        name: 'templates',
      }"
    >
      <h3
        class="all-category-heading"
        :class="{ 'd-none': isCollapsedSm === true }"
      >
        All Templates
      </h3>
    </NuxtLink>
    <div
      v-for="(categories, categoryType) in sortedTemplateCategories"
      :key="categoryType"
      class="category-block"
      :class="{ 'd-none': isCollapsedSm === true }"
    >
      <div
        :data-bs-target="'#categories' + categoryType"
        data-bs-target="#categories"
        ref="categoryContainer"
        @click="toggleCollapse(categoryType)"
      >
        <div
          class="categoryType-container d-flex align-items-center justify-content-between"
        >
          <h2 class="category-heading pointer">{{ categoryType }}</h2>
          <div>
            <nuxt-img
              class="collapse-arrow-btn pointer"
              src="templates/collapseDown-arrow.png"
              alt="category-arrow-button"
            />
          </div>
        </div>
      </div>
      <div
        class="categories collapse"
        :id="'categories' + categoryType"
        :class="{ show: isCollapsed[categoryType] }"
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
            :class="{ active: activeCategory === category.slug }"
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
      isCollapsed: { industry: true }, // Hardcoded industry to open industry collapse by default
      isCollapsedSm: false,
    }
  },
  methods: {
    toggleCollapse(categoryType) {
      this.$set(this.isCollapsed, categoryType, !this.isCollapsed[categoryType])
      localStorage.setItem('isCollapsedState', JSON.stringify(this.isCollapsed))
    },
    clearIsCollapsedState() {
      localStorage.removeItem('isCollapsedState')
    },
  },
  computed: {
    sortedTemplateCategories() {
      // Create a deep copy of templateCategories
      let sortedTemplate = { ...this.templateCategories }

      for (let categoryType in sortedTemplate) {
        sortedTemplate[categoryType].sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      }
      return sortedTemplate
    },
    imageSrc() {
      const imageName = this.isCollapsedSm ? 'right-arrow' : 'cross'
      return `/templates/${imageName}.png`
    },
  },
  mounted() {
    if (window.innerWidth <= 840) this.showCategories = false

    const savedState = localStorage.getItem('isCollapsedState')
    if (savedState) {
      this.isCollapsed = JSON.parse(savedState)
    }

    window.addEventListener('beforeunload', this.clearIsCollapsedState)
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('beforeunload', this.clearIsCollapsedState)
  },
}
</script>

<style scoped>
.sidebar-heading {
  color: var(--neutral-900, #171717);
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  padding: 0 35px;
  margin: 56px 0 16px;
}
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
  padding: 8px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  user-select: none;
  /* transition: all 2s ease-in-out; */
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
  padding: 0 35px;
}
.category-menu-btn {
  display: none;
}
.category {
  padding: 4px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #404040;
  user-select: none;
  /* transition: all 2s ease-in-out; */
  margin-bottom: 0;
  font-weight: 400;
}
.category.active {
  color: #4f3895;
  font-weight: 500;
}

@media only screen and (max-width: 840px) {
  .category-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    margin: 1.5rem 1.5rem 0.8rem;
    border-radius: 8px;
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
    padding: 4px 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    transition: none;
  }
  .categoryType-container {
    padding: 0 24px;
  }
  .category {
    padding: 4px 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    transition: none;
  }
}
</style>
