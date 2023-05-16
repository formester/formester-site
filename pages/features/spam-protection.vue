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
              >Get Started - it's Free</a
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
    <SpamPreventionTipsSection />
    <ThreeStepsCreateForm />
    <Testimonial 
      :testimonials="randomTestimonials"
    />
    <TemplateSection />
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
import TemplateSection from '../../components/TemplateSection.vue'

export default {
  components: { FeatureDetail, CallToActionSection, Testimonial, TemplateSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/spam-protection/',
        title: 'Spam Protection | Spam Protection in Web Form - Formester',
        description:
          'Looking for a spam protection solution for your web forms? Protect your web forms from spam with Formester. Say goodbye to unwanted submissions and improve your user experience. Try it now!',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with spam-protection page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with spam-protection page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Spam Protection | Spam Protection in Web Form - Formester',
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
        {
          title: 'IP/User-Agent Monitoring',
          description:'One of the most common kinds of malicious activity involves multiple submissions from a single source over a given period. At Formester, you get to track, monitor and update your web form settings to restrict such IPs and reduce spam occurrences.',
          src: 'spam-protection/ip-user-monitor.jpg',
        },
        {
          title: 'Honeypot Integration',
          description:'Honeypot acts as a trap to snare bots and spammers. It works by using a field that remains hidden from humans but visible to such annoyances. Web Forms at Formester can be set-up to be easily configured with Honeypot; ensuring security and convenience at one go!',
          src: 'spam-protection/honeypot-migration.jpg',
        },
        {
          title: 'Cloudflare Turnstile Integration',
          description:"Cloudflare's popular Turnstile allows for sending traffic through Cloudflare and operates, keeping the visitors free of the hassle and frustration that comes with the need for solving over-the-top CAPTCHA, using just a simple snippet of absolutely free code. At Formester, we use this integration to provide visitors with an abuse-free experience whilst eliminating data privacy concerns for confirming real visitors and providing seamless UX for the users.",
          src: 'spam-protection/cloudflare-integration.jpg',
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
