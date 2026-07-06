<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    :stroke-width="strokeWidth" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 13 },
  strokeWidth: { type: [Number, String], default: 2 },
})
</script>
