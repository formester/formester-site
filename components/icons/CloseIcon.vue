<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1.5 1.5l8 8M9.5 1.5l-8 8"
      :stroke="color || 'currentColor'"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'CloseIcon',
  props: {
    size:  { type: [Number, String], default: 11 },
    color: { type: String, default: null },
  },
}
</script>
