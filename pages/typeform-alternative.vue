<template>
  <div>
    <HeroTabShowcase
      description="Looking for an alternative to Typeform? Formester gives you full design freedom, advanced workflows, and real value at every plan."
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

    <Table
      :title="c4_title"
      :rows="c4_rows"
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

    <MostUsedFeatures
      :itemList="c7_itemList"
      :heading="c7_heading"
      class="page-component-item"
    />

    <SimpleStepsCreate
      :title="c8_title"
      :itemList="c8_itemList"
      class="page-component-item"
    />

    <TemplateSection
      description="Get started with free forms, surveys, &amp; quiz template!"
      :title="c9_title"
      :button="c9_button"
      :specificTemplate="c9_specificTemplate"
      class="page-component-item"
    />

    <TestimonialsV2
      description="See why customers choose Formester over Typeform every time!"
      version="home"
      :heading="c10_heading"
      :testimonials="c10_testimonials"
      class="page-component-item"
    />

    <IntegrationsShowcase
      description="Automate your workflows with zero coding."
      :title="c11_title"
      class="page-component-item"
    />

    <Usecase
      description="Get more done with Formester."
      :title="c12_title"
      :usecase="c12_usecase"
      class="page-component-item"
    />

    <FaqSection
      :title="c13_title"
      :faqList="c13_faqList"
      class="page-component-item"
    />

    <CallToActionSection
      :ctaValue="c14_ctaValue"
      class="page-component-item"
    />
  </div>
</template>

<script setup>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import HeroTabShowcase from '@/components/home/HeroTabShowcase/HeroTabShowcase.vue'
import IntegrationsShowcase from '@/components/v2/IntegrationsShowcase.vue'
import MostUsedFeatures from '@/components/home/MostUsedFeatures.vue'
import SimpleStepsCreate from '@/components/features/SimpleStepsCreate.vue'
import Table from '@/components/table/Table.vue'
import TemplateSection from '@/components/features/TemplateSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import Trustbadges from '@/components/strapi/Trustbadges.vue'
import TrustSeals from '@/components/v2/TrustSeals.vue'
import Usecase from '@/components/home/Usecases/Usecase.vue'

