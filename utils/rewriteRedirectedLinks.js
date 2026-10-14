/**
 * rewriteRedirectedLinks
 *
 * Template and category content (aboutTemplate, FAQs, raw HTML blocks) is
 * authored in the app CMS and still links to pages that have since moved.
 * Those links would hop through a redirect, so we point them at the new URL
 * at build time. Add an entry here whenever a page with CMS links is renamed
 * (keep it in sync with the redirects in nuxt.config.js and Amplify).
 */
export const REDIRECTED_LINKS = {
  '/features/export-form-submission-pdf': '/features/form-to-pdf/',
  '/features/create-fillable-pdf-forms': '/features/document-generation/',
}

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Matches href="<optional formester origin><old path><optional slash>" followed by
// the end of the URL (quote, #fragment or ?query). Also handles JSON-escaped quotes.
const LINK_PATTERN = new RegExp(
  `(href=\\\\?["'])((?:https?://(?:www\\.)?formester\\.com)?)(${Object.keys(REDIRECTED_LINKS)
    .map(escapeRegex)
    .join('|')})/?(?=["'#?\\\\])`,
  'g',
)

export function rewriteLinksInHtml(html) {
  if (typeof html !== 'string' || !html.includes('href')) return html
  return html.replace(LINK_PATTERN, (_, attr, origin, oldPath) => `${attr}${origin}${REDIRECTED_LINKS[oldPath]}`)
}

/** Deeply rewrites every string in a plain JSON-like value. */
export function rewriteRedirectedLinks(value) {
  if (typeof value === 'string') return rewriteLinksInHtml(value)
  if (Array.isArray(value)) return value.map(rewriteRedirectedLinks)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, rewriteRedirectedLinks(v)]))
  }
  return value
}
