<template>
  <div>
    <HeroV2
      layout="split"
      :badge="heroBadge"
      :title="heroTitle"
      :description="heroDescription"
      :buttons="heroButtons"
      trustText="Free to join. We email you when HIPAA support and BAAs are ready."
      :mockupHtml="heroMockupHtml"
      blobColorA="#f5eeff"
      blobColorB="#ecfdf3"
      blobColorC="#eff8ff"
      class="page-component-item"
    />

    <TrustSeals label="Trusted by 56,000+ teams worldwide" showTrustBadges class="page-component-item" />

    <section id="waitlist" class="wl page-component-item">
      <div class="wl__inner">
        <div class="wl__intro">
          <span class="wl__eyebrow">HIPAA waitlist</span>
          <h2 class="wl__title">Tell us what you need to collect</h2>
          <p class="wl__lead">
            Join the waitlist and we will email you when HIPAA support and signed BAAs are ready. Your answers help us
            decide which forms and features to ship first.
          </p>
          <ul class="wl__perks">
            <li>First to hear when it launches</li>
            <li>Launch pricing before it is public</li>
            <li>A chance to try it before everyone else</li>
          </ul>
        </div>

        <div class="wl__card">
          <div v-if="status === 'success'" class="wl__done" role="status">
            <h3>You are on the list</h3>
            <p>Thanks, {{ firstName || 'there' }}. We will email {{ form.email }} as soon as HIPAA support is ready.</p>
          </div>

          <form
            v-else
            :action="WAITLIST_URL"
            method="POST"
            accept-charset="UTF-8"
            class="wl__form"
            @submit.prevent="submitWaitlist"
          >
            <div class="wl__grid">
              <label class="wl__field">
                <span>Full name</span>
                <input v-model="form.name" name="name" type="text" autocomplete="name" required />
              </label>
              <label class="wl__field">
                <span>Work email</span>
                <input v-model="form.email" name="email" type="email" autocomplete="email" required />
              </label>
              <label class="wl__field">
                <span>Organization</span>
                <input v-model="form.organization" name="organization" type="text" autocomplete="organization" />
              </label>
              <label class="wl__field">
                <span>Organization type</span>
                <span class="wl__select"
                  ><select v-model="form.organization_type" name="organization_type" required>
                    <option value="" disabled>Select one</option>
                    <option v-for="opt in orgTypes" :key="opt" :value="opt">{{ opt }}</option></select
                  ><ChevronDown class="wl__caret" :size="16"
                /></span>
              </label>
            </div>

            <fieldset class="wl__field wl__fieldset">
              <legend>Forms you need</legend>
              <div class="wl__checks">
                <label v-for="opt in formTypes" :key="opt" class="wl__check">
                  <input v-model="form.forms_needed" type="checkbox" name="forms_needed[]" :value="opt" />
                  {{ opt }}
                </label>
              </div>
            </fieldset>

            <div class="wl__grid">
              <label class="wl__field">
                <span>Submissions per month</span>
                <span class="wl__select"
                  ><select v-model="form.monthly_submissions" name="monthly_submissions">
                    <option value="" disabled>Select one</option>
                    <option v-for="opt in volumes" :key="opt" :value="opt">{{ opt }}</option></select
                  ><ChevronDown class="wl__caret" :size="16"
                /></span>
              </label>
              <label class="wl__field">
                <span>When do you need HIPAA?</span>
                <span class="wl__select"
                  ><select v-model="form.timeline" name="timeline">
                    <option value="" disabled>Select one</option>
                    <option v-for="opt in timelines" :key="opt" :value="opt">{{ opt }}</option></select
                  ><ChevronDown class="wl__caret" :size="16"
                /></span>
              </label>
            </div>

            <p v-if="status === 'error'" class="wl__error" role="alert">
              Something went wrong. Please try again, or email support@formester.com.
            </p>

            <FButton type="submit" variant="primary" size="lg" class="wl__submit" :disabled="status === 'submitting'">
              {{ status === 'submitting' ? 'Joining...' : 'Join the HIPAA waitlist' }}
            </FButton>
            <p class="wl__fine">Do not enter any patient or health information here.</p>
          </form>
        </div>
      </div>
    </section>

    <CardGrid
      eyebrow="What HIPAA asks of a form builder"
      :description="requirementsDescription"
      columns="3"
      :title="requirementsTitle"
      :cards="requirementCards"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Where we stand"
      colUs="Today"
      colThem="With HIPAA (planned)"
      :title="statusTitle"
      :rows="statusRows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Who it is for"
      description="Any team that collects patient details on a form, and wants the same builder for its clinical and non-clinical forms."
      columns="3"
      background="var(--gray-25, #fcfcfd)"
      :title="audienceTitle"
      :cards="audienceCards"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqList" class="page-component-item" />

    <CtaDark
      badge="Coming December 2026"
      heading="Get HIPAA compliant forms from Formester first"
      description="Join the waitlist and tell us what you need to collect. Early sign-ups shape what we build first and hear about launch pricing before anyone else."
      trustText="No spam. One email when it is ready, plus the odd question about your use case."
      :buttons="ctaButtons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CardGrid from '@/components/v2/CardGrid.vue'
