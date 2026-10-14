<template>
  <div>
    <AiHero
      :title="heroTitle"
      :description="heroDescription"
      type="Form"
      buttonText="Generate my consent form"
      :placeholder="heroPlaceholder"
      :suggestions="heroSuggestions"
      :footerItems="heroFooterItems"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by leading organisations" class="page-component-item" />

    <StickyStepsSection
      id="how-it-works"
      badge="How it works"
      heading="How to create an online consent form"
      description="Start from a prompt, a template, or the paper form you use today. You can change every field before you share it."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <AlternatingRows
      id="what-it-captures"
      eyebrow="What gets recorded"
      :title="capturesTitle"
      description="Each response keeps the signer's answers and signature together, with the details you need to show who agreed and when."
      :rows="capturesRows"
      class="page-component-item"
    />

    <AlternatingRows
      id="signed-pdf"
      eyebrow="Business plan"
      :title="pdfTitle"
      description="Some consents need to live as a document. On the Business plan, from $45/mo billed yearly, each response can become a PDF with the drawn signature in place."
      background="var(--gray-25, #fcfcfd)"
      :rows="pdfRows"
      class="page-component-item"
    />

    <CardGrid
      id="templates"
      eyebrow="Templates"
      description="Every template below already has a signature field. Open one, change the wording to fit, and share it."
      columns="4"
      :title="templatesTitle"
      :cards="templateCards"
      class="page-component-item"
    />

    <CardGrid
      id="use-cases"
      eyebrow="Use cases"
      description="Marketing, events, schools, HR and research teams use Formester to replace paper consent forms."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <CardGrid
      id="security"
      eyebrow="Security"
      description="Consent forms hold personal details, so your data is encrypted and is never used to train AI."
      columns="3"
      :title="securityTitle"
      :cards="securityCards"
      class="page-component-item"
    />

    <TestimonialsV2 :heading="testimonialsHeading" :testimonials="testimonials" class="page-component-item" />

    <FaqSection id="faq" centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Create your consent form"
      description="Build it and collect signatures on the free plan. Add signed PDFs with the Business plan, from $45/mo billed yearly."
      :buttons="ctaButtons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import AiHero from '@/components/features/AiHero.vue'
import AlternatingRows from '@/components/v2/AlternatingRows.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/consent-form-generator/'
const META_TITLE = 'Online Consent Form Generator with E-Signature | Formester'
const META_DESCRIPTION =
  'Create an online consent form in minutes with AI or a template. Collect drawn signatures on any device and keep a signed PDF of every response.'
const OG_IMAGE = 'https://formester.com/images/blog/auto-fill-pdf/blank-vs-filled-contract.webp'

// Hero: the live AI generator (components/features/AiHero.vue), preset with consent prompts.
const heroTitle = [
  { text: 'Free online consent form generator ', highlight: false, color: '#000000', bold: false },
  { text: 'with e-signature', highlight: true, color: '#000000', bold: false },
]
const heroDescription =
  'Describe the consent you need or upload your paper form. Formester builds an online consent form with a signature field, ready to share as a link.'
const heroPlaceholder =
  'Describe your consent form. For example: a photo release for a product launch shoot, with name, email, how we may use the images, a consent checkbox and a signature.'
const heroSuggestions = [
  {
    label: 'Photo release',
    text: 'Create a photo and video release form for a marketing shoot. Ask for the person’s name and email, how we may use their images, a consent checkbox, and a signature.',
  },
  {
    label: 'Event waiver',
    text: 'Create a liability waiver for a weekend hiking event with participant details, an emergency contact, a risk acknowledgement checkbox, and a signature.',
  },
  {
    label: 'Parental consent',
    text: 'Create a parental consent form for a school field trip with the student’s name, the parent’s name and phone number, permission checkboxes, and the parent’s signature.',
  },
  {
    label: 'Research consent',
    text: 'Create an interview consent form for a user research study that explains how recordings are used, with opt-in checkboxes for recording and quotes, and a signature.',
  },
]
const heroFooterItems = [
  { text: 'Free to build and collect signatures' },
  { text: 'Signed PDFs on the Business plan' },
  { text: 'No sign-up to try' },
]

