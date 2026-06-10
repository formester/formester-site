<template>
  <div class="hub" :class="{ 'hub--square': layout === 'square' }" aria-hidden="true">
    <svg class="hub__wires" :viewBox="`0 0 ${stage.w} ${stage.h}`" preserveAspectRatio="none">
      <line
        v-for="(n, i) in placedNodes"
        :key="`w-${i}`"
        :x1="(n.x / 100) * stage.w"
        :y1="(n.y / 100) * stage.h"
        :x2="stage.w / 2"
        :y2="stage.h / 2"
        stroke="#dccdf8"
        stroke-width="1.5"
        stroke-dasharray="4 5"
      />
      <circle v-for="(n, i) in placedNodes" :key="`d-${i}`" r="4" fill="#9777e0">
        <animateMotion
          :dur="`${2.6 + (i % 3) * 0.5}s`"
          :begin="`${i * 0.45}s`"
          repeatCount="indefinite"
          :path="`M ${(n.x / 100) * stage.w},${(n.y / 100) * stage.h} L ${stage.w / 2},${stage.h / 2}`"
        />
      </circle>
    </svg>

    <span v-for="(n, i) in placedNodes" :key="`n-${i}`" class="hub__node" :style="{ left: `${n.x}%`, top: `${n.y}%` }">
      <img :src="n.src" :alt="''" loading="lazy" width="34" height="34" />
    </span>

    <span class="hub__node hub__node--core" style="left: 50%; top: 50%">
      <img src="/formester-icon.svg" alt="" width="40" height="40" />
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // resolved icon srcs, first 8 are placed around the hub
  icons: { type: Array, default: () => [] },
  // 'wide' = full-width band under a centered hero, 'square' = side column of a split hero
  layout: { type: String, default: 'wide' },
})

// percentage positions of node centers within the stage
const WIDE_SPOTS = [
  { x: 11, y: 22 },
  { x: 30, y: 9 },
  { x: 70, y: 9 },
  { x: 89, y: 22 },
  { x: 11, y: 80 },
  { x: 30, y: 93 },
  { x: 70, y: 93 },
  { x: 89, y: 80 },
]

// ring around the center, octagon-ish like the previous hub illustration
const SQUARE_SPOTS = [
  { x: 50, y: 7 },
  { x: 81, y: 19 },
  { x: 93, y: 50 },
  { x: 81, y: 81 },
  { x: 50, y: 93 },
  { x: 19, y: 81 },
  { x: 7, y: 50 },
  { x: 19, y: 19 },
]

const stage = computed(() => (props.layout === 'square' ? { w: 560, h: 560 } : { w: 1000, h: 300 }))

const placedNodes = computed(() => {
  const spots = props.layout === 'square' ? SQUARE_SPOTS : WIDE_SPOTS
  return props.icons
    .filter(Boolean)
    .slice(0, spots.length)
    .map((src, i) => ({ src, ...spots[i] }))
})
</script>

<style scoped>
.hub {
  position: relative;
  width: 100%;
  max-width: 980px;
  height: 280px;
  margin: 0 auto;
}

.hub--square {
  max-width: 520px;
  height: auto;
  aspect-ratio: 1 / 1;
}

.hub__wires {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hub__node {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hub__node img {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.hub__node--core {
  width: 76px;
  height: 76px;
  border-radius: 19px;
  border-color: var(--violet-300);
  box-shadow: 0 6px 28px rgba(100, 52, 208, 0.35);
}

.hub__node--core img {
  width: 40px;
  height: 40px;
}

@media (max-width: 767px) {
  .hub {
    height: 200px;
  }

  .hub--square {
    height: auto;
    max-width: 360px;
  }

  .hub__node {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }

  .hub__node img {
    width: 26px;
    height: 26px;
  }

  .hub__node--core {
    width: 58px;
    height: 58px;
  }

  .hub__node--core img {
    width: 30px;
    height: 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hub__wires circle {
    display: none;
  }
}
</style>
