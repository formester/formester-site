<template>
  <div>
    <HeroV2
      :description="c0_description"
      blobColorA="#f5eeff"
      blobColorB="#f1ebff"
      blobColorC="#f4efff"
      :mockupHtml="c0_mockupHtml"
      layout="split"
      :title="c0_title"
      :buttons="c0_buttons"
      :badge="c0_badge"
      :tabCardContent="c0_tabCardContent"
      class="page-component-item"
    />

    <TrustSeals
      label="Trusted by leading organisations"
      showTrustBadges
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="How it works" :title="c2_title" :rows="c2_rows" class="page-component-item" />

    <CardGrid
      eyebrow="Why use it"
      description="A quiz scores answers and returns an outcome, so you can test knowledge, qualify leads, or guide people to a recommendation without lifting a finger."
      columns="3"
      :title="c3_title"
      :cards="c3_cards"
      class="page-component-item"
    />

    <CalloutDiagram
      eyebrow="Anatomy"
      description="When someone finishes, Formester turns their answers into a clear result — a score, an outcome, and a message tailored to how they did."
      :mockHtml="c4_mockHtml"
      :title="c4_title"
      :pins="c4_pins"
      class="page-component-item"
    />

    <CardGrid eyebrow="Use cases" columns="4" :title="c5_title" :cards="c5_cards" class="page-component-item" />

    <TestimonialsV2
      version="feature"
      :heading="c6_heading"
      :testimonials="c6_testimonials"
      class="page-component-item"
    />

    <FaqSection centered :title="c7_title" :faqList="c7_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Build your first scored quiz today"
      description="Add your questions, mark the right answers, and let Formester grade every response and show the result."
      :buttons="c8_buttons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import AlternatingRows from '@/components/v2/AlternatingRows.vue'
import CalloutDiagram from '@/components/v2/CalloutDiagram.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Create interactive quizzes with no code — set the right answers, assign points, and let Formester grade every response automatically. Share a link and show each person their score and outcome.'
const c0_mockupHtml =
  "<div style='max-width:520px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>forms.formester.com · Quiz</span></div><div style='padding:18px;text-align:left;display:flex;flex-direction:column;gap:12px;'><div style='display:flex;align-items:center;justify-content:space-between;'><span style='font-size:12px;color:#697586;'>Question 4 of 10</span><span style='font-size:11px;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:3px 10px;'>Score 8/10</span></div><div style='font-size:14px;font-weight:600;color:#101828;'>Which planet is closest to the Sun?</div><div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;border:1px solid #027a48;background:#ecfdf3;border-radius:9px;padding:10px 12px;font-size:13px;color:#101828;'><span>Mercury</span><span style='display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#027a48;color:#fff;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span></div><div style='border:1px solid #eaecf0;border-radius:9px;padding:10px 12px;font-size:13px;color:#475467;'>Venus</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:10px 12px;font-size:13px;color:#475467;'>Mars</div></div><div style='background:#6434d0;color:#fff;font-size:14px;font-weight:600;text-align:center;border-radius:10px;padding:12px;'>Next question</div></div></div>"
