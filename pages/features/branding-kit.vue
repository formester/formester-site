<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading" style="z-index: 2;">Brand Kit</h1>
            <p class="hero__subheading mt-3" style="z-index: 2;">
              Elevate your brand identity with Formester's Brand Kit, 
              designed to help you create cohesive branded content across all your forms. 
              Set up your brand fonts, colors, and logo in minutes, then apply them to your 
              choice of form templates for a professional, fully standardized look.
            </p>
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5 "
          >
            <img 
              src="@/assets/images/features/brand-kit/blob.png"
              alt=""
              class="img-fluid branding hero__image blob"
            >
            <img
              src="@/assets/images/features/brand-kit/brand-kit.png"
              alt="Hero-Image"
              class="img-fluid hero__image"
              style="z-index: 2;"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div class="container py-5">
      <div class="row">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <Testimonial 
      :testimonials="randomTestimonials"
    />
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

export default {
  components: { FeatureDetail, CallToActionSection, Testimonial, TemplateSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/auto-responder/',
        title: 'Brand Kit | Personalised Brand form - Formester',
        description:
          'Boost your trust to customer by adding your brand to form.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Brand Kit | Personalised Brand Form - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/auto-responder/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Formester - Brand kit',
      description:
        "Sign up now for the best No Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      operatingSystem: 'all',
      browserRequirements: 'Requires Javascript and HTML5 support',
      sameAs: [
        'https://twitter.com/_formester_',
        'https://www.instagram.com/_formester_/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dalaware',
        addressCountry: 'United States',
      },
      creator: {
        '@type': 'Organization',
        '@id': '#organization',
        url: 'https://formester.com/',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      }
    }
  },
  data() {
    return {
      features: [
        {
          title: 'Easy Brand Setup',
          description: "Formester's user-friendly interface allows you to easily establish your brand identity by linking your website, which automatically sets up your brand elements such as fonts, colors, and logo. By maintaining consistency, your customers will be able to instantly recognize your brand when interacting with your forms.",
          src: 'brand-kit/easy-branding.svg',
          alt: 'Get noticed by making the email personalized'
        },
        {
          title: 'Logo Integration',
          description:
            'Seamlessly incorporate your company logo into your forms. Ensure your brand is visible and memorable, strengthening brand recognition and trust with your customers.',
          src: 'brand-kit/logo-integration.svg',
          alt: 'Email can be eaily build with auto responder'
        },
        {
          title: 'Custom Fonts and Colors',
          description: "Select and apply your brand's fonts and colors to maintain a consistent look and feel throughout your forms. Enhance the user experience while reinforcing your brand identity.",
          src: 'brand-kit/custom-fonts-colors.png',
          alt: 'Have a personalised respose to end user'
        },
        {
          title: 'Formester Watermark Removal',
          description: 'Remove the Formester branding or watermark from your forms for a clean, professional appearance that fully showcases your brand. Enhance credibility and keep the focus on your own brand identity.',
          src: 'brand-kit/formester-branding-removal.svg',
          alt: 'Track your forms in real time'
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(Math.random() * (randomTestimonials.length - 2))
    randomTestimonials = randomTestimonials.slice(randIndex,  randIndex + 2);
    return {randomTestimonials}
  },
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
  height: 100vh;
  position: relative;
}
.blob{
  position: absolute;
  right: 0;
  top: 0;
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
}
</style>
