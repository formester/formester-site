<template>
  <div>
    <Templates
      :activeCategory="null"
      :templates="paginatedTemplates"
      :templateCategories="categories"
      :isPaginated="true"
    />
    <nav v-if="totalPages > 1" class="container">
      <div class="custom-pagination-bar">
        <nuxt-link
          v-if="currentPage > 1"
          class="custom-page-btn prev"
          :to="currentPage === 2 ? '/templates/' : `/templates/page/${currentPage - 1}/`"
        >
          Previous
        </nuxt-link>
        <span
          v-else
          class="custom-page-btn prev disabled"
        >
          Previous
        </span>
        <div class="custom-pagination-center">
          <span v-for="item in paginationPages" :key="item.key">
            <nuxt-link
              v-if="item.type === 'page'"
              class="custom-page-btn"
              :class="{ active: item.page === currentPage }"
              :to="item.page === 1 ? '/templates/' : `/templates/page/${item.page}/`"
              :aria-current="item.page === currentPage ? 'page' : null"
            >
              {{ item.page }}
            </nuxt-link>
            <span v-else class="custom-ellipsis">...</span>
          </span>
        </div>
        <nuxt-link
          v-if="currentPage < totalPages"
          class="custom-page-btn next"
          :to="`/templates/page/${currentPage + 1}/`"
        >
          Next
        </nuxt-link>
        <span
          v-else
          class="custom-page-btn next disabled"
        >
          Next
        </span>
      </div>
    </nav>
  </div>
</template>

<script setup>
import Templates from '@/components/template/Templates.vue'
import getSiteMeta from '@/utils/getSiteMeta'
import { useTemplateData, getPaginatedTemplates } from '@/composables/useTemplateData'

const route = useRoute()

// Get page number from route
const currentPage = computed(() => {
  const num = parseInt(route.params.number)
  return isNaN(num) || num < 1 ? 1 : num
})

// Fetch template data using shared composable
const { templates, categories, totalPages, itemsPerPage } = await useTemplateData()

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

const paginationPages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push({ type: 'page', page: i, key: `page-${i}` })
    }
  } else {
    pages.push({ type: 'page', page: 1, key: 'page-1' })
    if (current > 3) {
      pages.push({ type: 'ellipsis', key: 'start-ellipsis' })
    }
    for (
      let i = Math.max(2, current - 1);
      i <= Math.min(total - 1, current + 1);
      i++
    ) {
      if (i === 1 || i === total) continue
      pages.push({ type: 'page', page: i, key: `page-${i}` })
    }
    if (current < total - 2) {
      pages.push({ type: 'ellipsis', key: 'end-ellipsis' })
    }
    pages.push({ type: 'page', page: total, key: `page-${total}` })
  }
  return pages
})

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
    ...(currentPage.value > 2 ? [{
      rel: 'prev',
      href: currentPage.value === 2 ? baseUrl : `${baseUrl}page/${currentPage.value - 1}/`,
    }] : currentPage.value === 2 ? [{
      rel: 'prev',
      href: baseUrl,
    }] : []),
    ...(currentPage.value < totalPages.value ? [{
      rel: 'next',
      href: `${baseUrl}page/${currentPage.value + 1}/`,
    }] : []),
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

<style scoped>
.custom-pagination-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 64px auto;
  padding: 32px 0px;
  border-top: 1px solid #eaecf0;
  flex-wrap: wrap;
  gap: 12px;
}
.custom-pagination-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 8px;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .custom-pagination-bar {
    flex-direction: row;
    padding: 16px 0;
    gap: 8px;
  }
  .custom-pagination-center {
    display: none;
  }
  .custom-page-btn {
    min-width: 36px;
    min-height: 32px;
    font-size: 0.95rem;
    padding: 0 8px;
  }
}

.custom-page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #fff;
  border-radius: 4px;
  min-width: 44px;
  min-height: 40px;
  font-weight: 600;
  font-size: var(--ft-small-body);
  color: var(--clr-text-secondary);
  cursor: pointer;
  outline: none;
  transition: background 0.2s, color 0.2s, border 0.2s;
  padding: 0 16px;
}

.custom-page-btn:hover {
  background: #f9fafb;
}
.custom-page-btn.active,
.custom-page-btn.disabled {
  background: #f9fafb;
  color: var(--clr-text-secondary);
  border: 1px solid #d0d5dd;
  cursor: default;
}
.custom-page-btn.prev,
.custom-page-btn.next {
  border: 1px solid #d0d5dd;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-page-btn.disabled {
  opacity: 1;
}
.custom-ellipsis {
  display: inline-block;
  min-width: 32px;
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  user-select: none;
  pointer-events: none;
}
</style>
