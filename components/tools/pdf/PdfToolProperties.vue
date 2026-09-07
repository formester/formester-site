<template>
  <div class="props">
    <div class="props__head">
      <div class="d-flex align-items-center gap-2">
        <span class="props__type-icon"><component :is="typeIcon" :size="16" /></span>
        <div>
          <div class="props__type">{{ typeLabel }}</div>
          <div class="props__geo">
            Page {{ pageIndex + 1 }} · {{ Math.round(element.w) }} × {{ Math.round(element.h) }} pt
          </div>
        </div>
      </div>
      <div class="d-flex gap-1">
        <button type="button" class="props__icon-btn" title="Duplicate (⌘D)" @click="$emit('clone')">
          <Copy :size="14" />
        </button>
        <button type="button" class="props__icon-btn props__icon-btn--danger" title="Delete" @click="$emit('delete')">
          <Trash2 :size="14" />
        </button>
      </div>
    </div>

    <div class="props__body">
      <!-- Fillable field -->
      <template v-if="isFillable">
        <label class="props__field">
          <span class="props__label">Field type</span>
          <select
            class="form-select form-select-sm"
            :value="c.fieldType"
            @change="setContent({ fieldType: $event.target.value })"
          >
            <option v-for="t in FIELD_TYPES" :key="t.value" :value="t.value">{{ t.label }}</option>
          </select>
        </label>

        <label class="props__field">
          <span class="props__label">Field name</span>
          <input
            class="form-control form-control-sm props__mono"
            :value="c.name"
            @input="setContent({ name: $event.target.value })"
          />
          <span v-if="nameClash" class="props__warn"
            >Another field uses this name. It will be exported as {{ c.name }}_2.</span
          >
          <span v-else class="props__help">Shown to tools that read the PDF. Keep it unique.</span>
        </label>

        <label v-if="c.fieldType === 'radio'" class="props__field">
          <span class="props__label">This option's value</span>
          <input
            class="form-control form-control-sm"
            :value="c.optionValue"
            @input="setContent({ optionValue: $event.target.value })"
          />
          <span class="props__help">Radios with the same field name form one group.</span>
        </label>

        <label v-if="c.fieldType === 'dropdown'" class="props__field">
          <span class="props__label">Options (one per line)</span>
          <textarea
            class="form-control form-control-sm"
            rows="4"
            :value="(c.options || []).join('\n')"
            @input="setContent({ options: splitLines($event.target.value) })"
          ></textarea>
        </label>

        <label v-if="c.fieldType !== 'signature' && c.fieldType !== 'checkbox'" class="props__field">
          <span class="props__label">Tooltip</span>
          <input
            class="form-control form-control-sm"
            :value="c.tooltip"
            :placeholder="c.fieldType === 'date' ? 'MM/DD/YYYY' : 'Shown on hover'"
            @input="setContent({ tooltip: $event.target.value })"
          />
        </label>

        <label v-if="['text', 'multiline', 'date', 'dropdown'].includes(c.fieldType)" class="props__field">
          <span class="props__label">Default value</span>
          <input
            class="form-control form-control-sm"
            :value="c.defaultValue"
            placeholder="None"
            @input="setContent({ defaultValue: $event.target.value })"
          />
        </label>

        <div class="props__toggles">
          <label class="props__toggle">
            <span>Required</span>
            <input
              type="checkbox"
              class="form-check-input"
              :checked="!!c.required"
              @change="setContent({ required: $event.target.checked })"
            />
          </label>
          <label v-if="c.fieldType === 'checkbox'" class="props__toggle">
            <span>Checked by default</span>
            <input
              type="checkbox"
              class="form-check-input"
              :checked="c.defaultValue === 'true'"
              @change="setContent({ defaultValue: $event.target.checked ? 'true' : '' })"
            />
          </label>
          <label v-if="c.fieldType === 'dropdown'" class="props__toggle">
            <span>Allow custom text</span>
            <input
              type="checkbox"
              class="form-check-input"
              :checked="!!c.editable"
              @change="setContent({ editable: $event.target.checked })"
            />
          </label>
          <label v-if="c.fieldType !== 'signature'" class="props__toggle">
            <span>Read only</span>
            <input
              type="checkbox"
              class="form-check-input"
              :checked="!!c.readOnly"
              @change="setContent({ readOnly: $event.target.checked })"
            />
          </label>
        </div>

        <template v-if="['text', 'multiline', 'date', 'dropdown'].includes(c.fieldType)">
          <div class="props__divider"></div>
          <div class="props__row">
            <label class="props__field">
              <span class="props__label">Font size</span>
              <input
                type="number"
                min="4"
                max="72"
                class="form-control form-control-sm"
                :value="st.fontSize"
                @input="setStyle({ fontSize: num($event.target.value, 10) })"
              />
            </label>
            <label v-if="c.fieldType !== 'dropdown'" class="props__field">
              <span class="props__label">Max length</span>
              <input
                type="number"
                min="1"
                class="form-control form-control-sm"
                :value="c.maxLength ?? ''"
                placeholder="None"
                @input="setContent({ maxLength: $event.target.value ? num($event.target.value, null) : null })"
              />
            </label>
          </div>
          <label v-if="c.fieldType === 'text' || c.fieldType === 'date'" class="props__toggle">
            <span>Comb cells (one character per box)</span>
            <input
              type="checkbox"
              class="form-check-input"
              :checked="!!c.comb"
              :disabled="!c.maxLength"
              @change="setContent({ comb: $event.target.checked })"
            />
          </label>
          <label class="props__field">
            <span class="props__label">Align</span>
            <div class="props__seg">
              <button
                v-for="a in ALIGNS"
                :key="a.value"
                type="button"
                class="props__seg-btn"
                :class="{ 'is-active': (st.align || 'left') === a.value }"
                :title="a.label"
                @click="setStyle({ align: a.value })"
              >
                <component :is="a.icon" :size="14" />
              </button>
            </div>
          </label>
        </template>

        <div class="props__divider"></div>
        <div class="props__row">
          <label class="props__field">
            <span class="props__label">Border</span>
            <div class="props__color">
              <input
                type="color"
                :value="st.borderColor || '#98a2b3'"
                @input="setStyle({ borderColor: $event.target.value })"
              />
              <input
                type="number"
                min="0"
                max="4"
                step="0.5"
                class="form-control form-control-sm"
                :value="st.borderWidth ?? 1"
                @input="setStyle({ borderWidth: num($event.target.value, 1) })"
              />
            </div>
          </label>
          <label v-if="c.fieldType !== 'signature'" class="props__field">
            <span class="props__label">Text colour</span>
            <div class="props__color">
              <input
                type="color"
                :value="st.textColor || '#101828'"
                @input="setStyle({ textColor: $event.target.value })"
              />
            </div>
          </label>
        </div>
        <label v-if="c.fieldType !== 'signature'" class="props__toggle">
          <span>White fill behind the field</span>
          <input
            type="checkbox"
            class="form-check-input"
            :checked="!!st.backgroundColor"
            @change="setStyle({ backgroundColor: $event.target.checked ? '#ffffff' : '' })"
          />
        </label>
      </template>

      <!-- Heading / text -->
      <template v-else-if="element.type === 'header' || element.type === 'text'">
        <label class="props__field">
          <span class="props__label">Text</span>
          <textarea
            class="form-control form-control-sm"
            rows="3"
            :value="c.text"
            @input="setContent({ text: $event.target.value })"
          ></textarea>
        </label>
        <div class="props__row">
          <label class="props__field">
            <span class="props__label">Font size</span>
            <input
              type="number"
              min="6"
              max="96"
              class="form-control form-control-sm"
              :value="st.fontSize"
              @input="setStyle({ fontSize: num($event.target.value, 12) })"
            />
          </label>
          <label class="props__field">
            <span class="props__label">Colour</span>
            <div class="props__color">
              <input type="color" :value="st.color || '#101828'" @input="setStyle({ color: $event.target.value })" />
            </div>
          </label>
        </div>
        <label class="props__field">
          <span class="props__label">Align</span>
          <div class="props__seg">
            <button
              v-for="a in ALIGNS"
              :key="a.value"
              type="button"
              class="props__seg-btn"
              :class="{ 'is-active': (st.align || 'left') === a.value }"
              :title="a.label"
              @click="setStyle({ align: a.value })"
            >
              <component :is="a.icon" :size="14" />
            </button>
          </div>
        </label>
        <label class="props__toggle">
          <span>Bold</span>
          <input
            type="checkbox"
            class="form-check-input"
            :checked="st.fontWeight === 'bold'"
            @change="setStyle({ fontWeight: $event.target.checked ? 'bold' : 'normal' })"
          />
        </label>
      </template>

      <!-- Line / box -->
      <template v-else-if="element.type === 'line' || element.type === 'rectangle'">
        <div class="props__row">
          <label class="props__field">
            <span class="props__label">{{ element.type === 'line' ? 'Colour' : 'Border colour' }}</span>
            <div class="props__color">
              <input
                type="color"
                :value="st.color || st.strokeColor || '#98a2b3'"
                @input="
                  setStyle(
                    element.type === 'line' ? { color: $event.target.value } : { strokeColor: $event.target.value },
                  )
                "
              />
            </div>
          </label>
          <label class="props__field">
            <span class="props__label">Thickness</span>
            <input
              type="number"
              min="0.5"
              max="12"
              step="0.5"
              class="form-control form-control-sm"
              :value="st.thickness ?? st.strokeWidth ?? 1"
              @input="
                setStyle(
                  element.type === 'line'
                    ? { thickness: num($event.target.value, 1) }
                    : { strokeWidth: num($event.target.value, 1) },
                )
              "
            />
          </label>
        </div>
      </template>

      <div class="props__divider"></div>
      <div class="props__label">Position and size (pt)</div>
      <div class="props__geo-grid">
        <label
          ><span>X</span
          ><input
            type="number"
            class="form-control form-control-sm"
            :value="Math.round(element.x)"
            @change="setGeo('x', $event.target.value)"
        /></label>
        <label
          ><span>Y</span
          ><input
            type="number"
            class="form-control form-control-sm"
            :value="Math.round(element.y)"
            @change="setGeo('y', $event.target.value)"
        /></label>
        <label
          ><span>W</span
          ><input
            type="number"
            class="form-control form-control-sm"
            :value="Math.round(element.w)"
            @change="setGeo('w', $event.target.value)"
        /></label>
        <label
          ><span>H</span
          ><input
            type="number"
            class="form-control form-control-sm"
            :value="Math.round(element.h)"
            @change="setGeo('h', $event.target.value)"
        /></label>
      </div>
    </div>

    <div class="props__foot"><strong>Shortcuts</strong> ⌘D duplicate · ⌫ delete · arrows nudge · ⌘Z undo</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  Copy,
  Trash2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  RectangleHorizontal,
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

