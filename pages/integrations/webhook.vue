<template>
  <div>
    <HeroV2
      description="POST form events to any endpoint you choose and build exactly the workflow your stack needs."
      trustText="✓ Fires in real time · ✓ You pick the events · ✓ Works with any stack"
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
      description="If it has an HTTP endpoint, your forms can talk to it."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Set up a webhook in 3 steps"
      description="Set up once — every future submission triggers your workflow automatically."
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
      heading="Wire your forms into your own stack"
      description="Create a webhook in minutes and route form data exactly where you need it."
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

const c0_mockupHtml =
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;} .iw{max-width:400px;} .whf{background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 6px 18px rgba(15,14,26,.08);padding:12px 14px 13px;margin-bottom:8px;} .whf__l{font-size:9.5px;font-weight:600;color:#344054;margin:0 0 3px;} .whf__f{border:1px solid #d0d5dd;border-radius:8px;padding:6px 10px;font-size:10.5px;color:#101828;margin-bottom:8px;line-height:1.2;} .whf__btn{position:relative;display:flex;width:100%;align-items:center;justify-content:center;border-radius:8px;padding:6px 0;font-size:10.5px;font-weight:700;color:#fff;overflow:hidden;animation:whbg 7s ease-in-out infinite;} .whf__btn .b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:4px;animation:whb2 7s ease-in-out infinite;} .whf__btn .a{animation:whb1 7s ease-in-out infinite;} @keyframes whbg{0%,12%{background:#6434d0}16%,90%{background:#11c15b}94%,100%{background:#6434d0}} @keyframes whb1{0%,12%{opacity:1}16%,90%{opacity:0}94%,100%{opacity:1}} @keyframes whb2{0%,12%{opacity:0}16%,90%{opacity:1}94%,100%{opacity:0}} .whp{animation:whp 7s ease-in-out infinite;} @keyframes whp{0%,20%{opacity:0;transform:translateY(8px)}28%,90%{opacity:1;transform:none}96%,100%{opacity:0}} .iw .iw__toast{animation:whp 7s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/webhook.svg' alt=''/></span></div><div class='whf'><div class='whf__l'>Full name</div><div class='whf__f'>Jonas Keller</div><div class='whf__l'>Work email</div><div class='whf__f'>jonas@verge.dev</div><span class='whf__btn'><span class='a'>Submit</span><span class='b'><svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>Submitted</span></span></div><div style='display:flex;justify-content:center;margin-bottom:8px;'><span class='iw__flow' style='flex-direction:column;gap:4px;'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>POST /hooks/formester</span></div><div style='background:#101828;'><div style='padding:7px 13px;font-size:9.5px;color:#94a3b8;border-bottom:1px solid #1f2a3d;'>POST https://api.yourapp.com/hooks/formester</div><pre class='whp' style='margin:0;padding:9px 13px;font-size:10px;line-height:1.55;color:#e2e8f0;font-family:ui-monospace,monospace;white-space:pre-wrap;'>{\n  \"event\": \"Submission.Created\",\n  \"name\": \"Jonas Keller\",\n  \"email\": \"jonas@verge.dev\"\n}</pre><div class='whp' style='padding:0 13px 9px;'><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;line-height:1;'>200 OK · 84 ms</span></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Webhook delivered<small>just now · 200 OK</small></span></div></div></div>"
const c0_title = [
  {
    id: 5258,
    text: 'Send form data anywhere with ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5259,
    text: 'webhooks',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1850,
    link: 'https://help.formester.com/en/article/webhook-integration-16fqoqp/',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1851,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 182,
  text: 'Webhooks',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5256,
    text: 'The integration that speaks to ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5255,
    text: 'everything',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 925,
    tag: 'Universal',
    tagColor: 'violet',
    title: 'Any tool, any stack',
    body: 'Internal APIs, serverless functions, n8n, Make — webhooks connect your forms to all of it.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 926,
    tag: 'Triggers',
    tagColor: 'blue',
    title: 'Only the events you want',
    body: 'Choose which submission events fire the webhook — and skip the rest.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 923,
    tag: 'Real time',
    tagColor: 'green',
    title: 'Instant delivery',
    body: 'The payload posts the moment the event happens — no polling, no delays.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 924,
    tag: 'Developer-friendly',
    tagColor: 'amber',
    title: 'Clean JSON payloads',
    body: 'Your endpoint receives structured form data ready to parse and route.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 348,
    title: 'Open Webhooks in the Automate tab',
    description: 'Open your form, head to Automate → Webhooks, and click Add Webhook.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:12px 14px;'><div style='display:flex;align-items:center;justify-content:space-between;gap:10px;'><span style='font-size:12.5px;font-weight:700;color:#101828;'>Webhooks</span><span style='display:inline-flex;align-items:center;font-size:10px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 12px;line-height:1;white-space:nowrap;'>+ Add Webhook</span></div></div></div></div>",
    image: null,
  },
  {
    id: 350,
    title: 'Paste your endpoint and pick events',
    description: 'Paste the endpoint URL from your target service and tick the events you want to listen to.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Add Webhook</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Endpoint Url<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>https://api.yourapp.com/hooks</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:9px 0 5px;'>Select Event To Listen To</div><div style='display:flex;align-items:center;gap:7px;font-size:10.5px;color:#101828;margin:5px 0;'><span style='width:13px;height:13px;border-radius:4px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='9' height='9' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span>Created [Submission.Created]</div><div style='display:flex;align-items:center;gap:7px;font-size:10.5px;color:#475467;margin:5px 0;'><span style='width:13px;height:13px;border-radius:4px;border:1.5px solid #cdd5df;flex-shrink:0;'></span>Updated [Submission.Updated]</div><div style='display:flex;align-items:center;gap:7px;font-size:10.5px;color:#475467;margin:5px 0;'><span style='width:13px;height:13px;border-radius:4px;border:1.5px solid #cdd5df;flex-shrink:0;'></span>Deleted [Submission.Deleted]</div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Add Webhook</span></div></div></div></div>",
    image: null,
  },
  {
    id: 349,
    title: 'Publish and test',
    description:
      'Publish the form and use Test Webhook or submit a response in preview — your endpoint receives the payload instantly.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>200 OK · payload delivered</div></div></div>",
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
    id: 315,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 312,
    name: 'n8n',
    description: 'Control how your form data moves between apps with full flexibility.',
    link: '/integrations/n8n/',
  },
  {
    id: 314,
    name: 'Pabbly Connect',
    description: 'Automate tasks and move form data without doing it manually.',
    link: '/integrations/pabbly-connect/',
  },
  {
    id: 313,
    name: 'Ottokit (Formerly SureTriggers)',
    description: 'Automate your form workflows using Ottokit.',
    link: '/integrations/ottokit/',
  },
  {
    id: 316,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 317,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
]
const c6_title = [
  {
    id: 5257,
    text: 'Webhooks integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2826,
    header: 'What does the webhook integration do?',
    body: 'It sends form data to any URL you choose the moment a submission is created, updated, or deleted — so you can connect Formester to virtually any tool or internal system.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2824,
    header: 'How do I create a webhook?',
    body: "Open the form's Automate tab → Webhooks → Add Webhook, paste your endpoint URL, select the events to listen to, save, and publish.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2825,
    header: 'What events can trigger a webhook?',
    body: 'Three event types — Submission Created, Submission Updated, and Submission Deleted — and you can listen to any combination of them.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2828,
    header: 'What if my endpoint goes down?',
    body: 'Submissions are always stored safely in Formester first — fix the endpoint and future events will deliver again.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2827,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1848,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1849,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Webhook Integration for Online Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/webhook/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:17:24.079Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'POST form submissions to any endpoint in real time. Created/updated/deleted triggers, clean JSON — connect your forms to any stack.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Webhook Integration for Online Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/webhook/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Webhook Integration for Online Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'POST form submissions to any endpoint in real time. Created/updated/deleted triggers, clean JSON — connect your forms to any stack.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Webhook integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/webhook/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Webhook Integration for Online Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'POST form submissions to any endpoint in real time. Created/updated/deleted triggers, clean JSON — connect your forms to any stack.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Webhook integration',
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
        'form webhook integration',
        'webhook on form submission',
        'send form data to api',
        'formester webhooks',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the webhook integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It sends form data to any URL you choose the moment a submission is created, updated, or deleted — so you can connect Formester to virtually any tool or internal system."}}, {"@type": "Question", "name": "How do I create a webhook?", "acceptedAnswer": {"@type": "Answer", "text": "Open the form\'s Automate tab → Webhooks → Add Webhook, paste your endpoint URL, select the events to listen to, save, and publish."}}, {"@type": "Question", "name": "What events can trigger a webhook?", "acceptedAnswer": {"@type": "Answer", "text": "Three event types — Submission Created, Submission Updated, and Submission Deleted — and you can listen to any combination of them."}}, {"@type": "Question", "name": "What if my endpoint goes down?", "acceptedAnswer": {"@type": "Answer", "text": "Submissions are always stored safely in Formester first — fix the endpoint and future events will deliver again."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Webhook", "item": "https://formester.com/integrations/webhook/"}]}',
  },
])
</script>
