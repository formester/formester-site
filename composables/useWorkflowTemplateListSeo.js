import getSiteMeta from '@/utils/getSiteMeta'
import { WORKFLOW_TEMPLATES_PATH, workflowTemplateUrl } from '@/utils/getWorkflowTemplates'

const SITE_URL = 'https://formester.com'
const LIST_URL = `${SITE_URL}${WORKFLOW_TEMPLATES_PATH}/`
const TITLE = 'Free Workflow Templates for Forms | Formester'
const DESCRIPTION =
  'Ready-made workflow templates for approvals, reminders, AI summaries and more. Copy one into Formester and run it after every form response.'

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
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: templates.map((template, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${SITE_URL}${workflowTemplateUrl(template.slug)}`,
          name: template.name,
        })),
      },
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
