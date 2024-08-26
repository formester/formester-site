<template>
  <PageComponents :components="components" />
</template>

<script>
import PageComponents from '@/components/PageComponents.vue'
import getStrapiData from '@/utils/getStrapiData'

export default {
  components: { PageComponents },
  async asyncData({ params }) {
    const endpoint = `/home-page`
    const { head, jsonld, components } = await getStrapiData(endpoint)
    return { head, jsonld, components }
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
    return this.jsonld
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
