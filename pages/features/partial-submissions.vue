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

    <CalloutDiagram
      eyebrow="Anatomy"
      :description="c2_description"
      :mockHtml="c2_mockHtml"
      :title="c2_title"
      :pins="c2_pins"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Why use it"
      description="Every unfinished form is data you'd normally lose. Partial submissions hands it back to you — so you can recover the lead, fix what's broken, and follow up."
      columns="3"
      :title="c3_title"
      :cards="c3_cards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where it earns its keep"
      description="Anywhere drop-off costs you — leads, signups, or sales — capturing the partial entry turns a dead end into a second chance."
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
      heading="Stop losing the forms people don't finish"
      description="Toggle on Partial Submissions, publish your form, and start capturing every incomplete entry."
      :buttons="c7_buttons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CalloutDiagram from '@/components/v2/CalloutDiagram.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  "Most people who abandon a form leave real data behind. Formester saves what they've typed automatically — so an unfinished entry becomes a lead you can recover, follow up on, and learn from."
const c0_mockupHtml =
  "\u003Cstyle>.ps-badge{display:inline-flex;align-items:center;gap:5px;font-size:9.5px;font-weight:700;color:#fff;background:#6434d0;border-radius:999px;padding:4px 9px;line-height:1;opacity:0;transform:translateY(4px) scale(.85);animation:psBadge 6s ease-in-out infinite;}.ps-status{font-size:10px;font-weight:700;color:#b54708;background:#fffaeb;border:1px solid #fedf89;border-radius:999px;padding:3px 9px;line-height:1;}.ps-fld{border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;}.ps-fld-filled{border-color:#e9ddfb;background:#fbfaff;}.ps-lab{font-size:9.5px;color:#98a2b3;line-height:1.1;margin-bottom:4px;}.ps-val{font-size:12px;font-weight:600;color:#101828;line-height:1.1;}.ps-val-empty{font-size:12px;color:#cdd2db;line-height:1.1;}.ps-cursor{display:inline-block;width:1.5px;height:13px;background:#6434d0;vertical-align:-2px;margin-left:1px;animation:psBlink 1s step-end infinite;}.ps-savebar{display:flex;align-items:center;gap:6px;font-size:9.5px;color:#697586;line-height:1.1;opacity:0;animation:psSave 6s ease-in-out infinite;}@keyframes psBadge{0%,12%{opacity:0;transform:translateY(4px) scale(.85);}24%,92%{opacity:1;transform:translateY(0) scale(1);}100%{opacity:1;transform:translateY(0) scale(1);}}@keyframes psSave{0%,16%{opacity:0;}28%,100%{opacity:1;}}@keyframes psBlink{0%,50%{opacity:1;}51%,100%{opacity:0;}}@media (prefers-reduced-motion:reduce){.ps-badge,.ps-savebar{animation:none!important;opacity:1!important;transform:none!important;}.ps-cursor{animation:none!important;}}\u003C/style><div style='max-width:440px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>app.formester.com · Registration</span></div><div style='padding:16px;text-align:left;'><div style='display:flex;align-items:center;justify-content:space-between;margin-bottom:13px;'><div style='font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#98a2b3;line-height:1;'>Step 2 of 3</div><span class='ps-status'>Incomplete</span></div><div style='display:flex;flex-direction:column;gap:9px;'><div class='ps-fld ps-fld-filled'><div class='ps-lab'>Full name</div><div class='ps-val'>Maya Okonkwo</div></div><div class='ps-fld ps-fld-filled'><div class='ps-lab'>Work email</div><div class='ps-val'>maya@brightlabs.co</div></div><div class='ps-fld' style='border-color:#6434d0;box-shadow:0 0 0 3px #f0ebfa;'><div class='ps-lab'>Company size</div><div class='ps-val'>50–100<span class='ps-cursor'></span></div></div><div class='ps-fld'><div class='ps-lab'>Budget</div><div class='ps-val-empty'>—</div></div></div><div style='display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:13px;border-top:1px solid #f2f4f7;'><span class='ps-savebar'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='#6434d0' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg>Saved as they type</span><span class='ps-badge'><svg width='9' height='9' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg>Partial entry captured</span></div></div></div>"
