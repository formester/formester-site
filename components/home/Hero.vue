<template>
  <section class="hero">
    <div class="container horizontal__padding">
      <div class="row">
        <div
          class="
            col-lg-5
            d-flex
            flex-column
            justify-content-center
            align-items-lg-start align-items-center
            text-center text-lg-start
            mt-xl-0 mt-5
          "
        >
          <h1 class="hero__heading">
            <span class="hglight">Form</span> Solution For Your Business
          </h1>
          <p class="hero__subheading mt-3">
            Build forms in minutes using our drag and drop builder or integrate with your existing HTML form.
          </p>
          <a href="https://app.formester.com/users/sign_up" class="button hero__button mt-4">Create Your Form</a>
        </div>
        <div
          class="
            col-lg-7
            d-flex
            align-items-center
            justify-content-center
            mt-lg-0 mt-5
          "
        >
          <img
            src="@/assets/images/hero-image.png"
            alt="Hero-Image"
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

.hero__heading {
  font-size: var(--ft-big-heading);
  font-weight: 700;
  line-height: 72px;
}

.hero__subheading {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

.hero__button {
  background-color: var(--clr-primary);
  font-size: var(--ft-lg-btn);
  padding: 1em 2em;
  border-radius: 8px;
  color: white;
  font-weight: 700;
}

.hero__button:hover {
  color: white;
  opacity: 0.9;
}

</style>
