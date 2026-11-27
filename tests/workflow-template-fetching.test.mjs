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
