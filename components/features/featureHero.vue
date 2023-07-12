<template>
  <section class="hero">
    <div class="container">
      <div class="row py-5">
        <div
          class="col-lg-6 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start">
          <h1 class="hero__heading">
            Unleash Your Form <span class="hglight">Potential</span> with
            Formester
          </h1>
          <p class="hero__subheading mt-3">
            Experience the perfect blend of simplicity and versatility,
            empowering you to create engaging and efficient forms
            effortlessly.
          </p>
          <a href="https://app.formester.com/users/sign_up" class="btn button hero__button mt-4 mb-4 mb-lg-0">Create Form
            for Free</a>
          <div class="hint">
            <div>✓ &nbsp; No credit card required</div>
            <div>✓ &nbsp; Unlimited forms</div>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
          <nuxt-img 
            src="/features/feature-hero.svg" 
            alt="Feature Hero image" 
            class="img-fluid" 
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
