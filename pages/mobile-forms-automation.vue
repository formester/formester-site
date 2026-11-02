<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Offline forms are included on every plan. Unlimited forms and responses on the free plan. No credit card required."
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#ecfdf3"
      blobColorC="#eff8ff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56,000+ teams worldwide" showTrustBadges class="page-component-item" />

    <CardGrid
      eyebrow="Where paper and basic forms break down"
      :description="problemDescription"
      columns="3"
      :title="problemTitle"
      :cards="problemCards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="What it is"
      description="A mobile form is a form that works on a phone. Mobile forms automation goes further: the form works anywhere, the data files itself, and the next step starts without office staff touching it."
      columns="4"
      background="var(--gray-25, #fcfcfd)"
      :title="categoryTitle"
      :cards="categoryCards"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="Platform" :title="platformTitle" :rows="platformRows" class="page-component-item" />

    <CardGrid
      id="use-cases"
      eyebrow="Use cases"
      description="Six field teams, one pattern: capture on site, sync when back in range, and let the next step run on its own."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="From paper form to field-ready in four steps"
      description="No code and no IT project. Build the form, switch on offline mode, and hand it to the team."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Comparison"
      colUs="Formester"
      colThem="Paper and spreadsheets"
      colThem2="Basic online forms"
      :title="compareTitle"
      :rows="compareRows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Field-ready starting points"
      description="Generate any of these with AI, then adjust the questions to your team's process."
      columns="3"
      :title="templatesTitle"
      :cards="templateCards"
      class="page-component-item"
    />

    <StatsBanner eyebrow="Plans" heading="Offline collection is not a premium add-on" :stats="planStats" />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free plan, unlimited forms and responses"
      heading="The field should not have to wait for a signal"
      description="Give your team forms that work where the work is, and give the office the data the same day. Formester turns field paperwork into synced, searchable, automated records."
      trustText="Start with unlimited forms and responses, free."
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
import StatsBanner from '@/components/v2/StatsBanner.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/mobile-forms-automation/'
const META_TITLE = 'Mobile Forms Automation Software for Offline Field Data Collection | Formester'
const META_DESCRIPTION =
  'Collect inspections, checklists, photos, and signatures on any phone or tablet, with or without internet. Formester mobile forms save entries offline, sync automatically, and route data to your team. Start free.'

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

const checkRow = (label, status) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-radius:9px;padding:8px 10px;'><span>${label}</span>${status}</div>`

// Phone running an inspection with no signal, beside the dashboard that receives it after sync.
const phoneMock = `<div style='width:210px;flex-shrink:0;background:#101828;border-radius:30px;padding:9px;box-shadow:0 24px 60px rgba(15,14,26,.18);'><div style='background:#fff;border-radius:23px;overflow:hidden;'><div style='display:flex;align-items:center;justify-content:space-between;padding:10px 14px 6px;font-size:10px;font-weight:600;color:#101828;'><span>9:41</span><span style='color:#b42318;'>No signal</span></div><div style='margin:0 10px;background:#fffaeb;border:1px solid #fedf89;border-radius:8px;padding:6px 8px;font-size:10px;color:#b54708;line-height:1.35;'>Offline. 3 entries saved on this device.</div><div style='padding:10px;display:flex;flex-direction:column;gap:6px;'><div style='font-size:12px;font-weight:700;color:#101828;'>Site safety inspection</div>${checkRow('Fire exits clear', pill('Pass', ...GREEN))}${checkRow('Scaffold tagged', pill('Fail', ...RED))}<div style='border:1px dashed #d0d5dd;border-radius:9px;padding:8px 10px;font-size:11px;color:#475467;'>&#128247; 2 photos attached</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:8px 10px;font-size:11px;color:#475467;font-style:italic;'>Signed: J. Ortiz</div><div style='text-align:center;font-size:12px;font-weight:600;color:#fff;background:#6434d0;border-radius:999px;padding:8px;'>Save entry</div></div></div></div>`
const dashMock = `<div style='flex:1 1 240px;min-width:0;max-width:300px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Submissions</span>${pill('Synced', ...GREEN)}</div>${checkRow('Inspection #318 · Fail', pill('Flagged', ...RED))}${checkRow('Inspection #317 · Pass', pill('Done', ...GREEN))}${checkRow('Daily log · Site B', pill('Done', ...GREEN))}<div style='display:flex;gap:8px;align-items:flex-start;background:#f9fafb;border:1px solid #eaecf0;border-radius:9px;padding:8px 10px;'><span style='font-size:14px;'>&#128276;</span><span style='font-size:11px;color:#344054;line-height:1.4;'><b>Safety team notified</b><br/>Scaffold tag failed at Site A</span></div></div>`
const heroMockupHtml = `<div style='display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;max-width:540px;margin:0 auto;'>${phoneMock}${dashMock}</div>`

