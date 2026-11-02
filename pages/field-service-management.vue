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
      eyebrow="Where field service breaks down"
      :description="problemDescription"
      columns="3"
      :title="problemTitle"
      :cards="problemCards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="What it is"
      description="Software in this category earns its place by handling the life of a job, not just storing a form."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="categoryTitle"
      :cards="categoryCards"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="Platform" :title="platformTitle" :rows="platformRows" class="page-component-item" />

    <CardGrid
      eyebrow="Use cases"
      description="Repairs, cleaning, construction, fleet, property, and installations all end the same way: a job someone needs proof of."
      columns="2"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Running in four steps"
      description="Create the job forms, connect assignment, hand them to technicians, and watch completed jobs arrive."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Comparison"
      colUs="Formester"
      colThem="Paper and messaging apps"
      colThem2="Full field service suites"
      :title="compareTitle"
      :rows="compareRows"
      note="Formester is the right fit when your core problem is job paperwork, field records, and proof of work. If you need a dispatch board and live fleet tracking, pair it with, or choose, a dedicated operations platform."
      class="page-component-item"
    />

    <CardGrid
      id="field-service-templates"
      eyebrow="Field service starting points"
      description="Start from the inspection rounds your team already runs, or a work order form you can adapt to your trade."
      columns="4"
      :title="templatesTitle"
      :cards="templateCards"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free plan, unlimited responses"
      heading="Do the job once. The record takes care of itself."
      description="Your technicians already carry the device. Give them forms that capture the work, the photos, and the signature in one pass, and give the office records it never has to chase."
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
const PAGE_URL = 'https://formester.com/field-service-management/'
const META_TITLE = 'Field Service Management Software Built on Digital Work Orders | Formester'
const META_DESCRIPTION =
  'Book jobs, assign them automatically, and capture work orders, inspections, photos, and customer sign-offs in the field, even offline. Start free with unlimited forms and responses.'

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
const check = (label, ok = true) =>
  `<div style='display:flex;align-items:center;gap:8px;font-size:12px;color:#101828;'><span style='width:14px;height:14px;flex-shrink:0;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;color:#fff;background:${ok ? '#12b76a' : '#f04438'};'>${ok ? '&#10003;' : '!'}</span>${label}</div>`
const signature = (name) =>
  `<div style='border:1px dashed #d0d5dd;border-radius:9px;padding:8px 10px;display:flex;justify-content:space-between;align-items:flex-end;gap:8px;'><span style='font-family:\"Brush Script MT\",cursive;font-size:20px;color:#344054;line-height:1;'>${name}</span><span style='font-size:10px;color:#697586;'>Customer signature</span></div>`
const photo = (label) =>
  `<span style='flex:1;min-width:0;height:44px;border-radius:8px;background:linear-gradient(135deg,#d0d5dd,#98a2b3);display:flex;align-items:flex-end;padding:4px 6px;font-size:10px;font-weight:600;color:#fff;'>${label}</span>`

// Hero: the request being assigned beside the technician's work order on a phone.
const requestMock = `<div style='flex:1 1 230px;min-width:0;max-width:250px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Service request</span>${pill('WO-1048', ...GRAY)}</div>${field('Problem', 'AC unit not cooling')}${field('Site', '14 Elm St, Unit 3')}${row('Urgency', pill('High', ...RED))}${row('Assigned to', pill('Marco · North', ...BLUE))}${row('Office dashboard', pill('Completed', ...GREEN))}</div>`
const workOrderMock = `<div style='flex:1 1 230px;min-width:0;max-width:240px;${CARD}border-radius:22px;padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Work order · WO-1048</span>${pill('Offline', ...AMBER)}</div>${check('Refrigerant level checked')}${check('Filter replaced')}${check('Thermostat tested')}<div style='display:flex;gap:6px;'>${photo('Before')}${photo('After')}</div>${signature('J. Alvarez')}</div>`
const heroMockupHtml = `<div style='display:flex;align-items:flex-start;justify-content:center;gap:14px;flex-wrap:wrap;max-width:560px;margin:0 auto;'>${requestMock}${workOrderMock}</div>`

