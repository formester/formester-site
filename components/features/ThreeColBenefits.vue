<template>
  <div class="container py-5">
    <div class="row justify-content-center align-items-center text-center mt-5">
      <div>
        <h2 class="section__heading">
          {{ heading }}
        </h2>
        <p class="hero__subheading" v-if="subHeading">
          {{ subHeading }}
        </p>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between mt-md-5"
      >
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
        >
          <nuxt-img
            style="width: 69px"
            :src="`${benefit?.imgSrc}`"
            alt="Formester"
          />
          <h4 class="sub__section-heading mt-4">{{ benefit?.title }}</h4>
          <p class="subheading__text">
            {{ benefit?.description }}
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
    subHeading: {
      type: String,
      default: ''
    },
    benefits: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>