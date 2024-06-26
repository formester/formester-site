<template>
  <div>
    <!-- Hero section -->
    <section
      class="container d-flex flex-column-reverse flex-lg-row template_hero"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5 hero__info_container"
      >
        <h1 class="section__heading">{{ template.name }}</h1>
        <p class="hero__subheading mt-3">
          {{ template.description }}
        </p>
        <div class="btns-container d-flex align-items-center mt-2">
          <button class="btn btn-use_template" @click="redirectTo">
            Use Template
          </button>
          <button class="btn btn-preview_template" @click="openPreviewModal">
            Preview Template
          </button>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-center mt-lg-0 mt-4 hero__image_container"
        @click="openPreviewModal"
      >
        <img
          :src="template.previewImageUrl"
          alt="Hero-Image"
          class="img-fluid hero__image rounded pointer"
        />

        <div class="template__preview-btn d-flex align-itens-center">
          <nuxt-img src="/eye-icon.svg" alt="template preview button" />
          <span class="template__preview-btn__text">Preview</span>
        </div>
      </div>
    </section>

    <Faq v-if="!isEmpty(template.faqs)" :faqs="template.faqs" />

    <!-- More templates section -->
    <more-templates :categories="categories" :template-slug="template.slug" />

    <!-- Preview Template Modal -->
    <template-preview-modal
      :showPreviewModal="showPreviewModal"
      :template="template"
      @close-modal="closePreviewModal"
      @redirect-to="redirectTo"
    />
  </div>
</template>

<script>
// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
// Components
import PreviewModal from '../../components/template/PreviewModal.vue'
import MoreTemplates from '../../components/template/MoreTemplates.vue'
import Faq from '../../components/template/Faq.vue'
import isEmpty from 'lodash/isEmpty'

export default {
  components: {
    'template-preview-modal': PreviewModal,
    MoreTemplates,
    Faq,
  },
  async asyncData({ $axios, params }) {
    let { data: template } = await $axios.get(
      `https://app.formester.com/templates/${params.slug}.json`
    )

    const { data: categories } = await $axios.get(
      'https://app.formester.com/template_categories.json'
    )

    const dummyDescription =
      'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

    template = {
      ...template,
      description: template.description || dummyDescription,
    }
    return { template, categories }
  },
  data() {
    return {
      showPreviewModal: false,
    }
  },
  computed: {
    meta() {
      const { name, description, metaTitle, metaDescription, previewImageUrl } =
        this.template || {}

      const metaData = {
        type: 'website',
        url: `https://formester.com/templates/${this.$route.params.slug}/`,
        title: metaTitle || name || 'Form Template | Formester',
        description:
          metaDescription ||
          description ||
          "Explore Formester's no-code form templates! Create surveys, gather feedback, and manage events effortlessly. Simplify form building now!",
        mainImage:
          previewImageUrl ||
          'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Template',
      }
      return getSiteMeta(metaData)
    },
    faqsSchema() {
      return (this.template.faqs || []).map((faq) => {
        return {
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        }
      })
    },
  },
  head() {
    const { name, keywords } = this.template || {}
    return {
      title: name ? `${name} | Formester` : 'Formester',
      meta: [
        ...this.meta,
        {
          name: 'keywords',
          content: keywords,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://formester.com/templates/${this.$route.params.slug}/`,
        },
      ],
    }
  },
  jsonld() {
    const { name, description, previewImageUrl, category } = this.template || {}
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: name,
        description: description,
        image: previewImageUrl,
        url: `https://formester.com/templates/${this.$route.params.slug}/`,
        mainEntity: {
          '@type': 'CreativeWork',
          name: name,
          description: description,
          image: previewImageUrl,
          url: `https://formester.com/templates/${this.$route.params.slug}/`,
          author: {
            '@type': 'Organization',
            name: 'Formester',
            url: 'https://formester.com/',
          },
        },
        isPartOf: {
          '@type': 'CollectionPage',
          name: category?.name,
          url: `https://formester.com/templates/categories/${category?.slug}/`,
          description:
            'Browse our collection of Research Form templates for free.',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        ...(this.faqSchema ? { mainEntitty: this.faqSchema } : {}),
      },
    ]
  },
  methods: {
    redirectTo() {
      window.open(
        `https://app.formester.com/forms/new?template_id=${this.template.id}`,
        '_blank'
      )
    },
    openPreviewModal() {
      this.showPreviewModal = true
      document.body.style.overflow = 'hidden' //to hide page scrollbar
    },
    closePreviewModal() {
      this.showPreviewModal = false
      document.body.style.overflow = 'auto' //to add page scrollbar
    },
    isEmpty,
  },
}
</script>

<style scoped>
.template_hero {
  gap: 2rem;
  margin: 6.5rem auto;
}

.hero__info_container {
  flex: 0.85;
}

.hero__image_container {
  position: relative;
  flex: 1;
}

.hero__image {
  transition: all 0.3s ease-in;
}
.hero__image:hover {
  filter: blur(1px) brightness(40%);
}

.template__preview-btn {
  pointer-events: none;
  opacity: 0;
  gap: 6px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
  color: #fff;
}
.hero__image:hover + .template__preview-btn {
  opacity: 1;
}

.btns-container {
  gap: 1rem;
}

.btn {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  transition: all 0.2s ease-out;
}
.btn-use_template {
  background: #4f3895;
  color: white;
}

.btn-use_template:hover {
  background: #4f3895eb;
}

.btn-preview_template {
  background: transparent;
  border: 1px solid #4f3895;
  color: #4f3895;
}

.btn-preview_template:hover {
  background: #eee8ff47;
}

@media only screen and (max-width: 991px) {
  .template_hero {
    margin: 1rem auto 5rem;
  }
}

@media only screen and (max-width: 600px) {
  .btns-container {
    gap: 1.5rem;
    flex-direction: column;
    width: 100%;
  }

  .btn-use_template,
  .btn-preview_template {
    width: 100%;
    padding: 18px;
    font-size: 16px;
  }
}
</style>
