<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="Available on the Personal plan"
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
      eyebrow="Why verify emails"
      description="A confirmation step at the source keeps fake, mistyped, and bot-generated emails out — so what you collect is clean and reachable from day one."
      columns="3"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="From email field to verified in four steps"
      description="Email verification rides on any email field you already have — flip one toggle and Formester handles the OTP flow for you. No code required."
      background="#f9fafb"
      :steps="c3_steps"
      :buttons="c3_buttons"
      class="page-component-item"
    />

    <CardGrid eyebrow="Where it helps" columns="4" :title="c4_title" :cards="c4_cards" class="page-component-item" />

    <TestimonialsV2
      version="feature"
      :heading="c5_heading"
      :testimonials="c5_testimonials"
      class="page-component-item"
    />

    <FaqSection centered :title="c6_title" :faqList="c6_faqList" class="page-component-item" />

    <CtaDark
      badge="Personal plan"
      heading="Start collecting emails you can actually reach"
      description="Add an email field, switch on Email Confirmation, and let respondents verify with a one-time code before they count."
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
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  'Ask respondents to confirm their address with a one-time code before their submission counts. Fake and mistyped emails never make it through — so every contact you collect is a real, reachable one.'
const c0_mockupHtml =
  "\u003Cstyle>.ev-step{display:grid;}.ev-step>div{grid-area:1/1;}.ev-enter{animation:evEnter 6s ease-in-out infinite;}.ev-done{opacity:0;animation:evDone 6s ease-in-out infinite;}.ev-digit{width:38px;height:46px;border:1px solid #eaecf0;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:700;color:#101828;line-height:1;background:#fff;}.ev-d1{animation:evD1 6s infinite;}.ev-d2{animation:evD2 6s infinite;}.ev-d3{animation:evD3 6s infinite;}.ev-d4{animation:evD4 6s infinite;}.ev-cursor{border-color:#6434d0;box-shadow:0 0 0 3px #f0ebfa;}@keyframes evEnter{0%,62%{opacity:1;}70%,100%{opacity:0;}}@keyframes evDone{0%,62%{opacity:0;}74%,100%{opacity:1;}}@keyframes evD1{0%,8%{color:transparent;}14%,100%{color:#101828;}}@keyframes evD2{0%,20%{color:transparent;}26%,100%{color:#101828;}}@keyframes evD3{0%,32%{color:transparent;}38%,100%{color:#101828;}}@keyframes evD4{0%,44%{color:transparent;}50%,100%{color:#101828;}}@media (prefers-reduced-motion:reduce){.ev-enter,.ev-done,.ev-d1,.ev-d2,.ev-d3,.ev-d4{animation:none!important;}.ev-enter{opacity:0;}.ev-done{opacity:1;}}\u003C/style><div style='max-width:420px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>Newsletter signup</span></div><div style='padding:18px 18px 20px;text-align:left;'><div style='font-size:11px;font-weight:600;color:#475467;margin-bottom:5px;line-height:1.1;'>Email address</div><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;margin-bottom:16px;'><svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='#98a2b3' stroke-width='2'><rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/></svg><span style='font-size:13px;color:#101828;line-height:1.1;'>maya@brightlabs.co</span></div><div class='ev-step'><div class='ev-enter'><div style='font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#98a2b3;margin-bottom:8px;line-height:1.1;'>Enter the 4-digit code</div><div style='font-size:11.5px;color:#697586;margin-bottom:12px;line-height:1.35;'>We sent a code to maya@brightlabs.co</div><div style='display:flex;gap:9px;'><span class='ev-digit ev-d1'>4</span><span class='ev-digit ev-d2'>8</span><span class='ev-digit ev-d3 ev-cursor'>2</span><span class='ev-digit ev-d4'>7</span></div></div><div class='ev-done'><div style='display:flex;align-items:center;gap:11px;border:1px solid #a6e9c5;background:#ecfdf3;border-radius:12px;padding:14px 15px;'><span style='width:34px;height:34px;border-radius:50%;background:#027a48;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span><div><div style='font-size:13.5px;font-weight:700;color:#05603a;line-height:1.2;'>Email verified</div><div style='font-size:11.5px;color:#067647;line-height:1.2;margin-top:2px;'>maya@brightlabs.co is confirmed</div></div></div></div></div></div></div>"
