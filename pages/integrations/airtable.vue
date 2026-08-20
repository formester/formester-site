<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="✓ Native integration · ✓ Syncs to any base · ✓ Minutes to set up"
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
      description="Responses flow into the base where your projects, tables, and team already live."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect Airtable in 3 steps"
      description="Connect your base, map your fields, and submissions flow in."
      background="#f9fafb"
      :steps="c3_steps"
      :buttons="c3_buttons"
      class="page-component-item"
    />

    <TestimonialsV2
      version="feature"
      :heading="c4_heading"
      :testimonials="c4_testimonials"
      class="page-component-item"
    />

    <IntegrationsGrid title="Explore more integrations" :integrations="c5_integrations" class="page-component-item" />

    <FaqSection centered :title="c6_title" :faqList="c6_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Pipe your forms into Airtable"
      description="Connect once and every response files itself in your base."
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
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Sync form submissions to an Airtable base automatically — every response becomes a record with your fields mapped to columns, right where your team already works.'
const c0_mockupHtml =
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='https://formester-strapi.s3.ap-south-1.amazonaws.com/airtable_logo_d278b0c038.png' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>Submissions · Airtable</span></div><div><div style='padding:9px 14px;font-size:11px;font-weight:700;color:#101828;border-bottom:1px solid #f2f4f7;'>🗂 Submissions — database</div><div style='display:grid;grid-template-columns:1.4fr 1fr .8fr;font-size:10px;font-weight:700;color:#697586;border-bottom:1px solid #f2f4f7;'><span style='padding:7px 12px;'>Name</span><span style='padding:7px 12px;'>Email</span><span style='padding:7px 12px;'>Plan</span></div><div class='' style='display:grid;grid-template-columns:1.4fr 1fr .8fr;font-size:11px;border-bottom:1px solid #f2f4f7;'><span style='padding:8px 12px;color:#101828;'>📄 Priya Sharma</span><span style='padding:8px 12px;color:#475467;'>priya@lumen.co</span><span style='padding:8px 12px;'><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#6434d0;background:#f0ebfa;border-radius:999px;padding:3px 9px;line-height:1;'>Pro</span></span></div><div class='' style='display:grid;grid-template-columns:1.4fr 1fr .8fr;font-size:11px;border-bottom:1px solid #f2f4f7;'><span style='padding:8px 12px;color:#101828;'>📄 Daniel Reyes</span><span style='padding:8px 12px;color:#475467;'>daniel@corewave.io</span><span style='padding:8px 12px;'><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#b54708;background:#fef6e7;border-radius:999px;padding:3px 9px;line-height:1;'>Team</span></span></div><div class='iw__anim' style='display:grid;grid-template-columns:1.4fr 1fr .8fr;font-size:11px;border-bottom:1px solid #f2f4f7;background:#f2fbf6;'><span style='padding:8px 12px;color:#101828;'>📄 Jonas Keller</span><span style='padding:8px 12px;color:#475467;'>jonas@verge.dev</span><span style='padding:8px 12px;'><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;line-height:1;'>New</span></span></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Row added<small>just now · Submissions database</small></span></div></div></div>"
const c0_title = [
  {
    id: 5779,
    text: 'Send form responses to ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5780,
    text: 'Airtable',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 2016,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 2017,
    link: '/integrations/',
    text: 'Browse all integrations',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 232,
  text: 'Airtable',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5776,
    text: 'Your forms, filed in ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5777,
    text: 'Airtable',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 991,
    tag: 'Sync',
    tagColor: 'violet',
    title: 'Automatic base records',
    body: 'Every submission lands in your chosen Airtable base the moment it arrives.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 992,
    tag: 'Context',
    tagColor: 'blue',
    title: 'Data where work happens',
    body: 'Triage leads, requests, and feedback inside Airtable alongside your projects and tables.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 994,
    tag: 'Structure',
    tagColor: 'green',
    title: 'Fields become columns',
    body: 'Form fields map to Airtable columns, so views, filters, and rollups just work.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 993,
    tag: 'Collaboration',
    tagColor: 'amber',
    title: 'The whole team sees it',
    body: 'Anyone with base access can sort, assign, and act on new responses.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 397,
    title: 'Add Airtable from the Automate tab',
    description: 'Open your form, head to Automate → Integrations, find Airtable, and click Add integration.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'><span>Autoresponder</span><span style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Integrations</span><span>Webhooks</span></div><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'><img src='https://formester-strapi.s3.ap-south-1.amazonaws.com/airtable_logo_d278b0c038.png' alt='' style='width:20px;height:20px;object-fit:contain;'/><span style='font-size:12.5px;font-weight:700;color:#101828;'>Airtable</span></div><div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Automatically sync form submissions to a Airtable database.</div><div style='display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'><span style='color:#6434d0;font-weight:700;'>+ Add integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 398,
    title: 'Connect Airtable and map your fields',
    description:
      'Click Connect Airtable to authorize access, select your base and table, then map Airtable columns to your form questions. You can sync existing submissions too.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Airtable Integration</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Airtable Workspace</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'>Acme HQ<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Database</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'>Form Profiles<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Name</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Full name</span></div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Email</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Work email</span></div><div style='display:flex;justify-content:space-between;align-items:center;font-size:10.5px;color:#101828;margin:7px 0;'>Sync existing submissions<span style='width:26px;height:15px;border-radius:999px;background:#6434d0;position:relative;display:inline-block;'><span style='position:absolute;top:2px;right:2px;width:11px;height:11px;border-radius:50%;background:#fff;'></span></span></div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Save Integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 399,
    title: 'Publish and test',
    description: 'Publish the form and submit a test response — a new record appears in your base instantly.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>Entry added to Form Profiles</div></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_heading = []
const c4_testimonials = [
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
    id: 39,
    name: 'Alex',
    position: 'Customer Success Manager',
    organization: 'Orion Growth Partners',
    comment:
      "Tried like 4 quiz tools for our lead gen funnel before this and honestly this is the only one I didn't end up hating. AI did most of the work and the customization actually works.",
    createdAt: '2025-06-29T23:32:05.746Z',
    updatedAt: '2026-05-11T05:16:55.955Z',
    publishedAt: '2025-06-29T23:32:07.219Z',
    companyLogo: {
      id: 3647,
      imageAlt: 'logo of orion',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4092,
        name: 'logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x.png',
        alternativeText: null,
        caption: null,
        width: 200,
        height: 86,
        formats: null,
        hash: 'logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd',
        ext: '.png',
        mime: 'image/png',
        size: 3,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-29T17:02:25.502Z',
        updatedAt: '2025-10-29T17:02:25.502Z',
      },
    },
  },
  {
    id: 68,
    name: 'Deepika K',
    position: 'Business Development Executive',
    organization: null,
    comment:
      "Formester AI form builder has lots of customisation options. It's very easy to generate online forms. Forms generated are also very user friendly it supports both mobile and desktop version. It also allows us to build our own custom themes. File upload is also possible in surveys. I love the simplicity with which I can create forms within couple of minutes without any coding knowledge. The UI is very attractive and easy to use. No prior experience is required to use it.",
    createdAt: '2026-05-03T09:28:05.067Z',
    updatedAt: '2026-05-03T09:30:18.660Z',
    publishedAt: '2026-05-03T09:30:06.733Z',
    companyLogo: null,
  },
  {
    id: 67,
    name: ' Karthik B',
    position: 'Social Media Manager - B2C, SaaS, EdTech',
    organization: null,
    comment:
      "I use forms on a regular basis for surveys, research, lead collection and event RSVPs at my company. Formester offers a ton of features and my developer loves using it to integrate to various marketing pages. It's quick and easy to create using drag and drop like other builders. It allowed me remove branding unlike Typeform that has branding even in paid plans. Their support is top notch. They reply quickly for any query and also help in technical queries and troubleshooting. The analytics really helps me understand how to modify the form to get more submissions.",
    createdAt: '2026-05-03T09:26:54.899Z',
    updatedAt: '2026-05-03T09:30:36.457Z',
    publishedAt: '2026-05-03T09:30:36.453Z',
    companyLogo: null,
  },
  {
    id: 35,
    name: 'Roger',
    position: 'Marketing Specialist',
    organization: 'BrightPath Technologies',
    comment:
      'I use Formester for my form-building needs and I’m thoroughly impressed. The platform is rich with features… What really sets them apart is their exceptional customer service (responses typically within 10 minutes). The pricing is also very reasonable… Highly recommended!\n',
    createdAt: '2025-06-29T23:29:19.225Z',
    updatedAt: '2025-10-31T04:00:58.697Z',
    publishedAt: '2025-06-29T23:29:21.134Z',
    companyLogo: {
      id: 3649,
      imageAlt: 'brightpath-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4094,
        name: 'brightpath-logo.png',
        alternativeText: 'brightpath-logo',
        caption: 'brightpath-logo',
        width: 200,
        height: 49,
        formats: null,
        hash: 'brightpath_logo_6ef0922a60',
        ext: '.png',
        mime: 'image/png',
        size: 2.5,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/brightpath_logo_6ef0922a60.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-31T04:00:11.712Z',
        updatedAt: '2025-10-31T04:00:11.712Z',
      },
    },
  },
]
const c5_integrations = [
  {
    id: 430,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 431,
    name: 'Google Drive',
    description: 'Upload submission files and PDFs straight to a Drive folder you choose.',
    link: '/integrations/google-drive/',
  },
  {
    id: 433,
    name: 'Monday.com',
    description: 'Send form submissions to your Monday.com boards automatically.',
    link: '/integrations/monday/',
  },
  {
    id: 432,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
  {
    id: 434,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 435,
    name: 'Webhook',
    description: 'Send form data to any tool instantly using webhooks.',
    link: '/integrations/webhook/',
  },
]
const c6_title = [
  {
    id: 5778,
    text: 'Airtable integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 3503,
    header: 'What does the Airtable integration do?',
    body: 'It syncs form submissions to an Airtable base automatically — each response becomes a record with your form fields mapped to columns.',
    body_markdown: '',
    list: [],
  },
  {
    id: 3499,
    header: 'How do I connect Airtable?',
    body: "From your form's Automate tab, add the Airtable integration, authorize your account, pick the destination base and table, and publish.",
    body_markdown: '',
    list: [],
  },
  {
    id: 3501,
    header: 'Can different forms feed different bases?',
    body: 'Yes — the integration is configured per form, so each form can sync to its own base and table.',
    body_markdown: '',
    list: [],
  },
  {
    id: 3500,
    header: 'What if syncing stops?',
    body: 'Reconnect Airtable from the Automate tab. Your submissions always remain safely stored in Formester.',
    body_markdown: '',
    list: [],
  },
  {
    id: 3502,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 2014,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 2015,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Airtable Integration for Online Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/airtable/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-07-21T19:25:42.939Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Sync form submissions to Airtable bases automatically. Fields map to columns, no code — connect Formester to Airtable in minutes.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Airtable Integration for Online Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/airtable/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Airtable Integration for Online Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Sync form submissions to Airtable bases automatically. Fields map to columns, no code — connect Formester to Airtable in minutes.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Airtable integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/airtable/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Airtable Integration for Online Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Sync form submissions to Airtable bases automatically. Fields map to columns, no code — connect Formester to Airtable in minutes.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Airtable integration',
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
      content: ['airtable form integration', 'form to airtable base', 'sync forms with airtable', 'formester airtable'],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does the Airtable integration do?","acceptedAnswer":{"@type":"Answer","text":"It syncs form submissions to an Airtable base automatically — each response becomes a record with your form fields mapped to columns."}},{"@type":"Question","name":"How do I connect Airtable?","acceptedAnswer":{"@type":"Answer","text":"From your form\'s Automate tab, add the Airtable integration, authorize your account, pick the destination base and table, and publish."}},{"@type":"Question","name":"Can different forms feed different bases?","acceptedAnswer":{"@type":"Answer","text":"Yes — the integration is configured per form, so each form can sync to its own base and table."}},{"@type":"Question","name":"What if syncing stops?","acceptedAnswer":{"@type":"Answer","text":"Reconnect Airtable from the Automate tab. Your submissions always remain safely stored in Formester."}},{"@type":"Question","name":"What is Formester?","acceptedAnswer":{"@type":"Answer","text":"Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Integrations","item":"https://formester.com/integrations/"},{"@type":"ListItem","position":3,"name":"Airtable","item":"https://formester.com/integrations/airtable/"}]}',
  },
])
</script>
