<template>
  <div class="diagram" :class="{ 'diagram--fill': fill }">
    <!-- Read-only like the app canvas in view mode: drag to pan, scroll or use the buttons to zoom. -->
    <div
      ref="canvasRef"
      class="diagram__canvas"
      :class="{ 'diagram__canvas--dragging': dragging }"
      @pointerdown="startDrag"
      @pointermove="drag"
      @pointerup="endDrag"
      @pointercancel="endDrag"
      @wheel="zoomWithWheel"
    >
      <svg class="diagram__dots" aria-hidden="true">
        <pattern
          :id="dotsId"
          patternUnits="userSpaceOnUse"
          :x="dots.x"
          :y="dots.y"
          :width="dots.gap"
          :height="dots.gap"
        >
          <circle :cx="dots.radius" :cy="dots.radius" :r="dots.radius" />
        </pattern>
        <rect width="100%" height="100%" :fill="`url(#${dotsId})`" />
      </svg>
      <div
        class="diagram__stage"
        :style="{
          width: `${layout.width}px`,
          height: `${layout.height}px`,
          transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
          visibility: placed ? 'visible' : 'hidden',
        }"
      >
          <svg class="diagram__lines" :width="layout.width" :height="layout.height" aria-hidden="true">
            <template v-for="edge in layout.edges" :key="edge.id">
              <path class="diagram__line" :d="edge.path" />
              <!-- The app canvas's arrowhead, stopped short of the step's input dot. -->
              <path
                class="diagram__arrow"
                d="M -17 -5 L -8 0 L -17 5 Z"
                :transform="`translate(${edge.endX} ${edge.endY}) rotate(${edge.arrowAngle})`"
              />
            </template>
          </svg>

          <div
            v-for="step in layout.nodes"
            :key="step.id"
            class="diagram__card"
            :style="{
              left: `${step.x}px`,
              top: `${step.y}px`,
              height: `${step.height}px`,
              '--accent': look(step).accent.fg,
              '--accent-tint': look(step).accent.bg,
            }"
          >
            <span v-if="!isTrigger(step)" class="diagram__handle diagram__handle--in"></span>
            <div class="diagram__body">
              <span class="diagram__icon"><LucideIcon :name="look(step).icon" :size="16" /></span>
              <span class="diagram__text">
                <span class="diagram__label">{{ step.node.data.label }}</span>
                <span class="diagram__detail">{{ stepDetail(step.node, { formName }) }}</span>
              </span>
            </div>

            <div
              v-for="route in step.routes"
              :key="route.handle"
              class="diagram__route"
              :style="{ left: `${route.x}px`, width: `${route.width}px`, '--route': route.color }"
              :title="route.label"
            >
              <span class="diagram__route-name">{{ route.label }}</span>
              <span class="diagram__handle diagram__handle--out"></span>
            </div>
            <span v-if="!step.routes.length && hasOutput(step)" class="diagram__handle diagram__handle--out diagram__handle--main"></span>
          </div>
      </div>

      <div class="diagram__tools" @pointerdown.stop>
        <button
          type="button"
          class="diagram__tool"
          :title="fitButton.label"
          :aria-label="fitButton.label"
          :aria-pressed="fitted"
          @click="toggleFit"
        >
          <LucideIcon :name="fitButton.icon" :size="16" />
        </button>
        <span class="diagram__divider"></span>
        <button type="button" class="diagram__tool" title="Zoom out" aria-label="Zoom out" @click="zoomBy(1 / ZOOM_STEP)">
          <LucideIcon name="minus" :size="16" />
        </button>
        <span class="diagram__zoom">{{ zoomPercent }}</span>
        <button type="button" class="diagram__tool" title="Zoom in" aria-label="Zoom in" @click="zoomBy(ZOOM_STEP)">
          <LucideIcon name="plus" :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { WORKFLOW_STEPS, workflowStep } from '@/constants/workflow-steps'
import { ZOOM_STEP, fitViewport, startViewport, zoomAt } from '@/utils/diagramViewport'
import { layoutWorkflowGraph, stepDetail } from '@/utils/layoutWorkflowGraph'

