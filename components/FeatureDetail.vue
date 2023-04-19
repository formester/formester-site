<template>
  <div class="px-5">
    <img
      :src="require(`../assets/images/features/${feature.src}`)"
      class="img-fluid"
      :alt="feature.alt"
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
  padding-bottom: 2em;
}
</style>