<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
    <img
      :src="`/img/${article.coverImg}`"
      class="rounded img-fluid"
      :alt="article.coverImgAlt"
      :title="article.coverImgAlt"
    />
    <div class="d-flex flex-column align-items-start">
      <span class="blog__date mt-3">{{ formatDate(article.createdAt) }}</span>
      <div class="mt-2">
        <h3 class="blog__title">{{ article.title }}</h3>
        <p class="mt-1 blog__desc">{{ article.description }}</p>
      </div>
      <span class="mt-2 blog__timetoRead">
        <ClockIcon color="#828282" />
        {{ article.readingStats.text }}
      </span>
    </div>
  </NuxtLink>
</template>

<script>
import ClockIcon from '../icons/ClockIcon.vue'

export default {
  name: 'BlogCard',
  props: ['article'],
  components: {
    ClockIcon
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
.blog__date {
  background: hsla(0, 0%, 96%, 1);
  color: hsla(0, 0%, 31%, 1);
  padding: 0.5rem;
  font-size: 12px;
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
  font-size: 12px;
  line-height: 21px;
  color: hsla(0, 0%, 51%, 1);
}
</style>
