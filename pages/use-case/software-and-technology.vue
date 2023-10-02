<template>
  <div>
    <div class="feature__hero">
      <div class="container">
        <div class="row mt-5 py-3">
          <div
            class="col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-5"
          >
            <h1 class="section__heading">
              Formester: Empowering Software and Technology Industries with
              Seamless Form Building Solutions
            </h1>
            <p class="hero__subheading mt-3">
              Streamline Your Workflows and Scale Your Software Business with
              Formester! Discover how Formester can revolutionize your
              form-building process, automate workflows, and drive efficiency in
              your organization. Empower your team with versatile, no-code
              solutions that save time and propel your business forward.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__button mt-4"
              >Get Started - it's Free</a
            >
          </div>
          <div
            class="col-lg-5 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <nuxt-img
              src="/use-case/use-case-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>

    <WhyFormester />
    <AdvanceFeatures />
    <IndustrySpecificUseCase />
    <FormBuildersComparisionTable
      heading="Comparing Formester with Other Leading Form Builders"
    />

    <ThreeStepsCreateForm />
    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
    <FAQwithCategories :categories="categories" />
  </div>
</template>

<script>
import WhyFormester from '@/components/use-case/why-formester.vue'
import AdvanceFeatures from '@/components/use-case/advance-features.vue'
import IndustrySpecificUseCase from '@/components/use-case/industry-specific-use-case.vue'
import FormBuildersComparisionTable from '@/components/form-builders-comparision-table.vue'

import ThreeStepsCreateForm from '@/components/ThreeStepsCreateForm.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '@/components/TemplateSection.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import FAQwithCategories from '@/components/FAQwithCategories.vue'

import getSiteMeta from '@/utils/getSiteMeta'

