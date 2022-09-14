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
              >Create Your Form</a
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
      <div class="row py-5">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: { FeatureDetail, CallToActionSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/conditional-logic/',
        title: 'Conditional Logic | Formester',
        description:
          'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with conditional page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with conditional page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Conditional Logic | Formester',
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
    return {}
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
}
</script>

<style scoped>
.feature__hero {
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}
</style>
