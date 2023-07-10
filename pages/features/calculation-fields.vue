<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Calculation Fields</h1>
            <p class="hero__subheading mt-3">
              Create dynamic forms that perform calculations in real-time,
              empowering you to automate complex calculations, generate dynamic
              scores, and deliver personalized, interactive experiences. Take
              your forms to the next level and unlock the true power of
              data-driven decision-making.
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
              src="@/assets/images/features/calculation/calculation.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div
          class="feature__heading d-flex align-items-center justify-content-center"
        >
          <h2 class="section__heading">How does Calculation Fields help?</h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
          <h2 class="section__heading">
            Unleash the Advantages of Calculation Fields
          </h2>
          <p>
            Efficiency, precision, and enhanced productivity at your fingertips
          </p>
        </div>

        <div class="templates mt-md-5">
          <div v-for="(benefit, idx) in benefits" :key="idx">
            <div
              class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
            >
              <img
                :src="require(`@/assets/images/icons/${benefit.imageSrc}`)"
                class="img-fluid"
                style="width: 69px"
                :alt="benefit.altText"
              />
              <h4 class="sub__section-heading mt-4">{{ benefit.title }}</h4>
              <p class="subheading__text">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CalculationInAction />
    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '../../components/TemplateSection.vue'
import CalculationInAction from '../../components/CalculationInAction.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    CalculationInAction,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/calculation/',
        title: 'Calculation - Formester',
        description:
          'Create dynamic forms that perform calculations in real-time, empowering you to automate complex calculations, generate dynamic scores, and deliver personalized, interactive experiences. Try Formester and engage your subscribers today! Sign up now.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester web forms with calculation',
          'Calculation',
          'Web forms Calculation',
          'Calculation for web forms',
          'calculation web forms',
          'calculation for web forms',
          'calculation feature for web forms',
          'web forms for customer support',
          'web forms productivity',
          'automate your workflow',
          'customized notifications',
          'form builder',
          'formester',
          'online forms',
          'online web forms',
          'formester web forms',
          'form creator',
          'form generator',
          'online form',
          'web form',
          'online forms',
          'web forms',
          'create form',
          'create forms',
          'frequently asked questions',
          'FAQ',
          'instant reply',
          'customized reply',
          'personalized emails',
          'personalized instant emails',
          'instant pre-written reply',
          'send a copy of responses to submitters',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Calculation - Formester',
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
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Calculation - Formester',
          description:
            'Create dynamic forms that perform calculations in real-time, empowering you to automate complex calculations, generate dynamic scores, and deliver personalized, interactive experiences. Try Formester and engage your subscribers today! Sign up now.',
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Features',
              item: 'https://formester.com/features',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Calculation',
              item: 'https://formester.com/features/calculation/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      features: [
        {
          title: 'Automated Score Calculation: Effortless Calculations',
          description:
            'Easily assign point values to answer choices and let Formester handle the calculations automatically. Streamline the process of scoring quizzes, assessments, or any other interactive form that requires scoring.',
          src: 'calculation/effortless-calculations.svg',
          alt: 'Point values assigned to answer choices are automatically calculated, simplifying the scoring process for quizzes, assessments, and interactive forms.',
        },
        {
          title: 'Real-Time Calculations: Deliver Instant Results',
          description:
            'Perform calculations on-the-fly as respondents interact with your form. Enable instant feedback and dynamic scoring based on their inputs.',
          src: 'calculation/deliver-instant-results.svg',
          alt: 'As respondents interact with the form, calculations are performed instantly, providing instant feedback and dynamic scoring based on their inputs.',
        },
        {
          title: 'Advanced Form Logic: Unlock Advanced Functionality',
          description:
            'Utilize powerful conditional logic within Calculation Fields to perform dynamic calculations based on specific conditions. Customize the behaviour of your forms and create personalized experiences for your respondents.',
          src: 'calculation/unlock-advanced-functionality.svg',
          alt: 'Calculation Fields are utilized with powerful conditional logic to perform dynamic calculations based on specific conditions.',
        },
        {
          title: 'Dynamic Score Generation: Create Interactive Forms',
          description:
            'Automatically generate dynamic scores based on specific criteria, allowing you to assess performance, evaluate results, and provide personalized feedback.',
          src: 'calculation/create-interactive-forms.svg',
          alt: 'Scores are automatically generated based on specific criteria, enabling assessment of performance, result evaluation, and personalized feedback.',
        },
        {
          title: 'Price Calculation: Hassle-Free Transactions',
          description:
            'Seamlessly calculate prices and totals within your forms using Calculation Fields. Provide accurate pricing information, dynamically adjust costs based on selected options, and create optimized shopping baskets or order forms.',
          src: 'calculation/hassle-free-transactions.svg',
          alt: 'Prices and totals are seamlessly calculated, ensuring accurate pricing information. Costs are dynamically adjusted based on selected options, creating optimized shopping baskets or order forms for hassle-free transactions.',
        },
        {
          title: 'Personalized Experiences: Offer Personalized Form Experience',
          description:
            "Customize form interactions by displaying calculated results, tailored recommendations, or dynamic content based on respondents' inputs.",
          src: 'calculation/offer-personalized-form-experience.svg',
          alt: "Calculated results, tailored recommendations, and dynamic content are displayed based on respondents' inputs, offering a personalized form experience.",
        },
      ],
      benefits: [
        {
          title: 'Automated Calculation',
          description:
            'The Calculation Field feature allows you to automate complex calculations, eliminating the need for manual calculations. This saves time and ensures accuracy.',
          imageSrc: 'automated-calculation.jpg',
          altText: 'icon showing calculation',
        },
        {
          title: 'Real-Time Results',
          description:
            'With real-time calculations, respondents can instantly see the results of their inputs. This provides immediate feedback and enhances the interactive experience.',
          imageSrc: 'real-time-results.jpg',
          altText: 'icon showing a graph, that displays the real time results',
        },
        {
          title: 'Advanced Form Logic',
          description:
            'The Calculation Field feature enables you to apply advanced form logic, such as conditional calculations and dynamic field interactions. This flexibility allows you to create sophisticated and personalized form experiences.',
          imageSrc: 'advanced-form-logic.jpg',
          altText: 'icon showing form',
        },
        {
          title: 'Streamlined Pricing and Data Handling',
          description:
            'Calculation Fields simplify price calculations, making it easy to generate totals, discounts, or taxes. Additionally, the feature facilitates efficient data handling by automatically calculating and storing important metrics for analysis and reporting.',
          imageSrc: 'streamlined-pricing-and-data-handling.jpg',
          altText: 'icon showing storage for handling data',
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(
      Math.random() * (randomTestimonials.length - 2)
    )
    randomTestimonials = randomTestimonials.slice(randIndex, randIndex + 2)
    return { randomTestimonials }
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
.templates {
  width: 100%;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.card {
  border-radius: 18px;
  border: none;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
