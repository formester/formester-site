<template>
  <div>
    <!-- Hero section -->
    <section class="container template_hero" :class="{ 'template_hero--split': data && data.slug }">
      <!-- Non-PDF template layout (original) -->
      <template v-if="!data || !data.slug">
        <div class="d-flex flex-column">
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
            :src="template.surveyUrl"
            frameborder="0"
            width="100%"
            class="template-preview__iframe mt-3"
            loading="lazy"
          />
        </div>
      </template>

      <!-- PDF template layout (left-right split) -->
      <template v-else>
        <div class="row align-items-center">
          <!-- Left side: Content -->
          <div class="col-lg-6">
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
          </div>

          <!-- Right side: PDF Images -->
          <div class="col-lg-6">
            <div class="preview-wrapper" v-if="data && data.slug">
              <div class="preview-switch" :class="{ 'is-form': activeTab === 'form' }">
                <button
                  class="preview-tab"
                  :class="{ 'preview-tab--active': activeTab === 'pdf' }"
                  @click="activeTab = 'pdf'"
                  type="button"
                >
                  PDF Preview
                </button>
                <button
                  class="preview-tab"
                  :class="{ 'preview-tab--active': activeTab === 'form' }"
                  @click="activeTab = 'form'"
                  type="button"
                >
                  Form Preview
                </button>
                <span class="switch-indicator" aria-hidden="true"></span>
              </div>

              <div v-show="activeTab === 'pdf'" class="preview-pane">
                <img v-if="previewImages.length === 1" :src="previewImages[0].url" alt="Template Preview" class="template-preview__image">
                <div v-else-if="previewImages.length > 1" class="carousel-outer-wrapper">
                  <component
                    v-if="VueSlickCarousel"
                    :is="VueSlickCarousel"
                    ref="slick"
                    :arrows="true"
                    :dots="false"
                    :infinite="true"
                    :autoplay="false"
                    :autoplaySpeed="5000"
                    :slidesToShow="1"
                    :responsive="slickResponsive"
                    @afterChange="handleAfterChange"
                    @beforeChange="handleBeforeChange"
                  >
                    <template #prevArrow>
                      <button class="carousel-arrow left desktop-arrow" @click="goToPrev" aria-label="Previous image">
                        <img src="/arrow-left.svg" alt="Previous" class="arrow-icon" />
                      </button>
                    </template>
                    <template #nextArrow>
                      <button class="carousel-arrow right desktop-arrow" @click="goToNext" aria-label="Next image">
                        <img src="/arrow-right.svg" alt="Next" class="arrow-icon" />
                      </button>
                    </template>
                    <div
                      v-for="(image, idx) in previewImages"
                      :key="image.id || idx"
                      class="carousel-slide-inner"
                    >
                      <img :src="image.url" :alt="image.alt || 'Template Preview'" class="template-preview__image carousel-image">
                    </div>
                  </component>
                  <div class="mobile-arrows-container">
                    <button class="carousel-arrow left" @click="goToPrev" aria-label="Previous image">
                      <img src="/arrow-left.svg" alt="Previous" class="arrow-icon" />
                    </button>
                    <button class="carousel-arrow right" @click="goToNext" aria-label="Next image">
                      <img src="/arrow-right.svg" alt="Next" class="arrow-icon" />
                    </button>
                  </div>
                </div>
              </div>

              <div v-show="activeTab === 'form'" class="preview-pane">
                <iframe
                  :src="template.surveyUrl"
                  frameborder="0"
                  width="100%"
                  class="template-preview__iframe mt-3"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </template>

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

// Dynamic carousel import - only loaded when needed
const loadCarousel = async () => {
  const [{ default: VueSlickCarousel }] = await Promise.all([
    import('vue-slick-carousel'),
    import('vue-slick-carousel/dist/vue-slick-carousel.css'),
    import('vue-slick-carousel/dist/vue-slick-carousel-theme.css')
  ])
  return VueSlickCarousel
}
import isEmpty from 'lodash/isEmpty'
import getTemplatesAndCategories from '@/utils/getTemplatesAndCategories'
import axios from 'axios'

