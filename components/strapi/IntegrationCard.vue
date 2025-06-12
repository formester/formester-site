<template>
  <div class="integration-card">
    <div class="tools-container">
      <img
        v-for="tool in tools"
        :key="tool.name"
        :src="tool.icon"
        :alt="tool.name"
        class="tool-icon"
      />
    </div>
    <div class="action">{{ action }}</div>
  </div>
</template>

<script>
export default {
  name: 'IntegrationCard',
  props: {
    tools: {
      type: Array,
      required: true,
      validator: (value) => Array.isArray(value) && value.length > 0,
    },
    action: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.integration-card {
  background-color: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: rgba(36, 27, 5, 0.15) 8px 8px 16px 0px;
  height: 100%;
  min-width: 320px;
  min-height: 160px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

@media (max-width: 600px) {
  .integration-card {
    padding: 1rem 0.75rem;
    border-radius: 10px;
    min-width: 180px;
    min-height: 100px;
    font-size: 0.95rem;
  }
}

.integration-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.tools-container {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 1rem;
  min-height: 48px;
  width: 100%;
}

.tool-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.action {
  color: #1d2939;
  font-size: 16px;
  font-weight: 600;
  margin-top: 0.5rem;
}
</style>
