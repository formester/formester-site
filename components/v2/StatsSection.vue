<template>
  <section class="stats-section">
    <div class="stats-section__inner">
      <div class="stats-section__left">
        <SectionBadge v-if="badge" :text="badge" class="stats-section__badge" />
        <h2 class="stats-section__heading">{{ heading }}</h2>
        <p v-if="description" class="stats-section__desc">{{ description }}</p>
      </div>

      <div class="stats-section__right">
        <div v-for="stat in stats" :key="stat.id" class="stats-section__stat">
          <div class="stats-section__value">{{ stat.value }}</div>
          <div class="stats-section__label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionBadge from '@/components/UI/SectionBadge.vue'

defineProps({
  badge:       { type: String, default: '' },
  heading:     { type: String, default: '' },
  description: { type: String, default: '' },
  stats:       { type: Array,  default: () => [] },
  background:  { type: String, default: '' },
})
</script>

<style scoped>
.stats-section {
  padding: var(--space-24) var(--space-6);
  border-top: 1px solid var(--border-light);
  background: v-bind(background);
}

.stats-section__inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-20);
  align-items: center;
}

.stats-section__badge { margin-bottom: var(--space-4); }

.stats-section__heading {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin-bottom: var(--space-4);
}

.stats-section__desc {
  font-size: var(--fs-md);
  color: var(--fg-2);
  line-height: 1.7;
  max-width: 420px;
}

.stats-section__right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: var(--border-light);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  overflow: hidden;
}

.stats-section__stat {
  background: var(--bg-primary);
  padding: var(--space-9) var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.stats-section__stat:first-child  { border-radius: calc(var(--r-2xl) - 2px) 0 0 0; }
.stats-section__stat:nth-child(2) { border-radius: 0 calc(var(--r-2xl) - 2px) 0 0; }
.stats-section__stat:nth-child(3) { border-radius: 0 0 0 calc(var(--r-2xl) - 2px); }
.stats-section__stat:last-child   { border-radius: 0 0 calc(var(--r-2xl) - 2px) 0; }

.stats-section__value {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  letter-spacing: -1px;
  line-height: 1;
}

.stats-section__label {
  font-size: var(--fs-sm);
  color: var(--fg-2);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .stats-section__inner {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  .stats-section__desc { max-width: 100%; }
}

@media (max-width: 500px) {
  .stats-section { padding: var(--space-16) var(--space-5); }

  .stats-section__heading { font-size: 26px; }

  .stats-section__stat { padding: var(--space-5) var(--space-4); }

  .stats-section__value { font-size: 36px; }
}
</style>
