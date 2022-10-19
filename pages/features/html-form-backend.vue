<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">HTML Form Backend</h1>
            <p class="hero__subheading mt-3">
              Making your HTML forms work has never been more straightforward.
              Just point your form to our endpoint and start getting submissions
              in a matter of minutes. As a power user, you get complete control
              over the look and feel of your web form.
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
              src="@/assets/images/features/html-form-backend/easy-web-form.svg"
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
        url: 'https://formester.com/features/html-form-backend/',
        title: 'HTML Form Backend | Formester',
        description:
          'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with Html Form Backend page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with Html Form Backend page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'HTML Form Backend | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/html-form-backend/',
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
          title: 'Complete Control',
          description:
            'For those who like to take control, never again worry about your form not blending perfectly with your website. You do the styling and use our form endpoint to start receiving submissions.',
          src: 'html-form-backend/control-illus.svg',
        },
        {
          title: 'Easy Embedding',
          description:
            'Have a form up and running on your website quickly and with minimal coding. Select an existing template, modify it to match your brand theme, add your required data fields and paste our link on your webpage. Simple?',
          src: 'html-form-backend/embedding-illus.svg',
        },
        {
          title: 'Realtime Notification',
          description:
            "On new submissions, Formester ensures that you get informed in real-time for you to stay on top of what's essential for your business. Notifications are delivered where they matter - Slack, email or 100+ apps.",
          src: 'html-form-backend/notification.svg',
        },
        {
          title: 'Own Your Data',
          description:
            'We offer zero-friction data import & export. If you decide to move on, you can take everything with you. We also provide guided migration from other tools. Our team will ensure the transition is seamless.',
          src: 'html-form-backend/export-illus.svg',
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
