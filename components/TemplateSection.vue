<template>
  <div class="container py-5">
    <div class="row px-0">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">Pre-Designed Templates</h2>
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
import { ref, onMounted } from 'vue'

const templates = ref([])

const getTemplates = async () => {
  try {
    const response = await fetch('https://app.formester.com/templates.json')
    templates.value = await response.json()
    const randIndex = Math.floor(Math.random() * (templates.value.length - 3))
    templates.value = templates.value.slice(randIndex,  randIndex + 3);
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  getTemplates()
})

</script>

<script>
export default {
  components: { TemplateCard },
}
</script>

<style>
.btn-all-templates {
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  transition: all 0.2s ease-out;
  background: #4f3895;
  color: white;
}
.btn-all-templates:hover {
  color: white;
  opacity: 0.9;
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