const heroBadge = { text: 'Field service management software', tag: 'Free', link: null }
const heroTitle = [
  { text: 'Field service jobs, from request to sign-off, ', highlight: false, color: '#475467', bold: false },
  { text: 'without the paper trail', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'A customer requests a job. Formester assigns it, your technician completes a digital work order on site with photos and a customer signature, and the finished record is in the office before they reach the next job. It works offline, and it replaces the clipboard, the photo thread, and the end-of-day data entry.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Create your first work order form free', type: 'Primary', showArrow: true },
  { link: '#field-service-templates', text: 'See field service templates', type: 'Secondary', showArrow: false },
]

const problemTitle = [
  { text: 'The job gets done. ', highlight: false, color: '#475467', bold: false },
  { text: 'The paperwork is where field service falls apart.', highlight: true, color: '#475467', bold: false },
]
const problemDescription =
  'The repair is finished, the inspection passed, the customer is happy. Then the record of that work travels home in a van: a paper work order, photos in a chat thread, a signature photographed and sent three days later. By the time the office can invoice it, file it, or prove it happened, the details have already started to blur.'
const problemCards = [
  {
    tag: 'Intake',
    tagColor: 'blue',
    title: 'Requests arrive everywhere',
    body: 'Phone calls, texts, emails, and walk-ins become jobs, or get lost before they do.',
  },
  {
    tag: 'Assignment',
    tagColor: 'amber',
    title: 'Assignment lives in someone’s head',
    body: 'Who is free, who covers which area, and who was told what stays tribal knowledge.',
  },
  {
    tag: 'Paper',
    tagColor: 'rose',
    title: 'Paper work orders come back late and incomplete',
    body: 'Missing fields, unreadable handwriting, photos separated from the job they belong to.',
  },
  {
    tag: 'Proof',
    tagColor: 'violet',
    title: 'No proof at the moment it matters',
    body: 'When a customer disputes a job, the signature and the before-and-after photos are scattered across phones.',
  },
  {
    tag: 'Compliance',
    tagColor: 'rose',
    title: 'Inspections are a compliance risk',
    body: 'Safety and equipment checklists on paper are hard to audit, easy to lose, and painful at review time.',
  },
  {
    tag: 'Admin',
    tagColor: 'green',
    title: 'The office re-types everything',
    body: 'Someone spends evenings turning field paperwork into records, invoices, and reports.',
  },
]

const categoryTitle = [
  { text: 'Field service management ', highlight: false, color: '#475467', bold: false },
  { text: 'is five jobs', highlight: true, color: '#475467', bold: false },
]
const categoryCards = [
  {
    tag: 'Step 1',
    tagColor: 'violet',
    title: 'Request',
    body: 'Every job starts as a structured request: the customer, the site, the problem, and the urgency, captured the same way every time.',
  },
  {
    tag: 'Step 2',
    tagColor: 'green',
    title: 'Schedule and assign',
    body: 'The job is booked, given a reference number, and routed to the right technician or branch automatically.',
  },
  {
    tag: 'Step 3',
    tagColor: 'amber',
    title: 'Execute in the field',
    body: 'The technician works from a digital work order: the checklist, the job history, the parts used, the photos, all on the device already in their pocket.',
  },
  {
    tag: 'Step 4',
    tagColor: 'blue',
    title: 'Sign off and close',
    body: 'The customer signs on completion, payment can be collected in the same flow, and the office sees the closed job immediately.',
  },
  {
    tag: 'Step 5',
    tagColor: 'rose',
    title: 'Record and report',
    body: 'Every job becomes a searchable record: what was done, by whom, when, with photo and signature proof ready for billing, audits, and disputes.',
  },
]

const platformTitle = [
  { text: 'The field service system ', highlight: false, color: '#475467', bold: false },
  { text: 'your team will actually use', highlight: true, color: '#475467', bold: false },
]
const media = (inner) =>
  `<div style='max-width:460px;margin:0 auto;${CARD}padding:18px;display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const branch = (label, target, colors) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-left:3px solid ${colors[0]};border-radius:9px;padding:9px 11px;'><span>${label}</span>${pill(target, ...colors)}</div>`

