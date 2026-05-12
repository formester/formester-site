// Resolve raw CMS showcase tabs into renderable tab objects.
//
// Each input tab has a list of `templates` entries, where each entry has:
//   - template: relation to template-listing (provides slug)
//   - displayName: optional override
//   - displayImage: optional override (Strapi media field)
//   - displayImageAlt: optional override
//
// We resolve the slug against the app's full template list (passed in
// `allTemplates`), apply CMS overrides, drop unresolvable slugs, exclude
// the current template, and cap at 6 per tab.
export default function resolveShowcaseTabs(rawTabs, allTemplates, currentSlug, opts = {}) {
  const idPrefix = opts.idPrefix || 'tab'
  const sourceLabel = opts.sourceLabel || 'template-showcase'

  return (rawTabs || []).map((tab, tabIdx) => {
    const entries = tab.templates || []
    const unresolved = []

    const resolved = entries
      .map(entry => {
        // Custom field stores the slug as a plain string in `templateSlug`.
        // Older entries may have used a relation under `template.slug`.
        const refSlug = entry.templateSlug
          || entry.template?.slug
          || entry.template?.data?.attributes?.slug
        if (!refSlug) return null
        const appTemplate = allTemplates.find(t => t.slug === refSlug)
        if (!appTemplate) {
          unresolved.push(refSlug)
          return null
        }
        const displayImageUrl = entry.displayImage?.url
          || entry.displayImage?.data?.attributes?.url
          || null
        return {
          ...appTemplate,
          name: entry.displayName || appTemplate.name,
          previewImageUrl: displayImageUrl || appTemplate.previewImageUrl,
          previewImageAlt: entry.displayImageAlt || appTemplate.name,
        }
      })
      .filter(Boolean)
      .filter(t => !currentSlug || t.slug !== currentSlug)
      .slice(0, 6)

    if (unresolved.length > 0) {
      console.warn(`[${sourceLabel}] Tab "${tab.tabName}" has unresolvable slugs: ${unresolved.join(', ')}`)
    }

    return {
      id: `${idPrefix}-${tab.id ?? tabIdx}`,
      name: tab.tabName,
      slug: (tab.tabName || '').toLowerCase().replace(/\s+/g, '-'),
      templates: resolved,
    }
  }).filter(tab => tab.templates.length > 0)
}