import ComparisonTable from '@/components/v2/ComparisonTable.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'
import FButton from '@/components/UI/FButton.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'

// Formester HTML form backend endpoint for the HIPAA waitlist.
const WAITLIST_URL = 'https://app.formester.com/forms/ljbqxsDs1/submissions.json'
const WAITLIST_ANCHOR = '#waitlist'

const orgTypes = [
  'Medical clinic or practice',
  'Therapy or mental health',
  'Dental, chiro, or physical therapy',
  'Telehealth',
  'Health tech or SaaS',
  'Lab, pharmacy, or wellness',
  'Other',
]
const formTypes = [
  'Patient intake',
  'Medical history',
  'Consent forms',
  'Insurance details',
  'Screening questionnaires',
  'Appointment requests',
  'Other',
]
const volumes = ['Under 100', '100 to 1,000', '1,000 to 10,000', 'Over 10,000']
const timelines = ['Right away', 'Within 3 months', 'Within 6 months', 'Just exploring']

const form = reactive({
  name: '',
  email: '',
  organization: '',
  organization_type: '',
  forms_needed: [],
  monthly_submissions: '',
  timeline: '',
})
const status = ref('idle')
const firstName = computed(() => form.name.trim().split(' ')[0])

const submitWaitlist = async () => {
  status.value = 'submitting'
  const body = new FormData()
  Object.entries(form).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((v) => body.append(`${key}[]`, v))
    else body.append(key, value)
  })
  body.append('source', 'hipaa-compliant-form-builder')
  try {
    // Needs CORS + a JSON response on the Formester submissions endpoint.
    const res = await fetch(WAITLIST_URL, { method: 'POST', body, headers: { Accept: 'application/json' } })
    status.value = res.ok ? 'success' : 'error'
  } catch (e) {
    status.value = 'error'
  }
}
const PAGE_URL = 'https://formester.com/hipaa-compliant-form-builder/'
const META_TITLE = 'HIPAA Compliant Form Builder (Coming Dec 2026) | Formester'
const META_DESCRIPTION =
  'Formester launches a HIPAA compliant form builder in December 2026, with a signed BAA, encrypted PHI, and audit logs. Join the waitlist for early access.'

// Shared mock styles. Mockups are inline HTML so they render without image assets.
const CARD = `background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);line-height:1.35;`
const pill = (text, fg, bg) =>
  `<span style='font-size:11px;font-weight:600;color:${fg};background:${bg};border-radius:999px;padding:3px 9px;white-space:nowrap;'>${text}</span>`
const GREEN = ['#027a48', '#ecfdf3']
const AMBER = ['#b54708', '#fffaeb']
const VIOLET = ['#6434d0', '#f0ebfa']
const GRAY = ['#475467', '#f2f4f7']

const row = (label, status) =>
  `<div style='display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:#101828;border:1px solid #eaecf0;border-radius:9px;padding:8px 10px;'><span>${label}</span>${status}</div>`
const field = (label, value) =>
  `<div style='display:flex;flex-direction:column;gap:3px;'><span style='font-size:10px;font-weight:600;color:#697586;text-transform:uppercase;letter-spacing:.04em;'>${label}</span><span style='font-size:12px;color:#101828;border:1px solid #eaecf0;border-radius:8px;padding:6px 9px;'>${value}</span></div>`

