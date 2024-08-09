<template>
  <div class="container py-5">
    <SectionTitle :heading="title" />
    <p class="hero__subheading" v-if="description">
      {{ description }}
    </p>
    <div class="row py-5">
      <div v-for="item in itemList" :key="item.id"  class="col-md-6 my-3">
        <div class="px-4">
          <nuxt-img
            :src="item.cardImage.imageUrl || item.cardImage.image?.url"
            class="img-fluid"
            :alt="item.cardImage.imageAlt"
            loading="lazy"
          />
          <h3 class="feature__heading">{{ item.title }}</h3>
          <p>
            {{ item.description }}
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
      default: '',
    },
    itemList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.feature__heading {
  font-size: 28px;
  line-height: 44px;
  font-weight: 700;
}

img {
  margin-bottom: 2em;
  border-radius: 6px;
}
</style>