<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">Conditional Logic</h1>
            <p class="hero__subheading mt-3">
              Creating a form has never been simpler. Just point your form to
              our endpoint and start getting submissions in a matter of minutes.
              If you are a power user you get complete control over how the form
              looks.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Get Started - it's Free</a
            >
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <img
              src="@/assets/images/features/conditional-logic/conditional-logic.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="section__heading text-center">How does Conditional Logic help?</h2>
      <div class="row py-5">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <ThreeStepsCreateForm />
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
        url: 'https://formester.com/features/conditional-logic/',
        title: 'Conditional Logic Forms Builder - Formester',
        description:
          "Easily create custom forms with Conditional Logic Forms Builder - Formester. Get started today and optimize your website's lead generation!",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with conditional page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with conditional page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Conditional Logic Forms Builder - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/conditional-logic/',
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
          name: 'Conditional Logic Forms Builder - Formester',
          description:
            "Easily create custom forms with Conditional Logic Forms Builder - Formester. Get started today and optimize your website's lead generation!",
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
              name: 'Conditional Logic',
              item: 'https://formester.com/features/conditional-logic/',
            }
          ],
        },
      ],
    }
  },
  data() {
    return {
      features: [
        {
          title: 'Skip to other pages',
          description:
            "In order to collect the most accurate data for your research, you can ask questions that don't apply to each user, allowing them to skip irrelevant pages in your survey.",
          src: 'conditional-logic/skip-to-other-pages.svg',
        },
        {
          title: 'Skip to follow up questions',
          description:
            'For best results, allow your respondents to skip irrelevant questions in your survey.',
          src: 'conditional-logic/skip-to-follow-up-questions.svg',
        },
        {
          title: 'Skip Logic',
          description:
            'Display only the questions your respondents must answer. You simply need to specify the conditions and choose the fields to hide from the drop-down list.',
          src: 'conditional-logic/skip-logic.svg',
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
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}
</style>
