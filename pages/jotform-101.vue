<template>
  <div>
    <div class="feature_container">
      <div class="feature__hero">
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center align-items-center text-center mt-5"
          >
            <h1 class="section__heading pt-3">
              Jotform 101 - Your Complete Guide to Form Building and Surveys
              with Jotform!
            </h1>
            <p class="hero__subheading mt-3">
              Unlock the full potential of form building with Jotform. At
              Formester, we're committed to providing you with a comprehensive
              guide to help you navigate the world of form creation. Discover
              the features, tips, and tricks that make Jotform a top choice for
              form builders!
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-5">
            <nuxt-img
              src="/jotform101/jotform101-hero.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>

    <JotformKeyFeatures
      heading="Key Features of Jotform"
      :key-features="jotformKeyFeatures"
    />
    <StandOutFeatureSection
      heading="The Distinctive Power of Jotform: What Makes Jotform Stand out?"
      :features="jotformStandOutFeatures"
    />
    <PopularUseCase
      heading="Popular Use-Cases of Jotform"
      :useCases="jotformUseCases"
    />
    <Limitations
      heading="Limitations of Jotform"
      :limitations="jotformLimitations"
    />
    <FormBuilderComparisionTable
      heading="Comparing Jotform with Other Leading Form Builders"
    />
    <WhyChooseFormester />
    <FAQwithCategories :categories="categories" />
    <CallToActionSection
      :content="{
        heading: 'Start Your Formester Journey Today',
        subheading:
          'Start with a Free Sign up and experience the power of Formester firsthand',
      }"
    />
  </div>
</template>

<script>
import JotformKeyFeatures from '../components/competitors/KeyFeatures.vue'
import StandOutFeatureSection from '../components/competitors/StandOutFeatureSection.vue'
import PopularUseCase from '../components/competitors/PopularUseCase.vue'
import Limitations from '../components/competitors/Limitations.vue'

import FormBuilderComparisionTable from '../components/form-builders-comparision-table.vue'
import WhyChooseFormester from '../components/competitors/why-choose-formester.vue'
import CallToActionSection from '../components/CallToActionSection.vue'
import FAQwithCategories from '../components/FAQwithCategories.vue'

import getSiteMeta from '@/utils/getSiteMeta'

