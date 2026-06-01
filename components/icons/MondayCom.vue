<template>
  <svg :width="size" :height="size" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="20" r="7" fill="#FF3D57"/>
    <circle cx="22" cy="20" r="7" fill="#FFB900"/>
    <circle cx="35" cy="20" r="7" fill="#00CA72"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } })
</script>
