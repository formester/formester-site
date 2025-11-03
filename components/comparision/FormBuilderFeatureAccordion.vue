<template>
  <div class="formbuilder__features accordion accordion-flush">
    <div
      v-for="(category, index) in groupedFeatures"
      :key="slugify(category?.name || `cat-${index}`)"
      class="category__group accordion-item"
    >
      <h3
        class="category__name accordion-header"
        :id="`${slugify(category.name)}-header`"
      >
        <button
          class="accordion-button"
          :class="{ collapsed: openIndex !== index }"
          type="button"
          :aria-expanded="openIndex === index ? 'true' : 'false'"
          :aria-controls="`${slugify(category.name)}-panel`"
          @click="toggle(index)"
        >
          {{ category.name }}
        </button>
      </h3>

      <div
        :id="`${slugify(category.name)}-panel`"
        class="accordion-collapse"
        :class="openIndex === index ? 'show' : 'collapse'"
        role="region"
        :aria-labelledby="`${slugify(category.name)}-header`"
      >
        <div class="accordion-body d-flex">
          <!-- use camelCase slot prop -->
          <slot :categoryFeatures="category.features" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  groupedFeatures: {
    type: Array,
    required: true
  },
  // if true, only one section open at a time
  exclusive: {
    type: Boolean,
    default: true
  },
  // which panel is open by default (0 = first, -1 = none)
  initialOpenIndex: {
    type: Number,
    default: 0
  }
})

import { ref, watch } from 'vue'
const openIndex = ref(props.initialOpenIndex)

watch(
  () => props.initialOpenIndex,
  (v) => { openIndex.value = v }
)

function toggle(i) {
  if (props.exclusive) {
    openIndex.value = openIndex.value === i ? -1 : i
  } else {
    // if you want multi-open, you can switch to a Set/array of indices
    openIndex.value = openIndex.value === i ? -1 : i
  }
}

function slugify(title = '') {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
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

.category__name .accordion-button {
  background-color: #f9fafb;
  font-weight: 500;
}

/* keep Bootstrap-like behavior without JS */
.accordion-collapse.collapse {
  display: none;
}
.accordion-collapse.show {
  display: block;
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
  /* same caret icon */
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}
</style>
