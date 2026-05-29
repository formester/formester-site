<template>
  <svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 4h12M2 8h8M2 12h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>
<script setup>
defineProps({ size: { type: [Number, String], default: 11 } })
</script>
