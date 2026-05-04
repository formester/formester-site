<template>
  <div>
    <div style="padding-top: 44px">
      <div v-if="pending" style="padding: 4rem; text-align: center; color: #666">
        Loading draft&hellip;
      </div>
      <div v-else-if="fetchError" style="padding: 4rem; text-align: center; color: #c0392b">
        {{ fetchError.message || 'Failed to load draft' }}
      </div>
      <PageComponents v-else-if="components.length" :components="components" />
      <div v-else style="padding: 4rem; text-align: center; color: #666">
        No components found for this draft.
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import PageComponents from '@/components/PageComponents.vue'

const route = useRoute()
const config = useRuntimeConfig()

const { token, type } = route.query

if (process.client && (!token || !type)) {
  throw createError({ statusCode: 400, statusMessage: 'Missing preview token or type', fatal: true })
}

const { data: previewData, pending, error: fetchError } = await useAsyncData(
  `preview-${token}`,
  async () => {
    const { data } = await axios.get(
      `${config.public.strapiUrl}/api/preview-entry?token=${encodeURIComponent(token)}&type=${encodeURIComponent(type)}`,
      { timeout: 15000 }
    )

    if (!data?.type || !data?.data) {
      throw new Error('Draft not found or already published')
    }

    if (data.type === 'page') {
      const item = data.data
      return {
        type: 'page',
        components: item.components || [],
        title: item.meta?.title || 'Draft Preview',
      }
    }

    if (data.type === 'blog') {
      // transformer denied for blogs — attributes may still be wrapped
      const item = data.data
      return {
        type: 'blog',
        components: [],
        title: item.attributes?.metaTitle || item.attributes?.title || item.metaTitle || item.title || 'Draft Blog Preview',
      }
    }

    throw new Error(`Unknown entry type: "${data.type}"`)
  },
  { server: false }
)

const components = computed(() => previewData.value?.components || [])

useHead(() => ({
  title: previewData.value?.title || 'Draft Preview',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
}))
</script>

<style scoped>
.preview-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #4945ff;
  color: #fff;
  text-align: center;
  padding: 10px 16px;
  font-size: 14px;
  font-family: sans-serif;
}

.preview-banner-link {
  color: #fff;
  margin-left: 16px;
  text-decoration: underline;
}
</style>
