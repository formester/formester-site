<template>
  <div>
    <HeroV2
      layout="split"
      :title="heroTitle"
      description="Turn form submissions into new linked people, organizations, and deals in Pipedrive. Map the details you collect and choose where deals land."
      trustText="Native integration · Integration access depends on your plan"
      :buttons="heroButtons"
      :badge="{ text: 'Pipedrive', tag: 'Integrations', link: '/integrations/' }"
      :mockupHtml="heroIllustration"
      :tabCardContent="[]"
      blobColorA="#edf7f1"
      blobColorB="#f5eeff"
      blobColorC="#e8f5ee"
    />

    <CardGrid
      id="capabilities"
      eyebrow="From form to CRM"
      :title="benefitTitle"
      description="Build a Pipedrive contact form around the questions your team needs, then create the CRM records you choose."
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

    <FaqSection centered :title="faqTitle" :faqList="faqs" />

    <CtaDark
      badge="Pipedrive form integration"
      heading="Give every new inquiry a place in your pipeline"
      description="Create a Formester account, build your form, and connect Pipedrive when your plan includes the integration."
      trustText="Integration access depends on your plan"
      :buttons="ctaButtons"
    />
  </div>
</template>

<script setup>
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'

const heroIllustration =
  '<picture><source media="(max-width: 600px)" srcset="/integrations/pipedrive-hero-mobile.svg"><img src="/integrations/pipedrive-hero.svg" alt="Illustration of a Formester submission creating linked Person, Organization, and Deal records in Pipedrive, with a selected pipeline and stage" style="display:block;width:100%;height:auto" /></picture>'

const heroTitle = [
  { id: 1, text: 'Pipedrive form integration: ', highlight: false },
  { id: 2, text: 'create linked CRM records', highlight: true },
]
const heroButtons = [
  { id: 1, link: 'https://app.formester.com/users/sign_up', text: 'Start free', type: 'Primary', showArrow: true },
  { id: 2, link: '#setup', text: 'See setup steps', type: 'Secondary' },
]

const benefitTitle = [
  { id: 1, text: 'Collect the details. ', highlight: false },
  { id: 2, text: 'Create the right records.', highlight: true },
]
const benefitCards = [
  {
    id: 1,
    tag: 'Linked records',
    tagColor: 'violet',
    title: 'Choose what each response creates',
    body: 'Enable Person, Organization, and Deal as needed. New records created from one submission are linked together when those objects are enabled.',
  },
  {
    id: 2,
    tag: 'Field mapping',
    tagColor: 'green',
    title: 'Carry useful context into Pipedrive',
    body: 'Map published scalar form fields or fixed values to names, primary email and phone, deal title, value, and currency. Text and long-text custom fields are supported.',
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
    description:
      'In your form, go to Automations → Integrations → Pipedrive. Publish any new fields you want to map first.',
  },
  {
    id: 2,
    title: 'Connect and select an account',
    description:
      'Authorize Pipedrive with OAuth, then select the connected account that should receive this form’s records.',
  },
  {
    id: 3,
    title: 'Choose records and map fields',
    description:
      'Enable Person, Organization, or Deal as needed. Map published form fields or fixed values; for deals, select a pipeline and stage.',
  },
  {
    id: 4,
    title: 'Save and test a submission',
    description:
      'Save the integration, submit a test response, and check the new linked records in Pipedrive. You can optionally sync existing submissions; previously successful deliveries are skipped.',
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

const faqTitle = [{ id: 1, text: 'Pipedrive form integration FAQs', highlight: false }]
const faqs = [
  {
    id: 1,
    header: 'What does the Pipedrive integration create?',
    body: 'For each eligible new submission, Formester can create a new Person, Organization, and Deal, depending on which objects you enable. The records are linked when created together. Existing CRM records are not updated.',
  },
  {
    id: 2,
    header: 'Can I map fields from my Pipedrive contact form?',
    body: 'Yes. Choose published scalar form fields or fixed values for supported Person, Organization, and Deal fields. Text and long-text custom fields are supported; other custom field types are not available in this integration.',
  },
  {
    id: 3,
    header: 'Can I choose where a new deal appears?',
    body: 'Yes. When Deal creation is enabled, select a Pipedrive pipeline and stage, and map a deal title. You can also map a numeric value and currency.',
  },
  {
    id: 4,
    header: 'Will this update or deduplicate people already in Pipedrive?',
    body: 'No. Each previously undelivered submission creates new records. The integration does not look up or update existing CRM records by email, so review submissions before syncing past responses.',
  },
  {
    id: 5,
    header: 'Can I send existing submissions to Pipedrive?',
    body: 'Yes. Sync existing submissions uses your saved settings and skips previously successful deliveries. Disconnecting and reconnecting removes delivery checkpoints, so syncing again after reconnecting can create duplicate CRM records.',
  },
  {
    id: 6,
    header: 'Is the Pipedrive integration included with a free account?',
    body: 'Start free creates a Formester account. Integration access depends on your plan; check your plan’s available integrations before connecting Pipedrive.',
  },
]

const ctaButtons = [{ id: 1, link: 'https://app.formester.com/users/sign_up', text: 'Start free', type: 'Primary' }]

const seoTitle = 'Pipedrive Form Integration: Send Form Leads to CRM | Formester'
const seoDescription =
  'Connect Formester forms to Pipedrive. Create new linked people, organizations, and deals from submissions, map fields, and choose a deal pipeline and stage.'
const canonicalUrl = 'https://formester.com/integrations/pipedrive/'
const socialImage = 'https://formester.com/formester-logo-meta-image.png'

useHead({
  title: seoTitle,
  link: [{ hid: 'canonical', rel: 'canonical', href: canonicalUrl }],
  meta: [
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
