<template>
  <div>
    <AiHero
      type="Form"
      buttonText="Generate my contract form"
      :title="heroTitle"
      :description="heroDescription"
      :placeholder="heroPlaceholder"
      :suggestions="heroSuggestions"
      :footerItems="heroFooterItems"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56k+ teams worldwide" showTrustBadges class="page-component-item" />

    <StickyStepsSection
      id="how-it-works"
      badge="How it works"
      heading="How to make a contract online"
      description="Your client fills in a form and signs it. Formester puts their answers and signature into your contract and creates the PDF."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <section id="example" class="cg-example page-component-item">
      <div class="cg-example__inner">
        <SectionHeader eyebrow="Real output" :title="exampleTitle" :description="exampleDescription" />
        <figure class="cg-example__figure">
          <img
            src="https://formester-strapi.s3.ap-south-1.amazonaws.com/4912c71a14006d76_blank-vs-filled-contract.webp"
            alt="A blank freelance services agreement next to the same PDF filled in with a client's form answers and their drawn signature"
            width="1440"
            height="755"
            loading="lazy"
            class="cg-example__img"
          />
          <figcaption class="cg-example__caption">
            Left: the contract PDF you upload. Right: the same PDF after one client fills in the form and signs.
          </figcaption>
        </figure>
        <p class="cg-example__more">
          Comparing tools? See how Formester compares with
          <NuxtLink to="/blog/best-document-generation-software/">other document generation tools</NuxtLink>.
        </p>
      </div>
    </section>

    <CardGrid
      id="templates"
      eyebrow="Contract templates"
      description="Each template comes with the form and its contract PDF already connected. Open one, change the wording and branding, and share the link."
      columns="4"
      background="var(--gray-25, #fcfcfd)"
      :title="templatesTitle"
      :cards="templateCards"
      class="cg-templates page-component-item"
    />
    <div class="cg-more">
      <NuxtLink to="/templates/categories/contract/" class="cg-more__link">
        Browse all contract templates <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>

    <CardGrid
      id="delivery"
      eyebrow="Delivery"
      description="The contract PDF is created when the client submits. Send it to the people who need it, or file it where your team works."
      columns="3"
      :title="deliveryTitle"
      :cards="deliveryCards"
      class="page-component-item"
    />

    <CardGrid
      id="ai"
      eyebrow="AI contract generator"
      description="AI saves you the setup. The contract wording stays yours to write and check."
      columns="2"
      background="var(--gray-25, #fcfcfd)"
      :title="aiTitle"
      :cards="aiCards"
      class="page-component-item"
    />

    <CardGrid
      id="details"
      eyebrow="Contract details"
      description="The form fields you already use cover the parts of a contract that change from client to client."
      columns="3"
      :title="detailsTitle"
      :cards="detailCards"
      class="page-component-item"
    />

    <TestimonialsV2
      version="feature"
      :heading="testimonialsHeading"
      :testimonials="testimonials"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Business plan, from $45/mo"
      heading="Turn your next client agreement into a signed PDF"
      description="Build the contract form for free, connect your contract PDF on the Business plan, and share one link."
      :buttons="ctaButtons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import AiHero from '@/components/features/AiHero.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/contract-generator/'
const META_TITLE = 'Contract Generator: Fill, Sign & Get a PDF | Formester'
const META_DESCRIPTION =
  'Make contracts your clients fill in and sign online. Every submission creates a filled, signed contract PDF, sent to both of you.'
const META_IMAGE = 'https://formester-strapi.s3.ap-south-1.amazonaws.com/4912c71a14006d76_blank-vs-filled-contract.webp'

const BRAND = '#6434d0'
const BRAND_BG = '#f0ebfa'

const pill = (text, fg, bg) =>
  `<span style='font-size:11px;font-weight:600;color:${fg};background:${bg};border-radius:999px;padding:3px 9px;white-space:nowrap;'>${text}</span>`
