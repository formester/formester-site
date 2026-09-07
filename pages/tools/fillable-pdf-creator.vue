<template>
  <div class="fpc">
    <!-- Hero: the tool is the hero -->
    <section class="fpc-hero page-component-item">
      <div class="fpc-hero__glow" aria-hidden="true"></div>
      <div class="fpc-hero__inner">
        <SectionHeader
          tag="h1"
          size="xl"
          eyebrow="Free tool · runs in your browser"
          :title="[{ text: 'Create a fillable PDF,' }, { text: 'free.', highlight: true }]"
          description="Add text fields, checkboxes, dropdowns and signature boxes to any PDF, or build a form from a blank page. No signup, no watermark. Your file never leaves this tab."
          spacing="none"
        />

        <div class="fpc-hero__tool">
          <ClientOnly>
            <FillablePdfEditor @started="toolStarted = true" @closed="toolStarted = false" />
            <template #fallback>
              <div class="fpc-skeleton" aria-hidden="true">
                <div class="fpc-skeleton__drop"></div>
                <div class="fpc-skeleton__card"></div>
              </div>
            </template>
          </ClientOnly>
        </div>

        <ul class="fpc-trust">
          <li>
            <Lock :size="20" /><span><strong>Private.</strong> Nothing is uploaded.</span>
          </li>
          <li>
            <CircleCheck :size="20" /><span><strong>No signup.</strong> Instant download.</span>
          </li>
          <li>
            <Infinity :size="20" /><span><strong>No watermark.</strong> No hourly caps.</span>
          </li>
          <li>
            <FileCheck :size="20" /><span><strong>Real fields.</strong> Works in any viewer.</span>
          </li>
        </ul>
        <button type="button" class="fpc-bookmark" @click="bookmark">
          <Bookmark :size="16" />
          <span>{{ bookmarkMsg || 'Bookmark this tool for next time' }}</span>
        </button>
      </div>
    </section>

    <!-- How it works -->
    <CardGrid
      class="page-component-item"
      eyebrow="How to make a PDF fillable"
      :title="[{ text: 'Three steps, about two minutes.' }]"
      description="No Acrobat, no account, nothing to install."
      :columns="3"
      :cards="howCards"
    />

    <!-- Field types -->
    <section class="fpc-fields page-component-item">
      <div class="fpc-fields__inner">
        <SectionHeader
          eyebrow="Every field type a PDF form can have"
          :title="[{ text: 'Real AcroForm fields, not drawings' }]"
          description="Each field is written as a genuine interactive widget, so it works in Acrobat, macOS Preview, Chrome, Firefox and on phones."
        />
        <div class="fpc-fields__grid">
          <article v-for="f in fieldTypes" :key="f.name" class="fpc-field">
            <span class="fpc-field__icon" :style="{ background: f.bg, color: f.fg }"
              ><component :is="f.icon" :size="18"
            /></span>
            <h3>{{ f.name }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Bridge to the product -->
    <section class="fpc-bridge page-component-item">
      <div class="fpc-bridge__inner">
        <div class="fpc-bridge__copy">
          <SectionHeader
            align="left"
            eyebrow="After the PDF"
            :title="[{ text: 'Made it fillable? Stop collecting PDFs by email.' }]"
            description="Send a Formester link instead of a file. People fill it on any device, every answer lands in one place, and you can get your PDF auto-filled for each response."
            spacing="none"
          />
          <ul class="fpc-bridge__list">
            <li><CircleCheck :size="18" /> Unlimited forms and responses on the free plan</li>
            <li><CircleCheck :size="18" /> Notifications, reminders and a submissions table</li>
            <li><CircleCheck :size="18" /> Auto-filled copies of your PDF on Business, $49/mo</li>
          </ul>
          <div class="d-flex gap-3 flex-wrap">
            <FButton variant="primary" size="lg" :href="signupHref">Try it free</FButton>
            <FButton variant="violet-outline" size="lg" href="/features/convert-pdf-to-fillable-form/"
              >See how connected PDFs work</FButton
            >
          </div>
        </div>
        <div class="fpc-bridge__visual" aria-hidden="true">
          <div class="fpc-bridge__paper">
            <div class="fpc-bridge__paper-line" style="width: 60%"></div>
            <div class="fpc-bridge__paper-line" style="width: 90%"></div>
            <div class="fpc-bridge__paper-field"></div>
            <div class="fpc-bridge__paper-line" style="width: 40%"></div>
            <div class="fpc-bridge__paper-field"></div>
          </div>
          <div class="fpc-bridge__arrow"><ArrowRight :size="20" /></div>
          <div class="fpc-bridge__phone">
            <div class="fpc-bridge__phone-bar"></div>
            <div class="fpc-bridge__phone-field"></div>
            <div class="fpc-bridge__phone-field"></div>
            <div class="fpc-bridge__phone-btn"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compare -->
    <section class="fpc-compare page-component-item">
      <div class="fpc-compare__inner">
        <SectionHeader eyebrow="Compared" :title="[{ text: 'Fillable PDF creators, side by side' }]" />
        <div class="fpc-compare__wrap">
          <table class="fpc-compare__table">
            <thead>
              <tr>
                <th></th>
                <th class="is-us">Formester</th>
                <th>Adobe Acrobat</th>
                <th>Sejda</th>
                <th>PDF24</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                <td class="is-us">Free</td>
                <td>From $12.99/mo</td>
                <td>Free tier</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Account needed</td>
                <td class="is-us">No</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>File stays on your device</td>
                <td class="is-us">Yes</td>
                <td>Desktop only</td>
                <td>Uploaded</td>
                <td>Uploaded</td>
              </tr>
              <tr>
                <td>Usage caps</td>
                <td class="is-us">None</td>
                <td>None</td>
                <td>3 tasks / hour</td>
                <td>None</td>
              </tr>
              <tr>
                <td>Watermark</td>
                <td class="is-us">None</td>
                <td>None</td>
                <td>None</td>
                <td>None</td>
              </tr>
              <tr>
                <td>Collect responses online</td>
                <td class="is-us">Yes, free</td>
                <td>Adobe Sign, paid</td>
                <td>No</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="fpc-compare__note">
          Competitor details as published on their sites in September 2026. Tell us if something changed.
        </p>
      </div>
    </section>

    <FaqSection
      class="page-component-item"
      :title="[{ text: 'Questions about fillable PDFs' }]"
      :faq-list="faqs"
      :description-fallback="false"
    />

    <section class="fpc-related page-component-item">
      <div class="fpc-related__inner">
        <SectionHeader eyebrow="Keep reading" :title="[{ text: 'Guides on PDF forms' }]" spacing="none" />
        <ul class="fpc-related__list">
          <li v-for="g in guides" :key="g.href">
            <NuxtLink :to="g.href">{{ g.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Lock,
  CircleCheck,
  Infinity,
  FileCheck,
  ArrowRight,
  RectangleHorizontal,
  AlignLeft,
  SquareCheck,
  CircleDot,
  ChevronDown,
  Calendar,
  PenLine,
  Bookmark,
} from '@lucide/vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FButton from '@/components/UI/FButton.vue'
import FillablePdfEditor from '@/components/tools/pdf/FillablePdfEditor.vue'

const config = useRuntimeConfig()
const toolStarted = ref(false)
const bookmarkMsg = ref('')
/** Browsers cannot add bookmarks from a page; show the shortcut for this OS instead. */
function bookmark() {
  const mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
  bookmarkMsg.value = `Press ${mac ? '⌘' : 'Ctrl'} + D to bookmark this page`
  setTimeout(() => (bookmarkMsg.value = ''), 4000)
}
const signupHref = computed(() => `${config.public.appUrl}/users/sign_up?utm_source=pdf-tool&utm_medium=bridge-section`)

const howCards = [
  {
    tag: 'Step 1',
    title: 'Open your PDF',
    body: 'Drop it in. Pages render as your canvas. If it already has fields, they show up ready to edit. Or start from a blank Letter or A4 page.',
  },
  {
    tag: 'Step 2',
    title: 'Place fields',
    body: 'Drag text boxes, checkboxes, radio groups, dropdowns, dates and signature boxes onto the page. Name them, mark them required, set defaults.',
  },
  {
    tag: 'Step 3',
    title: 'Test, then download',
    body: 'Switch to Test fill and type into the form yourself. Then download a fillable PDF, or a flattened copy for printing.',
  },
]

const fieldTypes = [
  {
    name: 'Text',
    body: 'Single-line answers: names, emails, amounts. Set a max length and alignment.',
    icon: RectangleHorizontal,
    bg: '#f0ebfa',
    fg: '#6434d0',
  },
  {
    name: 'Paragraph',
    body: 'Multi-line text that wraps inside the box for notes and descriptions.',
    icon: AlignLeft,
    bg: '#f0ebfa',
    fg: '#6434d0',
  },
  {
    name: 'Checkbox',
    body: 'Yes/no and multi-select. Can be checked by default.',
    icon: SquareCheck,
    bg: '#e6faef',
    fg: '#027a48',
  },
  {
    name: 'Radio group',
    body: 'Pick one of several. Radios sharing a name become one group.',
    icon: CircleDot,
    bg: '#fef3e2',
    fg: '#dc6803',
  },
  {
    name: 'Dropdown',
    body: 'A list of options. Optionally allow typed custom values.',
    icon: ChevronDown,
    bg: '#e8f1fd',
    fg: '#175cd3',
  },
  {
    name: 'Date',
    body: 'A combed text field with one character per cell and a format hint.',
    icon: Calendar,
    bg: '#e4f7f5',
    fg: '#0e9384',
  },
  {
    name: 'Signature',
    body: 'A real signature field. Acrobat shows “Sign here”; other viewers show the box.',
    icon: PenLine,
    bg: '#fdf2fa',
    fg: '#c11574',
  },
]

const faqs = [
  {
    id: 'what',
    question: 'What is a fillable PDF?',
    answer:
      'A PDF with interactive form fields (called AcroForm fields) that people can type into, tick and select from in a PDF viewer, then save or print. A regular PDF is a fixed picture of a page; a fillable PDF has live inputs on top of it.',
  },
  {
    id: 'how',
    question: 'How do I make an existing PDF fillable?',
    answer:
      'Drop the PDF into the tool above. Each page renders as a canvas. Drag fields from the left onto the places people should fill, name them, then download. The original content is untouched; the fields sit on top as real widgets.',
  },
  {
    id: 'acrobat',
    question: 'Can I create a fillable PDF without Adobe Acrobat?',
    answer:
      'Yes. This tool writes standard AcroForm fields directly in your browser. The result opens and fills in Acrobat Reader, macOS Preview, Chrome, Firefox, Edge and on iOS and Android.',
  },
  {
    id: 'free',
    question: 'Is it really free? What is the catch?',
    answer:
      'The creator is free with no account, no watermark and no usage caps. Formester makes money from its form builder: if you would rather collect responses online than by emailing PDFs, you can turn your form into a Formester form. That is optional.',
  },
  {
    id: 'privacy',
    question: 'Is my PDF uploaded to a server?',
    answer:
      'No. Reading the PDF, placing fields and writing the new file all happen in your browser. Your document is saved locally in this browser so you can come back to it; nothing is sent to Formester unless you choose to create a fill link.',
  },
  {
    id: 'existing',
    question: 'My PDF already has some fields. Will they be kept?',
    answer:
      'Yes. Existing text fields, checkboxes, radio groups, dropdowns and signature fields are imported so you can move, rename or delete them alongside new ones.',
  },
  {
    id: 'sign',
    question: 'Can people sign the PDF?',
    answer:
      'You can add a signature field. Acrobat and Acrobat Reader recognise it and offer to sign; most other viewers show the box for a drawn or typed signature. For legally binding e-signatures with an audit trail, collect the form through Formester instead.',
  },
  {
    id: 'flatten',
    question: 'What is a flattened copy?',
    answer:
      'A version where the fields are converted back into static page content. Useful when you want a printable or archived version that can no longer be edited.',
  },
  {
    id: 'limits',
    question: 'What are the limits?',
    answer:
      'Up to 10 MB and 50 pages per PDF, because everything runs on your own computer. There is no limit on how many PDFs you make.',
  },
  {
    id: 'word',
    question: 'Can I make a fillable PDF from a Word document?',
    answer:
      'Export the Word document as a PDF (File → Save As → PDF), then drop that PDF here and add the fields. It takes about a minute.',
  },
]

const guides = [
  { href: '/blog/how-to-add-fillable-fields-in-pdf/', title: 'How to add fillable fields in a PDF' },
  { href: '/blog/how-to-convert-pdf-to-fillable-form/', title: 'How to convert a PDF to a fillable form' },
  { href: '/blog/how-to-make-canva-pdf-fillable/', title: 'How to make a Canva PDF fillable' },
  { href: '/blog/best-pdf-form-creator/', title: '9 best PDF form creator tools compared' },
  { href: '/blog/how-to-fill-out-pdf-forms-an-easy-step-by-step-guide/', title: 'How to fill out PDF forms' },
  { href: '/features/create-fillable-pdf-forms/', title: 'Connected PDFs in Formester' },
]

const pageUrl = 'https://formester.com/tools/fillable-pdf-creator/'
const title = 'Free Fillable PDF Creator - Make Any PDF Fillable Online | Formester'
const description =
  'Create a fillable PDF for free. Add text fields, checkboxes, dropdowns and signature boxes to any PDF, or start from a blank page. No signup, no watermark, runs in your browser.'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:site_name', property: 'og:site_name', content: 'Formester' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: pageUrl },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:image', property: 'og:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Formester free fillable PDF creator' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:site', name: 'twitter:site', content: '@_formester_' },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://formester.com/formester-logo-meta-image.png' },
  ],
  link: [{ hid: 'canonical', rel: 'canonical', href: pageUrl }],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://formester.com/#organization',
        name: 'Formester',
        url: 'https://formester.com/',
        logo: 'https://formester.com/formester-logo-meta-image.png',
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        isPartOf: { '@id': 'https://formester.com/#website' },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
          { '@type': 'ListItem', position: 2, name: 'Free tools', item: 'https://formester.com/tools/' },
          { '@type': 'ListItem', position: 3, name: 'Fillable PDF creator', item: pageUrl },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#software`,
        name: 'Formester Fillable PDF Creator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        description,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@id': 'https://formester.com/#organization' },
      },
      {
        '@type': 'HowTo',
        name: 'How to make a PDF fillable',
        totalTime: 'PT2M',
        step: howCards.map((c, i) => ({ '@type': 'HowToStep', position: i + 1, name: c.title, text: c.body })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  },
])
</script>

