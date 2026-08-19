<template>
  <div>
    <HeroV2
      description="Add a payment field to any form and accept money with Stripe, PayPal, or Authorize.net. Secure, PCI-compliant checkout — with no extra fees from Formester."
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

    <CardGrid
      eyebrow="What you get"
      description="Create the form, take the payment, and manage the order — all in one place, without stitching tools together."
      columns="3"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StatsBanner
      variant="band"
      heading="Secure payments your customers can trust"
      :stats="c3_stats"
      class="page-component-item"
    />

    <AlternatingRows eyebrow="How it works" :title="c4_title" :rows="c4_rows" class="page-component-item" />

    <CardGrid
      eyebrow="Real-life use cases"
      columns="3"
      :title="c5_title"
      :cards="c5_cards"
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
      heading="Start collecting payments on your forms"
      description="Add a payment field, connect Stripe, PayPal, or Authorize.net, and publish."
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
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_mockupHtml =
  "<div style='max-width:560px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>forms.formester.com · Checkout</span></div><div style='padding:18px;text-align:left;'><div style='display:flex;justify-content:space-between;font-size:13px;color:#475467;padding:7px 0;'><span>Workshop ticket × 1</span><span style='color:#101828;'>$50.00</span></div><div style='display:flex;justify-content:space-between;font-size:13px;color:#475467;padding:7px 0;border-bottom:1px solid #eaecf0;'><span>Materials add-on</span><span style='color:#101828;'>$20.00</span></div><div style='display:flex;justify-content:space-between;align-items:center;padding:11px 0;'><span style='font-size:13px;font-weight:600;color:#101828;'>Total</span><span style='font-size:18px;font-weight:700;color:#6434d0;letter-spacing:-.02em;'>$70.00</span></div><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;margin-bottom:10px;'><span style='width:26px;height:18px;border-radius:4px;background:linear-gradient(135deg,#6434d0,#7c4ce0);'></span><span style='font-size:13px;color:#101828;letter-spacing:1px;'>•••• •••• •••• 4242</span><span style='margin-left:auto;font-size:12px;color:#98a2b3;'>12/26</span></div><div style='background:#6434d0;color:#fff;font-size:14px;font-weight:600;text-align:center;border-radius:10px;padding:12px;'>Pay $70.00</div><div style='display:flex;align-items:center;justify-content:center;gap:8px;margin-top:12px;font-size:11px;color:#697586;'><span style='font-weight:600;color:#475467;'>Stripe</span><span>·</span><span style='font-weight:600;color:#475467;'>PayPal</span><span>·</span><span style='font-weight:600;color:#475467;'>Authorize.net</span><span style='margin-left:4px;color:#027a48;'>· PCI compliant</span></div></div></div>"
