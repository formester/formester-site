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
      eyebrow="Where intake breaks down"
      :description="problemDescription"
      columns="3"
      :title="problemTitle"
      :cards="problemCards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="What it is"
      description="A client intake form collects information. Client intake management handles everything around it: what gets asked, who sees it, what happens next, and how the client is kept informed. Formester brings those steps into one system."
      columns="4"
      background="var(--gray-25, #fcfcfd)"
      :title="categoryTitle"
      :cards="categoryCards"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="Platform" :title="platformTitle" :rows="platformRows" class="page-component-item" />

    <CardGrid
      eyebrow="Use cases"
      description="Law firms, practices, coaches, agencies, and service teams all start with the same question: who is this client, and what do they need?"
      columns="2"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Set up managed intake in four steps"
      description="Build the form, add the steps that complete the file, connect the follow-up, and share one link."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Comparison"
      colUs="Formester"
      colThem="Email, PDFs, and separate tools"
      :title="compareTitle"
      :rows="compareRows"
      class="page-component-item"
    />

    <CardGrid
      id="intake-templates"
      eyebrow="Intake templates"
      description="Do not see your business type? Generate the intake form with AI and adjust the questions to your process."
      columns="4"
      :title="templatesTitle"
      :cards="templateCards"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free plan, unlimited responses"
      heading="The first form a client fills out should make the second step obvious"
      description="Give every new client one clear place to start, and give your team a complete file to work from. Formester manages the intake, so your team can start the relationship instead of chasing the paperwork."
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
const PAGE_URL = 'https://formester.com/client-intake-management/'
const META_TITLE = 'Client Intake Software That Captures, Qualifies, and Routes New Clients | Formester'
const META_DESCRIPTION =
  'Collect client details, documents, signatures, bookings, and payments in one intake form. Then let Formester qualify, route, and follow up automatically. Start free with unlimited forms and responses.'

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

// Hero: the client's intake form beside the qualified, routed, and booked result.
const intakeMock = `<div style='flex:1 1 230px;min-width:0;max-width:260px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>New client intake</span>${pill('Step 2 of 3', ...GRAY)}</div>${field('Service needed', 'Family law consultation')}${field('Key dates', 'Hearing on 14 Dec')}${row('&#128196; Custody order.pdf', pill('Uploaded', ...GREEN))}${row('Consent signature', pill('Signed', ...GREEN))}</div>`
const resultMock = `<div style='flex:1 1 230px;min-width:0;max-width:260px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Maya R. · Intake</span>${pill('High fit', ...GREEN)}</div>${aiBox(`<div style='display:flex;justify-content:space-between;align-items:center;gap:6px;font-size:12px;color:#101828;'><span>AI summary</span>${pill('Family law', ...VIOLET)}</div><div style='font-size:11px;color:#475467;line-height:1.4;'>Custody modification, hearing in 6 weeks. Order attached. Ready for consult.</div>`)}${row('Routed to', pill('S. Patel', ...BLUE))}${row('Consultation', pill('Thu 10:30', ...VIOLET))}${row('Confirmation email', pill('Sent', ...GREEN))}</div>`
const heroMockupHtml = `<div style='display:flex;align-items:flex-start;justify-content:center;gap:14px;flex-wrap:wrap;max-width:560px;margin:0 auto;'>${intakeMock}${resultMock}</div>`

const heroBadge = { text: 'Client intake management', tag: 'Free', link: null }
const heroTitle = [
  { text: 'Client intake that does ', highlight: false, color: '#475467', bold: false },
  { text: 'the follow-up for you', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'Formester captures the details, documents, signatures, and booking in one intake form, then qualifies, routes, and follows up automatically. Your team starts with a complete client file, not an inbox thread.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Create your intake form free', type: 'Primary', showArrow: true },
  { link: '#intake-templates', text: 'See intake templates', type: 'Secondary', showArrow: false },
]

