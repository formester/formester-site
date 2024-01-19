<template>
  <div>
    <PluginsHero
      heading="Formester and Webflow Integration"
      description="Add online forms to your Webflow website with Formester "
    />
    <div class="container my-5">
      <div class="row py-5">
        <div class="col-lg-5 d-flex align-items-center justify-content-center">
          <nuxt-img
            src="plugins/webflow/formester-plus-webflow.svg"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-7 mt-3 mt-lg-0">
          <h2 class="section__heading mb-4">Formester Forms in Webflow</h2>
          <p>
            Use Formester to add personalized forms to Webflow with our form
            builder plugin. Choose from our professionally designed template
            library and add any online form, survey, poll or quiz to webflow.
            Improve user experience and simplify data collection.
          </p>
        </div>
      </div>
      <div class="row py-5">
        <div
          class="col-lg-5 order-lg-last d-flex align-items-center justify-content-center"
        >
          <nuxt-img
            src="plugins/webflow/webflow-website-illustration.svg"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-7 mt-3 mt-lg-0">
          <h2 class="section__heading mb-4">What is Webflow?</h2>
          <p>
            Webflow is a No-Code tool that lets you build, customize and host
            websites without any requirement of coding knowledge. It's a
            powerful platform that lets you create custom websites with
            pixel-perfect design and animations. Webflow also has a Content
            Management System (CMS), so you can easily manage your website
            content.
          </p>
          <p>
            Effortlessly collect feedback, personal details, media uploads, or
            generate leads through intuitive forms that blend into your
            website's experience.
          </p>
        </div>
      </div>
    </div>
    <ProcessSteps
      heading="3 simple steps to integrate Formester in Webflow"
      :steps="webflowSteps"
    />
    <LargeIconFeatureSection
      heading="Features of Formester"
      :features="features"
    />
    <CallToActionSection />
    <TemplateFaq :faqs="faqs" />
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/plugins/webflow/',
        title: 'Embed Beautiful Forms on Your Webflow Site | Formester Plugin',
        description:
          "Create & add stunning forms in minutes with Formester's intuitive builder & Webflow plugin. No coding needed! Increase leads, collect feedback & streamline workflow.",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'Formester',
          'Webflow plugin',
          'contact form',
          'survey form',
          'lead generation form',
          'online form builder',
          'drag & drop',
          'automation',
          'analytics',
          'spam protection',
          'workflow',
          'digital signature',
          'autoresponder',
          'CMS',
          'website',
          'blog',
          'SEO',
          'conversion rate',
          'engagement',
          'data collection',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Embed Beautiful Forms on Your Webflow Site | Formester Plugin',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/plugins/webflow/',
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
          name: 'Embed Beautiful Forms on Your Webflow Site | Formester Plugin',
          description:
            "Create & add stunning forms in minutes with Formester's intuitive builder & Webflow plugin. No coding needed! Increase leads, collect feedback & streamline workflow.",
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
              name: 'Wordpress Plugin for Formester',
              item: 'https://formester.com/plugins/webflow/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      webflowSteps: [
        {
          description:
            'Sign in to your free Formester account and select the online form you want to integrate. You can also select any pre-designed template from our template library. Once your online form is ready, click on the "Embed" tab and copy the provided embed code.',
          imageSrc: 'plugins/webflow/steps/step1.svg',
          imageAlt:
            'ui to create new form and few graphics showing ready made templates',
        },
        {
          description:
            "Open your Webflow project, locate the 'Embed' element and drag it onto the desired spot on your webflow site. Once the element is in place, access its settings and paste the copied embed code from Formester into the designated field.",
          imageSrc: 'plugins/webflow/steps/step2.svg',
          imageAlt: 'ui to enable the allow form to work offline',
        },
        {
          description:
            'Save the changes in Webflow and publish your website to make the form live. Start collecting leads and engaging visitors with beautiful online forms from Formester!',
          imageSrc: 'plugins/webflow/steps/step3.svg',
          imageAlt:
            'mockup ui of submission page with a internet not available symbol',
        },
      ],
      features: [
        {
          title: 'Order Processing',
          description:
            'Effortless process orders and accept payments with multiple integrations.',
          img: 'plugins/webflow/icons/order-processing.svg',
        },
        {
          title: 'White Labeling',
          description:
            'Customize all elements of the form to match your company branding.',
          img: 'plugins/webflow/icons/white-labeling.svg',
        },
        {
          title: 'AI Powered Spam Protection',
          description:
            'Secure comments and online forms with AI Spam Protection',
          img: 'plugins/webflow/icons/ai-powered-spam-protection.svg',
        },
        {
          title: 'HTML Form Backend',
          description:
            'Manipulate the HTML backend for complete control over your web forms.',
          img: 'plugins/webflow/icons/html-form-backend.svg',
        },
        {
          title: 'Conditional Auto-Responder',
          description:
            'Set multiple autoresponders for a personalized user experience.',
          img: 'plugins/webflow/icons/conditional-auto-responder.svg',
        },
        {
          title: 'Form Analytics',
          description:
            'Collect powerful form analytics for actionable insights.',
          img: 'plugins/webflow/icons/form-analytics.svg',
        },
      ],
      faqs: [
        {
          question:
            'How can I integrate Formester forms with my Webflow website or blog?',
          answer:
            'You can add any Formester form in your Webflow sites by copying the embed code and pasting it to any web page in Webflow. The form integrates seamlessly into the website. You can add any type of online form for data collection, for ex: Contact Form, Feedback Form, Etc.',
        },
        {
          question:
            'What types of forms can I add to my Webflow site with Formester?',
          answer:
            'Formester boasts a vast form toolbox for your Webflow site, letting you build anything from simple contact forms and newsletter signups to complex multi-step surveys, payment forms, and even quizzes. You can customize field types, design them beautifully, and connect them to various integrations, all without touching code.',
        },
        {
          question:
            'Why should I integrate Formester forms with my Webflow website?',
          answer:
            'Integrating Formester forms with Webflow helps you save valuable time and resources that can be invested somewhere else. You can create a form with our No-Code Form Builder and directly embed it in your Webflow site to optimize user experience.',
        },
        {
          question:
            'How can Formester and Webflow work together to improve my website workflow?',
          answer:
            'Embedding formster forms in Webflow helps you automate data collection without having to worry about maintaining a backend database. Apart from that, Formester has advanced spam protection powered by AI that secures your form submissions and adapts itself based on the submissions.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.section__heading {
  color: #000;
  font-size: 36px;
  font-weight: 600;
  line-height: 52px;
}

.gap-32 {
  gap: 32px;
}

.section__container {
  max-width: 848px;
  background: white;
  border-radius: 4px;
}

.bg__secondary {
  background-color: #f5f5f5;
}

@media screen and (max-width: 768px) {
  .section__heading {
    font-size: 28px;
    line-height: 40px;
  }
}
</style>
