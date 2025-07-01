<template>
  <div>
    <div class="container position-relative mt-5">
      <article
        v-if="blogData"
        class="article-container container mw-920"
        :class="{ 'mb-3rem': !(blogData?.cta && blogData.cta.hidden) }"
      >
        <div class="blog__header">
          <NuxtLink
            :to="`/blog/`"
            class="blog__back"
            :class="tableOfContents.length ? 'blog__back__margin' : ''"
          >
            <span>← Back</span>
          </NuxtLink>
          <div class="social__links">
            <a
              :href="`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${blogData?.title} by @_Formester_ `"
              @click="googleAnalytics('twitter')"
              class="social-icons"
              target="_blank"
            >
              <TwitterIcon />
            </a>
            <a
              :href="`https://www.facebook.com/sharer.php?u=${encodedUrl}`"
              @click="googleAnalytics('facebook')"
              class="social-icons"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`"
              @click="googleAnalytics('linkedin')"
              class="social-icons"
              target="_blank"
            >
              <LinkdinIcon />
            </a>
            <span class="social-icons" @click="copyToClipboard">
              <CopyLinkIcon />
            </span>
          </div>
        </div>
        <nav
          v-if="tableOfContents.length"
          class="navbar navbar-expand bg-white py-3"
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
                  <li v-for="link of tableOfContents" :key="link.id">
                    <NuxtLink class="dropdown-link" :to="`#${link.id}`">
                      {{ link.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <h1 class="mb-1 article__heading">{{ blogData?.title }}</h1>
        <div class="d-flex sm-text my-2 datentimeToRead">
          <span>{{ formatDate(blogData?.publishedAt) }}</span>
          <span>|</span>
          <div
            class="d-flex align-items-center justify-content-center timeToRead"
          >
            <ClockIcon color="#4f4f4f" />
            <span>{{ blogData?.readingStats?.text }}</span>
          </div>
        </div>
        <div class="sm-text mt-1 article__author-section">
          by
          <a
            :href="blogData?.authorProfile"
            :title="blogData?.authorProfile"
            target="_blank"
            rel="noopener"
          >
            <span class="article__author">{{ blogData?.author }}</span>
          </a>
        </div>
        <div class="blog__content" ref="blogContent">
          <!-- <nuxt-content :document="processedBlogData" v-if="processedBlogData" /> -->
          <div class="nuxt-content" v-html="processedBlogData"/>

          <div class="popup__img" ref="popupImg" :style="{ display: showPopup ? 'block' : 'none' }">
            <span class="image-preview-close" @click="closePopup">&times;</span>
            <img :src="popupImageSrc" :alt="popupImageAlt" @click="closePopup" ref="popupImage" />
          </div>
        </div>
        <notifications position="bottom right" class="my-notification" />

        <div v-if="relatedArticles" class="mt-5">
          <h2 class="article__sub-heading">Related Blogs</h2>
          <div class="row mt-4">
            <RelatedArticleCard
              v-for="relatedArticle in relatedArticles"
              :key="relatedArticle.slug"
              :article="relatedArticle"
              class="col-lg-6 related-article-card"
            />
          </div>
        </div>

        <!--
          <template>
            <div class="mt-5" id="disqus_thread"></div>
          </template>

          <noscript
            >Please enable JavaScript to view the
            <a href="https://disqus.com/?ref_noscript"
              >comments powered by Disqus.</a
            ></noscript
          >
        -->
      </article>
    </div>
    <CallToActionSection :content="blogData?.cta" />
  </div>
</template>

<script>
import ClockIcon from '../../components/icons/ClockIcon.vue'
import TwitterIcon from '../../components/icons/twitter.vue'
import FacebookIcon from '../../components/icons/facebook.vue'
import LinkdinIcon from '../../components/icons/linkdin.vue'
import CopyLinkIcon from '../../components/icons/copyLink.vue'
// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import axios from 'axios'
import readingTime from '@/utils/readingTime'
import { marked } from 'marked'

export default {
  components: {
    ClockIcon,
    TwitterIcon,
    FacebookIcon,
    LinkdinIcon,
    CopyLinkIcon,
  },
  data() {
    return {
      showPopup: false,
      popupImageSrc: '',
      popupImageAlt: '',
    }
  },
  content: {
    liveEdit: false,
  },
  async asyncData({ params, error }) {
    const response = await axios.get(`${process.env.strapiUrl}/api/blogs`, {
      params: {
        'filters[slug][$eq]': params.slug,
        populate: '*',
      },
    })
    const blog = response.data.data[0]
    if (!blog?.id) {
      error({ statusCode: 404, message: 'Page not found' })
      return
    }
    const blogData = {
      id: blog.id,
      ...blog.attributes,
      coverImg: blog.attributes.coverImg.data.attributes?.url,
      metaImage: blog.attributes.metaImage.map((item) => item.imageURL),
      readingStats: readingTime(blog.attributes.body),
    }

    //Get Related Articles
    let { data } = await axios.get(
      `${process.env.strapiUrl}/api/blogs/random`,
      {
        params: {
          slug: params.slug,
        },
      }
    )

    let relatedArticles = data.map((item) => {
      return {
        ...item,
        coverImg: item.coverImg?.url,
        readingStats: readingTime(item.body),
      }
    })

    return { blogData, relatedArticles }
  },
  mounted() {
    this.setupImageClickHandlers()
    this.setupKeyboardHandler()
    // this.loadDisqus()
  },
  methods: {
    setupImageClickHandlers() {
      this.$nextTick(() => {
        if (this.$refs.blogContent) {
          const images = this.$refs.blogContent.querySelectorAll('.nuxt-content img')
          images.forEach((image) => {
            image.addEventListener('click', () => {
              this.openPopup(image.src, image.alt)
            })
          })
        }
      })
    },
    setupKeyboardHandler() {
      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          this.closePopup()
        }
      })
    },
    openPopup(src, alt) {
      this.popupImageSrc = src
      this.popupImageAlt = alt
      this.showPopup = true
    },
    closePopup() {
      this.showPopup = false
      this.popupImageSrc = ''
      this.popupImageAlt = ''
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    to() {
      this.$router.back()
    },
    copyToClipboard() {
      if (process.client) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          this.$notify({ type: 'success', text: 'Link copied to clipboard' })
        })
      }
      this.googleAnalytics('custom_link')
    },
    googleAnalytics(platform) {
      gtag &&
        gtag('event', 'share', {
          method: platform,
          content_type: 'blog',
          item_id: this.article.title,
        })
    },
    loadDisqus() {
      var disqus_config = function () {
        this.page.url = `https://formester.com/blog/${this.$route.params.slug}/`
        this.page.identifier = `${this.$route.params.slug}`
      }

      var d = document,
        s = d.createElement('script')
      s.src = 'https://formester.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    },
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://formester.com/blog/${this.$route.params.slug}/`,
        title: this.blogData?.metaTitle,
        description: this.blogData?.metaDescription,
        mainImage:
          this.blogData?.coverImg ||
          'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: this.blogData?.coverImgAlt || 'Formester Logo',
        keywords: this.blogData?.keywords,
      }
      return getSiteMeta(metaData)
    },
    encodedUrl() {
      return encodeURIComponent(process.env.baseUrl + this.$route.fullPath)
    },
    processedBlogData() {
      const renderer = new marked.Renderer()

      // Override heading renderer to add IDs
      renderer.heading = function(text, level) {
        if (level >= 2 && level <= 3) {
          const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/--+/g, '-') // Replace multiple hyphens with single
            .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens

          return `<h${level} id="${id}">${text}</h${level}>`
        }
        return `<h${level}>${text}</h${level}>`
      }

      return marked(this.blogData?.body || '', { renderer })
    },
    tableOfContents() {
      const toc = []
      const content = this.blogData?.body || ''

      // Extract headings from markdown
      const headingRegex = /^(#{2,3})\s+(.+)$/gm
      let match

      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length
        const text = match[2].trim()
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '') // Remove special characters
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/--+/g, '-') // Replace multiple hyphens with single
          .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens

        toc.push({
          id,
          text,
          level
        })
      }

      return toc
    },
  },
  head() {
    return {
      title: this.blogData?.metaTitle,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.blogData?.publishedAt,
        },
        {
          property: 'article:modified_time',
          content: this.blogData?.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.blogData?.author },
        // Linkedin
        {
          hid: 'author',
          name: 'author',
          property: 'article:author',
          content: this.blogData?.author,
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
          content: this.blogData?.publishedAt,
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
    const imagesArray = []

    if (this.blogData?.coverImg) {
      imagesArray.push(this.blogData.coverImg)
    }

    if (this.blogData?.metaImages && this.blogData.metaImages.length > 0) {
      imagesArray.push(...this.blogData.metaImages)
    }

    const jsonData = [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://formester.com/blog/${this.blogData?.slug}/`,
        },
        headline: this.blogData?.title,
        description: this.blogData?.description,
        image:
          imagesArray.length > 0
            ? imagesArray
            : ['https://formester.com/formester-logo-meta-image.png'],
        author: {
          '@type': 'Person',
          name: this.blogData?.author,
          url: this.blogData?.authorProfile,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Formester',
          logo: {
            '@type': 'ImageObject',
            url: 'https://formester.com/logo.png',
          },
        },
        datePublished: this.blogData?.publishedAt,
      },
    ]

    // Append schema if available
    if (this.blogData?.schema) {
      try {
        this.blogData.schema.forEach((s) => {
          let parsedSchema = JSON.parse(s.type)
          if (typeof parsedSchema == 'object') {
            jsonData.push(parsedSchema)
          }
        })
      } catch (error) {}
    }

    return jsonData
  },
}
</script>

