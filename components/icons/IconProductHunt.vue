<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M18.9624 37.9249C29.4351 37.9249 37.9249 29.4351 37.9249 18.9624C37.9249 8.4898 29.4351 0 18.9624 0C8.4898 0 0 8.4898 0 18.9624C0 29.4351 8.4898 37.9249 18.9624 37.9249Z"
      :fill="markColor"
    />
    <path
      d="M21.491 9.4812H12.3259V28.4437H16.1184V22.7549H21.491C25.1571 22.7549 28.1279 19.7842 28.1279 16.1181C28.1279 12.452 25.1571 9.4812 21.491 9.4812ZM21.491 18.9625H16.1184V13.2737H21.491C23.0618 13.2737 24.3354 14.5474 24.3354 16.1181C24.3354 17.6888 23.0618 18.9625 21.491 18.9625Z"
      :fill="letterColor"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 20 },
  markColor: { type: String, default: '#FF6154' },
  letterColor: { type: String, default: '#ffffff' },
})
</script>
