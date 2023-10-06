<template>
  <div>
    <div class="feature_container">
      <div class="feature__hero">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center align-items-center text-center mt-5"
          >
            <h1 class="hero__heading pt-3">
              Designing Forms with <span class="hglt">Visual Brilliance!</span>
            </h1>
            <p class="hero__subheading mt-3">
              Unlock the true potential of form building with Typeform. At
              Formester, we're committed to providing you with a comprehensive
              guide to help you navigate the world of form creation. Discover
              the features, tips, and tricks that make Typeform a top choice for
              form builders!
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-5">
            <nuxt-img
              src="/typeform-101/typeform-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>

    <KeyFeatures
      heading="Key Features of Typeform"
      :keyFeatures="typeformKeyFeatures"
    />
    <StandOutFeatureSection
      heading="The Distinctive Power of Typeform: What Makes Typeform Stand out?"
      :features="typeformStandOutFeatures"
    />
    <PopularUseCase
      heading="Popular Use-Cases of Typeform"
      :useCases="typeformPopularUseCases"
      bootstrapColWidth="3"
    />
    <Limitations
      heading="Limitations of Typeform"
      :limitations="typeformLimitations"
    />
    <FormBuilderComparisionTable
      heading="Comparing Typeform with Other Leading Form Builders"
    />
    <WhyChooseFormester />
    <FAQwithCategories :faqQuestions="typeformFaqs" />
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

import FAQwithCategories from '../components/FAQwithCategories.vue'
import WhyChooseFormester from '../components/competitors/why-choose-formester.vue'
import CallToActionSection from '../components/CallToActionSection.vue'

