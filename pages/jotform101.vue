<template>
  <div>
    <div class="feature_container">
      <div class="feature__hero">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center align-items-center text-center mt-5"
          >
            <h1 class="section__heading pt-3">
              Jotform 101 - Your Complete Guide to Form Building and Surveys
              with Jotform!
            </h1>
            <p class="hero__subheading mt-3">
              Unlock the full potential of form building with Jotform. At
              Formester, we're committed to providing you with a comprehensive
              guide to help you navigate the world of form creation. Discover
              the features, tips, and tricks that make Jotform a top choice for
              form builders!
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-5">
            <nuxt-img
              src="/jotform101/jotform101-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>

    <KeyFeaturesOfJotform />
    <WhatMakesJotformStandOut />
    <JotformPopularUseCase />
    <JotformLimitations />
    <ComparingJotform />
    <WhyChooseFormester />
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
import KeyFeaturesOfJotform from '../components/jotform101/key-features-of-jotform.vue'
import WhatMakesJotformStandOut from '../components/jotform101/what-makes-jotform-stand-out.vue'
import JotformPopularUseCase from '../components/jotform101/popular-use-case.vue'
import JotformLimitations from '../components/jotform101/limitations.vue'
import ComparingJotform from '../components/jotform101/comparing-jotform-with-others.vue'
import WhyChooseFormester from '../components/jotform101/why-choose-formester.vue'
import CallToActionSection from '../components/CallToActionSection.vue'

import getSiteMeta from '@/utils/getSiteMeta'

export default {
  components: {
    WhatMakesJotformStandOut,
    KeyFeaturesOfJotform,
    JotformPopularUseCase,
    JotformLimitations,
    WhyChooseFormester,
    ComparingJotform,
    CallToActionSection,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/jotform101/',
        title: 'Jotform 101 | Guide to Form Building and Surveys with Jotform',
        description:
          "Discover Jotform's full potential with Formester's guide. Unlock powerful form building features, tips & tricks!",
        mainImage:
          'https://formester.com/jotform101-hero-section.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'Jotform',
          'Jotform101',
          'Complete guide to form building and surveys using Jotform',
          'web forms for customer support',
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
  },
  head() {
    return {
      title: 'Jotform 101 | Guide to Form Building and Surveys with Jotform',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/jotform101/',
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
          name: 'Jotform 101 | Guide to Form Building and Surveys with Jotform',
          description:
            "Discover Jotform's full potential with Formester's guide. Unlock powerful form building features, tips & tricks!",
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
              name: 'Jotform101 - Complete Guide to Form Building by Formester',
              item: 'https://formester.com/jotform101/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {}
  },
}
</script>

<style></style>