export default {
  components: {
    WhyFormester,
    AdvanceFeatures,
    IndustrySpecificUseCase,
    FormBuildersComparisionTable,
    ThreeStepsCreateForm,
    Testimonial,
    TemplateSection,
    CallToActionSection,
    FAQwithCategories,
  },
  setup() {
    const categories = [
      {
        title: 'General',
        faqs: [
          {
            question: 'What is Formester?',
            answer:
              'Formester is a powerful form-building platform designed to streamline data collection, automate workflows, and enhance the form-building experience.',
          },
          {
            question: 'How does Formester handle data security and compliance?',
            answer:
              'Formester prioritizes data security and compliance. It employs encryption, secure SSL connections, and ensures compliance with industry standards.',
          },
          {
            question: 'Is Formester suitable for businesses of all sizes?',
            answer:
              'Yes, Formester is suitable for businesses of all sizes, from startups to large enterprises. It offers flexible plans and scalable features to accommodate different business requirements.',
          },
        ],
      },
      {
        title: 'Integration and Automation',
        faqs: [
          {
            question:
              'Can I integrate Formester with my existing software applications?',
            answer:
              'Yes, Formester provides seamless integration options, allowing you to connect it with your existing software applications and technology stack, enabling efficient data collection and workflow automation.',
          },
          {
            question: 'Can I automate workflows and processes with Formester?',
            answer:
              'Yes, Formester offers automation capabilities that allow you to streamline internal workflows across different departments, saving time and increasing productivity.',
          },
        ],
      },
      {
        title: 'User Experience Optimization',
        faqs: [
          {
            question:
              'Can Formester help optimize the user experience of software applications?',
            answer:
              'Yes, by conducting usability testing and collecting user feedback through forms, you can identify areas for improvement and enhance the overall user experience.',
          },
          {
            question:
              'Does Formester offer features for conducting software surveys and market research?',
            answer:
              'Yes, Formester is equipped with features for conducting software surveys and market research. You can gather feedback, insights, and industry trends through targeted surveys, enabling you to make informed business decisions and shape future software development strategies.',
          },
          {
            question:
              'How does Formester handle user feedback and feature requests?',
            answer:
              'Formester offers features for collecting user feedback and feature requests through interactive forms, providing a valuable channel for users to share their opinions and suggestions for software improvements.',
          },
          {
            question:
              'How does Formester help with user onboarding for software applications?',
            answer:
              'Formester enables you to design onboarding forms and processes that guide new users through the software setup and configuration, ensuring a smooth and successful onboarding experience.',
          },
        ],
      },
      {
        title: 'Features and Functionality',
        faqs: [
          {
            question: 'Does Formester offer customizable branding options?',
            answer:
              'Yes, Formester provides a Brand Kit feature that allows you to customize the look and feel of your forms, ensuring a cohesive and branded experience for your users.',
          },
          {
            question: 'Can I automate workflows and processes with Formester?',
            answer:
              'Yes, Formester offers automation capabilities that allow you to streamline internal workflows across different departments, saving time and increasing productivity.',
          },
          {
            question: 'Can I create digital signatures with Formester?',
            answer:
              'Yes, Formester offers a digital signature feature that enables you to add e-signatures to your online forms, replacing traditional handwritten signatures and making document signing more efficient.',
          },
          {
            question: 'Does Formester offer analytics and reporting features?',
            answer:
              'Formester provides powerful analytics and reporting features that allow you to gain insights into user interactions, form performance, and trends, helping you make data-driven decisions and optimize your forms.',
          },
          {
            question:
              'Can I set up automatic personalized replies to form submissions with Formester?',
            answer:
              "Yes, you can! Formester's auto-responder feature enables you to send customized email responses automatically when someone submits a form. Easily create personalized email templates using our intuitive email builder and customize the emails to be sent from your own email account.",
          },
        ],
      },
      {
        title: 'Software And Technology',
        faqs: [
          {
            question:
              'How does Formester help streamline form building for software and technology industries?',
            answer:
              'Formester offers industry-specific features such as software integration, customizable branding, powerful analytics, and conditional logic to cater to the unique needs of the software and technology industries.',
          },
          {
            question:
              'Can Formester help with software feature adoption and usage tracking?',
            answer:
              'Yes, Formester offers features to measure the adoption and usage of specific software features through targeted surveys and tracking capabilities. This allows you to gather insights into feature strengths and weaknesses, enabling data-driven decisions to improve feature usability and effectiveness.',
          },
          {
            question: 'Can Formester schedule software demos and trials?',
            answer:
              'Yes, Formester provides features to create forms for scheduling software demos and trials. Easily collect user information and preferred demo dates to streamline the process and provide a seamless experience for potential customers.',
          },
          {
            question:
              'How can Formester support user training and certification programs?',
            answer:
              'Formester enables you to create forms that facilitate user enrollment, progress tracking, and certification issuance upon completion to support user training and certification programs',
          },
          {
            question:
              'Is Formester suitable for managing software subscription renewals?',
            answer:
              'Yes, Formester offers features to create forms that facilitate software subscription management. Users can easily renew, upgrade, or manage their software licenses through dedicated forms, simplifying the subscription renewal process for both businesses and customers.',
          },
          {
            question:
              'Does Formester provide support for user support and helpdesk processes?',
            answer:
              'Yes, Formester offers features to streamline user support and help-desk processes, allowing users to submit support tickets, technical issues, or feature requests through dedicated forms, ensuring timely resolution of user queries.',
          },
        ],
      },
    ]

    const randomTestimonials = ref([])

    const fetchRandomTestimonials = async () => {
      try {
        const testimonials = await allTestimonials
        const randIndex = Math.floor(Math.random() * (testimonials.length - 2))
        randomTestimonials.value = testimonials.slice(randIndex, randIndex + 2)
      } catch (error) {
        console.error('Error fetching random testimonials:', error)
      }
    }

    onMounted(() => {
      fetchRandomTestimonials()
    })

    return {
      randomTestimonials,
      categories,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/use-case/software-and-technology/',
        title: 'Formester: Empowering Software and Technology Industries',
        description:
          'Formester: Revolutionize form-building, automate workflows, empower teams with no-code solutions. Streamline and grow your business!',
        mainImage: 'https://formester.com/jotform101-hero-section.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'Formester',
          'Formester Use Case',
          'Formester: Empowering Software',
          'Formester: Empowering Technology Industries',
          'web forms for customer support',
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
      title: 'Formester: Empowering Software and Technology Industries',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/use-case/software-and-technology/',
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
          name: 'Formester: Empowering Software and Technology Industries',
          description:
            'Streamline Your Workflows and Scale Your Software Business with Formester! Discover how Formester can revolutionize your form-building process, automate workflows, and drive efficiency in your organization. Empower your team with versatile, no-code solutions that save time and propel your business forward.',
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
              name: 'Formester: Empowering Software and Technology Industries',
              item: 'https://formester.com/use-case/',
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
}
</script>

<style></style>
