<template>
  <div>
    <HeroV2
      description="Connect Formester to Asana and turn every response into a task in the right project. Choose the task title, add form answers to the description, and map supported custom fields — no Zapier or code."
      trustText="✓ Native integration · ✓ Business plan feature · ✓ Field mapping"
      blobColorA="#fff1f4"
      blobColorB="#fff6ed"
      blobColorC="#f5eeff"
      :mockupHtml="heroMockup"
      layout="split"
      :title="heroTitle"
      :buttons="heroButtons"
      :badge="heroBadge"
      :tabCardContent="[]"
      class="page-component-item"
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
      eyebrow="Why connect them"
      description="Move intake into Asana automatically, with enough context for your team to start work."
      columns="2"
      :title="benefitTitle"
      :cards="benefitCards"
      class="page-component-item"
    />

    <StickyStepsSection
      id="setup"
      badge="How it works"
      heading="Connect your form to Asana in 4 steps"
      description="Authorize once, choose where tasks should go, then map the form data your team needs."
      background="#f9fafb"
      :steps="setupSteps"
      :buttons="[]"
      class="page-component-item"
    />

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

    <FaqSection centered :title="faqTitle" :faqList="faqs" class="page-component-item" />

    <CtaDark
      badge="Business plan integration"
      heading="Turn form responses into Asana tasks"
      description="Connect a form, map the details, and let every new submission route itself."
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
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const heroMockup = `
  <div class="raw-html-embed">
    <style>
      .asana-flow{font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:480px;margin:0 auto;position:relative}.asana-flow *{box-sizing:border-box}.asana-flow__apps{display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:18px}.asana-flow__app{width:54px;height:54px;border:1px solid #eaecf0;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 12px rgba(16,24,40,.07)}.asana-flow__app img{width:32px;height:32px;object-fit:contain}.asana-flow__dots{display:flex;gap:5px}.asana-flow__dots span{width:6px;height:6px;border-radius:50%;background:#f06a6a;animation:asana-pulse 1.5s infinite}.asana-flow__dots span:nth-child(2){animation-delay:.2s}.asana-flow__dots span:nth-child(3){animation-delay:.4s}@keyframes asana-pulse{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}.asana-flow__window{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(16,24,40,.12);overflow:hidden}.asana-flow__bar{padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;font-size:11px;color:#697586}.asana-flow__task{padding:16px}.asana-flow__project{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#f06a6a;margin-bottom:9px}.asana-flow__title{font-size:15px;font-weight:700;color:#101828;margin-bottom:12px}.asana-flow__row{display:grid;grid-template-columns:92px 1fr;gap:10px;padding:8px 0;border-top:1px solid #f2f4f7;font-size:11px}.asana-flow__label{color:#697586}.asana-flow__value{color:#344054;font-weight:600}.asana-flow__status{display:inline-flex;align-items:center;gap:6px;background:#ecfdf3;color:#027a48;border-radius:999px;padding:6px 10px;font-size:10px;font-weight:700;position:absolute;right:-18px;bottom:-18px;box-shadow:0 8px 24px rgba(16,24,40,.12);border:1px solid #d1fadf}.asana-flow__status:before{content:'';width:7px;height:7px;border-radius:50%;background:#12b76a}@media(max-width:600px){.asana-flow__status{right:4px}}@media(prefers-reduced-motion:reduce){.asana-flow__dots span{animation:none;opacity:.65}}
    </style>
    <div class="asana-flow">
      <div class="asana-flow__apps">
        <span class="asana-flow__app"><img src="/formester-icon.svg" alt="Formester"></span>
        <span class="asana-flow__dots"><span></span><span></span><span></span></span>
        <span class="asana-flow__app"><img src="/integrations/asana.svg" alt="Asana"></span>
      </div>
      <div class="asana-flow__window">
        <div class="asana-flow__bar">Website requests · Asana</div>
        <div class="asana-flow__task">
          <div class="asana-flow__project">Customer requests / New intake</div>
          <div class="asana-flow__title">Review enterprise onboarding request</div>
          <div class="asana-flow__row"><span class="asana-flow__label">Contact</span><span class="asana-flow__value">Maya Patel</span></div>
          <div class="asana-flow__row"><span class="asana-flow__label">Priority</span><span class="asana-flow__value">High</span></div>
          <div class="asana-flow__row"><span class="asana-flow__label">Source</span><span class="asana-flow__value">Website intake form</span></div>
        </div>
      </div>
      <span class="asana-flow__status">Task created</span>
    </div>
  </div>`

const heroTitle = [
  { id: 1, text: 'Turn every form submission into an ', highlight: false, color: '#475467', bold: false },
  { id: 2, text: 'Asana task', highlight: true, color: '#475467', bold: false },
]

