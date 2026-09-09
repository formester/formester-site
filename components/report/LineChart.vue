<template>
  <figure class="rchart" :class="{ 'rchart--few': points.length <= 8 }">
    <figcaption v-if="title" class="rchart__title">{{ title }}</figcaption>

    <div class="rchart__frame">
      <svg :viewBox="`0 0 ${W} ${H}`" role="img" :aria-label="title" preserveAspectRatio="xMidYMid meet">
        <g class="rchart__grid">
          <line v-for="t in ticks" :key="`g${t}`" :x1="padL" :x2="W - padR" :y1="y(t)" :y2="y(t)" />
        </g>

        <text v-for="t in ticks" :key="`t${t}`" class="rchart__ytick" :x="padL - 10" :y="y(t) + 4">{{ fmtTick(t) }}</text>

        <path v-if="area" class="rchart__area" :d="areaPath" />
        <path class="rchart__line" :d="linePath" />

        <g v-for="(p, i) in points" :key="`p${i}`">
          <circle class="rchart__dot" :cx="x(i)" :cy="y(p.value)" r="3.5" />
          <text
            v-if="showValue(i)"
            class="rchart__value"
            :x="x(i)"
            :y="y(p.value) - 11"
          >{{ p.display || fmt(p.value) }}</text>
        </g>

        <text
          v-for="(p, i) in points"
          :key="`l${i}`"
          class="rchart__xtick"
          :class="{ 'rchart__xtick--alt': i % 2 === 1 }"
          :x="x(i)"
          :y="H - 10"
        >{{ p.label }}</text>
      </svg>
    </div>

    <p v-if="note" class="rchart__note">{{ note }}</p>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  points: { type: Array, required: true },
  max: { type: Number, required: true },
  unit: { type: String, default: '' },
  decimals: { type: Number, default: 0 },
  tickDecimals: { type: Number, default: null },
  labelEvery: { type: Number, default: 3 },
  area: { type: Boolean, default: false },
  note: { type: String, default: '' },
  height: { type: Number, default: 300 },
})

const W = 760
const H = computed(() => props.height)
const padL = 52
const padR = 22
const padT = 30
const padB = 34

const ticks = computed(() => {
  const steps = 4
  return Array.from({ length: steps + 1 }, (_, i) => (props.max / steps) * i)
})

const x = (i) => {
  const span = W - padL - padR
  return props.points.length === 1 ? padL + span / 2 : padL + (span * i) / (props.points.length - 1)
}
const y = (v) => {
  const span = H.value - padT - padB
  return padT + span * (1 - v / props.max)
}

const fmt = (v) => `${Number(v).toFixed(props.decimals)}${props.unit}`
const fmtTick = (v) =>
  `${Number(v).toFixed(props.tickDecimals === null ? props.decimals : props.tickDecimals)}${props.unit}`

const showValue = (i) => i === 0 || i === props.points.length - 1 || i % props.labelEvery === 0

const linePath = computed(() => props.points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(p.value)}`).join(' '))
const areaPath = computed(() => {
  const base = H.value - padB
  return `${linePath.value} L${x(props.points.length - 1)},${base} L${x(0)},${base} Z`
})
</script>

<style scoped>
.rchart {
  margin: 0;
  border: 1px solid var(--border-light);
  border-radius: 14px;
  background: var(--bg-primary);
  padding: 20px 18px 14px;
}

.rchart__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--fg-1);
  line-height: 1.4;
  margin-bottom: 6px;
}

.rchart__frame {
  width: 100%;
}

.rchart__frame svg {
  width: 100%;
  height: auto;
  display: block;
  overflow: visible;
}

.rchart__grid line {
  stroke: #eeeaf6;
  stroke-width: 1;
}

.rchart__area {
  fill: var(--violet-300);
  opacity: 0.22;
}

.rchart__line {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 2.5;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.rchart__dot {
  fill: var(--color-primary);
}

.rchart__value {
  font-size: 11px;
  font-weight: 600;
  fill: var(--fg-1);
  text-anchor: middle;
}

.rchart__ytick {
  font-size: 11px;
  fill: var(--fg-3);
  text-anchor: end;
}

.rchart__xtick {
  font-size: 11px;
  fill: var(--fg-3);
  text-anchor: middle;
}

.rchart__note {
  font-size: 13px;
  color: var(--fg-3);
  margin: 10px 0 0;
}

@media (max-width: 600px) {
  .rchart {
    padding: 16px 12px 10px;
  }

  .rchart:not(.rchart--few) .rchart__xtick--alt {
    display: none;
  }
}
</style>