export default {
  components: {
    JotformKeyFeatures,
    StandOutFeatureSection,
    PopularUseCase,
    Limitations,
    WhyChooseFormester,
    FormBuilderComparisionTable,
    CallToActionSection,
    FAQwithCategories,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/jotform-101/',
        title: 'Jotform 101 | Guide to Form Building and Surveys with Jotform',
        description:
          "Discover Jotform's full potential with Formester's guide. Unlock powerful form building features, tips & tricks!",
        mainImage: 'https://formester.com/jotform101-hero-section.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'Jotform',
          'Jotform101',
          'Complete guide to form building and surveys using Jotform',
          'web forms for customer support',
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
    faqsSchema() {
      const allFaqs = []

      this.categories.forEach((c) => {
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
      title: 'Jotform 101 | Guide to Form Building and Surveys with Jotform',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/jotform-101/',
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
          name: 'Jotform 101 | Guide to Form Building and Surveys with Jotform',
          description:
            "Discover Jotform's full potential with Formester's guide. Unlock powerful form building features, tips & tricks!",
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
              name: 'Jotform101 - Complete Guide to Form Building by Formester',
              item: 'https://formester.com/jotform101/',
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
  data() {
    return {
      jotformKeyFeatures: [
        {
          title: 'Customization Options',
          description:
            'With Jotform, users get the option to customize their forms to match their brand and design preferences.',
          img: '/jotform101/key-features/customization-options.svg',
        },
        {
          title: 'Simplified Form Building',
          description:
            'Jotform lets its users create professional forms effortlessly with an intuitive and user-friendly interface. No coding knowledge required!',
          img: '/jotform101/key-features/simplified-form-building.svg',
        },
        {
          title: 'Variety of Form Fields',
          description:
            'Jotform offers a wide range of form field options such as multiple choice, dropdowns, checkboxes, and file uploads.',
          img: '/jotform101/key-features/variety-of-form-fields.svg',
        },
        {
          title: 'Integrations',
          description:
            'Jotform integrates seamlessly with popular third-party apps and services.',
          img: '/jotform101/key-features/integrations.svg',
        },
        {
          title: 'Mobile Responsiveness',
          description:
            "Jotform's forms are mobile-friendly and adapt to different screen sizes, providing an optimal user experience.",
          img: '/jotform101/key-features/mobile-responsiveness.svg',
        },
        {
          title: 'Collaboration and Sharing',
          description:
            "Jotform's forms are mobile-friendly and adapt to different screen sizes, providing an optimal user experience.",
          img: '/jotform101/key-features/collaboration-and-sharin.svg',
        },
        {
          title: 'Workflow Automation',
          description:
            "Jotform's workflow automation capabilities include setting up email notifications, autoresponders, and conditional actions to improve efficiency and automate repetitive tasks.",
          img: '/jotform101/key-features/workflow-automation.svg',
        },
        {
          title: 'Security and Compliance',
          description:
            'Jotform prioritizes the security of user data and provides features like SSL encryption, GDPR compliance, and HIPAA compliance for handling sensitive information securely.',
          img: '/jotform101/key-features/security-and-compliance.svg',
        },
      ],
      jotformStandOutFeatures: [
        {
          title: 'Form Templates',
          description:
            'Access professionally designed templates for various industries and customize them to fit your needs. As of now, Jotform has a collection of over 10K Templates!',
          img: '/jotform101/what-makes-jotform-stand-out/form.svg',
        },
        {
          title: 'Advanced Reporting & Data Management',
          description:
            'Jotform lets its users generate customized reports with visual analytics for in-depth data analysis. Moreover, it also offers real-time form response tracking, data export options, customizable reports, and integration with cloud storage services.',
          img: '/jotform101/what-makes-jotform-stand-out/report.svg',
        },
        {
          title: 'Mobile Apps',
          description:
            'Access Jotform on the go with mobile apps for iOS and Android.',
          img: '/jotform101/what-makes-jotform-stand-out/mobile.svg',
        },
        {
          title: 'Offline Data Collection',
          description:
            "Collect data even without an internet connection using Jotform's offline mode feature.",
          img: '/jotform101/what-makes-jotform-stand-out/chart.svg',
        },
        {
          title: 'Form Widgets and Apps',
          description:
            'Jotform also provides advanced widgets and apps for increasing form efficiency and functionality.',
          img: '/jotform101/what-makes-jotform-stand-out/widgets.svg',
        },
        {
          title: 'Form Calculations',
          description:
            'Forms with Jotform can be set-up to perform real-time calculations for interactive and dynamic user experiences.',
          img: '/jotform101/what-makes-jotform-stand-out/calculation.svg',
        },
        {
          title: 'Payment Integration',
          description:
            'Jotform offers a way to seamlessly collect payments with a simple web-form using built-in payment gateway integrations.',
          img: '/jotform101/what-makes-jotform-stand-out/payment.svg',
        },
        {
          title: 'Excellent Customer Support',
          description:
            'Jotform provides reliable customer support through various channels, including a help center, community forum, an extensive blog resource and a responsive support team.!',
          img: '/jotform101/what-makes-jotform-stand-out/support.svg',
        },
      ],
      jotformUseCases: [
        {
          title: 'Event Registration',
          description:
            "Simplify event planning and streamline the registration process with Jotform's user-friendly forms.",
          points: [
            'Capture attendee information',
            'Manage RSVPs',
            'Event Feedbacks',
          ],
          img: '/jotform101/popular-use-case/event-registration.svg',
        },
        {
          title: 'Surveys and Feedback',
          description:
            "Gather valuable insights and feedback from your audience using Jotform's customizable survey forms.",
          points: [
            'Create Engaging Questionnaires',
            'Analyse Responses',
            'Make Data-driven Decisions',
          ],
          img: '/jotform101/popular-use-case/surveys-and-feedbacks.svg',
        },
        {
          title: 'Employment & Hiring',
          description:
            "Streamline the hiring process with Jotform's intuitive employment forms.",
          points: [
            'Collecting Applicant Details & Resumes',
            'Onboarding Forms',
            'Engagement Surveys',
          ],
          img: '/jotform101/popular-use-case/employment-and-hiring.svg',
        },
        {
          title: 'Online Orders and Payments',
          description:
            "Simplify event planning and streamline the registration process with Jotform's user-friendly forms.",
          points: [
            'Set up Order Forms ',
            'Manage Product Catalogues',
            'Process Payments Securely',
          ],
          img: '/jotform101/popular-use-case/online-orders-and-payments.svg',
        },
        {
          title: 'Jotform in Education and Training',
          description:
            "Enhance the learning experience with Jotform's educational forms.",
          points: [
            'Create quizzes',
            'Course Evaluations',
            'Registration Forms',
          ],
          img: '/jotform101/popular-use-case/jotform-in-education-and-training.svg',
        },
        {
          title: 'Healthcare and Medical Forms',
          description:
            'Ensure compliance with data privacy regulations while efficiently managing patient information.',
          points: [
            'Patient Registration',
            'Appointment Scheduling',
            'Medical History Collection',
          ],
          img: '/jotform101/popular-use-case/healthcare-and-medical-forms.svg',
        },
      ],
      jotformLimitations: [
        {
          title: 'Learning Curve',
          description:
            'Jotform offers a wide range of features and functionalities, which may require some time to master, especially for users new to form building.',
          img: '/jotform101/limitations/learning-curve.svg',
        },
        {
          title: 'Pricing Tiers',
          description:
            'While Jotform offers a free version with limited features, some advanced functionalities and higher usage levels are available through paid plans.',
          img: '/jotform101/limitations/pricing-tiers.svg',
        },
        {
          title: 'Customization Constraints',
          description:
            'While Jotform provides a range of customization options, there may be certain design limitations or constraints to consider for highly specialized branding needs.',
          img: '/jotform101/limitations/customization-constraints.svg',
        },
        {
          title: 'Restrictions and Upgrading',
          description:
            'There is no way to purchase only required additional features. Users have to upgrade to a higher plan to get access to greater limits of a particular feature.',
          img: '/jotform101/limitations/restrictions-and-upgrading.svg',
        },
      ],
      categories: [
        {
          title: 'Getting Started',
          faqs: [
            {
              question: 'What is Jotform?',
              answer:
                'Jotform is a popular online form builder that allows users to create, customize, and manage various types of forms, such as contact forms, surveys, registration forms, order forms, and more.',
            },
            {
              question: 'How do I create a form in Jotform?',
              answer:
                'To create a form in Jotform, simply sign up for an account, choose a template or start from scratch, drag and drop form fields to design your form, customize its appearance and settings, and publish it on your website or share it with others.',
            },
            {
              question: 'Can I customize the appearance of my Jotform forms?',
              answer:
                'Yes, Jotform offers extensive customization options. You can choose from pre-designed themes, customize colors, fonts, and styles, add your logo and images, and apply CSS styling to match your branding and design preferences.',
            },
          ],
        },
        {
          title: 'Pricing and Support',
          faqs: [
            {
              question: 'What are the available pricing plans for Jotform?',
              answer:
                "Jotform offers various pricing plans to cater to different needs. It has free plans with limited features, as well as paid plans that offer more advanced functionality, increased storage, higher submission limits, and priority support. Check Jotform's website for the latest pricing details.",
            },
            {
              question: 'Does Jotform provide customer support and assistance?',
              answer:
                'Yes, Jotform offers customer support to assist users. You can reach out to their support team through email, live chat, or the support forum. They provide guidance, troubleshooting assistance, and help with any questions or issues you may have.',
            },
          ],
        },
        {
          title: 'Integration and Embedding',
          faqs: [
            {
              question: 'Can I embed Jotform forms on my website or blog?',
              answer:
                'Absolutely. Jotform provides embed codes that allow you to easily embed your forms on websites, blogs, or other online platforms. You can copy the code and paste it into the HTML of your web page to display the form seamlessly.',
            },
            {
              question: 'Does Jotform offer offline data collection options?',
              answer:
                'Yes, Jotform provides offline data collection capabilities through its mobile apps for iOS and Android. You can collect form submissions even without an internet connection, and the data will sync when you regain connectivity.',
            },
            {
              question:
                'How can I automate workflows and notifications in Jotform?',
              answer:
                'Jotform offers workflow automation features that allow you to set up automated actions based on form submissions. You can configure email notifications, autoresponders, conditional actions, and integrations to streamline your workflows and save time.',
            },
          ],
        },
        {
          title: 'Surveys and Quizzes',
          faqs: [
            {
              question: 'Can I create surveys and quizzes using Jotform?',
              answer:
                'Definitely. Jotform offers survey and quiz features that allow you to create engaging and interactive forms. You can add various question types, scoring, conditional branching, and result calculations to create comprehensive surveys and quizzes.',
            },
          ],
        },
        {
          title: 'Features and Functionality',
          faqs: [
            {
              question: 'Can I collect payments through Jotform forms?',
              answer:
                'Absolutely. Jotform provides built-in payment integrations with popular payment gateways, allowing you to easily collect online payments from your form respondents. You can set up products, prices, and payment options within your forms.',
            },
            {
              question: 'Is Jotform mobile-friendly?',
              answer:
                'Yes, Jotform forms are responsive and mobile-friendly by default. They automatically adapt to different screen sizes and devices, ensuring a seamless user experience for respondents accessing your forms from smartphones, tablets, or desktops.',
            },
            {
              question: 'Can I integrate Jotform with other apps and services?',
              answer:
                'Yes, Jotform offers a wide range of integrations with popular apps and services. You can connect your forms with tools like CRM systems, email marketing platforms, project management software, payment processors, and more to streamline your workflows and automate data transfer.',
            },
            {
              question: 'How secure is Jotform for collecting sensitive data?',
              answer:
                'Jotform takes data security seriously. It provides features like SSL encryption, GDPR compliance, HIPAA compliance for handling sensitive healthcare data, and advanced security measures to ensure the privacy and protection of the data collected through your forms.',
            },
            {
              question: 'Can I create conditional logic in my Jotform forms?',
              answer:
                'Absolutely. Jotform offers a powerful conditional logic feature that allows you to create dynamic forms. You can show or hide form fields, sections, or pages based on user responses, create branching logic, and personalize the form experience based on user input.',
            },
            {
              question: 'How do I view and manage form responses in Jotform?',
              answer:
                'Jotform provides a user-friendly interface to view and manage form responses. You can access and analyze form submissions, export data in various formats (CSV, Excel, PDF), generate reports, set up email notifications, and integrate with third-party tools for seamless data management.',
            },
            {
              question:
                'Can I generate reports and analytics based on form data in Jotform?',
              answer:
                'Yes, Jotform offers reporting and analytics features. You can create customized reports with visual representations of form data, including charts, graphs, and tables. Apply filters, perform calculations, and gain valuable insights from your form submissions.',
            },
            {
              question: 'Does Jotform offer multi-language support for forms?',
              answer:
                'Yes, Jotform supports multi-language forms. You can create forms in multiple languages, provide language options to respondents, and customize form elements, labels, and instructions in different languages.',
            },
            {
              question:
                'Can I collaborate with team members on form creation in Jotform?',
              answer:
                'Certainly. Jotform provides collaboration features that allow you to work with team members on form creation. You can assign roles and permissions, track changes, leave comments, and collaborate in real-time, enhancing teamwork and productivity.',
            },
            {
              question: 'Can I add electronic signatures to my Jotform forms?',
              answer:
                'Yes, Jotform supports electronic signatures. You can add signature fields to your forms, allowing respondents to sign electronically using their mouse, touch screen, or stylus. This is useful for agreements, contracts, consent forms, and more.',
            },
            {
              question:
                'Does Jotform comply with data protection regulations like GDPR?Can I collect payments through Jotform forms?',
              answer:
                'Yes, Jotform is GDPR compliant. It provides features and tools to help you comply with data protection regulations, such as obtaining consent, managing data access and retention, and enabling data subject rights.',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
