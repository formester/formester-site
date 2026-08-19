<template>
  <div>
    <HeroTabShowcase
      description="Create interactive forms with AI, add logic jumps, and automate. No code. No hassle."
      :hideIcons="false"
      :title="c0_title"
      :button="c0_button"
      :clickTriggers="c0_clickTriggers"
      :tabCardContent="c0_tabCardContent"
      class="page-component-item"
    />

    <TrustSeals
      :title="c1_title"
      :logos="c1_logos"
      class="page-component-item"
    />

    <Trustbadges
      :title="c2_title"
      :badges="c2_badges"
      class="page-component-item"
    />

    <MostUsedFeatures
      :itemList="c3_itemList"
      :heading="c3_heading"
      class="page-component-item"
    />

    <IntegrationsShowcase
      description="Improve your workflows with zero coding."
      :title="c4_title"
      class="page-component-item"
    />

    <Usecase
      description="Learn how Formester can help your business."
      :title="c5_title"
      :usecase="c5_usecase"
      class="page-component-item"
    />

    <TestimonialsV2
      version="home"
      :heading="c6_heading"
      :testimonials="c6_testimonials"
      class="page-component-item"
    />

    <CallToActionSection
      :ctaValue="c7_ctaValue"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CallToActionSection from '@/components/CallToActionSection.vue'
import HeroTabShowcase from '@/components/home/HeroTabShowcase/HeroTabShowcase.vue'
import IntegrationsShowcase from '@/components/v2/IntegrationsShowcase.vue'
import MostUsedFeatures from '@/components/home/MostUsedFeatures.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'
import Usecase from '@/components/home/Usecases/Usecase.vue'

