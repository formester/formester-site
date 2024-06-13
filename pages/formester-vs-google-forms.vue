<template>
  <div>
    <comparision-hero
      heading="Switch to <span class='hglight'>Formester</span> and build beautiful online forms – The Best Alternative to Google Forms"
      description="Tired of Google Forms's bland interface and lack of templates? Formester is here to unleash your inner form-building genius! Craft stunning, on-brand forms that capture attention, collect data, process orders and automate tasks like a pro. No coding required thanks to our Drag and Drop Interface!"
      imgLink="formester-vs-google-form/formester-vs-google-form-hero-image"
      imgAlt="Fomester vs Google Forms"
    />

    <section class="container my-5 py-5">
      <div
        class="d-flex flex-column align-items-center justify-content-center horizontal__padding"
      >
        <h2 class="section__heading">Formester vs Google Forms</h2>
        <div class="d-flex flex-column flex-md-row gap-10 mt-4">
          <div class="d-flex flex-column">
            <nuxt-img
              src="/comparision/formester-vs-google-form/formester-ss.png"
              class="img-fluid screenshot formester-ss"
            />
            <p class="mt-3">
              Formester is an online form builder that can be used to build
              Forms, Surveys, Quizzes and Polls. It is a no-code tool with
              robust data analytics and personalisation features. Formester has
              AI powered Spam Protection along with multiple integrations to
              automate workflow.
            </p>
          </div>
          <div class="d-flex flex-column">
            <nuxt-img
              src="/comparision/formester-vs-google-form/google-form-ss.png"
              class="img-fluid screenshot google-form-ss"
            />
            <p class="mt-3">
              Google Forms is a free web form builder. It can be used to create
              basic surveys and questionnaires with ease, suitable for casual
              gatherings and simple data collection. Google forms is a vastly
              popular tool but has limited design options, integrations and
              functionality.
            </p>
          </div>
        </div>
      </div>
    </section>

    <comparision-table
      heading="Feature Comparision"
      description="Let’s have a look at the detailed feature comparison between Formester and Google Forms to help you pick the right option based on your form building needs."
      :headers="['Fomester', 'Google Form']"
      :comparisions="comparisions"
    />

    <section class="container my-5 py-5">
      <div class="container horizontal__padding">
        <div class="row my-5">
          <div
            class="col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start"
          >
            <h2 class="section__heading">
              Why prefer Formester over Google Forms?
            </h2>
            <p class="section__subtitle mt-3">
              Although Google forms is a free and popular tool for form
              building, it is more suitable for students, small surveys or
              personal use. The
              <span class="hglt-text">
                design and personalization options are very limited
              </span>
              with only a handful of templates available in their library.
            </p>
            <p class="section__subtitle mt-3">
              Formester on the other hand, offers advanced form building
              features like
              <span class="hglt-text">
                Conditional Logic, Workflow Automation, HTML Form Backend and
                Payment Processing.
              </span>
              Formester is the ideal choice for businesses and individuals that
              require professional looking online forms with advanced features.
            </p>
          </div>
          <div
            class="col-lg-5 d-flex align-items-center justify-content-center"
          >
            <nuxt-img
              src="/comparision/formester-vs-google-form/formester-and-google-form-direction.svg"
              alt="Formester form building with drag and drop interface"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </section>

    <AdvantageSection
      heading="5 Advantages of Formester over Google Forms"
      :features="advantageOfFomesterOverGoogleForm"
    />

    <Testimonial :testimonials="randomTestimonials" />

    <section class="container text-center mb-5">
      <h2 class="section__heading">Other Comparisons</h2>
      <div class="row mt-4 px-2">
        <RelatedArticleCard
          v-for="(relatedComparison, index) in relatedComparisons"
          :key="index"
          :article="relatedComparison"
          class="col-lg-4 related-article-card"
        />
      </div>
    </section>

    <CallToActionSection />
  </div>
</template>

<script>
import AdvantageSection from '@/components/comparision/AdvantageSection.vue'
import ComparisionHero from '@/components/comparision/ComparisionHero.vue'
import Testimonial from '@/components/Testimonial.vue'

import { fetchRandomTestimonials } from '@/utils/getTestimonials.js'
// MetaTags
import getSiteMeta from '../utils/getSiteMeta'

