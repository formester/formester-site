<template>
  <div>
    <div class="feature_container">
      <div class="feature__hero">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center align-items-start mt-5"
            >
              <h1 class="section__heading pt-3">
                Online Form Builder-
                <span class="hglt"> Simplify Data Collection</span> and Organisation 
              </h1>
              <p class="hero__subheading">
                Simplify data collection and automate tasks with our easy-to-use online form builder. Create custom forms, no coding skills required!
              </p>
              <a
                href="https://app.formester.com/users/sign_up"
                class="btn button hero__button mt-4 mb-4 mb-lg-0"
                >Try it for Free!</a
              >
            </div>
            <div
              class="col-lg-6 d-flex align-items-center justify-content-center mt-5"
            >
              <nuxt-img
                src="/online-form-builder/online-form-builder.svg"
                alt="Hero-Image"
                class="img-fluid hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <KeyFeaturesForOnlineFormBuilder />
    <CreateFormInThreeSteps section-heading="Create your Custom Form in 3 Simple Steps" :steps="stepsToCreateForm" />
    <IndustrySpecificUseCase section-heading="Custom Online Forms for All Industries" 
    sub-heading="Our custom online form builder lets you create forms tailored to your industry's unique challenges."
    :features="industrySpecificFeatures" />
    <TemplateSection heading="Pre Designed Form Templates" />  
    <FAQwithCategories :faqQuestions="categories" />
    <CallToActionSection
      :content="{
        heading: 'Start Your Formester Journey Today',
        subheading:
          'Start with a Free Sign up and experience the power of Formester firsthand',
          btnPrimary:'Try it for Free!'
      }"
    />
  </div>
</template>

<script>
import KeyFeaturesForOnlineFormBuilder from '../components/online-form-builder/key-features.vue'
import CreateFormInThreeSteps from '@/components/create-form-in-three-steps.vue'
import IndustrySpecificUseCase from '@/components/use-case/industry-specific-use-case.vue'
import TemplateSection from '@/components/TemplateSection.vue'
import FAQwithCategories from '@/components/FAQwithCategories.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'

import getSiteMeta from '@/utils/getSiteMeta'
import onlineFormBuilderFaqs from '@/faqs/online-form-builder-faqs.js'

export default {
  components: {
    KeyFeaturesForOnlineFormBuilder,
    CreateFormInThreeSteps,
    IndustrySpecificUseCase,
    TemplateSection,
    CallToActionSection,
    FAQwithCategories,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/online-form-builder/',
        title: 'Online Form Builder | Custom Form Builder',
        description:
          'Build Custom Online Forms in Minutes! Collect Data, Engage Audience and Improve Conversions with Formester.',
        mainImage:
          'https://formester.com/online-form-builder-hero-screenshot.png',
        mainImageAlt: 'Form builder showing drag and drop functionality',
        keywords: [
          'Online Form',
          'Online Form Builder',
          'Online Form Builder | Custom Form Builder',
          'Form Building',
          'web forms productivity',
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
        ],
      }
      return getSiteMeta(metaData)
    },
    faqsSchema() {
      const allFaqs = []

      this.categories.forEach((c) => {
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
      title: 'Online Form Builder | Custom Form Builder',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/online-form-builder/',
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
          name: 'Online Form Builder | Custom Form Builder',
          description:
            'Build Custom Online Forms in Minutes! Collect Data, Engage Audience and Improve Conversions with Formester.',
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
              name: 'Online Form Builder | Custom Form Builder',
              item: 'https://formester.com/online-form-builder/',
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
      categories: onlineFormBuilderFaqs,
      stepsToCreateForm:{
      step1: {
          title: "Signup with a free account",
          description: "Sign Up for a free account on Formester."
        },
      step2: {
          title: "Select a template or Create a form",
          description: "Build a custom form for your needs or choose one from our template library."
        },
      step3: {
          title: "Publish and Share the Form",
          description: "Deploy the form on your website to start collecting Form Submissions."
        }
    },
    industrySpecificFeatures: [
        {
          title: 'Education',
          description:
            "Simplify course registration, conduct online assessments, and gather valuable student feedback. Save time on paperwork and gain deeper insights into student performance.",
          img: 'streamlined-customer-onboarding',
        },
        {
          title: 'Finance & Banking',
          description:
            "Securely collect and store loan applications, account opening information, and customer feedback. Implement data security measures and provide a smooth experience to your clients.",
          img: 'software-purchase-and-order-forms',
        },
        {
          title: 'Marketing & Sales',
          description:
            "Generate qualified leads, capture customer preferences, and automate follow-up processes. Increase lead quality and improve your sales conversion rates.",
          img: 'lead-generation-and-crm-integration',
        },
        {
          title: 'Non-Profit & Events',
          description:
            "Manage volunteer applications, registration for events, and online donations with ease. Simplify logistics and streamline fundraising efforts.",
          img: 'software-feature-adoption-surveys',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hglt {
  color: var(--clr-primary);
}
</style>
