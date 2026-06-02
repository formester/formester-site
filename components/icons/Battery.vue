<template>
  <svg :width="size" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
    <rect x="0.5" y="1.5" width="14" height="9" rx="2" stroke="currentColor" stroke-width="1"/>
    <rect x="2" y="3" width="10" height="6" rx="1" fill="currentColor"/>
    <path d="M15.5 4.5v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
  </svg>
</template>
<script setup>
defineProps({ size: { type: [Number, String], default: 18 } })
</script>
