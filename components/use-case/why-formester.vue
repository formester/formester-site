<template>
  <div class="container py-5 mt-5">
    <div class="heading d-flex flex-column align-items-center text-center">
      <h2 class="section__heading">
        Why Formester?: Experience the Form-Building Edge
      </h2>
    </div>

    <div class="row">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="col-lg-3 col-md-4 col-sm-6 mt-5"
      >
        <div
          class="border-custom-start ps-3 d-flex flex-column align-items-start"
        >
          <nuxt-img
            :src="`/use-case/why-formester/${feature.img}.png`"
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
          title: 'Effortless Automation for Software Businesses',
          description:
            "Harness the power of Formester's no-code workflows to eliminate manual work, automate processes, and scale your software business effortlessly. Say goodbye to tedious tasks and focus on what truly matters – innovation and growth.",
          img: 'automation',
        },
        {
          title: 'All-in-One Solution for Seamless Operations',
          description:
            'Formester offers an all-in-one platform to create engaging forms and surveys, populate collected data into custom documents, and collect eSignatures. Simplify your workflows and access all the essential tools in one bundled platform.',
          img: 'all-in-one-solution',
        },
        {
          title: 'Quick Setup, No Coding Required',
          description:
            'With intuitive drag-and-drop tools, you can transform ideas into solutions within minutes. Formester empowers everyone in your organization, regardless of their technical skills or coding knowledge, to create impactful forms without any hassle.',
          img: 'setup',
        },
        {
          title: 'Efficient Internal Workflows',
          description:
            "Eliminate hours of manual work with Formester's automation capabilities. Streamline internal workflows across various departments, from operations and marketing to hiring and onboarding. Let automation handle the repetitive tasks while your team focuses on strategic initiatives.",
          img: 'workflow',
        },
        {
          title: 'Seamless Collaboration',
          description:
            'Formester enables seamless collaboration with flexible sub-account options and user permissions. Whether your team is working together in the office or remotely, they can easily view, build, and collaborate on workflows, ensuring efficient and cohesive teamwork.',
          img: 'collaboration',
        },
        {
          title: 'Integration with Essential Apps',
          description:
            'Connect Formester with your favorite business tools to enhance productivity and streamline processes. Seamlessly integrate with popular CRMs like Salesforce and HubSpot, storage apps like Google Drive and Dropbox, and more.',
          img: 'integration',
        },
        {
          title: 'Data Security and Compliance',
          description:
            'Formester prioritizes the security of your data. Benefit from encryption, secure SSL connections, and data centers compliant with industry standards. Automate your processes without compromising data security.',
          img: 'compliance',
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

.border-custom-start {
  border-left: 1px #f1f1f1 solid;
}
</style>
