<template>
  <div class="px-4">
    <nuxt-img
      :src="`/features/${feature.src}`"
      class="img-fluid"
      :alt="feature.alt"
      loading="lazy"
    />
    <h3 class="feature__heading">{{ feature.title }}</h3>
    <p>
      {{ feature.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: ['feature'],
}
</script>

<style scoped>
.feature__heading {
  font-size: 28px;
  line-height: 44px;
  font-weight: 700;
}

img {
  margin-bottom: 2em;
  border-radius: 6px;
}
</style>