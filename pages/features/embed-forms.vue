<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="Embed unlimited forms — free to start"
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

    <CalloutDiagram
      eyebrow="Anatomy"
      description="Copy the embed snippet, paste it where you want the form, and Formester renders it inline — every response flows straight back to your dashboard."
      :mockHtml="c2_mockHtml"
      :title="c2_title"
      :pins="c2_pins"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="How it embeds"
      description="The embed is just a script and a div, so it fits anywhere you can paste HTML — and a couple of options keep it sitting cleanly inside your page."
      columns="3"
      :title="c3_title"
      :cards="c3_cards"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where it helps"
      description="Embedding keeps people on the page they're already reading — so they fill out the form in context instead of clicking away."
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
      badge="Free to start"
      heading="Embed your first form in minutes"
      description="Build a form, copy the embed snippet, and paste it into your site — it renders inline and every response lands in your Formester dashboard."
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
  'Copy one embed snippet, paste it into your site, and the form renders right inside the page — no coding, no redirects. Works with WordPress, Shopify, Webflow, Framer, and any CMS.'
const c0_mockupHtml =
  "\u003Cstyle>@keyframes ef-paste{0%,18%{opacity:0;transform:translateY(8px) scale(.96)}34%,100%{opacity:1;transform:translateY(0) scale(1)}}@keyframes ef-caret{0%,46%{opacity:1}50%,100%{opacity:0}}@keyframes ef-glow{0%,18%{box-shadow:0 0 0 0 rgba(100,52,208,0)}34%{box-shadow:0 0 0 4px rgba(100,52,208,.18)}60%,100%{box-shadow:0 0 0 0 rgba(100,52,208,0)}}.ef-form{animation:ef-paste 5s ease-in-out infinite}.ef-slot{animation:ef-glow 5s ease-in-out infinite}.ef-caret{animation:ef-caret 1s step-end infinite}@media (prefers-reduced-motion:reduce){.ef-form{animation:none;opacity:1;transform:none}.ef-slot{animation:none}.ef-caret{animation:none;opacity:0}}\u003C/style><div style='display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:center;max-width:620px;margin:0 auto;'><div style='background:#14121f;border:1px solid #2a2740;border-radius:14px;box-shadow:0 24px 80px rgba(15,14,26,.22),0 8px 24px rgba(15,14,26,.12);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:10px 13px;background:#1c1930;border-bottom:1px solid #2a2740;'><span style='width:10px;height:10px;border-radius:50%;background:#ff6058;'></span><span style='width:10px;height:10px;border-radius:50%;background:#ffbd2e;'></span><span style='width:10px;height:10px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:7px;font-size:11px;line-height:1;color:#8b87a8;font-family:ui-monospace,Menlo,monospace;'>embed.html</span></div><pre style='margin:0;padding:15px 15px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;line-height:1.7;color:#c8c4e0;white-space:pre-wrap;word-break:break-all;'><span style='color:#8b87a8;'>&lt;script</span> <span style='color:#9db4ff;'>src</span>=<span style='color:#7ee0b8;'>&quot;formester.com/embed.js&quot;</span><span style='color:#8b87a8;'>&gt;&lt;/script&gt;</span>\n<span style='color:#8b87a8;'>&lt;div</span> <span style='color:#9db4ff;'>data-formester</span>=<span style='color:#7ee0b8;'>&quot;contact&quot;</span><span style='color:#8b87a8;'>&gt;&lt;/div&gt;</span><span class='ef-caret' style='color:#b9a6ec;'>&#9608;</span></pre></div><div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 24px 80px rgba(15,14,26,.14),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:9px 12px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:9px;height:9px;border-radius:50%;background:#d0d5dd;'></span><span style='flex:1;height:13px;border-radius:6px;background:#eef0f3;'></span></div><div style='padding:13px;'><div style='font-size:12px;line-height:1.2;font-weight:700;color:#101828;margin-bottom:3px;'>Get in touch</div><div style='font-size:9px;line-height:1.3;color:#697586;margin-bottom:10px;'>yoursite.com / contact</div><div class='ef-form ef-slot' style='border:1px solid #e9e4f5;border-radius:10px;padding:11px;background:#fff;'><div style='font-size:8px;line-height:1;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#6434d0;margin-bottom:8px;'>Contact form</div><div style='font-size:8px;line-height:1.1;color:#475467;margin-bottom:3px;'>Email</div><div style='height:20px;border:1px solid #d0d5dd;border-radius:6px;margin-bottom:8px;'></div><div style='font-size:8px;line-height:1.1;color:#475467;margin-bottom:3px;'>Message</div><div style='height:32px;border:1px solid #d0d5dd;border-radius:6px;margin-bottom:9px;'></div><div style='background:#6434d0;color:#fff;font-size:9px;line-height:1;font-weight:600;text-align:center;border-radius:6px;padding:8px 0;'>Send</div></div></div></div></div>"
