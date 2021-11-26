<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="
              col-lg-5
              d-flex
              flex-column
              justify-content-center
              align-items-lg-start align-items-center
              text-center text-lg-start
              mt-xl-0 mt-5
            "
          >
            <h1 class="section__heading">HTML Form Backend</h1>
            <p class="hero__subheading mt-3">
              Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Create Your Form</a
            >
          </div>
          <div
            class="
              col-lg-7
              d-flex
              align-items-center
              justify-content-center
              mt-lg-0 mt-5
            "
          >
            <img
              src="@/assets/images/features/easy-web-form.png"
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

export default {
  components: { FeatureDetail, CallToActionSection },
  head: {
    title: 'Formester | HTML Form Backend',
    meta: [
      { 
        hid: 'og:title', 
        name: 'og:title', 
        content: 'Formester | HTML Form Backend' 
      },
      { 
        hid: 'twitter:title', 
        name: 'twitter:title', 
        content: 'Formester | HTML Form Backend' 
      },
      { 
        hid: 'og:site_name', 
        name: 'og:site_name', 
        content: 'Formester | HTML Form Backend' 
      },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.' 
      },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: 'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.' 
      },
      { 
        hid: 'twitter:description', 
        name: 'twitter:description', 
        content: 'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.' 
      },
    ],
    link: [{ rel: 'canonical', href: 'https://formester.com/features/html-form-backend' }]
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
            'Never worry about your form not looking perfect like your website. With Formester you have everything under control. Style the forms and make it look the way you want it. No embedding or JavaScript required.',
          src: 'control-illus.png',
        },
        {
          title: 'Easy Embedding',
          description:
            'If you are looking a form that just works out of the box, Formester is for you. Just copy our snippet and get started. It takes less than 5 minutes to make a working form on your website.',
          src: 'embedding-illus.png',
        },
        {
          title: 'Realtime Notification',
          description:
            'Get a real-time notification on form submission. Stay on top of your business. You can configure Formester to notify you on Slack, Gmail or anywhere else.',
          src: 'notification.png',
        },
        {
          title: 'Export/Import',
          description:
            'You own your data. We offer zero friction data import and export. If you decide to move on you can take everything with you. We also offer guided migration from other tools. Our team will do the work for you.',
          src: 'export-illus.png',
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