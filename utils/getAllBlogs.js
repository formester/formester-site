import axios from 'axios'
import { STRAPI_URL } from '../constants/urls.js'

const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

let cachePromise = null

async function fetchWithRetry(url, config = {}, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url, { ...config, timeout: 30000 })
    } catch (error) {
      const isRetryable =
        error.code === 'ECONNRESET' ||
        error.code === 'ETIMEDOUT' ||
        error.code === 'ECONNABORTED' ||
        error.code === 'EPIPE' ||
        error.code === 'EAI_AGAIN' ||
        (error.response && error.response.status >= 500)

      if (isRetryable && attempt < retries) {
        const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1)
        console.warn(
          `[getAllBlogs] Attempt ${attempt}/${retries} failed (${error.code || error.message}). Retrying in ${delay}ms...`
        )
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }
      throw error
    }
  }
}

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
