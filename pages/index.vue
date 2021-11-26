<template>
  <div>
    <Hero />
    <FeatureList />
    <Testimonials />
    <HowItWorks />
    <OtherSection />
    <CallToActionSection />
  </div>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import FeatureList from '../components/home/FeatureList.vue'
import Testimonials from '../components/home/Testimonials.vue'
import HowItWorks from '../components/home/HowItWorks.vue'
import OtherSection from '../components/home/OtherSection.vue'

export default {
  components: {
    Hero,
    FeatureList,
    Testimonials,
    HowItWorks,
    OtherSection,
  },
  head: {
    link: [{ rel: 'canonical', href: 'https://formester.com' }]
  },
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Corporation",
      "name": "Formester",
      "description": "Form solution for your business that is easy to use. Formester provides an interactive drag and drop builder to create amazing survey forms.",
      "logo": "https://formester.com/logo.png",
      "url": "https://formester.com",
      "sameAs": ["https://twitter.com/_formester_", "https://www.instagram.com/_formester_/"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dalaware",
        "addressCountry": "United States"
      }
    }
  }
}
</script>
