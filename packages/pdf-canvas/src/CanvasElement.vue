<template>
  <div
    class="canvas-el"
    :class="{ selected, 'canvas-el--orphan': isOrphan }"
    :style="elStyle"
    :data-element-id="element.id"
    @mousedown.stop="onMoveStart"
    @click.stop="onClick"
  >
    <!-- Content -->
    <div class="canvas-el__body">
      <template v-if="element.type === 'text' || element.type === 'header'">
        <span class="el-text" :style="textStyle">
          <template v-if="textParts.length">
            <template v-for="(part, i) in textParts" :key="i">
              <span v-if="part.type === 'mention'" class="el-recall-badge">{{
                part.label
              }}</span>
              <template v-else>{{ part.value }}</template>
            </template>
          </template>
          <template v-else>{{ element.type }}</template>
        </span>
      </template>
      <template v-else-if="element.type === 'placeholder'">
        <span
          class="el-text el-placeholder"
          :class="{
            'el-placeholder--marker': element.content?.kind === 'checkmark',
          }"
          :style="placeholderTextStyle"
          >{{ placeholderPreview }}</span
        >
        <span
          v-if="element.content?.kind === 'checkmark'"
          class="el-marker-label"
          :title="element.content?.label || ''"
        >
          {{ element.content?.label || "?" }}
        </span>
      </template>
      <template v-else-if="element.type === 'image'">
        <img
          v-if="element.content?.src"
          class="el-image"
          :src="element.content.src"
          :style="imageStyle"
          alt=""
          draggable="false"
        />
        <div v-else class="el-image-placeholder">
          <Image />
        </div>
      </template>
      <template v-else-if="liveType === 'signature'">
        <div
          class="el-field-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <div class="el-signature-area" :style="signatureAreaStyle">
            <div
              v-if="rs.showBorder !== false"
              class="el-signature-line"
              :style="signatureLineStyle"
            />
          </div>
        </div>
      </template>
      <template v-else-if="element.type === 'fillable'">
        <FillablePreview :element="element" :scale="scale" />
      </template>
      <template v-else-if="element.type === 'line'">
        <div class="el-line" :style="lineStyle" />
      </template>
      <template v-else-if="element.type === 'rectangle'">
        <div class="el-rectangle" :style="shapeStyle" />
      </template>
      <template v-else-if="element.type === 'circle'">
        <div class="el-circle" :style="circleStyle" />
      </template>
      <template v-else-if="liveType === 'star-rating'">
        <div
          class="el-field-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <div
            class="el-rating"
            :style="{
              color: rs.starColor,
              fontSize: `${rs.starSize * scale}px`,
            }"
          >
            <span v-for="i in starCount" :key="i" class="el-rating__star">{{
              i <= Math.ceil(starCount / 2) ? "★" : "☆"
            }}</span>
          </div>
        </div>
      </template>
      <template v-else-if="liveType === 'scale-rating'">
        <div
          class="el-field-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <div class="el-opinion-scale">
            <div
              v-for="i in scaleSteps"
              :key="i"
              class="el-scale-box"
              :style="{
                borderColor: rs.scaleColor,
                color: rs.scaleColor,
                width: `${rs.scaleBoxSize * scale}px`,
                height: `${rs.scaleBoxSize * scale}px`,
                fontSize: `${rs.scaleFontSize * scale}px`,
              }"
            >
              {{ i }}
            </div>
          </div>
        </div>
      </template>
      <template
        v-else-if="
          liveType === 'radio' ||
          liveType === 'multiple-checkbox' ||
          liveType === 'dropdown'
        "
      >
        <div
          class="el-field-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <div v-if="rs.answerDisplay === 'tag'" class="el-tag-list">
            <span
              v-for="(opt, i) in displayOptions"
              :key="opt.id ?? i"
              class="el-tag"
              :style="tagStyle"
              >{{ opt.label }}</span
            >
          </div>
          <div
            v-else-if="
              rs.answerDisplay === 'ordered' ||
              rs.answerDisplay === 'unordered' ||
              rs.answerDisplay === 'checkbox'
            "
            class="el-choice-list"
            :class="{
              'el-choice-list--row': rs.optionLayout === 'row',
              'el-choice-list--2col': rs.optionLayout === '2col',
            }"
            :style="answerTextStyle"
          >
            <div
              v-for="(opt, i) in displayOptions"
              :key="opt.id ?? i"
              class="el-choice-row"
            >
              <span v-if="rs.answerDisplay === 'ordered'">{{ i + 1 }}.</span>
              <span v-else-if="rs.answerDisplay === 'unordered'">•</span>
              <span v-else class="el-choice-radio">{{ choiceMarker(i) }}</span>
              {{ opt.label }}
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="liveType === 'terms'">
        <div class="el-terms-row" :style="textStyle">
          <span class="el-choice-radio">☐</span>
          <span>{{ liveLabel || "I agree to the terms and conditions" }}</span>
        </div>
      </template>
      <template v-else-if="liveType === 'file'">
        <div
          class="el-field-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <ul
            v-if="rs.fileDisplay === 'bullet'"
            class="el-file-bullets"
            :style="answerTextStyle"
          >
            <li v-for="i in 3" :key="i">
              <a class="el-file-link" href="#">file-{{ i }}.pdf</a>
            </li>
          </ul>
          <div
            v-else-if="rs.fileDisplay === 'card'"
            class="el-file-cards"
            :style="{
              ...answerTextStyle,
              '--file-item-size': `${fileItemSizePx * scale}px`,
            }"
          >
            <div v-for="i in 3" :key="i" class="el-file-card-h">
              <div class="el-file-icon">
                <File />
              </div>
              <span class="el-file-name">file-{{ i }}.pdf</span>
            </div>
          </div>
          <div
            v-else
            class="el-file-grid"
            :class="`el-file-grid--${rs.fileDisplay}`"
            :style="{
              ...answerTextStyle,
              '--file-item-size': `${fileItemSizePx * scale}px`,
            }"
          >
            <div
              v-for="(ratio, i) in fluidPlaceholderRatios"
              :key="i"
              class="el-file-tile"
              :style="
                rs.fileDisplay === 'masonry' ? { aspectRatio: ratio } : null
              "
            >
              <PdfFileIcon />
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="liveType === 'ranking'">
        <div
          class="el-field-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <div
            class="el-ranking-list"
            :style="{
              ...answerTextStyle,
              '--ranking-gap': `${6 * scale}px`,
              '--ranking-num-width': `${14 * scale}px`,
            }"
          >
            <div
              v-for="(opt, i) in liveOptions"
              :key="opt.id ?? i"
              class="el-ranking-row"
            >
              <span class="el-ranking-num">{{ i + 1 }}.</span>
              <span class="el-ranking-label">{{
                opt.label ?? opt.value ?? ""
              }}</span>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="liveType === 'repeat-field'">
        <div
          class="el-repeater-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <div class="el-repeater-table" :style="repeaterTableStyle">
            <div
              v-if="rs.showHeader !== false"
              class="el-repeater-row el-repeater-row--header"
            >
              <template v-if="liveColumns.length">
                <span
                  v-for="col in liveColumns"
                  :key="col.id"
                  class="el-repeater-cell el-repeater-cell--header"
                  >{{ col.label }}</span
                >
              </template>
              <template v-else>
                <span class="el-repeater-cell el-repeater-cell--header"
                  >Column 1</span
                >
                <span class="el-repeater-cell el-repeater-cell--header"
                  >Column 2</span
                >
                <span class="el-repeater-cell el-repeater-cell--header"
                  >Column 3</span
                >
              </template>
            </div>
            <div v-for="r in 2" :key="r" class="el-repeater-row">
              <span
                v-for="col in liveColumns.length
                  ? liveColumns
                  : [{ id: 'a' }, { id: 'b' }, { id: 'c' }]"
                :key="col.id"
                class="el-repeater-cell"
              />
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="liveType === 'matrix'">
        <div
          class="el-matrix-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text el-matrix-label"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <!-- Grid mode -->
          <template v-if="s.matrixDisplay !== 'summary'">
            <div class="el-matrix-table" :style="matrixTableStyle">
              <!-- Column header row -->
              <div
                v-if="s.showColumnHeader !== false"
                class="el-matrix-row el-matrix-row--header"
              >
                <span
                  v-if="s.showRowHeader !== false"
                  class="el-matrix-cell el-matrix-cell--row-label"
                />
                <template v-if="formField?.columns?.length">
                  <span
                    v-for="col in formField.columns"
                    :key="col.id || col.label"
                    class="el-matrix-cell el-matrix-cell--header"
                    >{{ col.label }}</span
                  >
                </template>
                <template v-else>
                  <span class="el-matrix-cell el-matrix-cell--header"
                    >Col 1</span
                  >
                  <span class="el-matrix-cell el-matrix-cell--header"
                    >Col 2</span
                  >
                </template>
              </div>
              <!-- Data rows -->
              <template v-if="formField?.rows?.length">
                <div
                  v-for="row in formField.rows.slice(0, 4)"
                  :key="row.id || row.label"
                  class="el-matrix-row"
                >
                  <span
                    v-if="s.showRowHeader !== false"
                    class="el-matrix-cell el-matrix-cell--row-label el-matrix-cell--header"
                    >{{ row.label }}</span
                  >
                  <span
                    v-for="col in formField.columns ?? []"
                    :key="col.id || col.label"
                    class="el-matrix-cell"
                    >{{ s.emptyCellStyle === "line" ? "-" : "" }}</span
                  >
                </div>
              </template>
              <!-- Fallback rows when no live field data -->
              <template v-else>
                <div v-for="r in 2" :key="r" class="el-matrix-row">
                  <span
                    v-if="s.showRowHeader !== false"
                    class="el-matrix-cell el-matrix-cell--row-label el-matrix-cell--header"
                    >Row {{ r }}</span
                  >
                  <span class="el-matrix-cell">{{
                    s.emptyCellStyle === "line" ? "-" : ""
                  }}</span>
                  <span class="el-matrix-cell">{{
                    s.emptyCellStyle === "line" ? "-" : ""
                  }}</span>
                </div>
              </template>
            </div>
          </template>
          <!-- Summary mode -->
          <template v-else>
            <div class="el-matrix-summary" :style="answerTextStyle">
              <template v-if="formField?.rows?.length">
                <div
                  v-for="row in formField.rows.slice(0, 3)"
                  :key="row.id || row.label"
                  class="el-matrix-summary-row"
                >
                  <span class="el-matrix-summary-label">{{ row.label }}:</span>
                  <span class="el-matrix-summary-value">-</span>
                </div>
              </template>
              <template v-else>
                <div class="el-matrix-summary-row">
                  <span class="el-matrix-summary-label">Row 1:</span
                  ><span class="el-matrix-summary-value">-</span>
                </div>
                <div class="el-matrix-summary-row">
                  <span class="el-matrix-summary-label">Row 2:</span
                  ><span class="el-matrix-summary-value">-</span>
                </div>
              </template>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <div
          class="el-field-wrapper"
          :class="{ 'el-field-wrapper--inline': rs.labelLayout === 'inline' }"
          :style="fieldWrapperStyle"
        >
          <span
            v-if="showLabel"
            class="el-field-label-text"
            :style="labelTextStyle"
            >{{ liveLabel }}</span
          >
          <div class="el-answer-line" :style="answerLineStyle" />
        </div>
      </template>
    </div>

    <!-- Orphan warning badge -->
    <div
      v-if="isOrphan"
      class="el-orphan-badge"
      title="Referenced field was deleted"
    >
      <TriangleAlert :size="10" />
    </div>

    <!-- Contextual action toolbar (single-select only) -->
    <div
      v-if="selected && !isMultiSelect"
      class="el-toolbar"
      :class="{ 'el-toolbar--below': toolbarBelow }"
      @mousedown.stop
      @click.stop
    >
      <button
        class="el-toolbar__btn"
        title="Clone"
        @click="$emit('clone', element.id)"
      >
        <Copy :size="13" />
      </button>

      <button
        class="el-toolbar__btn el-toolbar__btn--danger"
        title="Delete"
        @click="$emit('delete', element.id)"
      >
        <Trash2 :size="13" />
      </button>
    </div>

    <!-- Resize handles (single-select only) -->
    <template v-if="selected && !isMultiSelect">
      <div
        v-for="handle in HANDLES"
        :key="handle.id"
        class="resize-handle"
        :class="`resize-handle--${handle.id}`"
        @mousedown.stop="onResizeStart($event, handle.id)"
      />
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { TriangleAlert, Copy, Trash2, Image, File } from "@lucide/vue";
import PdfFileIcon from "./icons/PdfFileIcon.vue";
import FillablePreview from "./FillablePreview.vue";
import { resolveElementStyle } from "@formester/pdf-core/constants/pdf-element-style.js";
import {
  resolveFieldType,
  resolveFieldLabel,
  resolveMarkerGlyph,
} from "@formester/pdf-core/constants/pdf-builder-schema.js";

