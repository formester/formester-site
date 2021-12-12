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
              mt-xl-0 mt-md-5
            "
          >
            <h1 class="section__heading">Auto Responder</h1>
            <p class="hero__subheading mt-3">
              Respond to the customer as soon as you get a form submission. Personalised emails are easy to create with our intuitive email builder with an option to use your official email to improve delivery and conversion.
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
              src="@/assets/images/features/auto-responder-message.svg"
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
    title: 'Formester | Personalised Email Responder',
    meta: [
      { 
        hid: 'og:title', 
        name: 'og:title', 
        content: 'Formester | Personalised Email Responder' 
      },
      { 
        hid: 'twitter:title', 
        name: 'twitter:title', 
        content: 'Formester | Personalised Email Responder' 
      },
      { 
        hid: 'og:site_name', 
        name: 'og:site_name', 
        content: 'Formester | Personalised Email Responder' 
      },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Respond to the customer as soon as you get a form submission. Personalised emails are easy to create with our intuitive email builder with an option to use your official email to improve delivery and conversion.' 
      },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: 'Respond to the customer as soon as you get a form submission. Personalised emails are easy to create with our intuitive email builder with an option to use your official email to improve delivery and conversion.' 
      },
      { 
        hid: 'twitter:description', 
        name: 'twitter:description', 
        content: 'Respond to the customer as soon as you get a form submission. Personalised emails are easy to create with our intuitive email builder with an option to use your official email to improve delivery and conversion.' 
      },
    ],
    link: [{ rel: 'canonical', href: 'https://formester.com/features/auto-responder' }]
  },
  jsonld() {
    return {}
  },
  data() {
    return {
      features: [
        {
          title: 'White Label',
          description:
            'We make your email look humane. All emails are delivered using your official email address. Look more professional without all the hassles.',
          src: 'white-label-illus.png',
        },
        {
          title: 'Easy Email Builder',
          description:
            'Creating beautiful response has never been simpler. Our easy to use editor enables you to write powerful content. Add images, links or videos in a matter of click.',
          src: 'easy-email-builder-illus.png',
        },
        {
          title: 'Personalised Response',
          description:
            'Getting attention is difficult as every brand fights for users attention. Personalisation can increase your chance of engaging users. Use fields from your form to make your email more relevant.',
          src: 'personalised-response-illus.png',
        },
        {
          title: 'Realtime Tracking',
          description:
            'Monitor how people are reacting to your response. Analyse useful metrics like open rate and link clicks to get insights into users behaviour. Use this data to make changes to your communication.',
          src: 'realtime-tracking-illus.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
}

.hero__image {
  height: 100%;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>