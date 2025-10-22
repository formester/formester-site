<template>
  <PageComponents :components="components" />
</template>

<script setup>
import PageComponents from '@/components/PageComponents.vue'
import getStrapiData from '@/utils/getStrapiData'

const route = useRoute()
const slug = route.params.slug

const endpoint = `/features`
const strapiParams = { 'filters[slug][$eqi]': slug }

const { data: pageData } = await useAsyncData(`feature-${slug}`, async () => {
  const result = await getStrapiData(endpoint, strapiParams)
  
  if (!result.components?.length) {
    throw createError({ statusCode: 404, message: 'Page not found' })
  }
  
  return result
})

const components = computed(() => pageData.value?.components || [])

// Set page meta
if (pageData.value?.head) {
  useHead(pageData.value.head)
}

// Set JSON-LD schema
if (pageData.value?.jsonld) {
  useSchemaOrg(pageData.value.jsonld)
}
</script>
