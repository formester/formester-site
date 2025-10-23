<template>
  <div>
    <div class="feature__hero position-relative py-5">
      <div class="container">
        <div
          class="d-flex flex-column justify-content-center align-items-center text-center mt-5"
        >
          <h1 class="hero__heading pt-3">
            Uncovering Formester's Potential for
            <span class="hglt">Lead Generation</span> Success
          </h1>
          <p class="hero__subheading mt-3">
            In this case study, we'll explore how your B2B company can leverage
            Formester to create and optimize lead generation forms, leading to
            significant improvements in conversions and sales. This case study
            is designed to provide insights into the strategies and tactics that
            your organization can employ to achieve enhanced lead generation
            results.
          </p>
          <a
            href="https://app.formester.com/users/sign_up"
            class="btn button hero__button mt-4 mb-4 mb-lg-0"
            >Create Form for Free</a
          >
        </div>
      </div>
      <img
        src="~/assets/images/case-study-1/case-study-hero-bg.png"
        alt="background showing few of the ui elements of formester"
        class="position-absolute d-none d-lg-block hero-background"
      />
    </div>

    <Background />
    <SmallIconsFeatureSection :featureData="challenges" />
    <SmallIconsFeatureSection :featureData="solutions" />
    <Results />
    <Conclusion />
    <FAQwithCategories :faqQuestions="formesterLeadGenerationCaseStudy" />
  </div>
</template>

<script>
import Background from '@/components/case-study/formester-for-lead-generation-success/Background.vue'
import SmallIconsFeatureSection from '@/components/SmallIconsFeatureSection.vue'
import Results from '@/components/case-study/formester-for-lead-generation-success/Results.vue'
import Conclusion from '@/components/case-study/formester-for-lead-generation-success/Conclusion.vue'
import FAQwithCategories from '@/components/FAQwithCategories.vue'

import getSiteMeta from '@/utils/getSiteMeta'
import formesterLeadGenerationCaseStudy from '@/faqs/formester-lead-generation-case-study'