const HANDLES = [{ id: "nw" }, { id: "ne" }, { id: "sw" }, { id: "se" }];

const TOOLBAR_H = 42;

const props = defineProps({
  element: { type: Object, required: true },
  formField: { type: Object, default: null },
  formFieldsMap: { type: Object, default: () => ({}) },
  scale: { type: Number, default: 1 },
  selected: { type: Boolean, default: false },
  isOrphan: { type: Boolean, default: false },
  isMultiSelect: { type: Boolean, default: false },
  globalTypography: { type: Object, default: () => ({}) },
});

const textParts = computed(() => {
  const text = props.element.content?.text ?? "";
  if (!text) return [];
  return text.split(/(@\{[^}]+\})/).map((part) => {
    const m = part.match(/^@\{([^}]+)\}$/);
    if (!m) return { type: "text", value: part };
    const field = props.formFieldsMap[m[1]];
    return {
      type: "mention",
      value: part,
      label: field?.label || field?.fixedName || m[1],
    };
  });
});

const emit = defineEmits([
  "select",
  "toggle-select",
  "move-start",
  "resize-start",
  "clone",
  "delete",
]);

const liveType = computed(() =>
  props.formField ? resolveFieldType(props.formField.type) : props.element.type,
);

const liveLabel = computed(
  () => resolveFieldLabel(props.element, props.formField) || props.element.type,
);

