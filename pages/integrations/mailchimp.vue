<template>
  <div>
    <HeroV2
      :description="heroDescription"
      trustText="✓ Native OAuth · ✓ Audience field mapping · ✓ Double opt-in"
      blobColorA="#fff7d6"
      blobColorB="#f5eeff"
      blobColorC="#fff1dc"
      :mockupHtml="heroMockupHtml"
      layout="split"
      :title="heroTitle"
      :buttons="heroButtons"
      :badge="heroBadge"
      :tabCardContent="[]"
      class="page-component-item"
    />

    <TrustSeals
      label="Trusted by 56k+ teams worldwide"
      :showTrustBadges="false"
      :title="[]"
      :logos="[]"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Why connect them"
      description="Turn every form response into a campaign-ready Mailchimp contact without exports or copy-paste."
      columns="2"
      :title="benefitsTitle"
      :cards="benefitCards"
      class="page-component-item"
    />

    <StickyStepsSection
      id="setup"
      badge="How it works"
      heading="Connect a form to Mailchimp in 3 steps"
      description="Choose an audience, map your fields, and start growing your email list."
      background="#f9fafb"
      :steps="setupSteps"
      :buttons="[]"
      class="page-component-item"
    />

    <TestimonialsV2
      version="feature"
      :heading="testimonialHeading"
      :testimonials="testimonials"
      class="page-component-item"
    />

    <IntegrationsGrid
      title="Explore more integrations"
      :integrations="relatedIntegrations"
      class="page-component-item"
    />

    <FaqSection centered :title="faqTitle" :faqList="faqs" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Grow your Mailchimp audience from every form"
      description="Connect once and let new submissions organize themselves in Mailchimp."
      :buttons="ctaButtons"
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
import { platformTestimonials } from '@/constants/platform-testimonials'

const pageTitle = 'Mailchimp Form Integration for Online Forms | Formester'
const pageDescription =
  'Connect forms to Mailchimp and add or update audience contacts automatically. Map fields, apply tags, use double opt-in, and sync existing responses too.'
const pageUrl = 'https://formester.com/integrations/mailchimp/'

const heroDescription =
  'Formester’s native Mailchimp form integration adds or updates audience contacts from every submission. Map fields, apply tags, and choose immediate signup or double opt-in — no Zapier or code required.'

const heroMockupHtml = `
  <div class="raw-html-embed">
    <style>
      .mcw{font-family:Inter,ui-sans-serif,system-ui,sans-serif;position:relative;max-width:480px;margin:0 auto;padding-top:10px}
      .mcw *{box-sizing:border-box}
      .mcw__pair{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px}
      .mcw__logo{width:52px;height:52px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #eaecf0;box-shadow:0 2px 8px rgba(15,14,26,.06)}
      .mcw__logo img{width:31px;height:31px;object-fit:contain}
      .mcw__flow{display:flex;gap:5px}
      .mcw__dot{width:6px;height:6px;border-radius:50%;background:#9777e0;opacity:.35;animation:mcwdot 1.6s linear infinite}
      .mcw__dot:nth-child(2){animation-delay:.2s}.mcw__dot:nth-child(3){animation-delay:.4s}
      @keyframes mcwdot{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}
      .mcw__window{overflow:hidden;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.12)}
      .mcw__bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0}
      .mcw__control{width:10px;height:10px;border-radius:50%}.mcw__title{margin-left:8px;font-size:11px;color:#697586}
      .mcw__body{padding:14px}.mcw__person{display:flex;align-items:center;gap:10px;margin-bottom:11px}
      .mcw__avatar{display:inline-flex;width:36px;height:36px;align-items:center;justify-content:center;border-radius:50%;background:#ffe01b;color:#241c15;font-size:12px;font-weight:800}
      .mcw__name,.mcw__email{display:block}.mcw__name{font-size:12px;font-weight:700;color:#101828}.mcw__email{font-size:10px;color:#697586}
      .mcw__status{margin-left:auto;border-radius:999px;padding:4px 9px;background:#ecfdf3;color:#027a48;font-size:9.5px;font-weight:700}
      .mcw__details{overflow:hidden;border:1px solid #eaecf0;border-radius:9px}
      .mcw__row{display:flex;justify-content:space-between;gap:10px;padding:8px 12px;border-bottom:1px solid #f2f4f7;font-size:11px}.mcw__row:last-child{border-bottom:0}
      .mcw__label{color:#697586}.mcw__value{color:#101828;font-weight:600;text-align:right}.mcw__tag{border-radius:999px;padding:3px 8px;background:#fff7d6;color:#6f5700;font-size:9.5px}
      .mcw__toast{position:absolute;right:-30px;bottom:-28px;display:flex;align-items:center;gap:9px;padding:9px 13px;border:1px solid #eaecf0;border-radius:12px;background:#fff;box-shadow:0 8px 24px rgba(15,14,26,.14);color:#101828;font-size:12px;font-weight:600;animation:mcwnew 5s ease-in-out infinite}
      .mcw__tick{display:inline-flex;width:22px;height:22px;align-items:center;justify-content:center;border-radius:7px;background:#11c15b;color:#fff;font-size:14px}.mcw__toast small{display:block;color:#697586;font-size:10px;font-weight:500}
      @keyframes mcwnew{0%,10%{opacity:0;transform:translateY(-6px)}18%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0}}
      @media(max-width:600px){.mcw__toast{right:-4px;bottom:-30px}}
    </style>
    <div class="mcw">
      <div class="mcw__pair">
        <span class="mcw__logo"><img src="/formester-icon.svg" alt="Formester"></span>
        <span class="mcw__flow"><span class="mcw__dot"></span><span class="mcw__dot"></span><span class="mcw__dot"></span></span>
        <span class="mcw__logo"><img src="/integrations/mailchimp.svg" alt="Mailchimp"></span>
      </div>
      <div class="mcw__window">
        <div class="mcw__bar">
          <span class="mcw__control" style="background:#ff6058"></span><span class="mcw__control" style="background:#ffbd2e"></span><span class="mcw__control" style="background:#27c93f"></span>
          <span class="mcw__title">Newsletter audience · Mailchimp</span>
        </div>
        <div class="mcw__body">
          <div class="mcw__person">
            <span class="mcw__avatar">JK</span>
            <span><span class="mcw__name">Jonas Keller</span><span class="mcw__email">jonas@verge.dev</span></span>
            <span class="mcw__status">Subscribed</span>
          </div>
          <div class="mcw__details">
            <div class="mcw__row"><span class="mcw__label">First name</span><span class="mcw__value">Jonas</span></div>
            <div class="mcw__row"><span class="mcw__label">Company</span><span class="mcw__value">Verge</span></div>
            <div class="mcw__row"><span class="mcw__label">Tags</span><span class="mcw__value mcw__tag">Product updates</span></div>
          </div>
        </div>
      </div>
      <div class="mcw__toast"><span class="mcw__tick">✓</span><span>Contact synced<small>just now · Newsletter audience</small></span></div>
    </div>
  </div>`

