<template>
  <div class="template-categories">
    <div
      class="category-heading__container"
      data-bs-toggle="collapse"
      data-bs-target="#categories"
    >
      <h1 class="category-heading">Category</h1>
      <img
        class="category-menu-btn"
        src="@/assets/images/filter_icon.svg"
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
        <h2 class="category" :class="{ active: activeCategory === null }">
          All Categories
        </h2>
      </NuxtLink>
      <NuxtLink
        v-for="category in templateCategories"
        :key="category.id"
        :to="{
          name: 'templates-categories-slug',
          params: { slug: category.slug },
        }"
      >
        <h2
          class="category"
          :class="{ active: activeCategory === category.slug }"
        >
          {{ category.name }}
        </h2>
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
    }
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
  margin-top: 10px;
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
  background-color: #f7f5ff;
  border-right: 3px solid #4f3895;
}

@media only screen and (max-width: 840px) {
  .category-heading__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
  }
  .category-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
  }
}
</style>
