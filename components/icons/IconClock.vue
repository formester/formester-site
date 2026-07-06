<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 15 },
  strokeWidth: { type: [Number, String], default: 2 },
})
</script>
