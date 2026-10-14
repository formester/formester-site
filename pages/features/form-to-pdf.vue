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

    <CardGrid
      id="options"
      eyebrow="Two ways to start"
      description="Use a ready-made layout today, or design your own PDF when the document needs your brand."
      columns="2"
      :title="optionsTitle"
      :cards="optionCards"
      class="page-component-item"
    />

    <StickyStepsSection
      id="how-it-works"
      badge="How it works"
      heading="How to convert a form to PDF"
      description="No template to build. Formester lays out each response for you, and you decide where the PDF goes."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <CardGrid
      id="delivery"
      eyebrow="Delivery"
      description="Pick a PDF style wherever Formester sends or stores a submission. The PDF is generated at that moment."
      columns="3"
      :title="deliveryTitle"
      :cards="deliveryCards"
      class="page-component-item"
    />

    <CardGrid
      id="settings"
      eyebrow="PDF settings"
      description="A few form settings decide what goes into each PDF and what the file is called."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="settingsTitle"
      :cards="settingsCards"
      class="page-component-item"
    />

    <CardGrid
      id="branded-pdf"
      eyebrow="Your own design"
      description="When a plain record is not enough, build a branded template in the PDF Editor on the same form. Choose “Connected PDF” as the style, and every channel above sends your design instead."
      columns="3"
      :title="brandedTitle"
      :cards="brandedCards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Use cases"
      description="Anywhere a response needs to live as a document: filed, shared, or sent back to the person who filled it in."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
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
      heading="Turn your next submission into a PDF"
      description="Publish a form, collect a response, and download it as a PDF or send it on automatically."
      :buttons="ctaButtons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/features/form-to-pdf/'
const META_TITLE = 'Form to PDF: Generate a PDF From Every Submission | Formester'
const META_DESCRIPTION =
  'Generate a PDF from every form submission with no setup. Download one or many, attach PDFs to emails, save them to Google Drive, or send a link by webhook.'

const BRAND = '#6434d0'
const BRAND_BG = '#f0ebfa'

const pill = (text, fg, bg) =>
  `<span style='font-size:11px;font-weight:600;color:${fg};background:${bg};border-radius:999px;padding:3px 9px;white-space:nowrap;'>${text}</span>`
const check = (on = true) =>
  `<span style='flex:none;width:14px;height:14px;border-radius:4px;${on ? `background:${BRAND};` : 'border:1px solid #d0d5dd;background:#fff;'}color:#fff;display:inline-flex;align-items:center;justify-content:center;'>${on ? "<svg width='9' height='9' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg>" : ''}</span>`
const pdfBadge = `<span style='flex:none;display:inline-flex;align-items:center;justify-content:center;width:18px;height:22px;border-radius:3px;background:#fef3f2;color:#d92d20;font-size:7px;font-weight:800;'>PDF</span>`

// Document layout PDF: form name, then each question and its answer in order.
const qa = (q, a) =>
  `<div style='padding:7px 0;border-top:1px solid #f2f4f7;'><div style='font-size:10px;color:#697586;'>${q}</div><div style='font-size:11.5px;color:#101828;font-weight:500;margin-top:2px;'>${a}</div></div>`
const documentLayout = `<div style='background:#fff;border:1px solid #eaecf0;border-radius:6px;box-shadow:0 6px 18px rgba(15,14,26,.08);padding:16px 16px 10px;text-align:left;'>
  <div style='display:flex;align-items:center;gap:7px;margin-bottom:10px;'>${pdfBadge}<span style='font-size:12px;font-weight:700;color:#101828;'>Client intake</span></div>
  ${qa('Full name', 'Jordan Reyes')}${qa('Email', 'jordan@acme.com')}${qa('Service needed', 'Website redesign')}${qa('Start date', '12 June 2026')}
</div>`

const resultRow = (name, date, on) =>
  `<div style='display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid ${on ? '#d9ccf5' : '#eaecf0'};border-radius:8px;background:${on ? '#fbfaff' : '#fff'};font-size:11.5px;color:#101828;'>${check(on)}<span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;'>${name}</span><span style='margin-left:auto;color:#697586;white-space:nowrap;'>${date}</span></div>`
