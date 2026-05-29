<template>
  <div class="pdf-preview-wrap">
    <button
      type="button"
      class="pdf-expand-btn"
      aria-label="Open fullscreen preview"
      @click="$emit('expand')"
    >
      <IconExpand :size="18" color="#475467" />
    </button>
    <img
      v-if="images.length"
      :src="images[0].url"
      :alt="images[0].alt || 'Template PDF Preview'"
      :width="images[0].width || 1200"
      :height="images[0].height || 738"
      class="pdf-preview-img"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import IconExpand from '@/components/icons/Expand.vue'

defineProps({
  images: { type: Array, required: true },
})
defineEmits(['expand'])
</script>

<style scoped>
.pdf-preview-wrap {
  position: relative;
  border: 1px solid var(--border-light);
  border-radius: var(--r-xl);
  overflow: hidden;
  box-shadow: 0 4px 24px -4px rgba(16, 24, 40, 0.1);
  background: var(--bg-grey-100);
  width: 100%;
}

.pdf-preview-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.pdf-expand-btn {
  position: absolute;
  bottom: var(--space-4, 16px);
  right: var(--space-4, 16px);
  width: 40px;
  height: 40px;
  border-radius: var(--r-lg);
  background: var(--bg-primary, #fff);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.1);
  z-index: 4;
  padding: 0;
  transition: background 120ms;
}

.pdf-expand-btn:hover {
  background: var(--bg-grey-50);
}
</style>
