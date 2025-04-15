<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Seamless Integration</h1>
            <p class="hero__subheading mt-3">
              Collecting data is one battle won. Formester integrates with tools
              like Slack, Google Sheets and Salesforce. Send data anywhere you
              like. Getting started just takes few minutes with our pre-build
              templates.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Get Started - it's Free</a
            >
          </div>
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <nuxt-img
              src="/integration-hero.png"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="subheading my-5">Most Popular</h2>
      <div class="row py-5">
        <IntegrationCard
          :app="app"
          class="col-md-4 my-3"
          v-for="app in apps"
          :key="app.title"
        />
      </div>
    </div>
    <CallToActionSection />
  </div>
</template>

<script>
import IntegrationCard from '../components/integrations/IntegrationCard.vue'
import CallToActionSection from '../components/CallToActionSection.vue'

// MetaTags
import getSiteMeta from '../utils/getSiteMeta'

export default {
  components: {
    IntegrationCard,
    CallToActionSection,
  },
  data() {
    return {
      apps: [
        {
          name: 'Slack',
          desc: 'Slack channels will receive form submissions.',
          img: 'slack.png',
          url: '/integrations/slack/',
        },
        {
          name: 'Discord',
          desc: 'Discord will receive a notification of submission.',
          img: 'discord.png',
        },
        {
          name: 'Salesforce',
          desc: 'Manage sales, campaigns, and customer relations.',
          img: 'salesforce.png',
        },
        {
          name: 'Mailchimp',
          desc: 'Keep your email lists up to date by adding and updating contacts.',
          img: 'mailchimp.png',
        },
        {
          name: 'Google Sheets',
          desc: 'Add form data to your spreadsheet quickly.',
          img: 'google-sheets.png',
          url: '/integrations/google-sheets/',
        },
        {
          name: 'HubSpot',
          desc: 'Create new deals with new contacts in your CRM.',
          img: 'hubspot.png',
        },
        {
          name: 'Gmail',
          desc: 'Gmail integration for sending form responses as emails.',
          img: 'gmail.svg',
          url: '/integrations/gmail/'
        },
        {
          name: 'Notion',
          desc: 'Create, collaborate, and share in one place.',
          img: 'notion.png',
        },
        {
          name: 'SureTriggers',
          desc: 'Automate Your Workflow & Streamline Your Business Processes',
          img: 'suretriggers.png'
        }
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/integrations/',
        title: 'Slack Integration | Google Sheets Integration - Formester',
        description:
          'Streamline your workflow with our Slack and Google Sheets integration. Try Formester today and boost productivity in just a few clicks! Get started today.',
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Slack Integration | Google Sheets Integration - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/integrations/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Slack Integration | Google Sheets Integration - Formester',
      description:
        'Streamline your workflow with our Slack and Google Sheets integration. Try Formester today and boost productivity in just a few clicks! Get started today.',
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delaware',
        addressCountry: 'United States',
      },
    }
  },
}
</script>

<style scoped>
.feature__hero {
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}

.subheading {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 36px;
}
</style>