const platformRows = [
  {
    kicker: 'Work orders',
    title: 'Digital work orders with real job numbers',
    body: 'Build work orders, job cards, and service reports with the drag-and-drop builder or generate them with AI. Every submission gets an automatic unique ID, so each job has a reference number from request to invoice. Technicians see one form that matches the job, not a generic app they have to fight.',
    bullets: [
      { text: 'Automatic unique ID on every submission' },
      { text: 'Asset and serial numbers, fault categories, parts used, time on site, and readings' },
    ],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:700;color:#101828;'><span>Job card</span>${pill('WO-1048', ...VIOLET)}</div>${field('Asset · Serial', 'Carrier 24ACC6 · 4219X')}${field('Fault category', 'Low refrigerant')}${row('Parts used', pill('Filter, R-410A 2 lb', ...GRAY))}${row('Time on site', pill('1 h 25 min', ...BLUE))}`,
    ),
  },
  {
    kicker: 'Booking and assignment',
    title: 'Booking and assignment that run themselves',
    body: 'Customers request service through a booking form with appointment scheduling, so the visit is in the calendar before anyone picks up the phone. Then a workflow routes the job by service type, region, or urgency, and the right technician or branch gets it by email or Slack the moment the request lands.',
    bullets: [
      { text: 'Customers book their own visit slot' },
      { text: 'Supervisor approvals before work starts or before a job closes' },
    ],
    mediaHtml: media(
      `${row('Visit booked', pill('Tue 9:00 to 11:00', ...VIOLET))}<div style='font-size:12px;color:#475467;margin-top:2px;'>Route the job</div>${branch('Service is HVAC, region North', 'Marco · Slack', BLUE)}${branch('Urgency is Emergency', 'On-call tech', RED)}${branch('Job over $2,000', 'Supervisor approval', AMBER)}`,
    ),
  },
  {
    kicker: 'Offline capture',
    title: 'Field capture that works where the work is',
    body: 'Jobs rarely happen near good signal. Formester forms work fully offline: technicians complete checklists, attach photos, and collect signatures with no connection, and entries save on the device and sync when they are back in range. Put a QR code on the equipment and the exact inspection form for that asset opens on scan.',
    bullets: [
      { text: 'Checklists, photos, and signatures with no connection' },
      { text: 'QR codes on equipment open the right form' },
    ],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475467;'><span>No signal · Basement plant room</span>${pill('Offline', ...AMBER)}</div>${row('Boiler B2 inspection', pill('Saved on device', ...GRAY))}${row('Pump P4 inspection', pill('Saved on device', ...GRAY))}${row('Back in range', pill('2 synced', ...GREEN))}<div style='display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;'>${chip('&#9638; Scan QR on asset')}</div>`,
    ),
  },
  {
    kicker: 'Inspections',
    title: 'Inspections and compliance records',
    body: 'Start from purpose-built templates for the rounds your team already runs. Conditional logic asks for detail only when something fails, and every record exports as a PDF for audits and client reporting.',
    bullets: [
      { text: 'Job site, pre-trip vehicle, forklift, and car inspections' },
      { text: 'Fire extinguisher and safety harness checks' },
      { text: 'PDF export for audits' },
    ],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:700;color:#101828;'><span>Forklift inspection</span>${pill('Daily', ...BLUE)}</div>${check('Forks and chains')}${check('Brakes and steering')}${check('Hydraulic hoses', false)}<div style='margin-left:14px;display:flex;flex-direction:column;gap:8px;border-left:2px dashed #fecdca;padding-left:12px;'>${field('Describe the defect', 'Slow leak at mast cylinder')}<div style='display:flex;gap:6px;'>${photo('Leak photo')}</div></div><div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('&#128196; PDF record', ...GRAY)}</div>`,
    ),
  },
  {
    kicker: 'Sign-off',
    title: 'Sign-off and payment at the door',
    body: 'The customer signs the completed work order on the technician’s device, and the signature travels with the record, not on a separate sheet. Where you charge on completion, collect payment by card in the same flow through Stripe or PayPal.',
    bullets: [{ text: 'Signature stored with the job record' }, { text: 'Card payment through Stripe or PayPal' }],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:700;color:#101828;'><span>Completion · WO-1048</span>${pill('Ready to close', ...GREEN)}</div>${row('Labor and parts', pill('$240.00', ...GRAY))}${signature('J. Alvarez')}${row('Card payment · Stripe', pill('Paid', ...GREEN))}`,
    ),
  },
  {
    kicker: 'Office',
    title: 'The office sees everything, instantly',
    body: 'Submissions arrive in one dashboard, searchable by job number, customer, technician, or site. Send completed jobs to Google Sheets, your CRM, or any other system through Zapier or webhooks. The customer gets an automatic completion email, and recurring inspections can remind themselves with scheduled follow-ups.',
    bullets: [
      { text: 'Search by job number, customer, technician, or site' },
      { text: 'Completion emails and scheduled inspection reminders' },
    ],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475467;'><span>Jobs · today</span>${pill('18 closed', ...GREEN)}</div>${row('WO-1048 · Marco · 14 Elm St', pill('Signed', ...GREEN))}${row('WO-1049 · Aisha · Harbor Mall', pill('In progress', ...AMBER))}${row('WO-1050 · Ben · Depot 2', pill('Assigned', ...BLUE))}<div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>${pill('Google Sheets', ...GREEN)}${pill('Webhook', ...GRAY)}${pill('Completion email sent', ...VIOLET)}</div>`,
    ),
  },
]

