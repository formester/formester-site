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

export default {
  components: {
    BlogCard,
    BlogFeatured,
  },
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .where({
        published: true,
        featured: false,
      })
      .sortBy('createdAt', 'desc')
      .fetch()

    const heroArticles = await $content('blog')
      .where({
        published: true,
        featured: true,
      })
      .sortBy('createdAt', 'desc')
      .fetch()

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
        title: 'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
        description:
          'Discover the Latest Form Builder Software in 2023 with Formester. Get the Best Online Form Builder to Use in 2023, with easy to use features and advanced customization options. Read more now!',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with blog page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with blog page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
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
            "Sign up now for the best No Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          sameAs: [
            'https://www.facebook.com/formester/',
            'https://twitter.com/_formester_',
            'https://www.instagram.com/_formester_/',
            'https://www.linkedin.com/company/formester-inc/',
            'https://www.producthunt.com/products/formester',
            'https://www.softwareadvice.com/forms-automation/formester-profile/',
            'https://www.capterra.com/p/166904/Formester/',
            'https://www.getapp.com/website-ecommerce-software/a/formester/',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
          owns: {
            '@type': 'Product',
            name: 'Acorn Globus',
            url: 'https://acornglobus.com',
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
          {
              '@type': 'ListItem',
              position: 1,
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
