<template>
  <section class="container py-2 py-lg-5">
    <h2 class="hero__heading text-center">{{ title }}</h2>
    <p class="hero__subheading text-center" v-if="description">
      {{ description }}
    </p>
    <div class="accordion accordion-flush my-5 mx-auto faq-container" id="accordionFaqs">
      <div v-for="(faq, index) in formattedFaqItems" :key="faq.id || index" class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${index}`"
            :aria-expanded="openIndex === index ? 'true' : 'false'"
            :aria-controls="`collapse${index}`"
            @click="toggleAccordion(index)"
          >
            {{ faq.header || faq.question || faq.title }}
            <nuxt-img
              src="/chevron-down.svg"
              class="chevron-icon"
              :class="{ open: openIndex === index }"
              width="20"
              height="20"
              alt="Chevron"
            />
          </button>
        </h2>
        <div
          :id="`collapse${index}`"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaqs"
        >
          <MarkdownContent
            v-if="faq.body_markdown"
            class="accordion-body mb-2 text-start"
            :content="faq.body_markdown"
          />
          <div v-else class="accordion-body text-start">
            <p class="mb-2">{{ faq.body || faq.answer || faq.content }}</p>
            <ul v-if="faq.list">
              <li v-for="(item, idx) in faq.list" :key="`list-item-${idx}`">
                {{ item.text || item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Faq',
  props: {
    title: {
      type: String,
      default: 'Frequently Asked Questions',
    },
    description: {
      type: String,
      default: '',
    },
    faqItems: {
      type: Array,
      required: true,
    },
    defaultOpen: {
      type: Number,
      default: null
    }
  },
  computed: {
    formattedFaqItems() {
      return this.faqItems.map((faq, index) => {
        // If the item already has the expected structure, return it as is
        if (faq.id && (faq.header || faq.question || faq.title) && (faq.body || faq.answer || faq.content)) {
          return faq;
        }
        
        // Otherwise, format it with standard properties
        return {
          id: faq.id || `faq-${index + 1}`,
          header: faq.name || faq.header || faq.question || faq.title,
          body: faq.content || faq.body || faq.answer
        };
      });
    }
  },
  data() {
    return {
      openIndex: this.defaultOpen,
    }
  },
  methods: {
    toggleAccordion(idx) {
      this.openIndex = this.openIndex === idx ? null : idx
    },
  },
}
</script>

<style scoped>
.hero__heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 600;
  margin-bottom: 64px;
  color: var(--clr-text-primary);
}
.faq__heading {
  font-size: var(--ft-subtitle);
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--clr-text-primary);
  text-align: left;
}

.faq__description {
  color: var(--clr-text-secondary);
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 2rem;
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
  font-size: var(--ft-df-body);
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
  align-items: center;
  width: 100%;
}
.chevron-icon {
  margin-left: auto;
  transition: transform 0.3s, filter 0.2s;
  filter: grayscale(1) brightness(0.7);
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