const useCasesTitle = [
  { text: 'Built for teams whose office ', highlight: false, color: '#475467', bold: false },
  { text: 'is a vehicle', highlight: true, color: '#475467', bold: false },
]
const flow = (steps) =>
  `<div style='display:flex;flex-wrap:wrap;align-items:center;gap:6px;text-align:left;'>${steps
    .map(([label, colors]) => pill(label, ...colors))
    .join(`<span style='font-size:11px;color:#98a2b3;'>&rarr;</span>`)}</div>`
const useCaseCards = [
  {
    tag: 'Repairs and maintenance',
    tagColor: 'violet',
    title: 'HVAC, equipment, appliances, facilities',
    body: 'Service requests arrive structured, get assigned automatically, and close with a signed work order and photos of the finished job. Recurring maintenance rounds run from the same inspection forms.',
    mockHtml: flow([
      ['Request submitted', VIOLET],
      ['Job assigned', BLUE],
      ['Work order completed', AMBER],
      ['Signed and synced', GREEN],
    ]),
  },
  {
    tag: 'Cleaning and facility services',
    tagColor: 'green',
    title: 'Site visits with proof of work',
    body: 'Crews check in with a site checklist, photograph the finished areas, and get a client signature. The office has proof of attendance and quality before the invoice goes out.',
    mockHtml: flow([
      ['Visit scheduled', VIOLET],
      ['Checklist completed', BLUE],
      ['Photos attached', AMBER],
      ['Client sign-off', GREEN],
    ]),
  },
  {
    tag: 'Construction and site safety',
    tagColor: 'amber',
    title: 'Inspections that survive an audit',
    body: 'Job site inspections, equipment checks, and safety walk-throughs completed on the spot, signed by the inspector, and stored as records you can produce months later.',
    mockHtml: flow([
      ['Inspection opened', VIOLET],
      ['Issues flagged with photos', BLUE],
      ['Supervisor notified', AMBER],
      ['Record filed', GREEN],
    ]),
  },
  {
    tag: 'Fleet and vehicle checks',
    tagColor: 'blue',
    title: 'Pre-trip inspections without the clipboard',
    body: 'Drivers complete pre-trip and vehicle inspections on their phones, flag defects with conditional follow-ups, and sign before departure. Defects reach the workshop the same morning, not at the next service.',
    mockHtml: flow([
      ['Inspection submitted', VIOLET],
      ['Defect flagged', BLUE],
      ['Workshop alerted', AMBER],
      ['Record stored', GREEN],
    ]),
  },
  {
    tag: 'Property management',
    tagColor: 'rose',
    title: 'Maintenance requests tenants can track',
    body: 'Tenants submit requests with photos of the problem. Requests route to the right contractor, the completed repair is signed off, and the property has a full history per unit.',
    mockHtml: flow([
      ['Request with photos', VIOLET],
      ['Routed to contractor', BLUE],
      ['Repair completed', AMBER],
      ['History updated', GREEN],
    ]),
  },
  {
    tag: 'Installations',
    tagColor: 'violet',
    title: 'Multi-step jobs, one record',
    body: 'Site survey, installation checklist, customer training confirmation, and sign-off captured across visits in a single job history, instead of four disconnected forms.',
    mockHtml: flow([
      ['Survey completed', VIOLET],
      ['Installation done', BLUE],
      ['Sign-off collected', AMBER],
      ['Record closed', GREEN],
    ]),
  },
]

