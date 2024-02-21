<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center">
      {{ heading }}
    </h2>

    <div class="py-5 row">
      <div v-for="(step,idx) in steps" :key="step?.title" :class="columnClass">
        <div
          class="d-flex flex-column-reverse align-items-center justify-content-center pe-md-4"
        >
          <div class="mt-5">
            <span class="step__heading">Step {{idx+1}}</span>
            <h3 class="step__section-heading">{{ step?.title }}</h3>
            <p class="step__section-description">
              {{ step?.description }}
            </p>
          </div>
          <div class="d-flex flex-column flex-lg-row">
            <nuxt-img
              :src="step?.imgSrc"
              class="img-fluid my-auto"
              alt="Signup with a free account"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
    stepCount: {
      type: Number,
      default: 3,
      validator(value) {
        return [2, 3, 4].includes(value)
      },
    },
  },
  computed: {
    columnClass() {
      switch (this.stepCount) {
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
.step__heading {
  color: var(--clr-primary);
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.28px;
  text-transform: uppercase;
}

.step__section-heading {
  color: var(--dark, #211447);
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
}
.step__section-description {
  color: var(--neutral #404040);
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
}
@media (max-width: 992px) {
  .step__section-description {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
