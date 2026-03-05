import axios from 'axios'
import getSiteMeta from './getSiteMeta.js'
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
          `[getAllPages] Attempt ${attempt}/${retries} failed (${error.code || error.message}). Retrying in ${delay}ms...`
        )
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }
      throw error
    }
  }
}

function processItem(item) {
  const components = item?.components || []
  const meta = item?.meta || null
  let head = {}
  let jsonld = []

  const normalizeJsonLd = (input) => {
    if (!input) return []
    let arr = Array.isArray(input) ? input : [input]
    return arr
      .filter((entry) => entry && typeof entry === 'object')
      .map((entry) => {
        if (!entry['@context'] || typeof entry['@context'] !== 'string') {
          return { '@context': 'https://schema.org', ...entry }
        }
        return entry
      })
  }

  if (!components.length || !meta) {
    return { head, jsonld, components }
  }

  const metaData = {
    url: meta?.url,
    type: meta?.type,
    title: meta?.title,
    description: meta?.description,
    mainImage: meta?.mainImage?.imageUrl || meta?.mainImage?.image?.url,
    mainImageAlt: meta?.mainImage?.imageAlt,
    keywords: meta?.keywords?.map((k) => k?.text),
  }
  const siteMetaData = getSiteMeta(metaData)
  head = {
    title: meta?.title,
    link: meta?.link,
    meta: [...siteMetaData],
  }
  jsonld = normalizeJsonLd(meta?.jsonld)

  return { head, jsonld, components }
}

async function _fetchAllPages() {
  console.log('[getAllPages] Fetching all pages from CMS...')
  const {
    data: { data },
  } = await fetchWithRetry(`${STRAPI_URL}/api/pages`, {
    params: {
      populate: 'deep',
    },
  })

  const items = data || []
  const map = { __home__: null }
  for (const item of items) {
    const processed = processItem(item)
    if (item.slug) {
      map[item.slug] = processed
    } else {
      map.__home__ = processed
    }
  }

  console.log(`[getAllPages] Cached ${Object.keys(map).length} pages`)
  return map
}

export async function getAllPages() {
  if (!cachePromise) {
    cachePromise = _fetchAllPages()
  }
  return cachePromise
}

export async function getPageBySlug(slug) {
  const pages = await getAllPages()
  return pages[slug] || null
}

export async function getHomePage() {
  const pages = await getAllPages()
  return pages.__home__ || null
}
