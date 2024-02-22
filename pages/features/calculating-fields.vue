<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">
              Simplify payments with Calculating Fields
            </h1>
            <p class="hero__subheading mt-3">
              Create online forms that perform real-time calculations. Automate
              complex calculations, generate dynamic scores, and deliver
              personalized experience with our calculation forms
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
            <nuxt-img
              src="/features/calculation/calculation.svg"
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
          <h2 class="section__heading">Calculation Forms for your Business</h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-4 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
          <h2 class="section__heading">Benefits of Calculating Fields</h2>
          <p>
            Efficiency, precision, and enhanced productivity at your fingertips
          </p>
        </div>

        <div class="row mt-md-5">
          <div class="col-xs-12 col-md-6" v-for="(benefit, idx) in benefits" :key="idx">
            <div
              class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
            >
              <nuxt-img
                :src="`/icons/${benefit.imageSrc}`"
                class="img-fluid"
                style="width: 69px"
                :alt="benefit.altText"
                loading="lazy"
              />
              <h4 class="sub__section-heading mt-4">{{ benefit.title }}</h4>
              <p class="subheading__text">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SimpleStepsCreate
      heading="How to add a calculating fields in 3 simple steps"
      :steps="steps"
      :stepCount="steps.length"
    />
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
import SimpleStepsCreate from '../../components/features/SimpleStepsCreate'
import { fetchRandomTestimonials } from '@/utils/getTestimonials.js'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    SimpleStepsCreate,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/calculating-fields/',
        title: 'Calculating Fields - Formester',
        description:
          'Dynamic Forms to Perform Real-time Complex Calculations | Dynamic Scores, Personalized & Interactive Form Experiences - Sign up now.',
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
      title: 'Calculating Fields - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/calculating-fields/',
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
          name: 'Calculating Fields - Formester',
          description:
            'Dynamic Forms to Perform Real-time Complex Calculations | Dynamic Scores, Personalized & Interactive Form Experiences - Sign up now.',
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
              item: 'https://formester.com/features/calculating-fields/',
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
          title: 'Loan Calculators',
          description:
            'Enable users to input loan amount, interest rate, and loan duration, and automatically calculate monthly payments. This is beneficial for financial institutions or lending platforms.',
          src: 'calculation/loan-preview.png',
          alt: 'Point values assigned to answer choices are automatically calculated, simplifying the scoring process for quizzes, assessments, and interactive forms.',
        },
        {
          title: 'Quiz Score Calculations',
          description:
            'Design quizzes with assigned point values for each question. The form dynamically calculates the total score based on user responses, providing instant feedback. Useful for assessments like tests, surveys, and training modules.',
          src: 'calculation/quiz-preview.png',
          alt: 'As respondents interact with the form, calculations are performed instantly, providing instant feedback and dynamic scoring based on their inputs.',
        },
        {
          title: 'E-commerce Order Calculation',
          description:
            'Improve the shopping experience on e-commerce websites by creating calculation forms for users to input quantities and prices of products, automatically calculating the total order cost.',
          src: 'calculation/order-preview.png',
          alt: 'Calculation Fields are utilized with powerful conditional logic to perform dynamic calculations based on specific conditions.',
        },
        {
          title: 'BMI Calculators',
          description:
            'Health and fitness businesses can design forms that allow users to input their height and weight, automatically calculating their Body Mass Index (BMI).',
          src: 'calculation/bmi-preview.png',
          alt: 'Scores are automatically generated based on specific criteria, enabling assessment of performance, result evaluation, and personalized feedback.',
        },
        {
          title: 'Survey Rating Averages',
          description:
            'Implement forms for surveys where users provide ratings to different questions. Automatically calculate and display the average rating, providing valuable insights for businesses and researchers.',
          src: 'calculation/survey-preview.png',
          alt: 'Prices and totals are seamlessly calculated, ensuring accurate pricing information. Costs are dynamically adjusted based on selected options, creating optimized shopping baskets or order forms for hassle-free transactions.',
        },
      ],
      benefits: [
        {
          title: 'Automated Calculation',
          description:
            'Automate complex calculations, eliminating the need for manual calculations. This saves time and ensures accuracy.',
          imageSrc: 'automated-calculation.jpg',
          altText: 'icon showing calculation',
        },
        {
          title: 'Real-Time Results',
          description:
            'Provide immediate feedback and enhance user experience by allowing respondents to instantly check the results of their inputs.',
          imageSrc: 'real-time-results.jpg',
          altText: 'icon showing a graph, that displays the real time results',
        },
        {
          title: 'Advanced Form Logic',
          description:
            'Add advanced form logic, including conditional calculations and dynamic field interactions for creating personalized forms.',
          imageSrc: 'advanced-form-logic.jpg',
          altText: 'icon showing form',
        },
        {
          title: 'Streamlined Pricing and Data',
          description:
            'Calculation Fields simplify price calculations, generate totals, and automate data handling for efficient analysis and reporting.',
          imageSrc: 'streamlined-pricing-and-data-handling.jpg',
          altText: 'icon showing storage for handling data',
        },
      ],
      steps: [
        {
          title: 'Sign Up',
          description:
            'Sign up for a free account on formester to build an online form or quiz. You can also select any template from our pre-designed templates library.',
          imgSrc: '/features/calculation-field-in-action/step1.svg',
          imgAlt: 'Create your form Using Formester',
        },
        {
          title: 'Add the Calculation Field',
          description:
            'In the form builder, drag and drop the calculation field into your form. Customize the calculations with chosen fields, math operations, and conditional logic for customized results.',
          imgSrc: '/features/calculation-field-in-action/step2.svg',
          imgAlt: 'Add Calculation Field',
        },
        {
          title: 'Publish the form',
          description:
            'Use the preview mode to ensure accurate calculations. Once done, deploy the form to deliver dynamic and personalized calculation forms to your respondents.',
          imgSrc: '/features/calculation-field-in-action/step4.svg',
          imgAlt: 'Validate and Personalize with Calculation Field',
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await fetchRandomTestimonials()
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

.sub__section-heading{
  font-size: 28px;
  line-height: 44px;
  font-weight: 700;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
