import axios from 'axios'

export default async () => {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/blogs`, {
    params: {
        sort: 'publishedAt:desc',
        populate: '*',
        pagination: {
            pageSize: 500,
        },
    },
  })

  const articles = data.map((item) => ({
    url: `/blog/${item.attributes.slug}/`,
    lastmod: item.attributes.updatedAt
  }))

  const totalArticles = data.filter(item => !item.attributes.featured).length
  const itemsPerPage = 9
  const totalPages = Math.ceil(totalArticles / itemsPerPage)
  const paginationUrls = []

  // Use the most recent blog's updatedAt for pagination pages
  const mostRecentUpdate = data.length > 0 ? data[0].attributes.updatedAt : new Date().toISOString()

  paginationUrls.push({
    url: '/blog/',
    lastmod: mostRecentUpdate
  })

  for (let i = 2; i <= totalPages; i++) {
    paginationUrls.push({
      url: `/blog/page/${i}/`,
      lastmod: mostRecentUpdate
    })
  }

  return [...articles, ...paginationUrls]
}

export const getFeatureRoutes = async () => {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/features?populate=deep`)

  const features = data.map((item) => ({
    url: `/features/${item.slug}/`,
    lastmod: item.updatedAt
  }))

  return features
}

export const getPageRoutes = async () => {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/pages?populate=deep`)

  const pages = data
    .filter((item) => item.slug)
    .map((item) => ({
      url: `/${item.slug}/`,
      lastmod: item.updatedAt
    }))

  return pages
}

export const getTemplateRoutes = async () => {
  const { data: templates } = await axios.get(
    "https://app.formester.com/templates.json"
  )

  const { data: templateCategories } = await axios.get(
    "https://app.formester.com/template_categories.json"
  )

  const templateUrls = templates.map(t => ({
    url: `/templates/${t.slug}/`,
    lastmod: t?.updatedAt
  }))

  // Flatten all category arrays (department, industry, etc.)
  const allCategories = Object.values(templateCategories).flat()

  const categoryUrls = allCategories.map(c => ({
    url: `/templates/categories/${c.slug}/`,
    lastmod: c.updatedAt
  }))

  // Use most recent template update for /templates index page
  const mostRecentTemplateUpdate = templates.length > 0
    ? templates[0].updatedAt
    : new Date().toISOString()

  // Add pagination URLs
  const totalTemplates = templates.length
  const itemsPerPage = 12
  const totalPages = Math.ceil(totalTemplates / itemsPerPage)
  const paginationUrls = [{ url: '/templates/', lastmod: mostRecentTemplateUpdate }]

  for (let i = 2; i <= totalPages; i++) {
    paginationUrls.push({ url: `/templates/page/${i}/`, lastmod: mostRecentTemplateUpdate })
  }


  return [
    ...templateUrls,
    ...categoryUrls,
    ...paginationUrls
  ]
}
