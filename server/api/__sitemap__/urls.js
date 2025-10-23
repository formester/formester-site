import axios from 'axios'
import getRoutes, { getFeatureRoutes, getPageRoutes } from '~/utils/getRoutes.js'
import getTemplatesAndCategories from '~/utils/getTemplatesAndCategories.js'

// Cache for sitemap data
let sitemapCache = null

export default defineEventHandler(async () => {
  try {
    // Return cached sitemap if available
    if (sitemapCache) {
      return sitemapCache
    }

    // Fetch templates
    const { data } = await axios.get('https://app.formester.com/templates.json')
    const templates = data.map((template) => ({
      loc: `/templates/${template.slug}`,
      lastmod: new Date()
    }))

    // Fetch template categories
    const { data: response } = await axios.get('https://app.formester.com/template_categories.json')
    const categories = Object.values(response)
      .flat()
      .map((category) => ({
        loc: `/templates/categories/${category.slug}`,
        lastmod: new Date()
      }))

    // Get other routes
    const blogs = await getRoutes()
    const features = await getFeatureRoutes()
    const pages = await getPageRoutes()

    // Combine all routes
    const result = [
      ...pages.map(url => ({ loc: url, lastmod: new Date() })),
      ...features.map(url => ({ loc: url, lastmod: new Date() })),
      ...blogs.map(item => ({ 
        loc: typeof item === 'string' ? item : item.url, 
        lastmod: new Date() 
      })),
      ...templates,
      ...categories
    ]
    
    // Cache the result
    sitemapCache = result
    
    return result
  } catch (error) {
    console.error('Error generating sitemap URLs:', error)
    return []
  }
})
