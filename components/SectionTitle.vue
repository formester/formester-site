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

<style>
</style>