const props = defineProps({
  // The template's `graph`, e.g. {nodes: [{id: "ntrigger", type: "form_submission", data: {label: "Form submitted", config: {}}}], edges: []}
  graph: { type: Object, required: true },
  // Shown under the trigger, e.g. "Expense claim form"
  formName: { type: String, default: '' },
  // Fills its container's height instead of capping at the viewport, as in the full-screen preview.
  fill: { type: Boolean, default: false },
})

const layout = computed(() => layoutWorkflowGraph(props.graph))
const look = (step) => workflowStep(step.node.type)
// A trigger starts the workflow, so like the app's it has no input dot.
const isTrigger = (step) => WORKFLOW_STEPS[step.node.type]?.accent === 'trigger'
// As in the app, every step but Stop workflow keeps an output dot, wired up or not.
const hasOutput = (step) => step.node.type !== 'terminate'

const canvasRef = useTemplateRef('canvasRef')
const viewport = ref({ x: 0, y: 0, zoom: 1 })
// Hidden until the canvas has a size to centre the trigger in, so it never flashes at the wrong spot.
const placed = ref(false)
const zoomPercent = computed(() => `${Math.round(viewport.value.zoom * 100)}%`)
// The app canvas's dotted ground (its Vue Flow Background: 20px apart, 1.4px dots). Gap and dot both scale with
// the zoom, so zoomed out the dots shrink below a pixel and fade, instead of crowding together.
const DOT_GAP = 20
const DOT_SIZE = 1.4
// An SVG pattern, as Vue Flow draws it: a CSS gradient can't paint a dot under a pixel, an SVG circle fades.
const dots = computed(() => {
  const { x, y, zoom } = viewport.value
  const gap = DOT_GAP * zoom
  return { x: x % gap, y: y % gap, gap, radius: (DOT_SIZE * zoom) / 2 }
})
// Unique per diagram, since the page and the full-screen pop-up each draw one.
const dotsId = `diagram-dots-${useId()}`

function canvasSize() {
  return { width: canvasRef.value.clientWidth, height: canvasRef.value.clientHeight }
}

function placeAtStart() {
  const trigger = layout.value.nodes.find(isTrigger) || layout.value.nodes[0]
  if (!trigger) return
  viewport.value = startViewport({ trigger, canvasWidth: canvasSize().width })
  placed.value = true
}

// Fit to screen shows the whole workflow; pressed again it goes back to the opening view.
const fitted = ref(false)
const FIT_BUTTONS = {
  fit: { label: 'Fit to screen', icon: 'maximize-2' },
  back: { label: 'Back to the start', icon: 'minimize-2' },
}
const fitButton = computed(() => (fitted.value ? FIT_BUTTONS.back : FIT_BUTTONS.fit))

function toggleFit() {
  if (fitted.value) {
    placeAtStart()
  } else {
    viewport.value = fitViewport(layout.value, canvasSize())
  }
  fitted.value = !fitted.value
}

// The buttons zoom around the canvas's middle, as the app's do.
function zoomBy(factor) {
  fitted.value = false
  const { width, height } = canvasSize()
  viewport.value = zoomAt(viewport.value, viewport.value.zoom * factor, { x: width / 2, y: height / 2 })
}

// The app canvas's wheel rate (Vue Flow's): one mouse-wheel notch zooms about 1.2×.
const WHEEL_ZOOM_RATE = 0.002

// Scrolling over the canvas zooms around the cursor, as in the app; a trackpad pinch sends the same.
function zoomWithWheel(event) {
  event.preventDefault()
  fitted.value = false
  const box = canvasRef.value.getBoundingClientRect()
  const point = { x: event.clientX - box.left, y: event.clientY - box.top }
  viewport.value = zoomAt(viewport.value, viewport.value.zoom * Math.exp(-event.deltaY * WHEEL_ZOOM_RATE), point)
}

const dragging = ref(false)
let lastPointer = null

function startDrag(event) {
  if (event.button !== 0) return
  dragging.value = true
  fitted.value = false
  lastPointer = { x: event.clientX, y: event.clientY }
  canvasRef.value.setPointerCapture(event.pointerId)
}

