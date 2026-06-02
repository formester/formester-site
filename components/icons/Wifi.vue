<template>
  <svg :width="size" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
    <path d="M7 9.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="currentColor"/>
    <path d="M3.8 7.2A4.6 4.6 0 0 1 7 6a4.6 4.6 0 0 1 3.2 1.2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M1.2 4.6A8 8 0 0 1 7 2.5a8 8 0 0 1 5.8 2.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
  </svg>
</template>
<script setup>
defineProps({ size: { type: [Number, String], default: 14 } })
</script>
