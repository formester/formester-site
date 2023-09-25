<template>
  <NuxtLink :to="article._path" class="row px-3">
    <img
      :src="article.coverImg"
      class="col-lg-6 rounded img-fluid featured__blog-img"
      :alt="article.coverImgAlt"
      :title="article.coverImgAlt"
    />
    <div
      class="col-lg-6 d-flex flex-column align-items-start mt-3 mt-lg-0 ps-0 ps-lg-4"
    >
      <span class="blog__date">{{ formatDate(article.createdAt) }}</span>
      <div class="mt-2">
        <h3 class="blog__title">{{ article.title }}</h3>
        <p class="mt-1 blog__desc">{{ article.description }}</p>
      </div>
      <span class="mt-2 blog__timetoRead">
        <ClockIcon color="#828282" />
        <!-- {{ article.readingStats.text }} -->
      </span>
    </div>
  </NuxtLink>
</template>

<script>
import ClockIcon from '../icons/ClockIcon.vue'

export default {
  name: 'BlogFeatured',
  props: ['article'],
  components: {
    ClockIcon,
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
.featured__blog-img {
  padding: 0;
}
</style>