<style scoped>
.fpc {
  background: var(--bg-primary);
}
/* ---- hero ---- */
.fpc-hero {
  position: relative;
  padding: var(--space-30) var(--space-6) var(--space-16);
  overflow: hidden;
}
.fpc-hero__glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 460px;
  border-radius: 50%;
  background: radial-gradient(closest-side, var(--violet-25), rgba(247, 243, 255, 0));
  pointer-events: none;
}
/* The italic display face overhangs on "f"; give the highlighted word visible breathing room after the comma. */
.fpc-hero :deep(.sh__hl) {
  margin-left: 0.1em;
}
.fpc-hero__inner {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-12);
}
.fpc-hero__tool {
  width: 100%;
}
.fpc-trust {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-4);
}
.fpc-trust li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--fs-sm);
  color: var(--fg-strong);
}
.fpc-trust li svg {
  color: var(--violet-500);
  flex: none;
}
.fpc-trust strong {
  font-weight: var(--fw-semibold);
}
@media (max-width: 860px) {
  .fpc-trust {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.fpc-bookmark {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: calc(-1 * var(--space-6));
  border: 0;
  background: transparent;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--fg-3);
  padding: 6px 10px;
  border-radius: var(--r-full);
}
.fpc-bookmark:hover {
  color: var(--violet-600);
  background: var(--bg-violet-25);
}
.fpc-skeleton {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--space-5);
}
.fpc-skeleton__drop {
  grid-column: span 7;
  min-height: 340px;
  border-radius: var(--r-2xl);
  background: var(--bg-violet-25);
  border: 2px dashed var(--border-violet);
}
.fpc-skeleton__card {
  grid-column: span 5;
  min-height: 340px;
  border-radius: var(--r-xl);
  border: 1px solid var(--border-light);
}

