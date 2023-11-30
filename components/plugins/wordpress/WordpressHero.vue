<template>
  <div
    class="hero d-flex justify-content-center align-items-center position-relative mx-auto"
  >
    <div
      class="hero__content d-flex flex-column align-items-center my-auto text-center px-3"
    >
      <h1 class="hero__heading">
        <span class="d-block">
          Embeding
          <nuxt-img src="/logo.svg" alt="Formester" class="ms-2 formester" />
        </span>
        <span class="d-block">
          on
          <nuxt-img
            src="/plugins/wordpress-logo.svg"
            alt="Wordpress"
            class="ms-2 wordpress"
          />
        </span>
      </h1>
      <p class="mt-3">
        Utilize our intuitive WordPress plugin to integrate Formester forms into
        your WordPress pages effortlessly.
      </p>
      <a
        href="https://app.formester.com/users/sign_up"
        class="btn button hero__button mt-4 mb-4 mb-lg-0"
        >Get Started for Free</a
      >
    </div>
    <div>
      <transition name="slide-in-left">
        <nuxt-img
          src="/plugins/wordpress-hero-left.svg"
          alt="Hero-Image"
          class="img-fluid position-absolute hero-image left"
          v-if="showImage"
        />
      </transition>
      <transition name="slide-in-right">
        <nuxt-img
          src="/plugins/wordpress-hero-right.svg"
          alt="Hero-Image"
          class="img-fluid position-absolute hero-image right"
          v-if="showImage"
        />
      </transition>
    </div>
  </div>
</template>
<script>
import TrustSeals from '@/components/home/TrustSeals.vue'
export default {
  components: {
    TrustSeals,
  },
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
  max-width: 720px;
}

.hero__heading {
  font-size: var(--ft-big-heading);
  font-weight: 700;
  line-height: 72px;
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

.formester {
  height: 40px;
}

/* animation */
.slide-in-left-enter-active {
  animation: slideInFadeInLeft 0.5s ease-out forwards;
}
.slide-in-left-enter {
  transform: translateX(-100%) translateY(-50%);
  opacity: 0;
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
.slide-in-right-enter {
  transform: translateX(100%) translateY(-50%);
  opacity: 0;
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

  .formester {
    height: 36px;
  }

  .wordpress {
    height: 44px;
  }
}
</style>
