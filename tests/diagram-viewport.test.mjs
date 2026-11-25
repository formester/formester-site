import test from 'node:test'
import assert from 'node:assert/strict'

const { DEFAULT_ZOOM, MAX_ZOOM, MIN_ZOOM, fitViewport, startViewport, zoomAt } = await import(
  '../utils/diagramViewport.js'
)

const trigger = { x: 304, y: 24 }

test('starts zoomed to the default with the trigger centred across the canvas', () => {
  const viewport = startViewport({ trigger, canvasWidth: 600 })
  assert.equal(viewport.zoom, DEFAULT_ZOOM)
  // The trigger card's middle lands on the canvas's middle.
  assert.equal(viewport.x + (trigger.x + 120) * viewport.zoom, 300)
})

test('zooming keeps the point under the cursor still, within the app canvas limits', () => {
  const start = { x: 40, y: 10, zoom: 1 }
  const point = { x: 200, y: 150 }
  const zoomed = zoomAt(start, 1.5, point)
  const before = { x: (point.x - start.x) / start.zoom, y: (point.y - start.y) / start.zoom }
  const after = { x: (point.x - zoomed.x) / zoomed.zoom, y: (point.y - zoomed.y) / zoomed.zoom }
  assert.deepEqual(after, before)

  assert.equal(zoomAt(start, 99, point).zoom, MAX_ZOOM)
  assert.equal(zoomAt(start, 0.01, point).zoom, MIN_ZOOM)
})

test('fit shows the whole workflow centred, never zoomed past full size', () => {
  const viewport = fitViewport({ width: 1200, height: 800 }, { width: 600, height: 400 })
  assert.equal(viewport.zoom, 0.45)
  assert.equal(viewport.x + (1200 * viewport.zoom) / 2, 300)
  assert.equal(fitViewport({ width: 100, height: 100 }, { width: 600, height: 400 }).zoom, 1)
})