const problemTitle = [
  { text: 'New clients should not arrive ', highlight: false, color: '#475467', bold: false },
  { text: 'as scattered messages', highlight: true, color: '#475467', bold: false },
]
const problemDescription =
  'For most service businesses, intake is a patchwork. The inquiry comes by email, the documents in a second thread, the signature as a scanned PDF, and the booking somewhere else. Then someone copies it all into a spreadsheet and hopes nothing was missed. The client experiences delay. Your team experiences admin.'
const problemCards = [
  {
    tag: 'Response time',
    tagColor: 'rose',
    title: 'The first response is too slow',
    body: 'New inquiries wait in a shared inbox while the client is still comparing you with the next option.',
  },
  {
    tag: 'Missing details',
    tagColor: 'amber',
    title: 'Every client sends a different amount of information',
    body: 'One sends everything. The next sends a name and a phone number. Your team fills the gaps by email.',
  },
  {
    tag: 'Scattered files',
    tagColor: 'blue',
    title: 'Documents and signatures live elsewhere',
    body: 'Files, consent forms, and agreements get collected in separate tools and separate threads.',
  },
  {
    tag: 'Qualification',
    tagColor: 'violet',
    title: 'Unqualified inquiries take real time',
    body: 'Consultations get booked before anyone checks fit, budget, location, or service type.',
  },
  {
    tag: 'Follow-up',
    tagColor: 'green',
    title: 'Follow-up depends on memory',
    body: 'Confirmations, reminders, and requests for missing information happen only when someone remembers.',
  },
  {
    tag: 'Client file',
    tagColor: 'rose',
    title: 'There is no single client file',
    body: 'By the time work begins, the client’s information is spread across email, chat, a calendar, and a spreadsheet.',
  },
]

const categoryTitle = [
  { text: 'Intake management means ', highlight: false, color: '#475467', bold: false },
  { text: 'the form is only step one', highlight: true, color: '#475467', bold: false },
]
const categoryCards = [
  {
    tag: 'Step 1',
    tagColor: 'violet',
    title: 'Capture',
    body: 'Collect contact details, background, service needs, files, signatures, and payment in one branded form. Add appointment booking when the intake leads to a consultation or visit.',
  },
  {
    tag: 'Step 2',
    tagColor: 'green',
    title: 'Qualify',
    body: 'Adapt the questions to the client’s answers, and use AI and conditions to classify, score, and summarize each inquiry before a person spends time on it.',
  },
  {
    tag: 'Step 3',
    tagColor: 'amber',
    title: 'Route',
    body: 'Send each intake to the right person, team, spreadsheet, or CRM based on service, location, case type, budget, or priority.',
  },
  {
    tag: 'Step 4',
    tagColor: 'blue',
    title: 'Follow up',
    body: 'Confirm receipt instantly, remind clients about appointments, recover incomplete intakes, and keep the next step clear without manual chasing.',
  },
]

const platformTitle = [
  { text: 'Build an intake process your team ', highlight: false, color: '#475467', bold: false },
  { text: 'does not have to babysit', highlight: true, color: '#475467', bold: false },
]
const media = (inner) =>
  `<div style='max-width:460px;margin:0 auto;${CARD}padding:18px;display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const branch = (label, target, colors) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-left:3px solid ${colors[0]};border-radius:9px;padding:9px 11px;'><span>${label}</span>${pill(target, ...colors)}</div>`
const bar = (label, pct, color) =>
  `<div style='display:flex;flex-direction:column;gap:4px;'><div style='display:flex;justify-content:space-between;font-size:11px;color:#344054;'><span>${label}</span><span>${pct}% complete</span></div><div style='height:7px;border-radius:999px;background:#f2f4f7;overflow:hidden;'><div style='width:${pct}%;height:100%;background:${color};border-radius:999px;'></div></div></div>`

