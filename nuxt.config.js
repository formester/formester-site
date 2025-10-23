// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
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
    // Custom Javascript
    script: [
      {
        src: '/bootstrap.min.js',
        defer: true,
        async: true,
      },
      {
        src: 'https://affonso.io/js/pixel.min.js',
        defer: true,
        async: true,
        "data-affonso": "cmgks3gcz001h7prj3pe2h62f",
        "data-cookie_duration": "30"
      }
    ]
    }
  },

  // Robots configuration
  robots: {
    UserAgent: '*',
    Disallow: ['/_nuxt/static/']
  },

  site: {
    url: 'https://formester.com'
  },

  sitemap: {
    trailingSlash: true,
    sources: [
      '/api/__sitemap__/urls'
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/bootstrap.min.css', '~/assets/css/main.css'],

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/jsonld',
    '~/plugins/notifications-client',
    '~/plugins/crisp.client.js',
    '~/plugins/consent.client.js'
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
    'nuxt-schema-org'
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
      globPatterns: ['**/*.{js,css,html,png,svg,ico,jpg,jpeg,webp}'],
      globIgnores: ['**/_payload.json', '**/_ipx/**']
    }
  },

  // Nitro configuration (replaces generate)
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/api'],
      concurrency: 15,
      interval: 50,
      failOnError: false
    },
    hooks: {
      async 'prerender:routes'(ctx) {
        const axios = (await import('axios')).default
        
        try {
          // Fetch all templates ONCE (like Nuxt 2)
          const { data: templates } = await axios.get(
            'https://app.formester.com/templates.json',
            { params: { with_details: true }, timeout: 30000 }
          )
          
          // Fetch categories
          const { data: categoriesData } = await axios.get(
            'https://app.formester.com/template_categories/grouped_by_category.json',
            { timeout: 30000 }
          )
          
          // Add all template routes
          templates.forEach(t => {
            ctx.routes.add(`/templates/${t.slug}`)
          })
          
          // Add all category routes
          categoriesData.forEach(c => {
            ctx.routes.add(`/templates/categories/${c.categorySlug}`)
          })
          
          // Add main templates page
          ctx.routes.add('/templates')
          
          console.log(`Added ${templates.length} templates + ${categoriesData.length} categories to prerender`)
        } catch (error) {
          console.error('Error fetching routes:', error.message)
        }
      }
    }
  },
  content: {
    // Nuxt Content v2 configuration
  },

  // Nuxt Image
  image: {
    dir: 'assets/images',
    domains: [
      'formester-strapi.s3.ap-south-1.amazonaws.com',
      'img.youtube.com'
    ],
    provider: 'ipx',
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    }
  },

  // Runtime config (replaces env)
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      strapiUrl: 'https://cms.formester.com',
      clarityId: 'emw9o333qb'
    }
  },

  // Compatibility
  compatibilityDate: '2024-10-22'
})
