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
      label="Trusted by leading organisations"
      showTrustBadges
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Build a file upload form in three steps"
      description="Add the field, set what people can upload, and collect every file in your dashboard."
      background="#f9fafb"
      :steps="c2_steps"
      :buttons="c2_buttons"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="What you get"
      description="Build the form, set the rules, and let people attach files — every upload lands with its submission, ready when you are."
      columns="3"
      :title="c3_title"
      :cards="c3_cards"
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
      badge="Free to start"
      heading="Start collecting files on your forms"
      description="Add a File Upload field, set the types and size limit, and publish. Files land securely in your dashboard, ready to download."
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
  'Add a file upload field to any form and let people attach documents, images, and more with their submission. Set the allowed types and size limit, and find every file in your dashboard.'
const c0_mockupHtml =
  "<div style='max-width:520px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>forms.formester.com · Upload</span></div><div style='padding:18px;text-align:left;display:flex;flex-direction:column;gap:12px;'><div style='border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;'><div style='font-size:12px;color:#475467;margin-bottom:5px;'>Full name</div><div style='font-size:13px;color:#101828;'>Jordan Lee</div></div><div style='border:1px dashed #b9a6ec;background:#fbfaff;border-radius:12px;padding:20px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;'><span style='width:38px;height:38px;border-radius:50%;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;'><svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 16V4'/><path d='M6 10l6-6 6 6'/><path d='M4 20h16'/></svg></span><div style='font-size:13px;font-weight:600;color:#101828;'>Drag files here or <span style='color:#6434d0;'>browse</span></div><div style='font-size:11px;color:#98a2b3;'>PDF, PNG, JPG · up to 25MB</div></div><div style='display:flex;align-items:center;gap:10px;border:1px solid #eaecf0;border-radius:10px;padding:9px 12px;'><span style='width:26px;height:26px;border-radius:6px;background:#fef3f2;color:#b42318;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;'>PDF</span><div style='flex:1;'><div style='font-size:12px;font-weight:600;color:#101828;'>portfolio.pdf</div><div style='font-size:10px;color:#98a2b3;'>2.4 MB</div></div><span style='width:20px;height:20px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg></span></div><div style='display:flex;align-items:center;gap:10px;border:1px solid #eaecf0;border-radius:10px;padding:9px 12px;'><span style='width:26px;height:26px;border-radius:6px;background:#eff8ff;color:#175cd3;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;'>JPG</span><div style='flex:1;'><div style='font-size:12px;font-weight:600;color:#101828;'>headshot.jpg</div><div style='height:5px;border-radius:999px;background:#eaecf0;margin-top:5px;overflow:hidden;'><span style='display:block;height:100%;width:68%;background:#6434d0;border-radius:999px;'></span></div></div><span style='font-size:10px;color:#697586;'>68%</span></div><div style='background:#6434d0;color:#fff;font-size:14px;font-weight:600;text-align:center;border-radius:10px;padding:12px;'>Submit</div></div></div>"
