<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">Form Analytics</h1>
            <p class="hero__subheading mt-3">
              Understand how users interact with your web form. Get 
              insights on ways to improve engagement and increase conversion 
              with advanced form analytics. Identify trends to see where users 
              are dropping off and what works for you.
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
              src="/features/powerful-analytics/powerful-analytics.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="section__heading text-center">How does Web Form Analytics help?</h2>
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
    <TemplateSection heading="Free Online Form Templates" />
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
        url: 'https://formester.com/features/form-analytics/',
        title: 'Form Analytics | Formester',
        description:
          "Get valuable insights into your Google Forms data with Formester's powerful Form Analytics software. Sign up for free now to optimize your forms!",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with powerful analytics page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with powerful analytics page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Form Analytics | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/powerful-analytics/',
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
          name: 'Form Analytics Software | Google Form Analytics - Formester',
          description:
            "Get valuable insights into your Google Forms data with Formester's powerful Form Analytics software. Sign up for free now to optimize your forms!",
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
              name: 'Powerful Analytics',
              item: 'https://formester.com/features/powerful-analytics/',
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
          title: 'Knowing Your Customers',
          description:
            'The data can be filtered by traffic source, device, location, browser, operating system, and other crucial factors. Using the advanced form analytics data, you can analyze user behavior and statistics over time. Adjust your form based on customer responses and optimize data collection.',
          src: 'powerful-analytics/knowing-your-customers.svg',
        },
        {
          title: 'Prevent form abandonment',
          description:
            'Forms having lengthy or irrelevant questions often lead to form abandonment. Advanced web form analytics help to identify specific drop-off points, enabling your business to optimize those areas and reduce abandonment rates by customers.',
          src: 'powerful-analytics/track-your-traffic-by-analyzing-it.svg',
        },
        {
          title: 'Track and analyze your traffic',
          description:
            'You can see in detail where your visitors are coming from, how many responded, what technology platforms they use, and which devices they are using to interact with your form in the traffic panel. It can help you prioritize the right questions.',
          src: 'powerful-analytics/track-your-traffic-by-analyzing-it.svg',
        },
        {
          title: 'Provide critical insight',
          description:
            'Conversion rate is crucial. When your conversion rate is low, you have a high view rate but little interaction. This indicates that your questions are too long or that there is room for improvement. Higher conversion rate means your online forms are getting the information as intended.',
          src: 'powerful-analytics/provide-critical-insight.svg',
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
