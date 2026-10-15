<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Unlimited forms and responses on every plan · PDF documents on Business, from $45/mo"
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#eff8ff"
      blobColorC="#f4efff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56k+ teams worldwide" showTrustBadges class="page-component-item" />

    <section id="pricing" class="fsa-pricing page-component-item">
      <div class="fsa-pricing__inner">
        <SectionHeader eyebrow="Pricing" :title="pricingTitle" :description="pricingDescription" />
        <table class="fsa-table">
          <thead>
            <tr>
              <th scope="col"><span class="fsa-sr">Plan detail</span></th>
              <th v-for="col in pricingCols" :key="col.key" scope="col" :class="{ 'fsa-us': col.us }">
                <span class="fsa-brand">{{ col.brand }}</span>
                {{ col.plan }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in pricingRows" :key="row.label">
              <th scope="row">{{ row.label }}</th>
              <td
                v-for="(col, i) in pricingCols"
                :key="col.key"
                :data-label="`${col.brand} ${col.plan}`"
                :class="{ 'fsa-us': col.us }"
              >
                {{ row.values[i] }}
              </td>
            </tr>
          </tbody>
        </table>
        <p class="fsa-pricing__note">
          Moving from Formstack Suite to Formester Business saves $2,460 a year at list price ($3,000 vs $540, billed
          yearly). Formstack prices are from formstack.com/pricing as of 15 October 2026. Formester prices are from
          <NuxtLink to="/pricing/">Formester pricing</NuxtLink>.
        </p>
      </div>
    </section>

    <CardGrid
      id="why-switch"
      eyebrow="Why teams switch"
      description="Where Formstack’s plan limits differ most from Formester’s."
      columns="2"
      background="var(--gray-25, #fcfcfd)"
      :title="whyTitle"
      :cards="whyCards"
      class="page-component-item"
    />

    <AlternatingRows
      id="documents"
      eyebrow="Documents"
      :title="docsTitle"
      :description="docsDescription"
      :rows="docsRows"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Formstack Documents vs Formester"
      description="What it takes to fill a PDF from every form submission on each platform. Formstack figures from its pricing page as of 15 October 2026."
      colUs="Formester"
      colThem="Formstack Documents"
      background="var(--gray-25, #fcfcfd)"
      :title="docsCompareTitle"
      :rows="docsCompareRows"
      class="page-component-item"
    />

    <CardGrid
      id="features"
      eyebrow="Features"
      description="The form features teams use every day, with the Formester plan that includes each one."
      columns="3"
      :title="featuresTitle"
      :cards="featureCards"
      class="page-component-item"
    />

    <StickyStepsSection
      id="switch"
      badge="Switch"
      heading="Move your Formstack forms in a few minutes"
      description="You don’t rebuild your forms by hand. Formester reads them from Formstack and recreates the questions, pages and logic."
      :buttons="switchButtons"
      :steps="switchSteps"
      class="page-component-item"
    />

    <TestimonialsV2
      version="feature"
      :heading="testimonialsHeading"
      :testimonials="testimonials"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Related comparisons"
      description="Still comparing? These guides cover Formstack and its competitors."
      columns="4"
      background="var(--gray-25, #fcfcfd)"
      :title="relatedTitle"
      :cards="relatedCards"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Bring your Formstack forms over free"
      description="Import a form from Formstack, check it, and share the new link. Add PDF documents when you need them."
      :buttons="ctaButtons"
      trustText="PDF documents on Business, from $45/mo billed yearly"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import AlternatingRows from '@/components/v2/AlternatingRows.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import ComparisonTable from '@/components/v2/ComparisonTable.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/formstack-alternative/'
const META_TITLE = 'Formstack Alternative with Forms + PDF Documents | Formester'
const META_DESCRIPTION =
  'Formester is a Formstack alternative with forms, approvals and auto-filled PDFs in one plan. Free to start; Business is $45/mo vs Formstack Suite $250/mo.'
const META_IMAGE = 'https://formester.com/images/formstack-alternative/formstack-alternative-og.jpg'

// Formstack figures: formstack.com/pricing, checked 15 Oct 2026.
// Formester figures: constants/plan.js (formester.com/pricing). Workflow run quotas per plan:
// formester-app db/migrate/20260831090000_add_workflow_plan_gating.rb (Free 100, Personal 1,000, Business 10,000).

// Real product screenshots, injected as raw HTML so they carry width/height and lazy loading.
const shot = (src, w, h, alt, eager = false) =>
  `<img src='${src}' alt='${alt}' width='${w}' height='${h}' ${
    eager ? "loading='eager' fetchpriority='high'" : "loading='lazy'"
  } class='fsa-shot' />`

const heroMockupHtml = `<div class='fsa-hero-shot'>${shot(
  '/images/blog/auto-fill-pdf/pdf-editor-place-fields.webp',
  1280,
  980,
  'Formester PDF Editor with form fields placed on a contract template',
  true,
)}</div>`

const heroBadge = { text: 'Formstack alternative', tag: '', link: null }
const heroTitle = [
  { text: 'The Formstack alternative with ', highlight: false, color: '#475467', bold: false },
  { text: 'forms, approvals and PDF documents', highlight: true, color: '#475467', bold: false },
  { text: ' in one plan', highlight: false, color: '#475467', bold: false },
]
const heroDescription =
  'Formstack has no free plan. Its Forms plan starts at $83/mo for one user, and documents plus approvals need Suite at $250/mo (Formstack pricing as of October 2026). Formester is free for unlimited forms and responses, and Business ($45/mo, 25 team members) adds auto-filled PDFs.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true },
  { link: '#switch', text: 'Import your Formstack forms', type: 'Secondary', showArrow: false },
]

