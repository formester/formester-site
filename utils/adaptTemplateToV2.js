/**
 * adaptTemplateToV2
 *
 * Transforms a raw template payload from the Rails app API into the v2 shape
 * consumed by <V2TemplateDetail>.
 *
 * ─── INPUT (from /templates/:slug.json or /templates.json with with_details=true) ───
 * {
 *   id:               number
 *   name:             string
 *   slug:             string
 *   description:      string | null
 *   previewImageUrl:  string
 *   surveyUrl:        string
 *   metaTitle:        string
 *   metaDescription:  string
 *   keywords:         string
 *   updatedAt:        ISO-8601 string
 *   category:         { id, name, slug, ... }          // primary category object
 *   categories:       Array<{ id, name, slug }>        // all categories (include_all_categories=true)
 *   relatedTemplates: Array<{                          // include_related_templates=true
 *     id, name, slug, description, previewImageUrl,
 *     categories: Array<{ id, name, slug }>
 *   }>
 *   aboutTemplate:    string (HTML) | null             // content for the Overview tab
 *   faqs:             Array<{ question, answer }>      // content for the FAQ tab
 *   tabs:             Array<{ id, name }>              // ordered tab definitions;
 *                       // reserved ids: "overview", "faq", "related"
 *                       // custom tabs use UUID ids
 *   rawHtmlBlocks:    Array<{ name, tabId, content }>  // raw HTML keyed by tab id
 * }
 *
 * ─── OUTPUT ───
 * All input fields except (aboutTemplate, faqs, rawHtmlBlocks, tabs, relatedTemplates)
 * plus:
 * {
 *   tabs: Array<{
 *     id:    string
 *     name:  string
 *     type:  'micro-components.raw-html'
 *           | 'macro-components.overview-panel'
 *           | 'macro-components.faqs'
 *           | 'macro-components.related-templates'
 *     props: object   // type-specific, see buildTabEntry below
 *   }>
 * }
 *
 * Tab order in the output matches the order of the `tabs` array in the input.
 * Tabs whose content resolves to nothing (e.g. no faqs, no relatedTemplates) are omitted.
 */
export function adaptTemplateToV2(template) {
  const tabs = buildTabs(template)
  const { aboutTemplate, faqs, rawHtmlBlocks, tabs: _rawTabs, relatedTemplates, ...rest } = template
  return { ...rest, tabs }
}

function rawHtmlFor(rawHtmlBlocks, tabId) {
  const blocks = rawHtmlBlocks?.filter((b) => b?.tabId === tabId) ?? []
  if (!blocks.length) return null
  return blocks.map((b) => b.content).join('')
}

function overviewHasContent(aboutTemplate) {
  return !!aboutTemplate?.replace(/(<([^>]+)>)/gi, '').trim()
}

/**
 * Builds a single tab entry for a given tab definition.
 * Returns null if the tab has no renderable content.
 */
function buildTabEntry(tabDef, { aboutTemplate, faqs, rawHtmlBlocks, updatedAt, categories, relatedTemplates }) {
  const { id, name } = tabDef

  // Closes over id, name, rawHtmlBlocks; only the varying parts are passed in.
  const reserved = (hasContent, type, props) => {
    const html = rawHtmlFor(rawHtmlBlocks, id)
    if (html) return { id, name, type: 'micro-components.raw-html', props: { markup: html } }
    if (hasContent) return { id, name, type, props }
    return null
  }

  if (id === 'overview')
    return reserved(overviewHasContent(aboutTemplate), 'macro-components.overview-panel', {
      aboutTemplate,
      updatedAt,
      categories,
    })
  if (id === 'faq') return reserved(faqs?.length, 'macro-components.faqs', { faqList: faqs, badge: '' })
  if (id === 'related')
    return reserved(relatedTemplates?.length, 'macro-components.related-templates', { relatedTemplates })

  // Custom UUID tab — always renders, raw HTML only (empty string if no block)
  const html = rawHtmlFor(rawHtmlBlocks, id)
  return { id, name, type: 'micro-components.raw-html', props: { markup: html ?? '' } }
}

function buildTabs(template) {
  const { aboutTemplate, faqs, rawHtmlBlocks, tabs: rawTabs, updatedAt, categories, relatedTemplates } = template

  if (!rawTabs?.length) return []

  return rawTabs
    .map((tabDef) =>
      buildTabEntry(tabDef, { aboutTemplate, faqs, rawHtmlBlocks, updatedAt, categories, relatedTemplates }),
    )
    .filter(Boolean)
}
