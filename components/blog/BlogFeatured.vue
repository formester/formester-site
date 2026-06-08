<template>
  <NuxtLink v-if="article" :to="{ path: `/blog/${article.slug}/` }" class="bfeat">
    <div v-if="article.coverImg" class="bfeat__media">
      <img
        :src="article.coverImg"
        :alt="article.coverImgAlt"
        :title="article.coverImgAlt"
        :width="article.coverImgWidth || 1200"
        :height="article.coverImgHeight || 630"
      />
    </div>
    <div class="bfeat__body">
      <span class="bfeat__badge">Featured</span>
      <p class="bfeat__meta">
        <span>{{ formatDate(article.publishedAt) }}</span>
        <template v-if="article.readingStats">
          <span class="bfeat__sep">·</span>
          <span>{{ article.readingStats.text }}</span>
        </template>
      </p>
      <h3 class="bfeat__title">{{ article.title }}</h3>
      <p class="bfeat__desc">{{ article.description }}</p>
      <span class="bfeat__read">Read article <span aria-hidden="true">→</span></span>
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
.bfeat {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-xs);
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 140ms ease, transform 140ms ease, border-color 140ms ease;
}

.bfeat:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.bfeat__media {
  aspect-ratio: 1200 / 630;
  overflow: hidden;
  background: var(--gray-50);
}

.bfeat__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.bfeat__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-8);
}

.bfeat__badge {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--violet-600);
  background: var(--violet-50);
  border-radius: var(--r-full);
  padding: 5px 12px;
  line-height: 1;
}

.bfeat__meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--fg-3);
}

.bfeat__sep {
  color: var(--gray-300);
}

.bfeat__title {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: var(--fw-bold);
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--fg-1);
  margin: 0;
}

.bfeat__desc {
  font-size: var(--fs-md);
  line-height: 1.6;
  color: var(--fg-2);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.bfeat__read {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--violet-600);
}

.bfeat:hover .bfeat__read {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .bfeat {
    grid-template-columns: 1fr;
  }

  .bfeat__body {
    padding: var(--space-5);
  }
}
</style>
