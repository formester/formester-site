<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Save Hours With Powerful Form Integrations</h1>
            <p class="hero__subheading mt-3">
              Connect your forms to the tools you already use and automate work in minutes instead of hours.
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
      <h2 class="subheading">Most Popular</h2>
      <div class="integrations-grid">
        <IntegrationCard
          :app="app"
          v-for="app in apps"
          :key="app.title"
        />
      </div>
    </div>
    <CallToActionSection />
  </div>
</template>

<script setup>
import IntegrationCard from '../components/integrations/IntegrationCard.vue'
import CallToActionSection from '../components/CallToActionSection.vue'
import getSiteMeta from '../utils/getSiteMeta'

const apps = [
  {
    name: 'Gmail',
    desc: 'Send Gmail emails from your forms using your own address.',
    img: 'gmail.svg',
    helpArticle: 'https://help.formester.com/en/article/gmail-integration-1few8o6/'
  },
  {
    name: 'Outlook',
    desc: 'Send Outlook emails from your forms using your own SMTP.',
    img: 'ms_outlook.svg',
    helpArticle: 'https://help.formester.com/en/article/outlook-integration-15xqo0y/'
  },
  {
    name: 'Sendgrid',
    desc: 'Send branded emails from forms using your Sendgrid.',
    img: 'sendgrid.svg',
    helpArticle: 'https://help.formester.com/en/article/sendgrid-integration-1ny64j6/'
  },
  {
    name: 'Mailgun',
    desc: 'Deliver personalized form emails using Mailgun.',
    img: 'mailgun.svg',
    helpArticle: 'https://help.formester.com/en/article/mailgun-integration-u3twqq/'
  },
  {
    name: 'Amazon SES',
    desc: 'Send reliable form emails at scale using Amazon SES.',
    img: 'aws-ses.svg',
    helpArticle: 'https://help.formester.com/en/article/amazon-ses-integration-1lkthw1/'
  },
  {
    name: 'Stripe',
    desc: 'Collect secure Stripe payments directly inside your forms for free.',
    img: 'stripe.svg',
    helpArticle: 'https://help.formester.com/en/article/stripe-1nl4445/'
  },
  {
    name: 'Paypal',
    desc: 'Accept Paypal payments easily from users directly through your forms.',
    img: 'paypal.svg',
    helpArticle: 'https://help.formester.com/en/article/paypal-1we03oc/'
  },
  {
    name: 'Facebook Pixel',
    desc: 'Track form views and actions using Meta Pixel integration.',
    img: 'pixel.png',
    helpArticle: 'https://help.formester.com/en/article/facebook-pixel-integration-13frtsc/'
  },
  {
    name: 'Google Sheets',
    desc: 'Sync every form submission to Google Sheets in real time.',
    img: 'google-sheets.png',
    helpArticle: 'https://help.formester.com/en/article/google-sheets-integration-qd98d2/'
  },
  {
    name: 'Hubspot CRM',
    desc: 'Push new form leads to Hubspot CRM instantly.',
    img: 'hubspot.png',
    helpArticle: 'https://help.formester.com/en/article/hubspot-crm-integration-7n4t91/'
  },
  {
    name: 'Slack',
    desc: 'Get instant Slack alerts when a new form is submitted.',
    img: 'slack.png',
    helpArticle: 'https://help.formester.com/en/article/slack-integration-aierxk/'
  },
  {
    name: 'Trustedform',
    desc: 'Certify and validate your leads automatically with TrustedForm.',
    img: 'trustedform.png',
    helpArticle: 'https://help.formester.com/en/article/trustedform-certification-1l5d7fb/'
  },
  {
    name: 'Calendly',
    desc: 'Let users book meetings through forms using Calendly.',
    img: 'calendly.svg',
    helpArticle: 'https://help.formester.com/en/article/calendly-integration-11ultwz/'
  },
  {
    name: 'Google Tag Manager',
    desc: 'Add GTM tags to forms and connect to 100+ analytics tools.',
    img: 'gtm.svg',
    helpArticle: 'https://help.formester.com/en/article/connect-to-google-tag-manager-gtm-1cet3i4/'
  },
  {
    name: 'Google Analytics',
    desc: 'Track form events and user behavior in real time.',
    img: 'analytics.svg',
    helpArticle: 'https://help.formester.com/en/article/connect-to-google-analytics-ga4-16a8ewf/'
  },
  {
    name: 'Webhook',
    desc: 'Send form data to any tool instantly using webhooks.',
    img: 'webhook.svg',
    helpArticle: 'https://help.formester.com/en/article/webhook-integration-16fqoqp/'
  },
  {
    name: 'reCAPTCHA',
    desc: 'Stop spam form submissions with built in reCAPTCHA.',
    img: 'recaptcha.svg',
    helpArticle: 'https://help.formester.com/en/article/recaptcha-69gwfq/'
  },
  {
    name: 'Cloudflare Turnstile',
    desc: 'Block spam while keeping forms fast and user friendly.',
    img: 'turnstile.svg',
    helpArticle: 'https://help.formester.com/en/article/cloudflare-turnstile-1822z2p/'
  },
  {
    name: 'Google Forms',
    desc: 'Copy your Google Forms in seconds.',
    img: 'forms.svg',
    helpArticle: 'https://help.formester.com/en/article/import-google-forms-be57of/'
  },
  {
    name: 'Typeform',
    desc: 'Clone your Typeform forms & surveys instantly.',
    img: 'typeform.svg',
    helpArticle: 'https://help.formester.com/en/article/import-typeform-18cwwe9/'
  },
  {
    name: 'Zapier',
    desc: 'Connect your forms to over 1000s of apps using Zapier',
    img: 'zapier.svg',
    helpArticle: 'https://help.formester.com/en/article/zapier-integration-9hmwb2/'
  },
  {
    name: 'Ottokit',
    desc: 'Automate your form workflows using Ottokit.',
    img: 'suretriggers.png',
    helpArticle: 'https://help.formester.com/en/article/ottokit-integration-2373e8/'
  },
  {
    name: 'Pabbly Connect',
    desc: 'Automate tasks and move form data without doing it manually.',
    img: 'pabbly.png',
    helpArticle: 'https://help.formester.com/en/article/pabbly-connect-po2q6f/'
  },
  {
    name: 'n8n',
    desc: 'Control how your form data moves between apps with full flexibility.',
    img: 'n8n.png',
    helpArticle: 'https://help.formester.com/en/article/n8n-1k42y6o/'
  }
]

const meta = computed(() => {
  const metaData = {
    type: 'website',
    url: 'https://formester.com/integrations/',
    title: '1000+ Online Form Integrations',
    description: 'Connect your forms with your favorite apps to automate workflows, reduce manual work, and save hours every week with fast and easy integrations.',
    mainImage: 'https://formester.com/formester-logo-meta-image.png',
    mainImageAlt: 'Formester Logo',
  }
  return getSiteMeta(metaData)
})

useHead({
  title: '1000+ Online Form Integrations',
  meta: [...meta.value],
  link: [
    {
      rel: 'canonical',
      href: 'https://formester.com/integrations/',
    },
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: '1000+ Online Form Integrations',
    description: 'Connect your forms with your favorite apps to automate workflows, reduce manual work, and save hours every week with fast and easy integrations.',
    logo: 'https://formester.com/logo.png',
    url: 'https://formester.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delaware',
      addressCountry: 'United States',
    },
  },
])
</script>

<style scoped>
.feature__hero {
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}

.subheading {
  margin-top: 3rem;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
}


.integrations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  gap: 1rem;
}

@media (max-width: 992px) {
  .integrations-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 576px) {
  .integrations-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
