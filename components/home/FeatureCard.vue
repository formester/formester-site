<template>
  <div class="px-5">
    <img
      :src="require(`@/assets/images/home/${feature.imgName}`)"
      class="img-fluid"
      :alt="feature.alt"
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
  max-width: 100%;
}
</style>