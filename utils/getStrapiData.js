// dataFetcher.js
import axios from 'axios'
import getSiteMeta from '@/utils/getSiteMeta'

const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

async function fetchWithRetry(url, config, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url, {
        ...config,
        timeout: 30000,
      })
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
          `[getStrapiData] Attempt ${attempt}/${retries} failed (${error.code || error.message}). Retrying in ${delay}ms...`
        )
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }
      throw error
    }
  }
}

export default async (endpoint, params = {}) => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl

  const {
    data: { data },
  } = await fetchWithRetry(`${strapiUrl}/api${endpoint}`, {
    params: {
      ...params,
      populate: 'deep',
    },
  })
  const components = data?.components || data[0]?.components
  const meta = data?.meta || data[0]?.meta
  let head = {}
  let jsonld = []
  const normalizeJsonLd = (input) => {
    if (!input) return []
    let arr = Array.isArray(input) ? input : [input]
    return arr
      .filter((item) => item && typeof item === 'object')
      .map((item) => {
        if (!item['@context'] || typeof item['@context'] !== 'string') {
          return { '@context': 'https://schema.org', ...item }
        }
        return item
      })
  }
  if (!components || !meta) {
    return { head, jsonld, components }
  }

  const metaData = {
    url: meta?.url,
    type: meta?.type,
    title: meta?.title,
    description: meta?.description,
    mainImage: meta?.mainImage?.imageUrl || meta?.mainImage?.image?.url,
    mainImageAlt: meta?.mainImage?.imageAlt,
    keywords: meta?.keywords.map((item) => item?.text),
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
