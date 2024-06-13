<template>
  <div>
    <PluginsHero
      heading="Formester and WordPress Integration"
      description="Embed beautiful forms on your WordPress Website or Blog in minutes with Formester WordPress Plugin"
    />
    <div class="container my-5">
      <div class="row py-5">
        <div class="col-lg-5 d-flex align-items-center justify-content-center">
          <nuxt-img
            src="plugins/wordpress/formester-plus-wordpress.svg"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-7 mt-3 mt-lg-0">
          <h2 class="section__heading mb-4">Formester Forms in WordPress</h2>
          <p>
            Use Formester’s versatile template library to add any form to your
            WordPress blog or site. Use our WordPress plugin to embed a Contact
            Form, Feedback Form or Lead Generation Form in the WordPress site
            and automate data collection.
          </p>
          <p>
            Create a new form on Formester or customise any of our pre-designed
            templates using the intuitive drag and drop form builder. Our
            WordPress plugin enables you to easily add the web form to a
            WordPress powered website without any need of coding skills or
            database backend.
          </p>
        </div>
      </div>
      <div class="row py-5">
        <div
          class="col-lg-5 order-lg-last d-flex align-items-center justify-content-center"
        >
          <nuxt-img
            src="plugins/wordpress/wordpress-website-illustration.svg"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-7 mt-3 mt-lg-0">
          <h2 class="section__heading mb-4">What is WordPress?</h2>
          <p>
            WordPress is a widely used CMS that allows people to build, host and
            manage websites or blogs. WordPress users can manage their website
            content and integrate WordPress with other tools or applications to
            streamline their workflow. All websites often need a contact, survey
            or feedback form to collect important information.
          </p>
          <p>
            Integrating Formester forms with WordPress enables the users to
            interact with your website, upload media, submit feedback or provide
            personal details through contact form.
          </p>
        </div>
      </div>
    </div>
    <ProcessSteps
      heading="Steps to Embed a Formester Form"
      :steps="wordpressSteps"
    />
    <KeyBenefits heading="Features of Formester" />
    <TemplateFaq :faqs="faqs" />
  </div>
</template>

<script>
import KeyBenefits from '@/components/hr-solution/KeyBenefits.vue'
import getSiteMeta from '@/utils/getSiteMeta'
export default {
  components: {
    KeyBenefits,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/plugins/wordpress/',
        title:
          'Embed Beautiful Forms on Your WordPress Site | Formester Plugin',
        description:
          "Create & add stunning forms in minutes with Formester's intuitive builder & WordPress plugin. No coding needed! Increase leads, collect feedback & streamline workflow.",
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
        keywords: [
          'Formester',
          'WordPress plugin',
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
      title: 'Embed Beautiful Forms on Your WordPress Site | Formester Plugin',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/plugins/wordpress/',
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
          name: 'Embed Beautiful Forms on Your WordPress Site | Formester Plugin',
          description:
            "Create & add stunning forms in minutes with Formester's intuitive builder & WordPress plugin. No coding needed! Increase leads, collect feedback & streamline workflow.",
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
              item: 'https://formester.com/plugins/wordpress/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      wordpressSteps: [
        {
          title: 'Install Formester Plugin',
          description:
            'Visit WordPress.org or WordPress.com to install the Formester plugin. Log in to your WordPress account and activate the plugin after installation.',
          imageSrc: 'plugins/wordpress/steps/step1.svg',
          imageAlt:
            'ui to create new form and few graphics showing ready made templates',
        },
        {
          title: 'Add Formester Block in WordPress',
          description:
            'Locate and select the Formester Block in your WordPress editor. Click on it to launch the plugin and easily integrate a Formester form into your page.',
          imageSrc: 'plugins/wordpress/steps/step2.svg',
          imageAlt: 'ui to enable the allow form to work offline',
        },
        {
          title: 'Embed Formester Form in Wordpress',
          description:
            "You can also embed a form by pasting your form's shared URL into WordPress editor. Ensure that your contact form is published before embedding in the WordPress site.",
          imageSrc: 'plugins/wordpress/steps/step3.svg',
          imageAlt:
            'mockup ui of submission page with a internet not available symbol',
        },
      ],
      faqs: [
        {
          question:
            'How can I integrate Formester forms with my WordPress website or blog?',
          answer:
            'Integrating Formester forms with WordPress is quick and easy. Use our WordPress plugin to embed a Contact Form, Feedback Form, or Lead Generation Form on your WordPress site without any coding skills. Simply create a new form on Formester or customize a pre-designed template using the intuitive drag and drop form builder.',
        },
        {
          question:
            'What types of forms can I add to my WordPress blog or site with Formester?',
          answer:
            'Formester offers a versatile template library, allowing you to add various forms like Contact Forms, Feedback Forms, or Lead Generation Forms to your WordPress blog or site. Choose from our pre-designed templates and customize them to suit your needs.',
        },
        {
          question:
            'Why should I integrate Formester forms with my WordPress site?',
          answer:
            'Integrating Formester forms with WordPress enhances user interaction on your website. Users can upload media, submit feedback, or provide personal details through contact forms. This integration streamlines data collection and improves user engagement.',
        },
        {
          question:
            'How can Formester and WordPress work together to improve my website workflow?',
          answer:
            'WordPress users can leverage Formester to streamline their workflow by managing website content effectively and integrating powerful forms seamlessly. Collecting payments, preventing spam, and analysing form submissions become hassle-free with this integration.',
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