export default {
  components: {
    MoreTemplates,
    Faq,
  },
  async asyncData({ params,payload, error }) {

    if (payload) {
      return payload
    }
    //payload is used during static site generation and api call during developement

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
  data() {
    return {
      currentSlide: 0,
      totalSlides: 0,
      VueSlickCarousel: null,
      // Active preview tab when PDF preview is available
      // 'pdf' | 'form'
      activeTab: 'pdf',
      slickResponsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          },
        },
      ],
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
    previewImages() {
      if (!this.data?.previewImages) return []
      
      return this.data.previewImages.map(item => {
        // Handle different Strapi image structures
        let url = ''
        let alt = ''
        let id = item.id
        
        if (item.image?.url) {
          url = item.image.url
          alt = item.image.alternativeText || item.imageAlt || 'Template Preview'
        } else if (item.image?.data?.attributes?.url) {
          url = item.image.data.attributes.url
          alt = item.image.data.attributes.alternativeText || item.imageAlt || 'Template Preview'
        } else if (item.imageUrl) {
          url = item.imageUrl
          alt = item.imageAlt || 'Template Preview'
        }
        
        return { id, url, alt }
      }).filter(item => item.url) // Only return items with valid URLs
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
  async mounted() {
    // Load carousel component only if we have multiple preview images
    if (this.data && this.data.slug && this.previewImages.length > 1) {
      try {
        this.VueSlickCarousel = await loadCarousel()
      } catch (error) {
        console.error('Failed to load carousel component:', error)
      }
    }
  },
  methods: {
    redirectTo() {
      window.open(
        `https://app.formester.com/templates?template_id=${this.template.id}`,
        '_blank'
      )
    },
    handleAfterChange(currentSlide) {
      this.currentSlide = currentSlide
    },
    handleBeforeChange(oldIndex, newIndex) {
      this.currentSlide = newIndex
    },
    goToPrev() {
      this.$refs.slick && this.$refs.slick.prev()
    },
    goToNext() {
      this.$refs.slick && this.$refs.slick.next()
    },
    isEmpty,
  },
}
</script>

<style scoped>
.carousel-arrow.carousel-arrow.right::before
{
  display: none !important;
  content: none !important;
}

.carousel-arrow.carousel-arrow.left::before
{
  display: none !important;
  content: none !important;
}

.template-preview__image {
  margin-top: 1rem;
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Tabs */
.preview-wrapper { position: relative; padding-top: 60px; }

/* Switch-style tabs positioned absolute within the preview */
.preview-switch {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  background: #F2F4F7;
  border-radius: 9999px;
  padding: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  box-shadow: 0 2px 8px rgba(16,24,40,0.08);
  min-width: 260px;
  height: 36px;
  z-index: 3;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}

.preview-tab {
  appearance: none;
  border: 0;
  background: transparent;
  color: #667085;
  font-weight: 600;
  text-align: center;
  font-size: 12px;
  letter-spacing: .02em;
  padding: 0 12px;
  height: 28px;
  border-radius: 9999px;
  cursor: pointer;
  transition: color .2s ease;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* occupy grid cell fully to avoid overlap */
}

.preview-tab--active { color: #fff; }

.switch-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  height: calc(100% - 8px);
  width: calc(50% - 4px);
  background: #6434D0;
  border-radius: 9999px;
  transition: transform .25s ease;
  z-index: 0;
}

.preview-switch.is-form .switch-indicator { transform: translateX(100%); }

/* Uniform preview height for image and iframe */
.preview-pane {
  height: calc(100vh - 300px);
  min-height: 500px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* top align content */
  background-color: #F2F4F7;
  border-radius: 12px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
}

.preview-pane .template-preview__image {
  height: 100%;
  object-fit: contain;
  display: block;
}

.preview-pane .template-preview__iframe {
  height: 100% !important;
  margin-top: 0 !important;
  min-height: 0;
  border-radius: 12px;
}

.preview-pane .carousel-outer-wrapper { height: 100%; }
.preview-pane :deep(.slick-slider),
.preview-pane :deep(.slick-list),
.preview-pane :deep(.slick-track) { height: 100% !important; }
.preview-pane .carousel-slide-inner {
  height: 100%;
  display: flex;
  align-items: flex-start; /* top align vertically */
  justify-content: center; /* center horizontally */
}
.preview-pane .carousel-image { height: 100%; object-fit: contain; }

@media screen and (max-width: 768px) {
  .preview-pane {
    height: auto;
    min-height: 70vh; /* ensure enough height on small screens */
  }
  .preview-pane .template-preview__image,
  .preview-pane .carousel-image { height: auto !important; }
  .preview-pane .template-preview__iframe { height: 70vh !important; }
  .preview-pane .carousel-outer-wrapper { height: auto; }
  .preview-pane :deep(.slick-slider),
  .preview-pane :deep(.slick-list),
  .preview-pane :deep(.slick-track) { height: auto !important; }
}



.template_hero {
  gap: 1rem;
  margin: 2.5rem auto;
  padding-top: 6rem;
}

.template_hero--split {
  display: flex;
  flex-direction: column;
}

.template_hero--split .row {
  margin: 0;
  min-height: 60vh;
}

.template_hero--split .col-lg-6 {
  padding: 0 15px;
}

.template_hero--split .template-info {
  margin-bottom: 2rem;
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
  
  .template_hero--split .row {
    flex-direction: column;
    min-height: auto;
  }
  
  .template_hero--split .col-lg-6:first-child {
    margin-bottom: 2rem;
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

/* Carousel styles */
.carousel-outer-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto 0;
}

.carousel-slide-inner {
  box-sizing: border-box;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.carousel-arrow {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #475467;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(16, 24, 40, 0.08);
  z-index: 2;
  transition: background 0.2s;
  flex-shrink: 0;
  flex-grow: 0;
  box-sizing: border-box;
  padding: 0;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  display: block;
  margin: 0;
  flex-shrink: 0;
  flex-grow: 0;
}

.carousel-arrow:hover {
  background: #f3f4f6;
}

.carousel-arrow:focus {
  background: #fff !important;
  outline: none;
}

.carousel-arrow:active {
  background: #f3f4f6 !important;
}

.carousel-arrow.left {
  margin-right: 12px;
}

.carousel-arrow.right {
  margin-left: 12px;
}

.mobile-arrows-container {
  display: none;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
  gap: 16px;
}

@media screen and (max-width: 768px) {
  .desktop-arrow {
    display: none;
  }
  .mobile-arrows-container {
    display: flex;
  }
  .carousel-arrow {
    width: 64px;
    height: 64px;
  }
  .arrow-icon {
    width: 24px;
    height: 24px;
  }
}

:deep(.slick-list) {
  overflow: hidden !important;
  padding-bottom: 32px !important;
  padding-top: 32px !important;
}

:deep(.slick-dots) {
  display: flex !important;
  justify-content: center;
  margin-top: 24px;
  list-style: none;
}

:deep(.slick-dots li) {
  margin: 0 4px;
  padding: 0;
}

:deep(.slick-dots button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e5e7eb;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  font-size: 0;
  color: transparent;
  outline: none;
  box-shadow: none;
}

:deep(.slick-dots button:before) {
  display: none !important;
}

:deep(.slick-dots .slick-active button) {
  background: #6434D0;
  transform: scale(1.2);
}

</style>
