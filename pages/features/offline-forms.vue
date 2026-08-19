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

    <StatsBanner
      variant="band"
      eyebrow="Why it matters"
      heading="When the signal drops, your data collection doesn't"
      :stats="c2_stats"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="How it works"
      description="Offline forms run entirely on the device, so a missing connection never stops a respondent — or costs you an entry."
      columns="3"
      :title="c3_title"
      :cards="c3_cards"
      class="page-component-item"
    />

    <AlternatingRows
      eyebrow="The offline-to-online flow"
      :title="c4_title"
      :rows="c4_rows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where teams use it"
      description="Anywhere the connection is unreliable, offline forms keep your team collecting clean, complete data."
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
      heading="Keep collecting data, connection or not"
      description="Build a form, switch on offline mode, and let your team capture responses anywhere — every entry syncs the moment they're back online."
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

const c0_description =
  "Send respondents into the field and keep collecting data with zero signal. Formester saves every entry on the device and syncs it automatically the moment they're back online — so nothing is ever lost."
const c0_mockupHtml =
  "\u003Cstyle>.of-badge{display:inline-flex;align-items:center;gap:5px;font-size:9.5px;font-weight:700;border-radius:999px;padding:4px 9px;line-height:1;white-space:nowrap;}.of-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;}.of-state-off{animation:ofOff 7s ease-in-out infinite;}.of-state-sync{animation:ofSync 7s ease-in-out infinite;}.of-queue-row{display:flex;align-items:center;gap:9px;padding:9px 11px;border:1px solid #eaecf0;border-radius:9px;background:#fff;}.of-qmeta{display:flex;flex-direction:column;gap:2px;min-width:0;}.of-qname{font-size:11.5px;font-weight:600;color:#101828;line-height:1.1;}.of-qsub{font-size:9.5px;color:#697586;line-height:1.1;}.of-qtag{margin-left:auto;font-size:9px;font-weight:700;border-radius:999px;padding:3px 8px;line-height:1;white-space:nowrap;}.of-q-pend{color:#b54708;background:#fffaeb;animation:ofPend 7s ease-in-out infinite;}.of-q-done{color:#027a48;background:#ecfdf3;opacity:0;animation:ofDone 7s ease-in-out infinite;}.of-bar{position:absolute;inset:0;border-radius:inherit;}@keyframes ofOff{0%,40%{opacity:1;}52%,100%{opacity:0;position:absolute;}}@keyframes ofSync{0%,40%{opacity:0;}52%,100%{opacity:1;}}@keyframes ofPend{0%,46%{opacity:1;}58%,100%{opacity:0;}}@keyframes ofDone{0%,46%{opacity:0;}58%,100%{opacity:1;}}@media (prefers-reduced-motion:reduce){.of-state-off,.of-q-pend{animation:none!important;opacity:1!important;}.of-state-sync,.of-q-done{animation:none!important;opacity:0!important;}}\u003C/style><div style='max-width:430px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;line-height:1.1;'>Site Inspection · field app</span></div><div style='padding:16px;display:flex;flex-direction:column;gap:11px;text-align:left;'><div style='display:grid;'><span class='of-badge of-state-off' style='grid-area:1/1;color:#b54708;background:#fffaeb;'><span class='of-dot' style='background:#f79009;'></span>Offline — saving on device</span><span class='of-badge of-state-sync' style='grid-area:1/1;color:#027a48;background:#ecfdf3;'><span class='of-dot' style='background:#12b76a;'></span>Back online — 3 responses synced</span></div><div class='of-queue-row'><span style='width:26px;height:26px;border-radius:50%;background:#6434d0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;line-height:1;flex-shrink:0;'>S1</span><div class='of-qmeta'><span class='of-qname'>Site A — Bridge deck</span><span class='of-qsub'>Saved 09:14</span></div><span style='margin-left:auto;display:grid;'><span class='of-qtag of-q-pend' style='grid-area:1/1;'>Queued</span><span class='of-qtag of-q-done' style='grid-area:1/1;'>Synced</span></span></div><div class='of-queue-row'><span style='width:26px;height:26px;border-radius:50%;background:#7c4ce0;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;line-height:1;flex-shrink:0;'>S2</span><div class='of-qmeta'><span class='of-qname'>Site B — Drainage</span><span class='of-qsub'>Saved 09:31</span></div><span style='margin-left:auto;display:grid;'><span class='of-qtag of-q-pend' style='grid-area:1/1;'>Queued</span><span class='of-qtag of-q-done' style='grid-area:1/1;'>Synced</span></span></div><div class='of-queue-row'><span style='width:26px;height:26px;border-radius:50%;background:#9a73ea;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;line-height:1;flex-shrink:0;'>S3</span><div class='of-qmeta'><span class='of-qname'>Site C — Signage</span><span class='of-qsub'>Saved 10:02</span></div><span style='margin-left:auto;display:grid;'><span class='of-qtag of-q-pend' style='grid-area:1/1;'>Queued</span><span class='of-qtag of-q-done' style='grid-area:1/1;'>Synced</span></span></div></div></div>"
