<template>
  <div>
    <div class="feature_container">
      <div class="feature__hero">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center align-items-start mt-5"
            >
              <h1 class="section__heading pt-3">
                Online Form Builders for
                <span class="hglt">Powerful</span> form-building
              </h1>
              <p class="hero__subheading">
                Effective data collection and management for businesses and
                individuals alike. Transform your data-collection process &
                derive valuable insights!
              </p>
              <a
                href="https://app.formester.com/users/sign_up"
                class="btn button hero__button mt-4 mb-4 mb-lg-0"
                >Create Form for Free</a
              >
            </div>
            <div
              class="col-lg-6 d-flex align-items-center justify-content-center mt-5"
            >
              <nuxt-img
                src="/online-form-builder/online-form-builder.svg"
                alt="Hero-Image"
                class="img-fluid hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <KeyFeaturesForOnlineFormBuilder />
    <IdealFormBuilder />
    <BestPracticesCraftingCompellingOnlineForms />
    <ChooseRightOnlineFormBuilder />
    <FormBuilderComparisionTable
      heading="Comparision of Leading Form Builders"
    />
    <Testimonial :testimonials="randomTestimonials" />
    <FAQwithCategories :categories="categories" />
    <CallToActionSection
      :content="{
        heading: 'Start Your Formester Journey Today',
        subheading:
          'Start with a Free Sign up and experience the power of Formester firsthand',
      }"
    />
  </div>
</template>

<script>
import KeyFeaturesForOnlineFormBuilder from '../components/online-form-builder/key-features.vue'
import IdealFormBuilder from '../components/online-form-builder/ideal-form-builder.vue'
import BestPracticesCraftingCompellingOnlineForms from '../components/online-form-builder/best-practices-crafting-compelling-online-forms.vue'
import FormBuilderComparisionTable from '../components/form-builders-comparision-table.vue'
import CallToActionSection from '../components/CallToActionSection.vue'
import FAQwithCategories from '../components/FAQwithCategories.vue'
import ChooseRightOnlineFormBuilder from '../components/online-form-builder/choose-right-online-form-builder.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'

import getSiteMeta from '@/utils/getSiteMeta'
import onlineFormBuilderFaqs from '@/faqs/online-form-builder-faqs.js'
import { fetchRandomTestimonials } from '@/utils/getTestimonials.js'

export default {
  components: {
    KeyFeaturesForOnlineFormBuilder,
    IdealFormBuilder,
    BestPracticesCraftingCompellingOnlineForms,
    FormBuilderComparisionTable,
    CallToActionSection,
    FAQwithCategories,
    Testimonial,
    ChooseRightOnlineFormBuilder,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/online-form-builder/',
        title: 'Online Form Builders for powerful form-building',
        description:
          'Effective data collection and management for businesses and individuals alike. Transform your data-collection process & derive valuable insights!',
        mainImage:
          'https://formester.com/online-form-builder-hero-screenshot.png',
        mainImageAlt: 'Form builder showing drag and drop functionality',
        keywords: [
          'Online Form',
          'Online Form Builder',
          'Online Form Builders for powerful form-building',
          'Form Building',
          'web forms productivity',
          'form builder',
          'formester',
          'online forms',
          'online web forms',
          'formester web forms',
          'form creator',
          'form generator',
          'online form',
          'web form',
          'online forms',
          'web forms',
          'create form',
          'create forms',
          'frequently asked questions',
          'FAQ',
        ],
      }
      return getSiteMeta(metaData)
    },
    faqsSchema() {
      const allFaqs = []

      this.categories.forEach((c) => {
        if (c.faqs) {
          allFaqs.push(...c.faqs)
        }
      })

      // Generate the FAQ schema
      return allFaqs.map((faq) => {
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
    return {
      title: 'Online Form Builders for powerful form-building',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/online-form-builder/',
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
          name: 'Online Form Builders for powerful form-building',
          description:
            'Effective data collection and management for businesses and individuals alike. Transform your data-collection process & derive valuable insights!',
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
              name: 'Formester',
              item: 'https://formester.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Online Form Builders for powerful form-building',
              item: 'https://formester.com/online-form-builder/',
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: this.faqsSchema,
        },
      ],
    }
  },
  data() {
    return {
      categories: onlineFormBuilderFaqs,
    }
  },
  async asyncData() {
    const randomTestimonials = await fetchRandomTestimonials()
    return { randomTestimonials }
  },
}
</script>

<style scoped></style>
