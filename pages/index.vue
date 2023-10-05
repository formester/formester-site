<template>
  <div>
    <Hero />
    <TrustSeals />
    <div class="iframe__container mx-auto position-relative">
      <iframe
        src="https://app.formester.com/f/6ce3db7a-94a3-48a3-8f00-d16395847a13"
        height="100%"
        width="100%"
      ></iframe>
      <nuxt-img
        src="see-for-yourself.svg"
        class="see-for-yourself position-absolute"
      />
    </div>
    <Testimonials />
    <FeatureToggle :features="features" :sectionHeading="sectionHeading" />
    <HowItWorks />
    <CallToActionSection />
  </div>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import TrustSeals from '../components/home/TrustSeals.vue'
import Testimonials from '../components/home/Testimonials.vue'
import HowItWorks from '../components/home/HowItWorks.vue'
import FeatureToggle from '../components/FeatureToggle.vue'

export default {
  components: {
    Hero,
    TrustSeals,
    Testimonials,
    HowItWorks,
    FeatureToggle,
  },
  data() {
    return {
      sectionHeading: 'Most Used Features',
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
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          defer: true,
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Formester',
          description:
            'Build online forms using a No-Code, Drag-and-Drop Form Builder - Starts Free! Advanced Features, Third-Party Integrations & Robust Analytics!',
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          sameAs: [
            'https://www.facebook.com/formester/',
            'https://twitter.com/_formester_',
            'https://www.instagram.com/_formester_/',
            'https://www.linkedin.com/company/formester-inc/',
            'https://www.producthunt.com/products/formester',
            'https://www.softwareadvice.com/forms-automation/formester-profile/',
            'https://www.capterra.com/p/166904/Formester/',
            'https://www.getapp.com/website-ecommerce-software/a/formester/',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
          creator: {
            '@type': 'Organization',
            '@id': '#organization',
            url: 'https://formester.com/',
            name: 'Formester',
            logo: {
              '@type': 'ImageObject',
              url: 'https://formester.com/logo.png',
            },
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://formester.com',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.iframe__container {
  width: min(90%, 1200px);
  height: 600px;
  border-radius: 8px;
  border: 4px solid #eee8ff;
  margin-top: 148px;
  margin-bottom: 48px;
}

.see-for-yourself {
  top: -14%;
  right: 20%;
  animation: pulse 4s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@media screen and (max-width: 768px) {
  .see-for-yourself {
    top: -14%;
    right: 5%;
    animation: pulse 4s infinite;
  }
}
</style>