const c0_title = [
  {
    "id": 2330,
    "text": "Easiest way to build powerful forms",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c0_button = [
  {
    "id": 1035,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started - it’s free!",
    "type": "Primary",
    "showArrow": null
  }
]
const c0_clickTriggers = []
const c0_tabCardContent = [
  {
    "id": 2,
    "navTitle": "Collaboration",
    "title": "Invite team members to build and manage forms together.",
    "image": {
      "id": 2590,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3778,
        "name": "Collaboration.png",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Collaboration_04ed2957f5.png",
            "hash": "small_Collaboration_04ed2957f5",
            "mime": "image/png",
            "name": "small_Collaboration.png",
            "path": null,
            "size": 182.58,
            "width": 500,
            "height": 334
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Collaboration_04ed2957f5.png",
            "hash": "thumbnail_Collaboration_04ed2957f5",
            "mime": "image/png",
            "name": "thumbnail_Collaboration.png",
            "path": null,
            "size": 46.57,
            "width": 234,
            "height": 156
          }
        },
        "hash": "Collaboration_04ed2957f5",
        "ext": ".png",
        "mime": "image/png",
        "size": 78.63,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Collaboration_04ed2957f5.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-08-04T17:55:42.325Z",
        "updatedAt": "2025-08-04T17:55:42.325Z"
      }
    },
    "feature": [
      {
        "id": 2,
        "featureTitle": "Let multiple people fill the same form at once.",
        "icon": {
          "id": 2591,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3780,
            "name": "2.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "2_a478ca0bb9",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 3.27,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/2_a478ca0bb9.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T17:58:22.034Z",
            "updatedAt": "2025-08-04T17:58:22.034Z"
          }
        }
      },
      {
        "id": 3,
        "featureTitle": "Manage access using permissions at the field and form levels.",
        "icon": {
          "id": 2592,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3781,
            "name": "3.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "3_a6e59b0281",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 3.45,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_a6e59b0281.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T17:59:10.101Z",
            "updatedAt": "2025-08-04T17:59:10.101Z"
          }
        }
      }
    ]
  },
  {
    "id": 3,
    "navTitle": "White Label",
    "title": "Match forms to your brand with full design control.",
    "image": {
      "id": 2593,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3784,
        "name": "3_2 screen mockup.png",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_3_2_screen_mockup_e1d360566d.png",
            "hash": "small_3_2_screen_mockup_e1d360566d",
            "mime": "image/png",
            "name": "small_3_2 screen mockup.png",
            "path": null,
            "size": 122.66,
            "width": 500,
            "height": 334
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_3_2_screen_mockup_e1d360566d.png",
            "hash": "thumbnail_3_2_screen_mockup_e1d360566d",
            "mime": "image/png",
            "name": "thumbnail_3_2 screen mockup.png",
            "path": null,
            "size": 36.7,
            "width": 234,
            "height": 156
          }
        },
        "hash": "3_2_screen_mockup_e1d360566d",
        "ext": ".png",
        "mime": "image/png",
        "size": 46.76,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_2_screen_mockup_e1d360566d.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-08-04T18:14:11.938Z",
        "updatedAt": "2025-08-04T18:14:19.189Z"
      }
    },
    "feature": [
      {
        "id": 5,
        "featureTitle": "Use your own domain and custom form links.",
        "icon": {
          "id": 2594,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3782,
            "name": "25785696.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785696_afa4df307a",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 1.95,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785696_afa4df307a.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:14:10.776Z",
            "updatedAt": "2025-08-04T18:14:10.776Z"
          }
        }
      },
      {
        "id": 4,
        "featureTitle": "Build trust with branded, seamless user experience.",
        "icon": {
          "id": 2595,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3783,
            "name": "25785697.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785697_737c35b407",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 1.45,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785697_737c35b407.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:14:10.810Z",
            "updatedAt": "2025-08-04T18:14:10.810Z"
          }
        }
      }
    ]
  },
  {
    "id": 4,
    "navTitle": "Generate PDF",
    "title": "Turn responses into ready-to-use downloadable PDFs.",
    "image": {
      "id": 2596,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3787,
        "name": "3_2 screen mockup.png",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_3_2_screen_mockup_004dd521b6.png",
            "hash": "small_3_2_screen_mockup_004dd521b6",
            "mime": "image/png",
            "name": "small_3_2 screen mockup.png",
            "path": null,
            "size": 68.93,
            "width": 500,
            "height": 334
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_3_2_screen_mockup_004dd521b6.png",
            "hash": "thumbnail_3_2_screen_mockup_004dd521b6",
            "mime": "image/png",
            "name": "thumbnail_3_2 screen mockup.png",
            "path": null,
            "size": 20.39,
            "width": 234,
            "height": 156
          }
        },
        "hash": "3_2_screen_mockup_004dd521b6",
        "ext": ".png",
        "mime": "image/png",
        "size": 19.42,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_2_screen_mockup_004dd521b6.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-08-04T18:17:53.050Z",
        "updatedAt": "2025-08-04T18:17:53.050Z"
      }
    },
    "feature": [
      {
        "id": 6,
        "featureTitle": "Design custom layouts for invoices or agreements.",
        "icon": {
          "id": 2597,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3786,
            "name": "25785686.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785686_46a853ce4f",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 1.84,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785686_46a853ce4f.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:17:52.352Z",
            "updatedAt": "2025-08-04T18:17:52.352Z"
          }
        }
      },
      {
        "id": 7,
        "featureTitle": "No formatting needed, everything auto-generated.",
        "icon": {
          "id": 2598,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3785,
            "name": "25785680.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785680_52367487a0",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 1.78,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785680_52367487a0.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:17:52.340Z",
            "updatedAt": "2025-08-04T18:17:52.340Z"
          }
        }
      }
    ]
  },
  {
    "id": 5,
    "navTitle": "Data Protection",
    "title": "Let users save and finish forms across any device.",
    "image": {
      "id": 2599,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3790,
        "name": "CustomPDFs.png",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Custom_PD_Fs_0bf349ef31.png",
            "hash": "small_Custom_PD_Fs_0bf349ef31",
            "mime": "image/png",
            "name": "small_CustomPDFs.png",
            "path": null,
            "size": 141.12,
            "width": 500,
            "height": 334
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Custom_PD_Fs_0bf349ef31.png",
            "hash": "thumbnail_Custom_PD_Fs_0bf349ef31",
            "mime": "image/png",
            "name": "thumbnail_CustomPDFs.png",
            "path": null,
            "size": 37,
            "width": 234,
            "height": 156
          }
        },
        "hash": "Custom_PD_Fs_0bf349ef31",
        "ext": ".png",
        "mime": "image/png",
        "size": 57.97,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Custom_PD_Fs_0bf349ef31.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-08-04T18:36:28.077Z",
        "updatedAt": "2025-08-04T18:36:28.077Z"
      }
    },
    "feature": [
      {
        "id": 8,
        "featureTitle": "Fill forms offline and sync when back online.",
        "icon": {
          "id": 2600,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3788,
            "name": "25785698.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785698_4fce483246",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 0.82,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785698_4fce483246.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:36:25.873Z",
            "updatedAt": "2025-08-04T18:36:25.873Z"
          }
        }
      },
      {
        "id": 9,
        "featureTitle": "Prevent drop-offs with seamless resume options.",
        "icon": {
          "id": 2601,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3789,
            "name": "25785699.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785699_11ac2f76f7",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 0.9,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785699_11ac2f76f7.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:36:25.933Z",
            "updatedAt": "2025-08-04T18:36:25.933Z"
          }
        }
      }
    ]
  },
  {
    "id": 6,
    "navTitle": "Automations",
    "title": "Send auto-confirmation and follow-up emails.",
    "image": {
      "id": 2602,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3793,
        "name": "automations.png",
        "alternativeText": "automations",
        "caption": "automations",
        "width": 644,
        "height": 430,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Automations_0ada4ec9d6.png",
            "hash": "small_Automations_0ada4ec9d6",
            "mime": "image/png",
            "name": "small_Automations.png",
            "path": null,
            "size": 72.28,
            "width": 500,
            "height": 334
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Automations_0ada4ec9d6.png",
            "hash": "thumbnail_Automations_0ada4ec9d6",
            "mime": "image/png",
            "name": "thumbnail_Automations.png",
            "path": null,
            "size": 20.95,
            "width": 234,
            "height": 156
          }
        },
        "hash": "Automations_0ada4ec9d6",
        "ext": ".png",
        "mime": "image/png",
        "size": 22.53,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Automations_0ada4ec9d6.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-08-04T18:40:03.972Z",
        "updatedAt": "2025-09-01T03:28:14.460Z"
      }
    },
    "feature": [
      {
        "id": 10,
        "featureTitle": "Get alerts and route responses to your team.",
        "icon": {
          "id": 2603,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3792,
            "name": "1.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "1_6db3ee3368",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 3.02,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/1_6db3ee3368.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:40:03.189Z",
            "updatedAt": "2025-08-04T18:40:03.189Z"
          }
        }
      },
      {
        "id": 11,
        "featureTitle": "Connect with CRMs, Slack, and 1000+ other tools.",
        "icon": {
          "id": 2604,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3791,
            "name": "3.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "3_1533ef9e10",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 2.16,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_1533ef9e10.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:40:03.187Z",
            "updatedAt": "2025-08-04T18:40:03.187Z"
          }
        }
      }
    ]
  },
  {
    "id": 7,
    "navTitle": "Multi Language",
    "title": "Add multiple languages to reach global users",
    "image": {
      "id": 2605,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3796,
        "name": "form builder.png",
        "alternativeText": "form builder",
        "caption": "form builder",
        "width": 644,
        "height": 430,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_AI_Native_b2cc469b26.png",
            "hash": "small_AI_Native_b2cc469b26",
            "mime": "image/png",
            "name": "small_AINative.png",
            "path": null,
            "size": 77.65,
            "width": 500,
            "height": 334
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_AI_Native_b2cc469b26.png",
            "hash": "thumbnail_AI_Native_b2cc469b26",
            "mime": "image/png",
            "name": "thumbnail_AINative.png",
            "path": null,
            "size": 24.06,
            "width": 234,
            "height": 156
          }
        },
        "hash": "AI_Native_b2cc469b26",
        "ext": ".png",
        "mime": "image/png",
        "size": 25.12,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/AI_Native_b2cc469b26.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-08-04T18:57:57.679Z",
        "updatedAt": "2025-09-01T03:27:32.740Z"
      }
    },
    "feature": [
      {
        "id": 13,
        "featureTitle": "Translate forms instantly using AI",
        "icon": {
          "id": 2606,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3794,
            "name": "25785693.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785693_c9fed37b30",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 2.92,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785693_c9fed37b30.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:57:56.832Z",
            "updatedAt": "2025-08-04T18:57:56.832Z"
          }
        }
      },
      {
        "id": 12,
        "featureTitle": "Make your forms accessible to everyone",
        "icon": {
          "id": 2607,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3795,
            "name": "25785694.svg",
            "alternativeText": null,
            "caption": null,
            "width": 30,
            "height": 30,
            "formats": null,
            "hash": "25785694_a5e7dd58a2",
            "ext": ".svg",
            "mime": "image/svg+xml",
            "size": 1.91,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/25785694_a5e7dd58a2.svg",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-04T18:57:56.863Z",
            "updatedAt": "2025-08-04T18:57:56.863Z"
          }
        }
      }
    ]
  }
]
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    "id": 2327,
    "text": "Join 15,000+ happy users",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c2_badges = []
