<template>
  <div>
    <!-- Hero section -->
    <section class="container d-flex flex-column template_hero">
      <div class="template-info">
        <h1 class="section__heading">{{ template.name }}</h1>

        <!-- New paragraph for each line break -->
        <p
          v-for="(line, index) in template.description.split('\n')"
          :key="index"
          class="hero__subheading"
        >
          {{ line }}
        </p>
      </div>

      <div class="d-flex justify-content-start">
        <button class="btn btn-use_template" @click="redirectTo">
          Use Template
        </button>
      </div>

      <iframe
      v-if="!data || !data.slug"
        :src="template.surveyUrl"
        frameborder="0"
        width="100%"
        class="template-preview__iframe mt-3"
        loading="lazy"
      />

      <div v-else>
        <img v-if="previewImageUrl" :src="previewImageUrl" alt="Template Preview" class="template-preview__image">
      </div>

    </section>

    <!-- About template section -->
    <section
      v-if="
        template.aboutTemplate &&
        template.aboutTemplate.replace(/(<([^>]+)>)/gi, '').trim()
      "
      class="container py-2 py-lg-5"
    >
      <h2 class="section__heading text-center">About this template</h2>
      <div
        class="about-template__description"
        v-html="template.aboutTemplate"
      />
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
const MoreTemplates = () => import('../../components/template/MoreTemplates.vue')
const Faq = () => import('../../components/features/Faq.vue')
import isEmpty from 'lodash/isEmpty'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'
import axios from 'axios'

export default {
  components: {
    MoreTemplates,
    Faq,
  },
  async asyncData({ params,  error }) {
    // payload is used during static site generation and api call during developement

    // if (payload) {
    //   return payload
    // }

    try {
      const slug = params.slug    
      // First, get templates and categories from the main API
      const { templates, categories } = await getTemplatesAndCategories()
      const template = templates.find((template) => template.slug === slug)
      
      if (!template) {
        error({ statusCode: 404, message: 'Template not found' })
        return
      }

    const {
      data: { data },
    } = await axios.get(`${process.env.strapiUrl}/api/pdf-templates`, {
    params: {
      'filters[slug][$eqi]': slug,
      populate: 'deep',
    },
  })      
      return { template, categories, data: data[0] }
    } catch (err) {
      console.error('Error in asyncData:', err)
      error({ statusCode: 500, message: 'Internal Server Error' })
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
    previewImageUrl() {
      return (
        this.data?.previewImages?.[0]?.image?.url ?? ''
      );
    },
    faqsSchema() {
      const mainEntity = (this.template.faqs || []).map((faq) => {
        return {
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
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
    return jsonldData
  },
  methods: {
    redirectTo() {
      window.open(
        `https://app.formester.com/templates?template_id=${this.template.id}`,
        '_blank'
      )
    },
    isEmpty,
  },
}
</script>

<style scoped>
.template-preview__image {
  margin-top: 1rem;
  width: 100%;
  height: auto;
}


.template_hero {
  gap: 1rem;
  margin: 2.5rem auto;
  padding-top: 6rem;
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

.hero__image:hover {
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
  min-height: 600px;
  height: calc(100vh - 140px);
  overflow-y: auto;
  display: block;
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
<style>
/* About template description styling */
.about-template__description {
  padding: 2rem 0;
  min-height: 100px;
}

.about-template__description h1,
.about-template__description h2,
.about-template__description h3,
.about-template__description h4,
.about-template__description h5,
.about-template__description h6 {
  margin: 1.5rem 0;
  line-height: 1.3;
  font-weight: 600;
}

.about-template__description h1:first-child,
.about-template__description h2:first-child,
.about-template__description h3:first-child,
.about-template__description h4:first-child,
.about-template__description h5:first-child,
.about-template__description h6:first-child {
  margin-top: 0;
}

.about-template__description h1 {
  font-size: 2.25rem;
  margin: 3rem 0 2rem 0;
}

.about-template__description h2 {
  font-size: 1.875rem;
  margin: 2.5rem 0 1.5rem 0;
}

.about-template__description h3 {
  font-size: 1.5rem;
  margin: 2rem 0 1.25rem 0;
}

.about-template__description h4 {
  font-size: 1.25rem;
  margin: 1.75rem 0 1rem 0;
}

.about-template__description h5 {
  font-size: 1.125rem;
  margin: 1.5rem 0 0.75rem 0;
}

.about-template__description h6 {
  font-size: 1rem;
  margin: 1.25rem 0 0.75rem 0;
}

.about-template__description p {
  margin: 1.25rem 0;
  line-height: 1.7;
}

.about-template__description p:first-child {
  margin-top: 0;
}

.about-template__description p:last-child {
  margin-bottom: 0;
}

.about-template__description a {
  text-decoration: underline;
  transition: opacity 0.2s ease;
}

.about-template__description a:hover {
  opacity: 0.8;
}

.about-template__description ul,
.about-template__description ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.about-template__description ul ul,
.about-template__description ol ol,
.about-template__description ul ol,
.about-template__description ol ul {
  margin: 0.5rem 0;
}

.about-template__description li {
  margin: 0.75rem 0;
  line-height: 1.6;
}

.about-template__description li:first-child {
  margin-top: 0;
}

.about-template__description li:last-child {
  margin-bottom: 0;
}

.about-template__description hr {
  margin: 3rem 0;
  border: none;
  height: 1px;
  background-color: #e0e0e0;
}

@media only screen and (max-width: 600px) {
  .about-template__description {
    padding: 1.5rem 0;
  }

  .about-template__description h1 {
    font-size: 1.75rem;
  }

  .about-template__description h2 {
    font-size: 1.5rem;
  }

  .about-template__description h3 {
    font-size: 1.25rem;
  }

  .about-template__description ul,
  .about-template__description ol {
    padding-left: 1.5rem;
  }
}
</style>
