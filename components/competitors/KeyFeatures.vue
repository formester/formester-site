<template>
  <div class="container py-5 my-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">{{ heading }}</h2>
    </div>

    <div class="row mt-3">
      <div
        v-for="feature in keyFeatures"
        :key="feature.title"
        class="col-lg-4 col-md-6 mt-4"
      >
        <div class="feature__card p-3 d-flex flex-column align-items-center">
          <nuxt-img
            :src="feature.img"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
            sizes="100vw"
          />
          <div class="text-start">
            <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
            <p class="subheading__text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    keyFeatures: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.feature__card {
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1),
    0px 4px 8px 0px rgba(0, 0, 0, 0.05);
}
</style>