// Section: pricing. A one-off four-column table, so it is written inline rather than as a component.
const pricingTitle = [
  { text: 'Formstack vs Formester ', highlight: false, color: '#475467', bold: false },
  { text: 'pricing', highlight: true, color: '#475467', bold: false },
]
const pricingDescription =
  'Formstack sells two self-serve plans, and only Suite includes documents and approval routing.'
const pricingCols = [
  { key: 'fs-forms', brand: 'Formstack', plan: 'Forms' },
  { key: 'fs-suite', brand: 'Formstack', plan: 'Suite' },
  { key: 'fm-free', brand: 'Formester', plan: 'Free', us: true },
  { key: 'fm-business', brand: 'Formester', plan: 'Business', us: true },
]
const pricingRows = [
  { label: 'Price per month, billed yearly (monthly)', values: ['$83 ($99)', '$250 ($299)', '$0', '$45 ($49)'] },
  { label: 'Users who can build forms', values: ['1', '3', '1', '25 team members'] },
  { label: 'Forms', values: ['25', '100', 'Unlimited', 'Unlimited'] },
  { label: 'Submissions', values: ['1,000 per form', '5,000 per form', 'Unlimited', 'Unlimited'] },
  { label: 'File storage', values: ['2 GB', '10 GB', '100 MB', '50 GB'] },
  {
    label: 'Approval routing',
    values: ['Not included', 'Included', 'Workflows, 100 runs/mo', 'Workflows, 10,000 runs/mo'],
  },
  {
    label: 'Documents from submissions',
    values: ['Not included', '250 deliveries/mo', 'Not included', 'PDF Editor, no monthly cap'],
  },
  {
    label: 'Free plan or trial',
    values: ['14-day trial', 'No free trial', 'Free forever', 'Upgrade from Free'],
  },
]

