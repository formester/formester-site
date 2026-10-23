<template>
  <div>
    <HeroV2
      layout="split"
      :title="heroTitle"
      description="Send form responses to Pipedrive as a person and deal. Match an existing person by email or create one, then add a linked deal to your chosen pipeline and stage."
      trustText="Native integration · Business plan and above"
      :buttons="heroButtons"
      :badge="{ text: 'Pipedrive', tag: 'Integrations', link: '/integrations/' }"
      :mockupHtml="heroIllustration"
      :tabCardContent="[]"
      blobColorA="#edf7f1"
      blobColorB="#f5eeff"
      blobColorC="#e8f5ee"
    />

    <TrustSeals
      label="Trusted by 56k+ teams worldwide"
      :showTrustBadges="false"
      :title="[]"
      :logos="[]"
      class="page-component-item"
    />

    <CardGrid
      id="capabilities"
      eyebrow="From form to CRM"
      :title="benefitTitle"
      description="Collect the answers your sales team needs, then send them to Pipedrive without copy-paste."
      columns="3"
      :cards="benefitCards"
    />

    <StickyStepsSection
      id="setup"
      badge="Setup"
      heading="Connect forms to Pipedrive in four steps"
      description="Configure the native integration on each form, then verify the first delivery in Pipedrive."
      background="#f8faf9"
      :steps="setupSteps"
      :buttons="setupButtons"
    />

    <ComparisonTable
      id="pipedrive-web-forms-vs-formester"
      eyebrow="Compare"
      :title="compareTitle"
      description="Pipedrive has its own embeddable forms. Formester is a separate form builder that sends each submission to Pipedrive."
      colUs="Formester"
      colThem="Pipedrive Web Forms"
      :rows="compareRows"
      :note="compareNote"
      class="page-component-item"
    />

    <section id="pipedrive-contact-form" class="pd-section page-component-item">
      <div class="pd-inner">
        <SectionHeader title="Pipedrive contact form" />
        <p class="pd-text">
          A contact form on your website is often the first place a lead shows up. If you copy those inquiries into
          Pipedrive by hand, some get delayed or missed. Build the contact form in Formester, connect Pipedrive, and
          each message arrives as a person with a linked deal in the pipeline stage you picked.
        </p>
        <p class="pd-text">
          Ask for the details your sales team needs, such as name, email, phone, and what the person wants. Map the
          question about their request to the deal title so you can see it in the deal list.
        </p>
      </div>
    </section>

    <section id="google-forms-to-pipedrive" class="pd-section pd-section--alt page-component-item">
      <div class="pd-inner">
        <SectionHeader title="Google Forms to Pipedrive" />
        <p class="pd-text">
          Google Forms has no built-in Pipedrive option. To get responses into Pipedrive, you connect the linked Google
          Sheet with Zapier or a script, then keep that connection working. If you build the form in Formester instead,
          you connect Pipedrive from the form's Automate tab and each response creates a person and a deal directly.
        </p>
      </div>
    </section>

    <TestimonialsV2
      version="feature"
      :heading="testimonialHeading"
      :testimonials="testimonials"
      class="page-component-item"
    />

    <IntegrationsGrid
      title="Explore more integrations"
      :integrations="relatedIntegrations"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqs" />

    <CtaDark
      badge="Pipedrive form integration"
      heading="Give every new inquiry a place in your pipeline"
      description="Build your form, then connect Pipedrive on the Business plan or above."
      trustText="Native integration · Business plan and above"
      :buttons="ctaButtons"
    />
  </div>
</template>

<script setup>
import CardGrid from '@/components/v2/CardGrid.vue'
import ComparisonTable from '@/components/v2/ComparisonTable.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid.vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'
import { platformTestimonials } from '@/constants/platform-testimonials'

const heroIllustration =
  '<picture><source media="(max-width: 600px)" srcset="/integrations/pipedrive-hero-mobile.svg"><img src="/integrations/pipedrive-hero.svg" alt="Example of a Formester submission creating or matching a Pipedrive person and adding a linked deal in the selected pipeline and stage" style="display:block;width:100%;height:auto" /></picture>'

const heroTitle = [
  { id: 1, text: 'Pipedrive form integration: ', highlight: false },
  { id: 2, text: 'send form leads to your CRM', highlight: true },
]
const heroButtons = [
  { id: 1, link: 'https://app.formester.com/users/sign_up', text: 'Start free', type: 'Primary', showArrow: true },
  { id: 2, link: '#setup', text: 'See setup steps', type: 'Secondary' },
]

