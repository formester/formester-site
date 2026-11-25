import getSiteMeta from '@/utils/getSiteMeta'
import { WORKFLOW_TEMPLATES_PATH, workflowCategoryUrl, workflowTemplateUrl } from '@/utils/getWorkflowTemplates'

const SITE_URL = 'https://formester.com'
const LIST_URL = `${SITE_URL}${WORKFLOW_TEMPLATES_PATH}/`
const TITLE = 'Free Workflow Templates for Forms | Formester'
const DESCRIPTION =
  'Ready-made workflow templates for approvals, reminders, AI summaries and more. Copy one into Formester and run it after every form response.'

/**
 * @param {Array<{slug: string, name: string}>} templates
 * @returns {Object} a schema.org ItemList of the templates' pages
 */
const itemListOf = (templates) => ({
  '@type': 'ItemList',
  itemListElement: templates.map((template, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${SITE_URL}${workflowTemplateUrl(template.slug)}`,
    name: template.name,
  })),
})

/**
 * @param {number} page e.g. 2
 * @returns {string} e.g. "https://formester.com/workflow-templates/page/2/"
 */
const listPageUrl = (page) => (page === 1 ? LIST_URL : `${LIST_URL}page/${page}/`)

/**
 * Head tags and JSON-LD for a workflow templates listing page: canonical, prev/next and an ItemList of its cards.
 * @param {{currentPage: number, totalPages: number, templates: Array<{slug: string, name: string, description: ?string}>}} page
 */
export const useWorkflowTemplateListSeo = ({ currentPage, totalPages, templates }) => {
  const pageUrl = listPageUrl(currentPage)
  const title = currentPage === 1 ? TITLE : `${TITLE} - Page ${currentPage}`
  const links = [{ rel: 'canonical', href: pageUrl }]
  if (currentPage > 1) links.push({ rel: 'prev', href: listPageUrl(currentPage - 1) })
  if (currentPage < totalPages) links.push({ rel: 'next', href: listPageUrl(currentPage + 1) })

  useHead({
    title,
    meta: getSiteMeta({
      type: 'website',
      url: pageUrl,
      title,
      description: DESCRIPTION,
      mainImage: `${SITE_URL}/formester-logo-meta-image.png`,
      mainImageAlt: 'Formester Logo',
    }),
    link: links,
  })

  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description: DESCRIPTION,
      url: pageUrl,
      mainEntity: itemListOf(templates),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Workflow Templates', item: LIST_URL },
      ],
    },
  ])
}

/**
 * Head tags and JSON-LD for a workflow template category page; the category's own meta and schema win when set.
 * @param {{category: {slug: string, name: string, description: ?string, metaTitle: ?string, metaDescription: ?string}, templates: Array<{slug: string, name: string}>}} page
 */
export const useWorkflowTemplateCategorySeo = ({ category, templates }) => {
  const pageUrl = `${SITE_URL}${workflowCategoryUrl(category.slug)}`
  const title = category.metaTitle || `${category.name} Workflow Templates | Formester`
  const description =
    category.metaDescription ||
    category.description ||
    `Free ${category.name.toLowerCase()} workflow templates for your forms. Copy one into Formester and run it after every response.`

  useHead({
    title,
    meta: getSiteMeta({
      type: 'website',
      url: pageUrl,
      title,
      description,
      mainImage: `${SITE_URL}/formester-logo-meta-image.png`,
      mainImageAlt: 'Formester Logo',
    }),
    link: [{ rel: 'canonical', href: pageUrl }],
  })

  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: pageUrl,
      mainEntity: itemListOf(templates),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Workflow Templates', item: LIST_URL },
        { '@type': 'ListItem', position: 3, name: category.name, item: pageUrl },
      ],
    },
  ])
}
