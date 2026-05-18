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
      d="M5.5 1v9M1 5.5h9"
      :stroke="color || 'currentColor'"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'PlusIcon',
  props: {
    size:  { type: [Number, String], default: 11 },
    color: { type: String, default: null },
  },
}
</script>