const heroBadge = { text: 'Mobile forms automation', tag: 'Offline', link: null }
const heroTitle = [
  { text: 'Mobile forms that work offline and ', highlight: false, color: '#475467', bold: false },
  { text: 'automate what happens next', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'Your team captures inspections, checklists, photos, and signatures on site, even with zero signal. Every entry is saved on the device, syncs when a connection returns, and lands in your dashboard, spreadsheet, or CRM without anyone re-typing it.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Create your first mobile form free', type: 'Primary', showArrow: true },
  { link: '#use-cases', text: 'See field use cases', type: 'Secondary', showArrow: false },
]

const problemTitle = [
  { text: 'Field data still travels on paper, ', highlight: false, color: '#475467', bold: false },
  { text: 'and it shows', highlight: true, color: '#475467', bold: false },
]
const problemDescription =
  'The work happens on sites, in homes, at events, and on the road. The data collection still happens on clipboards, printed checklists, and photos sitting in someone’s camera roll. Then the second shift starts back at the office: reading handwriting, re-typing entries, chasing the one missing photo, and finding out about a failed inspection two days after it happened.'
const problemCards = [
  {
    tag: 'No signal',
    tagColor: 'rose',
    title: 'No signal, no submission',
    body: 'Basements, rural sites, warehouses, and event halls are exactly where connections fail and where the data matters.',
  },
  {
    tag: 'Lost entries',
    tagColor: 'amber',
    title: 'Entries get lost between the field and the office',
    body: 'Paper gets wet, photos stay on personal phones, and a dead battery can take a day of entries with it.',
  },
  {
    tag: 'Double entry',
    tagColor: 'blue',
    title: 'Everything is entered twice',
    body: 'Once on paper in the field, and again by hand into the system where the data actually lives.',
  },
  {
    tag: 'Late',
    tagColor: 'violet',
    title: 'Problems surface late',
    body: 'A failed check, a safety issue, or a hot lead reaches the office days later, when fixing it costs more.',
  },
  {
    tag: 'No visibility',
    tagColor: 'green',
    title: 'There is no live picture of the field',
    body: 'Managers cannot see what was collected today, by whom, or what is still missing.',
  },
]

const categoryTitle = [
  { text: 'Mobile forms automation is ', highlight: false, color: '#475467', bold: false },
  { text: 'capture plus everything after it', highlight: true, color: '#475467', bold: false },
]
const categoryCards = [
  {
    tag: 'Step 1',
    tagColor: 'violet',
    title: 'Build once',
    body: 'Create the inspection, checklist, survey, or report form your team will use, with the questions and logic each job needs.',
  },
  {
    tag: 'Step 2',
    tagColor: 'amber',
    title: 'Capture anywhere',
    body: 'Your team fills it in on a phone or tablet, online or offline. Entries are stored safely on the device.',
  },
  {
    tag: 'Step 3',
    tagColor: 'green',
    title: 'Sync automatically',
    body: 'When a connection returns, saved entries upload to your Formester account and appear in the dashboard.',
  },
  {
    tag: 'Step 4',
    tagColor: 'blue',
    title: 'Act on it',
    body: 'Notifications go out, data lands in Sheets or your CRM, approvals run, and records are generated. The office sees field data the day it was collected, not the week after.',
  },
]

