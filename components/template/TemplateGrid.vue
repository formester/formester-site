<template>
  <div class="template-grid-wrap">
    <template v-if="templates.length > 0">
      <section class="templates-grid" aria-label="Templates">
        <div
          v-for="(template, index) in templates"
          :key="template.slug"
          class="template-grid-item"
          :class="{ 'template-hidden': isHidden(index) }"
        >
          <slot name="card" :template="template">
            <TemplateCard :template="template" :category-label="categoryLabel" @preview="emit('preview', $event)" />
          </slot>
        </div>
      </section>
      <div v-if="hasMore" class="d-flex justify-content-center mt-3">
        <button class="view-more-btn" aria-label="View more templates" type="button" @click="showMore">
          View More
        </button>
      </div>
    </template>
    <div v-else class="no-templates d-flex flex-column align-items-center justify-content-center w-100">
      <nuxt-img class="img-fluid" src="/templates/no-template.svg" alt="No Template Illustration" />
      <h4 class="mt-3">No Template Available</h4>
    </div>
  </div>
</template>

<script setup>
import TemplateCard from '@/components/template/TemplateCard.vue'

const props = defineProps({
  templates: { type: Array, required: true },
  categoryLabel: { type: String, default: '' },
  // Cards shown per "View More" step in the browser; 0 shows every card. The server always renders all of them.
  viewMoreStep: { type: Number, default: 0 },
})

const emit = defineEmits(['preview'])

const isClient = ref(false)
const visibleCount = ref(props.viewMoreStep)

onMounted(() => {
  isClient.value = true
})

// A new list (a search, another page) starts again from the first step.
watch(
  () => props.templates,
  () => {
    visibleCount.value = props.viewMoreStep
  }
)

const isPaged = computed(() => isClient.value && props.viewMoreStep > 0)
const hasMore = computed(() => isPaged.value && visibleCount.value < props.templates.length)

const isHidden = (index) => isPaged.value && index >= visibleCount.value

const showMore = () => {
  visibleCount.value += props.viewMoreStep
}
</script>

<style scoped>
.templates-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 24px;
  margin-top: 1rem;
}

.template-grid-item {
  display: grid;
}

.template-hidden {
  display: none;
}

.no-templates {
  padding: 52px 0;
  gap: 1rem;
}

.view-more-btn {
  margin-top: 1rem;
  background-color: var(--clr-primary);
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  padding: 10px 16px;
  border-radius: var(--r-lg);
  color: var(--bg-primary);
}

.view-more-btn:hover {
  background-color: var(--clr-primary-hover);
  transition: all 0.2s ease;
}

.view-more-btn:focus {
  box-shadow: var(--focus-ring-primary);
}

@media (max-width: 1199px) {
  .templates-grid {
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
  }
}

@media only screen and (max-width: 600px) {
  .templates-grid {
    grid-template-columns: 1fr;
  }
}
</style>
