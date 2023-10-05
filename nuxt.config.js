import { fetchAllArticles } from './utils/getArticles'
import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  nitro: {
    prerender: {
      ignore: ['/online-form-builder', '/blog/how-to-create-a-quiz-in-google-forms-the-only-guide-you&', '/blog/how-branded-surveys-can-help-you-unlock-your-brand&']
    }
  },
  app: {
    head: {
      title: 'No Code Form Builder | Online HTML Form Builder - Formester',
      meta: [
        ...meta,
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'robots',
          content: 'index, follow',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/',
        },
      ],
      // Custom Javascript
      script: [
        {
          src: '/bootstrap.min.js',
          defer: true,
          async: true,
        },
      ],
    },
  },
  // Configration for sitemap, url being used for generating canonical urls
  site: {
    url: process.env.baseURL || 'http://localhost:8080',
  },
  router: {
    trailingSlash: true,
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/bootstrap.min.css', '~/assets/css/main.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-jsonld',
    'nuxt-gtag',
    'nuxt-disqus',
    'nuxt-simple-sitemap',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  disqus: {
    shortname: 'formester',
  },

  // GTM configuration
  gtm: {
    id: 'GTM-56W9ZCR',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // For catching 404 pages
  generate: {
    routes: async () => {
      try {
        let { data } = await axios.get(
          'https://app.formester.com/templates.json'
        )
        let templatesRoute = data.map((template) => {
          return `/templates/${template.slug}`
        })
        let { data: response } = await axios.get(
          'https://app.formester.com/template_categories.json'
        )
        let categoriesRoute = response.map((category) => {
          return `/templates/categories/${category.slug}`
        })
        return [...templatesRoute, ...categoriesRoute]
      } catch (error) {
        return []
      }
    },
    fallback: true,
  },
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
  // Nuxt Image
  // please comment out the provider and netlify section while running application on local server
  image: {
    dir: 'assets/images',
    provider: 'netlify',
    netlify: {
      baseURL: process.env.IMAGE_URL || 'http://localhost:8080/assets/images',
      // baseURL: 'https://formester.com/assets/images',
    },
  },
  devServer: {
    port: 8080,
  },
})