const howButtons = [
  { link: SIGN_UP_URL, text: 'Create your first work order form free', type: 'Primary', showArrow: true },
]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Create your job forms',
    description:
      'Start from a work order or inspection template, generate one with AI, or build your own. Set the checklist once and every technician works from the same standard.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Work order', ...VIOLET)}${pill('Inspection', ...BLUE)}${pill('AI prompt', ...GREEN)}</div>`,
    ),
  },
  {
    title: 'Connect assignment and alerts',
    description:
      'Decide how jobs route: by type, area, or urgency. Add supervisor approvals and the alerts your office and customers should receive.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('By area', ...BLUE)}${pill('By urgency', ...RED)}${pill('Approval', ...AMBER)}${pill('Slack', ...VIOLET)}</div>`,
    ),
  },
  {
    title: 'Put the forms in technicians’ hands',
    description: 'Share by link or QR code. Forms install on any phone or tablet and keep working offline.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Link', ...GRAY)}${pill('QR code', ...VIOLET)}${pill('Works offline', ...AMBER)}</div>`,
    ),
  },
  {
    title: 'Watch completed jobs arrive',
    description:
      'Signed work orders, photos, and inspection records sync to the office as technicians reconnect. Nothing waits for the end of the day.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('WO-1048 signed', ...GREEN)}${pill('4 photos', ...BLUE)}${pill('Synced', ...GREEN)}</div>`,
    ),
  },
]

