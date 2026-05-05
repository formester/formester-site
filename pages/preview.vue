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
      <div
        v-else-if="previewData?.type === 'blog' && blogData"
        class="container mw-920 blog-preview-container"
      >
        <BlogPostView :blog-data="blogPostViewData" />
      </div>
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
      const item = data.data
      return {
        type: 'blog',
        components: [],
        title: item.metaTitle || item.attributes?.metaTitle || item.title || item.attributes?.title || 'Draft Blog Preview',
        blogData: {
          title: item.title || item.attributes?.title,
          body: item.body || item.attributes?.body || '',
          author: item.author || item.attributes?.author,
          authorProfile: item.authorProfile || item.attributes?.authorProfile,
          coverImg: item.coverImg?.url || item.attributes?.coverImg?.data?.attributes?.url,
          coverImgAlt: item.coverImgAlt || item.attributes?.coverImgAlt,
        },
      }
    }

    if (data.type === 'feature') {
      const item = data.data
      return {
        type: 'feature',
        components: item.components || [],
        title: item.meta?.title || 'Draft Feature Preview',
      }
    }

    throw new Error(`Unknown entry type: "${data.type}"`)
  },
  { server: false }
)

const components = computed(() => previewData.value?.components || [])
const blogData = computed(() => previewData.value?.blogData)

const blogPostViewData = computed(() => {
  if (!blogData.value) return null
  return {
    title: blogData.value.title,
    body: blogData.value.body,
    author: blogData.value.author,
    authorProfile: blogData.value.authorProfile,
  }
})

useHead(() => ({
  title: previewData.value?.title || 'Draft Preview',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
}))
</script>

<style scoped>
.mw-920 {
  max-width: 920px;
}

.blog-preview-container {
  margin-top: 5rem;
  padding: 2rem;
}
</style>
