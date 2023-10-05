<template>
  <div class="feature__hero">
    <div class="container py-5 my-3">
      <h2 class="section__heading text-center">
        Most Used <span class="hglt">Features</span>
      </h2>
      <FeatureToggle :features="features" />
    </div>
  </div>
</template>

<script>
import FeatureToggle from '../FeatureToggle.vue'
export default {
  components: {
    FeatureToggle,
  },
  data() {
    return {
      activeIndex: 0,
      features: [
        {
          heading: 'Online Form Builder',
          content:
            'Create surveys, registration forms and more with our form builder. Drag and drop interface and instant live preview to test what you create. 100+ preexisting templates to choose from and customize to make them your own.',
          imgName: 'home/formbuilder',
          alt: 'A survey form created using Formester',
        },
        {
          heading: 'HTML Form Backend',
          content:
            'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
          imgName: 'home/webforms',
          alt: 'A survey form using Formester form backend as service',
        },
        {
          heading: 'Personalised Email Responder',
          content:
            'Respond to the customer as soon as you get a form submission. Personalised emails are easy to create with our intuitive email builder with an option to use your official email to improve delivery and conversion.',
          imgName: 'home/autoresponse',
          alt: 'Formester autorespond feature which replies to submissions automatically',
        },
        {
          heading: 'Spam Protection',
          content:
            'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
          imgName: 'home/spam-protection',
          alt: 'Protect against spams using Formester',
        },
        {
          heading: 'Cloud Integration',
          content:
            'Connect your form with Slack, Google Sheets, Salesforce or anything else with our Zapier integration. Use our webhooks to notify any other app when a submission arrives. Create flows that solve your business needs.',
          imgName: 'home/integrations',
          alt: 'Online tools which Formester integrates with',
        },
        {
          heading: 'Powerful Analytics',
          content:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          imgName: 'home/analytics',
          alt: 'Monitor performance and open rates for your survey forms in Formester',
        },
        {
          heading: 'Conditional Logic',
          content:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          imgName: 'home/condition',
          alt: 'Monitor performance and open rates for your survey forms in Formester',
        },
        {
          heading: 'Collaboration',
          content:
            "Form sharing for effective collaboration and efficient team-work! Unite your team, gather valuable feedback, and unlock the true potential of form building with Formester's powerful in-built Collaboration/Add Collaborators feature!",
          imgName: 'home/invite-collab',
          alt: 'Monitor performance and open rates for your survey forms in Formester',
        },
      ],
    }
  },
}
</script>
<style scoped>
.hglt {
  color: var(--clr-primary);
}
</style>
