import test from 'node:test'
import assert from 'node:assert/strict'

const { CARD_HEIGHT, layoutWorkflowGraph, stepDetail } = await import('../utils/layoutWorkflowGraph.js')

const node = (id, type = 'send_email', config = {}) => ({ id, type, data: { label: id, config } })
const edge = (source, target, sourceHandle = 'main') => ({ id: `${source}-${target}`, source, target, sourceHandle })
const byId = (layout) => Object.fromEntries(layout.nodes.map((placed) => [placed.id, placed]))

test('a straight chain runs top to bottom in one column', () => {
  const layout = layoutWorkflowGraph({
    nodes: [node('a', 'form_submission'), node('b'), node('c')],
    edges: [edge('a', 'b'), edge('b', 'c')],
  })
  const { a, b, c } = byId(layout)
  assert.equal(a.x, b.x)
  assert.equal(b.x, c.x)
  assert.ok(a.y < b.y && b.y < c.y)
  assert.deepEqual(layout.nodes.map((placed) => placed.routes), [[], [], []])
})

const routeNames = (placed) => placed.routes.map((route) => [route.label, route.color])

test('outcome chips sit on the card in the app\'s labels and colours', () => {
  const layout = layoutWorkflowGraph({
    nodes: [
      node('branch', 'branch'),
      node('approval', 'approval', {
        outcomes: [
          { key: 'approved', value: 'Approve' },
          { key: 'rejected', value: 'Reject' },
          { key: 'needs_info', value: 'Ask for details' },
          { key: 'escalate', value: 'Escalate', color: '#123abc' },
        ],
      }),
    ],
    edges: [],
  })
  const { branch, approval } = byId(layout)
  assert.deepEqual(routeNames(branch), [
    ['Yes', '#067647'],
    ['No', '#697586'],
  ])
  assert.deepEqual(routeNames(approval), [
    ['Approve', '#067647'],
    ['Reject', '#dc2626'],
    ['Ask for details', '#1570ef'],
    ['Escalate', '#123abc'],
  ])
  assert.ok(branch.height > CARD_HEIGHT)
})

test('a line leaves from under its own chip, with right-angle corners', () => {
  const layout = layoutWorkflowGraph({
    nodes: [node('branch', 'branch'), node('yes'), node('no')],
    edges: [edge('branch', 'yes', 'true'), edge('branch', 'no', 'false')],
  })
  const { branch } = byId(layout)
  const [yesChip, noChip] = branch.routes
  const startOf = (id) => layout.edges.find((drawn) => drawn.id === id).path.match(/^M (\S+) (\S+)/).slice(1).map(Number)
  assert.deepEqual(startOf('branch-yes'), [branch.x + yesChip.x + yesChip.width / 2, branch.y + branch.height])
  assert.deepEqual(startOf('branch-no'), [branch.x + noChip.x + noChip.width / 2, branch.y + branch.height])
  assert.doesNotMatch(layout.edges[0].path, / C /)
})

test('an approval puts its two outcomes side by side, centred under it, with their labels', () => {
  const layout = layoutWorkflowGraph({
    nodes: [node('trigger', 'form_submission'), node('approval', 'approval'), node('yes'), node('no')],
    edges: [edge('trigger', 'approval'), edge('approval', 'yes', 'approved'), edge('approval', 'no', 'rejected')],
  })
  const { approval, yes, no } = byId(layout)
  assert.equal(yes.y, no.y)
  assert.ok(yes.x < no.x)
  assert.equal(approval.x, (yes.x + no.x) / 2)
})

test('a step two branches lead back into sits below both of them', () => {
  const layout = layoutWorkflowGraph({
    nodes: [node('branch', 'branch'), node('short'), node('long1'), node('long2'), node('merge', 'merge')],
    edges: [
      edge('branch', 'short', 'true'),
      edge('branch', 'long1', 'false'),
      edge('long1', 'long2'),
      edge('short', 'merge'),
      edge('long2', 'merge'),
    ],
  })
  const { long2, merge } = byId(layout)
  assert.ok(merge.y > long2.y)
})

test('a loop back to an earlier step still lays out every step', () => {
  const layout = layoutWorkflowGraph({
    nodes: [node('a', 'form_submission'), node('b', 'approval'), node('c', 'wait_until')],
    edges: [edge('a', 'b'), edge('b', 'c', 'changes'), edge('c', 'b')],
  })
  assert.equal(layout.nodes.length, 3)
  assert.ok(layout.height > 0)
})

test('a step the app has no outcome list for names the outcomes its lines use', () => {
  const layout = layoutWorkflowGraph({
    nodes: [node('send', 'send_form'), node('done'), node('late')],
    edges: [edge('send', 'done', 'submitted'), edge('send', 'late', 'timed_out')],
  })
  assert.deepEqual(byId(layout).send.routes.map((route) => route.label), ['Submitted', 'Timed out'])
})

test('step details: email subject without field references, delays, triggers', () => {
  assert.equal(stepDetail(node('e', 'send_email', { subject: 'Application from @{a1} @{b2}' })), 'Application from …')
  assert.equal(stepDetail(node('d', 'delay', { duration: 2, unit: 'days' })), 'Wait 2 days')
  assert.equal(stepDetail(node('d', 'delay', { duration: 1, unit: 'days' })), 'Wait 1 day')
  assert.equal(stepDetail(node('t', 'form_submission'), { formName: 'Expense claim form' }), 'Expense claim form')
  assert.equal(stepDetail(node('x', 'webhook')), 'Webhook')
})