const liveOptions = computed(() => props.formField?.options ?? []);

// upload mode placeholder preview: show a label hint inside dashed box.
const placeholderPreview = computed(() => {
  const c = props.element.content ?? {};
  const label = props.formField?.label || c.label || "Field";
  if (c.kind === "checkmark") {
    // Just the glyph inside the (small) box. The option label sits above it as a non-printing badge
    // so the user know for which option the marker is.
    const { glyph } = resolveMarkerGlyph(c, props.element.style ?? {});
    return glyph;
  }
  return `[${label}]`;
});

// Marker glyphs use DejaVu Sans (broad Unicode coverage, bundled in the
// font map) and scale to the box so the visual size in the editor matches
// the printed PDF size 1:1.
const placeholderTextStyle = computed(() => {
  const base = textStyle.value;
  const c = props.element.content ?? {};
  if (c.kind !== "checkmark") return base;
  const { bg } = resolveMarkerGlyph(c, props.element.style ?? {});
  const sz = Math.min(props.element.w, props.element.h) * 0.9;
  return {
    ...base,
    fontFamily: "DejaVu Sans",
    fontSize: `${sz * props.scale}px`,
    color: bg ? "#FFFFFF" : (props.element.style?.color ?? base.color),
    background: bg ? (props.element.style?.color ?? "#101828") : "transparent",
    textAlign: "center",
    justifyContent: "center",
    lineHeight: 1,
  };
});