const c0_title = [
  {
    id: 4815,
    text: 'Collect responses ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4814,
    text: 'even with no internet',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c0_buttons = [
  {
    id: 1583,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1582,
    link: 'https://youtu.be/R1TDRabLWHM',
    text: 'Watch demo',
    type: 'Secondary',
    showArrow: false,
  },
]
const c0_badge = {
  id: 92,
  text: 'Offline Forms',
  tag: null,
  link: null,
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_stats = [
  {
    id: 95,
    value: 'Zero',
    label: 'internet needed to fill the form',
  },
  {
    id: 96,
    value: 'Auto',
    label: 'sync the moment you reconnect',
  },
  {
    id: 97,
    value: 'Nothing',
    label: 'lost — every entry stays on the device',
  },
]
const c3_title = [
  {
    id: 4810,
    text: 'Built to keep working ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4806,
    text: 'wherever you are',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c3_cards = [
  {
    id: 630,
    tag: 'Works with no signal',
    tagColor: 'violet',
    title: 'Fill forms fully offline',
    body: 'Open the form once and it keeps working with no Wi-Fi or mobile data. Respondents answer normally — even in basements, remote sites, and dead zones.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='width:24px;height:24px;border-radius:6px;background:#fffaeb;color:#b54708;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M1 1l22 22'/><path d='M16.7 13.3a5 5 0 0 0-7.4 0'/><path d='M5 9.5a11 11 0 0 1 4-2.4'/><path d='M19.6 9.5A11 11 0 0 0 13 6.4'/><path d='M12 20h.01'/></svg></span><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>No connection — still collecting</span></div>",
    icon: null,
  },
  {
    id: 631,
    tag: 'Auto-sync',
    tagColor: 'green',
    title: 'Syncs the second you reconnect',
    body: 'The moment the device finds a connection, every queued response uploads automatically. No manual export, no remembering to press a button.',
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='width:24px;height:24px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2'><path d='M21 12a9 9 0 0 0-9-9 9 9 0 0 0-6.7 3'/><path d='M3 12a9 9 0 0 0 9 9 9 9 0 0 0 6.7-3'/><path d='M21 3v5h-5'/><path d='M3 21v-5h5'/></svg></span><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>3 responses synced</span></div>",
    icon: null,
  },
  {
    id: 632,
    tag: 'Nothing lost',
    tagColor: 'blue',
    title: 'Every entry stays safe',
    body: 'Responses are stored securely on the device until they sync. Close the app or run out of battery — your data is still there, waiting to upload.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:14px;height:14px;border-radius:4px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='9' height='9' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span><span style='font-weight:600;'>Saved on device</span><span style='margin-left:auto;color:#697586;'>3 entries</span></div><div style='display:flex;align-items:center;gap:8px;font-size:9.5px;line-height:1;'><span style='font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:3px 8px;'>Encrypted &amp; safe</span></div></div>",
    icon: null,
  },
]
const c4_title = [
  {
    id: 4807,
    text: 'From dead zone to dashboard ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4808,
    text: 'without a single lost entry',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c4_rows = [
  {
    id: 95,
    kicker: null,
    title: 'Respondents fill the form with no internet',
    body: 'Install the form as an app or open it once with a connection, then take it anywhere. People answer exactly as they would online — the form behaves the same with zero signal.',
    mediaHtml:
      "<div style='max-width:300px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 16px 48px rgba(15,14,26,.10);overflow:hidden;'><div style='display:flex;align-items:center;gap:7px;padding:10px 13px;background:#fffaeb;border-bottom:1px solid #fde7b0;'><span style='width:6px;height:6px;border-radius:50%;background:#f79009;flex-shrink:0;'></span><span style='font-size:10px;font-weight:700;color:#b54708;line-height:1;'>Offline — no connection</span></div><div style='padding:14px;display:flex;flex-direction:column;gap:10px;text-align:left;'><div><div style='font-size:10px;font-weight:600;color:#475467;margin-bottom:4px;line-height:1.1;'>Inspector name</div><div style='border:1px solid #eaecf0;border-radius:8px;padding:8px 10px;font-size:11.5px;line-height:1.1;color:#101828;'>Priya Sharma</div></div><div><div style='font-size:10px;font-weight:600;color:#475467;margin-bottom:4px;line-height:1.1;'>Condition rating</div><div style='border:1px solid #6434d0;background:#fbfaff;border-radius:8px;padding:8px 10px;font-size:11.5px;line-height:1.1;color:#101828;'>Good</div></div></div></div>",
  },
  {
    id: 96,
    kicker: null,
    title: 'Each answer is saved locally and queued',
    body: 'As respondents submit, entries are stored securely on the device and lined up to upload. The queue keeps growing through the day — no network required, nothing dropped.',
    mediaHtml:
      "<div style='max-width:300px;margin:0 auto;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:10px;padding:9px 11px;background:#fff;'><span style='width:22px;height:22px;border-radius:6px;background:#fffaeb;color:#b54708;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 6v6l4 2'/><circle cx='12' cy='12' r='9'/></svg></span><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.1;'>Submission saved</span><span style='margin-left:auto;font-size:9px;font-weight:700;color:#b54708;background:#fffaeb;border-radius:999px;padding:3px 8px;line-height:1;'>Queued</span></div><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:10px;padding:9px 11px;background:#fff;'><span style='width:22px;height:22px;border-radius:6px;background:#fffaeb;color:#b54708;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 6v6l4 2'/><circle cx='12' cy='12' r='9'/></svg></span><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.1;'>Submission saved</span><span style='margin-left:auto;font-size:9px;font-weight:700;color:#b54708;background:#fffaeb;border-radius:999px;padding:3px 8px;line-height:1;'>Queued</span></div><div style='font-size:10px;color:#697586;line-height:1.3;padding-left:2px;'>2 entries waiting to sync</div></div>",
  },
  {
    id: 97,
    kicker: null,
    title: "Everything uploads automatically once you're online",
    body: 'Back in range, the queue empties on its own and every response lands in your Formester dashboard — ready to review, export, or route into your workflow.',
    mediaHtml:
      "<div style='max-width:300px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 16px 48px rgba(15,14,26,.10);overflow:hidden;'><div style='display:flex;align-items:center;gap:7px;padding:10px 13px;background:#ecfdf3;border-bottom:1px solid #c7e9d3;'><span style='width:6px;height:6px;border-radius:50%;background:#12b76a;flex-shrink:0;'></span><span style='font-size:10px;font-weight:700;color:#027a48;line-height:1;'>Back online — synced</span></div><div style='padding:14px;display:flex;flex-direction:column;gap:9px;text-align:left;'><div style='display:flex;align-items:center;gap:9px;'><span style='width:22px;height:22px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg></span><span style='font-size:11.5px;font-weight:600;color:#101828;line-height:1.1;'>3 responses synced</span></div><div style='font-size:10px;color:#697586;line-height:1.3;'>All field entries are now in your dashboard.</div></div></div>",
  },
]
const c5_title = [
  {
    id: 4809,
    text: 'Made for work that happens ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
  {
    id: 4812,
    text: 'off the grid',
    highlight: true,
    color: '#475467',
    bold: false,
  },
]
const c5_cards = [
  {
    id: 627,
    tag: 'Field surveys',
    tagColor: 'violet',
    title: 'Surveys in the field',
    body: "Run door-to-door, agricultural, or research surveys across remote areas. Collect every response on the device and sync the whole batch when you're back in range.",
    mockHtml:
      "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:24px;height:24px;border-radius:6px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M9 11l3 3 8-8'/><path d='M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9'/></svg></span><div style='font-size:11px;line-height:1.3;color:#475467;'>48 surveys collected <span style='font-weight:700;color:#101828;'>offline</span></div></div>",
    icon: null,
  },
  {
    id: 628,
    tag: 'Events',
    tagColor: 'green',
    title: 'Events with patchy Wi-Fi',
    body: 'Capture registrations, lead scans, and feedback at conferences and venues where the network buckles under the crowd — no dropped sign-ups.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='border:1px solid #6434d0;background:#fbfaff;border-radius:8px;padding:7px 10px;font-size:11px;line-height:1.1;color:#101828;'>Booth lead — captured</div><div style='display:flex;align-items:center;gap:8px;font-size:9.5px;line-height:1;'><span style='font-weight:700;color:#b54708;background:#fffaeb;border-radius:999px;padding:3px 8px;'>Queued · syncs later</span></div></div>",
    icon: null,
  },
  {
    id: 629,
    tag: 'Inspections',
    tagColor: 'blue',
    title: 'Remote inspections',
    body: 'Document site visits, safety checks, and asset audits at locations with no coverage. Photos and answers stay safe on the device until they upload.',
    mockHtml:
      "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='font-weight:600;'>Checklist</span><span style='margin-left:auto;color:#697586;'>12 / 12 done</span></div><div style='display:flex;align-items:center;gap:8px;font-size:9.5px;line-height:1;'><span style='font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;'>Saved on device</span></div></div>",
    icon: null,
  },
]
const c6_heading = [
  {
    id: 4813,
    text: 'Teams trust Formester to capture every response',
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
    id: 4811,
    text: 'Offline forms FAQs',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c7_faqList = [
  {
    id: 2394,
    header: 'How do offline forms work in Formester?',
    body: "When there's no internet, the form keeps working and saves each response on the device. The moment you're back online, every saved entry syncs automatically to your Formester account — no manual upload needed.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2395,
    header: 'Can I use offline forms on mobile phones and tablets?',
    body: "Yes. Formester's offline form builder works on Android, iOS, tablets, and laptops. You can even install the form as an app, so it opens and collects data anywhere — with or without a connection.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2396,
    header: 'Will my data be saved if the device shuts down?',
    body: "Yes. Every submission is stored locally on the device and stays safe until it's synced online, so a dead battery or a closed app never costs you an entry.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2397,
    header: 'Do offline forms sync automatically when internet is available?',
    body: "Yes. As soon as the device reconnects, all queued responses upload on their own. You don't have to remember to press anything — the entries simply appear in your dashboard.",
    body_markdown: null,
    list: [],
  },
  {
    id: 2398,
    header: 'Which industries benefit most from offline forms?',
    body: 'Any team that collects data away from a reliable signal: field service and construction, healthcare and home visits, education, events, and retail. Offline forms keep data collection going in remote sites and low-network areas.',
    body_markdown: null,
    list: [],
  },
  {
    id: 2399,
    header: 'Is coding required to create offline forms?',
    body: "No. Build your form with Formester's drag-and-drop builder, switch on offline mode in the form's advanced settings, and share it — no technical setup or code required.",
    body_markdown: null,
    list: [],
  },
]
const c8_buttons = [
  {
    id: 1580,
    link: 'https://app.formester.com/users/sign_up',
    text: "Get Started — It's Free",
    type: 'Primary',
    showArrow: true,
  },
  {
    id: 1581,
    link: '/pricing',
    text: 'See pricing',
    type: 'White',
    showArrow: false,
  },
]

useHead({
  title: 'Offline Forms | Collect Submissions Without Internet',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/features/offline-forms/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2026-06-15T10:45:34.579Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Collect form responses with no internet connection. Formester offline forms save entries on the device and sync automatically the moment you're back online — perfect for field surveys, events, and remote inspections.",
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Offline Forms | Collect Submissions Without Internet',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/features/offline-forms/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Offline Forms | Collect Submissions Without Internet',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Collect form responses with no internet connection. Formester offline forms save entries on the device and sync automatically the moment you're back online — perfect for field surveys, events, and remote inspections.",
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
      content: 'https://formester.com/features/offline-forms/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Offline Forms | Collect Submissions Without Internet',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        "Collect form responses with no internet connection. Formester offline forms save entries on the device and sync automatically the moment you're back online — perfect for field surveys, events, and remote inspections.",
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
      content: ['send a copy of responses to submitters'],
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
        name: 'How do offline forms work in Formester?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "When there's no internet, the form keeps working and saves each response on the device. The moment you're back online, every saved entry syncs automatically to your Formester account — no manual upload needed.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Can I use offline forms on mobile phones and tablets?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. Formester's offline form builder works on Android, iOS, tablets, and laptops. You can even install the form as an app, so it opens and collects data anywhere — with or without a connection.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Will my data be saved if the device shuts down?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. Every submission is stored locally on the device and stays safe until it's synced online, so a dead battery or a closed app never costs you an entry.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Do offline forms sync automatically when internet is available?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "Yes. As soon as the device reconnects, all queued responses upload on their own. You don't have to remember to press anything — the entries simply appear in your dashboard.",
          '@type': 'Answer',
        },
      },
      {
        name: 'Which industries benefit most from offline forms?',
        '@type': 'Question',
        acceptedAnswer: {
          text: 'Any team that collects data away from a reliable signal: field service and construction, healthcare and home visits, education, events, and retail. Offline forms keep data collection going in remote sites and low-network areas.',
          '@type': 'Answer',
        },
      },
      {
        name: 'Is coding required to create offline forms?',
        '@type': 'Question',
        acceptedAnswer: {
          text: "No. Build your form with Formester's drag-and-drop builder, switch on offline mode in the form's advanced settings, and share it — no technical setup or code required.",
          '@type': 'Answer',
        },
      },
    ],
  },
])
</script>
