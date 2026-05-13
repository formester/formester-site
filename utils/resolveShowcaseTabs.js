// Resolve raw CMS showcase tabs into renderable tab objects.
//
// Each input tab has a list of `templates` entries with:
//   - templateSlug: slug picked via the template-picker custom field
//   - displayName: optional override for the template's name
//   - displayDescription: optional override for the template's description
//   - displayImage: optional Strapi media override for the preview image
//   - displayImageAlt: optional alt text for the override image
//
// Resolves each slug against `allTemplates` (fetched from the app), applies
// CMS overrides, drops unresolvable slugs, excludes the current template,
// and caps at 6 templates per tab.
export default function resolveShowcaseTabs(
  rawTabs,
  allTemplates,
  currentSlug,
  opts = {},
) {
  const idPrefix = opts.idPrefix || 'tab'
  const sourceLabel = opts.sourceLabel || 'template-showcase'

  return (rawTabs || [])
    .map((tab, tabIdx) => {
      const unresolved = []

      const resolved = (tab.templates || [])
        .map((entry) => {
          const refSlug = entry.templateSlug
          if (!refSlug) return null

          const appTemplate = allTemplates.find((t) => t.slug === refSlug)
          if (!appTemplate) {
            unresolved.push(refSlug)
            return null
          }

          return {
            slug: appTemplate.slug,
            name: entry.displayName || appTemplate.name,
            description: entry.displayDescription || appTemplate.description,
            previewImageUrl:
              entry.displayImage?.url || appTemplate.previewImageUrl,
            previewImageAlt: entry.displayImageAlt || appTemplate.name,
          }
        })
        .filter(Boolean)
        .filter((t) => !currentSlug || t.slug !== currentSlug)
        .slice(0, 6)

      if (unresolved.length > 0) {
        console.warn(
          `[${sourceLabel}] Tab "${tab.tabName}" has unresolvable slugs: ${unresolved.join(', ')}`,
        )
      }

      return {
        id: `${idPrefix}-${tab.id ?? tabIdx}`,
        name: tab.tabName,
        slug: (tab.tabName || '').toLowerCase().replace(/\s+/g, '-'),
        templates: resolved,
      }
    })
    .filter((tab) => tab.templates.length > 0)
}