const c0_title = [
  {
    id: 4720,
    text: 'Collect emails ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4721,
    text: 'that are actually real',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1543,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get Started',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1542,
    link: 'https://youtu.be/OHSgb3pSnHo',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 82,
  text: 'Email Verification',
  tag: 'Personal',
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 4718,
    text: 'Only real addresses ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4714,
    text: 'make it onto your list',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 554,
    tag: 'Real contacts',
    tagColor: 'violet',
    title: 'Only genuine emails',
    body: "Respondents prove the address is theirs by entering a code, so you never collect emails that don't actually exist.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 552,
    tag: 'Less spam',
    tagColor: 'green',
    title: 'Fewer fake submissions',
    body: "Bots and throwaway addresses can't pass the OTP step, so junk entries are filtered out before they reach your results.",
    mockHtml: null,
    icon: null,
  },
  {
    id: 553,
    tag: 'Deliverability',
    tagColor: 'blue',
    title: 'Lower bounce rates',
    body: 'Verified addresses mean your emails actually land — protecting your sender reputation instead of bouncing back.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 555,
    tag: 'Follow-up',
    tagColor: 'amber',
    title: 'Reliable follow-ups',
    body: 'Receipts, reminders, and offers reach the right inbox because every address on the list has been confirmed.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 556,
    tag: 'Accuracy',
    tagColor: 'rose',
    title: 'No mistyped addresses',
    body: 'A single transposed letter usually goes unnoticed. Verification catches the typo while the respondent is still on the form.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 557,
    tag: 'Clean data',
    tagColor: 'violet',
    title: 'Less list cleanup',
    body: 'Stop bad emails at submission and skip the recurring chore of scrubbing dead addresses out of your database.',
    mockHtml: null,
    icon: null,
  },
]
const c3_steps = [
  {
    id: 138,
    title: 'Turn on Email Confirmation',
    description:
      "Click your form's email field, open the Advanced tab, and switch on Email Confirmation. That's the entire setup — no code, no extra service to connect.",
    rawHtml:
      "<div style='display:flex;flex-direction:column;gap:9px;'><div style='display:flex;gap:8px;font-size:11px;font-weight:600;'><span style='color:#98a2b3;'>General</span><span style='color:#101828;border-bottom:2px solid #6434d0;padding-bottom:3px;'>Advanced</span></div><div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;border-radius:9px;padding:10px 12px;background:#fff;box-shadow:0 4px 12px rgba(100,52,208,.16);'><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>Email Confirmation</span><span style='margin-left:auto;width:34px;height:19px;border-radius:999px;background:#6434d0;position:relative;flex-shrink:0;'><span style='position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:50%;background:#fff;'></span></span></div></div>",
    image: null,
  },
  {
    id: 137,
    title: 'Respondent enters their email',
    description:
      'On your live form, the respondent fills in their email address just like any other field — nothing new for them to learn.',
    rawHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:12px 14px;'><div style='font-size:11px;font-weight:600;color:#475467;margin-bottom:6px;line-height:1.1;'>Email address</div><div style='display:flex;align-items:center;gap:8px;border:1px solid #6434d0;border-radius:9px;padding:9px 11px;box-shadow:0 0 0 3px #f0ebfa;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#6434d0' stroke-width='2'><rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/></svg><span style='font-size:12.5px;color:#101828;line-height:1.1;'>maya@brightlabs.co</span></div></div>",
    image: null,
  },
  {
    id: 140,
    title: 'They confirm with the code',
    description:
      'Formester emails a one-time OTP code to that address. The respondent types it straight back into the form — no leaving the page to chase a link.',
    rawHtml:
      "<div style='display:flex;flex-direction:column;gap:10px;'><div style='font-size:11px;color:#697586;line-height:1.35;'>Code sent to maya@brightlabs.co</div><div style='display:flex;gap:8px;'><span style='width:30px;height:38px;border:1px solid #eaecf0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#101828;line-height:1;'>4</span><span style='width:30px;height:38px;border:1px solid #eaecf0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#101828;line-height:1;'>8</span><span style='width:30px;height:38px;border:1px solid #eaecf0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#101828;line-height:1;'>2</span><span style='width:30px;height:38px;border:1px solid #6434d0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#101828;line-height:1;box-shadow:0 0 0 3px #f0ebfa;'>7</span></div></div>",
    image: null,
  },
  {
    id: 139,
    title: 'Submission accepted',
    description:
      "Once the code matches, the address is confirmed and the submission counts. Anyone who can't verify simply never lands in your results.",
    rawHtml:
      "<div style='display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #a6e9c5;border-radius:10px;padding:11px 13px;'><span style='width:26px;height:26px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg></span><div style='font-size:12.5px;font-weight:600;color:#101828;line-height:1.2;'>Email verified · submission accepted</div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_title = [
  {
    id: 4716,
    text: 'Built for forms where ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4715,
    text: 'a real email matters',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 548,
    tag: 'Lead gen',
    tagColor: 'blue',
    title: 'Lead generation',
    body: 'Hand sales a list of confirmed, reachable prospects instead of fake addresses that bounce on the first outreach.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 549,
    tag: 'Gated content',
    tagColor: 'green',
    title: 'Gated downloads',
    body: 'Require a verified email before unlocking an ebook, whitepaper, or file — so gated content reaches genuine readers.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 551,
    tag: 'Events',
    tagColor: 'violet',
    title: 'Event registration',
    body: 'Confirm attendee emails up front so reminders, tickets, and updates always land in the right inbox.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 550,
    tag: 'Signups',
    tagColor: 'amber',
    title: 'Account signups',
    body: 'Start every new account on a verified address, cutting fake registrations and failed welcome emails.',
    mockHtml: null,
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4717,
    text: 'Teams keep their lists clean with Formester',
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
    id: 4719,
    text: 'Email verification FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2336,
    header: 'What is email verification on a form?',
    body: 'It asks respondents to confirm their email address with a one-time code before their submission is accepted. Formester emails a short OTP code to the address they entered; they type it back in, and only then does the submission count — so you only collect real, reachable emails.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2335,
    header: 'How do I turn on email verification?',
    body: "Add an email field to your form, click it to open its settings, go to the Advanced tab, and switch on Email Confirmation. There's no code to write — the OTP flow is handled for you.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2334,
    header: 'Does it use a confirmation link or an OTP code?',
    body: 'Formester sends a one-time OTP code to the address the respondent entered. They type the code straight back into the form, so they confirm without leaving the page or hunting for a link in their inbox.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2338,
    header: 'What happens if someone enters a fake or mistyped email?',
    body: "The code never arrives, so the respondent can't complete verification and the submission isn't accepted. Fake addresses and typos are stopped at the source instead of polluting your list later.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2339,
    header: 'Does email verification slow down real respondents?',
    body: 'No. Genuine respondents receive the code in seconds and type it in without leaving the form. The small step weeds out bots and bad addresses while real people barely notice it.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2337,
    header: 'Where is email verification useful?',
    body: 'Anywhere a real, reachable email matters — lead generation forms, gated content and downloads, event registration, and account signups all benefit from confirmed addresses.',
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1541,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get Started',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1540,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Email Verification for Forms | Confirm Real Emails with OTP',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/email-verification/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:55.154Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Verify respondents' email addresses with a one-time OTP code before a submission counts. Block fake and mistyped emails so you only collect real, reachable contacts — no code required.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Email Verification for Forms | Confirm Real Emails with OTP',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/email-verification/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Email Verification for Forms | Confirm Real Emails with OTP',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Verify respondents' email addresses with a one-time OTP code before a submission counts. Block fake and mistyped emails so you only collect real, reachable contacts — no code required.",
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
      content: 'https://formester.com/features/email-verification/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Email Verification for Forms | Confirm Real Emails with OTP',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        "Verify respondents' email addresses with a one-time OTP code before a submission counts. Block fake and mistyped emails so you only collect real, reachable contacts — no code required.",
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
      content: [],
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
        name: 'What is email verification on a form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'It asks respondents to confirm their email address with a one-time code before their submission is accepted. Formester emails a short OTP code to the address they entered; they type it back in, and only then does the submission count — so you only collect real, reachable emails.',
          '@type': 'Answer',
        },
      },
      {
        name: 'How do I turn on email verification?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Add an email field to your form, click it to open its settings, go to the Advanced tab, and switch on Email Confirmation. There's no code to write — the OTP flow is handled for you.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Does it use a confirmation link or an OTP code?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Formester sends a one-time OTP code to the address the respondent entered. They type the code straight back into the form, so they confirm without leaving the page or hunting for a link in their inbox.',
          '@type': 'Answer',
        },
      },
      {
        name: 'What happens if someone enters a fake or mistyped email?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "The code never arrives, so the respondent can't complete verification and the submission isn't accepted. Fake addresses and typos are stopped at the source instead of polluting your list later.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Does email verification slow down real respondents?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'No. Genuine respondents receive the code in seconds and type it in without leaving the form. The small step weeds out bots and bad addresses while real people barely notice it.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Where is email verification useful?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Anywhere a real, reachable email matters — lead generation forms, gated content and downloads, event registration, and account signups all benefit from confirmed addresses.',
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
