<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Free plan includes 100 workflow runs a month. No credit card required."
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#eff8ff"
      blobColorC="#f4efff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56,000+ teams" :rawHtml="ratingsHtml" class="page-component-item" />

    <section class="wms-problem page-component-item">
      <div class="wms-problem__inner">
        <SectionHeader
          eyebrow="The problem"
          :title="problemTitle"
          description="Most forms stop at collection. The real work starts after someone clicks submit."
        />
        <p class="wms-problem__lead">
          A request arrives in an inbox. Someone copies the details into a spreadsheet, the approval happens in a chat
          thread, and the follow-up depends on one person remembering. By the time the work is done, nobody can say
          where it slowed down or who owns the next step. Formester closes that gap. The form captures the work, and the
          workflow manages everything that follows.
        </p>
        <h3 class="wms-problem__sub">Where form-led work breaks down</h3>
        <ul class="wms-problem__list">
          <li v-for="item in problemItems" :key="item.title" class="wms-problem__item">
            <strong>{{ item.title }}</strong>
            <span>{{ item.body }}</span>
          </li>
        </ul>
      </div>
    </section>

    <CardGrid
      eyebrow="What is workflow management software?"
      :description="categoryDescription"
      columns="4"
      :title="categoryTitle"
      :cards="categoryCards"
      background="var(--gray-25, #fcfcfd)"
      class="page-component-item"
    />

    <AlternatingRows
      id="platform"
      eyebrow="Platform"
      description="Build the process on a drag-and-drop canvas. Add steps, connect branches, recall form answers with @, test the workflow on a real submission, and publish when it is ready."
      :title="platformTitle"
      :rows="platformRows"
      class="page-component-item"
    />

    <CardGrid columns="2" :cards="capabilityCards" class="page-component-item wms-continue" />

    <AlternatingRows :rows="visibilityRows" class="page-component-item wms-continue" />

    <CardGrid
      id="workflow-examples"
      eyebrow="Use cases"
      description="Each one is a trigger plus a handful of steps. Start with the closest match, then change it to fit your process."
      columns="4"
      :title="useCasesTitle"
      :cards="useCaseCards"
      background="var(--gray-25, #fcfcfd)"
      class="page-component-item"
    />

    <StickyStepsSection
      id="how-it-works"
      badge="How it works"
      heading="Build a managed workflow in four steps"
      description="No code and no second tool. Workflows live inside Formester, next to the form that feeds them."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item wms-steps"
    />

    <p class="wms-inline-link">
      Want every step type and setting in detail? See the
      <NuxtLink to="/features/workflows/">form workflow builder</NuxtLink>.
    </p>

    <ComparisonTable
      eyebrow="Formester vs a separate automation tool"
      description="Zapier, Make and n8n are strong tools for connecting many apps. For work that starts with a form, keeping intake and workflow management together removes a layer of setup, mapping and maintenance."
      colUs="Formester Workflows"
      colThem="Form plus Zapier or Make"
      :title="compareTitle"
      :rows="compareRows"
      note="You can still send data to Zapier, Make or any API with a webhook."
      class="page-component-item"
    />

    <TestimonialsV2 :heading="testimonialsHeading" :testimonials="testimonials" class="page-component-item" />

    <StatsBanner eyebrow="Plans and workflow runs" heading="Workflows are included on every plan" :stats="planStats" />

    <p class="wms-inline-link">
      AI Agent steps also use your plan’s AI credits.
      <NuxtLink to="/pricing/">Compare Formester plans</NuxtLink>
      to see what each one includes.
    </p>

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      heading="The form is the start. Formester manages what happens next."
      description="Give every request, application, lead, booking and approval a path your team can see and trust. Build the workflow once, then Formester runs it the same way every time."
      trustText="Start with 100 free workflow runs a month."
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
import SectionHeader from '@/components/v2/SectionHeader.vue'
import StatsBanner from '@/components/v2/StatsBanner.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const SIGN_UP_URL = 'https://app.formester.com/users/sign_up'
const PAGE_URL = 'https://formester.com/workflow-management-software/'
const META_TITLE = 'Workflow Management Software for Form-Led Work | Formester'
const META_DESCRIPTION =
  'Workflow management software for form-led work. Route requests, run approvals and follow-ups, and track every run. Start free with 100 runs a month.'