// Hero: a patient intake form with PHI fields tagged, next to the planned HIPAA checklist.
const intakeMock = `<div style='flex:1 1 230px;min-width:0;max-width:250px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>New patient intake</span>${pill('PHI', ...VIOLET)}</div>${field('Full name', 'Maria Lopez')}${field('Date of birth', '04/12/1986')}${field('Reason for visit', 'Follow-up, lower back pain')}${row('Insurance card', pill('Uploaded', ...GREEN))}</div>`
const checklistMock = `<div style='flex:1 1 230px;min-width:0;max-width:250px;${CARD}padding:14px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:6px;'><span style='font-size:12px;font-weight:700;color:#101828;'>HIPAA plan</span>${pill('Dec 2026', ...AMBER)}</div>${row('Signed BAA', pill('Planned', ...AMBER))}${row('PHI encrypted', pill('Planned', ...AMBER))}${row('Audit log', pill('Planned', ...AMBER))}${row('TLS encryption', pill('Live', ...GREEN))}${row('Team 2FA', pill('Live', ...GREEN))}</div>`
const heroMockupHtml = `<div style='display:flex;align-items:flex-start;justify-content:center;gap:14px;flex-wrap:wrap;max-width:560px;margin:0 auto;'>${intakeMock}${checklistMock}</div>`

const heroBadge = { text: 'HIPAA compliant form builder', tag: 'Dec 2026', link: null }
const heroTitle = [
  { text: 'A HIPAA compliant form builder ', highlight: false, color: '#475467', bold: false },
  { text: 'is coming to Formester', highlight: true, color: '#475467', bold: false },
]
const heroDescription =
  'You want patient intake, consent, and medical history forms that are as easy to build as any other Formester form, with a signed Business Associate Agreement (BAA) behind them. It is coming in December 2026. Formester does not sign BAAs yet, so join the waitlist and we will tell you the day it is ready.'
const heroButtons = [{ link: WAITLIST_ANCHOR, text: 'Join the HIPAA waitlist', type: 'Primary', showArrow: true }]

const requirementsTitle = [
  { text: 'What makes a form builder ', highlight: false, color: '#475467', bold: false },
  { text: 'HIPAA compliant', highlight: true, color: '#475467', bold: false },
]
const requirementsDescription =
  'There is no official HIPAA certification for software. A form builder is safe for protected health information only when the vendor signs a BAA with you and the product protects PHI the way the HIPAA Security Rule expects. This is what we are building toward.'
const requirementCards = [
  {
    tag: 'Contract',
    tagColor: 'violet',
    title: 'A signed BAA',
    body: 'The Business Associate Agreement makes the vendor legally responsible for protecting your PHI. Without it, no amount of encryption makes a form builder HIPAA compliant.',
  },
  {
    tag: 'Encryption',
    tagColor: 'blue',
    title: 'PHI encrypted in transit and at rest',
    body: 'Submissions travel over TLS and are stored encrypted, so a leaked database or intercepted request does not expose patient data.',
  },
  {
    tag: 'Access',
    tagColor: 'green',
    title: 'Access only for the people who need it',
    body: 'Role-based permissions and two-factor sign-in keep front-desk staff, clinicians, and admins to the records they actually work with.',
  },
  {
    tag: 'Audit',
    tagColor: 'amber',
    title: 'An audit trail',
    body: 'A log of who viewed, edited, exported, or deleted each submission and when, so you can answer questions during an audit or after an incident.',
  },
  {
    tag: 'Notifications',
    tagColor: 'rose',
    title: 'No PHI in plain email',
    body: 'Email alerts tell your team a new submission arrived without putting the patient details in the email body.',
  },
  {
    tag: 'Retention',
    tagColor: 'violet',
    title: 'Control over how long data stays',
    body: 'Set how long submissions are kept and delete them for good when they are no longer needed.',
  },
]

