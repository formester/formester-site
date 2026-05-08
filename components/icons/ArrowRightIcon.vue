<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 8h10m0 0L9 4m4 4l-4 4"
      :stroke="color || 'currentColor'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'ArrowRightIcon',
  props: {
    size:  { type: [Number, String], default: 14 },
    color: { type: String, default: null },
  },
}
</script>
