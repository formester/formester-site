<template>
  <div>
    <AiHero
      :title="[
        { text: 'Create ', highlight: false },
        { text: 'Better Forms ', highlight: true },
        { text: 'with AI', highlight: false }
      ]"
      description="Tell our AI what you need, and watch it build a complete form with custom logic and fields in seconds."
      :type="currentType"
      :suggestions="[
        { text: 'Job application form with resume upload' },
        { text: 'Customer satisfaction survey with NPS' },
        { text: 'Event registration with dietary preferences' }
      ]"
      style="margin-top: 30px;"
    />

    <div class="test-controls">
      <p>Testing different types:</p>
      <button @click="currentType = 'form'">Form</button>
      <button @click="currentType = 'score_quiz'">Score Quiz</button>
      <button @click="currentType = 'outcome_quiz'">Outcome Quiz</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AiHero from '@/components/features/AiHero.vue'

const currentType = ref('form')
</script>

<style scoped>
.test-controls {
  padding: 40px;
  background: #f9fafb;
  display: flex;
  gap: 20px;
  justify-content: center;
  border-top: 1px solid #eaecf0;
}

.test-controls button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
