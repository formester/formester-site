<template>
  <div>
    <div
      class="hero d-flex justify-content-center align-items-center position-relative mx-auto"
    >
      <div
        class="hero__content d-flex flex-column align-items-center my-auto text-center px-3"
      >
        <span class="hero__subtitle">30+ Form Builders Compared</span>
        <h1 class="hero__heading">
          Compare Top Online Form Builders
        </h1>
        <p class="hero__description mt-3">
          Pricing and Features of the Top Form Builders Side-by-Side
        </p>
        <!-- <a
          href="https://app.formester.com/users/sign_up"
          class="btn button hero__button mt-4 mb-4 mb-lg-0"
          >Sign Up For Free</a
        > -->
      </div>
      <div>
        <transition name="slide-in-left">
          <nuxt-img
            src="comparision/comparison-left-hero-image.svg"
            alt="Hero-Image"
            class="img-fluid position-absolute hero-image left"
            v-show="showImage"
          />
        </transition>
        <transition name="slide-in-right">
          <nuxt-img
            src="comparision/comparison-right-hero-image.svg"
            alt="Hero-Image"
            class="img-fluid position-absolute hero-image right"
            v-show="showImage"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImage: false,
    }
  },
  mounted() {
    this.showImage = true
  },
}
</script>

<style scoped>
.hero {
  margin-top: 130px;
  margin-bottom: 100px;
  max-width: 1440px;
}

.hero__content {
  max-width: 820px;
}

.hero__subtitle {
  color: var(--clr-primary);
  font-size: var(--ft-small-body);
  font-weight: 600;
  line-height: 24px;
}

.hero__heading {
  margin-top: 12px;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  color: var(--clr-text-primary);
}

.hero__description {
  color: var(--clr-text-secondary);
  font-size: 20px;
  line-height: 30px;
}

.hero-image {
  z-index: -1;
}

.hero-image.left {
  top: 40%;
  transform: translateY(-50%);
  left: 5%;
  opacity: 1;
}

.hero-image.right {
  top: 40%;
  transform: translateY(-50%);
  right: 5%;
  opacity: 1;
}

.formester-logo {
  height: 40px;
}

/* animation */
.slide-in-left-enter-active {
  animation: slideInFadeInLeft 0.5s ease-out forwards;
}

@keyframes slideInFadeInLeft {
  from {
    transform: translateX(-100%) translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(-50%);
    opacity: 1;
  }
}

.slide-in-right-enter-active {
  animation: slideInFadeInRight 0.5s ease-out forwards;
}

@keyframes slideInFadeInRight {
  from {
    transform: translateX(100%) translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(-50%);
    opacity: 1;
  }
}

@media screen and (max-width: 1100px) {
  .hero__content {
    max-width: 524px;
  }
}

@media screen and (max-width: 900px) {
  .hero-image.left {
    left: 0%;
  }

  .hero-image.right {
    right: 0%;
  }
}
@media screen and (max-width: 768px) {
  .hero-image {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .hero__heading {
    font-size: 36px;
    line-height: 52px;
  }

  .formester-logo {
    height: 36px;
  }

  .wordpress-logo {
    height: 44px;
  }
}
</style>
