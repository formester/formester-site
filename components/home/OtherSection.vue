<template>
  <div>
    <div v-for="feature in features" :key="feature.id">
      <Section :feature="feature" /> 
    </div>
  </div>
</template>

<script>
import Section from '@/components/Section.vue'

export default {
  components: {
    Section,
  },
  data() {
    return {
      features: [
        {
        id: 0,
        heading: '<span class="hglt">Powerful</span> Integration',
        content: 'Connect your form with Slack, Google Sheets, Salesforce or anything else with our Zapier integration. Use our webhooks to notify any other app when a submission arrives.',
        imgName: 'integration-2.png'
        }
      ]
    }
  }
}
</script>
