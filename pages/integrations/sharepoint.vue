<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="✓ Native integration · ✓  No-code setup · ✓  Excel &amp; Lists"
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
      description="No CSV exports and no Power Automate flow to maintain. Responses land in the workbook or list your team already opens every day."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect SharePoint in 3 steps"
      :description="c3_description"
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
      heading="Send your form responses to SharePoint today"
      description="Connect your Microsoft account in minutes and start writing submissions to Excel workbooks and SharePoint Lists automatically."
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
  'Connect Formester to SharePoint and every submission lands where your team already works — an Excel workbook in a document library, or a SharePoint List. Set it up in minutes, then stop exporting CSVs by hand.'
const c0_mockupHtml =
  "<div class='raw-html-embed'>\u003Cstyle>\n.dbw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;}\n.dbw *{box-sizing:border-box;}\n.dbw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;}\n.dbw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;}\n.dbw__logo img{width:30px;height:30px;object-fit:contain;}\n.dbw__flow{display:flex;align-items:center;gap:5px;}\n.dbw__dot{width:6px;height:6px;border-radius:50%;background:#038387;opacity:.35;animation:dbwd 1.6s linear infinite;}\n.dbw__dot:nth-child(2){animation-delay:.2s}.dbw__dot:nth-child(3){animation-delay:.4s}\n@keyframes dbwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}\n.dbw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;}\n.dbw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;}\n.dbw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}\n.dbw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n.dbw__r{display:grid;grid-template-columns:34px 1.2fr 1.5fr .9fr;font-size:11.5px;color:#475467;border-bottom:1px solid #f2f4f7;}\n.dbw__r>span{padding:8px 11px;border-right:1px solid #f2f4f7;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n.dbw__r>span:first-child{background:#f9fafb;color:#98a2b3;text-align:center;font-weight:600;}\n.dbw__r>span:last-child{border-right:none;}\n.dbw__r--head>span{background:#dff1f1;color:#036c70;font-weight:700;font-size:11px;}\n.dbw__r--head>span:first-child{background:#dff1f1;color:#036c70;}\n.dbw__r--new>span{background:#f3fafa;color:#101828;}\n.dbw__r--new>span:first-child{color:#036c70;}\n.dbw__r--new{animation:dbwnew 5s ease-in-out infinite;}\n@keyframes dbwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}}\n.dbw__tabs{display:flex;align-items:center;gap:7px;padding:7px 12px;background:#fff;border-top:1px solid #e7eaee;font-size:10px;color:#5f6368;}\n.dbw__path{display:inline-flex;align-items:center;gap:5px;color:#697586;}\n.dbw__path b{color:#1f2a50;font-weight:700;}\n.dbw__path .sep{color:#cbd2da;}\n.dbw__badge{margin-left:auto;display:inline-flex;align-items:center;gap:4px;background:#dff1f1;color:#036c70;font-weight:700;font-size:9px;padding:3px 7px;border-radius:5px;}\n@media(max-width:600px){.dbw__toast{right:-4px !important;bottom:-30px !important;}}\n.dbw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:dbwnew 5s ease-in-out infinite;}\n.dbw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;}\n.dbw__tick{width:22px;height:22px;border-radius:7px;background:#038387;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}\n\u003C/style>\n<div class='dbw'>\n  <div class='dbw__pair'>\n    <span class='dbw__logo'><img src='/formester-icon.svg' alt='Formester'/></span>\n    <span class='dbw__flow'><span class='dbw__dot'></span><span class='dbw__dot'></span><span class='dbw__dot'></span></span>\n    <span class='dbw__logo'><svg width='30' height='30' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><circle cx='13' cy='9' r='7.2' fill='#036C70'/><circle cx='21' cy='15.5' r='6.6' fill='#1A9BA1'/><circle cx='15' cy='23' r='5.8' fill='#37C6D0'/><rect x='6' y='11' width='13.5' height='13.5' rx='1.6' fill='#03787C'/><text x='12.75' y='21' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-size='10.5' font-weight='700' fill='#ffffff'>S</text></svg></span>\n  </div>\n  <div class='dbw__win'>\n    <div class='dbw__bar'><span class='dbw__cdot' style='background:#ff6058'></span><span class='dbw__cdot' style='background:#ffbd2e'></span><span class='dbw__cdot' style='background:#27c93f'></span><span class='dbw__title'>Event Registrations &middot; SharePoint</span></div>\n    <div class='dbw__r dbw__r--head'><span></span><span>name</span><span>email</span><span>ticket</span></div>\n    <div class='dbw__r'><span>1</span><span>Priya Sharma</span><span>priya@lumen.co</span><span>Standard</span></div>\n    <div class='dbw__r'><span>2</span><span>Daniel Reyes</span><span>daniel@corewave.io</span><span>VIP</span></div>\n    <div class='dbw__r'><span>3</span><span>Mia Okafor</span><span>mia@habitat.org</span><span>Standard</span></div>\n    <div class='dbw__r dbw__r--new'><span>4</span><span>Jonas Keller</span><span>jonas@verge.dev</span><span>VIP</span></div>\n    <div class='dbw__tabs'><span class='dbw__path'>Communication site<span class='sep'>/</span>Lists<span class='sep'>/</span><b>form_responses</b></span><span class='dbw__badge'>&#9635; LIST</span></div>\n  </div>\n  <div class='dbw__toast'><span class='dbw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>New item created<small>just now &middot; item 4</small></span></div>\n</div></div>"
