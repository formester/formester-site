<template>
  <div class="container py-5">
    <div class="row px-0">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">{{ heading }}</h2>
        <p class="hero__subheading">
          Get Started Quickly with Ready-Made Form Templates
        </p>
      </div>
      <div v-if="templates && templates.length" class="templates py-3">
        <TemplateCard
          v-for="(template, idx) in templates"
          :key="idx"
          :template="template"
        />
      </div>
      <div class="d-flex align-items-center justify-content-center mt-4">
        <NuxtLink :to="`/templates/`">
          <button class="btn-all-templates">More Templates</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import TemplateCard from './template/TemplateCard.vue'
import { getRandomTemplates } from '@/utils/getTemplatesAndCategories'

const props = defineProps({
  slug: { type: String },
  heading: {
    type: String,
    default: 'Pre-Designed Templates',
  },
})

// Get templates from cached data (no API calls)
const { data: templates } = await useAsyncData(
  `templates-${props.slug || 'default'}`,
  async () => {
    try {
      return await getRandomTemplates(3, props.slug)
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