// Section: how it works.
const howButtons = [{ id: 1, link: SIGN_UP_URL, text: 'Start free', type: 'Primary' }]
const howSteps = [
  {
    title: 'Describe it or pick a template',
    description:
      'Type what the consent covers, upload your current paper or PDF form, or start from a consent form template. The AI turns it into an editable form in seconds.',
  },
  {
    title: 'Add the consent details',
    description:
      'Write the consent text, then add a Terms and Conditions checkbox and a Signature field. Make both required, so nobody can submit without agreeing and signing.',
  },
  {
    title: 'Share it and collect signatures',
    description:
      'Send the link or embed the form on your website. People read, tick and sign with a finger, mouse or trackpad, and each response is stored in Results.',
  },
]

// Real product screenshots, reused from the form-to-PDF and auto-fill PDF work. Sizing lives in the page CSS below.
const shot = (file, width, height, alt) =>
  `<img src='${file}' width='${width}' height='${height}' alt='${alt}' loading='lazy' class='cfg-shot' />`

// Section: what a signed consent captures. Facts from audit.md section 2.
const capturesTitle = [
  { text: 'What a signed consent form ', highlight: false, color: '#475467', bold: false },
  { text: 'captures', highlight: true, color: '#475467', bold: false },
]
const capturesRows = [
  {
    mediaHtml: shot(
      '/images/blog/auto-fill-pdf/form-with-signature.webp',
      1280,
      1440,
      'Formester form builder with a required Signature field added to the bottom of a sample form',
    ),
    kicker: 'Signature field',
    title: 'One record for each signer',
    body: 'The signature field lets people draw their signature on a phone, tablet or computer. It is saved with the rest of their answers, so the signature and what they agreed to stay together.',
    bullets: [
      { text: 'A drawn signature, with a button to clear it and sign again' },
      { text: 'A consent checkbox and required fields, so nobody sends a half-finished form' },
      { text: 'Name, date, guardian details or anything else you ask for' },
      { text: 'File uploads for a photo ID or a supporting document' },
      { text: 'Submission time and IP address, unless you turn on anonymous submissions' },
      { text: 'Version history when your team edits a response later' },
    ],
    link: '/features/electronic-signature/',
    linkText: 'See the signature field',
  },
]

// Section: signed PDF. Business only (can_generate_submission_pdf).
const pdfTitle = [
  { text: 'A signed PDF of ', highlight: false, color: '#475467', bold: false },
  { text: 'every consent', highlight: true, color: '#475467', bold: false },
]
const pdfRows = [
  {
    mediaHtml: shot(
      '/images/blog/auto-fill-pdf/blank-vs-filled-contract.webp',
      1640,
      860,
      'A blank agreement PDF next to the same PDF filled in from a form response, with the drawn signature on the signature line',
    ),
    kicker: 'Your layout or ours',
    title: 'The signature appears in the PDF',
    body: 'Use a ready-made layout that lists every answer, or design your own document in the PDF Editor and place the signature, the consent text and the submission time where you want them.',
    link: '/features/document-generation/',
    linkText: 'Design your own consent PDF',
  },
  {
    mediaHtml: shot(
      '/images/blog/auto-fill-pdf/pdf-settings.webp',
      1280,
      794,
      'Formester PDF settings with Let respondents download a PDF turned on and the default PDF type set to Connected PDF',
    ),
    kicker: 'Delivery',
    title: 'Send it where it needs to go',
    body: 'Each signed PDF is created when the response comes in. Choose where it goes:',
    bullets: [
      { text: 'A copy for the signer, attached to the autoresponder email' },
      { text: 'An attachment on your team’s notification email' },
      { text: 'A download button on the thank-you page' },
      { text: 'A file in your Google Drive folder' },
      { text: 'One or many PDFs downloaded from Results' },
    ],
    link: '/features/form-to-pdf/',
    linkText: 'How form to PDF works',
  },
]

