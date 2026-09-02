// https://nuxt.com/docs/api/configuration/nuxt-config
import getBlogRoutes, { getPageRoutes, getTemplateRoutes } from './utils/getRoutes.js'
import { STRAPI_URL, APP_URL } from './constants/urls'

// Vercel sets DEPLOY_ENV to 'production' only for the prod deployment/domain;
// preview/test deploys (plain `vercel`, no --prod) get 'preview' or 'development'.
const isProductionDeploy = process.env?.DEPLOY_ENV !== 'DEVELOPMENT'

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
          content: isProductionDeploy ? 'index, follow' : 'noindex, nofollow',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Default per-route canonical lives in app.vue (a static href here
        // would canonicalize every page without its own tag to the homepage).
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
  robots: isProductionDeploy
    ? {
        UserAgent: '*',
        Disallow: ['/_nuxt/static/', '/status/', '/api/'],
        Sitemap: 'https://formester.com/sitemap.xml'
      }
    : {
        UserAgent: '*',
        Disallow: ['/']
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
    exclude: ['/status/**', '/design-preview']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/design-tokens.css', '~/assets/css/bootstrap.min.css', '~/assets/css/main.css'],

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
    '@nuxtjs/sitemap',
    '@nuxt/content',
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
      // Lower via PRERENDER_CONCURRENCY on memory-constrained machines —
      // e.g. a 6.7GB-RAM local dev box OOM'd at the default 16 with
      // --max-old-space-size=4096 (needed for the full blog+templates
      // build); each concurrent render holds its own fetched/rendered data,
      // so fewer in flight at once directly lowers peak memory.
      // Set PRERENDER_CONCURRENCY=4 locally; leave unset in CI (more RAM).
      concurrency: Number(process.env.PRERENDER_CONCURRENCY) || 16,
      interval: 10, // Reduced: minimal API I/O with batch caching
      failOnError: false
    },
    // Nitro's prerender payload cache (internal:nuxt:prerender:payload) has no
    // default disk mount, so it falls back to the in-memory storage driver and
    // retains EVERY prerendered route's payload for the whole build with no
    // eviction — a known Nitro issue (unjs/nitro#1480/#1535) that shows up as
    // heap climbing linearly with route count on large static builds. Mounting
    // it to fs spills that cache to disk instead of RAM.
    storage: {
      'internal:nuxt:prerender:payload': { driver: 'fs', base: '.data/prerender-payload-cache' }
    },
    hooks: {
      async 'prerender:routes'(routes) {
        const pages = await getPageRoutes()
        const blogs = await getBlogRoutes()
        const templates = await getTemplateRoutes()

        const pageUrls = pages.map(item => item.url)
        const blogUrls = blogs.map(item => item.url)
        const templateUrls = templates.map(item => item.url)

        const allRoutes = [
          ...pageUrls,
          ...blogUrls,
          ...templateUrls
        ].filter(Boolean)

        for (const route of allRoutes) {
          routes.add(route)
        }
      }
    }
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
      strapiUrl: STRAPI_URL,
      appUrl: APP_URL,
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
  compatibilityDate: '2024-10-22',

  $development: {
    experimental: {
      defaults: {
        useAsyncData: {
          getCachedData: () => undefined,
        },
      },
    },
  },
})
