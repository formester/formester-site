<template>
  <section class="container py-2 py-lg-5">
    <h2 class="text-center section__heading">Frequently Asked Questions</h2>
    <div class="accordion accordion-flush my-5" id="accordionFaqs">
      <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${index}`"
            aria-expanded="false"
            :aria-controls="`collapse${index}`"
          >
            {{ faq.question }}
          </button>
        </h2>
        <div
          :id="`collapse${index}`"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFaqs"
        >
          <div class="accordion-body">
            <p class="mb-2">{{ faq.answer }}</p>
            <ul v-if="faq.list">
              <li v-for="(item, idx) in faq.list" :key="`list-item-${idx}`">
                {{ item }}
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
  props: {
    faqs: {
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