const props = defineProps({
  element: { type: Object, required: true },
  pageIndex: { type: Number, default: 0 },
  allElements: { type: Array, default: () => [] },
})
const emit = defineEmits(['patch', 'clone', 'delete'])

const FIELD_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'multiline', label: 'Paragraph' },
  { value: 'checkbox', label: 'Checkbox' },
  { value: 'radio', label: 'Radio' },
  { value: 'dropdown', label: 'Dropdown' },
  { value: 'date', label: 'Date' },
  { value: 'signature', label: 'Signature' },
]
const ALIGNS = [
  { value: 'left', label: 'Left', icon: AlignLeft },
  { value: 'center', label: 'Center', icon: AlignCenter },
  { value: 'right', label: 'Right', icon: AlignRight },
]
const ICONS = {
  text: RectangleHorizontal,
  multiline: AlignLeft,
  checkbox: SquareCheck,
  radio: CircleDot,
  dropdown: ChevronDown,
  date: Calendar,
  signature: PenLine,
  header: Heading,
  statictext: Type,
  line: Minus,
  rectangle: Square,
}

const c = computed(() => props.element.content ?? {})
const st = computed(() => props.element.style ?? {})
const isFillable = computed(() => props.element.type === 'fillable')
const typeLabel = computed(() => {
  if (isFillable.value) return `${FIELD_TYPES.find((t) => t.value === c.value.fieldType)?.label ?? 'Text'} field`
  return (
    { header: 'Heading', text: 'Text', line: 'Line', rectangle: 'Box', image: 'Image' }[props.element.type] ??
    props.element.type
  )
})
const typeIcon = computed(() =>
  isFillable.value
    ? (ICONS[c.value.fieldType] ?? ICONS.text)
    : (ICONS[props.element.type === 'text' ? 'statictext' : props.element.type] ?? Type),
)
const nameClash = computed(() => {
  if (!isFillable.value || c.value.fieldType === 'radio') return false
  return props.allElements.some(
    (e) =>
      e.id !== props.element.id &&
      e.type === 'fillable' &&
      e.content?.name === c.value.name &&
      e.content?.fieldType !== 'radio',
  )
})

