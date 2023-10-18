<template>
  <div class="template-categories">
    <div
      class="category-heading__container"
      data-bs-toggle="collapse"
      data-bs-target="#categories"
      ref="categoryContainer"
      @click="isCollapsed = !isCollapsed"
    >
      <h2 class="category-heading pointer">Categories</h2>
      <nuxt-img
        class="category-menu-btn pointer"
        :src="imageSrc"
        alt="category-menu-button"
      />
    </div>
    <div
      class="categories collapse"
      id="categories"
      :class="{ show: showCategories }"
    >
      <NuxtLink
        :to="{
          name: 'templates',
        }"
      >
        <h3 class="category" :class="{ active: activeCategory === null }">
          All Categories
        </h3>
      </NuxtLink>
      <NuxtLink
        v-for="category in templateCategories"
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
</template>

<script>
export default {
  props: ['activeCategory', 'templateCategories'],
  data() {
    return {
      showCategories: true,
      isCollapsed: false,
    }
  },
  computed: {
    imageSrc() {
      const imageName = this.isCollapsed ? 'cross' : 'right-arrow'
      return `/templates/${imageName}.png`
    },
  },
  mounted() {
    if (window.innerWidth <= 840) this.showCategories = false
  },
}
</script>

<style>
.category-heading {
  padding: 12px 36px;
  margin: 0;
  font-weight: 600 !important;
  font-size: 20px;
  line-height: 26px;
  color: #171717;
}
.category-menu-btn {
  display: none;
}
.category {
  padding: 12px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #171717;
  user-select: none;
  transition: all 2s ease-in-out;
  margin-bottom: 0;
  font-weight: normal;
}
.category.active {
  color: #4f3895;
  font-weight: 500;
}

@media only screen and (max-width: 840px) {
  .category-heading__container {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    margin: 0 1.5rem;
    padding: 12px 16px;
    border-radius: 8px;
    background: var(--neutral-100, #f5f5f5);
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .template-categories {
    max-height: 100vh;
    overflow-y: auto;
  }
  .categories {
    overflow-y: auto;
    padding-top: 1.5rem;
  }
  .category {
    padding: 8px 36px;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
