<template>
  <div>
    <div class="container position-relative">
      <article
        class="container mw-840 mt-8rem"
        :class="{ 'mb-3rem': !(article.cta && article.cta.hidden) }"
      >
        <NuxtLink
          :to="`/blog/`"
          class="blog__back"
          :class="article.toc.length ? 'blog__back__margin' : ''"
        >
          <span>← Back</span>
        </NuxtLink>
        <nav
          v-if="article.toc.length"
          class="navbar navbar-expand bg-white sticky-top py-3"
        >
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="dropdown-toggle"
                  href="#"
                  id="tocMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Table of Contents
                </a>
                <ul class="dropdown-menu" aria-labelledby="tocMenuLink">
                  <li v-for="link of article.toc" :key="link.id">
                    <NuxtLink class="dropdown-link" :to="`#${link.id}`">
                      {{ link.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <h1 class="mb-1 article__heading">{{ article.title }}</h1>
        <div class="d-flex sm-text my-2 datentimeToRead">
          <span>{{ formatDate(article.createdAt) }}</span>
          <span>|</span>
          <div
            class="d-flex align-items-center justify-content-center timeToRead"
          >
            <ClockIcon color="#4f4f4f" />
            <span>{{ article.readingStats.text }}</span>
          </div>
        </div>
        <div class="sm-text mt-1 article__author-section">
          by
          <span class="article__author">{{ article.author }}</span>
        </div>
        <p class="article__desc mt-4">{{ article.description }}</p>
        <nuxt-content :document="article" />
      </article>
    </div>
    <CallToActionSection :content="article.cta" />
  </div>
</template>

<script>
import ClockIcon from '../../components/icons/ClockIcon.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    ClockIcon,
  },
  content: {
    liveEdit: false,
  },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    to() {
      this.$router.back()
    },
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://formester.com/blog/${this.$route.params.slug}/`,
        title: this.article.title,
        description: this.article.description,
        mainImage: this.article.coverImg
          ? `https://formester.com/${this.article.coverImg}`
          : 'https://formester.com/formester-form-builder-background.png',
        mainImageAlt:
          this.article.coverImgAlt ||
          'Form builder showing drag and drop functionality',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.article.author },
        // Linkedin
        {
          hid: 'author',
          name: 'author',
          property: 'article:author',
          content: this.article.author,
        },
        {
          hid: 'publisher',
          name: 'publisher',
          property: 'article:publisher',
          content: 'Formester',
        },
        {
          name: 'publish_date',
          property: 'og:publish_date',
          content: this.article.createdAt,
        },
        {
          name: 'keywords',
          content: this.article.keywords,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://formester.com/blog/${this.$route.params.slug}/`,
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://formester.com/blog/${this.article.slug}/`,
      },
      headline: this.article.title,
      description: this.article.description,
      image: this.article.coverImg
        ? `https://formester.com/${this.article.coverImg}`
        : 'https://formester.com/formester-form-builder-background.png',
      author: {
        '@type': 'Person',
        name: this.article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      },
      datePublished: this.article.createdAt,
    }
  },
}
</script>

<style scoped>
p {
  margin-bottom: 2rem;

}
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: hsla(0, 0%, 20%, 1);
}

.article__desc {
  font-size: 17px;
  line-height: 31px;
  color: hsla(0, 0%, 31%, 1);
}

.nuxt-content {
  font-size: 17px;
  line-height: 31px;
  letter-spacing: 0.2px;
  color: hsla(0, 0%, 31%, 1);
}

.nuxt-content p {
  margin-bottom: 1.2rem;
}

.nuxt-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  color: hsla(0, 0%, 20%, 1);
  margin-top: 24px;
  margin-bottom: 16px;
}

.nuxt-content h3 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
  margin-top: 20px;
  margin-bottom: 16px;
}

.nuxt-content a {
  color: var(--clr-primary);
  text-decoration: underline;
}

.nuxt-content img {
  height: auto;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
}

.nuxt-content ul li,
.nuxt-content ol li {
  margin-top: 0px;
  margin-bottom: 16px;
}

.sm-text {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 31%, 1);
}

.article__author {
  font-weight: 600;
}

.mw-840 {
  max-width: 840px;
}

.mt-8rem {
  margin-block: 8rem;
}

.mb-3rem {
  margin-bottom: 3rem;
}

.article__author-section {
  opacity: 0.75;
}

.datentimeToRead {
  gap: 0.75rem;
  opacity: 0.5;
}

.timeToRead {
  gap: 0.5rem;
}

.blog__back {
  margin-top: -4rem;
  position: absolute;
  color: #777;
}

.blog__back__margin {
  margin-top: -3rem;
}

#tocMenuLink {
  color: #777;
  font-size: 16px;
}

.dropdown-menu {
  border: 0 solid #e4e4e7;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.8);
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
}

.dropdown-link {
  padding: 0.5em;
  min-width: 750px;
  width: 100%;
  display: block;
}
@media only screen and (max-width: 992px) {
  .dropdown-link {
    min-width: 680px;
  }
}
@media only screen and (max-width: 768px) {
  .dropdown-link {
    min-width: 480px;
  }

  .nuxt-content h2 {
    margin-top: 16px;
  }

  .nuxt-content h3 {
    margin-top: 16px;
  }

  .nuxt-content img {
    margin-top: 8px;
    margin-bottom: 12px;
  }
}
@media only screen and (max-width: 576px) {
  .dropdown-link {
    min-width: 370px;
  }
}
@media only screen and (max-width: 432px) {
  .dropdown-link {
    min-width: 320px;
  }
}
@media only screen and (max-width: 360px) {
  .dropdown-link {
    min-width: 250px;
  }
}
</style>
