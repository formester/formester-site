<template>
  <div class="px-5">
    <img :src="require(`../assets/images/features/${feature.src}`)" class="img-fluid" />
    <h5 class="feature__heading">{{ feature.title }}</h5>
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
  font-size: 2.25rem;
  line-height: 44px;
  font-weight: 700;
}

/* img {
  padding: 0 2em 2em 4em;
}

@media (max-width: 1200px) {
  img {
    padding-bottom: 3em;
  }
} */

img {
  padding-bottom: 2em;
}
</style>