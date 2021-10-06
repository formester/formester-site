<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div
          class="
            col-md-5
            d-flex
            flex-column
            justify-content-center
            align-items-md-start align-items-center
            text-center text-md-start
            mt-md-0 mt-5
          "
        >
          <h1 class="hero__heading">
            Build and Customize Online Forms Made Easy
          </h1>
          <p class="hero__subheading mt-3">
            Create customized online forms quickly and easily without wasting
            any time or energy
          </p>
          <a href="#" class="button hero__button mt-4">Get Started</a>
        </div>
        <div
          class="
            col-md-7
            d-flex
            align-items-center
            justify-content-center
            mt-md-0 mt-5
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
