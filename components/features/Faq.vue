<template>
  <section class="container py-2 py-lg-5">
    <SectionTitle :heading="title" />
    <p class="hero__subheading" v-if="description">
      {{ description }}
    </p>
    <div class="accordion accordion-flush my-5" id="accordionFaqs">
      <div v-for="(faq, index) in faqList" :key="faq.id" class="accordion-item">
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
            {{ faq.header }}
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
            class="accordion-body mb-2"
            :content="faq.body_markdown"
          />
          <div v-else class="accordion-body">
            <p class="mb-2">{{ faq.body }}</p>
            <ul v-if="faq.list">
              <li v-for="(item, idx) in faq.list" :key="`list-item-${idx}`">
                {{ item.text }}
              </li>
            </ul>
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
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    faqList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openIndex: null,
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
.faq__heading {
  font-size: var(--ft-subtitle);
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.accordion-item {
  border: none;
  background: none;
  font-size: var(--ft-small-body);
  margin-bottom: 0.75rem;
}
.accordion-header {
  background: none;
  border: none;
}
.accordion-button {
  font-size: var(--ft-df-body);
  font-weight: 600;
  color: #222;
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
  color: #643ed6;
  background: none;
  box-shadow: none;
}
.accordion-body {
  padding: 0.4rem 0 0.9rem 0;
  width: 100%;
  background: none;
  color: #444;
}
</style>