const num = (v, fallback) => {
  const n = Number(v)
  return Number.isFinite(n) ? n : fallback
}
const splitLines = (v) =>
  v
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
const setContent = (content) => emit('patch', { content })
const setStyle = (style) => emit('patch', { style })
const setGeo = (key, v) => {
  const n = num(v, null)
  if (n == null) return
  emit('patch', { [key]: key === 'w' || key === 'h' ? Math.max(4, n) : Math.max(0, n) })
}
</script>

<style scoped>
.props {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}
.props__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-4) var(--space-3);
  border-bottom: 1px solid var(--border-light);
}
.props__type-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--bg-violet-50);
  color: var(--violet-500);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.props__type {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}
.props__geo {
  font-size: 11px;
  color: var(--fg-muted);
}
.props__icon-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--border-light);
  background: var(--bg-primary);
  color: var(--fg-strong);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.props__icon-btn:hover {
  background: var(--bg-grey-50);
}
.props__icon-btn--danger {
  color: var(--error);
}
.props__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  overflow: auto;
  flex: 1;
}
.props__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
}
.props__label {
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--fg-strong);
}
.props__help {
  font-size: 11px;
  color: var(--fg-muted);
}
.props__warn {
  font-size: 11px;
  color: var(--warning-600);
}
.props__mono {
  font-family: var(--font-mono);
}
.props__toggles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.props__toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: var(--fg-strong);
  margin: 0;
}
.props__toggle .form-check-input {
  margin: 0;
  width: 2.25em;
  height: 1.25em;
  border-radius: 999px;
  background-position: left center;
  transition: background-position 0.15s ease-in-out;
  cursor: pointer;
}
.props__toggle .form-check-input:checked {
  background-color: var(--violet-500);
  border-color: var(--violet-500);
  background-position: right center;
}
.props__divider {
  height: 1px;
  background: var(--border-light);
}
.props__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.props__seg {
  display: flex;
  padding: 2px;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  background: var(--bg-grey-50);
}
.props__seg-btn {
  flex: 1;
  display: inline-flex;
  justify-content: center;
  padding: 6px 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--fg-3);
}
.props__seg-btn.is-active {
  background: var(--bg-primary);
  color: var(--fg-1);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.08);
}
.props__color {
  display: flex;
  align-items: center;
  gap: 8px;
}
.props__color input[type='color'] {
  width: 36px;
  height: 31px;
  padding: 2px;
  border: 1px solid var(--border-dark);
  border-radius: 8px;
  background: var(--bg-primary);
}
.props__geo-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}
.props__geo-grid label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
  color: var(--fg-muted);
  margin: 0;
}
.props__foot {
  padding: var(--space-3) var(--space-4) var(--space-4);
  border-top: 1px solid var(--border-light);
  font-size: 11px;
  color: var(--fg-muted);
}
.props__foot strong {
  font-weight: var(--fw-semibold);
  color: var(--fg-3);
}
</style>
