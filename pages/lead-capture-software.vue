<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Unlimited forms and responses on the free plan. No credit card required."
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#ecfdf3"
      blobColorC="#eff8ff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56,000+ teams worldwide" showTrustBadges class="page-component-item" />

    <CardGrid
      eyebrow="Where lead capture breaks down"
      :description="problemDescription"
      columns="3"
      :title="problemTitle"
      :cards="problemCards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="What it is"
      description="A lead capture form collects contact details. Lead capture software handles the whole path from visitor to sales conversation."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="categoryTitle"
      :cards="categoryCards"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="Platform" :title="platformTitle" :rows="platformRows" class="page-component-item" />

    <CardGrid
      eyebrow="Use cases"
      description="Demo requests, downloads, registrations, quotes, and signups each need a different next step. Formester runs all of them from the form."
      columns="2"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Live in four steps"
      description="Build the form, add qualification, connect routing and follow-up, then publish."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Comparison"
      colUs="Formester"
      colThem="Basic form tools"
      colThem2="Landing page builder plus separate automation"
      :title="compareTitle"
      :rows="compareRows"
      class="page-component-item"
    />

    <CardGrid
      id="lead-templates"
      eyebrow="Lead capture starting points"
      description="Pick the form that matches your offer, then add the scoring, routing, and follow-up behind it."
      columns="3"
      :title="templatesTitle"
      :cards="templateCards"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free plan, unlimited responses"
      heading="The lead you answer first is usually the lead you win"
      description="Give every submission a score, a destination, and an immediate answer. Formester turns your forms from collection points into the fastest part of your sales process."
      trustText="Unlimited forms and responses on the free plan."
      :buttons="ctaButtons"
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
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/lead-capture-software/'
const META_TITLE = 'Lead Capture Software That Scores, Routes, and Follows Up | Formester'
const META_DESCRIPTION =
  'Capture leads with forms built to convert, score them with AI, route hot leads to sales and your CRM instantly, and follow up automatically. Start free with unlimited forms and responses.'

// Shared mock styles. Mockups are inline HTML so they render without image assets.
const CARD = `background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);`
const pill = (text, fg, bg) =>
  `<span style='font-size:11px;font-weight:600;color:${fg};background:${bg};border-radius:999px;padding:3px 9px;white-space:nowrap;'>${text}</span>`
const GREEN = ['#027a48', '#ecfdf3']
const RED = ['#b42318', '#fef3f2']
const AMBER = ['#b54708', '#fffaeb']
const BLUE = ['#175cd3', '#eff8ff']
const VIOLET = ['#6434d0', '#f0ebfa']
const GRAY = ['#475467', '#f2f4f7']

const row = (label, status) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-radius:9px;padding:8px 10px;'><span>${label}</span>${status}</div>`
const field = (label, value) =>
  `<div style='display:flex;flex-direction:column;gap:3px;'><span style='font-size:10px;font-weight:600;color:#697586;text-transform:uppercase;letter-spacing:.04em;'>${label}</span><span style='font-size:12px;color:#101828;border:1px solid #eaecf0;border-radius:8px;padding:6px 9px;'>${value}</span></div>`
const chip = (label) =>
  `<span style='font-size:12px;font-weight:600;color:#344054;background:#f9fafb;border:1px solid #eaecf0;border-radius:9px;padding:7px 11px;'>${label}</span>`
const aiBox = (inner) =>
  `<div style='border:1px solid #d9cbf7;background:#faf8ff;border-radius:9px;padding:9px 10px;display:flex;flex-direction:column;gap:6px;'>${inner}</div>`
const submitBtn = (text) =>
  `<span style='display:block;text-align:center;font-size:12px;font-weight:600;color:#fff;background:#6434d0;border-radius:999px;padding:7px;'>${text}</span>`

