<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Free plan includes test generation and auto-scoring, with unlimited responses. No credit card required."
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#ecfdf3"
      blobColorC="#eff8ff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56,000+ teams worldwide" showTrustBadges class="page-component-item" />

    <CardGrid
      eyebrow="Where assessment breaks down"
      :description="problemDescription"
      columns="3"
      :title="problemTitle"
      :cards="problemCards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="What it is"
      description="An AI grading tool evaluates student work with AI assistance. In Formester, that loop has four parts, and the grading starts before the first student sits down."
      columns="4"
      background="var(--gray-25, #fcfcfd)"
      :title="categoryTitle"
      :cards="categoryCards"
      class="page-component-item"
    />

    <AlternatingRows
      id="how-grading-works"
      eyebrow="Platform"
      :title="platformTitle"
      :rows="platformRows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Use cases"
      description="The same loop works for a midterm, a compliance check, a skills screen, or a weekly concept check."
      columns="2"
      background="var(--gray-25, #fcfcfd)"
      :title="useCasesTitle"
      :cards="useCaseCards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Four steps from material to marks"
      description="No setup project. Add your source, check the draft, share the link, and review the results."
      :buttons="howButtons"
      :steps="howSteps"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Comparison"
      colUs="Formester"
      colThem="Form plus spreadsheet marking"
      colThem2="Standalone AI question generator"
      :title="compareTitle"
      :rows="compareRows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Assessment starting points"
      description="Pick the test you already owe, add the source material, and let Formester draft it with the key."
      columns="3"
      :title="startTitle"
      :cards="startCards"
      class="page-component-item"
    />

    <StatsBanner eyebrow="Plans" heading="Grading starts on the free plan" :stats="planStats" />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Free plan, unlimited responses"
      heading="Give the test on Friday. See the results before Monday."
      description="Create the test from your material, let objective questions grade themselves, and review written answers with AI assistance instead of a blank marking pile. Your students get feedback while it can still change something."
      trustText="Free plan includes test generation and auto-scoring. No credit card required."
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
const PAGE_URL = 'https://formester.com/ai-grading-software/'
const META_TITLE = 'AI Grading Tools: Create Tests and Grade Them Automatically | Formester'
const META_DESCRIPTION =
  'Generate a test from a PDF, slides, or a prompt, with the answer key built in. Objective questions score on submit, AI suggests scores for written answers, and results flow to Sheets or your gradebook. Start free.'

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
const option = (label, correct) =>
  `<div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#344054;border:1px solid ${correct ? '#a6f4c5' : '#eaecf0'};background:${correct ? '#ecfdf3' : '#fff'};border-radius:8px;padding:6px 9px;'><span style='width:12px;height:12px;flex-shrink:0;border-radius:50%;border:2px solid ${correct ? '#027a48' : '#d0d5dd'};background:${correct ? '#027a48' : 'transparent'};'></span>${label}</div>`
const modelAnswer = (text) =>
  `<div style='font-size:11px;color:#475467;background:#f9fafb;border:1px dashed #d0d5dd;border-radius:8px;padding:7px 9px;line-height:1.4;'><b style='color:#6434d0;'>Model answer:</b> ${text}</div>`
const approveBar = `<div style='display:flex;gap:6px;'><span style='flex:1;text-align:center;font-size:11px;font-weight:600;color:#fff;background:#6434d0;border-radius:999px;padding:6px;'>Approve</span><span style='flex:1;text-align:center;font-size:11px;font-weight:600;color:#344054;border:1px solid #d0d5dd;border-radius:999px;padding:6px;'>Adjust</span></div>`

