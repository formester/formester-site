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

// Only canonical positive integers are real pages; /page/abc/ or /page/0/
// would otherwise coerce to page 1 and redirect instead of 404ing.
if (!/^[1-9]\d*$/.test(String(route.params.number))) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Get page number from route
const currentPage = computed(() => {
  const num = parseInt(route.params.number)
  return isNaN(num) || num < 1 ? 1 : num
})

// Fetch template data using shared composable
const { templates, categories, totalPages, itemsPerPage } = await useTemplateData()

const isSearchActive = ref(false)

// Get paginated templates for this page
const paginatedTemplates = computed(() => {
  return getPaginatedTemplates(templates.value, currentPage.value, itemsPerPage)
})

// 404 if page number is out of range
if (currentPage.value > totalPages.value) {
  throw createError({ statusCode: 404, message: 'Page not found' })
}

// Redirect page 1 to /templates/
if (currentPage.value === 1) {
  await navigateTo('/templates/', { redirectCode: 301 })
}


const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: `https://formester.com/templates/page/${currentPage.value}/`,
    title: `1000+ Free Form Templates - Page ${currentPage.value} - Formester`,
    description:
      'Use our Formester form templates including surveys, reviews, registrations, & more for any industry! Automate workflows with online templates.',
    mainImage: 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Logo',
  }
  return getSiteMeta(metaData)
})

// SEO Meta tags
const baseUrl = 'https://formester.com/templates/'

useHead({
  title: `1000+ Free Form Templates - Page ${currentPage.value} - Formester`,
  meta: meta.value,
  link: [
    {
      rel: 'canonical',
      href: `https://formester.com/templates/page/${currentPage.value}/`,
    },
    ...(currentPage.value > 2
      ? [
          {
            rel: 'prev',
            href: currentPage.value === 2 ? baseUrl : `${baseUrl}page/${currentPage.value - 1}/`,
          },
        ]
      : currentPage.value === 2
        ? [
            {
              rel: 'prev',
              href: baseUrl,
            },
          ]
        : []),
    ...(currentPage.value < totalPages.value
      ? [
          {
            rel: 'next',
            href: `${baseUrl}page/${currentPage.value + 1}/`,
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
      {
        '@type': 'ListItem',
        position: 3,
        name: `Page ${currentPage.value}`,
        item: `https://formester.com/templates/page/${currentPage.value}`,
      },
    ],
  },
])
</script>
