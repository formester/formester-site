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
      .sortBy('createdAt', 'asc')
      .fetch()

    const heroArticles = await $content('blog')
      .where({
        published: true,
        featured: true,
      })
      .sortBy('createdAt', 'asc')
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
        url: 'https://formester.com/blog',
        title: 'The Formester Blog',
        description:
          'Find helpful online form tips for creating top-notch forms. Thought-provoking. Quick and Easy. A little SaaSy. Sometimes inspirational. This is the Formester blog.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with blog page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with blog page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Blog | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/blog',
        },
      ],
    }
  },
}
</script>

<style></style>
