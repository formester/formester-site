import { workflowStep } from '../constants/workflow-steps.js'

export const CARD_WIDTH = 240
export const CARD_HEIGHT = 68
// The row of outcome chips a branching step adds to the bottom of its card.
export const ROUTES_HEIGHT = 36
const CROSS_SPACING = CARD_WIDTH + 40
const ROW_GAP = 64
const PADDING = 24
// How far a loop's line bends out to the right of the cards it joins.
const LOOP_BULGE = 56
// The app canvas's corner radius on a line's bends.
const CORNER_RADIUS = 18

// Outcome chips, as the app's node card lays them out: a left-aligned row, padded and evenly sized.
const CHIP_INSET = 12
const CHIP_GAP = 6
const CHIP_MAX_WIDTH = 112

const TRIGGER_TYPES = new Set(['form_submission', 'partial_submission', 'submission_updated'])

// The app canvas's accent colours (ACCENT_HEX in the app's node-types.js), by tone name.
const TONE_COLORS = {
  green: '#067647',
  rose: '#dc2626',
  blue: '#1570ef',
  amber: '#dc6803',
  pink: '#ba24d5',
  teal: '#107569',
  violet: '#6434d0',
  slate: '#697586',
}
// As the app colours an approval's outcomes: approve and reject fixed, the rest in turn.
const APPROVAL_TONES = { approved: 'green', rejected: 'rose' }
const EXTRA_APPROVAL_TONES = ['blue', 'amber', 'pink', 'teal', 'violet']
const HEX_COLOR = /^#[0-9a-f]{6}$/i

// Names and tones for the outcomes of steps whose list the site doesn't rebuild from config.
const KNOWN_HANDLES = {
  submitted: { label: 'Submitted', tone: 'green' },
  expired: { label: 'Expired', tone: 'rose' },
  timed_out: { label: 'Timed out', tone: 'rose' },
}

/**
 * Places a template's steps top to bottom, the way the app's Tidy up does: longest path from the trigger sets the
 * row, and a step centres over the steps it leads to. Edges that loop back to an earlier step bend round the side.
 * @param {{nodes: Array<{id: string, type: string, data: {label: string, config: Object}}>, edges: Array<{id: string, source: string, target: string, sourceHandle: ?string}>}} graph
 * @returns {{width: number, height: number, nodes: Array<{id: string, x: number, y: number, height: number, node: Object, routes: Array<{handle: string, label: string, color: string, x: number, width: number}>}>, edges: Array<{id: string, path: string, endX: number, endY: number, arrowAngle: number}>}}
 * @example layoutWorkflowGraph({nodes: [trigger, email], edges: [{source: trigger.id, target: email.id}]}).nodes
 *   // => [{id: "ntrigger", x: 24, y: 24, height: 68, node: trigger, routes: []}, {id: "nemail", x: 24, y: 156, ...}]
 */
export function layoutWorkflowGraph({ nodes, edges }) {
  const knownEdges = edges.filter((edge) => hasNode(nodes, edge.source) && hasNode(nodes, edge.target))
  const roots = nodes.filter((candidate) => TRIGGER_TYPES.has(candidate.type) || !knownEdges.some((edge) => edge.target === candidate.id))
  const loops = loopEdgeIds(nodes, knownEdges, roots)
  const forwardEdges = knownEdges.filter((edge) => !loops.has(edge.id))

  const routes = new Map(nodes.map((step) => [step.id, routesFor(step, knownEdges)]))
  const orderedEdges = inChipOrder(forwardEdges, routes)

  const depths = depthsFrom(roots, nodes, orderedEdges)
  const rows = columnsByNode(nodes, orderedEdges, roots, depths)

  const heights = new Map(nodes.map((step) => [step.id, CARD_HEIGHT + (routes.get(step.id).length ? ROUTES_HEIGHT : 0)]))
  const rowTops = rowTopsFor(depths, heights)

  const placed = new Map(
    nodes.map((step) => [
      step.id,
      {
        id: step.id,
        x: PADDING + rows.get(step.id) * CROSS_SPACING,
        y: rowTops.get(depths.get(step.id)),
        height: heights.get(step.id),
        node: step,
        routes: routes.get(step.id),
      },
    ])
  )
  const widest = Math.max(0, ...[...placed.values()].map((step) => step.x))
  const deepest = Math.max(0, ...[...placed.values()].map((step) => step.y + step.height))
  const hasLoops = loops.size > 0

  return {
    width: widest + CARD_WIDTH + PADDING + (hasLoops ? LOOP_BULGE : 0),
    height: deepest + PADDING,
    nodes: [...placed.values()],
    edges: knownEdges.map((edge) => drawEdge(edge, placed, loops.has(edge.id))),
  }
}

