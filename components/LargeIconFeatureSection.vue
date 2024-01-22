<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        {{ heading }}
      </h2>
    </div>

    <div class="row mt-4">
      <div
        v-for="feature in features"
        :key="feature.title"
        :class="columnClass"
        class="g-5"
      >
        <div class="d-flex flex-column align-items-center align-items-md-start">
          <nuxt-img
            :src="feature.img"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
          />
          <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
          <p class="subheading__text text-center text-md-start">
            {{ feature.description }}
          </p>
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
    columnCount: {
      type: Number,
      default: 3,
      validator(value) {
        return [2, 3, 4].includes(value)
      },
    },
  },
  computed: {
    columnClass() {
      // Bootstrap grid classes
      switch (this.columnCount) {
        case 2:
          return 'col-lg-6 col-md-6 col-sm-12'
        case 3:
          return 'col-lg-4 col-md-6 col-sm-12'
        case 4:
          return 'col-lg-3 col-md-6 col-sm-12'
        default:
          return 'col-lg-4 col-md-6 col-sm-12'
      }
    },
  },
}
</script>

<style scoped></style>
