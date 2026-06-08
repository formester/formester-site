<template>
  <NuxtLink v-if="article" :to="{ path: `/blog/${article.slug}/` }" class="bcard">
    <div v-if="article.coverImg" class="bcard__media">
      <img
        :src="article.coverImg"
        :alt="article.coverImgAlt"
        :title="article.coverImgAlt"
        :width="article.coverImgWidth || 1200"
        :height="article.coverImgHeight || 630"
        loading="lazy"
      />
    </div>
    <div class="bcard__body">
      <h3 class="bcard__title">{{ article.title }}</h3>
      <p class="bcard__desc">{{ article.description }}</p>
      <p class="bcard__meta">
        <span>{{ formatDate(article.publishedAt) }}</span>
        <template v-if="article.readingStats">
          <span class="bcard__sep">·</span>
          <span>{{ article.readingStats.text }}</span>
        </template>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: { type: Object, default: null },
})

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
</script>

<style scoped>
.bcard {
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

.bcard:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.bcard:hover .bcard__title {
  color: var(--violet-600);
}

.bcard__media {
  aspect-ratio: 1200 / 630;
  overflow: hidden;
  background: var(--gray-50);
}

.bcard__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.bcard__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--space-2);
  padding: var(--space-5);
}

.bcard__meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  margin-top: auto;
  padding-top: var(--space-3);
  font-size: 12.5px;
  font-weight: var(--fw-medium);
  color: var(--fg-muted);
}

.bcard__sep {
  color: var(--gray-300);
}

.bcard__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.bcard__desc {
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--fg-2);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

</style>