const styleOption = (label, on) =>
  `<div style='display:flex;align-items:center;gap:7px;font-size:11px;color:${on ? BRAND : '#344054'};font-weight:${on ? 600 : 400};padding:5px 8px;border-radius:6px;background:${on ? BRAND_BG : 'transparent'};'><span style='flex:none;width:10px;height:10px;border-radius:50%;border:${on ? `3px solid ${BRAND}` : '1px solid #d0d5dd'};background:#fff;'></span>${label}</div>`

const heroMockupHtml = `<div class='ftp-mock' role='img' aria-label='Example of Formester Results: two submissions selected, PDF style set to Document layout, and the PDF that is produced' style='width:100%;max-width:540px;min-width:0;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'>
  <div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'>
    <span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span>
    <span style='margin-left:10px;font-size:12px;color:#697586;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;'>Client intake · Results</span>
  </div>
  <div class='ftp-mock__body' style='display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;padding:16px;background:#f9fafb;'>
    <div style='display:flex;flex-direction:column;gap:7px;min-width:0;'>
      ${resultRow('Jordan Reyes', '12 Jun', true)}${resultRow('Priya Shah', '12 Jun', true)}${resultRow('Sam Okafor', '11 Jun', false)}
      <div style='margin-top:6px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px;'>
        <div style='font-size:11px;font-weight:600;color:#101828;margin-bottom:6px;'>PDF Style</div>
        ${styleOption('Document layout', true)}${styleOption('Form Layout', false)}${styleOption('Connected PDF', false)}
        <div style='margin-top:9px;text-align:center;font-size:11px;font-weight:600;color:#fff;background:${BRAND};border-radius:999px;padding:7px 10px;white-space:nowrap;'>Download 2 PDFs</div>
      </div>
    </div>
    <div class='ftp-mock__doc' style='min-width:0;'>${documentLayout}</div>
  </div>
</div>`

