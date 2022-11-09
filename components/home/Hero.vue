<template>
  <section class="hero">
    <div class="container horizontal__padding">
      <div class="row my-5">
        <div
          class="col-lg-6 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start"
        >
          <h1 class="hero__heading">
            The Only No-Code <span class="hglight">Form</span> Builder You Need
          </h1>
          <p class="hero__subheading mt-3">
            Build forms in minutes using our drag and drop builder or integrate
            with your existing HTML form.
          </p>
          <a
            href="https://app.formester.com/users/sign_up"
            class="btn button hero__button mt-4 mb-4 mb-lg-0"
            >Create Form for Free</a
          >
          <div class="hint">
            <div>✓ &nbsp; No credit card required</div>
            <div>✓ &nbsp; Unlimited forms</div>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <!-- <img
            src="@/assets/images/home/hero.svg"
            alt="Formester form building with drag and drop interface"
            class="img-fluid hero__image"
          /> -->
          <video loop muted autoplay playsinline style="max-width: 130%">
            <source src="@/assets/video/hero.webm" type="video/webm" />
          </video>
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
  margin-top: 130px;
  margin-bottom: 100px;
}
.hero__image {
  padding-left: 30px;
}

.hint {
  font-size: 12px;
  opacity: 0.7;
  margin-left: 8px;
  margin-top: 10px;
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
  .hero {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .hero__heading {
    line-height: 48px;
    font-size: 2.5rem;
  }
}
</style>