const CMS = 'https://formester-strapi.s3.ap-south-1.amazonaws.com/'
const shot = (file, width, height, alt, extraClass = '') =>
  `<img src='${CMS}${file}' width='${width}' height='${height}' alt='${alt}' loading='lazy' decoding='async' class='wms-shot ${extraClass}'>`

// Node accents, matched to the app's workflow canvas (same palette as /features/workflows/).
const ACCENTS = {
  trigger: { fg: '#6434d0', bg: '#f0ebfa' },
  ai: { fg: '#c11574', bg: '#fdf2fa' },
  logic: { fg: '#b54708', bg: '#fffaeb' },
  email: { fg: '#175cd3', bg: '#eff8ff' },
  webhook: { fg: '#475467', bg: '#f2f4f7' },
  wait: { fg: '#027a48', bg: '#ecfdf3' },
  approval: { fg: '#067647', bg: '#ecfdf3' },
}

const node = (accent, label, detail, glyph) => {
  const a = ACCENTS[accent]
  return `<div style='display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #eaecf0;border-left:3px solid ${a.fg};border-radius:10px;padding:9px 11px;box-shadow:0 1px 2px rgba(16,24,40,.05);text-align:left;min-width:0;'><span style='flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:7px;background:${a.bg};color:${a.fg};font-size:13px;font-weight:700;'>${glyph}</span><span style='display:flex;flex-direction:column;min-width:0;'><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.3;'>${label}</span><span style='font-size:11px;color:#697586;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>${detail}</span></span></div>`
}
const chain = (steps) =>
  `<div style='display:flex;flex-wrap:wrap;align-items:center;gap:6px;text-align:left;'>${steps
    .map(
      ([accent, label]) =>
        `<span style='font-size:11px;font-weight:600;color:${ACCENTS[accent].fg};background:${ACCENTS[accent].bg};border-radius:999px;padding:3px 9px;'>${label}</span>`,
    )
    .join(`<span style='font-size:11px;color:#98a2b3;'>&rarr;</span>`)}</div>`

/* Hero */
const heroBadge = { text: 'Workflow management software', link: '#platform' }
const heroTitle = [
  { text: 'Workflow management for ', highlight: false, color: '#475467', bold: false },
  { text: 'everything after submit', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'A form only starts the job. Formester routes each request to the right person, handles approvals and follow-ups, sends data to your other tools, and tracks every step until the work is done. No code. No separate automation tool.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Build your first workflow free', type: 'Primary', showArrow: true },
  { link: '#workflow-examples', text: 'See workflow examples', type: 'Secondary', showArrow: false },
]
const heroMockupHtml = `<figure class='wms-hero-shot'><div class='wms-hero-shot__frame'><img src='${CMS}6a5262ce4f9b41a6_workflow-builder-job-application-canvas.webp' width='1440' height='1300' alt='Formester workflow canvas for job application screening: AI scores the resume, a condition checks the result, the hiring manager approves, then an interview reminder and ATS webhook run' loading='eager' fetchpriority='high' class='wms-hero-shot__img'></div><figcaption class='wms-hero-shot__cap'>A job application workflow: AI reviews the resume, the hiring manager approves, and Formester sends the interview reminder on the day and updates your ATS.</figcaption></figure>`

const ratingsHtml = `<p class='wms-ratings'>G2 4.7/5 &middot; Trustpilot 4.7/5</p>`

/* Problem */
const problemTitle = [
  { text: 'A submitted form is ', highlight: false, color: '#475467', bold: false },
  { text: 'not a finished process', highlight: true, color: '#475467', bold: false },
]
const problemItems = [
  {
    title: 'Requests wait in inboxes',
    body: 'New submissions compete with every other email, and urgent work looks the same as routine work.',
  },
  {
    title: 'Approvals have no clear path',
    body: 'Approvers change by request type, department or priority, but the routing still happens by hand.',
  },
  {
    title: 'Data moves by copy and paste',
    body: 'Teams re-enter the same answers into CRMs, spreadsheets, calendars and internal systems.',
  },
  {
    title: 'Follow-ups are inconsistent',
    body: 'Reminders, status updates and next steps depend on memory instead of the process.',
  },
  {
    title: 'Nobody can see the full picture',
    body: 'Once work leaves the form, there is no single place to check what ran, what is waiting and what failed.',
  },
]

