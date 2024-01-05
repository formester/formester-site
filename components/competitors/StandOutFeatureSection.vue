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
        :class="columnClass"
      >
        <div
          class="border-sm-none border-start ps-3 d-flex flex-column align-items-start"
        >
          <nuxt-img
            :src="feature.img"
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
      switch (this.columnCount) {
        case 2:
          return 'col-md-6 col-sm-6 mt-5'
        case 3:
          return 'col-md-4 col-sm-6 mt-5'
        case 4:
          return 'col-md-3 col-sm-6 mt-5'
        default:
          return 'col-md-4 col-sm-6 mt-5'
      }
    },
  },
}
</script>

<style scoped>
.sub__section-heading {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  position: relative;
}

.subheading__text {
  font-size: 14px;
  line-height: 22px;
}

.sub__section-heading::before {
  content: '';
  position: absolute;
  left: -17px;
  height: 100%;
  width: 1.5px;
  background-color: var(--clr-primary);
}
</style>
