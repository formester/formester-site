<template>
  <div class="container py-5">
    <div class="row justify-content-center align-items-center text-center mt-5">
      <div>
        <SectionTitle :heading="title" />
        <p class="hero__subheading" v-if="description">
          {{ description }}
        </p>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between mt-md-5"
      >
        <div
          v-for="item in itemList"
          :key="item.id"
          class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
        >
          <nuxt-img
            style="width: 69px"
            :src="item.cardImage.image?.url || item.cardImage.imageUrl "
            alt="Formester"
          />
          <h4 class="sub__section-heading mt-4">{{ item?.title }}</h4>
          <p class="subheading__text">
            {{ item?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: ''
    },
    itemList: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style>
</style>