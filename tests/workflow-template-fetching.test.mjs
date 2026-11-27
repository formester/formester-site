import assert from 'node:assert/strict'
import test, { mock } from 'node:test'
import axios from 'axios'

const APP = 'https://app.example.com'
const CATEGORIES = [{ slug: 'approvals', name: 'Approvals', icon: 'user-check', templatesCount: 2, position: 0 }]

function detailedTemplate(slug, name) {
  return {
    slug,
    name,
    description: `${name} by email`,
    stepTypes: ['form_submission', 'approval'],
    includesForm: true,
    categories: ['approvals'],
    updatedAt: '2026-11-26T10:00:00.000Z',
    faqs: [{ question: 'Who approves?', answer: 'The manager' }],
    graph: { nodes: [{ id: 'ntrigger001', type: 'form_submission' }], edges: [] },
    relatedTemplates: [],
    formTemplate: null,
  }
}

/** Answers axios.get like the app would, and records every URL asked for. */
function stubApp(routes) {
  const requested = []
  mock.method(axios, 'get', async (url, config = {}) => {
    const query = new URLSearchParams(config.params || {}).toString()
    const fullUrl = query ? `${url}?${query}` : url
    requested.push(fullUrl)
    const answer = routes[fullUrl]
    if (!answer) throw Object.assign(new Error(`unexpected ${fullUrl}`), { response: { status: 404 } })
    return typeof answer === 'function' ? answer() : { data: answer }
  })
  return requested
}

// A fresh copy of the module per test, so one test's cached list doesn't leak into the next.
let copy = 0
const freshModule = () => import(`../utils/getWorkflowTemplates.js?copy=${copy++}`)

test.afterEach(() => mock.restoreAll())

test('every template page is built from the one list request, without a request per page', async () => {
  const requested = stubApp({
    [`${APP}/workflow_templates.json?with_details=true`]: [
      detailedTemplate('leave-request-approval', 'Leave request approval'),
      detailedTemplate('expense-reimbursement-approval', 'Expense reimbursement approval'),
    ],
    [`${APP}/workflow_template_categories.json`]: CATEGORIES,
  })
  const { default: getWorkflowTemplatesAndCategories, getWorkflowTemplate } = await freshModule()

  const leave = await getWorkflowTemplate('leave-request-approval', APP)
  const expense = await getWorkflowTemplate('expense-reimbursement-approval', APP)
  const { templates } = await getWorkflowTemplatesAndCategories(APP)

  assert.deepEqual(requested, [
    `${APP}/workflow_templates.json?with_details=true`,
    `${APP}/workflow_template_categories.json`,
  ])
  assert.equal(leave.faqs[0].question, 'Who approves?')
  assert.deepEqual(expense.categories, [{ slug: 'approvals', name: 'Approvals' }])
  assert.equal(templates[0].graph, undefined, 'listing pages keep only card fields, so their payload stays small')
})

test("a template the list has no page data for is fetched on its own, as before the app's with_details", async () => {
  const listOnly = detailedTemplate('leave-request-approval', 'Leave request approval')
  delete listOnly.graph
  const requested = stubApp({
    [`${APP}/workflow_templates.json?with_details=true`]: [listOnly],
    [`${APP}/workflow_template_categories.json`]: CATEGORIES,
    [`${APP}/workflow_templates/leave-request-approval.json`]: detailedTemplate('leave-request-approval', 'Leave request approval'),
  })
  const { getWorkflowTemplate } = await freshModule()

  const leave = await getWorkflowTemplate('leave-request-approval', APP)

  assert.equal(leave.graph.nodes.length, 1)
  assert.ok(requested.includes(`${APP}/workflow_templates/leave-request-approval.json`))
})

test('a rate-limited request waits as long as the app asks and tries again', async () => {
  let calls = 0
  stubApp({
    [`${APP}/workflow_template_categories.json`]: () => {
      calls += 1
      if (calls === 1) {
        throw Object.assign(new Error('Request failed with status code 429'), {
          response: { status: 429, headers: { 'retry-after': '0' } },
        })
      }
      return { data: CATEGORIES }
    },
  })
  const { default: fetchWithRetry } = await import('../utils/fetchWithRetry.js')

  const { data } = await fetchWithRetry(`${APP}/workflow_template_categories.json`)

  assert.deepEqual(data, CATEGORIES)
  assert.equal(calls, 2)
})

test('the build fails when a workflow template page was not written', async () => {
  const { verifyPrerenderedPages } = await import('../utils/verifyPrerenderedPages.js')
  const expected = ['/workflow-templates/leave-request-approval/', '/workflow-templates/ai-lead-qualification/']
  const prerenderedRoutes = [
    { route: '/workflow-templates/ai-lead-qualification/' },
    { route: '/workflow-templates/leave-request-approval/', error: Object.assign(new Error('[500]'), { statusCode: 500 }) },
  ]

  assert.throws(
    () => verifyPrerenderedPages({ prerenderedRoutes }, expected),
    /\/workflow-templates\/leave-request-approval\//,
  )
  assert.doesNotThrow(() => verifyPrerenderedPages({ prerenderedRoutes: [
    { route: '/workflow-templates/leave-request-approval' },
    { route: '/workflow-templates/ai-lead-qualification/' },
  ] }, expected))
})
