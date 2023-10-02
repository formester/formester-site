<template>
  <div>
    <Hero />
    <TrustSeals />
    <div class="iframe__container mx-auto position-relative">
      <iframe
        src="https://app.formester.com/f/6ce3db7a-94a3-48a3-8f00-d16395847a13"
        height="100%"
        width="100%"
      ></iframe>
      <nuxt-img
        src="see-for-yourself.svg"
        class="see-for-yourself position-absolute"
        sizes="10vw"
      />
    </div>
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
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          defer: true,
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
          name: 'Formester',
          description:
            "Build online forms using a No-Code, Drag-and-Drop Form Builder - Starts Free! Advanced Features, Third-Party Integrations & Robust Analytics!",
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
}
</script>

<style scoped>
.iframe__container {
  width: min(90%, 1200px);
  height: 600px;
  border-radius: 8px;
  border: 4px solid #eee8ff;
  margin-top: 148px;
  margin-bottom: 48px;
}

.see-for-yourself {
  top: -14%;
  right: 20%;
  animation: pulse 4s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@media screen and (max-width: 768px) {
  .see-for-yourself {
    top: -14%;
    right: 5%;
    animation: pulse 4s infinite;
  }
}
</style>
