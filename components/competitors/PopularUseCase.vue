<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">{{ heading }}</h2>
    </div>

    <div class="row mt-4">
      <div
        v-for="useCase in useCases"
        :key="useCase.title"
        class="col-lg-3 col-md-6"
        :class="`col-lg-${numberOfCol}`"
      >
        <div class="p-3 d-flex flex-column align-items-center">
          <nuxt-img
            :src="useCase.img"
            class="img-fluid"
            :alt="useCase.altText"
            loading="lazy"
          />
          <div class="text-start">
            <h4 class="sub__section-heading mt-4">{{ useCase.title }}</h4>
            <p class="subheading__text">{{ useCase.description }}</p>
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
      required: {
        type: String,
        required: true,
      },
    },
    useCases: {
      type: Array,
      required: true,
    },
    numberOfCol: {
      type: Number,
      default: 4,
    }
  },
}
</script>

<style scoped>
.sub__section-heading {
  font-size: 22px;
  font-weight: 600;
}

.subheading__text {
  font-size: 16px;
  line-height: 24px;
  color: #525252;
}
</style>
