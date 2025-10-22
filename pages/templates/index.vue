<template>
  <Templates
    :activeCategory="null"
    :templates="templates"
    :templateCategories="categories"
  />
</template>

<script setup>
import Templates from '@/components/template/Templates.vue'
import getSiteMeta from '@/utils/getSiteMeta'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'

const { data } = await useAsyncData('templates-index', async () => {
  const { templates, categories } = await getTemplatesAndCategories()
  return { templates, categories }
})

const templates = computed(() => data.value?.templates || [])
const categories = computed(() => data.value?.categories || [])

const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: 'https://formester.com/templates/',
    title: 'The Formester Templates',
    description:
      'Use our Formester form templates including surveys, reviews, registrations, & more for any industry! Automate workflows with online templates.',
    mainImage: 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Logo',
  }
  return getSiteMeta(metaData)
})

const listItems = computed(() =>
  templates.value.map((template, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://formester.com/templates/${template.slug}`,
    name: template.name,
    image: template.previewImageUrl,
    description: template.description,
  }))
)

useHead({
  title: 'Templates | Formester',
  meta: meta.value,
  link: [
    {
      rel: 'canonical',
      href: 'https://formester.com/templates/',
    },
  ],
})

useSchemaOrg([
  {
    '@type': 'Corporation',
    '@id': 'https://acornglobus.com',
    name: 'Formester',
    description:
      "Sign up now for the best No-Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
    logo: 'https://formester.com/logo.png',
    url: 'https://formester.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delaware',
      addressCountry: 'United States',
    },
  },
  {
    '@type': 'BreadcrumbList',
    '@id': 'https://acornglobus.com',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://formester.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'All Templates',
        item: 'https://formester.com/templates',
      },
    ],
  },
])
</script>

<style scoped></style>
