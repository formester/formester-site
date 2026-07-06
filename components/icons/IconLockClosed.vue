<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 14 },
  strokeWidth: { type: [Number, String], default: 2 },
})
</script>
