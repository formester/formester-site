<template>
  <PageComponents :components="components" />
</template>

<script setup>
import PageComponents from '@/components/PageComponents.vue'
import { getFeatureBySlug } from '@/utils/getAllFeatures'

const route = useRoute()
const slug = route.params.slug

const { data: pageData, error: fetchError } = await useAsyncData(`feature-${slug}`, async () => {
  const result = await getFeatureBySlug(slug)

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
useJsonld(() => pageData.value?.jsonld || [])
</script>
