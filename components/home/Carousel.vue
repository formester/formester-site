<template>
  <section class="testi-v2">
    <div class="testi-v2__inner">
      <div class="testi-v2__header">
        <SectionBadge v-if="badge" :text="badge" class="testi-v2__badge" />
        <h2 class="testi-v2__heading">{{ heading }}</h2>
      </div>

      <div class="testi-v2__grid">
        <div
          v-for="(t, idx) in testimonials"
          :key="t.id || idx"
          class="testi-v2__card"
        >
          <div class="testi-v2__stars">
            <span v-for="s in (t.rating || 5)" :key="s" class="testi-v2__star">★</span>
          </div>
          <p class="testi-v2__quote">"{{ t.review || t.quote }}"</p>
          <div class="testi-v2__author">
            <img
              v-if="t.image?.url || t.authorImage?.url"
              :src="t.image?.url || t.authorImage?.url"
              :alt="t.authorName || t.name"
              class="testi-v2__avatar"
            />
            <div v-else class="testi-v2__avatar testi-v2__avatar--fallback">
              {{ (t.authorName || t.name || '?')[0] }}
            </div>
            <div class="testi-v2__author-meta">
              <div class="testi-v2__author-name">{{ t.authorName || t.name }}</div>
              <div class="testi-v2__author-title">{{ t.authorDesignation || t.designation }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionBadge from '@/components/UI/SectionBadge.vue'

export default {
  name: 'TestimonialsV2',
  components: { SectionBadge },
  props: {
    badge:        { type: String, default: '' },
    heading:      { type: String, default: '' },
    testimonials: { type: Array,  default: () => [] },
  },
}
</script>

<style scoped>
.testi-v2 {
  padding: var(--space-24) var(--space-6);
  background: var(--bg-primary);
  border-top: 1px solid var(--border-light);
}

.testi-v2__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.testi-v2__header { margin-bottom: var(--space-12); }

.testi-v2__badge { margin-bottom: var(--space-3); }

.testi-v2__heading {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.2;
  letter-spacing: -0.5px;
  max-width: 480px;
}

.testi-v2__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.testi-v2__card {
  background: var(--bg-violet-25);
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: box-shadow 140ms ease;
}

.testi-v2__card:hover {
  box-shadow: var(--shadow-lg);
}

.testi-v2__stars { display: flex; gap: 2px; }

.testi-v2__star {
  color: var(--warning-500);
  font-size: var(--fs-md);
}

.testi-v2__quote {
  font-size: var(--fs-sm);
  color: var(--fg-strong);
  line-height: 1.7;
  flex: 1;
}

.testi-v2__author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-light);
}

.testi-v2__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--r-half);
  object-fit: cover;
  flex-shrink: 0;
}

.testi-v2__avatar--fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--violet-50);
  color: var(--violet-500);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
}

.testi-v2__author-name {
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
}

.testi-v2__author-title {
  font-size: var(--fs-xs);
  color: var(--fg-2);
}

@media (max-width: 900px) {
  .testi-v2__grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .testi-v2__heading { font-size: 26px; max-width: 100%; }
}

@media (max-width: 600px) {
  .testi-v2 { padding: var(--space-16) var(--space-5); }

  .testi-v2__grid { grid-template-columns: 1fr; }

  .testi-v2__card { padding: var(--space-6); }
}
</style>