const mockBox = (label, detail) =>
  `<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 12px;text-align:left;'><div style='font-size:11px;color:#697586;margin-bottom:4px;'>${label}</div><div style='font-size:12px;color:#101828;line-height:1.45;'>${detail}</div></div>`

// Hero: the live AI form generator. It builds the contract form; the PDF is set up in the PDF Editor (Business).
const heroTitle = [
  { text: 'Contract generator that turns a simple form into ', highlight: false, color: '#000000', bold: false },
  { text: 'a signed contract PDF', highlight: true, color: '#000000', bold: false },
]
const heroDescription =
  'Describe your contract and AI builds the form your client fills in and signs. Connect your contract PDF, and each signed response becomes a filled contract that goes to you and your client.'
const heroPlaceholder =
  'Describe your contract. Example: A freelance web design contract with client details, project scope, fee, start date, payment terms, and a signature.'
const heroSuggestions = [
  {
    id: 1,
    label: 'Freelance contract',
    text: 'Create a freelance web design contract form with client name, email, company, project scope, fee, start date, payment terms, a terms checkbox, and a signature field.',
  },
  {
    id: 2,
    label: 'NDA',
    text: 'Create a non-disclosure agreement form with the other party’s name, company, address, the purpose of sharing information, an agreement checkbox, and a signature field.',
  },
  {
    id: 3,
    label: 'Service agreement',
    text: 'Create a service agreement form for a marketing agency with client details, services, monthly fee, contract start date, payment terms, and a signature field.',
  },
  {
    id: 4,
    label: 'Lease agreement',
    text: 'Create a residential lease agreement form with tenant name, contact details, property address, monthly rent, deposit, lease start and end dates, and a signature field.',
  },
  {
    id: 5,
    label: 'Photography contract',
    text: 'Create a photography services contract form with client details, event date, location, package, fee, deposit, usage terms checkbox, and a signature field.',
  },
  {
    id: 6,
    label: 'Employment agreement',
    text: 'Create an employment agreement form with employee name, job title, start date, salary, work location, an acceptance checkbox, and a signature field.',
  },
]
const heroFooterItems = [
  { id: 1, text: 'Contract forms and signatures free' },
  { id: 2, text: 'No credit card' },
  { id: 3, text: 'Signed contract PDFs on Business' },
]

// Section: how it works. Real screenshots from the Formester app (demo data).
const howButtons = [{ link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true }]
// Images live in the CMS media library (Blog posts/how-to-auto-fill-and-sign-pdfs-with-a-form).
const SHOT_URLS = {
  'form-with-signature':
    'https://formester-strapi.s3.ap-south-1.amazonaws.com/021d1a77ccdba7fe_form-with-signature.webp',
  'pdf-editor-start-options':
    'https://formester-strapi.s3.ap-south-1.amazonaws.com/f810e3fb01516ce9_pdf-editor-start-options.webp',
  'pdf-editor-place-fields':
    'https://formester-strapi.s3.ap-south-1.amazonaws.com/3449abc5dd91c447_pdf-editor-place-fields.webp',
  'pdf-settings': 'https://formester-strapi.s3.ap-south-1.amazonaws.com/64abf4909be9a42e_pdf-settings.webp',
}
const shot = (file, w, h, alt) =>
  `<img src='${SHOT_URLS[file]}' alt='${alt}' width='${w}' height='${h}' loading='lazy' class='cg-step-img' />`
