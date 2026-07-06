<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 18 },
  strokeWidth: { type: [Number, String], default: 2 },
})
</script>
