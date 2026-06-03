<template>
  <section class="sb-section" :style="{ background }">
    <div class="sb-inner">
      <!-- Violet gradient band: row of stats -->
      <div v-if="variant !== 'split'" class="sb-band">
        <SectionHeader :eyebrow="eyebrow" :title="heading" tone="inverse" size="sm" spacing="none" />
        <div class="sb-band__row">
          <div v-for="(s, i) in stats" :key="i" class="sb-band__stat">
            <span class="sb-band__value">{{ s.value }}</span>
            <span class="sb-band__label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- Split: heading/body beside one big stat -->
      <div v-else class="sb-split">
        <div class="sb-split__text">
          <SectionHeader :eyebrow="eyebrow" :title="heading" :description="description" align="left" spacing="none" />
        </div>
        <div v-if="stats.length" class="sb-split__stat">
          <span class="sb-split__value">{{ stats[0].value }}</span>
          <span class="sb-split__label">{{ stats[0].label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/v2/SectionHeader.vue'

defineProps({
  variant: { type: String, default: 'band' },
  eyebrow: { type: String, default: '' },
  heading: { type: String, default: '' },
  description: { type: String, default: '' },
  background: { type: String, default: '' },
  stats: { type: Array, default: () => [] },
})
</script>

<style scoped>
.sb-section {
  padding: var(--space-16) var(--space-6);
}
.sb-inner {
  max-width: 1120px;
  margin: 0 auto;
}

/* --- Band variant --- */
.sb-band {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #472594 0%, #6434d0 60%, #7c4ce0 100%);
  border-radius: var(--r-2xl);
  padding: var(--space-12) var(--space-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}
.sb-band::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(80% 120% at 50% -10%, rgba(255, 255, 255, 0.16), transparent 60%);
  pointer-events: none;
}
.sb-band__row {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 800px;
}
.sb-band__stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
}
.sb-band__stat + .sb-band__stat {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
.sb-band__value {
  font-size: clamp(28px, 3.4vw, 38px);
  font-weight: var(--fw-bold);
  letter-spacing: -0.02em;
  color: #fff;
}
.sb-band__label {
  font-size: var(--fs-sm);
  color: rgba(255, 255, 255, 0.74);
  text-align: center;
}

@media (max-width: 640px) {
  .sb-band__row {
    flex-direction: column;
    gap: var(--space-6);
  }
  .sb-band__stat + .sb-band__stat {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: var(--space-6);
  }
}

/* --- Split variant --- */
.sb-split {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-12);
  align-items: center;
}
.sb-split__stat {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  align-items: flex-start;
}
.sb-split__value {
  font-size: clamp(56px, 9vw, 96px);
  font-weight: var(--fw-bold);
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--violet-500);
  font-family: var(--font-display);
  font-style: italic;
}
.sb-split__label {
  font-size: var(--fs-md);
  color: var(--fg-2);
}

@media (max-width: 860px) {
  .sb-split {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}
</style>