const c0_title = [
  {
    id: 4747,
    text: 'Collect files ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4746,
    text: 'right inside your form',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1554,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1555,
    link: 'https://youtu.be/LwGDJm9m5rU',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 85,
  text: 'File Upload Forms',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_steps = [
  {
    id: 147,
    title: 'Add a File Upload field',
    description: 'In the Builder, open Add Elements and drop the File Upload field into a new or existing form.',
    rawHtml:
      "<div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;border-radius:9px;padding:8px 11px;font-size:12.5px;color:#101828;background:#fff;box-shadow:0 4px 12px rgba(100,52,208,.16);'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg><span style='width:18px;height:18px;border-radius:5px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M12 16V4'/><path d='M6 10l6-6 6 6'/></svg></span>File Upload<span style='margin-left:auto;font-size:10px;color:#6434d0;font-weight:600;'>Add</span></div>",
    image: null,
  },
  {
    id: 145,
    title: 'Set allowed types & size limit',
    description:
      'Choose which file types respondents can attach, set a maximum size, and allow multiple files if you need them.',
    rawHtml:
      "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;gap:7px;align-items:center;flex-wrap:wrap;'><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>PDF</span><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>PNG</span><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>JPG</span><span style='font-size:11px;font-weight:600;color:#697586;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>+ any type</span></div><span style='display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;color:#6434d0;background:#f0ebfa;border-radius:999px;padding:4px 10px;align-self:flex-start;'>Max 25MB · multiple files</span></div>",
    image: null,
  },
  {
    id: 146,
    title: 'Collect & access files',
    description:
      'Publish the form. Every uploaded file is stored securely with the submission and ready to download from your dashboard.',
    rawHtml:
      "<div style='display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:26px;height:26px;border-radius:6px;background:#fef3f2;color:#b42318;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;'>PDF</span><div style='flex:1;'><div style='font-size:12px;font-weight:600;color:#101828;'>portfolio.pdf</div><div style='font-size:10px;color:#98a2b3;'>Jordan Lee · 2.4 MB</div></div><span style='display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#6434d0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 4v12'/><path d='M6 10l6 6 6-6'/><path d='M4 20h16'/></svg>Download</span></div>",
    image: null,
  },
]
const c2_buttons = []
const c3_title = [
  {
    id: 4743,
    text: 'Everything you need to',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4740,
    text: 'collect files online',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_cards = [
  {
    id: 577,
    tag: 'Any file',
    tagColor: 'violet',
    title: 'Accept any file type',
    body: 'Collect PDFs, images, documents, spreadsheets, or any other file — restrict to specific types when you need to.',
    mockHtml:
      "<div style='display:flex;gap:7px;align-items:center;flex-wrap:wrap;'><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>PDF</span><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>DOCX</span><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>PNG</span><span style='font-size:11px;font-weight:600;color:#697586;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>+ more</span></div>",
    icon: null,
  },
  {
    id: 578,
    tag: 'Limits',
    tagColor: 'amber',
    title: 'Set size limits',
    body: 'Define a maximum file size so submissions stay manageable and you only receive what you can use.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:8px;font-size:12px;color:#475467;'><span style='width:20px;height:20px;border-radius:6px;background:#fffaeb;color:#b54708;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;'>↥</span>Up to 25MB per file</div>",
    icon: null,
  },
  {
    id: 579,
    tag: 'Multiple',
    tagColor: 'blue',
    title: 'Allow multiple files',
    body: 'Let people attach several files in a single field — perfect for portfolios, photo sets, and document bundles.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:6px;'><div style='display:flex;align-items:center;gap:8px;font-size:12px;color:#101828;'><span style='width:20px;height:20px;border-radius:5px;background:#eff8ff;color:#175cd3;display:inline-flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;'>JPG</span>cover.jpg</div><div style='display:flex;align-items:center;gap:8px;font-size:12px;color:#697586;'><span style='width:20px;height:20px;border-radius:5px;background:#fef3f2;color:#b42318;display:inline-flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;'>PDF</span>brief.pdf</div></div>",
    icon: null,
  },
  {
    id: 581,
    tag: 'Secure',
    tagColor: 'green',
    title: 'Stored securely',
    body: 'Uploaded files are transmitted and stored securely, attached to the right submission and only visible to you.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:8px;font-size:12px;color:#475467;'><span style='width:20px;height:20px;border-radius:6px;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><path d='M5 12l4 4L19 6'/></svg></span>Encrypted &amp; private</div>",
    icon: null,
  },
  {
    id: 580,
    tag: 'Dashboard',
    tagColor: 'violet',
    title: 'Download from your dashboard',
    body: 'Find every file next to its submission and download it any time — no inbox digging or attachment chasing.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:7px 10px;font-size:12px;color:#101828;'><span style='width:20px;height:20px;border-radius:5px;background:#fef3f2;color:#b42318;display:inline-flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;'>PDF</span>resume.pdf<span style='margin-left:auto;display:inline-flex;align-items:center;color:#6434d0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 4v12'/><path d='M6 10l6 6 6-6'/><path d='M4 20h16'/></svg></span></div>",
    icon: null,
  },
  {
    id: 582,
    tag: 'Anywhere',
    tagColor: 'rose',
    title: 'Works on any device',
    body: 'People upload straight from a phone, tablet, or computer — drag and drop on desktop, tap to attach on mobile.',
    mockHtml:
      "<div style='display:flex;gap:7px;align-items:center;'><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>Desktop</span><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>Mobile</span><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:4px 9px;'>Tablet</span></div>",
    icon: null,
  },
]
const c4_title = [
  {
    id: 4742,
    text: 'Built for forms that',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4741,
    text: 'need an attachment',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 585,
    tag: 'Hiring',
    tagColor: 'violet',
    title: 'Job applications',
    body: 'Collect résumés, cover letters, and portfolios with every application, all attached to the candidate.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 583,
    tag: 'Creative',
    tagColor: 'blue',
    title: 'Portfolio & photo submissions',
    body: 'Let applicants and entrants upload images, design files, and reels straight from the form.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 584,
    tag: 'Support',
    tagColor: 'amber',
    title: 'Documents & paperwork',
    body: 'Gather signed forms, IDs, receipts, and supporting documents without back-and-forth email.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 586,
    tag: 'Service',
    tagColor: 'green',
    title: 'Quotes & project briefs',
    body: 'Have clients attach specs, references, and assets when they request a quote or kick off a project.',
    mockHtml: null,
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4744,
    text: 'Teams collect files with Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c5_testimonials = [
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
    id: 4745,
    text: 'File upload form FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2353,
    header: 'How do I add a file upload field to a form?',
    body: 'In the Formester Builder, open Add Elements and drop in the File Upload field. Set the allowed file types and size limit, then publish — respondents can attach files as they submit.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2354,
    header: 'What file types can people upload?',
    body: 'Any file type — PDFs, images, documents, spreadsheets, and more. You can also restrict the field to specific types so respondents only attach what you need.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2355,
    header: 'Can I limit the file size?',
    body: 'Yes. Set a maximum file size on the field so submissions stay manageable and you only receive files you can use.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2352,
    header: 'Can respondents upload more than one file?',
    body: 'Yes. Allow multiple files on the field so people can attach several at once — handy for portfolios, photo sets, and document bundles.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2356,
    header: 'Where do uploaded files go?',
    body: 'Every file is stored securely with its submission in your dashboard, where you can view and download it any time — no inbox digging.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2357,
    header: 'Are uploaded files secure?',
    body: 'Yes. Files are transmitted and stored securely, attached to the right submission, and visible only to you.',
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1552,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1553,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'File Upload Form Builder – Create Online Forms Easily | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/file-upload-forms/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:48.195Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Add a file upload field to any form and collect documents, images, and more with each submission. Any file type, size limits you set, multiple files, stored securely and downloadable from your dashboard.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'File Upload Form Builder – Create Online Forms Easily | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/file-upload-forms/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'File Upload Form Builder – Create Online Forms Easily | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Add a file upload field to any form and collect documents, images, and more with each submission. Any file type, size limits you set, multiple files, stored securely and downloadable from your dashboard.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_file_upload_forms_feature_page_hero_image_5d51be5e50.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'File Upload Form Builder – Create Online Forms Easily | Formester',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/features/file-upload-forms/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'File Upload Form Builder – Create Online Forms Easily | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Add a file upload field to any form and collect documents, images, and more with each submission. Any file type, size limits you set, multiple files, stored securely and downloadable from your dashboard.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_file_upload_forms_feature_page_hero_image_5d51be5e50.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'File Upload Form Builder – Create Online Forms Easily | Formester',
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
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_file_upload_forms_feature_page_hero_image_5d51be5e50.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ['File upload forms'],
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
        name: 'How do I add a file upload field to a form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'In the Formester Builder, open Add Elements and drop in the File Upload field. Set the allowed file types and size limit, then publish — respondents can attach files as they submit.',
          '@type': 'Answer',
        },
      },
      {
        name: 'What file types can people upload?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Any file type — PDFs, images, documents, spreadsheets, and more. You can also restrict the field to specific types so respondents only attach what you need.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I limit the file size?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Set a maximum file size on the field so submissions stay manageable and you only receive files you can use.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can respondents upload more than one file?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Allow multiple files on the field so people can attach several at once — handy for portfolios, photo sets, and document bundles.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Where do uploaded files go?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Every file is stored securely with its submission in your dashboard, where you can view and download it any time — no inbox digging.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Are uploaded files secure?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Files are transmitted and stored securely, attached to the right submission, and visible only to you.',
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