const heroButtons = [
  { id: 1, link: 'https://app.formester.com/users/sign_up', text: 'Start free', type: 'Primary', showArrow: true },
  {
    id: 2,
    link: 'https://help.formester.com/en/article/asana-integration-v1tuq7/',
    text: 'Read the setup guide',
    type: 'Secondary',
    showArrow: false,
  },
]

const heroBadge = { id: 1, text: 'Asana', tag: 'Integrations', link: '/integrations/' }

const benefitTitle = [
  { id: 1, text: 'From form response to ', highlight: false, color: '#475467', bold: false },
  { id: 2, text: 'ready-to-work task', highlight: true, color: '#475467', bold: false },
]

const benefitCards = [
  {
    id: 1,
    tag: 'Automatic',
    tagColor: 'violet',
    title: 'Create tasks instantly',
    body: 'Every new form submission creates an Asana task automatically, without copy-paste or a separate automation tool.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 2,
    tag: 'Routing',
    tagColor: 'blue',
    title: 'Choose the right destination',
    body: 'Send tasks to the workspace, project, and optional section where the responsible team already works.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 3,
    tag: 'Context',
    tagColor: 'green',
    title: 'Map the details that matter',
    body: 'Pick the form field for the task title, add answers to the description, and map supported Asana custom fields.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 4,
    tag: 'Backfill',
    tagColor: 'amber',
    title: 'Bring existing responses across',
    body: 'Use Sync existing submissions when you want past form responses created as Asana tasks too.',
    mockHtml: null,
    icon: null,
  },
]

const setupSteps = [
  {
    id: 1,
    title: 'Add Asana from the Automate tab',
    description: 'Open your form, go to Automate → Integrations, find Asana, and click Add integration.',
    rawHtml: `<div class="raw-html-embed"><div style="font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px"><div style="display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px"><span>Autoresponder</span><span style="color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px">Integrations</span><span>Webhooks</span></div><div style="border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden"><div style="display:flex;align-items:center;gap:8px;padding:11px 13px 4px"><img src="/integrations/asana.svg" alt="" style="width:22px;height:22px"><span style="font-size:12.5px;font-weight:700;color:#101828">Asana</span></div><div style="padding:0 13px 10px;font-size:10.5px;color:#697586">Create an Asana task for every new submission.</div><div style="display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;color:#6434d0;font-weight:700">+ Add integration</div></div></div></div>`,
    image: null,
  },
  {
    id: 2,
    title: 'Connect Asana and choose a project',
    description:
      'Authorize your Asana account, then choose the workspace, project, and optional section for new tasks.',
    rawHtml: `<div class="raw-html-embed"><div style="font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px"><div style="font-size:11px;font-weight:700;color:#101828;margin-bottom:9px">Task destination</div><div style="font-size:10px;color:#697586;margin:7px 0 3px">Workspace</div><div style="border:1px solid #eaecf0;border-radius:7px;padding:8px 10px;font-size:10.5px">Acme Company</div><div style="font-size:10px;color:#697586;margin:7px 0 3px">Project</div><div style="border:1px solid #eaecf0;border-radius:7px;padding:8px 10px;font-size:10.5px">Customer requests</div><div style="font-size:10px;color:#697586;margin:7px 0 3px">Section (optional)</div><div style="border:1px solid #eaecf0;border-radius:7px;padding:8px 10px;font-size:10.5px">New intake</div></div></div>`,
    image: null,
  },
  {
    id: 3,
    title: 'Map the task title and details',
    description:
      'Choose the form field that becomes the task title. Add answers to the description, include a submission link, and map supported text, number, and date custom fields.',
    rawHtml: `<div class="raw-html-embed"><div style="font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px"><div style="font-size:11px;font-weight:700;color:#101828">Field mapping</div><div style="display:flex;align-items:center;gap:8px;font-size:10.5px;padding:8px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin-top:9px"><strong>Request title</strong><span style="color:#f06a6a">→</span><span>Task title</span></div><div style="display:flex;align-items:center;gap:8px;font-size:10.5px;padding:8px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin-top:6px"><strong>Due date</strong><span style="color:#f06a6a">→</span><span>Due date</span></div><div style="display:flex;align-items:center;gap:7px;font-size:10px;color:#344054;margin-top:10px"><span style="width:24px;height:14px;border-radius:99px;background:#6434d0;display:inline-block"></span> Include a link back to the submission</div></div></div>`,
    image: null,
  },
  {
    id: 4,
    title: 'Save and send a test response',
    description:
      'Save the integration and submit the form once. A new task appears in Asana. Turn on Sync existing submissions if you also want to backfill past responses.',
    rawHtml: `<div class="raw-html-embed"><div style="font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px"><div style="display:inline-flex;align-items:center;gap:7px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border:1px solid #d1fadf;border-radius:999px;padding:8px 13px">✓ Task created in Customer requests</div><div style="margin-top:10px;font-size:10.5px;color:#475467">Optional: <strong>Sync existing submissions</strong></div></div></div>`,
    image: null,
  },
]

