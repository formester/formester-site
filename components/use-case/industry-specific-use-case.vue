<template>
  <div class="container py-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">Industry-Specific Use-Cases</h2>
    </div>

    <div class="row mt-4">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="col-lg-3 col-md-6"
      >
        <div class="p-3 d-flex flex-column align-items-center">
          <nuxt-img
            :src="`/use-case/industry-specific-use-case/${feature.img}.svg`"
            class="img-fluid"
            :alt="feature.altText"
            loading="lazy"
            sizes="100vw"
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
          title: 'Streamlined Customer Onboarding',
          description:
            "Simplify software user onboarding with Formester's custom Onboarding forms to collect essential information such as user preferences and software requirements, ensuring a seamless and personalized experience for new customers.",
          img: 'streamlined-customer-onboarding',
        },
        {
          title: 'Efficient Bug Reporting and User Support',
          description:
            "Streamline bug reporting and user support processes with Formester's tailored forms, providing a seamless way for users to report problems, track their status, and receive timely assistance for efficient resolution of software issues and user queries.",
          img: 'efficient-bug-reporting-and-user-support',
        },
        {
          title: 'Product Feedback and Feature Requests',
          description:
            "Gather valuable insights and prioritize software updates with Formester's interactive forms, empowering users to provide feedback and submit feature requests for your software.",
          img: 'product-feedback-and-feature-requests',
        },
        {
          title: 'Lead Generation and CRM Integration',
          description:
            "Capture high-quality leads with Formester's lead generation forms and seamlessly integrate with CRM systems to nurture prospects and drive business growth.",
          img: 'lead-generation-and-crm-integration',
        },
        {
          title: 'Software Demo Requests',
          description:
            "Simplify the software demo scheduling process by utilizing Formester's forms to collect user information and preferred demo dates and times, ensuring efficient scheduling.",
          img: 'software-demo-requests',
        },
        {
          title: 'User Surveys and Feedback',
          description:
            "Gain a deep understanding of user experiences and enhance software usability through Formester's user surveys and feedback forms.",
          img: 'user-surveys-and-feedback',
        },
        {
          title: 'Software Purchase and Order Forms',
          description:
            "Facilitate seamless software purchases and orders with Formester's customizable forms, ensuring a smooth transaction process for customers.",
          img: 'software-purchase-and-order-forms',
        },
        {
          title: 'Software Renewal Reminders',
          description:
            "Automate software renewal reminders using Formester's personalized forms, ensuring timely subscription renewals and reducing churn.",
          img: 'software-renewal-reminders',
        },
        {
          title: 'Software Feature Adoption Surveys',
          description:
            "Measure the adoption and effectiveness of software features with Formester's targeted surveys, enabling data-driven decision-making for feature enhancements.",
          img: 'software-feature-adoption-surveys',
        },
        {
          title: 'Software Beta Testing',
          description:
            "Conduct beta testing programs with Formester's dedicated forms, allowing users to participate as beta testers and provide valuable feedback for software improvements.",
          img: 'software-beta-testing',
        },
        {
          title: 'Software License Compliance',
          description:
            "Ensure compliance with software licensing agreements by leveraging Formester's forms to collect user information, validate licenses, and monitor software usage.",
          img: 'software-license-compliance',
        },
        {
          title: 'Software Survey Research',
          description:
            "Conduct market research and gather insights on software industry trends, user preferences, and competitive analysis with Formester's survey solutions, enabling informed business decisions and effective software development strategies.",
          img: 'software-survey-research',
        },
      ],
    }
  },
}
</script>

<style scoped>
.sub__section-heading {
  font-size: 22px;
  font-weight: 600;
}

.subheading__text {
  font-size: 16px;
  line-height: 24px;
  color: #525252;
}
</style>
