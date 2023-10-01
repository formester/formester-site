import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const axios = require('axios')
const meta = getSiteMeta()

export default defineNuxtConfig({
// Global page headers: https://go.nuxtjs.dev/config-head
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

  router: {
    trailingSlash: true,
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  sitemap: {
    hostname: 'https://formester.com',
    trailingSlash: true,
    routes: async () => {
      let { data } = await axios.get('https://app.formester.com/templates.json')
      let templates = data.map((template) => {
        return {
          url: `/templates/${template.slug}`,
        }
      })
      let { data: response } = await axios.get(
        'https://app.formester.com/template_categories.json'
      )
      let categories = response.map((category) => {
        return `/templates/categories/${category.slug}`
      })
      const blogs = await getRoutes()
      return blogs.concat(templates, categories)
    },
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
  ],
  pwa: {
    workbox: {
      enabled: true
    }
  },
  // Hooks configuration - https://content.nuxtjs.org/advanced/
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const stats = require('remark-reading-time')(document.text)
        document.readingStats = stats
      }
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

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
  image: {
    dir: 'assets/images',
    provider: 'netlify',
    netlify: {
      baseURl: process.env.IMAGES_URL
    }
  },
  // Enviornment variable for the base url of the app
  env: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  },
  devServer: {
    port: 8080,
  },
})