// Scale/Star ratings
const starCount = computed(() => {
  const item = props.formField?.item ?? props.formField ?? {};
  return Number(item.count ?? 5);
});
const scaleSteps = computed(() => {
  const item = props.formField?.item ?? props.formField ?? {};
  const start = Number(item.start ?? 1);
  const end = Number(item.end ?? 10);
  return Math.max(1, end - start + 1);
});

// File
const FILE_SIZE_PRESETS = { small: 72, mid: 120, large: 180 };
const fileItemSizePx = computed(() => {
  if (rs.value.fileItemSize === "custom") return rs.value.fileItemSizeCustom;
  return FILE_SIZE_PRESETS[rs.value.fileItemSize] ?? FILE_SIZE_PRESETS.mid;
});
// Mixed aspect ratios so the fluid preview reads as a media gallery.
const fluidPlaceholderRatios = ["1 / 1", "3 / 4", "4 / 3"];

// Choice and matrix
const displayOptions = computed(() => {
  const base = liveOptions.value.length
    ? liveOptions.value
    : [
        { id: "_p1", label: "Option 1" },
        { id: "_p2", label: "Option 2" },
      ];
  const showAll =
    rs.value.answerDisplay === "checkbox" && rs.value.showAllOptions !== false;
  if (showAll) return base;
  return base.slice(0, liveType.value === "multiple-checkbox" ? 2 : 1);
});
const liveColumns = computed(
  () =>
    props.formField?.components?.map((c) => ({
      id: c.id,
      label: c.label ?? c.fixedName ?? "",
    })) ?? [],
);

const elStyle = computed(() => ({
  left: `${props.element.x * props.scale}px`,
  top: `${props.element.y * props.scale}px`,
  width: `${props.element.w * props.scale}px`,
  height: `${props.element.h * props.scale}px`,
  transform: props.element.style?.rotate
    ? `rotate(${props.element.style.rotate}deg)`
    : undefined,
  transformOrigin: "center center",
}));

const s = computed(() => props.element.style ?? {});
const rs = computed(() =>
  resolveElementStyle(props.element, props.globalTypography),
);
const showLabel = computed(
  () => rs.value.showLabel !== false && !!liveLabel.value?.trim(),
);

const fieldWrapperStyle = computed(() => {
  const m = props.element._metrics;
  const pad = m ? m.padding : (rs.value.padding ?? 4);
  const isStacked = rs.value.labelLayout !== "inline";
  const gap =
    isStacked && rs.value.showLabel !== false
      ? (rs.value.labelSpacing ?? 4) * props.scale
      : 0;
  return {
    "--field-label-width": `${rs.value.labelWidth}%`,
    background: rs.value.backgroundColor || "transparent",
    padding: `${pad * props.scale}px`,
    gap: `${gap}px`,
  };
});

const textStyle = computed(() => {
  const isField = liveType.value === "field";
  const isInline = rs.value.labelLayout === "inline";
  const align = isField && isInline ? "left" : rs.value.align;
  const justifyMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };
  return {
    fontSize: `${rs.value.fontSize * props.scale}px`,
    color: rs.value.color,
    textAlign: align,
    justifyContent: justifyMap[align] || "flex-start",
    fontWeight: rs.value.fontWeight,
    fontStyle: rs.value.fontStyle,
    fontFamily: rs.value.labelFontFamily,
    lineHeight: rs.value.lineHeight ?? undefined,
  };
});

