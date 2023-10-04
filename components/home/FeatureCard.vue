<template>
  <div class="px-sm-5 px-3">
    <nuxt-img
      :src="`/home/${feature.imgName}`"
      class="img-fluid"
      :alt="feature.alt"
      loading="lazy"
      sizes="10vw"
    />
    <h3 class="feature__heading" v-html="feature.heading"></h3>
    <p>
      {{ feature.content }}
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
  font-size: 2rem;
  line-height: 44px;
  font-weight: 700;
}

img {
  padding-bottom: 2em;
  max-width: 275px;
}
</style>