<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fullscreen-overlay" @click.self="$emit('close')">
      <button class="fullscreen-close" aria-label="Close fullscreen" @click="$emit('close')">
        <img :src="closeIcon" alt="Close" width="24" height="24" />
      </button>
      <button
        v-if="images.length > 1"
        class="fullscreen-arrow fullscreen-arrow--left"
        aria-label="Previous image"
        @click.stop="prev"
      ><span>&lsaquo;</span></button>
      <img
        v-if="images.length"
        :src="images[index].url"
        :alt="images[index].alt || 'Template Preview'"
        class="fullscreen-img"
      />
      <button
        v-if="images.length > 1"
        class="fullscreen-arrow fullscreen-arrow--right"
        aria-label="Next image"
        @click.stop="next"
      ><span>&rsaquo;</span></button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import closeIcon from '~/assets/images/x-close.svg'

const props = defineProps({
  images: { type: Array,   required: true },
  isOpen: { type: Boolean, required: true },
})
defineEmits(['close'])

const index = ref(0)

watch(() => props.isOpen, (open) => {
  if (open) index.value = 0
})

function next() {
  if (!props.images.length) return
  index.value = (index.value + 1) % props.images.length
}

function prev() {
  if (!props.images.length) return
  index.value = (index.value - 1 + props.images.length) % props.images.length
}
</script>

<style scoped>
.fullscreen-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.fullscreen-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--r-lg);
  box-shadow: 0 24px 64px -12px rgba(16, 24, 40, 0.28);
}

.fullscreen-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: var(--r-lg);
  background: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: var(--r-lg);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  line-height: 1;
}

.fullscreen-arrow--left  { left: 24px; }
.fullscreen-arrow--right { right: 24px; }
</style>
