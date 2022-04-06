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
import BlogCard from '../../components/blog/BlogCard.vue'
import BlogFeatured from '../../components/blog/BlogFeatured.vue'

export default {
  components: {
    BlogCard,
    BlogFeatured
},
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'asc')
      .fetch()

    const heroArticles = await $content('hero-articles')
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
.blog__date {
  background: #e0e0e0;
  color: hsla(0, 0%, 20%, 1);
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 14px;
  border-radius: 0.25rem;
}
.blog__title {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 32px;
  color: hsla(0, 0%, 20%, 1);
}

.blog__desc {
  font-size: 1rem;
  line-height: 24px;
  color: hsla(0, 0%, 31%, 1);
  margin: 0;
}

.blog__timetoRead {
  font-size: 0.875rem;
  line-height: 21px;
  color: hsla(0, 0%, 51%, 1);
  gap: 0.5rem;
}
</style>