const c0_title = [
  {
    id: 4824,
    text: 'Collect payments ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4825,
    text: 'right inside your form',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1586,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1587,
    link: 'https://youtu.be/y1yigKeFmF4',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 93,
  text: 'Online Payments',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 4818,
    text: 'Automate payment collection and',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4819,
    text: 'order processing',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c2_cards = [
  {
    id: 633,
    tag: 'Gateways',
    tagColor: 'violet',
    title: 'Stripe, PayPal & Authorize.net',
    body: 'Connect the gateway you already use in minutes and start accepting secure payments worldwide.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:9px;'><div style='display:flex;align-items:center;gap:9px;font-size:12.5px;color:#101828;'><img src='/integrations/stripe.svg' width='22' height='22' alt='Stripe' style='border-radius:5px;'/>Stripe<span style='margin-left:auto;font-size:10px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;'>Connected</span></div><div style='display:flex;align-items:center;gap:9px;font-size:12.5px;color:#101828;'><img src='/integrations/paypal.svg' width='22' height='22' alt='PayPal' style='border-radius:5px;'/>PayPal</div><div style='display:flex;align-items:center;gap:9px;font-size:12.5px;color:#101828;'><img src='/integrations/authorize-net.webp' width='22' height='22' alt='Authorize.net' style='border-radius:5px;'/>Authorize.net</div></div>",
    icon: null,
  },
  {
    id: 634,
    tag: 'All-in-one',
    tagColor: 'blue',
    title: 'Forms, payments & orders together',
    body: 'Build the form, collect the payment, and manage the order without switching between tools.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;'><span style='width:30px;height:30px;border-radius:8px;background:#f0ebfa;color:#6434d0;display:flex;align-items:center;justify-content:center;font-weight:700;'>F</span><span style='font-size:18px;color:#d0d5dd;'>→</span><span style='width:30px;height:30px;border-radius:8px;background:#eff8ff;color:#175cd3;display:flex;align-items:center;justify-content:center;font-weight:700;'>$</span><span style='font-size:12px;color:#697586;margin-left:4px;'>Form → Payment → Order</span></div>",
    icon: null,
  },
  {
    id: 635,
    tag: 'Tracking',
    tagColor: 'green',
    title: 'Track payments in real time',
    body: 'Monitor every transaction, catch failed payments, and stay on top of cash flow from one dashboard.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:6px;'><div style='display:flex;align-items:center;justify-content:space-between;font-size:12px;color:#101828;'><span>Acme Co</span><span>$70.00</span><span style='font-size:10px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;'>Paid</span></div><div style='display:flex;align-items:center;justify-content:space-between;font-size:12px;color:#697586;'><span>J. Lee</span><span>$50.00</span><span style='font-size:10px;font-weight:700;color:#b42318;background:#fef3f2;border-radius:999px;padding:2px 8px;'>Failed</span></div></div>",
    icon: null,
  },
]
const c3_stats = [
  {
    id: 100,
    value: '3',
    label: 'gateways — Stripe, PayPal, Authorize.net',
  },
  {
    id: 98,
    value: 'PCI',
    label: 'compliant checkout',
  },
  {
    id: 99,
    value: '$0',
    label: 'extra fees added by Formester',
  },
  {
    id: 101,
    value: '56k+',
    label: 'users worldwide',
  },
]
const c4_title = [
  {
    id: 4816,
    text: 'From form field to',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4817,
    text: 'paid in full',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_rows = [
  {
    id: 98,
    kicker: 'Build',
    title: 'Add a payment field to any form',
    body: 'Drop a payment element into a new or existing form, set the amount or let respondents choose, and pick your gateway.',
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:16px;'><div style='display:flex;align-items:center;gap:9px;margin-bottom:11px;'><span style='font-size:12px;font-weight:600;color:#101828;border:1px solid #eaecf0;border-radius:8px;padding:5px 10px;'>+ Add Elements</span><span style='font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#98a2b3;'>Payment</span></div><div style='display:flex;flex-direction:column;gap:6px;'><div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;border-radius:9px;padding:7px 10px;font-size:12.5px;color:#101828;box-shadow:0 4px 12px rgba(100,52,208,.18);'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg><span style='width:18px;height:18px;border-radius:5px;background:#e6f7f4;'></span>Stripe<span style='margin-left:auto;font-size:10px;color:#6434d0;font-weight:600;'>Dragging</span></div><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:9px;padding:7px 10px;font-size:12.5px;color:#101828;'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg><span style='width:18px;height:18px;border-radius:5px;background:#e6f7f4;'></span>Paypal</div><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:9px;padding:7px 10px;font-size:12.5px;color:#101828;'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg><span style='width:18px;height:18px;border-radius:5px;background:#e6f7f4;'></span>Authorize.net</div></div><div style='text-align:center;color:#b9a6ec;font-size:18px;line-height:1;margin:9px 0;'>↓</div><div style='border:1px solid #6434d0;border-radius:10px;padding:11px 12px;box-shadow:0 0 0 4px #f0ebfa;'><div style='font-size:11px;color:#697586;margin-bottom:7px;'>Amount to pay</div><div style='display:flex;align-items:center;gap:7px;'><span style='font-size:12.5px;font-weight:600;color:#101828;border:1px solid #eaecf0;border-radius:7px;padding:6px 9px;'>USD ▾</span><span style='flex:1;font-size:13px;color:#101828;border:1px solid #eaecf0;border-radius:7px;padding:6px 10px;'>90.00</span><span style='background:#6434d0;color:#fff;font-size:12px;font-weight:600;border-radius:8px;padding:7px 16px;'>Pay</span></div></div></div>",
  },
  {
    id: 99,
    kicker: 'Manage',
    title: 'Track and reconcile every transaction',
    body: 'Each submission carries its payment status, amount, and gateway, so reconciling is just reading your dashboard.',
    mediaHtml:
      "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:16px;'><div style='font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#697586;margin-bottom:10px;'>Payments</div><div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;font-size:12.5px;color:#101828;'><span>Workshop · Acme</span><span style='font-weight:600;'>$70.00</span><span style='font-size:10px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;'>Paid</span></div><div style='display:flex;align-items:center;justify-content:space-between;font-size:12.5px;color:#101828;'><span>Donation · M. Roe</span><span style='font-weight:600;'>$25.00</span><span style='font-size:10px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;'>Paid</span></div><div style='display:flex;align-items:center;justify-content:space-between;font-size:12.5px;color:#697586;'><span>Order · J. Lee</span><span style='font-weight:600;'>$50.00</span><span style='font-size:10px;font-weight:700;color:#b42318;background:#fef3f2;border-radius:999px;padding:2px 8px;'>Failed</span></div></div></div>",
  },
]
const c5_title = [
  {
    id: 4822,
    text: 'What teams',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4823,
    text: 'get paid for',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c5_cards = [
  {
    id: 636,
    tag: 'Events',
    tagColor: 'blue',
    title: 'Event registration',
    body: 'Collect ticket and registration fees the moment someone signs up — no separate payment step.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 639,
    tag: 'Orders',
    tagColor: 'green',
    title: 'Product orders',
    body: 'Turn an order form into a checkout with Stripe, PayPal, or Authorize.net and process more orders online.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 637,
    tag: 'Memberships',
    tagColor: 'violet',
    title: 'Membership renewals',
    body: 'Let members renew and pay through one form, so subscriptions stay current without the back-and-forth.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 638,
    tag: 'Nonprofits',
    tagColor: 'amber',
    title: 'Donation collection',
    body: 'Accept secure online donations and give supporters a fast, trustworthy way to give.',
    mockHtml: null,
    icon: null,
  },
  {
    id: 640,
    tag: 'Services',
    tagColor: 'rose',
    title: 'Service requests',
    body: 'Take payment with the request, so clients book and pay in a single step.',
    mockHtml: null,
    icon: null,
  },
]
const c6_heading = [
  {
    id: 4820,
    text: 'Businesses get paid with Formester',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_testimonials = [
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
]
const c7_title = [
  {
    id: 4821,
    text: 'Online payment FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c7_faqList = [
  {
    id: 2405,
    header: 'How do I accept payments on a form?',
    body: 'Add a payment element to any form, connect your gateway (Stripe, PayPal, or Authorize.net), set the amount, then publish. Respondents pay as they submit.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2401,
    header: 'Which payment gateways are supported?',
    body: 'Formester supports Stripe, PayPal, and Authorize.net, so you can use the processor you already have.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2402,
    header: 'Does Formester charge extra transaction fees?',
    body: "No. Formester doesn't add any transaction fees — you only pay your payment provider's standard processing rate.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2400,
    header: 'Are payments secure and PCI compliant?',
    body: 'Yes. Payments are processed through your gateway over a secure, PCI-compliant checkout, so card details are handled by the provider, not stored in your form.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2403,
    header: 'What can I collect payments for?',
    body: 'Anything you can put on a form — event and registration fees, product orders, donations, membership renewals, and paid service requests.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2404,
    header: 'Is online payment available on the free plan?',
    body: "Yes, you can start collecting payments for free. You only pay your payment gateway's standard processing fees.",
    body_markdown: null,
    list: [],
  },
]
const c8_buttons = [
  {
    id: 1584,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1585,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Online Forms With Payment Integration | Free Payment Forms',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/online-payments/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:47.584Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Collect payments right inside your forms with Stripe, PayPal, and Authorize.net. Secure, PCI-compliant checkout with no extra fees from Formester — accept fees, orders, and donations.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Online Forms With Payment Integration | Free Payment Forms',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/online-payments/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Online Forms With Payment Integration | Free Payment Forms',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Collect payments right inside your forms with Stripe, PayPal, and Authorize.net. Secure, PCI-compliant checkout with no extra fees from Formester — accept fees, orders, and donations.',
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
      content: 'https://formester.com/features/online-payments/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Online Forms With Payment Integration | Free Payment Forms',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Collect payments right inside your forms with Stripe, PayPal, and Authorize.net. Secure, PCI-compliant checkout with no extra fees from Formester — accept fees, orders, and donations.',
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
        name: 'How do I accept payments on a form?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Add a payment element to any form, connect your gateway (Stripe, PayPal, or Authorize.net), set the amount, then publish. Respondents pay as they submit.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Which payment gateways are supported?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Formester supports Stripe, PayPal, and Authorize.net, so you can use the processor you already have.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Does Formester charge extra transaction fees?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "No. Formester doesn't add any transaction fees — you only pay your payment provider's standard processing rate.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Are payments secure and PCI compliant?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Yes. Payments are processed through your gateway over a secure, PCI-compliant checkout, so card details are handled by the provider, not stored in your form.',
          '@type': 'Answer',
        },
      },
      {
        name: 'What can I collect payments for?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Anything you can put on a form — event and registration fees, product orders, donations, membership renewals, and paid service requests.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is online payment available on the free plan?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes, you can start collecting payments for free. You only pay your payment gateway's standard processing fees.",
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
