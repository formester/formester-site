<template>
  <div>
    <HeroV2
      description="Connect Formester to Slack and every new submission posts straight to the channel or DM you choose — your team responds in minutes, not days."
      trustText="✓ Native integration · ✓ Channel or DM delivery · ✓ Minutes to set up"
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
      description="Stop checking dashboards. Submissions come to the place your team already talks."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect Slack in 4 steps"
      description="Connect once, then manage all your form notifications from the Formester app inside Slack."
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
      heading="Put form alerts where your team lives"
      description="Connect Slack in minutes and never miss a submission again."
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
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/slack.png' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>#new-leads · Slack</span></div><div style='padding:12px 14px;'><div style='font-size:10px;font-weight:700;color:#697586;margin-bottom:8px;'># new-leads</div><div style='display:flex;gap:9px;'><span style='width:30px;height:30px;border-radius:8px;background:#f0ebfa;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><img src='/formester-icon.svg' alt='' style='width:17px;'/></span><div style='flex:1;'><div style='font-size:11px;'><b style='color:#101828;'>Formester</b> <span style='font-size:9px;color:#98a2b3;'>APP · just now</span></div><div class='iw__anim' style='border:1px solid #eaecf0;border-left:3px solid #6434d0;border-radius:8px;padding:8px 11px;margin-top:6px;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:4px;'>New submission — Contact form</div><div style='font-size:10.5px;color:#475467;line-height:1.6;'>Name&nbsp;&nbsp;<b>Jonas Keller</b><br/>Email&nbsp;&nbsp;<b>jonas@verge.dev</b><br/>Plan&nbsp;&nbsp;<b>Team</b></div></div></div></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Message posted<small>just now · #new-leads</small></span></div></div></div>"
const c0_title = [
  {
    id: 5239,
    text: 'Get a ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5241,
    text: 'Slack',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5240,
    text: ' alert for every form submission',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1839,
    link: 'https://help.formester.com/en/article/slack-integration-aierxk/',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1838,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 179,
  text: 'Slack',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5237,
    text: 'Your team finds out ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5236,
    text: 'instantly',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 911,
    tag: 'Speed',
    tagColor: 'violet',
    title: 'Respond in minutes',
    body: "Leads, requests, and signups appear in Slack the moment they're submitted — faster follow-up wins deals.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 912,
    tag: 'Visibility',
    tagColor: 'blue',
    title: 'The whole team sees it',
    body: 'Post to a shared channel so nothing depends on one person checking an inbox.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 913,
    tag: 'Routing',
    tagColor: 'green',
    title: 'Channel or DM',
    body: "Send each form's alerts to the right channel — or straight to one person as a direct message.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 914,
    tag: 'Zero effort',
    tagColor: 'amber',
    title: 'No manual checking',
    body: 'No more refreshing the results page. Every submission announces itself.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 341,
    title: 'Add Slack from your dashboard',
    description: 'From your dashboard, open Integrations → Messaging, find Slack, and click Add integration.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'><span>All</span><span style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Messaging</span><span>CRM</span></div><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'><img src='/integrations/slack.png' alt='' style='width:20px;height:20px;object-fit:contain;'/><span style='font-size:12.5px;font-weight:700;color:#101828;'>Slack</span></div><div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Get instant channel alerts for every new submission.</div><div style='display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'><span style='color:#6434d0;font-weight:700;'>+ Add integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 339,
    title: 'Connect your Slack workspace',
    description:
      'Pick which Formester organization to connect, click Connect to Slack, and allow the Formester app access in Slack.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Choose an organization</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Organization</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'>Acme Inc's Organization<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Connect to Slack</span></div></div></div></div>",
    image: null,
  },
  {
    id: 338,
    title: 'Open the Formester app in Slack',
    description: 'In Slack, open the Formester app and go to Manage Notifications.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='display:flex;align-items:center;gap:8px;margin-bottom:9px;'><span style='width:22px;height:22px;border-radius:6px;background:#f0ebfa;display:inline-flex;align-items:center;justify-content:center;'><img src='/formester-icon.svg' alt='' style='width:13px;'/></span><span style='font-size:12px;font-weight:700;color:#101828;'>Formester</span><span style='font-size:8.5px;font-weight:700;color:#697586;background:#f2f4f7;border-radius:4px;padding:2px 5px;line-height:1;'>APP</span></div><div style='font-size:10.5px;font-weight:700;color:#101828;margin-bottom:7px;'>Manage Notifications</div><div style='display:flex;justify-content:space-between;align-items:center;border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;margin-bottom:8px;'>Contact form<span style='color:#697586;'>→&nbsp;# new-leads</span></div><span style='display:inline-flex;font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 14px;line-height:1;'>+ Add Notification</span></div></div></div>",
    image: null,
  },
  {
    id: 340,
    title: 'Add a notification',
    description:
      'Click Add Notification and answer two things: which form, and which chat or channel should receive its submissions. New responses post automatically from then on.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Add Notification</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Select form</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'>Contact form<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Send submissions to</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'># new-leads<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Add</span></div></div></div></div>",
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
    id: 294,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 295,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 296,
    name: 'HubSpot CRM',
    description: 'Push new form leads to HubSpot CRM instantly.',
    link: '/integrations/hubspot-crm/',
  },
  {
    id: 297,
    name: 'Webhook',
    description: 'Send form data to any tool instantly using webhooks.',
    link: '/integrations/webhook/',
  },
  {
    id: 298,
    name: 'Gmail',
    description: 'Send Gmail emails from your forms using your own address.',
    link: '/integrations/gmail/',
  },
  {
    id: 299,
    name: 'Monday.com',
    description: 'Send form submissions to your Monday.com boards automatically.',
    link: '/integrations/monday/',
  },
]
const c6_title = [
  {
    id: 5238,
    text: 'Slack integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2812,
    header: 'What does the Slack integration do?',
    body: 'It posts a message to a Slack channel or direct message of your choice every time someone submits your form, so your team can react immediately.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2808,
    header: 'How do I connect Slack to my form?',
    body: 'From your dashboard, open Integrations → Messaging and click Add integration under Slack. Choose your Formester organization, allow access in Slack, then open the Formester app inside Slack and add a notification — pick the form and the chat or channel that should receive it.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2809,
    header: 'Can I send different forms to different channels?',
    body: 'Yes — each notification pairs one form with a chat or channel, and you can add as many notifications as you need from the Formester app in Slack.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2810,
    header: 'What if alerts stop appearing?',
    body: "Check your notifications in the Formester app inside Slack, or reconnect the integration from your dashboard's Integrations page. Your submissions are always stored safely in Formester either way.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2811,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1836,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1837,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Slack Integration for Online Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/slack/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:17:10.523Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Get instant Slack alerts for every form submission. Post to any channel or DM, no code — connect Formester to Slack in about two minutes.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Slack Integration for Online Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/slack/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Slack Integration for Online Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Get instant Slack alerts for every form submission. Post to any channel or DM, no code — connect Formester to Slack in about two minutes.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Slack integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/slack/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Slack Integration for Online Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Get instant Slack alerts for every form submission. Post to any channel or DM, no code — connect Formester to Slack in about two minutes.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Slack integration',
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
        'slack form integration',
        'form submission slack notification',
        'slack alerts for forms',
        'formester slack',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the Slack integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It posts a message to a Slack channel or direct message of your choice every time someone submits your form, so your team can react immediately."}}, {"@type": "Question", "name": "How do I connect Slack to my form?", "acceptedAnswer": {"@type": "Answer", "text": "From your dashboard, open Integrations → Messaging and click Add integration under Slack. Choose your Formester organization, allow access in Slack, then open the Formester app inside Slack and add a notification — pick the form and the chat or channel that should receive it."}}, {"@type": "Question", "name": "Can I send different forms to different channels?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — each notification pairs one form with a chat or channel, and you can add as many notifications as you need from the Formester app in Slack."}}, {"@type": "Question", "name": "What if alerts stop appearing?", "acceptedAnswer": {"@type": "Answer", "text": "Check your notifications in the Formester app inside Slack, or reconnect the integration from your dashboard\'s Integrations page. Your submissions are always stored safely in Formester either way."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Slack", "item": "https://formester.com/integrations/slack/"}]}',
  },
])
</script>
