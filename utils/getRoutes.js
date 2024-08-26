const axios = require('axios')
export default async () => {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/blogs?populate=*`)

  const articles = data.map((item) => {
    return `/blog/${item.attributes.slug}`
  })

  return articles
}

export const getFeatureRoutes = async () => {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/features?populate=deep`)

  const features = data.map((item) => {
    return `/features/${item.slug}`
  })

  return features
}
