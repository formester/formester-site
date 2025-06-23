<template>
  <PageComponents :components="components" />
</template>

<script>
import PageComponents from '@/components/PageComponents.vue'
import getStrapiData from '@/utils/getStrapiData'

export default {
  components: { PageComponents },
  async asyncData({ params }) {
    const endpoint = `/pages`
    const strapiParams = { 'filters[slug][$null]': true }
    const { head, jsonld, components } = await getStrapiData(endpoint, strapiParams)
    return { head, jsonld, components }
  },
  head() {
    return this.head
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