const platformTitle = [
  { text: 'Built for the field, ', highlight: false, color: '#475467', bold: false },
  { text: 'not adapted to it', highlight: true, color: '#475467', bold: false },
]
const media = (inner) =>
  `<div style='max-width:460px;margin:0 auto;${CARD}padding:18px;display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const deviceChip = (label) =>
  `<span style='font-size:12px;font-weight:600;color:#344054;background:#f9fafb;border:1px solid #eaecf0;border-radius:9px;padding:8px 12px;'>${label}</span>`
const step = (label) =>
  `<div style='display:flex;align-items:center;gap:10px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-left:3px solid #6434d0;border-radius:9px;padding:9px 11px;'>${label}</div>`
// Fixed 9x9 pattern with finder squares in three corners, so it reads as a QR code.
const QR_BITS = [
  '111101111',
  '101010101',
  '111001111',
  '000110100',
  '101011011',
  '011100110',
  '111010101',
  '101001110',
  '111110011',
]
const qrMock = `<div style='width:96px;height:96px;flex-shrink:0;padding:6px;border:1px solid #eaecf0;border-radius:10px;display:grid;grid-template-columns:repeat(9,1fr);gap:1px;'>${QR_BITS.join(
  '',
)
  .split('')
  .map((b) => `<span style='background:${b === '1' ? '#101828' : 'transparent'};border-radius:1px;'></span>`)
  .join('')}</div>`
const platformRows = [
  {
    kicker: 'Offline mode',
    title: 'Works where the work happens',
    body: 'Switch on offline mode and the form keeps working with no internet at all. Responses are saved on the device and stay safe until they sync, even if the battery dies or the app is closed. Formester runs on Android, iOS, tablets, and laptops.',
    bullets: [{ text: 'Install a form on the device like an app' }, { text: 'Opens in one tap and starts collecting' }],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475467;'><span>Waiting to sync</span>${pill('Offline', ...AMBER)}</div>${checkRow('Equipment check · Van 4', pill('Saved', ...GRAY))}${checkRow('Daily log · North yard', pill('Saved', ...GRAY))}${checkRow('Toolbox talk · Crew B', pill('Saved', ...GRAY))}<div style='display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;'>${deviceChip('Android')}${deviceChip('iOS')}${deviceChip('Tablet')}${deviceChip('Laptop')}</div>`,
    ),
  },
  {
    kicker: 'Conditional logic',
    title: 'Ask smarter questions on a small screen',
    body: 'The form adapts to what the field worker finds. A passed check stays short. A failed check opens the follow-up questions, the photo upload, and the notes field that the office actually needs.',
    bullets: [
      { text: 'Card-style forms ask one question at a time' },
      { text: 'Long inspections stay manageable on a phone' },
    ],
    mediaHtml: media(
      `${checkRow('Guardrails secure', pill('Fail', ...RED))}<div style='margin-left:14px;padding-left:12px;border-left:2px solid #fecdca;display:flex;flex-direction:column;gap:6px;'>${checkRow('Severity', pill('High', ...RED))}${checkRow('Photo of the issue', pill('Required', ...VIOLET))}${checkRow('Notes for the office', pill('Required', ...VIOLET))}</div>${checkRow('Lighting working', pill('Pass', ...GREEN))}`,
    ),
  },
  {
    kicker: 'Evidence',
    title: 'Capture evidence, not just answers',
    body: 'Photos and signatures captured offline are saved with the entry and uploaded when it syncs.',
    bullets: [
      { text: 'File and photo uploads for site conditions, completed work, and documents' },
      { text: 'Electronic signatures for customer sign-off, consent, and completion' },
      { text: 'File storage that scales by plan, from 100 MB on Free to 50 GB on Business' },
    ],
    mediaHtml: media(
      `<div style='display:grid;grid-template-columns:repeat(3,1fr);gap:8px;'><div style='aspect-ratio:1;border-radius:9px;background:linear-gradient(135deg,#e0eaff,#c7d7fe);'></div><div style='aspect-ratio:1;border-radius:9px;background:linear-gradient(135deg,#fef0c7,#fedf89);'></div><div style='aspect-ratio:1;border-radius:9px;background:linear-gradient(135deg,#d1fadf,#a6f4c5);'></div></div><div style='border:1px solid #eaecf0;border-radius:9px;padding:14px 12px 8px;'><div style='font-family:cursive;font-size:22px;color:#101828;line-height:1;'>M. Chen</div><div style='border-top:1px solid #d0d5dd;margin-top:8px;padding-top:6px;font-size:11px;color:#697586;'>Customer sign-off</div></div>`,
    ),
  },
  {
    kicker: 'Distribution',
    title: 'Get the form onto every device in minutes',
    body: 'Share a form by link or QR code. Put a QR code on the site cabin wall, the booth, or the vehicle dashboard, and anyone can open the right form without hunting through messages.',
    bullets: [
      { text: 'Build with drag and drop, start from a template, or generate it with AI' },
      { text: 'No code and no IT project' },
    ],
    mediaHtml: media(
      `<div style='display:flex;align-items:center;gap:16px;'>${qrMock}<div style='display:flex;flex-direction:column;gap:6px;min-width:0;'><span style='font-size:13px;font-weight:700;color:#101828;'>Scan to start the site check</span><span style='font-size:12px;color:#475467;'>Posted on the site cabin wall</span><span style='font-size:11px;color:#6434d0;background:#f0ebfa;border-radius:6px;padding:4px 8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>formester.com/f/site-check</span></div></div>`,
    ),
  },
  {
    kicker: 'Automation',
    title: 'Automate what happens after the sync',
    body: 'The moment entries land, Formester can notify the office, push the data to your tools, run a workflow, and file a PDF record.',
    bullets: [
      { text: 'Notify the office by email or Slack' },
      { text: 'Send data to Google Sheets, HubSpot, Salesforce, or any tool via Zapier or a webhook' },
      { text: 'Run a workflow: AI summary, an approval step, a follow-up email to the customer' },
      { text: 'Generate a PDF record of the submission for the client file' },
    ],
    mediaHtml: media(
      `${step('&#128260;&nbsp; Entry synced · Job #5521')}${step('&#10022;&nbsp; AI step · Summarize the work done')}${step('&#9989;&nbsp; Approval · Supervisor signs off')}${step('&#9993;&nbsp; Email · Send PDF record to the customer')}`,
    ),
  },
  {
    kicker: 'Dashboard',
    title: 'See the field from the office',
    body: 'Every synced entry appears in one dashboard where you can view, filter, and sort submissions. Form analytics show volume and drop-off, so you can see which forms get completed in the field and which ones your team quietly avoids.',
    bullets: [{ text: 'View, filter, and sort every submission' }, { text: 'Analytics for volume and drop-off' }],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;font-size:12px;color:#475467;'><span>Today · all forms</span><span>Synced 2 min ago</span></div><div style='display:grid;grid-template-columns:repeat(3,1fr);gap:8px;'><div style='border:1px solid #eaecf0;border-radius:9px;padding:10px;'><div style='font-size:18px;font-weight:700;color:#101828;'>48</div><div style='font-size:11px;color:#697586;'>Entries</div></div><div style='border:1px solid #eaecf0;border-radius:9px;padding:10px;'><div style='font-size:18px;font-weight:700;color:#b42318;'>3</div><div style='font-size:11px;color:#697586;'>Failed checks</div></div><div style='border:1px solid #eaecf0;border-radius:9px;padding:10px;'><div style='font-size:18px;font-weight:700;color:#101828;'>91%</div><div style='font-size:11px;color:#697586;'>Completion</div></div></div>${checkRow('Inspection · Site A · R. Patel', pill('Fail', ...RED))}${checkRow('Job form · 14 Elm St · K. Silva', pill('Done', ...GREEN))}`,
    ),
  },
]