const heroTitle = [
  { id: 6101, text: 'Connect your forms to ', highlight: false, color: '#475467', bold: false },
  { id: 6102, text: 'Mailchimp', highlight: true, color: '#475467', bold: false },
  { id: 6103, text: ' and grow your audience', highlight: false, color: '#475467', bold: false },
]

const heroButtons = [
  {
    id: 2101,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Connect Mailchimp',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 2102,
    link: 'https://help.formester.com/en/article/mailchimp-integration-bpwmss/',
    text: 'Read the setup guide',
    type: 'Secondary',
    showArrow: false,
  },
]

const heroBadge = { id: 241, text: 'Mailchimp', tag: 'Integrations', link: '/integrations/' }

const benefitsTitle = [
  { id: 6104, text: 'Build a list that is ', highlight: false, color: '#475467', bold: false },
  { id: 6105, text: 'ready to email', highlight: true, color: '#475467', bold: false },
]

const benefitCards = [
  {
    id: 1101,
    tag: 'Audience growth',
    tagColor: 'violet',
    title: 'Add or update contacts',
    body: 'Each submission creates a new Mailchimp contact or updates the matching email address, keeping your audience clean.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 1102,
    tag: 'Personalization',
    tagColor: 'blue',
    title: 'Map audience fields',
    body: 'Send names, phone numbers, companies, and other answers into the Mailchimp fields your campaigns use.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 1103,
    tag: 'Segmentation',
    tagColor: 'green',
    title: 'Apply Mailchimp tags',
    body: 'Choose one or more tags during setup so every synced contact is ready for the right segment and campaign.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 1104,
    tag: 'Consent',
    tagColor: 'amber',
    title: 'Choose your opt-in flow',
    body: 'Subscribe contacts immediately or send Mailchimp’s double opt-in email before they join your audience.',
    mockHtml: null,
    icon: null,
  },
]

