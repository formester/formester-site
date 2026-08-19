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
      label="Trusted by 56k+ users worldwide"
      showTrustBadges
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <StatsBanner
      variant="band"
      heading="From static PDF to a working form in minutes"
      :stats="c2_stats"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="How it works" :title="c3_title" :rows="c3_rows" class="page-component-item" />

    <CardGrid
      eyebrow="Use cases"
      description="Anywhere a PDF used to be printed, signed, and scanned back, a fillable form does it online — faster and with cleaner data."
      columns="3"
      :title="c4_title"
      :cards="c4_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Make a PDF fillable in three steps"
      description="Upload, let AI detect the fields, then share — Formester handles the rebuilding for you."
      background="#f9fafb"
      :steps="c5_steps"
      :buttons="c5_buttons"
      class="page-component-item"
    />

    <TestimonialsV2
      version="feature"
      :heading="c6_heading"
      :testimonials="c6_testimonials"
      class="page-component-item"
    />

    <FaqSection centered :title="c7_title" :faqList="c7_faqList" class="page-component-item" />

    <CtaDark
      badge="Free to start"
      heading="Turn your next PDF into a fillable form"
      description="Upload a PDF, let AI map the fields, and start collecting responses today."
      :buttons="c8_buttons"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import AlternatingRows from '@/components/v2/AlternatingRows.vue'
import CardGrid from '@/components/v2/CardGrid.vue'
import CtaDark from '@/components/v2/CtaDark.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroV2 from '@/components/v2/HeroV2.vue'
import StatsBanner from '@/components/v2/StatsBanner.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_description =
  "Upload a static PDF and Formester's AI detects the fields and rebuilds them as an interactive form you can share, embed, and collect responses on. No coding, no manual rebuilding — done in minutes."
const c0_mockupHtml =
  "\u003Cstyle>.pf-scan{animation:pfScan 5s ease-in-out infinite;}.pf-field{opacity:0;animation:pfField 5s ease-in-out infinite;}.pf-field.f2{animation-delay:.5s;}.pf-field.f3{animation-delay:1s;}@keyframes pfScan{0%{top:6%;opacity:0;}8%{opacity:1;}55%{top:88%;opacity:1;}70%,100%{top:88%;opacity:0;}}@keyframes pfField{0%,14%{opacity:0;}26%,92%{opacity:1;}100%{opacity:0;}}.pf-car{animation:pfCar 1.1s steps(1) infinite;}@keyframes pfCar{0%,49%{opacity:1}50%,100%{opacity:0}}@media (prefers-reduced-motion:reduce){.pf-scan{display:none!important;}.pf-field{opacity:1!important;animation:none!important;}.pf-car{opacity:1!important;animation:none!important;}}\u003C/style><div style='display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:14px;max-width:560px;margin:0 auto;'><div style='position:relative;background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 12px 36px rgba(15,14,26,.1);padding:16px 15px;overflow:hidden;'><div style='font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#98a2b3;margin-bottom:10px;line-height:1;'>Contract.pdf</div><div style='height:7px;width:70%;background:#e4e7ec;border-radius:4px;margin-bottom:8px;'></div><div style='height:7px;width:90%;background:#eef0f3;border-radius:4px;margin-bottom:8px;'></div><div style='height:7px;width:55%;background:#eef0f3;border-radius:4px;margin-bottom:14px;'></div><div style='position:relative;height:22px;border:1.5px dashed #b9a6ec;border-radius:6px;background:rgba(100,52,208,.05);margin-bottom:9px;'></div><div style='position:relative;height:22px;border:1.5px dashed #b9a6ec;border-radius:6px;background:rgba(100,52,208,.05);margin-bottom:9px;'></div><div style='position:relative;height:22px;width:60%;border:1.5px dashed #b9a6ec;border-radius:6px;background:rgba(100,52,208,.05);'></div><span class='pf-scan' style='position:absolute;left:8px;right:8px;height:2px;background:linear-gradient(90deg,transparent,#6434d0,transparent);box-shadow:0 0 8px rgba(100,52,208,.6);'></span></div><div style='display:flex;flex-direction:column;align-items:center;gap:4px;color:#6434d0;'><svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2'><path d='M5 12h14M13 6l6 6-6 6'/></svg><span style='font-size:8.5px;font-weight:700;letter-spacing:.04em;color:#472594;line-height:1.1;text-align:center;'>AI<br>detects</span></div><div style='background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 12px 36px rgba(15,14,26,.12);overflow:hidden;'><div style='display:flex;align-items:center;gap:5px;padding:9px 12px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:8px;height:8px;border-radius:50%;background:#ff6058;'></span><span style='width:8px;height:8px;border-radius:50%;background:#ffbd2e;'></span><span style='width:8px;height:8px;border-radius:50%;background:#27c93f;'></span></div><div style='padding:14px 14px 16px;'><div style='font-size:11px;font-weight:700;color:#101828;margin-bottom:11px;line-height:1.1;'>Service Agreement</div><div class='pf-field f1' style='margin-bottom:9px;'><div style='font-size:9px;color:#697586;margin-bottom:3px;line-height:1.1;'>Full name</div><div style='height:18px;border:1px solid #d8cdf2;border-radius:8px;padding:9px 11px;background:#fbfaff;display:flex;align-items:center;line-height:1;'><span class='pf-car' style='display:inline-block;width:1px;height:14px;background:#6434d0;'></span></div></div><div class='pf-field f2' style='margin-bottom:9px;'><div style='font-size:9px;color:#697586;margin-bottom:3px;line-height:1.1;'>Start date</div><div style='height:18px;border:1px solid #d8cdf2;border-radius:8px;padding:9px 11px;background:#fbfaff;display:flex;align-items:center;line-height:1;'></div></div><div class='pf-field f3'><div style='font-size:9px;color:#697586;margin-bottom:3px;line-height:1.1;'>Signature</div><div style='height:52px;border:1px solid #d8cdf2;border-radius:8px;padding:9px 11px;background:#fbfaff;line-height:1;'></div></div></div></div></div>"
