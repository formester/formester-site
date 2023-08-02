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

export default {
  components: {
    WhatMakesJotformStandOut,
    KeyFeaturesOfJotform,
    JotformPopularUseCase,
    JotformLimitations,
    WhyChooseFormester,
    ComparingJotform,
    CallToActionSection,
    FAQwithCategories,
  },
  data() {
    return {
      faqs: [
        { question: 'd', answer: 'd' },
        { question: '', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
      ],
    }
  },
}
</script>

<style></style>
