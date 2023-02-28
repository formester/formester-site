<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Auto Responder</h1>
            <p class="hero__subheading mt-3">
              Send personalised replies automatically to your customers on form
              submission. Emails are easy to create using our intuitive email
              builder. You can also customise the emails to go from your
              personal email account.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Get Started - it's Free</a
            >
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <img
              src="@/assets/images/features/auto-responder/auto-responder-message.svg"
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
        url: 'https://formester.com/features/auto-responder/',
        title: 'Email Autoresponder Message | Personalised Email Responder - Formester',
        description:
          'Boost your email marketing with a personalised email autoresponder message. Try Formester and engage your subscribers today! Sign up now.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Email Autoresponder Message | Personalised Email Responder - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/auto-responder/',
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
          title: 'White Label',
          description:
            'Make your emails look personal by using using your company email address. You also get an option to choose between HTML and text-based emails.',
          src: 'auto-responder/white-label-illus.svg',
        },
        {
          title: 'Easy Email Builder',
          description:
            'Creating a captivating response has never been simpler. Our easy to use editor enables you to write compelling content. Add images, links or videos in a matter of a click.',
          src: 'auto-responder/easy-email-builder-illus.svg',
        },
        {
          title: 'Personalised Response',
          description:
            'Notifications can be personalised to include fields from the submissions. Make your users feel unique with messages which seem to be coming from actual humans and not a bot.',
          src: 'auto-responder/personalised-response.svg',
        },
        {
          title: 'Realtime Tracking',
          description:
            'Monitor how people are interacting with your auto-response. Analyse useful metrics like open rate and link clicks to get insights into users behaviour. Use this data to make changes to your communication.',
          src: 'auto-responder/realtime-tracking-illus.svg',
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

.hero__image {
  height: 100%;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