const c0_title = [
  {
    id: 5794,
    text: 'Send form responses to ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5792,
    text: 'Microsoft SharePoint',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5793,
    text: ', automatically',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 2024,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
]
const c0_badge = {
  id: 234,
  text: 'SharePoint',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5789,
    text: 'Your form data, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5790,
    text: 'organized inside SharePoint',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 999,
    tag: 'Two destinations',
    tagColor: 'violet',
    title: 'Add rows to a SharePoint List or Excel workbook',
    body: 'Write submissions to a workbook in any document library, or add them as items in a SharePoint List — whichever your team works in.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 1000,
    tag: 'Real-time sync',
    tagColor: 'blue',
    title: 'Rows appear as responses come in',
    body: "Each submission is sent right after it's made, so the workbook or list stays current without a scheduled export.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 1001,
    tag: 'Column mapping',
    tagColor: 'green',
    title: 'Map fields to columns your way',
    body: "Match every SharePoint column to a form field. Values are converted to the column's type, and anything that doesn't fit is left blank instead of dropping the row.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 1002,
    tag: 'Microsoft 365',
    tagColor: 'amber',
    title: 'Ready for Excel, Power BI and Teams',
    body: 'Because the data sits in SharePoint, it inherits the permissions your organization already uses and opens straight into the rest of Microsoft 365.',
    mockHtml: null,
    icon: null,
  },
]
const c3_description =
  "Connect your Microsoft account once — there's no Power Automate flow to build. After that, choose where each form should write and its responses show up in SharePoint on their own."