const lineStyle = computed(() => ({
  background: s.value.color ?? "var(--color-primary-text)",
  width: "100%",
  height: `${s.value.thickness ?? 2}px`,
  margin: "auto 0",
}));

const shapeStyle = computed(() => ({
  background: s.value.fill || "transparent",
  borderColor: s.value.stroke || "var(--color-primary-text)",
  borderWidth: s.value.strokeWidth != null ? `${s.value.strokeWidth}px` : "2px",
  borderStyle: "solid",
  borderRadius: s.value.borderRadius ? `${s.value.borderRadius}px` : undefined,
}));

const circleStyle = computed(() => ({
  ...shapeStyle.value,
  borderRadius: "50%",
}));

const imageStyle = computed(() => ({
  objectFit: s.value.objectFit || "contain",
  borderRadius: s.value.borderRadius ? `${s.value.borderRadius}px` : undefined,
}));

const labelTextStyle = computed(() => {
  const m = props.element._metrics;
  const inline = m ? m.isInline : rs.value.labelLayout === "inline";
  const vertAlign = m
    ? m.labelVerticalAlign
    : (rs.value.labelVerticalAlign ?? "start");

  const base = {
    fontSize: `${rs.value.fontSize * props.scale}px`,
    color: rs.value.color,
    fontWeight: rs.value.fontWeight,
    fontStyle: rs.value.fontStyle,
    fontFamily: rs.value.labelFontFamily,
    textAlign: inline ? "left" : rs.value.align,
    lineHeight: rs.value.lineHeight,
    overflowWrap: "break-word",
    wordBreak: "break-word",
  };

  if (m) {
    base.width = `${m.labelW * props.scale}px`;
    base.flexShrink = "0";

    if (inline) {
      // In inline mode, label follows vertical alignment within the element
      base.display = "flex";
      base.alignItems =
        vertAlign === "end"
          ? "flex-end"
          : vertAlign === "center"
            ? "center"
            : "flex-start";
      base.height = "100%";
    } else {
      // Stacked: exact text-driven height
      base.height = `${m.labelH * props.scale}px`;
    }
  }

  return base;
});

const answerTextStyle = computed(() => {
  return {
    fontSize: `${rs.value.answerFontSize * props.scale}px`,
    color: rs.value.answerColor,
    fontWeight: rs.value.answerFontWeight,
    fontStyle: rs.value.answerFontStyle,
    fontFamily: rs.value.answerFontFamily,
    textAlign: rs.value.answerAlign,
  };
});

const tagStyle = computed(() => ({
  background: rs.value.tagBackgroundColor,
  color: rs.value.tagTextColor,
  fontSize: `${rs.value.answerFontSize * props.scale}px`,
  fontFamily: rs.value.answerFontFamily,
  fontWeight: rs.value.answerFontWeight,
  fontStyle: rs.value.answerFontStyle,
}));

const answerLineStyle = computed(() => {
  const m = props.element._metrics;
  const base = {
    background: rs.value.backgroundColor || undefined,
  };

  if (m) {
    base.width = `${m.answerW * props.scale}px`;

    // Border belongs to the answer area only
    if (m.showBorder) {
      base.borderBottomColor = rs.value.lineColor;
      base.borderBottomWidth = `${m.borderThickness}px`;
      base.borderBottomStyle = "solid";
    }
  } else {
    base.flexGrow = 1;
    if (rs.value.showBorder !== false) {
      base.borderBottomColor = rs.value.lineColor;
      base.borderBottomWidth = `${rs.value.lineThickness}px`;
      base.borderBottomStyle = "solid";
    }
  }

  return base;
});

const repeaterTableStyle = computed(() => {
  const mmToPx = 3.78 * props.scale;
  return {
    "--rp-bc": rs.value.borderColor,
    "--rp-bw": `${rs.value.borderWidth * mmToPx}px`,
    "--rp-hc": rs.value.headerColor,
    "--rp-htc": rs.value.headerTextColor,
    "--rp-cell-color": rs.value.answerColor,
    "--rp-cell-size": `${rs.value.answerFontSize * props.scale}px`,
    "--rp-cell-font-family": rs.value.answerFontFamily,
    "--rp-header-size": `${rs.value.fontSize * props.scale}px`,
    "--rp-header-font-family": rs.value.labelFontFamily,
    "--rp-cell-padding": `${rs.value.cellPadding * mmToPx}px`,
    "--rp-cell-align": rs.value.answerAlign,
    "--rp-row-stripe": rs.value.rowStripeColor || "transparent",
  };
});

