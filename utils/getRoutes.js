import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import getTemplatesAndCategories from './getTemplatesAndCategories.js'

// import.meta.dirname isn't reliably preserved once Vite/Rollup bundles a
// module into a Nitro server chunk (evaluates to undefined at runtime,
// breaking path.resolve) — import.meta.url is a required, spec-compliant
// ESM feature bundlers must rewrite correctly, so use that instead. This
// file happens to load unbundled today (only imported from nuxt.config.js),
// but keep it consistent with getTemplatesAndCategories.js, which hit this
// exact bug once imported from a .vue page.
const CONTENT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../content')
const PAGES_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../pages')

// Features are fully migrated off content/features JSON to static pages/features/*.vue
// files (one per slug), so route generation reads the slugs straight off the
// pages/features directory instead. Skips index.vue (the /features/ listing page,
// seeded separately) and any [bracket].vue dynamic-route file.
function listFeatureSlugsFromDisk() {
  const root = path.join(PAGES_DIR, 'features')
  if (!fs.existsSync(root)) return []
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.vue'))
    .map((entry) => entry.name.replace(/\.vue$/, ''))
    .filter((name) => name !== 'index' && !name.startsWith('['))
}

// content/pages is fully migrated too, same reasoning as listFeatureSlugsFromDisk
// above — read slugs straight off pages/**/*.vue instead. Excludes subdirectories
// that already have their own dedicated route-generation function (blog/,
// templates/, features/) or aren't content pages at all (__TOOLS__/), plus the
// handful of top-level system/tool pages that aren't part of the content-driven
// "pages" set and are handled elsewhere (ignored by nitro.prerender, excluded
// from the sitemap, or just always linked from nav/footer).
const PAGE_SKIP_DIRS = new Set(['blog', 'templates', 'features', '__TOOLS__'])
const PAGE_SKIP_FILES = new Set([
  'index', 'preview', 'design-preview', 'template-preview', 'comparison-tool',
  'contact', 'pricing', 'security', 'terms-of-service', 'jotform-101', 'typeform-101',
])

function listPageSlugsFromDisk() {
  const slugs = []
  const walk = (dir, isRoot) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (isRoot && PAGE_SKIP_DIRS.has(entry.name)) continue
        walk(path.join(dir, entry.name), false)
      } else if (entry.name.endsWith('.vue') && !entry.name.startsWith('[')) {
        const slug = path.relative(PAGES_DIR, path.join(dir, entry.name)).replace(/\.vue$/, '')
        if (isRoot && PAGE_SKIP_FILES.has(slug)) continue
        slugs.push(slug)
      }
    }
  }
  walk(PAGES_DIR, true)
  return slugs
}

// Blog posts are markdown with YAML frontmatter, and route generation needs
// more than just the slug (updatedAt/featured/publishedAt for lastmod +
// pagination math) — so read each file's frontmatter directly instead of
// going through queryCollection('blog') at all. This mirrors the exact frontmatter format
// scripts/generate-pages-from-content.mjs and getAllBlogs.js's
// stripFrontmatter already assume: `---\nkey: <JSON value>\n...\n---\n<body>`.
function readBlogFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const closeIdx = content.startsWith('---\n') ? content.indexOf('\n---\n', 4) : -1
  const frontmatter = closeIdx === -1 ? '' : content.slice(4, closeIdx)
  const fields = {}
  for (const line of frontmatter.split('\n')) {
    const idx = line.indexOf(': ')
    if (idx === -1) continue
    try {
      fields[line.slice(0, idx)] = JSON.parse(line.slice(idx + 2))
    } catch {
      // skip unparsable lines
    }
  }
  return fields
}

function listBlogEntriesFromDisk() {
  const root = path.join(CONTENT_DIR, 'blog')
  if (!fs.existsSync(root)) return []
  return fs
    .readdirSync(root)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readBlogFrontmatter(path.join(root, f)))
    .filter((entry) => entry.slug)
}

export default async () => {
  const entries = listBlogEntriesFromDisk()
  entries.sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))

  const articles = entries.map((entry) => ({
    url: `/blog/${entry.slug}/`,
    lastmod: entry.updatedAt
  }))

  const totalArticles = entries.filter((entry) => !entry.featured).length
  const itemsPerPage = 9
  const totalPages = Math.ceil(totalArticles / itemsPerPage)
  const paginationUrls = []

  // Use the most recently published blog's updatedAt for pagination pages
  const mostRecentUpdate = entries.length > 0 ? entries[0].updatedAt : new Date().toISOString()

  paginationUrls.push({
    url: '/blog/',
    lastmod: mostRecentUpdate
  })

  for (let i = 2; i <= totalPages; i++) {
    paginationUrls.push({
      url: `/blog/page/${i}/`,
      lastmod: mostRecentUpdate
    })
  }

  return [...articles, ...paginationUrls]
}

export const getFeatureRoutes = async () => {
  return listFeatureSlugsFromDisk().map((slug) => ({
    url: `/features/${slug}/`,
  }))
}

export const getPageRoutes = async () => {
  return listPageSlugsFromDisk().map((slug) => ({
    url: `/${slug}/`,
  }))
}

export const getTemplateRoutes = async () => {
  const result = await getTemplatesAndCategories()
  const templates = result.templates
  const categories = result.categories

  const templateUrls = templates.map(t => ({
    url: `/templates/${t.slug}/`,
    lastmod: t?.updatedAt
  }))

  // Flatten all category arrays (department, industry, etc.)
  const allCategories = Object.values(categories).flat()

  const categoryUrls = allCategories.map(c => ({
    url: `/templates/categories/${c.slug}/`,
    lastmod: c.updatedAt
  }))

  // Use most recent template update for /templates index page
  const mostRecentTemplateUpdate = templates.length > 0
    ? templates[0].updatedAt
    : new Date().toISOString()

  // Add pagination URLs
  const totalTemplates = templates.length
  const itemsPerPage = 12
  const totalPages = Math.ceil(totalTemplates / itemsPerPage)
  const paginationUrls = [{ url: '/templates/', lastmod: mostRecentTemplateUpdate }]

  for (let i = 2; i <= totalPages; i++) {
    paginationUrls.push({ url: `/templates/page/${i}/`, lastmod: mostRecentTemplateUpdate })
  }


  return [
    ...templateUrls,
    ...categoryUrls,
    ...paginationUrls
  ]
}
