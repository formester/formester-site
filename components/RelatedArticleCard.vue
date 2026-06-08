<template>
  <NuxtLink v-if="article" :to="articleLink" class="rel-card">
    <div v-if="article.coverImg" class="rel-card__media">
      <img
        :src="article.coverImg"
        :alt="article.coverImgAlt"
        :width="article.coverImgWidth || 1200"
        :height="article.coverImgHeight || 630"
        loading="lazy"
      />
    </div>
    <div class="rel-card__body">
      <h3 class="rel-card__title">{{ article.title }}</h3>
      <p v-if="article.publishedAt" class="rel-card__meta">
        <span>{{ formatDate(article.publishedAt) }}</span>
        <template v-if="article.readingStats">
          <span class="rel-card__sep">·</span>
          <span>{{ article.readingStats.text }}</span>
        </template>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  article: { type: Object, default: null },
})

const articleLink = computed(() => {
  if (!props.article) return '#'
  if (props.article.type) {
    return props.article.link
  }
  return `/blog/${props.article.slug}/`
})

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
</script>

<style scoped>
.rel-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 140ms ease, transform 140ms ease, border-color 140ms ease;
}

.rel-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.rel-card__media {
  aspect-ratio: 1200 / 630;
  overflow: hidden;
  background: var(--gray-50);
}

.rel-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.rel-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-5);
}

.rel-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  margin-top: auto;
  padding-top: var(--space-2);
  font-size: 12.5px;
  font-weight: var(--fw-medium);
  color: var(--fg-muted);
}

.rel-card__sep {
  color: var(--gray-300);
}

.rel-card__title {
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  line-height: 1.4;
  color: var(--fg-1);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
