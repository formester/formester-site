<template>
  <section class="uc-grid">
    <div class="uc-grid__inner">
      <div class="uc-grid__header">
        <div class="uc-grid__header-left">
          <SectionBadge v-if="badge" :text="badge" class="uc-grid__badge" />
          <h2 class="uc-grid__heading">{{ heading }}</h2>
        </div>
        <FButton v-if="cta?.link" :href="cta.link" variant="ghost" size="lg" class="uc-grid__see-all">
          {{ cta.text || 'See all use cases' }} 
        </FButton>
      </div>

      <div class="uc-grid__cards">
        <div
          v-for="(item, idx) in usecases"
          :key="item.id || idx"
          class="uc-grid__card"
        >
          <div class="uc-grid__card-content">
            <span v-if="item.category" class="uc-grid__card-category">{{ item.category }}</span>
            <h3 class="uc-grid__card-title">{{ item.title }}</h3>
            <p class="uc-grid__card-desc">{{ item.description }}</p>
          </div>
          <div v-if="item.image?.url" class="uc-grid__card-img-wrap">
            <img :src="item.image.url" :alt="item.title" class="uc-grid__card-img" />
          </div>
          <div v-else class="uc-grid__card-placeholder"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

export default {
  name: 'UsecasesGridV2',
  components: { FButton, SectionBadge },
  props: {
    badge:     { type: String, default: '' },
    heading:   { type: String, default: '' },
    cta:       { type: Object, default: () => null },
    usecases:  { type: Array,  default: () => [] },
  },
}
</script>

<style scoped>
.uc-grid {
  padding: var(--space-24) var(--space-6);
  background: var(--bg-primary);
  border-top: 1px solid var(--border-light);
}

.uc-grid__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.uc-grid__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

.uc-grid__header-left {
  display: flex;
  flex-direction: column;
}

.uc-grid__badge { margin-bottom: var(--space-3); }

.uc-grid__heading {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.15;
  letter-spacing: -0.5px;
  max-width: 560px;
}

.uc-grid__see-all {
  flex-shrink: 0;
  margin-bottom: 6px;
}

.uc-grid__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.uc-grid__card {
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  overflow: hidden;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  transition: box-shadow 140ms ease, border-color 140ms ease;
}

.uc-grid__card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--violet-300);
}

.uc-grid__card-content { padding: var(--space-7) var(--space-7) var(--space-5); }

.uc-grid__card-category {
  display: inline-block;
  font-size: 11px;
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin-bottom: var(--space-2);
}

.uc-grid__card-title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  margin-bottom: var(--space-2);
  line-height: 1.3;
}

.uc-grid__card-desc {
  font-size: var(--fs-sm);
  color: var(--fg-2);
  line-height: 1.6;
}

.uc-grid__card-img-wrap {
  flex: 1;
  overflow: hidden;
  border-top: 1px solid var(--border-light);
}

.uc-grid__card-img { width: 100%; display: block; }

.uc-grid__card-placeholder {
  flex: 1;
  min-height: 160px;
  background: linear-gradient(135deg, var(--bg-violet-25) 0%, var(--bg-violet-50) 100%);
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 8px,
    rgba(100, 52, 208, 0.04) 8px,
    rgba(100, 52, 208, 0.04) 16px
  );
}

@media (max-width: 640px) {
  .uc-grid__header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }
  .uc-grid__heading { font-size: 26px; }
}

@media (max-width: 480px) {
  .uc-grid { padding: var(--space-16) var(--space-5); }

  .uc-grid__cards { grid-template-columns: 1fr; }

  .uc-grid__card-content { padding: var(--space-5) var(--space-5) 14px; }
}
</style>