<style scoped>
p {
  margin-bottom: 2rem;
}
nav {
  position: sticky;
  top: 72px;
  z-index: 100;
}
.article-container{
    margin-top: 9rem;
}
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: var(--clr-text-primary);
}

.article__sub-heading {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  color: var(--clr-text-primary);
}

.article__desc {
  font-size: 17px;
  line-height: 31px;
  color: var(--clr-text-primary);
}


.sm-text {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 31%, 1);
}

.article__author {
  font-weight: 600;
}

.mw-920 {
  max-width: 920px;
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

#tocMenuLink {
  color: #777;
  font-size: 16px;
}

.dropdown-menu {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.95);
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 0;
  margin-top: 8px;
}

.dropdown-link {
  padding: 12px 16px;
  min-width: 750px;
  width: 100%;
  display: block;
  color: #374151;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.dropdown-link:hover {
  background-color: #f3f4f6;
  color: var(--clr-primary);
  border-left-color: var(--clr-primary);
  text-decoration: none;
}

.blog__header {
  margin-top: -4rem;
  justify-content: space-between;
  display: flex;
}
.blog__header span {
  color: #777;
}
.social__links {
  display: flex;
}
.social-icons {
  margin: 0 6px;
  cursor: pointer;
}
.social-icons {
  fill: #000;
}

.blog__content img {
  cursor: zoom-in;
}

.popup__img {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(90, 90, 90, 0.96);
  height: 100%;
  width: 100%;
  z-index: 99999;
  display: none;
}

.popup__img span {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 30px;
  font-weight: bolder;
  color: #fff;
  cursor: pointer;
  z-index: 1;
}

.popup__img img {
  cursor: zoom-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  object-fit: cover;
}

@media only screen and (max-width: 992px) {
  nav {
    top: 60px;
  }
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

  .popup__img img {
    width: 90%;
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

<style>
.nuxt-content {
  margin-top: 18px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: var(--clr-text-primary);
}

.nuxt-content p {
  margin-bottom: 1.4rem;
}

.nuxt-content h2 {
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  color: var(--clr-text-primary);
  margin-top: 64px;
  margin-bottom: 24px;
}

.nuxt-content h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: var(--clr-text-primary);
  margin-top: 48px;
  margin-bottom: 24px;
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
</style>