const c0_title = [
  {
    id: 4657,
    text: 'Turn any PDF into a ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4656,
    text: 'fillable online form',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1515,
    link: 'https://app.formester.com/users/sign_up',
    text: "Convert a PDF — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1516,
    link: 'https://youtu.be/0PV89x_M1Lk',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 75,
  text: 'PDF to Fillable Form',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_stats = [
  {
    id: 85,
    value: 'AI',
    label: 'detects your fields',
  },
  {
    id: 84,
    value: '0',
    label: 'lines of code',
  },
  {
    id: 83,
    value: 'Minutes',
    label: 'to publish',
  },
  {
    id: 82,
    value: '56k+',
    label: 'users worldwide',
  },
]
const c3_title = [
  {
    id: 4650,
    text: 'From PDF to responses',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4651,
    text: 'in three moves',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_rows = [
  {
    id: 83,
    kicker: 'Upload',
    title: 'Drop in your PDF',
    body: 'Click New Form, choose PDF to Formester Form, and upload your file. Formester reads the layout straight away — no reformatting or rebuilding.',
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:22px 18px;text-align:center;'><div style='border:2px dashed #d0d5dd;border-radius:12px;padding:20px 14px;'><span style='display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:#f0ebfa;color:#6434d0;margin-bottom:10px;'><svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 16V4M7 9l5-5 5 5M5 20h14'/></svg></span><div style='font-size:12px;font-weight:600;color:#101828;line-height:1.2;'>Drop your PDF here</div><div style='font-size:11px;color:#98a2b3;margin-top:4px;line-height:1.2;'>Contract.pdf · 248 KB</div></div></div>",
  },
  {
    id: 84,
    kicker: 'Detect',
    title: 'Let AI map the fields',
    body: "Formester's AI scans the document and turns each blank, line, and box into a real input — text fields, checkboxes, dates, and signature blocks. Fine-tune anything with the drag-and-drop builder.",
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;display:flex;flex-direction:column;gap:10px;'><div><div style='font-size:10px;color:#697586;margin-bottom:4px;line-height:1.1;'>Full name</div><div style='border:1px solid #6434d0;border-radius:8px;padding:8px 10px;font-size:12px;color:#101828;background:#fbfaff;line-height:1.1;'>Jordan Reyes</div></div><div style='display:grid;grid-template-columns:1fr 1fr;gap:10px;'><div><div style='font-size:10px;color:#697586;margin-bottom:4px;line-height:1.1;'>Start date</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 10px;font-size:12px;color:#101828;line-height:1.1;'>12 Jun 2026</div></div><div><div style='font-size:10px;color:#697586;margin-bottom:4px;line-height:1.1;'>Plan</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 10px;font-size:12px;color:#101828;display:flex;justify-content:space-between;line-height:1.1;'>Pro<span style='color:#98a2b3;'>&#9662;</span></div></div></div><div style='display:flex;align-items:center;gap:7px;font-size:11px;color:#027a48;line-height:1.1;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><path d='M5 12l4 4L19 6'/></svg>5 fields detected</div></div>",
  },
  {
    id: 85,
    kicker: 'Share',
    title: 'Share and collect responses',
    body: 'Publish your form as a link or QR code, or embed it on your site. Every submission lands in one dashboard, ready to view, manage, and export.',
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:18px;display:flex;flex-direction:column;gap:10px;'><div style='display:flex;align-items:center;gap:8px;'><span style='background:#6434d0;color:#fff;font-size:11px;font-weight:600;border-radius:8px;padding:7px 13px;line-height:1.1;'>Publish</span><span style='flex:1;border:1px solid #d0d5dd;border-radius:8px;padding:7px 10px;font-size:11px;color:#697586;line-height:1.1;overflow:hidden;'>formester.com/f/agreement</span></div><div style='border-top:1px solid #f2f4f7;padding-top:11px;display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#101828;line-height:1.1;'><span style='width:7px;height:7px;border-radius:50%;background:#27c93f;'></span>New response · Jordan Reyes</div><div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#101828;line-height:1.1;'><span style='width:7px;height:7px;border-radius:50%;background:#27c93f;'></span>New response · Priya Shah</div><div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#697586;line-height:1.1;'><span style='width:7px;height:7px;border-radius:50%;background:#d0d5dd;'></span>148 total submissions</div></div></div>",
  },
]
const c4_title = [
  {
    id: 4652,
    text: 'One feature,',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4653,
    text: 'every kind of paperwork',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 503,
    tag: 'Legal',
    tagColor: 'violet',
    title: 'Contracts & agreements',
    body: 'Law firms and teams turn contracts, NDAs, and waivers into online forms with signature fields — sign and approve without printing.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:8px;'><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 10px;font-size:11px;color:#101828;line-height:1.1;'>Service Agreement</div><div style='display:flex;align-items:center;gap:8px;border:1px solid #6434d0;border-radius:8px;padding:8px 10px;font-size:13px;font-style:italic;color:#472594;background:#fbfaff;line-height:1.1;'>Jordan R.<span style='margin-left:auto;font-size:9px;font-style:normal;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;'>Signed</span></div></div>",
    icon: null,
  },
  {
    id: 505,
    tag: 'Applications',
    tagColor: 'blue',
    title: 'Applications & intake',
    body: "Collect job applications, student registrations, and client intake digitally — reveal extra fields only when they're needed, no paperwork.",
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#101828;line-height:1.1;'><span style='width:18px;height:18px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;'><svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span>Personal details</div><div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#101828;line-height:1.1;'><span style='width:18px;height:18px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;'><svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span>Experience</div><div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#697586;line-height:1.1;'><span style='width:18px;height:18px;border-radius:50%;border:1.5px solid #d0d5dd;display:inline-flex;'></span>Upload résumé</div></div>",
    icon: null,
  },
  {
    id: 504,
    tag: 'Government & health',
    tagColor: 'green',
    title: 'Government & patient forms',
    body: 'Healthcare and public-sector teams collect patient details and intake forms securely online — encrypted, mobile-friendly, and easy to share.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;color:#101828;line-height:1.1;'><span style='width:20px;height:20px;border-radius:6px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z'/></svg></span>Patient intake</div><div style='font-size:10px;color:#697586;background:#f9fafb;border:1px solid #eaecf0;border-radius:8px;padding:7px 9px;line-height:1.3;'>Encrypted &amp; stored securely · shared by link</div></div>",
    icon: null,
  },
]
const c5_steps = [
  {
    id: 123,
    title: 'Upload your PDF',
    description:
      'Click New Form, choose PDF to Formester Form, and upload your file. Formester reads the layout instantly.',
    rawHtml:
      "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:26px;height:26px;border-radius:7px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 16V4M7 9l5-5 5 5M5 20h14'/></svg></span><div style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>Contract.pdf uploaded</div></div>",
    image: null,
  },
  {
    id: 125,
    title: 'Review the detected fields',
    description:
      'AI maps each blank into a fillable field. Use the drag-and-drop builder to edit, add text boxes, dropdowns, dates, or e-signatures.',
    rawHtml:
      "<div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;border-radius:9px;padding:8px 11px;font-size:12px;color:#101828;background:#fff;box-shadow:0 4px 12px rgba(100,52,208,.16);'><span style='width:20px;height:20px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg></span><span style='font-weight:600;line-height:1.1;'>5 fields detected</span><span style='margin-left:auto;font-size:11px;color:#697586;line-height:1.1;'>edit any field</span></div>",
    image: null,
  },
  {
    id: 124,
    title: 'Share & collect responses',
    description: 'Publish via link, QR code, or embed. View, manage, and export every submission from one dashboard.',
    rawHtml:
      "<div style='display:flex;align-items:center;gap:8px;'><span style='background:#6434d0;color:#fff;font-size:12px;font-weight:600;border-radius:8px;padding:8px 14px;line-height:1.1;'>Publish</span><span style='flex:1;border:1px solid #d0d5dd;border-radius:8px;padding:8px 11px;font-size:12px;color:#697586;line-height:1.1;overflow:hidden;'>formester.com/f/agreement</span></div>",
    image: null,
  },
]
const c5_buttons = []
const c6_heading = [
  {
    id: 4654,
    text: 'Teams replace paperwork with Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_testimonials = [
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
const c7_title = [
  {
    id: 4655,
    text: 'PDF to fillable form FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c7_faqList = [
  {
    id: 2284,
    header: 'How do I convert a PDF to a fillable form?',
    body: "Click New Form, choose PDF to Formester Form, and upload your PDF. Formester's AI detects the fields and turns them into fillable inputs automatically. Adjust anything with the drag-and-drop editor, then save and share.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2283,
    header: 'Can I make a PDF fillable for free?',
    body: 'Yes. Formester lets you convert PDFs into fillable forms and collect responses with free basic features — no credit card to get started.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2289,
    header: 'Do I need special software to use Formester?',
    body: "No. Formester runs entirely in the browser, so there's nothing to install or download. Upload your PDF and start editing right away.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2286,
    header: 'What types of fields can I add?',
    body: 'Text boxes, checkboxes, dropdowns, date pickers, file uploads, e-signatures, and more. You can also add conditional logic and multi-step pages for smarter forms.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2288,
    header: 'Can I collect e-signatures in my fillable form?',
    body: 'Yes. Add a signature field to collect legally binding digital signatures — ideal for contracts, waivers, and agreements.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2285,
    header: 'Can I embed my fillable form on my website?',
    body: 'Yes. Share it as a link or QR code, or copy the embed code to add the form to any webpage or CMS. Every form is fully mobile-friendly.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2290,
    header: 'Can I connect Formester with other tools?',
    body: 'Yes. Sync responses to Google Sheets in real time, or connect to Zapier and your CRM to push submissions wherever your team works.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2287,
    header: 'Is my data safe with Formester?',
    body: "Yes. All data is encrypted and stored securely, and you control who on your team can access each form's responses.",
    body_markdown: null,
    list: [],
  },
]
const c8_buttons = [
  {
    id: 1513,
    link: 'https://app.formester.com/users/sign_up',
    text: "Convert a PDF — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1514,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Convert PDF to Fillable Form Online | Make PDFs Fillable',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/convert-pdf-to-fillable-form/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:40.614Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Turn any static PDF into an interactive, fillable online form in minutes. AI detects the fields automatically — then share, collect responses, and export. No coding, free to start.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Convert PDF to Fillable Form Online | Make PDFs Fillable',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/convert-pdf-to-fillable-form/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Convert PDF to Fillable Form Online | Make PDFs Fillable',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Turn any static PDF into an interactive, fillable online form in minutes. AI detects the fields automatically — then share, collect responses, and export. No coding, free to start.',
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
      content: 'https://formester.com/features/convert-pdf-to-fillable-form/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Convert PDF to Fillable Form Online | Make PDFs Fillable',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Turn any static PDF into an interactive, fillable online form in minutes. AI detects the fields automatically — then share, collect responses, and export. No coding, free to start.',
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
        name: 'How do I convert a PDF to a fillable form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Click New Form, choose PDF to Formester Form, and upload your PDF. Formester's AI detects the fields and turns them into fillable inputs automatically. Adjust anything with the drag-and-drop editor, then save and share.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I make a PDF fillable for free?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Formester lets you convert PDFs into fillable forms and collect responses with free basic features — no credit card to get started.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Do I need special software to use Formester?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "No. Formester runs entirely in the browser, so there's nothing to install or download. Upload your PDF and start editing right away.",
          '@type': 'Answer',
        },
      },
      {
        name: 'What types of fields can I add?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Text boxes, checkboxes, dropdowns, date pickers, file uploads, e-signatures, and more. You can also add conditional logic and multi-step pages for smarter forms.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I collect e-signatures in my fillable form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Add a signature field to collect legally binding digital signatures — ideal for contracts, waivers, and agreements.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I embed my fillable form on my website?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Share it as a link or QR code, or copy the embed code to add the form to any webpage or CMS. Every form is fully mobile-friendly.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I connect Formester with other tools?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Sync responses to Google Sheets in real time, or connect to Zapier and your CRM to push submissions wherever your team works.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is my data safe with Formester?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. All data is encrypted and stored securely, and you control who on your team can access each form's responses.",
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
