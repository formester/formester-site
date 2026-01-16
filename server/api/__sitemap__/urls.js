import axios from 'axios'
import getRoutes from '~/utils/getRoutes.js'

// Cache for sitemap data
let sitemapCache = null

/**
 * Extract image URLs from page/feature components
 */
function extractImages(components) {
  const images = []

  if (!components || !Array.isArray(components)) return images

  components.forEach(component => {
    // Hero images
    if (component.heroImage?.image?.url) {
      images.push(component.heroImage.image.url)
    }
    if (component.heroImage?.imageUrl) {
      images.push(component.heroImage.imageUrl)
    }

    // Background images
    if (component.background?.image?.url) {
      images.push(component.background.image.url)
    }

    // Thumbnail images
    if (component.thumbnail?.url) {
      images.push(component.thumbnail.url)
    }
    if (component.thumbnail?.image?.url) {
      images.push(component.thumbnail.image.url)
    }

    // Items/Cards arrays
    if (component.items && Array.isArray(component.items)) {
      component.items.forEach(item => {
        if (item.image?.url) images.push(item.image.url)
        if (item.imageUrl) images.push(item.imageUrl)
      })
    }

    // Cards array
    if (component.cards && Array.isArray(component.cards)) {
      component.cards.forEach(card => {
        if (card.image?.url) images.push(card.image.url)
        if (card.imageUrl) images.push(card.imageUrl)
      })
    }
  })

  return [...new Set(images)] // Remove duplicates
}

export default defineEventHandler(async () => {
  try {
    // Return cached sitemap if available
    if (sitemapCache) {
      return sitemapCache
    }

    // Fetch templates with preview images
    const { data } = await axios.get('http://localhost:5000/templates.json')
    const templates = data.map((template) => ({
      loc: `/templates/${template.slug}`,
      lastmod: new Date(),
      images: template.previewImageUrl ? [template.previewImageUrl] : []
    }))

    // Fetch template categories
    const { data: response } = await axios.get('http://localhost:5000/template_categories.json')
    const categories = Object.values(response)
      .flat()
      .map((category) => ({
        loc: `/templates/categories/${category.slug}`,
        lastmod: new Date()
      }))

    // Fetch pages with full component data from Strapi
    const { data: pagesData } = await axios.get('https://cms.formester.com/api/pages', {
      params: { populate: 'deep' }
    })
    const pages = (pagesData?.data || []).map(page => ({
      loc: `/${page.slug}`,
      lastmod: new Date(),
      images: extractImages(page.components || [])
    }))

    // Fetch features with full component data from Strapi
    const { data: featuresData } = await axios.get('https://cms.formester.com/api/features', {
      params: { populate: 'deep' }
    })
    const features = (featuresData?.data || []).map(feature => ({
      loc: `/features/${feature.slug}`,
      lastmod: new Date(),
      images: extractImages(feature.components || [])
    }))

    // Fetch blogs with cover images
    const { data: blogsData } = await axios.get('https://cms.formester.com/api/blogs', {
      params: { populate: '*' }
    })
    const blogArticles = (blogsData?.data || []).map(blog => ({
      loc: `/blog/${blog.attributes.slug}`,
      lastmod: new Date(),
      images: blog.attributes.cover?.url ? [blog.attributes.cover.url] : []
    }))

    // Get blog pagination routes
    const blogs = await getRoutes()
    const blogPaginationRoutes = blogs
      .filter(item => {
        const url = typeof item === 'string' ? item : item.url
        return url.includes('/blog/page/')  || url === '/blog'
      })
      .map(item => ({
        loc: typeof item === 'string' ? item : item.url,
        lastmod: new Date()
      }))

    // Combine all routes
    const result = [
      ...pages,
      ...features,
      ...blogArticles,
      ...blogPaginationRoutes,
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
