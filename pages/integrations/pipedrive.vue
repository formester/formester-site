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
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'

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
    description:
      'Open a published form, then go to Automate → Integrations → Pipedrive and select Add integration.',
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
]

const ctaButtons = [{ id: 1, link: 'https://app.formester.com/users/sign_up', text: 'Start free', type: 'Primary' }]

const seoTitle = 'Pipedrive Form Integration: Send Form Leads to CRM | Formester'
const seoDescription =
  'Connect Formester forms to Pipedrive. Create or match a person by email, add a linked deal to your pipeline, and map form answers without Zapier.'
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