function drag(event) {
  if (!dragging.value) return
  viewport.value = {
    ...viewport.value,
    x: viewport.value.x + event.clientX - lastPointer.x,
    y: viewport.value.y + event.clientY - lastPointer.y,
  }
  lastPointer = { x: event.clientX, y: event.clientY }
}

function endDrag() {
  dragging.value = false
}

onMounted(() => {
  // Placed the first time the canvas has a width: right away, or when a hidden tab or pop-up first shows it.
  const observer = new ResizeObserver(([entry]) => {
    if (!placed.value && entry.contentRect.width > 0) placeAtStart()
  })
  observer.observe(canvasRef.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<style scoped>
.diagram {
  background: var(--bg-grey-50);
}

.diagram--fill {
  flex: 1;
  min-height: 0;
}

.diagram--fill .diagram__canvas {
  height: 100%;
}

.diagram__canvas {
  position: relative;
  overflow: hidden;
  height: min(560px, calc(100vh - 200px));
  cursor: grab;
  /* The canvas takes touch drags for panning, as the app's does. */
  touch-action: none;
  user-select: none;
}

.diagram__dots {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.diagram__dots circle {
  fill: var(--gray-300);
}

.diagram__canvas--dragging {
  cursor: grabbing;
}

.diagram__stage {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
}

/* The app canvas's zoom toolbar: a white pill at the bottom middle. */
.diagram__tools {
  position: absolute;
  bottom: var(--space-4);
  left: 50%;
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1);
  border: 1px solid var(--border-light);
  border-radius: var(--r-full);
  background: var(--bg-primary);
  box-shadow: var(--shadow-lg);
  transform: translateX(-50%);
  cursor: default;
}

.diagram__tool {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: var(--r-full);
  background: transparent;
  color: var(--fg-3);
  cursor: pointer;
}

.diagram__tool:hover {
  background: var(--gray-100);
  color: var(--fg-1);
}

.diagram__divider {
  width: 1px;
  height: 20px;
  margin: 0 var(--space-1);
  background: var(--border-light);
}

.diagram__zoom {
  min-width: 42px;
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  color: var(--fg-2);
  text-align: center;
}

.diagram__lines {
  position: absolute;
  inset: 0;
  overflow: visible;
}

.diagram__line {
  fill: none;
  stroke: var(--gray-300);
  stroke-width: 2;
}

.diagram__arrow {
  fill: var(--gray-300);
}

.diagram__card {
  position: absolute;
  box-sizing: border-box;
  width: 240px;
  border-radius: var(--r-lg);
  background: var(--bg-primary);
  /* Drawn as shadows, not borders, so chips and dots placed from the card's edge line up with the lines. */
  box-shadow: inset 3px 0 0 var(--accent), 0 0 0 1px var(--border-light), var(--shadow-sm);
}

.diagram__body {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  height: 68px;
  padding: 0 var(--space-3);
}

.diagram__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--r);
  background: var(--accent-tint);
  color: var(--accent);
}

.diagram__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.diagram__label,
.diagram__detail {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.diagram__label {
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
}

.diagram__detail {
  font-size: var(--fs-xs);
  color: var(--fg-3);
}

/* The app card's outcome chips: outlined in the outcome's colour, one handle dot under each. */
.diagram__route {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  height: 36px;
}

.diagram__route-name {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 22px;
  padding: 0 var(--space-2);
  border: 1px solid var(--route);
  border-radius: var(--r-full);
  background: var(--bg-primary);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: 20px;
  color: var(--route);
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* The app's read-only handle: a small white dot ringed in the line's colour, centred on the card's edge. */
.diagram__handle {
  position: absolute;
  left: 50%;
  box-sizing: border-box;
  width: 11px;
  height: 11px;
  border: 2px solid var(--route, var(--gray-300));
  border-radius: var(--r-full);
  background: var(--bg-primary);
  transform: translate(-50%, -50%);
}

.diagram__handle--in {
  top: 0;
}

.diagram__handle--out {
  top: 100%;
}

.diagram__handle--main {
  border-color: var(--color-primary);
}
</style>
