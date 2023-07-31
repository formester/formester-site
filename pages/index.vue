<template>
  <div>
    <Hero />
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
  methods: {
    deferScript(scriptUrl) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.defer = true;
      document.head.appendChild(script);
    },
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Formester',
          description:
            "Sign up now for the best No Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          sameAs: [
            'https://www.facebook.com/formester/',
            'https://twitter.com/_formester_',
            'https://www.instagram.com/_formester_/',
            'https://www.linkedin.com/company/formester-inc/',
            'https://www.producthunt.com/products/formester',
            'https://www.softwareadvice.com/forms-automation/formester-profile/',
            'https://www.capterra.com/p/166904/Formester/',
            'https://www.getapp.com/website-ecommerce-software/a/formester/',
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
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://formester.com',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    this.deferScript('https://identity.netlify.com/v1/netlify-identity-widget.js')
  }
}
</script>
