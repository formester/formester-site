<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        Why Choose Formester as Your Ideal Online Form Builder?
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
            :src="`/online-form-builder/ideal-form-builder/${feature.img}.svg`"
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
          title: 'Drag-and-Drop Form Building',
          description:
            'Effortlessly design your forms by dragging and dropping elements.',
          img: 'drag-and-drop',
        },
        {
          title: 'Customization Options',
          description: "Personalize your forms to match your brand's identity.",
          img: 'customization-options',
        },
        {
          title: 'Pre-designed Templates',
          description:
            'Jump-start your form creation with a range of professionally designed templates.',
          img: 'pre-designed-templates',
        },
        {
          title: 'HTML Form Backend',
          description:
            "Simplify form integration by linking your HTML forms to Formester's endpoint for easy submissions.",
          img: 'html-form-backend',
        },
        {
          title: 'Advanced Conditional Logic',
          description:
            'Create intelligent forms that adapt based on user responses.',
          img: 'advanced-conditional-logic',
        },
        {
          title: 'Information Recall',
          description:
            'Enhance user experience by referencing previous answers.',
          img: 'information-recall',
        },
        {
          title: 'Digital Signature',
          description:
            'Incorporate e-signatures into your professional forms, with security and ease.',
          img: 'digital-signature',
        },
        {
          title: 'Smart Integrations',
          description:
            'Seamlessly connect Formester with your favorite apps and tools for streamlined data flow and enhanced functionality.',
          img: 'smart-integrations',
        },
        {
          title: 'Auto-Responders',
          description:
            'Set up automated responses to respondents, confirming their form submission.',
          img: 'auto-responders',
        },
        {
          title: 'Spam Protection',
          description:
            "Protect sensitive data with Formester's Spam Protection offering, One-click Re-Captcha, Custom Re-Captcha, Smart Filters & more!",
          img: 'spam-protection',
        },
        {
          title: 'Multi-User Collaboration',
          description:
            'Collaborate with team members in real-time, making form creation a collective effort.',
          img: 'multi-user-collaboration',
        },
        {
          title: 'Collect Online Payments',
          description:
            'Simply integrate your Formester web-form with a payment platform and start collecting payments in a matter of minutes!',
          img: 'collect-online-payments',
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
