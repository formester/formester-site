<template>
  <div>
    <HeroV2
      description="Add a signature field to any form and collect a legally valid e-signature with the submission. Perfect for contracts, agreements, consent, and approvals."
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
      description="A signature on a Formester form is more than an image — each one is recorded with the details that make it valid and traceable."
      :mockHtml="c2_mockHtml"
      :title="c2_title"
      :pins="c2_pins"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Why teams use it"
      description="Collect signatures with the submission — no printing, scanning, or chasing people for a wet signature."
      columns="3"
      :title="c3_title"
      :cards="c3_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Collect e-signatures in three steps"
      description="Add the field, publish the form, and let the notifications come to you."
      background="#f9fafb"
      :steps="c4_steps"
      :buttons="c4_buttons"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Use cases"
      columns="4"
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

    <FaqSection
      centered
      :title="c7_title"
      :faqList="c7_faqList"
      class="page-component-item"
    />

    <CtaDark
      badge="Free to start"
      heading="Start collecting signatures on your forms"
      description="Add the Signature field, publish, and collect legally valid e-signatures with every submission."
      :buttons="c8_buttons"
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
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_mockupHtml = "<div style='max-width:540px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>forms.formester.com · Service agreement</span></div><div style='padding:18px;text-align:left;display:flex;flex-direction:column;gap:12px;'><div style='border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;'><div style='font-size:12px;color:#475467;margin-bottom:5px;'>Full name</div><div style='font-size:13px;color:#101828;'>Jordan Lee</div></div><div style='border:1px solid #6434d0;border-radius:10px;padding:11px 13px;box-shadow:0 0 0 4px #f0ebfa;'><div style='font-size:12px;color:#475467;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;'><span>Signature</span><span style='font-size:10px;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:2px 8px;'>Sign here</span></div><div style='background:#fbfaff;border:1px dashed #d6c9f5;border-radius:8px;height:54px;display:flex;align-items:center;justify-content:center;'>\u003Cstyle>@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');\u003C/style><span style='font-family:Sacramento,\"Segoe Script\",\"Brush Script MT\",cursive;font-size:42px;color:#15132b;line-height:1;display:inline-block;transform:rotate(-3deg);'>Jordan Lee</span></div></div><div style='background:#6434d0;color:#fff;font-size:14px;font-weight:600;text-align:center;border-radius:10px;padding:12px;'>Submit &amp; sign</div></div></div>"
const c0_title = [
  {
    "id": 4702,
    "text": "Collect signatures ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4703,
    "text": "right on your form",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c0_buttons = [
  {
    "id": 1535,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1534,
    "link": "https://youtu.be/HilFL6niZzk",
    "text": "Watch demo",
    "type": "Secondary",
    "showArrow": false
  }
]
const c0_badge = {
  "id": 80,
  "text": "E-Signature",
  "tag": null,
  "link": null
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_mockHtml = "<div style='max-width:380px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 16px 48px rgba(15,14,26,.1);overflow:hidden;'><div style='display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='font-size:12px;font-weight:600;color:#101828;'>Service agreement</span><span style='font-size:10px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;'>Signed</span></div><div style='padding:16px;display:flex;flex-direction:column;gap:13px;'><div><div style='font-size:11px;color:#697586;margin-bottom:6px;'>Signature</div><div style='background:#fbfaff;border:1px solid #eee9fb;border-radius:8px;height:50px;display:flex;align-items:center;justify-content:center;'>\u003Cstyle>@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');\u003C/style><span style='font-family:Sacramento,\"Segoe Script\",\"Brush Script MT\",cursive;font-size:36px;color:#15132b;line-height:1;display:inline-block;transform:rotate(-3deg);'>Jordan Lee</span></div></div><div style='display:flex;align-items:center;gap:9px;'><span style='width:28px;height:28px;border-radius:50%;background:#6434d0;color:#fff;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;'>JL</span><div><div style='font-size:12.5px;font-weight:600;color:#101828;'>Jordan Lee</div><div style='font-size:11px;color:#697586;'>jordan@acme.co</div></div></div><div style='display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f2f4f7;padding-top:11px;'><span style='font-size:11.5px;color:#697586;'>Signed 12 Jun 2026 · 2:14 PM</span><span style='display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#027a48;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><path d='M5 12l4 4L19 6'/></svg>Legally valid</span></div></div></div>"
const c2_title = [
  {
    "id": 4698,
    "text": "What every signed submission",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4697,
    "text": "captures",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c2_pins = [
  {
    "id": 70,
    "label": "The signature",
    "body": "Drawn with a mouse, trackpad, or finger, or typed — captured as part of the submission."
  },
  {
    "id": 69,
    "label": "Signer identity",
    "body": "The signer's name and email are recorded alongside every signature."
  },
  {
    "id": 72,
    "label": "Timestamp",
    "body": "The exact date and time the document was signed is stored automatically."
  },
  {
    "id": 71,
    "label": "Secure & valid",
    "body": "Encrypted and legally binding, so contracts and consent stand up later."
  }
]
const c3_title = [
  {
    "id": 4696,
    "text": "Faster, safer than",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4695,
    "text": "paper signatures",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c3_cards = [
  {
    "id": 527,
    "tag": "Speed",
    "tagColor": "violet",
    "title": "Sign and submit in one step",
    "body": "Add an e-sign field to any form and collect the signature along with every submission — no extra round trip.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 529,
    "tag": "Security",
    "tagColor": "green",
    "title": "Encrypted & legally binding",
    "body": "Signatures are encrypted and legally valid, and far harder to forge or lose than a paper form.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 528,
    "tag": "Mobile",
    "tagColor": "blue",
    "title": "Sign on any device",
    "body": "People sign by mouse, trackpad, or finger — on a phone, tablet, or computer.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 530,
    "tag": "Design",
    "tagColor": "violet",
    "title": "Fits your form's style",
    "body": "Adjust the field's size, colour, and placement so signing feels like part of your brand.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 532,
    "tag": "Sharing",
    "tagColor": "amber",
    "title": "Send to one or hundreds",
    "body": "Share a link in a click; recipients get the document in their inbox to sign and complete.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 531,
    "tag": "Alerts",
    "tagColor": "rose",
    "title": "Know the moment it's signed",
    "body": "Get notified on completion, and the signer receives a confirmation with a copy.",
    "mockHtml": null,
    "icon": null
  }
]
const c4_steps = [
  {
    "id": 134,
    "title": "Add a Signature field",
    "description": "In the Builder, open Add Elements and drop the Signature field wherever you need it.",
    "rawHtml": "<div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;border-radius:9px;padding:8px 11px;font-size:12.5px;color:#101828;background:#fff;box-shadow:0 4px 12px rgba(100,52,208,.16);'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg><span style='width:18px;height:18px;border-radius:5px;background:#f0ebfa;color:#6434d0;display:inline-flex;align-items:center;justify-content:center;font-weight:700;'>✒</span>Signature<span style='margin-left:auto;font-size:10px;color:#6434d0;font-weight:600;'>Add</span></div>",
    "image": null
  },
  {
    "id": 136,
    "title": "Save and publish",
    "description": "When the form is ready, hit Save and Publish, then share the link or embed it on your site.",
    "rawHtml": "<div style='display:flex;gap:8px;align-items:center;'><span style='background:#6434d0;color:#fff;font-size:12px;font-weight:600;border-radius:8px;padding:8px 16px;'>Publish</span><span style='flex:1;border:1px solid #d0d5dd;border-radius:8px;padding:8px 12px;font-size:12px;color:#697586;'>formester.com/f/agreement</span></div>",
    "image": null
  },
  {
    "id": 135,
    "title": "Get notified & analyze",
    "description": "Get an email on each new signed response, export to Excel or Google Sheets, or review stats in Formester.",
    "rawHtml": "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:24px;height:24px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><path d='M5 12l4 4L19 6'/></svg></span><div style='font-size:12px;font-weight:600;color:#101828;'>Agreement signed · Jordan Lee</div></div>",
    "image": null
  }
]
const c4_buttons = []
const c5_title = [
  {
    "id": 4694,
    "text": "Built for documents that",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4699,
    "text": "need a signature",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c5_cards = [
  {
    "id": 533,
    "tag": "Business",
    "tagColor": "violet",
    "title": "Contracts & agreements",
    "body": "Close deals faster — clients sign service agreements from anywhere, with a legally binding record.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 534,
    "tag": "Consent",
    "tagColor": "green",
    "title": "Consent forms",
    "body": "Gather parental or client consent for events and procedures, compliant and documented.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 536,
    "tag": "Legal",
    "tagColor": "blue",
    "title": "Legal documents",
    "body": "Affidavits, waivers, and other legal forms get signed quickly and stored securely.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 535,
    "tag": "Onboarding",
    "tagColor": "amber",
    "title": "Client onboarding",
    "body": "Send contracts and agreements for signature to start every engagement professionally.",
    "mockHtml": null,
    "icon": null
  }
]
const c6_heading = [
  {
    "id": 4700,
    "text": "Teams sign with Formester",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c6_testimonials = [
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
const c7_title = [
  {
    "id": 4701,
    "text": "E-signature FAQs",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c7_faqList = [
  {
    "id": 2320,
    "header": "What is an e-signature field?",
    "body": "It's a form element that lets respondents sign — by drawing or typing — as part of their submission, so you collect a signature and the form data together.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2321,
    "header": "Are signatures collected with Formester legally binding?",
    "body": "Yes. Each signature is legally valid and recorded with the signer's identity and a timestamp, which holds up for contracts, consent, and agreements.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2322,
    "header": "Is it secure?",
    "body": "Signatures are encrypted and stored securely — far harder to forge or lose than a physical form.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2323,
    "header": "Can people sign on mobile?",
    "body": "Yes. The signature field works on any device — people can sign with a mouse, trackpad, or finger on phone, tablet, or computer.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2324,
    "header": "What can I use e-signature forms for?",
    "body": "Contracts and agreements, consent forms, legal documents like waivers and affidavits, and client onboarding — anything that needs a signature.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2325,
    "header": "Is the e-signature field available on the free plan?",
    "body": "Yes, you can add a signature field and start collecting signatures for free.",
    "body_markdown": null,
    "list": []
  }
]
const c8_buttons = [
  {
    "id": 1532,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1533,
    "link": "/pricing",
    "text": "See pricing",
    "type": "White",
    "showArrow": false
  }
]

useHead({
  "title": "Online Form Builder With E-Signature Field | Formester",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/features/electronic-signature/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-06-15T10:45:55.705Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Add a signature field to any form and collect legally valid e-signatures with the submission. Encrypted, mobile-friendly, and perfect for contracts, consent, and onboarding."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Online Form Builder With E-Signature Field | Formester"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/features/electronic-signature/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Online Form Builder With E-Signature Field | Formester"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Add a signature field to any form and collect legally valid e-signatures with the submission. Encrypted, mobile-friendly, and perfect for contracts, consent, and onboarding."
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
      "content": "https://formester.com/features/electronic-signature/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Online Form Builder With E-Signature Field | Formester"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Add a signature field to any form and collect legally valid e-signatures with the submission. Encrypted, mobile-friendly, and perfect for contracts, consent, and onboarding."
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
        "name": "What is an e-signature field?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "It's a form element that lets respondents sign — by drawing or typing — as part of their submission, so you collect a signature and the form data together.",
          "@type": "Answer"
        }
      },
      {
        "name": "Are signatures collected with Formester legally binding?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. Each signature is legally valid and recorded with the signer's identity and a timestamp, which holds up for contracts, consent, and agreements.",
          "@type": "Answer"
        }
      },
      {
        "name": "Is it secure?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Signatures are encrypted and stored securely — far harder to forge or lose than a physical form.",
          "@type": "Answer"
        }
      },
      {
        "name": "Can people sign on mobile?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. The signature field works on any device — people can sign with a mouse, trackpad, or finger on phone, tablet, or computer.",
          "@type": "Answer"
        }
      },
      {
        "name": "What can I use e-signature forms for?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Contracts and agreements, consent forms, legal documents like waivers and affidavits, and client onboarding — anything that needs a signature.",
          "@type": "Answer"
        }
      },
      {
        "name": "Is the e-signature field available on the free plan?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes, you can add a signature field and start collecting signatures for free.",
          "@type": "Answer"
        }
      }
    ]
  }
])
</script>
