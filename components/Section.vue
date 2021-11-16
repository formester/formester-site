<template>
  <section class="container vertical__margin">
    <div class="row gx-5" v-if="feature">
      <div
        class="
          col-md-5
          d-flex
          flex-column
          justify-content-center
          align-items-md-start align-items-center
          text-center text-md-start
        "
        :class="{ 'order-md-last': !feature.alter }"
      >
        <h3 class="section__heading" v-html="feature.heading"></h3>
        <p class="mt-3">
          {{ feature.content }}
        </p>
        <a v-if="feature.link" href="" class="feature__button">Learn more</a>
      </div>
      <div class="col-md-6 d-flex justify-content-center mt-md-0 mt-5">
        <img
          :src="require(`../assets/images/${feature.imgName}`)"
          alt="Formester integration with different apps"
          class="img-fluid"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['feature'],
}
</script>

<style scoped>
.feature__button {
  text-decoration: underline;
  color: var(--clr-primary);
}

@media (max-width: 992px) {
  .vertical__margin {
    margin: 6em auto;
  }
}

@media (max-width: 768px) {
  .vertical__margin {
    margin: 3em auto;
  }
}
</style>
