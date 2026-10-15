<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Included in the Business plan, from $45/mo"
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#eff8ff"
      blobColorC="#f4efff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56k+ teams worldwide" showTrustBadges class="page-component-item" />

    <section id="what-is-document-generation" class="dg-define page-component-item">
      <SectionHeader eyebrow="Definition" :title="defineTitle" :description="defineBody" spacing="none" />
      <p class="dg-define__more">
        Weighing other tools?
        <NuxtLink to="/blog/best-document-generation-software/">Compare document generation tools</NuxtLink> by where
        your data starts, output format and price.
      </p>
    </section>

    <CardGrid
      eyebrow="Templates"
      description="Pick how you want to begin. Every template lives on the form it belongs to, so the fields are already there."
      columns="3"
      :title="startTitle"
      :cards="startCards"
      class="page-component-item"
    />

    <CardGrid
      id="templates"
      eyebrow="Ready-made templates"
      description="These templates come with the form and its PDF already connected. Open one, change the wording and branding, and it is ready for submissions."
      columns="3"
      :title="galleryTitle"
      :cards="galleryCards"
      class="page-component-item"
    />

    <CalloutDiagram
      id="editor"
      eyebrow="PDF Editor"
      description="Drag elements onto the page, drop in form fields, and style every one. Long answers and tables flow onto the next page by themselves."
      background="var(--gray-25, #fcfcfd)"
      :title="editorTitle"
      :mockHtml="editorMockHtml"
      :pins="editorPins"
      class="page-component-item"
    />

    <StickyStepsSection
      id="how-it-works"
      badge="How it works"
      heading="From form to finished PDF in four steps"
      description="Automated document generation without mail merge or a second tool. The document is built on the same form that collects the data."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <CardGrid
      id="delivery"
      eyebrow="Delivery"
      description="Choose “Connected PDF” wherever Formester sends or stores a submission. The document is generated at that moment."
      columns="3"
      :title="deliveryTitle"
      :cards="deliveryCards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Use cases"
      description="A few of the documents teams generate first. Each one is a form plus a template."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Formester vs a separate document tool"
      description="Standalone document tools are built to pull data from many systems. When the data starts in a form, generating the document in the form builder removes a whole layer."
      colUs="Formester Documents"
      colThem="Form + document add-on"
      :title="compareTitle"
      :rows="compareRows"
      class="page-component-item"
    />
    <p class="dg-compare-more">
      Coming from Formstack Documents?
      <NuxtLink to="/formstack-alternative/#documents">See how Formester compares on price and setup</NuxtLink>.
    </p>

    <CardGrid
      id="security"
      eyebrow="Security"
      description="Documents often carry personal and financial details. Here is how Formester handles them."
      columns="3"
      :title="securityTitle"
      :cards="securityCards"
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
      heading="Turn your next submission into a document"
      description="Open any form, choose PDF Editor, and start from scratch, your own PDF, or a sentence for AI."
      :buttons="ctaButtons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CalloutDiagram from '@/components/v2/CalloutDiagram.vue'
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
const PAGE_URL = 'https://formester.com/features/document-generation/'
const META_TITLE = 'Document Generation Software: Branded PDFs From Forms | Formester'
const META_DESCRIPTION =
  'Generate contracts, invoices, certificates, and receipts from every form submission. Design the PDF template visually, with AI, or on your own PDF, then send it by email, Drive, or webhook.'

const BRAND = '#6434d0'
const BRAND_BG = '#f0ebfa'

// Recalled answer chip, as the PDF Editor shows an @-inserted field.
const chip = (text) =>
  `<span style='color:${BRAND};background:${BRAND_BG};border-radius:4px;padding:1px 5px;font-weight:500;'>@${text}</span>`
const pill = (text, fg, bg) =>
  `<span style='font-size:11px;font-weight:600;color:${fg};background:${bg};border-radius:999px;padding:3px 9px;white-space:nowrap;'>${text}</span>`
const line = (w, h = 6, c = '#eaecf0') =>
  `<div style='height:${h}px;width:${w};background:${c};border-radius:3px;'></div>`