// Section: why teams switch. Each card links to the page that proves it.
const whyTitle = [
  { text: 'Why teams switch ', highlight: false, color: '#475467', bold: false },
  { text: 'from Formstack', highlight: true, color: '#475467', bold: false },
]
const whyCards = [
  {
    tag: 'Every plan',
    tagColor: 'violet',
    title: 'No caps on forms or responses',
    body: 'Formstack Forms allows 25 forms and 1,000 submissions per form. Every Formester plan, including Free, has unlimited forms and responses.',
    link: '/pricing/',
    linkText: 'Compare Formester plans',
  },
  {
    tag: 'Business plan',
    tagColor: 'blue',
    title: 'Room for the whole team',
    body: 'Business includes 25 team members, against 1 builder on Formstack Forms and 3 on Suite. Teammates can edit the same form at the same time.',
    link: '/features/collaborative-forms/',
    linkText: 'Real-time collaboration',
  },
  {
    tag: 'Business plan',
    tagColor: 'green',
    title: 'Documents without the Suite price',
    body: 'Formstack puts document generation in Suite at $250/mo. In Formester it is part of Business at $45/mo, built into each form.',
    link: '#documents',
    linkText: 'See how documents work',
  },
  {
    tag: 'Every plan',
    tagColor: 'amber',
    title: 'Approvals and automations built in',
    body: 'Workflows send a submission to approvers by email and take a different path for each answer. Free includes 100 workflow runs a month.',
    link: '/features/workflows/',
    linkText: 'Explore workflows',
  },
]

// Section: documents. Facts from the PDF Editor on formester-app origin/master (Business plan only).
const docsTitle = [
  { text: 'A Formstack Documents alternative ', highlight: false, color: '#475467', bold: false },
  { text: 'that lives inside your forms', highlight: true, color: '#475467', bold: false },
]
const docsDescription =
  'Formstack Documents (formerly WebMerge) comes with the $250/mo Suite plan and 250 document deliveries a month. In Formester, every form has its own PDF Editor, so you build the form and the document it fills in one place. It is part of the Business plan, $45/mo billed yearly.'
const docsRows = [
  {
    kicker: 'Design',
    title: 'Start from a blank page, your PDF, or AI',
    body: 'Open the PDF Editor on your form and pick how to begin. Upload the contract or letterhead you already use as the base, or describe the document and AI lays out a first draft linked to your fields.',
    mediaHtml: shot(
      '/images/blog/auto-fill-pdf/pdf-editor-start-options.webp',
      1280,
      545,
      'PDF Editor start options: start from scratch, upload PDF, or create with AI',
    ),
    link: '/features/document-generation/',
    linkText: 'Auto-generate documents from form submissions',
  },
  {
    kicker: 'Fill',
    title: 'Answers and signatures fill the PDF',
    body: 'Drop form fields onto the page where each answer belongs. Repeater and matrix fields print as tables, and a signature drawn on the form appears in its signature box.',
    bullets: [
      { text: 'Submission ID and date on every document' },
      { text: 'A4, A5 or Letter, with a choice of fonts and a background image' },
      { text: 'Preview with a real submission before it goes out' },
    ],
    mediaHtml: shot(
      '/images/blog/auto-fill-pdf/blank-vs-filled-contract.webp',
      1640,
      860,
      'A blank contract PDF next to the same PDF filled in with a client’s answers and drawn signature',
    ),
    link: '/contract-generator/',
    linkText: 'Try the contract generator',
  },
  {
    kicker: 'Deliver',
    title: 'The PDF goes out on its own',
    body: 'Choose Connected PDF wherever Formester sends a submission. It is attached to your notification or the respondent’s autoresponder, offered on the thank-you page, saved to Google Drive, or sent as a link in a webhook or workflow step. You can also download many at once from Results.',
    mediaHtml: shot(
      '/images/features/form-to-pdf/pdf-connected-template.webp',
      800,
      641,
      'Client intake summary PDF generated from one Formester form submission',
    ),
    link: '/features/form-to-pdf/',
    linkText: 'Turn any form into a PDF',
  },
]

const docsCompareTitle = [
  { text: 'Forms and documents, ', highlight: false, color: '#475467', bold: false },
  { text: 'one plan', highlight: true, color: '#475467', bold: false },
]
const docsCompareRows = [
  {
    feature: 'Plan you need',
    us: 'Business, $45/mo billed yearly, 25 team members',
    them: 'Suite, $250/mo billed yearly, 3 builder users',
  },
  {
    feature: 'Where the template lives',
    us: 'A PDF Editor tab on each form',
    them: 'Formstack Documents, a separate product in Suite',
  },
  { feature: 'Documents per month', us: 'No monthly cap', them: '250 deliveries on Suite' },
]

