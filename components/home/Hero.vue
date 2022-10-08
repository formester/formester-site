<template>
  <section class="hero">
    <div class="container horizontal__padding">
      <div class="row my-5">
        <div
          class="
            col-lg-5
            d-flex
            flex-column
            justify-content-center
            align-items-lg-start align-items-center
            text-center text-lg-start
          "
        >
          <h1 class="hero__heading">
            <span class="hglight">Form</span> Solution For Your Business
          </h1>
          <p class="hero__subheading mt-3">
            Build forms in minutes using our drag and drop builder or integrate
            with your existing HTML form.
          </p>
          <a
            href="https://app.formester.com/users/sign_up"
            class="btn button hero__button mt-4 mb-4 mb-lg-0"
            >Create Your Form</a
          >
        </div>
        <div
          class="
            col-lg-7
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <img
            src="@/assets/images/home/hero.svg"
            alt="Formester form building with drag and drop interface"
            class="img-fluid hero__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.hero {
  margin-bottom: 74px;
}

.hero__image {
  padding-left: 30px;
}

.hero__heading {
  font-size: var(--ft-big-heading);
  font-weight: 700;
  line-height: 72px;
}

.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

@media (max-width: 500px) {
  .hero__heading {
    line-height: 62px;
    font-size: 2.5rem;
  }
}
</style>
