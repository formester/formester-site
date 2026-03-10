<template>
  <PageComponents :components="components" />
</template>

<script setup>
import PageComponents from '@/components/PageComponents.vue'
import { getHomePage } from '@/utils/getAllPages'

const { data, error: fetchError } = await useAsyncData('home-page', async () => {
  const result = await getHomePage()

  if (!result || !result.components || result.components.length === 0) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Home page data unavailable',
      fatal: true,
    })
  }

  return result
})

if (fetchError.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Failed to load home page',
    fatal: true,
  })
}

const components = computed(() => data.value?.components || [])

// Set page meta using useHead
if (data.value?.head) {
  useHead(data.value.head)
}

// Set JSON-LD schema
if (data.value?.jsonld) {
  useJsonld(data.value.jsonld)
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
