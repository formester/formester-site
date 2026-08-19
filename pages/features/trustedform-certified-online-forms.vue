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
      label="Trusted by 56k+ teams for verified lead collection"
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
      heading="Certify every submission in three steps"
      description="Turn on TrustedForm from your form's integrations — no code — and a certificate is generated and stored with every lead that comes in."
      background="#f9fafb"
      :steps="c3_steps"
      :buttons="c3_buttons"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where it's essential"
      description="Anywhere a lead has to be provably consented and provably real, a TrustedForm certificate is the difference between a record and a risk."
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

    <FaqSection
      centered
      :title="c6_title"
      :faqList="c6_faqList"
      class="page-component-item"
    />

    <CtaDark
      badge="Free to start"
      heading="Start certifying your leads with TrustedForm"
      description="Turn on TrustedForm in your form's integrations and get a timestamped certificate of consent with every submission — verified, compliant leads from day one."
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

const c0_description = "Connect ActiveProspect TrustedForm to any Formester form and every submission is issued a timestamped TrustedForm certificate — independent, verifiable proof that the lead shared their details willingly. The record you need for TCPA and CASL compliance and for confirming a lead is real."
const c0_mockupHtml = "\u003Cstyle>.tf-cert{position:relative;}.tf-stamp{opacity:0;transform:scale(.7) rotate(-6deg);animation:tfStamp 5.5s infinite;transform-origin:center;}.tf-row{opacity:0;animation:tfRow 5.5s infinite;}.tf-r2{animation-delay:.15s;}.tf-r3{animation-delay:.3s;}@keyframes tfStamp{0%,6%{opacity:0;transform:scale(.7) rotate(-6deg);}16%,100%{opacity:1;transform:scale(1) rotate(0deg);}}@keyframes tfRow{0%,18%{opacity:0;transform:translateY(4px);}28%,100%{opacity:1;transform:translateY(0);}}@media (prefers-reduced-motion:reduce){.tf-stamp,.tf-row{animation:none!important;opacity:1!important;transform:none!important;}}\u003C/style><div style='max-width:440px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;line-height:1;'>app.formester.com · Submission</span></div><div style='padding:16px;text-align:left;display:flex;flex-direction:column;gap:11px;'><div style='display:flex;align-items:center;gap:10px;'><span style='width:30px;height:30px;border-radius:50%;background:#6434d0;color:#fff;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;'>RM</span><div style='display:flex;flex-direction:column;gap:2px;min-width:0;'><span style='font-size:12.5px;font-weight:600;color:#101828;line-height:1.1;'>Rosa Mendez</span><span style='font-size:10.5px;color:#697586;line-height:1.1;'>rosa@brightleads.io</span></div><span class='tf-stamp' style='margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border:1px solid #abefc6;border-radius:999px;padding:4px 9px;line-height:1;white-space:nowrap;'><svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/><path d='M9 12l2 2 4-4'/></svg>TrustedForm certificate</span></div><div style='border:1px solid #eee9fb;background:#fbfaff;border-radius:10px;padding:12px 13px;display:flex;flex-direction:column;gap:9px;'><div class='tf-row' style='display:flex;align-items:center;justify-content:space-between;gap:8px;'><span style='font-size:10px;color:#697586;line-height:1.2;'>Certificate URL</span><span style='font-size:10px;font-weight:600;color:#6434d0;line-height:1.2;font-family:ui-monospace,Menlo,monospace;'>cert.trustedform.com/3f9a…e21</span></div><div class='tf-row tf-r2' style='display:flex;align-items:center;justify-content:space-between;gap:8px;'><span style='font-size:10px;color:#697586;line-height:1.2;'>Captured</span><span style='font-size:10px;font-weight:600;color:#101828;line-height:1.2;'>IP · browser · 12 Jun 2026, 2:14 PM</span></div><div class='tf-row tf-r3' style='display:flex;align-items:center;gap:6px;border-top:1px solid #eee9fb;padding-top:9px;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#027a48' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg><span style='font-size:10.5px;font-weight:600;color:#027a48;line-height:1.2;'>Consent captured · timestamped</span></div></div></div></div>"
const c0_title = [
  {
    "id": 4903,
    "text": "Proof of consent ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4904,
    "text": "with every lead",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c0_buttons = [
  {
    "id": 1623,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1622,
    "link": "https://youtu.be/DX_un96fkro",
    "text": "Watch demo",
    "type": "Secondary",
    "showArrow": false
  }
]
const c0_badge = {
  "id": 102,
  "text": "TrustedForm Certified",
  "tag": null,
  "link": null
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_description = "A TrustedForm certificate turns every submission into independent, verifiable evidence — so you can prove consent, weed out fake leads, and answer to regulators with a record instead of a guess."
const c2_title = [
  {
    "id": 4901,
    "text": "Certified leads you can ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4900,
    "text": "actually stand behind",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c2_cards = [
  {
    "id": 694,
    "tag": "Proof of consent",
    "tagColor": "violet",
    "title": "Documented, not assumed",
    "body": "Each lead arrives with a TrustedForm certificate from ActiveProspect — independent proof that the respondent saw your form and chose to submit. It's evidence you can point to when a contact questions how you got their details.",
    "mockHtml": "<div style='display:flex;align-items:center;gap:10px;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;background:#fff;'><span style='width:24px;height:24px;border-radius:7px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.6'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/><path d='M9 12l2 2 4-4'/></svg></span><span style='font-size:11.5px;font-weight:600;color:#101828;line-height:1.2;'>Consent on record</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;line-height:1;'>Certified</span></div>",
    "icon": null
  },
  {
    "id": 696,
    "tag": "Lead authenticity",
    "tagColor": "green",
    "title": "Verify the lead is real",
    "body": "Every certificate captures the submission's details — IP address, browser, and an exact timestamp. Confirm a lead is genuine before you spend time or budget chasing it, and spot the entries that don't add up.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;'><span style='font-size:10.5px;color:#697586;line-height:1.2;'>IP address</span><span style='margin-left:auto;font-size:10.5px;font-weight:600;color:#101828;line-height:1.2;font-family:ui-monospace,Menlo,monospace;'>203.0.113.42</span></div><div style='display:flex;align-items:center;gap:8px;'><span style='font-size:10.5px;color:#697586;line-height:1.2;'>Browser</span><span style='margin-left:auto;font-size:10.5px;font-weight:600;color:#101828;line-height:1.2;'>Chrome · macOS</span></div><div style='display:flex;align-items:center;gap:8px;'><span style='font-size:10.5px;color:#697586;line-height:1.2;'>Timestamp</span><span style='margin-left:auto;font-size:10.5px;font-weight:600;color:#101828;line-height:1.2;'>12 Jun 2026, 2:14 PM</span></div></div>",
    "icon": null
  },
  {
    "id": 695,
    "tag": "Compliance-ready",
    "tagColor": "blue",
    "title": "Records for TCPA & CASL",
    "body": "When regulations require you to show that contact was opted in, the certificate is the documentation. Keep a defensible record of consent for TCPA and CASL without building anything yourself.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 10px;background:#fff;'><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.2;'>TCPA</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;line-height:1;'>Documented</span></div><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:8px 10px;background:#fff;'><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.2;'>CASL</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;line-height:1;'>Documented</span></div></div>",
    "icon": null
  }
]
const c3_steps = [
  {
    "id": 173,
    "title": "Enable TrustedForm on your form",
    "description": "Open your form's Integrations, find TrustedForm in the list, and toggle it on. Formester adds the ActiveProspect script for you — no code or developer needed.",
    "rawHtml": "<div style='display:flex;align-items:center;gap:10px;border:1px solid #6434d0;border-radius:9px;padding:9px 12px;background:#fff;box-shadow:0 4px 12px rgba(100,52,208,.16);'><span style='width:24px;height:24px;border-radius:7px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/></svg></span><span style='font-size:12.5px;font-weight:600;color:#101828;line-height:1.2;'>TrustedForm</span><span style='margin-left:auto;width:34px;height:19px;border-radius:999px;background:#6434d0;position:relative;flex-shrink:0;'><span style='position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:50%;background:#fff;'></span></span></div>",
    "image": null
  },
  {
    "id": 171,
    "title": "A respondent submits the form",
    "description": "People fill in and submit your form exactly as before. TrustedForm runs quietly in the background — there's no extra step for the respondent and no slowdown to your form.",
    "rawHtml": "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:26px;height:26px;border-radius:50%;background:#6434d0;color:#fff;font-size:10px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;'>RM</span><div style='display:flex;flex-direction:column;gap:2px;min-width:0;'><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>Rosa Mendez</span><span style='font-size:10.5px;color:#697586;line-height:1.1;'>Submitted · contact form</span></div><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:3px 8px;line-height:1;'>Received</span></div>",
    "image": null
  },
  {
    "id": 172,
    "title": "A certificate is generated & stored",
    "description": "TrustedForm issues a timestamped certificate capturing the lead's IP, browser, and submission time, and stores its secure cert URL with the response. Open or share it anytime to verify the lead and claim it for compliance.",
    "rawHtml": "<div style='background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 12px;display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:6px;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#027a48' stroke-width='2.6'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/><path d='M9 12l2 2 4-4'/></svg><span style='font-size:11.5px;font-weight:700;color:#027a48;line-height:1.2;'>Certificate stored</span></div><span style='font-size:10px;font-weight:600;color:#6434d0;line-height:1.3;font-family:ui-monospace,Menlo,monospace;word-break:break-all;'>cert.trustedform.com/3f9a…e21</span></div>",
    "image": null
  }
]
const c3_buttons = []
const c4_title = [
  {
    "id": 4898,
    "text": "Built for teams that ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4899,
    "text": "live and die by lead quality",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c4_cards = [
  {
    "id": 699,
    "tag": "Lead-gen agencies",
    "tagColor": "violet",
    "title": "Sell leads you can vouch for",
    "body": "Attach a certificate to every lead you generate and hand buyers verifiable proof of consent. It raises the value of your pipeline and protects you in disputes over how a contact opted in.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 698,
    "tag": "Insurance & finance",
    "tagColor": "blue",
    "title": "Intake that holds up",
    "body": "Quote requests and applications in regulated industries need a clean consent trail. Capture certified proof on every submission so outreach to those contacts is defensible under TCPA and CASL.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 697,
    "tag": "TCPA-sensitive intake",
    "tagColor": "green",
    "title": "Any form you call or text from",
    "body": "If you follow up by phone or SMS, you need to show consent. Certify the forms behind your call and text campaigns and keep a timestamped record for every lead you contact.",
    "mockHtml": null,
    "icon": null
  }
]
const c5_heading = [
  {
    "id": 4897,
    "text": "Teams trust Formester with their leads",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c5_testimonials = [
  {
    "id": 1,
    "name": "Dr. Michele Ross",
    "position": "Founder",
    "organization": "Infused Health",
    "comment": "I'm migrating my forms from Paperform, where I've been a user for over 4 years. Loving the software so far! I've already replaced Paperform form embeds & popups on my sites & my husband's websites with Formester forms",
    "createdAt": "2024-06-18T03:47:14.605Z",
    "updatedAt": "2025-01-22T02:57:30.159Z",
    "publishedAt": "2024-06-18T03:47:18.889Z",
    "companyLogo": {
      "id": 227,
      "imageAlt": "Dr. Michele Ross",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1685,
        "name": "dr._michelelogo.webp",
        "alternativeText": null,
        "caption": null,
        "width": 300,
        "height": 59,
        "formats": {
          "thumbnail": {
            "ext": ".webp",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_dr_michelelogo_2269ae2211.webp",
            "hash": "thumbnail_dr_michelelogo_2269ae2211",
            "mime": "image/webp",
            "name": "thumbnail_dr._michelelogo.webp",
            "path": null,
            "size": 5.58,
            "width": 245,
            "height": 48
          }
        },
        "hash": "dr_michelelogo_2269ae2211",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 5.87,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/dr_michelelogo_2269ae2211.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.944Z",
        "updatedAt": "2024-08-01T14:38:23.944Z"
      }
    }
  },
  {
    "id": 2,
    "name": "Jilson",
    "position": "Organiser",
    "organization": "Vue Conference",
    "comment": "Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.",
    "createdAt": "2024-06-18T03:48:46.610Z",
    "updatedAt": "2025-01-22T02:57:08.760Z",
    "publishedAt": "2024-06-18T03:48:50.595Z",
    "companyLogo": {
      "id": 228,
      "imageAlt": "photo-of-vue-conference",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1680,
        "name": "vueconf.webp",
        "alternativeText": "photo-of-vue-conference",
        "caption": "photo-of-vue-conference",
        "width": 80,
        "height": 80,
        "formats": null,
        "hash": "vueconf_1bc3dc0827",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.07,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/vueconf_1bc3dc0827.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.731Z",
        "updatedAt": "2024-12-01T07:47:11.024Z"
      }
    }
  },
  {
    "id": 4,
    "name": "Costanza Casullo",
    "position": "Volunteer",
    "organization": "Wato Coding Hub",
    "comment": "Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths. In addition, the founder is available to answer questions and doubts, which does not happen every day.",
    "createdAt": "2024-06-18T03:51:15.232Z",
    "updatedAt": "2025-01-22T02:58:03.674Z",
    "publishedAt": "2024-06-18T03:51:21.477Z",
    "companyLogo": {
      "id": 225,
      "imageAlt": "wato-coding-hub-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1681,
        "name": "wato-coding-hub.webp",
        "alternativeText": "wato-coding-hub-logo",
        "caption": "wato-coding-hub-logo",
        "width": 80,
        "height": 81,
        "formats": null,
        "hash": "wato_coding_hub_e054f0ea9d",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.88,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/wato_coding_hub_e054f0ea9d.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.738Z",
        "updatedAt": "2024-12-01T07:49:13.371Z"
      }
    }
  },
  {
    "id": 5,
    "name": "Deanna Bugalski",
    "position": "Founder/CEO",
    "organization": "Suggesterfy",
    "comment": "I was searching for a long time for a product I could use to send newsletters and surveys to my database. I tried so many different types of software and I found many of them difficult to use and slow to learn how to operate. But Formester was super easy to set up, and the usability is seamless! I highly recommend!",
    "createdAt": "2024-06-18T03:52:39.354Z",
    "updatedAt": "2025-01-22T02:57:47.756Z",
    "publishedAt": "2024-06-18T03:52:43.800Z",
    "companyLogo": {
      "id": 226,
      "imageAlt": "suggesterfy-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1683,
        "name": "suggesterfy_logo.webp",
        "alternativeText": "suggesterfy-logo",
        "caption": "suggesterfy-logo",
        "width": 100,
        "height": 50,
        "formats": null,
        "hash": "suggesterfy_logo_d1d7f996b9",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.91,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/suggesterfy_logo_d1d7f996b9.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.921Z",
        "updatedAt": "2024-12-01T07:49:52.459Z"
      }
    }
  },
  {
    "id": 6,
    "name": "Thibaud Martinez",
    "position": "Organiser",
    "organization": "Tedx",
    "comment": "I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do.",
    "createdAt": "2024-06-18T03:53:38.957Z",
    "updatedAt": "2025-01-22T02:56:48.567Z",
    "publishedAt": "2024-06-18T03:53:40.693Z",
    "companyLogo": {
      "id": 229,
      "imageAlt": "tedx-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1684,
        "name": "tedx.webp",
        "alternativeText": "tedx-logo",
        "caption": "tedx-logo",
        "width": 109,
        "height": 38,
        "formats": null,
        "hash": "tedx_2fce0eee2e",
        "ext": ".webp",
        "mime": "image/webp",
        "size": 1.09,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/tedx_2fce0eee2e.webp",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-08-01T14:38:23.941Z",
        "updatedAt": "2024-12-01T07:50:31.505Z"
      }
    }
  },
  {
    "id": 34,
    "name": "Bency",
    "position": "Product Manager",
    "organization": "Northgate Digital Solutions",
    "comment": "Formester's AI form generator transformed how quickly we build forms. The drag-and-drop builder paired with AI-generated templates means I can spin up a survey or poll in minutes, not hours. Conditional logic, file uploads, and seamless integrations make it incredibly versatile and the customization options let every form match our branding perfectly. Their support team is exceptional too. It's the only form and survey tool we recommend",
    "createdAt": "2025-06-29T23:23:10.541Z",
    "updatedAt": "2026-05-03T09:30:00.533Z",
    "publishedAt": "2026-05-03T09:30:00.530Z",
    "companyLogo": {
      "id": 3652,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 35,
    "name": "Roger",
    "position": "Marketing Specialist",
    "organization": "BrightPath Technologies",
    "comment": "I use Formester for my form-building needs and I’m thoroughly impressed. The platform is rich with features… What really sets them apart is their exceptional customer service (responses typically within 10 minutes). The pricing is also very reasonable… Highly recommended!\n",
    "createdAt": "2025-06-29T23:29:19.225Z",
    "updatedAt": "2025-10-31T04:00:58.697Z",
    "publishedAt": "2025-06-29T23:29:21.134Z",
    "companyLogo": {
      "id": 3649,
      "imageAlt": "brightpath-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4094,
        "name": "brightpath-logo.png",
        "alternativeText": "brightpath-logo",
        "caption": "brightpath-logo",
        "width": 200,
        "height": 49,
        "formats": null,
        "hash": "brightpath_logo_6ef0922a60",
        "ext": ".png",
        "mime": "image/png",
        "size": 2.5,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/brightpath_logo_6ef0922a60.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-10-31T04:00:11.712Z",
        "updatedAt": "2025-10-31T04:00:11.712Z"
      }
    }
  },
  {
    "id": 36,
    "name": "Ye Qi Lai",
    "position": "UX Designer",
    "organization": "Eastview Consulting",
    "comment": "Formester is one of the best underrated survey tools out there… It’s extremely customizable… Their support is awesome… I absolutely recommend this to anyone looking for an alternative to the usual form creators.",
    "createdAt": "2025-06-29T23:30:04.374Z",
    "updatedAt": "2025-10-31T04:00:30.746Z",
    "publishedAt": "2025-06-29T23:30:06.260Z",
    "companyLogo": {
      "id": 3648,
      "imageAlt": "eastview-logo-header",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4097,
        "name": "eastview-logo-header-300x120 1.png",
        "alternativeText": "eastview-logo-header",
        "caption": "eastview-logo-header",
        "width": 200,
        "height": 80,
        "formats": null,
        "hash": "eastview_logo_header_300x120_1_d9c231e93b",
        "ext": ".png",
        "mime": "image/png",
        "size": 3.18,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/eastview_logo_header_300x120_1_d9c231e93b.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-10-31T04:00:11.854Z",
        "updatedAt": "2025-10-31T04:00:11.854Z"
      }
    }
  }
]
const c6_title = [
  {
    "id": 4902,
    "text": "TrustedForm certification FAQs",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c6_faqList = [
  {
    "id": 2456,
    "header": "What is TrustedForm certification on a form?",
    "body": "TrustedForm, by ActiveProspect, issues a certificate of consent for every submission. The certificate records details like the IP address, browser, and timestamp, providing independent proof that the lead shared their information willingly — so you can verify real leads and keep a compliance record.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2455,
    "header": "How does TrustedForm help verify leads?",
    "body": "Each submission gets a certificate with real-time data such as IP address, device, and submission time. That lets you confirm a lead is genuine and was submitted by a real person before you invest in following up.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2457,
    "header": "How does it help with TCPA and CASL compliance?",
    "body": "The certificate is documented proof that a contact provided their information voluntarily. That helps you meet the consent-documentation expectations of laws like TCPA and CASL and reduces legal risk around how leads were collected. It documents consent — it isn't legal advice.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2460,
    "header": "How do I enable TrustedForm in Formester?",
    "body": "Open your form's Integrations, find TrustedForm, and toggle it on. Formester adds the TrustedForm script automatically, and from then on every submission receives a certificate — no coding or extra setup.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2459,
    "header": "Can a TrustedForm certificate be used as proof of consent?",
    "body": "Yes. Each certificate acts as documented proof of consent and is accessible through a secure cert URL. You can open or share that URL to verify a lead and resolve disputes if a contact later questions their submission.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2458,
    "header": "Does TrustedForm slow down my form?",
    "body": "No. TrustedForm runs in the background while people fill in your form as normal — there's no extra step for the respondent and no impact on form speed. Certification happens automatically on submit.",
    "body_markdown": null,
    "list": []
  }
]
const c7_buttons = [
  {
    "id": 1621,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1620,
    "link": "/pricing",
    "text": "See pricing",
    "type": "White",
    "showArrow": false
  }
]

useHead({
  "title": "TrustedForm Certified Online Forms | Verified, Compliant Leads",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/features/trustedform-certified-online-forms/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-06-15T10:45:56.255Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Add ActiveProspect TrustedForm to any Formester form and get a timestamped certificate of consent with every submission — independent proof for TCPA and CASL compliance and verified lead authenticity."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "TrustedForm Certified Online Forms | Verified, Compliant Leads"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/features/trustedform-certified-online-forms/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "TrustedForm Certified Online Forms | Verified, Compliant Leads"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Add ActiveProspect TrustedForm to any Formester form and get a timestamped certificate of consent with every submission — independent proof for TCPA and CASL compliance and verified lead authenticity."
    },
    {
      "hid": "og:image",
      "property": "og:image",
      "content": "https://formester.com/formester-logo-meta-image.png"
    },
    {
      "hid": "og:image:alt",
      "name": "og:image:alt",
      "content": "Formester Logo"
    },
    {
      "hid": "twitter:url",
      "name": "twitter:url",
      "content": "https://formester.com/features/trustedform-certified-online-forms/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "TrustedForm Certified Online Forms | Verified, Compliant Leads"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Add ActiveProspect TrustedForm to any Formester form and get a timestamped certificate of consent with every submission — independent proof for TCPA and CASL compliance and verified lead authenticity."
    },
    {
      "hid": "twitter:image",
      "name": "twitter:image",
      "content": "https://formester.com/formester-logo-meta-image.png"
    },
    {
      "hid": "twitter:image:alt",
      "name": "twitter:image:alt",
      "content": "Formester Logo"
    },
    {
      "hid": "twitter:card",
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "hid": "apple-mobile-web-app-title",
      "name": "apple-mobile-web-app-title",
      "content": "Formester"
    },
    {
      "hid": "image",
      "name": "image",
      "property": "og:image",
      "content": "https://formester.com/formester-logo-meta-image.png"
    },
    {
      "hid": "keywords",
      "name": "keywords",
      "content": []
    }
  ]
})
useJsonld([
  {
    "@context": "https://schema.org",
    "url": "https://formester.com",
    "logo": "https://formester.com/logo.svg",
    "name": "Formester",
    "@type": "Organization"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "name": "What is TrustedForm certification on a form?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "TrustedForm, by ActiveProspect, issues a certificate of consent for every submission. The certificate records details like the IP address, browser, and timestamp, providing independent proof that the lead shared their information willingly — so you can verify real leads and keep a compliance record.",
          "@type": "Answer"
        }
      },
      {
        "name": "How does TrustedForm help verify leads?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Each submission gets a certificate with real-time data such as IP address, device, and submission time. That lets you confirm a lead is genuine and was submitted by a real person before you invest in following up.",
          "@type": "Answer"
        }
      },
      {
        "name": "How does it help with TCPA and CASL compliance?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "The certificate is documented proof that a contact provided their information voluntarily. That helps you meet the consent-documentation expectations of laws like TCPA and CASL and reduces legal risk around how leads were collected. It documents consent — it isn't legal advice.",
          "@type": "Answer"
        }
      },
      {
        "name": "How do I enable TrustedForm in Formester?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Open your form's Integrations, find TrustedForm, and toggle it on. Formester adds the TrustedForm script automatically, and from then on every submission receives a certificate — no coding or extra setup.",
          "@type": "Answer"
        }
      },
      {
        "name": "Can a TrustedForm certificate be used as proof of consent?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. Each certificate acts as documented proof of consent and is accessible through a secure cert URL. You can open or share that URL to verify a lead and resolve disputes if a contact later questions their submission.",
          "@type": "Answer"
        }
      },
      {
        "name": "Does TrustedForm slow down my form?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "No. TrustedForm runs in the background while people fill in your form as normal — there's no extra step for the respondent and no impact on form speed. Certification happens automatically on submit.",
          "@type": "Answer"
        }
      }
    ]
  }
])
</script>