const howSteps = [
  {
    title: 'Build the contract form',
    description:
      'Generate it with AI above, start from a contract template, or add the fields yourself: client name, project, fee, start date, and a Signature field.',
    rawHtml: shot(
      'form-with-signature',
      1280,
      1440,
      'A Formester form for a freelance contract with client name, email, company, project, start date, fee, and a signature field',
    ),
  },
  {
    title: 'Add your contract PDF',
    description:
      'Open the PDF Editor on the form. Upload the contract you already use, design one from scratch, or describe it and let AI lay out a first draft. The PDF Editor is part of the Business plan.',
    rawHtml: shot(
      'pdf-editor-start-options',
      1280,
      545,
      'The Formester PDF Editor asking how to create the PDF: Start from scratch, Upload PDF, or Create with AI',
    ),
  },
  {
    title: 'Place the answers and signature',
    description:
      'Drag each form field onto the line where its answer belongs, and put the Signature field on the signature line.',
    rawHtml: shot(
      'pdf-editor-place-fields',
      1280,
      980,
      'Form fields placed on an uploaded freelance services agreement in the Formester PDF Editor, with a signature box on the signature line',
    ),
  },
  {
    title: 'Share the link',
    description:
      'Send the form link to your client. When they sign and submit, Formester creates the filled contract PDF and sends it where you chose.',
    rawHtml: shot(
      'pdf-settings',
      1280,
      794,
      'Formester PDF settings with respondent download turned on, a custom PDF file name, and Connected PDF as the default PDF type',
    ),
  },
]

// Section: blank vs filled proof.
const exampleTitle = [
  { text: 'One contract, ', highlight: false, color: '#475467', bold: false },
  { text: 'filled in by every client', highlight: true, color: '#475467', bold: false },
]
const exampleDescription =
  'You set up the contract once. Each client who fills in the form gets the same contract with their own details and signature in place.'

// Section: contract templates that ship with a connected PDF (constants/pdf-templates.js).
const templatesTitle = [
  { text: 'Contract templates with ', highlight: false, color: '#475467', bold: false },
  { text: 'the PDF ready', highlight: true, color: '#475467', bold: false },
]
const S3 = 'https://formester-strapi.s3.ap-south-1.amazonaws.com'
const pdfPreview = (file, alt) =>
  `<img src='${S3}/${file}' alt='${alt}' width='354' height='500' loading='lazy' class='cg-pdf-preview' />`
const templateCards = [
  {
    tag: 'Freelance',
    tagColor: 'violet',
    title: 'Freelance contract',
    body: 'Client, project, fee, and start date go into a freelance agreement with the client’s signature.',
    mockHtml: pdfPreview(
      'small_freelance_contract_page_0001_3533bd09dc.jpg',
      'First page of the freelance contract PDF that comes with the template',
    ),
    link: '/templates/freelance-contract-51961/',
    linkText: 'Use this template',
  },
  {
    tag: 'Web design',
    tagColor: 'blue',
    title: 'Web design contract',
    body: 'Scope, timeline, and payment terms for a website project, signed by your client.',
    mockHtml: pdfPreview(
      'small_webdesign_contract_page_0001_a5724cfdf8.jpg',
      'First page of the web design contract PDF that comes with the template',
    ),
    link: '/templates/web-design-contract-51964/',
    linkText: 'Use this template',
  },
  {
    tag: 'NDA',
    tagColor: 'green',
    title: 'NDA agreement',
    body: 'The other party adds their details and signs, and each submission produces a finished NDA.',
    mockHtml: pdfPreview(
      'small_nda_agreement_page_0001_97536e320e.jpg',
      'First page of the NDA agreement PDF that comes with the template',
    ),
    link: '/templates/nda-agreement-pdf-form-template-49898/',
    linkText: 'Use this template',
  },
  {
    tag: 'Services',
    tagColor: 'amber',
    title: 'Business contract agreement',
    body: 'A general agreement between your business and a client, with both sides named and the client’s signature.',
    mockHtml: pdfPreview(
      'small_image_8_6bd76f6574.png',
      'First page of the business contract agreement PDF that comes with the template',
    ),
    link: '/templates/business-contract-agreement-pdf-form-49913/',
    linkText: 'Use this template',
  },
  {
    tag: 'Rental',
    tagColor: 'rose',
    title: 'Lease agreement',
    body: 'Tenant details, rent, and lease dates in a lease PDF the tenant signs.',
    mockHtml: pdfPreview(
      'small_lease_agreement_page_0001_6c4046ca34.jpg',
      'First page of the lease agreement PDF that comes with the template',
    ),
    link: '/templates/lease-agreement-pdf-form-template-49894/',
    linkText: 'Use this template',
  },
  {
    tag: 'HR',
    tagColor: 'blue',
    title: 'Employee agreement',
    body: 'Role, pay, and start date for a new hire, signed before their first day.',
    mockHtml: pdfPreview(
      'small_employement_agreement_page_0001_04e655927e.jpg',
      'First page of the employee agreement PDF that comes with the template',
    ),
    link: '/templates/employee-agreement-pdf-form-49926/',
    linkText: 'Use this template',
  },
  {
    tag: 'Creative',
    tagColor: 'violet',
    title: 'Photography services contract',
    body: 'A contract your photography clients fill in and sign before you book the shoot.',
    mockHtml: pdfPreview(
      'small_photo_agreement_page_0001_80bc50bf8e.jpg',
      'First page of the photography services contract PDF that comes with the template',
    ),
    link: '/templates/photography-services-contract-template-51951/',
    linkText: 'Use this template',
  },
  {
    tag: 'Quote',
    tagColor: 'green',
    title: 'Service quote agreement',
    body: 'Services and prices your customer reviews, accepts, and signs in one step.',
    mockHtml: pdfPreview(
      'small_service_quote_agreement_page_0001_b89b89c5aa.jpg',
      'First page of the service quote agreement PDF that comes with the template',
    ),
    link: '/templates/service-quote-agreement-57745/',
    linkText: 'Use this template',
  },
]