const c0_title = [
  {
    "id": 2419,
    "text": "Formester, a Typeform alternative that can do more! ",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c0_button = []
const c0_clickTriggers = []
const c0_tabCardContent = [
  {
    "id": 38,
    "navTitle": "Builder",
    "title": "No limits on essential fields",
    "image": {
      "id": 2701,
      "imageAlt": "form builder",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3984,
        "name": "1.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "1_9f642a307b",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1300.18,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/1_9f642a307b.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-18T13:17:17.235Z",
        "updatedAt": "2025-09-18T13:17:17.235Z"
      }
    },
    "feature": [
      {
        "id": 48,
        "featureTitle": "Use file uploads, logic, and payments for free.",
        "icon": {
          "id": 2709,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 47,
        "featureTitle": "Access all field types without hidden costs.",
        "icon": {
          "id": 2710,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 46,
        "featureTitle": "Get advanced tools without upgrading.",
        "icon": {
          "id": 2708,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      }
    ]
  },
  {
    "id": 39,
    "navTitle": "Design",
    "title": "Design the way you want",
    "image": {
      "id": 2702,
      "imageAlt": "a screenshot of Formester's Form Building UI",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3985,
        "name": "2.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "2_e6efc9a171",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1285.31,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/2_e6efc9a171.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-18T13:17:48.574Z",
        "updatedAt": "2025-09-18T13:17:48.574Z"
      }
    },
    "feature": [
      {
        "id": 50,
        "featureTitle": "Choose card-style or single page layouts.",
        "icon": {
          "id": 2711,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 52,
        "featureTitle": "Embed forms seamlessly into any website.",
        "icon": {
          "id": 2713,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 49,
        "featureTitle": "Match fonts, colors, and logos with ease.",
        "icon": {
          "id": 2712,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      }
    ]
  },
  {
    "id": 41,
    "navTitle": "Analytics",
    "title": "Track and improve with analytics",
    "image": {
      "id": 2703,
      "imageAlt": "analytics",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3986,
        "name": "3.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "3_2332fe7668",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1074.86,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_2332fe7668.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-18T13:18:07.090Z",
        "updatedAt": "2025-09-18T13:18:07.090Z"
      }
    },
    "feature": [
      {
        "id": 57,
        "featureTitle": "Spot where users drop off instantly.",
        "icon": {
          "id": 2719,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 56,
        "featureTitle": "View every response in a submission table.",
        "icon": {
          "id": 2717,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 55,
        "featureTitle": "Export data for deeper analysis anytime.",
        "icon": {
          "id": 2718,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      }
    ]
  },
  {
    "id": 40,
    "navTitle": "Automations",
    "title": "Connect your tools with ease",
    "image": {
      "id": 2704,
      "imageAlt": "automations",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3987,
        "name": "3.svg",
        "alternativeText": null,
        "caption": null,
        "width": 644,
        "height": 430,
        "formats": null,
        "hash": "3_7d3331b2bd",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1074.86,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_7d3331b2bd.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-18T13:18:24.848Z",
        "updatedAt": "2025-09-18T13:18:24.848Z"
      }
    },
    "feature": [
      {
        "id": 53,
        "featureTitle": "Use powerful integrations with Slack, Sheets, Zapier.",
        "icon": {
          "id": 2714,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 51,
        "featureTitle": "Automate tasks and save hours of work.",
        "icon": {
          "id": 2715,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      },
      {
        "id": 54,
        "featureTitle": "Stay efficient with simple, smart triggers.",
        "icon": {
          "id": 2716,
          "imageAlt": "check icon",
          "imageUrl": "https://formester-strapi.s3.ap-south-1.amazonaws.com/check_icon_79357fa908.png",
          "width": null,
          "height": null,
          "image": null
        }
      }
    ]
  }
]
const c1_title = []
const c1_logos = []
const c2_title = [
  {
    "id": 1407,
    "text": "Used by 15000+ global users",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c2_badges = []
const c3_title = [
  {
    "id": 2882,
    "text": "Why look for a Typeform alternative?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c3_faqList = [
  {
    "id": 1267,
    "header": "High pricing",
    "body": "Typeform is one of the more expensive form builders, making it tough for small businesses or budget-conscious teams to access advanced features without stretching their budgets.",
    "body_markdown": "Typeform is one of the more expensive form builders, making it tough for small businesses or budget-conscious teams to access advanced features without stretching their budgets.",
    "list": []
  },
  {
    "id": 1277,
    "header": "Free plan limitations",
    "body": "The free version restricts the number of questions and responses, often falling short for basic surveys or quizzes and forcing upgrades sooner than expected.",
    "body_markdown": "The free version restricts the number of questions and responses, often falling short for basic surveys or quizzes and forcing upgrades sooner than expected.",
    "list": []
  },
  {
    "id": 1278,
    "header": "Limited features on lower tiers",
    "body": "Advanced conditional logic, approval workflows, and robust integrations are locked behind expensive plans, reducing functionality for teams on smaller budgets.",
    "body_markdown": "Advanced conditional logic, approval workflows, and robust integrations are locked behind expensive plans, reducing functionality for teams on smaller budgets.",
    "list": []
  },
  {
    "id": 1279,
    "header": "Data privacy concerns",
    "body": "All data is stored on Typeform servers, with full data residency control only at the Enterprise level, leaving privacy-conscious organizations concerned.",
    "body_markdown": "All data is stored on Typeform servers, with full data residency control only at the Enterprise level, leaving privacy-conscious organizations concerned.",
    "list": []
  },
  {
    "id": 1280,
    "header": "One-question-at-a-time design drawbacks",
    "body": "While some like it, many users find it slow and frustrating, as it prevents reviewing or editing multiple answers easily.",
    "body_markdown": "While some like it, many users find it slow and frustrating, as it prevents reviewing or editing multiple answers easily.",
    "list": []
  }
]
const c4_title = [
  {
    "id": 1413,
    "text": "Free plan comparison",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c4_rows = [
  {
    "id": 72,
    "rowType": "head"
  },
  {
    "id": 398,
    "rowType": "body"
  },
  {
    "id": 389,
    "rowType": "body"
  },
  {
    "id": 388,
    "rowType": "body"
  },
  {
    "id": 414,
    "rowType": "body"
  },
  {
    "id": 396,
    "rowType": "body"
  },
  {
    "id": 392,
    "rowType": "body"
  },
  {
    "id": 399,
    "rowType": "body"
  },
  {
    "id": 394,
    "rowType": "body"
  },
  {
    "id": 393,
    "rowType": "body"
  },
  {
    "id": 391,
    "rowType": "body"
  },
  {
    "id": 397,
    "rowType": "body"
  },
  {
    "id": 423,
    "rowType": "body"
  },
  {
    "id": 390,
    "rowType": "body"
  },
  {
    "id": 395,
    "rowType": "body"
  },
  {
    "id": 413,
    "rowType": "body"
  },
  {
    "id": 406,
    "rowType": "body"
  },
  {
    "id": 422,
    "rowType": "body"
  },
  {
    "id": 411,
    "rowType": "body"
  },
  {
    "id": 405,
    "rowType": "body"
  },
  {
    "id": 402,
    "rowType": "body"
  },
  {
    "id": 419,
    "rowType": "body"
  },
  {
    "id": 404,
    "rowType": "body"
  },
  {
    "id": 403,
    "rowType": "body"
  },
  {
    "id": 407,
    "rowType": "body"
  },
  {
    "id": 421,
    "rowType": "body"
  },
  {
    "id": 412,
    "rowType": "body"
  },
  {
    "id": 416,
    "rowType": "body"
  },
  {
    "id": 401,
    "rowType": "body"
  },
  {
    "id": 408,
    "rowType": "body"
  },
  {
    "id": 415,
    "rowType": "body"
  },
  {
    "id": 417,
    "rowType": "body"
  },
  {
    "id": 410,
    "rowType": "body"
  },
  {
    "id": 418,
    "rowType": "body"
  },
  {
    "id": 409,
    "rowType": "body"
  }
]
const c5_title = [
  {
    "id": 3056,
    "text": "What about advanced features?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c5_rows = [
  {
    "id": 646,
    "rowType": "head"
  },
  {
    "id": 650,
    "rowType": "body"
  },
  {
    "id": 652,
    "rowType": "body"
  },
  {
    "id": 645,
    "rowType": "body"
  },
  {
    "id": 647,
    "rowType": "body"
  },
  {
    "id": 649,
    "rowType": "body"
  },
  {
    "id": 641,
    "rowType": "body"
  },
  {
    "id": 644,
    "rowType": "body"
  },
  {
    "id": 651,
    "rowType": "body"
  },
  {
    "id": 656,
    "rowType": "body"
  },
  {
    "id": 643,
    "rowType": "body"
  },
  {
    "id": 640,
    "rowType": "body"
  },
  {
    "id": 648,
    "rowType": "body"
  },
  {
    "id": 639,
    "rowType": "body"
  },
  {
    "id": 661,
    "rowType": "body"
  },
  {
    "id": 654,
    "rowType": "body"
  },
  {
    "id": 659,
    "rowType": "body"
  },
  {
    "id": 658,
    "rowType": "body"
  },
  {
    "id": 655,
    "rowType": "body"
  },
  {
    "id": 653,
    "rowType": "body"
  },
  {
    "id": 660,
    "rowType": "body"
  }
]
const c6_title = [
  {
    "id": 1414,
    "text": "Pricing comparison",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c6_rows = [
  {
    "id": 68,
    "rowType": "head"
  },
  {
    "id": 69,
    "rowType": "body"
  },
  {
    "id": 70,
    "rowType": "body"
  },
  {
    "id": 71,
    "rowType": "body"
  }
]
const c7_itemList = [
  {
    "id": 2051,
    "title": "Custom domains",
    "description": "Host forms on your own domain for a fully branded experience.",
    "description_markdown": null,
    "icon": {
      "id": 2722,
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
    },
    "cardImage": {
      "id": 2727,
      "imageAlt": "custom domain",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3926,
        "name": "3_2 screen mockup (1).png",
        "alternativeText": null,
        "caption": null,
        "width": 1174,
        "height": 1164,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_3_2_screen_mockup_1_8fdc29c7b2.png",
            "hash": "large_3_2_screen_mockup_1_8fdc29c7b2",
            "mime": "image/png",
            "name": "large_3_2 screen mockup (1).png",
            "path": null,
            "size": 479.58,
            "width": 1000,
            "height": 991
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_3_2_screen_mockup_1_8fdc29c7b2.png",
            "hash": "small_3_2_screen_mockup_1_8fdc29c7b2",
            "mime": "image/png",
            "name": "small_3_2 screen mockup (1).png",
            "path": null,
            "size": 157.26,
            "width": 500,
            "height": 496
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_3_2_screen_mockup_1_8fdc29c7b2.png",
            "hash": "medium_3_2_screen_mockup_1_8fdc29c7b2",
            "mime": "image/png",
            "name": "medium_3_2 screen mockup (1).png",
            "path": null,
            "size": 304.74,
            "width": 750,
            "height": 744
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_3_2_screen_mockup_1_8fdc29c7b2.png",
            "hash": "thumbnail_3_2_screen_mockup_1_8fdc29c7b2",
            "mime": "image/png",
            "name": "thumbnail_3_2 screen mockup (1).png",
            "path": null,
            "size": 25.86,
            "width": 157,
            "height": 156
          }
        },
        "hash": "3_2_screen_mockup_1_8fdc29c7b2",
        "ext": ".png",
        "mime": "image/png",
        "size": 152.74,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_2_screen_mockup_1_8fdc29c7b2.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:29:06.467Z",
        "updatedAt": "2025-09-03T01:29:06.467Z"
      }
    }
  },
  {
    "id": 2053,
    "title": "Easy embeds",
    "description": "Add forms to any website with just a copy-paste snippet.",
    "description_markdown": null,
    "icon": {
      "id": 2723,
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
    },
    "cardImage": {
      "id": 2729,
      "imageAlt": "embed",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3917,
        "name": "3.png",
        "alternativeText": null,
        "caption": null,
        "width": 593,
        "height": 582,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_3_decaab2d39.png",
            "hash": "small_3_decaab2d39",
            "mime": "image/png",
            "name": "small_3.png",
            "path": null,
            "size": 150.95,
            "width": 500,
            "height": 491
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_3_decaab2d39.png",
            "hash": "thumbnail_3_decaab2d39",
            "mime": "image/png",
            "name": "thumbnail_3.png",
            "path": null,
            "size": 21.23,
            "width": 159,
            "height": 156
          }
        },
        "hash": "3_decaab2d39",
        "ext": ".png",
        "mime": "image/png",
        "size": 37.79,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/3_decaab2d39.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:28:33.473Z",
        "updatedAt": "2025-09-03T01:28:33.473Z"
      }
    }
  },
  {
    "id": 2052,
    "title": "Submission table",
    "description": "Manage all responses in one simple, organized dashboard.",
    "description_markdown": null,
    "icon": {
      "id": 2724,
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
    },
    "cardImage": {
      "id": 2728,
      "imageAlt": "form submissions",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3918,
        "name": "2.png",
        "alternativeText": null,
        "caption": null,
        "width": 593,
        "height": 582,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_2_fd98de152d.png",
            "hash": "small_2_fd98de152d",
            "mime": "image/png",
            "name": "small_2.png",
            "path": null,
            "size": 128.28,
            "width": 500,
            "height": 491
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_2_fd98de152d.png",
            "hash": "thumbnail_2_fd98de152d",
            "mime": "image/png",
            "name": "thumbnail_2.png",
            "path": null,
            "size": 21.94,
            "width": 159,
            "height": 156
          }
        },
        "hash": "2_fd98de152d",
        "ext": ".png",
        "mime": "image/png",
        "size": 32.84,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/2_fd98de152d.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:28:35.734Z",
        "updatedAt": "2025-09-03T01:28:35.734Z"
      }
    }
  },
  {
    "id": 2055,
    "title": "Logic without limits",
    "description": "Build smarter forms with branching, skips, and conditional flows.",
    "description_markdown": null,
    "icon": {
      "id": 2721,
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
    },
    "cardImage": {
      "id": 2725,
      "imageAlt": "dynamic forms",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3927,
        "name": "Frame 1171277235 (1).png",
        "alternativeText": null,
        "caption": null,
        "width": 1186,
        "height": 1164,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Frame_1171277235_1_c16d2e459b.png",
            "hash": "large_Frame_1171277235_1_c16d2e459b",
            "mime": "image/png",
            "name": "large_Frame 1171277235 (1).png",
            "path": null,
            "size": 467.48,
            "width": 1000,
            "height": 981
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Frame_1171277235_1_c16d2e459b.png",
            "hash": "small_Frame_1171277235_1_c16d2e459b",
            "mime": "image/png",
            "name": "small_Frame 1171277235 (1).png",
            "path": null,
            "size": 134.14,
            "width": 500,
            "height": 491
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Frame_1171277235_1_c16d2e459b.png",
            "hash": "medium_Frame_1171277235_1_c16d2e459b",
            "mime": "image/png",
            "name": "medium_Frame 1171277235 (1).png",
            "path": null,
            "size": 275.66,
            "width": 750,
            "height": 736
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Frame_1171277235_1_c16d2e459b.png",
            "hash": "thumbnail_Frame_1171277235_1_c16d2e459b",
            "mime": "image/png",
            "name": "thumbnail_Frame 1171277235 (1).png",
            "path": null,
            "size": 21.74,
            "width": 159,
            "height": 156
          }
        },
        "hash": "Frame_1171277235_1_c16d2e459b",
        "ext": ".png",
        "mime": "image/png",
        "size": 135.6,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Frame_1171277235_1_c16d2e459b.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:29:07.487Z",
        "updatedAt": "2025-09-03T01:29:07.487Z"
      }
    }
  },
  {
    "id": 2054,
    "title": "Scales with your team",
    "description": "Collaborate, share access, and grow without hitting usage caps.",
    "description_markdown": null,
    "icon": {
      "id": 2720,
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
    },
    "cardImage": {
      "id": 2726,
      "imageAlt": "team collaboration",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3925,
        "name": "Frame 1171277237 (2).png",
        "alternativeText": null,
        "caption": null,
        "width": 1186,
        "height": 1164,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Frame_1171277237_2_a21405b429.png",
            "hash": "large_Frame_1171277237_2_a21405b429",
            "mime": "image/png",
            "name": "large_Frame 1171277237 (2).png",
            "path": null,
            "size": 466.87,
            "width": 1000,
            "height": 981
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Frame_1171277237_2_a21405b429.png",
            "hash": "small_Frame_1171277237_2_a21405b429",
            "mime": "image/png",
            "name": "small_Frame 1171277237 (2).png",
            "path": null,
            "size": 140.42,
            "width": 500,
            "height": 491
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Frame_1171277237_2_a21405b429.png",
            "hash": "medium_Frame_1171277237_2_a21405b429",
            "mime": "image/png",
            "name": "medium_Frame 1171277237 (2).png",
            "path": null,
            "size": 281.6,
            "width": 750,
            "height": 736
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Frame_1171277237_2_a21405b429.png",
            "hash": "thumbnail_Frame_1171277237_2_a21405b429",
            "mime": "image/png",
            "name": "thumbnail_Frame 1171277237 (2).png",
            "path": null,
            "size": 23.54,
            "width": 159,
            "height": 156
          }
        },
        "hash": "Frame_1171277237_2_a21405b429",
        "ext": ".png",
        "mime": "image/png",
        "size": 109.78,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Frame_1171277237_2_a21405b429.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:29:06.157Z",
        "updatedAt": "2025-09-03T01:29:06.157Z"
      }
    }
  }
]
const c7_heading = [
  {
    "id": 2424,
    "text": "Why choose Formester?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c8_title = [
  {
    "id": 2421,
    "text": "How to switch?",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c8_itemList = [
  {
    "id": 2056,
    "title": "Import",
    "description": "Paste your Typeform URL or use AI to recreate it in seconds. Import without losing time or effort.",
    "description_markdown": "Paste your Typeform URL or use AI to recreate it in seconds. Import without losing time or effort.",
    "icon": null,
    "cardImage": {
      "id": 2705,
      "imageAlt": "a screenshot of Formester's form builder",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3913,
        "name": "Group 105.png",
        "alternativeText": null,
        "caption": null,
        "width": 1364,
        "height": 1042,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_105_5b6d5586e0.png",
            "hash": "large_Group_105_5b6d5586e0",
            "mime": "image/png",
            "name": "large_Group 105.png",
            "path": null,
            "size": 72.08,
            "width": 1000,
            "height": 764
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_105_5b6d5586e0.png",
            "hash": "small_Group_105_5b6d5586e0",
            "mime": "image/png",
            "name": "small_Group 105.png",
            "path": null,
            "size": 27.9,
            "width": 500,
            "height": 382
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_105_5b6d5586e0.png",
            "hash": "medium_Group_105_5b6d5586e0",
            "mime": "image/png",
            "name": "medium_Group 105.png",
            "path": null,
            "size": 49.34,
            "width": 750,
            "height": 573
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_105_5b6d5586e0.png",
            "hash": "thumbnail_Group_105_5b6d5586e0",
            "mime": "image/png",
            "name": "thumbnail_Group 105.png",
            "path": null,
            "size": 8.93,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Group_105_5b6d5586e0",
        "ext": ".png",
        "mime": "image/png",
        "size": 18.97,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_105_5b6d5586e0.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:28:30.672Z",
        "updatedAt": "2025-09-03T01:28:30.672Z"
      }
    }
  },
  {
    "id": 2057,
    "title": "Customize",
    "description": "Add logos, fonts, and colors, or host on your domain. Make every form reflect your brand identity.",
    "description_markdown": "Add logos, fonts, and colors, or host on your domain. Make every form reflect your brand identity.",
    "icon": null,
    "cardImage": {
      "id": 2706,
      "imageAlt": "a screenshot of Formester's form builder",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3919,
        "name": "Group 103.png",
        "alternativeText": null,
        "caption": null,
        "width": 1364,
        "height": 1042,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_103_fbf4745295.png",
            "hash": "large_Group_103_fbf4745295",
            "mime": "image/png",
            "name": "large_Group 103.png",
            "path": null,
            "size": 206.49,
            "width": 1000,
            "height": 764
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_103_fbf4745295.png",
            "hash": "small_Group_103_fbf4745295",
            "mime": "image/png",
            "name": "small_Group 103.png",
            "path": null,
            "size": 68.18,
            "width": 500,
            "height": 382
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_103_fbf4745295.png",
            "hash": "medium_Group_103_fbf4745295",
            "mime": "image/png",
            "name": "medium_Group 103.png",
            "path": null,
            "size": 129.6,
            "width": 750,
            "height": 573
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_103_fbf4745295.png",
            "hash": "thumbnail_Group_103_fbf4745295",
            "mime": "image/png",
            "name": "thumbnail_Group 103.png",
            "path": null,
            "size": 19.27,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Group_103_fbf4745295",
        "ext": ".png",
        "mime": "image/png",
        "size": 57.98,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_103_fbf4745295.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:28:38.635Z",
        "updatedAt": "2025-09-03T01:28:38.635Z"
      }
    }
  },
  {
    "id": 2058,
    "title": "Embed",
    "description": "Share links, embed on your site, or send by email. Track responses and connect with your favorite apps.",
    "description_markdown": "Share links, embed on your site, or send by email. Track responses and connect with your favorite apps.",
    "icon": null,
    "cardImage": {
      "id": 2707,
      "imageAlt": "a screenshot of Formester's form builder",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 3915,
        "name": "Group 104.png",
        "alternativeText": null,
        "caption": null,
        "width": 1364,
        "height": 1042,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Group_104_2494059987.png",
            "hash": "large_Group_104_2494059987",
            "mime": "image/png",
            "name": "large_Group 104.png",
            "path": null,
            "size": 102.29,
            "width": 1000,
            "height": 764
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Group_104_2494059987.png",
            "hash": "small_Group_104_2494059987",
            "mime": "image/png",
            "name": "small_Group 104.png",
            "path": null,
            "size": 37.21,
            "width": 500,
            "height": 382
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Group_104_2494059987.png",
            "hash": "medium_Group_104_2494059987",
            "mime": "image/png",
            "name": "medium_Group 104.png",
            "path": null,
            "size": 67,
            "width": 750,
            "height": 573
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Group_104_2494059987.png",
            "hash": "thumbnail_Group_104_2494059987",
            "mime": "image/png",
            "name": "thumbnail_Group 104.png",
            "path": null,
            "size": 10.96,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Group_104_2494059987",
        "ext": ".png",
        "mime": "image/png",
        "size": 24.85,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Group_104_2494059987.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2025-09-03T01:28:32.911Z",
        "updatedAt": "2025-09-03T01:28:32.911Z"
      }
    }
  }
]
const c9_title = [
  {
    "id": 2420,
    "text": "500+ free templates",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c9_button = {
  "id": 1059,
  "link": "/templates/",
  "text": "Explore more...",
  "type": "Primary",
  "showArrow": null
}
const c9_specificTemplate = [
  {
    "id": 1694,
    "text": "general-job-application-form-17390"
  },
  {
    "id": 1693,
    "text": "customer-feedback-form-31840"
  },
  {
    "id": 1692,
    "text": "art-class-registration-form-29336"
  }
]
const c10_heading = [
  {
    "id": 1406,
    "text": "User stories",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c10_testimonials = [
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
const c11_title = [
  {
    "id": 2422,
    "text": "Integrate with powerful apps!",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c12_title = [
  {
    "id": 2423,
    "text": "Built for every task!",
    "highlight": false,
    "color": "#475467",
    "bold": false
  }
]
const c12_usecase = [
  {
    "id": 72,
    "title": "Feedback collection",
    "description": "Collect feedback both online and offline. Summarize responses, and make better decisions.",
    "image": {
      "id": 3934,
      "name": "1 1.png",
      "alternativeText": null,
      "caption": null,
      "width": 682,
      "height": 521,
      "formats": {
        "small": {
          "ext": ".png",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_1_1_ac7717b4d8.png",
          "hash": "small_1_1_ac7717b4d8",
          "mime": "image/png",
          "name": "small_1 1.png",
          "path": null,
          "size": 351.25,
          "width": 500,
          "height": 382
        },
        "thumbnail": {
          "ext": ".png",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_1_1_ac7717b4d8.png",
          "hash": "thumbnail_1_1_ac7717b4d8",
          "mime": "image/png",
          "name": "thumbnail_1 1.png",
          "path": null,
          "size": 73.19,
          "width": 204,
          "height": 156
        }
      },
      "hash": "1_1_ac7717b4d8",
      "ext": ".png",
      "mime": "image/png",
      "size": 128.17,
      "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/1_1_ac7717b4d8.png",
      "previewUrl": null,
      "provider": "aws-s3",
      "provider_metadata": null,
      "createdAt": "2025-09-03T01:40:08.609Z",
      "updatedAt": "2025-09-03T01:40:08.609Z"
    }
  },
  {
    "id": 71,
    "title": "Online assessment",
    "description": "Create advanced quizzes or tests with auto scoring to automate the assessment.",
    "image": {
      "id": 3936,
      "name": "6 1.png",
      "alternativeText": null,
      "caption": null,
      "width": 682,
      "height": 521,
      "formats": {
        "small": {
          "ext": ".png",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_6_1_a1ce314aef.png",
          "hash": "small_6_1_a1ce314aef",
          "mime": "image/png",
          "name": "small_6 1.png",
          "path": null,
          "size": 445.28,
          "width": 500,
          "height": 382
        },
        "thumbnail": {
          "ext": ".png",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_6_1_a1ce314aef.png",
          "hash": "thumbnail_6_1_a1ce314aef",
          "mime": "image/png",
          "name": "thumbnail_6 1.png",
          "path": null,
          "size": 87.96,
          "width": 204,
          "height": 156
        }
      },
      "hash": "6_1_a1ce314aef",
      "ext": ".png",
      "mime": "image/png",
      "size": 178.77,
      "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/6_1_a1ce314aef.png",
      "previewUrl": null,
      "provider": "aws-s3",
      "provider_metadata": null,
      "createdAt": "2025-09-03T01:40:08.983Z",
      "updatedAt": "2025-09-03T01:40:08.983Z"
    }
  },
  {
    "id": 74,
    "title": "Collect applications",
    "description": "Collect documents and files. Use logic to filter and categorize applicants in the form.",
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
    "id": 73,
    "title": "Receive payments",
    "description": "Accept secure payments through your forms, track transactions, and manage orders without extra tools.",
    "image": {
      "id": 3899,
      "name": "online payments.png",
      "alternativeText": "online payments",
      "caption": "online payments",
      "width": 500,
      "height": 333,
      "formats": {
        "thumbnail": {
          "ext": ".png",
          "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_online_payments_dee4f23b6e.png",
          "hash": "thumbnail_online_payments_dee4f23b6e",
          "mime": "image/png",
          "name": "thumbnail_online payments.png",
          "path": null,
          "size": 64.16,
          "width": 234,
          "height": 156
        }
      },
      "hash": "online_payments_dee4f23b6e",
      "ext": ".png",
      "mime": "image/png",
      "size": 58.3,
      "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/online_payments_dee4f23b6e.png",
      "previewUrl": null,
      "provider": "aws-s3",
      "provider_metadata": null,
      "createdAt": "2025-09-01T03:13:33.239Z",
      "updatedAt": "2025-09-01T03:13:33.239Z"
    }
  }
]
const c13_title = [
  {
    "id": 1409,
    "text": "FAQs",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c13_faqList = [
  {
    "id": 1086,
    "header": "Can I keep the same look and feel as Typeform?",
    "body": "You can do even more. Formester lets you fully customize layout, colors, fonts, and even your own domain.",
    "body_markdown": "You can do even more. Formester lets you fully customize layout, colors, fonts, and even your own domain.\n\n",
    "list": []
  },
  {
    "id": 1087,
    "header": "Does Formester have the same features as Typeform?",
    "body": "It has everything Typeform offers—and more. Like AI form creation, flexible layouts, and better branding control.\n\n",
    "body_markdown": "It has everything Typeform offers—and more. Like AI form creation, flexible layouts, and better branding control.\n\n",
    "list": []
  },
  {
    "id": 1088,
    "header": "What if I already built all my forms in Typeform?",
    "body": "You can easily import them into your Formester account in the form creation flow.\n\n",
    "body_markdown": "You can easily import them into your Formester account in the form creation flow.\n\n",
    "list": []
  },
  {
    "id": 1092,
    "header": "Will my forms look professional?",
    "body": "Absolutely. Formester forms are clean, mobile-friendly, and built to match your brand perfectly.\n\n",
    "body_markdown": "Absolutely. Formester forms are clean, mobile-friendly, and built to match your brand perfectly.\n\n",
    "list": []
  },
  {
    "id": 1089,
    "header": "What kind of support will I get?",
    "body": "You get real help from real humans. No bots, no delays—just answers when you need them.",
    "body_markdown": "You get real help from real humans. No bots, no delays—just answers when you need them.",
    "list": []
  },
  {
    "id": 1090,
    "header": "Can I try Formester before paying?",
    "body": "Yes. We offer a free plan so you can explore everything with no pressure or credit card required.",
    "body_markdown": "Yes. We offer a free plan so you can explore everything with no pressure or credit card required.",
    "list": []
  },
  {
    "id": 1091,
    "header": "What makes Formester better than Typeform?",
    "body": "More control, better pricing, easier setup, and actual support. You’re not just another user, you’re supported.",
    "body_markdown": "More control, better pricing, easier setup, and actual support. You’re not just another user, you’re supported.",
    "list": []
  }
]
const c14_ctaValue = {
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
  "title": "Formester: a free Typeform alternative! (Get more for less)",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/typeform-alternative/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2025-09-24T00:59:03.370Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Formester is a free alternative to Typeform that offers AI powered creation, full control over design, custom domains, no paywalls on field types and more... "
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Formester: a free Typeform alternative! (Get more for less)"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/typeform-alternative/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Formester: a free Typeform alternative! (Get more for less)"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Formester is a free alternative to Typeform that offers AI powered creation, full control over design, custom domains, no paywalls on field types and more... "
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
      "content": "https://formester.com/typeform-alternative/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Formester: a free Typeform alternative! (Get more for less)"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Formester is a free alternative to Typeform that offers AI powered creation, full control over design, custom domains, no paywalls on field types and more... "
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
        "typeform alternative",
        "best typeform alternative",
        "typeform",
        "form builder",
        "alternative to typeform",
        "free typeform alternative",
        "best alternative to typeform"
      ]
    }
  ]
})
</script>
