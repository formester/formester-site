// https://nuxt.com/docs/api/configuration/nuxt-config
import { getFeatureRoutes, getPageRoutes } from './utils/getRoutes.js'
import { STRAPI_URL, APP_URL } from './constants/urls'

// Nuxt Studio (visual/form editor for content/*.json) is a LOCAL-ONLY,
// opt-in dev tool — never enabled in the production static build. Set
// STUDIO_ENABLED=true in your local .env to turn it on for `nuxt dev`.
// Do NOT set this in Amplify/Netlify/CI env vars: @nuxthub/core (which
// backs Studio's S3 media picker) is incompatible with `nuxt generate`
// and will hard-fail the static build if enabled there.
const studioEnabled = process.env.STUDIO_ENABLED === 'true'

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
    'nuxt-jsonld',
    // @nuxthub/core + nuxt-studio: local-only editing tools, gated behind
    // studioEnabled (see comment above). Never loaded for the production
    // static build. @nuxthub/core must load before nuxt-studio — it
    // provides the blob storage binding Studio's external-media mode
    // writes uploads through.
    ...(studioEnabled ? ['@nuxthub/core', 'nuxt-studio'] : [])
  ],

  // NuxtHub blob storage — backs Studio's media picker so uploads go
  // straight to S3 instead of the repo's /public dir. Same S3 bucket
  // pattern the CMS already uses today (@strapi/provider-upload-aws-s3),
  // just a different upload path into it. Requires S3_* env vars — see
  // .env.example. Only meaningful when studioEnabled (module not loaded
  // otherwise).
  ...(studioEnabled && {
    hub: {
      blob: true
    },

    // Nuxt Studio — self-hosted visual/form editor for content/*.json,
    // reading the schemas in content.config.ts to render real per-field
    // forms (see plans/session-handoff.md for the full research notes).
    studio: {
      media: {
        external: true
      }
    }
  }),

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
      ignore: ['/api', '/blog', '/templates', '/comparison-tool'],
      concurrency: 15, // Increased: pages now render from in-memory cache
      interval: 10, // Reduced: minimal API I/O with batch caching
      failOnError: false
    },
    hooks: {
      async 'prerender:routes'(routes) {
        // Blog and templates are skipped for now — still Strapi-backed,
        // migrated in a later phase (see plans/nuxt-content-migration.md).
        const features = await getFeatureRoutes()
        const pages = await getPageRoutes()

        const featureUrls = features.map(item => item.url)
        const pageUrls = pages.map(item => item.url)

        const allRoutes = [...pageUrls, ...featureUrls].filter(Boolean)

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
