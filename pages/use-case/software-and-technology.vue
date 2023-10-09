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
            />
          </div>
        </div>
      </div>
    </div>

    <WhyFormester />
    <FeatureToggle
      :features="features"
      sectionHeading="Advanced Features for Your Software & Tech Business"
    />
    <IndustrySpecificUseCase />
    <FormBuildersComparisionTable
      heading="Comparing Formester with Other Leading Form Builders"
    />

    <ThreeStepsCreateForm />
    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
    <FAQwithCategories :faqQuestions="faqQuestions" />
  </div>
</template>

<script>
import WhyFormester from '../../components/use-case/why-formester.vue'
import FeatureToggle from '../../components/FeatureToggle.vue'
import IndustrySpecificUseCase from '../../components/use-case/industry-specific-use-case.vue'
import FormBuildersComparisionTable from '../../components/form-builders-comparision-table.vue'

import ThreeStepsCreateForm from '../../components/ThreeStepsCreateForm.vue'
import Testimonial from '../../components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '../../components/TemplateSection.vue'
import CallToActionSection from '@/components/CallToActionSection.vue'
import FAQwithCategories from '../../components/FAQwithCategories.vue'
import softwareAndTechnologyFaqs from '../../faqs/use-case/software-and-technology-faqs'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  components: {
    WhyFormester,
    FeatureToggle,
    IndustrySpecificUseCase,
    FormBuildersComparisionTable,
    ThreeStepsCreateForm,
    Testimonial,
    TemplateSection,
    CallToActionSection,
    FAQwithCategories,
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(
      Math.random() * (randomTestimonials.length - 2)
    )
    randomTestimonials = randomTestimonials.slice(randIndex, randIndex + 2)
    return { randomTestimonials }
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

      this.faqQuestions.forEach((c) => {
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
  data() {
    return {
      features: [
        {
          heading: 'HTML Form Backend',
          content:
            'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
          imgName: 'features/html-form',
          alt: 'Hero-Image',
        },
        {
          heading: 'Auto Responder',
          content:
            'Send personalised replies automatically to your customers on form submission. Emails are easy to create using our intuitive email builder. You can also customise the emails to go from your personal email account.',
          imgName: 'features/auto-responder',
          alt: 'Hero-Image',
        },
        {
          heading: 'Spam Protection',
          content:
            'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
          imgName: 'features/spam-protection',
          alt: 'Hero-Image',
        },
        {
          heading: 'Powerful Analytics',
          content:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          imgName: 'features/powerful-analytics',
          alt: 'Hero-Image',
        },
        {
          heading: 'Conditional Logic',
          content:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          imgName: 'features/conditional-logic',
          alt: 'Hero-Image',
        },
        {
          heading: 'Digital Signature',
          content:
            'Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.',
          imgName: 'features/digital-signature',
          alt: 'Hero-Image',
        },
        {
          heading: 'Cloud Integration',
          content:
            'Connect your form with Slack, Google Sheets, Salesforce or anything else with our Zapier integration. Use our webhooks to notify any other app when a submission arrives. Create flows that solve your business needs.',
          imgName: 'features/integrations',
          alt: 'Online tools which Formester integrates with',
        },
        {
          heading: 'Collaboration',
          content:
            "Form sharing for effective collaboration and efficient team-work! Unite your team, gather valuable feedback, and unlock the true potential of form building with Formester's powerful in-built Collaboration/Add Collaborators feature!",
          imgName: 'features/invite-collab',
          alt: 'Monitor performance and open rates for your survey forms in Formester',
        },
      ],
      faqQuestions: softwareAndTechnologyFaqs,
    }
  },
}
</script>

<style></style>
