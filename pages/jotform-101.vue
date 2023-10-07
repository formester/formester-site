<template>
  <div>
    <div class="feature_container">
      <div class="feature__hero">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center align-items-center text-center mt-5"
          >
            <h1 class="section__heading pt-3">
              Jotform 101 - Your Complete Guide to Form Building and Surveys
              with Jotform!
            </h1>
            <p class="hero__subheading mt-3">
              Unlock the full potential of form building with Jotform. At
              Formester, we're committed to providing you with a comprehensive
              guide to help you navigate the world of form creation. Discover
              the features, tips, and tricks that make Jotform a top choice for
              form builders!
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-5">
            <nuxt-img
              src="/jotform101/jotform101-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
              sizes="40vw"
            />
          </div>
        </div>
      </div>
    </div>

    <KeyFeatures
      heading="Key Features of Jotform"
      :key-features="jotformKeyFeatures"
    />
    <StandOutFeatureSection
      heading="The Distinctive Power of Jotform: What Makes Jotform Stand out?"
      :features="jotformStandOutFeatures"
    />
    <PopularUseCase
      heading="Popular Use-Cases of Jotform"
      :useCases="jotformUseCases"
    />
    <Limitations
      heading="Limitations of Jotform"
      :limitations="jotformLimitations"
    />
    <FormBuilderComparisionTable
      heading="Comparing Jotform with Other Leading Form Builders"
    />
    <WhyChooseFormester />
    <FAQwithCategories :faqQuestions="jotformFaqs" />
    <CallToActionSection
      :content="{
        heading: 'Start Your Formester Journey Today',
        subheading:
          'Start with a Free Sign up and experience the power of Formester firsthand',
      }"
    />
  </div>
</template>

<script>
import KeyFeatures from '../components/competitors/KeyFeatures.vue'
import StandOutFeatureSection from '../components/competitors/StandOutFeatureSection.vue'
import PopularUseCase from '../components/competitors/PopularUseCase.vue'
import Limitations from '../components/competitors/Limitations.vue'

import FormBuilderComparisionTable from '../components/form-builders-comparision-table.vue'
import WhyChooseFormester from '../components/competitors/why-choose-formester.vue'
import CallToActionSection from '../components/CallToActionSection.vue'
import FAQwithCategories from '../components/FAQwithCategories.vue'

import getSiteMeta from '@/utils/getSiteMeta'
import jotformFaqs from '@/faqs/jotform-101-faqs'

