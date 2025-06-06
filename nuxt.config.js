import getRoutes, { getFeatureRoutes, getPageRoutes } from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'
import getTemplatesAndCategories from './utils/getTemplatesAndCategories'

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

  router: {},

  robots: {
    UserAgent: '*',
    Disallow: ['/_nuxt/static/'],
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
      const features = await getFeatureRoutes()
      const pages = await getPageRoutes()
      const sitemap = [
        ...pages,
        ...features,
        ...blogs,
        ...templates,
        ...categories,
      ]
      return sitemap
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
    id: 'GTM-5GX7R49B',
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
  //   For catching 404 pages
  generate: {
    routes: async () => {
      try {
        const { templateRoutes, categorieRoutes } =
          await getTemplatesAndCategories()
        const featureRoutes = await getFeatureRoutes()
        const pageRoutes = await getPageRoutes()
        return [
          ...pageRoutes,
          ...featureRoutes,
          ...templateRoutes,
          ...categorieRoutes,
        ]
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
    domains: [
      'formester-strapi.s3.ap-south-1.amazonaws.com',
      'img.youtube.com',
    ],
  },

  // Enviornment variable for the base url of the app
  env: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    strapiUrl: 'https://cms.formester.com',
  },
}
