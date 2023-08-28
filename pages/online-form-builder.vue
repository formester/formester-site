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
                Online Form Builders for <span class="hglt">Powerful</span> form-building
              </h1>
              <p class="hero__subheading">
                Effective data collection and management for businesses and
                individuals alike. Transform your data-collection process &
                derive valuable insights!
              </p>
              <a
                href="https://app.formester.com/users/sign_up"
                class="btn button hero__button mt-4 mb-4 mb-lg-0"
                >Create Form for Free</a
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
    <IdealFormBuilder />
    <BestPracticesCraftingCompellingOnlineForms />
    <ChooseRightOnlineFormBuilder />
    <FormBuilderComparisionTable
      heading="Comparision of Leading Form Builders"
    />
    <Testimonial :testimonials="randomTestimonials" />
    <FAQwithCategories :categories="categories" />
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
import KeyFeaturesForOnlineFormBuilder from '../components/online-form-builder/key-features.vue'
import IdealFormBuilder from '../components/online-form-builder/ideal-form-builder.vue'
import BestPracticesCraftingCompellingOnlineForms from '../components/online-form-builder/best-practices-crafting-compelling-online-forms.vue'
import FormBuilderComparisionTable from '../components/form-builders-comparision-table.vue'
import CallToActionSection from '../components/CallToActionSection.vue'
import FAQwithCategories from '../components/FAQwithCategories.vue'
import ChooseRightOnlineFormBuilder from '../components/online-form-builder/choose-right-online-form-builder.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'

import getSiteMeta from '@/utils/getSiteMeta'

export default {
  components: {
    KeyFeaturesForOnlineFormBuilder,
    IdealFormBuilder,
    BestPracticesCraftingCompellingOnlineForms,
    FormBuilderComparisionTable,
    CallToActionSection,
    FAQwithCategories,
    Testimonial,
    ChooseRightOnlineFormBuilder
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/online-form-builder/',
        title: 'Online Form Builders for powerful form-building',
        description:
          'Effective data collection and management for businesses and individuals alike. Transform your data-collection process & derive valuable insights!',
        mainImage: 'https://formester.com/jotform101-hero-section.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'Online Form',
          'Online Form Builder',
          'Online Form Builders for powerful form-building',
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
      title: 'Online Form Builders for powerful form-building',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/online-form-building/',
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
          name: 'Online Form Builders for powerful form-building',
          description:
            'Effective data collection and management for businesses and individuals alike. Transform your data-collection process & derive valuable insights!',
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
              name: 'Jotform101 - Complete Guide to Form Building by Formester',
              item: 'https://formester.com/jotform101/',
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
      categories: [
        {
          title: 'Overview',
          faqs: [
            {
              question: 'What is an online form builder?',
              answer:
                'An online form builder is a digital tool that allows users to create various types of forms, surveys, and questionnaires through a user-friendly interface without the need for coding skills.',
            },
            {
              question: 'Why should I use an online form builder?',
              answer:
                'You can create a wide range of forms, including contact forms, surveys, feedback forms, event registrations, order forms, quizzes, and more.',
            },
            {
              question:
                'What types of forms can I create with an online form builder?',
              answer:
                'You can create a wide range of forms, including contact forms, surveys, feedback forms, event registrations, order forms, quizzes, and more.',
            },
            {
              question: 'Is there a limit to the number of forms I can create?',
              answer:
                "The limitations vary depending on the online form builder's pricing plans. Some plans offer unlimited forms, while others may have restrictions. Formester’s free plan offers 10 forms with 100 submissions per month!",
            },
          ],
        },
        {
          title: 'Ease of Use and Functionality',
          faqs: [
            {
              question:
                'Do I need coding skills to use an online form builder? ',
              answer:
                'No, online form builders are designed to be user-friendly, eliminating the need for coding knowledge. You can easily drag and drop elements to create your desired form.',
            },
            {
              question:
                'How do I share my forms created with an online form builder? ',
              answer:
                'Most online form builders offer options to embed forms on websites, share links, or email the form to recipients.',
            },
            {
              question: 'Are online forms mobile-responsive? ',
              answer:
                'Yes, most modern online form builders ensure that the forms you create are mobile-responsive, meaning they will display and function well on various devices.',
            },
            {
              question:
                'Can I integrate my forms with other tools and platforms?',
              answer:
                'Yes, many online form builders offer integrations with popular tools like email marketing services, CRMs, payment gateways, and more. Formester integrates with popular platforms like Slack, Salesforce, Google Sheets, Mailchimp and more, to let its users streamline processes and automate workflows!',
            },
            {
              question: 'Can I customize the design of my forms?',
              answer:
                "Yes, online form builders typically offer customization options, allowing you to match the form's design with your brand. Formester\’s Branding Kit offers you an easy brand set-up, logo integration, custom fonts and colors, and even watermark removal!",
            },
            {
              question: 'Can I collect payments through online forms?',
              answer:
                'Yes, many online form builders offer payment integration options that enable you to collect payments securely through your forms. Formester web forms integrate with Stripe, Paypal and Braintree to allow users to collect payments.',
            },
            {
              question: 'How do online form builders handle user responses?',
              answer:
                'Responses are collected in a central dashboard where you can view, manage, and export them in various formats for analysis.',
            },
            {
              question: 'Can I set up conditional logic in my forms?',
              answer:
                'Yes, most online form builders provide conditional logic features that allow you to show or hide certain fields based on user responses. Formester’s conditional logic lets you Skip to Other Pages, Skip to Follow-up Questions and Skip Logic!',
            },
            {
              question: 'Can I collaborate with others on form creation?',
              answer:
                'Yes, many online form builders provide collaboration features that allow multiple users to work on the same form simultaneously. Formester’s Add Collaborators feature allows for the same!',
            },
            {
              question: 'Can I use online form builders for surveys?',
              answer:
                'Absolutely, online form builders are commonly used to create surveys for various purposes, including market research and feedback collection.',
            },
            {
              question: 'Can I track form submissions and user behavior?',
              answer:
                'Yes, many online form builders offer analytics tools that provide insights into submission rates, user engagement, and more.',
            },
          ],
        },
        {
          title: 'Security and Accessibility',
          faqs: [
            {
              question: 'Is my data secure when using an online form builder?',
              answer:
                'Reputable online form builders implement security measures like encryption and data storage compliance to protect your data. With Formester’s Spam Protection, you get One-click Re-Captcha, Custom Re-Captcha, Smart Filters and more!',
            },
            {
              question:
                'Are online form builders accessible for people with disabilities?',
              answer:
                'Reputable online form builders implement security measures like encryption and data storage compliance to protect your data. With Formester’s Spam Protection, you get One-click Re-Captcha, Custom Re-Captcha, Smart Filters and more!',
            },
          ],
        },
        {
          title: 'Others',
          faqs: [
            {
              question: 'What is the cost of using an online form builder?',
              answer:
                'Costs vary depending on the features you need, the number of forms, and the level of customization. Most online form builders offer both free and premium plans.',
            },
            {
              question: 'Can I switch from one online form builder to another?',
              answer:
                'Yes, although the process may vary depending on the platform, you can usually export your form data and recreate your forms in the new builder.',
            },
            {
              question:
                'Is customer support available for online form builders?',
              answer:
                'Yes, most online form builder platforms offer customer support, including help documentation, tutorials, and direct customer assistance. At Formester, our dedicated support team is available for help via e-mail, contact form and chat-support!',
            },
          ],
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
</style>