const setupSteps = [
  {
    id: 501,
    title: 'Add Mailchimp and connect your account',
    description:
      'Open your form, go to Automate → Integrations → Mailchimp, and sign in securely with Mailchimp OAuth.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;'><div style='display:flex;gap:14px;font-size:10px;color:#697586;padding:0 4px 7px;'><span>Autoresponder</span><span style='color:#6434d0;font-weight:700;border-bottom:2px solid #6434d0;padding-bottom:5px;'>Integrations</span><span>Webhooks</span></div><div style='overflow:hidden;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);'><div style='display:flex;align-items:center;gap:8px;padding:11px 13px 4px;'><img src='/integrations/mailchimp.svg' alt='' style='width:22px;height:22px;object-fit:contain;'><span style='font-size:12.5px;font-weight:700;color:#101828;'>Mailchimp</span></div><div style='padding:0 13px 10px;font-size:10.5px;color:#697586;line-height:1.45;'>Add or update Mailchimp audience contacts from form submissions.</div><div style='display:flex;justify-content:flex-end;border-top:1px solid #f2f4f7;padding:9px 13px;font-size:10.5px;'><span style='color:#6434d0;font-weight:700;'>+ Add integration</span></div></div></div></div>",
    image: null,
  },
  {
    id: 502,
    title: 'Choose an audience and map fields',
    description:
      'Pick your Mailchimp audience and email question, then map optional audience fields and select the tags to apply.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:7px;'>Mailchimp audience</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:10.5px;color:#101828;display:flex;justify-content:space-between;'>Newsletter audience<span style='color:#697586;'>⌄</span></div><div style='font-size:10.5px;font-weight:700;color:#101828;margin:9px 0 4px;'>Field mapping</div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>FNAME</span><span style='color:#9777e0;'>←</span><span style='color:#475467;'>First name</span></div><div style='display:flex;align-items:center;gap:8px;font-size:10.5px;padding:7px 10px;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;margin:5px 0;'><span style='font-weight:600;color:#101828;'>PHONE</span><span style='color:#9777e0;'>←</span><span style='color:#475467;'>Phone number</span></div><div style='margin-top:9px;font-size:10.5px;color:#475467;'>Tag <span style='display:inline-flex;margin-left:5px;border-radius:999px;padding:3px 8px;background:#fff7d6;color:#6f5700;font-weight:700;'>Product updates</span></div></div></div>",
    image: null,
  },
  {
    id: 503,
    title: 'Choose opt-in, save, and test',
    description:
      'Use immediate subscription or double opt-in, optionally sync existing submissions, then submit a test response.',
    rawHtml:
      "<div class='raw-html-embed'><div style='font-family:Inter,ui-sans-serif,system-ui,sans-serif;max-width:320px;border:1px solid #eaecf0;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,14,26,.06);padding:13px;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:7px;'>Subscription status</div><div style='display:flex;align-items:center;gap:7px;font-size:10.5px;color:#101828;margin-bottom:6px;'><span style='width:12px;height:12px;border-radius:50%;border:4px solid #6434d0;box-sizing:border-box;'></span>Double opt-in</div><div style='display:flex;justify-content:space-between;align-items:center;font-size:10.5px;color:#475467;margin:10px 0;'>Sync existing submissions<span style='width:26px;height:15px;border-radius:999px;background:#6434d0;position:relative;display:inline-block;'><span style='position:absolute;top:2px;right:2px;width:11px;height:11px;border-radius:50%;background:#fff;'></span></span></div><div style='display:flex;align-items:center;gap:6px;margin-top:11px;font-size:10.5px;font-weight:700;color:#027a48;'><span style='display:inline-flex;width:18px;height:18px;align-items:center;justify-content:center;border-radius:6px;background:#ecfdf3;'>✓</span>Contact synced to Mailchimp</div></div></div>",
    image: null,
  },
]

const testimonialHeading = [
  { id: 6106, text: 'Forms that teams ', highlight: false },
  { id: 6107, text: 'trust to grow', highlight: true },
]

const sharedTestimonials = [28, 1].map((strapiId) => {
  const testimonial = platformTestimonials.find((item) => item.strapiId === strapiId)

  return {
    id: `platform-${testimonial.strapiId}`,
    name: testimonial.authorName,
    position: [testimonial.platform, testimonial.authorRole].filter(Boolean).join(' · '),
    comment: testimonial.text,
  }
})

const testimonials = [
  sharedTestimonials[0],
  {
    id: 'suggesterfy',
    name: 'Deanna Bugalski',
    position: 'Founder and CEO, Suggesterfy',
    comment:
      'I was searching for a long time for a product I could use to send newsletters and surveys to my database. I tried so many different types of software and I found many of them difficult to use and slow to learn how to operate. But Formester was super easy to set up, and the usability is seamless! I highly recommend!',
  },
  sharedTestimonials[1],
]

