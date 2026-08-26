<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="✓ Native integration · ✓  No-code setup · ✓  Delta Lake ready"
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
      description="No CSV exports, no custom pipeline to maintain. Your responses land in a Delta table your data team can query right away."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect Databricks in 3 steps"
      description="Set up the workspace connection once. After that, every published form gets its own Delta table and writes responses on its own."
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
      heading="Stream your forms into Databricks today"
      description="Connect your workspace in minutes. Follow the step-by-step setup guide and start landing structured form data in your lakehouse automatically."
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
  'Connect Formester to Databricks and every submission lands in your lakehouse automatically — no manual exports, no staging scripts. Set it up in minutes and start querying live form data alongside the rest of your warehouse.'
const c0_mockupHtml =
  "<div class='raw-html-embed'>\u003Cstyle>\n.dbw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;}\n.dbw *{box-sizing:border-box;}\n.dbw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;}\n.dbw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;}\n.dbw__logo img{width:30px;height:30px;object-fit:contain;}\n.dbw__flow{display:flex;align-items:center;gap:5px;}\n.dbw__dot{width:6px;height:6px;border-radius:50%;background:#ff3621;opacity:.35;animation:dbwd 1.6s linear infinite;}\n.dbw__dot:nth-child(2){animation-delay:.2s}.dbw__dot:nth-child(3){animation-delay:.4s}\n@keyframes dbwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}\n.dbw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;}\n.dbw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;}\n.dbw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}\n.dbw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n.dbw__r{display:grid;grid-template-columns:34px 1.2fr 1.5fr .9fr;font-size:11.5px;color:#475467;border-bottom:1px solid #f2f4f7;}\n.dbw__r>span{padding:8px 11px;border-right:1px solid #f2f4f7;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n.dbw__r>span:first-child{background:#f9fafb;color:#98a2b3;text-align:center;font-weight:600;}\n.dbw__r>span:last-child{border-right:none;}\n.dbw__r--head>span{background:#fdeae7;color:#c4341d;font-weight:700;font-size:11px;}\n.dbw__r--head>span:first-child{background:#fdeae7;color:#c4341d;}\n.dbw__r--new>span{background:#fff6f4;color:#101828;}\n.dbw__r--new>span:first-child{color:#c4341d;}\n.dbw__r--new{animation:dbwnew 5s ease-in-out infinite;}\n@keyframes dbwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}}\n.dbw__tabs{display:flex;align-items:center;gap:7px;padding:7px 12px;background:#fff;border-top:1px solid #e7eaee;font-size:10px;color:#5f6368;}\n.dbw__path{display:inline-flex;align-items:center;gap:5px;color:#697586;}\n.dbw__path b{color:#1f2a50;font-weight:700;}\n.dbw__path .sep{color:#cbd2da;}\n.dbw__badge{margin-left:auto;display:inline-flex;align-items:center;gap:4px;background:#fdeae7;color:#c4341d;font-weight:700;font-size:9px;padding:3px 7px;border-radius:5px;}\n@media(max-width:600px){.dbw__toast{right:-4px !important;bottom:-30px !important;}}\n.dbw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:dbwnew 5s ease-in-out infinite;}\n.dbw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;}\n.dbw__tick{width:22px;height:22px;border-radius:7px;background:#ff3621;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}\n\u003C/style>\n<div class='dbw'>\n  <div class='dbw__pair'>\n    <span class='dbw__logo'><img src='/formester-icon.svg' alt='Formester'/></span>\n    <span class='dbw__flow'><span class='dbw__dot'></span><span class='dbw__dot'></span><span class='dbw__dot'></span></span>\n    <span class='dbw__logo'><img src='https://formester-strapi.s3.ap-south-1.amazonaws.com/Databricks_Logo_SVG_001_cb5d249917.svg' alt='Databricks'/></span>\n  </div>\n  <div class='dbw__win'>\n    <div class='dbw__bar'><span class='dbw__cdot' style='background:#ff6058'></span><span class='dbw__cdot' style='background:#ffbd2e'></span><span class='dbw__cdot' style='background:#27c93f'></span><span class='dbw__title'>Event Registrations · Databricks</span></div>\n    <div class='dbw__r dbw__r--head'><span></span><span>name</span><span>email</span><span>ticket</span></div>\n    <div class='dbw__r'><span>1</span><span>Priya Sharma</span><span>priya@lumen.co</span><span>Standard</span></div>\n    <div class='dbw__r'><span>2</span><span>Daniel Reyes</span><span>daniel@corewave.io</span><span>VIP</span></div>\n    <div class='dbw__r'><span>3</span><span>Mia Okafor</span><span>mia@habitat.org</span><span>Standard</span></div>\n    <div class='dbw__r dbw__r--new'><span>4</span><span>Jonas Keller</span><span>jonas@verge.dev</span><span>VIP</span></div>\n    <div class='dbw__tabs'><span class='dbw__path'>main<span class='sep'>/</span>forms<span class='sep'>/</span><b>form_responses</b></span><span class='dbw__badge'>▲ DELTA</span></div>\n  </div>\n  <div class='dbw__toast'><span class='dbw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>New row ingested<small>just now · row 4</small></span></div>\n</div></div>"