const platformRows = [
  {
    kicker: 'Create',
    title: 'Create the intake form in minutes',
    body: 'Start from an intake template or describe what you need and let the AI form creator draft it. You can also turn an existing PDF intake form into a fillable online form. Customize every question, add your logo and branding, then share it by link, website embed, or QR code.',
    bullets: [{ text: 'Templates, AI generation, or PDF to form' }, { text: 'Share by link, embed, or QR code' }],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>Start from</div><div style='display:flex;gap:8px;flex-wrap:wrap;'>${chip('Template')}${chip('&#10022; AI prompt')}${chip('&#128196; Intake.pdf')}</div><div style='font-size:12px;color:#475467;margin-top:4px;'>Share</div>${row('formester.com/f/new-client', pill('Live', ...GREEN))}<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Website embed', ...BLUE)}${pill('QR code', ...VIOLET)}${pill('Your branding', ...GRAY)}</div>`,
    ),
  },
  {
    kicker: 'Conditional logic',
    title: 'Ask only what is relevant',
    body: 'Use conditional logic to change the form based on the client’s answers. A new patient with a pre-existing condition sees the follow-up questions that matter. A legal inquiry about one practice area does not answer questions written for another. Card-style forms ask one question at a time, which makes long intakes feel manageable on a phone.',
    bullets: [
      { text: 'Clients can save progress and resume later' },
      { text: 'Partial submissions keep the inquiry instead of losing it' },
    ],
    mediaHtml: media(
      `${row('Any pre-existing conditions?', pill('Yes', ...AMBER))}<div style='margin-left:14px;display:flex;flex-direction:column;gap:8px;border-left:2px dashed #d9cbf7;padding-left:12px;'>${field('Which condition?', 'Type 2 diabetes')}${field('Current medications', 'Metformin 500mg')}</div><div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>${pill('Shown by logic', ...VIOLET)}${pill('Progress saved', ...GREEN)}</div>`,
    ),
  },
  {
    kicker: 'Complete file',
    title: 'Collect the complete file in one pass',
    body: 'Everything the client would otherwise send in separate threads lands in the same submission.',
    bullets: [
      { text: 'File uploads for documents, reports, images, and records' },
      { text: 'Electronic signatures for consent forms and agreements' },
      { text: 'Payments and deposits through Stripe and PayPal' },
      { text: 'Appointment scheduling inside the same form, so booking needs no second link' },
      { text: 'Offline collection, with responses synced when the device is back online' },
    ],
    mediaHtml: media(
      `${row('&#128196; Insurance card.jpg', pill('Uploaded', ...GREEN))}${row('Consent form signature', pill('Signed', ...GREEN))}${row('Consultation deposit', pill('$75 paid', ...BLUE))}${row('Appointment', pill('Tue 2:00 PM', ...VIOLET))}${row('Offline entry', pill('Synced', ...GRAY))}`,
    ),
  },
  {
    kicker: 'AI qualification',
    title: 'Qualify before the first call',
    body: 'Add an AI Agent step to the workflow behind the form. It reads the submission and its attachments, then summarizes the inquiry, classifies it, scores fit, and writes the results into fields your team can act on. Route high-fit clients straight to a consultation. Send the rest a helpful next step by email instead of letting the inquiry sit unanswered.',
    bullets: [{ text: 'Reads answers and attachments' }, { text: 'Summary, category, and fit score saved as fields' }],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475467;'><span>AI Agent step</span>${pill('Ran on submit', ...GREEN)}</div>${aiBox(`<div style='font-size:11px;color:#475467;line-height:1.4;'><b style='color:#6434d0;'>Summary:</b> Ecommerce brand needs a rebrand and new site before a Q2 launch. Budget fits the standard package.</div>`)}${row('Category', pill('Rebrand + web', ...VIOLET))}${row('Fit score', pill('86 / 100', ...GREEN))}${row('Next step', pill('Book discovery call', ...BLUE))}`,
    ),
  },
  {
    kicker: 'Routing',
    title: 'Route every intake to the right place',
    body: 'Use conditions to split new intakes by any answer. Notify the right person by email or Slack, send the data to Google Sheets, HubSpot, or Salesforce, or push it to another system with Zapier or a webhook.',
    bullets: [
      { text: 'Service, treatment type, practice area, or case type' },
      { text: 'Location, service area, budget, or project size' },
      { text: 'Urgency or priority' },
    ],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>After submit</div>${branch('Practice area is Family law', 'S. Patel · Slack', VIOLET)}${branch('Location is outside service area', 'Referral email', AMBER)}${branch('Urgency is High', 'Partner notified', RED)}<div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>${pill('HubSpot', ...BLUE)}${pill('Google Sheets', ...GREEN)}${pill('Webhook', ...GRAY)}</div>`,
    ),
  },
  {
    kicker: 'Follow-up',
    title: 'Confirm, remind, and recover automatically',
    body: 'Keep the client informed without anyone on your team remembering to do it.',
    bullets: [
      { text: 'Instant confirmation that tells the client what happens next' },
      { text: 'Emails personalized with the client’s own answers, like their appointment time' },
      { text: 'A reminder the day before the appointment, in the client’s time zone' },
      { text: 'A follow-up with a resume link when someone abandons an intake halfway' },
      { text: 'Drop-off analytics that show which step to shorten or fix' },
    ],
    mediaHtml: media(
      `${row('Confirmation · “See you Thu 10:30”', pill('Sent instantly', ...GREEN))}${row('Reminder · day before', pill('Scheduled', ...BLUE))}${row('Abandoned at step 2', pill('Resume link sent', ...AMBER))}<div style='font-size:12px;color:#475467;margin-top:4px;'>Drop-off by step</div>${bar('Contact details', 96, '#12b76a')}${bar('Documents', 71, '#6434d0')}${bar('Payment', 58, '#f79009')}`,
    ),
  },
  {
    kicker: 'Dashboard',
    title: 'Manage every intake from one place',
    body: 'View, filter, and sort submissions in one dashboard. Use form analytics and field-level summaries to see what clients are asking for, where they drop off, and which services drive demand. When the team needs a document, generate a PDF record from the submission instead of rebuilding the client file by hand.',
    bullets: [{ text: 'Filter and sort every submission' }, { text: 'PDF record generated from each intake' }],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475467;'><span>Intakes · this week</span>${pill('24 new', ...VIOLET)}</div>${row('Maya R. · Family law', pill('Booked', ...GREEN))}${row('Dev K. · Estate planning', pill('Docs pending', ...AMBER))}${row('Lena O. · Immigration', pill('Routed', ...BLUE))}<div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>${pill('&#128196; PDF record', ...GRAY)}${pill('Field summaries', ...VIOLET)}</div>`,
    ),
  },
]

