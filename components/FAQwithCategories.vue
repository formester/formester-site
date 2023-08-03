<template>
  <section class="container py-2 py-lg-5">
    <h2 class="text-center section__heading">Frequently Asked Questions</h2>
    <div class="row">
      <div v-for="(category, idx) in categories" :key="idx" class="col-md-6 my-5">
        <h3 class="faq__heading">{{ category.title }}</h3>
        <div class="accordion accordion-flush" id="accordionFaqs">
          <div
            v-for="(faq, index) in category.faqs"
            :key="index"
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
                {{ faq.question }}
              </button>
            </h2>
            <div
              :id="`collapse-${idx}-${index}`"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFaqs"
            >
              <div class="accordion-body">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
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
