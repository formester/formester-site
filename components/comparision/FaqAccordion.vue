<template>
  <div
    class="formbuilder__features accordion accordion-flush"
    :class="{ border_top_1: index !== 0 }"
  >
    <div class="category__group accordion-item">
      <h3 class="category__name accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + generateSlug(name)"
          aria-expanded="false"
          :aria-controls="generateSlug(name)"
        >
          {{ name }}
        </button>
      </h3>
      <div
        :id="generateSlug(name)"
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        :aria-labelledby="generateSlug(name)"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body d-flex">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  props: {
    index: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  methods: {
    generateSlug(title) {
      return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
    },
  },
}
</script>

<style scoped>
.border_top_1 {
  border-top: 1px solid var(--Gray-200, #eaecf0);
}
.accordion {
  padding: 0;
  padding-top: 24px;
  padding-bottom: 32px;
}
.category__name {
  color: var(--clr-text-primary);
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
}

.category__name button {
  background-color: transparent;
  font-weight: 500;
  padding: 0;
}

.accordion-body {
  color: var(--clr-text-secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 0;
  padding-top: 8px;
}

.accordion-button:not(.collapsed) {
  color: inherit;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}

@media screen and (max-width: 992px) {
  .accordion-button {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
