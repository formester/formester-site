<template>
  <div class="pal">
    <div class="pal__title">Fields</div>
    <div class="pal__grid">
      <button
        v-for="f in FIELD_ITEMS"
        :key="f.fieldType"
        type="button"
        class="pal__item"
        :class="{ 'pal__item--wide': f.wide }"
        draggable="true"
        :title="`Add ${f.label}`"
        @dragstart="onDragStart($event, { type: 'fillable', presetContent: { fieldType: f.fieldType } })"
        @click="$emit('add', { type: 'fillable', presetContent: { fieldType: f.fieldType } })"
      >
        <span class="pal__icon" :style="{ background: f.bg, color: f.fg }"><component :is="f.icon" :size="16" /></span>
        <span class="pal__label">{{ f.label }}</span>
      </button>
    </div>

    <div class="pal__title pal__title--gap">Layout</div>
    <div class="pal__grid">
      <button
        v-for="s in STATIC_ITEMS"
        :key="s.type"
        type="button"
        class="pal__item"
        draggable="true"
        :title="`Add ${s.label}`"
        @dragstart="onDragStart($event, { type: s.type })"
        @click="$emit('add', { type: s.type })"
      >
        <span class="pal__icon pal__icon--neutral"><component :is="s.icon" :size="16" /></span>
        <span class="pal__label">{{ s.label }}</span>
      </button>
    </div>

    <p class="pal__hint">Drag a field onto the page, or click one to place it below the last field.</p>
  </div>
</template>

<script setup>
import {
  RectangleHorizontal,
  AlignLeft,
  SquareCheck,
  CircleDot,
  ChevronDown,
  Calendar,
  PenLine,
  Heading,
  Type,
  Minus,
  Square,
} from '@lucide/vue'

defineEmits(['add'])

const FIELD_ITEMS = [
  { fieldType: 'text', label: 'Text', icon: RectangleHorizontal, bg: '#f0ebfa', fg: '#6434d0' },
  { fieldType: 'multiline', label: 'Paragraph', icon: AlignLeft, bg: '#f0ebfa', fg: '#6434d0' },
  { fieldType: 'checkbox', label: 'Checkbox', icon: SquareCheck, bg: '#e6faef', fg: '#027a48' },
  { fieldType: 'radio', label: 'Radio', icon: CircleDot, bg: '#fef3e2', fg: '#dc6803' },
  { fieldType: 'dropdown', label: 'Dropdown', icon: ChevronDown, bg: '#e8f1fd', fg: '#175cd3' },
  { fieldType: 'date', label: 'Date', icon: Calendar, bg: '#e4f7f5', fg: '#0e9384' },
  { fieldType: 'signature', label: 'Signature', icon: PenLine, bg: '#fdf2fa', fg: '#c11574', wide: true },
]

const STATIC_ITEMS = [
  { type: 'header', label: 'Heading', icon: Heading },
  { type: 'text', label: 'Text', icon: Type },
  { type: 'line', label: 'Line', icon: Minus },
  { type: 'rectangle', label: 'Box', icon: Square },
]

// CanvasPage reads application/json from the drop and builds the element itself.
const onDragStart = (e, item) => {
  e.dataTransfer.setData('application/json', JSON.stringify(item))
  e.dataTransfer.effectAllowed = 'copy'
}
</script>

<style scoped>
.pal {
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-3);
}
.pal__title {
  font-size: 11px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg-3);
  padding: 0 var(--space-1) var(--space-2);
}
.pal__title--gap {
  margin-top: var(--space-4);
}
.pal__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-2);
}
.pal__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
  padding: 10px;
  border: 1px solid var(--border-light);
  border-radius: 10px;
  background: var(--bg-primary);
  cursor: grab;
  text-align: left;
  transition:
    border-color 120ms ease,
    box-shadow 120ms ease;
}
.pal__item:hover {
  border-color: var(--border-violet);
  box-shadow: var(--shadow-xs);
}
.pal__item:active {
  cursor: grabbing;
}
.pal__item:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring-primary);
}
.pal__item--wide {
  grid-column: span 2;
  flex-direction: row;
  align-items: center;
}
.pal__icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pal__icon--neutral {
  background: var(--bg-grey-100);
  color: var(--fg-strong);
}
.pal__label {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
}
.pal__hint {
  margin: var(--space-4) 0 0;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--bg-grey-50);
  font-size: var(--fs-xs);
  line-height: 1.5;
  color: var(--fg-3);
}
</style>
