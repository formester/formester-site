<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        {{ heading }}
      </h2>
    </div>

    <div class="row">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="col-lg-3 col-md-4 col-sm-6 mt-5"
      >
        <div
          class="border-sm-none border-start ps-3 d-flex flex-column align-items-start"
        >
          <nuxt-img
            :src="feature.img"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
            sizes="100vw"
          />
          <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
          <p class="subheading__text">{{ feature.description }}</p>
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
    features: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.sub__section-heading {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}

.subheading__text {
  font-size: 14px;
  line-height: 22px;
}
</style>
