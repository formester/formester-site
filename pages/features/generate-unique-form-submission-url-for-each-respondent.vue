<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="Available on the Business plan"
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
      eyebrow="What you get"
      description="Hand each invitee their own link instead of one shared form. The moment a reply comes in, you already know whose it is."
      columns="3"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Why it matters"
      colUs="Unique link per respondent"
      colThem="One link shared with everyone"
      :note="c3_note"
      :title="c3_title"
      :rows="c3_rows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where it shines"
      description="Any time you already know who you're sending the form to, unique links turn a generic form into a personally-tracked task."
      columns="3"
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
      badge="Business plan"
      heading="Give every respondent their own link"
      description="Generate a unique URL per person, tie each submission to a named individual, and allow one clean response per link."
      :buttons="c7_buttons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CardGrid from '@/components/v2/CardGrid.vue'
import ComparisonTable from '@/components/v2/ComparisonTable.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Generate a personal form link for each person you invite. Every submission is tied to a named individual, so you always know exactly who replied — with one response per link and no anonymous guesswork.'
const c0_mockupHtml =
  "\u003Cstyle>.uu-row{display:flex;align-items:center;gap:10px;padding:11px 13px;border:1px solid #eaecf0;border-radius:10px;background:#fff;}.uu-av{width:28px;height:28px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;line-height:1;}.uu-meta{display:flex;flex-direction:column;gap:3px;min-width:0;}.uu-name{font-size:12px;font-weight:600;color:#101828;line-height:1.1;}.uu-link{font-size:10.5px;color:#6434d0;font-family:ui-monospace,Menlo,monospace;line-height:1.1;white-space:nowrap;overflow:hidden;}.uu-new{margin-left:auto;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;line-height:1;white-space:nowrap;}.uu-tok{display:inline-block;overflow:hidden;white-space:pre;vertical-align:bottom;width:0;}.uu-r1 .uu-tok{animation:uuType1 9s infinite;}.uu-r2 .uu-tok{animation:uuType2 9s infinite;}.uu-r3{opacity:0;transform:translateY(6px);animation:uuRow3 9s infinite;}.uu-r3 .uu-tok{animation:uuType3 9s infinite;}.uu-r3 .uu-new{animation:uuBadge3 9s infinite;}@keyframes uuType1{0%,4%{width:0}10%,100%{width:6ch}}@keyframes uuType2{0%,16%{width:0}22%,100%{width:6ch}}@keyframes uuRow3{0%,40%{opacity:0;transform:translateY(6px)}48%,100%{opacity:1;transform:translateY(0)}}@keyframes uuType3{0%,48%{width:0}58%,100%{width:6ch}}@keyframes uuBadge3{0%,56%{opacity:0;transform:scale(.6)}66%,100%{opacity:1;transform:scale(1)}}@media (prefers-reduced-motion:reduce){.uu-r1 .uu-tok,.uu-r2 .uu-tok,.uu-r3 .uu-tok{animation:none!important;width:6ch!important;}.uu-r3{animation:none!important;opacity:1!important;transform:none!important;}.uu-r3 .uu-new{animation:none!important;opacity:1!important;transform:none!important;}}\u003C/style><div style='max-width:430px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;line-height:1.1;'>app.formester.com · Unique Links</span></div><div style='padding:16px;display:flex;flex-direction:column;gap:9px;text-align:left;'><div class='uu-row uu-r1'><span class='uu-av' style='background:#6434d0;'>JD</span><div class='uu-meta'><span class='uu-name'>Jordan Diaz</span><span class='uu-link'>formester.com/f/<span class='uu-tok'>abc12</span></span></div><span class='uu-new'>Link sent</span></div><div class='uu-row uu-r2'><span class='uu-av' style='background:#7c4ce0;'>MK</span><div class='uu-meta'><span class='uu-name'>Mia Kovač</span><span class='uu-link'>formester.com/f/<span class='uu-tok'>9xk44</span></span></div><span class='uu-new'>Link sent</span></div><div class='uu-row uu-r3'><span class='uu-av' style='background:#b9a6ec;'>AO</span><div class='uu-meta'><span class='uu-name'>Amara Okafor</span><span class='uu-link'>formester.com/f/<span class='uu-tok'>r7t08</span></span></div><span class='uu-new'>New link</span></div></div></div>"
