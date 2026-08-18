import fs from 'node:fs'
import path from 'node:path'
import { getAllBlogs } from './getAllBlogs.js'
import getTemplatesAndCategories from './getTemplatesAndCategories.js'

const CONTENT_DIR = path.resolve(import.meta.dirname, '../content')

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

export default async () => {
  const data = await getAllBlogs()

  const articles = data.map((item) => ({
    url: `/blog/${item.attributes.slug}/`,
    lastmod: item.attributes.updatedAt
  }))

  const totalArticles = data.filter(item => !item.attributes.featured).length
  const itemsPerPage = 9
  const totalPages = Math.ceil(totalArticles / itemsPerPage)
  const paginationUrls = []

  // Use the most recent blog's updatedAt for pagination pages
  const mostRecentUpdate = data.length > 0 ? data[0].attributes.updatedAt : new Date().toISOString()

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
