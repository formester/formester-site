<template>
  <div class="container py-5 my-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        Key Features to Look for in an Online Form Builder
      </h2>
    </div>

    <div class="row mt-3">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="col-lg-4 col-md-6 mt-4"
      >
        <div class="feature__card p-3 d-flex flex-column align-items-center">
          <nuxt-img
            :src="`/online-form-builder/key-features/${feature.img}.svg`"
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
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Drag-and-Drop Interface',
          description:
            'A user-friendly interface that allows you to simply drag and drop form elements eliminates the need for coding skills and ensures a seamless design process.',
          img: 'drag-n-drop-interface',
        },
        {
          title: 'Customization Options',
          description:
            "Look for an Online Form Builder that offers a range of customization options, such as customizable themes, fonts, colors, and more to ensure that your forms align with your brand's identity.",
          img: 'customization-options',
        },
        {
          title: 'Responsive Design',
          description:
            "In today's mobile-driven world, responsive forms that adapt to various screen sizes are essential. Ensure that the Online Form Builder you choose automatically adjusts your forms for mobile devices.",
          img: 'responsive-design',
        },
        {
          title: 'Form Templates',
          description:
            'Choose an Online Form Builder that provides a variety of templates for different purposes, from surveys to event registrations.',
          img: 'form-templates',
        },
        {
          title: 'Data Collection',
          description:
            'Your Online Form Builder should have features that let you gather and organize responses efficiently. This includes features like data export, real-time analytics, and integrations with data management tools.',
          img: 'data-collection',
        },
        {
          title: 'Conditional Logic',
          description:
            "Show or hide questions based on respondents' previous answers to enhance the user experience and streamline the form-filling process.",
          img: 'conditional-logic',
        },
        {
          title: 'Collaboration Tools',
          description:
            'If you work in a team, collaboration features like the ability to share and edit forms with team members can be invaluable.',
          img: 'collaboration-tools',
        },
        {
          title: 'Customer Support',
          description:
            "Reliable customer support is essential, especially if you're new to using an Online Form Builder. Look for platforms that offer responsive customer service through various channels.",
          img: 'customer-support',
        },
        {
          title: 'Security Measures',
          description:
            'Your Online Form Builder should follow best practices for data encryption and protection to keep sensitive information safe.',
          img: 'security-measures',
        },
        {
          title: 'Integration Capabilities',
          description:
            'Consider an Online Form Builder that integrates with other tools you use, such as CRM systems or email marketing platforms to streamline data transfer and enhance your workflow.',
          img: 'integration-capabilities',
        },
      ],
    }
  },
}
</script>

<style scoped>
.feature__card {
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  background: #fcfcfc;
}
</style>