// Section: delivery. Each card is a real place in the app where the Connected PDF is sent or stored.
const deliveryTitle = [
  { text: 'Where the signed contract ', highlight: false, color: '#475467', bold: false },
  { text: 'goes', highlight: true, color: '#475467', bold: false },
]
const deliveryCards = [
  {
    tag: 'Client copy',
    tagColor: 'violet',
    title: 'Emailed to the signer',
    body: 'Attach the contract PDF to the autoresponder, so your client gets their signed copy as soon as they submit.',
    mockHtml: mockBox('Autoresponder', 'Your signed contract is attached'),
    link: '/features/autoresponder-email/',
    linkText: 'Autoresponder emails',
  },
  {
    tag: 'Your copy',
    tagColor: 'blue',
    title: 'Sent to your inbox',
    body: 'Your notification email carries the same PDF, named from the answers, so you can file it with the client’s records.',
    mockHtml: mockBox('PDF file name', 'Contract - @Client name'),
    link: '/features/email-notification-for-form-submission/',
    linkText: 'Email notifications',
  },
  {
    tag: 'Thank-you page',
    tagColor: 'green',
    title: 'Downloaded right away',
    body: 'Show a download button on the thank-you page, so your client can save the signed contract right after submitting.',
    mockHtml: mockBox('Thank-you page', 'Download PDF'),
  },
  {
    tag: 'Google Drive',
    tagColor: 'green',
    title: 'Filed in Google Drive',
    body: 'Save every signed contract to a Drive folder, with a subfolder per client if you like.',
    mockHtml: mockBox('Drive folder', 'Contracts / @Company'),
    link: '/integrations/google-drive/',
    linkText: 'Google Drive integration',
  },
  {
    tag: 'Workflows',
    tagColor: 'amber',
    title: 'Reviewed by your team',
    body: 'Add an approval step so someone on your team checks the signed contract, then a Send email step attaches the PDF.',
    mockHtml: `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Approval', BRAND, BRAND_BG)}${pill('Send email', '#175cd3', '#eff8ff')}</div>`,
    link: '/features/workflows/',
    linkText: 'Workflows',
  },
  {
    tag: 'Results',
    tagColor: 'rose',
    title: 'Downloaded later, one or many',
    body: 'Every signed submission stays in your form’s Results. Download one contract PDF, or select several and get them together.',
    mockHtml: mockBox('Download PDFs', '12 submissions selected'),
    link: '/features/form-to-pdf/',
    linkText: 'Form to PDF',
  },
]

