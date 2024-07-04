<template>
  <div class="formbuilder__features accordion accordion-flush">
    <div
      v-for="category in groupedFeatures"
      :key="generateSlug(category.name)"
      class="category__group accordion-item"
    >
      <h3 class="category__name accordion-header" :id="category.name">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + generateSlug(category.name)"
          aria-expanded="false"
          :aria-controls="generateSlug(category.name)"
        >
          {{ category.name }}
        </button>
      </h3>
      <div
        :id="generateSlug(category.name)"
        class="accordion-collapse collapse"
        :aria-labelledby="generateSlug(category.name)"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body d-flex">
          <slot :category-features="category.features" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormBuilderFeatureList from '@/components/comparision/FormBuilderFeatureList.vue'
import FormBuilderDetails from '@/components/comparision/FormBuilderDetails.vue'

export default {
  components: {
    FormBuilderFeatureList,
    FormBuilderDetails,
  },
  props: {
    groupedFeatures: {
      type: Array,
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
.formbuilder__features {
  border: 1px solid #eaecf0;
}

.category__name {
  font-size: 16px;
  line-height: 24px;
}

.category__name button {
  background-color: #f9fafb;
  font-weight: 500;
}

.accordion-body {
  padding: 0;
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
</style>