const c0_title = [
  {
    id: 4731,
    text: 'Drop a form ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4730,
    text: 'into any web page',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1547,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1546,
    link: 'https://youtu.be/Nv02z49EfT0',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 83,
  text: 'Embed Forms',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_mockHtml =
  "<div style='max-width:360px;margin:0 auto;display:flex;flex-direction:column;gap:13px;'><div style='background:#14121f;border:1px solid #2a2740;border-radius:12px;overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:9px 12px;background:#1c1930;border-bottom:1px solid #2a2740;'><span style='width:9px;height:9px;border-radius:50%;background:#ff6058;'></span><span style='width:9px;height:9px;border-radius:50%;background:#ffbd2e;'></span><span style='width:9px;height:9px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:6px;font-size:10px;line-height:1;color:#8b87a8;font-family:ui-monospace,Menlo,monospace;'>embed.html</span></div><pre style='margin:0;padding:12px 13px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#c8c4e0;white-space:pre-wrap;word-break:break-all;'><span style='color:#8b87a8;'>&lt;script</span> <span style='color:#9db4ff;'>src</span>=<span style='color:#7ee0b8;'>&quot;formester.com/embed.js&quot;</span><span style='color:#8b87a8;'>&gt;&lt;/script&gt;</span>\n<span style='color:#8b87a8;'>&lt;div</span> <span style='color:#9db4ff;'>data-formester</span>=<span style='color:#7ee0b8;'>&quot;contact&quot;</span><span style='color:#8b87a8;'>&gt;&lt;/div&gt;</span></pre></div><div style='display:flex;align-items:center;justify-content:center;gap:7px;color:#6434d0;font-size:11px;line-height:1;font-weight:600;'><span style='width:30px;height:1px;background:#d6ccf2;'></span>renders as<span style='width:30px;height:1px;background:#d6ccf2;'></span></div><div style='background:#fff;border:1px solid #eaecf0;border-radius:12px;box-shadow:0 12px 36px rgba(15,14,26,.1);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:9px 12px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:9px;height:9px;border-radius:50%;background:#d0d5dd;'></span><span style='flex:1;height:12px;border-radius:6px;background:#eef0f3;'></span></div><div style='padding:13px;'><div style='font-size:12px;line-height:1.2;font-weight:700;color:#101828;margin-bottom:2px;'>Get in touch</div><div style='font-size:9.5px;line-height:1.3;color:#697586;margin-bottom:11px;'>yoursite.com / contact</div><div style='border:1px solid #e9e4f5;border-radius:9px;padding:11px;'><div style='font-size:9px;line-height:1.1;color:#475467;margin-bottom:3px;'>Email</div><div style='height:20px;border:1px solid #d0d5dd;border-radius:6px;margin-bottom:8px;'></div><div style='font-size:9px;line-height:1.1;color:#475467;margin-bottom:3px;'>Message</div><div style='height:30px;border:1px solid #d0d5dd;border-radius:6px;margin-bottom:9px;'></div><div style='background:#6434d0;color:#fff;font-size:10px;line-height:1;font-weight:600;text-align:center;border-radius:6px;padding:8px 0;'>Send</div></div></div></div></div>"
const c2_title = [
  {
    id: 4729,
    text: 'From snippet ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4723,
    text: 'to a live form on your site',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_pins = [
  {
    id: 73,
    label: '1 · Copy the snippet',
    body: 'Open the Embed tab and click Get Code. You get one small script + a div — no API keys, no plugin to install.',
  },
  {
    id: 74,
    label: '2 · Paste on your page',
    body: "Drop it into your page's HTML wherever the form should appear, on WordPress, Shopify, Webflow, Framer, or hand-coded sites.",
  },
  {
    id: 75,
    label: '3 · The form renders inline',
    body: 'Formester replaces the div with your live form, styled to match your site and sized to the page with Auto Height.',
  },
  {
    id: 76,
    label: '4 · Responses flow to Formester',
    body: 'Every submission lands in your dashboard with notifications, spam filtering, and exports — no server on your end.',
  },
]
const c3_title = [
  {
    id: 4728,
    text: 'One snippet, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4722,
    text: 'your way of embedding',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_cards = [
  {
    id: 558,
    tag: 'Inline',
    tagColor: 'violet',
    title: 'Renders inside your page',
    body: 'The form appears exactly where you paste it — in the body of a page or post — so visitors fill it out without ever leaving your site.',
    mockHtml:
      "<div style='border:1px solid #eaecf0;border-radius:9px;overflow:hidden;'><div style='height:7px;background:#eef0f3;'></div><div style='padding:9px;'><div style='height:6px;width:60%;background:#e4e7ec;border-radius:3px;margin-bottom:8px;'></div><div style='border:1px solid #e9e4f5;border-radius:7px;padding:8px;background:#faf8ff;'><div style='height:14px;border:1px solid #d0d5dd;border-radius:5px;margin-bottom:6px;'></div><div style='background:#6434d0;height:14px;border-radius:5px;'></div></div><div style='height:6px;width:80%;background:#e4e7ec;border-radius:3px;margin-top:8px;'></div></div></div>",
    icon: null,
  },
  {
    id: 560,
    tag: 'Embed Mode',
    tagColor: 'blue',
    title: 'Blends into your design',
    body: 'Turn on Embed Mode to strip the standalone page chrome so the form looks native to your site — your colors, fonts, and layout.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:8px;'><span style='font-size:11px;line-height:1;font-weight:600;color:#101828;'>Embed Mode</span><span style='margin-left:auto;width:34px;height:18px;border-radius:999px;background:#6434d0;position:relative;display:inline-block;'><span style='position:absolute;top:2px;right:2px;width:14px;height:14px;border-radius:50%;background:#fff;'></span></span></div>",
    icon: null,
  },
  {
    id: 561,
    tag: 'Auto Height',
    tagColor: 'green',
    title: 'No scrollbars, no gaps',
    body: "Auto Height resizes the embed to fit the form, so there's no inner scrollbar or empty space — it grows and shrinks with the content.",
    mockHtml:
      "<div style='display:flex;align-items:flex-end;gap:8px;'><div style='display:flex;flex-direction:column;align-items:center;gap:4px;'><div style='width:26px;height:24px;border:1px dashed #b9a6ec;border-radius:6px;'></div><span style='font-size:8px;line-height:1;color:#697586;'>short</span></div><svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='#6434d0' stroke-width='2.4'><path d='M5 12h14M13 6l6 6-6 6'/></svg><div style='display:flex;flex-direction:column;align-items:center;gap:4px;'><div style='width:26px;height:40px;border:1px solid #6434d0;border-radius:6px;background:#faf8ff;'></div><span style='font-size:8px;line-height:1;color:#6434d0;font-weight:600;'>fits</span></div></div>",
    icon: null,
  },
  {
    id: 562,
    tag: 'Any platform',
    tagColor: 'amber',
    title: 'Works with every CMS',
    body: 'Paste the same code into WordPress, Shopify, Webflow, Framer, or a hand-coded page — anywhere that accepts HTML or a script tag.',
    mockHtml:
      "<div style='display:flex;flex-wrap:wrap;gap:6px;'><span style='font-size:10px;line-height:1;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:5px 9px;'>WordPress</span><span style='font-size:10px;line-height:1;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:5px 9px;'>Shopify</span><span style='font-size:10px;line-height:1;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:5px 9px;'>Webflow</span><span style='font-size:10px;line-height:1;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:5px 9px;'>Framer</span></div>",
    icon: null,
  },
  {
    id: 559,
    tag: 'No code',
    tagColor: 'violet',
    title: 'Copy, paste, done',
    body: 'No API wiring, no plugin to install, and no server to maintain. If you can paste a line of HTML, you can embed a Formester form.',
    mockHtml:
      "<div style='font-family:ui-monospace,Menlo,monospace;font-size:11px;line-height:1.5;color:#475467;'><span style='color:#98a2b3;'>&lt;div</span> <span style='color:#6434d0;font-weight:600;'>data-formester</span>=<span style='color:#027a48;'>\"contact\"</span><span style='color:#98a2b3;'>&gt;&lt;/div&gt;</span></div>",
    icon: null,
  },
  {
    id: 563,
    tag: 'Responsive',
    tagColor: 'rose',
    title: 'Looks right on every screen',
    body: 'Embedded forms are fully responsive and adapt to mobile, tablet, and desktop automatically — no extra breakpoints to manage.',
    mockHtml:
      "<div style='display:flex;align-items:flex-end;gap:8px;'><div style='width:40px;height:30px;border:1px solid #d0d5dd;border-radius:5px;'></div><div style='width:22px;height:30px;border:1px solid #d0d5dd;border-radius:5px;'></div><div style='width:14px;height:24px;border:1px solid #6434d0;border-radius:4px;background:#faf8ff;'></div></div>",
    icon: null,
  },
]
const c4_title = [
  {
    id: 4726,
    text: 'Put a form ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4725,
    text: 'exactly where visitors are',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 564,
    tag: 'Landing pages',
    tagColor: 'violet',
    title: 'Lead capture in context',
    body: 'Embed a lead form right under your offer so visitors sign up without a redirect — fewer clicks, fewer drop-offs.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 568,
    tag: 'Contact pages',
    tagColor: 'blue',
    title: 'Contact forms that stay put',
    body: 'Place a contact form on your contact page so people can reach you inline, with messages landing straight in Formester.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 566,
    tag: 'Help & feedback',
    tagColor: 'green',
    title: 'Feedback widgets in-app',
    body: 'Embed a short feedback or support form on product and help pages to collect input the moment someone has something to say.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 565,
    tag: 'Newsletter',
    tagColor: 'amber',
    title: 'Sign-ups on every page',
    body: 'Drop a newsletter sign-up into your homepage, blog footer, or sidebar to grow your list wherever readers are.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 569,
    tag: 'Events',
    tagColor: 'rose',
    title: 'Registrations on the event page',
    body: 'Embed a registration form on the event page itself so visitors sign up right where they read the details.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 567,
    tag: 'Careers',
    tagColor: 'violet',
    title: 'Applications on careers pages',
    body: 'Add a job application form to your careers page so candidates submit details and files without leaving the listing.',
    mockHtml: null,
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4724,
    text: 'Teams embed Formester forms across their sites',
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
]
const c6_title = [
  {
    id: 4727,
    text: 'Embed forms FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2342,
    header: 'What is an embed form?',
    body: 'An embed form is a form placed directly inside one of your own web pages using a small snippet of HTML or script. Visitors fill it out inline, without being redirected to a separate Formester page.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2343,
    header: 'How do I embed a form on my website?',
    body: "Build your form in Formester, open the Embed tab, click Get Code to copy the snippet, then paste it into your page's HTML where you want the form to appear. Publish the page and the form is live — responses flow straight back to your Formester dashboard.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2340,
    header: 'How do I embed a contact form?',
    body: 'Build a contact form, generate its embed code, and paste it into your contact page. Visitors send their message without leaving your site, and every submission lands in Formester.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2341,
    header: "Can I customize the embedded form's design?",
    body: "Yes. Style the form to match your site's colors, fonts, and layout, and use Embed Mode and Auto Height so it blends into the page rather than sitting in a fixed box.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2345,
    header: 'Will embedded forms work on WordPress, Shopify, or other platforms?',
    body: 'Yes. The same snippet works on WordPress, Shopify, Webflow, Framer, or any website or CMS that lets you paste in HTML or a script tag — no plugin required.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2344,
    header: 'Are embedded forms mobile-friendly?',
    body: 'Yes. Embedded forms are fully responsive and adjust automatically to mobile, tablet, and desktop, and Auto Height keeps the page free of empty space or scrollbars.',
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1544,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1545,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Embed Forms on Any Website | Copy-Paste Embed Code | Formester',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/embed-forms/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:44.405Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Embed a form or contact form on your website without coding — just copy the embed snippet and paste it into your page. Works with WordPress, Shopify, Webflow, Framer, and any CMS.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Embed Forms on Any Website | Copy-Paste Embed Code | Formester',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/embed-forms/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Embed Forms on Any Website | Copy-Paste Embed Code | Formester',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Embed a form or contact form on your website without coding — just copy the embed snippet and paste it into your page. Works with WordPress, Shopify, Webflow, Framer, and any CMS.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_embeddable_forms_feature_page_hero_image_2850a05f98.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Embed Forms on Any Website | Copy-Paste Embed Code | Formester',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/features/embed-forms/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Embed Forms on Any Website | Copy-Paste Embed Code | Formester',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Embed a form or contact form on your website without coding — just copy the embed snippet and paste it into your page. Works with WordPress, Shopify, Webflow, Framer, and any CMS.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content:
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_embeddable_forms_feature_page_hero_image_2850a05f98.png',
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Embed Forms on Any Website | Copy-Paste Embed Code | Formester',
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
        'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_embeddable_forms_feature_page_hero_image_2850a05f98.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ['embed forms'],
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
        name: 'What is an embed form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'An embed form is a form placed directly inside one of your own web pages using a small snippet of HTML or script. Visitors fill it out inline, without being redirected to a separate Formester page.',
          '@type': 'Answer',
        },
      },
      {
        name: 'How do I embed a form on my website?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Build your form in Formester, open the Embed tab, click Get Code to copy the snippet, then paste it into your page's HTML where you want the form to appear. Publish the page and the form is live — responses flow straight back to your Formester dashboard.",
          '@type': 'Answer',
        },
      },
      {
        name: 'How do I embed a contact form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Build a contact form, generate its embed code, and paste it into your contact page. Visitors send their message without leaving your site, and every submission lands in Formester.',
          '@type': 'Answer',
        },
      },
      {
        name: "Can I customize the embedded form's design?",
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. Style the form to match your site's colors, fonts, and layout, and use Embed Mode and Auto Height so it blends into the page rather than sitting in a fixed box.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Will embedded forms work on WordPress, Shopify, or other platforms?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. The same snippet works on WordPress, Shopify, Webflow, Framer, or any website or CMS that lets you paste in HTML or a script tag — no plugin required.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Are embedded forms mobile-friendly?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Embedded forms are fully responsive and adjust automatically to mobile, tablet, and desktop, and Auto Height keeps the page free of empty space or scrollbars.',
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