/**
 * The one line under a step's name on its card.
 * @param {{type: string, data: {label: string, config: Object}}} node
 * @param {{formName?: string}} context e.g. {formName: "Expense claim form"}
 * @returns {string} e.g. "Wait 2 days"
 */
export function stepDetail(node, { formName } = {}) {
  const config = node.data?.config || {}

  if (TRIGGER_TYPES.has(node.type) && formName) return formName
  if (node.type === 'send_email' && config.subject) return withoutFieldReferences(config.subject)
  if (node.type === 'delay' && config.duration) return `Wait ${config.duration} ${unitFor(config)}`
  return workflowStep(node.type).label
}

// Each row starts below the tallest card of the row above, so a card with outcome chips never overlaps the next.
function rowTopsFor(depths, heights) {
  const tallest = new Map()
  depths.forEach((depth, id) => tallest.set(depth, Math.max(tallest.get(depth) || 0, heights.get(id))))

  const tops = new Map()
  let top = PADDING
  for (let depth = 0; depth <= Math.max(0, ...tallest.keys()); depth++) {
    tops.set(depth, top)
    top += (tallest.get(depth) || 0) + ROW_GAP
  }
  return tops
}

/** A step's named outcomes as the app's card shows them, each with its chip's place on the card. */
function routesFor(step, edges) {
  const routes = outcomesOf(step, edges)
  const width = Math.min(CHIP_MAX_WIDTH, (CARD_WIDTH - 2 * CHIP_INSET - CHIP_GAP * (routes.length - 1)) / routes.length)
  return routes.map((route, index) => ({ ...route, x: CHIP_INSET + index * (width + CHIP_GAP), width }))
}

function outcomesOf(step, edges) {
  const config = step.data?.config || {}

  if (step.type === 'branch') {
    return [
      { handle: 'true', label: 'Yes', color: TONE_COLORS.green },
      { handle: 'false', label: 'No', color: TONE_COLORS.slate },
    ]
  }
  if (step.type === 'approval') {
    let extras = 0
    return (config.outcomes || []).map((outcome) => {
      // Counted even when a colour is picked, so picking one never recolours the rest (as in the app).
      const tone = APPROVAL_TONES[outcome.key] || EXTRA_APPROVAL_TONES[extras++ % EXTRA_APPROVAL_TONES.length]
      const color = HEX_COLOR.test(outcome.color || '') ? outcome.color : TONE_COLORS[tone]
      return { handle: outcome.key, label: outcome.value || 'Untitled outcome', color }
    })
  }

  const handles = [...new Set(edges.filter((edge) => edge.source === step.id).map(handleOf))].filter(
    (handle) => handle !== 'main'
  )
  return handles.map((handle) => {
    const known = KNOWN_HANDLES[handle] || { label: humanize(handle), tone: 'slate' }
    return { handle, label: known.label, color: TONE_COLORS[known.tone] }
  })
}

/**
 * Sorts edges so each step's outgoing lines follow its outcome chips left to right (Approve before Reject), whatever
 * order the template saved them in; lines from no chip keep their place after the chipped ones.
 * @param {Array<{source: string, sourceHandle: ?string}>} edges
 * @param {Map<string, Array<{handle: string}>>} routes e.g. Map {"napproval" => [{handle: "approved"}, {handle: "rejected"}]}
 * @returns {Array<Object>} the same edges, reordered
 */
function inChipOrder(edges, routes) {
  const chipIndex = (edge) => {
    const index = routes.get(edge.source).findIndex((route) => route.handle === handleOf(edge))
    return index === -1 ? Number.MAX_SAFE_INTEGER : index
  }
  // Stable, and every reader filters edges by source, so sorting on the chip alone orders each step's lines.
  return [...edges].sort((a, b) => chipIndex(a) - chipIndex(b))
}

function hasNode(nodes, id) {
  return nodes.some((candidate) => candidate.id === id)
}

// Field references ("@{uuid}") mean nothing on the site; a run of them becomes one ellipsis.
function withoutFieldReferences(text) {
  return text
    .replace(/@\{[^}]*\}/g, '…')
    .replace(/…(\s*…)+/g, '…')
    .trim()
}

function unitFor({ duration, unit = 'days' }) {
  return Number(duration) === 1 ? unit.replace(/s$/, '') : unit
}