/* ---- field types ---- */
.fpc-fields {
  padding: var(--space-16) var(--space-6);
  background: var(--bg-grey-50);
}
.fpc-fields__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.fpc-fields__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-4);
}
.fpc-field {
  background: var(--bg-primary);
  border: 1px solid var(--gray-200);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fpc-field__icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.fpc-field h3 {
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  margin: 0;
  color: var(--fg-1);
}
.fpc-field p {
  margin: 0;
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--fg-2);
}
@media (max-width: 1000px) {
  .fpc-fields__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* ---- bridge ---- */
.fpc-bridge {
  padding: var(--space-20) var(--space-6);
}
.fpc-bridge__inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-12);
  align-items: center;
}
.fpc-bridge__copy {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
.fpc-bridge__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: var(--fs-md);
  color: var(--fg-strong);
}
.fpc-bridge__list li {
  display: flex;
  align-items: center;
  gap: 10px;
}
.fpc-bridge__list svg {
  color: var(--success-700);
  flex: none;
}
.fpc-bridge__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-5);
  padding: var(--space-8);
  background: var(--bg-violet-25);
  border-radius: var(--r-3xl);
}
.fpc-bridge__paper {
  width: 170px;
  height: 220px;
  background: #fff;
  border-radius: 6px;
  box-shadow: var(--shadow-lg);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fpc-bridge__paper-line {
  height: 6px;
  border-radius: 3px;
  background: var(--gray-200);
}
.fpc-bridge__paper-field {
  height: 18px;
  border-radius: 3px;
  border: 1px solid var(--violet-300);
  background: var(--violet-25);
}
.fpc-bridge__arrow {
  color: var(--violet-500);
}
.fpc-bridge__phone {
  width: 120px;
  height: 220px;
  background: #fff;
  border-radius: 20px;
  border: 6px solid var(--fg-1);
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fpc-bridge__phone-bar {
  height: 8px;
  width: 60%;
  border-radius: 4px;
  background: var(--gray-200);
}
.fpc-bridge__phone-field {
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--gray-300);
}
.fpc-bridge__phone-btn {
  margin-top: auto;
  height: 30px;
  border-radius: 999px;
  background: var(--violet-500);
}
@media (max-width: 900px) {
  .fpc-bridge__inner {
    grid-template-columns: 1fr;
  }
}

/* ---- compare ---- */
.fpc-compare {
  padding: var(--space-16) var(--space-6);
  background: var(--bg-grey-50);
}
.fpc-compare__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.fpc-compare__wrap {
  overflow-x: auto;
  border: 1px solid var(--gray-200);
  border-radius: var(--r-xl);
  background: var(--bg-primary);
}
.fpc-compare__table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  font-size: var(--fs-sm);
}
.fpc-compare__table th,
.fpc-compare__table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-200);
  text-align: left;
  color: var(--fg-2);
}
.fpc-compare__table th {
  font-weight: var(--fw-semibold);
  color: var(--fg-1);
  background: var(--bg-grey-50);
}
.fpc-compare__table tr:last-child td {
  border-bottom: 0;
}
.fpc-compare__table td:first-child {
  font-weight: var(--fw-medium);
  color: var(--fg-1);
}
.fpc-compare__table .is-us {
  color: var(--violet-600);
  font-weight: var(--fw-semibold);
  background: var(--bg-violet-25);
}
.fpc-compare__note {
  margin: var(--space-3) 0 0;
  font-size: var(--fs-xs);
  color: var(--fg-muted);
}

/* ---- related ---- */
.fpc-related {
  padding: var(--space-16) var(--space-6);
}
.fpc-related__inner {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
.fpc-related__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3) var(--space-6);
}
.fpc-related__list a {
  font-size: var(--fs-md);
  color: var(--violet-600);
  text-decoration: none;
}
.fpc-related__list a:hover {
  text-decoration: underline;
}
@media (max-width: 800px) {
  .fpc-related__list {
    grid-template-columns: 1fr;
  }
}
</style>