const c0_title = [
  {
    id: 5379,
    text: 'Stream form responses to ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5377,
    text: 'Databricks',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5378,
    text: ', in real time',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1932,
    link: 'https://docs.formester.com/databricks-integration.html',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
]
const c0_badge = {
  id: 203,
  text: 'Databricks',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5374,
    text: 'Your form data, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5375,
    text: 'query-ready in the lakehouse',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 978,
    tag: 'Real-time sync',
    tagColor: 'violet',
    title: 'Responses arrive as they come in',
    body: "Each submission is written to Databricks right after it's made, so the table reflects what's happening without a scheduled job.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 979,
    tag: 'Unified data',
    tagColor: 'blue',
    title: 'Query it next to everything else',
    body: 'Form data sits alongside your CRM, product, and billing tables, so you can report across all of it from one place.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 981,
    tag: 'Accuracy',
    tagColor: 'green',
    title: 'Clean, typed rows',
    body: 'Every submission becomes a structured row in Delta Lake, so you skip the schema drift that comes with hand-built CSV imports.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 980,
    tag: 'ML & BI',
    tagColor: 'amber',
    title: 'Ready for notebooks and BI',
    body: 'Use survey, lead, and feedback data directly in your notebooks, dashboards, and ML models.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 380,
    title: 'Add Databricks from the Automate tab',
    description:
      'Open your form, head to Automate → Integrations, find the Databricks card, and click Add integration.',
    rawHtml:
      "<div class='raw-html-embed'>\n    <div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'>\n        <div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'>\n            <span>Autoresponder</span><span\n                style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Integrations</span><span>Webhooks</span>\n        </div>\n        <div\n            style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'>\n            <div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'>\n                <img src='https://formester-strapi.s3.ap-south-1.amazonaws.com/Databricks_Logo_SVG_001_cb5d249917.svg' alt='' style='width:20px;height:20px;object-fit:contain;' />\n                <span\n                    style='font-size:12.5px;font-weight:700;color:#101828;'>Databricks</span></div>\n            <div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Streams your form data\n                into a Delta table in your lakehouse.</div>\n            <div\n                style='display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'>\n                <span style='color:#697586;text-decoration:underline;'>Watch Tutorial</span><span\n                    style='color:#6434d0;font-weight:700;'>+ Add integration</span></div>\n        </div>\n    </div>\n</div>\n",
    image: null,
  },
  {
    id: 379,
    title: 'Add your workspace and warehouse details',
    description:
      "In Databricks, open your SQL Warehouse's Connection details and copy the Workspace URL and SQL Warehouse ID. Then pick the Unity Catalog and schema where Formester should create tables, and paste all four into the panel.",
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:4px;'>Workspace URL<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>https://dbc-a1b2c3d4.cloud.databricks.com</div><div style='font-size:11px;font-weight:700;color:#101828;margin:9px 0 4px;'>SQL Warehouse ID<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;'>a7f93c2b1e8d04f6</div><div style='display:flex;gap:6px;margin-top:9px;'><div style='flex:1;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:4px;'>Unity Catalog<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#101828;'>main</div></div><div style='flex:1;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:4px;'>Schema<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#101828;'>forms</div></div></div></div></div>",
    image: null,
  },
  {
    id: 381,
    title: 'Add a service principal, then connect',
    description:
      'Create a service principal in Databricks with SQL and workspace access, generate an OAuth secret, and grant it privileges on your catalog. Paste the Client ID and secret into Formester and click Connect. From there, each published form gets its own table and new responses are added as rows.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:4px;'>Service Principal Client ID<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>8f2a1c9d-4b6e-47a3-9c21-d5e0a7b3f418</div><div style='font-size:11px;font-weight:700;color:#101828;margin:9px 0 4px;'>Client Secret<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;'>dose••••••••••••••••••••••••</div><div style='display:flex;align-items:center;gap:7px;font-size:10px;color:#0f6b3c;background:#e7f4ec;border-radius:7px;padding:7px 10px;margin:10px 0 11px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#0f6b3c' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg><span>ALL PRIVILEGES granted on <b>main</b></span></div><div style='display:flex;gap:8px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 18px;line-height:1;'>Connect</span><span style='font-size:10.5px;font-weight:600;color:#475467;border:1px solid #eaecf0;border-radius:7px;padding:7px 14px;line-height:1;'>Cancel</span></div></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_heading = []
const c4_testimonials = [
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
    id: 6,
    name: 'Thibaud Martinez',
    position: 'Organiser',
    organization: 'Tedx',
    comment: 'I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do.',
    createdAt: '2024-06-18T03:53:38.957Z',
    updatedAt: '2025-01-22T02:56:48.567Z',
    publishedAt: '2024-06-18T03:53:40.693Z',
    companyLogo: {
      id: 229,
      imageAlt: 'tedx-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 1684,
        name: 'tedx.webp',
        alternativeText: 'tedx-logo',
        caption: 'tedx-logo',
        width: 109,
        height: 38,
        formats: null,
        hash: 'tedx_2fce0eee2e',
        ext: '.webp',
        mime: 'image/webp',
        size: 1.09,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_2fce0eee2e.webp',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-08-01T14:38:23.941Z',
        updatedAt: '2024-12-01T07:50:31.505Z',
      },
    },
  },
]
const c5_integrations = [
  {
    id: 398,
    name: 'Slack',
    description: 'Get a Slack message in any channel the moment a form is submitted.',
    link: '/integrations/slack/',
  },
  {
    id: 399,
    name: 'Zapier',
    description: 'Send form responses to 5,000+ apps with automated Zapier workflows.',
    link: '/integrations/zapier/',
  },
  {
    id: 394,
    name: 'Hubspot CRM',
    description: 'Turn form submissions into HubSpot contacts and deals automatically.',
    link: '/integrations/hubspot-crm/',
  },
  {
    id: 395,
    name: 'Google Analytics',
    description: 'Track form views, starts, and completions in Google Analytics 4.',
    link: '/integrations/google-analytics/',
  },
  {
    id: 397,
    name: 'Webhook',
    description: 'Post every submission to any endpoint for custom workflows.',
    link: '/integrations/webhook/',
  },
  {
    id: 396,
    name: 'Stripe',
    description: 'Collect payments, donations, and subscriptions right in your forms.',
    link: '/integrations/stripe/',
  },
]
const c6_title = [
  {
    id: 5376,
    text: 'Databricks integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2942,
    header: 'What is a form builder for Databricks?',
    body: "A form builder that automatically streams responses into Databricks, so you don't have to build a pipeline by hand. Formester writes every submission straight into your chosen Delta table.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2941,
    header: 'How do I send form data to Databricks?',
    body: "Use Formester's Databricks integration to link your form to a table: open the form's Automate tab, choose Databricks, connect your workspace, and pick a catalog, schema, and table.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2943,
    header: 'Which plan is the Databricks integration on?',
    body: 'The Databricks integration is a Business plan feature. You can see what each plan includes on our pricing page.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2944,
    header: 'Does this write to Delta Lake?',
    body: 'Yes. Submissions are appended as structured rows to a Delta table in your Unity Catalog, ready to query in SQL or notebooks.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2945,
    header: 'Can I sync multiple forms to the same table?',
    body: 'Yes. You can connect multiple forms and route their responses into the same table or separate tables within the same schema.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2946,
    header: 'Can I sync submissions manually?',
    body: "Yes. Submissions sync automatically, but you can also run a manual sync whenever you need to push responses on demand or retry ones that didn't go through.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2947,
    header: 'Can I see why a sync failed?',
    body: 'Yes. The integration keeps sync logs, so you can see which submissions synced, which failed, and the reason each one failed, then retry them with a manual sync.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2950,
    header: 'What happens if I delete a row in Databricks?',
    body: "The submission stays safe in Formester, but it won't be restored in Databricks. Your Formester dashboard remains the source of truth.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2948,
    header: 'What if my form stops sending data to Databricks?',
    body: "Check the sync logs to see what failed and why, then run a manual sync to retry. If it keeps failing, reconnect the integration from the form's Automate tab, and contact our support team if you still need help.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2949,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Databricks, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1930,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1931,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Databricks Integration for Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/databricks/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-30T07:59:39.892Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Connect Formester to Databricks and stream form responses into Delta tables in real time. Set up your workspace once, then query submissions right in SQL.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Databricks Integration for Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/databricks/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Databricks Integration for Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Connect Formester to Databricks and stream form responses into Delta tables in real time. Set up your workspace once, then query submissions right in SQL.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Databricks integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/databricks/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Databricks Integration for Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Connect Formester to Databricks and stream form responses into Delta tables in real time. Set up your workspace once, then query submissions right in SQL.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Databricks integration',
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
        'databricks form integration',
        'send form responses to databricks',
        'form to delta table',
        'formester databricks',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a form builder for Databricks?", "acceptedAnswer": {"@type": "Answer", "text": "A form builder that automatically streams responses into Databricks, so you don\'t have to build a pipeline by hand. Formester writes every submission straight into your chosen Delta table."}}, {"@type": "Question", "name": "How do I send form data to Databricks?", "acceptedAnswer": {"@type": "Answer", "text": "Use Formester\'s Databricks integration to link your form to a table: open the form\'s Automate tab, choose Databricks, connect your workspace, and pick a catalog, schema, and table."}}, {"@type": "Question", "name": "Which plan is the Databricks integration on?", "acceptedAnswer": {"@type": "Answer", "text": "The Databricks integration is a Business plan feature. You can see what each plan includes on our pricing page."}}, {"@type": "Question", "name": "Does this write to Delta Lake?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Submissions are appended as structured rows to a Delta table in your Unity Catalog, ready to query in SQL or notebooks."}}, {"@type": "Question", "name": "Can I sync multiple forms to the same table?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can connect multiple forms and route their responses into the same table or separate tables within the same schema."}}, {"@type": "Question", "name": "Can I sync submissions manually?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Submissions sync automatically, but you can also run a manual sync whenever you need to push responses on demand or retry ones that didn\'t go through."}}, {"@type": "Question", "name": "Can I see why a sync failed?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The integration keeps sync logs, so you can see which submissions synced, which failed, and the reason each one failed, then retry them with a manual sync."}}, {"@type": "Question", "name": "What happens if I delete a row in Databricks?", "acceptedAnswer": {"@type": "Answer", "text": "The submission stays safe in Formester, but it won\'t be restored in Databricks. Your Formester dashboard remains the source of truth."}}, {"@type": "Question", "name": "What if my form stops sending data to Databricks?", "acceptedAnswer": {"@type": "Answer", "text": "Check the sync logs to see what failed and why, then run a manual sync to retry. If it keeps failing, reconnect the integration from the form\'s Automate tab, and contact our support team if you still need help."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Databricks, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Databricks", "item": "https://formester.com/integrations/databricks/"}]}',
  },
])
</script>
