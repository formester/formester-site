<template>
  <div>
    <Hero heading="some" subtitle="some" />
    <TrustSeals />
    <Testimonials />
    <FeatureList />
    <HowItWorks />
    <CallToActionSection />
  </div>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import TrustSeals from '../components/home/TrustSeals.vue'
import FeatureList from '../components/home/FeatureList.vue'
import Testimonials from '../components/home/Testimonials.vue'
import HowItWorks from '../components/home/HowItWorks.vue'

export default {
  components: {
    Hero,
    TrustSeals,
    FeatureList,
    Testimonials,
    HowItWorks,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Formester',
      description:
        'Formester provides an interactive drag and drop builder to create amazing survey forms and quizes.',
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      sameAs: [
        'https://twitter.com/_formester_',
        'https://www.instagram.com/_formester_/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dalaware',
        addressCountry: 'United States',
      },
    }
  },
}
</script>
