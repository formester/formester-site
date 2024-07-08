<template>
  <PageComponents endpoint="home-page" />
</template>

<script>
import PageComponents from '@/components/PageComponents.vue'

export default {
  components: {PageComponents},
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
            'Build web forms using our Free HTML Form Builder with Drag-and-Drop Interface - Advanced Features, Third-Party Integrations & Robust Analytics!',
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

</style>
