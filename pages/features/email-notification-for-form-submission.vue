<template>
  <div>
    <HeroV2
      :description="c0_description"
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
      showTrustBadges
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Why it matters"
      :description="c2_description"
      columns="3"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="What you control"
      :description="c3_description"
      columns="2"
      :title="c3_title"
      :cards="c3_cards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where teams use it"
      description="Wherever a form kicks off work for your team, a submission notification puts the right person on it the moment it arrives."
      columns="4"
      :title="c4_title"
      :cards="c4_cards"
      class="page-component-item"
    />

    <TestimonialsV2
      version="feature"
      :heading="c5_heading"
      :testimonials="c5_testimonials"
      class="page-component-item"
    />

    <FaqSection centered :title="c6_title" :faqList="c6_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Never miss a form submission again"
      description="Turn on email notifications, add your team as recipients, and get an instant alert with the answers on every new submission."
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
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Get an email the moment someone submits your form — straight to you and your whole team. See the answers at a glance, loop in everyone who needs to know, and respond before the lead goes cold. No code, no refreshing the dashboard.'
const c0_mockupHtml =
  "\u003Cstyle>.en-row{opacity:0;transform:translateY(10px);animation:enRow 6s ease-in-out infinite;}@keyframes enRow{0%,4%{opacity:0;transform:translateY(10px);}14%,100%{opacity:1;transform:translateY(0);}}.en-dot{opacity:0;transform:scale(.4);animation:enDot 6s ease-in-out infinite;}@keyframes enDot{0%,6%{opacity:0;transform:scale(.4);}16%{opacity:1;transform:scale(1.2);}24%,100%{opacity:1;transform:scale(1);}}.en-count{animation:enCount 6s ease-in-out infinite;}@keyframes enCount{0%,8%{opacity:0;}18%,100%{opacity:1;}}@media (prefers-reduced-motion:reduce){.en-row,.en-dot,.en-count{animation:none !important;opacity:1 !important;transform:none !important;}}\u003C/style><div style='max-width:430px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;line-height:1;color:#697586;'>Your inbox · Team</span></div><div style='padding:12px;display:flex;flex-direction:column;gap:8px;text-align:left;'><div style='display:flex;align-items:center;gap:8px;padding:0 4px 2px;'><span style='font-size:11px;font-weight:700;line-height:1;color:#101828;'>Inbox</span><span class='en-count' style='font-size:9.5px;font-weight:700;line-height:1;color:#fff;background:#6434d0;border-radius:999px;padding:2px 7px;'>1 new</span><span style='margin-left:auto;font-size:9.5px;line-height:1;color:#98a2b3;'>just now</span></div><div class='en-row' style='position:relative;display:flex;align-items:flex-start;gap:11px;background:#f7f4fd;border:1px solid #e4d9f7;border-radius:11px;padding:12px 13px;'><span style='width:34px;height:34px;border-radius:9px;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M4 4h16v16H4z'/><path d='m4 6 8 6 8-6'/></svg></span><div style='display:flex;flex-direction:column;gap:5px;min-width:0;flex:1;'><div style='display:flex;align-items:center;gap:7px;'><span class='en-dot' style='width:7px;height:7px;border-radius:50%;background:#6434d0;flex-shrink:0;'></span><span style='font-size:12.5px;font-weight:700;line-height:1.2;color:#101828;'>New submission · Contact form</span></div><div style='font-size:10.5px;line-height:1.2;color:#697586;'>Formester &lt;forms@brightlabs.co&gt; · to you, sales</div><div style='margin-top:3px;border-top:1px solid #e4d9f7;padding-top:7px;display:flex;flex-direction:column;gap:4px;'><div style='font-size:10.5px;line-height:1.3;color:#475467;'><span style='color:#8a8f9c;'>Name</span> &nbsp;Priya Nair</div><div style='font-size:10.5px;line-height:1.3;color:#475467;'><span style='color:#8a8f9c;'>Email</span> &nbsp;priya@maplelane.co</div><div style='font-size:10.5px;line-height:1.3;color:#475467;'><span style='color:#8a8f9c;'>Message</span> &nbsp;Can we book a demo this week?</div></div><span style='align-self:flex-start;margin-top:3px;display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:700;line-height:1;color:#6434d0;background:#fff;border:1px solid #e4d9f7;border-radius:7px;padding:5px 9px;'>View response<svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='#6434d0' stroke-width='2.6'><path d='M5 12h14M13 6l6 6-6 6'/></svg></span></div></div><div style='display:flex;align-items:flex-start;gap:11px;background:#fff;border:1px solid #eaecf0;border-radius:11px;padding:12px 13px;opacity:.55;'><span style='width:34px;height:34px;border-radius:9px;background:#eef0f4;color:#98a2b3;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M4 4h16v16H4z'/><path d='m4 6 8 6 8-6'/></svg></span><div style='display:flex;flex-direction:column;gap:3px;min-width:0;'><span style='font-size:12px;font-weight:600;line-height:1.2;color:#475467;'>New submission · Order form</span><span style='font-size:10.5px;line-height:1.2;color:#98a2b3;'>2 items · receipt attached</span></div><span style='margin-left:auto;font-size:9.5px;line-height:1;color:#98a2b3;'>9:14</span></div></div></div>"
