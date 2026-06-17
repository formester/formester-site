<template>
  <section class="fcg-section" :style="{ background }">
    <div class="fcg-inner">
      <!-- Header -->
      <SectionHeader :eyebrow="eyebrow" :title="title" :description="description" />

      <!-- Grid -->
      <div class="fcg-grid" :style="gridStyle">
        <article v-for="(card, i) in cards" :key="i" class="fcg-card">
          <div v-if="card.icon" class="fcg-card__icon" v-html="card.icon" />
          <span v-if="card.tag" class="fcg-tag" :class="`fcg-tag--${card.tagColor || 'violet'}`">
            {{ card.tag }}
          </span>
          <h3 class="fcg-card__title">{{ card.title }}</h3>
          <p class="fcg-card__body">{{ card.body }}</p>
          <div v-if="card.mockHtml" class="fcg-card__mock" v-html="card.mockHtml" />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  columns: { type: [String, Number], default: 3 },
  background: { type: String, default: '' },
  cards: { type: Array, default: () => [] },
})

const gridStyle = computed(() => ({
  '--fcg-cols': String(props.columns || 3),
}))
</script>

<style scoped>
.fcg-section {
  padding: var(--space-16) var(--space-6);
}

.fcg-inner {
  max-width: 1200px;
  margin: 0 auto;
}

/* Grid */
.fcg-grid {
  display: grid;
  grid-template-columns: repeat(var(--fcg-cols, 3), 1fr);
  gap: var(--space-4);
}

@media (max-width: 900px) {
  .fcg-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .fcg-grid {
    grid-template-columns: 1fr;
  }
}

/* Card */
.fcg-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  border: 1px solid var(--gray-200);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6);
  transition:
    box-shadow 160ms ease,
    transform 160ms ease,
    border-color 160ms ease;
}

.fcg-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
  border-color: #e0d8f5;
}

.fcg-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--r-lg, 12px);
  background: var(--violet-50, #f5eeff);
  color: var(--violet-600, #5b2cc9);
  margin-bottom: var(--space-4);
}

.fcg-card__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.fcg-tag {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: var(--fw-semibold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: var(--r-full);
  margin-bottom: var(--space-3);
}

.fcg-tag--violet {
  color: var(--violet-600, #5b2cc9);
  background: var(--violet-50, #f5eeff);
}
.fcg-tag--green {
  color: #027a48;
  background: #ecfdf3;
}
.fcg-tag--amber {
  color: #b54708;
  background: #fffaeb;
}
.fcg-tag--blue {
  color: #175cd3;
  background: #eff8ff;
}
.fcg-tag--rose {
  color: #c01573;
  background: #fdf2fa;
}

.fcg-card__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin: 0 0 var(--space-2);
}

.fcg-card__body {
  font-size: var(--fs-sm);
  line-height: var(--lh-lg);
  color: var(--fg-2);
  margin: 0;
}

.fcg-card__mock {
  width: 100%;
  margin-top: var(--space-4);
  border: 1px solid var(--gray-200);
  border-radius: var(--r-lg);
  background: var(--bg-grey-50, #f9fafb);
  padding: var(--space-3);
}
</style>
