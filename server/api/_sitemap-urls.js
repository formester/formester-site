import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {

  //Fetching blogs dynamically
  const blogs = await serverQueryContent(event).find()

  //Fetching TemplateCategories
  let templateCategoryResponse = await fetch('https://app.formester.com/template_categories.json')
  let templateCategories = await templateCategoryResponse.json()

  //Fetching Templates
  let templateResponse  = await fetch('https://app.formester.com/templates.json')
  let templates = await templateResponse.json()

  const combinedSiteMap = [
    ...blogs.map((blog) => ({ loc: blog._path })),
    ...templates.map((template) => ({ loc: `/templates/${template.slug}` })),
    ...templateCategories.map((category) => ({ loc: `/templates/categories/${category.slug}` })),
  ];

  return combinedSiteMap

})