const c3_itemList = [
  {
    "id": 2026,
    "title": "Design that reflects you",
    "description": "Style forms to match your fonts, logo, colors and layout. Embed forms that can match your website’s theme. ",
    "description_markdown": "",
    "icon": {
      "id": 2581,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3544,
        "name": "1.svg",
        "alternativeText": null,
        "caption": null,
        "width": 38,
        "height": 38,
        "formats": null,
        "hash": "1_7c9da31ae8",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.01,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/1_7c9da31ae8.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-06-16T18:00:00.502Z",
        "updatedAt": "2025-06-16T18:00:00.502Z"
      }
    },
    "cardImage": {
      "id": 2584,
      "imageAlt": "a mockup of Formester's design capabilities",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3678,
        "name": "1.png",
        "alternativeText": null,
        "caption": null,
        "width": 593,
        "height": 582,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_1_c4a0e706d5.png",
            "hash": "small_1_c4a0e706d5",
            "mime": "image/png",
            "name": "small_1.png",
            "path": null,
            "size": 212.79,
            "width": 500,
            "height": 491
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_1_c4a0e706d5.png",
            "hash": "thumbnail_1_c4a0e706d5",
            "mime": "image/png",
            "name": "thumbnail_1.png",
            "path": null,
            "size": 31.11,
            "width": 159,
            "height": 156
          }
        },
        "hash": "1_c4a0e706d5",
        "ext": ".png",
        "mime": "image/png",
        "size": 60.87,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/1_c4a0e706d5.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-07-09T10:55:52.611Z",
        "updatedAt": "2025-07-09T10:55:52.611Z"
      }
    }
  },
  {
    "id": 2025,
    "title": "Protect your forms like a pro",
    "description": "Block fake entries with AI, email checks and Turnstile Keep your data accurate and your submissions clean.",
    "description_markdown": "",
    "icon": {
      "id": 2582,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3545,
        "name": "form icon.svg",
        "alternativeText": "form icon",
        "caption": "form icon",
        "width": 38,
        "height": 38,
        "formats": null,
        "hash": "4_5a742e94e0",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 0.95,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/4_5a742e94e0.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-06-16T18:00:00.511Z",
        "updatedAt": "2025-06-26T21:51:39.283Z"
      }
    },
    "cardImage": {
      "id": 2586,
      "imageAlt": "a mockup of Formester's spam protection",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3679,
        "name": "2.png",
        "alternativeText": null,
        "caption": null,
        "width": 593,
        "height": 582,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_2_fda460eb47.png",
            "hash": "small_2_fda460eb47",
            "mime": "image/png",
            "name": "small_2.png",
            "path": null,
            "size": 128.28,
            "width": 500,
            "height": 491
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_2_fda460eb47.png",
            "hash": "thumbnail_2_fda460eb47",
            "mime": "image/png",
            "name": "thumbnail_2.png",
            "path": null,
            "size": 21.94,
            "width": 159,
            "height": 156
          }
        },
        "hash": "2_fda460eb47",
        "ext": ".png",
        "mime": "image/png",
        "size": 32.84,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/2_fda460eb47.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-07-09T10:56:17.443Z",
        "updatedAt": "2025-07-09T10:56:17.443Z"
      }
    }
  },
  {
    "id": 2024,
    "title": "Never miss any leads",
    "description": "Capture partial or incomplete entries even if users drop off Let users finish forms later or submit them offline.",
    "description_markdown": "",
    "icon": {
      "id": 2579,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3547,
        "name": "click icon.svg",
        "alternativeText": "click icon",
        "caption": "click icon",
        "width": 38,
        "height": 38,
        "formats": null,
        "hash": "3_e1abbb3bc1",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 0.91,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_e1abbb3bc1.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-06-16T18:00:00.532Z",
        "updatedAt": "2025-06-25T03:07:17.768Z"
      }
    },
    "cardImage": {
      "id": 2583,
      "imageAlt": "a mockup of Formester's partial and offline features",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3680,
        "name": "3.png",
        "alternativeText": null,
        "caption": null,
        "width": 593,
        "height": 582,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_3_4aed8810f7.png",
            "hash": "small_3_4aed8810f7",
            "mime": "image/png",
            "name": "small_3.png",
            "path": null,
            "size": 150.95,
            "width": 500,
            "height": 491
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_3_4aed8810f7.png",
            "hash": "thumbnail_3_4aed8810f7",
            "mime": "image/png",
            "name": "thumbnail_3.png",
            "path": null,
            "size": 21.23,
            "width": 159,
            "height": 156
          }
        },
        "hash": "3_4aed8810f7",
        "ext": ".png",
        "mime": "image/png",
        "size": 37.79,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_4aed8810f7.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-07-09T10:56:42.578Z",
        "updatedAt": "2025-07-09T10:56:42.578Z"
      }
    }
  },
  {
    "id": 2023,
    "title": " Know exactly what’s working",
    "description": "Improve conversions with drop off analysis Track user behaviour by connecting your forms to GA4 & Heatmaps.",
    "description_markdown": "",
    "icon": {
      "id": 2580,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3546,
        "name": "2.svg",
        "alternativeText": null,
        "caption": null,
        "width": 38,
        "height": 38,
        "formats": null,
        "hash": "2_a8c4620fa0",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 0.6,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/2_a8c4620fa0.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-06-16T18:00:00.518Z",
        "updatedAt": "2025-06-16T18:00:42.059Z"
      }
    },
    "cardImage": {
      "id": 2585,
      "imageAlt": "a mockup of Formester's form analytics ",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3681,
        "name": "4.png",
        "alternativeText": null,
        "caption": null,
        "width": 593,
        "height": 582,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_4_38e6b77543.png",
            "hash": "small_4_38e6b77543",
            "mime": "image/png",
            "name": "small_4.png",
            "path": null,
            "size": 181.81,
            "width": 500,
            "height": 491
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_4_38e6b77543.png",
            "hash": "thumbnail_4_38e6b77543",
            "mime": "image/png",
            "name": "thumbnail_4.png",
            "path": null,
            "size": 27.65,
            "width": 159,
            "height": 156
          }
        },
        "hash": "4_38e6b77543",
        "ext": ".png",
        "mime": "image/png",
        "size": 49.35,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/4_38e6b77543.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-07-09T10:57:10.685Z",
        "updatedAt": "2025-07-09T10:57:10.685Z"
      }
    }
  }
]
const c3_heading = [
  {
    "id": 2332,
    "text": "Make every form an experience",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c4_title = [
  {
    "id": 2329,
    "text": "Integrate with your favorite tools",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c5_title = [
  {
    "id": 2331,
    "text": "Built for every team and task",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c5_usecase = [
  {
    "id": 36,
    "title": "HR & Recruitment",
    "description": "Hire faster using forms that automatically screen and sort applicants.",
    "image": {
      "id": 3521,
      "name": "amy-hirschi-K0c8ko3e6AA-unsplash.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 5472,
      "height": 3648,
      "formats": {
        "large": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602.jpg",
          "hash": "large_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602",
          "mime": "image/jpeg",
          "name": "large_amy-hirschi-K0c8ko3e6AA-unsplash.jpg",
          "path": null,
          "size": 107.44,
          "width": 1000,
          "height": 667
        },
        "small": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602.jpg",
          "hash": "small_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602",
          "mime": "image/jpeg",
          "name": "small_amy-hirschi-K0c8ko3e6AA-unsplash.jpg",
          "path": null,
          "size": 35.32,
          "width": 500,
          "height": 333
        },
        "medium": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602.jpg",
          "hash": "medium_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602",
          "mime": "image/jpeg",
          "name": "medium_amy-hirschi-K0c8ko3e6AA-unsplash.jpg",
          "path": null,
          "size": 68.62,
          "width": 750,
          "height": 500
        },
        "thumbnail": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602.jpg",
          "hash": "thumbnail_amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602",
          "mime": "image/jpeg",
          "name": "thumbnail_amy-hirschi-K0c8ko3e6AA-unsplash.jpg",
          "path": null,
          "size": 9.96,
          "width": 234,
          "height": 156
        }
      },
      "hash": "amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 5795.68,
      "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/amy_hirschi_K0c8ko3e6_AA_unsplash_1a40f6f602.jpg",
      "previewUrl": null,
      "provider": "aws-s3",
      "provider_metadata": null,
      "createdAt": "2025-06-11T11:09:51.434Z",
      "updatedAt": "2025-06-11T11:09:51.434Z"
    }
  },
  {
    "id": 34,
    "title": "Lead Generation",
    "description": "Effortlessly capture and qualify potential leads around the clock with smart forms.",
    "image": {
      "id": 3526,
      "name": "austin-distel-qgdJX9mvMJI-unsplash.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 4408,
      "height": 6612,
      "formats": {
        "large": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f.jpg",
          "hash": "large_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f",
          "mime": "image/jpeg",
          "name": "large_austin-distel-qgdJX9mvMJI-unsplash.jpg",
          "path": null,
          "size": 73.08,
          "width": 667,
          "height": 1000
        },
        "small": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f.jpg",
          "hash": "small_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f",
          "mime": "image/jpeg",
          "name": "small_austin-distel-qgdJX9mvMJI-unsplash.jpg",
          "path": null,
          "size": 24.97,
          "width": 334,
          "height": 500
        },
        "medium": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f.jpg",
          "hash": "medium_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f",
          "mime": "image/jpeg",
          "name": "medium_austin-distel-qgdJX9mvMJI-unsplash.jpg",
          "path": null,
          "size": 45.8,
          "width": 500,
          "height": 750
        },
        "thumbnail": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f.jpg",
          "hash": "thumbnail_austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f",
          "mime": "image/jpeg",
          "name": "thumbnail_austin-distel-qgdJX9mvMJI-unsplash.jpg",
          "path": null,
          "size": 4.58,
          "width": 104,
          "height": 156
        }
      },
      "hash": "austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 7617.71,
      "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/austin_distel_qgd_JX_9mv_MJI_unsplash_583aa6ec2f.jpg",
      "previewUrl": null,
      "provider": "aws-s3",
      "provider_metadata": null,
      "createdAt": "2025-06-11T11:42:02.497Z",
      "updatedAt": "2025-06-11T11:42:02.497Z"
    }
  },
  {
    "id": 37,
    "title": "Finance",
    "description": "Collect payments and customer data seamlessly with frictionless online forms.",
    "image": {
      "id": 3524,
      "name": "jason-briscoe-amLfrL8LGls-unsplash.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 6000,
      "height": 4000,
      "formats": {
        "large": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a.jpg",
          "hash": "large_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a",
          "mime": "image/jpeg",
          "name": "large_jason-briscoe-amLfrL8LGls-unsplash.jpg",
          "path": null,
          "size": 51.35,
          "width": 1000,
          "height": 667
        },
        "small": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a.jpg",
          "hash": "small_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a",
          "mime": "image/jpeg",
          "name": "small_jason-briscoe-amLfrL8LGls-unsplash.jpg",
          "path": null,
          "size": 18.34,
          "width": 500,
          "height": 333
        },
        "medium": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a.jpg",
          "hash": "medium_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a",
          "mime": "image/jpeg",
          "name": "medium_jason-briscoe-amLfrL8LGls-unsplash.jpg",
          "path": null,
          "size": 33.64,
          "width": 750,
          "height": 500
        },
        "thumbnail": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a.jpg",
          "hash": "thumbnail_jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a",
          "mime": "image/jpeg",
          "name": "thumbnail_jason-briscoe-amLfrL8LGls-unsplash.jpg",
          "path": null,
          "size": 6.26,
          "width": 234,
          "height": 156
        }
      },
      "hash": "jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 1898.36,
      "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/jason_briscoe_am_Lfr_L8_L_Gls_unsplash_50fd43820a.jpg",
      "previewUrl": null,
      "provider": "aws-s3",
      "provider_metadata": null,
      "createdAt": "2025-06-11T11:41:55.974Z",
      "updatedAt": "2025-06-11T11:41:55.974Z"
    }
  },
  {
    "id": 35,
    "title": "Training & Assessment",
    "description": "Assess skills and track candidate progress instantly with real-time insights.",
    "image": {
      "id": 3525,
      "name": "avery-evans-7rRH23jkIwo-unsplash.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 3648,
      "height": 5472,
      "formats": {
        "large": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c.jpg",
          "hash": "large_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c",
          "mime": "image/jpeg",
          "name": "large_avery-evans-7rRH23jkIwo-unsplash.jpg",
          "path": null,
          "size": 64.09,
          "width": 667,
          "height": 1000
        },
        "small": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c.jpg",
          "hash": "small_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c",
          "mime": "image/jpeg",
          "name": "small_avery-evans-7rRH23jkIwo-unsplash.jpg",
          "path": null,
          "size": 22.97,
          "width": 333,
          "height": 500
        },
        "medium": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c.jpg",
          "hash": "medium_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c",
          "mime": "image/jpeg",
          "name": "medium_avery-evans-7rRH23jkIwo-unsplash.jpg",
          "path": null,
          "size": 42.15,
          "width": 500,
          "height": 750
        },
        "thumbnail": {
          "ext": ".jpg",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c.jpg",
          "hash": "thumbnail_avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c",
          "mime": "image/jpeg",
          "name": "thumbnail_avery-evans-7rRH23jkIwo-unsplash.jpg",
          "path": null,
          "size": 4.03,
          "width": 104,
          "height": 156
        }
      },
      "hash": "avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 2359.35,
      "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/avery_evans_7r_RH_23jk_Iwo_unsplash_9204d8557c.jpg",
      "previewUrl": null,
      "provider": "aws-s3",
      "provider_metadata": null,
      "createdAt": "2025-06-11T11:41:57.005Z",
      "updatedAt": "2025-06-11T11:41:57.005Z"
    }
  }
]
const c6_heading = [
  {
    "id": 2328,
    "text": "What our users say about Formester",
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
    "id": 38,
    "name": "Bob",
    "position": "Senior Web Developer",
    "organization": "PixelWorks Innovations",
    "comment": "We have been in business for over thirty years and were never happy with our forms until we found Formester. Now, we have clients actually enjoying completing and submitting online forms. If you are looking for a platform to create online forms... look no further – Formester is the best. Your clients will thank you!",
    "createdAt": "2025-06-29T23:31:21.818Z",
    "updatedAt": "2025-10-31T04:02:08.868Z",
    "publishedAt": "2025-06-29T23:31:27.535Z",
    "companyLogo": {
      "id": 3651,
      "imageAlt": "pixelworks-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4093,
        "name": "pixelworks-logo.png",
        "alternativeText": "pixelworks-logo",
        "caption": "pixelworks-logo",
        "width": 200,
        "height": 35,
        "formats": null,
        "hash": "pixelworks_logo_4c4b983d1f",
        "ext": ".png",
        "mime": "image/png",
        "size": 1.31,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/pixelworks_logo_4c4b983d1f.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-10-31T04:00:11.709Z",
        "updatedAt": "2025-10-31T04:00:11.709Z"
      }
    }
  },
  {
    "id": 39,
    "name": "Alex",
    "position": "Customer Success Manager",
    "organization": "Orion Growth Partners",
    "comment": "Tried like 4 quiz tools for our lead gen funnel before this and honestly this is the only one I didn't end up hating. AI did most of the work and the customization actually works.",
    "createdAt": "2025-06-29T23:32:05.746Z",
    "updatedAt": "2026-05-11T05:16:55.955Z",
    "publishedAt": "2025-06-29T23:32:07.219Z",
    "companyLogo": {
      "id": 3647,
      "imageAlt": "logo of orion",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4092,
        "name": "logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x.png",
        "alternativeText": null,
        "caption": null,
        "width": 200,
        "height": 86,
        "formats": null,
        "hash": "logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd",
        "ext": ".png",
        "mime": "image/png",
        "size": 3,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/logo_aa3937fea2ff4aeb3e7d9efd6740d05f_1x_1cd61284bd.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-10-29T17:02:25.502Z",
        "updatedAt": "2025-10-29T17:02:25.502Z"
      }
    }
  },
  {
    "id": 37,
    "name": "Chris",
    "position": "Operations Lead",
    "organization": "SummitCloud Software",
    "comment": "Very intuitive and the surveys look genuinely professional out of the box. Most importantly, I requested a custom rating scale and they shipped it within hours. Stellar support that is hands-down better than the Jotform.",
    "createdAt": "2025-06-29T23:30:38.521Z",
    "updatedAt": "2026-05-11T05:18:51.458Z",
    "publishedAt": "2025-06-29T23:30:40.007Z",
    "companyLogo": {
      "id": 3650,
      "imageAlt": "summit-logo",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4096,
        "name": "summit-logo.png",
        "alternativeText": "summit-logo",
        "caption": "summit-logo",
        "width": 200,
        "height": 26,
        "formats": null,
        "hash": "summit_logo_f5bfb8ce29",
        "ext": ".png",
        "mime": "image/png",
        "size": 1.42,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/summit_logo_f5bfb8ce29.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-10-31T04:00:11.826Z",
        "updatedAt": "2025-10-31T04:00:11.826Z"
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
const c7_ctaValue = {
  "id": 67,
  "description": "Get access to advanced AI, unlimited forms & more. See pricing for more details.",
  "type": "default",
  "createdAt": "2024-11-04T07:07:43.916Z",
  "updatedAt": "2025-06-12T18:47:31.840Z",
  "publishedAt": "2024-11-04T07:08:18.018Z",
  "locale": "en",
  "title": [
    {
      "id": 393,
      "text": "Ready to build your perfect form?",
      "highlight": false,
      "color": null,
      "bold": null
    }
  ],
  "buttons": [
    {
      "id": 338,
      "link": "https://app.formester.com/users/sign_up",
      "text": "Get Started–It’s Free!",
      "type": "Primary",
      "showArrow": null
    }
  ],
  "localizations": []
}

useHead({
  "title": "Easiest Online Form Builder & Creator | Formester",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/forms/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2026-01-28T09:25:16.542Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Easiest Form Builder to create embeddable online forms. Cost-effective, Spam free, AI-powered. Get Started--It's Free!"
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Easiest Online Form Builder & Creator | Formester"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Easiest Online Form Builder & Creator | Formester"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Easiest Form Builder to create embeddable online forms. Cost-effective, Spam free, AI-powered. Get Started--It's Free!"
    },
    {
      "hid": "og:image",
      "property": "og:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "og:image:alt",
      "name": "og:image:alt",
      "content": "Formester Logo"
    },
    {
      "hid": "twitter:url",
      "name": "twitter:url",
      "content": "https://formester.com/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Easiest Online Form Builder & Creator | Formester"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Easiest Form Builder to create embeddable online forms. Cost-effective, Spam free, AI-powered. Get Started--It's Free!"
    },
    {
      "hid": "twitter:image",
      "name": "twitter:image",
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
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
      "content": "https://formester-strapi.s3.ap-south-1.amazonaws.com/formester_logo_meta_image_68c8b28e07.png"
    },
    {
      "hid": "keywords",
      "name": "keywords",
      "content": [
        "online form builder",
        "form builder",
        "form creator",
        "form generator",
        "html form creator",
        "online forms"
      ]
    }
  ]
})
useJsonld([
  {
    "@graph": [
      {
        "@id": "https://acornglobus.com",
        "url": "https://formester.com",
        "logo": "https://formester.com/logo.png",
        "name": "Formester",
        "@type": "Corporation",
        "sameAs": [
          "https://www.facebook.com/formester/",
          "https://twitter.com/_formester_",
          "https://www.instagram.com/_formester_/",
          "https://www.linkedin.com/company/formester-inc/",
          "https://www.producthunt.com/products/formester",
          "https://www.softwareadvice.com/forms-automation/formester-profile/",
          "https://www.capterra.com/p/166904/Formester/",
          "https://www.getapp.com/website-ecommerce-software/a/formester/"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "United States",
          "addressLocality": "Delaware"
        },
        "creator": {
          "@id": "#organization",
          "url": "https://formester.com/",
          "logo": {
            "url": "https://formester.com/logo.png",
            "@type": "ImageObject"
          },
          "name": "Formester",
          "@type": "Organization"
        },
        "description": "Create online forms, surveys & quizzes with the easiest Form Builder software. Spam free, GDPR Compliant HTML form creator. Get Started--It's Free!"
      },
      {
        "@id": "https://acornglobus.com",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "item": "https://formester.com",
            "name": "Home",
            "@type": "ListItem",
            "position": 1
          }
        ]
      }
    ],
    "@context": "http://schema.org"
  }
])
</script>