export default {
  components: {
    KeyFeatures,
    StandOutFeatureSection,
    PopularUseCase,
    Limitations,
    WhyChooseFormester,
    FormBuilderComparisionTable,
    CallToActionSection,
    FAQwithCategories,
  },
  setup() {
    const jotformKeyFeatures = [
      {
        title: 'Customization Options',
        description:
          'With Jotform, users get the option to customize their forms to match their brand and design preferences.',
        img: '/jotform101/key-features/customization-options.svg',
      },
      {
        title: 'Simplified Form Building',
        description:
          'Jotform lets its users create professional forms effortlessly with an intuitive and user-friendly interface. No coding knowledge required!',
        img: '/jotform101/key-features/simplified-form-building.svg',
      },
      {
        title: 'Variety of Form Fields',
        description:
          'Jotform offers a wide range of form field options such as multiple choice, dropdowns, checkboxes, and file uploads.',
        img: '/jotform101/key-features/variety-of-form-fields.svg',
      },
      {
        title: 'Integrations',
        description:
          'Jotform integrates seamlessly with popular third-party apps and services.',
        img: '/jotform101/key-features/integrations.svg',
      },
      {
        title: 'Mobile Responsiveness',
        description:
          "Jotform's forms are mobile-friendly and adapt to different screen sizes, providing an optimal user experience.",
        img: '/jotform101/key-features/mobile-responsiveness.svg',
      },
      {
        title: 'Collaboration and Sharing',
        description:
          "Jotform's forms are mobile-friendly and adapt to different screen sizes, providing an optimal user experience.",
        img: '/jotform101/key-features/collaboration-and-sharin.svg',
      },
      {
        title: 'Workflow Automation',
        description:
          "Jotform's workflow automation capabilities include setting up email notifications, autoresponders, and conditional actions to improve efficiency and automate repetitive tasks.",
        img: '/jotform101/key-features/workflow-automation.svg',
      },
      {
        title: 'Security and Compliance',
        description:
          'Jotform prioritizes the security of user data and provides features like SSL encryption, GDPR compliance, and HIPAA compliance for handling sensitive information securely.',
        img: '/jotform101/key-features/security-and-compliance.svg',
      },
    ]

    const jotformStandOutFeatures = [
      {
        title: 'Form Templates',
        description:
          'Access professionally designed templates for various industries and customize them to fit your needs. As of now, Jotform has a collection of over 10K Templates!',
        img: '/jotform101/what-makes-jotform-stand-out/form.svg',
      },
      {
        title: 'Advanced Reporting & Data Management',
        description:
          'Jotform lets its users generate customized reports with visual analytics for in-depth data analysis. Moreover, it also offers real-time form response tracking, data export options, customizable reports, and integration with cloud storage services.',
        img: '/jotform101/what-makes-jotform-stand-out/report.svg',
      },
      {
        title: 'Mobile Apps',
        description:
          'Access Jotform on the go with mobile apps for iOS and Android.',
        img: '/jotform101/what-makes-jotform-stand-out/mobile.svg',
      },
      {
        title: 'Offline Data Collection',
        description:
          "Collect data even without an internet connection using Jotform's offline mode feature.",
        img: '/jotform101/what-makes-jotform-stand-out/chart.svg',
      },
      {
        title: 'Form Widgets and Apps',
        description:
          'Jotform also provides advanced widgets and apps for increasing form efficiency and functionality.',
        img: '/jotform101/what-makes-jotform-stand-out/widgets.svg',
      },
      {
        title: 'Form Calculations',
        description:
          'Forms with Jotform can be set-up to perform real-time calculations for interactive and dynamic user experiences.',
        img: '/jotform101/what-makes-jotform-stand-out/calculation.svg',
      },
      {
        title: 'Payment Integration',
        description:
          'Jotform offers a way to seamlessly collect payments with a simple web-form using built-in payment gateway integrations.',
        img: '/jotform101/what-makes-jotform-stand-out/payment.svg',
      },
      {
        title: 'Excellent Customer Support',
        description:
          'Jotform provides reliable customer support through various channels, including a help center, community forum, an extensive blog resource and a responsive support team.!',
        img: '/jotform101/what-makes-jotform-stand-out/support.svg',
      },
    ]

    const jotformUseCases = [
      {
        title: 'Event Registration',
        description:
          "Simplify event planning and streamline the registration process with Jotform's user-friendly forms.",
        points: [
          'Capture attendee information',
          'Manage RSVPs',
          'Event Feedbacks',
        ],
        img: '/jotform101/popular-use-case/event-registration.svg',
      },
      {
        title: 'Surveys and Feedback',
        description:
          "Gather valuable insights and feedback from your audience using Jotform's customizable survey forms.",
        points: [
          'Create Engaging Questionnaires',
          'Analyse Responses',
          'Make Data-driven Decisions',
        ],
        img: '/jotform101/popular-use-case/surveys-and-feedbacks.svg',
      },
      {
        title: 'Employment & Hiring',
        description:
          "Streamline the hiring process with Jotform's intuitive employment forms.",
        points: [
          'Collecting Applicant Details & Resumes',
          'Onboarding Forms',
          'Engagement Surveys',
        ],
        img: '/jotform101/popular-use-case/employment-and-hiring.svg',
      },
      {
        title: 'Online Orders and Payments',
        description:
          "Simplify event planning and streamline the registration process with Jotform's user-friendly forms.",
        points: [
          'Set up Order Forms ',
          'Manage Product Catalogues',
          'Process Payments Securely',
        ],
        img: '/jotform101/popular-use-case/online-orders-and-payments.svg',
      },
      {
        title: 'Jotform in Education and Training',
        description:
          "Enhance the learning experience with Jotform's educational forms.",
        points: ['Create quizzes', 'Course Evaluations', 'Registration Forms'],
        img: '/jotform101/popular-use-case/jotform-in-education-and-training.svg',
      },
      {
        title: 'Healthcare and Medical Forms',
        description:
          'Ensure compliance with data privacy regulations while efficiently managing patient information.',
        points: [
          'Patient Registration',
          'Appointment Scheduling',
          'Medical History Collection',
        ],
        img: '/jotform101/popular-use-case/healthcare-and-medical-forms.svg',
      },
    ]

    const jotformLimitations = [
      {
        title: 'Learning Curve',
        description:
          'Jotform offers a wide range of features and functionalities, which may require some time to master, especially for users new to form building.',
        img: '/jotform101/limitations/learning-curve.svg',
      },
      {
        title: 'Pricing Tiers',
        description:
          'While Jotform offers a free version with limited features, some advanced functionalities and higher usage levels are available through paid plans.',
        img: '/jotform101/limitations/pricing-tiers.svg',
      },
      {
        title: 'Customization Constraints',
        description:
          'While Jotform provides a range of customization options, there may be certain design limitations or constraints to consider for highly specialized branding needs.',
        img: '/jotform101/limitations/customization-constraints.svg',
      },
      {
        title: 'Restrictions and Upgrading',
        description:
          'There is no way to purchase only required additional features. Users have to upgrade to a higher plan to get access to greater limits of a particular feature.',
        img: '/jotform101/limitations/restrictions-and-upgrading.svg',
      },
    ]

    const meta = computed(() => {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/jotform-101/',
        title: "Jotform 101: All About Jotform's Forms by Formester!",
        description:
          'Discover everything about form building using Jotform: Presented by Formester, uncover Jotform’s key features, FAQs, limitations & more!',
        mainImage: 'https://formester.com/jotform101-hero-section.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester vs jotform',
          'jotform form builder',
          'form builder',
          'jotform faqs',
          'What is a jotform used for?',
          'is jotform free to use?',
          'Which is better Jotform or Google Forms?',
          'Is jotform a good company?',
          'limitations of jotform',
          'is jotform free or paid?',
          'jotform pricing',
          'jotform examples',
          'jotform use cases',
          'form creation',
          'web forms',
          'digital surveys',
          'form design',
          'form templates',
          'data collection',
          'online questionnaire',
          'survey tool',
          'custom forms',
          'form generator',
          'form software',
          'online data entry',
          'form building',
          'form creator',
          'form management',
          'form solutions',
          'digital forms',
          'form builder app',
          'form making',
          'responsive forms',
          'form design tool',
          'electronic forms',
          'online inquiry form',
          'form builder software',
          'online form creator',
          'online form builder',
        ].join(','),
      }
      return getSiteMeta(metaData)
    })

    const faqsSchema = computed(() => {
      const allFaqs = []

      jotformFaqs.forEach((c) => {
        if (c.faqs) {
          allFaqs.push(...c.faqs)
        }
      })

      // Generate the FAQ schema
      return allFaqs.map((faq) => {
        return {
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        }
      })
    })

    useHead({
      title: "Jotform 101: All About Jotform's Forms by Formester!",
      meta: meta,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/jotform-101/',
        },
      ],
    })

    useJsonld({
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: "Jotform 101: All About Jotform's Forms by Formester!",
          description:
            "Discover Jotform's full potential with Formester's guide. Unlock powerful form building features, tips & tricks!",
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
              name: 'Formester',
              item: 'https://formester.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Jotform 101: All About Jotform’s Forms by Formester!',
              item: 'https://formester.com/jotform101/',
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqsSchema.value,
        },
      ],
    })
    return {
      jotformFaqs: jotformFaqs,
      jotformKeyFeatures,
      jotformLimitations,
      jotformStandOutFeatures,
      jotformUseCases
    }
  },
}
</script>

<style></style>
