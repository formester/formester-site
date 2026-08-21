<template>
  <div>
    <HeroCenteredDark
      description="Use Formester to build online compliance forms designed for regulated teams in finance, healthcare, insurance, and legal."
      :title="c0_title"
      :button="c0_button"
      :clickTriggers="c0_clickTriggers"
      :background="c0_background"
      class="page-component-item"
    />

    <TrustSeals :title="c1_title" :logos="c1_logos" class="page-component-item" />

    <Trustbadges :title="c2_title" :badges="c2_badges" class="page-component-item" />

    <ThreeColBenefits :title="c3_title" :itemList="c3_itemList" class="page-component-item" />

    <FeatureShowcase :steps="false" :title="c4_title" :itemList="c4_itemList" class="page-component-item" />

    <SimpleStepsCreate :title="c5_title" :itemList="c5_itemList" class="page-component-item" />

    <FeatureDetailsSection :title="c6_title" :itemList="c6_itemList" class="page-component-item" />

    <CallToActionSection :ctaValue="c7_ctaValue" class="page-component-item" />

    <FaqSection :title="c8_title" :faqList="c8_faqList" class="page-component-item" />
  </div>
</template>

<script setup>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureDetailsSection from '@/components/features/FeatureDetailsSection.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import HeroCenteredDark from '@/components/strapi/HeroCenteredDark.vue'
import SimpleStepsCreate from '@/components/features/SimpleStepsCreate.vue'
import ThreeColBenefits from '@/components/features/ThreeColBenefits.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_title = [
  {
    id: 2196,
    text: 'Formester for Compliance: Stay Audit-Ready Without the Paperwork',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c0_button = {
  id: 1033,
  link: 'https://app.formester.com/users/sign_up',
  text: 'Create Form for Free',
  type: 'Primary',
  showArrow: null,
}
const c0_clickTriggers = [
  {
    id: 1659,
    text: 'Automate Compliance',
  },
  {
    id: 1658,
    text: 'Secure Everything',
  },
  {
    id: 1657,
    text: 'Remove Paperwork',
  },
]
const c0_background = {
  id: 2551,
  imageAlt: 'background-texture',
  imageUrl: null,
  width: null,
  height: null,
  image: {
    id: 2433,
    name: '08.svg',
    alternativeText: null,
    caption: null,
    width: 1920,
    height: 1920,
    formats: null,
    hash: '08_543ec28a0f',
    ext: '.svg',
    mime: 'image/svg+xml',
    size: 35.46,
    url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/08_543ec28a0f.svg',
    previewUrl: null,
    provider: 'aws-s3',
    provider_metadata: null,
    createdAt: '2024-11-19T17:29:17.338Z',
    updatedAt: '2024-11-19T17:29:17.338Z',
  },
}
const c1_title = []
const c1_logos = []
const c2_title = []
const c2_badges = []
const c3_title = [
  {
    id: 2194,
    text: 'Stay Compliant Without the Chaos',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c3_itemList = [
  {
    id: 1998,
    title: 'Secure Forms',
    description: 'Collect data with encryption and full access control.\n\n',
    description_markdown: 'Collect data with encryption and full access control.\n\n',
    icon: null,
    cardImage: {
      id: 2549,
      imageAlt: 'form icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2311,
        name: 'form icon.svg',
        alternativeText: 'form icon',
        caption: 'form icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'robust_analytics_c6794dd4e0',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.06,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_c6794dd4e0.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:35:03.804Z',
        updatedAt: '2025-04-01T07:48:54.716Z',
      },
    },
  },
  {
    id: 2002,
    title: 'Smart Routing',
    description: 'Send responses to the right team automatically.\n\n',
    description_markdown: 'Send responses to the right team automatically.\n\n',
    icon: null,
    cardImage: {
      id: 2547,
      imageAlt: 'analytics icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2313,
        name: 'robust-analytics-1.svg',
        alternativeText: 'analytics icon',
        caption: 'analytics icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'robust_analytics_1_60c516b608',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 0.86,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_1_60c516b608.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:35:22.235Z',
        updatedAt: '2024-12-11T03:15:12.399Z',
      },
    },
  },
  {
    id: 1992,
    title: 'Reduce Errors',
    description: 'Use prefilled fields to keep data clean.\n\n',
    description_markdown: 'Use prefilled fields to keep data clean.',
    icon: null,
    cardImage: {
      id: 2545,
      imageAlt: 'click icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2314,
        name: 'click icon.svg',
        alternativeText: 'click icon',
        caption: 'click icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'payment_processing_a464a1deda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.28,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/payment_processing_a464a1deda.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:35:29.676Z',
        updatedAt: '2025-01-20T09:58:17.564Z',
      },
    },
  },
  {
    id: 2005,
    title: 'Control Access',
    description: 'Limit views, edits, and set submission rules.',
    description_markdown: 'Limit views, edits, and set submission rules.',
    icon: null,
    cardImage: {
      id: 2557,
      imageAlt: 'control icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2331,
        name: 'payment-processing.svg',
        alternativeText: 'control icon',
        caption: 'control icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'payment_processing_27a9688c68',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.03,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/payment_processing_27a9688c68.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:59:02.931Z',
        updatedAt: '2025-07-15T21:14:46.840Z',
      },
    },
  },
  {
    id: 2006,
    title: 'Track Submissions',
    description: 'Log every action with full time stamps.',
    description_markdown: 'Log every action with full time stamps.\n\n',
    icon: null,
    cardImage: {
      id: 2555,
      imageAlt: 'star icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2309,
        name: 'star icon.svg',
        alternativeText: 'star icon',
        caption: 'star icon',
        width: 69,
        height: 69,
        formats: null,
        hash: 'flexible_793b3e2dce',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 2.02,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/flexible_793b3e2dce.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:34:35.387Z',
        updatedAt: '2025-03-04T03:24:45.227Z',
      },
    },
  },
  {
    id: 2007,
    title: 'Go Paperless',
    description: 'Move all compliance tasks fully online.',
    description_markdown: 'Move all compliance tasks fully online.',
    icon: null,
    cardImage: {
      id: 2556,
      imageAlt: 'data icon',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 2317,
        name: 'data icon.svg',
        alternativeText: 'data icon',
        caption: 'data icon',
        width: 68,
        height: 68,
        formats: null,
        hash: 'Integrate_1c339fe8ed',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 1.64,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Integrate_1c339fe8ed.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2024-11-05T18:39:31.563Z',
        updatedAt: '2025-01-20T09:58:26.735Z',
      },
    },
  },
]
const c4_title = [
  {
    id: 2193,
    text: 'Do More Than Just Collect Data',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c4_itemList = [
  {
    id: 1993,
    title: 'Collect Policy Acknowledgements',
    description:
      'Need employees to confirm a new code of conduct or policy change? Formester lets you collect acknowledgments digitally, track who has signed, and store it all for audits.',
    description_markdown:
      'Need employees to confirm a new code of conduct or policy change? Formester lets you collect acknowledgments digitally, track who has signed, and store it all for audits.',
    icon: null,
    cardImage: {
      id: 2539,
      imageAlt: 'an image of policy acknowledgements',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3695,
        name: 'an image of policy acknowledgements.png',
        alternativeText: 'an image of policy acknowledgements',
        caption: 'an image of policy acknowledgements',
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_5_1_314199c2f8.png',
            hash: 'small_5_1_314199c2f8',
            mime: 'image/png',
            name: 'small_5 1.png',
            path: null,
            size: 294.68,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_5_1_314199c2f8.png',
            hash: 'thumbnail_5_1_314199c2f8',
            mime: 'image/png',
            name: 'thumbnail_5 1.png',
            path: null,
            size: 62.23,
            width: 204,
            height: 156,
          },
        },
        hash: '5_1_314199c2f8',
        ext: '.png',
        mime: 'image/png',
        size: 114.94,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/5_1_314199c2f8.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T06:48:16.239Z',
        updatedAt: '2025-07-15T06:52:32.765Z',
      },
    },
  },
  {
    id: 1989,
    title: 'Run Internal Risk Assessments',
    description:
      "Whether you're in healthcare or finance, you can create simple risk checklists and collect responses from your team fast, no email threads needed.",
    description_markdown:
      "Whether you're in healthcare or finance, you can create simple risk checklists and collect responses from your team fast, no email threads needed.",
    icon: null,
    cardImage: {
      id: 2537,
      imageAlt: 'an image of internal risk assessment',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3694,
        name: 'an image of internal risk assessment.png',
        alternativeText: 'an image of internal risk assessment',
        caption: 'an image of internal risk assessment',
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_1_1_15a48e9c35.png',
            hash: 'small_1_1_15a48e9c35',
            mime: 'image/png',
            name: 'small_1 1.png',
            path: null,
            size: 351.25,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_1_1_15a48e9c35.png',
            hash: 'thumbnail_1_1_15a48e9c35',
            mime: 'image/png',
            name: 'thumbnail_1 1.png',
            path: null,
            size: 73.19,
            width: 204,
            height: 156,
          },
        },
        hash: '1_1_15a48e9c35',
        ext: '.png',
        mime: 'image/png',
        size: 128.17,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/1_1_15a48e9c35.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T06:48:16.215Z',
        updatedAt: '2025-07-15T06:52:11.916Z',
      },
    },
  },
  {
    id: 2001,
    title: 'Manage Vendor Compliance',
    description:
      'Formester helps supply chain compliance teams send questionnaires, request documents, and track vendor responses securely.\n\n',
    description_markdown:
      'Formester helps supply chain compliance teams send questionnaires, request documents, and track vendor responses securely.\n\n',
    icon: null,
    cardImage: {
      id: 2540,
      imageAlt: 'an image of vendor compliance',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3693,
        name: 'an image of vendor compliance.png',
        alternativeText: 'an image of vendor compliance',
        caption: 'an image of vendor compliance',
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_2_1_c1f3219045.png',
            hash: 'small_2_1_c1f3219045',
            mime: 'image/png',
            name: 'small_2 1.png',
            path: null,
            size: 248.28,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_2_1_c1f3219045.png',
            hash: 'thumbnail_2_1_c1f3219045',
            mime: 'image/png',
            name: 'thumbnail_2 1.png',
            path: null,
            size: 49.97,
            width: 204,
            height: 156,
          },
        },
        hash: '2_1_c1f3219045',
        ext: '.png',
        mime: 'image/png',
        size: 109.53,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/2_1_c1f3219045.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T06:48:15.726Z',
        updatedAt: '2025-07-15T06:51:52.305Z',
      },
    },
  },
  {
    id: 1994,
    title: 'KYC and Onboarding',
    description:
      'Create branded, secure KYC compliance forms. Collect ID documents, check risk levels, and stay ready for audits without printing or scanning.',
    description_markdown:
      'Create branded, secure KYC compliance forms. Collect ID documents, check risk levels, and stay ready for audits without printing or scanning.',
    icon: null,
    cardImage: {
      id: 2541,
      imageAlt: 'an image of kyc onboarding',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3697,
        name: 'an image of kyc onboarding.png',
        alternativeText: 'an image of kyc onboarding',
        caption: 'an image of kyc onboarding',
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_3_1_d249c06f89.png',
            hash: 'small_3_1_d249c06f89',
            mime: 'image/png',
            name: 'small_3 1.png',
            path: null,
            size: 338.01,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_3_1_d249c06f89.png',
            hash: 'thumbnail_3_1_d249c06f89',
            mime: 'image/png',
            name: 'thumbnail_3 1.png',
            path: null,
            size: 69,
            width: 204,
            height: 156,
          },
        },
        hash: '3_1_d249c06f89',
        ext: '.png',
        mime: 'image/png',
        size: 154.11,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/3_1_d249c06f89.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T06:48:17.119Z',
        updatedAt: '2025-07-15T06:51:36.476Z',
      },
    },
  },
  {
    id: 1990,
    title: 'Track Training Completion',
    description:
      'Build a quick form that asks employees to confirm they’ve completed mandatory compliance or safety training. Track and export the results easily.',
    description_markdown:
      'Build a quick form that asks employees to confirm they’ve completed mandatory compliance or safety training. Track and export the results easily.',
    icon: null,
    cardImage: {
      id: 2538,
      imageAlt: 'an image of employee training',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3696,
        name: 'an image of employee training.png',
        alternativeText: 'an image of employee training',
        caption: 'an image of employee training',
        width: 682,
        height: 521,
        formats: {
          small: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/small_6_1_951c57f01f.png',
            hash: 'small_6_1_951c57f01f',
            mime: 'image/png',
            name: 'small_6 1.png',
            path: null,
            size: 445.28,
            width: 500,
            height: 382,
          },
          thumbnail: {
            ext: '.png',
            url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_6_1_951c57f01f.png',
            hash: 'thumbnail_6_1_951c57f01f',
            mime: 'image/png',
            name: 'thumbnail_6 1.png',
            path: null,
            size: 87.96,
            width: 204,
            height: 156,
          },
        },
        hash: '6_1_951c57f01f',
        ext: '.png',
        mime: 'image/png',
        size: 178.77,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/6_1_951c57f01f.png',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T06:48:16.597Z',
        updatedAt: '2025-07-15T06:51:19.402Z',
      },
    },
  },
]
const c5_title = [
  {
    id: 2191,
    text: 'How it Works',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c5_itemList = [
  {
    id: 1986,
    title: 'Start with a Ready-Made Form',
    description:
      'Pick a template or use AI to generate a form instantly, whether it’s for vendor due diligence, risk checklists, or safety audits.',
    description_markdown:
      'Pick a template or use AI to generate a form instantly, whether it’s for vendor due diligence, risk checklists, or safety audits.',
    icon: null,
    cardImage: {
      id: 2534,
      imageAlt: 'a screenshot of creating a form in formester',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3291,
        name: 'a screenshot of creating a form in formester.svg',
        alternativeText: 'a screenshot of creating a form in formester',
        caption: 'a screenshot of creating a form in formester',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_1107_f0ad3e3e36',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 62.86,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_1107_f0ad3e3e36.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-04-11T04:48:33.590Z',
        updatedAt: '2025-04-11T04:49:48.338Z',
      },
    },
  },
  {
    id: 1987,
    title: 'Customize with Smart Fields',
    description: 'Add dropdowns, file uploads, date pickers, and logic to guide users. No code or tech team needed.',
    description_markdown:
      'Add dropdowns, file uploads, date pickers, and logic to guide users. No code or tech team needed.',
    icon: null,
    cardImage: {
      id: 2535,
      imageAlt: 'a screenshot of adding form fields in formester',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3293,
        name: 'a screenshot of adding form fields in formester.svg',
        alternativeText: 'a screenshot of adding form fields in formester',
        caption: 'a screenshot of adding form fields in formester',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_1106_50f026cfa0',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 64.25,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_1106_50f026cfa0.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-04-11T04:48:34.561Z',
        updatedAt: '2025-04-11T04:49:35.383Z',
      },
    },
  },
  {
    id: 1988,
    title: 'Share and Track Submissions',
    description:
      'Send the form via link or email, or embed it in your portal. Track every submission with time stamps and real-time updates.',
    description_markdown:
      'Send the form via link or email, or embed it in your portal. Track every submission with time stamps and real-time updates.',
    icon: null,
    cardImage: {
      id: 2536,
      imageAlt: 'a screenshot of sharing in formester',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3292,
        name: 'a screenshot of sharing in formester.svg',
        alternativeText: 'a screenshot of sharing in formester',
        caption: 'a screenshot of sharing in formester',
        width: 682,
        height: 521,
        formats: null,
        hash: 'Component_1108_42d6811879',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 189.92,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_1108_42d6811879.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-04-11T04:48:34.394Z',
        updatedAt: '2025-04-11T04:49:17.637Z',
      },
    },
  },
]
const c6_title = [
  {
    id: 2195,
    text: 'Built for Compliance Teams Like Yours',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c6_itemList = [
  {
    id: 1991,
    title: 'Compliance Officers',
    description: 'Create, track, and manage forms without delays or confusion.',
    description_markdown: ' Easily collect client info, check risk levels, and stay on top of rules, all in one place.',
    icon: null,
    cardImage: {
      id: 2542,
      imageAlt: 'an illustration of compliance officer',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3699,
        name: 'an illustration of compliance officer.svg',
        alternativeText: 'an illustration of compliance officer',
        caption: 'an illustration of compliance officer',
        width: 682,
        height: 500,
        formats: null,
        hash: 'Group_94_a472a97e83',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 157.48,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_94_a472a97e83.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T07:03:31.295Z',
        updatedAt: '2025-07-15T07:04:36.930Z',
      },
    },
  },
  {
    id: 1997,
    title: 'Legal & Risk Teams',
    description: 'Collect acknowledgments, approvals, and reports securely.',
    description_markdown: ' Make loan applications faster with step-by-step forms and quick document uploads.',
    icon: null,
    cardImage: {
      id: 2543,
      imageAlt: 'an illustration of legal teams',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3700,
        name: 'an illustration of teams.svg',
        alternativeText: 'an illustration of teams',
        caption: 'an illustration of teams',
        width: 682,
        height: 500,
        formats: null,
        hash: 'Group_93_81af446f49',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 164,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_93_81af446f49.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T07:03:31.360Z',
        updatedAt: '2025-07-15T23:58:36.933Z',
      },
    },
  },
  {
    id: 1996,
    title: 'Finance & Audit Teams',
    description: 'Build digital forms for audits, transactions, and documentation in one place.',
    description_markdown: 'Build digital forms for audits, transactions, and documentation in one place.\n\n',
    icon: null,
    cardImage: {
      id: 2544,
      imageAlt: 'an illustration of finance team',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3701,
        name: 'an illustration of finance team.svg',
        alternativeText: 'an illustration of finance team',
        caption: 'an illustration of finance team',
        width: 682,
        height: 500,
        formats: null,
        hash: 'Group_96_c3a1e46cdd',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 171.42,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_96_c3a1e46cdd.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T07:03:31.464Z',
        updatedAt: '2025-07-15T07:05:27.307Z',
      },
    },
  },
  {
    id: 2000,
    title: 'Healthcare Providers',
    description:
      'Use Formester as a healthcare compliance software tool to gather consent, track training, and manage safety forms.\n',
    description_markdown:
      'Use Formester as a healthcare compliance software tool to gather consent, track training, and manage safety forms.\n\n',
    icon: null,
    cardImage: {
      id: 2550,
      imageAlt: 'an illustration of healthcare provider',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3698,
        name: 'an illustration of healthcare provider.svg',
        alternativeText: 'an illustration of healthcare provider',
        caption: 'an illustration of healthcare provider',
        width: 682,
        height: 500,
        formats: null,
        hash: 'Medical_care_pana_1_df63688ff3',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 144.33,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Medical_care_pana_1_df63688ff3.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T07:03:31.007Z',
        updatedAt: '2025-07-15T07:05:59.705Z',
      },
    },
  },
  {
    id: 1995,
    title: 'Banks & Financial Services',
    description:
      'Use it as a bank compliance software to collect KYC info, process verifications, and handle internal audits.',
    description_markdown:
      'Use it as a bank compliance software to collect KYC info, process verifications, and handle internal audits.',
    icon: null,
    cardImage: {
      id: 2548,
      imageAlt: 'an illustration of financial services',
      imageUrl: null,
      width: null,
      height: null,
      image: {
        id: 3702,
        name: 'an illustration of financial services.svg',
        alternativeText: 'an illustration of financial services',
        caption: 'an illustration of financial services',
        width: 682,
        height: 500,
        formats: null,
        hash: 'Group_95_e628a233e4',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 284.51,
        url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_95_e628a233e4.svg',
        previewUrl: null,
        provider: 'aws-s3',
        provider_metadata: null,
        createdAt: '2025-07-15T07:03:31.706Z',
        updatedAt: '2025-07-15T07:06:30.332Z',
      },
    },
  },
  {
    id: 2004,
    title: 'Safety Managers',
    description: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_99_c80ece24b7.svg',
    description_markdown:
      'Use it as a safety compliance software to track training, report incidents, and ensure policy adherence.',
    icon: null,
    cardImage: {
      id: 2554,
      imageAlt: 'an illustration of safety',
      imageUrl: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_99_c80ece24b7.svg',
      width: null,
      height: null,
      image: null,
    },
  },
]
const c7_ctaValue = {
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
const c8_title = [
  {
    id: 2192,
    text: 'FAQs',
    highlight: false,
    color: null,
    bold: null,
  },
]
const c8_faqList = [
  {
    id: 1173,
    header: 'Is Formester secure enough for sensitive compliance data',
    body: 'Yes. Formester uses encryption, password protection, secure links, and access controls to protect all submissions. It is built with compliance in mind.\n\n',
    body_markdown:
      'Yes. Formester uses encryption, password protection, secure links, and access controls to protect all submissions. It is built with compliance in mind.\n\n',
    list: [],
  },
  {
    id: 1170,
    header: 'Can we use Formester across different departments like legal, audit, and HR',
    body: 'Absolutely. You can create and manage different compliance forms for legal policies, audit checklists, HR acknowledgments, or any custom workflow all in one place.\n\n',
    body_markdown:
      'Absolutely. You can create and manage different compliance forms for legal policies, audit checklists, HR acknowledgments, or any custom workflow all in one place.\n\n',
    list: [],
  },
  {
    id: 1172,
    header: 'What types of compliance forms can we build with Formester',
    body: 'You can build KYC forms, policy acknowledgments, vendor due diligence forms, risk assessments, whistleblower reports, audit checklists, and more without writing code.\n\n',
    body_markdown:
      'You can build KYC forms, policy acknowledgments, vendor due diligence forms, risk assessments, whistleblower reports, audit checklists, and more without writing code.\n\n',
    list: [],
  },
  {
    id: 1175,
    header: 'How do we track who has filled out the form and when',
    body: 'Formester provides real-time tracking with time stamps. You can also export submission data and monitor completion rates from a single dashboard.\n\n',
    body_markdown:
      'Formester provides real-time tracking with time stamps. You can also export submission data and monitor completion rates from a single dashboard.\n\n',
    list: [],
  },
  {
    id: 1174,
    header: 'Can we customize forms to match our compliance rules and brand',
    body: 'Yes. You can fully customize each compliance form with your branding, conditional logic, custom fields, and workflow rules to fit your company’s policies.\n\n',
    body_markdown:
      'Yes. You can fully customize each compliance form with your branding, conditional logic, custom fields, and workflow rules to fit your company’s policies.\n\n',
    list: [],
  },
  {
    id: 1171,
    header: 'Will Formester work for industries like healthcare or finance with strict regulations',
    body: 'Yes. Formester is used by teams in healthcare, finance, legal, and education. It supports secure workflows that help you stay audit ready and compliant.\n\n',
    body_markdown:
      'Yes. Formester is used by teams in healthcare, finance, legal, and education. It supports secure workflows that help you stay audit ready and compliant.\n\n',
    list: [],
  },
]

useHead({
  title: 'Automate Compliance With Compliance Forms',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://formester.com/use-case/formester-for-compliance/',
    },
  ],
  meta: [
    {
      property: 'article:modified_time',
      content: '2025-07-16T03:24:06.204Z',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Automate compliance forms, track approvals, and stay audit ready with secure, no-code workflows built for legal, finance, healthcare, and more.',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Automate Compliance With Compliance Forms',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://formester.com/use-case/formester-for-compliance/',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Automate Compliance With Compliance Forms',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Automate compliance forms, track approvals, and stay audit ready with secure, no-code workflows built for legal, finance, healthcare, and more.',
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
      content: 'https://formester.com/use-case/formester-for-compliance/',
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Automate Compliance With Compliance Forms',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Automate compliance forms, track approvals, and stay audit ready with secure, no-code workflows built for legal, finance, healthcare, and more.',
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
      content: [],
    },
  ],
})
</script>