const matrixTableStyle = computed(() => {
  const mmToPx = 3.78 * props.scale;
  return {
    "--mx-bc": rs.value.borderColor,
    "--mx-bw": `${rs.value.borderWidth * mmToPx}px`,
    "--mx-hc": rs.value.headerColor,
    "--mx-htc": rs.value.headerTextColor,
    "--mx-cell-color": rs.value.answerColor,
    "--mx-cell-size": `${rs.value.answerFontSize * props.scale}px`,
    "--mx-cell-font-family": rs.value.answerFontFamily,
    "--mx-cell-padding": `${rs.value.cellPadding * mmToPx}px`,
    "--mx-cell-align": rs.value.answerAlign,
    "--mx-header-font-family": rs.value.labelFontFamily,
  };
});

const signatureAreaStyle = computed(() => {
  const m = props.element._metrics;
  const base = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    flexGrow: 1,
  };
  if (m) {
    base.width = `${m.answerW * props.scale}px`;
  }
  return base;
});

const signatureLineStyle = computed(() => {
  return {
    width: "100%",
    height: `${(rs.value.lineThickness || 0.5) * props.scale}px`,
    background: rs.value.lineColor || "var(--color-border-dark)",
  };
});

// Flip toolbar below the element when it would render off the top of the page
const toolbarBelow = computed(
  () => props.element.y * props.scale < TOOLBAR_H + 8,
);

let pointerMoved = false;

const onClick = (e) => {
  if (pointerMoved) {
    pointerMoved = false;
    return;
  }
  if (e.ctrlKey || e.metaKey) emit("toggle-select", props.element.id);
  else emit("select", props.element.id);
};

const onMoveStart = (e) => {
  pointerMoved = false;
  const startX = e.clientX;
  const startY = e.clientY;
  const onTrackMove = (ev) => {
    if (
      Math.abs(ev.clientX - startX) > 3 ||
      Math.abs(ev.clientY - startY) > 3
    ) {
      pointerMoved = true;
    }
  };
  const onTrackUp = () => {
    window.removeEventListener("mousemove", onTrackMove);
    window.removeEventListener("mouseup", onTrackUp);
  };
  window.addEventListener("mousemove", onTrackMove);
  window.addEventListener("mouseup", onTrackUp);
  emit("move-start", { event: e, elementId: props.element.id });
};

const onResizeStart = (e, handleId) => {
  emit("resize-start", { event: e, elementId: props.element.id, handleId });
};

const choiceMarker = (index = 0) => {
  const isRadio = liveType.value === "radio";
  const style = rs.value.markerStyle;
  const useRadio = style === "radio" || (!style && isRadio);
  if (index === 0) return useRadio ? "◉" : "☑";
  return useRadio ? "○" : "☐";
};
</script>

<style scoped>
.canvas-el {
  position: absolute;
  box-sizing: border-box;
  cursor: move;
  border: 1px solid transparent;
  user-select: none;
}

.canvas-el:hover {
  border-color: var(--color-primary);
}

.canvas-el--orphan {
  border-color: var(--color-warning-500);
  outline: 1px solid var(--color-warning-500);
  outline-offset: 0;
}

.el-orphan-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  background: var(--color-warning-500);
  color: var(--color-white);
  border-radius: var(--rounded-half);
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  pointer-events: none;
  line-height: 1;
}

.canvas-el.selected {
  border-color: var(--color-primary);
  outline: 1px solid var(--color-primary);
  outline-offset: 0;
}

.canvas-el__body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}

/* Contextual toolbar */

.el-toolbar {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px 6px;
  background: var(--color-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--rounded-lg);
  box-shadow: var(--box-shadow-lg);
  white-space: nowrap;
  z-index: 20;
  cursor: default;
}

.el-toolbar--below {
  bottom: auto;
  top: calc(100% + 6px);
}

.el-toolbar__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  background: none;
  border-radius: var(--rounded-md);
  cursor: pointer;
  color: var(--color-secondary-text);
  padding: 0;
  flex-shrink: 0;
  transition:
    background 0.1s,
    color 0.1s;
}

.el-toolbar__btn svg {
  width: 13px;
  height: 13px;
}

.el-toolbar__btn:hover {
  background: var(--background-color-grey-100);
  color: var(--color-primary-text);
}

.el-toolbar__btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

.el-toolbar__btn--danger {
  color: var(--color-error);
}

.el-toolbar__btn--danger:hover {
  background: var(--color-error-50);
  color: var(--color-error);
}

/* Content renderers */

.el-text {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  color: var(--color-primary-text);
  padding: 2px 4px;
  white-space: pre-wrap;
  word-break: break-word;
  box-sizing: border-box;
}

.el-recall-badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  border: 1px solid var(--color-primary);
  border-radius: var(--rounded);
  color: var(--color-primary);
  font-size: 0.75em;
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  white-space: nowrap;
}

.el-placeholder {
  border: 1px dashed color-mix(in srgb, var(--color-primary) 50%, transparent);
  background: color-mix(in srgb, var(--color-primary) 6%, transparent);
  border-radius: var(--rounded-sm);
  padding: 0 var(--spacing-1);
  align-items: flex-start;
  line-height: 1;
}

