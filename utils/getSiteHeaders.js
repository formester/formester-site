// dataFetcher.js
import axios from 'axios'
import getSiteMeta from '@/utils/getSiteMeta'

export default async (endpoint) => {
  const {
    data: { data },
  } = await axios.get(`${process.env.strapiUrl}/api/page-headers`, {
    params: {
      'filters[endpoint][$eqi]': endpoint,
      populate: 'deep',
    },
  })

  const headers = data[0]
  const metaData = getSiteMeta(headers?.meta)
  const head = {
    ...headers?.head,
    meta: [...metaData],
  }
  const jsonld = headers?.jsonld

  return { head, jsonld }
}
