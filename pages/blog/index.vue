<template>
  <div class="container mt-5">
    <BlogFeatured
      v-for="article in heroArticles"
      :key="article.slug"
      :article="article"
      class="my-4"
    />
    <div class="row mt-4">
      <BlogCard
        v-for="article in articles"
        :key="article.slug"
        class="col-lg-4 mt-3 mb-5"
        :article="article"
      />
    </div>
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

<style></style>
