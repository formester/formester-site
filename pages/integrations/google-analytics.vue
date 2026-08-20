<template>
  <div>
    <HeroV2
      description="Send form submissions to GA4 as key events, so you can measure conversions, see which campaigns drive leads, and optimize what actually works."
      trustText="✓ GA4 key events · ✓ Works with Google Tag Manager · ✓ Campaign attribution"
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
      description="Form submissions become measurable GA4 events with full attribution."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect GA4 in 3 steps"
      description="Runs through Google Tag Manager — connect the container, add the tag, mark the key event."
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
      heading="Measure your forms like a marketer"
      description="Connect GA4 and turn every submission into attribution data you can act on."
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
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;} .iw *{animation:none !important;} .iw__dot{opacity:.7;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/analytics.svg' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>Events · GA4</span></div><div><div style='padding:9px 14px;font-size:10px;font-weight:700;color:#697586;border-bottom:1px solid #f2f4f7;'>Events · last 7 days</div><div style='padding:7px 14px;border-bottom:1px solid #f2f4f7;'><div style='display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;'><span style='color:#101828;font-weight:600;'>form_view</span><span style='color:#697586;'>1,284</span></div><div style='height:5px;border-radius:3px;background:#f2f4f7;'><div style='height:5px;border-radius:3px;width:100%;background:#6434d0;'></div></div></div><div style='padding:7px 14px;border-bottom:1px solid #f2f4f7;'><div style='display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;'><span style='color:#101828;font-weight:600;'>form_start</span><span style='color:#697586;'>612</span></div><div style='height:5px;border-radius:3px;background:#f2f4f7;'><div style='height:5px;border-radius:3px;width:52%;background:#6434d0;'></div></div></div><div style='padding:7px 14px;border-bottom:1px solid #f2f4f7;'><div style='display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;'><span style='color:#101828;font-weight:600;'>form_submission <span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#6434d0;background:#f0ebfa;border-radius:999px;padding:3px 9px;line-height:1;'>Key event</span></span><span style='color:#697586;'>318</span></div><div style='height:5px;border-radius:3px;background:#f2f4f7;'><div style='height:5px;border-radius:3px;width:28%;background:#6434d0;'></div></div></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Key event recorded<small>just now · form_submission</small></span></div></div></div>"
const c0_title = [
  {
    id: 5159,
    text: 'Track every form conversion in ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5158,
    text: 'Google Analytics',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1782,
    link: 'https://help.formester.com/en/article/connect-to-google-analytics-ga4-16a8ewf/',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1783,
    link: 'https://youtu.be/cdZzx_KMHgE',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 165,
  text: 'Google Analytics',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5156,
    text: 'Know which campaigns ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5155,
    text: 'actually convert',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 855,
    tag: 'Attribution',
    tagColor: 'violet',
    title: 'See where leads come from',
    body: 'Tie every submission back to its source, medium, and campaign in GA4.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 856,
    tag: 'Conversions',
    tagColor: 'blue',
    title: 'Key events in GA4',
    body: 'Mark form_submission as a key event and measure conversion rates like any other goal.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 857,
    tag: 'Funnels',
    tagColor: 'green',
    title: 'Spot the drop-off',
    body: 'Track views, starts, and submissions to see where people leave your form flow.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 858,
    tag: 'Optimization',
    tagColor: 'amber',
    title: 'Spend smarter',
    body: "Double down on the channels that fill your forms — cut the ones that don't.",
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 295,
    title: 'Add your GTM script to the form',
    description:
      'Open your form, go to the Advanced section → Scripts, click Add Script, paste your GTM container snippet, name it, and pick the target page. Then enable the click and form variables in GTM.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Add A Script</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Script Name<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;'>GTM Integration - XY1122A</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Code Snippet<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;height:42px;'>Paste your script here</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Target Page<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'>Thank you page<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='margin-top:11px;display:flex;gap:8px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Create</span><span style='font-size:10.5px;font-weight:600;color:#475467;border:1px solid #eaecf0;border-radius:7px;padding:7px 14px;line-height:1;'>Cancel</span></div></div></div></div>",
    image: null,
  },
  {
    id: 294,
    title: 'Create the GA4 event tag',
    description:
      'In GTM, create a GA4 Event tag with your Measurement ID, name the event form_submission, and assign the trigger.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>GA4 event tag</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Measurement ID</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>G-8F2KQ31X</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Event name</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>form_submission</div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Save</span></div></div></div></div>",
    image: null,
  },
  {
    id: 293,
    title: 'Test and mark as key event',
    description:
      'Verify the event in GTM Preview and GA4 Debug View, then mark form_submission as a key event in GA4 Admin.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>form_submission · Key event ✓</div></div></div>",
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
    id: 213,
    name: 'Google Tag Manager',
    description: 'Add GTM tags to forms and connect to 100+ analytics tools.',
    link: '/integrations/google-tag-manager/',
  },
  {
    id: 211,
    name: 'Facebook Pixel',
    description: 'Track form views and actions using Meta Pixel integration.',
    link: '/integrations/facebook-pixel/',
  },
  {
    id: 212,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 214,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 216,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
  {
    id: 215,
    name: 'HubSpot CRM',
    description: 'Push new form leads to HubSpot CRM instantly.',
    link: '/integrations/hubspot-crm/',
  },
]
const c6_title = [
  {
    id: 5157,
    text: 'Google Analytics integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2734,
    header: 'What does the Google Analytics integration do?',
    body: 'It tracks your form submissions as events in GA4 — so you can measure conversions, identify lead sources, and optimize campaigns.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2735,
    header: 'How does the GA4 connection work?',
    body: "It runs through Google Tag Manager: add your GTM container script under the form's Advanced section → Scripts, create a GA4 Event tag with your Measurement ID, and trigger it on submission.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2738,
    header: 'Do I need a GTM container?',
    body: "Yes — the GA4 setup uses Google Tag Manager, so you'll need a GTM container connected to your form first.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2736,
    header: 'How do I verify tracking works?',
    body: "Use GTM Preview mode and GA4's Debug View: submit a test form and watch the form_submission event arrive, then mark it as a key event in GA4 Admin.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2737,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1780,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1781,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Google Analytics (GA4) Integration for Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/google-analytics/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:16:42.071Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Track form submissions as GA4 key events. Measure conversions, attribute leads to campaigns, and optimize your funnel — via Google Tag Manager.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Google Analytics (GA4) Integration for Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/google-analytics/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Google Analytics (GA4) Integration for Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Track form submissions as GA4 key events. Measure conversions, attribute leads to campaigns, and optimize your funnel — via Google Tag Manager.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Google Analytics integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/google-analytics/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Google Analytics (GA4) Integration for Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Track form submissions as GA4 key events. Measure conversions, attribute leads to campaigns, and optimize your funnel — via Google Tag Manager.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Google Analytics integration',
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
        'google analytics form tracking',
        'ga4 form submission event',
        'track form conversions ga4',
        'formester google analytics',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the Google Analytics integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It tracks your form submissions as events in GA4 — so you can measure conversions, identify lead sources, and optimize campaigns."}}, {"@type": "Question", "name": "How does the GA4 connection work?", "acceptedAnswer": {"@type": "Answer", "text": "It runs through Google Tag Manager: add your GTM container script under the form\'s Advanced section → Scripts, create a GA4 Event tag with your Measurement ID, and trigger it on submission."}}, {"@type": "Question", "name": "Do I need a GTM container?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — the GA4 setup uses Google Tag Manager, so you\'ll need a GTM container connected to your form first."}}, {"@type": "Question", "name": "How do I verify tracking works?", "acceptedAnswer": {"@type": "Answer", "text": "Use GTM Preview mode and GA4\'s Debug View: submit a test form and watch the form_submission event arrive, then mark it as a key event in GA4 Admin."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Google Analytics", "item": "https://formester.com/integrations/google-analytics/"}]}',
  },
])
</script>
