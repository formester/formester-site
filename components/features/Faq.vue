<template>
  <section class="container py-2 py-lg-5 ">
    <h2 class="section__heading text-center"> Frequently Asked Questions  </h2>
    <p class="hero__subheading" v-if="description">
      {{ description }}
    </p>
    <div class="accordion accordion-flush my-5 mx-auto" id="accordionFaqs">
      <div v-for="(faq, index) in faqList" :key="faq.id" class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${index}`"
            aria-expanded="false"
            :aria-controls="`collapse${index}`"
          >
            <span>{{ faq.header }}</span>
            <svg 
              class="chevron-icon ms-auto" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style="min-width: 20px;"
            >
              <path 
                d="M6 9L12 15L18 9" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
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
}
</script>

<style scoped>
.faq__heading {
  font-size: var(--ft-subtitle);
  font-weight: 600;
  color: var(--clr-text-primary);
}

.accordion {
  max-width: 800px;
}

.accordion-button {
  font-size: var(--ft-df-body);
  font-weight: 600;
  color: var(--clr-text-primary);
  padding: 1.5rem 1.25rem;
  transition: all 0.3s ease;
  position: relative;
  width: 100%;
  background: none;
}

.accordion-button span {
  flex: 1;
}

.accordion-button::after {
  display: none !important;
}

.accordion-item {
  border: none;
  font-size: var(--ft-small-body);
  margin-bottom: 0.5rem;
}

.accordion-button:not(.collapsed) {
  color: var(--clr-primary);
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
  background: none;
}

.chevron-icon {
  transition: transform 0.3s ease;
  margin-left: 12px;
}

.accordion-button:not(.collapsed) .chevron-icon {
  transform: rotate(180deg);
}

.accordion-button:not(.collapsed) .chevron-icon path {
  stroke: var(--clr-primary);
}

.accordion-body {
  padding: 0 1.25rem 1.5rem;
  color: var(--clr-text-secondary);
  transition: all 0.3s ease;
}

.accordion-collapse {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .accordion {
    max-width: 100%;
  }
  
  .accordion-body {
    padding: 0 1rem 1.25rem;
  }
}
@media (max-width: 575px) {
  .section__heading {
    font-size: 30px;
  }
}
</style>