// Section: AI. The AI form generator builds questions; Create with AI lays out the PDF around existing fields.
const aiTitle = [
  { text: 'Let AI build the form ', highlight: false, color: '#475467', bold: false },
  { text: 'and the layout', highlight: true, color: '#475467', bold: false },
]
const aiCards = [
  {
    tag: 'AI form generator · Free',
    tagColor: 'violet',
    title: 'Describe the contract, get the form',
    body: 'Write one sentence about the agreement. AI adds the questions it needs, such as names, scope, fee, dates, a terms checkbox, and a signature field. Edit anything before you share it.',
    mockHtml: mockBox(
      'Describe your form',
      'A freelance web design contract with client details, scope, fee, start date, and a signature.',
    ),
    link: '#ai-form-builder',
    linkText: 'Try it above',
  },
  {
    tag: 'Create with AI · Business',
    tagColor: 'blue',
    title: 'Describe the document, get a first layout',
    body: 'In the PDF Editor, AI lays out headings, text blocks, and a signature box, already linked to your form’s fields. Add or check the contract wording yourself.',
    mockHtml: mockBox(
      'Describe your PDF',
      'A one-page freelance agreement with our logo, client details, the fee, and a signature line.',
    ),
    link: '/features/document-generation/',
    linkText: 'See the PDF Editor',
  },
]

