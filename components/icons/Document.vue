<template>
  <svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M6 6h4M6 9h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>
<script setup>
defineProps({ size: { type: [Number, String], default: 11 } })
</script>
