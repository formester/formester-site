<template>
  <div class="container position-relative">
    <article class="container mw-840 mt-8rem">
      <NuxtLink
        :to="`/blogs`"
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
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 1.83337C11.6799 1.83337 14.6666 4.82004 14.6666 8.50004C14.6666 12.18 11.6799 15.1667 7.99992 15.1667C4.31992 15.1667 1.33325 12.18 1.33325 8.50004C1.33325 4.82004 4.31992 1.83337 7.99992 1.83337ZM7.99992 13.8334C10.9466 13.8334 13.3333 11.4467 13.3333 8.50004C13.3333 5.55337 10.9466 3.16671 7.99992 3.16671C5.05325 3.16671 2.66659 5.55337 2.66659 8.50004C2.66659 11.4467 5.05325 13.8334 7.99992 13.8334ZM10.3573 5.20004L11.2999 6.14271L7.99992 9.44271L7.05725 8.50004L10.3573 5.20004Z"
              fill="#4F4F4F"
            />
          </svg>
          <span>{{ article.timeToRead }} min read</span>
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
</template>

<script>
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  content: {
    liveEdit: false,
  },
  async asyncData({ $content, params }) {
    const article = await $content('blogs', params.slug).fetch()

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
        url: `https://formester.com/blogs/${this.$route.params.slug}`,
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
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://formester.com/blogs/${this.$route.params.slug}`,
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

.nuxt-content h2 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
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
  min-width: 250px;
  width: 100%;
  display: block;
}
</style>