// Section: features. Plan names from constants/plan.js.
const featuresTitle = [
  { text: 'The form features you use, ', highlight: false, color: '#475467', bold: false },
  { text: 'and the plan that has them', highlight: true, color: '#475467', bold: false },
]
const featureCards = [
  {
    tag: 'Personal plan',
    tagColor: 'blue',
    title: 'Conditional logic',
    body: 'Show, hide or skip questions based on earlier answers.',
    link: '/features/conditional-logic/',
    linkText: 'Conditional logic',
  },
  {
    tag: 'Free plan',
    tagColor: 'violet',
    title: 'Payments',
    body: 'Take payments with Stripe or PayPal inside the form.',
    link: '/features/online-payments/',
    linkText: 'Online payments',
  },
  {
    tag: 'Free plan',
    tagColor: 'violet',
    title: 'Signature field',
    body: 'Respondents draw their signature on any device.',
    link: '/features/electronic-signature/',
    linkText: 'Electronic signatures',
  },
  {
    tag: 'Business plan',
    tagColor: 'green',
    title: 'Save and continue',
    body: 'Respondents save a long form and finish it later.',
    link: '/features/save-and-continue/',
    linkText: 'Save and continue',
  },
  {
    tag: 'Business plan',
    tagColor: 'green',
    title: 'Partial submissions',
    body: 'See what people typed before they left the form.',
    link: '/features/partial-submissions/',
    linkText: 'Partial submissions',
  },
  {
    tag: 'Business plan',
    tagColor: 'green',
    title: 'Form translations',
    body: 'Offer one form in several languages.',
    link: '/features/multi-language-form-translations/',
    linkText: 'Multi-language forms',
  },
  {
    tag: 'Free plan',
    tagColor: 'violet',
    title: 'Offline forms',
    body: 'Collect answers without a connection and sync them later.',
    link: '/features/offline-forms/',
    linkText: 'Offline forms',
  },
  {
    tag: 'Free plan',
    tagColor: 'violet',
    title: 'Pre-filled fields',
    body: 'Fill in known answers from the link, so people type less.',
    link: '/features/pre-fill-fields/',
    linkText: 'Pre-fill fields',
  },
  {
    tag: 'Free plan',
    tagColor: 'violet',
    title: 'AI form builder',
    body: 'Describe a form and get a working draft to edit.',
    link: '/ai-form-generator/',
    linkText: 'AI form generator',
  },
]

// Section: switch. Steps match the app's Import Form modal (locales/en/forms.json) and lib/migrator/formstack.rb.
const switchButtons = [{ link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true }]
const uiChip = (text) => `<span class='fsa-ui-chip'>${text}</span>`
const switchSteps = [
  {
    title: 'Choose Import from Formstack',
    description: 'In Formester, create a new form, choose Import Form, then pick Import from Formstack.',
    rawHtml: uiChip('Import Form') + uiChip('Import from Formstack'),
  },
  {
    title: 'Paste the form link and your token',
    description:
      'Paste the Formstack form link and a Formstack personal access token, then click Generate Form. The token is used for the import only and is not stored.',
    rawHtml: uiChip('Formstack Personal Access Token') + uiChip('Generate Form'),
  },
  {
    title: 'Check the form, then add documents',
    description:
      'Questions, page breaks and conditional logic come across, including signature, rating, matrix and file upload fields. Add a PDF template or a workflow, then share the new link.',
  },
]

const testimonialsHeading = [
  { text: 'What teams say ', highlight: false, color: '#475467', bold: false },
  { text: 'on G2', highlight: true, color: '#475467', bold: false },
]
const testimonials = [
  // Verbatim excerpts from public G2 reviews (g2.com/products/formester/reviews), retrieved 13 Oct 2026.
  {
    id: 1,
    name: 'Les W.',
    position: 'Chief Data Officer, mid-market company (G2 review)',
    comment: 'PDF and emailing options are solid and easy to use. Support is second to none!',
  },
  {
    id: 2,
    name: 'Karthik B.',
    position: 'Social Media Manager, mid-market company (G2 review)',
    comment:
      'Their support is top notch. They reply quickly for any query and also help in technical queries and troubleshooting.',
  },
  {
    id: 3,
    name: 'Verified user in Hospital & Health Care',
    position: 'Small business (G2 review)',
    comment:
      'Having one place to create different types of forms and collect responses makes this part of my work easier.',
  },
]

