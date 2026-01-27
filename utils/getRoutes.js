import axios from 'axios'

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
      url: `/blog/page/${i}`,
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

export const getTemplateRoutes = async () => {
  const { data: templates } = await axios.get(
    "https://app.formester.com/templates.json",
    { params: { with_details: true } }
  )

  const { data: templatesGroupedByCategory } = await axios.get(
    "https://app.formester.com/template_categories/grouped_by_category.json"
  )

  const templateUrls = templates.map(t => `/templates/${t.slug}`)
  const categoryUrls = templatesGroupedByCategory.map(c => `/templates/categories/${c.categorySlug}`)

  // Add pagination URLs
  const totalTemplates = templates.length
  const itemsPerPage = 12
  const totalPages = Math.ceil(totalTemplates / itemsPerPage)
  const paginationUrls = ['/templates']

  for (let i = 2; i <= totalPages; i++) {
    paginationUrls.push(`/templates/page/${i}`)
  }

  return [...templateUrls, ...categoryUrls, ...paginationUrls]
}