/* Category definition */
const categoryTitle = [
  { text: 'Manage intake, decisions, actions and follow-through ', highlight: false, color: '#475467', bold: false },
  { text: 'in one workflow', highlight: true, color: '#475467', bold: false },
]
const categoryDescription =
  'Workflow management software helps teams design, run and track repeatable processes. Formester is built for processes that start with a form: a request, application, booking, order, lead, inspection or report. Instead of treating the form and the follow-up as separate tools, Formester keeps them together.'
const categoryCards = [
  {
    tag: '1. Collect',
    tagColor: 'violet',
    title: 'Capture what the process needs',
    body: 'Use a form to collect the information a process needs, with the fields and logic required to route it correctly.',
  },
  {
    tag: '2. Decide',
    tagColor: 'amber',
    title: 'Send each request down the right path',
    body: 'Branch on answers or AI results, so nobody has to sort requests by hand.',
  },
  {
    tag: '3. Act',
    tagColor: 'blue',
    title: 'Run the steps that follow',
    body: 'Run approvals, send emails, wait until the right moment, and send data to your CRM or other systems.',
  },
  {
    tag: '4. Track',
    tagColor: 'green',
    title: 'See where every request stands',
    body: 'See every workflow run, the path it took, what each step returned, and whether anything needs attention.',
  },
]

/* Platform */
const platformTitle = [
  { text: 'Everything after submit, ', highlight: false, color: '#475467', bold: false },
  { text: 'managed on one visual canvas', highlight: true, color: '#475467', bold: false },
]
const platformRows = [
  {
    kicker: 'Triggers',
    title: 'Start at the moment that matters',
    body: 'Every workflow begins with a trigger. Pick the event that should set it in motion:',
    bullets: [
      { text: 'Form submitted: runs when someone completes a form.' },
      {
        text: 'Submission updated: runs again when an answer changes, whether your team edits it or the respondent uses an edit link.',
      },
      {
        text: 'Form abandoned (Business plan): waits until the person goes quiet, then sends a link so they can continue where they stopped.',
      },
      { text: 'On a schedule: runs daily, weekly or monthly. No form needed.' },
    ],
    mediaHtml: shot(
      '2e69acbadeea0938_workflow-trigger-picker.webp',
      1216,
      1256,
      'Formester Choose a trigger dialog with four options: Form submitted, Submission updated, Form abandoned and On a schedule',
      'wms-shot--narrow',
    ),
  },
  {
    kicker: 'Approval workflows',
    title: 'Keep people in control with approvals',
    body: 'Add an Approval step when a person needs to decide before work continues. Approval emails go out from your connected Gmail, Outlook or SMTP account.',
    bullets: [
      { text: 'Email the people who need to sign off.' },
      { text: 'Give each outcome, such as Approve or Reject, its own path.' },
      { text: 'The workflow pauses until the first approver responds, then continues on that path.' },
      { text: 'Approvers don’t need a Formester account, unless you turn on sign-in.' },
    ],
    mediaHtml: shot(
      'b50a08bbb687603a_workflow-approval-step-outcomes-panel.webp',
      1440,
      1106,
      'Formester Approval step settings next to the workflow canvas, with Approve and Reject outcomes, an approver email, a sign-in toggle and the SMTP account the request is sent from',
    ),
  },
]

const capabilityCards = [
  {
    tag: 'Routing',
    tagColor: 'amber',
    title: 'Route work automatically',
    body: 'Use conditions to split the path by an answer or by an earlier step’s result, such as an AI label. Route by department, request type, location, priority or any other choice in the form. Branches can run side by side and continue when all of them finish or as soon as the first one does. You can also stop a run early and record the reason.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['logic', 'Department is Finance?'],
      ['approval', 'Finance approval'],
    ]),
  },
  {
    tag: 'AI',
    tagColor: 'rose',
    title: 'Put AI inside the process',
    body: 'Add an AI Agent step to summarize, classify, score or extract details with a plain-English prompt. It reads the current submission, can open uploaded PDFs and images such as a resume, and can look up earlier submissions to the same form. It saves its results to custom fields for later steps, and your original answers are never changed.',
    mockHtml: chain([
      ['ai', 'AI Agent'],
      ['logic', 'Label is Shortlist?'],
      ['email', 'Notify hiring manager'],
    ]),
  },
  {
    tag: 'Timing',
    tagColor: 'green',
    title: 'Handle time without manual reminders',
    body: 'Pause a workflow for minutes, hours or days, up to 30 days. Or wait until a set date, a date from the form, or a booked appointment time, each in the right time zone. Use it to follow up after a set period, after an appointment, or on the day of an interview.',
    mockHtml: chain([
      ['wait', 'Wait until interview day'],
      ['email', 'Send reminder'],
    ]),
  },
  {
    tag: 'Connections',
    tagColor: 'blue',
    title: 'Connect the workflow to the rest of your stack',
    body: 'Send submission data to your CRM, ATS or any other API with a webhook, including Zapier and Make. Set the method, body, headers and parameters your system needs.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['webhook', 'Webhook: POST to your CRM'],
    ]),
  },
]

