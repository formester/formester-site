<template>
  <div>
    <ComparisonToolHero />
    <div class="container comparison__card-container mx-auto my-5">
      <ComparisonCard :options="options" default-selected-option="Formester" />
      <ComparisonCard :options="options" default-selected-option="Typeform" />
      <ComparisonCard :options="options" default-selected-option="Jotform" />
      <ComparisonCard :options="options" />
    </div>
  </div>
</template>

<script>
import ComparisonToolHero from '@/components/comparision/ComparisonToolHero.vue'
import ComparisonCard from '@/components/comparision/ComparisonCard.vue'

export default {
  components: {
    ComparisonToolHero,
    ComparisonCard,
  },
  data() {
    return {
      options: ['Formester', 'Typeform', 'Jotform', 'Fillout'],
    }
  },
}
</script>

<style scoped>
.comparison__card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
}

@media screen and (max-width: 1200px) {
  .comparison__card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .comparison__card-container {
    grid-template-columns: 1fr;
  }
}
</style>
