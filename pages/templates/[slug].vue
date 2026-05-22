<template>
  <V2TemplateDetail
    :template="template"
    :pdf-data="data"
    :categories="categories"
    :showcase-tabs="showcaseTabs"
    :has-custom-showcase="hasCustomShowcase"
    :more-templates-title="moreTemplatesTitle"
    :more-templates-description="moreTemplatesDescription"
  />
</template>

<script setup>
import getSiteMeta from '../../utils/getSiteMeta'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'
import getRecommendedTemplatesMap from '@/utils/getRecommendedTemplatesMap'
import resolveShowcaseTabs from '@/utils/resolveShowcaseTabs'

const route = useRoute()

const isPreview = route.query.preview === 'true'

const { data: fetchedData, error: fetchError } = useAsyncData(`template-${route.params.slug}${isPreview ? '-preview' : ''}`, async () => {
  try {
    const slug = route.params.slug
    // Get templates and categories (includes PDF data in payload)
    const result = await getTemplatesAndCategories({ no_cache: isPreview })
    const template = result.templates.find((t) => t.slug === slug)

    if (!template) {
      throw createError({ statusCode: 404, message: 'Template not found' })
    }

    // PDF data is already in the templateRoutes payload
    const routePayload = result.templateRoutes.find(r => r.route === `/templates/${slug}`)
    const pdfData = routePayload?.payload?.data || null

    // Build showcase tabs from recommended-templates entry (if any).
    // When a custom Template Showcase is configured, it REPLACES the legacy
    // app categories. The default "Recommended" tab (from slug list) is
    // independent — it can coexist with either custom tabs or categories.
    let showcaseTabs = []
    let hasCustomShowcase = false
    let moreTemplatesTitle = []
    let moreTemplatesDescription = ''
    try {
      const recMap = await getRecommendedTemplatesMap()
      const entry = recMap[slug] || {}
      const defaultSlugs = entry.defaultRecommendedSlugs || []
      const hideDefault = entry.hideDefaultRecommended === true
      const customTabs = entry.customTabs || []
      moreTemplatesTitle = entry.title || []
      moreTemplatesDescription = entry.description || ''

      // 1) Default "Recommended" tab (unless explicitly hidden).
      //    Prefer the CMS-configured slug list. If no list is set, fall back
      //    to the first 6 templates so the tab is never missing.
      if (!hideDefault) {
        // Strip down to fields the card renders to keep the per-page payload
        // small (full template objects carry heavy aboutTemplate HTML etc.)
        const toCard = (t) => ({
          slug: t.slug,
          name: t.name,
          description: t.description,
          previewImageUrl: t.previewImageUrl,
          previewImageAlt: t.name,
        })

        let recommendedTemplates
        if (defaultSlugs.length > 0) {
          const allowed = new Set(defaultSlugs)
          recommendedTemplates = result.templates
            .filter(t => allowed.has(t.slug))
            .sort((a, b) => defaultSlugs.indexOf(a.slug) - defaultSlugs.indexOf(b.slug))
            .filter(t => t.slug !== slug)
            .slice(0, 6)
            .map(toCard)
        } else {
          recommendedTemplates = result.templates
            .filter(t => t.slug !== slug)
            .slice(0, 6)
            .map(toCard)
        }

        if (recommendedTemplates.length > 0) {
          showcaseTabs.push({
            id: 'recommended-default',
            name: 'Recommended',
            slug: 'recommended',
            templates: recommendedTemplates,
          })
        }
      }

      // 2) Custom tabs from the Template Showcase component (with overrides)
      const resolvedCustomTabs = resolveShowcaseTabs(customTabs, result.templates, slug, {
        sourceLabel: 'recommended-templates',
        idPrefix: 'rec',
      })
      if (resolvedCustomTabs.length > 0) {
        hasCustomShowcase = true
        showcaseTabs.push(...resolvedCustomTabs)
      }
    } catch (e) {
      console.error('[recommended-templates] Error resolving tabs:', e)
    }

    // Only return the data needed for this template to reduce memory
    return {
      template,
      categories: result.categories,
      data: pdfData,
      showcaseTabs,
      hasCustomShowcase,
      moreTemplatesTitle,
      moreTemplatesDescription,
    }
  } catch (err) {
    console.error('Error fetching template:', err)
    throw createError({ statusCode: 500, message: 'Internal Server Error' })
  }
})

if (fetchError.value) {
  throw createError({ statusCode: 500, message: 'Failed to load template' })
}

const template = computed(() => fetchedData.value?.template || {})
const categories = computed(() => fetchedData.value?.categories || {})
const data = computed(() => fetchedData.value?.data || null)
const showcaseTabs = computed(() => fetchedData.value?.showcaseTabs || [])
const hasCustomShowcase = computed(() => fetchedData.value?.hasCustomShowcase === true)
const moreTemplatesTitle = computed(() => fetchedData.value?.moreTemplatesTitle || [])
const moreTemplatesDescription = computed(() => fetchedData.value?.moreTemplatesDescription || '')

const meta = computed(() => {
  const { name, description, metaTitle, metaDescription, previewImageUrl } =
    template.value || {}

  const metaData = {
    type: 'website',
    url: `https://formester.com/templates/${route.params.slug}/`,
    title: metaTitle || name || 'Form Template | Formester',
    description:
      metaDescription ||
      description ||
      "Explore Formester's no-code form templates! Create surveys, gather feedback, and manage events effortlessly. Simplify form building now!",
    mainImage:
      previewImageUrl ||
      'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Template',
  }
  return getSiteMeta(metaData)
})

const faqsSchema = computed(() => {
  const mainEntity = (template.value.faqs || []).map((faq) => {
    return {
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }
  })
  return mainEntity.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: mainEntity,
      }
    : null
})

useHead(() => {
  const { name, keywords } = template.value || {}
  return {
    title: name ? `${name} | Formester` : 'Formester',
    meta: [
      ...meta.value,
      {
        name: 'keywords',
        content: keywords,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://formester.com/templates/${route.params.slug}/`,
      },
    ],
  }
})

useJsonld(() => {
  const { name, description, previewImageUrl, category } = template.value || {}
  const jsonldData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: name,
      description: description,
      image: previewImageUrl,
      url: `https://formester.com/templates/${route.params.slug}/`,
      mainEntity: {
        '@type': 'CreativeWork',
        name: name,
        description: description,
        image: previewImageUrl,
        url: `https://formester.com/templates/${route.params.slug}/`,
        author: {
          '@type': 'Organization',
          name: 'Formester',
          url: 'https://formester.com/',
        },
      },
      isPartOf: {
        '@type': 'CollectionPage',
        name: category?.name,
        url: `https://formester.com/templates/categories/${category?.slug}/`,
        description:
          'Browse our collection of Research Form templates for free.',
      },
    },
  ]
  if (faqsSchema.value) {
    jsonldData.push(faqsSchema.value)
  }
  return jsonldData
})


</script>
