<template>
  <div>
    <HeroV2
      description="Drop your GTM container into any form and unlock 100+ marketing and analytics tools — GA4, ads pixels, heatmaps — without touching code again."
      trustText="✓ One container, 100+ tools · ✓ Page-load or thank-you triggers · ✓ No code after setup"
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
      description="Manage all your tracking from GTM — your form carries the container, GTM does the rest."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Connect GTM in 3 steps"
      description="Copy the container script once — manage everything else from GTM."
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
      heading="Wire your forms into your marketing stack"
      description="Connect GTM once and every tracking tool you use comes along."
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
  "<div class='raw-html-embed'>\u003Cstyle>.iw{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px;} .iw *{box-sizing:border-box;} .iw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px;} .iw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06);flex-shrink:0;} .iw__logo img{width:30px;height:30px;object-fit:contain;} .iw__flow{display:flex;align-items:center;gap:5px;} .iw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:iwd 1.6s linear infinite;} .iw__dot:nth-child(2){animation-delay:.2s}.iw__dot:nth-child(3){animation-delay:.4s} @keyframes iwd{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}} .iw__win{background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12);overflow:hidden;} .iw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;} .iw__cdot{width:10px;height:10px;border-radius:50%;flex-shrink:0;} .iw__title{font-size:11px;color:#697586;margin-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} @keyframes iwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}} @media(max-width:600px){.iw__toast{right:-4px !important;bottom:-30px !important;}} .iw__toast{position:absolute;bottom:-28px;right:-36px;display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 8px 24px rgba(15,14,26,.14);padding:9px 13px;font-size:12px;font-weight:600;color:#101828;animation:iwnew 5s ease-in-out infinite;} .iw__toast small{display:block;font-size:10px;font-weight:500;color:#697586;} .iw__tick{width:22px;height:22px;border-radius:7px;background:#11c15b;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;} .iw__anim{animation:iwnew 5s ease-in-out infinite;}\u003C/style><div class='iw'><div class='iw__pair'><span class='iw__logo'><img src='/formester-icon.svg' alt='Formester'/></span><span class='iw__flow'><span class='iw__dot'></span><span class='iw__dot'></span><span class='iw__dot'></span></span><span class='iw__logo'><img src='/integrations/gtm.svg' alt=''/></span></div><div class='iw__win'><div class='iw__bar'><span class='iw__cdot' style='background:#ff6058'></span><span class='iw__cdot' style='background:#ffbd2e'></span><span class='iw__cdot' style='background:#27c93f'></span><span class='iw__title'>Tags · GTM-K2W9</span></div><div><div style='padding:9px 14px;font-size:10px;font-weight:700;color:#697586;border-bottom:1px solid #f2f4f7;'>Container GTM-K2W9 · Preview</div><div style='display:flex;justify-content:space-between;align-items:center;padding:9px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#101828;font-weight:600;'>GA4 — form_submission</span><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;line-height:1;'>Fired</span></div><div style='display:flex;justify-content:space-between;align-items:center;padding:9px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#101828;font-weight:600;'>Meta Pixel — Lead</span><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;line-height:1;'>Fired</span></div><div style='display:flex;justify-content:space-between;align-items:center;padding:9px 14px;border-bottom:1px solid #f2f4f7;font-size:11px;'><span style='color:#101828;font-weight:600;'>LinkedIn Insight</span><span style='display:inline-flex;font-size:9.5px;font-weight:700;color:#697586;background:#f2f4f7;border-radius:999px;padding:3px 9px;line-height:1;'>Not fired</span></div></div></div><div class='iw__toast'><span class='iw__tick'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg></span><span>Tags fired<small>just now · 2 of 3 tags</small></span></div></div></div>"
