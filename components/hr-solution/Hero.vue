<template>
  <div>
    <!-- Above Large screen -->
    <div class="hero-container-lg d-none d-lg-flex justify-content-around">
      <div class="hero-left-container">
        <nuxt-img
          src="/hr-solution/hero-left.svg"
          alt="Hero-Image"
          class="img-fluid hero__image"
        />
      </div>
      <div
        class="hero-middle-container d-flex flex-column align-items-center my-auto"
      >
        <h1>
          Automate your Human Resource Operations with our HTML Form Builder and
          <span class="hglt">HR Form</span> Templates
        </h1>
        <a
          href="https://app.formester.com/users/sign_up"
          class="btn button hero__button mt-4 mb-4 mb-lg-0"
          >Get Started for Free</a
        >
      </div>
      <div class="hero-right-container">
        <nuxt-img
          src="/hr-solution/hero-right.svg"
          alt="Hero-Image"
          class="img-fluid hero__image"
        />
      </div>
    </div>

    <!-- Below Large screen -->
    <div
      class="hero-container-sm d-lg-none d-flex flex-column justify-content-center"
    >
      <div
        class="hero-top-container-sm d-flex flex-column align-items-center my-auto"
      >
        <h1 class="hero-heading-sm">
          Automate your Human Resource Operations with our HTML Form Builder and
          <span class="hglt">HR Form</span> Templates
        </h1>
        <a
          href="https://app.formester.com/users/sign_up"
          class="btn button hero__button mt-4 mb-4 mb-lg-0"
          >Get Started for Free</a
        >
      </div>
      <div class="hero-bottom-container-sm d-flex justify-content-around">
        <div class="hero-left-container-sm">
          <nuxt-img
            src="/hr-solution/hero-left.svg"
            alt="Hero-Image"
            class="img-fluid hero__image"
          />
        </div>
        <div class="hero-right-container-sm">
          <nuxt-img
            src="/hr-solution/hero-right.svg"
            alt="Hero-Image"
            class="img-fluid hero__image"
          />
        </div>
      </div>
    </div>
    <TrustSeals />
  </div>
</template>
<script>
import TrustSeals from '@/components/home/TrustSeals.vue'
export default {
  components: {
    TrustSeals,
  },
}
</script>
<style scoped>
.hero-container-lg {
  width: 100%;
  min-height: 602px;
  padding: 0 2rem;
}
.hero-container-sm {
  display: none;
  width: 100%;
  font-weight: 700;
  margin: 2rem 0 3rem;
}
.hero-heading-sm {
  padding: 0 12px;
}
.hero-middle-container {
  max-width: 797px;
  width: 60%;
}
.hero-left-container {
  margin-top: 4rem;
}
.hero-right-container {
  margin-top: 6rem;
}
.hero-left-container-sm {
  margin-top: 2rem;
}
.hero-right-container-sm {
  margin-top: 4rem;
}
.hero-top-container-sm {
  margin: auto;
}
.trust-seals-section {
  margin-bottom: 40px;
}
.hglt {
  color: var(--clr-primary);
}
h1 {
  color: #171717;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
}

@media (max-width: 1400px) {
  .hero-container-lg {
    padding: 0 1rem;
  }
}
@media (max-width: 1300px) {
  .hero-container-lg {
    padding: 0;
  }
}
@media (max-width: 992px) {
  h1 {
    font-size: 28px;
    line-height: 42px;
  }
  .hero-top-container-sm {
    max-width: 620px;
  }
}
@media (max-width: 768px) {
  .hero-top-container-sm {
    max-width: 398px;
  }
}
</style>
