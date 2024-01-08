<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center">
      {{ heading }}
    </h2>
    <p class="text-center">
      {{ description }}
    </p>
    <div class="row steps-container px-3 py-5 d-flex flex-column flex-lg-row">
      <div v-for="(step, index) in steps" :key="index" class="col">
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            :src="step.imageSrc"
            class="img-fluid my-auto"
            :alt="step.imageAlt"
            loading="lazy"
          />
        </div>
        <div class="mt-5">
          <span class="step__heading">Step {{ index + 1 }}</span>
          <h3 class="step__section-heading">{{ step.title }}</h3>
          <p class="step__section-description">
            {{ step.description }}
          </p>
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
    description: {
      type: String,
      default: '',
    },
    steps: {
      type: Array,
      required: true,
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
.steps-container {
  gap: 40px;
}

@media (max-width: 992px) {
  .step__section-description {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
