<template>
  <div>
    <Hero />
    <StandOutFeatureSection
      heading="Challenges in HR Data Management"
      :features="typeformStandOutFeatures"
    />
    <HelpingFeaturesForHr
      heading="How Formester can Help You with Human Resource Operations"
      :features="HelpingFeaturesForHr"
    />
    <CreateHrForms />
    <KeyBenefits />
    <SeamlessIntegration />
    <TemplateSection slug="human-resource" />
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
import Hero from '../../components/hr-solution/Hero.vue'
import StandOutFeatureSection from '../../components/competitors/StandOutFeatureSection.vue'
import HelpingFeaturesForHr from '../../components/hr-solution/HelpingFeaturesForHr.vue'
import CreateHrForms from '../../components/hr-solution/CreateHrForms.vue'
import KeyBenefits from '../../components/hr-solution/KeyBenefits.vue'
import SeamlessIntegration from '../../components/hr-solution/SeamlessIntegration.vue'
import TemplateSection from '../../components/TemplateSection.vue'
import BlogCard from '../../components/blog/BlogCard.vue'
import CallToActionSection from '../../components/CallToActionSection.vue'

export default {
  components: {
    Hero,
    StandOutFeatureSection,
    HelpingFeaturesForHr,
    CreateHrForms,
    KeyBenefits,
    SeamlessIntegration,
    TemplateSection,
    BlogCard,
    CallToActionSection,
  },
  async asyncData({ $content }) {
    let articles = await $content('blog')
      .where({
        published: true,
        featured: false,
      })
      .search('human resource')
      .sortBy('createdAt', 'desc')
      .fetch()

    const randIndex = Math.floor(Math.random() * (articles.length - 3))
    articles = articles.slice(randIndex, randIndex + 3)

    return {
      articles: articles,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/online-form-builder/',
        title: 'Online Form Builders for powerful form-building',
        description:
          'Effective data collection and management for businesses and individuals alike. Transform your data-collection process & derive valuable insights!',
        mainImage:
          'https://formester.com/online-form-builder-hero-screenshot.png',
        mainImageAlt: 'Form builder showing drag and drop functionality',
        keywords: [
          'Online Form',
          'Online Form Builder',
          'Online Form Builders for powerful form-building',
          'Form Building',
          'web forms productivity',
          'form builder',
          'formester',
          'online forms',
          'online web forms',
          'formester web forms',
          'form creator',
          'form generator',
          'online form',
          'web form',
          'online forms',
          'web forms',
          'create form',
          'create forms',
          'frequently asked questions',
          'FAQ',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Online Form Builders for powerful form-building',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/online-form-builder/',
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
          name: 'Online Form Builders for powerful form-building',
          description:
            'Effective data collection and management for businesses and individuals alike. Transform your data-collection process & derive valuable insights!',
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
              name: 'Online Form Builders for powerful form-building',
              item: 'https://formester.com/online-form-builder/',
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
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

<style>
.section__subtitle {
  color: var(--primary, #4f3895);
  font-size: 48px !important;
  font-weight: 700 !important;
  line-height: 56px !important;
}
@media (max-width: 1200px) {
  .section__subtitle {
    font-size: 2.5rem !important;
  }
}
@media (max-width: 575px) {
  .section__subtitle {
    font-size: 2rem !important;
  }
}
</style>
