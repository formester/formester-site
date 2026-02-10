import getRoutes, { getFeatureRoutes, getPageRoutes, getTemplateRoutes } from '~/utils/getRoutes.js'

// Cache for sitemap data
let sitemapCache = null

export default defineEventHandler(async () => {
  try {
    // Return cached sitemap if available
    if (sitemapCache) {
      return sitemapCache
    }

    // Get other routes (includes blog articles and pagination)
    const blogs = await getRoutes()
    const features = await getFeatureRoutes()
    const pages = await getPageRoutes()
    const templates = await getTemplateRoutes()

    const filteredPages = pages.filter(
      item => !item.url?.startsWith('/status')
    )

    // Combine all routes
    const result = [
      ...filteredPages.map(item => ({ loc: item.url, lastmod: item.lastmod })),
      ...features.map(item => ({ loc: item.url, lastmod: item.lastmod })),
      ...blogs.map(item => ({ loc: item.url, lastmod: item.lastmod })),
      ...templates.map(item => ({ loc: item.url, lastmod: item.lastmod }))
    ]

    // Cache the result
    sitemapCache = result

    return result
  } catch (error) {
    console.error('Error generating sitemap URLs:', error)
    return []
  }
})
