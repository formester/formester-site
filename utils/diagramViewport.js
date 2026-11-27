import { CARD_WIDTH } from './layoutWorkflowGraph.js'

// The app canvas's zoom range and its toolbar's step (Vue Flow's defaults), so the preview feels the same.
export const MIN_ZOOM = 0.2
export const MAX_ZOOM = 1.75
export const ZOOM_STEP = 1.2
// Close enough to read every card on the template page; the app opens at 0.9.
export const DEFAULT_ZOOM = 0.9
// Room above the trigger when the preview opens, so it reads as the start rather than sitting on the edge.
const TOP_GAP = 56
// Fit leaves this share of the canvas empty around the workflow, as the app's Fit to screen does.
const FIT_PADDING = 0.1

/**
 * The view a template page opens on: the default zoom, the trigger centred across the canvas, near the top.
 * @param {{trigger: {x: number, y: number}, canvasWidth: number}} canvas the trigger card's place in the layout
 * @returns {{x: number, y: number, zoom: number}} e.g. {x: -34.8, y: 34.4, zoom: 0.9}
 */
export function startViewport({ trigger, canvasWidth }) {
  const zoom = DEFAULT_ZOOM
  return {
    x: canvasWidth / 2 - (trigger.x + CARD_WIDTH / 2) * zoom,
    y: TOP_GAP - trigger.y * zoom,
    zoom,
  }
}

/**
 * Zooms to `zoom`, kept in the app's range, holding the canvas point under the cursor (or the canvas middle) still.
 * @param {{x: number, y: number, zoom: number}} viewport
 * @param {number} zoom e.g. 1.08
 * @param {{x: number, y: number}} point in canvas pixels, e.g. {x: 300, y: 200}
 * @returns {{x: number, y: number, zoom: number}}
 */
export function zoomAt(viewport, zoom, point) {
  const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom))
  const ratio = next / viewport.zoom
  return {
    x: point.x - (point.x - viewport.x) * ratio,
    y: point.y - (point.y - viewport.y) * ratio,
    zoom: next,
  }
}

/**
 * The whole workflow centred in the canvas, never zoomed in past full size.
 * @param {{width: number, height: number}} layout the laid-out workflow's size
 * @param {{width: number, height: number}} canvas
 * @returns {{x: number, y: number, zoom: number}}
 */
export function fitViewport(layout, canvas) {
  const room = 1 - FIT_PADDING
  const zoom = Math.max(MIN_ZOOM, Math.min(1, (canvas.width * room) / layout.width, (canvas.height * room) / layout.height))
  return {
    x: (canvas.width - layout.width * zoom) / 2,
    y: (canvas.height - layout.height * zoom) / 2,
    zoom,
  }
}
