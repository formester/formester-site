<template>
  <div class="tmpl-detail__two-col">
    <div class="tmpl-detail__main">
      <template v-if="howItWorks.length">
        <h2 class="tmpl-detail__content-h2">How it works</h2>
        <ol class="tmpl-detail__steps">
          <li v-for="(step, index) in howItWorks" :key="index" class="tmpl-detail__step">
            <span class="tmpl-detail__step-number">{{ index + 1 }}</span>
            <span><strong v-if="leadIn(step)" class="tmpl-detail__step-lead">{{ leadIn(step) }}</strong>{{ step.slice(leadIn(step).length) }}</span>
          </li>
        </ol>
      </template>
      <template v-if="aboutTemplate">
        <h2 class="tmpl-detail__content-h2">About this template</h2>
        <div class="tmpl-detail__about-html" v-html="aboutTemplate" />
      </template>
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
        <div v-if="stepCount" class="tmpl-detail__sidebar-row">
          <LucideIcon class="tmpl-detail__sidebar-icon" name="workflow" :size="16" />
          <span class="tmpl-detail__sidebar-text">Steps: <strong>{{ stepCount }}</strong></span>
        </div>
      </div>
      <div v-if="categories?.length" class="tmpl-detail__sidebar-block">
        <h3 class="tmpl-detail__sidebar-h3">Category</h3>
        <div class="tmpl-detail__chips">
          <FTag v-for="cat in categories" :key="cat.name" :to="categoryUrl(cat)">{{ cat.name }}</FTag>
        </div>
      </div>
      <div v-if="form" class="tmpl-detail__sidebar-block">
        <h3 class="tmpl-detail__sidebar-h3">Form used</h3>
        <NuxtLink :to="form.to" class="tmpl-detail__form-link">
          <LucideIcon name="file-text" :size="16" />
          {{ form.name }}
        </NuxtLink>
      </div>
    </aside>
  </div>
</template>

<script setup>
import FTag from '@/components/UI/FTag.vue'

const props = defineProps({
  aboutTemplate: { type: String, default: '' },
  updatedAt:     { type: String, default: null },
  categories:    { type: Array, default: () => [] },
  // Root of the category pages the chips link to, without a trailing slash.
  categoryBasePath: { type: String, default: '/templates/categories' },
  // Workflow templates only: the numbered steps, e.g. ["The manager approves or rejects the claim."]
  howItWorks: { type: Array, default: () => [] },
  stepCount: { type: Number, default: 0 },
  // The form the workflow comes with, e.g. {name: "Expense claim form", to: "/templates/expense-claim-form/"}
  form: { type: Object, default: null },
})

// A step's opening sentence when it is a short title, e.g. "Form submitted." in "Form submitted. An employee fills in..."
const leadIn = (step) => step.match(/^[^.]{1,40}\.(?=\s)/)?.[0] || ''

const categoryUrl = (category) => (category.slug ? `${props.categoryBasePath}/${category.slug}/` : '')

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

/* How it works */
.tmpl-detail__steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin: 0 0 var(--space-10);
  padding: 0;
  list-style: none;
}

.tmpl-detail__step {
  display: flex;
  gap: var(--space-3);
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
  color: var(--fg-2);
}

.tmpl-detail__step-lead {
  color: var(--fg-1);
}

.tmpl-detail__step-number {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--r-full);
  background: var(--violet-50);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--violet-700);
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

.tmpl-detail__form-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--fg-1);
  text-decoration: none;
  transition: border-color 0.15s;
}

.tmpl-detail__form-link:hover {
  border-color: var(--violet-300);
  color: var(--violet-700);
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