const c0_title = [
  {
    id: 4776,
    text: 'A unique link for ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4777,
    text: 'every respondent',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1567,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get Started',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1566,
    link: '/pricing',
    text: 'See pricing',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 88,
  text: 'Unique Submission URLs',
  tag: 'Business',
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 4774,
    text: 'Every response, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4769,
    text: 'tied to a person',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 598,
    tag: 'Per-respondent link',
    tagColor: 'violet',
    title: 'A unique URL for each person',
    body: 'Add recipients or upload a CSV and Formester mints a personal link for everyone on the list. No two people ever share the same URL.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;'><span style='width:20px;height:20px;border-radius:50%;background:#6434d0;color:#fff;font-size:9px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;'>JD</span><span style='font-size:10px;color:#6434d0;font-family:ui-monospace,Menlo,monospace;line-height:1.2;'>/f/abc12</span></div><div style='display:flex;align-items:center;gap:8px;'><span style='width:20px;height:20px;border-radius:50%;background:#7c4ce0;color:#fff;font-size:9px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;'>MK</span><span style='font-size:10px;color:#6434d0;font-family:ui-monospace,Menlo,monospace;line-height:1.2;'>/f/9xk44</span></div></div>",
    icon: null,
  },
  {
    id: 600,
    tag: 'Attribution',
    tagColor: 'green',
    title: 'Know who replied — automatically',
    body: 'Because the link identifies the sender, every submission lands already attributed. No "please add your name" field, no matching responses to people by hand.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:10px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='width:24px;height:24px;border-radius:50%;background:#027a48;color:#fff;font-size:9px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;'>MK</span><div style='display:flex;flex-direction:column;gap:2px;min-width:0;'><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.1;'>Mia Kovač</span><span style='font-size:9.5px;color:#697586;line-height:1.1;'>Submitted · attributed</span></div><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;line-height:1;'>Verified</span></div>",
    icon: null,
  },
  {
    id: 599,
    tag: 'One per link',
    tagColor: 'blue',
    title: 'One submission per recipient',
    body: "Each link accepts a single response, so you can't get duplicate or anonymous entries inflating your results. One person, one reply.",
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;border:1px solid #d3f0e0;background:#f4fcf7;border-radius:8px;padding:7px 10px;'><span style='font-size:11px;color:#027a48;font-weight:600;line-height:1.1;'>First open — form ready</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;line-height:1;'>Active</span></div><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;background:#f9fafb;border-radius:8px;padding:7px 10px;'><span style='font-size:11px;color:#697586;font-weight:600;line-height:1.1;'>After submit — link closes</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#697586;background:#eef1f4;border-radius:999px;padding:2px 8px;line-height:1;'>Used</span></div></div>",
    icon: null,
  },
]
const c3_note =
  'A shared link tells you what was submitted; a unique link tells you who submitted it. For invitations, reviews, and approvals, that attribution is the whole point.'
