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

    <CardGrid
      eyebrow="What you get"
      description="Drag fields into place, make it look like your brand, and ship it — all from one visual builder."
      columns="3"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StatsBanner
      variant="band"
      heading="A form builder that gets out of your way"
      :stats="c3_stats"
      class="page-component-item"
    />

    <AlternatingRows
      eyebrow="How it works"
      :title="c4_title"
      :rows="c4_rows"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Real-life use cases"
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
      heading="Build your first form by dragging fields"
      description="Open the builder, drag in the fields you need, brand it, and publish. Templates, themes, and a searchable dashboard included."
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

const c0_description = "Drag fields onto a canvas to build the form you need — no code required. Start from a template, brand it to match your site, then share with a link or embed it anywhere."
const c0_mockupHtml = "<div style='max-width:560px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>app.formester.com · Builder</span></div><div style='display:flex;text-align:left;'><div style='width:172px;flex-shrink:0;border-right:1px solid #eaecf0;padding:14px 12px;background:#fcfcfd;'><div style='font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#98a2b3;margin-bottom:10px;'>Fields</div><div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:7px 9px;font-size:12px;color:#101828;background:#fff;'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg>Text</div><div style='display:flex;align-items:center;gap:8px;border:1px solid #6434d0;border-radius:8px;padding:7px 9px;font-size:12px;color:#101828;background:#fff;box-shadow:0 4px 12px rgba(100,52,208,.18);'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg>Email<span style='margin-left:auto;font-size:10px;color:#6434d0;font-weight:600;'>Dragging</span></div><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:7px 9px;font-size:12px;color:#101828;background:#fff;'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg>Choice</div></div></div><div style='flex:1;padding:14px 16px;'><div style='font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#98a2b3;margin-bottom:10px;'>Canvas</div><div style='display:flex;flex-direction:column;gap:8px;'><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;'><div style='font-size:11px;color:#697586;margin-bottom:5px;'>Full name</div><div style='height:9px;width:80%;border-radius:5px;background:#eef0f4;'></div></div><div style='border:1px dashed #6434d0;border-radius:9px;padding:9px 11px;background:#f0ebfa;box-shadow:0 0 0 4px rgba(100,52,208,.08);'><div style='font-size:11px;color:#6434d0;font-weight:600;margin-bottom:5px;'>Email · drop here</div><div style='height:9px;width:90%;border-radius:5px;background:#dcd2f3;'></div></div><div style='background:#6434d0;color:#fff;font-size:13px;font-weight:600;text-align:center;border-radius:9px;padding:10px;'>Submit</div></div></div></div></div>"
const c0_title = [
  {
    "id": 4693,
    "text": "Build any form ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4692,
    "text": "by dragging fields",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c0_buttons = [
  {
    "id": 1530,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1531,
    "link": "https://youtu.be/ojY5SfSC0K0",
    "text": "Watch demo",
    "type": "Secondary",
    "showArrow": false
  }
]
const c0_badge = {
  "id": 79,
  "text": "Drag & Drop Form Builder",
  "tag": null,
  "link": null
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    "id": 4687,
    "text": "Build the exact form you want,",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4686,
    "text": "no code needed",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c2_cards = [
  {
    "id": 524,
    "tag": "No-code",
    "tagColor": "violet",
    "title": "Drag fields onto a canvas",
    "body": "Pick from text, email, choice, file upload, and more, then drag them into the order you want — no markup to write.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:8px;padding:6px 9px;font-size:12px;color:#101828;'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg>Text</div><div style='display:flex;align-items:center;gap:8px;border:1px solid #6434d0;border-radius:8px;padding:6px 9px;font-size:12px;color:#101828;box-shadow:0 4px 12px rgba(100,52,208,.18);'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg>Email<span style='margin-left:auto;font-size:10px;color:#6434d0;font-weight:600;'>Dragging</span></div></div>",
    "icon": null
  },
  {
    "id": 525,
    "tag": "Branding",
    "tagColor": "blue",
    "title": "Themes that match your brand",
    "body": "Set your colors, fonts, and logo so every form looks like part of your site — not a generic template.",
    "mockHtml": "<div style='display:flex;align-items:center;gap:8px;'><span style='width:24px;height:24px;border-radius:6px;background:#6434d0;'></span><span style='width:24px;height:24px;border-radius:6px;background:#175cd3;'></span><span style='width:24px;height:24px;border-radius:6px;background:#027a48;'></span><span style='width:24px;height:24px;border-radius:6px;background:#b54708;'></span><span style='margin-left:6px;font-size:11px;color:#697586;'>Theme · Brand colors</span></div>",
    "icon": null
  },
  {
    "id": 526,
    "tag": "Templates",
    "tagColor": "green",
    "title": "Start from a template",
    "body": "Begin with a ready-made template for contact, registration, surveys, and more, then tweak it to fit.",
    "mockHtml": "<div style='display:flex;gap:8px;'><div style='flex:1;border:1px solid #eaecf0;border-radius:8px;padding:9px;'><div style='height:7px;width:70%;border-radius:4px;background:#eef0f4;margin-bottom:5px;'></div><div style='height:7px;width:90%;border-radius:4px;background:#eef0f4;'></div></div><div style='flex:1;border:1px solid #6434d0;border-radius:8px;padding:9px;background:#f0ebfa;'><div style='height:7px;width:70%;border-radius:4px;background:#dcd2f3;margin-bottom:5px;'></div><div style='height:7px;width:90%;border-radius:4px;background:#dcd2f3;'></div></div></div>",
    "icon": null
  }
]
const c3_stats = [
  {
    "id": 89,
    "value": "No-code",
    "label": "drag-and-drop builder"
  },
  {
    "id": 86,
    "value": "30+",
    "label": "field types to drag in"
  },
  {
    "id": 87,
    "value": "2 ways",
    "label": "to publish — link or embed"
  },
  {
    "id": 88,
    "value": "56k+",
    "label": "users worldwide"
  }
]
const c4_title = [
  {
    "id": 4685,
    "text": "From blank canvas",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4684,
    "text": "to live form",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c4_rows = [
  {
    "id": 89,
    "kicker": "Build",
    "title": "Drag the fields you need into place",
    "body": "Start from scratch or a template, then drag fields onto the canvas and reorder them until the form flows the way you want.",
    "mediaHtml": "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:16px;'><div style='display:flex;align-items:center;gap:9px;margin-bottom:11px;'><span style='font-size:12px;font-weight:600;color:#101828;border:1px solid #eaecf0;border-radius:8px;padding:5px 10px;'>+ Add Field</span><span style='font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#98a2b3;'>Canvas</span></div><div style='display:flex;flex-direction:column;gap:7px;'><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;'><div style='font-size:11px;color:#697586;margin-bottom:5px;'>Full name</div><div style='height:9px;width:78%;border-radius:5px;background:#eef0f4;'></div></div><div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;border-radius:9px;padding:9px 11px;box-shadow:0 4px 12px rgba(100,52,208,.18);'><svg width='11' height='15' viewBox='0 0 11 15' fill='#98a2b3'><circle cx='3' cy='3' r='1.3'/><circle cx='8' cy='3' r='1.3'/><circle cx='3' cy='7.5' r='1.3'/><circle cx='8' cy='7.5' r='1.3'/><circle cx='3' cy='12' r='1.3'/><circle cx='8' cy='12' r='1.3'/></svg><div style='flex:1;'><div style='font-size:11px;color:#101828;margin-bottom:5px;'>Email</div><div style='height:9px;width:88%;border-radius:5px;background:#eef0f4;'></div></div><span style='font-size:10px;color:#6434d0;font-weight:600;'>Dragging</span></div></div></div>"
  },
  {
    "id": 91,
    "kicker": "Design",
    "title": "Brand it to match your site",
    "body": "Apply your colors, fonts, and logo with a theme so the form feels native to your brand instead of a bolt-on widget.",
    "mediaHtml": "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:16px;'><div style='font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#697586;margin-bottom:10px;'>Theme</div><div style='display:flex;align-items:center;gap:9px;margin-bottom:12px;'><span style='font-size:11px;color:#697586;'>Brand color</span><span style='width:22px;height:22px;border-radius:6px;background:#6434d0;box-shadow:0 0 0 3px #f0ebfa;'></span><span style='width:22px;height:22px;border-radius:6px;background:#175cd3;'></span><span style='width:22px;height:22px;border-radius:6px;background:#027a48;'></span></div><div style='border:1px solid #eaecf0;border-radius:10px;padding:12px;'><div style='font-size:11px;color:#697586;margin-bottom:6px;'>Work email</div><div style='height:10px;width:85%;border-radius:5px;background:#eef0f4;margin-bottom:11px;'></div><div style='background:#6434d0;color:#fff;font-size:12px;font-weight:600;text-align:center;border-radius:8px;padding:9px;'>Submit</div></div></div>"
  },
  {
    "id": 90,
    "kicker": "Publish",
    "title": "Share with a link or embed it",
    "body": "Publish in one click and share a hosted link, or embed the form on your own site — submissions land in your dashboard either way.",
    "mediaHtml": "<div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 8px 24px rgba(15,14,26,.06);padding:16px;'><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:10px;padding:9px 11px;margin-bottom:10px;'><span style='font-size:12px;color:#475467;font-family:ui-monospace,Menlo,monospace;'>formester.com/f/contact</span><span style='margin-left:auto;font-size:11px;font-weight:600;color:#6434d0;'>Copy</span></div><div style='display:flex;gap:8px;'><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:5px 10px;'>Share link</span><span style='font-size:11px;font-weight:600;color:#475467;background:#f9fafb;border:1px solid #eaecf0;border-radius:7px;padding:5px 10px;'>Embed</span></div></div>"
  }
]
const c5_title = [
  {
    "id": 4688,
    "text": "What people",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4689,
    "text": "build by dragging",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c5_cards = [
  {
    "id": 521,
    "tag": "Contact",
    "tagColor": "violet",
    "title": "Contact forms",
    "body": "Drag in name, email, and message fields to ship a branded contact form in minutes.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 520,
    "tag": "Events",
    "tagColor": "blue",
    "title": "Registration forms",
    "body": "Build sign-up and registration forms with the exact fields each event needs.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 523,
    "tag": "Research",
    "tagColor": "green",
    "title": "Surveys & polls",
    "body": "Add choice, rating, and ranking fields to gather feedback without writing code.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 522,
    "tag": "Hiring",
    "tagColor": "amber",
    "title": "Application forms",
    "body": "Combine text fields and file uploads so applicants can apply and attach a resume.",
    "mockHtml": null,
    "icon": null
  }
]
const c6_heading = [
  {
    "id": 4691,
    "text": "Teams build forms with Formester",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c6_testimonials = [
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
const c7_title = [
  {
    "id": 4690,
    "text": "Drag and drop form builder FAQs",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c7_faqList = [
  {
    "id": 2315,
    "header": "What is a drag-and-drop form builder?",
    "body": "It's a visual tool that lets you create forms by dragging fields onto a canvas instead of writing code. You pick the fields you need, arrange them, style the form, and publish — all without touching markup.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2314,
    "header": "Do I need to know how to code?",
    "body": "No. The builder is fully no-code. You drag fields into place, set their options, and brand the form visually, so anyone on your team can build a working form.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2319,
    "header": "What kinds of fields can I add?",
    "body": "Drag in text, email, number, choice, rating, file upload, and more. You can also build multi-page forms and add conditional logic to show or hide fields based on answers.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2316,
    "header": "Can I match the form to my brand?",
    "body": "Yes. Apply a theme with your own colors, fonts, and logo so the form looks like part of your site rather than a generic template.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2317,
    "header": "How do I publish and share my form?",
    "body": "Publish in one click, then share the hosted link or embed the form on your own website. Submissions are collected in a searchable dashboard either way.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2318,
    "header": "Is the drag-and-drop form builder free?",
    "body": "Yes. You can build and publish forms with the drag-and-drop builder for free, and start collecting submissions right away.",
    "body_markdown": null,
    "list": []
  }
]
const c8_buttons = [
  {
    "id": 1528,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1529,
    "link": "/pricing",
    "text": "See pricing",
    "type": "White",
    "showArrow": false
  }
]

useHead({
  "title": "Drag and Drop Form Builder for HTML and Web Forms | Formester",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/features/drag-and-drop-form-builder/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-06-15T10:45:32.146Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Build forms by dragging fields onto a canvas — no code. Start from a template, brand it with your theme, then publish with a shareable link or embed. Free drag-and-drop form builder."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Drag and Drop Form Builder for HTML and Web Forms | Formester"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/features/drag-and-drop-form-builder/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Drag and Drop Form Builder for HTML and Web Forms | Formester"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Build forms by dragging fields onto a canvas — no code. Start from a template, brand it with your theme, then publish with a shareable link or embed. Free drag-and-drop form builder."
    },
    {
      "hid": "og:image",
      "property": "og:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_drag_and_drop_interface_feature_page_hero_image_a2797d981f.png"
    },
    {
      "hid": "og:image:alt",
      "name": "og:image:alt",
      "content": "Drag and Drop Form Builder for HTML and Web Forms | Formester"
    },
    {
      "hid": "twitter:url",
      "name": "twitter:url",
      "content": "https://formester.com/features/drag-and-drop-form-builder/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Drag and Drop Form Builder for HTML and Web Forms | Formester"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Build forms by dragging fields onto a canvas — no code. Start from a template, brand it with your theme, then publish with a shareable link or embed. Free drag-and-drop form builder."
    },
    {
      "hid": "twitter:image",
      "name": "twitter:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_drag_and_drop_interface_feature_page_hero_image_a2797d981f.png"
    },
    {
      "hid": "twitter:image:alt",
      "name": "twitter:image:alt",
      "content": "Drag and Drop Form Builder for HTML and Web Forms | Formester"
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
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_drag_and_drop_interface_feature_page_hero_image_a2797d981f.png"
    },
    {
      "hid": "keywords",
      "name": "keywords",
      "content": [
        "drag and drop html form builder"
      ]
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
        "name": "What is a drag-and-drop form builder?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "It's a visual tool that lets you create forms by dragging fields onto a canvas instead of writing code. You pick the fields you need, arrange them, style the form, and publish — all without touching markup.",
          "@type": "Answer"
        }
      },
      {
        "name": "Do I need to know how to code?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "No. The builder is fully no-code. You drag fields into place, set their options, and brand the form visually, so anyone on your team can build a working form.",
          "@type": "Answer"
        }
      },
      {
        "name": "What kinds of fields can I add?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Drag in text, email, number, choice, rating, file upload, and more. You can also build multi-page forms and add conditional logic to show or hide fields based on answers.",
          "@type": "Answer"
        }
      },
      {
        "name": "Can I match the form to my brand?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. Apply a theme with your own colors, fonts, and logo so the form looks like part of your site rather than a generic template.",
          "@type": "Answer"
        }
      },
      {
        "name": "How do I publish and share my form?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Publish in one click, then share the hosted link or embed the form on your own website. Submissions are collected in a searchable dashboard either way.",
          "@type": "Answer"
        }
      },
      {
        "name": "Is the drag-and-drop form builder free?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. You can build and publish forms with the drag-and-drop builder for free, and start collecting submissions right away.",
          "@type": "Answer"
        }
      }
    ]
  }
])
</script>
