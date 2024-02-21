<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">Secure Online Payments</h1>
            <p class="hero__subheading mt-3">
              Formester’s online forms with payment integration make receiving payments more convenient than ever with secure PCI compliance, responsive interface, and no additional charges.
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
              src="/features/online-payment/online-payment-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="section__heading">
        Automate Payment Collection and Order Processing
      </h2>
      <div
          class="d-flex flex-column flex-md-row justify-content-between mt-md-5"
        >
          <div
            class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
          >
            <nuxt-img
              style="width: 69px"
              src="/features/online-payment/track-payments.svg"
              alt="Formester"
            />
            <h4 class="sub__section-heading mt-4">Track Payments</h4>
            <p class="subheading__text">
              Keep a track of your payment data along with live updates when a payment is processed.
            </p>
          </div>
          <div
            class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
          >
            <nuxt-img
              style="width: 69px"
              src="/features/online-payment/all-in-one-solution.svg"
              alt="Formester"
            />
            <h4 class="sub__section-heading mt-4">All in One Solution</h4>
            <p class="subheading__text">
              Regardless of your industry, formester provides you with end-to-end solutions with a comprehensive suite of features.
            </p>
          </div>
          <div
            class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
          >
            <nuxt-img
              style="width: 69px"
              src="/features/online-payment/integrations.svg"
              alt="Formester"
            />
            <h4 class="sub__section-heading mt-4">Integrations</h4>
            <p class="subheading__text">
              Select the payment gateway of your choice from our 35+ payment integrations.
            </p>
          </div>
        </div>
    </div>
      <div class="container py-5">
        <div class="row py-5">
          <OnlinePaymentsFeatureShowcase
          heading="How online payment forms help your business?"
          :features="OnlinePaymentFeatures"
        />
        </div>
      </div>
    <div class="container py-5">
      <h2 class="section__heading text-center">Payment Intigrations</h2>
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
    <CallToActionSection :content="CallToActionContent" />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import FeatureShowcaseVue from '../../components/online-payments/FeatureShowcase.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import TemplateSection from '../../components/TemplateSection.vue'

export default {
  components: { FeatureDetail, CallToActionSection, Testimonial, TemplateSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/online-payments/',
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
          href: 'https://formester.com/features/online-payments/',
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
          name: 'Online Payment Form | Secure Online Payment - Formester',
          description:
            "Experience secure online payments with Formester's user-friendly online payment form. Start accepting payments today. Try now!",
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
              name: 'Online Payment',
              item: 'https://formester.com/features/online-payments/',
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
      OnlinePaymentFeatures: [
        {
          heading: 'Event Registration with Fee Collection',
          description:
            'Organizers can effortlessly create customized registration forms, ensuring instant collection of fees and improved participant registration experience.',
          imgUrl: 'features/online-payment/event-registration.jpg',
        },
        {
          heading: 'Product Order and Payment',
          description:
            'Easily create order forms with integrated secure payment gateways, boosting e-commerce capabilities for processing online orders and payments.',
          imgUrl: 'features/online-payment/product-order.jpg',
        },
        {
          heading: 'Membership Subscription Renewal',
          description:
            "Craft membership renewal forms with integrated payment options. This ensures an efficient process for members to renew their subscriptions online.",
          imgUrl: 'features/online-payment/membership.jpg',
        },
        {
          heading: 'Donation Collection for Nonprofits',
          description:
            'Create nonprofit donation forms, allowing supporters to contribute online. This streamlines the donation process and provides a reliable payment platform to the donors.',
          imgUrl:
            'features/online-payment/donation.jpg',
        },
        {
          heading: 'Service Request for Professionals',
          description:
            'Build service request forms that include payment options. Clients can submit their requests and make payments through the online form, simplifying the transaction process for both parties.',
          imgUrl:
            'features/online-payment/service-request-for-professionals.jpg',
        },
      ],
      CallToActionContent: {
        heading: "Create your first online payment form!"
      }
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