const visibilityRows = [
  {
    kicker: 'Run history',
    title: 'Run, test and improve with full visibility',
    body: 'You can check what every workflow did after it goes live, and fix a failed run without starting over.',
    bullets: [
      {
        text: 'Test a workflow on one of your 10 most recent submissions. Test runs don’t count toward your monthly runs.',
      },
      { text: 'See the path each run took and what each step returned.' },
      { text: 'Save edits as a draft without changing the live version.' },
      { text: 'Clone a workflow to start a new one from a copy.' },
      { text: 'Filter runs by status and date, or search by submission, email or run ID.' },
      { text: 'Rerun only the failed steps, rerun the full workflow, or retry many failed runs at once.' },
    ],
    mediaHtml: shot(
      '3dab881cdf94ff50_workflow-run-history-statuses.webp',
      1440,
      788,
      'Formester workflow run history with completed, waiting and failed runs, a Retry all link, status and date filters, and search by submission, email or run ID',
    ),
  },
]

/* Use cases */
const useCasesTitle = [
  { text: 'Workflow management software for the processes ', highlight: false, color: '#475467', bold: false },
  { text: 'teams run every day', highlight: true, color: '#475467', bold: false },
]
const useCaseCards = [
  {
    tag: 'Approvals',
    tagColor: 'green',
    title: 'Give every request a clear decision path',
    body: 'A request form starts the workflow. The approver gets the request by email, picks an outcome, and the requester gets the result automatically. Use it for budget, purchase, leave and access requests.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['approval', 'Approval'],
      ['logic', 'Approve / Reject'],
      ['email', 'Email requester'],
    ]),
    link: '/templates/budget-approval-form-35164/',
    linkText: 'Budget approval form template',
  },
  {
    tag: 'Lead management',
    tagColor: 'blue',
    title: 'Score and route every lead while interest is fresh',
    body: 'An AI Agent labels each demo or contact request as hot or not yet. Hot leads alert sales and go to your CRM with a webhook. The rest get a timed follow-up email.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['ai', 'AI label'],
      ['logic', 'Condition'],
      ['webhook', 'Sales alert + CRM'],
    ]),
    link: '/templates/lead-generation-form-700/',
    linkText: 'Lead generation form template',
  },
  {
    tag: 'Hiring',
    tagColor: 'violet',
    title: 'Screen applications without turning the inbox into an ATS',
    body: 'The AI Agent reads the attached resume, saves its notes to a custom field and says whether to shortlist. The hiring manager approves shortlisted candidates, and approved ones get a reminder on the interview day.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['ai', 'Read resume'],
      ['approval', 'Approval'],
      ['email', 'Interview reminder'],
    ]),
  },
  {
    tag: 'Operations',
    tagColor: 'rose',
    title: 'React when the status changes',
    body: 'When your team changes an order or request status to Approved, Formester can email the customer and sync the change to another system.',
    mockHtml: chain([
      ['trigger', 'Updated'],
      ['logic', 'Condition'],
      ['email', 'Email customer'],
      ['webhook', 'Sync'],
    ]),
  },
  {
    tag: 'Bookings',
    tagColor: 'green',
    title: 'Follow up after every appointment',
    body: 'Read the booked slot from the form, wait until the appointment time, then send a thank-you or feedback request after a short delay. Booked slots come from the appointment scheduler on the Business plan.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['wait', 'Wait until slot'],
      ['wait', 'Delay'],
      ['email', 'Follow-up'],
    ]),
    link: '/features/appointment-scheduler/',
    linkText: 'Appointment scheduler',
  },
  {
    tag: 'Recovery',
    tagColor: 'amber',
    title: 'Bring people back before the process stalls',
    body: 'When someone starts a form and goes quiet, Formester waits for the period you set and sends a link to continue from where they stopped. The Form abandoned trigger is on the Business plan.',
    mockHtml: chain([
      ['trigger', 'Form abandoned'],
      ['email', 'Resume link'],
    ]),
    link: '/features/form-abandonment-recovery/',
    linkText: 'Form abandonment recovery',
  },
  {
    tag: 'Follow-up forms',
    tagColor: 'blue',
    title: 'Collect missing details with a second form',
    body: 'Send another form to one person, such as a document request after an application, with fields filled in from the first one. The workflow waits for their reply. If you set an expiry and they don’t answer in time, the run takes the Expired path instead, for example to remind them or alert your team.',
    mockHtml: chain([
      ['trigger', 'Submitted'],
      ['email', 'Send form'],
      ['logic', 'Submitted / Expired'],
    ]),
  },
]