const relatedTitle = [{ text: 'More comparisons', highlight: false, color: '#475467', bold: false }]
const relatedCards = [
  {
    title: 'Jotform vs Formstack',
    body: 'Both tools side by side, with Formester as a third option.',
    link: '/jotform-vs-formstack/',
    linkText: 'Read the comparison',
  },
  {
    title: 'Best Formstack alternatives',
    body: 'Formstack alternatives compared on price and features.',
    link: '/blog/best-formstack-alternatives/',
    linkText: 'See the list',
  },
  {
    title: 'Cognito Forms alternative',
    body: 'How Formester compares with Cognito Forms.',
    link: '/cognito-forms-alternative/',
    linkText: 'Compare',
  },
  {
    title: 'Jotform alternative',
    body: 'How Formester compares with Jotform.',
    link: '/jotform-alternative/',
    linkText: 'Compare',
  },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'Does Formstack cost money? Is there a free plan?',
    body: 'Yes, Formstack is paid and has no free plan. It offers a 14-day free trial of Formstack Forms. Forms costs $83 a month billed yearly ($99 monthly), and Suite costs $250 a month billed yearly ($299 monthly), according to formstack.com/pricing as of 15 October 2026.',
  },
  {
    id: 2,
    header: 'What is Formstack called now? Is Formstack the same as Intellistack?',
    body: 'The company behind Formstack rebranded as Intellistack in June 2025. Its products are still sold under the Formstack name, including Formstack Forms, Formstack Documents and Formstack Sign.',
  },
  {
    id: 3,
    header: 'What is the best Formstack alternative?',
    body: 'It depends on what you use Formstack for. If you need forms, approvals and auto-filled PDF documents in one plan, Formester covers all three, and its Business plan costs $45 a month billed yearly against $250 for Formstack Suite, as of October 2026.',
  },
  {
    id: 4,
    header: 'Is there a free Formstack alternative?',
    body: 'Yes. Formester’s Free plan has unlimited forms and responses, payments with Stripe or PayPal, a signature field, the AI form builder and 100 workflow runs a month. PDF documents are on the Business plan.',
  },
  {
    id: 5,
    header: 'What is a good Formstack Documents (WebMerge) alternative?',
    body: 'Formester’s PDF Editor. You design the document on a blank page, on your own PDF, or with AI, then place form fields on it. Each submission fills it in, and the PDF is sent by email, offered as a download, saved to Google Drive or sent by webhook. It is part of the Business plan, $45 a month billed yearly.',
  },
  {
    id: 6,
    header: 'Can I move my forms from Formstack to Formester?',
    body: 'Yes. Create a new form, choose Import Form, then Import from Formstack, and paste the form link with a Formstack personal access token. Questions, page breaks and conditional logic carry over.',
  },
  {
    id: 7,
    header: 'Does Formester support approvals like Formstack?',
    body: 'Yes. Workflows include an Approval step that emails each approver from your own email account, and each outcome can lead to a different next step. Workflows are on every plan: Free includes 100 runs a month and Business includes 10,000.',
  },
  {
    id: 8,
    header: 'Which is better, Formstack or Google Forms?',
    body: 'Google Forms is free, but it has no payments, approvals or PDF documents. Formstack has them, but every plan is paid, and documents and approvals need Suite. Formester is free to start, with payments on the Free plan and PDF documents on Business.',
  },
]

const ctaButtons = [
  { link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true },
  { link: '/pricing/', text: 'See pricing', type: 'White', showArrow: false },
]

