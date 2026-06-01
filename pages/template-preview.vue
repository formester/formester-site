<template>
  <div>
    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <p class="text-gray-500">Loading template preview…</p>
    </div>
    <div v-else-if="error || !template" class="flex items-center justify-center min-h-screen">
      <p class="text-red-500">{{ error?.message || 'Template not found.' }}</p>
    </div>
    <V2TemplateDetail v-else :template="template" :pdf-data="null" :categories="{}" :showcase-tabs="[]"
      :has-custom-showcase="false" :more-templates-title="[]" more-templates-description=""
      :show-more-templates="false" />
  </div>
</template>

<script setup>
import { adaptTemplateToV2 } from '@/utils/adaptTemplateToV2'

useHead({
  title: 'Template Preview',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const route = useRoute()
const config = useRuntimeConfig()

const slug = route.query.slug

if (process.client && !slug) {
  throw createError({ statusCode: 400, statusMessage: 'Missing slug query parameter', fatal: true })
}

const { data: template, pending, error } = await useAsyncData(
  `template-preview-${slug}`,
  async () => {
    const res = await $fetch(`${config.public.appUrl}/templates/${slug}.json`, {
      params: { include_all_categories: true, include_related_templates: true },
    })
    return adaptTemplateToV2(res)
  },
  { server: false }
)
</script>
