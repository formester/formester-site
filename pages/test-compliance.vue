<template>
  <div class="test-page">
    <div class="container py-5">
      <h1 class="mb-4">Compliance Component Test</h1>
      <p class="mb-5">Testing the <code>ComplianceSection</code> with the new theme-aware variables.</p>

      <div class="mb-5">
        <ComplianceSection
          :title="testTitleWithHighlight"
          :description="testDescription"
          :badges="testBadges"
        />
      </div>

      <div class="mb-5">
        <Trustbadges
          :title="trustTitle"
          :description="trustDescription"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ComplianceSection from '@/components/strapi/ComplianceSection.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'

const testTitleWithHighlight = [
  { id: 1, text: 'Your prompts, ', highlight: false },
  { id: 2, text: 'your forms, ', highlight: false },
  { id: 3, text: 'your data.', highlight: true }
]

const testTitleSimple = [
  { id: 1, text: 'Your prompts, your forms, your data.', highlight: false }
]

const testDescription = 'Formester is the AI form creator trusted by 15,000 teams. Your prompts are never used to train third-party models. Forms and responses are stored on SOC 2-compliant infrastructure. GDPR-ready. Role-based access and audit logs on paid plans.'

const testBadges = [
  { id: 1, text: 'SOC 2' },
  { id: 2, text: 'GDPR' },
  { id: 3, text: 'CCPA' },
  { id: 4, text: 'HIPAA-ready' }
]

const trustTitle = [
  { id: 1, text: 'Trusted by teams that demand security and compliance', highlight: false }
]

const trustDescription = 'Proving the design with real trust badges and ratings from Product Hunt, Trustpilot, Capterra and G2.'
</script>

<style scoped>
.test-page {
  background-color: #f1f5f9;
  min-height: 100vh;
}
h4 {
  color: #475569;
  margin-bottom: 20px;
}
</style>
