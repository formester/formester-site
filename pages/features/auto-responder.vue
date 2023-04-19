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
      <div class="row justify-content-center align-items-center text-center mt-5">
        <div >
          <h2 class="section__heading">Boost Your Business with Autoresponder</h2>
          <p class="hero__subheading">Unlock the Power of Automated Email Marketing for Your Business</p>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between mt-md-5">
          <div class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5">
            <img style="width: 69px;" src="@/assets/images/round-access-time.jpg" alt="Formester" />
            <h4 class="sub__section-heading mt-4">Time-saving</h4>
            <p class="subheading__text">Retain customers by sending them follow-up emails after a purchase, asking for feedback, and offering incentives for repeat purchases.</p>
          </div>
          <div class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5">
            <img style="width: 69px;" src="@/assets/images/leads.jpg" alt="Formester" />
            <h4 class="sub__section-heading mt-4">Lead generation</h4>
            <p class="subheading__text">Capture leads and grow your email list by offering incentives such as free e-books, whitepapers, or exclusive discounts.</p>
          </div>
          <div class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5">
            <img style="width: 69px;" src="@/assets/images/customer-support.jpg" alt="Formester" />
            <h4 class="sub__section-heading mt-4">Customer retention</h4>
            <p class="subheading__text">Automating repetitive tasks such as sending welcome emails, confirmation emails, and follow-up emails.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="feature__heading d-flex align-items-center justify-content-center">
          <h2 class="section__heading">Features</h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <Testimonial 
      :testimonials="randomTestimonials"
    />
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: { FeatureDetail, CallToActionSection, Testimonial },
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
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Formester - Auto Responder',
      description:
        "Sign up now for the best No Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      operatingSystem: 'all',
      browserRequirements: 'Requires Javascript and HTML5 support',
      sameAs: [
        'https://twitter.com/_formester_',
        'https://www.instagram.com/_formester_/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dalaware',
        addressCountry: 'United States',
      },
      creator: {
        '@type': 'Organization',
        '@id': '#organization',
        url: 'https://formester.com/',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      }
    }
  },
  data() {
    return {
      features: [
        {
          title: 'White Label',
          description:
            'Make your emails look personal by using your company email address. You also get an option to choose between HTML and text-based emails.',
          src: 'auto-responder/white-label-illus.svg',
          alt: 'Get noticed by making the email personalized'
        },
        {
          title: 'Easy Email Builder',
          description:
            'Creating a captivating response has never been simpler. Our easy to use editor enables you to write compelling content. Add images, links or videos in a matter of a click.',
          src: 'auto-responder/easy-email-builder-illus.svg',
          alt: 'Email can be eaily build with auto responder'
        },
        {
          title: 'Personalised Response',
          description:
            'Notifications can be personalised to include fields from the submissions. Make your users feel unique with messages which seem to be coming from actual humans and not a bot.',
          src: 'auto-responder/personalised-response.svg',
          alt: 'Have a personalised respose to end user'
        },
        {
          title: 'Realtime Tracking',
          description:
            'Monitor how people are interacting with your auto-response. Analyse useful metrics like open rate and link clicks to get insights into users behaviour. Use this data to make changes to your communication.',
          src: 'auto-responder/realtime-tracking-illus.svg',
          alt: 'Track your forms in real time'
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(Math.random() * (randomTestimonials.length - 2))
    randomTestimonials = randomTestimonials.slice(randIndex,  randIndex + 2);
    return {randomTestimonials}
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
.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}
@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