import typeformFaqs from '@/faqs/typeform-101-faqs.js'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  components: {
    KeyFeatures,
    StandOutFeatureSection,
    PopularUseCase,
    Limitations,
    WhyChooseFormester,
    FormBuilderComparisionTable,
    FAQwithCategories,
    CallToActionSection,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/typeform-101/',
        title: "Typeform 101: All About Typeform's Forms by Formester!",
        description:
          "Discover everything about form building using Typeform: Presented by Formester, uncover Typeform's key features, FAQs, limitations & more!",
        mainImage: 'https://formester.com/typeform-101-hero-section.png',
        mainImageAlt:
          'screenshot showing the hero section of typeform 101 page',
        keywords: [
          'formester vs typeform',
          'typeform form builder',
          'form builder',
          'typeform faqs',
          'What is a Typeform used for?',
          'Is Typeform free to use?',
          'Which is better Typeform or Google Forms?',
          'Is Typeform a good company?',
          'limitations of typeform',
          'is typeform expensive?',
          'typeform pricing',
          'typeform examples',
          'typeform use cases',
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
        ],
      }
      return getSiteMeta(metaData)
    },
    faqsSchema() {
      const allFaqs = []

      this.typeformFaqs.forEach((c) => {
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
    },
  },
  head() {
    return {
      title: "Typeform 101: All About Typeform's Forms by Formester!",
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/typeform-101/',
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
          name: "Typeform 101: All About Typeform's Forms by Formester!",
          description:
            "Use Typeform to unleash your form-building powers. Formester provides a guide to exploring Typeform's capabilities, tips, and why it excels!",
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
              name: "Typeform 101: All About Typeform's Forms by Formester!",
              item: 'https://formester.com/typeform-101/',
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: this.faqsSchema,
        },
      ],
    }
  },
  data() {
    return {
      typeformKeyFeatures: [
        {
          title: 'Beautiful and Interactive Forms',
          description:
            'Typeform is renowned for its visually appealing and engaging form designs. You can create forms that are not just functional but also aesthetically pleasing, leaving a lasting impression on respondents.',
          img: 'typeform-101/key-features/beautiful-and-interactive-forms.svg',
        },
        {
          title: 'Conditional Logic',
          description:
            "Typeform allows you to set up conditional branching, where questions or sections of your form can change dynamically based on the respondent's previous answers. Ensure a personalized and relevant experience for each user!",
          img: 'typeform-101/key-features/conditional-logic.svg',
        },
        {
          title: 'Integration Capabilities',
          description:
            'Typeform seamlessly integrates with a wide range of third-party apps and services. This means you can connect your forms to your favorite tools for data collection, analysis, and automation.',
          img: 'typeform-101/key-features/integration-capabilities.svg',
        },
        {
          title: 'Real-time Analytics',
          description: 'Real-time Analytics',
          img: 'typeform-101/key-features/real-time-analytics.svg',
        },
        {
          title: 'Mobile-Optimized',
          description:
            "In today's mobile-centric world, Typeform ensures that your forms are not only responsive but also work flawlessly on various devices, including smartphones and tablets.",
          img: 'typeform-101/key-features/mobile-optimized.svg',
        },
        {
          title: 'Conversational Flow',
          description:
            "Typeform takes a conversational approach to forms, making the user feel like they're engaged in a dialogue rather than simply filling out a form. This keeps respondents more engaged and motivated to complete the survey.",
          img: 'typeform-101/key-features/conversational-flow.svg',
        },
        {
          title: 'Interactive Media',
          description:
            'Enhance your forms by embedding images, videos, and custom widgets. This feature allows you to create interactive and multimedia-rich surveys or questionnaires.',
          img: 'typeform-101/key-features/interactive-media.svg',
        },
        {
          title: 'Custom Branding',
          description:
            "Maintain your brand identity by customizing the look and feel of your forms. You can apply your logo, colors, and fonts to ensure consistency with your brand's visual style.",
          img: 'typeform-101/key-features/custom-branding.svg',
        },
        {
          title: 'Human-Centered Design',
          description:
            'Typeform is designed with the user experience in mind. Its user-friendly interface and intuitive form builder make it easy for both form creators and respondents to navigate and interact with forms.',
          img: 'typeform-101/key-features/human-centered-design.svg',
        },
      ],
      typeformStandOutFeatures: [
        {
          title: 'Visual Storytelling',
          description:
            "Elevate data collection with Typeform's visual storytelling, turning forms into engaging journeys that captivate respondents.",
          img: 'typeform-101/stand-out-features/visual-storytelling.svg',
        },
        {
          title: 'Conversation-Like Flow',
          description:
            "Typeform's unique conversational flow replaces traditional surveys with a friendly chat, guiding respondents through questions effortlessly.",
          img: 'typeform-101/stand-out-features/conversation-like-flow.svg',
        },
        {
          title: 'Seamless Integration',
          description:
            'Connect Typeform with your favorite tools and apps, streamlining your workflow effortlessly.',
          img: 'typeform-101/stand-out-features/seamless-integration.svg',
        },
        {
          title: 'Data-Driven Decisions',
          description:
            "Empower your decision-making with Typeform's real-time analytics and insights, providing valuable information at your fingertips.",
          img: 'typeform-101/stand-out-features/data-driven-decisions.svg',
        },
        {
          title: 'Intuitive AI Assistance',
          description:
            "Rely on Typeform's intuitive AI to assist in creating smarter forms and extracting meaningful insights from responses.",
          img: 'typeform-101/stand-out-features/intuitive-ai-assistance.svg',
        },
        {
          title: 'Multi-Device Compatibility',
          description:
            "Ensure your forms look and function flawlessly on all devices, from desktop to mobile, with Typeform's responsive design.",
          img: 'typeform-101/stand-out-features/multi-device-compatibility.svg',
        },
      ],
      typeformPopularUseCases: [
        {
          title: 'Market Research',
          description:
            'Leverage Typeform to collect valuable insights and customer feedback through engaging surveys and questionnaires.',
          img: 'typeform-101/popular-user-cases/market-research.svg',
        },
        {
          title: 'Effortless Event Planning',
          description:
            'Streamline event registrations, collect RSVPs, and gather post-event feedback seamlessly using Typeform.',
          img: 'typeform-101/popular-user-cases/event-planning.svg',
        },
        {
          title: 'HR Solutions',
          description:
            'Simplify the hiring process by creating interactive application forms, onboarding surveys, and employee engagement feedback forms with Typeform.',
          img: 'typeform-101/popular-user-cases/hr-solutions.svg',
        },
        {
          title: 'E-commerce',
          description:
            'Create seamless product order forms, manage product catalogs, and process payments securely, all powered by Typeform.',
          img: 'typeform-101/popular-user-cases/e-commerce.svg',
        },
        {
          title: 'Interactive Educational Quizzes',
          description:
            'Enhance the learning experience with interactive quizzes, course evaluations, and registration forms created with Typeform.',
          img: 'typeform-101/popular-user-cases/educational-quizzes.svg',
        },
        {
          title: 'Healthcare Management',
          description:
            'Ensure compliance with data privacy regulations while efficiently managing patient information, appointment scheduling, and medical history collection through Typeform.',
          img: 'typeform-101/popular-user-cases/health-management.svg',
        },
        {
          title: 'Nonprofit Engagement',
          description:
            'Engage donors and supporters effectively by using Typeform for interactive donation forms, volunteer sign-ups, and impact assessment surveys.',
          img: 'typeform-101/popular-user-cases/nonprofit-engagement.svg',
        },
        {
          title: 'Engaging Polls',
          description:
            'Boost audience engagement by creating interactive quizzes, polls, and other engaging content for your website or blog using Typeform.',
          img: 'typeform-101/popular-user-cases/polls.svg',
        },
      ],
      typeformLimitations: [
        {
          title: 'Complexity for Beginners',
          description:
            "Typeform's unique design can be complex for those new to the platform, requiring a learning curve.",
          img: 'typeform-101/limitations/complexity-for-beginners.svg',
        },
        {
          title: 'Pricing Tiers',
          description:
            'Some advanced features and higher usage levels may only be available through paid plans, which may not suit all budgets.',
          img: 'typeform-101/limitations/pricing-tiers.svg',
        },
        {
          title: 'Customization Constraints',
          description:
            'While Typeform provides design customization options, highly specialized branding needs may have some limitations.',
          img: 'typeform-101/limitations/customization-constraints.svg',
        },
        {
          title: 'Restrictions and Upgrading',
          description:
            'Typeform may require users to upgrade to higher plans to access greater limits of specific features, lacking the option to purchase only required additional features.',
          img: 'typeform-101/limitations/restrictions-and-upgrading.svg',
        },
        {
          title: 'Limited Reporting and Analytics',
          description:
            "Typeform's reporting and analytics features are basic compared to dedicated data analysis tools.",
          img: 'typeform-101/limitations/limited-reporting-and-analytics.svg',
        },
        {
          title: 'Conditional Logic Complexity',
          description:
            'Implementing conditional logic in Typeform can be complex for intricate workflows.',
          img: 'typeform-101/limitations/conditional-logic-complexity.svg',
        },
        {
          title: 'File Upload Limitations',
          description:
            "Typeform's file upload functionality may have limitations in terms of file size and storage capacity.",
          img: 'typeform-101/limitations/file-upload-limitations.svg',
        },
      ],
      typeformFaqs: typeformFaqs,
    }
  },
}
</script>

<style>
.hero__heading {
  font-size: var(--ft-big-heading);
  font-weight: 700;
  line-height: 72px;
}

@media screen and (max-width: 600px) {
  .hero__heading {
    font-size: 36px;
    line-height: 48px;
  }
}
</style>
