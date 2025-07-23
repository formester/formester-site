<template>
  <div>
    <Templates
      :activeCategory="null"
      :templates="templates"
      :templateCategories="categories"
    />
    
    <!-- PDF Editor Section -->
    <div class="pdf-editor-section" v-if="pdfEditorMounted">
      <div id="pdf-editor-mount"></div>
    </div>
    
    <!-- PDF Box Custom Element Section -->
    <div class="pdf-box-section" style="margin: 20px;">
      <h3>PDF Box Custom Element</h3>
      <pdf-box 
        :data="templates[0]"
        width="800"
        height="600"
        @pdf-ready="handlePdfReady"
        @pdf-error="handlePdfError"
      >
        <!-- Fallback content if pdf-box is not loaded -->
        <div class="pdf-fallback">
          Loading PDF viewer...
        </div>
      </pdf-box>
    </div>
    
    <!-- Example: Button to initialize PDF editor -->
    <div class="pdf-controls" style="margin: 20px; text-align: center;">
      <button 
        @click="createPdfEditorInstance(templates[0])"
        :disabled="pdfEditorInitialized"
        class="btn btn-primary"
      >
        {{ pdfEditorInitialized ? 'PDF Editor Active' : 'Initialize PDF Editor' }}
      </button>
    </div>
  </div>
</template>

<script>
// MetaTags
import getSiteMeta from '@/utils/getSiteMeta'
import Templates from '@/components/template/Templates.vue'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'
import { initPdfEditor } from '@/shared/pdf-app-init.js'

export default {
  components: { Templates },
  // Register custom elements
  compilerOptions: {
    isCustomElement: (tag) => {
      const customElements = [
        "pdf-box",
      ];
      return customElements.includes(tag);
    }
  },
  data() {
    return {
      pdfEditorInitialized: false,
      pdfEditorMounted: false
    }
  },
  async asyncData({ payload }) {
    // payload is used during static site generation and api call during developement
    if (payload) {
      return payload
    }
    const { templates, categories } = await getTemplatesAndCategories()
    return { templates, categories }
  },
  mounted() {
    // Ensure custom elements are available on client side
    if (process.client) {
      // You can add any custom element initialization logic here
      console.log('Custom elements available:', ['pdf-box'])
      
      // Example: Listen for custom events from pdf-box elements
      this.$nextTick(() => {
        const pdfBoxElements = document.querySelectorAll('pdf-box')
        pdfBoxElements.forEach(element => {
          element.addEventListener('pdf-ready', this.handlePdfReady)
          element.addEventListener('pdf-error', this.handlePdfError)
        })
      })
    }
  },
  methods: {
    async initializePdfEditor(component, mountSelector = '#pdf-editor-mount') {
      if (this.pdfEditorInitialized) {
        console.log('PDF editor already initialized')
        return
      }

      try {
        // Only initialize on client side
        if (process.client) {
          await initPdfEditor(component, mountSelector)
          this.pdfEditorInitialized = true
          this.pdfEditorMounted = true
          console.log('PDF editor initialized successfully')
        }
      } catch (error) {
        console.error('Failed to initialize PDF editor:', error)
      }
    },
    
    async createPdfEditorInstance(templateData = null) {
      // Example method to create a PDF editor instance with template data
      const pdfComponent = {
        template: `
          <div class="pdf-editor-container">
            <h3>PDF Editor</h3>
            <div id="pdf-canvas-container"></div>
            <button @click="savePdf">Save PDF</button>
          </div>
        `,
        data() {
          return {
            templateData: templateData
          }
        },
        methods: {
          savePdf() {
            console.log('Saving PDF with template data:', this.templateData)
            // PDF saving logic will go here
          }
        },
        mounted() {
          console.log('PDF editor component mounted with data:', this.templateData)
        }
      }
      
      await this.initializePdfEditor(pdfComponent)
    },
    
    // Event handlers for pdf-box custom element
    handlePdfReady(event) {
      console.log('PDF box ready:', event.detail)
      // Handle when pdf-box is ready
    },
    
    handlePdfError(event) {
      console.error('PDF box error:', event.detail)
      // Handle pdf-box errors
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/templates/',
        title: 'The Formester Templates',
        description:
          'Use our Formester form templates including surveys, reviews, registrations, & more for any industry! Automate workflows with online templates.',
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
      }
      return getSiteMeta(metaData)
    },
    listItems() {
      return this.templates.map((template, index) => {
        return {
          '@type': 'ListItem',
          position: index + 1,
          url: `https://formester.com/templates/${template.slug}`,
          name: template.name,
          image: template.previewImageUrl,
          description: template.description,
        }
      })
    },
  },
  head() {
    return {
      title: 'Templates | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/templates/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Formester',
          description:
            "Sign up now for the best No-Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://formester.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'All Templates',
              item: 'https://formester.com/templates',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
