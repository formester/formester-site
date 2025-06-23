<template>
  <div class="container upper-margin">
    <div>
      <h2 class="section__heading">Featured Blog</h2>
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
          <transition-group name="fade" tag="div" class="row" mode="out-in">
            <BlogCard
              v-for="article in paginatedArticles"
              :key="article.slug"
              class="col-lg-4 mt-3 mb-5"
              :article="article"
            />
          </transition-group>
        </div>
        <div v-if="isLoading" class="blog-loading">
          <div class="loading-spinner"></div>
        </div>
      </div>
    </div>
    <nav v-if="totalPages > 1">
      <div class="custom-pagination-bar">
        <nuxt-link
          v-if="currentPage > 1"
          class="custom-page-btn prev"
          :to="{ path: '/blog', query: { ...$route.query, page: currentPage - 1 } }"
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
              :to="{ path: '/blog', query: { ...$route.query, page: item.page } }"
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
          :to="{ path: '/blog', query: { ...$route.query, page: currentPage + 1 } }"
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

<script>
import BlogCard from '../../components/blog/BlogCard.vue'
import BlogFeatured from '../../components/blog/BlogFeatured.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import axios from 'axios'
import readingTime from '@/utils/readingTime'

export default {

  components: {
    BlogCard,
    BlogFeatured,
  },
  data() {
    return {
      itemsPerPage: 9, // Adjust as needed
      isLoading: false
    }
  },
  async asyncData() {
    const { data: { data } } = await axios.get(`${process.env.strapiUrl}/api/blogs`, {
      params: {
        sort: 'publishedAt:desc',
        populate: '*',
      },
    })

    let articles = data.map((item) => ({
      id: item.id,
      ...item.attributes,
      coverImg: item.attributes.coverImg.data.attributes.url,
      readingStats: readingTime(item.attributes.body),
    }))
    const heroArticles = articles.filter((item) => item.featured)
    articles = articles.filter((item) => !item.featured)
    const totalArticles = articles.length
    const totalPages = Math.ceil(totalArticles / 9)
    return {
      articles,
      heroArticles,
      totalPages,
    }
  },
  computed: {

    currentPage() {
      return parseInt(this.$route.query.page) || 1
    },
    currentPage() {
      return parseInt(this.$route.query.page) || 1
    },
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      return this.articles.slice(start, start + this.itemsPerPage)
    },
    paginationPages() {
      const pages = []
      const total = this.totalPages
      const current = this.currentPage
      // Always show first, last, current, and neighbors
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
    },
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/blog/',
        title:
          'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
        description:
          "Best Online, No-Code Form Builder Software in 2023 - Formester's Blog Resource | Discover trending content related to all things form-building.",
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    goToPage(page) {
      if (page < 1 || page > this.totalPages) return
      this.$router.push({ path: '/blog', query: { ...this.$route.query, page } })
    },
  },
  
  watch: {
    // Watch for route changes to handle loading state
    '$route.query.page': {
      handler() {
        // Set loading state when page changes
        this.isLoading = true
        
        // Only run scroll behavior on client side
        if (process.client) {
          this.$nextTick(() => {
            // Scroll to top of the page or to the all-blogs section with margin
            const allBlogsSection = document.getElementById('all-blogs')
            if (allBlogsSection) {
              // Get the position of the element relative to the viewport
              const rect = allBlogsSection.getBoundingClientRect()
              // Get the absolute position and subtract margin (80px)
              const scrollTop = window.pageYOffset + rect.top - 80
              // Scroll to the adjusted position with smooth behavior
              window.scrollTo({ top: scrollTop, behavior: 'smooth' })
            } else {
              // Fallback: scroll to top of the page
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          })
        }
        
        // Use nextTick to ensure DOM has updated
        this.$nextTick(() => {
          // Small timeout to ensure smooth transition
          setTimeout(() => {
            this.isLoading = false
          }, 300)
        })
      },
      immediate: true
    }
  },

  head() {
    // Generate canonical URL based on current page
    const baseUrl = 'https://formester.com/blog';
    const canonicalUrl = this.currentPage === 1 
      ? `${baseUrl}/` 
      : `${baseUrl}/?page=${this.currentPage}`;
    
    return {
      title:
        'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
      meta: [
        ...this.meta,
        // Add pagination meta tags for SEO
        ...(this.currentPage > 1 ? [{
          hid: 'robots',
          name: 'robots',
          content: 'noindex, follow'
        }] : []),
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: canonicalUrl,
        },
        // Add prev/next links for pagination
        ...(this.currentPage > 1 ? [{
          rel: 'prev',
          href: this.currentPage === 2 
            ? `${baseUrl}/` 
            : `${baseUrl}/?page=${this.currentPage - 1}`,
        }] : []),
        ...(this.currentPage < this.totalPages ? [{
          rel: 'next',
          href: `${baseUrl}/?page=${this.currentPage + 1}`,
        }] : []),
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Formester',
          description:
            "Best Online, No-Code Form Builder Software in 2023 - Formester's Blog Resource | Discover trending content related to all things form-building.",
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
              name: 'Blog',
              item: 'https://formester.com/blog',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.upper-margin {
  margin-top: 8em;
}
@media only screen and (max-width: 768px) {
  .upper-margin {
    margin-top: 6em;
  }
}
.section__heading {
  font-size: 32px;
  margin-top: 32px;
}
@media (max-width: 600px) {
  .section__heading {
    font-size: 24px;
    margin-top: 24px;
  }
}
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
