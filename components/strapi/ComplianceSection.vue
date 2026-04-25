<template>
  <div class="compliance-section-wrapper">
    <div class="container">
      <div class="compliance-card">
        <div class="compliance-content">
          <SectionTitle :heading="title" class="title" />
          <p v-if="description" class="description">{{ description }}</p>
          <div class="badges-wrapper">
            <div
              v-for="badge in badges"
              :key="badge.id"
              class="compliance-badge"
            >
              {{ badge.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: '',
    },
    badges: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.compliance-section-wrapper {
  padding: 60px 0;
}

.compliance-card {
  background-color: #0b0c16; /* Exact dark navy from image */
  border-radius: 20px;
  padding: 80px 60px;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  
  /* Set the theme variables for this section */
  --heading-color: #ffffff;
  --highlight-color: #ffffff;
}

.compliance-content {
  max-width: 750px;
  margin: 0 auto;
}

/* Customizing the font size specifically for this section */
:deep(.section__heading) {
  font-size: 42px !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  line-height: 1.1 !important;
  margin-bottom: 24px !important;
}

.description {
  color: #94a3b8; /* Muted gray-blue from image */
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 48px;
  font-weight: 400;
}

.badges-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.compliance-badge {
  padding: 12px 28px;
  background-color: #1d1e2c; /* Slightly lighter navy */
  border: 1px solid #2e304b; /* Distinct badge border */
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.compliance-badge:hover {
  border-color: #4b4e75;
  background-color: #242638;
}

@media screen and (max-width: 768px) {
  .compliance-card {
    padding: 60px 24px;
    border-radius: 16px;
    margin: 0 16px;
  }

  :deep(.section__heading) {
    font-size: 28px !important;
  }

  .description {
    font-size: 16px;
    margin-bottom: 32px;
  }

  .compliance-badge {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
