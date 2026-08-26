// Literal / escaping helpers shared by every page renderer.

export function jsLiteral(value) {
  // Vue's SFC block parser scans the raw file text for <script>/<style> tags
  // regardless of whether they're inside a JS/JSON string — any embedded
  // raw-html/rich-text content containing a literal <style> or <script> tag
  // would otherwise split the file into bogus extra blocks. Neutralize the
  // opening "<" of any such tag with a unicode escape (stays valid JSON).
  return JSON.stringify(value, null, 2).replace(/<(\/?(?:script|style)\b)/gi, '\\u003C$1')
}

export function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

export function isInlineScalar(value) {
  if (typeof value === 'number' || typeof value === 'boolean') return true
  if (typeof value !== 'string') return false
  return !value.includes('\n') && !value.includes('<') && value.length <= 160
}

export function camel(str) {
  return str.replace(/[-_]+(.)/g, (_, c) => c.toUpperCase())
}
