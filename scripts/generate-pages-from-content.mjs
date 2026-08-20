// One-off generator: converts content/{home.json,pages/*.json,features/*.json,blog/*.json}
// into real static .vue page files (pages/index.vue, pages/<slug>.vue,
// pages/features/<slug>.vue, pages/blog/<slug>.vue), resolving each
// `__component` entry through constants/componentMapping.js into a real
// component tag instead of the generic PageComponents.vue runtime lookup.
//
// Run once: node scripts/generate-pages-from-content.mjs
// Does NOT delete content/, the dynamic [...slug].vue/[slug].vue catch-alls,
// or the adapter utils — that cleanup is a separate, manual follow-up step
// once the generated pages are verified.

import fs from 'node:fs'
import path from 'node:path'
import postcss from 'postcss'
import readingTime from '../utils/readingTime.js'
import getSiteMeta from '../utils/getSiteMeta.js'

const ROOT = path.resolve(import.meta.dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'content')
const PAGES_DIR = path.join(ROOT, 'pages')
const MAPPING_FILE = path.join(ROOT, 'constants/componentMapping.js')

// ---------- component mapping ----------

function loadComponentMapping() {
  const src = fs.readFileSync(MAPPING_FILE, 'utf8')
  const map = {}
  const re = /['"]([\w.-]+)['"]\s*:\s*\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)/g
  let m
  while ((m = re.exec(src))) {
    const [, key, importPath] = m
    map[key] = { importPath, localName: path.basename(importPath, '.vue') }
  }
  return map
}

// ---------- literal / escaping helpers ----------

function jsLiteral(value) {
  // Vue's SFC block parser scans the raw file text for <script>/<style> tags
  // regardless of whether they're inside a JS/JSON string — any embedded
  // raw-html/rich-text content containing a literal <style> or <script> tag
  // would otherwise split the file into bogus extra blocks. Neutralize the
  // opening "<" of any such tag with a unicode escape (stays valid JSON).
  return JSON.stringify(value, null, 2).replace(/<(\/?(?:script|style)\b)/gi, '\\u003C$1')
}

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function isInlineScalar(value) {
  if (typeof value === 'number' || typeof value === 'boolean') return true
  if (typeof value !== 'string') return false
  return !value.includes('\n') && !value.includes('<') && value.length <= 160
}

function camel(str) {
  return str.replace(/[-_]+(.)/g, (_, c) => c.toUpperCase())
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

// ---------- generic (page/feature/home) rendering ----------

// A raw-html block goes through the real <RawHtml> component (v-html + its
// script-re-execution logic) when literal-splicing its markup into our own
// <template> would be unsafe: an embedded <script> tag (v-html never runs
// scripts; RawHtml.vue recreates them) or literal "{{" text (would be
// mis-parsed as a Vue interpolation in a spliced template).
function needsRawHtmlComponent(markup) {
  return /<script[\s>]/i.test(markup) || markup.includes('{{')
}

// Raw-html markup almost always carries its own embedded <style> block
// (self-contained styling for that snippet). Splicing a literal <style> tag
// into <template> text would re-trigger the SFC block-boundary bug (Vue's
// SFC parser scans for <style>/<script> tags textually, not JS/HTML-aware) —
// so pull the CSS out and let the caller hoist it into a real <style scoped>
// block instead, where it actually gets scoped to the generated page.
function extractStyles(markup) {
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
function isWellFormedHtml(markup) {
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
function isWellFormedCss(css) {
  if (!css.trim()) return true
  try {
    postcss.parse(css)
    return true
  } catch {
    return false
  }
}

function renderComponentBlock(component, index, mapping, importsUsed, warnings, harvestedCss) {
  const key = component.__component

  if (key === 'micro-components.raw-html' && !needsRawHtmlComponent(component.markup || '')) {
    const { cleanMarkup, css } = extractStyles(component.markup || '')
    if (isWellFormedHtml(cleanMarkup) && css.every(isWellFormedCss)) {
      harvestedCss.push(...css)
      const sectionClass = component.useContainer ? 'page-component-item container' : 'page-component-item'
      const tag = [
        `    <section class="${sectionClass}">`,
        `      <div class="raw-html-content">`,
        cleanMarkup,
        `      </div>`,
        `    </section>`,
      ].join('\n')
      return { tag, constLines: [] }
    }
    warnings.push(`malformed raw-html markup at index ${index}, falling back to <RawHtml> component`)
  }

  const info = mapping[key]
  if (!info) {
    warnings.push(`unmapped component "${key}" at index ${index}`)
    return { tag: `    <!-- unmapped component: ${key} (index ${index}) -->`, constLines: [] }
  }
  importsUsed.set(info.localName, info.importPath)

  const attrLines = []
  const constLines = []
  for (const [propKey, value] of Object.entries(component)) {
    if (propKey === '__component' || propKey === 'id') continue
    if (value === null || value === undefined) continue

    if (isInlineScalar(value)) {
      if (typeof value === 'boolean') {
        attrLines.push(value ? `      ${propKey}` : `      :${propKey}="false"`)
      } else if (typeof value === 'number') {
        attrLines.push(`      :${propKey}="${value}"`)
      } else {
        attrLines.push(`      ${propKey}="${escapeAttr(value)}"`)
      }
    } else {
      const constName = `c${index}_${camel(propKey)}`
      constLines.push(`const ${constName} = ${jsLiteral(value)}`)
      attrLines.push(`      :${propKey}="${constName}"`)
    }
  }
  attrLines.push('      class="page-component-item"')

  const tag = [`    <${info.localName}`, ...attrLines, `    />`].join('\n')
  return { tag, constLines }
}

function buildHeadJsonldScript(head, jsonld) {
  const lines = []
  if (head && Object.keys(head).length) {
    lines.push(`useHead(${jsLiteral(head)})`)
  }
  if (Array.isArray(jsonld) && jsonld.length) {
    lines.push(`useJsonld(${jsLiteral(jsonld)})`)
  }
  return lines
}

function buildGenericPage(data, mapping, warnings) {
  const components = data.components || []
  const importsMap = new Map()
  const constLines = []
  const tagLines = []
  const harvestedCss = []

  components.forEach((component, index) => {
    const { tag, constLines: cl } = renderComponentBlock(component, index, mapping, importsMap, warnings, harvestedCss)
    tagLines.push(tag)
    constLines.push(...cl)
  })

  const importLines = [...importsMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([localName, importPath]) => `import ${localName} from '${importPath}'`)

  const headJsonldLines = buildHeadJsonldScript(data.head, data.jsonld)

  const scriptParts = [...importLines]
  if (constLines.length) scriptParts.push('', ...constLines)
  if (headJsonldLines.length) scriptParts.push('', ...headJsonldLines)

  const templateBody = tagLines.length ? tagLines.join('\n\n') : '    <p>No components to display</p>'

  const styleBlock = harvestedCss.length ? `\n\n<style scoped>\n${harvestedCss.join('\n\n')}\n</style>\n` : ''

  return `<template>\n  <div>\n${templateBody}\n  </div>\n</template>\n\n<script setup>\n${scriptParts.join('\n')}\n</script>\n${styleBlock}`
}

// ---------- blog rendering ----------

function stableHash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0
  }
  return h
}

function pickRelatedSlugs(slug, allSlugsSorted) {
  const others = allSlugsSorted.filter((s) => s !== slug)
  if (others.length <= 4) return others
  const start = stableHash(slug) % others.length
  return [0, 1, 2, 3].map((i) => others[(start + i) % others.length])
}

function buildRelatedArticle(entry) {
  const cover = entry.coverImg
  return {
    slug: entry.slug,
    title: entry.title,
    coverImg: cover?.url || null,
    coverImgAlt: entry.coverImgAlt,
    coverImgWidth: cover?.width || 1200,
    coverImgHeight: cover?.height || 630,
    publishedAt: entry.publishedAt,
    readingStats: readingTime(entry.body || ''),
  }
}

function buildBlogPage(data, lookupBySlug, allSlugsSorted) {
  const cover = data.coverImg
  const coverUrl = cover?.url || null
  const readingStats = readingTime(data.body || '')

  const blogData = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords,
    author: data.author,
    authorProfile: data.authorProfile,
    coverImgAlt: data.coverImgAlt,
    featured: Boolean(data.featured),
    body: data.body,
    coverImg: coverUrl,
    coverImgWidth: cover?.width || 1200,
    coverImgHeight: cover?.height || 630,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    readingStats,
  }

  const metaArray = getSiteMeta({
    type: 'article',
    url: `https://formester.com/blog/${data.slug}/`,
    title: data.metaTitle,
    description: data.metaDescription,
    mainImage: coverUrl || 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: data.coverImgAlt || 'Formester Logo',
    keywords: data.keywords,
  })

  const headLiteral = {
    title: data.metaTitle,
    meta: [
      ...metaArray,
      { property: 'article:published_time', content: data.publishedAt },
      { property: 'article:modified_time', content: data.updatedAt },
      { name: 'twitter:label1', content: 'Written by' },
      { name: 'twitter:data1', content: data.author },
      { name: 'author', property: 'article:author', content: data.author },
      { name: 'publisher', property: 'article:publisher', content: 'Formester' },
      { name: 'publish_date', property: 'og:publish_date', content: data.publishedAt },
    ],
    link: [{ rel: 'canonical', href: `https://formester.com/blog/${data.slug}/` }],
  }

  const jsonldLiteral = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://formester.com/blog/${data.slug}/` },
      headline: data.title,
      description: data.description,
      image: coverUrl ? [coverUrl] : ['https://formester.com/formester-logo-meta-image.png'],
      author: { '@type': 'Person', name: data.author, url: data.authorProfile },
      publisher: {
        '@type': 'Organization',
        name: 'Formester',
        logo: { '@type': 'ImageObject', url: 'https://formester.com/logo.png' },
      },
      datePublished: data.publishedAt,
    },
    ...(data.jsonld || []),
  ]

  const relatedSlugs = pickRelatedSlugs(data.slug, allSlugsSorted)
  const relatedArticles = relatedSlugs.map((s) => buildRelatedArticle(lookupBySlug.get(s)))

  const blogPostViewData = {
    title: blogData.title,
    body: blogData.body,
    author: blogData.author,
    authorProfile: blogData.authorProfile,
    coverImgUrl: null,
    coverImgAlt: blogData.coverImgAlt,
    publishedAt: blogData.publishedAt,
    readingStats: blogData.readingStats,
  }

  const templateLines = [
    '<template>',
    '  <div>',
    '    <div class="read-progress" aria-hidden="true">',
    '      <div class="read-progress__fill" :style="{ transform: `scaleX(${readProgress})` }"></div>',
    '    </div>',
    '',
    '    <div class="mb-3rem">',
    '      <BlogPostView :blog-data="blogPostViewData">',
    '        <template #actions>',
    '          <div class="social__links">',
    '            <a',
    '              :href="`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${blogData.title} by @_Formester_ `"',
    "              @click=\"googleAnalytics('twitter')\"",
    '              class="social-icons"',
    '              target="_blank"',
    '            >',
    '              <IconXSocial />',
    '            </a>',
    '            <a',
    '              :href="`https://www.facebook.com/sharer.php?u=${encodedUrl}`"',
    "              @click=\"googleAnalytics('facebook')\"",
    '              class="social-icons"',
    '              target="_blank"',
    '            >',
    '              <IconFacebookSocial />',
    '            </a>',
    '            <a',
    '              :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`"',
    "              @click=\"googleAnalytics('linkedin')\"",
    '              class="social-icons"',
    '              target="_blank"',
    '            >',
    '              <IconLinkedinSocial />',
    '            </a>',
    '            <span class="social-icons" @click="copyToClipboard">',
    '              <IconLinkChain />',
    '            </span>',
    '          </div>',
    '        </template>',
    '      </BlogPostView>',
    '      <notifications position="bottom right" class="my-notification" />',
    '',
    '      <div v-if="relatedArticles.length" class="container related-container">',
    '        <div class="related-section">',
    '          <div class="section-label">',
    '            <h2>Related Blogs</h2>',
    '            <span class="rule"></span>',
    '          </div>',
    '          <div class="related-grid">',
    '            <RelatedArticleCard',
    '              v-for="relatedArticle in relatedArticles"',
    '              :key="relatedArticle.slug"',
    '              :article="relatedArticle"',
    '            />',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',
    '    <CallToActionSection />',
    '  </div>',
    '</template>',
  ].join('\n')

  const scriptLines = [
    "import IconXSocial from '@/components/icons/IconXSocial.vue'",
    "import IconFacebookSocial from '@/components/icons/IconFacebookSocial.vue'",
    "import IconLinkedinSocial from '@/components/icons/IconLinkedinSocial.vue'",
    "import IconLinkChain from '@/components/icons/IconLinkChain.vue'",
    '',
    'const config = useRuntimeConfig()',
    'const route = useRoute()',
    'const { $notify } = useNuxtApp()',
    '',
    `const blogData = ${jsLiteral(blogData)}`,
    '',
    `const relatedArticles = ${jsLiteral(relatedArticles)}`,
    '',
    `const blogPostViewData = ${jsLiteral(blogPostViewData)}`,
    '',
    'const readProgress = ref(0)',
    'const onScroll = () => {',
    '  const doc = document.documentElement',
    '  const total = doc.scrollHeight - window.innerHeight',
    '  readProgress.value = total > 0 ? Math.min(1, window.scrollY / total) : 0',
    '}',
    '',
    'onMounted(() => {',
    "  window.addEventListener('scroll', onScroll, { passive: true })",
    '  onScroll()',
    '})',
    '',
    'onBeforeUnmount(() => {',
    "  window.removeEventListener('scroll', onScroll)",
    '})',
    '',
    'const copyToClipboard = () => {',
    '  if (process.client) {',
    '    navigator.clipboard.writeText(window.location.href).then(() => {',
    "      \$notify({ type: 'success', text: 'Link copied to clipboard' })",
    '    })',
    '  }',
    "  googleAnalytics('custom_link')",
    '}',
    '',
    'const googleAnalytics = (platform) => {',
    "  if (typeof gtag !== 'undefined') {",
    "    gtag('event', 'share', {",
    '      method: platform,',
    "      content_type: 'blog',",
    '      item_id: blogData.title,',
    '    })',
    '  }',
    '}',
    '',
    'const encodedUrl = computed(() => encodeURIComponent(config.public.baseUrl + route.fullPath))',
    '',
    `useHead(${jsLiteral(headLiteral)})`,
    `useJsonld(${jsLiteral(jsonldLiteral)})`,
  ].join('\n')

  const styleBlock = [
    '<style scoped>',
    '.read-progress {',
    '  position: fixed;',
    '  top: 0;',
    '  left: 0;',
    '  right: 0;',
    '  height: 3px;',
    '  z-index: 2000;',
    '  background: transparent;',
    '  pointer-events: none;',
    '}',
    '',
    '.read-progress__fill {',
    '  height: 100%;',
    '  background: linear-gradient(90deg, var(--violet-300), var(--violet-500));',
    '  transform-origin: left;',
    '  transform: scaleX(0);',
    '}',
    '',
    '.mb-3rem {',
    '  margin-bottom: 3rem;',
    '}',
    '',
    '.social__links {',
    '  display: flex;',
    '  flex-direction: column;',
    '  gap: 10px;',
    '}',
    '',
    '.social-icons {',
    '  display: inline-flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  width: 40px;',
    '  height: 40px;',
    '  border-radius: 11px;',
    '  border: 1px solid var(--border-light);',
    '  background: #fff;',
    '  cursor: pointer;',
    '  color: var(--fg-3);',
    '  transition: all 150ms ease;',
    '}',
    '',
    '.social-icons:hover {',
    '  background: var(--bg-violet-25);',
    '  border-color: var(--violet-300);',
    '  color: var(--violet-600);',
    '  transform: translateY(-2px);',
    '}',
    '',
    '.related-container {',
    '  max-width: 1140px;',
    '}',
    '',
    '.section-label {',
    '  display: flex;',
    '  align-items: baseline;',
    '  gap: 12px;',
    '  margin-bottom: 26px;',
    '}',
    '',
    '.section-label h2 {',
    '  font-size: 21px;',
    '  font-weight: var(--fw-bold);',
    '  letter-spacing: -0.01em;',
    '  color: var(--fg-1);',
    '  margin: 0;',
    '}',
    '',
    '.section-label .rule {',
    '  flex: 1;',
    '  height: 1px;',
    '  background: var(--border-light);',
    '}',
    '',
    '.related-section {',
    '  margin-top: var(--space-10);',
    '  padding-top: var(--space-10);',
    '  border-top: 1px solid var(--border-light);',
    '}',
    '',
    '.related-grid {',
    '  display: grid;',
    '  grid-template-columns: repeat(4, 1fr);',
    '  gap: var(--space-4);',
    '}',
    '',
    '@media (max-width: 1100px) {',
    '  .related-grid {',
    '    grid-template-columns: repeat(2, 1fr);',
    '  }',
    '}',
    '',
    '@media (max-width: 600px) {',
    '  .related-grid {',
    '    grid-template-columns: 1fr;',
    '  }',
    '}',
    '</style>',
  ].join('\n')

  return `${templateLines}\n\n<script setup>\n${scriptLines}\n</script>\n\n${styleBlock}\n`
}