useHead({
  title: META_TITLE,
  link: [{ rel: 'canonical', href: PAGE_URL }],
  meta: [
    { name: 'description', content: META_DESCRIPTION },
    {
      name: 'keywords',
      content: 'formstack alternative, formstack competitors, formstack documents alternative, webmerge alternative',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: PAGE_URL },
    { property: 'og:title', content: META_TITLE },
    { property: 'og:description', content: META_DESCRIPTION },
    { property: 'og:image', content: META_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'A contract PDF before and after a Formester form submission fills it in' },
    { property: 'article:modified_time', content: '2026-10-15' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@_formester_' },
    { name: 'twitter:title', content: META_TITLE },
    { name: 'twitter:description', content: META_DESCRIPTION },
    { name: 'twitter:image', content: META_IMAGE },
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Formester',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: PAGE_URL,
    description: META_DESCRIPTION,
    offers: [
      { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Business, billed yearly', price: '45', priceCurrency: 'USD' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
      { '@type': 'ListItem', position: 2, name: 'Formstack Alternative', item: PAGE_URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.header,
      acceptedAnswer: { '@type': 'Answer', text: faq.body },
    })),
  },
])
</script>

<style>
/* Screenshots and UI chips are injected as raw HTML, so these rules stay unscoped and namespaced. */
.hero-v2__media:has(.fsa-hero-shot) {
  min-width: 0;
}
.fsa-hero-shot {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #eaecf0;
  border-radius: 14px;
  box-shadow:
    0 24px 80px rgba(15, 14, 26, 0.12),
    0 8px 24px rgba(15, 14, 26, 0.06);
  overflow: hidden;
}
.fsa-shot {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid #eaecf0;
  background: #fff;
}
.fsa-hero-shot .fsa-shot {
  border: 0;
  border-radius: 0;
}
.fsa-ui-chip {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: #6434d0;
  background: #f0ebfa;
  border-radius: 999px;
  padding: 4px 10px;
  margin: 12px 6px 0 0;
}
</style>

<style scoped>
.fsa-pricing {
  background: #fff;
  padding: var(--space-16) var(--space-6);
}
.fsa-pricing__inner {
  max-width: 1040px;
  margin: 0 auto;
}
.fsa-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
.fsa-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--gray-200, #eaecf0);
  border-radius: 12px;
  overflow: hidden;
  font-size: 15px;
}
.fsa-table th,
.fsa-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--gray-200, #eaecf0);
  color: var(--gray-700, #344054);
  vertical-align: top;
}
.fsa-table tbody tr:last-child th,
.fsa-table tbody tr:last-child td {
  border-bottom: 0;
}
.fsa-table thead th {
  background: var(--gray-50, #f9fafb);
  font-weight: 600;
  color: var(--gray-900, #101828);
}
.fsa-table tbody th {
  font-weight: 500;
  color: var(--gray-900, #101828);
  width: 24%;
}
.fsa-brand {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-500, #697586);
}
.fsa-table .fsa-us {
  background: #faf7ff;
}
.fsa-table thead .fsa-us {
  background: #f0ebfa;
  color: #6434d0;
}
.fsa-pricing__note {
  margin: var(--space-4) auto 0;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--gray-600, #475467);
  text-align: center;
}
.fsa-pricing__note a {
  color: #6434d0;
  text-decoration: underline;
}

@media (max-width: 720px) {
  .fsa-table,
  .fsa-table tbody,
  .fsa-table tr,
  .fsa-table th,
  .fsa-table td {
    display: block;
    width: 100%;
  }
  .fsa-table {
    border: 0;
    border-radius: 0;
  }
  .fsa-table thead {
    display: none;
  }
  .fsa-table tbody tr {
    border: 1px solid var(--gray-200, #eaecf0);
    border-radius: 12px;
    margin-bottom: 12px;
    overflow: hidden;
  }
  .fsa-table tbody th {
    width: 100%;
    background: var(--gray-50, #f9fafb);
    padding: 10px 14px;
  }
  .fsa-table td {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 14px;
    text-align: right;
  }
  .fsa-table td::before {
    content: attr(data-label);
    color: var(--gray-500, #697586);
    text-align: left;
    flex-shrink: 0;
  }
  .fsa-table tbody tr:last-child td {
    border-bottom: 1px solid var(--gray-200, #eaecf0);
  }
  .fsa-table tbody tr td:last-child {
    border-bottom: 0;
  }
}
</style>
