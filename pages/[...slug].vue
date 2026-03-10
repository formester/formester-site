<template>
  <PageComponents :components="components" />
</template>

<script setup>
import PageComponents from '@/components/PageComponents.vue'
import { getPageBySlug } from '@/utils/getAllPages'

const route = useRoute()

// Get the full path from route params (catch-all route uses 'slug' param)
const pathSegments = route.params.slug || []
let slug = Array.isArray(pathSegments) ? pathSegments.join('/') : pathSegments
slug = slug.replace(/\/$/, '')

const { data: pageData, error: fetchError } = await useAsyncData(`page-${slug}`, async () => {
  const result = await getPageBySlug(slug)

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

<style></style>
