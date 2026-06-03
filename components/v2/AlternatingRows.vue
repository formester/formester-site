<template>
  <section class="zz-section" :style="{ background }">
    <div class="zz-inner">
      <SectionHeader :eyebrow="eyebrow" :title="title" :description="description" />

      <div class="zz-rows">
        <div v-for="(row, i) in rows" :key="i" class="zz-row" :class="{ 'zz-row--flip': i % 2 === 1 }">
          <div class="zz-media">
            <div v-if="row.mediaHtml" v-html="row.mediaHtml" />
            <img v-else-if="row.image?.url" :src="row.image.url" :alt="row.title" class="zz-img" />
          </div>
          <div class="zz-text">
            <span v-if="row.kicker" class="zz-kicker">{{ row.kicker }}</span>
            <h3 class="zz-title">{{ row.title }}</h3>
            <p v-if="row.body" class="zz-body">{{ row.body }}</p>
            <ul v-if="row.bullets && row.bullets.length" class="zz-list">
              <li v-for="(b, bi) in row.bullets" :key="bi">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                {{ b.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/v2/SectionHeader.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  background: { type: String, default: '' },
  rows: { type: Array, default: () => [] },
})
</script>

<style scoped>
.zz-section {
  padding: var(--space-16) var(--space-6);
}
.zz-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.zz-rows {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.zz-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}
.zz-row--flip .zz-media {
  order: 2;
}

.zz-media {
  min-width: 0;
}
.zz-img {
  width: 100%;
  display: block;
  border-radius: var(--r-xl);
  border: 1px solid var(--gray-200);
}

.zz-kicker {
  display: inline-block;
  font-size: 11px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--violet-500);
  margin-bottom: var(--space-3);
}
.zz-title {
  font-size: clamp(22px, 2.4vw, 28px);
  font-weight: var(--fw-semibold);
  letter-spacing: -0.02em;
  color: var(--fg-1);
  margin: 0 0 var(--space-3);
}
.zz-body {
  font-size: var(--fs-md);
  line-height: 1.65;
  color: var(--fg-2);
  margin: 0;
}

.zz-list {
  list-style: none;
  padding: 0;
  margin: var(--space-4) 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.zz-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--fg-1);
}
.zz-list svg {
  color: var(--violet-500);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 860px) {
  .zz-row {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  .zz-row--flip .zz-media {
    order: 0;
  }
}
</style>
