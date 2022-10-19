<template>
  <div class="container mt-3">
    <h2 class="text-center section__heading">
      Most Used <span class="hglt">Features</span>
    </h2>
    <div class="row my-2">
      <FeatureCard
        v-for="feature in features"
        :key="feature.heading"
        class="col-md-6 my-3"
        :feature="feature"
      />
    </div>
  </div>
</template>

<script>
import Section from '@/components/Section.vue'
import FeatureCard from './FeatureCard.vue'

export default {
  components: {
    Section,
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          heading: 'Online <span class="hglt">Form Builder</span>',
          content:
            'Create surveys, registration forms and more with our form builder. Drag and drop interface and instant live preview to test what you create. 100+ preexisting templates to choose from and customize to make them your own.',
          imgName: 'formbuilder.svg',
          alt: 'A survey form created using Formester',
        },
        {
          heading: '<span class="hglt">HTML</span> Form Backend',
          content:
            'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
          imgName: 'webforms.svg',
          alt: 'A survey form using Formester form backend as service',
        },
        {
          heading: 'Personalised <span class="hglt">Email Responder</span>',
          content:
            'Respond to the customer as soon as you get a form submission. Personalised emails are easy to create with our intuitive email builder with an option to use your official email to improve delivery and conversion.',
          imgName: 'autoresponse.svg',
          alt: 'Formester autorespond feature which replies to submissions automatically',
        },
        {
          heading: '<span class="hglt">Spam</span> Protection',
          content:
            'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
          imgName: 'spam-protection.svg',
          alt: 'Protect against spams using Formester',
        },
        {
          heading: '<span class="hglt">Cloud</span> Integration',
          content:
            'Connect your form with Slack, Google Sheets, Salesforce or anything else with our Zapier integration. Use our webhooks to notify any other app when a submission arrives. Create flows that solve your business needs.',
          imgName: 'integrations.svg',
          alt: 'Online tools which Formester integrates with',
        },
        {
          heading: '<span class="hglt">Powerful</span> Analytics',
          content:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          imgName: 'analytics.svg',
          alt: 'Monitor performance and open rates for your survey forms in Formester',
        },
      ],
    }
  },
}
</script>

<style>
.features {
  font-size: calc(0.8rem + 0.6vw);
  font-weight: 500;
  color: var(--clr-primary);
  letter-spacing: 2%;
  line-height: 1.5;
}
.hglt {
  color: var(--clr-primary);
}
</style>
