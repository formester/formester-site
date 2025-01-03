<template>
  <section class="container py-2 py-lg-5">
    <SectionTitle :heading="title" />
    <p class="hero__subheading" v-if="description">
      {{ description }}
    </p>
    <div class="row">
      <div
        v-for="(category, idx) in categories"
        :key="category.id"
        class="my-5"
        :class="idx === categories.length - 1 ? 'col' : 'col-md-6'"
      >
        <h3 class="faq__heading">{{ category.title[0].text }}</h3>
        <div class="accordion accordion-flush" id="accordionFaqs">
          <div
            v-for="(faq, index) in category.faqList"
            :key="faq.id"
            class="accordion-item"
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse-${idx}-${index}`"
                aria-expanded="false"
                :aria-controls="`collapse-${idx}-${index}`"
              >
                <span class="me-2">{{ faq.header }}</span>
              </button>
            </h2>
            <div
              :id="`collapse-${idx}-${index}`"
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
                  <li v-for="item in faq.list" :key="item.id">
                    {{ item.text }}
                  </li>
                </ul>
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
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.faq__heading {
  font-size: 18px;
  font-weight: 600;
  padding-left: 20px;
}
.accordion-button {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(0, 0, 0);
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
