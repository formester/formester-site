import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const { ACCENTS, WORKFLOW_STEPS, workflowStep } = await import('../constants/workflow-steps.js')
const { toSidebarCategories, workflowTemplateUseUrl, workflowTemplateUrl } = await import('../utils/getWorkflowTemplates.js')
const { buildWorkflowTemplateRoutes } = await import('../utils/getRoutes.js')

test('every workflow step type has a label, an icon and a known accent', () => {
  for (const [type, step] of Object.entries(WORKFLOW_STEPS)) {
    assert.ok(step.label, `${type} has no label`)
    assert.ok(step.icon, `${type} has no icon`)
    assert.ok(ACCENTS[step.accent], `${type} has an unknown accent ${step.accent}`)
  }
})

test('a step type the site does not know yet gets a plain fallback', () => {
  const step = workflowStep('brand_new_step')
  assert.equal(step.label, 'Step')
  assert.deepEqual(step.accent, ACCENTS.webhook)
})

test('workflowStep resolves the accent colours', () => {
  assert.deepEqual(workflowStep('send_email'), { label: 'Send email', icon: 'mail', accent: ACCENTS.email })
})

test('categories are reshaped for the template category sidebar', () => {
  const sidebar = toSidebarCategories([{ slug: 'approvals', name: 'Approvals', templatesCount: 3, position: 0 }])
  assert.deepEqual(sidebar, { purpose: [{ id: 'approvals', slug: 'approvals', name: 'Approvals', templateCount: 3 }] })
})

test('template and use links', () => {
  assert.equal(workflowTemplateUrl('expense-claim-approval'), '/workflow-templates/expense-claim-approval/')
  assert.equal(
    workflowTemplateUseUrl('https://app.formester.com', 'expense-claim-approval'),
    'https://app.formester.com/workflow_templates/expense-claim-approval/use'
  )
})

test('listing routes cover every page of 12, with the latest update as lastmod', () => {
  const templates = Array.from({ length: 25 }, (_, i) => ({ updatedAt: `2026-11-${String(i + 1).padStart(2, '0')}T00:00:00Z` }))
  const routes = buildWorkflowTemplateRoutes(templates)
  assert.deepEqual(
    routes.map((route) => route.url),
    ['/workflow-templates/', '/workflow-templates/page/2/', '/workflow-templates/page/3/']
  )
  assert.ok(routes.every((route) => route.lastmod === '2026-11-25T00:00:00Z'))
})

test('no templates still gives the index page', () => {
  assert.deepEqual(buildWorkflowTemplateRoutes([]).map((route) => route.url), ['/workflow-templates/'])
})

test('the disk page walker skips workflow-templates, which has its own route builder', async () => {
  const source = await readFile(new URL('../utils/getRoutes.js', import.meta.url), 'utf8')
  assert.match(source, /PAGE_SKIP_DIRS = new Set\(\[[^\]]*'workflow-templates'/)
})

test('the sidebar leaves out categories with no templates, whose pages do not exist', () => {
  const sidebar = toSidebarCategories([
    { slug: 'approvals', name: 'Approvals', templatesCount: 3 },
    { slug: 'sms', name: 'SMS', templatesCount: 0 },
  ])
  assert.deepEqual(sidebar.purpose.map((category) => category.slug), ['approvals'])
})
