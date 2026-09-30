<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Free plan includes 100 workflow runs a month"
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#eff8ff"
      blobColorC="#f4efff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56k+ teams worldwide" showTrustBadges class="page-component-item" />

    <CardGrid
      eyebrow="Triggers"
      description="Every workflow starts with one trigger. Pick the moment that matters and Formester takes it from there."
      columns="4"
      :title="triggersTitle"
      :cards="triggerCards"
      class="page-component-item"
    />

    <CalloutDiagram
      eyebrow="Steps"
      description="Drag steps onto the canvas, connect them, and branch where you need to. Every step can recall answers from the submission with @."
      background="var(--gray-25, #fcfcfd)"
      :title="stepsTitle"
      :mockHtml="canvasMockHtml"
      :pins="stepPins"
      class="page-component-item"
    />

    <StickyStepsSection
      id="how-it-works"
      badge="How it works"
      heading="From trigger to live workflow in four steps"
      description="No code and no second tool. Workflows live inside Formester, next to the form that feeds them."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Use cases"
      description="A few of the workflows teams build first. Each one is a trigger plus a handful of steps."
      columns="3"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="Runs and testing" :title="runsTitle" :rows="runsRows" class="page-component-item" />

    <ComparisonTable
      eyebrow="Formester vs a separate automation tool"
      description="Zapier, Make and n8n are great for wiring many apps together. For work that starts with a form, keeping the workflow in the form builder removes a whole layer."
      colUs="Formester Workflows"
      colThem="Form + Zapier / Make"
      :title="compareTitle"
      :rows="compareRows"
      note="Formester still connects to Zapier, Make and 100+ apps if a workflow needs to reach further."
      class="page-component-item"
    />

    <StatsBanner eyebrow="Workflows at a glance" heading="Built for the work that follows a form" :stats="stats" />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free plan includes 100 runs a month"
      heading="Build your first workflow today"
      description="Pick a trigger, add a few steps, and test it on a real submission. It takes about five minutes."
      :buttons="ctaButtons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import AlternatingRows from '@/components/v2/AlternatingRows.vue'
import CalloutDiagram from '@/components/v2/CalloutDiagram.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import ComparisonTable from '@/components/v2/ComparisonTable.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import StatsBanner from '@/components/v2/StatsBanner.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/features/workflows/'
const META_TITLE = 'Form Workflow Automation: Visual Workflow Builder | Formester'
const META_DESCRIPTION =
  'Automate what happens after a form is submitted, edited, or abandoned. Branch, run AI, wait, send email, and call webhooks on one visual canvas. Free to start.'

// Node accents, matched to the app's workflow canvas.
const ACCENTS = {
  trigger: { fg: '#6434d0', bg: '#f0ebfa' },
  ai: { fg: '#c11574', bg: '#fdf2fa' },
  logic: { fg: '#b54708', bg: '#fffaeb' },
  email: { fg: '#175cd3', bg: '#eff8ff' },
  webhook: { fg: '#475467', bg: '#f2f4f7' },
  wait: { fg: '#027a48', bg: '#ecfdf3' },
}

const node = (accent, label, detail, glyph) => {
  const a = ACCENTS[accent]
  return `<div style='display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #eaecf0;border-left:3px solid ${a.fg};border-radius:10px;padding:9px 11px;box-shadow:0 1px 2px rgba(16,24,40,.05);text-align:left;min-width:0;'><span style='flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:7px;background:${a.bg};color:${a.fg};font-size:13px;font-weight:700;'>${glyph}</span><span style='display:flex;flex-direction:column;min-width:0;'><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.3;'>${label}</span><span style='font-size:11px;color:#697586;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>${detail}</span></span></div>`
}
const connector = `<div style='width:2px;height:14px;background:#d0d5dd;margin:0 auto;'></div>`
const branchLabel = (text, color) =>
  `<div style='text-align:center;line-height:1;'><span style='font-size:10px;font-weight:600;color:${color};background:#fff;border:1px solid #eaecf0;border-radius:999px;padding:2px 8px;'>${text}</span></div>`

