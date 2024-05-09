<template>
  <div>
    <Hero />
    <StandOutFeatureSection
      heading="Challenges in HR Data Management"
      :features="typeformStandOutFeatures"
    />
    <UseCaseFeatureShowcase
      heading="How Formester can Help You with Human Resource Operations"
      :features="HelpingFeaturesForHr"
    />
    <TemplateSection slug="human-resource" />
    <CreateFormInThreeSteps section-heading="Create Customizable HR Forms with a simple 3 Step Process" :steps="stepsToCreateForm" />
    <KeyBenefits />
    <SeamlessIntegration />
    <div class="container py-5">
      <h2 class="section__heading text-center">HR Blogs</h2>
      <div class="row mt-4">
        <BlogCard
          v-for="article in articles"
          :key="article.slug"
          class="col-lg-4 mt-3 mb-5"
          :article="article"
        />
      </div>
    </div>

    <CallToActionSection
      :content="{
        heading: 'Ready to dive in?',
        subHeading: 'Register with us Now.',
        btnPrimary: 'Signup',
      }"
    />
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'
import Hero from '@/components/hr-solution/Hero.vue'
import StandOutFeatureSection from '@/components/competitors/StandOutFeatureSection.vue'
import CreateFormInThreeSteps from '@/components/create-form-in-three-steps.vue'
import KeyBenefits from '@/components/hr-solution/KeyBenefits.vue'
import SeamlessIntegration from '@/components/hr-solution/SeamlessIntegration.vue'
import BlogCard from '@/components/blog/BlogCard.vue'

import axios from 'axios'
import readingTime from 'reading-time'

export default {
  components: {
    Hero,
    StandOutFeatureSection,
    CreateFormInThreeSteps,
    KeyBenefits,
    SeamlessIntegration,
    BlogCard,
  },
  async asyncData() {
    const {
      data: { data },
    } = await axios.get(
      `${process.env.strapiUrl}/api/blogs`,
      {
        params: {
          'filters[$or][0][title][$contains]': 'HR',
          'filters[$or][1][title][$containsi]': 'human resource',
          sort: 'publishedAt:desc',
          populate: '*',
        },
      }
    )

    let articles = data.map((item) => {
      return {
        id: item.id,
        ...item.attributes,
        coverImg: item.attributes.coverImg.data.attributes.url,
        readingStats: readingTime(item.attributes.body),
      }
    })

    const randIndex = Math.floor(Math.random() * (articles.length - 3))
    articles = articles?.slice(randIndex, randIndex + 3)

    return {
      articles: articles,
      stepsToCreateForm:{
      step1: {
          title: "Signup with a free account",
          description: "Sign up with your email address to start using Formester. Our free plan allows you to create 10 forms with 100 submissions per month."
        },
      step2: {
          title: "Select a template or Create a form",
          description: "We have multiple customisable templates for HR functions along with an intuitive drag and drop form builder with personalized branding."
        },
      step3: {
          title: "Publish and Share the Form",
          description: "Once the form is created, share it via link or embed it in your website. Our built-in analytics turn form inputs into actionable insights."
        }
    }
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/use-case/human-resource/',
        title: 'Automate Human Resource Operations | No-Code Form Builder',
        description:
          "Optimise HR data management with Formester's No-Code Form Builder and HR Form Templates. Automate job applications, leave management, employee onboarding, performance evaluation, and training",
        mainImage: 'https://formester.com/human-resource-hero-screenshot.png',
        mainImageAlt:
          'Automate your human resource operations with HR Form Templates from Formester!',
        keywords: [
          'HR form builder',
          'HR form templates',
          'Data collection',
          'Automation',
          'Job applications',
          'Leave management',
          'Employee onboarding',
          'Performance insights',
          'Training',
          'Formester',
          'Data management',
          'HR solutions',
          'Form creation',
          'HR Solution',
          'HR automation',
          'Employee engagement',
          'Data analytics',
          'HR software',
          'Online forms',
          'Digital transformation',
          'HR efficiency',
          'Data-driven decisions',
          'Job Application Templates',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Automate Human Resource Operations | No-Code Form Builder',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/use-case/human-resource/',
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
          name: 'Automate Human Resource Operations | No-Code Form Builder',
          description:
            "Optimise HR data management with Formester's No-Code Form Builder and HR Form Templates. Automate job applications, leave management, employee onboarding, performance evaluation, and training",
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
              name: 'Automate Human Resource Operations | No-Code Form Builder',
              item: 'https://formester.com/use-case/human-resource/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      HelpingFeaturesForHr: [
        {
          heading: 'Automate Job Application Process',
          description:
            'Formester offers the perfect HR solution for automating job application forms, eliminating time-consuming manual processes. Create engaging forms on your career page, collect applicant data in real-time, and receive instant notifications. This simplifies recruitment and improves the candidate experience.',
          imgUrl: 'hr-solution/HelpingFeaturesForHr/automate-job.svg',
        },
        {
          heading: 'Leave Management and Vacation Tracking',
          description:
            'Formester offers an intuitive HR solution for creating leave request forms. HR receives real-time notifications when employees submit their leave requests for faster processing. Create and embed leave request forms so employees can request time off effortlessly, improving leave management and vacation tracking in the organisation.',
          imgUrl: 'hr-solution/HelpingFeaturesForHr/leave-management.svg',
        },
        {
          heading: 'Effortless Employee Onboarding',
          description:
            "Formester's customisable forms make sure the onboarding experience is hassle free, ensuring new hires provide essential information for a smooth transition. HR departments can create personalised forms, select from templates, collect data, and send tailored welcome emails, improving the onboarding experience and efficiency.",
          imgUrl: 'hr-solution/HelpingFeaturesForHr/effortless-employee.svg',
        },
        {
          heading: 'Get Data-Driven Performance Insights',
          description:
            'Formester allows you to design customisable evaluation forms for a smooth performance review process. Gain insights into employee performance and engagement through our powerful analytics. HR can leverage Formester to create dynamic evaluation forms, track employee progress, and analyse user interactions. This helps in evaluating employee performance accurately.',
          imgUrl:
            'hr-solution/HelpingFeaturesForHr/get-data-driven-performance.svg',
        },
        {
          heading: 'Support Employee Growth through Training',
          description:
            'Formester helps you create training and development forms tailored to employee needs. HR can easily collect feedback and training preferences. You can design training feedback forms, gather valuable insights from employees, and optimise training programs based on the collected feedback, ensuring continuous improvement in employee development initiatives.',
          imgUrl:
            'hr-solution/HelpingFeaturesForHr/support-employee-growth.svg',
        },
      ],
      typeformStandOutFeatures: [
        {
          title: 'Inefficient Time Management',
          description:
            'As per Gartner, employees spend 20-30% of their working hours handling physical documents or document-related information, equivalent to about 12 hours weekly managing paper.',
          img: '/hr-solution/StandOutFeatureSection/inefficient-time.svg',
        },
        {
          title: 'Error-Prone Data Handling',
          description:
            'Manual Data entry without verification leads to a 4% error rate. This results in 400 errors per 10,000 entries, impacting even small datasets.',
          img: '/hr-solution/StandOutFeatureSection/error-prone-data.svg',
        },
        {
          title: 'Lack of Accessibility and Collaboration',
          description:
            'Physical documents limit remote access which hampers business flexibility. They also hinder real-time collaborative editing which leads to cumbersome teamwork.',
          img: '/hr-solution/StandOutFeatureSection/lack-of-accessibility.svg',
        },
      ],
    }
  },
}
</script>

<style></style>