.el-placeholder--marker {
  padding: 0;
  align-items: center;
  justify-content: center;
}

/* Floating option label above per-option markers (e.g. checkboxes) */
.el-marker-label {
  position: absolute;
  bottom: calc(100% + var(--spacing-1));
  left: 0;
  max-width: 140px;
  padding: 0 var(--spacing-1);
  background: var(--color-primary);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  line-height: 1.4;
  border-radius: var(--rounded-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;
}

.el-image {
  width: 100%;
  height: 100%;
  display: block;
}

.el-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: var(--background-color-grey-50);
  color: var(--color-secondary-text);
}

.el-image-placeholder svg {
  width: 24px;
  height: 24px;
}

.el-line {
  width: 100%;
  height: 2px;
  background: var(--color-primary-text);
  margin: auto 0;
}

.el-rectangle {
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-primary-text);
  box-sizing: border-box;
}

.el-circle {
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-primary-text);
  border-radius: 50%;
  box-sizing: border-box;
}

/* Label + answer wrapper (stacked / inline) */
.el-field-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.el-field-wrapper--inline {
  flex-direction: row;
  align-items: stretch;
}

.el-field-label-text {
  font-size: 10px;
  font-weight: var(--font-weight-medium);
  color: var(--color-primary-text);
  flex-shrink: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}

.el-field-wrapper--inline .el-field-label-text {
  width: var(--field-label-width, 38%);
  flex-shrink: 1;
  min-width: 0;
}

.el-answer-line {
  box-sizing: border-box;
}

.el-field-wrapper .el-rating,
.el-field-wrapper .el-opinion-scale,
.el-field-wrapper .el-choice-list,
.el-field-wrapper .el-tag-list,
.el-field-wrapper .el-dropdown-preview,
.el-field-wrapper .el-file-upload-placeholder,
.el-field-wrapper .el-ranking-list,
.el-field-wrapper .el-answer-line {
  flex: 1;
  min-width: 0;
}

.el-rating {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  padding: 0;
}

.el-rating__star {
  line-height: 1;
}

.el-opinion-scale {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  padding: 0;
  width: 100%;
}

.el-opinion-scale .el-scale-box {
  flex: 0 0 auto;
}

.el-scale-box {
  border: 1px solid var(--color-border-light);
  border-radius: var(--rounded-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.el-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 0;
  width: 100%;
  align-content: flex-start;
}

.el-tag {
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border: none;
  border-radius: var(--rounded-pill);
  font-size: 10px;
  line-height: 1.5;
  white-space: nowrap;
  background: var(--background-color-grey-100);
  color: var(--color-gray-700);
}

.el-choice-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  width: 100%;
  font-size: 11px;
  color: var(--color-primary-text);
}

.el-choice-list--row {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px 8px;
}

.el-choice-list--2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 6px;
}

.el-choice-radio {
  flex-shrink: 0;
}

.el-terms-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
  height: 100%;
  padding: 2px 4px;
  box-sizing: border-box;
  overflow: hidden;
}

.el-dropdown-arrow {
  flex-shrink: 0;
  margin-left: 4px;
}

.el-file-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-content: flex-start;
}

/* Square: fixed-size square tiles */
.el-file-grid--square .el-file-tile {
  width: var(--file-item-size, 80px);
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
}

/* Masonry: media-gallery, heights match (item-size), widths follow each
   item's aspect ratio so portraits/landscapes read naturally */
.el-file-grid--masonry {
  align-items: flex-start;
}
.el-file-grid--masonry .el-file-tile {
  height: var(--file-item-size, 80px);
  flex-shrink: 0;
}

.el-file-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-color-grey-50);
  border: 1px solid var(--color-border-light);
  border-radius: var(--rounded);
  color: var(--color-secondary-text);
  box-sizing: border-box;
}

.el-file-tile svg {
  width: 40%;
  height: 40%;
}

/* Cards: horizontal, small icon + filename, truncated */
.el-file-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.el-file-card-h {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border: 1px solid var(--color-border-light);
  border-radius: var(--rounded);
  background: var(--background-color-grey-50);
  max-width: 100%;
  min-width: 0;
}

.el-file-icon {
  width: var(--file-item-size, 24px);
  height: var(--file-item-size, 24px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-border-light);
  border-radius: var(--rounded-sm);
  color: var(--color-secondary-text);
  flex-shrink: 0;
}

.el-file-icon svg {
  width: 60%;
  height: 60%;
}

.el-file-card-h .el-file-name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.el-file-name {
  font-size: inherit;
}

.el-file-bullets {
  margin: 0;
  padding-left: 16px;
  width: 100%;
}

.el-file-bullets li {
  list-style: disc;
}

