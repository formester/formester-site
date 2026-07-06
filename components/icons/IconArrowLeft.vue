<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M19 12H5" />
    <path d="M11 18l-6-6 6-6" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 16 },
  strokeWidth: { type: [Number, String], default: 2 },
})
</script>
