const axios = require('axios')

export default async (params = {}) => {
  let { data: templates } = await axios.get(
    `${process.env.appUrl}/templates.json`,
    {
      params: {
        ...params,
        with_details: true,
      },
    }
  )

  const { data: categories } = await axios.get(
    `${process.env.appUrl}/template_categories.json`
  )

  const dummyDescription =
    'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

  templates = templates.map((template) => ({
    ...template,
    description: template.description || dummyDescription,
  }))

  const templateRoutes = templates.map((template) => ({
    route: `/templates/${template.slug}`,
    payload: { template, categories },
  }))
  templateRoutes.push({
    route: `/templates`,
    payload: { templates, categories },
  })

  const { data: templatesGroupedByCategory } = await axios.get(
    `${process.env.appUrl}/template_categories/grouped_by_category.json`
  )

  const categorieRoutes = templatesGroupedByCategory.map((item) => ({
    route: `/templates/categories/${item.categorySlug}`,
    payload: {
      templates: item.templates,
      categories,
    },
  }))

  return { templateRoutes, categorieRoutes, templates, categories }
}
