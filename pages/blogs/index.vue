<template>
  <div class="container mt-5">
    <BlogFeatured
      v-for="article in heroArticles"
      :key="article.slug"
      :heroarticle="article"
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
import BlogCard from '../../components/blogs/BlogCard.vue'
import BlogFeatured from '../../components/blogs/BlogFeatured.vue'

export default {
  components: {
    BlogCard,
    BlogFeatured
  },
  async asyncData({ $content }) {
    const articles = await $content('blogs')
      .where({
        'published': true,
        'featured': false
      })
      .sortBy('createdAt', 'asc')
      .fetch()

    const heroArticles = await $content('blogs')
      .where({
        'published': true,
        'featured': true
      })
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
      heroArticles
    }
  },
}
</script>

<style>
</style>