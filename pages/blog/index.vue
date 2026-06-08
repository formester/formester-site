<template>
  <div class="container upper-margin">
    <div>
      <h1 class="section__heading">Featured Blog</h1>
      <BlogFeatured
        v-for="article in heroArticles"
        :key="article.slug"
        :article="article"
        class="my-4"
      />
    </div>

    <div class="row mt-4">
      <h2 class="section__heading" id="all-blogs">All Blogs</h2>
      <div class="blog-container-wrapper">
        <div class="blog-container">
          <transition-group name="fade" tag="div" class="blog-grid" mode="out-in">
            <BlogCard
              v-for="article in paginatedArticles"
              :key="article.slug"
              :article="article"
            />
          </transition-group>
        </div>
        <ClientOnly>
            <div v-if="isLoading" class="blog-loading">
            <div class="loading-spinner"></div>
            </div>
        </ClientOnly>
      </div>
    </div>
    <nav v-if="totalPages > 1">
      <div class="custom-pagination-bar">
        <span class="custom-page-btn prev disabled">
          ← Previous
        </span>
        <div class="custom-pagination-center">
          <span v-for="item in paginationPages" :key="item.key">
            <nuxt-link
              v-if="item.type === 'page'"
              class="custom-page-btn"
              :class="{ active: item.page === currentPage }"
              :to="item.page === 1 ? '/blog/' : `/blog/page/${item.page}/`"
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
          :to="`/blog/page/2/`"
        >
          Next →
        </nuxt-link>
        <span
          v-else
          class="custom-page-btn next disabled"
        >
          Next →
        </span>
      </div>
    </nav>
  </div>
</template>

<script setup>
import BlogCard from '../../components/blog/BlogCard.vue'
import BlogFeatured from '../../components/blog/BlogFeatured.vue'
import getSiteMeta from '../../utils/getSiteMeta'
import { getPaginatedArticles } from '../../composables/useBlogData'

const route = useRoute()
const isLoading = ref(false)

// Fetch blog data using shared composable
const { articles, heroArticles, totalPages, itemsPerPage } = await useBlogData()

// Always show page 1 on index
const currentPage = 1

const paginatedArticles = computed(() => {
  return getPaginatedArticles(articles.value, currentPage, itemsPerPage)
})

// Redirect old query param URLs to new structure
if (route.query.page) {
  const pageNum = parseInt(route.query.page)
  if (pageNum > 1) {
    await navigateTo(`/blog/page/${pageNum}/`, { redirectCode: 301 })
  }
}

const paginationPages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage
  
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
    url: 'https://formester.com/blog/',
    title: 'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
    description: "Best Online, No-Code Form Builder Software in 2023 - Formester's Blog Resource | Discover trending content related to all things form-building.",
    mainImage: 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Logo',
  }
  return getSiteMeta(metaData)
})

// SEO Meta tags
useHead({
  title: 'Form Builder Blog | Latest Articles & Resources - Formester',
  meta: meta.value,
  link: [
    {
      rel: 'canonical',
      href: 'https://formester.com/blog/',
    },
    ...(totalPages.value > 1 ? [{
      rel: 'next',
      href: 'https://formester.com/blog/page/2/',
    }] : []),
  ],
})

// JSON-LD Schema
useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://acornglobus.com',
    name: 'Formester',
    description: "Best Online, No-Code Form Builder Software in 2023 - Formester's Blog Resource | Discover trending content related to all things form-building.",
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
        name: 'Blog',
        item: 'https://formester.com/blog',
      },
    ],
  },
])
</script>

<style scoped>
.upper-margin {
  margin-top: 8em;
}
@media only screen and (max-width: 768px) {
  .upper-margin {
    margin-top: 5em;
  }
}
.section__heading {
  font-size: clamp(22px, 2.4vw, 28px);
  margin-top: 48px;
  margin-bottom: 24px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

@media (max-width: 991px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .section__heading {
    margin-top: 24px;
  }
}
.custom-pagination-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 48px auto 64px;
  padding: 32px 0px;
  border-top: 1px solid var(--border-light);
  flex-wrap: wrap;
  gap: 12px;
}
.custom-pagination-center {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
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
  border: 1px solid transparent;
  border-radius: var(--r-full);
  min-width: 40px;
  min-height: 40px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-sm);
  color: var(--fg-2);
  cursor: pointer;
  outline: none;
  transition: background 140ms ease, color 140ms ease, border-color 140ms ease;
  padding: 0 14px;
}

.custom-page-btn:hover {
  background: var(--bg-violet-25);
  color: var(--violet-600);
}
.custom-page-btn.active {
  background: var(--violet-500);
  border-color: var(--violet-500);
  color: #fff;
  cursor: default;
}
.custom-page-btn.disabled {
  background: var(--gray-50);
  color: var(--fg-muted);
  border: 1px solid var(--border-light);
  cursor: default;
}
.custom-page-btn.prev,
.custom-page-btn.next {
  border: 1px solid var(--border-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
}
.custom-page-btn.next:not(.disabled):hover,
.custom-page-btn.prev:not(.disabled):hover {
  border-color: var(--violet-300);
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
.blog-container-wrapper {
  position: relative;
  min-height: 600px; /* Adjust based on your content */
}

.blog-container {
  width: 100%;
}

.blog-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--clr-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Transition effects */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
