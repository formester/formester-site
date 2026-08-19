<template>
  <div>
    <HeroV2
      :description="c0_description"
      trustText="Available on the Business plan"
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
      eyebrow="Why use it"
      description="Save &amp; continue removes the pressure of finishing in one go — so people start longer forms, keep their answers, and come back to complete them."
      columns="3"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Save &amp; continue in four simple steps"
      description="Turn it on for your form, and respondents can pause and resume whenever they need to — no account required."
      background="#f9fafb"
      :steps="c3_steps"
      :buttons="c3_buttons"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Use cases"
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

    <FaqSection
      centered
      :title="c6_title"
      :faqList="c6_faqList"
      class="page-component-item"
    />

    <CtaDark
      badge="Available on the Business plan"
      heading="Help more people finish your longest forms"
      description="Turn on save &amp; continue, share your form, and let respondents resume whenever they're ready."
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

const c0_description = "Long forms and applications don't have to be one sitting. Respondents save where they are, get a resume link, and pick up exactly where they left off — with every answer preserved."
const c0_mockupHtml = "<div style='max-width:520px;margin:0 auto;background:#fff;border:1px solid #eaecf0;border-radius:16px;box-shadow:0 24px 80px rgba(15,14,26,.12),0 8px 24px rgba(15,14,26,.06);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:12px 16px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:11px;height:11px;border-radius:50%;background:#ff6058;'></span><span style='width:11px;height:11px;border-radius:50%;background:#ffbd2e;'></span><span style='width:11px;height:11px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:10px;font-size:12px;color:#697586;'>forms.formester.com · Membership application</span></div><div style='padding:18px;text-align:left;display:flex;flex-direction:column;gap:12px;'><div style='display:flex;align-items:center;justify-content:space-between;font-size:11px;color:#697586;'><span>Step 3 of 6</span><span style='font-weight:600;color:#472594;'>50% complete</span></div><div style='height:6px;border-radius:999px;background:#eaecf0;overflow:hidden;'><span style='display:block;height:100%;width:50%;background:#6434d0;border-radius:999px;'></span></div><div style='border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;'><div style='font-size:12px;color:#475467;margin-bottom:5px;'>Full name</div><div style='font-size:13px;color:#101828;'>Jordan Lee</div></div><div style='border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;'><div style='font-size:12px;color:#475467;margin-bottom:5px;'>Organization</div><div style='font-size:13px;color:#101828;'>Acme Co.</div></div><div style='border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;'><div style='font-size:12px;color:#475467;margin-bottom:5px;'>Years of experience</div><div style='font-size:13px;color:#98a2b3;'>In progress…</div></div><div style='display:flex;align-items:center;gap:10px;'><span style='flex:1;border:1px solid #6434d0;color:#472594;font-size:13px;font-weight:600;text-align:center;border-radius:10px;padding:11px;background:#f0ebfa;display:inline-flex;align-items:center;justify-content:center;gap:7px;'><svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z'/><path d='M17 21v-8H7v8'/><path d='M7 3v5h8'/></svg>Save &amp; continue later</span><span style='flex:1;background:#6434d0;color:#fff;font-size:13px;font-weight:600;text-align:center;border-radius:10px;padding:11px;'>Next</span></div><div style='margin-top:4px;display:flex;align-items:flex-start;gap:10px;border:1px solid #d3f0e0;background:#ecfdf3;border-radius:12px;padding:11px 12px;'><span style='width:24px;height:24px;border-radius:50%;background:#fff;color:#027a48;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4'><path d='M5 12l4 4L19 6'/></svg></span><div style='flex:1;min-width:0;'><div style='font-size:12px;font-weight:600;color:#054f31;'>Resume link sent to jordan@acme.co</div><div style='display:inline-flex;align-items:center;gap:6px;margin-top:6px;font-size:11px;color:#175cd3;background:#fff;border:1px solid #d3f0e0;border-radius:999px;padding:4px 10px;max-width:100%;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#175cd3' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1'/><path d='M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1'/></svg><span style='overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>forms.formester.com/r/8t1h…</span></div></div></div></div></div>"
const c0_title = [
  {
    "id": 4871,
    "text": "Let people ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4870,
    "text": "save progress",
    "highlight": true,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4872,
    "text": " and finish later",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c0_buttons = [
  {
    "id": 1607,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Start Building",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1606,
    "link": "https://youtu.be/8t1hNh3s8bk",
    "text": "Watch demo",
    "type": "Secondary",
    "showArrow": false
  }
]
const c0_badge = {
  "id": 98,
  "text": "Save & Continue",
  "tag": "Business",
  "link": null
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    "id": 4867,
    "text": "Long forms,",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4865,
    "text": "finished on their time",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c2_cards = [
  {
    "id": 675,
    "tag": "Completion",
    "tagColor": "violet",
    "title": "Fewer abandoned forms",
    "body": "When people can step away and return, they're far more likely to finish instead of giving up midway.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 677,
    "tag": "Continuity",
    "tagColor": "blue",
    "title": "Answers are preserved",
    "body": "Everything entered so far is saved, so respondents never have to retype what they already filled in.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 676,
    "tag": "Convenience",
    "tagColor": "green",
    "title": "Resume from anywhere",
    "body": "A resume link lets people pick up on a different day or device, exactly where they left off.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 680,
    "tag": "Length",
    "tagColor": "amber",
    "title": "Built for long forms",
    "body": "Applications, registrations, and detailed surveys feel manageable when they can be finished across sessions.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 678,
    "tag": "Experience",
    "tagColor": "rose",
    "title": "Less pressure to rush",
    "body": "Respondents can gather details or check facts before continuing, which means more accurate, considered answers.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 679,
    "tag": "Data quality",
    "tagColor": "violet",
    "title": "More complete responses",
    "body": "People who return tend to finish every section, so you collect richer, more usable submissions.",
    "mockHtml": null,
    "icon": null
  }
]
const c3_steps = [
  {
    "id": 161,
    "title": "Enable save & continue",
    "description": "In the Builder, turn on save & continue for your form so a save option appears for respondents as they fill it in.",
    "rawHtml": "<div style='display:inline-flex;align-items:center;gap:9px;font-size:13px;color:#101828;border:1px solid #eaecf0;border-radius:10px;padding:9px 12px;background:#fff;'><span style='width:32px;height:19px;border-radius:999px;background:#6434d0;position:relative;'><span style='position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:50%;background:#fff;'></span></span>Save &amp; continue · On</div>",
    "image": null
  },
  {
    "id": 158,
    "title": "Respondents save progress",
    "description": "Partway through, a respondent chooses Save & continue later, and their answers so far are stored safely.",
    "rawHtml": "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;justify-content:space-between;font-size:11px;color:#697586;'><span>Step 3 of 6</span><span style='font-weight:600;color:#472594;'>50%</span></div><div style='height:6px;border-radius:999px;background:#eaecf0;overflow:hidden;'><span style='display:block;height:100%;width:50%;background:#6434d0;border-radius:999px;'></span></div><span style='align-self:flex-start;display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:#472594;background:#f0ebfa;border:1px solid #e9ddfb;border-radius:9px;padding:8px 12px;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z'/><path d='M17 21v-8H7v8'/><path d='M7 3v5h8'/></svg>Save &amp; continue later</span></div>",
    "image": null
  },
  {
    "id": 160,
    "title": "They get a resume link",
    "description": "A unique link is created — often sent by email — that takes them straight back to their saved progress.",
    "rawHtml": "<div style='display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:28px;height:28px;border-radius:7px;background:#eff8ff;color:#175cd3;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1'/><path d='M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1'/></svg></span><div style='flex:1;min-width:0;'><div style='font-size:12px;font-weight:600;color:#101828;'>Resume link</div><div style='font-size:11px;color:#697586;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>forms.formester.com/r/8t1h…</div></div><span style='font-size:11px;font-weight:600;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 9px;'>Emailed</span></div>",
    "image": null
  },
  {
    "id": 159,
    "title": "Finish later, where they left off",
    "description": "When they're ready, the link reopens the form with every answer in place — they complete the rest and submit.",
    "rawHtml": "<div style='display:flex;align-items:center;gap:10px;'><span style='flex:1;display:inline-flex;align-items:center;gap:7px;border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:12px;color:#475467;'><span style='width:18px;height:18px;border-radius:50%;background:#ecfdf3;color:#027a48;display:inline-flex;align-items:center;justify-content:center;'><svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M5 12l4 4L19 6'/></svg></span>Progress restored</span><span style='background:#6434d0;color:#fff;font-size:12px;font-weight:600;border-radius:9px;padding:9px 16px;'>Submit</span></div>",
    "image": null
  }
]
const c3_buttons = []
const c4_title = [
  {
    "id": 4864,
    "text": "Where save & continue",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4866,
    "text": "earns its keep",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c4_cards = [
  {
    "id": 671,
    "tag": "Applications",
    "tagColor": "violet",
    "title": "Membership & job applications",
    "body": "Let applicants gather documents and details over a few sessions instead of abandoning a long form.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 674,
    "tag": "Registration",
    "tagColor": "green",
    "title": "Event & program registration",
    "body": "People register at their own pace, returning to confirm details or add attendees before they submit.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 673,
    "tag": "Surveys",
    "tagColor": "blue",
    "title": "Long surveys & research",
    "body": "Keep detailed surveys complete by letting respondents pause and resume without losing their answers.",
    "mockHtml": null,
    "icon": null
  },
  {
    "id": 672,
    "tag": "Onboarding",
    "tagColor": "amber",
    "title": "Client & patient intake",
    "body": "Intake forms with many sections get finished when clients can save and continue when it suits them.",
    "mockHtml": null,
    "icon": null
  }
]
const c5_heading = [
  {
    "id": 4868,
    "text": "Teams collect more complete responses with Formester",
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
    "id": 4869,
    "text": "Save & continue FAQs",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c6_faqList = [
  {
    "id": 2430,
    "header": "What is save and continue?",
    "body": "It lets respondents save their progress partway through a form, then resume later from a link with every answer they already entered still in place.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2431,
    "header": "How do respondents come back to a saved form?",
    "body": "When they save, a unique resume link is created — often sent to their email — that reopens the form exactly where they left off.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2432,
    "header": "Are their answers kept when they leave?",
    "body": "Yes. Everything entered before saving is preserved, so respondents never have to retype what they already filled in.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2433,
    "header": "Can they finish on a different device?",
    "body": "Yes. The resume link works from any device, so someone can start on their phone and finish later on a computer.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2434,
    "header": "What kinds of forms is this best for?",
    "body": "It's ideal for long forms — applications, registrations, intake forms, and detailed surveys — where finishing in one sitting isn't always practical.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2435,
    "header": "Is save and continue available on all plans?",
    "body": "Save & continue is available on the Business plan. Check the pricing page for details.",
    "body_markdown": null,
    "list": []
  }
]
const c7_buttons = [
  {
    "id": 1604,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Start Building",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1605,
    "link": "/pricing",
    "text": "See pricing",
    "type": "White",
    "showArrow": false
  }
]

useHead({
  "title": "Save and Continue Forms & Surveys | Let Users Resume Anytime",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/features/save-and-continue/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-06-15T10:45:48.793Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Let respondents save their progress on long forms and surveys, then resume later from a link. Answers are preserved, drop-offs fall, and more people finish."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Save and Continue Forms & Surveys | Let Users Resume Anytime"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/features/save-and-continue/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Save and Continue Forms & Surveys | Let Users Resume Anytime"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Let respondents save their progress on long forms and surveys, then resume later from a link. Answers are preserved, drop-offs fall, and more people finish."
    },
    {
      "hid": "og:image",
      "property": "og:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_save_and_continue_feature_page_hero_image_f931790ea9.png"
    },
    {
      "hid": "og:image:alt",
      "name": "og:image:alt",
      "content": "Save and Continue Forms & Surveys | Let Users Resume Anytime"
    },
    {
      "hid": "twitter:url",
      "name": "twitter:url",
      "content": "https://formester.com/features/save-and-continue/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Save and Continue Forms & Surveys | Let Users Resume Anytime"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Let respondents save their progress on long forms and surveys, then resume later from a link. Answers are preserved, drop-offs fall, and more people finish."
    },
    {
      "hid": "twitter:image",
      "name": "twitter:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_save_and_continue_feature_page_hero_image_f931790ea9.png"
    },
    {
      "hid": "twitter:image:alt",
      "name": "twitter:image:alt",
      "content": "Save and Continue Forms & Surveys | Let Users Resume Anytime"
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
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_s_save_and_continue_feature_page_hero_image_f931790ea9.png"
    },
    {
      "hid": "keywords",
      "name": "keywords",
      "content": [
        "save and continue"
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
        "name": "What is save and continue?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "It lets respondents save their progress partway through a form, then resume later from a link with every answer they already entered still in place.",
          "@type": "Answer"
        }
      },
      {
        "name": "How do respondents come back to a saved form?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "When they save, a unique resume link is created — often sent to their email — that reopens the form exactly where they left off.",
          "@type": "Answer"
        }
      },
      {
        "name": "Are their answers kept when they leave?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. Everything entered before saving is preserved, so respondents never have to retype what they already filled in.",
          "@type": "Answer"
        }
      },
      {
        "name": "Can they finish on a different device?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. The resume link works from any device, so someone can start on their phone and finish later on a computer.",
          "@type": "Answer"
        }
      },
      {
        "name": "What kinds of forms is this best for?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "It's ideal for long forms — applications, registrations, intake forms, and detailed surveys — where finishing in one sitting isn't always practical.",
          "@type": "Answer"
        }
      },
      {
        "name": "Is save and continue available on all plans?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Save & continue is available on the Business plan. Check the pricing page for details.",
          "@type": "Answer"
        }
      }
    ]
  }
])
</script>