// Generated test beside the results view with one AI-suggested written score.
const testMock = `<div style='flex:1 1 230px;min-width:0;max-width:260px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Photosynthesis quiz</span>${pill('Generated', ...VIOLET)}</div><div style='font-size:11px;font-weight:600;color:#101828;'>1. Where does photosynthesis happen? <span style='color:#697586;font-weight:400;'>(1 pt)</span></div>${option('Mitochondria', false)}${option('Chloroplast', true)}${option('Nucleus', false)}<div style='font-size:11px;font-weight:600;color:#101828;margin-top:2px;'>2. Why do leaves need light? <span style='color:#697586;font-weight:400;'>(3 pts)</span></div>${modelAnswer('Light energy drives the conversion of CO₂ and water into glucose.')}</div>`
const resultsMock = `<div style='flex:1 1 230px;min-width:0;max-width:260px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>Results · Priya S.</span>${pill('3 / 4', ...GREEN)}</div>${row('Q1 · Multiple choice', pill('Auto-scored 1/1', ...GREEN))}<div style='border:1px solid #d9cbf7;background:#faf8ff;border-radius:9px;padding:9px 10px;display:flex;flex-direction:column;gap:7px;'><div style='display:flex;justify-content:space-between;align-items:center;gap:6px;font-size:12px;color:#101828;'><span>Q2 · Short answer</span>${pill('AI suggests 2/3', ...VIOLET)}</div><div style='font-size:11px;color:#475467;font-style:italic;line-height:1.4;'>“Light gives the plant energy to make food from water.”</div>${approveBar}</div></div>`
const heroMockupHtml = `<div style='display:flex;align-items:flex-start;justify-content:center;gap:14px;flex-wrap:wrap;max-width:560px;margin:0 auto;'>${testMock}${resultsMock}</div>`

