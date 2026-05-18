<template>
  <section class="int-grid">
    <div class="int-grid__inner">
      <div class="int-grid__header">
        <SectionBadge v-if="badge" :text="badge" class="int-grid__badge" />
        <h2 class="int-grid__heading">{{ heading }}</h2>
        <p v-if="description" class="int-grid__desc">{{ description }}</p>
      </div>

      <div class="int-grid__logos">
        <div
          v-for="(item, idx) in integrations"
          :key="item.id || idx"
          class="int-grid__logo-cell"
        >
          <img
            v-if="item.image?.url"
            :src="item.image.url"
            :alt="item.name || item.imageAlt || 'Integration'"
            class="int-grid__logo-img"
          />
          <span v-else class="int-grid__logo-name">{{ item.name || item.imageAlt }}</span>
        </div>
      </div>

      <div v-if="cta?.link" class="int-grid__footer">
        <FButton :href="cta.link" variant="ghost" size="md">
          {{ cta.text || 'Browse all integrations' }} ↓
        </FButton>
      </div>
    </div>
  </section>
</template>

<script>
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

export default {
  name: 'IntegrationsGridV2',
  components: { FButton, SectionBadge },
  props: {
    badge:        { type: String, default: '' },
    heading:      { type: String, default: '' },
    description:  { type: String, default: '' },
    integrations: { type: Array,  default: () => [] },
    cta:          { type: Object, default: () => null },
  },
}
</script>

<style scoped>
.int-grid {
  padding: var(--space-24) var(--space-6);
  background: var(--bg-grey-50);
  border-top: 1px solid var(--border-light);
}

.int-grid__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.int-grid__header {
  text-align: center;
  margin-bottom: var(--space-14);
}

.int-grid__badge { margin-bottom: var(--space-3); }

.int-grid__heading {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-bottom: var(--space-4);
}

.int-grid__desc {
  font-size: var(--fs-md);
  color: var(--fg-2);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
}

.int-grid__logos {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2px;
  background: var(--border-light);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  overflow: hidden;
  margin-bottom: var(--space-10);
}

.int-grid__logo-cell {
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-7) var(--space-4);
  transition: background 140ms ease;
}

.int-grid__logo-cell:hover { background: var(--bg-violet-25); }

.int-grid__logo-img {
  max-width: 80px;
  max-height: 32px;
  object-fit: contain;
  opacity: 0.75;
  transition: opacity 140ms ease;
}

.int-grid__logo-cell:hover .int-grid__logo-img { opacity: 1; }

.int-grid__logo-name {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-2);
}

.int-grid__footer { text-align: center; }

@media (max-width: 900px) {
  .int-grid__logos { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 600px) {
  .int-grid { padding: var(--space-16) var(--space-5); }

  .int-grid__heading { font-size: 26px; }

  .int-grid__logos { grid-template-columns: repeat(4, 1fr); }

  .int-grid__logo-cell { padding: var(--space-5) var(--space-2); }

  .int-grid__logo-img { max-width: 56px; max-height: 24px; }
}
</style>
