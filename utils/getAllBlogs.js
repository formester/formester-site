import { STRAPI_URL } from '../constants/urls.js'
import fetchWithRetry from './fetchWithRetry.js'

let cachePromise = null

async function _fetchAllBlogs() {
  console.log('[getAllBlogs] Fetching all blogs from CMS...')
  const {
    data: { data },
  } = await fetchWithRetry(`${STRAPI_URL}/api/blogs`, {
    params: {
      sort: 'publishedAt:desc',
      populate: '*',
      'pagination[pageSize]': 500,
    },
  })

  const blogs = data || []
  console.log(`[getAllBlogs] Cached ${blogs.length} blogs`)
  return blogs
}

export async function getAllBlogs() {
  if (!cachePromise) {
    cachePromise = _fetchAllBlogs()
  }
  return cachePromise
}

export async function getBlogBySlug(slug) {
  const blogs = await getAllBlogs()
  return blogs.find((item) => item.attributes.slug === slug) || null
}
