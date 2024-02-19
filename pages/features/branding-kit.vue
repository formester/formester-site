<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading" style="z-index: 2">Brand Kit</h1>
            <p class="hero__subheading mt-3" style="z-index: 2">
              Match your company branding with all online forms across your website. Formester 
              Branding Kit is designed to help you add consistent branding content on all your 
              web forms. Set up customized URL fonts, colors, and logos in minutes, then apply 
              them to your choice of form templates for a professional, fully standardized look.
            </p>
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <nuxt-img
              src="/features/brand-kit/blob.png"
              alt=""
              class="img-fluid branding blob"
            />
            <nuxt-img
              src="/features/brand-kit/brand-kit.png"
              alt="Hero-Image"
              class="img-fluid hero__image"
              style="z-index: 2"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <h2 class="section__heading text-center">How does Branding Kit help?</h2>
      <div class="row">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <ThreeStepsCreateForm />
    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '../../components/TemplateSection.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import ThreeStepsCreateForm from '../../components/ThreeStepsCreateForm.vue'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    ThreeStepsCreateForm,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/branding-kit/',
        title: 'Branding Kit | Create Brand Kit for Online Forms',
        description:
          'Boost your trust to customer by adding your brand to form.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', 
        mainImageAlt: 'Form builder showing drag and drop functionality', 
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Branding Kit | Create Brand Kit for Online Forms',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/branding-kit/',
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
          name: 'Brand Kit | Personalised Brand Form - Formester',
          description:
            'Boost your trust to customer by adding your brand to form.',
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
              name: 'Features',
              item: 'https://formester.com/features',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Brand Kit',
              item: 'https://formester.com/features/branding-kit/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      features: [
        {
          title: 'Easy Brand Setup',
          description:
            "Formester's user-friendly interface allows you to easily establish your brand identity by linking your website, which automatically sets up your brand elements such as fonts, colors, and logo. By maintaining consistency, your customers will be able to instantly recognize your brand when interacting with your forms.",
          src: 'brand-kit/easy-branding.svg',
          alt: 'Get noticed by making the email personalized',
        },
        {
          title: 'Logo Integration',
          description:
            'Seamlessly incorporate your company logo into your forms. Ensure your brand is visible and memorable, strengthening brand recognition and trust with your customers.',
          src: 'brand-kit/logo-integration.svg',
          alt: 'Email can be eaily build with auto responder',
        },
        {
          title: 'Custom Fonts and Colors',
          description:
            "Select and apply your brand's fonts and colors to maintain a consistent look and feel throughout your forms. Enhance the user experience while reinforcing your brand identity.",
          src: 'brand-kit/custom-fonts-colors.png',
          alt: 'Have a personalised respose to end user',
        },
        {
          title: 'Formester Watermark Removal',
          description:
            'Remove the Formester branding or watermark from your forms for a clean, professional appearance that fully showcases your brand. Enhance credibility and keep the focus on your own brand identity.',
          src: 'brand-kit/formester-branding-removal.svg',
          alt: 'Track your forms in real time',
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(
      Math.random() * (randomTestimonials.length - 2)
    )
    randomTestimonials = randomTestimonials.slice(randIndex, randIndex + 2)
    return { randomTestimonials }
  },
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
  position: relative;
}
.blob {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
.hero__image {
  height: 100%;
}
.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}
@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }

  .blob {
    display: none;
  }
}
</style>
