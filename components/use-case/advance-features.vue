<template>
  <div class="feature__hero">
    <div class="container py-5 my-3">
      <h2 class="section__heading text-center">
        Advanced Features for Your Software & Tech Business
      </h2>
      <div
        class="d-flex align-items-center justify-content-center toggler__container mx-auto mt-4"
      >
        <span
          v-for="(feature, index) in computedFeatures[0]"
          :key="index"
          class="toggler__button"
          :class="activeIndex === index ? 'active' : ''"
          @click="setActive(index)"
          >{{ feature.heading }}</span
        >
      </div>
      <div
        class="d-flex align-items-center justify-content-center toggler__container mx-auto mt-3"
      >
        <span
          v-for="(feature, index) in computedFeatures[1]"
          :key="5 + index"
          class="toggler__button"
          :class="activeIndex === 5 + index ? 'active' : ''"
          @click="setActive(5 + index)"
          >{{ feature.heading }}</span
        >
      </div>
      <div
        class="d-flex align-items-center toggler__container mobile mx-auto mt-4"
      >
        <span
          v-for="(feature, index) in features"
          :key="index"
          class="toggler__button"
          :class="activeIndex === index ? 'active' : ''"
          @click="setActive(index)"
          >{{ feature.heading }}</span
        >
      </div>
      <div class="row py-3">
        <div
          class="col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-5"
        >
          <h3 class="feature__heading">
            {{ features[activeIndex].heading }}
          </h3>
          <p class="feature__description mt-3">
            {{ features[activeIndex].description }}
          </p>
        </div>
        <div
          class="col-lg-5 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
        >
          <nuxt-img
            :src="`/features/${features[activeIndex].img}.svg`"
            alt="Hero-Image"
            class="img-fluid feature__img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      features: [
        {
          heading: 'HTML Form Backend',
          description:
            'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
          img: 'html-form',
        },
        {
          heading: 'Auto Responder',
          description:
            'Send personalised replies automatically to your customers on form submission. Emails are easy to create using our intuitive email builder. You can also customise the emails to go from your personal email account.',
          img: 'auto-responder',
        },
        {
          heading: 'Spam Protection',
          description:
            'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
          img: 'spam-protection',
        },
        {
          heading: 'Powerful Analytics',
          description:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          img: 'powerful-analytics',
        },
        {
          heading: 'Conditional Logic',
          description:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          img: 'conditional-logic',
        },
        {
          heading: 'Digital Signature',
          description:
            'Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.',
          img: 'digital-signature',
        },
        {
          heading: 'Powerful Analytics',
          description:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          img: 'powerful-analytics',
        },
        {
          heading: 'Conditional Logic',
          description:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          img: 'conditional-logic',
        },
        {
          heading: 'Digital Signature',
          description:
            'Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.',
          img: 'digital-signature',
        },
      ],
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    },
  },
  computed: {
    computedFeatures() {
      const cf = []
      const featuresCopy = [...this.features]
      while (featuresCopy.length) {
        cf.push(featuresCopy.splice(0, 5))
      }
      return cf
    },
  },
}
</script>
<style scoped>
.toggler__container {
  padding: 8px 12px;
  gap: 16px;
  border-radius: 32px;
  background: #f9f0ff;
  max-width: 1052px;
}

.toggler__container.mobile {
  display: none !important;
}

.toggler__button {
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  padding: 8px 12px;
  border-radius: 32px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.toggler__button.active {
  background: white;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.05) inset;
}

/* .section__heading,
  .section__description,
  .section__img {
    transition: opacity 300ms ease-in-out;
  } */

.feature__heading {
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
}

@media screen and (max-width: 992px) {
  .toggler__container {
    padding: 8px;
    overflow-x: auto;
    white-space: nowrap;
    display: none !important;
  }

  .toggler__container.mobile {
    display: block !important;
  }

  .toggler__button {
    font-size: 12px;
    padding: 8px;
  }
}
</style>