const c0_title = [
  {
    id: 4863,
    text: 'Build quizzes that ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4862,
    text: 'score themselves',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1602,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1603,
    link: 'https://youtu.be/DcEtkYUML_8',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 97,
  text: 'Quiz Maker',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 4852,
    text: 'From question to result,',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4856,
    text: 'scored automatically',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_rows = [
  {
    id: 100,
    kicker: 'Build the quiz',
    title: 'Set the questions and the right answers',
    body: 'Add multiple-choice, dropdown, or text questions, mark which answers are correct, and assign points — all from the no-code builder.',
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;display:flex;flex-direction:column;gap:9px;'><div style='font-size:12px;font-weight:600;color:#697586;margin-bottom:2px;'>Capital of France?</div><div style='display:flex;align-items:center;justify-content:space-between;border:1px solid #027a48;background:#ecfdf3;border-radius:9px;padding:9px 11px;font-size:12.5px;color:#101828;'><span>Paris</span><span style='display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#027a48;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg>Correct · 1 pt</span></div><div style='display:flex;align-items:center;justify-content:space-between;border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:12.5px;color:#475467;'><span>Lyon</span><span style='font-size:11px;color:#98a2b3;'>0 pts</span></div></div>",
  },
  {
    id: 101,
    kicker: 'Auto-score',
    title: "Every answer is graded the moment it's submitted",
    body: 'Formester checks each response against your correct answers and adds up the points — no spreadsheets, no manual marking.',
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;display:flex;flex-direction:column;gap:8px;'><div style='font-size:12px;font-weight:600;color:#697586;margin-bottom:4px;'>Auto-scoring</div><div style='display:flex;align-items:center;gap:9px;font-size:12.5px;color:#101828;'><span style='display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#ecfdf3;color:#027a48;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.8'><path d='M5 12l4 4L19 6'/></svg></span>Question 1 · correct<span style='margin-left:auto;font-weight:600;'>+1</span></div><div style='display:flex;align-items:center;gap:9px;font-size:12.5px;color:#101828;'><span style='display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#fef3f2;color:#d92d20;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.8'><path d='M6 6l12 12M18 6L6 18'/></svg></span>Question 2 · incorrect<span style='margin-left:auto;color:#98a2b3;'>+0</span></div><div style='display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f2f4f7;padding-top:9px;margin-top:3px;font-size:12.5px;font-weight:600;color:#101828;'><span>Total</span><span style='color:#6434d0;'>8 / 10</span></div></div>",
  },
  {
    id: 102,
    kicker: 'Show the result',
    title: 'Give each person their score and outcome',
    body: 'Display a grade, a pass or fail, or a tailored result message based on how they scored — so every respondent sees a meaningful outcome.',
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;text-align:center;display:flex;flex-direction:column;gap:8px;align-items:center;'><div style='font-size:11px;font-weight:600;color:#697586;text-transform:uppercase;letter-spacing:.04em;'>Your result</div><div style='font-size:34px;font-weight:700;color:#6434d0;line-height:1;letter-spacing:-.02em;'>8/10</div><span style='font-size:11px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 12px;'>Passed · Grade B</span><div style='font-size:12px;color:#475467;max-width:240px;'>Nicely done — you have a solid grasp of the basics. Review section 3 to reach an A.</div></div>",
  },
]
const c3_title = [
  {
    id: 4854,
    text: 'More than a form —',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4855,
    text: 'a graded experience',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_cards = [
  {
    id: 661,
    tag: 'No-code',
    tagColor: 'violet',
    title: 'Build it without code',
    body: 'Add questions, mark the correct answers, and assign points from the builder — no setup or formulas required.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 662,
    tag: 'Scoring',
    tagColor: 'green',
    title: 'Automatic grading',
    body: "Every response is checked and totalled the moment it's submitted, so you never mark a quiz by hand.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 663,
    tag: 'Outcomes',
    tagColor: 'blue',
    title: 'Meaningful results',
    body: 'Show a score, a grade, a pass or fail, or a tailored message so each person learns where they landed.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 664,
    tag: 'Engagement',
    tagColor: 'amber',
    title: 'Interactive by design',
    body: 'Multiple-choice answers, a progress count, and a timer keep quizzes lively and people moving to the end.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 667,
    tag: 'Branding',
    tagColor: 'violet',
    title: 'Looks like yours',
    body: 'Customize colours, layout, and fields so the quiz fits your brand instead of a generic template.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 665,
    tag: 'Insights',
    tagColor: 'rose',
    title: 'See how people do',
    body: 'Quiz analytics show scores and response patterns, so you can spot the questions that trip people up.',
    mockHtml: null,
    icon: null,
  },
]
const c4_mockHtml =
  "<div style='max-width:340px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 16px 48px rgba(15,14,26,.1);overflow:hidden;'><div style='display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='font-size:12px;font-weight:600;color:#101828;'>General knowledge quiz</span><span style='font-size:10px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;'>Complete</span></div><div style='padding:18px;text-align:center;display:flex;flex-direction:column;gap:11px;align-items:center;'><div style='font-size:11px;font-weight:600;color:#697586;text-transform:uppercase;letter-spacing:.04em;'>Your result</div><div style='font-size:40px;font-weight:700;color:#6434d0;line-height:1;letter-spacing:-.02em;'>8/10</div><span style='font-size:11px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:4px 13px;'>Passed · Grade B</span><div style='font-size:12px;color:#475467;border-top:1px solid #f2f4f7;padding-top:12px;'>Nicely done — you have a strong grasp of the fundamentals. Review section 3 to reach an A next time.</div></div></div>"
const c4_title = [
  {
    id: 4857,
    text: 'What a quiz result',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4853,
    text: 'screen shows',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_pins = [
  {
    id: 89,
    label: 'The score',
    body: 'The total points earned out of the maximum, calculated automatically from every answer.',
  },
  {
    id: 90,
    label: 'The outcome',
    body: 'A pass or fail and a grade band, set by the score thresholds you define for the quiz.',
  },
  {
    id: 92,
    label: 'Per-answer correctness',
    body: 'Each response is marked right or wrong against your correct answers before the total is shown.',
  },
  {
    id: 91,
    label: 'Tailored message',
    body: 'A follow-up message matched to the score range, guiding the respondent on what to do next.',
  },
]
const c5_title = [
  {
    id: 4858,
    text: 'Quizzes that work',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4859,
    text: 'for every team',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c5_cards = [
  {
    id: 666,
    tag: 'Education',
    tagColor: 'violet',
    title: 'Course assessments',
    body: "Test students on what they've learned with scored questions and instant grades they can act on.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 668,
    tag: 'Marketing',
    tagColor: 'green',
    title: 'Lead-qualifying quizzes',
    body: 'Score answers to qualify leads and route them to the right outcome based on how they respond.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 669,
    tag: 'HR',
    tagColor: 'blue',
    title: 'Employee training',
    body: 'Check knowledge after a training module and confirm people pass before they move on.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 670,
    tag: 'E-commerce',
    tagColor: 'amber',
    title: 'Product recommendations',
    body: 'Match answers to an outcome and recommend the right product to each shopper automatically.',
    mockHtml: null,
    icon: null,
  },
]
const c6_heading = [
  {
    id: 4861,
    text: 'Teams build quizzes with Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_testimonials = [
  {
    id: 1,
    name: 'Dr. Michele Ross',
    position: 'Founder',
    organization: 'Infused Health',
    comment:
      "I'm migrating my forms from Paperform, where I've been a user for over 4 years. Loving the software so far! I've already replaced Paperform form embeds & popups on my sites & my husband's websites with Formester forms",
    createdAt: '2024-06-18T03:47:14.605Z',
    updatedAt: '2025-01-22T02:57:30.159Z',
    publishedAt: '2024-06-18T03:47:18.889Z',
    companyLogo: {
      id: 227,
      imageAlt: 'Dr. Michele Ross',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1685,
        name: 'dr._michelelogo.webp',
        alternativeText: null,
        caption: null,
        width: 300,
        height: 59,
        formats: {
          thumbnail: {
            ext: '.webp',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_dr_michelelogo_2269ae2211.webp',
            hash: 'thumbnail_dr_michelelogo_2269ae2211',
            mime: 'image/webp',
            name: 'thumbnail_dr._michelelogo.webp',
            path: null,
            size: 5.58,
            width: 245,
            height: 48,
          },
        },
        hash: 'dr_michelelogo_2269ae2211',
        ext: '.webp',
        mime: 'image/webp',
        size: 5.87,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/dr_michelelogo_2269ae2211.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.944Z',
        updatedAt: '2024-08-01T14:38:23.944Z',
      },
    },
  },
  {
    id: 4,
    name: 'Costanza Casullo',
    position: 'Volunteer',
    organization: 'Wato Coding Hub',
    comment:
      "Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths. In addition, the founder is available to answer questions and doubts, which does not happen every day.",
    createdAt: '2024-06-18T03:51:15.232Z',
    updatedAt: '2025-01-22T02:58:03.674Z',
    publishedAt: '2024-06-18T03:51:21.477Z',
    companyLogo: {
      id: 225,
      imageAlt: 'wato-coding-hub-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1681,
        name: 'wato-coding-hub.webp',
        alternativeText: 'wato-coding-hub-logo',
        caption: 'wato-coding-hub-logo',
        width: 80,
        height: 81,
        formats: null,
        hash: 'wato_coding_hub_e054f0ea9d',
        ext: '.webp',
        mime: 'image/webp',
        size: 1.88,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/wato_coding_hub_e054f0ea9d.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.738Z',
        updatedAt: '2024-12-01T07:49:13.371Z',
      },
    },
  },
  {
    id: 2,
    name: 'Jilson',
    position: 'Organiser',
    organization: 'Vue Conference',
    comment:
      'Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.',
    createdAt: '2024-06-18T03:48:46.610Z',
    updatedAt: '2025-01-22T02:57:08.760Z',
    publishedAt: '2024-06-18T03:48:50.595Z',
    companyLogo: {
      id: 228,
      imageAlt: 'photo-of-vue-conference',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1680,
        name: 'vueconf.webp',
        alternativeText: 'photo-of-vue-conference',
        caption: 'photo-of-vue-conference',
        width: 80,
        height: 80,
        formats: null,
        hash: 'vueconf_1bc3dc0827',
        ext: '.webp',
        mime: 'image/webp',
        size: 1.07,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_1bc3dc0827.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.731Z',
        updatedAt: '2024-12-01T07:47:11.024Z',
      },
    },
  },
  {
    id: 5,
    name: 'Deanna Bugalski',
    position: 'Founder/CEO',
    organization: 'Suggesterfy',
    comment:
      'I was searching for a long time for a product I could use to send newsletters and surveys to my database. I tried so many different types of software and I found many of them difficult to use and slow to learn how to operate. But Formester was super easy to set up, and the usability is seamless! I highly recommend!',
    createdAt: '2024-06-18T03:52:39.354Z',
    updatedAt: '2025-01-22T02:57:47.756Z',
    publishedAt: '2024-06-18T03:52:43.800Z',
    companyLogo: {
      id: 226,
      imageAlt: 'suggesterfy-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1683,
        name: 'suggesterfy_logo.webp',
        alternativeText: 'suggesterfy-logo',
        caption: 'suggesterfy-logo',
        width: 100,
        height: 50,
        formats: null,
        hash: 'suggesterfy_logo_d1d7f996b9',
        ext: '.webp',
        mime: 'image/webp',
        size: 1.91,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/suggesterfy_logo_d1d7f996b9.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.921Z',
        updatedAt: '2024-12-01T07:49:52.459Z',
      },
    },
  },
  {
    id: 34,
    name: 'Bency',
    position: 'Product Manager',
    organization: 'Northgate Digital Solutions',
    comment:
      "Formester's AI form generator transformed how quickly we build forms. The drag-and-drop builder paired with AI-generated templates means I can spin up a survey or poll in minutes, not hours. Conditional logic, file uploads, and seamless integrations make it incredibly versatile and the customization options let every form match our branding perfectly. Their support team is exceptional too. It's the only form and survey tool we recommend",
    createdAt: '2025-06-29T23:23:10.541Z',
    updatedAt: '2026-05-03T09:30:00.533Z',
    publishedAt: '2026-05-03T09:30:00.530Z',
    companyLogo: {
      id: 3652,
      imageAlt: null,
      imageUrl: null,
      width: null,
      height: null,
      image: null,
    },
  },
  {
    id: 36,
    name: 'Ye Qi Lai',
    position: 'UX Designer',
    organization: 'Eastview Consulting',
    comment:
      'Formester is one of the best underrated survey tools out there… It’s extremely customizable… Their support is awesome… I absolutely recommend this to anyone looking for an alternative to the usual form creators.',
    createdAt: '2025-06-29T23:30:04.374Z',
    updatedAt: '2025-10-31T04:00:30.746Z',
    publishedAt: '2025-06-29T23:30:06.260Z',
    companyLogo: {
      id: 3648,
      imageAlt: 'eastview-logo-header',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4097,
        name: 'eastview-logo-header-300x120 1.png',
        alternativeText: 'eastview-logo-header',
        caption: 'eastview-logo-header',
        width: 200,
        height: 80,
        formats: null,
        hash: 'eastview_logo_header_300x120_1_d9c231e93b',
        ext: '.png',
        mime: 'image/png',
        size: 3.18,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/eastview_logo_header_300x120_1_d9c231e93b.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-31T04:00:11.854Z',
        updatedAt: '2025-10-31T04:00:11.854Z',
      },
    },
  },
]
const c7_title = [
  {
    id: 4860,
    text: 'Quiz maker FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c7_faqList = [
  {
    id: 2424,
    header: 'What is an online quiz maker?',
    body: "It's a no-code tool for building interactive quizzes — you add questions, mark the correct answers, and Formester scores each response and shows the result automatically.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2425,
    header: 'How does automatic scoring work?',
    body: 'You set the right answer and points for each question. When someone submits, Formester checks their answers, totals the points, and produces a final score with no manual marking.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2427,
    header: 'Can I show different results based on the score?',
    body: 'Yes. You can set pass or fail thresholds, grade bands, and a tailored result message for each score range, so every person sees an outcome that matches how they did.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2426,
    header: 'What question types can a quiz use?',
    body: 'You can use multiple-choice, dropdown, and text questions, mark which answers are correct, assign points, and add a timer to keep the quiz fair.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2428,
    header: 'Can I see how people perform?',
    body: 'Yes. Quiz analytics show scores and response patterns, so you can spot the questions people get wrong most often and improve the quiz.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2429,
    header: 'Is the quiz maker free?',
    body: "Yes, you can build and share interactive scored quizzes for free. Check the pricing page for what's included on each plan.",
    body_markdown: null,
    list: [],
  },
]
const c8_buttons = [
  {
    id: 1601,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1600,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Free Online Quiz Maker to Create Interactive Quizzes',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/quiz-maker-features/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:33.963Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Build interactive quizzes with no code — scored questions, right and wrong answers, grades and outcomes, and tailored result messages. Share a link, auto-score every response, and show each person their result.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Free Online Quiz Maker to Create Interactive Quizzes',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/quiz-maker-features/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Free Online Quiz Maker to Create Interactive Quizzes',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Build interactive quizzes with no code — scored questions, right and wrong answers, grades and outcomes, and tailored result messages. Share a link, auto-score every response, and show each person their result.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/features/quiz-maker-features/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Free Online Quiz Maker to Create Interactive Quizzes',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Build interactive quizzes with no code — scored questions, right and wrong answers, grades and outcomes, and tailored result messages. Share a link, auto-score every response, and show each person their result.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: 'Formester',
    },
    {
      hid: 'image',
      name: 'image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ['quiz maker'],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    url: 'https://formester.com',
    logo: 'https://formester.com/logo.svg',
    name: 'Formester',
    '@type': 'Organization',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        name: 'What is an online quiz maker?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "It's a no-code tool for building interactive quizzes — you add questions, mark the correct answers, and Formester scores each response and shows the result automatically.",
          '@type': 'Answer',
        },
      },
      {
        name: 'How does automatic scoring work?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'You set the right answer and points for each question. When someone submits, Formester checks their answers, totals the points, and produces a final score with no manual marking.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I show different results based on the score?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. You can set pass or fail thresholds, grade bands, and a tailored result message for each score range, so every person sees an outcome that matches how they did.',
          '@type': 'Answer',
        },
      },
      {
        name: 'What question types can a quiz use?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'You can use multiple-choice, dropdown, and text questions, mark which answers are correct, assign points, and add a timer to keep the quiz fair.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I see how people perform?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Quiz analytics show scores and response patterns, so you can spot the questions people get wrong most often and improve the quiz.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is the quiz maker free?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes, you can build and share interactive scored quizzes for free. Check the pricing page for what's included on each plan.",
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
