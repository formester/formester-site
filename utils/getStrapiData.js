// dataFetcher.js
import axios from 'axios'
import getSiteMeta from '@/utils/getSiteMeta'

export default async (endpoint, params = {}) => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl
  
  const {
    data: { data },
  } = await axios.get(`${strapiUrl}/api${endpoint}`, {
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
