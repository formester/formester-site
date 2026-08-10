<template>
  <div class="tmpl-detail__two-col">
    <div class="tmpl-detail__main">
      <h2 class="tmpl-detail__content-h2">About this template</h2>
      <div class="tmpl-detail__about-html" v-html="aboutTemplate" />
    </div>
    <aside class="tmpl-detail__sidebar">
      <div class="tmpl-detail__sidebar-block">
        <h3 class="tmpl-detail__sidebar-h3">Details</h3>
        <div class="tmpl-detail__sidebar-row">
          <svg class="tmpl-detail__sidebar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
            aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span class="tmpl-detail__sidebar-text">Last updated: <strong>{{ formattedDate }}</strong></span>
        </div>
      </div>
      <div v-if="categories?.length" class="tmpl-detail__sidebar-block">
        <h3 class="tmpl-detail__sidebar-h3">Category</h3>
        <div class="tmpl-detail__chips">
          <template v-for="cat in categories" :key="cat.name">
            <NuxtLink
              v-if="cat.slug"
              :to="`/templates/categories/${cat.slug}`"
              class="tmpl-detail__chip tmpl-detail__chip--link"
            >{{ cat.name }}</NuxtLink>
            <span v-else class="tmpl-detail__chip">{{ cat.name }}</span>
          </template>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
const props = defineProps({
  aboutTemplate: { type: String, default: '' },
  updatedAt:     { type: String, default: null },
  categories:    { type: Array, default: () => [] },
})

const formattedDate = computed(() => {
  if (!props.updatedAt) return ''
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(props.updatedAt))
})
</script>

<style scoped>
.tmpl-detail__two-col {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-10) var(--space-6);
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: var(--space-14);
  align-items: start;
}

.tmpl-detail__content-h2 {
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.25;
  margin-bottom: var(--space-6);
}

/* About HTML rich text */
.tmpl-detail__about-html :deep(h1),
.tmpl-detail__about-html :deep(h2),
.tmpl-detail__about-html :deep(h3),
.tmpl-detail__about-html :deep(h4) {
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  margin: var(--space-8) 0 var(--space-3);
  line-height: 1.3;
}

.tmpl-detail__about-html :deep(h1) {
  font-size: clamp(20px, 2vw, 28px);
}

.tmpl-detail__about-html :deep(h2) {
  font-size: clamp(18px, 1.8vw, 24px);
}

.tmpl-detail__about-html :deep(h3) {
  font-size: var(--fs-xl);
}

.tmpl-detail__about-html :deep(h4) {
  font-size: var(--fs-lg);
}

.tmpl-detail__about-html :deep(p) {
  margin: var(--space-4) 0;
  color: var(--fg-2);
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
}

.tmpl-detail__about-html :deep(ul),
.tmpl-detail__about-html :deep(ol) {
  margin: var(--space-4) 0;
  padding-left: var(--space-6);
  color: var(--fg-2);
}

.tmpl-detail__about-html :deep(li) {
  margin: var(--space-2) 0;
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
}

.tmpl-detail__about-html :deep(a) {
  color: var(--violet-500);
  text-decoration: underline;
}

/* Sidebar */
.tmpl-detail__sidebar {
  position: sticky;
  top: 170px;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.tmpl-detail__sidebar-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.tmpl-detail__sidebar-h3 {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  letter-spacing: 0.01em;
}

.tmpl-detail__sidebar-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.tmpl-detail__sidebar-icon {
  color: var(--fg-3);
  flex-shrink: 0;
}

.tmpl-detail__sidebar-text {
  font-size: var(--fs-sm);
  color: var(--fg-2);
}

.tmpl-detail__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tmpl-detail__chip {
  display: inline-block;
  padding: 0 var(--space-3);
  border: 1px solid var(--border-dark);
  border-radius: var(--r-full);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--fg-2);
  background: var(--bg-primary);
  text-decoration: none;
}

.tmpl-detail__chip--link:hover {
  border-color: var(--violet-500);
  color: var(--violet-500);
}

.tmpl-detail__creator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.tmpl-detail__creator-avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--r-lg);
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.tmpl-detail__creator-name {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--violet-500);
}

@media (max-width: 1024px) {
  .tmpl-detail__two-col {
    grid-template-columns: 1fr;
  }

  .tmpl-detail__sidebar {
    position: static;
  }
}

@media (max-width: 640px) {
  .tmpl-detail__two-col {
    padding: var(--space-8) var(--space-4);
  }
}
</style>
