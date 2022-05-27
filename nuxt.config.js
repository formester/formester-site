import getRoutes from "./utils/getRoutes";
import getSiteMeta from "./utils/getSiteMeta";

const meta = getSiteMeta();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Formester | HTML Form Backend & Form Builder',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Twitter
      {
        name: 'twitter:site',
        content: '@_formester_'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Formester'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://formester.com",
      },
    ],
    // Custom Javascript
    script: [
      {
        src: '/bootstrap.min.js',
        defer: true,
        async: true
      },
    ],
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  sitemap: {
    hostname: 'https://formester.com',
    routes() {
      return getRoutes();
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/main.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/jsonld'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-99986844-1'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // For catching 404 pages
  generate: {
    fallback: true
  },
  content: {
    liveEdit: false
  },
}
