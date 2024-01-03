<template>
  <div>
    <comparision-hero
      heading="Switch to <span class='hglight'>Formester</span> and craft interactive web forms – Perfect Alternative to Microsoft Forms"
      description="Ditch the dry design and limited integrations of Microsoft Forms. Optimise your data collection with beautiful, personalised forms that captivate audiences, streamline orders, and automate workflows like magic. <span class='hglight'>Forget coding headaches - our intuitive drag-and-drop interface empowers everyone to be a form-building pro.</span>"
      imgLink="formester-vs-microsoft-forms/formester-vs-mirosoft-forms-hero-image"
      imgAlt="Formester vs Microsoft Forms"
    />

    <section class="container my-5 py-5">
      <div
        class="d-flex flex-column align-items-center justify-content-center horizontal__padding"
      >
        <h2 class="section__heading">Formester vs Microsoft Forms</h2>
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
              src="/comparision/formester-vs-microsoft-forms/microsoft-forms-ss.png"
              class="img-fluid screenshot microsoft-forms-ss"
            />
            <p class="mt-3">
              Microsoft Forms provides a user-friendly platform for building
              basic forms and surveys. It's perfect for quick data collection in
              familiar Microsoft environments, but has limited capabilities for
              projects requiring extensive customization, complex logic, or
              deeper integrations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <comparision-table
      heading="Feature Comparision"
      description="Let’s have a look at the detailed feature comparison between Formester and Microsoft Forms to help you pick the perfect form builder"
      :headers="['Fomester', 'Microsoft Forms']"
      :comparisions="comparisions"
    />

    <section class="container my-5 py-5">
      <div class="container horizontal__padding">
        <div class="row my-5">
          <div
            class="col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start"
          >
            <h2 class="section__heading">
              Why prefer Formester over Microsoft Forms?
            </h2>
            <p class="section__subtitle mt-3">
              Although Microsoft Forms is a popular tool that works well within
              Microsoft Suite, it is more suitable for simple forms or surveys.
              <span class="hglt-text">
                It has many limitations like limited question types, restricted
                logic rules and no third-party integrations that make it
                unsuitable for complex forms.
              </span>
            </p>
            <p class="section__subtitle mt-3">
              <span class="hglt-text">
                Formester, on the other hand, offers advanced form building
                features like Conditional Logic, AI Powered Spam Protection,
                HTML Form Backend and Payment Processing.
              </span>
              Formester is the perfect choice if you require professional
              looking online forms with advanced features.
            </p>
          </div>
          <div
            class="col-lg-5 d-flex align-items-center justify-content-center"
          >
            <nuxt-img
              src="/comparision/formester-vs-microsoft-forms/formester-and-microsoft-forms-direction.svg"
              alt="Formester form building with drag and drop interface"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </section>

    <AdvantageSection
      heading="5 Advantages of Formester over Microsoft Formss"
      :features="advantageOfFomesterOverGoogleForm"
    />

    <Testimonial :testimonials="randomTestimonials" />

    <section class="container text-center">
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
          otherForm: 'Yes',
        },
        {
          title: 'Professional Deisgned Templates',
          formester: '100+',
          otherForm: '16',
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
            'Limited customisation ability to only add pictures or logos.',
        },
        {
          title: 'File Upload',
          formester: 'Yes',
          otherForm: 'Limited',
        },
        {
          title: 'White Labeling',
          formester: 'Yes',
          otherForm: 'Limited',
        },
        {
          title: 'Integrations',
          formester: 'Multiple Third Party Integrations',
          otherForm: 'Limited to Microsoft Suite',
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
          formester: 'Advanced Analytics with Data Breakdown',
          otherForm: 'Basic reporting with Charts and Graphs',
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
        {
          title: 'Collaboration',
          formester:
            'Real-time multi user collaboration with access control and analytics.',
          otherForm: 'Paid Feature',
        },
        {
          title: 'Captcha',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'E-Signature Support',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Drag & Drop Interface',
          formester: 'Yes',
          otherForm: 'No',
        },
        {
          title: 'Spam Protection',
          formester:
            'AI Powered Spam Protection along with Adaptive Spam Protection',
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
          title: 'Comprehensive Analytics',
          description:
            'Analytics and reporting with actionable insights and data visualisation.',
          imageSrc: 'icons/formester-vs-google-form/robust-analytics.svg',
          altText: 'Analytics',
        },
        {
          title: 'Conditional Logic',
          description:
            'Conditional logic and conditional auto-responder for complex forms.',
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
          title: 'Third-Party Integration',
          description:
            'Automate your workflow with integrations like Notion, Wordpress, Stripe, Slack etc.',
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
        url: 'https://formester.com/formester-vs-microsoft-forms/',
        title:
          'Formester vs Microsoft Forms | Best Microsoft Forms Alternative',
        description:
          'Effortlessly craft captivating web forms with Formester - Detailed feature comparison of Formester and Microsoft Forms!',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with formester vs microsoft-forms page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with formester vs microsoft-forms page image alt
        keywords: [
          'microsoft-forms alternative',
          'microsoft-forms alternative free',
          'microsoft-forms competitor',
          'free alternative to microsoft-forms',
          'microsoft-forms alternative open source	',
          'microsoft-forms alternative wordpress',
          'microsoft-forms alternatives free',
          'microsoft-forms open source alternative',
          'best microsoft-forms alternative',
          'microsoft-forms wordpress alternative',
          'microsoft-forms alternative reddit',
          'microsoft-forms alternative for wordpress',
          'open source microsoft-forms alternative',
          'microsoft-forms alternative free reddit',
          'microsoft-forms similar free',
          'microsoft-forms equivalent',
          'wordpress microsoft-forms alternative',
          'free microsoft-forms alternatives',
          'free alternative microsoft-forms',
          'microsoft-forms like open source',
          'similar to microsoft-forms free',
          'privacy focused alternatives to microsoft-forms',
          'free microsoft-forms alternative with conditional formatting',
          'open source microsoft-forms alternatives',
          'forms',
          'web forms',
          'formester',
          'online forms',
          'online web forms',
          'microsoft-forms wufoo alternatives',
          'cheaper microsoft-forms alternative',
          'easier alternatives to microsoft-forms',
          'paid alternatives to microsoft-forms',
          'private alternatives to microsoft-forms',
          'microsoft-forms alternate thank you pages',
          'microsoft-forms alternates commerce',
          'microsoft-forms alternatives cheaper',
          'microsoft-forms alternative quiz',
          'better microsoft-forms alternatives',
          'completele free alternatives to microsoft-forms',
          'rank alternatives microsoft-forms',
          'microsoft-forms alternative for gravity forms',
          'microsoft-forms alternative for registration',
          'microsoft-forms alternative squarespace',
          'microsoft-forms alternative with branching',
          'microsoft-forms cheaper alternatives',
          'microsoft-forms wordpress alternative',
          'microsoft-forms alternative free reddit',
          'microsoft-forms alternative deutsch',
          'free alternatives to microsoft-forms',
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
      title: 'Formester vs Microsoft Forms | Best Microsoft Forms Alternative',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/formester-vs-microsoft-forms/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Formester vs Microsoft Forms | Best Microsoft Forms Alternative',
      description:
        'Effortlessly craft captivating web forms with Formester - Detailed feature comparison of Formester and Microsoft Forms!',
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

.microsoft-forms-ss {
  border: 4px solid #c6fbfe;
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
