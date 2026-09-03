<template>
  <div>
    <HeroV2
      description="Every submission creates or updates a contact in HubSpot with your fields mapped to the right properties — no exports, no copy-paste, no lost leads."
      trustText="✓ Native integration · ✓ Field mapping included · ✓ Minutes to set up"
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
      description="Connect once and your sales pipeline fills itself from every form."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect HubSpot in 3 steps"
      description="Authenticate, map your fields, and let the pipeline fill itself."
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
      heading="Fill your HubSpot pipeline automatically"
      description="Connect your forms to HubSpot and never copy a lead by hand again."
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
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/hubspot.png' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>Contacts · HubSpot</span></div><div style='padding:12px 14px;'><div style='display:flex;align-items:center;gap:10px;margin-bottom:9px;'><span style='width:34px;height:34px;border-radius:50%;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;'>JK</span><div><div style='font-size:12px;font-weight:700;color:#101828;'>Jonas Keller</div><div style='font-size:10px;color:#697586;'>jonas@verge.dev</div></div><span style='margin-left:auto;'><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;line-height:1;'>New contact</span></span></div><div class='iw__anim' style='border:1px solid #eaecf0;border-radius:8px;'><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>Lead source</span><span style='color:#101828;font-weight:500;text-align:right;'>Formester form</span></div><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>Lifecycle stage</span><span style='color:#101828;font-weight:500;text-align:right;'>Lead</span></div><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>Phone</span><span style='color:#101828;font-weight:500;text-align:right;'>+1 (415) 555-0182</span></div></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Contact created<small>just now · Jonas Keller</small></span></div></div></div>"
const c0_title = [
  {
    id: 5177,
    text: 'Turn form submissions into ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5175,
    text: 'HubSpot',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5176,
    text: ' contacts, automatically',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1794,
    link: 'https://help.formester.com/en/article/hubspot-crm-integration-7n4t91/',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1795,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 168,
  text: 'HubSpot CRM',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5172,
    text: 'Leads land in your CRM ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5173,
    text: 'before you blink',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 867,
    tag: 'Speed',
    tagColor: 'violet',
    title: 'Instant lead capture',
    body: 'New submissions become HubSpot contacts the moment they arrive, ready for follow-up.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 869,
    tag: 'Accuracy',
    tagColor: 'blue',
    title: 'Fields mapped your way',
    body: 'Map form fields to HubSpot properties once — name to name, email to email — and every record lands clean.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 868,
    tag: 'De-duplication',
    tagColor: 'green',
    title: 'Creates or updates',
    body: 'Existing contacts get updated instead of duplicated, based on your mapping.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 870,
    tag: 'Pipeline',
    tagColor: 'amber',
    title: 'Sales-ready data',
    body: 'Your team works leads in HubSpot as usual — the form does the data entry.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 304,
    title: 'Add HubSpot from the Automate tab',
    description: 'Open your form, head to Automate → Integrations → HubSpot, and click Connect.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'><span>Autoresponder</span><span style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Integrations</span><span>Webhooks</span></div><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'><img src='/integrations/hubspot.png' alt='' style='width:20px;height:20px;object-fit:contain;'/><span style='font-size:12.5px;font-weight:700;color:#101828;'>HubSpot CRM</span></div><div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Automatically syncs your form data with HubSpot CRM.</div><div style='display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'><span style='color:#6434d0;font-weight:700;'>+ Add integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 303,
    title: 'Connect your account and map fields',
    description:
      'Add your HubSpot account, choose what to create (like a Contact), and map each form field to a HubSpot property.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Field mapping</div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Full name</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Contact name</span></div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Work email</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Email</span></div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>Phone</span><span style='color:#9777e0;'>→</span><span style='color:#475467;'>Phone number</span></div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Sync</span></div></div></div></div>",
    image: null,
  },
  {
    id: 302,
    title: 'Publish and test',
    description: 'Publish your changes, submit a test response, and watch the contact appear in HubSpot.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>Contact created in HubSpot</div></div></div>",
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
    id: 229,
    name: 'GoHighLevel',
    description: 'Sync form submissions with your GoHighLevel CRM automatically.',
    link: '/integrations/gohighlevel/',
  },
  {
    id: 230,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 231,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
  {
    id: 233,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 234,
    name: 'Automotive CRM (ADF/XML)',
    description: 'Send submissions as ADF/XML leads to automotive CRMs.',
    link: '/integrations/automotive-crm/',
  },
  {
    id: 232,
    name: 'Monday.com',
    description: 'Send form submissions to your Monday.com boards automatically.',
    link: '/integrations/monday/',
  },
]
const c6_title = [
  {
    id: 5174,
    text: 'HubSpot integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2751,
    header: 'What does the HubSpot CRM integration do?',
    body: 'It sends every form submission to your HubSpot account, creating or updating a contact with your form fields mapped to HubSpot properties.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2752,
    header: 'How do I connect HubSpot to my form?',
    body: "Open the form's Automate tab, go to Integrations → HubSpot, click Connect and authenticate, choose what to create, map your fields, then save, sync, and publish.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2753,
    header: 'Can I control which fields go where?',
    body: 'Yes — you map each form field to a HubSpot property during setup, so records land exactly how your team expects.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2754,
    header: 'Will it create duplicate contacts?',
    body: 'Contacts are created or updated based on your mapping, so existing contacts get updated rather than duplicated.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2755,
    header: 'What if syncing stops working?',
    body: 'Reconnect the integration from the Automate tab. Your submissions always stay safely stored in Formester.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2756,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1792,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1793,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'HubSpot CRM Integration for Online Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      // Duplicate of /integrations/hubspot/ (same content, different slug) —
      // canonicalize there so the two pages don't compete for the same query.
      href: 'https://formester.com/integrations/hubspot/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:16:51.083Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Send form submissions straight into HubSpot CRM. Auto-create contacts with mapped fields, no code — connected in minutes.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'HubSpot CRM Integration for Online Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/hubspot-crm/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'HubSpot CRM Integration for Online Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Send form submissions straight into HubSpot CRM. Auto-create contacts with mapped fields, no code — connected in minutes.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester HubSpot CRM integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/hubspot-crm/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'HubSpot CRM Integration for Online Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Send form submissions straight into HubSpot CRM. Auto-create contacts with mapped fields, no code — connected in minutes.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester HubSpot CRM integration',
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
      content: ['hubspot form integration', 'form to hubspot crm', 'hubspot lead capture form', 'formester hubspot'],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the HubSpot CRM integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It sends every form submission to your HubSpot account, creating or updating a contact with your form fields mapped to HubSpot properties."}}, {"@type": "Question", "name": "How do I connect HubSpot to my form?", "acceptedAnswer": {"@type": "Answer", "text": "Open the form\'s Automate tab, go to Integrations → HubSpot, click Connect and authenticate, choose what to create, map your fields, then save, sync, and publish."}}, {"@type": "Question", "name": "Can I control which fields go where?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — you map each form field to a HubSpot property during setup, so records land exactly how your team expects."}}, {"@type": "Question", "name": "Will it create duplicate contacts?", "acceptedAnswer": {"@type": "Answer", "text": "Contacts are created or updated based on your mapping, so existing contacts get updated rather than duplicated."}}, {"@type": "Question", "name": "What if syncing stops working?", "acceptedAnswer": {"@type": "Answer", "text": "Reconnect the integration from the Automate tab. Your submissions always stay safely stored in Formester."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "HubSpot CRM", "item": "https://formester.com/integrations/hubspot-crm/"}]}',
  },
])
</script>