const c0_title = [
  {
    id: 5170,
    text: 'Connect your forms to ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5171,
    text: 'Google Tag Manager',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1790,
    link: 'https://help.formester.com/en/article/connect-to-google-tag-manager-gtm-1cet3i4/',
    text: 'Read the setup guide',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1791,
    link: 'https://youtu.be/cdZzx_KMHgE',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 167,
  text: 'Google Tag Manager',
  tag: 'Integrations',
  link: '/integrations/',
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 5168,
    text: 'One snippet, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 5167,
    text: 'every marketing tool',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 865,
    tag: 'Leverage',
    tagColor: 'violet',
    title: '100+ tools in one go',
    body: 'GA4, ads pixels, heatmaps, session recording — anything GTM supports now works on your forms.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 864,
    tag: 'Control',
    tagColor: 'blue',
    title: 'Triggers you choose',
    body: 'Fire tags on page load or only on the thank-you page after a successful submission.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 866,
    tag: 'Agility',
    tagColor: 'green',
    title: 'Change tags without redeploying',
    body: 'Marketing updates tracking in GTM — the form never needs republishing for tag changes.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 863,
    tag: 'Scale',
    tagColor: 'amber',
    title: 'Multiple scripts per form',
    body: 'Add multiple GTM scripts with custom triggers for advanced setups.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 299,
    title: 'Copy your GTM head script',
    description:
      "In Google Tag Manager, create a container for your form's domain and copy the head script from Admin → Install Google Tag Manager.",
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Install Google Tag Manager</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Container</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>GTM-K2W9</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Head script</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'>\u003Cscript>(function(w,d,s,l,i)…</div><div style='margin-top:11px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Copy</span></div></div></div></div>",
    image: null,
  },
  {
    id: 300,
    title: 'Add the script to your form',
    description:
      'Open your form, go to the Advanced section → Scripts, click Add Script, paste the GTM tag, name it, and choose the target page — page load or thank-you page.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;'>Add A Script</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Script Name<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;'>GTM Integration - XY1122A</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Code Snippet<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10px;color:#98a2b3;height:42px;'>Paste your script here</div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:8px 0 4px;'>Target Page<span style='color:#e02b2b;'>*</span></div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;align-items:center;'>Thank you page<span style='font-size:8px;color:#697586;'>&#9662;</span></div><div style='margin-top:11px;display:flex;gap:8px;'><span style='font-size:10.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:7px;padding:7px 16px;line-height:1;'>Create</span><span style='font-size:10.5px;font-weight:600;color:#475467;border:1px solid #eaecf0;border-radius:7px;padding:7px 14px;line-height:1;'>Cancel</span></div></div></div></div>",
    image: null,
  },
  {
    id: 301,
    title: 'Publish and verify',
    description:
      'Publish the form, use GTM Preview and Tag Assistant to confirm tags fire, then publish your GTM container version.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:7px 13px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l4 4L19 6'/></svg>Tags firing — verified in Preview</div></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_title = [
  {
    id: 5166,
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
    id: 224,
    name: 'Google Analytics',
    description: 'Track form events and user behavior in real time.',
    link: '/integrations/google-analytics/',
  },
  {
    id: 223,
    name: 'Facebook Pixel',
    description: 'Track form views and actions using Meta Pixel integration.',
    link: '/integrations/facebook-pixel/',
  },
  {
    id: 225,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 226,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 227,
    name: 'Webhook',
    description: 'Send form data to any tool instantly using webhooks.',
    link: '/integrations/webhook/',
  },
  {
    id: 228,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
]
const c6_title = [
  {
    id: 5169,
    text: 'Google Tag Manager integration FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2746,
    header: 'What does the GTM integration do?',
    body: 'It adds your Google Tag Manager container to your forms, enabling submission tracking, retargeting audiences, behavior analytics, and any other tag GTM supports.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2747,
    header: 'How do I add GTM to a form?',
    body: 'Copy the head script from your GTM container, then open your form, go to the Advanced section → Scripts → Add Script, paste it, choose the target page, and publish.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2749,
    header: 'Can tags fire only after submission?',
    body: "Yes — choose the thank-you page as the script's target so tags fire only after a successful submission.",
    body_markdown: '',
    list: [],
  },
  {
    id: 2748,
    header: 'How do I test that tags fire?',
    body: 'Use GTM Preview mode and Google Tag Assistant: submit a test response and verify your tags fire before publishing the GTM version.',
    body_markdown: '',
    list: [],
  },
  {
    id: 2750,
    header: 'What is Formester?',
    body: 'Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it.',
    body_markdown: '',
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1788,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1789,
    link: '/pricing/',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Google Tag Manager Integration for Forms | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/integrations/google-tag-manager/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-14T15:16:48.795Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Add your GTM container to any form and connect 100+ marketing tools. Page-load or thank-you-page triggers, no code — set up in minutes.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Google Tag Manager Integration for Forms | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/integrations/google-tag-manager/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Google Tag Manager Integration for Forms | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Add your GTM container to any form and connect 100+ marketing tools. Page-load or thank-you-page triggers, no code — set up in minutes.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Google Tag Manager integration',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/integrations/google-tag-manager/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Google Tag Manager Integration for Forms | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Add your GTM container to any form and connect 100+ marketing tools. Page-load or thank-you-page triggers, no code — set up in minutes.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Google Tag Manager integration',
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
      content: ['google tag manager forms', 'gtm form tracking', 'add gtm to form', 'formester gtm'],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does the GTM integration do?", "acceptedAnswer": {"@type": "Answer", "text": "It adds your Google Tag Manager container to your forms, enabling submission tracking, retargeting audiences, behavior analytics, and any other tag GTM supports."}}, {"@type": "Question", "name": "How do I add GTM to a form?", "acceptedAnswer": {"@type": "Answer", "text": "Copy the head script from your GTM container, then open your form, go to the Advanced section → Scripts → Add Script, paste it, choose the target page, and publish."}}, {"@type": "Question", "name": "Can tags fire only after submission?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — choose the thank-you page as the script\'s target so tags fire only after a successful submission."}}, {"@type": "Question", "name": "How do I test that tags fire?", "acceptedAnswer": {"@type": "Answer", "text": "Use GTM Preview mode and Google Tag Assistant: submit a test response and verify your tags fire before publishing the GTM version."}}, {"@type": "Question", "name": "What is Formester?", "acceptedAnswer": {"@type": "Answer", "text": "Formester is an online form builder for creating forms, surveys, and quizzes with a drag-and-drop editor or AI. It connects with the tools your team already uses — Google Sheets, Slack, HubSpot, Zapier, and more — so your form data flows wherever you need it."}}]}',
  },
  {
    '@context': 'https://schema.org',
    type: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://formester.com/"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://formester.com/integrations/"}, {"@type": "ListItem", "position": 3, "name": "Google Tag Manager", "item": "https://formester.com/integrations/google-tag-manager/"}]}',
  },
])
</script>
