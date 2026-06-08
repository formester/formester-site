<template>
  <div>
    <div class="read-progress" aria-hidden="true">
      <div class="read-progress__fill" :style="{ transform: `scaleX(${readProgress})` }"></div>
    </div>

    <div v-if="blogData" :class="{ 'mb-3rem': !(blogData?.cta && blogData.cta.hidden) }">
        <BlogPostView v-if="blogPostViewData" :blog-data="blogPostViewData">
          <template #actions>
          <div class="social__links">
            <a
              :href="`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${blogData?.title} by @_Formester_ `"
              @click="googleAnalytics('twitter')"
              class="social-icons"
              target="_blank"
            >
              <IconXSocial />
            </a>
            <a
              :href="`https://www.facebook.com/sharer.php?u=${encodedUrl}`"
              @click="googleAnalytics('facebook')"
              class="social-icons"
              target="_blank"
            >
              <IconFacebookSocial />
            </a>
            <a
              :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`"
              @click="googleAnalytics('linkedin')"
              class="social-icons"
              target="_blank"
            >
              <IconLinkedinSocial />
            </a>
            <span class="social-icons" @click="copyToClipboard">
              <IconLinkChain />
            </span>
          </div>
          </template>
        </BlogPostView>
        <notifications position="bottom right" class="my-notification" />

        <div v-if="relatedArticles && relatedArticles.length" class="container related-container">
          <div class="related-section">
            <div class="section-label">
              <h2>Related Blogs</h2>
              <span class="rule"></span>
            </div>
            <div class="related-grid">
              <RelatedArticleCard
                v-for="relatedArticle in relatedArticles"
                :key="relatedArticle.slug"
                :article="relatedArticle"
              />
            </div>
          </div>
        </div>
    </div>
    <CallToActionSection :content="blogData?.cta" />
  </div>
</template>

<script setup>
import IconXSocial from '../../components/icons/IconXSocial.vue'
import IconFacebookSocial from '../../components/icons/IconFacebookSocial.vue'
import IconLinkedinSocial from '../../components/icons/IconLinkedinSocial.vue'
import IconLinkChain from '../../components/icons/IconLinkChain.vue'
import getSiteMeta from '../../utils/getSiteMeta'
import readingTime from '@/utils/readingTime'
import { getBlogBySlug, getAllBlogs } from '@/utils/getAllBlogs'

const route = useRoute()
const config = useRuntimeConfig()
const { $notify } = useNuxtApp()

const { data: blogResponse } = await useAsyncData(`blog-${route.params.slug}`, async () => {
  try {
    const blog = await getBlogBySlug(route.params.slug)
    if (!blog?.id) {
      throw createError({ statusCode: 404, message: 'Page not found' })
    }

    const cover = blog.attributes.coverImg?.data?.attributes
    const blogData = {
      id: blog.id,
      ...blog.attributes,
      coverImg: cover?.url,
      coverImgWidth: cover?.width || 1200,
      coverImgHeight: cover?.height || 630,
      metaImage: blog.attributes.metaImage?.map((item) => item.imageURL) || [],
      readingStats: readingTime(blog.attributes.body || ''),
    }

    // Compute related articles locally from cached blogs
    const allBlogs = await getAllBlogs()
    const otherBlogs = allBlogs.filter((item) => item.attributes.slug !== route.params.slug)
    const shuffled = [...otherBlogs].sort(() => Math.random() - 0.5)
    const relatedArticles = shuffled.slice(0, 4).map((item) => {
      const c = item.attributes.coverImg?.data?.attributes
      return {
        ...item.attributes,
        id: item.id,
        coverImg: c?.url,
        coverImgWidth: c?.width || 1200,
        coverImgHeight: c?.height || 630,
        readingStats: readingTime(item.attributes.body || ''),
      }
    })

    return { blogData, relatedArticles }
  } catch (error) {
    console.error('Error fetching blog:', error)
    throw createError({ statusCode: 404, message: 'Blog not found' })
  }
})

const blogData = computed(() => blogResponse.value?.blogData)
const relatedArticles = computed(() => blogResponse.value?.relatedArticles || [])

const blogPostViewData = computed(() => {
  if (!blogData.value) return null
  return {
    title: blogData.value.title,
    body: blogData.value.body,
    author: blogData.value.author,
    authorProfile: blogData.value.authorProfile,
    coverImgUrl: null,
    coverImgAlt: blogData.value.coverImgAlt,
    publishedAt: blogData.value.publishedAt,
    readingStats: blogData.value.readingStats,
  }
})

// Reading progress bar
const readProgress = ref(0)
const onScroll = () => {
  const doc = document.documentElement
  const total = doc.scrollHeight - window.innerHeight
  readProgress.value = total > 0 ? Math.min(1, window.scrollY / total) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

const copyToClipboard = () => {
  if (process.client) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      $notify({ type: 'success', text: 'Link copied to clipboard' })
    })
  }
  googleAnalytics('custom_link')
}

const googleAnalytics = (platform) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'share', {
      method: platform,
      content_type: 'blog',
      item_id: blogData.value?.title,
    })
  }
}

const meta = computed(() => {
  const metaData = {
    type: 'article',
    url: `https://formester.com/blog/${route.params.slug}/`,
    title: blogData.value?.metaTitle,
    description: blogData.value?.metaDescription,
    mainImage: blogData.value?.coverImg || 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: blogData.value?.coverImgAlt || 'Formester Logo',
    keywords: blogData.value?.keywords,
  }
  return getSiteMeta(metaData)
})

