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
      eyebrow="What you can limit"
      :description="c2_description"
      columns="3"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <ComparisonTable
      eyebrow="Why it matters"
      colUs="With Formester's limiter"
      colThem="Closing it manually"
      :note="c3_note"
      :title="c3_title"
      :rows="c3_rows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where teams use it"
      description="Anywhere there's a hard number or a deadline, a response cap and a close date keep things fair and on schedule."
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
      heading="Cap it, schedule it, and walk away"
      description="Set a response limit and the dates your form opens and closes, then let Formester do the counting."
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
  'Set how many responses your form accepts and the dates it stays open. Formester counts every entry and closes the form automatically once the limit is reached — no manual monitoring, no over-collection.'
const c0_mockupHtml =
  "\u003Cstyle>.fl-fill{width:42%;animation:flFill 7s ease-in-out infinite;}.fl-count{animation:flCount 7s ease-in-out infinite;}.fl-c1{animation-delay:0s;}.fl-open{animation:flOpen 7s ease-in-out infinite;}.fl-closed{opacity:0;transform:scale(.94);animation:flClosed 7s ease-in-out infinite;}.fl-bar{animation:flBar 7s ease-in-out infinite;}@keyframes flFill{0%{width:42%;}40%{width:100%;}100%{width:100%;}}@keyframes flBar{0%,38%{background:#6434d0;}48%,100%{background:#d92d20;}}@keyframes flCount{0%,38%{opacity:1;}46%,100%{opacity:0;}}@keyframes flOpen{0%,38%{opacity:1;}46%,100%{opacity:0;}}@keyframes flClosed{0%,42%{opacity:0;transform:scale(.94);}54%,100%{opacity:1;transform:scale(1);}}@media (prefers-reduced-motion:reduce){.fl-fill{width:100%!important;animation:none!important;}.fl-bar{background:#d92d20!important;animation:none!important;}.fl-count,.fl-open{opacity:0!important;animation:none!important;}.fl-closed{opacity:1!important;transform:scale(1)!important;animation:none!important;}}\u003C/style><div style='max-width:430px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;line-height:1;'>app.formester.com · Event RSVP</span></div><div style='padding:20px 18px;text-align:left;'><div style='display:flex;align-items:baseline;gap:8px;margin-bottom:5px;'><span style='font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#98a2b3;line-height:1;'>Responses</span><span style='margin-left:auto;display:flex;align-items:baseline;gap:3px;line-height:1;'><span class='fl-count fl-c1' style='font-size:24px;font-weight:800;color:#101828;line-height:1;'>100</span><span style='font-size:13px;font-weight:600;color:#98a2b3;line-height:1;'>/ 100</span></span></div><div style='height:12px;border-radius:999px;background:#f2f4f7;overflow:hidden;'><div class='fl-fill fl-bar' style='height:100%;border-radius:999px;'></div></div><div style='position:relative;margin-top:16px;min-height:128px;'><div class='fl-open' style='display:flex;flex-direction:column;gap:11px;'><div><div style='font-size:11px;font-weight:600;color:#475467;margin-bottom:5px;line-height:1.1;'>Your name</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:12.5px;line-height:1.1;color:#101828;'>Jordan Lee</div></div><div><div style='font-size:11px;font-weight:600;color:#475467;margin-bottom:5px;line-height:1.1;'>Seats</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:12.5px;line-height:1.1;color:#101828;'>2</div></div></div><div class='fl-closed' style='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;border:1px solid #fecdca;background:#fef3f2;border-radius:12px;padding:16px;'><span style='width:38px;height:38px;border-radius:50%;background:#fee4e2;color:#b42318;display:inline-flex;align-items:center;justify-content:center;'><svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><rect x='4' y='10' width='16' height='10' rx='2'/><path d='M8 10V7a4 4 0 0 1 8 0v3'/></svg></span><span style='font-size:13.5px;font-weight:700;color:#b42318;line-height:1.2;text-align:center;'>Form closed — limit reached</span><span style='font-size:11px;color:#b42318;line-height:1.3;text-align:center;opacity:.85;'>Thanks! We've reached capacity for this event.</span></div></div></div></div>"