const relatedIntegrations = [
  {
    id: 601,
    name: 'HubSpot CRM',
    description: 'Push new form leads to HubSpot CRM instantly.',
    link: '/integrations/hubspot/',
  },
  {
    id: 602,
    name: 'Google Sheets',
    description: 'Sync every form submission to Google Sheets in real time.',
    link: '/integrations/google-sheets/',
  },
  {
    id: 603,
    name: 'Slack',
    description: 'Get instant Slack alerts when a new form is submitted.',
    link: '/integrations/slack/',
  },
  {
    id: 604,
    name: 'Zapier',
    description: 'Connect your forms to 8,000+ apps using Zapier.',
    link: '/integrations/zapier/',
  },
  {
    id: 605,
    name: 'Google Analytics',
    description: 'Track form events and user behavior in real time.',
    link: '/integrations/google-analytics/',
  },
  {
    id: 606,
    name: 'Webhook',
    description: 'Send form data to any tool instantly using webhooks.',
    link: '/integrations/webhook/',
  },
]

const faqTitle = [
  { id: 6108, text: 'Mailchimp form integration FAQs', highlight: false, color: '#475467', bold: false },
]

const faqs = [
  {
    id: 4101,
    header: 'What is a Mailchimp form integration?',
    body: 'A Mailchimp form integration connects a form builder to a Mailchimp audience. With Formester, each submission can add a new contact or update an existing one, map answers to audience fields, apply tags, and start either an immediate subscription or a double opt-in flow automatically.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4102,
    header: 'How do I connect a form to Mailchimp?',
    body: 'Open your form in Formester, go to Automate → Integrations → Mailchimp, connect your Mailchimp account, choose an audience and email field, map any optional fields, add tags, select an opt-in mode, and save.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4103,
    header: 'Does Mailchimp do forms?',
    body: 'Mailchimp includes basic signup forms. Formester gives you a full form builder for contact forms, lead forms, surveys, quizzes, and multi-step forms, then sends the contact data to your Mailchimp audience automatically.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4104,
    header: 'Can I map custom form fields to Mailchimp?',
    body: 'Yes. Choose the form question for the contact’s email address, then map compatible answers such as name, phone, company, birthday, and address to your Mailchimp audience fields.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4105,
    header: 'Can I add tags to Mailchimp contacts?',
    body: 'Yes. Select one or more existing Mailchimp tags during setup. Formester applies those tags to every contact synced by that integration, so subscribers arrive ready for segmentation and campaigns.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4106,
    header: 'Does the integration support double opt-in?',
    body: 'Yes. Choose double opt-in to have Mailchimp send a confirmation email before subscribing the contact, or choose immediate subscription when that matches your consent flow.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4107,
    header: 'Will existing Mailchimp contacts be duplicated?',
    body: 'No. Formester uses the submitted email address to add or update the Mailchimp audience member. An existing contact is updated without silently resubscribing someone who previously opted out.',
    body_markdown: '',
    list: [],
  },
  {
    id: 4108,
    header: 'Can I sync existing form submissions to Mailchimp?',
    body: 'Yes. Turn on Sync existing submissions while setting up the integration, or run Sync now later. A manual backfill can sync up to the latest 10,000 eligible submissions.',
    body_markdown: '',
    list: [],
  },
]

const ctaButtons = [
  {
    id: 2103,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Start free',
    type: 'Primary',
    showArrow: true,
  },
  { id: 2104, link: '/pricing/', text: 'See pricing', type: 'White', showArrow: false },
]

useHead({
  title: pageTitle,
  link: [{ hid: 'canonical', rel: 'canonical', href: pageUrl }],
  meta: [
    { property: 'article:modified_time', content: '2026-09-09T00:00:00.000Z' },
    { hid: 'description', name: 'description', content: pageDescription },
    {
      hid: 'keywords',
      name: 'keywords',
      content:
        'mailchimp form integration, mailchimp forms, mailchimp contact form, connect form to mailchimp, formester mailchimp',
    },
    { hid: 'og:site_name', property: 'og:site_name', content: 'Formester' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: pageUrl },
    { hid: 'og:title', property: 'og:title', content: pageTitle },
    { hid: 'og:description', property: 'og:description', content: pageDescription },
    { hid: 'og:image', property: 'og:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Formester Mailchimp form integration' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:site', name: 'twitter:site', content: '@_formester_' },
    { hid: 'twitter:url', name: 'twitter:url', content: pageUrl },
    { hid: 'twitter:title', name: 'twitter:title', content: pageTitle },
    { hid: 'twitter:description', name: 'twitter:description', content: pageDescription },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://formester.com/formester-logo-meta-image.png' },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Formester Mailchimp form integration' },
  ],
})

useJsonld([
  {
    '@context': 'https://schema.org',
    type: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.header,
        acceptedAnswer: { '@type': 'Answer', text: faq.body },
      })),
    }),
  },
  {
    '@context': 'https://schema.org',
    type: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formester.com/' },
        { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://formester.com/integrations/' },
        { '@type': 'ListItem', position: 3, name: 'Mailchimp', item: pageUrl },
      ],
    }),
  },
])
</script>