const c3_title = [
  {
    id: 4768,
    text: 'Unique link per respondent vs ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4770,
    text: 'one link for everyone',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_rows = [
  {
    id: 85,
    feature: 'Know exactly who replied',
    us: 'Tied to a named person',
    them: 'Anonymous unless they type it',
  },
  {
    id: 86,
    feature: 'Duplicate & repeat entries',
    us: 'One submission per link',
    them: 'Anyone can submit again',
  },
  {
    id: 87,
    feature: 'Pre-identify respondents',
    us: 'Fields can be pre-filled per person',
    them: 'Everyone starts from blank',
  },
  {
    id: 90,
    feature: 'Clean attribution in results',
    us: 'Every row mapped to a contact',
    them: 'Manual matching afterward',
  },
  {
    id: 89,
    feature: 'Control over distribution',
    us: 'Only invited people can respond',
    them: 'Link can be forwarded to anyone',
  },
  {
    id: 88,
    feature: "Chasing who hasn't finished",
    us: 'See open / midway / submitted',
    them: "No idea who's outstanding",
  },
]
const c4_title = [
  {
    id: 4775,
    text: 'Built for forms with ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4773,
    text: 'a known audience',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 601,
    tag: 'Outreach',
    tagColor: 'violet',
    title: 'Personalised email campaigns',
    body: 'Send each contact their own link from your invite, then watch responses come back already labelled — perfect for assessments, surveys, and feedback drives.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:6px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.2;'>Hi Jordan,</span><span style='font-size:10px;color:#697586;line-height:1.3;'>Here's your personal link to complete the review:</span><span style='font-size:10px;color:#6434d0;font-family:ui-monospace,Menlo,monospace;background:#f0ebfa;border-radius:6px;padding:4px 8px;line-height:1.2;'>formester.com/f/abc12</span></div>",
    icon: null,
  },
  {
    id: 602,
    tag: 'Accounts',
    tagColor: 'green',
    title: 'Account & customer-specific forms',
    body: 'Give each client or account their own link so submissions slot straight against the right record — onboarding, renewals, or customer-specific requests.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;'><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.1;'>Northpeak Inc.</span><span style='margin-left:auto;font-size:9.5px;color:#6434d0;font-family:ui-monospace,Menlo,monospace;line-height:1.1;'>/f/np-204</span></div><div style='display:flex;align-items:center;gap:8px;'><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.1;'>Brightlabs Co.</span><span style='margin-left:auto;font-size:9.5px;color:#6434d0;font-family:ui-monospace,Menlo,monospace;line-height:1.1;'>/f/bl-118</span></div></div>",
    icon: null,
  },
  {
    id: 603,
    tag: 'Internal',
    tagColor: 'blue',
    title: 'Controlled distributions',
    body: 'When only invited people should respond — internal reviews, approval flows, onboarding steps — unique links keep the form locked to your list and one reply per person.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:10px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='width:24px;height:24px;border-radius:6px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.4'><rect x='5' y='11' width='14' height='9' rx='2'/><path d='M8 11V8a4 4 0 0 1 8 0v3'/></svg></span><div style='font-size:11px;color:#475467;line-height:1.4;'>Invited list only — <span style='font-weight:700;color:#101828;'>12 of 12 links issued</span></div></div>",
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4771,
    text: 'Teams track every respondent with Formester',
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
    id: 4772,
    text: 'Unique submission link FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2370,
    header: 'How do I create a unique link for each respondent?',
    body: 'Open your published form, go to the Unique Links section, then add recipients individually or upload a CSV. Formester generates a personal link for every person on the list — each one mapped to that individual.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2371,
    header: 'Can someone submit more than once with their link?',
    body: "No. Each unique link accepts a single submission. Once a person has responded, their link is used up, so you won't get duplicate or repeat entries from the same recipient.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2373,
    header: 'Do respondents have to log in or create an account?',
    body: "No. The link itself identifies them, so they just click it and fill out the form. There's no account to create and no password to remember — yet every response is still tied to the right person.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2372,
    header: 'Can I pre-fill fields for each respondent?',
    body: 'Yes. Because a unique link already knows who the respondent is, you can pre-identify them and pre-fill known details — so they confirm their information rather than typing it from scratch.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2374,
    header: "Can I see who has and hasn't responded?",
    body: "Yes. The Unique Links view shows the status of each link — who opened it, who's partway through, and who has submitted — so you can follow up with only the people who haven't finished.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2375,
    header: 'What happens if a unique link gets forwarded?',
    body: "The link still points to that one recipient and accepts only a single submission, so forwarding it doesn't let an extra person add their own separate response. It keeps your distribution controlled and your attribution clean.",
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1565,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get Started',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1564,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Unique Form Submission URL for Each Respondent | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/generate-unique-form-submission-url-for-each-respondent/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:45.634Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Give every respondent their own unique form link. Tie each submission to a named person, allow one response per link, and pre-identify who's responding — for clean, trustworthy attribution.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Unique Form Submission URL for Each Respondent | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/generate-unique-form-submission-url-for-each-respondent/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Unique Form Submission URL for Each Respondent | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Give every respondent their own unique form link. Tie each submission to a named person, allow one response per link, and pre-identify who's responding — for clean, trustworthy attribution.",
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
      content: 'https://formester.com/features/generate-unique-form-submission-url-for-each-respondent/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Unique Form Submission URL for Each Respondent | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        "Give every respondent their own unique form link. Tie each submission to a named person, allow one response per link, and pre-identify who's responding — for clean, trustworthy attribution.",
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
      content: ['unique form submission url'],
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
        name: 'How do I create a unique link for each respondent?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Open your published form, go to the Unique Links section, then add recipients individually or upload a CSV. Formester generates a personal link for every person on the list — each one mapped to that individual.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can someone submit more than once with their link?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "No. Each unique link accepts a single submission. Once a person has responded, their link is used up, so you won't get duplicate or repeat entries from the same recipient.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Do respondents have to log in or create an account?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "No. The link itself identifies them, so they just click it and fill out the form. There's no account to create and no password to remember — yet every response is still tied to the right person.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I pre-fill fields for each respondent?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Because a unique link already knows who the respondent is, you can pre-identify them and pre-fill known details — so they confirm their information rather than typing it from scratch.',
          '@type': 'Answer',
        },
      },
      {
        name: "Can I see who has and hasn't responded?",
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. The Unique Links view shows the status of each link — who opened it, who's partway through, and who has submitted — so you can follow up with only the people who haven't finished.",
          '@type': 'Answer',
        },
      },
      {
        name: 'What happens if a unique link gets forwarded?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "The link still points to that one recipient and accepts only a single submission, so forwarding it doesn't let an extra person add their own separate response. It keeps your distribution controlled and your attribution clean.",
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
