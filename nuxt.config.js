import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const axios = require('axios')
const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'No-Code Online Form Builder - Formester',
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
      let categories = Object.values(response)
        .flat()
        .map((category) => {
          return `/templates/categories/${category.slug}`
        })
      const blogs = await getRoutes()
      return [...blogs, ...templates, ...categories]
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/bootstrap.min.css', '~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/jsonld',
    { src: '~/plugins/notifications-client', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'UA-99986844-1',
    //   },
    // ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // '@nuxthq/studio',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
  ],

  // GTM configuration
  gtm: {
    enabled: true,
    id: 'GTM-56W9ZCR',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

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
        let categoriesRoute = Object.values(response)
          .flat()
          .map((category) => {
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
  },

  // Nuxt Image
  image: {
    dir: 'assets/images',
    providers: {
      ipx: {
        provider: 'ipx',
        options: {
          baseURL: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/'
        }
      }
    },
    domains: ['formester-strapi.s3.ap-south-1.amazonaws.com'],
  },

  // Enviornment variable for the base url of the app
  env: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    strapiUrl: 'http://localhost:1337',
  },
}