const useCasesTitle = [
  { text: 'Mobile forms for teams ', highlight: false, color: '#475467', bold: false },
  { text: 'that do not sit at desks', highlight: true, color: '#475467', bold: false },
]
const flow = (steps) =>
  `<div style='display:flex;flex-wrap:wrap;align-items:center;gap:6px;text-align:left;'>${steps
    .map(([label, colors]) => pill(label, ...colors))
    .join(`<span style='font-size:11px;color:#98a2b3;'>&rarr;</span>`)}</div>`
const useCaseCards = [
  {
    tag: 'Inspections and audits',
    tagColor: 'violet',
    title: 'Capture the finding and the evidence together',
    body: 'Run safety inspections, quality audits, and site checks on a phone. Failed items trigger the follow-up questions and photo evidence on the spot, and the result reaches the office the same day.',
    mockHtml: flow([
      ['Submitted offline', AMBER],
      ['Synced', GREEN],
      ['Failures flagged', RED],
      ['Team notified', BLUE],
    ]),
  },
  {
    tag: 'Construction',
    tagColor: 'amber',
    title: 'Daily logs and safety checks without the clipboard',
    body: 'Site teams complete daily reports, toolbox talk records, and equipment checks from the site, including areas with no signal. Entries survive a dead battery and sync back at the office or on the road.',
    mockHtml: flow([
      ['Daily log', VIOLET],
      ['Saved on device', AMBER],
      ['Synced', GREEN],
      ['Dashboard updated', BLUE],
    ]),
  },
  {
    tag: 'Field service',
    tagColor: 'blue',
    title: 'Close the job with proof of work',
    body: 'Technicians record the work done, parts used, and readings at the customer site, then collect the customer’s signature before leaving. The office sees the completed job without waiting for paperwork.',
    mockHtml: flow([
      ['Job form', VIOLET],
      ['Customer signs', BLUE],
      ['Synced', GREEN],
      ['Office notified', BLUE],
    ]),
  },
  {
    tag: 'Healthcare and home visits',
    tagColor: 'rose',
    title: 'Collect visit information at the door, not from memory',
    body: 'Home health and community teams complete intake and visit forms during home visits, including in low-connectivity areas. Data is captured once, at the visit, instead of reconstructed later.',
    mockHtml: flow([
      ['Visit form offline', AMBER],
      ['Synced', GREEN],
      ['Care team reviews', BLUE],
    ]),
  },
  {
    tag: 'Events and retail',
    tagColor: 'green',
    title: 'Capture leads and feedback where the crowd is',
    body: 'Booth and store teams collect leads, registrations, and in-store surveys on tablets without depending on venue Wi-Fi. Everything syncs when the device finds a connection.',
    mockHtml: flow([
      ['Lead captured', VIOLET],
      ['Saved on tablet', AMBER],
      ['Synced', GREEN],
      ['Follow-up starts', BLUE],
    ]),
  },
  {
    tag: 'Field research and education',
    tagColor: 'violet',
    title: 'Survey anywhere, including where the internet is not',
    body: 'Run field surveys and data collection drives in rural and low-network areas. Responses queue on the device and upload when the team is back in range.',
    mockHtml: flow([
      ['Survey offline', AMBER],
      ['Queued', GRAY],
      ['Synced', GREEN],
      ['Results ready', BLUE],
    ]),
  },
]

