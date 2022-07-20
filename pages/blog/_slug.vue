<template>
  <div>
    <div class="container position-relative">
      <article
        class="container mw-840 mt-8rem"
        :class="{ 'mb-5rem': !(article.cta && article.cta.hidden) }"
      >
        <NuxtLink
          :to="`/blog`"
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
        <div class="sm-text mt-1">
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
        url: `https://formester.com/blog/${this.$route.params.slug}`,
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
          name: 'publish_date',
          property: 'og:publish_date',
          content: this.article.createdAt,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://formester.com/blog/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>

<style>
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h1 {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 40px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h3 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content a {
  color: var(--clr-primary);
  text-decoration: underline;
}

.nuxt-content p,
.article__desc {
  font-size: 1rem;
  line-height: 24px;
  color: hsla(0, 0%, 31%, 1);
}

.nuxt-content img {
  height: auto;
  width: 100%;
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

.mb-5rem {
  margin-bottom: 5rem;
}

.datentimeToRead {
  gap: 0.75rem;
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

.dropdown-link {
  padding: 0.5em;
  min-width: 400px;
  width: 100%;
  display: block;
}
@media only screen and (max-width: 576px) {
  .dropdown-link {
    min-width: 300px;
  }
}
@media only screen and (max-width: 432px) {
  .dropdown-link {
    min-width: 250px;
  }
}
</style>
