<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#6D00CC"/>
    <path d="M7 8.5L12 12l5-3.5M7 12l5 3.5 5-3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } })
</script>
