<template>
  <PageComponents :components="components" />
</template>

<script setup>
import PageComponents from '@/components/PageComponents.vue'
import getStrapiData from '@/utils/getStrapiData'

const route = useRoute()

// Get the full path from route params (catch-all route uses 'slug' param)
const pathSegments = route.params.slug || []
const slug = Array.isArray(pathSegments) ? pathSegments.join('/') : pathSegments

const endpoint = `/pages`
const strapiParams = { 'filters[slug][$eqi]': slug }

const { data: pageData, error: fetchError } = await useAsyncData(`page-${slug}`, async () => {
  const result = await getStrapiData(endpoint, strapiParams)
  
  if (!result || !result.components || result.components.length === 0) {
    throw createError({ 
      statusCode: 404, 
      statusMessage: 'Page not found',
      fatal: true 
    })
  }
  
  return result
})

// If there was an error fetching data, throw it
if (fetchError.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Page not found',
    fatal: true 
  })
}

const components = computed(() => pageData.value?.components || [])

// Set page meta - must be called unconditionally
useHead(() => pageData.value?.head || {})

// Set JSON-LD schema - must be called unconditionally
useSchemaOrg(() => pageData.value?.jsonld || [])
</script>

<style></style>
