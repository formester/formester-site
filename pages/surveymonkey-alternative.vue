<template>
  <div>
    <HeroTabShowcase
      description="A better alternative to SurveyMonkey with no hidden fees, full access, and complete control over your surveys."
      hideIcons
      :title="c0_title"
      :button="c0_button"
      :clickTriggers="c0_clickTriggers"
      :tabCardContent="c0_tabCardContent"
      class="page-component-item"
    />

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <Trustbadges :title="c2_title" :badges="c2_badges" class="page-component-item" />

    <FaqSection :title="c3_title" :faqList="c3_faqList" class="page-component-item" />

    <StandoutFeatureDetail :title="c4_title" :itemList="c4_itemList" class="page-component-item" />

    <section v-for="table in compareTables" :id="table.id" :key="table.id" class="alt-cmp page-component-item">
      <div class="alt-cmp__inner">
        <SectionHeader :eyebrow="table.eyebrow" :title="table.title" :description="table.description" />
        <table class="alt-cmp__table" :class="`alt-cmp__table--${table.cols.length}`">
          <thead>
            <tr>
              <th scope="col"><span class="alt-cmp__sr">Feature</span></th>
              <th v-for="col in table.cols" :key="col.key" scope="col" :class="{ 'alt-cmp__us': col.us }">
                <span class="alt-cmp__brand">{{ col.brand }}</span>
                {{ col.plan }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in table.rows" :key="row.label">
              <th scope="row">{{ row.label }}</th>
              <td
                v-for="(col, i) in table.cols"
                :key="col.key"
                :data-label="col.label || `${col.brand} ${col.plan}`"
                :class="{ 'alt-cmp__us': col.us }"
              >
                {{ row.values[i] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <FeatureDetailsSection :title="c8_title" :itemList="c8_itemList" class="page-component-item" />

    <SimpleStepsCreate :title="c9_title" :itemList="c9_itemList" class="page-component-item" />

    <TemplateSection
      :title="c10_title"
      :button="c10_button"
      :specificTemplate="c10_specificTemplate"
      class="page-component-item"
    />

    <TestimonialsV2
      description="Learn what our customers say about Formester!"
      version="home"
      :heading="c11_heading"
      :testimonials="c11_testimonials"
      class="page-component-item"
    />

    <IntegrationsShowcase
      description="Connect your forms with 1000+ apps!"
      :title="c12_title"
      class="page-component-item"
    />

    <FaqSection :title="c13_title" :faqList="c13_faqList" class="page-component-item" />

    <CallToActionSection :ctaValue="c14_ctaValue" class="page-component-item" />
  </div>
</template>

<script setup>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureDetailsSection from '@/components/features/FeatureDetailsSection.vue'
import HeroTabShowcase from '@/components/home/HeroTabShowcase/HeroTabShowcase.vue'
import IntegrationsShowcase from '@/components/v2/IntegrationsShowcase.vue'
import SectionHeader from '@/components/v2/SectionHeader.vue'
import SimpleStepsCreate from '@/components/features/SimpleStepsCreate.vue'
import StandoutFeatureDetail from '@/components/features/StandoutFeatureDetail.vue'
import TemplateSection from '@/components/features/TemplateSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_title = [
  {
    id: 3398,
    text: 'Formester, a free SurveyMonkey alternative ',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c0_button = [
  {
    id: 1103,
    link: 'https://app.formester.com/users/sign_up',
    text: 'Get Started - it’s free!',
    type: 'Primary',
    showArrow: null,
  },
]
const c0_clickTriggers = [
  {
    id: 1785,
    text: 'Free forever',
  },
  {
    id: 1786,
    text: 'Instant access',
  },
  {
    id: 1787,
    text: 'Honest pricing',
  },
]
const c0_tabCardContent = [
  {
    id: 105,
    navTitle: 'Full Branding',
    title: 'Customize without limits',
    image: {
      id: 3502,
      imageAlt: null,
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3993,
        name: '3_2 screen mockup.svg',
        alternativeText: null,
        caption: null,
        width: 644,
        height: 430,
        formats: null,
        hash: '3_2_screen_mockup_18b37388a3',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1206.8,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/3_2_screen_mockup_18b37388a3.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-19T02:23:21.027Z',
        updatedAt: '2025-09-19T02:23:21.027Z',
      },
    },
    feature: [
      {
        id: 180,
        featureTitle: 'Add logos, fonts, and layouts',
        icon: {
          id: 3531,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
      {
        id: 181,
        featureTitle: 'No upgrade traps or add-ons',
        icon: {
          id: 3530,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
      {
        id: 186,
        featureTitle: 'Build trust with your design',
        icon: {
          id: 3532,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
    ],
  },
  {
    id: 107,
    navTitle: 'Better Analytics',
    title: 'Insights you actually own',
    image: {
      id: 3504,
      imageAlt: null,
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3991,
        name: 'Automations.svg',
        alternativeText: null,
        caption: null,
        width: 644,
        height: 430,
        formats: null,
        hash: 'Automations_a701cf46ed',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1074.86,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Automations_a701cf46ed.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-19T02:23:19.856Z',
        updatedAt: '2025-09-19T02:23:19.856Z',
      },
    },
    feature: [
      {
        id: 179,
        featureTitle: 'Get reports without extra fees',
        icon: {
          id: 3534,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
      {
        id: 184,
        featureTitle: 'Export data instantly',
        icon: {
          id: 3537,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
      {
        id: 182,
        featureTitle: 'Keep full control of responses',
        icon: {
          id: 3536,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
    ],
  },
  {
    id: 104,
    navTitle: 'Real Support',
    title: 'Humans who truly help',
    image: {
      id: 3503,
      imageAlt: null,
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3994,
        name: 'CustomPDFs.svg',
        alternativeText: null,
        caption: null,
        width: 644,
        height: 430,
        formats: null,
        hash: 'Custom_PD_Fs_14c4ded17e',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1312.3,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Custom_PD_Fs_14c4ded17e.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-19T02:23:21.115Z',
        updatedAt: '2025-09-19T02:23:21.115Z',
      },
    },
    feature: [
      {
        id: 185,
        featureTitle: 'Fast responses that solve issues',
        icon: {
          id: 3535,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
      {
        id: 178,
        featureTitle: 'Available on every plan',
        icon: {
          id: 3533,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
      {
        id: 187,
        featureTitle: 'No ticket queues or delays',
        icon: {
          id: 3538,
          imageAlt: 'check icon',
          imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png',
          width: null,
          height: null,
          image: null,
        },
      },
    ],
  },
]
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    id: 3386,
    text: 'Trusted by 15000+ global users',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c2_badges = []
const c3_title = [
  {
    id: 3395,
    text: 'Why look for a SurveyMonkey alternative?',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c3_faqList = [
  {
    id: 1318,
    header: 'Hidden limits in the free plan',
    body: 'Many users find out too late that SurveyMonkey’s free plan locks their data behind paywalls. Formester gives you full access to your results, even on the free plan, with no hidden restrictions.',
    body_markdown:
      'Many users find out too late that SurveyMonkey’s free plan locks their data behind paywalls. Formester gives you full access to your results, even on the free plan, with no hidden restrictions.',
    list: [],
  },
  {
    id: 1317,
    header: 'Surprise costs and unclear pricing',
    body: 'SurveyMonkey users report unexpected charges, auto renewals, and refund issues. Formester keeps pricing simple, transparent, and predictable. What you see is what you pay.',
    body_markdown:
      'SurveyMonkey users report unexpected charges, auto renewals, and refund issues. Formester keeps pricing simple, transparent, and predictable. What you see is what you pay.',
    list: [],
  },
  {
    id: 1322,
    header: 'Customization without limits',
    body: 'SurveyMonkey restricts branding on lower tiers. Formester gives complete freedom from custom domains and fonts to fully branded layouts, even for small teams.',
    body_markdown:
      'SurveyMonkey restricts branding on lower tiers. Formester gives complete freedom from custom domains and fonts to fully branded layouts, even for small teams.',
    list: [],
  },
  {
    id: 1321,
    header: 'Account and access you control',
    body: 'No more getting locked out or losing your work. With Formester, your account, data, and permissions stay in your control with reliable access and secure authentication.',
    body_markdown:
      'No more getting locked out or losing your work. With Formester, your account, data, and permissions stay in your control with reliable access and secure authentication.',
    list: [],
  },
  {
    id: 1319,
    header: 'Customer support that actually helps',
    body: 'SurveyMonkey users complain about long waits and limited help. Formester offers real human support with fast, actionable solutions, even for free users.',
    body_markdown:
      'SurveyMonkey users complain about long waits and limited help. Formester offers real human support with fast, actionable solutions, even for free users.',
    list: [],
  },
  {
    id: 1320,
    header: 'Fair refunds and flexible plans',
    body: 'No hidden renewals or billing tricks. Formester sends renewal reminders, allows easy downgrades, and ensures refund transparency.',
    body_markdown:
      'No hidden renewals or billing tricks. Formester sends renewal reminders, allows easy downgrades, and ensures refund transparency.',
    list: [],
  },
]
const c4_title = [
  {
    id: 3390,
    text: 'Formester vs SurveyMonkey',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c4_itemList = [
  {
    id: 2160,
    title: 'Formester',
    description:
      'Formester makes survey creation simple, transparent, and powerful. Build branded surveys, use AI to speed up creation, and manage data confidently with honest pricing and responsive support.',
    description_markdown:
      'Formester makes survey creation simple, transparent, and powerful. Build branded surveys, use AI to speed up creation, and manage data confidently with honest pricing and responsive support.',
    icon: null,
    cardImage: {
      id: 3477,
      imageAlt: 'a screenshot of formester form builder',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3980,
        name: 'Landing Page.svg',
        alternativeText: null,
        caption: null,
        width: 1140,
        height: 954,
        formats: null,
        hash: 'Landing_Page_d9ed9426b5',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1586.02,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Landing_Page_d9ed9426b5.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-16T17:02:02.257Z',
        updatedAt: '2025-09-16T17:02:02.257Z',
      },
    },
  },
  {
    id: 2161,
    title: 'SurveyMonkey',
    description:
      'SurveyMonkey offers traditional survey tools but often frustrates users with locked features, hidden fees, and limited support. Growing teams face unclear limits and rigid plans.',
    description_markdown:
      'SurveyMonkey offers traditional survey tools but often frustrates users with locked features, hidden fees, and limited support. Growing teams face unclear limits and rigid plans.',
    icon: null,
    cardImage: {
      id: 3479,
      imageAlt: 'a screenshot of surveymonkey',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4026,
        name: 'a screenshot of surveymonkey.png',
        alternativeText: 'a screenshot of surveymonkey',
        caption: 'a screenshot of surveymonkey',
        width: 1140,
        height: 948,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_a_screenshot_of_surveymonkey_66e04de48c.png',
            hash: 'large_a_screenshot_of_surveymonkey_66e04de48c',
            mime: 'image/png',
            name: 'large_a screenshot of surveymonkey.png',
            path: null,
            size: 302.83,
            width: 1000,
            height: 832,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_a_screenshot_of_surveymonkey_66e04de48c.png',
            hash: 'small_a_screenshot_of_surveymonkey_66e04de48c',
            mime: 'image/png',
            name: 'small_a screenshot of surveymonkey.png',
            path: null,
            size: 101.81,
            width: 500,
            height: 416,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_a_screenshot_of_surveymonkey_66e04de48c.png',
            hash: 'medium_a_screenshot_of_surveymonkey_66e04de48c',
            mime: 'image/png',
            name: 'medium_a screenshot of surveymonkey.png',
            path: null,
            size: 188.68,
            width: 750,
            height: 624,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_a_screenshot_of_surveymonkey_66e04de48c.png',
            hash: 'thumbnail_a_screenshot_of_surveymonkey_66e04de48c',
            mime: 'image/png',
            name: 'thumbnail_a screenshot of surveymonkey.png',
            path: null,
            size: 22.7,
            width: 188,
            height: 156,
          },
        },
        hash: 'a_screenshot_of_surveymonkey_66e04de48c',
        ext: '.png',
        mime: 'image/png',
        size: 103.69,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_surveymonkey_66e04de48c.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-13T03:48:56.250Z',
        updatedAt: '2025-10-13T03:48:56.250Z',
      },
    },
  },
]
const c5_title = [
  {
    id: 3394,
    text: "What's the difference?",
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c6_title = [
  {
    id: 3391,
    text: 'What about advanced features?',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c7_title = [
  {
    id: 3392,
    text: 'Pricing comparison',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
// Comparison tables. Competitor facts from the competitor's own pricing and help pages, as of October 2026.
// Formester plans and prices from constants/plan.js and formester.com/pricing.
const compareTables = [
  {
    id: 'free-plan',
    eyebrow: 'Free plans',
    title: c5_title,
    description:
      'What you get for $0 on each platform. SurveyMonkey details are from its US pricing pages as of October 2026.',
    cols: [
      { key: 'fm-free', brand: 'Formester', plan: 'Free', us: true },
      { key: 'sm-basic', brand: 'SurveyMonkey', plan: 'Basic (free)' },
    ],
    rows: [
      { label: 'Surveys and forms', values: ['Unlimited', 'Unlimited'] },
      { label: 'Questions per survey', values: ['Unlimited', '10'] },
      { label: 'Responses', values: ['Unlimited', 'Limited, amount shown after sign-up'] },
      { label: 'Build with AI', values: ['2 forms a day', 'Included'] },
      { label: 'Skip logic', values: ['From Personal, $12/mo', 'Limited'] },
      { label: 'Accept payments', values: ['Included', 'Limited'] },
      { label: 'File upload', values: ['100 MB storage', 'Limited'] },
      { label: 'Add your logo', values: ['Included', 'Paid plans only'] },
      { label: 'Export responses', values: ['CSV export', 'Paid plans only'] },
      { label: 'Confirmation email to respondents', values: ['Included', 'Paid plans only'] },
      { label: 'Embed on your website', values: ['Included', 'Included'] },
      { label: 'Zapier integration', values: ['Included', 'Included'] },
      { label: 'Support', values: ['Live chat with the team', 'Help bot'] },
    ],
  },
  {
    id: 'advanced-features',
    eyebrow: 'Advanced features',
    title: c6_title,
    description:
      'The cheapest plan that includes each feature. Formester prices are per month, billed yearly. SurveyMonkey Standard is billed monthly; Advantage and Premier are billed yearly.',
    cols: [
      { key: 'fm', brand: 'Plan you need', plan: 'Formester', label: 'Formester', us: true },
      { key: 'sm', brand: 'Plan you need', plan: 'SurveyMonkey', label: 'SurveyMonkey' },
    ],
    rows: [
      { label: 'Remove branding', values: ['Personal, $12/mo', 'Premier, $139/mo'] },
      { label: 'Multilingual surveys', values: ['Business, $45/mo', 'Premier, $139/mo'] },
      { label: 'Accept payments', values: ['Free', 'Advantage, $39/mo'] },
      { label: 'File upload', values: ['Free', 'Advantage, $39/mo'] },
      { label: 'Custom variables (hidden fields)', values: ['Free', 'Advantage, $39/mo'] },
      { label: 'Export responses', values: ['Free', 'Standard or Advantage, from $39/mo'] },
      { label: 'Skip logic', values: ['Personal, $12/mo', 'Basic (free), limited'] },
      {
        label: 'Team accounts',
        values: ['Business, $45/mo, 25 members', 'Team Advantage, $30 per user/mo, 3+ users'],
      },
    ],
  },
  {
    id: 'pricing',
    eyebrow: 'Pricing',
    title: c7_title,
    description:
      'Paid plans side by side, in USD. SurveyMonkey prices are from surveymonkey.com/pricing as of October 2026. Formester also has a free plan with unlimited responses.',
    cols: [
      { key: 'sm-standard', brand: 'SurveyMonkey', plan: 'Standard' },
      { key: 'sm-advantage', brand: 'SurveyMonkey', plan: 'Advantage' },
      { key: 'sm-premier', brand: 'SurveyMonkey', plan: 'Premier' },
      { key: 'fm-personal', brand: 'Formester', plan: 'Personal', us: true },
      { key: 'fm-business', brand: 'Formester', plan: 'Business', us: true },
    ],
    rows: [
      { label: 'Price per month, billed yearly', values: ['Not offered', '$39', '$139', '$12', '$45'] },
      { label: 'Price per month, billed monthly', values: ['$149', 'Not offered', 'Not offered', '$13', '$49'] },
      {
        label: 'Responses included',
        values: ['1,000 per month', '15,000 per year', '40,000 per year', 'Unlimited', 'Unlimited'],
      },
      { label: 'Extra responses', values: ['$0.15 each', '$0.15 each', '$0.15 each', 'Not needed', 'Not needed'] },
      { label: 'Users', values: ['1', '1', '1', '1', '25 team members'] },
      { label: 'Remove branding', values: ['Not included', 'Not included', 'Included', 'Included', 'Included'] },
    ],
  },
]
const c8_title = [
  {
    id: 3389,
    text: 'Why You Should Choose Formester?',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c8_itemList = [
  {
    id: 2159,
    title: 'Support That Cares',
    description: 'Real people answer fast, helping you fix issues, not wait in queues.',
    description_markdown: 'Real people answer fast, helping you fix issues, not wait in queues.',
    icon: null,
    cardImage: {
      id: 3476,
      imageAlt: 'Customer support',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3941,
        name: 'Group 1321320921.png',
        alternativeText: null,
        caption: null,
        width: 1752,
        height: 1530,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_1321320921_29857e6145.png',
            hash: 'large_Group_1321320921_29857e6145',
            mime: 'image/png',
            name: 'large_Group 1321320921.png',
            path: null,
            size: 101.59,
            width: 1000,
            height: 873,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_1321320921_29857e6145.png',
            hash: 'small_Group_1321320921_29857e6145',
            mime: 'image/png',
            name: 'small_Group 1321320921.png',
            path: null,
            size: 29.67,
            width: 500,
            height: 437,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_1321320921_29857e6145.png',
            hash: 'medium_Group_1321320921_29857e6145',
            mime: 'image/png',
            name: 'medium_Group 1321320921.png',
            path: null,
            size: 62.22,
            width: 750,
            height: 655,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_1321320921_29857e6145.png',
            hash: 'thumbnail_Group_1321320921_29857e6145',
            mime: 'image/png',
            name: 'thumbnail_Group 1321320921.png',
            path: null,
            size: 6.55,
            width: 179,
            height: 156,
          },
        },
        hash: 'Group_1321320921_29857e6145',
        ext: '.png',
        mime: 'image/png',
        size: 42.5,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_1321320921_29857e6145.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-05T04:52:27.912Z',
        updatedAt: '2025-09-05T04:52:27.912Z',
      },
    },
  },
  {
    id: 2162,
    title: 'Truly Simple Survey Building',
    description: 'Create professional surveys in seconds using AI. No locked tools or hidden paywalls.',
    description_markdown:
      'Build forms in seconds using our **[AI form builder](/ai-form-generator/)**. No steep learning curve, just quick, professional results.',
    icon: null,
    cardImage: {
      id: 3478,
      imageAlt: 'Truly Simple Form Building',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3943,
        name: 'Group 1321320923.png',
        alternativeText: null,
        caption: null,
        width: 1703,
        height: 1495,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_1321320923_3ebb521448.png',
            hash: 'large_Group_1321320923_3ebb521448',
            mime: 'image/png',
            name: 'large_Group 1321320923.png',
            path: null,
            size: 160.28,
            width: 1000,
            height: 878,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_1321320923_3ebb521448.png',
            hash: 'small_Group_1321320923_3ebb521448',
            mime: 'image/png',
            name: 'small_Group 1321320923.png',
            path: null,
            size: 54.31,
            width: 500,
            height: 439,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_1321320923_3ebb521448.png',
            hash: 'medium_Group_1321320923_3ebb521448',
            mime: 'image/png',
            name: 'medium_Group 1321320923.png',
            path: null,
            size: 102.79,
            width: 750,
            height: 658,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_1321320923_3ebb521448.png',
            hash: 'thumbnail_Group_1321320923_3ebb521448',
            mime: 'image/png',
            name: 'thumbnail_Group 1321320923.png',
            path: null,
            size: 11.32,
            width: 178,
            height: 156,
          },
        },
        hash: 'Group_1321320923_3ebb521448',
        ext: '.png',
        mime: 'image/png',
        size: 65.06,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_1321320923_3ebb521448.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-05T04:52:28.041Z',
        updatedAt: '2025-09-05T04:52:28.041Z',
      },
    },
  },
  {
    id: 2158,
    title: 'Advanced Features That Matter',
    description:
      'From AI-driven logic to multi-lingual surveys, Formester gives you everything you need without hidden conditions.',
    description_markdown:
      'From AI-driven logic to multi-lingual surveys, Formester gives you everything you need without hidden conditions.',
    icon: null,
    cardImage: {
      id: 3475,
      imageAlt: 'powerful features',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3942,
        name: 'Group 1321320920.png',
        alternativeText: null,
        caption: null,
        width: 1784,
        height: 1498,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_1321320920_a85d6d58ed.png',
            hash: 'large_Group_1321320920_a85d6d58ed',
            mime: 'image/png',
            name: 'large_Group 1321320920.png',
            path: null,
            size: 121.68,
            width: 1000,
            height: 840,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_1321320920_a85d6d58ed.png',
            hash: 'small_Group_1321320920_a85d6d58ed',
            mime: 'image/png',
            name: 'small_Group 1321320920.png',
            path: null,
            size: 36.84,
            width: 500,
            height: 420,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_1321320920_a85d6d58ed.png',
            hash: 'medium_Group_1321320920_a85d6d58ed',
            mime: 'image/png',
            name: 'medium_Group 1321320920.png',
            path: null,
            size: 76.74,
            width: 750,
            height: 630,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_1321320920_a85d6d58ed.png',
            hash: 'thumbnail_Group_1321320920_a85d6d58ed',
            mime: 'image/png',
            name: 'thumbnail_Group 1321320920.png',
            path: null,
            size: 8.29,
            width: 186,
            height: 156,
          },
        },
        hash: 'Group_1321320920_a85d6d58ed',
        ext: '.png',
        mime: 'image/png',
        size: 54.13,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_1321320920_a85d6d58ed.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-05T04:52:27.985Z',
        updatedAt: '2025-09-05T04:52:27.985Z',
      },
    },
  },
  {
    id: 2163,
    title: 'Fair, Transparent Pricing',
    description: 'No surprise renewals or upgrade traps. Get clear, upfront pricing every time.',
    description_markdown:
      'Get powerful features at prices that make sense. No hidden fees, no inflated plans. You pay only for the value you use. **[See pricing](/pricing/)**...',
    icon: null,
    cardImage: {
      id: 3480,
      imageAlt: 'business growth',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3944,
        name: 'Group 1321320922.png',
        alternativeText: null,
        caption: null,
        width: 1617,
        height: 1410,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_1321320922_c99ac0d65a.png',
            hash: 'large_Group_1321320922_c99ac0d65a',
            mime: 'image/png',
            name: 'large_Group 1321320922.png',
            path: null,
            size: 315.52,
            width: 1000,
            height: 872,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_1321320922_c99ac0d65a.png',
            hash: 'small_Group_1321320922_c99ac0d65a',
            mime: 'image/png',
            name: 'small_Group 1321320922.png',
            path: null,
            size: 106.47,
            width: 500,
            height: 436,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_1321320922_c99ac0d65a.png',
            hash: 'medium_Group_1321320922_c99ac0d65a',
            mime: 'image/png',
            name: 'medium_Group 1321320922.png',
            path: null,
            size: 197.41,
            width: 750,
            height: 654,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_1321320922_c99ac0d65a.png',
            hash: 'thumbnail_Group_1321320922_c99ac0d65a',
            mime: 'image/png',
            name: 'thumbnail_Group 1321320922.png',
            path: null,
            size: 21.76,
            width: 179,
            height: 156,
          },
        },
        hash: 'Group_1321320922_c99ac0d65a',
        ext: '.png',
        mime: 'image/png',
        size: 189.72,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_1321320922_c99ac0d65a.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-05T04:52:28.999Z',
        updatedAt: '2025-09-05T04:52:28.999Z',
      },
    },
  },
]
const c9_title = [
  {
    id: 3393,
    text: 'How to switch?',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c9_itemList = [
  {
    id: 2166,
    title: 'Create with AI',
    description: 'Build complete surveys instantly using Formester’s AI survey builder.',
    description_markdown: 'Build complete surveys instantly using Formester’s AI survey builder.',
    icon: null,
    cardImage: {
      id: 3482,
      imageAlt: "a screenshot of Formester's form builder",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3913,
        name: 'Group 105.png',
        alternativeText: null,
        caption: null,
        width: 1364,
        height: 1042,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_105_5b6d5586e0.png',
            hash: 'large_Group_105_5b6d5586e0',
            mime: 'image/png',
            name: 'large_Group 105.png',
            path: null,
            size: 72.08,
            width: 1000,
            height: 764,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_105_5b6d5586e0.png',
            hash: 'small_Group_105_5b6d5586e0',
            mime: 'image/png',
            name: 'small_Group 105.png',
            path: null,
            size: 27.9,
            width: 500,
            height: 382,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_105_5b6d5586e0.png',
            hash: 'medium_Group_105_5b6d5586e0',
            mime: 'image/png',
            name: 'medium_Group 105.png',
            path: null,
            size: 49.34,
            width: 750,
            height: 573,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_105_5b6d5586e0.png',
            hash: 'thumbnail_Group_105_5b6d5586e0',
            mime: 'image/png',
            name: 'thumbnail_Group 105.png',
            path: null,
            size: 8.93,
            width: 204,
            height: 156,
          },
        },
        hash: 'Group_105_5b6d5586e0',
        ext: '.png',
        mime: 'image/png',
        size: 18.97,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_105_5b6d5586e0.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-03T01:28:30.672Z',
        updatedAt: '2025-09-03T01:28:30.672Z',
      },
    },
  },
  {
    id: 2165,
    title: 'Customize',
    description: 'Match your brand with fonts, colors, layouts, and advanced logic.',
    description_markdown: 'Match your brand with fonts, colors, layouts, and advanced logic.',
    icon: null,
    cardImage: {
      id: 3481,
      imageAlt: "a screenshot of Formester's form builder",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3919,
        name: 'Group 103.png',
        alternativeText: null,
        caption: null,
        width: 1364,
        height: 1042,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_103_fbf4745295.png',
            hash: 'large_Group_103_fbf4745295',
            mime: 'image/png',
            name: 'large_Group 103.png',
            path: null,
            size: 206.49,
            width: 1000,
            height: 764,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_103_fbf4745295.png',
            hash: 'small_Group_103_fbf4745295',
            mime: 'image/png',
            name: 'small_Group 103.png',
            path: null,
            size: 68.18,
            width: 500,
            height: 382,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_103_fbf4745295.png',
            hash: 'medium_Group_103_fbf4745295',
            mime: 'image/png',
            name: 'medium_Group 103.png',
            path: null,
            size: 129.6,
            width: 750,
            height: 573,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_103_fbf4745295.png',
            hash: 'thumbnail_Group_103_fbf4745295',
            mime: 'image/png',
            name: 'thumbnail_Group 103.png',
            path: null,
            size: 19.27,
            width: 204,
            height: 156,
          },
        },
        hash: 'Group_103_fbf4745295',
        ext: '.png',
        mime: 'image/png',
        size: 57.98,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_103_fbf4745295.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-03T01:28:38.635Z',
        updatedAt: '2025-09-03T01:28:38.635Z',
      },
    },
  },
  {
    id: 2164,
    title: 'Share & Embed',
    description: 'Publish anywhere with links, embeds, or custom domains.\n.',
    description_markdown: 'Publish anywhere with links, embeds, or custom domains\n.',
    icon: null,
    cardImage: {
      id: 3483,
      imageAlt: "a screenshot of Formester's form builder",
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3915,
        name: 'Group 104.png',
        alternativeText: null,
        caption: null,
        width: 1364,
        height: 1042,
        formats: {
          large: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_104_2494059987.png',
            hash: 'large_Group_104_2494059987',
            mime: 'image/png',
            name: 'large_Group 104.png',
            path: null,
            size: 102.29,
            width: 1000,
            height: 764,
          },
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_104_2494059987.png',
            hash: 'small_Group_104_2494059987',
            mime: 'image/png',
            name: 'small_Group 104.png',
            path: null,
            size: 37.21,
            width: 500,
            height: 382,
          },
          medium: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_104_2494059987.png',
            hash: 'medium_Group_104_2494059987',
            mime: 'image/png',
            name: 'medium_Group 104.png',
            path: null,
            size: 67,
            width: 750,
            height: 573,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_104_2494059987.png',
            hash: 'thumbnail_Group_104_2494059987',
            mime: 'image/png',
            name: 'thumbnail_Group 104.png',
            path: null,
            size: 10.96,
            width: 204,
            height: 156,
          },
        },
        hash: 'Group_104_2494059987',
        ext: '.png',
        mime: 'image/png',
        size: 24.85,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_104_2494059987.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-09-03T01:28:32.911Z',
        updatedAt: '2025-09-03T01:28:32.911Z',
      },
    },
  },
]
const c10_title = [
  {
    id: 3396,
    text: 'Start with 500+ free templates',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c10_button = {
  id: 1102,
  link: '/templates/',
  text: 'Explore more...',
  type: 'Primary',
  showArrow: null,
}
const c10_specificTemplate = [
  {
    id: 1783,
    text: 'general-job-application-form-17390',
  },
  {
    id: 1782,
    text: 'customer-feedback-form-31840',
  },
  {
    id: 1784,
    text: 'art-class-registration-form-29336',
  },
]
const c11_heading = [
  {
    id: 3387,
    text: 'User stories',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c11_testimonials = [
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
    id: 39,
    name: 'Alex',
    position: 'Customer Success Manager',
    organization: 'Orion Growth Partners',
    comment:
      "Tried like 4 quiz tools for our lead gen funnel before this and honestly this is the only one I didn't end up hating. AI did most of the work and the customization actually works.",
    createdAt: '2025-06-29T23:32:05.746Z',
    updatedAt: '2026-05-11T05:16:55.955Z',
    publishedAt: '2025-06-29T23:32:07.219Z',
    companyLogo: {
      id: 3647,
      imageAlt: 'logo of orion',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4092,
        name: 'logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x.png',
        alternativeText: null,
        caption: null,
        width: 200,
        height: 86,
        formats: null,
        hash: 'logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd',
        ext: '.png',
        mime: 'image/png',
        size: 3,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-29T17:02:25.502Z',
        updatedAt: '2025-10-29T17:02:25.502Z',
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
    id: 38,
    name: 'Bob',
    position: 'Senior Web Developer',
    organization: 'PixelWorks Innovations',
    comment:
      'We have been in business for over thirty years and were never happy with our forms until we found Formester. Now, we have clients actually enjoying completing and submitting online forms. If you are looking for a platform to create online forms... look no further – Formester is the best. Your clients will thank you!',
    createdAt: '2025-06-29T23:31:21.818Z',
    updatedAt: '2025-10-31T04:02:08.868Z',
    publishedAt: '2025-06-29T23:31:27.535Z',
    companyLogo: {
      id: 3651,
      imageAlt: 'pixelworks-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4093,
        name: 'pixelworks-logo.png',
        alternativeText: 'pixelworks-logo',
        caption: 'pixelworks-logo',
        width: 200,
        height: 35,
        formats: null,
        hash: 'pixelworks_logo_4c4b983d1f',
        ext: '.png',
        mime: 'image/png',
        size: 1.31,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/pixelworks_logo_4c4b983d1f.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-31T04:00:11.709Z',
        updatedAt: '2025-10-31T04:00:11.709Z',
      },
    },
  },
  {
    id: 37,
    name: 'Chris',
    position: 'Operations Lead',
    organization: 'SummitCloud Software',
    comment:
      'Very intuitive and the surveys look genuinely professional out of the box. Most importantly, I requested a custom rating scale and they shipped it within hours. Stellar support that is hands-down better than the Jotform.',
    createdAt: '2025-06-29T23:30:38.521Z',
    updatedAt: '2026-05-11T05:18:51.458Z',
    publishedAt: '2025-06-29T23:30:40.007Z',
    companyLogo: {
      id: 3650,
      imageAlt: 'summit-logo',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 4096,
        name: 'summit-logo.png',
        alternativeText: 'summit-logo',
        caption: 'summit-logo',
        width: 200,
        height: 26,
        formats: null,
        hash: 'summit_logo_f5bfb8ce29',
        ext: '.png',
        mime: 'image/png',
        size: 1.42,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/summit_logo_f5bfb8ce29.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-10-31T04:00:11.826Z',
        updatedAt: '2025-10-31T04:00:11.826Z',
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
const c12_title = [
  {
    id: 3388,
    text: 'Automate workflows like a pro!',
    highlight: false,
    color: '#475467',
    bold: false,
  },
]
const c13_title = [
  {
    id: 3397,
    text: 'FAQs',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c13_faqList = [
  {
    id: 1326,
    header: '1. Is Formester really free, or will I have to pay later to see my data?',
    body: 'Yes, Formester’s free plan is truly free. You can create, share, and view all your survey responses without paying. There are no hidden limits or surprise paywalls that block your data after collecting responses. You only upgrade when you choose to access advanced features, never to unlock basic ones.',
    body_markdown:
      'Yes, Formester’s free plan is truly free. You can create, share, and view all your survey responses without paying. There are no hidden limits or surprise paywalls that block your data after collecting responses. You only upgrade when you choose to access advanced features, never to unlock basic ones.',
    list: [],
  },
  {
    id: 1323,
    header: '2. How is Formester’s pricing different from SurveyMonkey?',
    body: 'Formester uses transparent, flat pricing. You know exactly what you will pay each month, and every plan clearly shows what is included. There are no auto renewals without reminders, no forced upgrades, and no unexpected charges. What you see is exactly what you get.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1327,
    header: '3. Will I lose access to my survey data if I cancel or downgrade my plan?',
    body: 'No. You will always keep access to your existing data, even if you move to a lower plan or cancel your subscription. Formester never locks or deletes your responses. You can export everything anytime.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1325,
    header: '4. Does Formester limit the number of responses or questions on the free plan?',
    body: 'No. Unlike SurveyMonkey, which restricts viewing more than a few responses, Formester lets you collect and review unlimited responses on the free plan. You get full visibility of your results at all times.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1324,
    header: '5. How reliable is Formester’s customer support?',
    body: 'Formester offers direct, human support through chat and email. Our average response time is under a few hours, and we help users on every plan — not just premium customers. You’ll always get fast, actionable help.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1328,
    header: '6. What if I need advanced survey logic or analytics?',
    body: 'Conditional logic, skip rules, and branching are included from the Personal plan, at $12 a month billed yearly. Every plan, including Free, gets form analytics, drop-off analysis, and CSV export of your responses.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1329,
    header: '7. Will I get reminders before renewals or plan changes?',
    body: 'Yes. Formester sends clear reminders before renewals. You can change, pause, or downgrade your plan anytime from your dashboard. There are no surprise renewals or hidden renewal clauses.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1331,
    header: '8. What makes Formester better for teams or organizations?',
    body: 'Formester supports real-time collaboration, so teams can build, review, and analyze surveys together. You can manage permissions, share access, and co-edit surveys without juggling multiple accounts.',
    body_markdown: null,
    list: [],
  },
  {
    id: 1330,
    header: '9. Does Formester offer refunds if I make a mistake in selecting a plan?',
    body: 'Yes. If you accidentally select the wrong plan or are not satisfied, our support team can process a fair refund. We believe in honest pricing and transparent billing.',
    body_markdown: null,
    list: [],
  },
]
const c14_ctaValue = {
  id: 67,
  description: 'Get access to advanced AI, unlimited forms & more. See pricing for more details.',
  type: 'default',
  createdAt: '2024-11-04T07:07:43.916Z',
  updatedAt: '2025-06-12T18:47:31.840Z',
  publishedAt: '2024-11-04T07:08:18.018Z',
  locale: 'en',
  title: [
    {
      id: 393,
      text: 'Ready to build your perfect form?',
      highlight: false,
      color: null,
      bold: null,
    },
  ],
  buttons: [
    {
      id: 338,
      link: 'https://app.formester.com/users/sign_up',
      text: 'Get Started–It’s Free!',
      type: 'Primary',
      showArrow: null,
    },
  ],
  localizations: [],
}

useHead({
  title: 'Formester: a free alternative to SurveyMonkey',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/surveymonkey-alternative/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2025-10-13T06:11:11.881Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Tired of SurveyMonkey’s limits and hidden costs? Switch to Formester for full data access, transparent pricing, and better support on every plan.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Formester: a free alternative to SurveyMonkey',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/surveymonkey-alternative/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Formester: a free alternative to SurveyMonkey',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Tired of SurveyMonkey’s limits and hidden costs? Switch to Formester for full data access, transparent pricing, and better support on every plan.',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png',
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Formester Logo',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://formester.com/surveymonkey-alternative/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Formester: a free alternative to SurveyMonkey',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Tired of SurveyMonkey’s limits and hidden costs? Switch to Formester for full data access, transparent pricing, and better support on every plan.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png',
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
      content: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ['survey maker', 'surveymonkey alternative', 'alternative to surveymonkey', 'surveymonkey'],
    },
  ],
})
</script>

<style scoped>
.alt-cmp {
  background: #fff;
  padding: var(--space-16) var(--space-6);
}
.alt-cmp__inner {
  max-width: 1040px;
  margin: 0 auto;
}
.alt-cmp__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
.alt-cmp__table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--gray-200, #eaecf0);
  border-radius: 12px;
  overflow: hidden;
  font-size: 15px;
}
.alt-cmp__table--2 {
  max-width: 880px;
  margin: 0 auto;
}
.alt-cmp__table th,
.alt-cmp__table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--gray-200, #eaecf0);
  color: var(--gray-700, #344054);
  vertical-align: top;
}
.alt-cmp__table tbody tr:last-child th,
.alt-cmp__table tbody tr:last-child td {
  border-bottom: 0;
}
.alt-cmp__table thead th {
  background: var(--gray-50, #f9fafb);
  font-weight: 600;
  color: var(--gray-900, #101828);
}
.alt-cmp__table tbody th {
  font-weight: 500;
  color: var(--gray-900, #101828);
  width: 28%;
}
.alt-cmp__brand {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-500, #697586);
}
.alt-cmp__table .alt-cmp__us {
  background: #faf7ff;
}
.alt-cmp__table thead .alt-cmp__us {
  background: #f0ebfa;
  color: #6434d0;
}

@media (max-width: 720px) {
  .alt-cmp {
    padding: var(--space-12) var(--space-4);
  }
  .alt-cmp__table,
  .alt-cmp__table tbody,
  .alt-cmp__table tr,
  .alt-cmp__table th,
  .alt-cmp__table td {
    display: block;
    width: 100%;
  }
  .alt-cmp__table {
    border: 0;
    border-radius: 0;
  }
  .alt-cmp__table thead {
    display: none;
  }
  .alt-cmp__table tbody tr {
    border: 1px solid var(--gray-200, #eaecf0);
    border-radius: 12px;
    margin-bottom: 12px;
    overflow: hidden;
  }
  .alt-cmp__table tbody th {
    width: 100%;
    background: var(--gray-50, #f9fafb);
    padding: 10px 14px;
  }
  .alt-cmp__table td {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 14px;
    text-align: right;
  }
  .alt-cmp__table td::before {
    content: attr(data-label);
    color: var(--gray-500, #697586);
    text-align: left;
    flex-shrink: 0;
  }
  .alt-cmp__table tbody tr:last-child td {
    border-bottom: 1px solid var(--gray-200, #eaecf0);
  }
  .alt-cmp__table tbody tr td:last-child {
    border-bottom: 0;
  }
}
</style>