const statusTitle = [
  { text: 'What Formester does today, ', highlight: false, color: '#475467', bold: false },
  { text: 'and what HIPAA adds', highlight: true, color: '#475467', bold: false },
]
const statusRows = [
  { feature: 'Signed BAA', us: 'No', them: 'Yes, on the HIPAA plan' },
  { feature: 'Encryption in transit', us: 'TLS on every form', them: 'TLS on every form' },
  { feature: 'Field-level encryption for PHI', us: 'No', them: 'Planned' },
  { feature: 'Submission audit log', us: 'No', them: 'Planned' },
  { feature: 'PHI hidden from email alerts', us: 'No', them: 'Planned' },
  { feature: 'Hosting', us: 'AWS, through Heroku', them: 'HIPAA eligible infrastructure' },
  { feature: 'Safe for PHI', us: 'No', them: 'Yes, once your BAA is signed' },
]

const audienceTitle = [
  { text: 'Built for teams that ', highlight: false, color: '#475467', bold: false },
  { text: 'handle patient data', highlight: true, color: '#475467', bold: false },
]
const audienceCards = [
  {
    tag: 'Private practice',
    tagColor: 'violet',
    title: 'Clinics and medical offices',
    body: 'New patient intake, medical history, insurance details, and consent forms the patient fills out before the visit.',
  },
  {
    tag: 'Mental health',
    tagColor: 'green',
    title: 'Therapists and counselors',
    body: 'Intake questionnaires, screening forms, and signed consent for treatment, without paper in the waiting room.',
  },
  {
    tag: 'Dental and specialty',
    tagColor: 'blue',
    title: 'Dental, chiro, and physical therapy',
    body: 'Treatment consent, pre-appointment health questions, and progress check-ins with e-signatures.',
  },
  {
    tag: 'Telehealth',
    tagColor: 'amber',
    title: 'Virtual care providers',
    body: 'Pre-visit symptom forms and eligibility checks that patients complete on their phone before the call.',
  },
  {
    tag: 'Health tech',
    tagColor: 'rose',
    title: 'Health-adjacent SaaS and startups',
    body: 'Embedded forms and API access for products that collect health data on behalf of covered entities.',
  },
  {
    tag: 'Wellness',
    tagColor: 'violet',
    title: 'Labs, pharmacies, and wellness clinics',
    body: 'Test requests, prescription refill forms, and health assessments that link to a patient record.',
  },
]

const faqTitle = [{ text: 'Common questions', highlight: false, color: '#475467', bold: false }]
const faqList = [
  {
    id: 1,
    header: 'Is Formester HIPAA compliant today?',
    body: 'No. Formester does not sign Business Associate Agreements today, so you should not collect protected health information on it yet. HIPAA support is coming in December 2026. Join the waitlist and we will email you when it launches.',
  },
  {
    id: 2,
    header: 'When will HIPAA support launch?',
    body: 'We are planning to launch HIPAA support in December 2026. Waitlist members hear first, and we may invite some of them to try it before the public launch.',
  },
  {
    id: 3,
    header: 'What makes a form builder HIPAA compliant?',
    body: 'HIPAA has no official certification for software. A form builder is HIPAA compliant for your practice when the vendor signs a BAA with you, encrypts PHI in transit and at rest, limits who can access it, and keeps an audit trail. Your team still has to configure it correctly and train staff.',
  },
  {
    id: 4,
    header: 'What is a BAA and why does it matter?',
    body: 'A Business Associate Agreement is a contract between a covered entity (like a clinic) and a vendor that handles its PHI. It makes the vendor legally responsible for protecting that data. Under HIPAA, you need a signed BAA with any form builder that stores patient information.',
  },
  {
    id: 5,
    header: 'How much will the HIPAA plan cost?',
    body: 'Pricing is not final. HIPAA plans across the industry cost more than standard plans because of the extra infrastructure. Waitlist members will see launch pricing before it is public.',
  },
  {
    id: 6,
    header: 'Can I use Formester for healthcare forms right now?',
    body: 'Yes, for forms that do not collect PHI. Event registrations, staff surveys, general contact forms, and patient feedback without health details are fine today. Anything that ties a person to their health information should wait for HIPAA support or go through a tool that signs a BAA now.',
  },
  {
    id: 7,
    header: 'Which form builders are HIPAA compliant right now?',
    body: 'Jotform, Formstack, Cognito Forms, Zoho Forms, and Google Forms on a Workspace plan all offer a BAA on specific paid tiers. Our comparison of the best HIPAA form builders lists the plan and price each one needs.',
  },
]

