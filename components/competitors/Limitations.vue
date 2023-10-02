<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">{{ heading }}</h2>
    </div>

    <div class="templates mt-md-5">
      <div v-for="(limitation, idx) in limitations" :key="idx">
        <div
          class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
        >
          <nuxt-img
            :src="limitation.img"
            class="img-fluid"
            loading="lazy"
            sizes="100vw"
          />
          <h4 class="sub__section-heading mt-4">{{ limitation.title }}</h4>
          <p class="subheading__text">{{ limitation.description }}</p>
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
    limitations: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.card {
  border-radius: 18px;
  border: none;
}
@media only screen and (max-width: 765px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