const c0_title = [
  {
    id: 4712,
    text: 'Know the instant ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4713,
    text: 'a submission arrives',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1538,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1539,
    link: 'https://youtu.be/hdGKWCvzLaA',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 81,
  text: 'Email Notifications',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_description =
  'A form is only useful if someone acts on what comes in. An instant alert in your own inbox means the right person sees every submission the moment it lands — and can move on it before the moment passes.'
const c2_title = [
  {
    id: 4706,
    text: 'Never let a submission ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4709,
    text: 'sit unseen',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 539,
    tag: 'Never miss it',
    tagColor: 'violet',
    title: 'Every response reaches you',
    body: "No more checking the dashboard or finding leads days later. The instant someone submits, an email lands in your inbox — so a new order, application, or inquiry can't slip through unnoticed.",
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:24px;height:24px;border-radius:7px;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M4 4h16v16H4z'/><path d='m4 6 8 6 8-6'/></svg></span><div style='font-size:11.5px;font-weight:600;line-height:1.2;color:#101828;'>New submission · Contact form</div><span style='margin-left:auto;font-size:9px;font-weight:700;line-height:1;color:#fff;background:#6434d0;border-radius:999px;padding:3px 7px;'>now</span></div>",
    icon: null,
  },
  {
    id: 546,
    tag: 'Respond fast',
    tagColor: 'blue',
    title: "Reply while it's still warm",
    body: 'Leads and questions go cold quickly. Getting alerted the second a form is submitted means you can follow up in minutes, not the next morning — and beat slower competitors to the reply.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='width:7px;height:7px;border-radius:50%;background:#027a48;flex-shrink:0;'></span>Submitted<span style='margin-left:auto;font-weight:700;color:#697586;'>10:02</span></div><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='width:7px;height:7px;border-radius:50%;background:#6434d0;flex-shrink:0;'></span>You replied<span style='margin-left:auto;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;line-height:1;'>3 min later</span></div></div>",
    icon: null,
  },
  {
    id: 543,
    tag: 'Loop in the team',
    tagColor: 'green',
    title: 'The right people all know',
    body: 'Add everyone who should act — sales, support, ops, or a shared inbox. One submission alerts the whole team at once, so nothing waits on a single person to forward it on.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><div style='display:flex;'><span style='width:24px;height:24px;border-radius:50%;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:9.5px;font-weight:700;line-height:1;border:2px solid #fff;'>AL</span><span style='width:24px;height:24px;border-radius:50%;background:#7c4ce0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:9.5px;font-weight:700;line-height:1;border:2px solid #fff;margin-left:-8px;'>TM</span><span style='width:24px;height:24px;border-radius:50%;background:#b9a6ec;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:9.5px;font-weight:700;line-height:1;border:2px solid #fff;margin-left:-8px;'>+2</span></div><div style='font-size:11px;font-weight:600;line-height:1.2;color:#101828;'>Notified on submit</div></div>",
    icon: null,
  },
]
const c3_description =
  "Submission notifications aren't one-size-fits-all. Choose who's alerted, how much detail rides along, and which form goes to whom — then send it all from your own address."
const c3_title = [
  {
    id: 4711,
    text: 'Alerts shaped ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4710,
    text: 'exactly how you want',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_cards = [
  {
    id: 542,
    tag: 'Recipients',
    tagColor: 'violet',
    title: 'Decide who gets notified',
    body: 'Add one teammate or your whole team — as many recipients as you need on a single form. Route a contact form to sales and a support form to your help desk, all from one settings panel.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;'><span style='width:20px;height:20px;border-radius:50%;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;line-height:1;flex-shrink:0;'>SA</span><span style='font-size:11px;line-height:1.1;color:#101828;'>sales@brightlabs.co</span><span style='margin-left:auto;font-size:9px;font-weight:700;line-height:1;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 7px;'>Notified</span></div><div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;'><span style='width:20px;height:20px;border-radius:50%;background:#7c4ce0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;line-height:1;flex-shrink:0;'>OP</span><span style='font-size:11px;line-height:1.1;color:#101828;'>ops@brightlabs.co</span><span style='margin-left:auto;font-size:9px;font-weight:700;line-height:1;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 7px;'>Notified</span></div></div>",
    icon: null,
  },
  {
    id: 544,
    tag: 'Include the answers',
    tagColor: 'blue',
    title: 'Triage without leaving your inbox',
    body: 'Drop the submitted answers right into the email so you can read and prioritise at a glance, and attach a full PDF copy of every submission for your records. You set how much detail each alert carries.',
    mockHtml:
      "<div style='border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;display:flex;flex-direction:column;gap:6px;'><div style='font-size:11px;font-weight:700;line-height:1.2;color:#101828;'>Submission details</div><div style='font-size:10.5px;line-height:1.3;color:#475467;'><span style='color:#8a8f9c;'>Name</span> &nbsp;Priya Nair</div><div style='font-size:10.5px;line-height:1.3;color:#475467;'><span style='color:#8a8f9c;'>Budget</span> &nbsp;$5,000+</div><div style='margin-top:3px;display:inline-flex;align-items:center;gap:6px;font-size:9.5px;font-weight:700;line-height:1;color:#6434d0;background:#f0ebfa;border-radius:7px;padding:5px 9px;align-self:flex-start;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='#6434d0' stroke-width='2'><path d='M4 4h16v16H4z'/><path d='M8 2v4M16 2v4'/></svg>submission.pdf attached</div></div>",
    icon: null,
  },
  {
    id: 545,
    tag: 'Per-form routing',
    tagColor: 'green',
    title: 'Each form to the right people',
    body: 'Notifications are configured per form, so every form sends to exactly who should handle it. Job applications alert HR, orders alert fulfilment, inquiries alert sales — no shared inbox needed.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>Contact form</span><span style='color:#b9a6ec;font-weight:700;'>&#8594;</span><span style='color:#697586;'>sales</span></div><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>Job application</span><span style='color:#b9a6ec;font-weight:700;'>&#8594;</span><span style='color:#697586;'>HR</span></div><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>Order form</span><span style='color:#b9a6ec;font-weight:700;'>&#8594;</span><span style='color:#697586;'>fulfilment</span></div></div>",
    icon: null,
  },
  {
    id: 547,
    tag: 'Your address',
    tagColor: 'amber',
    title: 'Send from your own domain',
    body: 'Customise the subject and sender, and connect your own SMTP server so alerts arrive from your branded address and stay out of spam folders — clear, consistent, and unmistakably yours.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:26px;height:26px;border-radius:7px;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;line-height:1;flex-shrink:0;'>BL</span><div style='display:flex;flex-direction:column;gap:2px;min-width:0;'><span style='font-size:11px;font-weight:600;line-height:1.2;color:#101828;'>forms@brightlabs.co</span><span style='font-size:10px;line-height:1.2;color:#697586;'>Custom SMTP connected</span></div><span style='margin-left:auto;font-size:9px;font-weight:700;line-height:1;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;'>Verified</span></div>",
    icon: null,
  },
]
const c4_title = [
  {
    id: 4704,
    text: 'An alert that pays off ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4705,
    text: 'on every form',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 537,
    tag: 'Sales leads',
    tagColor: 'violet',
    title: 'Inquiries & demo requests',
    body: 'Get pinged the second a prospect submits, so sales can reply while interest is high — and beat the competitors still checking once a day.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>New lead</span><span style='margin-left:auto;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 8px;line-height:1;'>now</span></div><div style='font-size:10.5px;line-height:1.3;color:#697586;'>Demo requested · reply fast</div></div>",
    icon: null,
  },
  {
    id: 538,
    tag: 'Support',
    tagColor: 'blue',
    title: 'Help & contact forms',
    body: 'Route every help request straight to your support inbox with the question in the body, so the team can triage and respond without delay.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>Support request</span><span style='margin-left:auto;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;line-height:1;'>to support</span></div><div style='font-size:10.5px;line-height:1.3;color:#697586;'>Question included in alert</div></div>",
    icon: null,
  },
  {
    id: 541,
    tag: 'Hiring',
    tagColor: 'green',
    title: 'Job applications',
    body: "Send each application to HR the moment it's submitted, with answers attached, so candidates get a quick first response and nothing waits.",
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>New applicant</span><span style='margin-left:auto;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 8px;line-height:1;'>to HR</span></div><div style='font-size:10.5px;line-height:1.3;color:#697586;'>Resume &amp; answers attached</div></div>",
    icon: null,
  },
  {
    id: 540,
    tag: 'Internal requests',
    tagColor: 'amber',
    title: 'Orders & internal forms',
    body: 'Alert ops or fulfilment on every new order, IT ticket, or internal request, so the right team picks it up instead of letting it queue unseen.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>New order</span><span style='margin-left:auto;font-weight:700;color:#92400e;background:#fef3c7;border-radius:999px;padding:2px 8px;line-height:1;'>to ops</span></div><div style='font-size:10.5px;line-height:1.3;color:#697586;'>Details &amp; receipt attached</div></div>",
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4707,
    text: 'Teams stay on top of every submission with Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c5_testimonials = [
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
    id: 34,
    name: 'Bency',
    position: 'Product Manager',
    organization: 'Northgate Digital Solutions',
    comment:
      "Formester's AI form generator transformed how quickly we build forms. The drag-and-drop builder paired with AI-generated templates means I can spin up a survey or poll in minutes, not hours. Conditional logic, file uploads, and seamless integrations make it incredibly versatile and the customization options let every form match our branding perfectly. Their support team is exceptional too. It's the only form and survey tool we recommend",
    createdAt: '2025-06-29T23:23:10.541Z',
    updatedAt: '2026-05-03T09:30:00.533Z',
    publishedAt: '2026-05-03T09:30:00.530Z',
    companyLogo: {
      id: 3652,
      imageAlt: null,
      imageUrl: null,
      width: null,
      height: null,
      image: null,
    },
  },
  {
    id: 35,
    name: 'Roger',
    position: 'Marketing Specialist',
    organization: 'BrightPath Technologies',
    comment:
      'I use Formester for my form-building needs and I’m thoroughly impressed. The platform is rich with features… What really sets them apart is their exceptional customer service (responses typically within 10 minutes). The pricing is also very reasonable… Highly recommended!\n',
    createdAt: '2025-06-29T23:29:19.225Z',
    updatedAt: '2025-10-31T04:00:58.697Z',
    publishedAt: '2025-06-29T23:29:21.134Z',
    companyLogo: {
      id: 3649,
      imageAlt: 'brightpath-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4094,
        name: 'brightpath-logo.png',
        alternativeText: 'brightpath-logo',
        caption: 'brightpath-logo',
        width: 200,
        height: 49,
        formats: null,
        hash: 'brightpath_logo_6ef0922a60',
        ext: '.png',
        mime: 'image/png',
        size: 2.5,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/brightpath_logo_6ef0922a60.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-31T04:00:11.712Z',
        updatedAt: '2025-10-31T04:00:11.712Z',
      },
    },
  },
  {
    id: 36,
    name: 'Ye Qi Lai',
    position: 'UX Designer',
    organization: 'Eastview Consulting',
    comment:
      'Formester is one of the best underrated survey tools out there… It’s extremely customizable… Their support is awesome… I absolutely recommend this to anyone looking for an alternative to the usual form creators.',
    createdAt: '2025-06-29T23:30:04.374Z',
    updatedAt: '2025-10-31T04:00:30.746Z',
    publishedAt: '2025-06-29T23:30:06.260Z',
    companyLogo: {
      id: 3648,
      imageAlt: 'eastview-logo-header',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4097,
        name: 'eastview-logo-header-300x120 1.png',
        alternativeText: 'eastview-logo-header',
        caption: 'eastview-logo-header',
        width: 200,
        height: 80,
        formats: null,
        hash: 'eastview_logo_header_300x120_1_d9c231e93b',
        ext: '.png',
        mime: 'image/png',
        size: 3.18,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/eastview_logo_header_300x120_1_d9c231e93b.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-31T04:00:11.854Z',
        updatedAt: '2025-10-31T04:00:11.854Z',
      },
    },
  },
]
const c6_title = [
  {
    id: 4708,
    text: 'Email notification FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2327,
    header: 'What is an email notification for a form submission?',
    body: "It's an automatic email alert sent to you and your team the moment someone submits your form. Unlike an autoresponder — which replies to the person who filled out the form — a submission notification lands in your own inbox so you know a new lead, order, or request has arrived and can act on it right away.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2326,
    header: 'How do I turn on email notifications for form submissions?',
    body: 'Open your form, go to Settings → Email Notifications, click Add Email and enter the addresses that should be alerted, then customise the subject and sender and hit Save. From that point on, every new submission triggers an instant email to whoever you listed — no code required.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2333,
    header: 'Can I notify more than one person about a submission?',
    body: 'Yes. Add as many recipients as you need so the whole team is alerted on every new submission — sales, support, ops, or a shared inbox. Everyone who should know is looped in automatically, without anyone forwarding emails by hand.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2329,
    header: 'Does the notification include the submitted answers?',
    body: "Yes. The alert can carry the respondent's answers right in the email body so you can triage at a glance, and you can attach a full PDF copy of the submission for your records. You decide how much detail each notification includes.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2330,
    header: 'Can different forms send alerts to different people?',
    body: 'Yes. Notifications are configured per form, so your contact form can alert support while your job-application form alerts HR and your order form alerts fulfilment. Each form routes to exactly the right people.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2328,
    header: 'Will I get notified for embedded and shared forms too?',
    body: "Yes. You'll receive an alert for every submission no matter how the form was filled — opened from a shared link, embedded on your website, or used on a landing page. The notification fires on submission, not on where the form lives.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2331,
    header: 'Can I send notifications from my own email address?',
    body: 'Yes. Customise the sender details and connect your own SMTP server so submission alerts arrive from your branded address and stay clear of spam folders. Subject lines and content are fully customisable too.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2332,
    header: 'Is submission email notification free to use?',
    body: 'Yes. Build a form, add your recipients, and start getting instant submission alerts for free — no code and no extra tools required.',
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1536,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1537,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Email Notification for Form Submissions | Instant Submission Alerts',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/email-notification-for-form-submission/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:51.817Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Get an instant email the moment someone submits your form. Notify yourself and your whole team, include the answers, and route alerts per form — so no lead, order, or request is ever missed.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Email Notification for Form Submissions | Instant Submission Alerts',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/email-notification-for-form-submission/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Email Notification for Form Submissions | Instant Submission Alerts',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Get an instant email the moment someone submits your form. Notify yourself and your whole team, include the answers, and route alerts per form — so no lead, order, or request is ever missed.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/features/email-notification-for-form-submission/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Email Notification for Form Submissions | Instant Submission Alerts',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Get an instant email the moment someone submits your form. Notify yourself and your whole team, include the answers, and route alerts per form — so no lead, order, or request is ever missed.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester.com/formester-logo-meta-image.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Formester Logo',
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
      content: ['email notification for form submission'],
    },
  ],
})
useJsonld([
  {
    '@context': 'https://schema.org',
    url: 'https://formester.com',
    logo: 'https://formester.com/logo.svg',
    name: 'Formester',
    '@type': 'Organization',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        name: 'What is an email notification for a form submission?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "It's an automatic email alert sent to you and your team the moment someone submits your form. Unlike an autoresponder — which replies to the person who filled out the form — a submission notification lands in your own inbox so you know a new lead, order, or request has arrived and can act on it right away.",
          '@type': 'Answer',
        },
      },
      {
        name: 'How do I turn on email notifications for form submissions?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Open your form, go to Settings → Email Notifications, click Add Email and enter the addresses that should be alerted, then customise the subject and sender and hit Save. From that point on, every new submission triggers an instant email to whoever you listed — no code required.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I notify more than one person about a submission?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Add as many recipients as you need so the whole team is alerted on every new submission — sales, support, ops, or a shared inbox. Everyone who should know is looped in automatically, without anyone forwarding emails by hand.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Does the notification include the submitted answers?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. The alert can carry the respondent's answers right in the email body so you can triage at a glance, and you can attach a full PDF copy of the submission for your records. You decide how much detail each notification includes.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Can different forms send alerts to different people?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Notifications are configured per form, so your contact form can alert support while your job-application form alerts HR and your order form alerts fulfilment. Each form routes to exactly the right people.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Will I get notified for embedded and shared forms too?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. You'll receive an alert for every submission no matter how the form was filled — opened from a shared link, embedded on your website, or used on a landing page. The notification fires on submission, not on where the form lives.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I send notifications from my own email address?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Customise the sender details and connect your own SMTP server so submission alerts arrive from your branded address and stay clear of spam folders. Subject lines and content are fully customisable too.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is submission email notification free to use?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Build a form, add your recipients, and start getting instant submission alerts for free — no code and no extra tools required.',
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
