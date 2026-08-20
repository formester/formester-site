<template>
  <div>
    <HeroV2
      description="Use Formester as a Zapier trigger and send form submissions to 8,000+ apps — CRMs, spreadsheets, email tools, project boards — without writing code."
      trustText="✓ 8,000+ apps · ✓ No code required · ✓ Field mapping included"
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
      label="Trusted by 56k+ teams worldwide"
      :showTrustBadges="false"
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Why connect them"
      description="One trigger — new form submission — and Zapier takes it anywhere."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect Zapier in 3 steps"
      description="Set up once — every future submission triggers your workflow automatically."
      background="#f9fafb"
      :steps="c3_steps"
      :buttons="c3_buttons"
      class="page-component-item"
    />

    <TestimonialWall
      description="Real reviews from G2, Trustpilot, Product Hunt, and Capterra."
      showG2
      showTrustpilot
      showProductHunt
      showCapterra
      :title="c4_title"
      :pickedReviews="c4_pickedReviews"
      :excludedReviews="c4_excludedReviews"
      class="page-component-item"
    />

    <IntegrationsGrid title="Explore more integrations" :integrations="c5_integrations" class="page-component-item" />

    <FaqSection centered :title="c6_title" :faqList="c6_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Automate everything after submit"
      description="Connect Zapier and your form data goes wherever your team works."
      :buttons="c7_buttons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialWall from '@/components/v2/TestimonialWall.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_mockupHtml =
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/zapier.svg' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>Workflow · Zapier</span></div><div style='padding:16px 14px;'><div style='display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:12px;'><span style='width:34px;height:34px;border-radius:9px;background:#f0ebfa;display:inline-flex;align-items:center;justify-content:center;'><img src='/formester-icon.svg' alt='' style='width:19px;'/></span><svg width='26' height='10' viewBox='0 0 26 10'><path d='M0 5 H20' stroke='#9777e0' stroke-width='2' stroke-dasharray='4 4' fill='none'/><path d='M19 1 L26 5 L19 9 Z' fill='#9777e0'/></svg><span style='width:34px;height:34px;border-radius:9px;background:#fff;border:1px solid #eaecf0;display:inline-flex;align-items:center;justify-content:center;'><img src='/integrations/zapier.svg' alt='' style='width:20px;height:20px;object-fit:contain;'/></span><svg width='26' height='10' viewBox='0 0 26 10'><path d='M0 5 H20' stroke='#9777e0' stroke-width='2' stroke-dasharray='4 4' fill='none'/><path d='M19 1 L26 5 L19 9 Z' fill='#9777e0'/></svg><span style='display:inline-flex;gap:6px;'><span style='width:30px;height:30px;border-radius:8px;background:#fff;border:1px solid #eaecf0;display:inline-flex;align-items:center;justify-content:center;'><img src='/integrations/salesforce.png' alt='' style='width:17px;height:17px;object-fit:contain;'/></span><span style='width:30px;height:30px;border-radius:8px;background:#fff;border:1px solid #eaecf0;display:inline-flex;align-items:center;justify-content:center;'><img src='/integrations/notion.png' alt='' style='width:17px;height:17px;object-fit:contain;'/></span><span style='width:30px;height:30px;border-radius:8px;background:#fff;border:1px solid #eaecf0;display:inline-flex;align-items:center;justify-content:center;'><img src='/integrations/mailchimp.svg' alt='' style='width:17px;height:17px;object-fit:contain;'/></span></span></div><div class='iw__anim' style='display:flex;justify-content:space-between;align-items:center;border:1px solid #eaecf0;border-radius:8px;padding:9px 12px;font-size:11px;'><span style='color:#101828;font-weight:600;'>New submission → Zapier workflow</span><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;line-height:1;'>Ran · success</span></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Workflow ran<small>just now · success</small></span></div></div></div>"
const c0_title = [
  {
    id: 5265,
    text: 'Connect your forms to 8,000+ apps with ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5264,
    text: 'Zapier',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1854,
    link: 'https://help.formester.com/en/article/zapier-integration-9hmwb2/',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1855,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 183,
  text: 'Zapier',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5261,
    text: 'If an app exists, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5260,
    text: 'you can probably reach it',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 929,
    tag: 'Reach',
    tagColor: 'violet',
    title: '8,000+ apps',
    body: 'Salesforce, Notion, Mailchimp, Trello, Airtable — if your team uses it, a Zap can feed it.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 927,
    tag: 'Mapping',
    tagColor: 'blue',
    title: 'Fields where you want them',
    body: "Map each form field to the destination app's fields when you build the Zap.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 930,
    tag: 'Multi-step',
    tagColor: 'green',
    title: 'Chain actions together',
    body: 'One submission can create a CRM lead, post to Slack, and add a spreadsheet row — in a single Zap.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 928,
    tag: 'No code',
    tagColor: 'amber',
    title: 'Point, click, automate',
    body: 'Build and test the whole workflow visually in Zapier — no developers required.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 351,
    title: 'Pick an app and workflow',
    description:
      "In your form's Automate tab, click Add Integration under Zapier, search for the app you want, and choose Use this Workflow.",
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'><span>Autoresponder</span><span style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Integrations</span><span>Webhooks</span></div><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'><img src='/integrations/zapier.svg' alt='' style='width:20px;height:20px;object-fit:contain;'/><span style='font-size:12.5px;font-weight:700;color:#101828;'>Zapier</span></div><div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Build custom automations and integrations with apps.</div><div style='display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'><span style='color:#6434d0;font-weight:700;'>+ Add integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 352,
    title: 'Build the Zap',
    description:
      'Sign in to Zapier, create a Zap with Formester as the trigger, select your form, then configure the destination app and map your fields.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Zap editor</div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Trigger</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Formester — New submission</span></div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Action</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Salesforce — Create lead</span></div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Full name</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Lead name</span></div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Test Zap</span></div></div></div></div>",
    image: null,
  },
  {
    id: 353,
    title: 'Test, publish, and switch it on',
    description: 'Run a test to confirm data flows, then publish in Formester and turn the Zap on.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>Zap on — workflow live</div></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_title = [
  {
    id: 5262,
    text: 'What teams say about Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c4_pickedReviews = []
const c4_excludedReviews = []
const c5_integrations = [
  {
    id: 319,
    name: 'Webhook',
    description: 'Send form data to any tool instantly using webhooks.',
    link: '/integrations/webhook/',
  },
  {
    id: 318,
    name: 'n8n',
    description: 'Control how your form data moves between apps with full flexibility.',
    link: '/integrations/n8n/',
  },
  {
    id: 320,
    name: 'Pabbly Connect',
    description: 'Automate tasks and move form data without doing it manually.',
    link: '/integrations/pabbly-connect/',
  },
  {
    id: 321,
    name: 'Ottokit (Formerly SureTriggers)',
    description: 'Automate your form workflows using Ottokit.',
    link: '/integrations/ottokit/',
  },
  {
    id: 323,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 322,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
]
const c6_title = [
  {
    id: 5263,
    text: 'Zapier integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2831,
    header: 'What does the Zapier integration do?',
    body: 'It uses Formester as a Zapier trigger, so every new form submission can start workflows in 8,000+ connected apps — CRMs, spreadsheets, email tools, and more.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2829,
    header: 'How do I set up a Zap with Formester?',
    body: 'From the Automate tab, choose Zapier and your destination app, then in Zapier create a Zap with Formester as trigger, select your form, map fields, test, and turn it on.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2830,
    header: 'Can one submission trigger multiple actions?',
    body: 'Yes — multi-step Zaps can run several actions from one submission, like creating a lead, sending an email, and adding a spreadsheet row.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2832,
    header: 'What if my Zap stops running?',
    body: "Check the Zap's status and history in Zapier, and confirm the form's integration is published in Formester. Submissions always stay stored in Formester.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2833,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1853,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1852,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Zapier Integration — Connect Forms to 8,000+ Apps | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/zapier/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:17:26.593Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Use form submissions to trigger Zapier workflows in 8,000+ apps. No code, field mapping included — connect Formester to Zapier in minutes.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Zapier Integration — Connect Forms to 8,000+ Apps | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/zapier/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Zapier Integration — Connect Forms to 8,000+ Apps | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Use form submissions to trigger Zapier workflows in 8,000+ apps. No code, field mapping included — connect Formester to Zapier in minutes.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Zapier integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/zapier/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Zapier Integration — Connect Forms to 8,000+ Apps | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Use form submissions to trigger Zapier workflows in 8,000+ apps. No code, field mapping included — connect Formester to Zapier in minutes.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Zapier integration',
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
      content: [
        'zapier form integration',
        'form submission zapier trigger',
        'connect form to apps',
        'formester zapier',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the Zapier integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It uses Formester as a Zapier trigger, so every new form submission can start workflows in 8,000+ connected apps — CRMs, spreadsheets, email tools, and more."}}, {"@type": "Question", "name": "How do I set up a Zap with Formester?", "acceptedAnswer": {"@type": "Answer", "text": "From the Automate tab, choose Zapier and your destination app, then in Zapier create a Zap with Formester as trigger, select your form, map fields, test, and turn it on."}}, {"@type": "Question", "name": "Can one submission trigger multiple actions?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — multi-step Zaps can run several actions from one submission, like creating a lead, sending an email, and adding a spreadsheet row."}}, {"@type": "Question", "name": "What if my Zap stops running?", "acceptedAnswer": {"@type": "Answer", "text": "Check the Zap\'s status and history in Zapier, and confirm the form\'s integration is published in Formester. Submissions always stay stored in Formester."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Zapier", "item": "https://formester.com/integrations/zapier/"}]}',
  },
])
</script>
