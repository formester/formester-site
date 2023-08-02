<template>
  <div class="container py-5 my-5">
    <div class="row">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">Key Features of Jotform</h2>
      </div>

      <div class="row mt-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="col-lg-4 col-md-6 mt-4"
        >
          <div class="feature__card p-3 d-flex flex-column align-items-center">
            <nuxt-img
              :src="`/jotform101/key-features/${feature.img}.svg`"
              class="img-fluid"
              :alt="feature.altText"
              loading="lazy"
            />
            <div class="text-start">
              <h4 class="sub__section-heading mt-4">{{ feature.title }}</h4>
              <p class="subheading__text">{{ feature.description }}</p>
            </div>
          </div>
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
          title: 'Customization Options',
          description:
            'With Jotform, users get the option to customize their forms to match their brand and design preferences.',
          img: 'customization-options',
        },
        {
          title: 'Simplified Form Building',
          description:
            'Jotform lets its users create professional forms effortlessly with an intuitive and user-friendly interface. No coding knowledge required!',
          img: 'simplified-form-building',
        },
        {
          title: 'Variety of Form Fields',
          description:
            'Jotform offers a wide range of form field options such as multiple choice, dropdowns, checkboxes, and file uploads.',
          img: 'variety-of-form-fields',
        },
        {
          title: 'Integrations',
          description:
            'Jotform integrates seamlessly with popular third-party apps and services.',
          img: 'integrations',
        },
        {
          title: 'Mobile Responsiveness',
          description:
            "Jotform's forms are mobile-friendly and adapt to different screen sizes, providing an optimal user experience.",
          img: 'mobile-responsiveness',
        },
        {
          title: 'Collaboration and Sharing',
          description:
            "Jotform's forms are mobile-friendly and adapt to different screen sizes, providing an optimal user experience.",
          img: 'collaboration-and-sharing',
        },
        {
          title: 'Workflow Automation',
          description:
            "Jotform's workflow automation capabilities include setting up email notifications, autoresponders, and conditional actions to improve efficiency and automate repetitive tasks.",
          img: 'workflow-automation',
        },
        {
          title: 'Security and Compliance',
          description:
            'Jotform prioritizes the security of user data and provides features like SSL encryption, GDPR compliance, and HIPAA compliance for handling sensitive information securely.',
          img: 'security-and-compliance',
        },
      ],
    }
  },
}
</script>

<style scoped>
.feature__card {
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1),
    0px 4px 8px 0px rgba(0, 0, 0, 0.05);
}
</style>