const heroBadge = { text: 'AI grading tools', tag: 'Free', link: null }
const heroTitle = [
  { text: 'AI grading tools that create the test ', highlight: false, color: '#475467', bold: false },
  { text: 'and score it too', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'Upload the chapter, the policy, or your notes. Formester builds the test with its answer key, scores objective questions the moment students submit, and suggests scores for written answers against your model answer. You review, adjust, and release. Marking stops being the second shift.'
const heroButtons = [
  { link: SIGN_UP_URL, text: 'Create a test free', type: 'Primary', showArrow: true },
  { link: '#how-grading-works', text: 'See how grading works', type: 'Secondary', showArrow: false },
]

const problemTitle = [
  { text: 'The test is the easy part. ', highlight: false, color: '#475467', bold: false },
  { text: 'The marking is the job.', highlight: true, color: '#475467', bold: false },
]
const problemDescription =
  'Creating a fair test takes an evening. Marking thirty copies of it takes the weekend. By the time results reach students, the class has moved on. Most tools solve half of this: test generators leave the grading to you, and forms leave you with a spreadsheet.'
const problemCards = [
  {
    tag: 'Answer key',
    tagColor: 'violet',
    title: 'The answer key is a separate chore',
    body: 'Questions get written in one document, the key in another, and the two drift apart with every edit.',
  },
  {
    tag: 'Repetition',
    tagColor: 'amber',
    title: 'Objective marking is pure repetition',
    body: 'Multiple choice and true or false answers do not need a teacher’s judgment. They need a key and a machine.',
  },
  {
    tag: 'Written answers',
    tagColor: 'rose',
    title: 'Written answers wait the longest',
    body: 'Short answers carry the most insight and take the most time, so they are graded last, or rushed.',
  },
  {
    tag: 'Late feedback',
    tagColor: 'blue',
    title: 'Feedback arrives after it can help',
    body: 'A score returned a week later confirms what happened. It does not change what a student does next.',
  },
  {
    tag: 'Copy and paste',
    tagColor: 'green',
    title: 'Results live in the wrong place',
    body: 'Scores end up copied into a gradebook or LMS by hand, one row at a time.',
  },
]

const categoryTitle = [
  { text: 'AI grading covers the full loop, ', highlight: false, color: '#475467', bold: false },
  { text: 'not just the score', highlight: true, color: '#475467', bold: false },
]
const categoryCards = [
  {
    tag: 'Step 1',
    tagColor: 'violet',
    title: 'Create',
    body: 'Generate the test from your source material, with questions, points, and the answer key written together.',
  },
  {
    tag: 'Step 2',
    tagColor: 'green',
    title: 'Score',
    body: 'Objective questions are scored automatically on submit. Students can see instant feedback where you allow it.',
  },
  {
    tag: 'Step 3',
    tagColor: 'amber',
    title: 'Review',
    body: 'AI reads written answers against your model answer and suggests a score. You approve or override before results are final.',
  },
  {
    tag: 'Step 4',
    tagColor: 'blue',
    title: 'Act',
    body: 'Route students by score, send results where they belong, and see which questions the whole class missed.',
  },
]

const platformTitle = [
  { text: 'From source material to graded results ', highlight: false, color: '#475467', bold: false },
  { text: 'in one place', highlight: true, color: '#475467', bold: false },
]
const media = (inner) =>
  `<div style='max-width:460px;margin:0 auto;${CARD}padding:18px;display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const chip = (label) =>
  `<span style='font-size:12px;font-weight:600;color:#344054;background:#f9fafb;border:1px solid #eaecf0;border-radius:9px;padding:7px 11px;'>${label}</span>`
const branch = (label, target, colors) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-left:3px solid ${colors[0]};border-radius:9px;padding:9px 11px;'><span>${label}</span>${pill(target, ...colors)}</div>`
const bar = (label, pct, color) =>
  `<div style='display:flex;flex-direction:column;gap:4px;'><div style='display:flex;justify-content:space-between;font-size:11px;color:#344054;'><span>${label}</span><span>${pct}% correct</span></div><div style='height:7px;border-radius:999px;background:#f2f4f7;overflow:hidden;'><div style='width:${pct}%;height:100%;background:${color};border-radius:999px;'></div></div></div>`

const platformRows = [
  {
    kicker: 'Generate',
    title: 'Generate the test from what you already teach',
    body: 'Start from a PDF, DOCX, PPTX, or text file, paste your notes, give a prompt, or point to a URL or a lecture video. Formester drafts the test in seconds, in more than 180 languages.',
    bullets: [
      { text: 'Multiple choice, true or false, fill in the blank, matching, numeric, short answer, and open ended' },
      { text: 'Mix question types in a single test, with points per item' },
    ],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>Source</div><div style='display:flex;gap:8px;flex-wrap:wrap;'>${chip('&#128196; Chapter 4.pdf')}${chip('Slides.pptx')}${chip('URL')}${chip('Lecture video')}</div><div style='font-size:12px;color:#475467;margin-top:4px;'>Drafted in seconds</div>${row('12 multiple choice', pill('12 pts', ...VIOLET))}${row('4 fill in the blank', pill('4 pts', ...VIOLET))}${row('2 short answer', pill('6 pts', ...VIOLET))}`,
    ),
  },
  {
    kicker: 'Answer key',
    title: 'The answer key is built as the questions are written',
    body: 'The AI sets the key as it drafts each item, writes plausible distractors instead of throwaway options, and gives short-answer items a model answer to grade against. Every draft lands in the editor. The AI produces the first draft, your judgment produces the test.',
    bullets: [
      { text: 'Rewrite a question, swap a distractor, or change the difficulty' },
      { text: 'Regenerate a single item or override the key inline' },
    ],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:700;color:#101828;'><span>Q3 · Which gas do plants absorb?</span>${pill('Editable', ...GRAY)}</div>${option('Oxygen', false)}${option('Carbon dioxide', true)}${option('Nitrogen', false)}<div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>${pill('&#8635; Regenerate item', ...VIOLET)}${pill('Difficulty: Medium', ...BLUE)}${pill('Key set', ...GREEN)}</div>`,
    ),
  },
  {
    kicker: 'Auto-scoring',
    title: 'Objective questions grade themselves',
    body: 'Assign scores to each answer and totals compute in real time. When a student submits, multiple choice, true or false, fill in the blank, matching, and numeric items are already marked. Turn on real-time feedback to show students what they got right as they go, or hold results until you release them.',
    bullets: [{ text: 'Totals calculated in real time' }, { text: 'Instant feedback, or results on release' }],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475467;'><span>Submitted 2 min ago</span>${pill('16 / 18', ...GREEN)}</div>${row('Q1 · Multiple choice', pill('Correct', ...GREEN))}${row('Q2 · True or false', pill('Correct', ...GREEN))}${row('Q3 · Fill in the blank', pill('Incorrect', ...RED))}${row('Q4 · Numeric', pill('Correct', ...GREEN))}`,
    ),
  },
  {
    kicker: 'AI-assisted review',
    title: 'AI reviews the written answers, you make the call',
    body: 'For short and open-ended answers, AI-assisted review suggests a score against the model answer and the points you set. Review the suggestion, adjust it if your judgment differs, and release results when you are ready. The part of marking that used to wait for the weekend becomes a review queue.',
    bullets: [{ text: 'Scored against your model answer' }, { text: 'The final grade is always a human decision' }],
    mediaHtml: media(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475467;'><span>Review queue</span>${pill('7 left', ...AMBER)}</div>${modelAnswer('Supply rises when price rises because producers can earn more per unit.')}<div style='border:1px solid #d9cbf7;background:#faf8ff;border-radius:9px;padding:9px 10px;display:flex;flex-direction:column;gap:7px;'><div style='display:flex;justify-content:space-between;align-items:center;gap:6px;font-size:12px;color:#101828;'><span>Arjun M.</span>${pill('AI suggests 3/4', ...VIOLET)}</div><div style='font-size:11px;color:#475467;font-style:italic;line-height:1.4;'>“Higher prices mean sellers make more money, so they make more.”</div>${approveBar}</div>`,
    ),
  },
  {
    kicker: 'Test window',
    title: 'Run a test window that behaves like a real classroom',
    body: 'Set the rules before the link goes out, so the test runs the way you would run it in the room.',
    bullets: [
      { text: 'Set a time limit and a pass mark' },
      { text: 'Open and close the test on a schedule, and cap total submissions' },
      { text: 'Verify test-taker emails and block spam before it takes a slot' },
      { text: 'Run the test offline; submissions queue and sync when the connection returns' },
    ],
    mediaHtml: media(
      `${row('Time limit', pill('40 min', ...BLUE))}${row('Pass mark', pill('60%', ...VIOLET))}${row('Opens · Closes', pill('Fri 9:00 · Fri 17:00', ...GRAY))}${row('Email verification', pill('On', ...GREEN))}${row('Offline mode', pill('On', ...GREEN))}`,
    ),
  },
  {
    kicker: 'Score-based routing',
    title: 'Route by score, automatically',
    body: 'Use conditional logic to send each test-taker to the right next step the moment they submit.',
    bullets: [
      { text: 'Below the pass mark: a remediation page or a retake path' },
      { text: 'Passed: a certificate generated from the result' },
      { text: 'Top band: the next module or the advanced material' },
    ],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>After submit</div>${branch('Score below 60%', 'Remediation', RED)}${branch('Score 60% to 89%', 'Certificate', GREEN)}${branch('Score 90% and above', 'Next module', VIOLET)}`,
    ),
  },
  {
    kicker: 'Results',
    title: 'Results where you need them',
    body: 'Review every response in the results tab, with field-level summaries that show how each question performed. Export results as CSV, sync them to Google Sheets, or push scores into your LMS or gradebook through the REST API and webhooks. Connect Formester to an AI assistant through the MCP server and ask which items tripped up the most students this term.',
    bullets: [
      { text: 'CSV, Google Sheets, REST API, and webhooks' },
      { text: 'MCP server for asking questions of your results' },
    ],
    mediaHtml: media(
      `<div style='font-size:12px;color:#475467;'>Item analysis · 28 students</div>${bar('Q1 · Chloroplast', 93, '#12b76a')}${bar('Q3 · Carbon dioxide', 71, '#6434d0')}${bar('Q7 · Light reaction', 32, '#f04438')}<div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>${pill('Sheets synced', ...GREEN)}${pill('Webhook sent', ...BLUE)}${pill('CSV', ...GRAY)}</div>`,
    ),
  },
  {
    kicker: 'Privacy',
    title: 'Student data stays student data',
    body: 'Test responses are not used to train AI models, run advertising, or feed analytics. Formester states this in its data processing agreement, and describes its handling as GDPR, UK GDPR, and CCPA compliant, with encryption in transit and at rest.',
    bullets: [{ text: 'No training on test responses' }, { text: 'Encryption in transit and at rest' }],
    mediaHtml: media(
      `${row('Used to train AI models', pill('Never', ...GREEN))}${row('Used for advertising or analytics', pill('Never', ...GREEN))}${row('Encryption', pill('In transit and at rest', ...BLUE))}<div style='display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;'>${chip('GDPR')}${chip('UK GDPR')}${chip('CCPA')}</div>`,
    ),
  },
]

const useCasesTitle = [
  { text: 'AI grading beyond the classroom, ', highlight: false, color: '#475467', bold: false },
  { text: 'too', highlight: true, color: '#475467', bold: false },
]
const flow = (steps) =>
  `<div style='display:flex;flex-wrap:wrap;align-items:center;gap:6px;text-align:left;'>${steps
    .map(([label, colors]) => pill(label, ...colors))
    .join(`<span style='font-size:11px;color:#98a2b3;'>&rarr;</span>`)}</div>`
const useCaseCards = [
  {
    tag: 'Teachers and professors',
    tagColor: 'violet',
    title: 'Drop in the chapter you just taught',
    body: 'Generate a midterm from the chapter or slides, review the draft and the key, and share the link. Objective items score on submit, written answers arrive with suggested scores, and item-level results show what to reteach on Monday.',
    mockHtml: flow([
      ['Chapter uploaded', VIOLET],
      ['Test with key', BLUE],
      ['Students submit', AMBER],
      ['Scores ready', GREEN],
    ]),
  },
  {
    tag: 'Corporate L&D',
    tagColor: 'blue',
    title: 'Turn the policy nobody reads into a test that grades itself',
    body: 'Upload the compliance or safety policy and generate a test written from the document itself. Auto-score it, set the pass mark, and push pass or fail into your LMS through the API instead of chasing completions by email.',
    mockHtml: flow([
      ['Policy uploaded', VIOLET],
      ['Compliance test', BLUE],
      ['Employees submit', AMBER],
      ['Pass or fail to LMS', GREEN],
    ]),
  },
  {
    tag: 'Recruiters and hiring teams',
    tagColor: 'amber',
    title: 'Screen skills before the interview loop',
    body: 'Build a role-specific test from the job description. Grade the objective items instantly and use AI-assisted review on the short answers, then shortlist from one results view.',
    mockHtml: flow([
      ['Job description', VIOLET],
      ['Skills test', BLUE],
      ['Candidates submit', AMBER],
      ['Shortlist', GREEN],
    ]),
  },
  {
    tag: 'Coaches and bootcamps',
    tagColor: 'green',
    title: 'Check understanding every week, in minutes',
    body: 'Turn the week’s session notes into a short concept check. Share it in your group chat, watch completion live, and catch the learners who missed the same concept before the next session.',
    mockHtml: flow([
      ['Notes pasted', VIOLET],
      ['Concept check', BLUE],
      ['Learners submit', AMBER],
      ['Gaps visible', GREEN],
    ]),
  },
]

const howButtons = [{ link: SIGN_UP_URL, text: 'Create a test free', type: 'Primary', showArrow: true }]
const stepCard = (inner) =>
  `<div style='margin-top:16px;background:#fff;border:1px solid #eaecf0;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(16,24,40,.05);display:flex;flex-direction:column;gap:8px;'>${inner}</div>`
const howSteps = [
  {
    title: 'Add your source',
    description: 'Upload the chapter, slides, policy, or notes, or write a prompt describing the test.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('PDF', ...VIOLET)}${pill('Slides', ...BLUE)}${pill('Notes', ...GREEN)}${pill('Prompt', ...AMBER)}</div>`,
    ),
  },
  {
    title: 'Review the draft',
    description:
      'Check the questions, distractors, model answers, points, and answer key. Edit anything, regenerate what you do not like, and set the time limit and pass mark.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:6px;flex-wrap:wrap;'>${pill('18 questions', ...VIOLET)}${pill('Key set', ...GREEN)}${pill('40 min', ...BLUE)}${pill('Pass 60%', ...AMBER)}</div>`,
    ),
  },
  {
    title: 'Share the test',
    description:
      'Send the link or QR code, set the test window, and let students submit from any device, online or offline.',
    rawHtml: stepCard(
      `<div style='display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#101828;'><span>formester.com/f/bio-midterm</span>${pill('Open', ...GREEN)}</div>`,
    ),
  },
  {
    title: 'Review and release',
    description:
      'Objective scores are already computed. Work through the AI-suggested scores for written answers, adjust where needed, and export or sync the results.',
    rawHtml: stepCard(
      `<div style='display:flex;gap:8px;flex-wrap:wrap;'>${pill('28 auto-scored', ...GREEN)}${pill('6 to review', ...AMBER)}${pill('Sheets synced', ...BLUE)}</div>`,
    ),
  },
]

const compareTitle = [
  { text: 'Formester against forms, spreadsheets, ', highlight: false, color: '#475467', bold: false },
  { text: 'and question generators', highlight: true, color: '#475467', bold: false },
]
const compareRows = [
  {
    feature: 'Test created from your material',
    us: 'Yes, PDF, slides, docs, prompts, URLs, video',
    them: 'No, you write every item',
    them2: 'Yes',
  },
  {
    feature: 'Answer key',
    us: 'Built as items are written, editable inline',
    them: 'Maintained by hand, separately',
    them2: 'Often a separate export',
  },
  {
    feature: 'Objective auto-scoring',
    us: 'On submit, totals in real time',
    them: 'Manual or formula work',
    them2: 'Varies, often limited',
  },
  {
    feature: 'Written answer grading',
    us: 'AI suggests a score, you approve or override',
    them: 'Fully manual',
    them2: 'Usually not included',
  },
  {
    feature: 'Feedback timing',
    us: 'Instant where you allow it, or on release',
    them: 'Days later',
    them2: 'Depends on your process',
  },
  {
    feature: 'Score-based follow-up',
    us: 'Remediation, certificate, or next module by score',
    them: 'Manual',
    them2: 'Not included',
  },
  {
    feature: 'Results to gradebook or LMS',
    us: 'Sheets, CSV, REST API, webhooks',
    them: 'Copy and paste',
    them2: 'Export only',
  },
  { feature: 'Offline tests', us: 'Yes, submissions queue and sync', them: 'Paper fallback', them2: 'Rarely' },
  {
    feature: 'Cost to start',
    us: 'Free, unlimited responses',
    them: 'Free plus your evenings',
    them2: 'Often limited free tier',
  },
]

const startTitle = [
  { text: 'Start from the test ', highlight: false, color: '#475467', bold: false },
  { text: 'you already owe', highlight: true, color: '#475467', bold: false },
]
const startCards = [
  {
    tag: 'Teachers',
    tagColor: 'violet',
    title: 'Midterm from a chapter',
    body: 'Upload the reading, get a mixed-format test with a key.',
  },
  {
    tag: 'L&D',
    tagColor: 'blue',
    title: 'Compliance check from a policy',
    body: 'Generate from the document, set the pass mark.',
  },
  {
    tag: 'Hiring',
    tagColor: 'amber',
    title: 'Skills screen from a job description',
    body: 'Objective items plus AI-reviewed short answers.',
  },
  {
    tag: 'Coaching',
    tagColor: 'green',
    title: 'Weekly concept check from session notes',
    body: 'A short quiz your learners finish in minutes.',
  },
  {
    tag: 'Practice',
    tagColor: 'rose',
    title: 'Practice test from lecture notes',
    body: 'With explanations students can retake against.',
  },
]

const planStats = [
  { value: 'Free', label: 'test generation and auto-scoring' },
  { value: 'Unlimited', label: 'test responses on Free' },
  { value: '2 to 50', label: 'AI generations a day, Free to Business' },
  { value: 'Business', label: 'REST API for your gradebook or LMS' },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'What is an AI grading tool?',
    body: 'An AI grading tool uses AI to evaluate student work, such as quizzes, tests, and written answers. In Formester, AI also helps create the assessment: it drafts questions and the answer key from your material, scores objective questions automatically, and suggests scores for written answers that a teacher reviews.',
  },
  {
    id: 2,
    header: 'Which question types are graded automatically?',
    body: 'Multiple choice, true or false, fill in the blank, matching, and numeric questions are scored against the answer key the moment a student submits. Totals are calculated in real time.',
  },
  {
    id: 3,
    header: 'How does AI grading work for short and open-ended answers?',
    body: 'You set a model answer and points for the item. AI-assisted review reads each response against that model answer and suggests a score. You can approve the suggestion or override it before results are released, so the final grade is always a human decision.',
  },
  {
    id: 4,
    header: 'Can I edit the questions and answer key the AI creates?',
    body: 'Yes. Every generated test is a draft in the editor. Rewrite questions, change difficulty, swap distractors, regenerate individual items, and override the answer key inline.',
  },
  {
    id: 5,
    header: 'Can students get feedback immediately?',
    body: 'Yes, if you choose. Real-time feedback can show students whether an answer is right as they respond, and score-based routing can send them to remediation, a certificate, or the next module based on their result. You can also hold all results until you release them.',
  },
  {
    id: 6,
    header: 'How do scores get into my gradebook or LMS?',
    body: 'Export results as CSV, sync them to Google Sheets, or push scores through the REST API and webhooks, available on the Business plan. There is no copy and paste step.',
  },
  {
    id: 7,
    header: 'Can a test run without internet?',
    body: 'Yes. With offline mode on, students can complete the test without a connection. Submissions queue on the device and sync when it reconnects.',
  },
  {
    id: 8,
    header: 'Is student data used to train AI models?',
    body: 'No. Formester states in its data processing agreement that customer data, including test responses, is not used for analytics, advertising, marketing, or product training.',
  },
  {
    id: 9,
    header: 'Is it free to start?',
    body: 'Yes. The free plan includes test generation and auto-scoring with unlimited responses. AI generation has a daily allowance that increases on paid plans, and advanced routing and API access are on paid plans as shown on the pricing page.',
  },
]

const ctaButtons = [
  { link: SIGN_UP_URL, text: 'Create a test free', type: 'Primary', showArrow: true },
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
    name: 'Formester AI Grading',
    applicationCategory: 'EducationalApplication',
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
