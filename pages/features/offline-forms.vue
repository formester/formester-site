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
              (change) Stay connected to your forms and collect submissions even
              in no network zones with our mobile app
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Get Started - it's Free</a
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

    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
    <Faqs :faqs="faqs" />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '../../components/TemplateSection.vue'
import Faqs from '@/components/template/Faq.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    Faqs,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/information-recall/',
        title: 'Information Recall - Formester',
        description:
          "Create personalized and interactive form & survey experiences - Formester's Information Recall | Answer recall, Dynamic variables & more!",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester web forms with information recall feature',
          'Information Recall',
          'Web forms Information Recall',
          'Information Recall for web forms',
          'Information Recall web forms',
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
      title: 'Information Recall - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/information-recall/',
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
          name: 'Information - Formester',
          description:
            "Create personalized and interactive form & survey experiences - Formester's Information Recall | Answer recall, Dynamic variables & more!",
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
              name: 'Information Recall',
              item: 'https://formester.com/features/information-recall/',
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
            'Create, Edit and Manage your forms by staying connected even when you are offline. The changes will sync up as soon as you are back online!',
          imageSrc: 'features/offline-forms/icons/connected.svg',
          altText: 'icon showing personlization',
        },
        {
          title: 'Uninterrupted',
          description:
            'Simplify data collection without any interruptions during fieldwork at isolated locations with limited connectivity.',
          imageSrc: 'features/offline-forms/icons/uninterrupted.svg',
          altText: 'icon showing storage for storing datas',
        },
        {
          title: 'Efficient',
          description:
            'Save resources and increase productivity by getting form submissions without worrying about the internet costs!',
          imageSrc: 'features/offline-forms/icons/efficient.svg',
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
            'What types of forms can I add to my WordPress blog or site with Formester?',
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
            'Why should I integrate Formester forms with my WordPress site?',
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
}
</style>