const benefitTitle = [
  { id: 1, text: 'Collect the details. ', highlight: false },
  { id: 2, text: 'Keep your pipeline moving.', highlight: true },
]
const benefitCards = [
  {
    id: 1,
    tag: 'Person + deal',
    tagColor: 'violet',
    title: 'Connect each inquiry to a deal',
    body: 'A submission can create a person and a linked deal. If a person with the same email already exists in Pipedrive, Formester links the new deal to that existing person instead.',
  },
  {
    id: 2,
    tag: 'Field mapping',
    tagColor: 'green',
    title: 'Carry useful context into Pipedrive',
    body: 'Map form questions or fixed values to Person Name and Email, phone, deal title, value, and currency. Add supported text or address custom fields when you need more detail.',
  },
  {
    id: 3,
    tag: 'Deal destination',
    tagColor: 'blue',
    title: 'Choose a pipeline and stage',
    body: 'Set the pipeline and stage for new deals during setup, so the deal starts in the place your sales team expects.',
  },
]

const setupSteps = [
  {
    id: 1,
    title: 'Open Pipedrive on your form',
    description: 'Open a published form, then go to Automate → Integrations → Pipedrive and select Add integration.',
  },
  {
    id: 2,
    title: 'Connect and select an account',
    description:
      'Authorize Pipedrive with OAuth, then select the connected account that should receive this form’s records.',
  },
  {
    id: 3,
    title: 'Map the person and deal',
    description:
      'Turn on Person and Deal. Map Name and Email from your form questions, choose a question or fixed value for the deal title, then select a pipeline and stage.',
  },
  {
    id: 4,
    title: 'Save and test a submission',
    description:
      'Save settings, submit a test response, and check the linked person and deal in Pipedrive. Run Sync existing submissions if you also want to send earlier responses.',
  },
]

const setupButtons = [
  {
    id: 1,
    link: 'https://help.formester.com/en/article/how-to-send-form-submissions-to-pipedrive-as-people-and-deals-jf1ajh/',
    text: 'Read the setup guide',
    type: 'Secondary',
    icon: true,
  },
]

const compareTitle = [
  { id: 1, text: 'Pipedrive Web Forms', highlight: false },
  { id: 2, text: 'vs Formester', highlight: true },
]
const compareRows = [
  {
    feature: 'Pipedrive add-on needed',
    us: 'No LeadBooster add-on',
    them: 'Part of the LeadBooster add-on',
  },
  {
    feature: 'What a submission creates',
    us: 'A person and a linked deal',
    them: 'A lead or a deal',
  },
  {
    feature: 'Where the form is built',
    us: 'Formester, with multi-step forms, surveys, and quizzes',
    them: 'Pipedrive, as an embeddable web form',
  },
]
const compareNote =
  'The Formester Pipedrive integration needs the Business plan or above. Pipedrive says Web Forms is part of LeadBooster, which is included in its Premium and higher plans and can be added to Lite and Growth.'

const testimonialHeading = [
  { id: 1, text: 'Forms that teams ', highlight: false },
  { id: 2, text: 'trust to grow', highlight: true },
]
const testimonials = [28, 1].map((strapiId) => {
  const testimonial = platformTestimonials.find((item) => item.strapiId === strapiId)

  return {
    id: `platform-${testimonial.strapiId}`,
    name: testimonial.authorName,
    position: [testimonial.platform, testimonial.authorRole].filter(Boolean).join(' · '),
    comment: testimonial.text,
  }
})

