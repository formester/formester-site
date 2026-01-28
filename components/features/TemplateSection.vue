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
import { getRandomTemplates } from '@/utils/getTemplatesAndCategories'

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

// Extract specific template slugs if provided
const specificSlugs = props.specificTemplate?.length > 0
  ? props.specificTemplate.map(template => template.text)
  : null

// Get templates from cached data (no API calls)
const { data: templates } = await useAsyncData(
  `templates-${props.slug}`,
  async () => {
    try {
      return await getRandomTemplates(3, props.slug, specificSlugs)
    } catch (err) {
      console.error(err)
      return []
    }
  }
)
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
