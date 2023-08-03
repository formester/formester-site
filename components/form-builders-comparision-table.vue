<template>
  <section class="container text-center py-5 my-3">
    <h2 class="section__heading">
      {{ heading }}
    </h2>
    <div class="table-responsive mt-5">
      <table class="table text-start comparision__table mx-auto">
        <thead class="comparsion__table-header">
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <nuxt-img src="/form-building-platforms/jotform.svg" />
            </th>
            <th scope="col">
              <nuxt-img src="/form-building-platforms/typeform.svg" />
            </th>
            <th scope="col">
              <nuxt-img src="/form-building-platforms/formester.svg" />
            </th>
            <th scope="col">
              <nuxt-img src="/form-building-platforms/formstack.svg" />
            </th>
            <th scope="col">
              <nuxt-img src="/form-building-platforms/paperform.svg" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in comparisons" :key="c[0]">
            <td style="font-weight: 600" v-html="c.title"></td>
            <td v-html="c.jotform"></td>
            <td v-html="c.typeform"></td>
            <td v-html="c.formester"></td>
            <td v-html="c.formstack"></td>
            <td v-html="c.paperform"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
    }
  },
  data() {
    return {
      comparisons: [
        {
          title: 'Ease of Use',
          jotform: 'User-Friendly Interface, Drag-and-Drop Functionality',
          typeform: 'Intuitive, Simple Interface',
          formester: 'Easy-to-Use, Intuitive Interface',
          formstack: 'User-Friendly, Easy to Navigate',
          paperform: 'Simple and User-Friendly Interface',
        },
        {
          title: 'Customization Options',
          jotform: 'Highly Customizable, Flexible Design Options',
          typeform: 'Limited Customization Options',
          formester:
            'Extensive Options for Customization, Versatile Design Capabilities',
          formstack: 'Customizable, Limited Design Options',
          paperform: 'Versatile Customization, Wide Range of Design Options',
        },
        {
          title: 'Form Templates',
          jotform: 'Wide Range of Templates',
          typeform: 'Limited Form Templates',
          formester: 'Professionally Designed Form Templates',
          formstack: 'Limited Form Templates',
          paperform: 'Wide Range of Templates',
        },
        {
          title: 'Payment Integration',
          jotform: 'Built-in Payment Integration, Seamless Transactions',
          typeform: 'Limited Payment Integration',
          formester: 'Integrated Payment Solutions',
          formstack: 'Extensive Payment Integration',
          paperform: 'Integrated Payment Solutions',
        },
        {
          title: 'Reporting and Analytics',
          jotform: 'Customizable Reports, Advanced Analytics',
          typeform: 'Basic Analytics',
          formester: 'Advanced Analytics',
          formstack: 'Limited Reporting',
          paperform: 'Customizable Reports, Data Analysis',
        },
        {
          title: 'Conditional Logic',
          jotform: 'Dynamic Forms with Conditional Logic',
          typeform: 'Limited Conditional Logic',
          formester:
            'Smart Forms with Conditional Logic & Dynamic Calculation Fields',
          formstack: 'Conditional Logic only',
          paperform: 'Conditional Rules only',
        },
        {
          title: 'Mobile Responsiveness',
          jotform: 'Mobile-Friendly Forms, Responsive Design',
          typeform: 'Limited Mobile Responsiveness',
          formester: 'Responsive Design, Mobile-Optimized Forms',
          formstack: 'Mobile Optimization',
          paperform: 'Mobile-Friendly',
        },
        {
          title: 'Data Collection and Management',
          jotform: 'Robust Data Collection, Data Management Tools',
          typeform: 'Basic Data Collection',
          formester: 'Efficient Data Handling, Real-time Data Capture',
          formstack: 'Data Management Features',
          paperform: 'Real-time Data Capture, Data Security Measures',
        },
        {
          title: 'Security and Compliance',
          jotform: 'SSL Encryption, Compliance Features',
          typeform: 'Limited Security',
          formester: 'Secure Handling with Compliance Features',
          formstack: 'Compliance Features',
          paperform: 'Data Security Measures',
        },
        {
          title: 'Collaboration and Workflow',
          jotform: 'Team Collaboration, Workflow Automation',
          typeform: 'Limited Collaboration',
          formester: 'Seamless Collaboration, Streamlined Workflows',
          formstack: 'Collaborative Tools, Workflow Automation',
          paperform: 'Easy Team Collaboration, Efficient Automation',
        },
        {
          title: 'File Upload Functionality',
          jotform: 'File Upload Feature',
          typeform: 'Limited File Uploads',
          formester: 'File Management & File Upload Capability',
          formstack: 'File Upload Feature',
          paperform: 'File Upload Capability',
        },
        {
          title: 'Pricing Options',
          jotform: 'Various Pricing Options',
          typeform: 'Limited Plans',
          formester: 'Affordable Packages - Starts free!',
          formstack: 'Pricing Options',
          paperform: 'Flexible Pricing',
        },
        {
          title: 'Customer Support',
          jotform: 'Dedicated Support',
          typeform: 'Limited Support',
          formester: 'Multiple Support Services - Chat, Email & Contact Form',
          formstack: 'Contact Form for Support',
          paperform: 'Email for Support',
        },
        {
          title: 'Integrations',
          jotform: 'Extensive Integrations',
          typeform: 'Limited Integrations',
          formester: 'Seamless Integrations',
          formstack: 'Limited Integration Options',
          paperform: 'Complex Integration',
        },
        {
          title: 'Pricing',
          jotform: 'Starts free for upto 5 Forms and 100 submissions per month',
          typeform:
            'Starts Free for Unlimited Forms but only 10 submissions per month',
          formester:
            'Starts Free for upto 10 Forms and 100 submissions per month',
          formstack: 'A Free 14 day Trial',
          paperform:
            'Starts at $20 for Unlimited Forms and 1000 submissions per month',
        },
      ],
    }
  },
}
</script>

<style scoped>
.comparision__table td {
  font-size: 14px;
}

.comparision__table > :not(:last-child) > :last-child > * {
  border-bottom-color: #e4e4e4;
}
</style>