const c3_steps = [
  {
    id: 403,
    title: 'Add SharePoint from the Automate tab',
    description:
      'Open your form, head to Automate → Integrations, find the SharePoint card, and click Add integration.',
    rawHtml:
      "<div class='raw-html-embed'>\n    <div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'>\n        <div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'>\n            <span>Autoresponder</span><span\n                style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Integrations</span><span>Webhooks</span>\n        </div>\n        <div\n            style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'>\n            <div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'>\n                <svg width='20' height='20' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><circle cx='13' cy='9' r='7.2' fill='#036C70'/><circle cx='21' cy='15.5' r='6.6' fill='#1A9BA1'/><circle cx='15' cy='23' r='5.8' fill='#37C6D0'/><rect x='6' y='11' width='13.5' height='13.5' rx='1.6' fill='#03787C'/><text x='12.75' y='21' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-size='10.5' font-weight='700' fill='#ffffff'>S</text></svg>\n                <span\n                    style='font-size:12.5px;font-weight:700;color:#101828;'>SharePoint</span></div>\n            <div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Sends your form responses to an Excel workbook or a SharePoint List.</div>\n            <div\n                style='display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'>\n                <span style='color:#697586;text-decoration:underline;'>Watch Tutorial</span><span\n                    style='color:#6434d0;font-weight:700;'>+ Add integration</span></div>\n        </div>\n    </div>\n</div>\n",
    image: null,
  },
  {
    id: 404,
    title: 'Connect your Microsoft account and pick a site',
    description:
      "Select a connected Microsoft account or add a new one, then search for your SharePoint site by name — or paste a site URL if you don't see it listed.",
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;margin:0 0 4px;'>Microsoft Account<span style='color:#e02b2b;'>*</span></div><div style='font-size:9.5px;color:#98a2b3;margin-bottom:5px;'>Select a connected account or add a new one.</div><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Formester Support</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div><div style='font-size:11px;font-weight:700;color:#101828;margin:11px 0 4px;'>SharePoint Site<span style='color:#e02b2b;'>*</span></div><div style='font-size:9.5px;color:#98a2b3;margin-bottom:5px;'>Search by name, or paste a site URL if you don't see it listed.</div><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Communication site</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div><div style='display:flex;justify-content:flex-end;margin-top:12px;'><span style='background:#6434d0;color:#fff;font-size:10px;font-weight:700;border-radius:7px;padding:7px 12px;'>Connect</span></div></div></div>",
    image: null,
  },
  {
    id: 405,
    title: 'Choose a destination, then map your columns',
    description:
      'Send submissions to an Excel workbook in a document library, or to a SharePoint List. Use an existing one or create a new one, map each column to a form field, and click Update integration. New responses are added from then on.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;margin:0 0 4px;'>Destination</div><div style='font-size:9.5px;color:#98a2b3;margin-bottom:5px;'>Send submissions to an Excel workbook or a SharePoint List.</div><div style='margin-bottom:10px;'><span style='display:inline-flex;align-items:center;gap:5px;font-size:10.5px;color:#101828;margin-right:14px;'><span style='width:11px;height:11px;border-radius:50%;border:1.5px solid #cbd2da;display:inline-flex;align-items:center;justify-content:center;'></span>Excel workbook</span><span style='display:inline-flex;align-items:center;gap:5px;font-size:10.5px;color:#101828;margin-right:14px;'><span style='width:11px;height:11px;border-radius:50%;border:1.5px solid #6434d0;display:inline-flex;align-items:center;justify-content:center;'><span style='width:5px;height:5px;border-radius:50%;background:#6434d0;'></span></span>SharePoint List</span></div><div style='font-size:11px;font-weight:700;color:#101828;margin:0 0 4px;'>SharePoint List<span style='color:#e02b2b;'>*</span></div><div style='margin-bottom:6px;'><span style='display:inline-flex;align-items:center;gap:5px;font-size:10.5px;color:#101828;margin-right:14px;'><span style='width:11px;height:11px;border-radius:50%;border:1.5px solid #6434d0;display:inline-flex;align-items:center;justify-content:center;'><span style='width:5px;height:5px;border-radius:50%;background:#6434d0;'></span></span>Use existing</span><span style='display:inline-flex;align-items:center;gap:5px;font-size:10.5px;color:#101828;margin-right:14px;'><span style='width:11px;height:11px;border-radius:50%;border:1.5px solid #cbd2da;display:inline-flex;align-items:center;justify-content:center;'></span>Create new</span></div><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Contact LIst</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div><div style='font-size:11px;font-weight:700;color:#101828;margin:11px 0 4px;'>Column Mapping</div><div style='display:flex;justify-content:space-between;font-size:9.5px;color:#98a2b3;margin-bottom:4px;'><span>SharePoint Column</span><span>Form Field</span></div><div style='display:flex;align-items:center;gap:6px;margin-bottom:5px;'><div style='flex:1;'><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Full Name</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div></div><span style='color:#cbd2da;font-size:10px;'>&mdash;</span><div style='flex:1;'><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Full Name</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div></div></div><div style='display:flex;align-items:center;gap:6px;margin-bottom:5px;'><div style='flex:1;'><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Email</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div></div><span style='color:#cbd2da;font-size:10px;'>&mdash;</span><div style='flex:1;'><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Email</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div></div></div><div style='display:flex;align-items:center;gap:6px;margin-bottom:5px;'><div style='flex:1;'><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Time Taken</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div></div><span style='color:#cbd2da;font-size:10px;'>&mdash;</span><div style='flex:1;'><div style='display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#475467;'><span style='white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>Time Taken</span><span style='color:#98a2b3;font-size:8px;'>&#9662;</span></div></div></div><div style='display:flex;justify-content:space-between;align-items:center;margin-top:11px;'><span style='color:#6434d0;font-size:10px;font-weight:700;'>+ Add Column</span><span style='background:#6434d0;color:#fff;font-size:10px;font-weight:700;border-radius:7px;padding:7px 12px;'>Update Integration</span></div></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_heading = []
const c4_testimonials = [
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
]
const c5_integrations = [
  {
    id: 447,
    name: 'Slack',
    description: 'Get a Slack message in any channel the moment a form is submitted.',
    link: '/integrations/slack/',
  },
  {
    id: 444,
    name: 'Zapier',
    description: 'Send form responses to 5,000+ apps with automated Zapier workflows.',
    link: '/integrations/zapier/',
  },
  {
    id: 442,
    name: 'Hubspot CRM',
    description: 'Turn form submissions into HubSpot contacts and deals automatically.',
    link: '/integrations/hubspot-crm/',
  },
  {
    id: 443,
    name: 'Google Analytics',
    description: 'Track form views, starts, and completions in Google Analytics 4.',
    link: '/integrations/google-analytics/',
  },
  {
    id: 445,
    name: 'Webhook',
    description: 'Post every submission to any endpoint for custom workflows.',
    link: '/integrations/webhook/',
  },
  {
    id: 446,
    name: 'Stripe',
    description: 'Collect payments, donations, and subscriptions right in your forms.',
    link: '/integrations/stripe/',
  },
]
const c6_title = [
  {
    id: 5791,
    text: 'SharePoint integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 3511,
    header: 'What is a form builder for SharePoint?',
    body: 'A form builder that sends responses into SharePoint for you, with no Power Automate flow or manual export. Formester writes every submission to the Excel workbook or SharePoint List you pick.',
    body_markdown: '',
    list: [],
  },
  {
    id: 3512,
    header: 'How do I send form responses to SharePoint?',
    body: "Open your form's Automate tab, choose SharePoint, connect your Microsoft account, select the site, and then choose an Excel workbook or a SharePoint List as the destination.",
    body_markdown: '',
    list: [],
  },
  {
    id: 3516,
    header: 'How do I connect a form to a SharePoint list?',
    body: "In your form's Automate tab, add the SharePoint integration, connect your Microsoft account and pick the site. Choose SharePoint List as the destination, select an existing list or create a new one, and map its columns to your form fields.",
    body_markdown: '',
    list: [],
  },
  {
    id: 3518,
    header: 'Do I need Power Automate to send form responses to SharePoint?',
    body: "No. Formester writes to SharePoint directly, so there's no Power Automate flow or custom script to build and maintain.",
    body_markdown: '',
    list: [],
  },
  {
    id: 3509,
    header: 'Can I send submissions to an Excel workbook?',
    body: 'Yes. Choose a document library, use an existing workbook or create a new one, and set the worksheet name your submissions are written to.',
    body_markdown: '',
    list: [],
  },
  {
    id: 3515,
    header: 'How does column mapping work?',
    body: "You match each SharePoint column to a form field. Values are converted to the column's type, and anything that doesn't fit is left blank — the row is never dropped.",
    body_markdown: '',
    list: [],
  },
  {
    id: 3519,
    header: 'Can I use this instead of Microsoft Forms?',
    body: 'Yes. If you want more from your forms than Microsoft Forms offers but still want the data to live in SharePoint, build the form in Formester and send its responses to a list or workbook on your site.',
    body_markdown: '',
    list: [],
  },
  {
    id: 3510,
    header: 'Can I connect more than one form to the same list or workbook?',
    body: 'Yes. You can connect several forms and point them at the same destination, or give each form its own workbook or list.',
    body_markdown: '',
    list: [],
  },
  {
    id: 3513,
    header: 'Which plan includes the SharePoint integration?',
    body: 'Its completely free to use.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 2022,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 2023,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Microsoft SharePoint Form Integration | Excel & Lists | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/sharepoint/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-07-31T17:09:42.982Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Send form responses to Microsoft SharePoint automatically — into an Excel workbook or a SharePoint List. Native integration, no Power Automate flow needed.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Microsoft SharePoint Form Integration | Excel & Lists | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/sharepoint/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Microsoft SharePoint Form Integration | Excel & Lists | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Send form responses to Microsoft SharePoint automatically — into an Excel workbook or a SharePoint List. Native integration, no Power Automate flow needed.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester SharePoint integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/sharepoint/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Microsoft SharePoint Form Integration | Excel & Lists | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Send form responses to Microsoft SharePoint automatically — into an Excel workbook or a SharePoint List. Native integration, no Power Automate flow needed.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester SharePoint integration',
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
        'sharepoint form integration',
        'send form responses to sharepoint',
        'form to sharepoint list',
        'formester sharepoint',
        'microsoft sharepoint form integration',
        'sharepoint form builder',
        'save form responses to sharepoint list',
        'save form responses to excel in sharepoint',
        'form to sharepoint list without power automate',
        'microsoft forms to sharepoint list alternative',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a form builder for SharePoint?","acceptedAnswer":{"@type":"Answer","text":"A form builder that sends responses into SharePoint for you, with no Power Automate flow or manual export. Formester writes every submission to the Excel workbook or SharePoint List you pick."}},{"@type":"Question","name":"How do I send form responses to SharePoint?","acceptedAnswer":{"@type":"Answer","text":"Open your form\'s Automate tab, choose SharePoint, connect your Microsoft account, select the site, and then choose an Excel workbook or a SharePoint List as the destination."}},{"@type":"Question","name":"How do I connect a form to a SharePoint list?","acceptedAnswer":{"@type":"Answer","text":"In your form\'s Automate tab, add the SharePoint integration, connect your Microsoft account and pick the site. Choose SharePoint List as the destination, select an existing list or create a new one, and map its columns to your form fields."}},{"@type":"Question","name":"Do I need Power Automate to send form responses to SharePoint?","acceptedAnswer":{"@type":"Answer","text":"No. Formester writes to SharePoint directly, so there\'s no Power Automate flow or custom script to build and maintain."}},{"@type":"Question","name":"Can I send submissions to an Excel workbook?","acceptedAnswer":{"@type":"Answer","text":"Yes. Choose a document library, use an existing workbook or create a new one, and set the worksheet name your submissions are written to."}},{"@type":"Question","name":"How do I save form responses to Excel in SharePoint?","acceptedAnswer":{"@type":"Answer","text":"Pick Excel workbook as the destination, choose the document library that holds it, select the workbook, and set the worksheet name. Each new response is added as a row in that sheet."}},{"@type":"Question","name":"Can I write to a SharePoint List instead?","acceptedAnswer":{"@type":"Answer","text":"Yes. Pick SharePoint List as the destination, use an existing list or create a new one, and map each list column to a form field."}},{"@type":"Question","name":"How does column mapping work?","acceptedAnswer":{"@type":"Answer","text":"You match each SharePoint column to a form field. Values are converted to the column\'s type, and anything that doesn\'t fit is left blank — the row is never dropped."}},{"@type":"Question","name":"Can I use this instead of Microsoft Forms?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you want more from your forms than Microsoft Forms offers but still want the data to live in SharePoint, build the form in Formester and send its responses to a list or workbook on your site."}},{"@type":"Question","name":"Can I connect more than one form to the same list or workbook?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can connect several forms and point them at the same destination, or give each form its own workbook or list."}},{"@type":"Question","name":"Which plan includes the SharePoint integration?","acceptedAnswer":{"@type":"Answer","text":"You can see which plans include the SharePoint integration on our pricing page."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://formester.com/"},{"@type":"ListItem","position":2,"name":"Integrations","item":"https://formester.com/integrations/"},{"@type":"ListItem","position":3,"name":"SharePoint","item":"https://formester.com/integrations/sharepoint/"}]}',
  },
])
</script>