// Hero: a demo request form beside the scored, routed hot lead and a cooler lead on follow-up.
const formMock = `<div style='flex:1 1 230px;min-width:0;max-width:260px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Book a demo</span>${field('Work email', 'jordan@northwind.io')}${field('Company size', '200 to 500')}${field('What do you need?', 'Replace our intake forms by Q1')}${submitBtn('Request demo')}</div>`
const leadMock = `<div style='flex:1 1 230px;min-width:0;max-width:260px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Jordan · Northwind</span>${pill('Hot · 92', ...RED)}</div>${aiBox(`<div style='font-size:11px;color:#475467;line-height:1.4;'><b style='color:#6434d0;'>AI score:</b> Strong fit, clear timeline, named project.</div>`)}${row('HubSpot', pill('Lead created', ...GREEN))}${row('Slack · #sales', pill('Rep alerted', ...BLUE))}<div style='font-size:11px;color:#697586;margin-top:2px;'>Another lead · Sam K.</div>${row('Score 34 · Researching', pill('Follow-up in 3 days', ...AMBER))}</div>`
const heroMockupHtml = `<div style='display:flex;align-items:flex-start;justify-content:center;gap:14px;flex-wrap:wrap;max-width:560px;margin:0 auto;'>${formMock}${leadMock}</div>`

const heroBadge = { text: 'Lead capture software', tag: 'Free', link: null }
const heroTitle = [
  { text: 'Turn form submissions into ', highlight: false, color: '#475467', bold: false },
  { text: 'qualified leads', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'Formester captures the lead, scores it with AI, routes hot leads to sales and your CRM the moment they submit, and follows up with everyone else automatically. No CSV exports. No leads cooling in an inbox.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Create your lead form free', type: 'Primary', showArrow: true },
  { link: '#lead-templates', text: 'See lead capture templates', type: 'Secondary', showArrow: false },
]

const problemTitle = [
  { text: 'Most leads are not lost to competitors. ', highlight: false, color: '#475467', bold: false },
  { text: 'They are lost to the handoff.', highlight: true, color: '#475467', bold: false },
]
const problemDescription =
  'A visitor fills in your form. Then the lead waits. Someone exports a CSV at the end of the week, and a rep opens a spreadsheet with no context and no score. By the time anyone follows up, the lead has talked to someone else, or forgotten why they filled in the form at all.'
const problemCards = [
  {
    tag: 'Speed',
    tagColor: 'rose',
    title: 'Follow-up is slow',
    body: 'The first response often waits for a human to notice the submission, and interest fades by the hour.',
  },
  {
    tag: 'Priority',
    tagColor: 'amber',
    title: 'Every lead looks the same',
    body: 'A demo request from a perfect-fit company sits in the same list as a student doing research.',
  },
  {
    tag: 'Exports',
    tagColor: 'blue',
    title: 'Data moves by export',
    body: 'Leads travel from form to spreadsheet to CRM by hand, losing fields and time at every step.',
  },
  {
    tag: 'Abandonment',
    tagColor: 'violet',
    title: 'Half-finished forms vanish',
    body: 'Someone starts your form, gets interrupted, and that lead is gone, with no way to bring them back.',
  },
  {
    tag: 'Spam',
    tagColor: 'rose',
    title: 'Junk fills the pipeline',
    body: 'Spam and fake emails land in the CRM next to real buyers, and reps learn to distrust the whole list.',
  },
  {
    tag: 'Blind spots',
    tagColor: 'green',
    title: 'Nobody knows what is converting',
    body: 'Without drop-off and source data, the form never gets better, and neither does lead quality.',
  },
]

const categoryTitle = [
  { text: 'Lead capture is five jobs, ', highlight: false, color: '#475467', bold: false },
  { text: 'not one form', highlight: true, color: '#475467', bold: false },
]
const categoryCards = [
  {
    tag: 'Step 1',
    tagColor: 'violet',
    title: 'Capture',
    body: 'A form people actually finish, placed where intent is highest: landing pages, blog posts, pricing pages, booths, and ads.',
  },
  {
    tag: 'Step 2',
    tagColor: 'green',
    title: 'Qualify',
    body: 'Follow-up questions and AI scoring separate ready buyers from early research, without making the form longer for everyone.',
  },
  {
    tag: 'Step 3',
    tagColor: 'amber',
    title: 'Route',
    body: 'Hot leads reach the right rep and the CRM in seconds. The rest go to nurture, not to a forgotten spreadsheet.',
  },
  {
    tag: 'Step 4',
    tagColor: 'blue',
    title: 'Follow up',
    body: 'Instant, personal confirmation for every lead, and timed follow-ups for the ones who are not ready yet.',
  },
  {
    tag: 'Step 5',
    tagColor: 'rose',
    title: 'Learn',
    body: 'Drop-off and submission analytics show where leads are won and lost, so the form keeps improving.',
  },
]