export default {
  components: { AdvantageSection, Testimonial, ComparisionHero },
  data() {
    return {
      comparisions: [
        {
          title: 'HTML Form Backend Service',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Professional Deisgned Templates',
          formester: '100+',
          otherForm: '15',
        },
        {
          title: 'Online Order and Payment Processing',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Form Design and Customization',
          formester:
            'Customisation capability with complete control over the look, feel, background buttons, question types and font etc.',
          otherForm:
            'Limited cutomisation ability to only add/change header image.',
        },
        {
          title: 'File Upload',
          formester: 'Yes',
          otherForm: 'Restricted',
        },
        {
          title: 'White Labeling',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Integrations',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Conditional Logic',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Conditional Responder',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Mobile Optimised Forms',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Reporting and Analytics',
          formester: 'Advanced Analytics with Actionable Insights',
          otherForm: 'Basic',
        },
        {
          title: 'Available Offline',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'E-Signature Support',
          formester: 'Yes',
          otherForm: 'No',
        },
      ],
      relatedComparisons: [
        {
          title: 'Formester vs Forms App',
          coverImg: '/img/formester-vs-forms-app.png',
          coverImgAlt: 'Formester vs Forms App',
          link: { name: 'formester-vs-forms-app' },
          type: 'comparison',
        },
        {
          title: 'Formester vs Paperform',
          coverImg: '/img/formester-vs-paperform.png',
          coverImgAlt: 'Formester vs Paperform',
          link: { name: 'formester-vs-paperform' },
          type: 'comparison',
        },
        {
          title: 'Formester vs Zoho Form',
          coverImg: '/img/formester-vs-zoho-form.png',
          coverImgAlt: 'Formester vs Zoho Form',
          link: { name: 'formester-vs-zoho-form' },
          type: 'comparison',
        },
      ],
      advantageOfFomesterOverGoogleForm: [
        {
          title: 'Payment Processing',
          description: 'Collect online orders and accept payments securely.',
          imageSrc: 'icons/formester-vs-google-form/payment-processing.svg',
          altText: 'Payment',
        },
        {
          title: 'Robust Analytics',
          description:
            'Comprehensive analytics and reporting with actionable insights.',
          imageSrc: 'icons/formester-vs-google-form/robust-analytics.svg',
          altText: 'Analytics',
        },
        {
          title: 'Conditional Logic',
          description:
            'Conditional logic and auto-responder for personalised user experience.',
          imageSrc: 'icons/formester-vs-google-form/conditional-logic.svg',
          altText: 'Conditional Logic',
        },
        {
          title: 'AI Spam Protection',
          description:
            'Adaptive AI powered Spam Protection for secure online forms.',
          imageSrc: 'icons/formester-vs-google-form/ai-spam-protection.svg',
          altText: 'AI Spam Protection',
        },
        {
          title: 'Multiple Integration',
          description:
            'Automate your workflow with integrations like Notion, Stripe, Slack etc.',
          imageSrc: 'icons/formester-vs-google-form/multiple-integration.svg',
          altText: 'Integrations',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/formester-vs-google-forms/',
        title: 'Google Forms Best Alternative | Switch to Formester',
        description:
          'Switch to Formester and break free from Google Forms limitations. Craft professional forms with advanced features like conditional logic, analytics, and payment processing. Try for free!',
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
        keywords: [
          'google-form alternative',
          'google-form alternative free',
          'google-form competitor',
          'free alternative to google-form',
          'google-form alternative open source	',
          'google-form alternative wordpress',
          'google-form alternatives free',
          'google-form open source alternative',
          'best google-form alternative',
          'google-form wordpress alternative',
          'google-form alternative reddit',
          'google-form alternative for wordpress',
          'open source google-form alternative',
          'google-form alternative free reddit',
          'google-form similar free',
          'google-form equivalent',
          'wordpress google-form alternative',
          'free google-form alternatives',
          'free alternative google-form',
          'google-form like open source',
          'similar to google-form free',
          'privacy focused alternatives to google-form',
          'free google-form alternative with conditional formatting',
          'open source google-form alternatives',
          'forms',
          'web forms',
          'formester',
          'online forms',
          'online web forms',
          'google-form wufoo alternatives',
          'cheaper google-form alternative',
          'easier alternatives to google-form',
          'paid alternatives to google-form',
          'private alternatives to google-form',
          'google-form alternate thank you pages',
          'google-form alternates commerce',
          'google-form alternatives cheaper',
          'google-form alternative quiz',
          'better google-form alternatives',
          'completele free alternatives to google-form',
          'rank alternatives google-form',
          'google-form alternative for gravity forms',
          'google-form alternative for registration',
          'google-form alternative squarespace',
          'google-form alternative with branching',
          'google-form cheaper alternatives',
          'google-form wordpress alternative',
          'google-form alternative free reddit',
          'google-form alternative deutsch',
          'free alternatives to google-form',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  async asyncData() {
    const randomTestimonials = await fetchRandomTestimonials()
    return { randomTestimonials }
  },
  head() {
    return {
      title: 'Google Forms Best Alternative | Switch to Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/formester-vs-google-forms/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Google Forms Best Alternative | Switch to Formester',
      description:
        'Switch to Formester and break free from Google Forms limitations. Craft professional forms with advanced features like conditional logic, analytics, and payment processing. Try for free!',
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delaware',
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
      },
    }
  },
}
</script>

<style scoped>
/* HERO */
.hero__image {
  padding-left: 30px;
}

.section__heading {
  font-size: var(--ft-df-heading);
  font-weight: 700;
  line-height: 60px;
}

.section__subtitle {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

.screenshot {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

.formester-ss {
  border: 4px solid #dbcffe;
}

.google-form-ss {
  border: 4px solid #dcdcdc;
}

.gap-10 {
  gap: 72px;
}

.hglt-text {
  font-weight: 500;
  color: var(--clr-primary);
}

@media (max-width: 768px) {
  .section__heading {
    line-height: 52px;
    font-size: 2rem;
  }
}
</style>
