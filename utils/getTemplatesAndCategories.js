const axios = require('axios')

export default async () => {
  let { data: templates } = await axios.get(
    'https://app.formester.com/templates.json?with_details=true'
  )

  const { data: categories } = await axios.get(
    'https://app.formester.com/template_categories.json'
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

  const categorieRoutes = Object.values(categories)
    .flat()
    .map((category) => ({
      route: `/templates/categories/${category.slug}`,
      payload: {
        templates,
        categories,
      },
    }))
  return { templateRoutes, categorieRoutes, templates, categories }
}
