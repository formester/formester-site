<template>
  <section class="steps-section">
    <div class="steps-inner">
      <div class="steps-grid">

        <!-- Left: sticky panel -->
        <div class="steps-left">
          <SectionBadge v-if="badge" :text="badge" class="steps-badge" />
          <h2 class="steps-heading">{{ heading }}</h2>
          <p v-if="description" class="steps-description">{{ description }}</p>
          <div class="steps-cta">
            <FButton
              v-for="btn in buttons"
              :key="btn.id"
              :href="btn.link"
              :variant="btn.type === 'Primary' ? 'primary' : 'secondary'"
              size="lg"
            >
              {{ btn.text }}
              <IconArrowRight v-if="btn.icon" />
            </FButton>
          </div>
        </div>

        <!-- Right: scrolling step cards -->
        <div class="steps-cards">
          <div
            v-for="(step, idx) in steps"
            :key="step.id || idx"
            class="step-card"
          >
            <span class="step-num">{{ String(idx + 1).padStart(2, '0') }}</span>
            <div>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-body">{{ step.description }}</p>
              <div v-if="step.image?.url" class="step-img-wrap">
                <img :src="step.image.url" :alt="step.title" class="step-img" />
              </div>
              <div v-if="step.rawHtml" v-html="step.rawHtml" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

defineProps({
  badge:       { type: String, default: '' },
  heading:     { type: String, default: '' },
  description: { type: String, default: '' },
  buttons:     { type: Array,  default: () => [] },
  steps:       { type: Array,  default: () => [] },
  background:  { type: String, default: '' },
})
</script>

<style scoped>
.steps-section {
  padding: 6rem 1.5rem;
  background: var(--gray-50);
  border-top: 1px solid var(--gray-200);
  background: v-bind(background);
}

.steps-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: start;
}

@media (min-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr 1.15fr;
    gap: 5rem;
  }

  .steps-left {
    position: sticky;
    top: 90px;
  }
}

.steps-badge {
  margin-bottom: var(--space-4);
}

.steps-heading {
  font-size: clamp(30px, 3.2vw, 44px);
  font-weight: var(--fw-bold);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--fg-1);
  margin-top: 14px;
  margin-bottom: 0;
}

.steps-description {
  font-size: var(--fs-md);
  line-height: 1.6;
  color: var(--fg-2);
  margin-top: 18px;
  margin-bottom: 0;
  max-width: 400px;
}

.steps-cta {
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.steps-cards {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.step-card {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: var(--space-4);
  border: 1px solid var(--gray-200);
  border-radius: var(--r-2xl);
  background: #fff;
  padding: 26px 28px;
  transition: background 140ms;
}

.step-card:hover {
  background: var(--violet-25);
}

.step-num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: var(--fw-medium);
  color: var(--fg-muted);
  padding-top: 3px;
}

.step-title {
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  letter-spacing: -0.02em;
  color: var(--fg-1);
  margin-bottom: var(--space-2);
  margin-top: 0;
}

.step-body {
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--fg-2);
  margin-bottom: var(--space-4);
  margin-top: 0;
}

.step-img-wrap {
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--gray-200);
}

.step-img {
  width: 100%;
  display: block;
}
</style>
