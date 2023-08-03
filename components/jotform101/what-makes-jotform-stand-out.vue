<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        The Distinctive Power of Jotform: What Makes Jotform Stand out?
      </h2>
    </div>

    <div class="row">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="col-lg-3 col-md-4 col-sm-6 mt-5"
      >
        <div
          class="border-sm-none border-start ps-3 d-flex flex-column align-items-start"
        >
          <nuxt-img
            :src="`/jotform101/what-makes-jotform-stand-out/${feature.img}.svg`"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
          />
          <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
          <p class="subheading__text">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Form Templates',
          description:
            'Access professionally designed templates for various industries and customize them to fit your needs. As of now, Jotform has a collection of over 10K Templates!',
          img: 'form',
        },
        {
          title: 'Advanced Reporting & Data Management',
          description:
            'Jotform lets its users generate customized reports with visual analytics for in-depth data analysis. Moreover, it also offers real-time form response tracking, data export options, customizable reports, and integration with cloud storage services.',
          img: 'report',
        },
        {
          title: 'Mobile Apps',
          description:
            'Access Jotform on the go with mobile apps for iOS and Android.',
          img: 'mobile',
        },
        {
          title: 'Offline Data Collection',
          description:
            "Collect data even without an internet connection using Jotform's offline mode feature.",
          img: 'chart',
        },
        {
          title: 'Form Widgets and Apps',
          description:
            'Jotform also provides advanced widgets and apps for increasing form efficiency and functionality.',
          img: 'widgets',
        },
        {
          title: 'Form Calculations',
          description:
            'Form with Jotform can be set-up to perform real-time calculations for interactive and dynamic user experiences.',
          img: 'calculation',
        },
        {
          title: 'Payment Integration',
          description:
            'Jotform offers a way to seamlessly collect payments with a simple web-form using built-in payment gateway integrations.',
          img: 'payment',
        },
        {
          title: 'Excellent Customer Support',
          description:
            'Jotform provides reliable customer support through various channels, including a help center, community forum, an extensive blog resource and a responsive support team.!',
          img: 'support',
        },
      ],
    }
  },
}
</script>

<style scoped>
.sub__section-heading {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}

.subheading__text {
  font-size: 14px;
  line-height: 22px;
}
</style>
