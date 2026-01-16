<template>
  <div class="container py-5">
    <div class="row px-0">
      <div class="heading d-flex flex-column align-items-center text-center">
        <SectionTitle :heading="title" />
        <p class="hero__subheading" v-if="description">
          {{ description }}
        </p>
      </div>
      <div v-if="templates?.length" class="templates py-3">
        <TemplateCard
          v-for="(template, idx) in templates"
          :key="idx"
          :template="template"
        />
      </div>
      <div class="d-flex align-items-center justify-content-center mt-4">
        <NuxtLink :to="button.link">
          <button class="btn-all-templates">{{button.text}}</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import TemplateCard from '@/components/template/TemplateCard.vue'

const props = defineProps({
  slug: {
    type: String,
    default: '',
  },
  title: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  button: {
    type: Object,
    required: true,
  },
  specificTemplate: {
    type: Array,
    default: () => [],
  },
})

const dummyDescription =
  'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

// Use global cached templates - fetches once for all pages
const { data: allTemplates } = await useAllTemplates()

// Compute filtered templates from cached data
const templates = computed(() => {
  if (!allTemplates.value) return []

  let filteredTemplates = allTemplates.value

  // Filter by category slug if provided
  if (props.slug) {
    filteredTemplates = filteredTemplates.filter(
      (template) => template.categorySlug === props.slug
    )
  }

  // Add dummy description to all templates
  let processedTemplates = filteredTemplates.map((template) => ({
    ...template,
    description: template.description || dummyDescription,
  }))

  // Filter templates based on specificTemplate prop
  if (props.specificTemplate && props.specificTemplate.length > 0) {
    const templateSlugs = props.specificTemplate.map(template => template.text)
    return processedTemplates.filter(template =>
      templateSlugs.includes(template.slug)
    )
  } else {
    // Return random 3 templates
    const randIndex = Math.floor(Math.random() * Math.max(0, processedTemplates.length - 3))
    return processedTemplates.slice(randIndex, randIndex + 3)
  }
})
</script>

<style>
.btn-all-templates {
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  transition: all 0.2s ease-out;
  background-color: var(--clr-primary);
  color: white;
}
.btn-all-templates:hover {
  color: white;
  background-color: var(--clr-primary-hover);
}

.templates {
  /* padding: 24px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

@media (max-width: 991px) {
  .templates {
    grid-template-columns: 1fr;
  }
}
</style>
