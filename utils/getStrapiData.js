// dataFetcher.js
import axios from 'axios'
import getSiteMeta from '@/utils/getSiteMeta'

export default async (endpoint, params = {}) => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl
  
  // Retry logic for transient failures
  let lastError
  const maxRetries = 3
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const {
        data: { data },
      } = await axios.get(`${strapiUrl}/api${endpoint}`, {
        params: {
          ...params,
          populate: 'deep',
        },
        timeout: 10000, // 10 second timeout
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
    keywords: meta?.keywords?.map((item) => item?.text) || [],
  }
  const siteMetaData = getSiteMeta(metaData)
  head = {
    title: meta?.title,
    link: meta?.link,
    meta: [...siteMetaData],
  }
  jsonld = normalizeJsonLd(meta?.jsonld)

    return { head, jsonld, components }
    } catch (error) {
      lastError = error
      
      // If this is not the last attempt, wait before retrying
      if (attempt < maxRetries - 1) {
        const delay = 200 * Math.pow(2, attempt) // 200ms, 400ms, 800ms
        console.warn(`Strapi API attempt ${attempt + 1} failed, retrying in ${delay}ms...`, error.message)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }
  
  // All retries failed
  console.error('Error fetching Strapi data after all retries:', lastError?.message)
  // Return empty data structure to prevent 500 errors
  return { 
    head: {}, 
    jsonld: [], 
    components: null,
    error: lastError?.message 
  }
}