// Fork under a Condition: a stem, a bar spanning both column centers, and a drop into each branch.
// Column centers sit at (100% - gap) / 4 from each edge because the branch grid has a 10px gap.
const branchSplit = `<div style='width:2px;height:12px;background:#d0d5dd;margin:0 auto;'></div><div style='position:relative;height:12px;'><div style='position:absolute;top:0;left:calc((100% - 10px) / 4);right:calc((100% - 10px) / 4);height:2px;background:#d0d5dd;'></div><div style='position:absolute;top:0;left:calc((100% - 10px) / 4 - 1px);width:2px;height:12px;background:#d0d5dd;'></div><div style='position:absolute;top:0;right:calc((100% - 10px) / 4 - 1px);width:2px;height:12px;background:#d0d5dd;'></div></div>`

const heroMockupHtml = `<div style='max-width:520px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>Lead follow-up</span><span style='margin-left:auto;font-size:11px;font-weight:600;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;'>Published</span></div><div style='padding:20px 18px;background-color:#fcfcfd;background-image:radial-gradient(#e4e7ec 1px,transparent 1px);background-size:16px 16px;'>${node('trigger', 'Form submitted', 'Demo request form', '&#9889;')}${connector}${node('ai', 'AI Agent', 'Score the lead 1–100 and summarize', '&#10022;')}${connector}${node('logic', 'Condition', 'If score is 70 or more', '&#8627;')}${branchSplit}<div style='display:grid;grid-template-columns:1fr 1fr;gap:10px;'><div>${branchLabel('Yes', '#027a48')}${connector}${node('email', 'Send email', 'Alert the sales team', '&#9993;')}${connector}${node('webhook', 'Webhook', 'POST to your CRM', '&#8644;')}</div><div>${branchLabel('No', '#b42318')}${connector}${node('wait', 'Delay', 'Wait 2 days', '&#9719;')}${connector}${node('email', 'Send email', 'Nurture follow-up', '&#9993;')}</div></div></div></div>`

