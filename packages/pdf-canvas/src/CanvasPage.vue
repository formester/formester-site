<template>
  <div
    ref="pageRef"
    class="canvas-page"
    :class="{ 'canvas-page--active': active }"
    :style="pageStyle"
    @dragover.prevent="isDragOver = true"
    @dragleave="isDragOver = false"
    @drop.prevent="onDrop"
    @click.self="onPageClick"
  >
    <div v-if="isDragOver" class="drop-overlay" />

    <!-- Margin guide: always visible (In build mode)-->
    <div v-if="!disableSnap" class="margin-guide" :style="marginGuideStyle" />

    <!-- Snap lines: only while dragging -->
    <template v-if="drag">
      <div
        v-for="line in snapLines"
        :key="`${line.axis}-${line.pos}`"
        class="snap-line"
        :class="`snap-line--${line.axis}`"
        :style="
          line.axis === 'v'
            ? { left: `${line.pos * scale}px` }
            : { top: `${line.pos * scale}px` }
        "
      />
    </template>

    <CanvasElement
      v-for="el in elements"
      :key="el.id"
      :element="el"
      :form-field="formFieldsMap[el.content?.fieldId]"
      :form-fields-map="formFieldsMap"
      :scale="scale"
      :selected="selectedIds.includes(el.id)"
      :is-orphan="orphanedSet.has(el.id)"
      :is-multi-select="selectedIds.length > 1"
      :global-typography="globalTypography"
      @select="$emit('select', $event)"
      @toggle-select="$emit('toggle-select', $event)"
      @move-start="startMove"
      @resize-start="startResize"
      @clone="$emit('clone', $event)"
      @delete="$emit('delete', $event)"
    />
  </div>
</template>

<script setup>
import { ref, computed, toRef } from "vue";
import CanvasElement from "./CanvasElement.vue";
import { useCanvasDrag } from "@formester/pdf-core/composables/useCanvasDrag.js";
import {
  PDF_SCHEMA,
  createElement,
  resolveElementType,
} from "@formester/pdf-core/constants/pdf-builder-schema.js";

const props = defineProps({
  elements: { type: Array, default: () => [] },
  selectedIds: { type: Array, default: () => [] },
  zoom: { type: Number, default: 100 },
  pageWidth: { type: Number, default: 595 },
  pageHeight: { type: Number, default: 842 },
  backgroundColor: { type: String, default: "#ffffff" },
  backgroundImage: { type: Object, default: null },
  pdfBackdrop: { type: String, default: null },
  disableSnap: { type: Boolean, default: false },
  globalTypography: { type: Object, default: () => ({}) },
  formFieldsMap: { type: Object, default: () => ({}) },
  orphanedElementIds: { type: Array, default: () => [] },
  pageIndex: { type: Number, default: 0 },
  pageCount: { type: Number, default: 1 },
  active: { type: Boolean, default: false },
  margin: {
    type: Object,
    default: () => ({ top: 18, bottom: 18, left: 18, right: 18 }),
  },
});

const emit = defineEmits([
  "select",
  "toggle-select",
  "deselect",
  "activate",
  "add",
  "update",
  "clone",
  "delete",
  "transfer",
]);

const pageRef = ref(null);
const isDragOver = ref(false);

const onPageClick = () => {
  emit("activate");
  emit("deselect");
};

const scale = computed(() => props.zoom / 100);

const orphanedSet = computed(() => new Set(props.orphanedElementIds));

const pageStyle = computed(() => {
  const style = {
    width: `${props.pageWidth * scale.value}px`,
    height: `${props.pageHeight * scale.value}px`,
    backgroundColor: props.backgroundColor,
  };
  const bgUrl = props.pdfBackdrop || props.backgroundImage?.image;
  if (bgUrl) {
    style.backgroundImage = `url(${bgUrl})`;
    // PDF backdrop must fit page exactly without cropping
    style.backgroundSize = props.pdfBackdrop ? "100% 100%" : "cover";
    style.backgroundPosition = "center";
    style.backgroundRepeat = "no-repeat";
  }
  return style;
});

// CSS gap between pages in the builder
const PAGE_ROW_GAP_PX = 32;

const handleDragEnd = ({ id, x, y, w, h }) => {
  if (props.selectedIds.length > 1) return;
  const gapPts = PAGE_ROW_GAP_PX / scale.value;
  const underflow = y < 0 && props.pageIndex > 0;
  const overflow =
    y + h > props.pageHeight && props.pageIndex < props.pageCount - 1;
  if (underflow) {
    emit("transfer", {
      id,
      toPageIdx: props.pageIndex - 1,
      x,
      y: props.pageHeight + y + gapPts,
    });
  } else if (overflow) {
    emit("transfer", {
      id,
      toPageIdx: props.pageIndex + 1,
      x,
      y: y - props.pageHeight - gapPts,
    });
  }
};

const { drag, snapLines, marginGuideStyle, startMove, startResize } =
  useCanvasDrag({
    elements: toRef(props, "elements"),
    scale,
    margin: toRef(props, "margin"),
    pageWidth: props.pageWidth,
    pageHeight: props.pageHeight,
    gridSize: props.disableSnap ? 0 : 8,
    snapThreshold: 6,
    onUpdate: (patch) => emit("update", patch),
    onSelect: (id) => emit("select", id),
    onDragEnd: handleDragEnd,
    selectedIds: toRef(props, "selectedIds"),
  });

// Drop from Sidebar
const onDrop = (e) => {
  isDragOver.value = false;
  const raw = e.dataTransfer.getData("application/json");
  if (!raw) return;

  const item = JSON.parse(raw);
  const rect = pageRef.value.getBoundingClientRect();
  const xPt = Math.round((e.clientX - rect.left) / scale.value);
  const yPt = Math.round((e.clientY - rect.top) / scale.value);

  emit("add", makeElement(item, xPt, yPt));
};

// Element factory - use shared createElement for consistent initialization
const makeElement = (item, xPt, yPt) => {
  const type = resolveElementType(item);
  const dim =
    PDF_SCHEMA.elements[type]?.dimensions ??
    PDF_SCHEMA.elements.field.dimensions;
  const x = Math.max(
    0,
    Math.min(props.pageWidth - dim.w, Math.round(xPt - dim.w / 2)),
  );
  const y = Math.max(
    0,
    Math.min(props.pageHeight - dim.h, Math.round(yPt - dim.h / 2)),
  );
  return createElement(item, x, y);
};
</script>

<style scoped>
.canvas-page {
  position: relative;
  background: var(--color-white);
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--rounded-sm);
  flex-shrink: 0;
  outline: 2px solid transparent;
  outline-offset: 3px;
  transition: outline-color 0.15s;
}

.canvas-page--active {
  outline-color: var(--color-primary);
}

.margin-guide {
  position: absolute;
  border: 1px dashed color-mix(in srgb, var(--color-primary) 30%, transparent);
  pointer-events: none;
  z-index: 1;
}

.snap-line {
  position: absolute;
  pointer-events: none;
  z-index: 50;
  background: var(--color-primary);
  opacity: 0.55;
}

.snap-line--v {
  top: 0;
  bottom: 0;
  width: 1px;
}

.snap-line--h {
  left: 0;
  right: 0;
  height: 1px;
}

.drop-overlay {
  position: absolute;
  inset: 0;
  border: 2px dashed var(--color-primary);
  border-radius: var(--rounded-sm);
  background: color-mix(in srgb, var(--color-primary) 4%, transparent);
  pointer-events: none;
  z-index: 100;
}
</style>