/** Edges that point back to a step already on the path from the trigger, e.g. "wait for changes, then approve again". */
function loopEdgeIds(nodes, edges, roots) {
  const loops = new Set()
  const done = new Set()
  const onPath = new Set()

  function visit(id) {
    if (done.has(id)) return
    onPath.add(id)
    edges
      .filter((edge) => edge.source === id)
      .forEach((edge) => {
        if (onPath.has(edge.target)) loops.add(edge.id)
        else visit(edge.target)
      })
    onPath.delete(id)
    done.add(id)
  }

  roots.forEach((root) => visit(root.id))
  nodes.forEach((step) => visit(step.id))
  return loops
}

/** Longest distance from a root to each step, over edges with no loops. */
function depthsFrom(roots, nodes, edges) {
  const depths = new Map()
  const queue = roots.map((root) => ({ id: root.id, depth: 0 }))

  while (queue.length > 0) {
    const { id, depth } = queue.shift()
    if (depths.has(id) && depths.get(id) >= depth) continue
    depths.set(id, depth)
    edges.filter((edge) => edge.source === id).forEach((edge) => queue.push({ id: edge.target, depth: depth + 1 }))
  }

  nodes.forEach((step) => {
    if (!depths.has(step.id)) depths.set(step.id, 0)
  })
  return depths
}

/** Column per step: each leaf takes the next free column and a step centres over the steps it leads to. */
function columnsByNode(nodes, edges, roots, depths) {
  const columns = new Map()
  let nextColumn = 0

  function place(id) {
    if (columns.has(id)) return columns.get(id)
    // Claimed before recursing, so a step two branches lead into is placed once, under the first.
    columns.set(id, null)

    const childColumns = edges
      .filter((edge) => edge.source === id && !columns.has(edge.target))
      .map((edge) => place(edge.target))
      .filter((column) => column !== null)

    const column = childColumns.length ? (Math.min(...childColumns) + Math.max(...childColumns)) / 2 : nextColumn++
    columns.set(id, column)
    return column
  }

  roots.forEach((root) => place(root.id))
  nodes.forEach((step) => place(step.id))
  separateWithinRows(columns, depths)
  return columns
}

// Centring can land two steps of the same row on one column; this keeps their order and a column between them.
function separateWithinRows(columns, depths) {
  const byDepth = new Map()
  columns.forEach((_column, id) => {
    const depth = depths.get(id)
    if (!byDepth.has(depth)) byDepth.set(depth, [])
    byDepth.get(depth).push(id)
  })

  byDepth.forEach((ids) => {
    ids
      .sort((a, b) => columns.get(a) - columns.get(b))
      .reduce((floor, id) => {
        const column = Math.max(columns.get(id), floor)
        columns.set(id, column)
        return column + 1
      }, -Infinity)
  })
}

function drawEdge(edge, placed, isLoop) {
  const source = placed.get(edge.source)
  const target = placed.get(edge.target)

  if (isLoop) {
    const startX = source.x + CARD_WIDTH
    const startY = source.y + source.height / 2
    const endX = target.x + CARD_WIDTH
    const endY = target.y + target.height / 2
    const bendX = Math.max(startX, endX) + LOOP_BULGE
    return {
      id: edge.id,
      path: `M ${startX} ${startY} C ${bendX} ${startY}, ${bendX} ${endY}, ${endX} ${endY}`,
      endX,
      endY,
      arrowAngle: 180,
    }
  }

  const chip = source.routes.find((route) => route.handle === handleOf(edge))
  const startX = source.x + (chip ? chip.x + chip.width / 2 : CARD_WIDTH / 2)
  const startY = source.y + source.height
  const endX = target.x + CARD_WIDTH / 2
  const endY = target.y
  return { id: edge.id, path: stepPath(startX, startY, endX, endY), endX, endY, arrowAngle: 90 }
}

// Down, across and down again, with rounded corners: the app canvas's smooth-step line.
function stepPath(startX, startY, endX, endY) {
  if (startX === endX) return `M ${startX} ${startY} L ${endX} ${endY}`

  const midY = (startY + endY) / 2
  const radius = Math.min(CORNER_RADIUS, Math.abs(endX - startX) / 2, (endY - startY) / 2)
  const across = endX > startX ? 1 : -1
  return [
    `M ${startX} ${startY}`,
    `L ${startX} ${midY - radius}`,
    `Q ${startX} ${midY} ${startX + across * radius} ${midY}`,
    `L ${endX - across * radius} ${midY}`,
    `Q ${endX} ${midY} ${endX} ${midY + radius}`,
    `L ${endX} ${endY}`,
  ].join(' ')
}

function handleOf(edge) {
  return edge.sourceHandle || 'main'
}

function humanize(key) {
  const words = key.replace(/[_-]+/g, ' ').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}
