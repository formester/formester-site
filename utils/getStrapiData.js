// dataFetcher.js
import axios from 'axios'
import getSiteMeta from '@/utils/getSiteMeta'

export default async (endpoint, params = {}) => {
  const {
    data: { data },
  } = await axios.get(`${process.env.strapiUrl}/api${endpoint}`, {
    params: {
      ...params,
      populate: 'deep',
    },
  })
  const components = data?.components || data[0]?.components
  const meta = data?.meta || data[0]?.meta
  let head = {}
  let jsonld = {}
  if (!components || !meta) {
    return { head, jsonld, components }
  }

  const metaData = {
    url: meta?.url,
    type: meta?.type,
    title: meta?.title,
    description: meta?.description,
    mainImage: meta?.mainImage.imageUrl || meta?.mainImage.image.url,
    mainImageAlt: meta?.mainImage.imageAlt,
    keywords: meta?.keywords.map((item) => item?.text),
  }
  const siteMetaData = getSiteMeta(metaData)
  head = {
    title: meta?.title,
    link: meta?.link,
    meta: [...siteMetaData],
  }
  jsonld = meta?.jsonld

  return { head, jsonld, components }
}
