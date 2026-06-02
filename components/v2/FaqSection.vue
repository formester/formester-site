<template>
  <section class="faq-section">
    <div class="faq-inner">
      <div class="faq-layout" :class="{ 'faq-layout--centered': centered }">
        <!-- Left: heading + CTA -->
        <div class="faq-left">
          <div v-if="badge" class="faq-badge-row">
            <span class="faq-badge-line"></span>
            <span class="faq-badge-text">{{ badge }}</span>
            <span v-if="centered" class="faq-badge-line"></span>
          </div>

          <h2 class="faq-heading" style="font-size: clamp(28px, 3.5vw, 44px)">
            {{ resolvedHeading }}
          </h2>

          <p class="faq-description">{{ description || DEFAULT_DESCRIPTION }}</p>

          <FButton v-if="ctaButton" variant="secondary" size="lg" :href="ctaButton.link" class="faq-cta">
            {{ ctaButton.text }}
            <span aria-hidden="true">
              <ArrowRightIcon class="w-4 h-4" />
            </span>
          </FButton>
        </div>

        <!-- Right: accordion -->
        <div class="faq-right">
          <div v-for="item in resolvedFaqs" :key="item.id" class="faq-item">
            <button @click="toggle(item.id)" class="faq-trigger">
              <span class="faq-question">{{ item.question }}</span>

              <span class="faq-icon" :class="openId === item.id ? 'faq-icon--open' : 'faq-icon--closed'">
                <icons-close-icon v-if="openId === item.id" />
                <icons-plus-icon v-else />
              </span>
            </button>

            <div v-show="openId === item.id" class="faq-answer">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import FButton from '../UI/FButton.vue'

const props = defineProps({
  badge: { type: String, default: 'FAQ' },
  title: { type: [String, Array], default: null },
  description: { type: String, default: null },
  faqList: { type: Array, default: () => [] },
  ctaButton: { type: Object, default: null },
  background: { type: String, default: '' },
  centered: { type: Boolean, default: false },
})

const DEFAULT_DESCRIPTION = 'Find answers to common questions below, or reach out to our team for more help.'
const DEFAULT_HEADING = 'Questions we get a lot.'

const resolvedHeading = computed(() => {
  if (Array.isArray(props.title)) {
    const text = props.title.map((t) => t.text).join('')
    return text || DEFAULT_HEADING
  }
  return props.title || DEFAULT_HEADING
})

const resolvedFaqs = computed(() =>
  props.faqList.map((faq, i) => ({
    ...faq,
    id: faq.id ?? i,
    question: faq.question || faq.header,
    answer: faq.answer || faq.body,
  })),
)

const openId = ref(null)
const toggle = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>

<style scoped>
.faq-section {
  padding-block: 5rem;
  background: v-bind(background);
}

.faq-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: 1.5rem;
}

.faq-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .faq-layout {
    flex-direction: row;
    gap: 5rem;
  }

  .faq-left {
    width: 38%;
    flex-shrink: 0;
    position: sticky;
    top: 6rem;
    align-self: flex-start;
  }
}

/* Centered variant: heading stacked on top, accordion in a centered column */
.faq-layout--centered {
  align-items: center;
}

.faq-layout--centered .faq-left {
  width: 100%;
  text-align: center;
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faq-layout--centered .faq-badge-row {
  justify-content: center;
}

.faq-layout--centered .faq-right {
  width: 100%;
  max-width: 720px;
}

@media (min-width: 1024px) {
  .faq-layout--centered {
    flex-direction: column;
    gap: 3rem;
  }

  .faq-layout--centered .faq-left {
    width: 100%;
  }
}

.faq-badge-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.faq-badge-line {
  display: block;
  width: 1.25rem;
  height: 1px;
  background: var(--violet-500);
}

.faq-badge-text {
  color: var(--violet-500);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  letter-spacing: 0.05em;
}

.faq-heading {
  font-weight: var(--fw-bold);
  line-height: 1.2;
  color: var(--fg-1);
  margin-bottom: var(--space-4);
}

.faq-description {
  color: var(--fg-2);
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
  margin-bottom: var(--space-8);
}

.faq-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 10px var(--space-5);
  border-radius: var(--r-full);
  border: 1px solid var(--gray-300);
  color: var(--fg-1);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  text-decoration: none;
  transition: background 150ms;
}

.faq-cta:hover {
  background: var(--gray-100);
}

.faq-right {
  flex: 1;
  min-width: 0;
  border-top: 1px solid var(--gray-200);
}

.faq-item {
  border-bottom: 1px solid var(--gray-200);
}

.faq-trigger {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--space-3);
  padding-inline: 0;
  text-align: left;
  gap: var(--space-4);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.faq-question {
  font-weight: var(--fw-medium);
  color: var(--fg-1);
  font-size: 15px;
  line-height: 1.375;
}

.faq-icon {
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--r-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 150ms,
    border 150ms;
}

.faq-icon--open {
  background: var(--violet-500);
  color: #fff;
}

.faq-icon--closed {
  border: 1px solid var(--gray-300);
  color: var(--fg-muted);
}

.faq-answer {
  padding-bottom: var(--space-3);
  color: var(--fg-2);
  font-size: var(--fs-sm);
  line-height: var(--lh-lg);
  padding-right: 3rem;
}
</style>
