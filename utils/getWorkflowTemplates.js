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

// The fields a listing card shows; page data stays out of the listing pages' payloads.
const CARD_FIELDS = ['slug', 'name', 'description', 'stepTypes', 'includesForm', 'categories', 'updatedAt']

// One list request with every template's page data, so a static build doesn't make a request per
// page and run into the app's rate limit.
async function fetchWorkflowTemplatesAndCategories(appUrl) {
  const [{ data: templates }, { data: categories }] = await Promise.all([
    fetchWithRetry(`${appUrl}/workflow_templates.json`, { params: { with_details: true } }),
    fetchWithRetry(`${appUrl}/workflow_template_categories.json`),
  ])
  const sortedCategories = [...categories].sort(byPositionThenName)
  const categoriesBySlug = new Map(sortedCategories.map((category) => [category.slug, category]))
  // An app without with_details sends cards only; those pages are then fetched one by one.
  const pagesBySlug = new Map(templates.filter((template) => template.graph).map((template) => [template.slug, template]))

  return {
    templates: templates.map((template) => withCategories(pick(template, CARD_FIELDS), categoriesBySlug)),
    categories: sortedCategories,
    pagesBySlug,
  }
}

function pick(object, keys) {
  return Object.fromEntries(keys.filter((key) => key in object).map((key) => [key, object[key]]))
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
 * @param {string} [appUrl] the runtime config's `appUrl` inside Nuxt, since `process.env` is empty in the browser; e.g. "http://localhost:5000"
 * @returns {Promise<{templates: Array<WorkflowTemplate>, categories: Array<WorkflowTemplateCategory>}>}
 */
export default async function getWorkflowTemplatesAndCategories(appUrl = APP_URL) {
  const { templates, categories } = await loadWorkflowTemplates(appUrl)
  return { templates, categories }
}

function loadWorkflowTemplates(appUrl) {
  if (import.meta.dev) {
    return fetchWorkflowTemplatesAndCategories(appUrl)
  }
  if (!cachePromise) {
    cachePromise = fetchWorkflowTemplatesAndCategories(appUrl)
  }
  return cachePromise
}

/**
 * One workflow template's page data, with its categories and related templates' categories named.
 * @param {string} slug e.g. "expense-claim-approval"
 * @param {string} [appUrl] the runtime config's `appUrl`, e.g. "http://localhost:5000"
 * @returns {Promise<Object>} the API's template, e.g. {slug, name, graph: {nodes, edges}, categories: [{slug: "approvals", name: "Approvals"}], relatedTemplates: [...], formTemplate: {slug, name, surveyUrl}}
 * @throws {AxiosError} with `response.status` 404 when no listed template has this slug
 */
export async function getWorkflowTemplate(slug, appUrl = APP_URL) {
  const { categories, pagesBySlug } = await loadWorkflowTemplates(appUrl)
  const template = pagesBySlug.get(slug) || (await fetchWorkflowTemplatePage(slug, appUrl))
  const categoriesBySlug = new Map(categories.map((category) => [category.slug, category]))

  return {
    ...withCategories(template, categoriesBySlug),
    relatedTemplates: template.relatedTemplates.map((related) => withCategories(related, categoriesBySlug)),
  }
}

async function fetchWorkflowTemplatePage(slug, appUrl) {
  const { data } = await fetchWithRetry(`${appUrl}/workflow_templates/${encodeURIComponent(slug)}.json`)
  return data
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
