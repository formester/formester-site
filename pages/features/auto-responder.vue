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
            <h3 class="section__heading">Auto Responder</h3>
            <p class="hero__subheading mt-3">
              The first response is critical to any business. Formester makes it
              dead easy to respond to any form submission. With our
              autoresponder, you can send personalised emails to your customers.
              Do all this while not looking like a bot. We guarantee to make you
              look human.
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
              src="@/assets/images/features/auto-responder-illus.png"
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

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>