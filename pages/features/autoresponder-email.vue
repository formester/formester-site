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

    <StickyStepsSection
      badge="How it works"
      heading="Set up your autoresponder in three steps"
      description="Add an autoresponder, write the reply with @field recall, and connect your email — then Formester sends it on every submission automatically."
      background="#f9fafb"
      :steps="c3_steps"
      :buttons="c3_buttons"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where teams use it"
      description="Wherever a form ends a conversation, an automatic reply keeps it going — confirming, reassuring, and pointing people to what's next."
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
      heading="Reply to every respondent, automatically"
      description="Add an autoresponder, write the email once with @field recall, and let Formester send a personalised reply on every submission."
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
  'Write your confirmation or thank-you once and Formester sends it to each respondent the moment they submit. Pull in their own answers with @field recall, attach a copy of their response, and reply from your own address — automatically, every time.'
const c0_mockupHtml =
  "\u003Cstyle>.ar-btn{position:relative;overflow:hidden;}.ar-press{animation:arPress 6s ease-in-out infinite;}@keyframes arPress{0%,6%{transform:scale(1);}10%{transform:scale(.96);}14%,100%{transform:scale(1);}}.ar-sent{opacity:0;animation:arSent 6s ease-in-out infinite;}@keyframes arSent{0%,12%{opacity:0;}18%,100%{opacity:1;}}.ar-mail{opacity:0;transform:translateY(14px);animation:arMail 6s ease-in-out infinite;}@keyframes arMail{0%,16%{opacity:0;transform:translateY(14px);}26%,100%{opacity:1;transform:translateY(0);}}.ar-check{transform:scale(.4);opacity:0;animation:arCheck 6s ease-in-out infinite;}@keyframes arCheck{0%,28%{transform:scale(.4);opacity:0;}36%{transform:scale(1.15);opacity:1;}42%,100%{transform:scale(1);opacity:1;}}@media (prefers-reduced-motion:reduce){.ar-press,.ar-sent,.ar-mail,.ar-check{animation:none !important;opacity:1 !important;transform:none !important;}}\u003C/style><div style='max-width:420px;margin:0 auto;display:flex;flex-direction:column;gap:14px;'><div style='background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:11px 15px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:8px;font-size:11px;line-height:1;color:#697586;'>formester.com/f/contact</span></div><div style='padding:16px;display:flex;flex-direction:column;gap:11px;text-align:left;'><div><div style='font-size:11px;font-weight:600;color:#475467;margin-bottom:4px;line-height:1.1;'>Name</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:12.5px;line-height:1.1;color:#101828;'>Jordan Reyes</div></div><div><div style='font-size:11px;font-weight:600;color:#475467;margin-bottom:4px;line-height:1.1;'>Email</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:12.5px;line-height:1.1;color:#101828;'>jordan@brightlabs.co</div></div><button class='ar-btn ar-press' style='margin-top:2px;width:100%;border:0;border-radius:9px;background:#6434d0;color:#fff;font-size:12.5px;font-weight:700;line-height:1;padding:11px 0;cursor:default;'>Submit</button><div class='ar-sent' style='display:flex;align-items:center;justify-content:center;gap:6px;font-size:10.5px;font-weight:600;line-height:1;color:#027a48;'><span style='width:14px;height:14px;border-radius:50%;background:#ecfdf3;display:inline-flex;align-items:center;justify-content:center;'><svg width='9' height='9' viewBox='0 0 24 24' fill='none' stroke='#027a48' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span>Submitted · auto-reply on its way</div></div></div><div style='display:flex;justify-content:center;color:#b9a6ec;'><svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#6434d0' stroke-width='2.4'><path d='M12 5v14M5 12l7 7 7-7'/></svg></div><div class='ar-mail' style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 16px 48px rgba(15,14,26,.10);padding:14px 16px;text-align:left;'><div style='display:flex;align-items:center;gap:10px;'><span style='width:34px;height:34px;border-radius:9px;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M4 4h16v16H4z'/><path d='m4 6 8 6 8-6'/></svg></span><div style='display:flex;flex-direction:column;gap:2px;min-width:0;'><div style='font-size:12.5px;font-weight:700;line-height:1.2;color:#101828;'>Thanks for your submission</div><div style='font-size:10.5px;line-height:1.2;color:#697586;'>Bright Labs &lt;hello@brightlabs.co&gt;</div></div><span class='ar-check' style='margin-left:auto;width:24px;height:24px;border-radius:50%;background:#ecfdf3;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#027a48' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg></span></div><div style='margin-top:11px;font-size:11.5px;line-height:1.55;color:#475467;'>Hi <span style='font-weight:700;color:#101828;'>Jordan</span>, we've got your message and a teammate will be in touch shortly. A copy of your response is attached for your records.</div></div></div>"