const testimonialHeading = [
  { id: 1, text: 'Simple forms. ', highlight: false },
  { id: 2, text: 'Less manual work.', highlight: true },
]

const testimonials = [
  {
    id: 1,
    name: 'Costanza Casullo',
    position: 'Volunteer, Wato Coding Hub',
    comment:
      "Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths.",
  },
  {
    id: 2,
    name: 'Deanna Bugalski',
    position: 'Founder and CEO, Suggesterfy',
    comment: 'Formester was super easy to set up, and the usability is seamless! I highly recommend it.',
  },
  {
    id: 3,
    name: 'Jilson',
    position: 'Organiser, Vue Conference',
    comment:
      'Formester is really easy to use. We use it for call for papers, lead registrations, feedback and surveys, and it cannot be simpler.',
  },
]

const relatedIntegrations = [
  {
    id: 1,
    name: 'Monday.com',
    description: 'Send form submissions to your Monday.com boards automatically.',
    link: '/integrations/monday/',
  },
  {
    id: 2,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
  {
    id: 3,
    name: 'Notion',
    description: 'Sync form submissions to a Notion database automatically.',
    link: '/integrations/notion/',
  },
  {
    id: 4,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 5,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 6,
    name: 'Webhook',
    description: 'Send form data to any tool instantly using webhooks.',
    link: '/integrations/webhook/',
  },
]

const faqTitle = [{ id: 1, text: 'Asana form integration FAQs', highlight: false, color: '#475467', bold: false }]

const faqs = [
  {
    id: 1,
    header: 'What does the Asana integration do?',
    body: 'It creates an Asana task whenever someone submits your Formester form. You choose the workspace, project, optional section, task title, description fields, and supported custom-field mappings.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2,
    header: 'How do I connect a form to Asana?',
    body: "Open your form's Automate tab, add Asana, authorize your account, choose a workspace and project, map the task details, and save the integration.",
    body_markdown: '',
    list: [],
  },
  {
    id: 3,
    header: 'Can a form submission create a task in a specific Asana section?',
    body: 'Yes. Choose a project and an optional section during setup. If you leave the section empty, Asana places the task in the project’s default section.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4,
    header: 'Which Asana custom fields can I map?',
    body: 'Formester can map text, number, and date custom fields. Enum, multi-select, and people fields need Asana-specific IDs, so add those answers to the task description instead.',
    body_markdown: '',
    list: [],
  },
  {
    id: 5,
    header: 'Can I create Asana tasks from existing form submissions?',
    body: 'Yes. Select Sync existing submissions when saving, or run the sync later. Review the destination first because syncing again may create duplicate tasks.',
    body_markdown: '',
    list: [],
  },
  {
    id: 6,
    header: 'Do I need Zapier to connect Formester and Asana?',
    body: 'No. This is a native Formester integration, so new submissions go directly to Asana without a Zapier workflow or custom webhook code.',
    body_markdown: '',
    list: [],
  },
  {
    id: 7,
    header: 'Which Formester plan includes the Asana integration?',
    body: 'The native Asana integration is available on Formester Business plans. You can start with a free account and upgrade when you are ready to connect Asana.',
    body_markdown: '',
    list: [],
  },
]

const ctaButtons = [
  { id: 1, link: 'https://app.formester.com/users/sign_up', text: 'Start free', type: 'Primary', showArrow: true },
  { id: 2, link: '/pricing/', text: 'See pricing', type: 'White', showArrow: false },
]

const seoTitle = 'Asana Form Integration: Create Tasks from Forms | Formester'
const seoDescription =
  'Create Asana tasks from form submissions automatically. Route tasks to a project or section, map fields, and sync existing responses with Formester.'
const canonicalUrl = 'https://formester.com/integrations/asana/'

useHead({
  title: seoTitle,
  link: [{ hid: 'canonical', rel: 'canonical', href: canonicalUrl }],
  meta: [
    { property: 'article:modified_time', content: '2026-09-07T12:20:08Z' },
    { hid: 'description', name: 'description', content: seoDescription },
    { hid: 'og:site_name', property: 'og:site_name', content: 'Formester' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: canonicalUrl },
    { hid: 'og:title', property: 'og:title', content: seoTitle },
    { hid: 'og:description', property: 'og:description', content: seoDescription },
    { hid: 'og:image', property: 'og:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Formester Asana integration' },
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalUrl },
    { name: 'twitter:site', content: '@_formester_' },
    { hid: 'twitter:title', name: 'twitter:title', content: seoTitle },
    { hid: 'twitter:description', name: 'twitter:description', content: seoDescription },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Formester Asana integration' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Formester' },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'asana form integration, create asana tasks from form submissions, connect form to asana, asana forms',
    },
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
        { '@type': 'ListItem', position: 3, name: 'Asana', item: canonicalUrl },
      ],
    },
  ],
})
</script>