const encodedUrl = computed(() => {
  return encodeURIComponent(config.public.baseUrl + route.fullPath)
})

useHead({
  title: blogData.value?.metaTitle,
  meta: [
    ...meta.value,
    {
      property: 'article:published_time',
      content: blogData.value?.publishedAt,
    },
    {
      property: 'article:modified_time',
      content: blogData.value?.updatedAt,
    },
    { name: 'twitter:label1', content: 'Written by' },
    { name: 'twitter:data1', content: blogData.value?.author },
    {
      name: 'author',
      property: 'article:author',
      content: blogData.value?.author,
    },
    {
      name: 'publisher',
      property: 'article:publisher',
      content: 'Formester',
    },
    {
      name: 'publish_date',
      property: 'og:publish_date',
      content: blogData.value?.publishedAt,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://formester.com/blog/${route.params.slug}/`,
    },
  ],
})

const jsonldData = computed(() => {
  const imagesArray = []

  if (blogData.value?.coverImg) {
    imagesArray.push(blogData.value.coverImg)
  }

  if (blogData.value?.metaImages && blogData.value.metaImages.length > 0) {
    imagesArray.push(...blogData.value.metaImages)
  }

  const jsonData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://formester.com/blog/${blogData.value?.slug}/`,
      },
      headline: blogData.value?.title,
      description: blogData.value?.description,
      image: imagesArray.length > 0 ? imagesArray : ['https://formester.com/formester-logo-meta-image.png'],
      author: {
        '@type': 'Person',
        name: blogData.value?.author,
        url: blogData.value?.authorProfile,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      },
      datePublished: blogData.value?.publishedAt,
    },
  ]

  if (blogData.value?.schema) {
    try {
      blogData.value.schema.forEach((s) => {
        const parsedSchema = JSON.parse(s.type)
        if (parsedSchema && typeof parsedSchema === 'object') {
          const withContext = !parsedSchema['@context'] || typeof parsedSchema['@context'] !== 'string'
            ? { '@context': 'https://schema.org', ...parsedSchema }
            : parsedSchema
          jsonData.push(withContext)
        }
      })
    } catch (error) {
      console.error('Error parsing schema:', error)
    }
  }

  return jsonData
})

useJsonld(jsonldData.value)
</script>

<style scoped>
.read-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 2000;
  background: transparent;
  pointer-events: none;
}

.read-progress__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--violet-300), var(--violet-500));
  transform-origin: left;
  transform: scaleX(0);
}

.mb-3rem {
  margin-bottom: 3rem;
}

/* share buttons rendered into the article's right rail */
.social__links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-icons {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  border: 1px solid var(--border-light);
  background: #fff;
  cursor: pointer;
  color: var(--fg-3);
  transition: all 150ms ease;
}

.social-icons:hover {
  background: var(--bg-violet-25);
  border-color: var(--violet-300);
  color: var(--violet-600);
  transform: translateY(-2px);
}

.related-container {
  max-width: 1140px;
}

.section-label {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 26px;
}

.section-label h2 {
  font-size: 21px;
  font-weight: var(--fw-bold);
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin: 0;
}

.section-label .rule {
  flex: 1;
  height: 1px;
  background: var(--border-light);
}

.related-section {
  margin-top: var(--space-10);
  padding-top: var(--space-10);
  border-top: 1px solid var(--border-light);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

@media (max-width: 1100px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
