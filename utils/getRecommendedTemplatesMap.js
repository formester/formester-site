import { recommendedTemplates } from '../constants/recommended-templates'

// Extract showcase tabs from a dynamic-zone `content` array.
// Returns the tabs array of the first macro-components.template-showcase
// component found in the zone, or [] if none.
function extractTabsFromContent(content) {
  const items = Array.isArray(content) ? content : []
  for (const item of items) {
    if (item?.__component === 'macro-components.template-showcase') {
      return item.tabs || []
    }
  }
  return []
}

export default function getRecommendedTemplatesMap() {
  const map = {}
  for (const item of recommendedTemplates) {
    const templateSlug = item.specificTemplate
    if (!templateSlug) continue

    const defaultSlugs = (item.recommendedTemplates || [])
      .map((rt) => (rt ? rt.text : null))
      .filter(Boolean)

    map[templateSlug] = {
      defaultRecommendedSlugs: [...new Set(defaultSlugs)],
      hideDefaultRecommended: Boolean(item.hideDefaultRecommended),
      customTabs: extractTabsFromContent(item.content),
      title: item.title || [],
      description: item.description || '',
    }
  }
  return map
}
