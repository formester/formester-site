<template>
  <section class="container py-2 py-lg-5">
    <SectionTitle :heading="[{ id: 1, text: 'Frequently Asked Questions', highlight: false }]" />

    <div class="row">
      <div
        v-for="(category, cIdx) in faqQuestions"
        :key="cIdx"
        class="mb-5 mt-4"
        :class="getCategoryClasses(cIdx)"
      >
        <h3 class="faq__heading">{{ category?.title }}</h3>

        <!-- each category gets its own accordion root id (kept for semantics) -->
        <div class="accordion accordion-flush faq-container" :id="`accordionFaqs-${cIdx}`">
          <div
            v-for="(faq, fIdx) in category.faqs"
            :key="fIdx"
            class="accordion-item"
          >
            <div class="accordion-header">
              <h3>
                <button
                  class="accordion-button"
                  :class="{ collapsed: openByCategory[cIdx] !== fIdx }"
                  type="button"
                  :aria-expanded="openByCategory[cIdx] === fIdx ? 'true' : 'false'"
                  :aria-controls="`collapse-${cIdx}-${fIdx}`"
                  @click="toggle(cIdx, fIdx)"
                >
                  {{ faq.question }}
                  <NuxtImg
                    src="/chevron-down.svg"
                    class="chevron-icon"
                    :class="{ open: openByCategory[cIdx] === fIdx }"
                    width="20"
                    height="20"
                    alt="Chevron"
                  />
                </button>
              </h3>
            </div>

            <div
              :id="`collapse-${cIdx}-${fIdx}`"
              class="accordion-collapse"
              :class="{ show: openByCategory[cIdx] === fIdx, collapse: openByCategory[cIdx] !== fIdx }"
              role="region"
              :aria-labelledby="`heading-${cIdx}-${fIdx}`"
              :data-bs-parent="`#accordionFaqs-${cIdx}`"
            >
              <MarkdownContent
                v-if="faq.answerMarkdown"
                class="accordion-body mb-2"
                :content="faq.answerMarkdown"
              />
              <div v-else class="accordion-body text-start">
                <p class="mb-2">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- /col -->
    </div> <!-- /row -->
  </section>
</template>

<script setup>
import { reactive } from 'vue'
// If you're not using auto-imported components, keep this import:
import MarkdownContent from '~/components/MarkdownContent.vue'

const props = defineProps({
  faqQuestions: {
    type: Array,
    required: true
  }
})

/** openByCategory keeps the open faq index per category, e.g. { 0: 2, 1: null } */
const openByCategory = reactive({})

function toggle(catIdx, faqIdx) {
  openByCategory[catIdx] =
    openByCategory[catIdx] === faqIdx ? null : faqIdx
}

function getCategoryClasses(idx) {
  return [
    idx === props.faqQuestions.length - 1 ? 'col' : 'col-md-6',
    idx % 2 === 0 ? 'pe-md-5' : 'ps-md-5'
  ]
}
</script>

<style scoped>
.row {
  margin-top: 64px;
}

.faq__heading {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 2.5rem;
  color: var(--clr-text-primary);
  text-align: left;
}

.accordion-item {
  border: none;
  border-bottom: 1px solid #e5e7eb;
  background: none;
  font-size: var(--ft-small-body);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
}

.accordion-header {
  background: none;
  border: none;
}

.accordion-button {
  font-size: 18px;
  font-weight: 500;
  color: var(--clr-text-primary);
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0.9rem 0;
  outline: none;
  transition: color 0.15s;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
}

.chevron-icon {
  margin-left: auto;
  transition: transform 0.3s, filter 0.2s;
  filter: grayscale(1) brightness(0.7);
  margin-top: 4px;
}
.chevron-icon.open {
  transform: rotate(180deg);
  filter: invert(29%) sepia(60%) saturate(7497%) hue-rotate(243deg)
    brightness(89%) contrast(101%);
}

.accordion-button::after {
  display: none !important;
}

.accordion-button:focus,
.accordion-button:not(.collapsed) {
  color: var(--clr-primary);
  background: none;
  box-shadow: none;
  transition: all 0.25s;
}

.accordion-body {
  padding: 0.4rem 0 0.9rem 0;
  width: 100%;
  background: none;
  color: #444;
  font-size: 16px;
  line-height: 1.6;
}

.accordion-button.collapsed {
  color: var(--clr-text-primary);
}

.faq-container { width: 100%; }

/* Make "collapse" work without Bootstrap JS */
.accordion-collapse.collapse { display: none; }
.accordion-collapse.show { display: block; }

@media (min-width: 768px) {
  .faq-container { width: 100%; }
}
</style>
