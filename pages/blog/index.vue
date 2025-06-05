<template>
  <div class="container mt-5">
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
      <BlogCard
        v-for="article in paginatedArticles"
        :key="article.slug"
        class="col-lg-4 mt-3 mb-5"
        :article="article"
      />
    </div>
    <nav v-if="totalPages > 1">
      <div class="custom-pagination-bar">
        <button
          class="custom-page-btn prev"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          Previous
        </button>
        <div class="custom-pagination-center">
          <span v-for="item in paginationPages" :key="item.key">
            <button
              v-if="item.type === 'page'"
              class="custom-page-btn"
              :class="{ active: item.page === currentPage }"
              @click="goToPage(item.page)"
              :disabled="item.page === currentPage"
            >
              {{ item.page }}
            </button>
            <span v-else class="custom-ellipsis">...</span>
          </span>
        </div>
        <button
          class="custom-page-btn next"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          Next
        </button>
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
      currentPage: 1,
      itemsPerPage: 9, // Adjust as needed
    }
  },
  async asyncData() {
    const {
      data: { data },
    } = await axios.get(`${process.env.strapiUrl}/api/blogs`, {
      params: {
        sort: 'publishedAt:desc',
        populate: '*',
      },
    })

    let articles = data.map((item) => {
      return {
        id: item.id,
        ...item.attributes,
        coverImg: item.attributes.coverImg.data.attributes.url,
        readingStats: readingTime(item.attributes.body),
      }
    })
    const heroArticles = articles.filter((item) => item.featured)
    articles = articles.filter((item) => !item.featured)
    return {
      articles,
      heroArticles,
    }
  },
  computed: {
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      return this.articles.slice(start, start + this.itemsPerPage)
    },
    totalPages() {
      return Math.ceil(this.articles.length / this.itemsPerPage)
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
      this.currentPage = page
      this.scrollToAllBlogs()
    },
    scrollToAllBlogs() {
      this.$nextTick(() => {
        const el = document.getElementById('all-blogs')
        if (el) {
          const yOffset = -80 // Adjust this to your navbar height
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      })
    },
  },
  watch: {
    $route() {
      this.scrollToAllBlogs()
    }
  },

  head() {
    return {
      title:
        'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/blog/',
        },
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
.custom-page-btn:disabled {
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
.custom-page-btn[disabled] {
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
