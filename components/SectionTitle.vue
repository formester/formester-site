<template>
  <h2 class="section__heading text-center">
    <span
      v-for="item in heading"
      :key="item.id"
      :class="{ highlight__text: item.highlight }"
    >
      {{ item.text }}
    </span>
  </h2>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.section__heading {
  /* Uses the variable from the parent, or falls back to the site default */
  color: var(--heading-color, var(--clr-dark));
}

.highlight__text {
  /* Uses the variable from the parent, or falls back to the site primary purple */
  color: var(--highlight-color, var(--clr-primary));
}
</style>