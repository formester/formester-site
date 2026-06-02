<template>
  <section class="am-section" :style="{ background }">
    <div class="am-inner">
      <div v-if="eyebrow || resolvedTitle.length || description" class="am-header">
        <SectionBadge v-if="eyebrow" :text="eyebrow" />
        <h2 v-if="resolvedTitle.length" class="am-heading">
          <span v-for="(item, i) in resolvedTitle" :key="i" :class="{ 'am-highlight': item.highlight }"
            >{{ item.text }}{{ i < resolvedTitle.length - 1 ? ' ' : '' }}</span
          >
        </h2>
        <p v-if="description" class="am-desc">{{ description }}</p>
      </div>

      <div class="am-layout">
        <div class="am-col am-col--left">
          <div v-for="(p, i) in leftPins" :key="i" class="am-pin">
            <span class="am-pin__label"
              ><span class="am-pin__n">{{ i + 1 }}</span
              >{{ p.label }}</span
            >
            <span class="am-pin__body">{{ p.body }}</span>
          </div>
        </div>

        <div class="am-graphic">
          <div v-if="mockHtml" v-html="mockHtml" />
        </div>

        <div class="am-col am-col--right">
          <div v-for="(p, i) in rightPins" :key="i" class="am-pin">
            <span class="am-pin__label"
              ><span class="am-pin__n">{{ leftPins.length + i + 1 }}</span
              >{{ p.label }}</span
            >
            <span class="am-pin__body">{{ p.body }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: [String, Array], default: () => [] },
  description: { type: String, default: '' },
  background: { type: String, default: '' },
  mockHtml: { type: String, default: '' },
  pins: { type: Array, default: () => [] },
})

const resolvedTitle = computed(() =>
  Array.isArray(props.title) ? props.title : props.title ? [{ text: props.title, highlight: false }] : [],
)
const half = computed(() => Math.ceil(props.pins.length / 2))
const leftPins = computed(() => props.pins.slice(0, half.value))
const rightPins = computed(() => props.pins.slice(half.value))
</script>

<style scoped>
.am-section {
  padding: var(--space-16) var(--space-6);
}
.am-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.am-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}
.am-heading {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: var(--fw-bold);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--fg-1);
  margin: 0;
}
.am-highlight {
  color: var(--violet-500);
  font-style: italic;
  font-family: var(--font-display);
}
.am-desc {
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
  color: var(--fg-2);
  margin: 0;
}

.am-layout {
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
  gap: var(--space-8);
  align-items: center;
}
.am-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}
.am-col--left {
  text-align: right;
  align-items: flex-end;
}

.am-graphic {
  min-width: 0;
}

.am-pin {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 260px;
}
.am-pin__label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.am-col--left .am-pin__label {
  flex-direction: row-reverse;
}
.am-pin__n {
  width: 22px;
  height: 22px;
  border-radius: var(--r-full);
  background: var(--violet-500);
  color: #fff;
  font-size: 12px;
  font-weight: var(--fw-bold);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.am-pin__body {
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--fg-2);
}

@media (max-width: 860px) {
  .am-layout {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  .am-graphic {
    order: -1;
  }
  .am-col--left {
    text-align: left;
    align-items: flex-start;
  }
  .am-col--left .am-pin__label {
    flex-direction: row;
  }
}
</style>
