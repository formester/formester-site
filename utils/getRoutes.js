const axios = require('axios')
export default async () => {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/blogs?populate=*`)

  const articles = data.map((item) => {
    return `/blog/${item.attributes.slug}`
  })

  const totalArticles = data.filter(item => !item.attributes.featured).length
  const itemsPerPage = 9
  const totalPages = Math.ceil(totalArticles / itemsPerPage)
  const paginationUrls = []
  paginationUrls.push({
    url: '/blog',
    changefreq: 'daily'
  })
  
  for (let i = 2; i <= totalPages; i++) {
    paginationUrls.push({
      url: `/blog?page=${i}`,
      changefreq: 'daily'
    })
  }
  
  const articleUrls = articles.map(url => ({
    url,
    changefreq: 'weekly'
  }))
  
  return [...articleUrls, ...paginationUrls]
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

export const getPageRoutes = async () => {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/pages?populate=deep`)

  const pages = data.map((item) => {
    return `/${item.slug}`
  })

  return pages
}
