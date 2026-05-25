export function adaptTemplateToV2(template) {
  const tabs = buildTabs(template)
  const { aboutTemplate, faqs, rawHtmlBlocks, tabs: _rawTabs, ...rest } = template
  return { ...rest, tabs }
}

function rawHtmlFor(rawHtmlBlocks, tabId) {
  const blocks = rawHtmlBlocks?.filter(b => b.tabId === tabId) ?? []
  if (!blocks.length) return null
  return blocks.map(b => b.content).join('')
}

function overviewHasContent(aboutTemplate) {
  return !!aboutTemplate?.replace(/(<([^>]+)>)/gi, '').trim()
}

function buildTabs(template) {
  const { aboutTemplate, faqs, rawHtmlBlocks, tabs: rawTabs, updatedAt, categories } = template
  const tabs = []

  // Overview
  const overviewHtml = rawHtmlFor(rawHtmlBlocks, 'overview')
  if (overviewHtml) {
    tabs.push({ id: 'overview', name: 'Overview', type: 'micro-components.raw-html',
      props: { markup: overviewHtml } })
  } else if (overviewHasContent(aboutTemplate)) {
    tabs.push({ id: 'overview', name: 'Overview', type: 'macro-components.overview-panel',
      props: { aboutTemplate, updatedAt, categories } })
  }

  // FAQ
  const faqHtml = rawHtmlFor(rawHtmlBlocks, 'faq')
  if (faqHtml) {
    tabs.push({ id: 'faq', name: 'FAQ', type: 'micro-components.raw-html',
      props: { markup: faqHtml } })
  } else if (faqs?.length) {
    tabs.push({ id: 'faq', name: 'FAQ', type: 'macro-components.faqs',
      props: { faqList: faqs, badge: '' } })
  }

  // Custom UUID tabs
  const customDefs = rawTabs?.filter(t => t.id !== 'overview' && t.id !== 'faq') ?? []
  customDefs.forEach(tabDef => {
    tabs.push({ id: tabDef.id, name: tabDef.name, type: 'micro-components.raw-html',
      props: { markup: rawHtmlFor(rawHtmlBlocks, tabDef.id) ?? '' } })
  })

  return tabs
}
