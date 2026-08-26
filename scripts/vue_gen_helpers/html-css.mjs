import postcss from 'postcss'

// A raw-html block goes through the real <RawHtml> component (v-html + its
// script-re-execution logic) when literal-splicing its markup into our own
// <template> would be unsafe: an embedded <script> tag (v-html never runs
// scripts; RawHtml.vue recreates them) or literal "{{" text (would be
// mis-parsed as a Vue interpolation in a spliced template).
export function needsRawHtmlComponent(markup) {
  return /<script[\s>]/i.test(markup) || markup.includes('{{')
}

// Raw-html markup almost always carries its own embedded <style> block
// (self-contained styling for that snippet). Splicing a literal <style> tag
// into <template> text would re-trigger the SFC block-boundary bug (Vue's
// SFC parser scans for <style>/<script> tags textually, not JS/HTML-aware) —
// so pull the CSS out and let the caller hoist it into a real <style scoped>
// block instead, where it actually gets scoped to the generated page.
export function extractStyles(markup) {
  const css = []
  const cleanMarkup = markup
    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, inner) => {
      css.push(inner.trim())
      return ''
    })
    .trim()
  return { cleanMarkup, css }
}

const VOID_ELEMENTS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
])

// Some raw-html markup in the source content is itself truncated/malformed
// (e.g. a <span> opened but never closed before the string just ends).
// Browsers and Vue's runtime template compiler silently paper over that
// (auto-closing), but literal-splicing it into our own SFC <template> risks
// producing genuinely invalid markup (and breaks stricter tools like
// Prettier). Do a lightweight tag-balance check and fall back to the
// <RawHtml> component (v-html tolerates anything) when it's not clean.
export function isWellFormedHtml(markup) {
  const withoutComments = markup.replace(/<!--[\s\S]*?-->/g, '')
  const tagRe = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*?(\/)?>/g
  const stack = []
  let match
  while ((match = tagRe.exec(withoutComments))) {
    const [, closingSlash, tagName, selfClosing] = match
    const lower = tagName.toLowerCase()
    if (closingSlash) {
      if (stack.length === 0 || stack[stack.length - 1] !== lower) return false
      stack.pop()
    } else if (!selfClosing && !VOID_ELEMENTS.has(lower)) {
      stack.push(lower)
    }
  }
  return stack.length === 0
}

// Browsers/v-html tolerate malformed CSS silently (bad rules just get
// dropped); PostCSS (what Vite uses to process <style scoped> at build
// time) throws a hard parse error instead. Source raw-html markup has been
// found with genuinely broken embedded CSS (a truncated @keyframes rule
// followed by an orphaned rule body) — validate before hoisting.
export function isWellFormedCss(css) {
  if (!css.trim()) return true
  try {
    postcss.parse(css)
    return true
  } catch {
    return false
  }
}

function ruleSignature(rule) {
  const decls = rule.nodes
    .filter((node) => node.type === 'decl')
    .map((decl) => `${decl.prop}:${decl.value}${decl.important ? ' !important' : ''}`)
    .sort()
    .join(';')
  return `${rule.selector}{${decls}}`
}

// The final <style scoped> block is a straight concatenation of every
// raw-html component's own <style> block on the page, in component order.
// That's enough to produce two real problems once combined:
// - @import/@charset must precede every other rule per the CSS spec; a
//   later component's @import ends up stranded mid-stylesheet and gets
//   dropped or warned on by Vite's PostCSS pass.
// - the same rule (e.g. a shared keyframes or utility class) can appear
//   verbatim in more than one snippet, since each raw-html block was
//   authored independently.
// Clean both up here, once, after all per-component CSS is joined.
export function processHarvestedCss(cssText) {
  if (!cssText.trim()) return cssText
  const root = postcss.parse(cssText)

  const seenRules = new Set()
  root.walkRules((rule) => {
    const signature = ruleSignature(rule)
    if (seenRules.has(signature)) {
      rule.remove()
    } else {
      seenRules.add(signature)
    }
  })

  const seenAtRules = new Set()
  root.walkAtRules((atRule) => {
    if (atRule.nodes !== undefined) return
    const signature = `@${atRule.name} ${atRule.params}`
    if (seenAtRules.has(signature)) {
      atRule.remove()
    } else {
      seenAtRules.add(signature)
    }
  })

  root.walkRules((rule) => {
    if (!rule.nodes.length) rule.remove()
  })
  root.walkAtRules((atRule) => {
    if (atRule.nodes && atRule.nodes.length === 0) atRule.remove()
  })

  const hoisted = []
  root.walkAtRules(/^(import|charset)$/, (atRule) => {
    hoisted.push(atRule)
    atRule.remove()
  })
  hoisted.reverse().forEach((atRule) => root.prepend(atRule))

  return root.toString()
}