const platformTitle = [
  { text: 'Build the form, ', highlight: false, color: '#475467', bold: false },
  { text: 'and everything behind it', highlight: true, color: '#475467', bold: false },
]
const media = (inner) =>
  `<div style='max-width:460px;margin:0 auto;${CARD}padding:18px;display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const branch = (label, target, colors) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-left:3px solid ${colors[0]};border-radius:9px;padding:9px 11px;'><span>${label}</span>${pill(target, ...colors)}</div>`
const bar = (label, pct, color) =>
  `<div style='display:flex;flex-direction:column;gap:4px;'><div style='display:flex;justify-content:space-between;font-size:11px;color:#344054;'><span>${label}</span><span>${pct}% continue</span></div><div style='height:7px;border-radius:999px;background:#f2f4f7;overflow:hidden;'><div style='width:${pct}%;height:100%;background:${color};border-radius:999px;'></div></div></div>`

const platformRows = [
  {
    kicker: 'Capture',
    title: 'Forms people finish',
    body: 'Start from a lead capture template or generate the form with AI from a prompt. Keep it short for top-of-funnel offers, or use card-style forms that ask one question at a time. For longer qualification, split the form into steps and pre-fill what you already know.',
    bullets: [
      { text: 'Your logo, colors, and domain' },
      { text: 'Embed on a landing page or blog post, share the link, or print a QR code' },
    ],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>Start from</div><div style='display:flex;gap:8px;flex-wrap:wrap;'>${chip('Template')}${chip('&#10022; AI prompt')}${chip('Blank')}</div><div style='font-size:12px;color:#475467;margin-top:4px;'>Place it</div>${row('Pricing page embed', pill('Live', ...GREEN))}${row('Blog post embed', pill('Live', ...GREEN))}${row('Event booth QR code', pill('Printed', ...VIOLET))}`,
    ),
  },
  {
    kicker: 'Qualify',
    title: 'Qualification without a longer form',
    body: 'Use conditional logic so the form adapts. A lead interested in one product sees that product’s questions. A big company sees the budget and timeline questions. A small one does not. Then an AI Agent workflow step reads the submission and scores it on fit, intent, and urgency, in the lead’s own words.',
    bullets: [
      { text: 'Questions adapt to each lead' },
      { text: 'AI score written to the submission, ready for routing' },
    ],
    mediaHtml: media(
      `${row('Company size', pill('200 to 500', ...BLUE))}<div style='margin-left:14px;display:flex;flex-direction:column;gap:8px;border-left:2px dashed #d9cbf7;padding-left:12px;'>${field('Budget', '$20k to $50k')}${field('Timeline', 'This quarter')}</div>${aiBox(`<div style='display:flex;justify-content:space-between;align-items:center;gap:6px;font-size:12px;color:#101828;'><span>AI Agent score</span>${pill('Fit 9 · Intent 8 · Urgent', ...VIOLET)}</div>`)}`,
    ),
  },
  {
    kicker: 'Route',
    title: 'Route hot leads in seconds',
    body: 'The moment a scored lead lands, Formester sends it where it needs to go. No exports, no imports, no end-of-week spreadsheet.',
    bullets: [
      { text: 'Alert the right rep by email or Slack, by product, region, or company size' },
      { text: 'Create or update the lead in HubSpot or Salesforce' },
      { text: 'Add the lead to Google Sheets or Mailchimp for nurture' },
      { text: 'Push the full submission anywhere through Zapier or a webhook' },
    ],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>After submit</div>${branch('Score 80 and above', 'Slack · rep alerted', RED)}${branch('Region is EMEA', 'Salesforce · EMEA team', BLUE)}${branch('Score below 50', 'Mailchimp · nurture', AMBER)}<div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>${pill('HubSpot', ...BLUE)}${pill('Google Sheets', ...GREEN)}${pill('Webhook', ...GRAY)}</div>`,
    ),
  },
  {
    kicker: 'Follow up',
    title: 'Follow up while the interest is warm',
    body: 'Every lead gets an instant autoresponder, personalized with their own answers: what they asked for, what happens next, and when. Leads that are not ready yet are not dropped. A workflow can wait and send a follow-up days later, so nurture runs without anyone remembering to run it.',
    bullets: [
      { text: 'Lead magnet delivered as an email attachment' },
      { text: 'Timed follow-ups for leads who are not ready' },
    ],
    mediaHtml: media(
      `${row('“Thanks Jordan, here is your guide”', pill('Sent instantly', ...GREEN))}${row('&#128206; 2026 Forms Benchmark.pdf', pill('Attached', ...VIOLET))}${row('Wait 3 days', pill('Scheduled', ...GRAY))}${row('“Still exploring? Here is a case study”', pill('Queued', ...BLUE))}`,
    ),
  },
  {
    kicker: 'Recover',
    title: 'Recover the leads who almost got away',
    body: 'Form analytics show exactly where visitors abandon the form, down to the page they leave on. For longer forms, view partial submissions instead of losing them, and trigger a workflow on abandonment that sends a link to pick up where they left off.',
    bullets: [{ text: 'Drop-off by page' }, { text: 'Partial submissions and resume-link follow-up' }],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>Drop-off by page</div>${bar('Contact details', 94, '#12b76a')}${bar('Company info', 78, '#6434d0')}${bar('Budget and timeline', 61, '#f79009')}${row('Abandoned at page 3 · Priya L.', pill('Resume link sent', ...AMBER))}`,
    ),
  },
  {
    kicker: 'Protect',
    title: 'Keep junk out of the CRM',
    body: 'AI-powered spam protection, Cloudflare Turnstile, and reCAPTCHA block bots before they take a slot. Email verification confirms addresses are real, so the list your reps work from is a list they can trust.',
    bullets: [{ text: 'AI spam protection, Turnstile, and reCAPTCHA' }, { text: 'Email verification before the CRM' }],
    mediaHtml: media(
      `${row('Bot submission', pill('Blocked', ...RED))}${row('test@test.com', pill('Unverified', ...AMBER))}${row('jordan@northwind.io', pill('Verified', ...GREEN))}<div style='display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;'>${chip('AI spam filter')}${chip('Turnstile')}${chip('reCAPTCHA')}</div>`,
    ),
  },
]

const useCasesTitle = [
  { text: 'Lead capture for the moments ', highlight: false, color: '#475467', bold: false },
  { text: 'intent appears', highlight: true, color: '#475467', bold: false },
]
const flow = (steps) =>
  `<div style='display:flex;flex-wrap:wrap;align-items:center;gap:6px;text-align:left;'>${steps
    .map(([label, colors]) => pill(label, ...colors))
    .join(`<span style='font-size:11px;color:#98a2b3;'>&rarr;</span>`)}</div>`
const useCaseCards = [
  {
    tag: 'Demo and contact requests',
    tagColor: 'violet',
    title: 'Your highest-intent form deserves the fastest path',
    body: 'Score every request, alert the rep who owns it, and put it in the CRM with the full context of what they asked. The lead gets a personal confirmation before they have closed the tab.',
    mockHtml: flow([
      ['Demo submitted', VIOLET],
      ['AI score', BLUE],
      ['Rep alerted', AMBER],
      ['CRM updated', GREEN],
    ]),
  },
  {
    tag: 'Lead magnets and downloads',
    tagColor: 'green',
    title: 'Deliver the asset, keep the relationship',
    body: 'Gate the ebook, report, or template behind a short form. The file arrives as an attachment in the confirmation email, the lead joins your Mailchimp list, and a follow-up sequence starts on schedule.',
    mockHtml: flow([
      ['Form submitted', VIOLET],
      ['Asset delivered', BLUE],
      ['List updated', AMBER],
      ['Follow-up scheduled', GREEN],
    ]),
  },
  {
    tag: 'Webinar and event registration',
    tagColor: 'amber',
    title: 'Registrations that remind themselves',
    body: 'Capture registrations, confirm instantly, and send a reminder before the session using the date in the form. At physical events, a QR code on the booth captures leads on the spot.',
    mockHtml: flow([
      ['Registration submitted', VIOLET],
      ['Confirmation sent', BLUE],
      ['Reminder before event', GREEN],
    ]),
  },
  {
    tag: 'Quote and pricing requests',
    tagColor: 'blue',
    title: 'Qualify before you price',
    body: 'Ask the questions your quote depends on, adapted by service and budget through conditional logic. Route high-value requests straight to sales and let smaller ones receive a helpful first response automatically.',
    mockHtml: flow([
      ['Quote requested', VIOLET],
      ['Qualified by answers', BLUE],
      ['Routed by value', AMBER],
      ['First response sent', GREEN],
    ]),
  },
  {
    tag: 'Newsletter and waitlist growth',
    tagColor: 'rose',
    title: 'A list that builds itself',
    body: 'Put a short capture form on your blog and landing pages, sync every subscriber to Mailchimp, and let the welcome email go out on its own.',
    mockHtml: flow([
      ['Signup submitted', VIOLET],
      ['Synced to Mailchimp', BLUE],
      ['Welcome sent', GREEN],
    ]),
  },
]

const howButtons = [{ link: SIGN_UP_URL, text: 'Create your lead form free', type: 'Primary', showArrow: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Build or generate the form',
    description:
      'Start from a lead capture template, generate with AI, or build it yourself. Add only the questions your follow-up genuinely needs.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Template', ...VIOLET)}${pill('AI prompt', ...BLUE)}${pill('Blank', ...GRAY)}</div>`,
    ),
  },
  {
    title: 'Add qualification',
    description: 'Set conditional follow-ups and an AI scoring step that matches how your team judges fit.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Conditional logic', ...AMBER)}${pill('AI score', ...VIOLET)}</div>`,
    ),
  },
  {
    title: 'Connect routing and follow-up',
    description:
      'Choose where leads go (CRM, Sheets, Slack, Mailchimp), set the instant confirmation, and schedule nurture follow-ups.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('HubSpot', ...BLUE)}${pill('Slack', ...VIOLET)}${pill('Mailchimp', ...AMBER)}${pill('Autoresponder', ...GREEN)}</div>`,
    ),
  },
  {
    title: 'Publish and watch leads land',
    description:
      'Embed the form, share the link, or print the QR code. Leads start arriving scored, routed, and answered.',
    rawHtml: stepCard(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#101828;'><span>formester.com/f/book-a-demo</span>${pill('Live', ...GREEN)}</div>`,
    ),
  },
]

