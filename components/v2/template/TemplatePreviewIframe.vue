<template>
  <div class="form-preview-body">
    <iframe
      :src="surveyUrl"
      frameborder="0"
      class="preview-iframe"
      :class="{ 'preview-iframe--mobile': activeDevice === 'mobile' }"
      loading="lazy"
      title="Form preview"
    />
  </div>
</template>

<script setup>
defineProps({
  surveyUrl:    { type: String, required: true },
  activeDevice: { type: String, required: true },
})
</script>

<style scoped>
.form-preview-body {
  position: relative;
  overflow: hidden;
}

.preview-iframe {
  width: calc(100% + 8px);
  height: calc(100vh - 200px);
  border: none;
  display: block;
}

@media (max-width: 1024px) {
  .preview-iframe { height: 340px; }
}

@media (max-width: 640px) {
  .preview-iframe { height: calc(100vh - 140px); }
}
</style>