/* How it works */
const howButtons = [{ link: SIGN_UP_URL, text: 'Build your first workflow free', type: 'Primary', icon: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Pick a trigger',
    description: 'Choose a form and the moment to react to: submitted, updated, abandoned or a schedule.',
    rawHtml: stepCard(node('trigger', 'Form submitted', 'Purchase request form', '&#9889;')),
  },
  {
    title: 'Add steps on the canvas',
    description:
      'Drop in AI, conditions, approvals, waits, emails and webhooks. Type @ in any step to recall an answer or an earlier step’s output.',
    rawHtml: stepCard(
      `<div style='font-size:12px;color:#101828;line-height:1.5;border:1px solid #6434d0;border-radius:8px;padding:9px 11px;box-shadow:0 0 0 3px #f0ebfa;'>Hi <span style='color:#6434d0;background:#f0ebfa;border-radius:4px;padding:1px 5px;'>@Name</span>, your request for <span style='color:#6434d0;background:#f0ebfa;border-radius:4px;padding:1px 5px;'>@Item</span> is approved.</div>`,
    ),
  },
  {
    title: 'Test on a real submission',
    description:
      'Run the workflow on one of your 10 latest responses and see what each step returned before going live.',
    rawHtml: stepCard(
      `<div style='display:flex;justify-content:space-between;font-size:12px;color:#101828;'><span>Test run · Submission #2481</span><span style='font-weight:600;color:#027a48;'>Completed</span></div>`,
    ),
  },
  {
    title: 'Publish and watch the runs',
    description: 'Publish the workflow and use run history to see completed, waiting and failed runs.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:8px;flex-wrap:wrap;'><span style='font-size:11px;font-weight:600;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;'>Completed</span><span style='font-size:11px;font-weight:600;color:#b54708;background:#fffaeb;border-radius:999px;padding:3px 9px;'>Waiting</span><span style='font-size:11px;font-weight:600;color:#b42318;background:#fef3f2;border-radius:999px;padding:3px 9px;'>Failed</span></div>`,
    ),
  },
]

/* Comparison */
const compareTitle = [
  { text: 'One platform instead of a form plus ', highlight: false, color: '#475467', bold: false },
  { text: 'a separate automation tool', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  { feature: 'Where the workflow lives', us: 'In the same app as the form', them: 'Separate app and account' },
  { feature: 'Extra subscription', us: 'Runs are included in your Formester plan', them: 'Usually a second bill' },
  {
    feature: 'Edit and abandonment triggers',
    us: 'Built in (abandonment on Business)',
    them: 'Depends on the form tool',
  },
  { feature: 'Using form answers', us: 'Type @ to pick any field', them: 'Map fields by hand' },
  { feature: 'AI step', us: 'Built in, uses your plan’s AI credits', them: 'Separate AI app or API key' },
  { feature: 'Testing', us: 'Test on one of your last 10 submissions', them: 'Varies by tool' },
]

/* Testimonials: verbatim excerpts from public reviews already used on the site (constants/platform-testimonials.js). */
const testimonialsHeading = [
  { text: 'What teams say about ', highlight: false },
  { text: 'Formester', highlight: true },
]
const testimonials = [
  {
    id: 1,
    name: 'Shawn Edwards',
    position: 'Trustpilot review',
    comment: 'Combined with the AI agent workflow automation after forms are submitted, it’s one amazing package.',
  },
  {
    id: 2,
    name: 'Guibril D.',
    position: 'Engineer, Renewables & Environment (G2 review)',
    comment:
      'Formester solves the problem of complicated data collection by providing a quick tool to create customized and automated forms.',
  },
  {
    id: 3,
    name: 'Aashika S.',
    position: 'Manager (G2 review)',
    comment:
      'We are able to easily build so many forms for our daily business work. These are easy for sharing too with our clients at one time instantly.',
  },
  {
    id: 4,
    name: 'Bency M Kurian',
    position: 'Trustpilot review',
    comment:
      'The conditional logic, file uploads, and integrations with popular tools like Mailchimp and Zapier make Formester extremely versatile too.',
  },
  {
    id: 5,
    name: 'Karthik B.',
    position: 'Social Media Manager (G2 review)',
    comment:
      'Formester offers a ton of features and my developer loves using it to integrate to various marketing pages.',
  },
]

/* Plans */
const planStats = [
  { value: '100', label: 'workflow runs a month on Free' },
  { value: '1,000', label: 'workflow runs a month on Personal' },
  { value: '10,000', label: 'workflow runs a month on Business' },
]

/* FAQ (mirrored into FAQPage JSON-LD below) */
const faqTitle = [{ text: 'Workflow management questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is workflow management software?',
    body: 'Workflow management software helps a team design, run and track a repeatable process. It defines what starts the process, which steps happen, who or what handles each step, how decisions change the path, and how the team can see the status and result.',
  },
  {
    id: 2,
    header: 'How is Formester different from other workflow management tools?',
    body: 'Formester is built for workflows that start with a form. Intake, routing, AI processing, approvals, follow-ups, webhooks and run history live in one platform. General workflow tools can manage broader projects or connect large numbers of apps, but they usually sit separately from the form that starts the process.',
  },
  {
    id: 3,
    header: 'What kinds of workflows can I manage in Formester?',
    body: 'Common examples include approvals, lead routing, job application screening, customer request handling, appointment follow-ups, abandoned form recovery, status updates and follow-up forms.',
  },
  {
    id: 4,
    header: 'What can trigger a workflow?',
    body: 'A workflow can start when a form is submitted, when a submission is updated, when a form is abandoned, or on a daily, weekly or monthly schedule. The Form abandoned trigger needs the Business plan.',
  },
  {
    id: 5,
    header: 'Can Formester route work based on answers?',
    body: 'Yes. A Condition step can split the workflow based on any answer or an earlier step’s output, such as a label from an AI step. Branches can run side by side and merge again later in the process.',
  },
  {
    id: 6,
    header: 'How do approvals work?',
    body: 'Add an Approval step and list the approvers. They receive an email with the outcome buttons you set, such as Approve and Reject. The workflow pauses until the first response, then follows the path for that outcome. Approvers don’t need a Formester account unless sign-in is turned on. Approval emails go out from your connected Gmail, Outlook or SMTP account.',
  },
  {
    id: 7,
    header: 'Can AI process submissions and attachments?',
    body: 'Yes. An AI Agent step can summarize, classify, score or extract information from a submission. It can also open uploaded PDFs and images, look up earlier submissions to the same form, and write results to custom fields for later steps.',
  },
  {
    id: 8,
    header: 'Can Formester send workflow data to a CRM or another system?',
    body: 'Yes. Use a webhook step to send data to your CRM or any other API, including Zapier and Make. You set the method, body, headers and parameters.',
  },
  {
    id: 9,
    header: 'Can a workflow wait before sending a follow-up?',
    body: 'Yes. A Delay step can pause for minutes, hours or days, up to 30 days. A Wait until step can continue on a fixed date, a date from the form, or a booked appointment slot. Booked slots come from the appointment scheduler on the Business plan.',
  },
  {
    id: 10,
    header: 'How can I test and monitor a workflow?',
    body: 'Test with one of your 10 most recent submissions. Test runs don’t count toward your monthly runs. After publishing, run history shows the path each run took and what each step returned. Failed steps can be rerun on their own, or the full workflow can be rerun.',
  },
  {
    id: 11,
    header: 'Do I need to write code?',
    body: 'No. Workflows are built on a visual canvas, and form answers can be recalled with @. Webhooks are available when a developer wants to send a custom API request, but they are optional.',
  },
  {
    id: 12,
    header: 'Is Formester Workflows free to try?',
    body: 'Yes. Workflows are included on every plan. The Free plan includes 100 workflow runs a month, Personal includes 1,000, and Business includes 10,000. AI Agent steps also use your plan’s AI credits.',
  },
]

const ctaButtons = [{ link: SIGN_UP_URL, text: 'Build your first workflow free', type: 'Primary' }]

useHead({
  title: META_TITLE,
  link: [{ hid: 'canonical', rel: 'canonical', href: PAGE_URL }],
  meta: [
    { hid: 'description', name: 'description', content: META_DESCRIPTION },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: PAGE_URL },
    { hid: 'og:title', property: 'og:title', content: META_TITLE },
    { hid: 'og:description', property: 'og:description', content: META_DESCRIPTION },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `${CMS}6a5262ce4f9b41a6_workflow-builder-job-application-canvas.webp`,
    },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:site', name: 'twitter:site', content: '@_formester_' },
    { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE },
    { hid: 'twitter:description', name: 'twitter:description', content: META_DESCRIPTION },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: `${CMS}6a5262ce4f9b41a6_workflow-builder-job-application-canvas.webp`,
    },
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
      { '@type': 'ListItem', position: 2, name: 'Workflow management software', item: PAGE_URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: META_TITLE,
    url: PAGE_URL,
    description: META_DESCRIPTION,
    about: {
      '@type': 'SoftwareApplication',
      name: 'Formester Workflows',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: PAGE_URL,
      description: META_DESCRIPTION,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free plan with 100 workflow runs a month',
      },
    },
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

<style scoped>
.wms-problem {
  padding: var(--space-16, 64px) var(--space-6, 24px);
}
.wms-problem__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.wms-problem__lead {
  max-width: 760px;
  margin: 0 auto var(--space-10, 40px);
  font-size: var(--fs-md, 17px);
  line-height: 1.65;
  color: var(--fg-2, #475467);
  text-align: center;
}
.wms-problem__sub {
  font-size: 20px;
  font-weight: 600;
  color: var(--fg-1, #101828);
  text-align: center;
  margin: 0 0 var(--space-6, 24px);
}
.wms-problem__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: var(--space-4, 16px);
}
.wms-problem__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  background: #fff;
  border: 1px solid var(--gray-200, #eaecf0);
  border-radius: var(--r-xl, 16px);
  padding: var(--space-5, 20px);
}
.wms-problem__item strong {
  font-size: 15px;
  color: var(--fg-1, #101828);
}
.wms-problem__item span {
  font-size: 14px;
  line-height: 1.55;
  color: var(--fg-2, #475467);
}
.wms-continue {
  padding-top: 0 !important;
}
/* Step mockups use nowrap labels; without minmax(0) the single mobile column grows past 320px. */
@media (max-width: 767px) {
  .wms-steps :deep(.steps-grid) {
    grid-template-columns: minmax(0, 1fr);
  }
  .wms-steps :deep(.step-card > div) {
    min-width: 0;
  }
}
.wms-inline-link {
  max-width: 760px;
  margin: 0 auto;
  padding: var(--space-8, 32px) var(--space-6, 24px);
  text-align: center;
  font-size: 15px;
  color: #475467;
}
.wms-inline-link a {
  color: #6434d0;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>

<style>
/* Unscoped: these classes live inside v-html strings rendered by child components. */
.hero-v2__media:has(.wms-hero-shot) {
  min-width: 0;
}
.wms-hero-shot {
  max-width: 540px;
  margin: 0 auto;
}
.wms-hero-shot__frame {
  position: relative;
  width: 100%;
  aspect-ratio: 840 / 1090;
  overflow: hidden;
  border: 1px solid #eaecf0;
  border-radius: 16px;
  background: #fbfbfc;
  box-shadow:
    0 24px 80px rgba(15, 14, 26, 0.12),
    0 8px 24px rgba(15, 14, 26, 0.06);
}
/* Crop the empty canvas margins: show source x 300-1140, y 110-1200 of the 1440x1300 screenshot. */
.wms-hero-shot__img {
  position: absolute;
  max-width: none;
  width: 171.43%;
  height: auto;
  left: -35.71%;
  top: -10.09%;
}
.wms-hero-shot__cap {
  margin-top: 12px;
  font-size: 13px;
  line-height: 1.5;
  color: #697586;
  text-align: center;
}
.wms-shot {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid #eaecf0;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(15, 14, 26, 0.06);
}
.wms-shot--narrow {
  max-width: 440px;
  margin: 0 auto;
}
.wms-ratings {
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #475467;
}
</style>