const compareTitle = [
  { text: 'Formester against basic forms ', highlight: false, color: '#475467', bold: false },
  { text: 'and stitched-together stacks', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  { feature: 'Responses on the free plan', us: 'Unlimited', them: 'Often capped', them2: 'Varies by tool' },
  {
    feature: 'Qualification questions',
    us: 'Conditional, adapt to each lead',
    them: 'Same form for everyone',
    them2: 'Form logic, then a second tool',
  },
  {
    feature: 'Lead scoring',
    us: 'AI scores and classifies each submission',
    them: 'None',
    them2: 'Separate scoring setup',
  },
  {
    feature: 'Routing to CRM',
    us: 'HubSpot, Salesforce, Sheets, Zapier, webhooks',
    them: 'CSV export',
    them2: 'Connector setup across two tools',
  },
  {
    feature: 'First response',
    us: 'Instant and personalized',
    them: 'Manual or a plain notification',
    them2: 'Built in a second tool',
  },
  {
    feature: 'Abandoned leads',
    us: 'Partial submissions and resume-link follow-up',
    them: 'Lost',
    them2: 'Partial, varies',
  },
  { feature: 'Spam protection', us: 'AI protection, Turnstile, reCAPTCHA', them: 'Basic', them2: 'Varies' },
  { feature: 'Tools to maintain', us: 'One', them: 'One, plus manual work', them2: 'Two or more' },
]

const templatesTitle = [
  { text: 'Start from the form ', highlight: false, color: '#475467', bold: false },
  { text: 'that matches the offer', highlight: true, color: '#475467', bold: false },
]
const templateCards = [
  {
    tag: 'Qualification',
    tagColor: 'violet',
    title: 'Lead generation form',
    body: 'Contact details with qualification follow-ups.',
    link: '/templates/lead-generation-form-700/',
    linkText: 'Use template',
  },
  {
    tag: 'Website',
    tagColor: 'blue',
    title: 'Lead form',
    body: 'For websites, social profiles, and email campaigns.',
    link: '/templates/lead-form-1912/',
    linkText: 'Use template',
  },
  {
    tag: 'Sales',
    tagColor: 'rose',
    title: 'Demo request form',
    body: 'With scoring and rep routing behind it.',
    link: '/templates/demo-request-form-8131/',
    linkText: 'Use template',
  },
  {
    tag: 'Events',
    tagColor: 'amber',
    title: 'Webinar registration form',
    body: 'With confirmations and reminders built in.',
    link: '/templates/webinar-registration-form-1883/',
    linkText: 'Use template',
  },
  {
    tag: 'Content',
    tagColor: 'green',
    title: 'Ebook download form',
    body: 'Generate it with AI and deliver the asset by email.',
    link: '/ai-form-generator/',
    linkText: 'Generate with AI',
  },
  {
    tag: 'Campaigns',
    tagColor: 'violet',
    title: 'Landing page lead capture form',
    body: 'Describe your offer and let AI draft the form.',
    link: '/ai-form-generator/',
    linkText: 'Generate with AI',
  },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is lead capture software?',
    body: 'Lead capture software collects potential customers’ contact details and manages what happens next: qualification, scoring, routing to sales and CRM tools, and follow-up. A lead capture form on its own only collects the details.',
  },
  {
    id: 2,
    header: 'How does AI lead scoring work in Formester?',
    body: 'An AI Agent workflow step reads each submission, including attachments, and scores or classifies it against the criteria in your prompt, such as fit, intent, or urgency. The score is written to the submission and can trigger routing: hot leads alert sales and sync to the CRM, others receive scheduled follow-up.',
  },
  {
    id: 3,
    header: 'Where do my leads go?',
    body: 'Wherever your team works: the Formester dashboard, Google Sheets, HubSpot, Salesforce, Slack, and Mailchimp are built in, and Zapier or a webhook can push the full submission to other systems.',
  },
  {
    id: 4,
    header: 'Can I deliver an ebook or file after someone submits?',
    body: 'Yes. Send downloadable files as attachments in the automatic confirmation email, so the lead magnet arrives in the same moment the lead is captured.',
  },
  {
    id: 5,
    header: 'What happens when someone abandons my form halfway?',
    body: 'Form analytics show where visitors drop off. On the Business plan you can view partial submissions, and a workflow triggered by abandonment can email the person a link to continue where they stopped.',
  },
  {
    id: 6,
    header: 'How do I keep spam leads out?',
    body: 'Forms are protected by AI-powered spam detection, Cloudflare Turnstile, and reCAPTCHA. Email verification, on paid plans, confirms that addresses are real before they reach your CRM.',
  },
  {
    id: 7,
    header: 'Do leads need an account to submit?',
    body: 'No. Leads open the form from your link, embed, or QR code and complete it in the browser.',
  },
  {
    id: 8,
    header: 'Is it free to start?',
    body: 'Yes. The free plan includes unlimited forms and unlimited responses. Conditional logic, email verification, and partial submissions are available on paid plans, as shown on the pricing page.',
  },
]

const ctaButtons = [
  { link: SIGN_UP_URL, text: 'Create your lead form free', type: 'Primary', showArrow: true },
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
    name: 'Formester Lead Capture',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    url: PAGE_URL,
    description: META_DESCRIPTION,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
