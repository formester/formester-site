<template>
  <div>
    <HeroTabShowcase
      description="A powerful alternative to Tally with advanced customization, powerful logic, and seamless scalability for any business."
      hideIcons
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

    <FaqSection
      :title="c3_title"
      :faqList="c3_faqList"
      class="page-component-item"
    />

    <StandoutFeatureDetail
      :title="c4_title"
      :itemList="c4_itemList"
      class="page-component-item"
    />

    <Table
      :title="c5_title"
      :rows="c5_rows"
      class="page-component-item"
    />

    <Table
      :title="c6_title"
      :rows="c6_rows"
      class="page-component-item"
    />

    <SimpleStepsCreate
      :title="c7_title"
      :itemList="c7_itemList"
      class="page-component-item"
    />

    <MostUsedFeatures
      :itemList="c8_itemList"
      :heading="c8_heading"
      class="page-component-item"
    />

    <TestimonialsV2
      description="Discover what our customers have to say about their experience with us!"
      version="home"
      :heading="c9_heading"
      :testimonials="c9_testimonials"
      class="page-component-item"
    />

    <FaqSection
      :title="c10_title"
      :faqList="c10_faqList"
      class="page-component-item"
    />

    <Trustbadges
      :title="c11_title"
      :badges="c11_badges"
      class="page-component-item"
    />

    <CallToActionSection
      :ctaValue="c12_ctaValue"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroTabShowcase from '@/components/home/HeroTabShowcase/HeroTabShowcase.vue'
import MostUsedFeatures from '@/components/home/MostUsedFeatures.vue'
import SimpleStepsCreate from '@/components/features/SimpleStepsCreate.vue'
import StandoutFeatureDetail from '@/components/features/StandoutFeatureDetail.vue'
import Table from '@/components/table/Table.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'

