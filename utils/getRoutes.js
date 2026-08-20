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

// Reads content/<collection>/**/*.json directly instead of queryCollection() —
// this hook runs at build time outside any Vue/request context, where
// queryCollection is not reliably available (nuxt/content#3586).
function listSlugsFromDisk(subdir) {
  const root = path.join(CONTENT_DIR, subdir)
  if (!fs.existsSync(root)) return []
  const slugs = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (entry.name.endsWith('.json')) {
        slugs.push(path.relative(root, full).replace(/\.json$/, ''))
      }
    }
  }
  walk(root)
  return slugs
}

// Same reasoning as listSlugsFromDisk above, but blog posts are markdown
// with YAML frontmatter now, and route generation needs more than just the
// slug (updatedAt/featured/publishedAt for lastmod + pagination math) — so
// read each file's frontmatter directly instead of going through
// queryCollection('blog') at all. This mirrors the exact frontmatter format
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
  return listSlugsFromDisk('features').map((slug) => ({
    url: `/features/${slug}/`,
  }))
}

export const getPageRoutes = async () => {
  return listSlugsFromDisk('pages').map((slug) => ({
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
