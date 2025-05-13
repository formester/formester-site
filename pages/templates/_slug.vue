<template>
  <div>
    <!-- Hero section -->
    <section class="container d-flex flex-column template_hero">
      <div class="template-info">
        <h1 class="section__heading">{{ template.name }}</h1>

        <!-- New paragraph for each line break -->
        <p v-for="(line, index) in template.description.split('\n')" :key="index" class="hero__subheading">
          {{ line }}
        </p>
      </div>

      <div class="d-flex justify-content-start">
        <button class="btn btn-use_template" @click="redirectTo" >
          Use Template
        </button>
      </div>

      <iframe
        :src="template.surveyUrl"
        frameborder="0"
        width="100%"
        class="template-preview__iframe mt-3"
      />
    </section>

    <!-- About template section -->
    <section v-if="template.aboutTemplate && template.aboutTemplate.replace(/(<([^>]+)>)/gi, '').trim()" class="container py-2 py-lg-5">
      <h2 class="section__heading text-center">About this template</h2>
      <div class="about-template__description" v-html="template.aboutTemplate" />
    </section>

    <Faq v-if="!isEmpty(template.faqs)" :faqList="template.faqs" />

    <!-- More templates section -->
    <more-templates :categories="categories" :template-slug="template.slug" />
  </div>
</template>

<script>
// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
// Components
import MoreTemplates from '../../components/template/MoreTemplates.vue'
import Faq from '../../components/features/Faq.vue'
import isEmpty from 'lodash/isEmpty'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'

export default {
  components: {
    MoreTemplates,
    Faq,
  },
  async asyncData({ params, payload }) {
    // payload is used during static site generation and api call during developement
    if (payload) {
      return payload
    }
    const { templates, categories } = await getTemplatesAndCategories()
    const template = templates.find((template)=>template.slug === params.slug)
    return { template, categories }
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
      const mainEntity = (this.template.faqs || []).map((faq) => {
        return {
          '@type': 'Question',
          name: faq.question || faq.name || faq.header,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer || faq.content || faq.body,
          },
        }
      })
      return mainEntity.length > 0
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: mainEntity,
          }
        : null
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
    const jsonldData = [
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
    ]
    if (this.faqsSchema) {
      jsonldData.push(this.faqsSchema)
    }
    return jsonldData;
  },
  methods: {
    redirectTo() {
      window.open(
        `https://app.formester.com/forms/new?template_id=${this.template.id}`,
        '_blank'
      )
    },
    isEmpty,
  },
}
</script>

<style scoped>
.template_hero {
  gap: 1rem;
  margin: 2.5rem auto;
}

.template-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
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

.hero__image:hover  {
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
  background: var(--clr-primary);
  color: white;
  padding: 16px 24px;
  font-size: 16px;
}

.btn-use_template:hover {
  background: var(--clr-primary-hover);
}

.template-preview__iframe {
  height: calc(100vh - 140px);
  overflow-y: auto;
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

  .btn-use_template {
    width: 100%;
    padding: 18px;
    font-size: 16px;
  }
}
</style>
