<template>
  <PageComponents :components="components" />
</template>

<script setup>
import PageComponents from '@/components/PageComponents.vue'
import getStrapiData from '@/utils/getStrapiData'

const route = useRoute()
const slug = route.params.slug

// Fetch plugin page from Strapi with the full slug path
const endpoint = `/pages`
const strapiParams = { 
  'filters[slug][$eqi]': `plugins/${slug}`,
  'populate': 'deep'
}

const { data: pageData, error: fetchError } = await useAsyncData(`plugin-${slug}`, async () => {
  const result = await getStrapiData(endpoint, strapiParams)
  
  if (!result || !result.components || result.components.length === 0) {
    throw createError({ 
      statusCode: 404, 
      statusMessage: 'Plugin page not found',
      fatal: true 
    })
  }
  
  return result
})

// If there was an error fetching data, throw it
if (fetchError.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Plugin page not found',
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