// A4-style document page used in the hero and editor mockups.
const docPage = ({ compact = false } = {}) => {
  const pad = compact ? '18px 18px' : '22px 22px'
  const row = (item, qty, amount) =>
    `<div style='display:grid;grid-template-columns:1fr 34px 58px;gap:6px;padding:5px 8px;border-top:1px solid #eaecf0;font-size:10px;color:#344054;'><span>${item}</span><span style='text-align:right;'>${qty}</span><span style='text-align:right;'>${amount}</span></div>`
  return `<div style='background:#fff;border:1px solid #eaecf0;border-radius:6px;box-shadow:0 6px 18px rgba(15,14,26,.08);padding:${pad};text-align:left;font-family:inherit;'>
  <div style='display:flex;justify-content:space-between;align-items:flex-start;gap:10px;'>
    <div style='display:flex;align-items:center;gap:7px;'><span style='width:22px;height:22px;border-radius:6px;background:linear-gradient(135deg,#7f56d9,#6434d0);'></span><span style='font-size:12px;font-weight:700;color:#101828;'>Northwind Studio</span></div>
    <div style='text-align:right;'><div style='font-size:13px;font-weight:700;letter-spacing:.06em;color:#101828;'>SERVICE AGREEMENT</div><div style='font-size:10px;color:#697586;margin-top:2px;'>No. ${chip('Submission ID')}</div></div>
  </div>
  <div style='height:1px;background:#eaecf0;margin:12px 0;'></div>
  <div style='font-size:11px;color:#344054;line-height:1.75;'>This agreement is between Northwind Studio and ${chip('Client name')} of ${chip('Company')}, starting on ${chip('Start date')}.</div>
  <div style='margin-top:12px;border:1px solid #eaecf0;border-radius:6px;overflow:hidden;'>
    <div style='display:grid;grid-template-columns:1fr 34px 58px;gap:6px;padding:6px 8px;background:${BRAND_BG};font-size:10px;font-weight:600;color:${BRAND};'><span>${'Services'}</span><span style='text-align:right;'>Qty</span><span style='text-align:right;'>Amount</span></div>
    ${row('Brand identity', '1', '$2,400')}${row('Website design', '1', '$4,800')}${compact ? '' : row('Monthly support', '6', '$1,200')}
  </div>
  <div style='display:flex;justify-content:flex-end;gap:10px;margin-top:8px;font-size:11px;color:#101828;'><span style='color:#697586;'>Total</span><span style='font-weight:700;'>${chip('Total')}</span></div>
  <div style='display:flex;justify-content:space-between;align-items:flex-end;gap:14px;margin-top:14px;'>
    <div style='flex:1;'><div style='height:30px;border:1px dashed #d0d5dd;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1.2;color:#697586;'>${chip('Signature')}</div><div style='font-size:10px;color:#697586;margin-top:4px;'>Client signature</div></div>
    <div style='font-size:10px;color:#697586;text-align:right;'>Signed ${chip('Submitted At')}</div>
  </div>
</div>`
}

const paletteItem = (label, active = false) =>
  `<div style='font-size:11px;color:${active ? BRAND : '#344054'};background:${active ? BRAND_BG : '#fff'};border:1px solid ${active ? '#d9ccf5' : '#eaecf0'};border-radius:7px;padding:6px 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>${label}</div>`

