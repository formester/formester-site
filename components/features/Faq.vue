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
            aria-expanded="false"
            :aria-controls="`collapse${index}`"
          >
            {{ faq.header }}
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
}
.accordion-button {
  font-size: var(--ft-df-body);
  font-weight: 600;
  color: rgb(70, 70, 70);
}
.accordion-item {
  border: none;
  font-size: var(--ft-small-body);
}
.accordion-button:focus {
  box-shadow: none;
  background: none;
}
.accordion-body {
  padding: 0 1.25rem;
  width: 85%;
}
</style>
