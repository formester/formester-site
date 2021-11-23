<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="
              col-lg-5
              d-flex
              flex-column
              justify-content-center
              align-items-lg-start align-items-center
              text-center text-lg-start
              mt-xl-0 mt-md-5
            "
          >
            <h3 class="section__heading">Spam Protection</h3>
            <p class="hero__subheading mt-3">
              The first response is critical to any business. Formester makes it
              dead easy to respond to any form submission. With our
              autoresponder, you can send personalised emails to your customers.
              Do all this while not looking like a bot. We guarantee to make you
              look human.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Create Your Form</a
            >
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
              src="@/assets/images/features/spam-protection.png"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row py-5">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          :class="{ 'mx-auto': feature.isCenter }"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'

export default {
  components: { FeatureDetail, CallToActionSection },
  data() {
    return {
      features: [
        {
          title: 'One Click Re-Captcha',
          description:
            'With our one-click ReCaptcha feature, prevent spam in under minutes. Send user to a clean page on formester where they are verified as humans',
          src: 'one-click-re-captcha-illus.png',
        },
        {
          title: 'Custom Re-Captcha',
          description:
            'Keep user on the same page and increase the chance of the conversion. Our philosophy has always been to keep things simple but give enough control for those who need it.',
          src: 'custom-re-captcha-illus.png',
        },
        {
          title: 'Smart Filters',
          description:
            'Our database is getting smarter each day. We use machine learning to predict spam submissions. Your every form will improve our prediction.',
          src: 'smart-filters-illus.png',
          isCenter: true,
        },
      ],
    }
  },
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>