export default {
  components: {
    Background,
    SmallIconsFeatureSection,
    Results,
    Conclusion,
    FAQwithCategories,
  },
  data() {
    return {
      challenges: {
        heading: 'The Complexities of Modern Lead Generation',
        description:
          "Lead generation is an intricate process, comprising several stages that demand careful attention and strategy. These multifaceted challenges underscore the importance of not only creating lead-generation forms but also optimizing them to overcome these obstacles. To better understand the significance of these challenges, let's delve into some of the commonly faced key problems with regard to lead generation.",
        subtext: 'Challenges',
        features: [
          {
            title: 'Subpar Conversion Rates on Existing Forms',
            description:
              'One of the foremost challenges in lead generation is achieving satisfactory conversion rates on existing lead generation forms. Many businesses find themselves struggling with forms that fail to effectively convert website visitors into leads. This often results from issues such as unclear calls-to-action, uninspiring visuals, or confusing form structures.',
            imgSrc: 'svgs/flow.svg',
          },
          {
            title: 'Lengthy and Discouraging Form Structures',
            description:
              'Lengthy and complex form structures are another significant hurdle in the lead generation process. When potential leads encounter forms that appear daunting or require extensive information input, they may become discouraged and abandon the form. This leads to missed opportunities to capture valuable leads.',
            imgSrc: 'svgs/form.svg',
          },
          {
            title: 'Limited Capabilities for Lead Nurturing',
            description:
              'One of the foremost challenges in lead generation is achieving satisfactory conversion rates on existing lead generation forms. Many businesses find themselves struggling with forms that fail to effectively convert website visitors into leads. This often results from issues such as unclear calls-to-action, uninspiring visuals, or confusing form structures.',
            imgSrc: 'svgs/leads.svg',
          },
          {
            title: 'Data Management and Segmentation',
            description:
              'Managing and effectively segmenting the leads generated can be a daunting task. Without the right tools and processes in place, businesses may struggle to categorize leads based on their interests, preferences, or stage in the buying journey. This can result in sending generic or irrelevant content to leads, diminishing their engagement and trust.',
            imgSrc: 'svgs/data.svg',
          },
          {
            title: 'Integration Challenges',
            description:
              'Many businesses operate within a tech ecosystem where various tools and platforms are used for different functions. Integrating lead generation forms seamlessly with existing systems, such as CRM software, email marketing platforms, or analytics tools, can be a complex and time-consuming endeavor. Incomplete or inefficient integrations may lead to data silos and missed opportunities for personalized lead nurturing.',
            imgSrc: 'svgs/integration.svg',
          },
          {
            title: 'Mobile Responsiveness',
            description:
              'In an era where mobile devices are ubiquitous, lead generation forms must be fully responsive and user-friendly on all screen sizes. Creating forms that provide an optimal experience on mobile devices can be a challenge, especially if the chosen form-building solution lacks robust mobile optimization features.',
            imgSrc: 'svgs/mobile.svg',
          },
          {
            title: 'Data-Driven Refinement',
            description:
              "The process of lead-generation doesn't end with the initial form creation. It involves continuous improvement based on data and insights. By analysing form performance and user behaviour, businesses can refine and fine-tune their forms to achieve even better results over time. Businesses may find it hard to run, manage and track the performance of each form.",
            imgSrc: 'svgs/storage-setting.svg',
          },
        ],
      },
      solutions: {
        heading:
          "Overcoming Lead Generation Challenges with Formester's Lead-Generation Web Forms",
        description:
          "By leveraging Formester's comprehensive set of features, your B2B company can overcome these lead generation challenges, resulting in improved conversion rates, more efficient lead nurturing, and enhanced overall lead management. Formester's capabilities ensure that your lead generation forms become powerful tools in capturing and converting leads effectively.",
        subtext: 'Solutions',
        features: [
          {
            title: 'Enhanced Conversion Rate Optimization',
            description:
              "Formester's user-friendly interface empowers businesses to create lead generation forms that are not only visually appealing but also optimized for higher conversion rates. Clear and compelling calls-to-action, visually engaging designs, and streamlined form structures are easily achievable with Formester, ensuring that website visitors are more likely to become leads.",
            imgSrc: 'svgs/flow.svg',
          },
          {
            title: 'Simplified Form Structures',
            description:
              'Formester understands the importance of user experience in lead generation. It offers intuitive tools to create forms with user-friendly, concise structures. By eliminating unnecessary fields and using conditional logic, businesses can create forms that feel effortless to complete. This significantly reduces form abandonment rates and enhances lead capture.',
            imgSrc: 'svgs/form.svg',
          },
          {
            title: 'Robust Lead Nurturing Capabilities',
            description:
              'Beyond just collecting contact information, Formester equips businesses with the tools needed for effective lead nurturing. With seamless integrations with CRM systems and email marketing platforms, businesses can automate lead engagement, provide personalized content, and guide leads through the conversion journey. This ensures that leads are nurtured effectively, increasing the chances of conversion.',
            imgSrc: 'svgs/leads.svg',
          },
          {
            title: 'Enhanced Lead Generation Quality & Efficiency',
            description:
              "Formester's Information Recall Feature optimizes lead generation by pre-filling known user data, streamlining the process, and fostering personalized engagement. This leads to higher-quality leads and improved conversion rates.",
            imgSrc: 'svgs/leadership-star.svg',
          },
          {
            title: 'Dynamic Forms',
            description:
              "Formester's Conditional Logic Feature empowers the creation of dynamic forms that adjust based on user inputs. This dynamic functionality enhances user experience by displaying or hiding specific fields or sections, resulting in tailored and user-friendly forms that drive higher lead conversion rates.",
            imgSrc: 'svgs/dynamic-feed.svg',
          },
          {
            title: 'Safe & Secure Lead Generation',
            description:
              "Formester's Spam Protection Feature acts as a shield against unwanted submissions, ensuring that your lead generation efforts are focused on genuine prospects. This safeguard results in cleaner data and more efficient lead nurturing, ultimately enhancing your conversion rates.",
            imgSrc: 'svgs/profile-shield.svg',
          },
          {
            title: 'Instant Engagement',
            description:
              "Formester's Auto-responder Feature enables immediate interaction with leads, acknowledging their actions and providing relevant information. This swift engagement not only enhances customer satisfaction but also nurtures leads effectively, increasing the chances of conversion.",
            imgSrc: 'svgs/love.svg',
          },
          {
            title: 'Consistent Branding',
            description:
              "Formester's Branding Kit Feature allows you to maintain a consistent brand identity across your lead generation forms. Customize forms with your logo, colors, and fonts to ensure they align seamlessly with your brand's aesthetics. This branding cohesion enhances brand recognition and trust among your potential leads.",
            imgSrc: 'svgs/brand-unity.svg',
          },
          {
            title: 'Efficient Teamwork',
            description:
              "Formester's Collaboration Feature fosters efficient teamwork by allowing team members to collaborate seamlessly on form creation and management. With assigned roles and permissions, your team can work together smoothly, ensuring that lead generation forms are optimized effectively and in a timely manner.",
            imgSrc: 'svgs/teamwork.svg',
          },
          {
            title: 'Seamless Integrations',
            description:
              'Formester excels in addressing integration challenges. It seamlessly integrates with various systems, including CRM software, email marketing platforms, and analytics tools. This ensures that lead data flows effortlessly across the tech ecosystem, preventing data silos and enabling personalized lead nurturing.',
            imgSrc: 'svgs/integration.svg',
          },
          {
            title: 'Mobile Optimization',
            description:
              'Formester recognizes the importance of mobile responsiveness. All forms created with Formester are fully responsive, offering an optimal experience on all screen sizes. This ensures that leads can engage with forms comfortably on any device, increasing the chances of capturing leads, even on mobile.',
            imgSrc: 'svgs/mobile.svg',
          },
          {
            title: 'Effortless Form Management',
            description:
              'Formester simplifies form management with an intuitive dashboard that allows businesses to easily track and monitor the performance of each form. It provides insights into submission rates, engagement metrics, user behaviour and conversion data, enabling businesses to continually improve their forms, making them even more effective over time, taking informed decisions and refine their lead generation strategy.',
            imgSrc: 'svgs/document-copy.svg',
          },
        ],
      },
      formesterLeadGenerationCaseStudy: formesterLeadGenerationCaseStudy,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/using-formester-for-lead-generation-success',
        title: 'Case Study: Improved Lead-Generation Success with Formester!',
        description:
          "Formester's Case Study: Discover how Formester's smart & effective lead-gen forms can help nurture leads for increased conversions and sales",
        keywords: [
          'Lead generation best practices',
          'Effective lead nurturing tactics',
          'Optimizing lead capture forms',
          'Increasing conversion rates',
          'Sales growth strategies',
          'Lead quality improvement techniques',
          'Successful case study on lead nurturing',
          'Boosting sales with lead generation forms',
          'Conversion rate optimization methods',
          'Real-world lead nurturing success story',
          'Lead generation forms',
          'Effective lead capture',
          'Increase conversions',
          'Sales growth strategies',
          'Formester success stories',
          'Lead nurturing techniques',
          'Form optimization',
          'Improving lead quality',
          'Conversion rate optimization',
          'Enhancing sales through forms',
          'Formester case study',
          'Effective lead generation',
          'Capture and nurture leads',
          'Increased sales conversions',
          'Lead nurturing success',
          'Formester form optimization',
          'Lead quality improvement',
          'Conversion rate enhancement',
          'Sales growth with forms',
          'Formester success stories',
          'Using Formester for lead generation',
          'Formester lead capture techniques',
          'Boosting conversions with lead forms',
          'Formester sales growth case study',
          'Lead nurturing success stories',
          'Optimizing forms for lead quality',
          'Effective conversion rate strategies',
          'Formester lead nurturing results',
          'Sales increase through form optimization',
          'Formester form success examples',
          'Lead generation success with Formester',
          'How Formester improves lead capture',
          'Conversions and sales with Formester',
          'Formester case study on lead nurturing',
          "Formester's impact on lead quality",
          'Conversion rate success with Formester',
          "Formester's role in sales growth",
          'Formester form optimization results',
          'Formester lead nurturing best practices',
          'Real- world Formester success stories',
          'Formester for lead conversion success',
          'Capturing leads effectively with Formester',
          'Increasing sales through Formester',
          'Lead nurturing achievements with Formester',
          "Formester's contribution to conversion rate improvement",
          "Formester's impact on sales increase",
          "Formester's lead capture and nurture success",
          "Formester's role in improving lead quality",
          "Formester's success in enhancing conversion rates",
          "Formester's real - world success cases",
        ],
      }
      return getSiteMeta(metaData)
    },
    faqsSchema() {
      const allFaqs = []

      this.formesterLeadGenerationCaseStudy.forEach((c) => {
        if (c.faqs) {
          allFaqs.push(...c.faqs)
        }
      })

      // Generate the FAQ schema
      return allFaqs.map((faq) => {
        return {
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        }
      })
    },
  },
  head() {
    return {
      title: 'Case Study: Improved Lead-Generation Success with Formester!',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/case-study/using-formester-for-lead-generation-success/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Case Study: Improved Lead-Generation Success with Formester!',
          description:
            "Formester's Case Study: Discover how Formester's smart & effective lead-gen forms can help nurture leads for increased conversions and sales",
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Formester',
              item: 'https://formester.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Case Study: Improved Lead-Generation Success with Formester!',
              item: 'https://formester.com/using-formester-for-lead-generation-success/',
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: this.faqsSchema,
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero-background {
  top: 0;
  z-index: -1;
  width: 100%;
  opacity: 35%;
}

.hero__heading {
  font-size: var(--ft-big-heading);
  font-weight: 700;
  line-height: 72px;
}

.section__subtext {
  color: var(--clr-primary);
  font-size: 16px;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.32px;
  text-transform: uppercase;
}

.section__heading {
  font-size: 36px;
  font-weight: 700;
  line-height: 150%;
  color: var(--clr-neutral-900);
}

.section__description {
  color: var(--clr-neutral-700);
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
}

@media screen and (max-width: 600px) {
  .hero__heading {
    font-size: 36px;
    line-height: 48px;
  }
}
</style>
