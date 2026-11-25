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
  const sidebar = toSidebarCategories([
    { slug: 'approvals', name: 'Approvals', icon: 'user-check', templatesCount: 3, position: 0 },
  ])
  assert.deepEqual(sidebar, {
    purpose: [{ id: 'approvals', slug: 'approvals', name: 'Approvals', icon: 'user-check', templateCount: 3 }],
  })
})

test('template and use links', () => {
  assert.equal(workflowTemplateUrl('expense-claim-approval'), '/workflow-templates/expense-claim-approval/')
  assert.equal(
    workflowTemplateUseUrl('https://app.formester.com', 'expense-claim-approval'),
    'https://app.formester.com/workflow_templates/expense-claim-approval/use'
  )
})

test('listing routes cover every page of 12, with the latest update as lastmod', () => {
  const templates = Array.from({ length: 25 }, (_, i) => ({
    slug: `template-${i + 1}`,
    categories: [],
    updatedAt: `2026-11-${String(i + 1).padStart(2, '0')}T00:00:00Z`,
  }))
  const routes = buildWorkflowTemplateRoutes(templates).filter((route) => !/template-\d+/.test(route.url))
  assert.deepEqual(
    routes.map((route) => route.url),
    ['/workflow-templates/', '/workflow-templates/page/2/', '/workflow-templates/page/3/']
  )
  assert.ok(routes.every((route) => route.lastmod === '2026-11-25T00:00:00Z'))
})

test('every template has its own page, lastmod from its own update', () => {
  const routes = buildWorkflowTemplateRoutes([
    { slug: 'expense-claim-approval', categories: [], updatedAt: '2026-11-03T00:00:00Z' },
  ])
  assert.deepEqual(routes.at(-1), { url: '/workflow-templates/expense-claim-approval/', lastmod: '2026-11-03T00:00:00Z' })
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

const { workflowCategoryUrl } = await import('../utils/getWorkflowTemplates.js')

test('category pages are listed for categories with templates, lastmod from their newest template', () => {
  const templates = [
    { updatedAt: '2026-11-02T00:00:00Z', categories: [{ slug: 'approvals', name: 'Approvals' }] },
    { updatedAt: '2026-11-09T00:00:00Z', categories: [{ slug: 'email', name: 'Email' }] },
  ]
  const categories = [
    { slug: 'approvals', templatesCount: 1 },
    { slug: 'email', templatesCount: 1 },
    { slug: 'sms', templatesCount: 0 },
  ]
  const routes = buildWorkflowTemplateRoutes(templates, categories)
  assert.deepEqual(
    routes.filter((route) => route.url.includes('/categories/')),
    [
      { url: '/workflow-templates/categories/approvals/', lastmod: '2026-11-02T00:00:00Z' },
      { url: '/workflow-templates/categories/email/', lastmod: '2026-11-09T00:00:00Z' },
    ]
  )
})

test('category link', () => {
  assert.equal(workflowCategoryUrl('approvals'), '/workflow-templates/categories/approvals/')
})

const { categoryLook } = await import('../constants/workflow-category-looks.js')

test('a category without its own illustration gets the generic one', () => {
  assert.equal(categoryLook('approvals').kind, 'approvals')
  assert.equal(categoryLook('lead-generation').kind, 'generic')
})
