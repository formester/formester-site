<template>
  <svg :width="size" height="12" viewBox="0 0 14 12" fill="currentColor" aria-hidden="true">
    <rect x="0" y="8" width="3" height="4" rx="0.5" opacity="0.4"/>
    <rect x="4" y="5" width="3" height="7" rx="0.5" opacity="0.6"/>
    <rect x="8" y="2" width="3" height="10" rx="0.5" opacity="0.8"/>
    <rect x="12" y="0" width="2" height="12" rx="0.5"/>
  </svg>
</template>
<script setup>
defineProps({ size: { type: [Number, String], default: 14 } })
</script>