// Section: consent templates. All URLs checked for HTTP 200 on formester.com (14 Oct 2026).
const templatesTitle = [
  { text: 'Consent form ', highlight: false, color: '#475467', bold: false },
  { text: 'templates', highlight: true, color: '#475467', bold: false },
]
const templateCards = [
  {
    tag: 'Marketing',
    tagColor: 'violet',
    title: 'Photo and media release',
    body: 'Get permission to use someone’s photos and video in ads, social posts and print.',
    link: '/templates/photo-release-form/',
    linkText: 'Use this template',
  },
  {
    tag: 'Media',
    tagColor: 'blue',
    title: 'Video consent form',
    body: 'Collect consent before you film interviews, testimonials or event footage.',
    link: '/templates/video-consent-form/',
    linkText: 'Use this template',
  },
  {
    tag: 'Schools',
    tagColor: 'green',
    title: 'Student consent form',
    body: 'Parents give permission for trips, activities and photos from their phone.',
    link: '/templates/student-consent-form-template/',
    linkText: 'Use this template',
  },
  {
    tag: 'Events',
    tagColor: 'amber',
    title: 'Event waiver and media release',
    body: 'Attendees accept the event risks and agree to be photographed in one form.',
    link: '/templates/event-waiver-form/',
    linkText: 'Use this template',
  },
  {
    tag: 'Fitness',
    tagColor: 'rose',
    title: 'Gym membership and liability waiver',
    body: 'New members sign the liability waiver as part of joining.',
    link: '/templates/gym-waiver-form/',
    linkText: 'Use this template',
  },
  {
    tag: 'HR',
    tagColor: 'violet',
    title: 'Background screening consent',
    body: 'Candidates give permission for a background check before you order one.',
    link: '/templates/background-screening-consent-form-47460/',
    linkText: 'Use this template',
  },
  {
    tag: 'Research',
    tagColor: 'blue',
    title: 'Interview consent form',
    body: 'Participants agree to an interview and to how you will record and use it.',
    link: '/templates/interview-consent-form-13882/',
    linkText: 'Use this template',
  },
  {
    tag: 'General',
    tagColor: 'green',
    title: 'Digital consent form',
    body: 'A general consent form you can adapt to your own agreement.',
    link: '/templates/digital-consent-form-47461/',
    linkText: 'Use this template',
  },
]

// Section: use cases. Each card links to the category or feature that does that job.
const useCasesTitle = [
  { text: 'Consent forms for ', highlight: false, color: '#475467', bold: false },
  { text: 'every team', highlight: true, color: '#475467', bold: false },
]
const useCaseCards = [
  {
    tag: 'Marketing',
    tagColor: 'violet',
    title: 'Marketing and media teams',
    body: 'Collect a signed release from everyone in a shoot before the photos go into a campaign.',
    link: '/templates/categories/media-release/',
    linkText: 'Media release templates',
  },
  {
    tag: 'Events',
    tagColor: 'amber',
    title: 'Events, gyms and studios',
    body: 'Have every participant sign the waiver online before they arrive, so check-in stays short.',
    link: '/templates/categories/liability-release/',
    linkText: 'Liability release templates',
  },
  {
    tag: 'Schools',
    tagColor: 'green',
    title: 'Schools and youth programs',
    body: 'Send each family a link with the student’s name already filled in, so parents only read, tick and sign.',
    link: '/features/pre-fill-fields/',
    linkText: 'Pre-fill form fields',
  },
  {
    tag: 'HR',
    tagColor: 'blue',
    title: 'HR and recruiting',
    body: 'Candidates sign the consent and upload a photo ID in the same form.',
    link: '/features/file-upload-forms/',
    linkText: 'File upload forms',
  },
  {
    tag: 'Research',
    tagColor: 'rose',
    title: 'Research and UX teams',
    body: 'Show recording questions only to people who agree to be recorded, with conditional logic on the Personal plan.',
    link: '/features/conditional-logic/',
    linkText: 'Conditional logic',
  },
  {
    tag: 'Any team',
    tagColor: 'violet',
    title: 'Clubs, nonprofits and small businesses',
    body: 'Browse every consent form template and adapt the closest one to your own wording.',
    link: '/templates/categories/consent-forms/',
    linkText: 'All consent form templates',
  },
]

// Section: security. Only claims verified on /security/ and /dpa/ (audit.md 1.5).
const securityTitle = [
  { text: 'Your consent records ', highlight: false, color: '#475467', bold: false },
  { text: 'stay private', highlight: true, color: '#475467', bold: false },
]
const securityCards = [
  {
    tag: 'Encryption',
    tagColor: 'violet',
    title: 'Encrypted in transit and at rest',
    body: 'Responses travel over HTTPS and are encrypted where they are stored. Backups are encrypted too.',
    link: '/security/',
    linkText: 'Security overview',
  },
  {
    tag: 'Your data',
    tagColor: 'blue',
    title: 'Never used to train AI',
    body: 'Formester does not use your form data for analytics, advertising, marketing or product training.',
  },
  {
    tag: 'Privacy',
    tagColor: 'green',
    title: 'A DPA for GDPR, UK GDPR and CCPA',
    body: 'Formester’s data processing agreement covers GDPR, UK GDPR and CCPA, for teams that need one on file.',
    link: '/dpa/',
    linkText: 'Read the DPA',
  },
]

