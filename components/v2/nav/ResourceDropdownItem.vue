<template>
  <div class="resource-dropdown-item__inner d-flex align-items-center">
    <nuxt-img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="imageAlt || ''"
      class="resource-dropdown-item__img"
      width="24"
      height="24"
      loading="lazy"
    />
    <div class="d-flex flex-column">
      <span class="resource-dropdown-item__title">{{ title }}</span>
      <span class="resource-dropdown-item__desc">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceDropdownItem',
  props: {
    title: String,
    description: String,
    imageUrl: String,
    imageAlt: String,
  },
}
</script>

<style scoped>
.resource-dropdown-item__inner {
  gap: 12px;
}

.resource-dropdown-item__title {
  color: var(--clr-text-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
}

.resource-dropdown-item__desc {
  color: var(--clr-text-secondary);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.resource-dropdown-item__img {
  height: 24px;
  width: 24px;
  flex-shrink: 0;
}
</style>
