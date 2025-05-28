<template>
  <section class="container py-2 py-lg-5">
    <SectionTitle :heading="[{id: 1, text: 'Frequently Asked Questions', highlight: false}]" />
    <div class="row">
      <div
        v-for="(category, idx) in faqQuestions"
        :key="idx"
        class="mb-5 mt-4"
        :class="getCategoryClasses(idx)"
      >
        <h3 class="faq__heading">{{ category.title }}</h3>
        <div class="accordion accordion-flush faq-container" :id="`accordionFaqs-${idx}`">
          <div
            v-for="(faq, index) in category.faqs"
            :key="index"
            class="accordion-item"
          >
            <div class="accordion-header">
              <h3>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse-${idx}-${index}`"
                  :aria-expanded="isOpen(idx, index)"
                  :aria-controls="`collapse-${idx}-${index}`"
                >
                  {{ faq.question }}
                  <nuxt-img
                    src="/chevron-down.svg"
                    class="chevron-icon"
                    :class="{ open: isOpen(idx, index) }"
                    width="20"
                    height="20"
                    alt="Chevron"
                  />
                </button>
              </h3>
            </div>
            <div
              :id="`collapse-${idx}-${index}`"
              class="accordion-collapse collapse"
              :data-bs-parent="`#accordionFaqs-${idx}`"
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
      </div>
    </div>
  </section>
</template>

<script>
import MarkdownContent from '~/components/MarkdownContent.vue'

export default {
  components: { MarkdownContent },
  props: {
    faqQuestions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openFaq: null // Will store 'categoryIdx-faqIdx' string
    }
  },
  mounted() {
    // Listen to Bootstrap collapse events to sync our state
    this.$nextTick(() => {
      document.querySelectorAll('.accordion-collapse').forEach(collapse => {
        collapse.addEventListener('show.bs.collapse', () => {
          const [categoryIdx, faqIdx] = collapse.id.replace('collapse-', '').split('-')
          this.handleAccordionChange(`${categoryIdx}-${faqIdx}`)
        })
        collapse.addEventListener('hide.bs.collapse', () => {
          this.openFaq = null
        })
      })
    })
  },
  computed: {
    getCategoryClasses() {
      return (idx) => [
        idx === this.faqQuestions.length - 1 ? 'col' : 'col-md-6',
        idx % 2 === 0 ? 'pe-md-5' : 'ps-md-5'
      ]
    },
  },
  methods: {
    handleAccordionChange(faqId) {
      // Close any previously open FAQ
      if (this.openFaq && this.openFaq !== faqId) {
        const [prevCatIdx, prevFaqIdx] = this.openFaq.split('-')
        const prevElement = document.querySelector(`#collapse-${prevCatIdx}-${prevFaqIdx}`)
        if (prevElement) {
          const collapse = bootstrap.Collapse.getInstance(prevElement)
          if (collapse) collapse.hide()
        }
      }
      this.openFaq = faqId
    },
    isOpen(categoryIdx, faqIdx) {
      return this.openFaq === `${categoryIdx}-${faqIdx}`
    }
  }
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

.accordion-button:not(.collapsed) .chevron-icon {
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

.faq-container {
  width: 100%;
}

@media (min-width: 768px) {
  .faq-container {
    width: 100%;
  }
}
</style>
