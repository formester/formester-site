<template>
  <NuxtLink :to="articleLink">
    <img
      :src="article.coverImg"
      class="rounded img-fluid"
      :alt="article.coverImgAlt"
    />
    <div class="d-flex flex-column align-items-start mt-2">
      <h3 class="article__title">{{ article.title }}</h3>
    </div>
  </NuxtLink>
</template>

<script>
import ClockIcon from './icons/ClockIcon.vue'

export default {
  name: 'RelatedArticleCard',
  props: ['article'],
  components: {
    ClockIcon,
  },
  computed: {
    articleLink() {
      if (this.article.type) {
        return this.article.link
      }
      return `/blog/${this.article.slug}/`
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.article__title {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 30px;
  color: hsla(0, 0%, 20%, 1);
}

@media only screen and (max-width: 992px) {
  .related-article-card {
    padding: 1rem auto;
  }
}
</style>