const c0_title = [
  {
    id: 4602,
    text: 'Every submission gets ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4601,
    text: 'an instant reply',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1492,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1493,
    link: 'https://youtu.be/gllVMDqryog',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 69,
  text: 'Autoresponder Email',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_description =
  'The moment someone submits is the moment they care most. An automatic reply confirms you got it, sets expectations, and makes every form feel like a real conversation.'
const c2_title = [
  {
    id: 4595,
    text: 'A reply that lands ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4598,
    text: 'before they leave the tab',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 458,
    tag: 'Instant confirmation',
    tagColor: 'violet',
    title: 'They know it went through',
    body: 'No more wondering whether the form worked. A reply hits their inbox the second they submit, so respondents trust that their message — or order, or booking — actually reached you.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:24px;height:24px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg></span><div style='font-size:11.5px;font-weight:600;line-height:1.2;color:#101828;'>We got your submission</div><span style='margin-left:auto;font-size:9px;font-weight:700;line-height:1;color:#697586;'>now</span></div>",
    icon: null,
  },
  {
    id: 461,
    tag: 'Set expectations',
    tagColor: 'blue',
    title: 'Answer the next question first',
    body: 'Tell people what happens next — when you\'ll reply, where to find their details, what to do meanwhile. Fewer "did you get this?" emails and a calmer inbox for your team.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='width:7px;height:7px;border-radius:50%;background:#6434d0;flex-shrink:0;'></span>We'll reply within 24 hours</div><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='width:7px;height:7px;border-radius:50%;background:#6434d0;flex-shrink:0;'></span>Your copy is attached</div><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='width:7px;height:7px;border-radius:50%;background:#6434d0;flex-shrink:0;'></span>Need help? Just reply here</div></div>",
    icon: null,
  },
  {
    id: 462,
    tag: 'On-brand',
    tagColor: 'green',
    title: 'Looks like it came from you',
    body: 'Send from your own Gmail, Outlook, or SMTP address with your wording and your name. The reply feels personal and professional — not like an automated bounce-back.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:26px;height:26px;border-radius:7px;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;line-height:1;flex-shrink:0;'>BL</span><div style='display:flex;flex-direction:column;gap:2px;min-width:0;'><span style='font-size:11px;font-weight:600;line-height:1.2;color:#101828;'>Bright Labs</span><span style='font-size:10px;line-height:1.2;color:#697586;'>hello@brightlabs.co</span></div></div>",
    icon: null,
  },
]
const c3_steps = [
  {
    id: 114,
    title: 'Add an autoresponder',
    description:
      "Once your form is published, open Automate → Auto Responder → Add Autoresponder. That's where every reply for this form lives.",
    rawHtml:
      "<div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;border-radius:9px;padding:8px 11px;font-size:12.5px;line-height:1.1;color:#101828;background:#fff;box-shadow:0 4px 12px rgba(100,52,208,.16);'><span style='font-size:12px;color:#697586;'>Automate</span><span style='color:#b9a6ec;font-weight:700;'>&#8594;</span><span style='font-size:12px;color:#697586;'>Auto Responder</span><span style='margin-left:auto;display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#fff;background:#6434d0;border-radius:6px;padding:5px 9px;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='3'><path d='M12 5v14M5 12h14'/></svg>Add</span></div>",
    image: null,
  },
  {
    id: 113,
    title: 'Write the reply with @field recall',
    description:
      'Compose your subject and body, then type @ to drop any submitted answer right in — @Name, @Email, anything on the form. Attach a copy of their response if you want, and let AI draft a first version for you.',
    rawHtml:
      "<div style='display:flex;flex-direction:column;gap:8px;'><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:11.5px;line-height:1.3;color:#101828;background:#fff;'>Subject: Thanks, <span style='font-weight:700;color:#6434d0;background:#f0ebfa;border-radius:5px;padding:1px 6px;'>@Name</span>!</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 11px;font-size:11.5px;line-height:1.45;color:#475467;background:#fff;'>Hi <span style='font-weight:700;color:#6434d0;background:#f0ebfa;border-radius:5px;padding:1px 6px;'>@Name</span>, we received your message at <span style='font-weight:700;color:#6434d0;background:#f0ebfa;border-radius:5px;padding:1px 6px;'>@Email</span> and will reply soon.</div></div>",
    image: null,
  },
  {
    id: 115,
    title: 'Connect your email and activate',
    description:
      'Link Gmail, Outlook, or your own SMTP over OAuth and save. From now on, every submission triggers your reply automatically — add a delay or conditional rules if you need them.',
    rawHtml:
      "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;'><span style='width:22px;height:22px;border-radius:6px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M4 4h16v16H4z'/><path d='m4 6 8 6 8-6'/></svg></span><span style='font-size:12px;font-weight:600;line-height:1.1;color:#101828;'>Gmail connected</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;line-height:1;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;'>OAuth</span></div><div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;'><span style='font-size:12px;font-weight:600;line-height:1.1;color:#101828;'>Autoresponder active</span><span style='margin-left:auto;width:34px;height:19px;border-radius:999px;background:#6434d0;position:relative;flex-shrink:0;'><span style='position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:50%;background:#fff;'></span></span></div></div>",
    image: null,
  },
]
const c3_buttons = []
const c4_title = [
  {
    id: 4596,
    text: 'One autoresponder, ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4597,
    text: 'every kind of form',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_cards = [
  {
    id: 457,
    tag: 'Registrations',
    tagColor: 'violet',
    title: 'Event sign-ups',
    body: 'Send confirmation emails with event details, tickets, or a calendar invite the moment someone registers — so attendees have everything in hand.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>You're registered</span><span style='margin-left:auto;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 8px;line-height:1;'>Ticket #A24</span></div><div style='font-size:10.5px;line-height:1.3;color:#697586;'>Fri 14 Jun · 6:00 PM · details inside</div></div>",
    icon: null,
  },
  {
    id: 456,
    tag: 'Lead magnets',
    tagColor: 'blue',
    title: 'Gated content & nurture',
    body: 'Deliver the guide, pricing, or case study automatically, then follow up with next steps — turning a fresh lead into a conversation without lifting a finger.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:24px;height:24px;border-radius:6px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 3v12M8 11l4 4 4-4'/><path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2'/></svg></span><div style='font-size:11px;font-weight:600;line-height:1.2;color:#101828;'>Your guide is attached</div></div>",
    icon: null,
  },
  {
    id: 460,
    tag: 'Support',
    tagColor: 'green',
    title: 'Help & contact requests',
    body: 'Auto-reply with a ticket number, expected response time, and a link to helpful resources, so people feel heard the instant they reach out.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>Ticket opened</span><span style='margin-left:auto;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;line-height:1;'>#4821</span></div><div style='font-size:10.5px;line-height:1.3;color:#697586;'>Typical reply time: under 4 hours</div></div>",
    icon: null,
  },
  {
    id: 459,
    tag: 'Bookings',
    tagColor: 'amber',
    title: 'Orders & appointments',
    body: 'Confirm a purchase or a booked slot with an order summary or appointment details, plus a copy of their response for their records.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.2;color:#101828;'><span style='font-weight:600;'>Booking confirmed</span><span style='margin-left:auto;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 8px;line-height:1;'>10:30 AM</span></div><div style='font-size:10.5px;line-height:1.3;color:#697586;'>Summary &amp; receipt attached</div></div>",
    icon: null,
  },
]
const c5_heading = [
  {
    id: 4599,
    text: 'Teams keep respondents in the loop with Formester',
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
    id: 4600,
    text: 'Autoresponder email FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_faqList = [
  {
    id: 2244,
    header: 'What is an autoresponder email?',
    body: "It's an email Formester sends automatically to the person who just submitted your form — a confirmation, thank-you, or follow-up. You write it once and every respondent gets their reply the moment they hit submit, with no manual work.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2245,
    header: 'How do I set up an autoresponder on my form?',
    body: "Publish your form, then open Automate → Auto Responder → Add Autoresponder. Write the subject and body, pick the field that holds the respondent's email address, connect your sending account, and save. From then on the reply sends itself on every submission.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2246,
    header: "Can I include the respondent's own answers in the reply?",
    body: "Yes. Use @field recall to drop any submitted answer straight into the subject or body — type @ and pick the field, like @Name or @Email. Each reply is personalised with that respondent's details, and you can also attach a full copy of their submission.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2247,
    header: 'Which email address does the autoresponder send to?',
    body: 'You choose. Point the autoresponder at the email field on your form, and Formester sends the reply to whatever address that respondent entered. No mailing list or manual lookup required.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2250,
    header: 'Can I send the reply from my own domain?',
    body: 'Yes. Connect Gmail, Outlook, or your own SMTP server over OAuth so replies come from your branded address. You can also choose between HTML and plain-text emails for a polished, professional look.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2248,
    header: 'Can I delay the reply or only send it under certain conditions?',
    body: 'Yes. Add a delay from a few minutes to several days so the reply lands at the right moment, and use conditional rules to only send — or change — the email based on what the respondent answered.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2249,
    header: 'Is the autoresponder free to use?',
    body: 'Yes. Build a form, set up an autoresponder, and start sending automatic replies for free — no code and no extra tools required.',
    body_markdown: null,
    list: [],
  },
]
const c7_buttons = [
  {
    id: 1490,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1491,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Email Autoresponder for Forms | Automatic Reply Emails',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/autoresponder-email/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:52.368Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Automatically send a reply email the moment someone submits your form. Write a confirmation or thank-you, pull in their answers with @field recall, and let Formester send it on every submission.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Email Autoresponder for Forms | Automatic Reply Emails',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/autoresponder-email/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Email Autoresponder for Forms | Automatic Reply Emails',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Automatically send a reply email the moment someone submits your form. Write a confirmation or thank-you, pull in their answers with @field recall, and let Formester send it on every submission.',
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
      content: 'https://formester.com/features/autoresponder-email/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Email Autoresponder for Forms | Automatic Reply Emails',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Automatically send a reply email the moment someone submits your form. Write a confirmation or thank-you, pull in their answers with @field recall, and let Formester send it on every submission.',
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
      content: ['instant pre-written reply'],
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
        name: 'What is an autoresponder email?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "It's an email Formester sends automatically to the person who just submitted your form — a confirmation, thank-you, or follow-up. You write it once and every respondent gets their reply the moment they hit submit, with no manual work.",
          '@type': 'Answer',
        },
      },
      {
        name: 'How do I set up an autoresponder on my form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Publish your form, then open Automate → Auto Responder → Add Autoresponder. Write the subject and body, pick the field that holds the respondent's email address, connect your sending account, and save. From then on the reply sends itself on every submission.",
          '@type': 'Answer',
        },
      },
      {
        name: "Can I include the respondent's own answers in the reply?",
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. Use @field recall to drop any submitted answer straight into the subject or body — type @ and pick the field, like @Name or @Email. Each reply is personalised with that respondent's details, and you can also attach a full copy of their submission.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Which email address does the autoresponder send to?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'You choose. Point the autoresponder at the email field on your form, and Formester sends the reply to whatever address that respondent entered. No mailing list or manual lookup required.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I send the reply from my own domain?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Connect Gmail, Outlook, or your own SMTP server over OAuth so replies come from your branded address. You can also choose between HTML and plain-text emails for a polished, professional look.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I delay the reply or only send it under certain conditions?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Add a delay from a few minutes to several days so the reply lands at the right moment, and use conditional rules to only send — or change — the email based on what the respondent answered.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is the autoresponder free to use?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Build a form, set up an autoresponder, and start sending automatic replies for free — no code and no extra tools required.',
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