// ---------- main ----------

function main() {
  const mapping = loadComponentMapping()
  const warnings = []
  let pageCount = 0
  let featureCount = 0
  let blogCount = 0

  // home.json -> pages/index.vue
  const homeData = readJson(path.join(CONTENT_DIR, 'home.json'))
  writeFile(path.join(PAGES_DIR, 'index.vue'), buildGenericPage(homeData, mapping, warnings))

  // content/pages/*.json -> pages/<slug>.vue
  const pageFiles = fs.readdirSync(path.join(CONTENT_DIR, 'pages')).filter((f) => f.endsWith('.json'))
  for (const file of pageFiles) {
    const data = readJson(path.join(CONTENT_DIR, 'pages', file))
    const outPath = path.join(PAGES_DIR, `${data.slug}.vue`)
    writeFile(outPath, buildGenericPage(data, mapping, warnings))
    pageCount += 1
  }

  // content/features/*.json -> pages/features/<slug>.vue
  const featureFiles = fs.readdirSync(path.join(CONTENT_DIR, 'features')).filter((f) => f.endsWith('.json'))
  for (const file of featureFiles) {
    const data = readJson(path.join(CONTENT_DIR, 'features', file))
    const outPath = path.join(PAGES_DIR, 'features', `${data.slug}.vue`)
    writeFile(outPath, buildGenericPage(data, mapping, warnings))
    featureCount += 1
  }

  // content/blog/*.json -> pages/blog/<slug>.vue
  // Skipped for now — blog generation (buildBlogPage below) is left in place
  // but not invoked. Re-enable by uncommenting this block.
  // const blogFiles = fs.readdirSync(path.join(CONTENT_DIR, 'blog')).filter((f) => f.endsWith('.json'))
  // const blogEntries = blogFiles.map((file) => readJson(path.join(CONTENT_DIR, 'blog', file)))
  // const lookupBySlug = new Map(blogEntries.map((entry) => [entry.slug, entry]))
  // const allSlugsSorted = [...lookupBySlug.keys()].sort()
  //
  // for (const data of blogEntries) {
  //   const outPath = path.join(PAGES_DIR, 'blog', `${data.slug}.vue`)
  //   writeFile(outPath, buildBlogPage(data, lookupBySlug, allSlugsSorted))
  //   blogCount += 1
  // }

  console.log(`[generate] wrote pages/index.vue from home.json`)
  console.log(`[generate] wrote ${pageCount} pages/<slug>.vue`)
  console.log(`[generate] wrote ${featureCount} pages/features/<slug>.vue`)
  console.log(`[generate] skipped blog generation (${blogCount})`)
  if (warnings.length) {
    console.log(`\n[generate] ${warnings.length} warning(s):`)
    warnings.forEach((w) => console.log(`  - ${w}`))
  }
}

main()
