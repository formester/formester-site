import { getAllBlogs } from './getAllBlogs.js'
import { getAllFeatures } from './getAllFeatures.js'
import { getAllPages } from './getAllPages.js'
import getTemplatesAndCategories from './getTemplatesAndCategories.js'

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
  const featuresMap = await getAllFeatures()

  const features = Object.keys(featuresMap).map((slug) => ({
    url: `/features/${slug}/`,
  }))

  return features
}

export const getPageRoutes = async () => {
  const pagesMap = await getAllPages()

  const pages = Object.keys(pagesMap)
    .filter((slug) => slug !== '__home__')
    .map((slug) => ({
      url: `/${slug}/`,
    }))

  return pages
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
