import { APP_URL } from '../constants/urls.js'
import fetchWithRetry from './fetchWithRetry.js'

export const WORKFLOW_TEMPLATES_PATH = '/workflow-templates'

let cachePromise = null

/**
 * @typedef {Object} WorkflowTemplateCategory
 * @property {string} slug e.g. "approvals"
 * @property {string} name e.g. "Approvals"
 * @property {?string} icon a Lucide icon name, e.g. "user-check"
 * @property {number} templatesCount e.g. 11
 */

/**
 * @typedef {Object} WorkflowTemplate
 * @property {string} slug e.g. "expense-claim-approval"
 * @property {string} name e.g. "Expense claim approval"
 * @property {?string} description e.g. "Send each claim to the manager and email the employee the decision."
 * @property {Array<string>} stepTypes e.g. ["form_submission", "approval", "send_email"]
 * @property {boolean} includesForm e.g. true
 * @property {Array<{slug: string, name: string}>} categories e.g. [{slug: "approvals", name: "Approvals"}]
 * @property {string} updatedAt e.g. "2026-11-24T10:22:50.920Z"
 */

async function fetchWorkflowTemplatesAndCategories() {
  const [{ data: templates }, { data: categories }] = await Promise.all([
    fetchWithRetry(`${APP_URL}/workflow_templates.json`),
    fetchWithRetry(`${APP_URL}/workflow_template_categories.json`),
  ])
  const sortedCategories = [...categories].sort(byPositionThenName)
  const categoriesBySlug = new Map(sortedCategories.map((category) => [category.slug, category]))

  return {
    templates: templates.map((template) => withCategories(template, categoriesBySlug)),
    categories: sortedCategories,
  }
}

// The API lists a template's categories by slug; cards and tags need their names too.
function withCategories(template, categoriesBySlug) {
  const categories = template.categories
    .map((slug) => categoriesBySlug.get(slug))
    .filter(Boolean)
    .map(({ slug, name }) => ({ slug, name }))
  return { ...template, categories }
}

function byPositionThenName(a, b) {
  return a.position - b.position || a.name.localeCompare(b.name)
}

/**
 * Every listed workflow template and category from the app, fetched once per build (every time in dev).
 * @returns {Promise<{templates: Array<WorkflowTemplate>, categories: Array<WorkflowTemplateCategory>}>}
 */
export default async function getWorkflowTemplatesAndCategories() {
  if (import.meta.dev) {
    return fetchWorkflowTemplatesAndCategories()
  }
  if (!cachePromise) {
    cachePromise = fetchWorkflowTemplatesAndCategories()
  }
  return cachePromise
}

/**
 * Workflow categories in the shape the template category sidebar groups by kind.
 * @param {Array<WorkflowTemplateCategory>} categories
 * @returns {{purpose: Array<{id: string, slug: string, name: string, icon: ?string, templateCount: number}>}} e.g. {purpose: [{id: "approvals", slug: "approvals", name: "Approvals", icon: "user-check", templateCount: 11}]}
 */
export function toSidebarCategories(categories) {
  // A category with no listed templates has no page to link to.
  const purpose = categories
    .filter(({ templatesCount }) => templatesCount > 0)
    .map(({ slug, name, icon, templatesCount }) => ({
      id: slug,
      slug,
      name,
      icon,
      templateCount: templatesCount,
    }))
  return { purpose }
}

/**
 * The app page that copies a workflow template into the visitor's account, after sign-in when needed.
 * @param {string} appUrl the runtime config's `appUrl`, e.g. "https://app.formester.com"
 * @param {string} slug e.g. "expense-claim-approval"
 * @returns {string} e.g. "https://app.formester.com/workflow_templates/expense-claim-approval/use"
 */
export function workflowTemplateUseUrl(appUrl, slug) {
  return `${appUrl}/workflow_templates/${slug}/use`
}

/**
 * @param {string} slug e.g. "expense-claim-approval"
 * @returns {string} e.g. "/workflow-templates/expense-claim-approval/"
 */
export function workflowTemplateUrl(slug) {
  return `${WORKFLOW_TEMPLATES_PATH}/${slug}/`
}

/**
 * @param {string} slug e.g. "approvals"
 * @returns {string} e.g. "/workflow-templates/categories/approvals/"
 */
export function workflowCategoryUrl(slug) {
  return `${WORKFLOW_TEMPLATES_PATH}/categories/${slug}/`
}