const relatedIntegrations = [
  {
    id: 1,
    name: 'HubSpot CRM',
    description: 'Push new form leads to HubSpot CRM instantly.',
    link: '/integrations/hubspot/',
  },
  {
    id: 2,
    name: 'Salesforce',
    description: 'Push new form leads straight into Salesforce, mapped to any object.',
    link: '/integrations/salesforce/',
  },
  {
    id: 3,
    name: 'Mailchimp',
    description: 'Add or update Mailchimp audience contacts from form submissions.',
    link: '/integrations/mailchimp/',
  },
  {
    id: 4,
    name: 'GoHighLevel',
    description: 'Sync form submissions with your GoHighLevel CRM automatically.',
    link: '/integrations/gohighlevel/',
  },
  {
    id: 5,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 6,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
]

const faqTitle = [{ id: 1, text: 'Pipedrive form integration FAQs', highlight: false }]
const faqs = [
  {
    id: 1,
    header: 'What does the Pipedrive integration create?',
    body: 'For each new submission, Formester can create a person and a linked deal in the pipeline and stage you choose. If a person with the same email already exists, Formester links the new deal to that person without updating their details.',
  },
  {
    id: 2,
    header: 'Can I map fields from my Pipedrive contact form?',
    body: 'Yes. Map form questions or fixed values to Person Name and Email, phone, deal title, value, and currency. You can also map supported text and address custom fields.',
  },
  {
    id: 3,
    header: 'Can I choose where a new deal appears?',
    body: 'Yes. When Deal creation is enabled, select a Pipedrive pipeline and stage, and map a deal title. You can also map a numeric value and currency.',
  },
  {
    id: 4,
    header: 'Will this update a person already in Pipedrive?',
    body: 'No. If a person with the same email exists in Pipedrive, Formester uses the existing person for the new deal but does not change their details. Each submission creates a new deal.',
  },
  {
    id: 5,
    header: 'Can I send existing submissions to Pipedrive?',
    body: 'Yes. Sync existing submissions uses your saved settings and skips previously successful deliveries. Disconnecting and reconnecting removes delivery checkpoints, so syncing again after reconnecting can create duplicate CRM records.',
  },
  {
    id: 6,
    header: 'Which Formester plan includes Pipedrive?',
    body: 'The native Pipedrive integration is available on the Business plan and above. You can create a form with a free account, then upgrade to connect Pipedrive.',
  },
  {
    id: 7,
    header: 'How do I add a form to Pipedrive?',
    body: 'You have two options. Pipedrive’s own Web Forms are under Leads > Web Forms and need the LeadBooster add-on. Or build the form in Formester, open Automate → Integrations → Pipedrive, authorize with OAuth, and map the person and deal fields. Each submission then creates a person and a linked deal.',
  },
  {
    id: 8,
    header: 'Do I need Pipedrive LeadBooster?',
    body: 'Not for the Formester integration. Formester sends data to Pipedrive through your connected account, so you do not need the LeadBooster add-on. You need LeadBooster only if you want to use Pipedrive’s own Web Forms, which Pipedrive includes in Premium and higher plans and sells as an add-on for Lite and Growth.',
  },
  {
    id: 9,
    header: 'How do I send Google Forms to Pipedrive?',
    body: 'Google Forms has no built-in Pipedrive option, so you need Zapier or a script to pass responses from its linked Google Sheet to Pipedrive. A simpler route is to build the form in Formester and connect Pipedrive directly, so each response creates a person and a deal.',
  },
  {
    id: 10,
    header: 'Is a Formester form the same as a Pipedrive contact form?',
    body: 'A Pipedrive contact form is any form on your site that feeds leads into Pipedrive. With Formester you build the contact form, embed or share it, and connect Pipedrive so each inquiry becomes a person and a deal in the pipeline and stage you choose.',
  },
]

const ctaButtons = [{ id: 1, link: 'https://app.formester.com/users/sign_up', text: 'Start free', type: 'Primary' }]

const seoTitle = 'Pipedrive Form Integration: Send Leads as People & Deals | Formester'
const seoDescription =
  'Build forms and send each submission to Pipedrive as a person and linked deal. Native OAuth, pipeline and stage mapping. No LeadBooster add-on required.'
const canonicalUrl = 'https://formester.com/integrations/pipedrive/'
const socialImage = 'https://formester.com/formester-logo-meta-image.png'

useHead({
  title: seoTitle,
  link: [{ hid: 'canonical', rel: 'canonical', href: canonicalUrl }],
  meta: [
    { property: 'article:modified_time', content: '2026-10-23T00:00:00.000Z' },
    { hid: 'description', name: 'description', content: seoDescription },
    { hid: 'og:site_name', property: 'og:site_name', content: 'Formester' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: canonicalUrl },
    { hid: 'og:title', property: 'og:title', content: seoTitle },
    { hid: 'og:description', property: 'og:description', content: seoDescription },
    { hid: 'og:image', property: 'og:image', content: socialImage },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Formester logo' },
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalUrl },
    { hid: 'twitter:site', name: 'twitter:site', content: '@_formester_' },
    { hid: 'twitter:title', name: 'twitter:title', content: seoTitle },
    { hid: 'twitter:description', name: 'twitter:description', content: seoDescription },
    { hid: 'twitter:image', name: 'twitter:image', content: socialImage },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Formester logo' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
  ],
})

useJsonld({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.header,
        acceptedAnswer: { '@type': 'Answer', text: faq.body },
      })),
    },
    {
      '@type': 'HowTo',
      name: 'How to send form submissions to Pipedrive as a person and deal',
      description: 'Connect a Formester form to Pipedrive and create a linked person and deal from each submission.',
      dateModified: '2026-10-23',
      step: setupSteps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.description,
        url: `${canonicalUrl}#setup`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
        { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://formester.com/integrations/' },
        { '@type': 'ListItem', position: 3, name: 'Pipedrive', item: canonicalUrl },
      ],
    },
  ],
})
</script>

<style scoped>
.pd-section {
  padding: var(--space-16) var(--space-6);
}
.pd-section--alt {
  background: #f8faf9;
}
.pd-inner {
  max-width: 720px;
  margin: 0 auto;
}
.pd-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--fg-1);
  margin-bottom: var(--space-4);
}
</style>
