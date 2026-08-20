<template>
  <div>
    <HeroV2
      description="Accept card payments via Authorize.net's hosted checkout, right inside your Formester forms — secure, reliable, and quick to set up."
      trustText="✓ Hosted checkout · ✓ Card payments · ✓ Minutes to set up"
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
      description="The hosted checkout keeps card data with Authorize.net — your form stays simple."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Set up Authorize.net in 3 steps"
      description="Add the integration, log in, and publish."
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
      heading="Start accepting card payments today"
      description="Connect Authorize.net and turn any form into a secure checkout."
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
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/authorize-net.webp' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>Checkout · Authorize.net</span></div><div style='padding:14px;text-align:center;'><div class='iw__anim' style='display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#ecfdf3;margin-bottom:8px;'><svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#11c15b' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></div><div style='font-size:13px;font-weight:700;color:#101828;'>Payment successful</div><div style='font-size:20px;font-weight:700;color:#101828;margin:4px 0 8px;'>$49.00</div><div style='border-top:1px solid #f2f4f7;'><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>Item</span><span style='color:#101828;font-weight:500;text-align:right;'>VIP Ticket × 1</span></div><div style='display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#697586;'>Method</span><span style='color:#101828;font-weight:500;text-align:right;'>Card •••• 4242 · Authorize.net</span></div></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Payment approved<small>just now · $49.00</small></span></div></div></div>"
const c0_title = [
  {
    id: 5129,
    text: 'Take card payments in forms with ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5130,
    text: 'Authorize.net',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1763,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1762,
    link: '/integrations/',
    text: 'Browse all integrations',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 160,
  text: 'Authorize.net',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5125,
    text: 'Card payments, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5126,
    text: 'handled for you',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 837,
    tag: 'Security',
    tagColor: 'violet',
    title: 'Hosted checkout',
    body: "Card details are entered on Authorize.net's secure hosted page — they never pass through your form.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 835,
    tag: 'Trust',
    tagColor: 'blue',
    title: 'An established gateway',
    body: 'Authorize.net has processed payments for decades — your buyers are in safe hands.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 838,
    tag: 'Use cases',
    tagColor: 'green',
    title: 'Orders, fees, donations',
    body: 'Collect payment as part of any submission: product orders, registration fees, donations.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 836,
    tag: 'Simplicity',
    tagColor: 'amber',
    title: 'No code required',
    body: 'Connect your account and add the payment step — no developer needed.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 278,
    title: 'Add Authorize.net from the Payment tab',
    description: 'From your dashboard, open Integrations → Payment, find Authorize.net, and click Add integration.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'><span>Email</span><span style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Payment</span><span>CRM</span></div><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'><img src='/integrations/authorize-net.webp' alt='' style='width:20px;height:20px;object-fit:contain;'/><span style='font-size:12.5px;font-weight:700;color:#101828;'>Authorize.net</span></div><div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Accept card payments via Authorize.net's hosted checkout.</div><div style='display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'><span style='color:#6434d0;font-weight:700;'>+ Add integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 279,
    title: 'Connect by logging in',
    description: 'Log in with your Authorize.net account to link the gateway.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:12px 14px;'><div style='display:flex;align-items:center;gap:8px;'><img src='/integrations/authorize-net.webp' alt='' style='width:20px;height:20px;object-fit:contain;'/><span style='font-size:12.5px;font-weight:700;color:#101828;'>Authorize.net</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#11c15b;border:1px solid #a6f4c5;border-radius:999px;padding:3px 10px;line-height:1;'>Success</span></div><div style='font-size:10px;color:#697586;margin-top:8px;'>Account Email: <b style='color:#101828;'>you@yourcompany.com</b></div></div></div></div>",
    image: null,
  },
  {
    id: 280,
    title: 'Publish and run a test payment',
    description:
      'Add the payment step to your form, publish, and run a test transaction through the hosted checkout to confirm everything works.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>Test payment approved</div></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_title = [
  {
    id: 5127,
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
    id: 183,
    name: 'Stripe',
    description: 'Collect secure Stripe payments directly inside your forms.',
    link: '/integrations/stripe/',
  },
  {
    id: 182,
    name: 'PayPal',
    description: 'Accept PayPal payments directly through your forms.',
    link: '/integrations/paypal/',
  },
  {
    id: 184,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 185,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 186,
    name: 'HubSpot CRM',
    description: 'Push new form leads to HubSpot CRM instantly.',
    link: '/integrations/hubspot-crm/',
  },
  {
    id: 187,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
]
const c6_title = [
  {
    id: 5128,
    text: 'Authorize.net integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2709,
    header: 'What does the Authorize.net integration do?',
    body: "It lets your forms accept card payments through Authorize.net's hosted checkout, so buyers pay securely as part of submitting the form.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2710,
    header: 'How do I connect Authorize.net?',
    body: 'Add it from Integrations → Payment, log in with your Authorize.net account to connect, then add the payment step to your form and publish.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2711,
    header: 'Is card data stored in my form?',
    body: "No — payment details are entered on Authorize.net's hosted checkout and handled entirely by the gateway.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2712,
    header: 'What if payments stop working?',
    body: 'Check that your Authorize.net credentials are valid and reconnect the integration. Our support team can help if the issue continues.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2713,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1760,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1761,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Authorize.net Integration for Online Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/authorize-net/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:16:27.891Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Accept card payments in your forms via Authorize.net's hosted checkout. Secure, no-code payment collection set up in minutes.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Authorize.net Integration for Online Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/authorize-net/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Authorize.net Integration for Online Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Accept card payments in your forms via Authorize.net's hosted checkout. Secure, no-code payment collection set up in minutes.",
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Authorize.net integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/authorize-net/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Authorize.net Integration for Online Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        "Accept card payments in your forms via Authorize.net's hosted checkout. Secure, no-code payment collection set up in minutes.",
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Authorize.net integration',
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
        'authorize.net form integration',
        'card payment forms',
        'authorize.net hosted checkout form',
        'formester authorize.net',
      ],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the Authorize.net integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It lets your forms accept card payments through Authorize.net\'s hosted checkout, so buyers pay securely as part of submitting the form."}}, {"@type": "Question", "name": "How do I connect Authorize.net?", "acceptedAnswer": {"@type": "Answer", "text": "Add it from Integrations → Payment, log in with your Authorize.net account to connect, then add the payment step to your form and publish."}}, {"@type": "Question", "name": "Is card data stored in my form?", "acceptedAnswer": {"@type": "Answer", "text": "No — payment details are entered on Authorize.net\'s hosted checkout and handled entirely by the gateway."}}, {"@type": "Question", "name": "What if payments stop working?", "acceptedAnswer": {"@type": "Answer", "text": "Check that your Authorize.net credentials are valid and reconnect the integration. Our support team can help if the issue continues."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Authorize.net", "item": "https://formester.com/integrations/authorize-net/"}]}',
  },
])
</script>