.el-file-link {
  color: inherit;
  text-decoration: underline;
}

.el-ranking-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2px 4px;
  width: 100%;
  font-size: 11px;
  color: var(--color-primary-text);
}

.el-ranking-row {
  display: flex;
  align-items: center;
}

.el-ranking-num {
  flex-shrink: 0;
  width: var(--ranking-num-width, 14px);
}

.el-ranking-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-repeater-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2px 4px;
  gap: 3px;
  box-sizing: border-box;
}

.el-repeater-wrapper.el-field-wrapper--inline {
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;
}

.el-repeater-wrapper.el-field-wrapper--inline .el-field-label-text {
  width: 38%;
  padding-top: 2px;
}

.el-repeater-table {
  --rp-bc: var(--color-border-light);
  --rp-bw: 1px;
  --rp-hc: var(--background-color-grey-100);
  --rp-htc: var(--color-secondary-text);
  --rp-cell-color: var(--color-primary-text);
  --rp-cell-size: 8px;
  --rp-header-size: 8px;
  --rp-cell-padding: 4px;
  --rp-cell-align: left;
  --rp-row-stripe: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  border: var(--rp-bw) solid var(--rp-bc);
  border-radius: var(--rounded-sm);
  overflow: hidden;
  font-size: 9px;
  min-height: 0;
}

.el-repeater-row {
  flex: 1;
  display: flex;
  border-bottom: var(--rp-bw) solid var(--rp-bc);
}

.el-repeater-row--header {
  flex: none;
  background: var(--rp-hc);
}

.el-repeater-row:last-child {
  border-bottom: none;
}

.el-repeater-cell {
  flex: 1;
  border-right: var(--rp-bw) solid var(--rp-bc);
  padding: var(--rp-cell-padding);
  font-size: var(--rp-cell-size);
  font-family: var(--rp-cell-font-family);
  color: var(--rp-cell-color);
  text-align: var(--rp-cell-align);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-repeater-cell--header {
  font-weight: var(--font-weight-medium);
  font-size: var(--rp-header-size);
  font-family: var(--rp-header-font-family);
  color: var(--rp-htc);
}

.el-repeater-row:not(.el-repeater-row--header):nth-child(odd) {
  background: var(--rp-row-stripe);
}

.el-repeater-cell:last-child {
  border-right: none;
}

/* Matrix */

.el-matrix-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2px 4px;
  gap: 3px;
  box-sizing: border-box;
}

.el-matrix-wrapper.el-field-wrapper--inline {
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;
}

.el-matrix-wrapper.el-field-wrapper--inline .el-field-label-text {
  width: 38%;
  padding-top: 2px;
}

.el-matrix-label {
  flex-shrink: 0;
}

.el-matrix-table {
  --mx-bc: var(--color-border-light);
  --mx-bw: 1px;
  --mx-htc: var(--color-secondary-text);
  --mx-cell-color: var(--color-primary-text);
  --mx-cell-size: 7px;
  --mx-cell-padding: 3px;
  --mx-cell-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  border: var(--mx-bw) solid var(--mx-bc);
  border-radius: var(--rounded-sm);
  overflow: hidden;
  font-size: 8px;
  min-height: 0;
}

.el-matrix-row {
  flex: 1;
  display: flex;
  border-bottom: var(--mx-bw) solid var(--mx-bc);
  min-height: 0;
}

.el-matrix-row--header {
  flex: none;
  background: var(--mx-hc, var(--background-color-grey-100));
}

.el-matrix-row:last-child {
  border-bottom: none;
}

.el-matrix-cell {
  flex: 1;
  border-right: var(--mx-bw) solid var(--mx-bc);
  padding: var(--mx-cell-padding);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--mx-cell-size);
  font-family: var(--mx-cell-font-family);
  color: var(--mx-cell-color);
  text-align: var(--mx-cell-align);
}

.el-matrix-cell--row-label {
  flex: 0 0 25%;
  max-width: 25%;
}

.el-matrix-cell--header {
  font-weight: var(--font-weight-medium);
  font-family: var(--mx-header-font-family);
  color: var(--mx-htc);
}

.el-matrix-cell:last-child {
  border-right: none;
}

.el-matrix-summary {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  overflow: hidden;
}

.el-matrix-summary-row {
  display: flex;
  gap: 4px;
  line-height: 1.4;
}

.el-matrix-summary-label {
  font-weight: var(--font-weight-medium);
  flex-shrink: 0;
}

.el-signature-area {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}

.el-signature-line {
  box-sizing: border-box;
}

/* Resize handle */

.resize-handle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--color-white);
  border: 1.5px solid var(--color-primary);
  border-radius: var(--rounded-sm);
  z-index: 2;
}

.resize-handle--nw {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}
.resize-handle--ne {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}
.resize-handle--sw {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}
.resize-handle--se {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}
</style>