const useCasesTitle = [
  { text: 'Client intake for businesses ', highlight: false, color: '#475467', bold: false },
  { text: 'that start with a conversation', highlight: true, color: '#475467', bold: false },
]
const flow = (steps) =>
  `<div style='display:flex;flex-wrap:wrap;align-items:center;gap:6px;text-align:left;'>${steps
    .map(([label, colors]) => pill(label, ...colors))
    .join(`<span style='font-size:11px;color:#98a2b3;'>&rarr;</span>`)}</div>`
const useCaseCards = [
  {
    tag: 'Law firms',
    tagColor: 'violet',
    title: 'Start every matter with the facts, not phone tag',
    body: 'Collect the client’s background, case type, key dates, opposing parties, and supporting documents in one form. Route the inquiry by practice area, collect a consultation payment or deposit, and send a confirmation with the next step.',
    mockHtml: flow([
      ['Intake submitted', VIOLET],
      ['AI summary', BLUE],
      ['Route by practice area', AMBER],
      ['Consultation booked', GREEN],
    ]),
  },
  {
    tag: 'Healthcare and wellness',
    tagColor: 'green',
    title: 'Collect the patient file before the visit',
    body: 'Gather contact details, history, current medications, allergies, insurance information, and signed consent before the appointment. Conditional logic asks follow-up questions only when an answer calls for them.',
    mockHtml: flow([
      ['Intake submitted', VIOLET],
      ['Consent signed', BLUE],
      ['Appointment booked', AMBER],
      ['Reminder sent', GREEN],
    ]),
  },
  {
    tag: 'Coaches and consultants',
    tagColor: 'amber',
    title: 'Qualify the client before the discovery call',
    body: 'Ask about goals, current situation, budget, and timeline in the intake. Score fit automatically, book qualified clients into a call, and take a deposit in the same flow.',
    mockHtml: flow([
      ['Intake submitted', VIOLET],
      ['Fit scored', BLUE],
      ['Qualified clients book', AMBER],
      ['Deposit collected', GREEN],
    ]),
  },
  {
    tag: 'Agencies and creative services',
    tagColor: 'blue',
    title: 'Turn a vague inquiry into a usable project brief',
    body: 'Collect goals, scope, deadlines, brand files, and budget range upfront. Route the brief to the right team and send the client a confirmation that sets expectations.',
    mockHtml: flow([
      ['Brief submitted', VIOLET],
      ['Files collected', BLUE],
      ['Routed to team', AMBER],
      ['Kickoff follow-up', GREEN],
    ]),
  },
  {
    tag: 'Home and professional services',
    tagColor: 'rose',
    title: 'Capture the job details before sending anyone out',
    body: 'Collect the service needed, address, photos, preferred times, and access notes in one intake. Route by service area and send the client a confirmation with what happens next.',
    mockHtml: flow([
      ['Request submitted', VIOLET],
      ['Routed by area', BLUE],
      ['Team notified', AMBER],
      ['Client confirmed', GREEN],
    ]),
  },
]