const c0_title = [
  {
    "id": 2508,
    "text": "Formester, a free Tally forms alternative ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c0_button = [
  {
    "id": 1091,
    "link": "https://app.formester.com/users/sign_up",
    "text": "Get Started - it’s free!",
    "type": "Primary",
    "showArrow": null
  }
]
const c0_clickTriggers = []
const c0_tabCardContent = [
  {
    "id": 72,
    "navTitle": "AI form builder",
    "title": "Build forms instantly",
    "image": {
      "id": 2899,
      "imageAlt": "a screenshot of Formester's AI form builder",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3982,
        "name": "1.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "1_59b374ccda",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1300.18,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/1_59b374ccda.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-18T13:14:58.813Z",
        "updatedAt": "2025-09-18T13:14:58.813Z"
      }
    },
    "feature": [
      {
        "id": 86,
        "featureTitle": "Use AI to create and edit forms in seconds without manual effort.",
        "icon": {
          "id": 2909,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 81,
        "featureTitle": "Generate quizzes, surveys, and lead forms automatically.",
        "icon": {
          "id": 2910,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 87,
        "featureTitle": "Save hours compared to building forms manually.",
        "icon": {
          "id": 2911,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      }
    ]
  },
  {
    "id": 73,
    "navTitle": "Multilingual support",
    "title": "Customize every detail",
    "image": {
      "id": 2900,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3983,
        "name": "2.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "2_9858e4a848",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1285.31,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/2_9858e4a848.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-18T13:15:18.791Z",
        "updatedAt": "2025-09-18T13:15:18.791Z"
      }
    },
    "feature": [
      {
        "id": 79,
        "featureTitle": "Access fully customizable templates for any purpose.",
        "icon": {
          "id": 2903,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 85,
        "featureTitle": "Adjust fields, layouts, and branding to match your style.",
        "icon": {
          "id": 2904,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 83,
        "featureTitle": "Control fonts, colors, and logos for a professional look.",
        "icon": {
          "id": 2905,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      }
    ]
  },
  {
    "id": 71,
    "navTitle": "PDF and file uploads",
    "title": "Save time with ready templates",
    "image": {
      "id": 2901,
      "imageAlt": null,
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 4000,
        "name": "CustomPDFs.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "Custom_PD_Fs_540a7f8924",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 5222.94,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Custom_PD_Fs_540a7f8924.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-19T02:23:49.468Z",
        "updatedAt": "2025-09-19T02:23:49.468Z"
      }
    },
    "feature": [
      {
        "id": 82,
        "featureTitle": "Use free ready-to-use templates designed for every need.",
        "icon": {
          "id": 2906,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 84,
        "featureTitle": "Launch surveys, quizzes, or forms in minutes.",
        "icon": {
          "id": 2907,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 80,
        "featureTitle": "Avoid starting from scratch for common use cases.",
        "icon": {
          "id": 2908,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      }
    ]
  },
  {
    "id": 74,
    "navTitle": "Team collaboration",
    "title": "Collect and manage efficiently",
    "image": {
      "id": 2902,
      "imageAlt": "Collect and manage efficiently",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3998,
        "name": "Collaboration.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "Collaboration_c73d6f0d4c",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 3004.76,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Collaboration_c73d6f0d4c.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-19T02:23:23.032Z",
        "updatedAt": "2025-09-19T02:23:23.032Z"
      }
    },
    "feature": [
      {
        "id": 88,
        "featureTitle": "Track responses in real time and prevent spam.",
        "icon": {
          "id": 2912,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 89,
        "featureTitle": "Send automatic notifications to yourself and respondents.",
        "icon": {
          "id": 2913,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
          }
        }
      },
      {
        "id": 90,
        "featureTitle": "Capture every submission and stay organized effortlessly.",
        "icon": {
          "id": 2914,
          "imageAlt": null,
          "imageUrl": null,
          "width": null,
          "height": null,
          "image": {
            "id": 3879,
            "name": "check icon.png",
            "alternativeText": "check icon",
            "caption": "check icon",
            "width": 50,
            "height": 50,
            "formats": null,
            "hash": "check_icon_79357fa908",
            "ext": ".png",
            "mime": "image/png",
            "size": 0.5,
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
            "previewUrl": null,
            "provider": "aws-s3",
            "provider_metadata": null,
            "createdAt": "2025-08-29T03:53:54.469Z",
            "updatedAt": "2025-08-29T03:53:54.469Z"
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
    "id": 2477,
    "text": "Join 15,000+ happy users",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c2_badges = []
const c3_title = [
  {
    "id": 2859,
    "text": "Why look for a Tally alternative?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c3_faqList = [
  {
    "id": 1265,
    "header": "Limits of free plan",
    "body": "Tally’s free plan is generous but quickly hits limits on submissions, fields, or storage, forcing upgrades. Formester’s plans provide more flexibility and a true risk-free option to grow without sudden constraints.",
    "body_markdown": "Tally’s free plan is generous but quickly hits limits on submissions, fields, or storage, forcing upgrades. Formester’s plans provide more flexibility and a true risk-free option to grow without sudden constraints.",
    "list": []
  },
  {
    "id": 1295,
    "header": "Limited advanced customization",
    "body": "Design, branding, custom CSS, and domain options are restricted in Tally. Formester lets you fully control the look and feel of your forms, creating polished, on-brand forms that reflect your business identity.",
    "body_markdown": "Design, branding, custom CSS, and domain options are restricted in Tally. Formester lets you fully control the look and feel of your forms, creating polished, on-brand forms that reflect your business identity.",
    "list": []
  },
  {
    "id": 1296,
    "header": "Lack of complex logic and fields",
    "body": "Tally is ideal for simple forms but struggles with calculations, advanced conditional logic, and specialized fields. Formester supports complex forms, letting you build smarter, dynamic surveys and workflows easily.",
    "body_markdown": "Tally is ideal for simple forms but struggles with calculations, advanced conditional logic, and specialized fields. Formester supports complex forms, letting you build smarter, dynamic surveys and workflows easily.",
    "list": []
  },
  {
    "id": 1297,
    "header": "Integration shortcomings",
    "body": "Tally’s integrations with tools like Google Sheets, Slack, or CRMs are limited or locked behind higher tiers. Formester connects seamlessly to multiple platforms, enabling smooth automation and data sync without extra costs.",
    "body_markdown": "Tally’s integrations with tools like Google Sheets, Slack, or CRMs are limited or locked behind higher tiers. Formester connects seamlessly to multiple platforms, enabling smooth automation and data sync without extra costs.",
    "list": []
  },
  {
    "id": 1298,
    "header": "Data collection and analytics",
    "body": "Tally provides basic reporting, but Formester offers advanced analytics, real-time insights, and data visualization, helping you understand responses deeply and make informed, actionable decisions.",
    "body_markdown": "Tally provides basic reporting, but Formester offers advanced analytics, real-time insights, and data visualization, helping you understand responses deeply and make informed, actionable decisions.",
    "list": []
  }
]
const c4_title = [
  {
    "id": 1608,
    "text": "What's the difference?",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c4_itemList = [
  {
    "id": 1963,
    "title": "Formester ",
    "description": "Formester is an AI-powered form builder with advanced features like conditional logic, file uploads, and multi-page forms. Manage your whole team easily. It is the ideal Tally alternative for businesses that take forms seriously.",
    "description_markdown": "Formester is an AI-powered form builder with advanced features like conditional logic, file uploads, and multi-page forms. Manage your whole team easily. It is the ideal Tally alternative for businesses that take forms seriously.",
    "icon": null,
    "cardImage": {
      "id": 2502,
      "imageAlt": "a screenshot of formester form builder",
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Landing_Page_d9ed9426b5.svg",
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 1962,
    "title": "Tally.so",
    "description": "Tally is a lightweight form builder designed for simple needs. It offers a clean interface but most advanced features like payments, analytics, and automations require a paid plan. Teams often face limits when trying to scale with Tally.",
    "description_markdown": "Tally is a lightweight form builder designed for simple needs. It offers a clean interface but most advanced features like payments, analytics, and automations require a paid plan. Teams often face limits when trying to scale with Tally.",
    "icon": null,
    "cardImage": {
      "id": 2503,
      "imageAlt": "a screenshot of tally.so form builder",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3947,
        "name": "a screenshot of tally.so form builder.png",
        "alternativeText": "a screenshot of tally.so form builder",
        "caption": "a screenshot of tally.so form builder",
        "width": 1710,
        "height": 1413,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_image_5_8fe5c74382.png",
            "hash": "large_image_5_8fe5c74382",
            "mime": "image/png",
            "name": "large_image 5.png",
            "path": null,
            "size": 215.89,
            "width": 1000,
            "height": 826
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_image_5_8fe5c74382.png",
            "hash": "small_image_5_8fe5c74382",
            "mime": "image/png",
            "name": "small_image 5.png",
            "path": null,
            "size": 67.21,
            "width": 500,
            "height": 413
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_image_5_8fe5c74382.png",
            "hash": "medium_image_5_8fe5c74382",
            "mime": "image/png",
            "name": "medium_image 5.png",
            "path": null,
            "size": 134.83,
            "width": 750,
            "height": 620
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_image_5_8fe5c74382.png",
            "hash": "thumbnail_image_5_8fe5c74382",
            "mime": "image/png",
            "name": "thumbnail_image 5.png",
            "path": null,
            "size": 14.49,
            "width": 189,
            "height": 156
          }
        },
        "hash": "image_5_8fe5c74382",
        "ext": ".png",
        "mime": "image/png",
        "size": 168.21,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/image_5_8fe5c74382.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-08T03:30:32.972Z",
        "updatedAt": "2025-09-08T03:30:42.971Z"
      }
    }
  }
]
const c5_title = [
  {
    "id": 1602,
    "text": "Free plan comparison",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c5_rows = [
  {
    "id": 143,
    "rowType": "head"
  },
  {
    "id": 439,
    "rowType": "body"
  },
  {
    "id": 440,
    "rowType": "body"
  },
  {
    "id": 450,
    "rowType": "body"
  },
  {
    "id": 434,
    "rowType": "body"
  },
  {
    "id": 436,
    "rowType": "body"
  },
  {
    "id": 437,
    "rowType": "body"
  },
  {
    "id": 443,
    "rowType": "body"
  },
  {
    "id": 432,
    "rowType": "body"
  },
  {
    "id": 435,
    "rowType": "body"
  },
  {
    "id": 431,
    "rowType": "body"
  },
  {
    "id": 433,
    "rowType": "body"
  },
  {
    "id": 438,
    "rowType": "body"
  },
  {
    "id": 442,
    "rowType": "body"
  },
  {
    "id": 447,
    "rowType": "body"
  },
  {
    "id": 441,
    "rowType": "body"
  },
  {
    "id": 446,
    "rowType": "body"
  },
  {
    "id": 444,
    "rowType": "body"
  },
  {
    "id": 448,
    "rowType": "body"
  },
  {
    "id": 449,
    "rowType": "body"
  },
  {
    "id": 445,
    "rowType": "body"
  }
]
const c6_title = [
  {
    "id": 3123,
    "text": "What about advanced features?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c6_rows = [
  {
    "id": 662,
    "rowType": "head"
  },
  {
    "id": 663,
    "rowType": "body"
  },
  {
    "id": 664,
    "rowType": "body"
  },
  {
    "id": 666,
    "rowType": "body"
  },
  {
    "id": 665,
    "rowType": "body"
  },
  {
    "id": 669,
    "rowType": "body"
  },
  {
    "id": 668,
    "rowType": "body"
  },
  {
    "id": 682,
    "rowType": "body"
  },
  {
    "id": 676,
    "rowType": "body"
  },
  {
    "id": 667,
    "rowType": "body"
  },
  {
    "id": 671,
    "rowType": "body"
  },
  {
    "id": 677,
    "rowType": "body"
  },
  {
    "id": 675,
    "rowType": "body"
  },
  {
    "id": 670,
    "rowType": "body"
  },
  {
    "id": 679,
    "rowType": "body"
  },
  {
    "id": 674,
    "rowType": "body"
  },
  {
    "id": 680,
    "rowType": "body"
  },
  {
    "id": 673,
    "rowType": "body"
  },
  {
    "id": 681,
    "rowType": "body"
  },
  {
    "id": 678,
    "rowType": "body"
  },
  {
    "id": 672,
    "rowType": "body"
  }
]
const c7_title = [
  {
    "id": 2506,
    "text": "How to switch?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c7_itemList = [
  {
    "id": 2080,
    "title": "Create or import",
    "description": "Formester helps you get started faster than Tally. Use AI to build forms in seconds or import your existing Google Forms without hassle.",
    "description_markdown": null,
    "icon": null,
    "cardImage": {
      "id": 2888,
      "imageAlt": "a screenshot of Formester's form builder",
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_105_5b6d5586e0.png",
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 2081,
    "title": "Customize fields",
    "description": "Unlike Tally, Formester gives you full control. Drag and drop fields, add logic, adjust layouts, and apply your branding to make forms truly yours.",
    "description_markdown": "Unlike Tally, Formester gives you full control. Drag and drop fields, add logic, adjust layouts, and apply your branding to make forms truly yours.",
    "icon": null,
    "cardImage": {
      "id": 2889,
      "imageAlt": "a screenshot of Formester's form builder",
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_103_fbf4745295.png",
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 2082,
    "title": "Collect submissions",
    "description": "Share your forms and gather responses in real time. Track advanced analytics, see where users drop off, and send automated notifications.",
    "description_markdown": "Share your forms and gather responses in real time. Track advanced analytics, see where users drop off, and send automated notifications.",
    "icon": null,
    "cardImage": {
      "id": 2890,
      "imageAlt": "a screenshot of Formester's form builder",
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_104_2494059987.png",
      "width": null,
      "height": null,
      "image": null
    }
  }
]
const c8_itemList = [
  {
    "id": 2089,
    "title": "Custom branding",
    "description": "Make every form feel like yours. Customize logos, colors, fonts and layouts so your forms match your brand perfectly.",
    "description_markdown": null,
    "icon": {
      "id": 2894,
      "imageAlt": "pen icon",
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/pen_aab0275ee2.svg",
      "width": null,
      "height": null,
      "image": null
    },
    "cardImage": {
      "id": 2897,
      "imageAlt": null,
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/1_03e1f049a6.png",
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 2090,
    "title": "Smart spam protection",
    "description": "Keep your submissions clean. Formester uses AI to block spam and protect your forms without extra setup.",
    "description_markdown": null,
    "icon": {
      "id": 2891,
      "imageAlt": "form icon",
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/form_29962eaefb.svg",
      "width": null,
      "height": null,
      "image": null
    },
    "cardImage": {
      "id": 2898,
      "imageAlt": null,
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/2_fd98de152d.png",
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 2088,
    "title": "Automatic notifications",
    "description": "Stay in the loop. Send custom emails to yourself and respondents with conditional and automated notifications for every submission.",
    "description_markdown": null,
    "icon": {
      "id": 2893,
      "imageAlt": null,
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_6dcfe8a588.svg",
      "width": null,
      "height": null,
      "image": null
    },
    "cardImage": {
      "id": 2896,
      "imageAlt": null,
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_decaab2d39.png",
      "width": null,
      "height": null,
      "image": null
    }
  },
  {
    "id": 2087,
    "title": "Advanced analytics",
    "description": "Know what works. Track drop off points, user behavior and field level performance to optimize your forms. These insights are not available in Tally free plans.",
    "description_markdown": "Know what works. Track drop off points, user behavior and field level performance to optimize your forms. These insights are not available in Tally free plans.",
    "icon": {
      "id": 2892,
      "imageAlt": null,
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/analytics_49e5ccdd6d.svg",
      "width": null,
      "height": null,
      "image": null
    },
    "cardImage": {
      "id": 2895,
      "imageAlt": null,
      "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/4_fa90be04fa.png",
      "width": null,
      "height": null,
      "image": null
    }
  }
]
const c8_heading = [
  {
    "id": 2507,
    "text": "Why choose Formester?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c9_heading = [
  {
    "id": 1598,
    "text": "User Stories",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c9_testimonials = [
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
  }
]
const c10_title = [
  {
    "id": 1609,
    "text": "FAQs",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c10_faqList = [
  {
    "id": 1146,
    "header": "Why is Formester a better alternative to Tally.so?",
    "body": "Formester is the perfect tool for businesses that need advanced features. It offers conditional logic, file upload, and full control over form creation and submissions.",
    "body_markdown": "Formester is the perfect tool for businesses that need advanced features. It offers conditional logic, file upload, and full control over form creation and submissions.",
    "list": []
  },
  {
    "id": 1147,
    "header": "Can I switch from Tally to Formester?",
    "body": "Yes. You can easily recreate your forms by using our drag and drop builder, smart form fields, and free plan to get started.",
    "body_markdown": "Yes. You can easily recreate your forms by using our drag and drop builder, smart form fields, and free plan to get started.",
    "list": []
  },
  {
    "id": 1145,
    "header": "Is Formester good for businesses with teams?",
    "body": "Absolutely. Our form building platform lets teams fully control access, form submissions, and collaboration. This is different from many basic online form builders.",
    "body_markdown": "Absolutely. Our form building platform lets teams fully control access, form submissions, and collaboration. This is different from many basic online form builders.",
    "list": []
  },
  {
    "id": 1148,
    "header": "Do I need technical skills to use Formester?",
    "body": "Not at all. Creating forms with Formester is simple with our drag and drop tools, AI features, and real-time support to guide you.",
    "body_markdown": "Not at all. Creating forms with Formester is simple with our drag and drop tools, AI features, and real-time support to guide you.",
    "list": []
  }
]
const c11_title = [
  {
    "id": 1599,
    "text": "Trusted by",
    "highlight": false,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 1600,
    "text": " 15000+ ",
    "highlight": true,
    "color": "#475467",
    "bold": false
  },
  {
    "id": 1601,
    "text": "Global Users",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c11_badges = []
const c12_ctaValue = {
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
  "title": "Formester: The Free Tally Forms Alternative",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/tally-forms-alternative/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2025-09-24T02:24:41.267Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Tired of Tally Forms? Switch to Formester, the AI-powered form builder with conditional logic, file uploads, and a free plan to create smarter forms fast."
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Formester: The Free Tally Forms Alternative"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/tally-forms-alternative/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Formester: The Free Tally Forms Alternative"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Tired of Tally Forms? Switch to Formester, the AI-powered form builder with conditional logic, file uploads, and a free plan to create smarter forms fast."
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
      "content": "https://formester.com/tally-forms-alternative/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Formester: The Free Tally Forms Alternative"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Tired of Tally Forms? Switch to Formester, the AI-powered form builder with conditional logic, file uploads, and a free plan to create smarter forms fast."
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
        "tally.so alternative",
        "tally so alternative",
        "alternative to tally.so",
        "tally.so pricing",
        "tally forms",
        "tally form builder"
      ]
    }
  ]
})
</script>
