<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">
              Offline Forms for Uninterrupted Data Collection: Anytime, Anywhere
            </h1>
            <p class="hero__subheading mt-3">
              Stay connected to your forms and collect submissions even in no
              network zones with our offline forms
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Create Now</a
            >
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center mt-lg-0 mt-5"
          >
            <nuxt-img
              src="/features/offline-forms/offiline-forms-hero-illustration.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
          <h2 class="section__heading">Stay connected with Forms Offline</h2>
        </div>

        <div class="templates mt-md-5">
          <div v-for="(benefit, idx) in benefits" :key="idx">
            <div
              class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
            >
              <nuxt-img
                :src="benefit.imageSrc"
                class="img-fluid"
                style="width: 69px"
                :alt="benefit.altText"
                loading="lazy"
              />
              <h4 class="sub__section-heading mt-4">{{ benefit.title }}</h4>
              <p class="subheading__text">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProcessSteps
      heading="Simple 3 step process: How offline forms work? "
      :steps="howOfflineFormWorks"
    />
    <StandOutFeatureSection
      heading="Make the most of your Offline Forms"
      :features="makeMostOfYourOfflineForms"
      :columnCount="4"
    />

    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
    <Faqs :faqs="faqs" />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '@/components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '@/components/TemplateSection.vue'
import Faqs from '@/components/template/Faq.vue'
import ProcessSteps from '@/components/ProcessSteps.vue'
import StandOutFeatureSection from '@/components/competitors/StandOutFeatureSection.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    Faqs,
    ProcessSteps,
    StandOutFeatureSection,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/offline-forms/',
        title:
          'Offline Forms for Uninterrupted Data Collection: Anytime, Anywhere',
        description:
          'Stay connected to your forms and collect submissions even in no network zones with our offline forms',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester web forms with offline forms feature',
          'Offline Forms',
          'Web forms Offline Forms',
          'Offline Forms for web forms',
          'Offline Forms web forms',
          'web forms for customer support',
          'Best Autoresponder Software in 2023',
          'web forms productivity',
          'automate your workflow',
          'customized notifications',
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
          'instant reply',
          'customized reply',
          'personalized emails',
          'personalized instant emails',
          'instant pre-written reply',
          'send a copy of responses to submitters',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Offline Forms | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/offline-forms/',
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
          name: 'Offline Forms for Uninterrupted Data Collection: Anytime, Anywhere',
          description:
            'Stay connected to your forms and collect submissions even in no network zones with our offline forms',
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
              name: 'Features',
              item: 'https://formester.com/features',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Offline Forms',
              item: 'https://formester.com/features/offline-forms/',
            },
          ],
        },
      ],
    }
  },
  data() {
    return {
      benefits: [
        {
          title: 'Accessible',
          description:
            'No matter where you are, collect offline form submissions from any location without any Wifi, Internet or Mobile Data Connection.',
          imageSrc: 'features/offline-forms/icons/accessible.svg',
          altText: 'icon displaying clock symbol',
        },
        {
          title: 'Connected',
          description:
            'Collect form submissions by staying connected even when you are offline. The responses will sync up as soon as you are back online!',
          imageSrc: 'features/offline-forms/icons/connected.svg',
          altText: 'icon showing personlization',
        },
        {
          title: 'Uninterrupted',
          description:
            'Simplify data collection without any interruptions during fieldwork at isolated locations with limited connectivity.',
          imageSrc: 'features/offline-forms/icons/Uninterrupted.svg',
          altText: 'icon showing storage for storing datas',
        },
        {
          title: 'Flexible ',
          description:
            'The forms can be installed on tablets, phones and laptops as apps which can then be accessed at any point of time without the internet.',
          imageSrc: 'features/offline-forms/icons/flexible.svg',
          altText: 'icon showing work flows',
        },
      ],
      faqs: [
        {
          question: 'How do offline forms work?',
          answer:
            "Offline forms allow you to collect data even when you're not connected to the internet. This means you can use them in remote locations, on-site visits, or during events with unreliable connectivity. Once you're back online, the data is securely synced to your device.",
        },
        {
          question:
            'What are the benefits of using offline forms?',
          answer: 'Offline forms offer several advantages, including:',
          list: [
            'Increased productivity: Eliminate delays caused by slow or unavailable internet connections.',
            "Enhanced data security: Protect sensitive information by storing it locally until it's safely synced.",
            'Improved accessibility: Reach users in areas with limited or no internet access.',
            'Reduced costs: Eliminate data charges and dependency on internet providers.',
          ],
        },
        {
          question:
            'What types of businesses can benefit from offline forms?',
          answer:
            'Offline forms can be valuable for a wide range of industries, including:',
          list: [
            'Field service: Collect data during inspections, repairs, or installations.',
            'Construction: Capture site information, progress reports, and safety checklists.',
            'Healthcare: Conduct patient surveys, health assessments, or clinical research.',
            'Events: Gather registrations, feedback, or surveys at conferences, trade shows, or festivals.',
            'Retail: Enable offline transactions or customer surveys in stores.',
          ],
        },
      ],
      howOfflineFormWorks: [
        {
          description:
            'Sign In to your Formester account and create a form. You can also use any pre-designed template from our library.',
          imageSrc: 'features/offline-forms/step1.svg',
          imageAlt:
            'ui to create new form and few graphics showing ready made templates',
        },
        {
          description:
            "Visit the 'Advanced' section in the form builder to activate the 'Allow Form to Work Offline' option, and then proceed to the survey page to install the form as an app.",
          imageSrc: 'features/offline-forms/step2.svg',
          imageAlt: 'ui to enable the allow form to work offline',
        },
        {
          description:
            'Once your form is loaded properly, you can start collecting submissions, even if the internet is disabled (all submissions will sync when you get online).',
          imageSrc: 'features/offline-forms/step3.svg',
          imageAlt:
            'mockup ui of submission page with a internet not available symbol',
        },
      ],
      makeMostOfYourOfflineForms: [
        {
          title: 'Conditional Logic',
          description:
            'Create intelligent forms that adapt based on user responses, ensuring a dynamic experience whether online or offline.',
          img: '/features/offline-forms/icons/conditional-logic.svg',
        },
        {
          title: 'Auto Responder',
          description:
            'Set up automated responses to engage users even with offline submissions, providing instant confirmation messages upon reconnection.',
          img: '/features/offline-forms/icons/auto-responder.svg',
        },
        {
          title: 'Information Recall',
          description:
            'Reference previous answers provided offline, allowing for a personalized user experience.',
          img: '/features/offline-forms/icons/information-recall.svg',
        },
        {
          title: 'Form Analytics',
          description:
            'Collect user engagement insights even when offline, and receive comprehensive analytics once the connection is restored.',
          img: '/features/offline-forms/icons/form-analytics.svg',
        },
      ],
    }
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(
      Math.random() * (randomTestimonials.length - 2)
    )
    randomTestimonials = randomTestimonials.slice(randIndex, randIndex + 2)
    return { randomTestimonials }
  },
}
</script>

<style scoped>
.feature__hero {
  padding-block: 8em;
  background: var(--clr-primary);
  color: white;
}

.hero__image {
  height: 100%;
}

.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}

.templates {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 0;
}

.card {
  border: none;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }

  .templates {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .templates {
    margin-top: 16px;
    grid-template-columns: 1fr;
  }
}
</style>
