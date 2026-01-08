<template>
  <div class="container py-5">
    <h2 v-if="title" class="subheading">{{ title }}</h2>
    <p v-if="description" class="description">{{ description }}</p>
    <div class="integrations-grid">
      <IntegrationCard
        v-for="(app, index) in integrations"
        :key="index"
        :app="app"
      />
    </div>
  </div>
</template>

<script setup>
import IntegrationCard from './IntegrationCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  integrations: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.subheading {
  margin-top: 3rem;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
}

.description {
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #64748b;
}

.integrations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  gap: 1rem;
}

@media (max-width: 992px) {
  .integrations-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 576px) {
  .integrations-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
