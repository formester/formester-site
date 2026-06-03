<template>
  <section class="am-section" :style="{ background }">
    <div class="am-inner">
      <SectionHeader :eyebrow="eyebrow" :title="title" :description="description" />

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
import SectionHeader from '@/components/v2/SectionHeader.vue'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  background: { type: String, default: '' },
  mockHtml: { type: String, default: '' },
  pins: { type: Array, default: () => [] },
})

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