const ctaButtons = [
  { link: WAITLIST_ANCHOR, text: 'Join the HIPAA waitlist', type: 'Primary', showArrow: true },
  { link: '/security/', text: 'See our security practices', type: 'White', showArrow: false },
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
.wl {
  padding: var(--space-20) var(--space-6);
  background: var(--violet-25);
  scroll-margin-top: var(--space-20);
}
.wl__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: var(--space-12);
  align-items: start;
}
.wl__eyebrow {
  display: inline-block;
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--violet-500);
  background: var(--violet-50);
  border-radius: var(--r-full);
  padding: var(--space-1) var(--space-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.wl__title {
  margin: var(--space-4) 0 var(--space-3);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
  line-height: 1.2;
}
.wl__lead {
  font-size: var(--fs-md);
  color: var(--fg-2);
  line-height: 1.6;
}
.wl__perks {
  list-style: none;
  padding: 0;
  margin: var(--space-6) 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.wl__perks li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin: 0;
  padding: 0;
  font-size: var(--fs-sm);
  line-height: 1.5;
  color: var(--fg-strong);
}
.wl__perks li::before {
  content: '';
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: var(--r-full);
  background: var(--violet-500);
}
.wl__card {
  background: #fff;
  border: 1px solid var(--border-light);
  border-radius: var(--r-2xl);
  box-shadow: 0 8px 24px rgba(15, 14, 26, 0.06);
  padding: var(--space-8);
}
.wl__form {
  display: flex;
  flex-direction: column;
}
.wl__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--space-4);
}
.wl__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0 0 var(--space-4);
  min-width: 0;
}
.wl__fieldset {
  border: 0;
  padding: 0;
}
.wl__fieldset legend {
  margin-bottom: 6px;
}
.wl__field > span:not(.wl__select),
.wl__field legend {
  float: none;
  width: auto;
  margin: 0;
  padding: 0;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  line-height: 1.4;
  color: var(--fg-strong);
}
.wl__field input:not([type='checkbox']),
.wl__field select {
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  margin: 0;
  font: inherit;
  font-size: var(--fs-sm);
  line-height: 1.4;
  color: var(--fg-1);
  background-color: #fff;
  border: 1px solid var(--border-dark);
  border-radius: var(--r-lg);
  padding: 0 12px;
}
.wl__field input:not([type='checkbox']):focus,
.wl__field select:focus {
  outline: none;
  border-color: var(--violet-300);
  box-shadow: 0 0 0 3px var(--violet-50);
}
.wl__select {
  position: relative;
  display: block;
}
.wl__select select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 40px;
  cursor: pointer;
}
.wl__select select:invalid,
.wl__select select:has(option[value='']:checked) {
  color: var(--fg-muted);
}
.wl__select option {
  color: var(--fg-1);
}
.wl__caret {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--fg-3);
  pointer-events: none;
}
.wl__error {
  font-size: var(--fs-sm);
  color: var(--error);
  background: var(--error-50);
  border-radius: var(--r-lg);
  padding: var(--space-3);
}
.wl__checks {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
.wl__check {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--fg-strong);
  border: 1px solid var(--border-light);
  border-radius: var(--r-full);
  padding: 7px 12px;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
}
.wl__check:has(input:checked) {
  border-color: var(--violet-300);
  background: var(--violet-25);
}
.wl__check input {
  width: 14px;
  height: 14px;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  accent-color: var(--violet-500);
}
.wl__submit {
  width: 100%;
  margin-top: var(--space-2);
}
.wl__submit:disabled {
  opacity: 0.7;
  cursor: wait;
}
.wl__fine {
  margin: var(--space-3) 0 0;
  font-size: var(--fs-xs);
  color: var(--fg-3);
  text-align: center;
}
.wl__done {
  text-align: center;
  padding: var(--space-10) var(--space-4);
}
.wl__done h3 {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--fg-1);
}
.wl__done p {
  color: var(--fg-2);
  margin: 0;
}
@media (max-width: 860px) {
  .wl {
    padding: var(--space-14) var(--space-4);
  }
  .wl__inner {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  .wl__title {
    font-size: var(--fs-2xl);
  }
  .wl__card {
    padding: var(--space-6);
  }
  .wl__grid {
    grid-template-columns: 1fr;
  }
}
</style>