const compareTitle = [
  { text: 'Formester against paper, chat threads, ', highlight: false, color: '#475467', bold: false },
  { text: 'and heavyweight FSM suites', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  {
    feature: 'Job record',
    us: 'Digital, searchable, one per job',
    them: 'Paper plus scattered photos',
    them2: 'Digital, inside the suite',
  },
  {
    feature: 'Works offline',
    us: 'Yes, full forms with photos and signatures',
    them: 'Paper works, records do not sync',
    them2: 'Usually, through a native app',
  },
  {
    feature: 'Technician adoption',
    us: 'A form on any device, no training cycle',
    them: 'Familiar, but incomplete',
    them2: 'New app and process to learn',
  },
  {
    feature: 'Assignment',
    us: 'Automatic routing by rules you set',
    them: 'Phone calls and memory',
    them2: 'Dispatch boards and scheduling tools',
  },
  { feature: 'Live technician GPS tracking', us: 'Not included', them: 'Not included', them2: 'Included' },
  {
    feature: 'Customer sign-off',
    us: 'Signature inside the work order',
    them: 'Separate sheet, often lost',
    them2: 'Included',
  },
  {
    feature: 'Compliance records',
    us: 'Inspection templates, PDF exports',
    them: 'Filing cabinet',
    them2: 'Included',
  },
  {
    feature: 'Cost to start',
    us: 'Free, unlimited forms and responses',
    them: 'Free, paid in admin time',
    them2: 'Per-technician pricing',
  },
]

const templatesTitle = [
  { text: 'Templates your team ', highlight: false, color: '#475467', bold: false },
  { text: 'can use today', highlight: true, color: '#475467', bold: false },
]
const templateCards = [
  {
    tag: 'Construction',
    tagColor: 'amber',
    title: 'Job site inspection form',
    body: 'For construction and site safety checks.',
    link: '/templates/job-site-inspection-form-25351/',
    linkText: 'Use template',
  },
  {
    tag: 'Fleet',
    tagColor: 'blue',
    title: 'Pre-trip inspection form',
    body: 'For drivers and fleet managers.',
    link: '/templates/pretrip-inspection-form-25344/',
    linkText: 'Use template',
  },
  {
    tag: 'Warehouse',
    tagColor: 'violet',
    title: 'Forklift inspection form',
    body: 'For warehouse equipment rounds.',
    link: '/templates/forklift-inspection-form-25347/',
    linkText: 'Use template',
  },
  {
    tag: 'Vehicles',
    tagColor: 'green',
    title: 'Car inspection form',
    body: 'For vehicle condition records.',
    link: '/templates/car-inspection-form-25343/',
    linkText: 'Use template',
  },
  {
    tag: 'Buildings',
    tagColor: 'rose',
    title: 'Fire extinguisher inspection form',
    body: 'For building compliance.',
    link: '/templates/fire-extinguisher-inspection-form-25350/',
    linkText: 'Use template',
  },
  {
    tag: 'Safety',
    tagColor: 'amber',
    title: 'Safety harness inspection form',
    body: 'For high-risk work documentation.',
    link: '/templates/safety-harness-inspection-form-17383/',
    linkText: 'Use template',
  },
  {
    tag: 'Jobs',
    tagColor: 'violet',
    title: 'Work order form',
    body: 'A job record you can adapt to your trade.',
    link: '/templates/work-order-form-32856/',
    linkText: 'Use template',
  },
  {
    tag: 'Reports',
    tagColor: 'blue',
    title: 'Service report form',
    body: 'Built in minutes with the AI form generator.',
    link: '/ai-form-generator/',
    linkText: 'Generate with AI',
  },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is field service management software?',
    body: 'It is software that manages the life of a field job: taking the request, scheduling and assigning it, supporting the technician’s work on site, capturing sign-off and payment, and keeping the complete record. Formester covers this through digital work orders, automatic assignment workflows, and offline field capture.',
  },
  {
    id: 2,
    header: 'Does Formester work offline?',
    body: 'Yes. Technicians can complete forms, attach photos, and collect signatures with no connection. Entries are saved on the device and sync automatically when a connection returns, even if the device was shut down in between.',
  },
  {
    id: 3,
    header: 'Can customers book their own service visits?',
    body: 'Yes. A booking form with appointment scheduling lets customers pick a slot, and a workflow can assign the job and notify the technician immediately. Appointment scheduling is on the Business plan.',
  },
  {
    id: 4,
    header: 'How do jobs get reference numbers?',
    body: 'Every form submission receives an automatic unique ID, which serves as the work order number across the dashboard, notifications, and exports.',
  },
  {
    id: 5,
    header: 'Can technicians collect signatures and photos?',
    body: 'Yes. E-signatures and file and photo uploads are included on every plan and work offline, syncing with the rest of the submission.',
  },
  {
    id: 6,
    header: 'Does Formester replace a dispatch platform?',
    body: 'No, and it does not claim to. Formester has no dispatch board or live GPS technician tracking. It manages requests, assignment rules, work orders, inspections, sign-offs, and records. Teams whose main gap is paperwork and proof of work use Formester on its own; teams that need live dispatch run it alongside their scheduling tool.',
  },
  {
    id: 7,
    header: 'Can I export inspection records for audits?',
    body: 'Yes. Submissions can be exported, and formatted PDF exports of completed forms are available on the Business plan for client reporting and compliance files.',
  },
  {
    id: 8,
    header: 'Is it free to start?',
    body: 'Yes. The free plan includes unlimited forms and unlimited responses, offline mode, and e-signatures. Conditional logic is on the Personal plan and above, and appointment scheduling and PDF exports are on the Business plan, as shown on the pricing page.',
  },
]

const ctaButtons = [
  { link: SIGN_UP_URL, text: 'Create your first work order form free', type: 'Primary', showArrow: true },
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
    name: 'Formester Field Service',
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
