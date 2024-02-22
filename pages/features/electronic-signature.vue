<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">
              Collect Electronic Signatures with Online Forms
            </h1>
            <p class="hero__subheading mt-3">
              Add e-sign to your online form easily using formester. Digital
              signatures have become increasingly popular in recent years as
              they offer a convenient and efficient way to sign documents.
              Traditional handwritten signatures can most often be replaced by
              electronic signatures.
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
              src="/features/digital-signature/digital-signature-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="section__heading text-center">
        How does Digital Signature help?
      </h2>
      <div class="row py-5">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <ThreeColBenefits
      heading="Benefits of Collecting Electronic Signatures with Online Forms"
      :benefits="benefits"
    />
    <ThreeStepsCreateForm />
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
import ThreeColBenefits from '@/components/features/ThreeColBenefits.vue'
import { fetchRandomTestimonials } from '@/utils/getTestimonials.js'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    ThreeColBenefits,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/electronic-signature/',
        title:
          'Electronic Signature in Online Forms | Collect Online Signatures | Formester',
        description:
          'Add e-sign to your online form easily - Formester | Document signing with secure electronic signatures (e-sign) | Formester Digital Signs',
        mainImage:
          'https://formester.com/formester-form-builder-background.png',
        mainImageAlt: 'Form builder showing drag and drop functionality',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title:
        'Electronic Signature in Online Forms | Collect Online Signatures | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/electronic-signature/',
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
          name: 'Electronic Signature in Online Forms | Collect Online Signatures | Formester',
          description:
            'Add e-sign to your online form easily - Formester | Document signing with secure electronic signatures (e-sign) | Formester Digital Signs',
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
              name: 'Electronic Signature',
              item: 'https://formester.com/features/electronic-signature/',
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
          title: 'Speed and Efficiency',
          description:
            'Add an e-sign field to any of your online forms and instantly collect digital signatures along with form submissions.',
          src: 'digital-signature/speed-n-efficiency-illus.svg',
        },
        {
          title: 'Security',
          description:
            'E-signature forms are more secure than physical ones. There is always the possibility of losing or having a physical form stolen. Electronic signatures are also harder to forge than physical ones.',
          src: 'digital-signature/security-illus.svg',
        },
        {
          title: 'Professional Documents',
          description:
            'Create documents that look professional with your company branding and logo. With a custom URL you can personalize it even further.',
          src: 'digital-signature/professional-document-illus.svg',
        },
        {
          title: 'Easy Sharing',
          description:
            'One click share to send documents to one or hundred users in under a minute. They get the document in their inbox with a link to sign and complete it.',
          src: 'digital-signature/easy-sharing-illus.svg',
        },
        {
          title: 'Completion Notification',
          description:
            'Once a party has completed the document and signed it, you will get a notification alert and the other person will also get a confirmation about the document they have signed with a copy.',
          src: 'digital-signature/completion-notification-illus.svg',
        },
      ],
      benefits: [
        {
          title: 'Legal Document Signatures',
          description:
            "Obtain legally binding signatures with ease. Our online form builder's electronic signature feature reduces paperwork, ensuring an efficient, error-free method for handling legal agreements.",
          imgSrc: 'features/digital-signature/legal-document-signatures.svg',
        },
        {
          title: 'HR and Employee Onboarding',
          description:
            'Create digital forms for contracts and policy acknowledgments, obtain secure electronic signatures, and expedite onboarding without the hassle of paperwork delays.',
          imgSrc: 'features/digital-signature/hr-and-employee-onboarding.svg',
        },
        {
          title: 'Financial Transactions',
          description:
            'Streamline financial processes, enable digital signing and approvals within the order form, and optimize the workflows for error-free order processing and commercial transactions.',
          imgSrc: 'features/digital-signature/financial-transactions.svg',
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
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}
</style>
