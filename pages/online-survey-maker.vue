<template>
  <div>
    <HeroRowLayout
      title="Best Free Online Survey Maker"
      description="Create, Customize &amp; Publish your online surveys with our free online survey tool. Use our AI to build a complete Survey in seconds."
      :buttons="c0_buttons"
      :titleParts="c0_titleParts"
      :button="c0_button"
      :clickTriggers="c0_clickTriggers"
      :heroImage="c0_heroImage"
      :stats="c0_stats"
      class="page-component-item"
    />

    <ThreeColBenefits
      :title="c1_title"
      :itemList="c1_itemList"
      class="page-component-item"
    />

    <FeatureShowcase
      steps
      :title="c2_title"
      :itemList="c2_itemList"
      class="page-component-item"
    />

    <FeatureShowcase
      :steps="false"
      :title="c3_title"
      :itemList="c3_itemList"
      class="page-component-item"
    />

    <TemplateSection
      description="Get Started with Free Survey Templates"
      :title="c4_title"
      :button="c4_button"
      :specificTemplate="c4_specificTemplate"
      class="page-component-item"
    />

    <TestimonialsV2
      version="home"
      :heading="c5_heading"
      :testimonials="c5_testimonials"
      class="page-component-item"
    />

    <FaqSection
      :title="c6_title"
      :faqList="c6_faqList"
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
import FaqSection from '@/components/v2/FaqSection.vue'
import FeatureShowcase from '@/components/features/FeatureShowcase.vue'
import HeroRowLayout from '@/components/v2/HeroRowLayout.vue'
import TemplateSection from '@/components/features/TemplateSection.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import ThreeColBenefits from '@/components/features/ThreeColBenefits.vue'

