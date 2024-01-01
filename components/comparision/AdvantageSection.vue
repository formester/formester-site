<template>
  <div class="container py-5 px-2">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">{{ heading }}</h2>
      <p class="m-0">
        {{ description }}
      </p>
    </div>

    <div class="templates mt-md-5">
      <div v-for="(feature, index) in features" :key="index">
        <div
          class="card p-4 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
        >
          <nuxt-img
            :src="`/${feature.imageSrc}`"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
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
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    features: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 24px;
}

.subheading__text {
  font-size: 16px;
}

.card {
  border-radius: 18px;
  border: none;
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 765px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