const howButtons = [{ link: SIGN_UP_URL, text: 'Create your first mobile form free', type: 'Primary', showArrow: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Build the form',
    description:
      'Create the inspection, checklist, or survey with drag and drop, a template, or AI. Add conditional logic, photo uploads, and a signature field where the job needs them.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('Checklist', ...VIOLET)}${pill('Photo upload', ...BLUE)}${pill('Signature', ...GREEN)}${pill('Logic', ...AMBER)}</div>`,
    ),
  },
  {
    title: 'Turn on offline mode',
    description:
      'Enable offline mode in the form’s settings and install the form on your team’s phones and tablets like an app.',
    rawHtml: stepCard(
      `<div style='display:flex;align-items:center;justify-content:space-between;font-size:12px;color:#101828;'><span>Offline mode</span><span style='width:34px;height:20px;border-radius:999px;background:#6434d0;position:relative;display:inline-block;'><span style='position:absolute;top:2px;right:2px;width:16px;height:16px;border-radius:50%;background:#fff;'></span></span></div>`,
    ),
  },
  {
    title: 'Collect anywhere',
    description:
      'Your team fills in the form with or without a connection. Entries are stored on the device, with an indicator showing what is waiting to sync.',
    rawHtml: stepCard(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#101828;'><span>4 entries waiting to sync</span>${pill('Offline', ...AMBER)}</div>`,
    ),
  },
  {
    title: 'Sync and automate',
    description:
      'Back in range, entries upload to your dashboard. Notifications, spreadsheet and CRM updates, approvals, and follow-ups run from there.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:8px;flex-wrap:wrap;'>${pill('4 synced', ...GREEN)}${pill('Sheets updated', ...BLUE)}${pill('Team notified', ...VIOLET)}</div>`,
    ),
  },
]

const compareTitle = [
  { text: 'Formester against paper, spreadsheets, ', highlight: false, color: '#475467', bold: false },
  { text: 'and basic online forms', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  {
    feature: 'Works without internet',
    us: 'Yes, entries save on the device',
    them: 'Paper works, data stays trapped on it',
    them2: 'Usually stops working',
  },
  {
    feature: 'Data entered once',
    us: 'Yes, captured digitally in the field',
    them: 'No, re-typed at the office',
    them2: 'Yes, when there is a connection',
  },
  {
    feature: 'Photos and signatures',
    us: 'Inside the same record',
    them: 'Separate and easy to lose',
    them2: 'Varies',
  },
  { feature: 'Questions adapt to answers', us: 'Conditional logic', them: 'No', them2: 'Sometimes' },
  {
    feature: 'Sync to a central dashboard',
    us: 'Automatic when back online',
    them: 'Manual',
    them2: 'Yes, online only',
  },
  { feature: 'Office sees results', us: 'Same day, after sync', them: 'Days later', them2: 'Same day, online only' },
  { feature: 'Follow-up automation', us: 'Workflows, notifications, CRM sync', them: 'None', them2: 'Limited' },
  {
    feature: 'Cost to start',
    us: 'Free, unlimited forms and responses',
    them: 'Cheap until the admin hours count',
    them2: 'Often capped responses',
  },
]

const templatesTitle = [
  { text: 'Start from the job, ', highlight: false, color: '#475467', bold: false },
  { text: 'not a blank page', highlight: true, color: '#475467', bold: false },
]
const templateCards = [
  {
    tag: 'Inspections',
    tagColor: 'violet',
    title: 'Inspection checklist',
    body: 'Checks, photos, and sign-off for site and equipment inspections.',
  },
  {
    tag: 'Safety',
    tagColor: 'rose',
    title: 'Safety audit',
    body: 'Pass and fail items with evidence required on failures.',
  },
  {
    tag: 'Construction',
    tagColor: 'amber',
    title: 'Daily site log',
    body: 'Work done, people on site, issues, and photos.',
  },
  {
    tag: 'Field service',
    tagColor: 'blue',
    title: 'Job completion form',
    body: 'Work record, parts used, and customer signature.',
  },
  {
    tag: 'Research',
    tagColor: 'green',
    title: 'Field survey',
    body: 'Structured data collection for research and education teams.',
  },
  {
    tag: 'Events',
    tagColor: 'violet',
    title: 'Event lead capture',
    body: 'Fast lead forms for booths and registrations.',
  },
]

const planStats = [
  { value: 'Every plan', label: 'includes offline forms' },
  { value: 'Unlimited', label: 'forms and responses on Free' },
  { value: '100', label: 'free workflow runs a month' },
  { value: '50 GB', label: 'file storage on Business' },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is mobile forms automation?',
    body: 'Mobile forms automation is software that lets teams collect data on phones and tablets and automates what happens to that data. In Formester, that means forms that work offline, sync automatically when a connection returns, and then trigger notifications, spreadsheet or CRM updates, approvals, and follow-ups.',
  },
  {
    id: 2,
    header: 'How do offline forms work in Formester?',
    body: 'Turn on offline mode in the form’s settings. When there is no internet, the form keeps working and saves each response on the device. When the device reconnects, the saved entries sync to your Formester account and appear in the dashboard.',
  },
  {
    id: 3,
    header: 'Which devices do offline forms work on?',
    body: 'Formester works on Android, iOS, tablets, and laptops. A form can be installed on a device like an app, so it opens quickly and collects data with or without a connection.',
  },
  {
    id: 4,
    header: 'What happens if the device runs out of battery before syncing?',
    body: 'Entries are stored locally on the device and stay safe until they sync. A dead battery or a closed app does not lose the data.',
  },
  {
    id: 5,
    header: 'Can field teams capture photos and signatures offline?',
    body: 'Yes. File and photo uploads and electronic signatures are part of the form. Captured offline, they are saved with the entry and uploaded when it syncs.',
  },
  {
    id: 6,
    header: 'How is this different from a paper checklist?',
    body: 'Paper has to be carried back, read, and re-typed before anyone can use the data, and photos live somewhere else. A Formester mobile form captures everything once, in one record, syncs it to a central dashboard, and can start a follow-up automatically.',
  },
  {
    id: 7,
    header: 'Can the data go to Google Sheets or our CRM?',
    body: 'Yes. Send submissions to Google Sheets, HubSpot, Salesforce, and Slack, or to other systems through Zapier and webhooks.',
  },
  {
    id: 8,
    header: 'Can a form adapt to what the worker finds?',
    body: 'Yes. Conditional logic shows or hides questions based on previous answers, so a failed inspection item can open photo, note, and severity questions while a passed item keeps the form moving. Conditional logic is available on paid plans.',
  },
  {
    id: 9,
    header: 'Is offline mode free?',
    body: 'Yes. Offline forms are included on every plan, and the free plan includes unlimited forms and unlimited responses. Paid plans add conditional logic, larger file storage, and team features.',
  },
]

const ctaButtons = [
  { link: SIGN_UP_URL, text: 'Create your first mobile form free', type: 'Primary', showArrow: true },
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
    name: 'Formester Mobile Forms',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, iOS, Web',
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
