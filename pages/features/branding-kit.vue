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
      eyebrow="What you can set"
      description="The Branding Kit gathers your logo, colors, fonts, and theme in one place. Set them once and every form you build carries them automatically."
      columns="2"
      :title="c2_title"
      :cards="c2_cards"
      class="page-component-item"
    />

    <StickyStepsSection
      badge="How it works"
      heading="Set up your kit once, apply it everywhere"
      description="Build your brand kit a single time, then reuse it on every form — new or existing — without restyling anything by hand."
      background="#f9fafb"
      :steps="c3_steps"
      :buttons="c3_buttons"
      class="page-component-item"
    />

    <CardGrid
      eyebrow="Where it shines"
      description="Wherever a consistent, professional look matters, a saved brand kit turns every form into an extension of your identity."
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
      badge="Free to start"
      heading="Put your brand on every form"
      description="Set up your logo, colors, and fonts once, then apply your kit to every form in a click."
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

const c0_description = "Set up a reusable brand kit once — logo, colors, and fonts — then apply it to every form in a click. No code, no copy-pasting styles. Remove the Formester watermark and your forms feel like a natural part of your brand."
const c0_mockupHtml = "\u003Cstyle>.bk-form{font-family:Arial,Helvetica,sans-serif;animation:bkFont 7s ease-in-out infinite;}.bk-logo-on{opacity:0;animation:bkLogo 7s ease-in-out infinite;}.bk-logo-off{opacity:1;animation:bkLogoOff 7s ease-in-out infinite;}.bk-btn{background:#475467;animation:bkBtn 7s ease-in-out infinite;}.bk-acc{color:#475467;animation:bkAcc 7s ease-in-out infinite;}.bk-sw{position:relative;}.bk-sw.bk-pick::after{content:'';position:absolute;inset:-3px;border:2px solid #6434d0;border-radius:9px;opacity:0;animation:bkPick 7s ease-in-out infinite;}@keyframes bkFont{0%,30%{font-family:Arial,Helvetica,sans-serif;}42%,100%{font-family:Georgia,'Times New Roman',serif;}}@keyframes bkLogo{0%,18%{opacity:0;}30%,100%{opacity:1;}}@keyframes bkLogoOff{0%,18%{opacity:1;}30%,100%{opacity:0;}}@keyframes bkBtn{0%,8%{background:#475467;}20%,100%{background:#6434d0;}}@keyframes bkAcc{0%,8%{color:#475467;}20%,100%{color:#6434d0;}}@keyframes bkPick{0%,4%{opacity:0;}12%,24%{opacity:1;}34%,100%{opacity:0;}}@media (prefers-reduced-motion:reduce){.bk-form{animation:none!important;font-family:Georgia,'Times New Roman',serif!important;}.bk-logo-on{animation:none!important;opacity:1!important;}.bk-logo-off{animation:none!important;opacity:0!important;}.bk-btn{animation:none!important;background:#6434d0!important;}.bk-acc{animation:none!important;color:#6434d0!important;}.bk-sw.bk-pick::after{animation:none!important;opacity:1!important;}}\u003C/style><div style='max-width:560px;margin:0 auto;display:grid;grid-template-columns:200px 1fr;gap:14px;align-items:start;'><div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 12px 36px rgba(15,14,26,.08);padding:14px;text-align:left;'><div style='font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#98a2b3;line-height:1.1;margin-bottom:10px;'>Brand kit</div><div style='font-size:10px;font-weight:600;color:#475467;line-height:1.1;margin-bottom:5px;'>Logo</div><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:9px;padding:8px 9px;margin-bottom:12px;'><span style='width:26px;height:26px;border-radius:7px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.2'><path d='M3 7l9-4 9 4-9 4-9-4z'/><path d='M3 7v10l9 4 9-4V7'/></svg></span><span style='font-size:11px;font-weight:700;color:#101828;line-height:1.1;'>Northpeak</span></div><div style='font-size:10px;font-weight:600;color:#475467;line-height:1.1;margin-bottom:6px;'>Brand colors</div><div style='display:flex;gap:7px;margin-bottom:12px;'><span class='bk-sw bk-pick' style='width:24px;height:24px;border-radius:6px;background:#6434d0;'></span><span class='bk-sw' style='width:24px;height:24px;border-radius:6px;background:#0f0e1a;'></span><span class='bk-sw' style='width:24px;height:24px;border-radius:6px;background:#27c93f;'></span><span class='bk-sw' style='width:24px;height:24px;border-radius:6px;background:#f0ebfa;border:1px solid #eaecf0;'></span></div><div style='font-size:10px;font-weight:600;color:#475467;line-height:1.1;margin-bottom:6px;'>Font</div><div style='display:flex;align-items:center;gap:8px;border:1px solid #6434d0;background:#fbfaff;border-radius:9px;padding:7px 10px;'><span style='font-family:Georgia,serif;font-size:14px;font-weight:700;color:#101828;line-height:1;'>Ag</span><span style='font-size:11px;color:#101828;line-height:1.1;'>Serif</span><span style='margin-left:auto;color:#6434d0;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span></div></div><div style='background:#fff;border:1px solid #eaecf0;border-radius:14px;box-shadow:0 18px 50px rgba(15,14,26,.10);overflow:hidden;'><div style='display:flex;align-items:center;gap:6px;padding:10px 13px;background:#f9fafb;border-bottom:1px solid #eaecf0;'><span style='width:9px;height:9px;border-radius:50%;background:#ff6058;'></span><span style='width:9px;height:9px;border-radius:50%;background:#ffbd2e;'></span><span style='width:9px;height:9px;border-radius:50%;background:#27c93f;'></span><span style='margin-left:6px;font-size:10px;color:#98a2b3;line-height:1;'>Live preview</span></div><div class='bk-form' style='padding:16px;text-align:left;'><div style='display:flex;align-items:center;gap:8px;margin-bottom:14px;min-height:26px;'><span class='bk-logo-on' style='display:inline-flex;align-items:center;gap:7px;'><span style='width:24px;height:24px;border-radius:7px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.2'><path d='M3 7l9-4 9 4-9 4-9-4z'/><path d='M3 7v10l9 4 9-4V7'/></svg></span><span class='bk-acc' style='font-size:13px;font-weight:700;line-height:1.1;'>Northpeak</span></span><span class='bk-logo-off' style='position:absolute;font-size:11px;color:#cdd2db;line-height:1.1;'>Your logo</span></div><div style='font-size:13px;font-weight:600;color:#101828;line-height:1.2;margin-bottom:12px;'>Request a quote</div><div style='font-size:10px;font-weight:600;color:#475467;line-height:1.1;margin-bottom:4px;'>Full name</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:11.5px;color:#101828;line-height:1.1;margin-bottom:11px;'>Jordan Reyes</div><div style='font-size:10px;font-weight:600;color:#475467;line-height:1.1;margin-bottom:4px;'>Work email</div><div style='border:1px solid #eaecf0;border-radius:9px;padding:9px 11px;font-size:11.5px;color:#98a2b3;line-height:1.1;margin-bottom:14px;'>you@company.com</div><div class='bk-btn' style='border-radius:9px;padding:10px;text-align:center;font-size:12px;font-weight:700;color:#fff;line-height:1.1;'>Submit</div></div></div></div>"
const c0_title = [
  {
    "id": 4610,
    "text": "Make every form ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4609,
    "text": "look unmistakably yours",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c0_buttons = [
  {
    "id": 1496,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1497,
    "link": "https://youtu.be/07dZyHn6fF8",
    "text": "Watch demo",
    "type": "Secondary",
    "showArrow": false
  }
]
const c0_badge = {
  "id": 70,
  "text": "Branding Kit",
  "tag": null,
  "link": null
}
const c0_tabCardContent = []
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    "id": 4607,
    "text": "Everything that makes a form ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4604,
    "text": "feel like your brand",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c2_cards = [
  {
    "id": 463,
    "tag": "Logo",
    "tagColor": "violet",
    "title": "Your logo on every form",
    "body": "Add your company logo so it sits at the top of each form. Your brand is visible and memorable from the very first field, building instant recognition and trust.",
    "mockHtml": "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:11px 13px;'><span style='width:26px;height:26px;border-radius:7px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.2'><path d='M3 7l9-4 9 4-9 4-9-4z'/><path d='M3 7v10l9 4 9-4V7'/></svg></span><span style='font-size:12.5px;font-weight:700;color:#101828;line-height:1.1;'>Northpeak</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:3px 8px;line-height:1;'>On form</span></div>",
    "icon": null
  },
  {
    "id": 464,
    "tag": "Colors",
    "tagColor": "blue",
    "title": "Brand colors, applied consistently",
    "body": "Pick your brand colors and Formester applies them to buttons, accents, and highlights across the form — so every form looks the same and unmistakably yours.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:9px;'><div style='display:flex;gap:7px;'><span style='width:26px;height:26px;border-radius:7px;background:#6434d0;box-shadow:0 0 0 2px #fff,0 0 0 4px #6434d0;'></span><span style='width:26px;height:26px;border-radius:7px;background:#0f0e1a;'></span><span style='width:26px;height:26px;border-radius:7px;background:#27c93f;'></span><span style='width:26px;height:26px;border-radius:7px;background:#f0ebfa;border:1px solid #eaecf0;'></span></div><div style='background:#6434d0;border-radius:8px;padding:8px;text-align:center;font-size:11px;font-weight:700;color:#fff;line-height:1.1;'>Submit</div></div>",
    "icon": null
  },
  {
    "id": 466,
    "tag": "Fonts",
    "tagColor": "green",
    "title": "Fonts and theme that match",
    "body": "Choose the fonts and a built-in theme that fit your brand. Headings and answers read in your typeface, so the form feels designed rather than generic.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:9px;border:1px solid #6434d0;background:#fbfaff;border-radius:9px;padding:8px 11px;'><span style='font-family:Georgia,serif;font-size:15px;font-weight:700;color:#101828;line-height:1;'>Ag</span><span style='font-size:11.5px;color:#101828;line-height:1.1;'>Brand serif</span><span style='margin-left:auto;color:#6434d0;'><svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3'><path d='M5 12l4 4L19 6'/></svg></span></div><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;'><span style='font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#98a2b3;line-height:1;'>Ag</span><span style='font-size:11.5px;color:#98a2b3;line-height:1.1;'>Sans</span></div></div>",
    "icon": null
  },
  {
    "id": 465,
    "tag": "White-label",
    "tagColor": "amber",
    "title": "Remove the Formester watermark",
    "body": "Take off the Formester watermark for a clean, fully white-labeled form. Nothing competes with your brand — the focus stays entirely on you, which builds credibility.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:9px;font-size:11.5px;line-height:1.1;color:#101828;'><span style='width:34px;height:19px;border-radius:999px;background:#6434d0;position:relative;flex-shrink:0;'><span style='position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:50%;background:#fff;'></span></span>Hide “Powered by Formester”</div><div style='display:flex;align-items:center;gap:7px;font-size:10px;line-height:1.1;'><span style='font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;'>White-labeled</span><span style='color:#697586;'>Your brand only</span></div></div>",
    "icon": null
  }
]
const c3_steps = [
  {
    "id": 118,
    "title": "Build your brand kit",
    "description": "Upload your logo, choose your brand colors and fonts, and pick a theme. Or just link your website and Formester detects your logo, colors, and fonts for you.",
    "rawHtml": "<div style='display:flex;flex-direction:column;gap:9px;'><div style='display:flex;align-items:center;gap:8px;border:1px solid #eaecf0;border-radius:9px;padding:8px 10px;'><span style='width:22px;height:22px;border-radius:6px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.2'><path d='M3 7l9-4 9 4-9 4-9-4z'/><path d='M3 7v10l9 4 9-4V7'/></svg></span><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>Logo</span><span style='margin-left:auto;font-size:9.5px;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:3px 8px;line-height:1;'>Added</span></div><div style='display:flex;align-items:center;gap:8px;'><span style='width:18px;height:18px;border-radius:5px;background:#6434d0;'></span><span style='width:18px;height:18px;border-radius:5px;background:#0f0e1a;'></span><span style='width:18px;height:18px;border-radius:5px;background:#27c93f;'></span><span style='margin-left:auto;font-size:11px;color:#475467;line-height:1.1;'>Brand colors</span></div></div>",
    "image": null
  },
  {
    "id": 117,
    "title": "Apply it to your forms",
    "description": "Switch the kit on for any form and its logo, colors, and fonts update instantly. No copy-pasting styles, no per-form tweaking — the design just appears.",
    "rawHtml": "<div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;background:#fff;'><span style='font-size:12px;font-weight:600;color:#101828;line-height:1.1;'>Apply brand kit</span><span style='margin-left:auto;width:34px;height:19px;border-radius:999px;background:#6434d0;position:relative;flex-shrink:0;'><span style='position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:50%;background:#fff;'></span></span></div>",
    "image": null
  },
  {
    "id": 116,
    "title": "Stay on-brand as you grow",
    "description": "Rebrand or tweak a color later? Update the kit in one place and every form follows — so your forms are always current and consistent across the board.",
    "rawHtml": "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;font-size:12px;line-height:1.1;color:#101828;'><span style='width:18px;height:18px;border-radius:5px;background:#6434d0;flex-shrink:0;'></span>Quote form</div><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;font-size:12px;line-height:1.1;color:#101828;'><span style='width:18px;height:18px;border-radius:5px;background:#6434d0;flex-shrink:0;'></span>Survey</div><div style='display:flex;align-items:center;gap:9px;border:1px solid #eaecf0;border-radius:9px;padding:8px 11px;font-size:12px;line-height:1.1;color:#101828;'><span style='width:18px;height:18px;border-radius:5px;background:#6434d0;flex-shrink:0;'></span>Intake form</div></div>",
    "image": null
  }
]
const c3_buttons = []
const c4_title = [
  {
    "id": 4606,
    "text": "Built for teams that ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 4603,
    "text": "live and die by their brand",
    "highlight": true,
    "color": "#475467",
    "bold": false
  }
]
const c4_cards = [
  {
    "id": 467,
    "tag": "Agencies",
    "tagColor": "violet",
    "title": "Marketing agencies",
    "body": "Make every form match each client's brand — their logo, colors, and fonts — and ship professional, on-brand forms that show off your attention to detail.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:7px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:14px;height:14px;border-radius:4px;background:#6434d0;flex-shrink:0;'></span>Client A</div><div style='display:flex;align-items:center;gap:7px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:14px;height:14px;border-radius:4px;background:#27c93f;flex-shrink:0;'></span>Client B</div><div style='display:flex;align-items:center;gap:7px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:14px;height:14px;border-radius:4px;background:#f59e0b;flex-shrink:0;'></span>Client C</div></div>",
    "icon": null
  },
  {
    "id": 468,
    "tag": "Businesses",
    "tagColor": "blue",
    "title": "Small businesses",
    "body": "Keep every form neat and on-brand with your logo and colors. The kit applies your design automatically, so you get a polished look with minimal effort.",
    "mockHtml": "<div style='display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #eaecf0;border-radius:10px;padding:10px 12px;'><span style='width:22px;height:22px;border-radius:6px;background:#6434d0;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;'><svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2.4'><path d='M5 12l4 4L19 6'/></svg></span><span style='font-size:11px;font-weight:600;color:#101828;line-height:1.1;'>Polished &amp; consistent</span></div>",
    "icon": null
  },
  {
    "id": 469,
    "tag": "Education",
    "tagColor": "green",
    "title": "Educational institutions",
    "body": "Add your school colors and crest to every quiz or survey. The kit keeps all your forms looking the same — organized and recognizable to students and staff.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:7px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='font-weight:600;'>Crest &amp; colors</span><span style='margin-left:auto;font-weight:700;color:#027a48;background:#ecfdf3;border-radius:999px;padding:2px 8px;line-height:1;'>On</span></div><div style='border:1px solid #6434d0;background:#fbfaff;border-radius:8px;padding:7px 10px;font-size:11px;line-height:1.1;color:#101828;'>Course feedback</div></div>",
    "icon": null
  },
  {
    "id": 470,
    "tag": "Non-profits",
    "tagColor": "amber",
    "title": "Non-profits",
    "body": "Show your mission with forms that match your brand. Your logo and colors build trust with donors and volunteers, so every form feels connected to your cause.",
    "mockHtml": "<div style='display:flex;flex-direction:column;gap:8px;'><div style='display:flex;align-items:center;gap:8px;font-size:11px;line-height:1.1;color:#101828;'><span style='width:16px;height:16px;border-radius:50%;background:#6434d0;flex-shrink:0;'></span>Donation form</div><div style='display:flex;align-items:center;gap:7px;font-size:10px;line-height:1.1;'><span style='font-weight:700;color:#472594;background:#f0ebfa;border-radius:999px;padding:3px 8px;'>On-brand</span><span style='color:#697586;'>Builds donor trust</span></div></div>",
    "icon": null
  }
]
const c5_heading = [
  {
    "id": 4605,
    "text": "Teams keep their forms on-brand with Formester",
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
    "id": 4608,
    "text": "Branding Kit FAQs",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c6_faqList = [
  {
    "id": 2251,
    "header": "Can I fully customize the look of my forms to match my brand?",
    "body": "Yes. The Branding Kit lets you set your logo, brand colors, fonts, and theme once and apply them to every form, so each one seamlessly matches your brand's identity.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2253,
    "header": "Is it easy to use, even if I'm not tech-savvy?",
    "body": "Yes. The kit is completely no-code. Upload a logo, pick your colors and fonts from the designer, and your branding is applied — no CSS or developer required. You can even link your website to auto-detect brand elements.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2252,
    "header": "What if I want to change my branding later?",
    "body": "Update your kit anytime. Swap a logo or shift your brand colors in one place and your forms reflect the new look, so everything stays consistent and up to date.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2254,
    "header": "Can I remove the Formester watermark from my forms?",
    "body": "Yes. The Branding Kit removes the Formester watermark for a clean, fully white-labeled form that shows only your brand — building credibility and keeping the focus on you.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 2255,
    "header": "How do I ensure my forms are mobile-friendly while using custom branding?",
    "body": "Every form is automatically optimized for mobile. You can preview how your branded form looks across screen sizes to make sure it stays on-brand and easy to use on any device.",
    "body_markdown": null,
    "list": []
  }
]
const c7_buttons = [
  {
    "id": 1494,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started — It's Free",
    "type": "Primary",
    "showArrow": true
  },
  {
    "id": 1495,
    "link": "/pricing",
    "text": "See pricing",
    "type": "White",
    "showArrow": false
  }
]

useHead({
  "title": "Branding Kit | Create a Brand Kit for Online Forms",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/features/branding-kit/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-06-15T10:45:42.561Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Set up a reusable brand kit — logo, colors, fonts — once, and apply it to every form in a click. No code. Remove the Formester watermark and keep all your forms perfectly on-brand."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Branding Kit | Create a Brand Kit for Online Forms"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/features/branding-kit/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Branding Kit | Create a Brand Kit for Online Forms"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Set up a reusable brand kit — logo, colors, fonts — once, and apply it to every form in a click. No code. Remove the Formester watermark and keep all your forms perfectly on-brand."
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
      "content": "https://formester.com/features/branding-kit/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Branding Kit | Create a Brand Kit for Online Forms"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Set up a reusable brand kit — logo, colors, fonts — once, and apply it to every form in a click. No code. Remove the Formester watermark and keep all your forms perfectly on-brand."
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
      "content": [
        "form customization"
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
        "name": "Can I fully customize the look of my forms to match my brand?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. The Branding Kit lets you set your logo, brand colors, fonts, and theme once and apply them to every form, so each one seamlessly matches your brand's identity.",
          "@type": "Answer"
        }
      },
      {
        "name": "Is it easy to use, even if I'm not tech-savvy?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. The kit is completely no-code. Upload a logo, pick your colors and fonts from the designer, and your branding is applied — no CSS or developer required. You can even link your website to auto-detect brand elements.",
          "@type": "Answer"
        }
      },
      {
        "name": "What if I want to change my branding later?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Update your kit anytime. Swap a logo or shift your brand colors in one place and your forms reflect the new look, so everything stays consistent and up to date.",
          "@type": "Answer"
        }
      },
      {
        "name": "Can I remove the Formester watermark from my forms?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Yes. The Branding Kit removes the Formester watermark for a clean, fully white-labeled form that shows only your brand — building credibility and keeping the focus on you.",
          "@type": "Answer"
        }
      },
      {
        "name": "How do I ensure my forms are mobile-friendly while using custom branding?",
        "@type": "Question",
        "acceptedAnswer": {
          "text": "Every form is automatically optimized for mobile. You can preview how your branded form looks across screen sizes to make sure it stays on-brand and easy to use on any device.",
          "@type": "Answer"
        }
      }
    ]
  }
])
</script>