const heroBadge = { text: 'Form to PDF', tag: 'Business', link: null }
const heroTitle = [
  { text: 'Generate a PDF from ', highlight: false, color: '#475467', bold: false },
  { text: 'every form submission', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'Form to PDF with no setup. Each response becomes a clean PDF you can download from Results, attach to emails, or send to Google Drive and your webhook. Need your own branded layout? Design it once in the PDF Editor.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true },
  { link: '#how-it-works', text: 'See how it works', type: 'Secondary', showArrow: false },
]

// Section: the two options. Default layouts need no setup; branded templates live on the pillar page.
const optionsTitle = [
  { text: 'Two ways to turn ', highlight: false, color: '#475467', bold: false },
  { text: 'a form into a PDF', highlight: true, color: '#475467', bold: false },
]
const optionMock = (inner) =>
  `<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 12px;text-align:left;font-size:12px;color:#101828;line-height:1.45;'>${inner}</div>`
const optionCards = [
  {
    tag: 'No setup',
    tagColor: 'violet',
    title: 'Ready-made layouts',
    body: 'Document layout lists every question and answer in order. Form Layout prints your form as the respondent saw it, filled in. Nothing to design.',
    mockHtml: optionMock(
      `<div style='font-size:11px;color:#697586;margin-bottom:6px;'>Default PDF type</div><div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Document layout', BRAND, BRAND_BG)}${pill('Form Layout', '#475467', '#f2f4f7')}</div>`,
    ),
    link: '#how-it-works',
    linkText: 'See how it works',
  },
  {
    tag: 'Your design',
    tagColor: 'blue',
    title: 'Your own branded PDF',
    body: 'Build a contract, invoice, or certificate with your logo and layout. Each submission fills it in and goes out through the same channels.',
    mockHtml: optionMock(
      `<div style='font-size:11px;color:#697586;margin-bottom:6px;'>PDF Style</div><div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Connected PDF', '#175cd3', '#eff8ff')}</div>`,
    ),
    link: '/features/document-generation/',
    linkText: 'Generate branded documents',
  },
]

// Section: how it works. UI strings match the app (Results, PDF Style, Download PDFs).
const howButtons = [{ link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Collect responses',
    description: 'Publish your form, or send a test entry. Every submission lands in your form’s Results.',
    rawHtml: stepCard(
      `<div style='display:flex;align-items:center;gap:9px;font-size:12px;color:#101828;'><span style='width:7px;height:7px;border-radius:50%;background:#27c93f;'></span><span style='font-weight:600;'>New response · Jordan Reyes</span></div>`,
    ),
  },
  {
    title: 'Pick a PDF style',
    description:
      'In form settings, set the default PDF type to Document layout or Form Layout. You can also change the style each time you download.',
    rawHtml: stepCard(
      `<div style='font-size:12px;font-weight:600;color:#101828;'>Default PDF type</div><div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Document layout', BRAND, BRAND_BG)}${pill('Form Layout', '#475467', '#f2f4f7')}</div>`,
    ),
  },
  {
    title: 'Download one or many',
    description:
      'In Results, choose Download as PDF from any submission’s menu. Or select several and choose Download PDFs. We email you a download link when they are ready.',
    rawHtml: stepCard(
      `<div style='display:flex;align-items:center;gap:9px;font-size:12px;color:#101828;'>${pdfBadge}<span style='font-weight:600;white-space:nowrap;'>Download PDFs</span><span style='margin-left:auto;color:#697586;white-space:nowrap;'>48 selected</span></div>`,
    ),
  },
  {
    title: 'Send it automatically',
    description:
      'Attach the PDF to your notification email or the autoresponder, save it to Google Drive, or add a PDF link to your webhook.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:8px;flex-wrap:wrap;'>${pill('Admin email', '#175cd3', '#eff8ff')}${pill('Autoresponder', '#175cd3', '#eff8ff')}${pill('Google Drive', '#027a48', '#ecfdf3')}${pill('Webhook', '#475467', '#f2f4f7')}</div>`,
    ),
  },
]

// Section: delivery. Each card is a real place in the app where a PDF style is chosen.
const deliveryTitle = [
  { text: 'Send every PDF ', highlight: false, color: '#475467', bold: false },
  { text: 'where it needs to go', highlight: true, color: '#475467', bold: false },
]
const deliveryMock = (label, detail) =>
  `<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 12px;text-align:left;'><div style='font-size:11px;color:#697586;margin-bottom:4px;'>${label}</div><div style='font-size:12px;color:#101828;line-height:1.45;'>${detail}</div></div>`
const deliveryCards = [
  {
    tag: 'Email',
    tagColor: 'blue',
    title: 'Attached to your notification',
    body: 'Turn on “Attach Form Submissions as PDF” and your team gets the PDF with every new response, named the way you set.',
    mockHtml: deliveryMock('PDF Style', 'Document layout'),
    link: '/features/email-notification-for-form-submission/',
    linkText: 'Email notifications',
  },
  {
    tag: 'Respondent',
    tagColor: 'violet',
    title: 'A copy for the respondent',
    body: 'Attach the PDF to the autoresponder, so everyone who submits keeps a record of what they sent.',
    mockHtml: deliveryMock('Autoresponder', 'Your submission is attached'),
    link: '/features/autoresponder-email/',
    linkText: 'Autoresponder',
  },
  {
    tag: 'Thank-you page',
    tagColor: 'green',
    title: 'Download right after submitting',
    body: 'Turn on “Let respondents download a PDF” to show a download button once the form is sent.',
    mockHtml: deliveryMock('Thank-you page', 'Download PDF'),
  },
  {
    tag: 'Workflows',
    tagColor: 'amber',
    title: 'Part of a bigger workflow',
    body: 'Attach the submission PDF in a Send email step, after an approval, a condition, or a delay.',
    mockHtml: deliveryMock('Send email step', 'Attach submission PDF'),
    link: '/features/workflows/',
    linkText: 'Workflows',
  },
  {
    tag: 'Google Drive',
    tagColor: 'green',
    title: 'Filed in Google Drive',
    body: 'Save each PDF to a Drive folder, with a subfolder per submission if you like. Past submissions can be uploaded too.',
    mockHtml: deliveryMock('PDF filename', 'Intake - @Full name'),
    link: '/integrations/google-drive/',
    linkText: 'Google Drive integration',
  },
  {
    tag: 'Webhook',
    tagColor: 'rose',
    title: 'A link for your own systems',
    body: 'Webhooks can include a link to the PDF, so your CRM or backend can fetch it. The link works for 7 days.',
    mockHtml: deliveryMock('Payload', 'pdf_url included'),
    link: '/integrations/webhook/',
    linkText: 'Webhooks',
  },
]

// Section: PDF settings (form settings → PDF in the app).
const settingsTitle = [
  { text: 'Control what goes ', highlight: false, color: '#475467', bold: false },
  { text: 'into the PDF', highlight: true, color: '#475467', bold: false },
]
const settingsCards = [
  {
    tag: 'File names',
    tagColor: 'violet',
    title: 'Named from the answers',
    body: 'Use @ to build file names from the response, like “Invoice for @Name”, so every PDF is easy to find later.',
    mockHtml: deliveryMock('PDF file name', 'Invoice for @Name'),
  },
  {
    tag: 'Content',
    tagColor: 'blue',
    title: 'Only what matters',
    body: 'Fields hidden by your form logic stay out. Choose to show all options of a field, hide the form name, or hide variables like the quiz score.',
    mockHtml: deliveryMock('Show all options in PDF', 'On'),
  },
  {
    tag: 'Trust',
    tagColor: 'green',
    title: 'Digitally signed PDFs',
    body: 'Turn on “Sign PDF” to add a Formester digital certificate to exported PDFs, so recipients can see where the file came from.',
    mockHtml: deliveryMock('Sign PDF', 'On'),
  },
]

// Section: branded PDFs. Short hand-off to the Document Generation page.
const brandedTitle = [
  { text: 'Your own layout ', highlight: false, color: '#475467', bold: false },
  { text: 'in the PDF Editor', highlight: true, color: '#475467', bold: false },
]
const brandedCards = [
  {
    tag: 'Start from scratch',
    tagColor: 'violet',
    title: 'Drag and drop a template',
    body: 'Add your logo, headings, and any form field, then style each one. Long answers and tables flow onto the next page.',
    link: '/features/document-generation/#editor',
    linkText: 'See the PDF Editor',
  },
  {
    tag: 'Upload PDF',
    tagColor: 'blue',
    title: 'Use your letterhead',
    body: 'Upload a PDF you already have as the base, then place answers and images where they belong.',
  },
  {
    tag: 'Templates',
    tagColor: 'amber',
    title: 'Start from a ready-made one',
    body: 'Some form templates come with a branded PDF already connected, such as contracts, NDAs, and quotes.',
    link: '/features/document-generation/#templates',
    linkText: 'Browse templates with a PDF',
  },
]

// Section: use cases.
const useCasesTitle = [
  { text: 'PDFs teams ', highlight: false, color: '#475467', bold: false },
  { text: 'send every day', highlight: true, color: '#475467', bold: false },
]
const useCaseCards = [
  {
    tag: 'Orders',
    tagColor: 'violet',
    title: 'Order confirmations',
    body: 'Every customer gets their order details as a PDF in the autoresponder, without anyone copying them out.',
  },
  {
    tag: 'Intake',
    tagColor: 'blue',
    title: 'Applications and intake',
    body: 'Save a PDF of each application to Google Drive, one folder per applicant, ready for review.',
  },
  {
    tag: 'Consent',
    tagColor: 'green',
    title: 'Signed consent forms',
    body: 'A signature drawn on the form appears in the PDF, so each signed consent is a complete record.',
    link: '/consent-form-generator/',
    linkText: 'Consent forms',
  },
  {
    tag: 'Operations',
    tagColor: 'amber',
    title: 'Inspection reports',
    body: 'Checklist answers and uploaded photos come together in one PDF per visit.',
    link: '/inspection-form-builder/',
    linkText: 'Inspection form builder',
  },
  {
    tag: 'Events',
    tagColor: 'rose',
    title: 'Registrations',
    body: 'Keep a printable record of every attendee, or download all registrations as PDFs before the event.',
  },
  {
    tag: 'Training',
    tagColor: 'blue',
    title: 'Quizzes and assessments',
    body: 'The Document layout can include the quiz score, so each person’s result is on file.',
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
    comment:
      'The submission results page is nicely laid out as a table of entries … PDF and emailing options are solid and easy to use.',
  },
  {
    id: 2,
    name: 'Mark J.',
    position: 'Webmaster, small business (G2 review)',
    comment:
      'Formester is a single, drop-in, full-service form-to-email solution that provides all the functions my website requires.',
  },
  {
    id: 3,
    name: 'Verified user in Hospital & Health Care',
    position: 'Small business (G2 review)',
    comment:
      'The response section is also well organised, with individual submissions, summaries, and analytics in one place. … I also get an email notification as soon as a response comes in',
  },
]

const faqTitle = [{ text: 'Form to PDF questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'How do I convert a form submission to PDF?',
    body: 'In your form’s Results, choose Download as PDF from the submission’s menu and pick a style. Formester lays out the response for you in the Document layout or Form Layout, so there is no template to build.',
  },
  {
    id: 2,
    header: 'Can I generate PDFs from many submissions at once?',
    body: 'Yes. Select the submissions in Results, choose Download PDFs, and pick a PDF style. We email you a download link when the PDFs are ready.',
  },
  {
    id: 3,
    header: 'What is the difference between Document layout and Form Layout?',
    body: 'Document layout lists each question and its answer in order, like a clean record. Form Layout prints your form as the respondent saw it, with their answers filled in.',
  },
  {
    id: 4,
    header: 'Can respondents get a PDF of their submission?',
    body: 'Yes. Attach the PDF to the autoresponder email, or turn on “Let respondents download a PDF” to show a download button after they submit.',
  },
  {
    id: 5,
    header: 'Can PDFs be sent to Google Drive or another app?',
    body: 'Yes. The Google Drive integration saves a PDF for each submission, with an optional subfolder per submission. Webhooks can include a link to the PDF that works for 7 days, and a workflow Send email step can attach it.',
  },
  {
    id: 6,
    header: 'Can I name the PDF files?',
    body: 'Yes. Turn on a custom PDF file name in form settings and use @ to insert answers, like “Invoice for @Name”. Email notifications and Google Drive have their own file name settings too.',
  },
  {
    id: 7,
    header: 'Can I use my own design or letterhead?',
    body: 'Yes. Build a template in the PDF Editor from scratch, on top of a PDF you upload, or with AI. Then choose “Connected PDF” as the style, and downloads, emails, Google Drive, and webhooks use your design.',
  },
  {
    id: 8,
    header: 'Which plan includes form to PDF?',
    body: 'PDF exports and the PDF Editor are part of the Business plan, which costs $45 a month billed yearly or $49 billed monthly. You can build and test your forms on the free plan first.',
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
    {
      property: 'og:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_pdf_export_feature_page_hero_image_eafaebc6e8.png',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@_formester_' },
    { name: 'twitter:title', content: META_TITLE },
    { name: 'twitter:description', content: META_DESCRIPTION },
    {
      name: 'twitter:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_pdf_export_feature_page_hero_image_eafaebc6e8.png',
    },
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Formester Form to PDF',
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
.hero-v2__media:has(.ftp-mock) {
  min-width: 0;
}
@media (max-width: 640px) {
  .ftp-mock__body {
    grid-template-columns: minmax(0, 1fr) !important;
  }
}
</style>