const c0_title = [
  {
    id: 4834,
    text: 'Capture answers ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4835,
    text: "even when they don't hit submit",
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1591,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get Started',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1590,
    link: 'https://youtu.be/7C8UD-wcxnc',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 94,
  text: 'Partial Submissions',
  tag: 'Business',
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_description =
  'Even an abandoned form leaves a trail. Open Results → Submissions and Formester shows you exactly what a respondent entered before they stopped — ready to recover and follow up on.'
const c2_mockHtml =
  "<div style='max-width:360px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 16px 48px rgba(15,14,26,.1);overflow:hidden;'><div style='display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>app.formester.com · Submissions</span><span style='font-size:10px;font-weight:700;color:#b54708;background:#fffaeb;border:1px solid #fedf89;border-radius:999px;padding:3px 9px;line-height:1;'>Incomplete</span></div><div style='padding:16px;'><div style='display:flex;flex-direction:column;gap:9px;margin-bottom:13px;'><div style='border:1px solid #e9ddfb;background:#fbfaff;border-radius:9px;padding:8px 11px;'><div style='font-size:9.5px;color:#98a2b3;line-height:1.1;margin-bottom:4px;'>Full name</div><div style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>Maya Okonkwo</div></div><div style='border:1px solid #e9ddfb;background:#fbfaff;border-radius:9px;padding:8px 11px;'><div style='font-size:9.5px;color:#98a2b3;line-height:1.1;margin-bottom:4px;'>Work email</div><div style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>maya@brightlabs.co</div></div><div style='border:1px dashed #e4e7ec;border-radius:9px;padding:8px 11px;'><div style='font-size:9.5px;color:#98a2b3;line-height:1.1;margin-bottom:4px;'>Budget</div><div style='font-size:12px;color:#cdd2db;line-height:1.1;'>Not yet answered</div></div></div><div style='display:flex;align-items:center;gap:7px;border-top:1px solid #f2f4f7;padding-top:12px;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#697586' stroke-width='2'><circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/></svg><span style='font-size:11px;color:#697586;line-height:1.1;'>Last seen 4 min ago · 2 of 4 fields</span></div></div></div>"
const c2_title = [
  {
    id: 4830,
    text: 'Inside a ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4833,
    text: 'captured partial entry',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_pins = [
  {
    id: 81,
    label: 'Fields captured so far',
    body: 'Every answer the respondent typed before they stopped is saved — no need for them to hit submit for the data to land.',
  },
  {
    id: 84,
    label: 'Contact captured',
    body: 'If they reached an email or phone field, you have a way to reach back out and recover the lead.',
  },
  {
    id: 82,
    label: 'Last seen',
    body: 'A timestamp shows when activity stopped, so you know how fresh the entry is and when to follow up.',
  },
  {
    id: 83,
    label: 'Status: Incomplete',
    body: "The entry is clearly flagged as incomplete. If the respondent ever returns and finishes, it's replaced with their completed submission.",
  },
]
const c3_title = [
  {
    id: 4826,
    text: 'Turn abandoned forms ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4831,
    text: 'into recovered leads',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_cards = [
  {
    id: 641,
    tag: 'Recover leads',
    tagColor: 'violet',
    title: 'Recover abandoned leads',
    body: 'An incomplete entry often still has a name and email. Capture it and reach back out instead of letting the lead vanish.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:10px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='width:28px;height:28px;border-radius:50%;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;line-height:1;flex-shrink:0;'>MO</span><div style='min-width:0;'><div style='font-size:11.5px;font-weight:600;color:#101828;line-height:1.1;'>Maya Okonkwo</div><div style='font-size:10px;color:#697586;line-height:1.1;margin-top:2px;'>maya@brightlabs.co</div></div><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:3px 8px;line-height:1;white-space:nowrap;'>Follow up</span></div>",
    icon: null,
  },
  {
    id: 643,
    tag: 'Find drop-off',
    tagColor: 'amber',
    title: 'See where people stop',
    body: 'Partial entries show which step people abandon. Spot the page that loses respondents and fix it to lift completion rates.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;'><span style='width:54px;font-size:10.5px;color:#475467;line-height:1.1;'>Step 1</span><span style='flex:1;height:8px;border-radius:5px;background:#e9e4f5;overflow:hidden;'><span style='display:block;width:96%;height:100%;background:#6434d0;'></span></span><span style='font-size:10.5px;font-weight:700;color:#101828;line-height:1.1;'>96%</span></div><div style='display:flex;align-items:center;gap:8px;'><span style='width:54px;font-size:10.5px;color:#475467;line-height:1.1;'>Step 2</span><span style='flex:1;height:8px;border-radius:5px;background:#e9e4f5;overflow:hidden;'><span style='display:block;width:61%;height:100%;background:#7c4ce0;'></span></span><span style='font-size:10.5px;font-weight:700;color:#101828;line-height:1.1;'>61%</span></div><div style='display:flex;align-items:center;gap:8px;'><span style='width:54px;font-size:10.5px;color:#b42318;font-weight:600;line-height:1.1;'>Step 3</span><span style='flex:1;height:8px;border-radius:5px;background:#fee4e2;overflow:hidden;'><span style='display:block;width:28%;height:100%;background:#f04438;'></span></span><span style='font-size:10.5px;font-weight:700;color:#b42318;line-height:1.1;'>28%</span></div></div>",
    icon: null,
  },
  {
    id: 642,
    tag: 'Engage',
    tagColor: 'green',
    title: 'Follow up automatically',
    body: "Send a reminder, offer help, or trigger a targeted email to people who didn't finish — and nudge them back to complete.",
    mockHtml:
      "<div style='display:flex;align-items:center;gap:10px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='width:26px;height:26px;border-radius:7px;background:#ecfdf3;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#027a48' stroke-width='2.2'><rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/></svg></span><div style='min-width:0;'><div style='font-size:11.5px;font-weight:600;color:#101828;line-height:1.1;'>\"Still interested? Pick up where you left off →\"</div><div style='font-size:10px;color:#697586;line-height:1.1;margin-top:3px;'>Reminder sent · Maya O.</div></div></div>",
    icon: null,
  },
]
const c4_title = [
  {
    id: 4829,
    text: 'Built for forms ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4828,
    text: "people don't always finish",
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 644,
    tag: 'Lead generation',
    tagColor: 'violet',
    title: 'Lead-gen forms',
    body: 'Capture half-finished signups and demo requests, then reach out to convert the people who almost made it into real leads.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 645,
    tag: 'Applications',
    tagColor: 'blue',
    title: 'Long applications',
    body: 'Registration and application forms get long. See which step loses applicants and follow up before they give up for good.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 646,
    tag: 'Checkout',
    tagColor: 'green',
    title: 'Checkout & order forms',
    body: 'Recover abandoned carts and order forms. Capture the contact details that were entered, then send a reminder to bring them back.',
    mockHtml: null,
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4832,
    text: 'Teams recover more responses with Formester',
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
    id: 4827,
    text: 'Partial submissions FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2411,
    header: 'What does "partial submission" mean?',
    body: "A partial submission is when someone starts filling out your form but never finishes or hits submit. Formester saves whatever they entered up to that point, so the data isn't lost when they abandon the form.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2406,
    header: 'How does the Partial Submissions feature work?',
    body: 'Once enabled, Formester automatically saves the answers a respondent types as they go — even if they never complete the form. You can review those incomplete entries in Results to recover lost data and see exactly where people are getting stuck.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2407,
    header: 'What happens if a user finishes the form after a partial submission?',
    body: 'If the respondent comes back and completes the form, Formester updates the saved entry and replaces the partial record with their final, completed submission — so you always keep the most accurate and current data.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2408,
    header: 'Is there a limit to how many incomplete forms I can view?',
    body: "No. There's no cap on the number of partial submissions you can view. You see every incomplete entry, giving you a complete picture of how people interact with your form.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2409,
    header: 'How is this different from save and continue?',
    body: 'Save and continue is for the respondent — it lets them deliberately pause and resume later. Partial submissions is for you — it captures incomplete entries automatically, even from people who simply abandon the form and never return.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2410,
    header: 'Which plan is partial submissions on?',
    body: 'Partial Submissions is available on the Business plan. Turn it on under Advanced settings, publish your form, and start capturing every incomplete entry — no code required.',
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1588,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get Started',
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1589,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Partial Submissions | Capture Incomplete Form Entries',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/partial-submissions/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:49.387Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Capture what respondents enter even if they never hit submit. Formester saves incomplete form entries automatically, so you can recover lost leads, see where people drop off, and follow up.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Partial Submissions | Capture Incomplete Form Entries',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/partial-submissions/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Partial Submissions | Capture Incomplete Form Entries',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Capture what respondents enter even if they never hit submit. Formester saves incomplete form entries automatically, so you can recover lost leads, see where people drop off, and follow up.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_partial_submissions_feature_page_hero_image_c8e856ebff.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Partial Submissions | Capture Incomplete Form Entries',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/features/partial-submissions/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Partial Submissions | Capture Incomplete Form Entries',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Capture what respondents enter even if they never hit submit. Formester saves incomplete form entries automatically, so you can recover lost leads, see where people drop off, and follow up.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_partial_submissions_feature_page_hero_image_c8e856ebff.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Partial Submissions | Capture Incomplete Form Entries',
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
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_partial_submissions_feature_page_hero_image_c8e856ebff.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ['partial form submissions'],
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
        name: 'What does "partial submission" mean?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "A partial submission is when someone starts filling out your form but never finishes or hits submit. Formester saves whatever they entered up to that point, so the data isn't lost when they abandon the form.",
          '@type': 'Answer',
        },
      },
      {
        name: 'How does the Partial Submissions feature work?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Once enabled, Formester automatically saves the answers a respondent types as they go — even if they never complete the form. You can review those incomplete entries in Results to recover lost data and see exactly where people are getting stuck.',
          '@type': 'Answer',
        },
      },
      {
        name: 'What happens if a user finishes the form after a partial submission?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'If the respondent comes back and completes the form, Formester updates the saved entry and replaces the partial record with their final, completed submission — so you always keep the most accurate and current data.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is there a limit to how many incomplete forms I can view?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "No. There's no cap on the number of partial submissions you can view. You see every incomplete entry, giving you a complete picture of how people interact with your form.",
          '@type': 'Answer',
        },
      },
      {
        name: 'How is this different from save and continue?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Save and continue is for the respondent — it lets them deliberately pause and resume later. Partial submissions is for you — it captures incomplete entries automatically, even from people who simply abandon the form and never return.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Which plan is partial submissions on?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Partial Submissions is available on the Business plan. Turn it on under Advanced settings, publish your form, and start capturing every incomplete entry — no code required.',
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
