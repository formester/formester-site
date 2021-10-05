<template>
  <section class="container my-5">
    <div class="row gx-5">
      <div
        class="
          col-md-5
          d-flex
          order-md-last
          flex-column
          justify-content-center
          align-items-md-start align-items-center
          text-center text-md-start
          ms-md-5
        "
      >
        <h3 class="section__heading">{{ heading }}</h3>
        <p class="mt-3">
          {{ content }}
        </p>
        <a href="" class="feature__button">Learn more</a>
      </div>
      <div class="col-md-6 d-flex justify-content-center mt-md-0 mt-5">
        <!-- <img
          :src="require('../assets/image/' + imageName + '')"
          alt="Hero-Image"
          class="img-fluid"
        /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['heading', 'content', 'imageName', 'alter'],
}
</script>

<style scoped>
.feature__button {
  text-decoration: underline;
  color: var(--clr-primary);
}
</style>
