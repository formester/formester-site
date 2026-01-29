// https://nuxt.com/docs/api/configuration/nuxt-config
import getRoutes, { getFeatureRoutes, getPageRoutes, getTemplateRoutes } from './utils/getRoutes.js'

export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'No-Code Online Form Builder - Formester',
      meta: [
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
      script: [
        {
          src: 'https://affonso.io/js/pixel.min.js',
          defer: true,
          async: true,
          'data-affonso': 'cmgks3gcz001h7prj3pe2h62f',
          'data-cookie_duration': '30'
        }
      ]
    }
  },

  // Robots configuration
  robots: {
    UserAgent: '*',
    Disallow: ['/_nuxt/static/', '/status/', '/api/'],
    Sitemap: 'https://formester.com/sitemap.xml'
  },

  site: {
    url: 'https://formester.com/',
    trailingSlash: true
  },

  sitemap: {
    trailingSlash: true,
    sources: [
      '/api/__sitemap__/urls'
    ],
    exclude: ['/status/**']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/bootstrap.min.css', '~/assets/css/main.css'],

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/jsonld',
    '~/plugins/notifications-client',
    '~/plugins/crisp.client.js',
    '~/plugins/consent.client.js',
    '~/plugins/bootstrap.client.js'
  ],

  // Auto import components
  components: true,

  // Modules
  modules: [
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-gtag',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    'nuxt-jsonld'
  ],

  // GTM/Gtag configuration
  gtag: {
    enabled: false, // Will be enabled after cookie consent
    id: 'GTM-5GX7R49B'
  },

  // PWA module configuration
  pwa: {
    manifest: {
      lang: 'en'
    },
    workbox: {
      maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50 MB to handle large SVGs
      globPatterns: [],
      globIgnores: ['**/_payload.json', '**/_ipx/**'],
      navigateFallback: null
    }
  },

  // Output directory configuration
  dir: {
    public: 'public'
  },

  // Nitro configuration
  nitro: {
    preset: 'static', // Force static generation instead of Netlify Functions
    sourceMap: false,
    minify: false, // Disable minification to save memory
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
      ignore: ['/api'],
      concurrency: 5, // Reduced from 15 to lower memory usage
      interval: 100, // Increased from 50 to slow down processing
      failOnError: false
    },
    hooks: {
      async 'prerender:routes'(routes) {
        const blogs = await getRoutes()
        const features = await getFeatureRoutes()
        const pages = await getPageRoutes()
        const templates = await getTemplateRoutes()

        // Extract URLs from the objects returned by route functions
        const blogUrls = blogs.map(item => item.url)
        const featureUrls = features.map(item => item.url)
        const pageUrls = pages.map(item => item.url)
        const templateUrls = templates.map(item => item.url)

        const allRoutes = [
          ...pageUrls,
          ...featureUrls,
          ...blogUrls,
          ...templateUrls,
        ].filter(Boolean)

        for (const route of allRoutes) {
          routes.add(route)
        }
      }
    }
  },
  content: {
    // Nuxt Content v2 configuration
  },

  // Nuxt Image
  image: {
    provider: 'none',  // Serve images directly from public/
    domains: [
      'formester-strapi.s3.ap-south-1.amazonaws.com',
      'img.youtube.com'
    ]
  },

  // Runtime config (replaces env)
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      strapiUrl: 'https://cms.formester.com',
      appUrl: 'https://app.formester.com',
      clarityId: 'emw9o333qb'
    }
  },

  // Disable sourcemaps to lower memory usage
  sourcemap: false,

  // Vite build tuning
  // vite: {
  //   build: {
  //     sourcemap: false,
  //     minify: false, // Disable minification to save memory
  //     chunkSizeWarningLimit: 1000, // Increase to reduce warnings
  //     rollupOptions: {
  //       output: {
  //         manualChunks: undefined // Disable manual chunking to reduce complexity
  //       }
  //     }
  //   },
  //   css: {
  //     devSourcemap: false
  //   }
  // },

  // Compatibility
  compatibilityDate: '2024-10-22'
})