// Verbatim excerpts from public G2 reviews (g2.com/products/formester/reviews), retrieved 13 Oct 2026.
const testimonialsHeading = [
  { text: 'What teams say ', highlight: false, color: '#475467', bold: false },
  { text: 'on G2', highlight: true, color: '#475467', bold: false },
]
const testimonials = [
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
    name: 'Karthik B.',
    position: 'Social Media Manager, mid-market company (G2 review)',
    comment:
      'Their support is top notch. They reply quickly for any query and also help in technical queries and troubleshooting.',
  },
]

// FAQ: questions from People Also Ask (research.md section 4). Plain text, reused verbatim in FAQPage JSON-LD.
const faqTitle = [{ text: 'Consent form questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'How do I create a consent form online?',
    body: 'Describe the consent you need in the generator at the top of this page, upload your paper form, or open a consent form template. Then add your consent text, a Terms and Conditions checkbox and a Signature field, and share the form as a link or embed it on your website.',
  },
  {
    id: 2,
    header: 'Can consent forms be signed electronically?',
    body: 'Yes. Add a Signature field and people draw their signature with a finger, mouse or trackpad. E-signatures are generally recognised under the US ESIGN Act and UETA, and under eIDAS in the EU and UK. Rules differ by country and by type of consent, so check what applies to you.',
  },
  {
    id: 3,
    header: 'Can I make my own consent form?',
    body: 'Yes. You write the wording and choose the fields. Many teams start from a template or the AI generator to save time, then edit every question. If the consent carries legal risk, ask a lawyer to review the wording.',
  },
  {
    id: 4,
    header: 'What is a digital consent form?',
    body: 'A digital or electronic consent form is one that people fill in and sign online instead of on paper. The person reads the terms, ticks a box to agree and signs on screen. You get their answers, signature and submission time in one record.',
  },
  {
    id: 5,
    header: 'What is a signed consent form, and how do I keep a PDF copy?',
    body: 'A signed consent form is the completed form with the person’s signature, showing what they agreed to. On the Business plan ($45/mo billed yearly), Formester can turn each response into a PDF with the signature in place. You can email it to the signer, attach it to your team’s notification, save it to Google Drive or download it from Results.',
  },
  {
    id: 6,
    header: 'Is there a free consent form app?',
    body: 'Yes. Formester’s free plan lets you build consent forms, add a signature field and collect unlimited responses. Forms open in the browser on phones, tablets and computers, so signers don’t install anything. Signed PDFs need the Business plan.',
  },
  {
    id: 7,
    header: 'What should a consent form include?',
    body: 'A clear title, who is asking and why, what the person is agreeing to, any risks, how their data or images will be used, how to withdraw consent, and a contact. End with a consent checkbox, the person’s name, the date and their signature. For a minor, add the parent or guardian’s name and relationship.',
  },
  {
    id: 8,
    header: 'How do I get parental consent online?',
    body: 'Send parents a link to a form with the child’s details, the activity and a signature field for the parent or guardian. You can pre-fill the student’s name in the link so parents only check and sign. On the Personal plan, you can also ask parents to verify their email with a one-time code before they submit.',
  },
]

const ctaButtons = [
  { link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true },
  { link: '#ai-form-builder', text: 'Try the generator', type: 'White', showArrow: false },
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
    { property: 'og:image', content: OG_IMAGE },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@_formester_' },
    { name: 'twitter:title', content: META_TITLE },
    { name: 'twitter:description', content: META_DESCRIPTION },
    { name: 'twitter:image', content: OG_IMAGE },
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Formester Consent Form Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: PAGE_URL,
    description: META_DESCRIPTION,
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'USD',
        description: 'Build consent forms and collect e-signatures with unlimited responses',
      },
      {
        '@type': 'Offer',
        name: 'Business',
        price: '45',
        priceCurrency: 'USD',
        description: 'Adds signed PDFs of every response. Price per month, billed yearly',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
      { '@type': 'ListItem', position: 2, name: 'Consent Form Generator', item: PAGE_URL },
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
/* Screenshots are injected as raw HTML into AlternatingRows, so this rule stays unscoped and namespaced. */
.cfg-shot {
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--r-xl, 12px);
  border: 1px solid var(--gray-200, #eaecf0);
  background: #fff;
}
</style>