const heroBadge = { text: 'Workflows', tag: 'New', link: null }
const heroTitle = [
  { text: 'Form workflow automation that runs ', highlight: false, color: '#475467', bold: false },
  { text: 'after the submit', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'Build what happens next on a visual canvas. Trigger on a submission, an edit, an abandoned form, or a schedule. Then branch on answers, run AI, wait, send email, and call any API. No code, no extra tool.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true },
  { link: '#how-it-works', text: 'See how it works', type: 'Secondary', showArrow: false },
]

const triggersTitle = [
  { text: 'Start a workflow ', highlight: false, color: '#475467', bold: false },
  { text: 'the moment it matters', highlight: true, color: '#475467', bold: false },
]
const triggerMock = (label, detail) =>
  `<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 12px;text-align:left;'><div style='font-size:11px;color:#697586;margin-bottom:4px;'>${label}</div><div style='font-size:12px;color:#101828;line-height:1.45;'>${detail}</div></div>`
const triggerCards = [
  {
    tag: 'Form submitted',
    tagColor: 'violet',
    title: 'When someone completes a form',
    body: 'The classic trigger. Run automatically on every new response, or only when you start it from the submissions page.',
    mockHtml: triggerMock('Runs', 'Automatically on every new response'),
  },
  {
    tag: 'Submission updated',
    tagColor: 'blue',
    title: 'When a response is edited',
    body: 'Fire again when an answer changes, whether your team edits it or the respondent uses their own edit link. Watch any field, or only the ones you pick.',
    mockHtml: triggerMock('Watching', 'Status, Budget'),
  },
  {
    tag: 'Form abandoned',
    tagColor: 'amber',
    title: 'When someone starts but doesn’t finish',
    body: 'Formester waits until the filler goes quiet, then runs once. Use it to send a gentle nudge with a link to pick up where they left off.',
    mockHtml: triggerMock('Runs after', '15 minutes of no activity'),
  },
  {
    tag: 'On a schedule',
    tagColor: 'green',
    title: 'On a daily, weekly, or monthly cadence',
    body: 'No form needed. Run at a set time in your time zone for digests, reports, and recurring checks.',
    mockHtml: triggerMock('Repeats', 'Every Monday at 9:00 AM'),
  },
]

const stepsTitle = [
  { text: 'Every step you need, ', highlight: false, color: '#475467', bold: false },
  { text: 'on one canvas', highlight: true, color: '#475467', bold: false },
]
const canvasMockHtml = `<div style='max-width:340px;margin:0 auto;background-color:#fff;background-image:radial-gradient(#e4e7ec 1px,transparent 1px);background-size:16px 16px;border:1px solid #eaecf0;border-radius:16px;padding:18px;box-shadow:0 12px 40px rgba(15,14,26,.08);'>${node('trigger', 'Form submitted', 'Job application', '&#9889;')}${connector}${node('ai', 'AI Agent', 'Read the resume, score fit', '&#10022;')}${connector}${node('logic', 'Condition', 'If fit score is high', '&#8627;')}${connector}${node('wait', 'Wait until a date', 'Interview slot, 1 day before', '&#128197;')}${connector}${node('email', 'Send email', 'Reminder to the candidate', '&#9993;')}${connector}${node('webhook', 'Webhook', 'Update your ATS', '&#8644;')}</div>`
const stepPins = [
  {
    label: 'AI Agent',
    body: 'Summarize, classify, score, or extract with a plain-English prompt. It can read past submissions and attachments, and write results to custom fields.',
  },
  {
    label: 'Condition',
    body: 'Split the path on any answer, score, or AI output. Build rules the same way as form logic.',
  },
  {
    label: 'Merge branches',
    body: 'Bring parallel paths back together. Continue when all branches arrive, or the first one.',
  },
  { label: 'Stop workflow', body: 'End the run early, and record it as stopped or failed with your own reason.' },
  { label: 'Delay', body: 'Pause for minutes, hours, or days, up to 30 days, then carry on.' },
  {
    label: 'Wait until a date',
    body: 'Continue on a fixed date, a date answer, or a booked appointment slot, in the right time zone.',
  },
  {
    label: 'Send email',
    body: 'Email anyone from your own domain, with recalled answers and an optional PDF copy of the submission.',
  },
  {
    label: 'Webhook',
    body: 'Send the submission to any URL. Choose the method and set a custom body, headers, and parameters.',
  },
]

const howButtons = [{ link: SIGN_UP_URL, text: 'Start free', type: 'Primary', showArrow: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Pick a trigger',
    description: 'Choose a form and the moment to react to: submitted, updated, abandoned, or a schedule.',
    rawHtml: stepCard(node('trigger', 'Form submitted', 'Support request form', '&#9889;')),
  },
  {
    title: 'Add steps on the canvas',
    description:
      'Drop in AI, conditions, waits, emails, and webhooks. Type @ in any step to recall an answer or an earlier step’s output.',
    rawHtml: stepCard(
      `<div style='font-size:12px;color:#101828;line-height:1.5;border:1px solid #6434d0;border-radius:8px;padding:9px 11px;box-shadow:0 0 0 3px #f0ebfa;'>Hi <span style='color:#6434d0;background:#f0ebfa;border-radius:4px;padding:1px 5px;'>@Name</span>, we got your request about <span style='color:#6434d0;background:#f0ebfa;border-radius:4px;padding:1px 5px;'>@Topic</span>.</div>`,
    ),
  },
  {
    title: 'Test on a real submission',
    description:
      'Pick one of your 10 latest responses and run the workflow on it. See each step’s input and output before going live.',
    rawHtml: stepCard(
      `<div style='display:flex;justify-content:space-between;font-size:12px;color:#101828;'><span>Test run · Submission #2481</span><span style='font-weight:600;color:#027a48;'>Completed</span></div>`,
    ),
  },
  {
    title: 'Publish and watch the runs',
    description:
      'Changes auto-save as a draft. Publish when ready. Every run shows up in the run history with its status.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:8px;flex-wrap:wrap;'><span style='font-size:11px;font-weight:600;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;'>142 completed</span><span style='font-size:11px;font-weight:600;color:#b42318;background:#fef3f2;border-radius:999px;padding:3px 9px;'>2 failed</span><span style='font-size:11px;font-weight:600;color:#175cd3;background:#eff8ff;border-radius:999px;padding:3px 9px;'>5 waiting</span></div>`,
    ),
  },
]

const useCasesTitle = [
  { text: 'Workflows teams ', highlight: false, color: '#475467', bold: false },
  { text: 'build first', highlight: true, color: '#475467', bold: false },
]
const chain = (steps) =>
  `<div style='display:flex;flex-wrap:wrap;align-items:center;gap:6px;text-align:left;'>${steps
    .map(
      ([accent, label]) =>
        `<span style='font-size:11px;font-weight:600;color:${ACCENTS[accent].fg};background:${ACCENTS[accent].bg};border-radius:999px;padding:3px 9px;'>${label}</span>`,
    )
    .join(`<span style='font-size:11px;color:#98a2b3;'>&rarr;</span>`)}</div>`
const useCaseCards = [
  {
    tag: 'Sales',
    tagColor: 'blue',
    title: 'Score and route new leads',
    body: 'AI scores each demo request. Hot leads alert sales and go to the CRM. The rest get a nurture email two days later.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['ai', 'AI score'],
      ['logic', 'Condition'],
      ['webhook', 'CRM'],
    ]),
  },
  {
    tag: 'Marketing',
    tagColor: 'amber',
    title: 'Recover abandoned forms',
    body: 'When someone quits halfway, wait an hour, then email them a link to continue where they left off.',
    mockHtml: chain([
      ['trigger', 'Abandoned'],
      ['wait', 'Delay 1h'],
      ['email', 'Resume link'],
    ]),
  },
  {
    tag: 'Scheduling',
    tagColor: 'green',
    title: 'Send appointment reminders',
    body: 'Read the booked slot from the form, wait until the day before, and send a reminder in the attendee’s time zone.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['wait', 'Wait until'],
      ['email', 'Reminder'],
    ]),
  },
  {
    tag: 'Hiring',
    tagColor: 'violet',
    title: 'Screen job applications',
    body: 'AI reads the attached resume, saves a fit score to a custom field, and flags strong candidates to the hiring manager.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['ai', 'Read resume'],
      ['logic', 'Condition'],
      ['email', 'Notify'],
    ]),
  },
  {
    tag: 'Operations',
    tagColor: 'rose',
    title: 'React when a status changes',
    body: 'When your team sets an order or request to Approved, email the customer and sync the change to your system.',
    mockHtml: chain([
      ['trigger', 'Updated'],
      ['logic', 'Condition'],
      ['email', 'Email'],
      ['webhook', 'Sync'],
    ]),
  },
  {
    tag: 'Reporting',
    tagColor: 'blue',
    title: 'Get a weekly digest',
    body: 'Every Monday, AI reads last week’s responses, pulls out the top themes, and emails a short summary to your team.',
    mockHtml: chain([
      ['trigger', 'Schedule'],
      ['ai', 'Summarize'],
      ['email', 'Digest'],
    ]),
  },
]

const runsTitle = [
  { text: 'See every run, ', highlight: false, color: '#475467', bold: false },
  { text: 'fix what failed', highlight: true, color: '#475467', bold: false },
]
const runRow = (step, status, color, bg) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;'><span>${step}</span><span style='font-size:11px;font-weight:600;color:${color};background:${bg};border-radius:999px;padding:3px 9px;'>${status}</span></div>`
const runsRows = [
  {
    kicker: 'Run history',
    title: 'Every step, with its input and output',
    body: 'Open any run to see which path it took and what each step received and returned. Filter runs by status and date, or search by submission, email, or run ID.',
    bullets: ['Status for every run: completed, failed, waiting, or running', 'Token use shown on runs with AI steps'],
    mediaHtml: `<div style='max-width:520px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;justify-content:space-between;font-size:12px;color:#475467;margin-bottom:2px;'><span>Run #8f2c · Submission #2481</span><span>2 min ago</span></div>${runRow('Form submitted', 'Done', '#027a48', '#ecfdf3')}${runRow('AI Agent · score 86', 'Done', '#027a48', '#ecfdf3')}${runRow('Condition · Yes', 'Done', '#027a48', '#ecfdf3')}${runRow('Webhook · CRM', 'Failed', '#b42318', '#fef3f2')}</div>`,
  },
  {
    kicker: 'Retries',
    title: 'Rerun from the step that failed',
    body: 'An API was down or a key expired? Fix it, then rerun only the failed steps, or rerun the whole thing. You can retry many failed runs at once.',
    bullets: ['Rerun failed steps or all steps', 'Email alert when a run fails'],
    mediaHtml: `<div style='max-width:520px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;display:flex;flex-direction:column;gap:10px;'>${runRow('Webhook · CRM', 'Failed', '#b42318', '#fef3f2')}<div style='display:flex;gap:8px;'><span style='font-size:12px;font-weight:600;color:#fff;background:#6434d0;border-radius:999px;padding:7px 14px;'>Rerun failed steps</span><span style='font-size:12px;font-weight:600;color:#344054;background:#fff;border:1px solid #d0d5dd;border-radius:999px;padding:7px 14px;'>Rerun all steps</span></div>${runRow('Webhook · CRM', 'Done', '#027a48', '#ecfdf3')}</div>`,
  },
  {
    kicker: 'Drafts',
    title: 'Edit safely while it’s live',
    body: 'Your edits auto-save as a draft and don’t touch the live version until you publish. Clone a workflow to reuse it on another form.',
    bullets: ['Auto-saved drafts', 'Publish, unpublish, and clone in one click'],
    mediaHtml: `<div style='max-width:520px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;display:flex;flex-direction:column;gap:10px;'><div style='display:flex;align-items:center;justify-content:space-between;'><span style='font-size:13px;font-weight:600;color:#101828;'>Lead follow-up</span><span style='font-size:12px;font-weight:600;color:#fff;background:#6434d0;border-radius:999px;padding:7px 14px;'>Publish</span></div><div style='font-size:12px;color:#475467;background:#fffaeb;border:1px solid #fedf89;border-radius:9px;padding:9px 11px;'>Auto-saved. Publish to make these changes live for this workflow.</div></div>`,
  },
]

const compareTitle = [
  { text: 'One tool ', highlight: false, color: '#475467', bold: false },
  { text: 'instead of two', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  { feature: 'Lives next to your form', us: 'Yes, in the same app', them: 'Separate app and account' },
  { feature: 'Extra subscription', us: 'None, runs are in your plan', them: 'Usually a second bill' },
  { feature: 'Triggers on edits and abandoned forms', us: 'Built in', them: 'Depends on the form tool' },
  { feature: 'Answers ready to recall', us: 'Type @ to pick any field', them: 'Map fields by hand' },
  { feature: 'AI step', us: 'Built in, uses your AI credits', them: 'Separate AI app or key' },
  { feature: 'Test on a real submission', us: 'Pick from your last 10', them: 'Varies' },
]

const stats = [
  { value: '4', label: 'ways to trigger a workflow' },
  { value: '8', label: 'step types on the canvas' },
  { value: '30 days', label: 'longest single delay' },
  { value: '100', label: 'free runs every month' },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is form workflow automation?',
    body: 'It is a set of steps that run on their own after something happens to a form, like a new submission. Instead of copying answers into email or a CRM by hand, the workflow does it the same way every time.',
  },
  {
    id: 2,
    header: 'What can trigger a workflow in Formester?',
    body: 'Four things: a form is submitted, a submission is updated, a form is abandoned partway through, or a schedule you set (daily, weekly, or monthly).',
  },
  {
    id: 3,
    header: 'Is it free?',
    body: 'Yes. Workflows are on every plan. The Free plan includes 100 runs a month, Personal includes 1,000, and Business includes 10,000. AI Agent steps also use your plan’s AI credits.',
  },
  {
    id: 4,
    header: 'Do I need to write code?',
    body: 'No. You build workflows on a visual canvas and pick answers with @. Webhook steps let developers send custom requests when they need to, but it is optional.',
  },
  {
    id: 5,
    header: 'Can a workflow wait before the next step?',
    body: 'Yes. A Delay step pauses for minutes, hours, or days, up to 30 days. A Wait until step continues on a set date, a date from the form, or a booked appointment slot.',
  },
  {
    id: 6,
    header: 'How do I test a workflow before it goes live?',
    body: 'Pick one of your 10 most recent submissions and run the workflow on it. The result shows in the run history, with each step’s input and output.',
  },
  {
    id: 7,
    header: 'What happens if a step fails?',
    body: 'The run is marked failed and you get an email. Open the run to see which step failed and why, fix it, then rerun just the failed steps or the whole run.',
  },
  {
    id: 8,
    header: 'How is this different from Zapier or Make?',
    body: 'Zapier and Make connect many apps. Formester Workflows run inside the form builder, so triggers like edits and abandoned forms and every answer are ready to use without a second tool. You can still send data to Zapier, Make, or any API with a webhook.',
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
    name: 'Formester Workflows',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
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
