<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 12 },
  strokeWidth: { type: [Number, String], default: 3 },
})
</script>
