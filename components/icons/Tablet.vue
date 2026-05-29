<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
</template>
<script setup>
defineProps({ size: { type: [Number, String], default: 16 } })
</script>