const c0_buttons = []
const c0_titleParts = []
const c0_button = {
  "id": 302,
  "link": "https://app.formester.com/users/sign_up",
  "text": "Signup for Free!",
  "type": "Primary",
  "showArrow": null
}
const c0_clickTriggers = [
  {
    "id": 608,
    "text": "Free"
  },
  {
    "id": 606,
    "text": "No Coding"
  },
  {
    "id": 607,
    "text": "Trusted by 4000+ Users"
  }
]
const c0_heroImage = {
  "id": 643,
  "imageAlt": "online survey maker",
  "imageUrl": null,
  "width": null,
  "height": null,
  "image": {
    "id": 2384,
    "name": "submissions.svg",
    "alternativeText": null,
    "caption": null,
    "width": 643,
    "height": 404,
    "formats": null,
    "hash": "submissions_5b9ac668ab",
    "ext": ".svg",
    "mime": "image/svg+xml",
    "size": 288.52,
    "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/submissions_5b9ac668ab.svg",
    "previewUrl": null,
    "provider": "aws-s3",
    "provider_metadata": null,
    "createdAt": "2024-11-11T04:07:53.162Z",
    "updatedAt": "2024-11-11T04:07:53.162Z"
  }
}
const c0_stats = []
const c1_title = [
  {
    "id": 315,
    "text": "Why Use this Survey Maker?",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c1_itemList = [
  {
    "id": 471,
    "title": "Easy Setup",
    "description": "Our Online survey generator makes it simple to build professional surveys in minutes. Whether you’re a beginner or experienced, the drag and drop interface will save you time and effort.",
    "description_markdown": "Our Online survey generator makes it simple to build professional surveys in minutes. \n\nWhether you’re a beginner or experienced, the **[drag and drop interface](/features/drag-and-drop-form-builder/)** will save you time and effort.",
    "icon": null,
    "cardImage": {
      "id": 650,
      "imageAlt": "rocket icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2035,
        "name": "verified icon.svg",
        "alternativeText": "verified icon",
        "caption": "verified icon",
        "width": 69,
        "height": 69,
        "formats": null,
        "hash": "robust_analytics_2_90200ca6d3",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.2,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_2_90200ca6d3.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-09T01:09:07.920Z",
        "updatedAt": "2024-09-11T04:41:50.720Z"
      }
    }
  },
  {
    "id": 474,
    "title": "AI-Powered Survey Creation",
    "description": "Use the AI survey maker to make a survey with a simple prompt. This is the best way to make a survey. It removes guesswork and speeds up the process. You can focus on collecting feedback instead of wasting time on complex survey questions.",
    "description_markdown": "Use the **[AI survey maker](/ai-form-generator/)** to make a survey with a simple prompt. This is the best way to make a survey. \n\nIt removes guesswork and speeds up the process. You can focus on collecting feedback instead of wasting time on complex survey questions.",
    "icon": null,
    "cardImage": {
      "id": 653,
      "imageAlt": "star icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2314,
        "name": "click icon.svg",
        "alternativeText": "click icon",
        "caption": "click icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "payment_processing_a464a1deda",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.28,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/payment_processing_a464a1deda.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:35:29.676Z",
        "updatedAt": "2025-01-20T09:58:17.564Z"
      }
    }
  },
  {
    "id": 472,
    "title": "Custom Branding",
    "description": "Create surveys that reflect your brand perfectly. With the best online survey maker, you can add your logo, change colors, and customize every detail to match your business. Build trust and get more responses by keeping your surveys professional.",
    "description_markdown": "Create surveys that reflect your brand perfectly. With the **[custom branding kit](/features/branding-kit/)**, you can add your logo, change colors, and customize every detail to match your business. \n\nBuild trust and get more responses by keeping your surveys professional.",
    "icon": null,
    "cardImage": {
      "id": 652,
      "imageAlt": "workflow icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2311,
        "name": "form icon.svg",
        "alternativeText": "form icon",
        "caption": "form icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "robust_analytics_c6794dd4e0",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.06,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_c6794dd4e0.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:35:03.804Z",
        "updatedAt": "2025-04-01T07:48:54.716Z"
      }
    }
  },
  {
    "id": 481,
    "title": "Advanced Logic",
    "description": "Our online survey maker supports question branching, so your survey adapts to each user’s responses. This makes your surveys smarter, more personalized, and improves the quality of the data you collect.",
    "description_markdown": "Our online survey maker supports **[question branching](/features/conditional-logic/)**, so your survey adapts to each user’s responses. \n\nThis makes your surveys smarter, more personalized, and improves the quality of the data you collect.",
    "icon": null,
    "cardImage": {
      "id": 661,
      "imageAlt": "data flow icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2317,
        "name": "data icon.svg",
        "alternativeText": "data icon",
        "caption": "data icon",
        "width": 68,
        "height": 68,
        "formats": null,
        "hash": "Integrate_1c339fe8ed",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.64,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Integrate_1c339fe8ed.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:39:31.563Z",
        "updatedAt": "2025-01-20T09:58:26.735Z"
      }
    }
  },
  {
    "id": 480,
    "title": "Powerful Integrations",
    "description": "Formester connects to over 1,000 apps. This can help you collect, store, and use your survey data with CRM tools, project management software, or social media for better workflow automation.",
    "description_markdown": "Formester can easily **[integrate to over 1,000 apps](/integrations/)**. This can help you collect, store, and use your survey data with CRM tools, project management software, or social media for better workflow automation.",
    "icon": null,
    "cardImage": {
      "id": 662,
      "imageAlt": "link icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1613,
        "name": "integrations.svg",
        "alternativeText": "security icon",
        "caption": "security icon",
        "width": 69,
        "height": 69,
        "formats": null,
        "hash": "integrations_f083da9aaf",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 3.3,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/integrations_f083da9aaf.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-07-31T16:42:03.856Z",
        "updatedAt": "2024-10-21T05:56:12.217Z"
      }
    }
  },
  {
    "id": 482,
    "title": "Real-Time Analytics",
    "description": "Get instant insights with detailed metrics. Track responses, view completion rates, and even recover partial submissions. Our advanced analytics helps you improve and optimize your surveys for your target audience.",
    "description_markdown": "Get instant insights with detailed metrics. Track responses, view completion rates, and even recover partial submissions. \n\nOur **[advanced analytics](/features/form-analytics/)** helps you improve and optimize your surveys for your target audience.",
    "icon": null,
    "cardImage": {
      "id": 663,
      "imageAlt": "analytics icon",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1886,
        "name": "analytics icon.svg",
        "alternativeText": "analytics icon",
        "caption": "analytics icon",
        "width": 69,
        "height": 68,
        "formats": null,
        "hash": "robust_analytics_cd40e12719",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.04,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/robust_analytics_cd40e12719.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-05T04:56:59.983Z",
        "updatedAt": "2024-09-05T05:03:59.073Z"
      }
    }
  }
]
const c2_title = [
  {
    "id": 316,
    "text": "How to Build a Survey with Formester?",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c2_itemList = [
  {
    "id": 479,
    "title": "Create a Survey",
    "description": "Choose from a library of free online survey templates or let the AI survey maker design a survey for you. This saves you time while making sure that your survey is well-structured and professional.",
    "description_markdown": "Choose from a library of free online survey templates or let the AI survey maker design a survey for you. \n\nThis saves you time while making sure that your survey is well-structured and professional.",
    "icon": null,
    "cardImage": {
      "id": 659,
      "imageAlt": "formester's form creation ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2326,
        "name": "Component 926.png",
        "alternativeText": null,
        "caption": null,
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_926_8b5b5763d0.png",
            "hash": "small_Component_926_8b5b5763d0",
            "mime": "image/png",
            "name": "small_Component 926.png",
            "path": null,
            "size": 27.14,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_926_8b5b5763d0.png",
            "hash": "thumbnail_Component_926_8b5b5763d0",
            "mime": "image/png",
            "name": "thumbnail_Component 926.png",
            "path": null,
            "size": 8.7,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_926_8b5b5763d0",
        "ext": ".png",
        "mime": "image/png",
        "size": 7.36,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_8b5b5763d0.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T18:49:41.936Z",
        "updatedAt": "2024-11-05T18:49:41.936Z"
      }
    }
  },
  {
    "id": 468,
    "title": "Customize",
    "description": "Use the drag-and-drop interface to add fields, adjust questions, and include custom branding. Formester is the best survey maker. It offers advanced features like ratings and scales. This lets you customize every part of your survey.",
    "description_markdown": "Use the drag-and-drop interface to add fields, adjust questions, and include custom branding. Formester is the best survey maker. \n\nIt offers advanced features like ratings and scales. This lets you customize every part of your survey.",
    "icon": null,
    "cardImage": {
      "id": 645,
      "imageAlt": "formester's customization ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2337,
        "name": "Component 930.png",
        "alternativeText": null,
        "caption": null,
        "width": 1364,
        "height": 1042,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Component_930_f7dbffb8f5.png",
            "hash": "large_Component_930_f7dbffb8f5",
            "mime": "image/png",
            "name": "large_Component 930.png",
            "path": null,
            "size": 107.91,
            "width": 1000,
            "height": 764
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_930_f7dbffb8f5.png",
            "hash": "small_Component_930_f7dbffb8f5",
            "mime": "image/png",
            "name": "small_Component 930.png",
            "path": null,
            "size": 37.78,
            "width": 500,
            "height": 382
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Component_930_f7dbffb8f5.png",
            "hash": "medium_Component_930_f7dbffb8f5",
            "mime": "image/png",
            "name": "medium_Component 930.png",
            "path": null,
            "size": 69.26,
            "width": 750,
            "height": 573
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_930_f7dbffb8f5.png",
            "hash": "thumbnail_Component_930_f7dbffb8f5",
            "mime": "image/png",
            "name": "thumbnail_Component 930.png",
            "path": null,
            "size": 11.26,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_930_f7dbffb8f5",
        "ext": ".png",
        "mime": "image/png",
        "size": 29.39,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_930_f7dbffb8f5.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:02:24.381Z",
        "updatedAt": "2024-11-05T19:02:24.381Z"
      }
    }
  },
  {
    "id": 464,
    "title": "Optimize",
    "description": "Improve your survey with features like question branching, auto-save, and form limiter. These options make your survey more dynamic, keeping users engaged and helping you collect high-quality data.",
    "description_markdown": "Improve your survey with features like question branching, auto-save, and form limiter. \n\nThese options make your survey more dynamic, keeping users engaged and helping you collect high-quality data.",
    "icon": null,
    "cardImage": {
      "id": 646,
      "imageAlt": "formester's advanced features ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2339,
        "name": "Component 938.png",
        "alternativeText": "a screenshot of formester multi user collaboration",
        "caption": "a screenshot of formester multi user collaboration",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_938_a67e13c901.png",
            "hash": "small_Component_938_a67e13c901",
            "mime": "image/png",
            "name": "small_Component 938.png",
            "path": null,
            "size": 48.11,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_938_a67e13c901.png",
            "hash": "thumbnail_Component_938_a67e13c901",
            "mime": "image/png",
            "name": "thumbnail_Component 938.png",
            "path": null,
            "size": 12.55,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_938_a67e13c901",
        "ext": ".png",
        "mime": "image/png",
        "size": 13.44,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_938_a67e13c901.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:03:44.864Z",
        "updatedAt": "2024-12-11T03:40:27.737Z"
      }
    }
  },
  {
    "id": 476,
    "title": "Publish or Embed",
    "description": "Share your survey with ease. Publish directly via social sharing, collaborate with others, or generate a QR code. You can also embed the survey on your website or share via email.",
    "description_markdown": "Share your survey with ease. Publish directly via social sharing, **[collaborate with your team](/features/collaborative-forms/)**, or generate a QR code. \n\nYou can also embed the survey on your website or share via email.",
    "icon": null,
    "cardImage": {
      "id": 658,
      "imageAlt": "formester's publish form ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2335,
        "name": "Component 931.png",
        "alternativeText": "a screenshot of formester publish ui",
        "caption": "a screenshot of formester publish ui",
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_931_6d1d4e253f.png",
            "hash": "small_Component_931_6d1d4e253f",
            "mime": "image/png",
            "name": "small_Component 931.png",
            "path": null,
            "size": 45.05,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_931_6d1d4e253f.png",
            "hash": "thumbnail_Component_931_6d1d4e253f",
            "mime": "image/png",
            "name": "thumbnail_Component 931.png",
            "path": null,
            "size": 12.17,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_931_6d1d4e253f",
        "ext": ".png",
        "mime": "image/png",
        "size": 13.69,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_931_6d1d4e253f.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:02:06.083Z",
        "updatedAt": "2024-12-11T03:44:03.282Z"
      }
    }
  },
  {
    "id": 467,
    "title": "Analyze Results",
    "description": "Formester tracks all survey results in real-time. View completion rates, recover partial submissions, and analyze detailed metrics to measure success and identify areas for improvement.",
    "description_markdown": "Formester tracks all survey results in real-time. View completion rates, recover partial submissions, and analyze detailed metrics to measure success and identify areas for improvement.",
    "icon": null,
    "cardImage": {
      "id": 644,
      "imageAlt": "formester's analytics ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2341,
        "name": "Component 926.png",
        "alternativeText": null,
        "caption": null,
        "width": 1364,
        "height": 1042,
        "formats": {
          "large": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/large_Component_926_628193a9ba.png",
            "hash": "large_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "large_Component 926.png",
            "path": null,
            "size": 102.67,
            "width": 1000,
            "height": 764
          },
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_926_628193a9ba.png",
            "hash": "small_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "small_Component 926.png",
            "path": null,
            "size": 38.5,
            "width": 500,
            "height": 382
          },
          "medium": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/medium_Component_926_628193a9ba.png",
            "hash": "medium_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "medium_Component 926.png",
            "path": null,
            "size": 68.34,
            "width": 750,
            "height": 573
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_926_628193a9ba.png",
            "hash": "thumbnail_Component_926_628193a9ba",
            "mime": "image/png",
            "name": "thumbnail_Component 926.png",
            "path": null,
            "size": 11.63,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_926_628193a9ba",
        "ext": ".png",
        "mime": "image/png",
        "size": 22.19,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_628193a9ba.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:04:10.169Z",
        "updatedAt": "2024-11-05T19:04:10.169Z"
      }
    }
  }
]
const c3_title = [
  {
    "id": 319,
    "text": "Build Advanced Surveys",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c3_itemList = [
  {
    "id": 473,
    "title": "Question Branching",
    "description": "The Question branching or Logic Jump lets you create smart surveys. Respondents see different questions based on their answers, ensuring a personalized experience and better data.",
    "description_markdown": "The **Conditional Logic** lets you create smart surveys. Respondents see different questions based on their answers, ensuring a personalized experience and better data.",
    "icon": null,
    "cardImage": {
      "id": 654,
      "imageAlt": "formester's conditional logic ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2336,
        "name": "Component 942.png",
        "alternativeText": null,
        "caption": null,
        "width": 682,
        "height": 521,
        "formats": {
          "small": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/small_Component_942_1cfab7e277.png",
            "hash": "small_Component_942_1cfab7e277",
            "mime": "image/png",
            "name": "small_Component 942.png",
            "path": null,
            "size": 32.92,
            "width": 500,
            "height": 382
          },
          "thumbnail": {
            "ext": ".png",
            "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/thumbnail_Component_942_1cfab7e277.png",
            "hash": "thumbnail_Component_942_1cfab7e277",
            "mime": "image/png",
            "name": "thumbnail_Component 942.png",
            "path": null,
            "size": 9.36,
            "width": 204,
            "height": 156
          }
        },
        "hash": "Component_942_1cfab7e277",
        "ext": ".png",
        "mime": "image/png",
        "size": 11.22,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_942_1cfab7e277.png",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-05T19:02:15.599Z",
        "updatedAt": "2024-11-05T19:02:15.599Z"
      }
    }
  },
  {
    "id": 475,
    "title": "Partial Submission Recovery",
    "description": "Even if respondents don't finish the survey, the Partial submission feature will help you collect valuable data from partially completed surveys, improving response rates.",
    "description_markdown": "Even if respondents don't finish the survey, the **[Partial submission](/features/partial-submissions/)** feature will help you collect valuable data from partially completed surveys, improving response rates.",
    "icon": null,
    "cardImage": {
      "id": 657,
      "imageAlt": "formester's partial submissions ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1994,
        "name": "a screenshot of formester's partial submission.svg",
        "alternativeText": "a screenshot of formester's partial submission",
        "caption": "a screenshot of formester's partial submission",
        "width": 682,
        "height": 521,
        "formats": null,
        "hash": "Component_925_09c922c915",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 79.32,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_09c922c915.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-06T10:47:36.313Z",
        "updatedAt": "2024-09-06T10:47:55.583Z"
      }
    }
  },
  {
    "id": 477,
    "title": "Email Autoresponder",
    "description": "Send automatic emails to respondents when they complete your survey. This helps build trust and keeps your audience engaged after they’ve submitted their answers.",
    "description_markdown": "**[Send automatic emails](/features/autoresponder-email/)** to respondents when they complete your survey. This helps build trust and keeps your audience engaged after they’ve submitted their answers.",
    "icon": null,
    "cardImage": {
      "id": 656,
      "imageAlt": "formester's email autoresponder ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2381,
        "name": "a screenshot of formester's email autoresponder ui.svg",
        "alternativeText": "a screenshot of formester's email autoresponder ui",
        "caption": "a screenshot of formester's email autoresponder ui",
        "width": 682,
        "height": 522,
        "formats": null,
        "hash": "a_screenshot_of_formester_s_email_autoresponder_ui_d2039cda00",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 209.5,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/a_screenshot_of_formester_s_email_autoresponder_ui_d2039cda00.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-11-11T03:27:24.204Z",
        "updatedAt": "2024-11-11T04:25:47.541Z"
      }
    }
  },
  {
    "id": 478,
    "title": "Scoring",
    "description": "Formester allows you to assign scores to responses. This feature is perfect for quizzes, assessments, or feedback surveys that require scoring or ranking.",
    "description_markdown": "Formester allows you to assign scores to responses. This feature is perfect for **[quizzes](/templates/categories/quizzes/)**, assessments, or feedback surveys that require scoring or ranking.",
    "icon": null,
    "cardImage": {
      "id": 655,
      "imageAlt": "formester's scoring ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 1652,
        "name": "unlock-advanced-functionality.svg",
        "alternativeText": null,
        "caption": null,
        "width": 495,
        "height": 293,
        "formats": null,
        "hash": "unlock_advanced_functionality_3c06e26952",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 54.22,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/unlock_advanced_functionality_3c06e26952.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-07-31T18:40:41.266Z",
        "updatedAt": "2024-07-31T18:40:41.266Z"
      }
    }
  },
  {
    "id": 483,
    "title": "Form Limiter",
    "description": "Limit responses by time or number of submissions. This feature is great for limited-time offers, contests, or surveys where you only need a certain number of responses.",
    "description_markdown": "Limit responses by time or number of submissions with the help of in-built **[Form Limiter](/features/form-limiter/)**. This feature is great for limited-time offers, contests, or surveys where you only need a certain number of responses.",
    "icon": null,
    "cardImage": {
      "id": 703,
      "imageAlt": "formester's form limiter ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2022,
        "name": "a screenshot of setting form response limits in formester.svg",
        "alternativeText": "a screenshot of setting form response limits in formester",
        "caption": "a screenshot of setting form response limits in formester",
        "width": 682,
        "height": 521,
        "formats": null,
        "hash": "Component_926_1_2340a59b8c",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 159.72,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_926_1_2340a59b8c.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-06T11:00:40.675Z",
        "updatedAt": "2024-09-06T11:02:38.112Z"
      }
    }
  },
  {
    "id": 484,
    "title": "QR Code Generation",
    "description": "You can turn any survey into a QR code. Our free survey maker with QR code helps people access your survey while on the go. This is perfect for in-person events or physical locations.",
    "description_markdown": "You can turn any survey into a **[QR code](/features/qr-code-generator/)**. Our free survey maker with QR code helps people access your survey while on the go. \n\nThis is perfect for in-person events or physical locations.",
    "icon": null,
    "cardImage": {
      "id": 702,
      "imageAlt": "formester's qr code generator ui",
      "imageUrl": null,
      "width": null,
      "height": null,
      "image": {
        "id": 2013,
        "name": "a screenshot of sharing a custom qr code in formester.svg",
        "alternativeText": "a screenshot of sharing a custom qr code in formester",
        "caption": "a screenshot of sharing a custom qr code in formester",
        "width": 682,
        "height": 521,
        "formats": null,
        "hash": "Component_925_3_35ae251d81",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 110.6,
        "url": "https://formester-strapi.s3.ap-south-1.amazonaws.com/Component_925_3_35ae251d81.svg",
        "previewUrl": null,
        "provider": "aws-s3",
        "provider_metadata": null,
        "createdAt": "2024-09-06T10:56:21.303Z",
        "updatedAt": "2024-09-06T10:58:02.629Z"
      }
    }
  }
]
const c4_title = [
  {
    "id": 320,
    "text": "Free Online Survey Templates",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c4_button = {
  "id": 303,
  "link": "/templates/categories/survey-forms/",
  "text": "More templates",
  "type": "Primary",
  "showArrow": null
}
const c4_specificTemplate = []
const c5_heading = [
  {
    "id": 314,
    "text": "Testimonials",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c5_testimonials = [
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
  }
]
const c6_title = [
  {
    "id": 318,
    "text": "FAQs",
    "highlight": false,
    "color": null,
    "bold": null
  }
]
const c6_faqList = [
  {
    "id": 182,
    "header": "Can I use Formester for free?",
    "body": "Yes, Formester offers a free plan with access to essential features, including survey creation, free templates, and basic analytics.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 183,
    "header": "How does the AI survey maker work?",
    "body": "Start by providing a simple prompt to the AI. It will build an entire survey for you. This will save a lot of time and also make sure that the survey is well-structured.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 185,
    "header": "Can I add my own branding?",
    "body": "Yes! You can customize your surveys completely. Add your brand’s logo, colors, and fonts. This creates a professional and cohesive experience.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 184,
    "header": "What is question branching?",
    "body": "Question branching lets you display different questions based on a respondent’s earlier answers. This makes your survey more personal and relevant.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 186,
    "header": "Can I collect data even if the survey isn’t completed?",
    "body": "Yes, with the partial submission feature, you can collect and analyze valuable data from incomplete surveys.",
    "body_markdown": null,
    "list": []
  },
  {
    "id": 187,
    "header": "How can I share my survey?",
    "body": "You can share your survey through email or social media. You can also create a QR code. Another option is to embed it directly on your website for easy access.",
    "body_markdown": null,
    "list": []
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
  "title": "Free Online Survey Maker | Formester",
  "link": [
    {
      "hid": "canonical",
      "rel": "canonical",
      "href": "https://formester.com/online-survey-maker/"
    }
  ],
  "meta": [
    {
      "property": "article:modified_time",
      "content": "2025-06-16T04:51:59.111Z"
    },
    {
      "hid": "description",
      "name": "description",
      "content": "Build incredible surveys with our free online survey maker. Use our AI to create professional surveys in seconds. 5K+ Active users. Try for free!"
    },
    {
      "hid": "og:site_name",
      "name": "og:site_name",
      "content": "Free Online Survey Maker | Formester"
    },
    {
      "hid": "og:type",
      "property": "og:type",
      "content": "website"
    },
    {
      "hid": "og:url",
      "property": "og:url",
      "content": "https://formester.com/online-survey-maker​/"
    },
    {
      "hid": "og:title",
      "property": "og:title",
      "content": "Free Online Survey Maker | Formester"
    },
    {
      "hid": "og:description",
      "property": "og:description",
      "content": "Build incredible surveys with our free online survey maker. Use our AI to create professional surveys in seconds. 5K+ Active users. Try for free!"
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
      "content": "https://formester.com/online-survey-maker​/"
    },
    {
      "name": "twitter:site",
      "content": "@_formester_"
    },
    {
      "hid": "twitter:title",
      "name": "twitter:title",
      "content": "Free Online Survey Maker | Formester"
    },
    {
      "hid": "twitter:description",
      "name": "twitter:description",
      "content": "Build incredible surveys with our free online survey maker. Use our AI to create professional surveys in seconds. 5K+ Active users. Try for free!"
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
        "best free online survey maker​",
        "free survey maker with qr code",
        "building survey online​",
        "survey builder​",
        "build a survey​",
        "online survey generator",
        "online survey creator",
        "best way to make a survey​",
        "best survey maker​",
        "best online survey maker​",
        "best free online survey maker​"
      ]
    }
  ]
})
</script>