const howButtons = [{ link: SIGN_UP_URL, text: 'Create your intake form free', type: 'Primary', showArrow: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Build or generate the form',
    description: 'Start from a template, generate the intake with AI, or convert the PDF form you already use.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Template', ...VIOLET)}${pill('AI prompt', ...BLUE)}${pill('PDF to form', ...GREEN)}</div>`,
    ),
  },
  {
    title: 'Add the steps that complete the file',
    description:
      'Include file uploads, signatures, appointment scheduling, and payment where your process needs them. Add conditional logic so each client only sees relevant questions.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Uploads', ...VIOLET)}${pill('Signature', ...GREEN)}${pill('Booking', ...BLUE)}${pill('Payment', ...AMBER)}</div>`,
    ),
  },
  {
    title: 'Connect the follow-up workflow',
    description:
      'Set the confirmation email, routing rules, AI summary or scoring, reminders, and the CRM or spreadsheet the intake should land in.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Confirmation', ...GREEN)}${pill('AI scoring', ...VIOLET)}${pill('Routing', ...AMBER)}${pill('HubSpot', ...BLUE)}</div>`,
    ),
  },
  {
    title: 'Share one link',
    description:
      'Put the intake on your website, send it after a first call, or share it by email and QR code. Every response arrives complete and routed.',
    rawHtml: stepCard(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#101828;'><span>formester.com/f/new-client</span>${pill('Live', ...GREEN)}</div>`,
    ),
  },
]

