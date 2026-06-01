<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="1" width="22" height="22" rx="4" ry="4" fill="#000"/>
    <circle cx="12" cy="12" r="7" fill="#fff"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } })
</script>
