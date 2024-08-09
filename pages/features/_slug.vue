<template>
  <PageComponents
    endpoint="features"
    :params="{ 'filters[slug][$eqi]': slug }"
  />
</template>

<script>
import PageComponents from '@/components/PageComponents.vue'
import getSiteHeaders from '@/utils/getSiteHeaders'

export default {
  components: { PageComponents },
  async asyncData({ params }) {
    const slug = params.slug
    const endpoint = `/features`
    const strapiParams = { 'filters[slug][$eqi]': slug }
    const { head, jsonld } = await getSiteHeaders(endpoint, strapiParams)
    return { slug, head, jsonld }
  },
  head() {
    return this.head
  },
  jsonld() {
    return this.jsonld
  },
}
</script>
