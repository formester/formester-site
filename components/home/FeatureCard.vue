<template>
  <div class="px-5">
    <img
      :src="require(`@/assets/images/home/${feature.imgName}`)"
      class="img-fluid"
    />
    <h5 class="feature__heading" v-html="feature.heading"></h5>
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
}
</style>