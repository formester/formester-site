<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Spam Protection</h1>
            <p class="hero__subheading mt-3">
              Web forms are an easy target for spam. Use our one-click Recaptcha
              to curb spam and keep your list clean, along with an option to
              configure your own Google Re-Captcha for greater control.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Create Your Form</a
            >
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <img
              src="@/assets/images/features/spam-protection/spam-protection.svg"
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

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: { FeatureDetail, CallToActionSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/spam-protection/',
        title: 'Spam Protection | Formester',
        description:
          'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with spam-protection page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with spam-protection page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Spam Protection | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/spam-protection/',
        },
      ],
    }
  },
  jsonld() {
    return {}
  },
  data() {
    return {
      features: [
        {
          title: 'One Click Re-Captcha',
          description:
            'With our one-click ReCaptcha feature, prevent spam in under minutes. Send user to a clean page on Formester where they are verified as humans',
          src: 'spam-protection/one-click-re-captcha-illus.svg',
        },
        {
          title: 'Custom Re-Captcha',
          description:
            'Keep user on the same page and increase the chance of the conversion. Our philosophy has always been to keep things simple but give enough control for those who need it.',
          src: 'spam-protection/custom-re-captcha-illus.svg',
        },
        {
          title: 'Smart Filters',
          description:
            'Our database is getting smarter each day. We use machine learning to predict spam submissions. Your every form will improve our prediction.',
          src: 'spam-protection/smart-filters-illus.svg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero__image {
  height: 100%;
}

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
