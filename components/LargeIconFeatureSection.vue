<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center">
      <h2 class="section__heading">{{ heading }}</h2>
    </div>

    <div class="templates mt-md-5" :style="gridStyle">
      <div v-for="(feature, idx) in features" :key="idx" class="card p-3">
        <nuxt-img :src="feature.img" class="img-fluid" loading="lazy" />
        <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
        <p class="subheading__text">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'Key Benefits',
    },
    features: {
      type: Array,
      require: true,
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
    gridStyle() {
      return {
        'grid-template-columns': `repeat(${this.columnCount}, 1fr)`,
      }
    },
  },
}
</script>

<style scoped>
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-auto-rows: min-content;
  gap: 24px;
}

.card {
  border-radius: 18px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: start;
}

@media only screen and (max-width: 992px) {
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
