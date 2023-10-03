import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  let response = await fetch('https://app.formester.com/template_categories.json')
  let categories = await response.json()
  let data  = await fetch('https://app.formester.com/templates.json')
  let templates = await data.json()
  const sitemap = new SitemapStream({
    hostname: 'https://formester.com',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
    })
  }
  categories.map((category) => {
    sitemap.write({
      url: `/templates/categories/${category.slug}`,
      changefreq: 'monthly',
    })
  })
  templates.map((template) => {
    sitemap.write({
      url: `/templates/${template.slug}`,
      changefreq: 'monthly',
    })
  })
  sitemap.end()

  return streamToPromise(sitemap)
})
