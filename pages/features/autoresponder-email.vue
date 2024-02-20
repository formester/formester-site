<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Autoresponder Email</h1>
            <p class="hero__subheading mt-3">
              Create and send out personalized replies automatically to your
              customers on form submission. Emails are easy to create using our
              intuitive email builder. You can create multiple conditional
              responses and customize the emails to be sent from your personal
              email account
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
              src="/features/auto-responder/auto-responder-message.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div
        class="row justify-content-center align-items-center text-center mt-5"
      >
        <div>
          <h2 class="section__heading">
            Automate Email Marketing for Your Business with Email Autoresponder
          </h2>
          <p class="hero__subheading">
            Unlock the Power of Automated Email Marketing for Your Business
          </p>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mt-md-5"
        >
          <div
            class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
            v-for="benefit in benefits"
            :key="benefit.title"
          >
            <nuxt-img
              style="width: 69px"
              :src="benefit.imgSrc"
              alt="Formester"
            />
            <h4 class="sub__section-heading mt-4">{{ benefit.title }}</h4>
            <p class="subheading__text">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div
          class="feature__heading d-flex align-items-center justify-content-center"
        >
          <h2 class="section__heading">
            Improve User Experience with Email Autoresponder
          </h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>

    <!-- <ApplicationOfWebForms /> -->
    <UseCaseFeatureShowcase
      heading="How does Autoresponder Email help your Business?"
      :features="helpingFeatures"
    />
    <SimpleStepsCreate
      heading="How to use autoresponder in 3 simple steps"
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

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import ApplicationOfWebForms from '../../components/ApplicationOfWebForms.vue'
import SimpleStepsCreate from '../../components/features/SimpleStepsCreate'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    ApplicationOfWebForms,
    SimpleStepsCreate,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/autoresponder-email/',
        title:
          'Set up Autoresponder Email | Formester',
        description:
          'Boost your email marketing with a personalised email autoresponder message. Try Formester and engage your subscribers today! Sign up now.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester web forms with autoresponder feature',
          'formester web forms with autorespond feature',
          'formester web form features autorespond',
          'Autoresponder',
          'Web forms Autoresponder',
          'Autoresponder for web forms',
          'Autoresponder web forms',
          'Autoresponder feature for web forms',
          'Autorespond feature for web forms',
          'Automate SMS after each form submission',
          'Automate emails after each form submission',
          'Automate email',
          'Automate SMS',
          'web forms for customer support',
          'Best Autoresponder Software in 2023',
          'autoresponder software solutions to implement for your own business',
          'web forms productivity',
          'How to add Autoresponder Web Forms to your website',
          'How to add Autoresponder to your Web Forms',
          'best way to create an auto responder when someone completes a web form',
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
      title:
        'Set up Autoresponder Email | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/autoresponder-email/',
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
          name: 'Set up Autoresponder Email | Formester',
          description:
            'Boost your email marketing with a personalised email autoresponder message. Try Formester and engage your subscribers today! Sign up now.',
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
              name: 'Auto Responder',
              item: 'https://formester.com/features/autoresponder-email/',
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
          title: 'White Label',
          description:
            'Use your company email address to make the emails look branded and professional.. You also get an option to choose between HTML and text-based emails.',
          src: 'auto-responder/white-label-illus.svg',
          alt: 'Get noticed by making the email personalized',
        },
        {
          title: 'Easy Email Builder',
          description:
            'Creating a captivating response has never been simpler. Our easy to use editor enables you to write compelling content. Add images, links or videos in a matter of a few minutes.',
          src: 'auto-responder/easy-email-builder-illus.svg',
          alt: 'Email can be eaily build with auto responder',
        },
        {
          title: 'Personalised Response',
          description:
            'Notifications can be personalized to include fields from the submissions. Automates email responses and makes the users feel unique with messages which seem to be coming from actual humans and not a bot.',
          src: 'auto-responder/personalised-response.svg',
          alt: 'Have a personalised respose to end user',
        },
        {
          title: 'Realtime Tracking',
          description:
            'Monitor how people are interacting with your auto generated email responses. Analyze useful metrics like open rate and link clicks to get insights into user behavior. Use this data for effective communication.',
          src: 'auto-responder/realtime-tracking-illus.svg',
          alt: 'Track your forms in real time',
        },
      ],
      benefits: [
        {
          title: 'Time-saving',
          description:
            'Save time and keep the customer engaged by automating repetitive tasks like welcome messages, onboarding communication and confirmation emails.',
          imgSrc: '/round-access-time.jpg',
        },
        {
          title: 'Lead generation',
          description:
            'Capture leads and grow your email list by offering incentives such as free e-books, whitepapers, or exclusive discounts.',
          imgSrc: '/leads.jpg',
        },
        {
          title: 'Customer Retention',
          description:
            'Retain customers by sending them automated follow-up emails after a purchase, ask for feedback or offer incentives for repeat purchases.',
          imgSrc: '/customer-support.jpg',
        },
      ],
      helpingFeatures: [
        {
          heading: 'Lead Nurturing and Conversion',
          description:
            'Implement an autoresponder series that is triggered when a user submits a lead generation form. This series can include personalized content, product information, and exclusive offers, nurturing leads and guiding them through the sales funnel. It helps in maintaining engagement and increasing the likelihood of conversion.',
          imgUrl: 'hr-solution/HelpingFeaturesForHr/automate-job.svg',
        },
        {
          heading: 'Customer Onboarding and Engagement',
          description:
            'Create an autoresponder email sequence for users who have recently signed up or made a purchase. This sequence can include welcome messages, onboarding tips, and resources to help customers get the most out of their purchase. Improving customer understanding and satisfaction can lead to long-term loyalty.',
          imgUrl: 'hr-solution/HelpingFeaturesForHr/leave-management.svg',
        },
        {
          heading: 'Survey and Feedback Analysis',
          description:
            'Use autoresponders to send follow-up emails containing surveys or feedback forms after a customer interaction, purchase, or support request. Analyzing the responses helps businesses understand customer satisfaction, identify areas for improvement, and make data-driven decisions to enhance their products or services.',
          imgUrl: 'hr-solution/HelpingFeaturesForHr/effortless-employee.svg',
        },
      ],
      steps: [
        {
          title: '',
          description:
            'Sign up for a free account on formester and create an online form or survey. You can also select any template from our pre-designed templates library.',
          imgSrc: '/features/three-steps-create-form/step1.svg',
        },
        {
          title: '',
          description:
            'Select the “automation” tab in the form building menu. Turn on the autoresponder option and create an email copy.',
          imgSrc: '/features/three-steps-create-form/step2.svg',
        },
        {
          title: '',
          description:
            'Share the form and wait for users to fill in the responses. Autoresponder emails will be sent out based on your set conditions.',
          imgSrc: '/features/three-steps-create-form/step3.svg',
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
@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
