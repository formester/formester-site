// dataFetcher.js
import axios from 'axios'
import getSiteMeta from '@/utils/getSiteMeta'

export default async (endpoint, params) => {
  const {
    data: { data },
  } = await axios.get(`${process.env.strapiUrl}/api${endpoint}`, {
    params: {
      ...params,
      populate: 'deep',
    },
  })
  const meta = data[0].meta

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
  const head = {
    title: meta?.title,
    link: meta?.link,
    meta: [...siteMetaData],
  }
  const jsonld = meta?.jsonld

  return { head, jsonld }
}
