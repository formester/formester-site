<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">Digital Signature</h1>
            <p class="hero__subheading mt-3">
               Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.
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
      <div class="row py-5">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <ThreeStepsCreateForm />
    <Testimonial 
      :testimonials="randomTestimonials"
    />
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

export default {
  components: { FeatureDetail, CallToActionSection, Testimonial, TemplateSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/online-payment/',
        title: 'Online Forms With Signature | Online Form Builder With Signature - Formester',
        description:
          'Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with Html Form Backend page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with Html Form Backend page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Online Forms With Signature | Online Form Builder With Signature - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/digital-signature/',
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
          name: 'Online Forms With Signature | Online Form Builder With Signature - Formester',
          description:
            "Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.",
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
              name: 'Digital Signature',
              item: 'https://formester.com/features/digital-signature/',
            }
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
            'Getting a signature faster is one of its greatest advantages. Signing this form electronically takes just a few minutes.',
          src: 'digital-signature/speed-n-efficiency-illus.svg',
        },
        {
          title: 'Security',
          description:
            'E-signature forms are also more secure than physical ones. There is always the possibility of losing or stealing a physical form. Electronic signatures are also harder to forge than physical ones.',
          src: 'digital-signature/security-illus.svg',
        },
        {
          title: 'Professional Documents',
          description:
            'Create documents that look professional with your company branding and logo. With custom domain feature you can personalize it  even further',
          src: 'digital-signature/professional-document-illus.svg',
        },
        {
          title: 'Easy Sharing',
          description:
            'One click share to send documents to one or hundred users in under a minute. They get the document in their inbox with a link to sign and complete it',
          src: 'digital-signature/easy-sharing-illus.svg',
        },
        {
          title: 'Completion Notification',
          description:
            'Once a party has completed the documented and signed it, you will get a notification alert and the other person will also get a confirmation about the document they have signed with a copy',
          src: 'digital-signature/completion-notification-illus.svg',
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(Math.random() * (randomTestimonials.length - 2))
    randomTestimonials = randomTestimonials.slice(randIndex,  randIndex + 2);
    return {randomTestimonials}
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
