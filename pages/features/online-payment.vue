<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">Online Payment</h1>
            <p class="hero__subheading mt-3">
              Featuring secure PCI compliance, a responsive interface, and no additional charges, Formester makes receiving payments online more convenient than ever.
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
            <img
              src="@/assets/images/features/online-payment/online-payment-hero.svg"
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

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import TemplateSection from '../../components/TemplateSection.vue'

export default {
  components: { FeatureDetail, CallToActionSection, Testimonial, TemplateSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/online-payment/',
        title: 'Online Payment Form | Secure Online Payment - Formester',
        description:
          "Experience secure online payments with Formester's user-friendly online payment form. Start accepting payments today. Try now!",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with Html Form Backend page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with Html Form Backend page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Online Payment Form | Secure Online Payment - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/online-payment/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebApplication',
      name: 'Online Payment Form | Secure Online Payment - Formester',
      description:
        "Experience secure online payments with Formester's user-friendly online payment form. Start accepting payments today. Try now!",
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      operatingSystem: 'all',
      browserRequirements: 'Requires Javascript and HTML5 support',
      sameAs: [
        'https://www.facebook.com/formester/',
        'https://twitter.com/_formester_',
        'https://www.instagram.com/_formester_/',
        'https://www.linkedin.com/company/formester-inc/',
        'https://www.producthunt.com/products/formester',
        'https://www.softwareadvice.com/forms-automation/formester-profile/',
        'https://www.capterra.com/p/166904/Formester/',
        'https://www.getapp.com/website-ecommerce-software/a/formester/'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delaware',
        addressCountry: 'United States',
      },
      creator: {
        '@type': 'Organization',
        '@id': '#organization',
        url: 'https://formester.com/',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      }
    }
  },
  data() {
    return {
      features: [
        {
          title: 'Pay by debit or credit card',
          description:
            'Payments can be made online using debit or credit cards without paying extra transaction fees! When you receive payments through your online forms, Formester doesn\'t charge you anything; your chosen payment processor charges you the standard rate. You can collect payments from hundreds of countries and currencies with 35+ payment gateways.',
          src: 'online-payment/payment-by-card-illus.svg',
        },
        {
          title: 'Stripe Integration',
          description:
            'Streamline your workflow with our free form integrations. Stripe payment integration allows you to seamlessly receive payments from customers through your forms. We will be adding more integrations soon.',
          src: 'online-payment/payment-by-stripe-illus.svg',
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