// Section: contract details the form can carry into the PDF.
const detailsTitle = [
  { text: 'Fill in the parts ', highlight: false, color: '#475467', bold: false },
  { text: 'that change', highlight: true, color: '#475467', bold: false },
]
const detailCards = [
  {
    tag: 'Pre-fill',
    tagColor: 'violet',
    title: 'Send it with the terms filled in',
    body: 'Already agreed on the fee and dates? Pre-fill those answers and share the link, so your client only adds their details and signs.',
    mockHtml: mockBox('Pre-filled link', 'Fee: $4,500 · Start: 3 Nov'),
    link: '/features/pre-fill-fields/',
    linkText: 'Pre-fill fields',
  },
  {
    tag: 'Calculations',
    tagColor: 'blue',
    title: 'Fees that add up',
    body: 'A calculation field works out the total, like an hourly rate times hours, and the result prints on the contract.',
    mockHtml: mockBox('Total fee', '@Rate × @Hours'),
    link: '/features/calculating-fields/',
    linkText: 'Calculating fields',
  },
  {
    tag: 'Business plan',
    tagColor: 'green',
    title: 'Digitally signed PDFs',
    body: 'The Sign PDF setting adds a Formester digital certificate to each contract PDF, so recipients can see where the file came from.',
    mockHtml: mockBox('Sign PDF', 'On'),
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

const faqTitle = [{ text: 'Contract generator questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'How do I make a contract online?',
    body: 'Build a form that asks for the contract details and a signature, or generate one with AI. Then open the PDF Editor on that form and upload your contract PDF, start from a template, or design one from scratch. Place each answer on the page and share the form link. Each time a client fills it in and signs, Formester creates the filled contract PDF.',
  },
  {
    id: 2,
    header: 'Is the contract generator free?',
    body: 'Building the contract form, generating it with AI, and collecting drawn signatures are free. Turning each signed submission into a contract PDF needs the Business plan, which costs $45 a month billed yearly or $49 billed monthly.',
  },
  {
    id: 3,
    header: 'How do clients sign the contract?',
    body: 'They draw their signature with a mouse, trackpad, or finger in the form’s signature field, on a phone or a computer. The signature then appears in the signature box on the contract PDF.',
  },
  {
    id: 4,
    header: 'Is a contract signed online legally binding?',
    body: 'Electronic signatures are generally accepted for everyday agreements in many countries, for example under the US ESIGN Act and the EU’s eIDAS rules. Requirements vary by document type and country, so check with a lawyer for anything high-stakes.',
  },
  {
    id: 5,
    header: 'Can I use my own contract?',
    body: 'Yes. Choose “Upload PDF” in the PDF Editor and your contract becomes the base of the template. Then drag each form field onto the line where its answer belongs, including the signature.',
  },
  {
    id: 6,
    header: 'Can AI write a contract for me?',
    body: 'AI builds the contract form for you, and in the PDF Editor “Create with AI” lays out a first draft of the document around your form’s fields. It does not give legal advice, so write or review the contract wording yourself and have a lawyer check anything important.',
  },
  {
    id: 7,
    header: 'What format is the finished contract?',
    body: 'Every signed contract is a PDF. You can name each file from the answers, like “Contract - Client name”, and on the Business plan you can add a Formester digital certificate to each PDF.',
  },
  {
    id: 8,
    header: 'Where are signed contracts kept?',
    body: 'Each signed submission stays in your form’s Results, and you can download its contract PDF from there at any time. You can also email the PDF to you and your client and save a copy to Google Drive.',
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
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: PAGE_URL },
    { property: 'og:title', content: META_TITLE },
    { property: 'og:description', content: META_DESCRIPTION },
    { property: 'og:image', content: META_IMAGE },
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
    name: 'Formester Contract Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: PAGE_URL,
    description: META_DESCRIPTION,
    offers: { '@type': 'Offer', price: '45', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
      { '@type': 'ListItem', position: 2, name: 'Contract Generator', item: PAGE_URL },
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
/* Images injected through v-html (steps and template cards), so these rules stay unscoped and namespaced. */
.cg-step-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 360px;
  margin-top: 16px;
  object-fit: cover;
  object-position: top;
  border: 1px solid #eaecf0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
}
.cg-pdf-preview {
  display: block;
  width: 100%;
  height: auto;
  max-height: 260px;
  object-fit: cover;
  object-position: top;
  border: 1px solid #eaecf0;
  border-radius: 6px;
  background: #fff;
}
</style>

<style scoped>
.cg-templates.page-component-item {
  padding-bottom: var(--space-8, 32px);
}
/* Eight full-width cards make a very long scroll on phones: show them two per row with the preview and link only. */
@media (max-width: 600px) {
  .cg-templates :deep(.fcg-grid) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-3, 12px);
  }
  .cg-templates :deep(.fcg-card) {
    padding: var(--space-3, 12px);
  }
  .cg-templates :deep(.fcg-tag),
  .cg-templates :deep(.fcg-card__body) {
    display: none;
  }
  .cg-templates :deep(.fcg-card__title) {
    font-size: 15px;
  }
  .cg-templates :deep(.fcg-card__mock) {
    margin-top: var(--space-2, 8px);
    padding: var(--space-2, 8px);
  }
  .cg-templates :deep(.fcg-card__link) {
    font-size: 13px;
  }
}
.cg-more {
  background: var(--gray-25, #fcfcfd);
  padding: 0 var(--space-6) var(--space-16);
  text-align: center;
}
.cg-more__link {
  font-size: 15px;
  font-weight: 600;
  color: #6434d0;
  text-decoration: none;
}
.cg-more__link:hover,
.cg-more__link:focus-visible {
  text-decoration: underline;
}
.cg-example {
  background: #fff;
  padding: var(--space-16) var(--space-6);
}
.cg-example__more {
  margin: var(--space-6, 24px) 0 0;
  text-align: center;
  font-size: 15px;
  color: #475467;
}
.cg-example__more a {
  color: #6434d0;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.cg-example__inner {
  max-width: 1040px;
  margin: 0 auto;
}
.cg-example__figure {
  margin: 0;
}
.cg-example__img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--gray-200, #eaecf0);
  border-radius: 12px;
  box-shadow: 0 24px 80px rgba(15, 14, 26, 0.1);
}
.cg-example__caption {
  margin-top: 12px;
  font-size: 14px;
  color: var(--gray-500, #667085);
  text-align: center;
}
</style>
