<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" :stroke="color || 'currentColor'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
<script setup>
defineProps({
  size:  { type: [Number, String], default: 20 },
  color: { type: String, default: null },
})
</script>
