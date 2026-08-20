<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="✓ Native integration · ✓ OAuth sign-in, no passwords shared · ✓ Minutes to set up"
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
      description="Send from the Gmail address your contacts already know instead of an anonymous system sender."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect Gmail in 3 steps"
      description="One sign-in from your dashboard and your forms can send as you."
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
      heading="Send form emails from Gmail today"
      description="Connect your account once and every form email comes from an address people trust."
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

const c0_description =
  'Connect your Gmail account once and your forms send confirmations, replies, and alerts as you. Recipients see a real address they recognize — which means better trust and better open rates.'
const c0_mockupHtml =
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/gmail.svg' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>Sent · Gmail</span></div><div><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>To</span><span style='color:#101828;font-weight:500;text-align:right;'>jonas@verge.dev</span></div><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>From</span><span style='color:#101828;font-weight:700;text-align:right;'>you@yourcompany.com <span style='color:#98a2b3;font-weight:500;'>via Gmail</span></span></div><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>Subject</span><span style='color:#101828;font-weight:700;text-align:right;'>Thanks for your submission!</span></div><div style='padding:11px 14px;font-size:11px;color:#475467;line-height:1.6;'>Hi Jonas,<br/>We received your response — our team will get back to you shortly.</div><div style='padding:0 14px 12px;'><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;line-height:1;'>Delivered · just now</span></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Email delivered<small>just now · via Gmail</small></span></div></div></div>"
const c0_title = [
  {
    id: 5154,
    text: 'Send form emails from your own ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5153,
    text: 'Gmail',
    highlight: true,
    color: '#475467',
    bold: false,
  },
  {
    id: 5152,
    text: ' address',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1779,
    link: 'https://help.formester.com/en/article/gmail-integration-1few8o6/',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1778,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 164,
  text: 'Gmail',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5149,
    text: 'Form emails people ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5148,
    text: 'actually open',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 852,
    tag: 'Trust',
    tagColor: 'violet',
    title: 'A sender they recognize',
    body: 'Confirmations and replies come from your real address, not a no-reply system email.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 851,
    tag: 'Simplicity',
    tagColor: 'blue',
    title: 'One-time sign-in',
    body: 'Authenticate with Gmail once and grant access — no SMTP servers or API keys to manage.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 853,
    tag: 'Automation',
    tagColor: 'green',
    title: 'Replies on autopilot',
    body: 'Confirmation emails, internal alerts, and follow-ups send automatically on every submission.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 854,
    tag: 'Control',
    tagColor: 'amber',
    title: 'Everything in one inbox',
    body: 'Replies land back in your Gmail inbox, so conversations continue where you already work.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 290,
    title: 'Add the Gmail integration',
    description: 'From your dashboard, open Integrations and click Add integration under Gmail.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'><span>Autoresponder</span><span style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Integrations</span><span>Webhooks</span></div><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'><img src='/integrations/gmail.svg' alt='' style='width:20px;height:20px;object-fit:contain;'/><span style='font-size:12.5px;font-weight:700;color:#101828;'>Gmail</span></div><div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Send emails securely using Gmail with OAuth-based authentication.</div><div style='display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'><span style='color:#6434d0;font-weight:700;'>+ Add integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 292,
    title: 'Sign in and grant access',
    description:
      'Sign in to the Gmail account you want to send from and allow Formester to send emails on your behalf.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Connect Gmail</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Account</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'>you@yourcompany.com<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='display:flex;justify-content:space-between;align-items:center;font-size:10.5px;color:#101828;margin:7px 0;'>Allow sending emails<span style='width:26px;height:15px;border-radius:999px;background:#6434d0;position:relative;display:inline-block;'><span style='position:absolute;top:2px;right:2px;width:11px;height:11px;border-radius:50%;background:#fff;'></span></span></div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Allow</span></div></div></div></div>",
    image: null,
  },
  {
    id: 291,
    title: 'Configure notifications and test',
    description:
      "Choose the connected account in your form's email notifications, publish, and submit a test to confirm delivery.",
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>Confirmation email sent</div></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_title = [
  {
    id: 5150,
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
    id: 206,
    name: 'Outlook',
    description: 'Send Outlook emails from your forms using your own SMTP.',
    link: '/integrations/outlook/',
  },
  {
    id: 207,
    name: 'Sendgrid',
    description: 'Send branded emails from forms using your Sendgrid.',
    link: '/integrations/sendgrid/',
  },
  {
    id: 208,
    name: 'Mailgun',
    description: 'Deliver personalized form emails using Mailgun.',
    link: '/integrations/mailgun/',
  },
  {
    id: 210,
    name: 'Amazon SES',
    description: 'Send reliable form emails at scale using Amazon SES.',
    link: '/integrations/amazon-ses/',
  },
  {
    id: 209,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
]
const c6_title = [
  {
    id: 5151,
    text: 'Gmail integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2729,
    header: 'What does the Gmail integration do?',
    body: 'It lets your forms send emails — confirmations to respondents, alerts to your team, automated replies — from your own Gmail address instead of a generic system sender.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2730,
    header: 'How do I connect Gmail?',
    body: "Open Integrations from your dashboard, click Add integration under Gmail, sign in, and grant Formester permission to send emails. Then pick the account in your form's notification settings.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2731,
    header: 'Is my password shared with Formester?',
    body: 'No. The connection uses OAuth — you sign in directly with Gmail and can revoke access at any time from your account settings.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2733,
    header: 'What if emails stop sending?',
    body: 'Reconnect the account from the Integrations page — that resolves most cases. If it continues, contact our support team.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2732,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1776,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1777,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Gmail Integration for Online Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/gmail/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:16:39.274Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Send form confirmations, replies, and alerts from your own Gmail address. OAuth-secured, no code — connected in minutes.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Gmail Integration for Online Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/gmail/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Gmail Integration for Online Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Send form confirmations, replies, and alerts from your own Gmail address. OAuth-secured, no code — connected in minutes.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Gmail integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/gmail/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Gmail Integration for Online Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Send form confirmations, replies, and alerts from your own Gmail address. OAuth-secured, no code — connected in minutes.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Gmail integration',
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
      content: ['gmail form integration', 'send form emails from gmail', 'form email notifications', 'formester gmail'],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the Gmail integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It lets your forms send emails — confirmations to respondents, alerts to your team, automated replies — from your own Gmail address instead of a generic system sender."}}, {"@type": "Question", "name": "How do I connect Gmail?", "acceptedAnswer": {"@type": "Answer", "text": "Open Integrations from your dashboard, click Add integration under Gmail, sign in, and grant Formester permission to send emails. Then pick the account in your form\'s notification settings."}}, {"@type": "Question", "name": "Is my password shared with Formester?", "acceptedAnswer": {"@type": "Answer", "text": "No. The connection uses OAuth — you sign in directly with Gmail and can revoke access at any time from your account settings."}}, {"@type": "Question", "name": "What if emails stop sending?", "acceptedAnswer": {"@type": "Answer", "text": "Reconnect the account from the Integrations page — that resolves most cases. If it continues, contact our support team."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Gmail", "item": "https://formester.com/integrations/gmail/"}]}',
  },
])
</script>
