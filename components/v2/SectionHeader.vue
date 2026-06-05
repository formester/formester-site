<template>
  <div
    v-if="eyebrow || segments.length || description"
    class="sh"
    :class="[`sh--${align}`, `sh--${tone}`, `sh--sp-${spacing}`, `sh--size-${size}`]"
  >
    <template v-if="eyebrow">
      <SectionBadge v-if="tone === 'default'" :text="eyebrow" />
      <span v-else class="sh__eyebrow">{{ eyebrow }}</span>
    </template>

    <component :is="tag" v-if="segments.length" class="sh__heading" :class="`sh__heading--${size}`">
      <span v-for="(seg, i) in segments" :key="i" :class="{ 'sh__hl': seg.highlight }"
        >{{ seg.text }}{{ i < segments.length - 1 ? ' ' : '' }}</span
      >
    </component>

    <p v-if="description" class="sh__desc">{{ description }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: [String, Array], default: () => [] },
  description: { type: String, default: '' },
  align: { type: String, default: 'center' }, // center | left
  tone: { type: String, default: 'default' }, // default | inverse (on dark/gradient)
  size: { type: String, default: 'default' }, // default | sm | xl (hero scale)
  spacing: { type: String, default: 'lg' }, // lg | none (bottom margin)
  tag: { type: String, default: 'h2' }, // h2 | h1 (hero usage)
})

const segments = computed(() =>
  Array.isArray(props.title)
    ? props.title
    : props.title
      ? [{ text: props.title, highlight: false }]
      : [],
)
</script>

<style scoped>
.sh {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.sh--center {
  text-align: center;
  align-items: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.sh--left {
  text-align: left;
  align-items: flex-start;
}
.sh--sp-lg {
  margin-bottom: var(--space-12);
}
.sh--sp-none {
  margin-bottom: 0;
}

.sh__heading {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: var(--fw-bold);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--fg-1);
  margin: 0;
}
.sh__heading--sm {
  font-size: clamp(22px, 2.6vw, 30px);
}
.sh__heading--xl {
  font-size: clamp(36px, 4vw, 54px);
  line-height: 1.1;
  letter-spacing: -1.5px;
}
.sh--size-xl .sh__desc {
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
}
.sh__hl {
  color: var(--violet-500);
  font-style: italic;
  font-family: var(--font-display);
}
.sh__desc {
  font-size: var(--fs-md);
  line-height: var(--lh-lg);
  color: var(--fg-2);
  margin: 0;
}

/* Inverse: on the violet gradient band / dark backgrounds */
.sh--inverse .sh__heading {
  color: #fff;
}
.sh--inverse .sh__hl {
  color: #fff;
}
.sh--inverse .sh__desc {
  color: rgba(255, 255, 255, 0.74);
}
.sh__eyebrow {
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}
</style>
