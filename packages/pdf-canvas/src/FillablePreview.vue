<template>
  <div class="fillable-preview" :class="`fillable-preview--${kind}`" :style="boxStyle">
    <span v-if="glyph" class="fillable-preview__glyph" v-html="glyph"></span>
    <span v-if="showName" class="fillable-preview__name">{{ label }}</span>
    <span v-if="content.required" class="fillable-preview__req" title="Required"></span>
  </div>
</template>

<script setup>
// Editor-only look for a fillable (AcroForm) field: a translucent tint per type so a
// busy form reads at a glance. The PDF output is drawn by the fillableField plugin.
import { computed } from "vue";

const props = defineProps({
  element: { type: Object, required: true },
  scale: { type: Number, default: 1 },
});

// Tints follow the site's semantic colours: violet text, green checkbox, amber radio,
// blue dropdown, teal date, pink signature.
const TINTS = {
  text: { fg: "#6434d0", bg: "rgba(100,52,208,0.08)", border: "#b8a1ee" },
  multiline: { fg: "#6434d0", bg: "rgba(100,52,208,0.08)", border: "#b8a1ee" },
  checkbox: { fg: "#027a48", bg: "rgba(2,122,72,0.08)", border: "#6fd6a2" },
  radio: { fg: "#dc6803", bg: "rgba(220,104,3,0.08)", border: "#f7b26b" },
  dropdown: { fg: "#175cd3", bg: "rgba(23,92,211,0.08)", border: "#9ec0f5" },
  date: { fg: "#0e9384", bg: "rgba(14,147,132,0.08)", border: "#7fd3c8" },
  signature: { fg: "#c11574", bg: "rgba(193,21,116,0.06)", border: "#efb1d6" },
};

const GLYPHS = {
  date: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  dropdown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  signature: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c3-6 5-8 7-6s1 6 4 3 3-4 7-4"/><path d="M3 21h18"/></svg>',
};

const content = computed(() => props.element.content ?? {});
const kind = computed(() => content.value.fieldType ?? "text");
const tint = computed(() => TINTS[kind.value] ?? TINTS.text);
const glyph = computed(() => GLYPHS[kind.value] ?? "");
const isBox = computed(() => kind.value === "checkbox" || kind.value === "radio");
const showName = computed(() => !isBox.value && props.element.w * props.scale > 40);
const label = computed(() =>
  kind.value === "radio" ? content.value.optionValue || content.value.name : content.value.name || kind.value,
);

const boxStyle = computed(() => ({
  "--fp-fg": tint.value.fg,
  "--fp-bg": tint.value.bg,
  "--fp-border": tint.value.border,
  fontSize: `${Math.max(8, Math.min(12, 10 * props.scale))}px`,
  borderRadius: kind.value === "radio" ? "9999px" : "3px",
  justifyContent: kind.value === "dropdown" ? "space-between" : "flex-start",
  alignItems: kind.value === "multiline" ? "flex-start" : "center",
}));
</script>

<style scoped>
.fillable-preview {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 6px;
  padding: 0 8px;
  overflow: hidden;
  color: var(--fp-fg);
  background: var(--fp-bg);
  border: 1px solid var(--fp-border);
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
}
.fillable-preview--multiline {
  padding-top: 6px;
}
.fillable-preview--checkbox,
.fillable-preview--radio {
  padding: 0;
}
.fillable-preview--dropdown .fillable-preview__glyph {
  order: 2;
}
.fillable-preview__glyph {
  width: 1.1em;
  height: 1.1em;
  flex: none;
  display: inline-flex;
}
.fillable-preview__glyph :deep(svg) {
  width: 100%;
  height: 100%;
}
.fillable-preview__name {
  overflow: hidden;
  text-overflow: ellipsis;
}
.fillable-preview__req {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--fp-fg);
}
</style>
