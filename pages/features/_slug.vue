<template>
  <PageComponents :components="components" />
</template>

<script>
import PageComponents from '@/components/PageComponents.vue'
import getStrapiData from '@/utils/getStrapiData'

export default {
  components: { PageComponents },
  async asyncData({ params, error }) {
    const slug = params.slug
    const endpoint = `/features`
    const strapiParams = { 'filters[slug][$eqi]': slug }
    const { head, jsonld, components } = await getStrapiData(
      endpoint,
      strapiParams
    )
    if (!components?.length) {
      error({ statusCode: 404, message: 'Page not found' })
      return
    }
    return { slug, head, jsonld, components }
  },
  head() {
    return this.head
  },
  jsonld() {
    return this.jsonld
  },
}
</script>
