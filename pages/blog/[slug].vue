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
            to="/blog/"
            class="blog__back"
            @click.prevent="goBack"
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
        <BlogPostView v-if="blogPostViewData" :blog-data="blogPostViewData" />
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

<script setup>
import ClockIcon from '../../components/icons/ClockIcon.vue'
import TwitterIcon from '../../components/icons/twitter.vue'
import FacebookIcon from '../../components/icons/facebook.vue'
import LinkdinIcon from '../../components/icons/linkdin.vue'
import CopyLinkIcon from '../../components/icons/copyLink.vue'
import getSiteMeta from '../../utils/getSiteMeta'
import readingTime from '@/utils/readingTime'
import { getBlogBySlug, getAllBlogs } from '@/utils/getAllBlogs'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const { $notify } = useNuxtApp()

const { data: blogResponse } = await useAsyncData(`blog-${route.params.slug}`, async () => {
  try {
    const blog = await getBlogBySlug(route.params.slug)
    if (!blog?.id) {
      throw createError({ statusCode: 404, message: 'Page not found' })
    }

    const blogData = {
      id: blog.id,
      ...blog.attributes,
      coverImg: blog.attributes.coverImg?.data?.attributes?.url,
      metaImage: blog.attributes.metaImage?.map((item) => item.imageURL) || [],
      readingStats: readingTime(blog.attributes.body || ''),
    }

    // Compute related articles locally from cached blogs
    const allBlogs = await getAllBlogs()
    const otherBlogs = allBlogs.filter((item) => item.attributes.slug !== route.params.slug)
    const shuffled = [...otherBlogs].sort(() => Math.random() - 0.5)
    const relatedArticles = shuffled.slice(0, 4).map((item) => ({
      ...item.attributes,
      id: item.id,
      coverImg: item.attributes.coverImg?.data?.attributes?.url,
      readingStats: readingTime(item.attributes.body || ''),
    }))

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
  }
})

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

const goBack = () => {
  if (process.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/blog/')
  }
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
p {
  margin-bottom: 2rem;
}

.article-container {
  margin-top: 9rem;
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

.mw-920 {
  max-width: 920px;
}

.mt-8rem {
  margin-block: 8rem;
}

.mb-3rem {
  margin-bottom: 3rem;
}

.datentimeToRead {
  gap: 0.75rem;
  opacity: 0.5;
}

.timeToRead {
  gap: 0.5rem;
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
  fill: #000;
}
</style>

