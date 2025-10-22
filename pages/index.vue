<template>
  <PageComponents :components="components" />
</template>

<script setup>
import PageComponents from '@/components/PageComponents.vue'
import getStrapiData from '@/utils/getStrapiData'

const endpoint = `/pages`
const strapiParams = { 'filters[slug][$null]': true }

const { data } = await useAsyncData('home-page', async () => {
  return await getStrapiData(endpoint, strapiParams)
})

const components = computed(() => data.value?.components || [])

// Set page meta using useHead
if (data.value?.head) {
  useHead(data.value.head)
}

// Set JSON-LD schema
if (data.value?.jsonld) {
  useSchemaOrg([data.value.jsonld])
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