const c0_title = [
  {
    id: 4767,
    text: 'Close your form the ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4766,
    text: 'moment the cap is hit',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1562,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1563,
    link: 'https://youtu.be/FtqDS0H9hdk',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 87,
  text: 'Form Limiter',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_description =
  'Cap the number of responses, schedule when the form opens and closes, or do both. When either limit is reached, Formester closes the form for you and shows a clear message in its place.'
const c2_title = [
  {
    id: 4765,
    text: 'Two ways to ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4760,
    text: 'control your form',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 591,
    tag: 'Response cap',
    tagColor: 'violet',
    title: 'Set a maximum response limit',
    body: "Decide how many entries you'll accept. Formester counts every response and stops the form the instant your cap is reached — so you never over-collect.",
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:9px;'><div style='display:flex;align-items:baseline;gap:6px;line-height:1;'><span style='font-size:11px;font-weight:600;color:#475467;line-height:1;'>Limit</span><span style='margin-left:auto;font-size:13px;font-weight:700;color:#101828;line-height:1;'>96<span style='color:#98a2b3;font-weight:600;'> / 100</span></span></div><div style='height:9px;border-radius:999px;background:#f2f4f7;overflow:hidden;'><div style='width:96%;height:100%;background:#6434d0;border-radius:999px;'></div></div><div style='font-size:10px;color:#697586;line-height:1.2;'>Closes automatically at 100</div></div>",
    icon: null,
  },
  {
    id: 592,
    tag: 'Open & close dates',
    tagColor: 'blue',
    title: 'Schedule a start and end date',
    body: 'Pick a start date and time to begin accepting responses and an end date to stop. Leave a field blank to open on publish or stay open until you close it manually.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:18px;height:18px;border-radius:5px;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><path d='M5 12l4 4L19 6'/></svg></span><span style='font-weight:600;'>Opens</span><span style='margin-left:auto;color:#697586;'>Jun 1, 9:00 AM</span></div><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:18px;height:18px;border-radius:5px;background:#fef3f2;color:#b42318;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><path d='M18 6 6 18M6 6l12 12'/></svg></span><span style='font-weight:600;'>Closes</span><span style='margin-left:auto;color:#697586;'>Jun 7, 6:00 PM</span></div></div>",
    icon: null,
  },
  {
    id: 593,
    tag: 'Auto-close',
    tagColor: 'green',
    title: "A clear message when it's closed",
    body: "Once the cap or end date is hit, visitors see a closed-form message instead of an open form — so late arrivals know they've just missed it, with no half-finished entries.",
    mockHtml:
      "<div style='display:flex;flex-direction:column;align-items:center;gap:7px;border:1px solid #fecdca;background:#fef3f2;border-radius:10px;padding:12px;'><span style='width:26px;height:26px;border-radius:50%;background:#fee4e2;color:#b42318;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><rect x='4' y='10' width='16' height='10' rx='2'/><path d='M8 10V7a4 4 0 0 1 8 0v3'/></svg></span><span style='font-size:11.5px;font-weight:700;color:#b42318;line-height:1.2;text-align:center;'>This form is now closed</span></div>",
    icon: null,
  },
]
const c3_note =
  'Without a limiter, the only thing standing between you and over-collection is someone refreshing the response count. Formester does the counting and closes the form the moment the cap or end date is reached.'
const c3_title = [
  {
    id: 4763,
    text: 'Capped forms vs. ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4758,
    text: 'watching it yourself',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_rows = [
  {
    id: 83,
    feature: 'Closing at the cap',
    us: 'Closes automatically at the limit',
    them: 'You watch the count and close it',
  },
  {
    id: 81,
    feature: 'Scheduled open & close',
    us: 'Set start and end dates upfront',
    them: 'Remember to flip it on and off',
  },
  {
    id: 79,
    feature: 'Over-collection past the limit',
    us: 'Impossible — counting is exact',
    them: 'Extra entries slip in',
  },
  {
    id: 84,
    feature: 'Late arrivals',
    us: 'See a clear closed message',
    them: 'Submit into a form that should be shut',
  },
  {
    id: 80,
    feature: 'Out-of-hours coverage',
    us: 'Closes at 2am without you',
    them: "Only when someone's watching",
  },
  {
    id: 82,
    feature: 'Setup',
    us: 'A few fields at Publish',
    them: 'Manual monitoring forever',
  },
]
const c4_title = [
  {
    id: 4759,
    text: 'Built for anything with ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4762,
    text: 'a fixed capacity',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 594,
    tag: 'Events',
    tagColor: 'violet',
    title: 'Limited-seat events',
    body: 'Cap registrations at the number of seats you have. The form closes itself when it fills, so you never overbook the room.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:baseline;gap:6px;line-height:1;'><span style='font-size:11px;font-weight:600;color:#101828;line-height:1;'>Seats taken</span><span style='margin-left:auto;font-size:12px;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 8px;line-height:1;'>50 / 50</span></div><div style='font-size:10px;font-weight:700;color:#b42318;background:#fef3f2;border-radius:999px;padding:3px 8px;line-height:1;align-self:flex-start;'>Sold out · closed</div></div>",
    icon: null,
  },
  {
    id: 595,
    tag: 'Promotions',
    tagColor: 'amber',
    title: 'First-N giveaways',
    body: 'Reward only the first N respondents. Set the cap and a deadline so the offer closes the moment quota or time runs out — no late entries.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='font-weight:600;'>First 200 only</span><span style='margin-left:auto;font-weight:700;color:#b54708;background:#fffaeb;border-radius:999px;padding:2px 8px;'>183 claimed</span></div><div style='height:8px;border-radius:999px;background:#f2f4f7;overflow:hidden;'><div style='width:91%;height:100%;background:#6434d0;border-radius:999px;'></div></div></div>",
    icon: null,
  },
  {
    id: 597,
    tag: 'Hiring',
    tagColor: 'blue',
    title: 'Capped applications',
    body: "Stop accepting applications once you've gathered a manageable shortlist, so your team reviews a fixed batch instead of an endless queue.",
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='font-weight:600;'>Applications</span><span style='margin-left:auto;color:#697586;'>75 / 75</span></div><div style='display:flex;align-items:center;gap:7px;font-size:10px;line-height:1.1;'><span style='font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;'>Shortlist complete</span></div></div>",
    icon: null,
  },
  {
    id: 596,
    tag: 'Surveys',
    tagColor: 'green',
    title: 'Time-boxed surveys',
    body: 'Open a survey for a set window so every response lands in the same period. Consistent timing keeps your data clean and comparable.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:16px;height:16px;border-radius:4px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/></svg></span><span style='font-weight:600;'>Open</span><span style='margin-left:auto;color:#697586;'>Mon–Fri</span></div><div style='font-size:10px;color:#697586;line-height:1.2;'>Same window for everyone</div></div>",
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4761,
    text: 'Teams stay in control with Formester',
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
    id: 4764,
    text: 'Form Limiter FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2364,
    header: 'What is a Form Limiter?',
    body: "A Form Limiter lets you control how many people can submit your form and when it stays open. With Formester's Form Limiter, you can set a response cap and a start and end date on any online form — once the limit is reached, the form closes automatically.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2365,
    header: 'Can I set a time limit on my form?',
    body: 'Yes. Choose a start date and time and an end date and time so your form is only available during a specific window. Leave the start blank to open the moment you publish, or leave the end blank to keep collecting until you close it manually.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2366,
    header: 'How do I use Form Limiter in Formester?',
    body: 'Open your form, hit Publish, and choose Set Time and Response Limits. From there you can set a start date and time, an end date and time, and a maximum number of responses — controlling both how long and how many times your form can be submitted.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2369,
    header: 'Is there a way to limit form submissions?',
    body: 'Yes. Set a maximum response limit to stop accepting submissions after a specific number of entries. Formester counts every response and closes the form the moment the cap is hit, so you never collect more than you planned for.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2367,
    header: 'Can forms close automatically after reaching the limit?',
    body: 'Yes. Once your form reaches the response limit or the end date, it closes automatically without any manual action — and visitors who arrive after that see your closed message instead of the form.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2368,
    header: 'Is Form Limiter free to use?',
    body: 'Yes. Formester offers Form Limiter as part of its free plan, so you can start capping responses and scheduling open and close times without any cost.',
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1560,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1561,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Form Limiter | Control Form Submissions & Responses',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/form-limiter/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:50.650Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Cap how many responses your form accepts and set a start and end date so it opens and closes on schedule. Formester's Form Limiter closes the form automatically once the limit is reached — free, no code.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Form Limiter | Control Form Submissions & Responses',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/form-limiter/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Form Limiter | Control Form Submissions & Responses',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Cap how many responses your form accepts and set a start and end date so it opens and closes on schedule. Formester's Form Limiter closes the form automatically once the limit is reached — free, no code.",
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_form_limiter_feature_page_hero_image_792b6a6df6.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Form Limiter | Control Form Submissions & Responses',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/features/form-limiter/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Form Limiter | Control Form Submissions & Responses',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        "Cap how many responses your form accepts and set a start and end date so it opens and closes on schedule. Formester's Form Limiter closes the form automatically once the limit is reached — free, no code.",
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_form_limiter_feature_page_hero_image_792b6a6df6.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Form Limiter | Control Form Submissions & Responses',
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
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_form_limiter_feature_page_hero_image_792b6a6df6.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ['set time limit on online forms'],
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
        name: 'What is a Form Limiter?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "A Form Limiter lets you control how many people can submit your form and when it stays open. With Formester's Form Limiter, you can set a response cap and a start and end date on any online form — once the limit is reached, the form closes automatically.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I set a time limit on my form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Choose a start date and time and an end date and time so your form is only available during a specific window. Leave the start blank to open the moment you publish, or leave the end blank to keep collecting until you close it manually.',
          '@type': 'Answer',
        },
      },
      {
        name: 'How do I use Form Limiter in Formester?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Open your form, hit Publish, and choose Set Time and Response Limits. From there you can set a start date and time, an end date and time, and a maximum number of responses — controlling both how long and how many times your form can be submitted.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is there a way to limit form submissions?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Set a maximum response limit to stop accepting submissions after a specific number of entries. Formester counts every response and closes the form the moment the cap is hit, so you never collect more than you planned for.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can forms close automatically after reaching the limit?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Once your form reaches the response limit or the end date, it closes automatically without any manual action — and visitors who arrive after that see your closed message instead of the form.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is Form Limiter free to use?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Formester offers Form Limiter as part of its free plan, so you can start capping responses and scheduling open and close times without any cost.',
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
