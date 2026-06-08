<template>
  <svg
    v-for="n in 5"
    :key="n"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <defs v-if="fillFor(n) > 0 && fillFor(n) < 1">
      <linearGradient :id="`star-half-${uid}-${n}`">
        <stop :offset="`${fillFor(n) * 100}%`" stop-color="currentColor" />
        <stop :offset="`${fillFor(n) * 100}%`" stop-color="transparent" />
      </linearGradient>
    </defs>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
      :fill="fillFor(n) >= 1 ? 'currentColor' : fillFor(n) > 0 ? `url(#star-half-${uid}-${n})` : 'none'"
      stroke="currentColor"
      stroke-width="1.2"
    />
  </svg>
</template>

<script setup>
import { useId } from 'vue'

const props = defineProps({
  rating: { type: Number, default: 5 },
  size: { type: [Number, String], default: 14 },
})

const uid = useId()

const fillFor = (n) => Math.max(0, Math.min(1, props.rating - (n - 1)))
</script>
