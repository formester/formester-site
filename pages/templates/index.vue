<template>
  <div>
    <Templates
      :activeCategory="null"
      :templates="paginatedTemplates"
      :allTemplates="templates"
      :templateCategories="categories"
      :isPaginated="true"
      @search-active="isSearchActive = $event"
    />
    <TemplatePagination
      v-if="totalPages > 1 && !isSearchActive"
      base-path="/templates"
      :current-page="currentPage"
      :total-pages="totalPages"
    />
  </div>
</template>

<script setup>
import Templates from '@/components/template/Templates.vue'
import TemplatePagination from '@/components/template/TemplatePagination.vue'
import getSiteMeta from '@/utils/getSiteMeta'
import { useTemplateData, getPaginatedTemplates } from '@/composables/useTemplateData'

const route = useRoute()

// Fetch template data using shared composable
const { templates, categories, totalPages, itemsPerPage } = await useTemplateData()

const isSearchActive = ref(false)

// Always show page 1 on index
const currentPage = 1

const paginatedTemplates = computed(() => {
  return getPaginatedTemplates(templates.value, currentPage, itemsPerPage)
})

// Redirect old query param URLs to new structure
if (route.query.page) {
  const pageNum = parseInt(route.query.page)
  if (pageNum > 1) {
    await navigateTo(`/templates/page/${pageNum}/`, { redirectCode: 301 })
  }
}


const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: 'https://formester.com/templates/',
    title: '1000+ Free Form Templates - Formester',
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
  })),
)

useHead({
  title: '1000+ Free Form Templates - Formester',
  meta: meta.value,
  link: [
    {
      rel: 'canonical',
      href: 'https://formester.com/templates/',
    },
    ...(totalPages.value > 1
      ? [
          {
            rel: 'next',
            href: 'https://formester.com/templates/page/2/',
          },
        ]
      : []),
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
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
    '@context': 'https://schema.org',
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