const heroMockupHtml = `<div class='docs-mock' role='img' aria-label='Example of the Formester PDF Editor: a service agreement template with form answers inserted using @' style='width:100%;max-width:540px;min-width:0;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'>
  <div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'>
    <span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span>
    <span class='docs-mock__title' style='margin-left:10px;font-size:12px;color:#697586;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;'>Client onboarding · PDF Editor</span>
    <span style='margin-left:auto;display:flex;gap:6px;align-items:center;'><span class='docs-mock__saved'>${pill('Saved', '#027a48', '#ecfdf3')}</span><span style='font-size:11px;font-weight:600;color:#fff;background:${BRAND};border-radius:999px;padding:4px 10px;white-space:nowrap;'>Download PDF</span></span>
  </div>
  <div class='docs-mock__body' style='display:grid;grid-template-columns:118px minmax(0,1fr);min-height:330px;'>
    <div class='docs-mock__palette' style='border-right:1px solid #eaecf0;padding:12px 10px;display:flex;flex-direction:column;gap:6px;background:#fff;min-width:0;'>
      <div style='display:flex;gap:4px;margin-bottom:4px;'><span style='font-size:10px;color:#697586;padding:3px 4px;white-space:nowrap;'>Basic</span><span style='font-size:10px;font-weight:600;color:${BRAND};border-bottom:2px solid ${BRAND};padding:3px 4px;white-space:nowrap;'>Form fields</span></div>
      ${paletteItem('Client name')}${paletteItem('Company')}${paletteItem('Start date')}${paletteItem('Services', true)}${paletteItem('Signature')}
    </div>
    <div style='min-width:0;padding:18px;background-color:#f2f4f7;background-image:radial-gradient(#e4e7ec 1px,transparent 1px);background-size:14px 14px;'>${docPage({ compact: true })}</div>
  </div>
</div>`