const compareTitle = [
  { text: 'One intake link instead of ', highlight: false, color: '#475467', bold: false },
  { text: 'four disconnected steps', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  { feature: 'Intake, booking, and payment', us: 'One form and one link', them: 'Different tools for each step' },
  {
    feature: 'Questions adapt to the client',
    us: 'Conditional logic by answer',
    them: 'Same static form for everyone',
  },
  { feature: 'Documents and signatures', us: 'Collected inside the intake', them: 'Chased by email afterward' },
  { feature: 'First response', us: 'Instant, personalized confirmation', them: 'When someone sees the email' },
  { feature: 'Qualification', us: 'AI summary, classification, and scoring', them: 'Read every inquiry manually' },
  { feature: 'Routing', us: 'Automatic, by any answer', them: 'Forwarded by hand' },
  { feature: 'Incomplete intakes', us: 'Follow-up with a resume link', them: 'Usually lost' },
  { feature: 'Where the data lands', us: 'Dashboard, Sheets, CRM, or webhook', them: 'Copied and pasted' },
]

const templatesTitle = [
  { text: 'Start from a template ', highlight: false, color: '#475467', bold: false },
  { text: 'your clients already understand', highlight: true, color: '#475467', bold: false },
]
const templateCards = [
  {
    tag: 'Healthcare',
    tagColor: 'green',
    title: 'Patient intake form',
    body: 'For clinics and healthcare practices.',
    link: '/templates/patient-intake-form-12220/',
    linkText: 'Use template',
  },
  {
    tag: 'Therapy',
    tagColor: 'violet',
    title: 'Counseling intake form',
    body: 'For therapists and mental health practices.',
    link: '/templates/counseling-intake-form-12250/',
    linkText: 'Use template',
  },
  {
    tag: 'Fitness',
    tagColor: 'amber',
    title: 'Personal training intake form',
    body: 'For fitness and physical therapy.',
    link: '/templates/personal-training-intake-form-12269/',
    linkText: 'Use template',
  },
  {
    tag: 'Beauty',
    tagColor: 'rose',
    title: 'Salon and spa client intake form',
    body: 'For beauty and wellness businesses.',
    link: '/templates/salon-client-intake-form-12260/',
    linkText: 'Use template',
  },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is client intake management?',
    body: 'Client intake management is the process of capturing, qualifying, routing, and following up with new clients. It covers the intake form itself, plus the booking, documents, signatures, payment, confirmations, reminders, and internal handoffs that surround it.',
  },
  {
    id: 2,
    header: 'How is client intake management different from an intake form?',
    body: 'An intake form only collects answers. Intake management decides what happens to those answers: who gets notified, whether the client is a fit, where the data is stored, and what the client hears next.',
  },
  {
    id: 3,
    header: 'Which businesses use Formester for client intake?',
    body: 'Law firms, healthcare and wellness practices, coaches, consultants, agencies, and service businesses use intake forms to collect client information before consultations, appointments, and projects.',
  },
  {
    id: 4,
    header: 'Can clients book an appointment and pay in the same intake form?',
    body: 'Yes. The intake form can include appointment scheduling and payment through Stripe or PayPal, so a qualified client can book and pay without a second tool or link. Appointment scheduling is available on the Business plan.',
  },
  {
    id: 5,
    header: 'Can I collect documents and signatures during intake?',
    body: 'Yes. Clients can upload files and documents inside the form, and electronic signature fields collect consent and agreement signatures digitally.',
  },
  {
    id: 6,
    header: 'I already have a PDF intake form. Can I reuse it?',
    body: 'Yes. Convert a static PDF into a fillable online form, or generate a new intake form with AI from a prompt and adjust the questions.',
  },
  {
    id: 7,
    header: 'Can intake data go to my CRM or spreadsheet?',
    body: 'Yes. Send submissions to Google Sheets, HubSpot, Salesforce, Slack, and other tools, or push the data to any system with Zapier or a webhook.',
  },
  {
    id: 8,
    header: 'What happens when a client does not finish the intake?',
    body: 'Workflows can trigger when a form is abandoned and send the client a link to continue. On the Business plan, you can also view partial submissions and let respondents save and resume a longer form.',
  },
  {
    id: 9,
    header: 'Can Formester summarize or score a new inquiry?',
    body: 'Yes. An AI Agent workflow step can summarize, classify, score, or extract information from a submission and its attachments, then write the results into fields for routing and review.',
  },
  {
    id: 10,
    header: 'Do clients need an account to complete intake?',
    body: 'No. Clients open the form from your link, complete it, and submit. There is no separate client portal to sign up for.',
  },
  {
    id: 11,
    header: 'Is it free to start?',
    body: 'Yes. The free plan includes unlimited forms and unlimited responses. Advanced capabilities such as conditional logic, appointment scheduling, partial submissions, and save and resume are available on paid plans, as shown on the pricing page.',
  },
]

const ctaButtons = [
  { link: SIGN_UP_URL, text: 'Create your intake form free', type: 'Primary', showArrow: true },
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
    name: 'Formester Client Intake',
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