const heroBadge = { text: 'Documents', tag: 'New', link: null }
const heroTitle = [
  { text: 'Document generation that turns every submission into ', highlight: false, color: '#475467', bold: false },
  { text: 'a branded PDF', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'Design a contract, invoice, or certificate once, right on your form. Every response fills it in, and the finished PDF goes out by email, Google Drive, or webhook. No mail merge, no extra tool.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true },
  { link: '#how-it-works', text: 'See how it works', type: 'Secondary', showArrow: false },
]

// Section: definition. Kept identical to the first FAQ answer so the page states one definition.
const DEFINITION =
  'Document generation software fills a template with data to produce finished documents, such as contracts, invoices, and certificates, without copying anything by hand. It is also called document automation. In Formester, the data comes from your form submissions, so every response becomes a branded PDF.'
const defineTitle = [{ text: 'What is document generation software?', highlight: false, color: '#475467', bold: false }]
const defineBody = DEFINITION

// Section: ready-made templates that ship with a connected PDF (constants/pdf-templates.js).
const galleryTitle = [
  { text: 'See the finished PDF ', highlight: false, color: '#475467', bold: false },
  { text: 'before you build', highlight: true, color: '#475467', bold: false },
]
const pdfPreview = (src, alt) =>
  `<img src='${src}' alt='${alt}' width='354' height='500' loading='lazy' style='display:block;width:100%;height:auto;max-height:260px;object-fit:cover;object-position:top;border-radius:6px;border:1px solid #eaecf0;background:#fff;' />`
const galleryCards = [
  {
    tag: 'Contract',
    tagColor: 'violet',
    title: 'Freelance contract',
    body: 'Client and project details, payment terms, and signatures flow from the form into the contract PDF.',
    mockHtml: pdfPreview(
      'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_freelance_contract_page_0001_3533bd09dc.jpg',
      'First page of the freelance contract PDF generated from the form',
    ),
    link: '/templates/freelance-contract-51961/',
    linkText: 'Use this template',
  },
  {
    tag: 'Agreement',
    tagColor: 'blue',
    title: 'NDA agreement',
    body: 'Both parties fill in their details and sign, and each submission produces a finished NDA.',
    mockHtml: pdfPreview(
      'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_nda_agreement_page_0001_97536e320e.jpg',
      'First page of the NDA agreement PDF generated from the form',
    ),
    link: '/templates/nda-agreement-pdf-form-template-49898/',
    linkText: 'Use this template',
  },
  {
    tag: 'Quote',
    tagColor: 'green',
    title: 'Service quote agreement',
    body: 'Services, prices, and acceptance details turn into a quote the customer can keep.',
    mockHtml: pdfPreview(
      'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_service_quote_agreement_page_0001_b89b89c5aa.jpg',
      'First page of the service quote agreement PDF generated from the form',
    ),
    link: '/templates/service-quote-agreement-57745/',
    linkText: 'Use this template',
  },
]

// Section: security. Claims from formester.com/security/ and the app's PDF delivery code.
const securityTitle = [
  { text: 'Documents that stay ', highlight: false, color: '#475467', bold: false },
  { text: 'in safe hands', highlight: true, color: '#475467', bold: false },
]
const securityCards = [
  {
    tag: 'In transit',
    tagColor: 'violet',
    title: 'Encrypted connections',
    body: 'Submissions, notifications, and document downloads travel over TLS-encrypted connections.',
    link: '/security/',
    linkText: 'Read about security',
  },
  {
    tag: 'Access',
    tagColor: 'blue',
    title: 'Links that expire',
    body: 'Respondent downloads use signed links that expire, and PDF links sent by webhook stop working after 7 days.',
  },
  {
    tag: 'Business plan',
    tagColor: 'green',
    title: 'Digitally signed PDFs',
    body: 'Add a Formester digital certificate to exported PDFs, so recipients can see where the document came from.',
  },
]

// Section: three ways to start a template (UI strings match the app's creation modal).
const startTitle = [
  { text: 'Start a template ', highlight: false, color: '#475467', bold: false },
  { text: 'your way', highlight: true, color: '#475467', bold: false },
]
const startMock = (inner) =>
  `<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 12px;text-align:left;font-size:12px;color:#101828;line-height:1.45;'>${inner}</div>`
const startCards = [
  {
    tag: 'Start from scratch',
    tagColor: 'violet',
    title: 'Design on a blank page',
    body: 'Build the layout with drag and drop. Add your logo, headings, shapes, and any form field, then style each one.',
    mockHtml: startMock(
      `<div style='font-size:11px;color:#697586;margin-bottom:6px;'>Page</div><div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('A4', BRAND, BRAND_BG)}${pill('A5', '#475467', '#f2f4f7')}${pill('Letter', '#475467', '#f2f4f7')}${pill('Portrait', '#475467', '#f2f4f7')}</div>`,
    ),
  },
  {
    tag: 'Upload PDF',
    tagColor: 'blue',
    title: 'Use the PDF you already have',
    body: 'Upload your letterhead or an existing document as the base, then place answers and images exactly where they belong.',
    mockHtml: startMock(
      `<div style='display:flex;align-items:center;gap:8px;'><span style='font-size:10px;font-weight:700;color:#b42318;background:#fef3f2;border-radius:5px;padding:4px 6px;'>PDF</span><span>company-letterhead.pdf</span></div>`,
    ),
  },
  {
    tag: 'Create with AI',
    tagColor: 'amber',
    title: 'Describe it in a sentence',
    body: 'Say what the document is for and AI lays out a first draft, already linked to your form’s fields. Then adjust anything.',
    mockHtml: startMock(
      `<div style='font-size:11px;color:#697586;margin-bottom:4px;'>Describe your PDF</div>A professional invoice with company logo, itemised bill table, and payment terms.`,
    ),
  },
]

// Section: editor capabilities.
const editorTitle = [
  { text: 'A real document editor, ', highlight: false, color: '#475467', bold: false },
  { text: 'built into your form', highlight: true, color: '#475467', bold: false },
]
const editorMockHtml = `<div role='img' aria-label='Example service agreement generated from a form submission' style='max-width:360px;margin:0 auto;'>${docPage()}</div>`
const editorPins = [
  {
    label: '@ recall',
    body: 'Type @ in any text block to insert an answer, the submission ID, or the submission date.',
  },
  {
    label: 'Tables from repeaters',
    body: 'Repeater and matrix fields print as tables. Long tables continue on the next page with the header repeated.',
  },
  {
    label: 'Calculated totals',
    body: 'Add a calculation field to the form and place the result on the page, for totals, scores, or fees.',
  },
  {
    label: 'Signatures',
    body: 'A signature drawn on the form appears in its own signature box on the document.',
  },
  {
    label: 'Images and shapes',
    body: 'Add logos and images, then lines, rectangles, and circles. Set a background colour or image for the whole page.',
  },
  {
    label: 'Typography',
    body: 'Choose fonts, sizes, colours, borders, and padding for labels and answers, or style each element on its own.',
  },
  {
    label: 'Pages',
    body: 'A4, A5, or Letter in portrait or landscape, with your own margins. Add or duplicate pages as you need.',
  },
  {
    label: 'File names',
    body: 'Name every file from its answers, like “Invoice for @Name”, so documents are easy to find later.',
  },
]

// Section: how it works.
const howButtons = [{ link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Open the PDF Editor on your form',
    description:
      'Start from scratch, upload a PDF, or describe the document to AI. The form’s fields are ready in the sidebar.',
    rawHtml: stepCard(
      `<div style='font-size:12px;font-weight:600;color:#101828;'>How would you like to create your PDF?</div><div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Start from scratch', BRAND, BRAND_BG)}${pill('Upload PDF', '#475467', '#f2f4f7')}${pill('Create with AI', '#475467', '#f2f4f7')}</div>`,
    ),
  },
  {
    title: 'Place answers with @',
    description: 'Drag fields onto the page or type @ inside any text. Style labels and answers to match your brand.',
    rawHtml: stepCard(
      `<div style='font-size:12px;color:#101828;line-height:1.6;border:1px solid ${BRAND};border-radius:8px;padding:9px 11px;box-shadow:0 0 0 3px ${BRAND_BG};'>Certificate awarded to ${chip('Full name')} for completing ${chip('Course')}.</div>`,
    ),
  },
  {
    title: 'Preview with a real submission',
    description:
      'Pick an existing response and download the PDF with its data, so you see the real result before it goes out.',
    rawHtml: stepCard(
      `<div style='display:flex;justify-content:space-between;gap:10px;font-size:12px;color:#101828;'><span>Download PDF · With submission</span><span style='font-weight:600;color:#027a48;'>Ready</span></div>`,
    ),
  },
  {
    title: 'Choose where it goes',
    description:
      'Attach it to emails, send it to the respondent, save it to Google Drive, or post a link to your webhook.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:8px;flex-wrap:wrap;'>${pill('Admin email', '#175cd3', '#eff8ff')}${pill('Autoresponder', '#175cd3', '#eff8ff')}${pill('Google Drive', '#027a48', '#ecfdf3')}${pill('Webhook', '#475467', '#f2f4f7')}</div>`,
    ),
  },
]

// Section: delivery routes. Each is a real "PDF style: Connected PDF" option in the app.
const deliveryTitle = [
  { text: 'Send every document ', highlight: false, color: '#475467', bold: false },
  { text: 'where it needs to go', highlight: true, color: '#475467', bold: false },
]
const deliveryMock = (label, detail) =>
  `<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 12px;text-align:left;'><div style='font-size:11px;color:#697586;margin-bottom:4px;'>${label}</div><div style='font-size:12px;color:#101828;line-height:1.45;'>${detail}</div></div>`
const deliveryCards = [
  {
    tag: 'Email',
    tagColor: 'blue',
    title: 'Attached to your notification',
    body: 'Your team gets the finished document with every new submission, named the way you set.',
    mockHtml: deliveryMock('PDF Style', 'Connected PDF'),
    link: '/features/email-notification-for-form-submission/',
    linkText: 'Email notifications',
  },
  {
    tag: 'Respondent',
    tagColor: 'violet',
    title: 'Sent to the person who filled it in',
    body: 'Attach the PDF to the autoresponder, or let respondents download it from the thank-you page.',
    mockHtml: deliveryMock('Autoresponder', 'Your receipt is attached'),
    link: '/features/autoresponder-email/',
    linkText: 'Autoresponder',
  },
  {
    tag: 'Workflows',
    tagColor: 'amber',
    title: 'Part of a bigger workflow',
    body: 'Attach the document in a Send email step, after an approval, a condition, or a delay.',
    mockHtml: deliveryMock('Send email step', 'Attach submission PDF'),
    link: '/features/workflows/',
    linkText: 'Workflows',
  },
  {
    tag: 'Google Drive',
    tagColor: 'green',
    title: 'Filed in Google Drive',
    body: 'Save each PDF to Drive, in its own folder per submission if you like. Past submissions can be synced too.',
    mockHtml: deliveryMock('PDF filename', 'Agreement - @Company'),
    link: '/integrations/google-drive/',
    linkText: 'Google Drive integration',
  },
  {
    tag: 'Webhook',
    tagColor: 'rose',
    title: 'A link for your own systems',
    body: 'Webhooks can include a secure link to the PDF, so your CRM or backend can fetch the document.',
    mockHtml: deliveryMock('Payload', 'pdf_url included'),
    link: '/integrations/webhook/',
    linkText: 'Webhooks',
  },
  {
    tag: 'Bulk',
    tagColor: 'blue',
    title: 'Many at once',
    body: 'Select submissions in Results and download their PDFs together. We email you a ZIP when it’s ready.',
    mockHtml: deliveryMock('Download PDFs', '48 submissions selected'),
    link: '/features/form-to-pdf/',
    linkText: 'PDF export',
  },
]

// Section: use cases. Each card links to the page or template set that does the job.
const useCasesTitle = [
  { text: 'Documents teams ', highlight: false, color: '#475467', bold: false },
  { text: 'generate first', highlight: true, color: '#475467', bold: false },
]
const useCaseCards = [
  {
    tag: 'Sales and services',
    tagColor: 'violet',
    title: 'Contracts and agreements',
    body: 'Client details, scope, and a drawn signature land in a ready-to-file agreement the moment the form is signed.',
    link: '/contract-generator/',
    linkText: 'Contract generator',
  },
  {
    tag: 'Finance',
    tagColor: 'blue',
    title: 'Invoices and quotes',
    body: 'Line items from a repeater print as a table, and a calculation field adds up the total.',
    link: '/templates/categories/quotes/',
    linkText: 'Quote templates',
  },
  {
    tag: 'Training and events',
    tagColor: 'amber',
    title: 'Auto-generate certificates from a form',
    body: 'Each person who passes a course or attends an event gets a certificate with their name and date.',
    link: '/blog/how-to-pre-fill-forms-for-certificates-and-feedback/',
    linkText: 'How to auto-generate certificates',
  },
  {
    tag: 'Orders',
    tagColor: 'green',
    title: 'Receipts and confirmations',
    body: 'Send a branded confirmation to every customer through the autoresponder, with their order details.',
    link: '/features/autoresponder-email/',
    linkText: 'Autoresponder emails',
  },
  {
    tag: 'Operations',
    tagColor: 'rose',
    title: 'Inspection and audit reports',
    body: 'Checklist answers, uploaded photos, and the inspector’s signature become one report per visit.',
    link: '/inspection-form-builder/',
    linkText: 'Inspection form builder',
  },
  {
    tag: 'Intake',
    tagColor: 'blue',
    title: 'Applications and intake summaries',
    body: 'Turn a long application into a clean summary and file it in Google Drive, one folder per applicant.',
    link: '/integrations/google-drive/',
    linkText: 'Google Drive integration',
  },
]

// Section: comparison. Competitor figures from vendor pricing pages, checked 13 Oct 2026.
const compareTitle = [
  { text: 'One tool ', highlight: false, color: '#475467', bold: false },
  { text: 'instead of two', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  { feature: 'Where the template lives', us: 'On the form, in a PDF Editor tab', them: 'In a separate app or add-on' },
  {
    feature: 'Getting the data in',
    us: 'Already there, type @ to insert',
    them: 'Map merge fields or connect with Zapier',
  },
  {
    feature: 'Price to start',
    us: 'Business plan, $45/mo billed yearly',
    them: 'Formstack: Suite plan, $250/mo billed yearly',
  },
  { feature: 'Preview with real data', us: 'Any existing submission', them: 'Varies by tool' },
  { feature: 'Start from', us: 'Blank page, your PDF, or AI', them: 'Usually a Word or PDF template' },
  { feature: 'Delivery', us: 'Email, respondent, workflow, Drive, webhook', them: 'Set up again in the add-on' },
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

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is document generation software?',
    body: DEFINITION,
  },
  {
    id: 2,
    header: 'How do I turn form submissions into PDFs automatically?',
    body: 'Open your form, go to the PDF Editor, and build a template. Then choose “Connected PDF” as the PDF style in your email notification, autoresponder, workflow, Google Drive, or webhook settings. Each new submission is turned into a PDF and delivered there.',
  },
  {
    id: 3,
    header: 'Can I use my own PDF or letterhead?',
    body: 'Yes. Choose “Upload PDF” and your file becomes the base of the template. You can then place answers and images on top of it.',
  },
  {
    id: 4,
    header: 'Can AI create the template for me?',
    body: 'Yes. Choose “Create with AI”, describe the document in a sentence, and AI builds a first layout linked to your form’s fields. It uses your plan’s AI credits.',
  },
  {
    id: 5,
    header: 'Can a document include line items and totals?',
    body: 'Yes. Repeater and matrix fields print as tables, and long tables continue onto the next page with the header repeated. Use a calculation field for totals.',
  },
  {
    id: 6,
    header: 'Where can generated documents be sent?',
    body: 'To your team as an email attachment, to the respondent through the autoresponder or a download on the thank-you page, through a workflow Send email step, to Google Drive, or as a secure link in a webhook. You can also download them one at a time or in bulk.',
  },
  {
    id: 7,
    header: 'Can documents be signed?',
    body: 'A signature drawn on the form appears in the document’s signature box. On the Business plan you can also digitally sign exported PDFs with a Formester certificate.',
  },
  {
    id: 10,
    header: 'How are generated documents kept secure?',
    body: 'Submissions and documents travel over TLS-encrypted connections. Respondent downloads use signed links that expire, and PDF links sent by webhook stop working after 7 days. On the Business plan you can also add a Formester digital certificate to exported PDFs.',
  },
  {
    id: 8,
    header: 'Which plan includes Documents?',
    body: 'Documents is part of the Business plan, which costs $45 a month billed yearly or $49 billed monthly. You can build and test your forms on the free plan first.',
  },
  {
    id: 9,
    header: 'How is this different from Formstack Documents?',
    body: 'Formstack Documents is a standalone tool built to pull data from many systems, and it is sold in Formstack’s Suite plan. Formester Documents is built into the form builder, so the fields are already connected and delivery uses the same settings as your form.',
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
    { property: 'og:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@_formester_' },
    { name: 'twitter:title', content: META_TITLE },
    { name: 'twitter:description', content: META_DESCRIPTION },
    { name: 'twitter:image', content: 'https://formester.com/formester-logo-meta-image.png' },
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Formester Documents',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: PAGE_URL,
    description: META_DESCRIPTION,
    offers: { '@type': 'Offer', price: '45', priceCurrency: 'USD' },
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
/* Hero mockup is injected as raw HTML, so these rules stay unscoped and namespaced. */
.hero-v2__media:has(.docs-mock) {
  min-width: 0;
}
@media (max-width: 640px) {
  .docs-mock__title,
  .docs-mock__saved {
    display: none !important;
  }
  .docs-mock__body {
    grid-template-columns: minmax(0, 1fr) !important;
  }
  .docs-mock__palette {
    display: none !important;
  }
}
</style>

<style scoped>
.dg-compare-more {
  margin: calc(-1 * var(--space-10)) auto 0;
  padding: 0 var(--space-6) var(--space-16);
  max-width: 880px;
  text-align: center;
  font-size: 15px;
  color: var(--gray-600, #475467);
}
.dg-compare-more a {
  color: #6434d0;
  text-decoration: underline;
}

.dg-define {
  background: #fff;
  padding: var(--space-16) var(--space-6) 0;
}

.dg-define :deep(.sh__desc) {
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.dg-define__more {
  max-width: 760px;
  margin: var(--space-4) auto 0;
  text-align: center;
  color: var(--gray-600, #475467);
  font-size: 15px;
}

.dg-define__more a {
  color: var(--violet-600, #6941c6);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
