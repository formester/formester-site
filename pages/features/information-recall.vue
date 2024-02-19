<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Reuse and Recall Information </h1>
            <p class="hero__subheading mt-3">
              Information Recall allows you to reference answers, variables, and more, 
              making your forms feel more dynamic, conversational, compelling and smart. 
              Supercharge your forms by creating engaging experiences with Formester's Information Recall feature.
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
              src="/features/information-recall/information-recall.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div
          class="feature__heading d-flex align-items-center justify-content-center"
        >
          <h2 class="section__heading">How does Information Recall help?</h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="heading d-flex flex-column align-items-center text-center">
          <h2 class="section__heading">
            Benefits of Information Recall
          </h2>
        </div>

        <div class="templates mt-md-5">
          <div v-for="(benefit, idx) in benefits" :key="idx">
            <div
              class="card p-3 d-flex align-items-center justify-items-center text-center align-items-md-start text-md-start"
            >
              <nuxt-img
                :src="`/icons/${benefit.imageSrc}`"
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

    <InformationRecallInPractice />
    <Testimonial :testimonials="Testimonials" />
    <TemplateSection />
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'
import TemplateSection from '../../components/TemplateSection.vue'
import InformationRecallInPractice from '../../components/InformationRecallInPractice.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    InformationRecallInPractice,
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/information-recall/',
        title: 'Information Recall and Reuse Feature | Formester',
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
      title: 'Information Recall and Reuse Feature | Formester',
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
      features: [
        {
          title: 'Answer Recall: Bring Conversations to Life',
          description:
            "Enhance the conversational experience of your webforms by referencing and utilizing answers from previous questions. By mentioning a respondent's name or other relevant information, you can create a personalized interaction that makes them feel engaged and valued.",
          src: 'information-recall/answer-recall-bring-conversations-to-life.svg',
          alt: "Previous answers from questions are referenced and utilized, enhancing the conversational experience. By mentioning a respondent's name a personalized interaction is created, making them feel engaged and valued.",
        },
        {
          title: 'Dynamic Variables: Tailor Your Web-forms in Real-Time',
          description:
            'Take advantage of variables within your webforms to store and recall information throughout the form. Variables allow you to dynamically display or manipulate data based on previous answers, enabling a more tailored and customized experience for your respondents.',
          src: 'information-recall/dynamic-variables-tailor-your-web-forms-in-real-time.svg',
          alt: 'Variables are used to store and recall information throughout the form, allowing for dynamic display and manipulation of data based on previous answers. This enables a more tailored and customized experience for respondents.',
        },
        {
          title: 'Hidden Field Capabilities: Capture Data and Personalize',
          description:
            'Use Hidden Fields to gather additional information and customize your forms based on respondent attributes. Track respondent sources, segment your audience, and create personalized form interactions.',
          src: 'information-recall/hidden-field-capabilities-capture-data-and-personalize.svg',
          alt: ' Hidden Fields are utilized to capture additional information and customize the form based on respondent attributes. This allows for tracking respondent sources, audience segmentation, and the creation of personalized form interactions.',
        },
        {
          title: 'Score & Pricing Integrations: Enhanced Functionality',
          description:
            "Recall and display quiz results using score information in Endings or email notifications. Calculate and showcase prices based on respondents' answers, enabling dynamic pricing strategies.",
          src: 'information-recall/score-price-integrations-enhanced-functionality.svg',
          alt: 'The no. of travellers and and cost per person is recalled and calculation is performed based on a formula',
        },
      ],
      benefits: [
        {
          title: 'Time-Saving Efficiency',
          description:
            'The Information Recall feature eliminates the need for repetitive data entry by automatically populating fields with previously collected information. This saves valuable time and reduces manual effort, allowing you to focus on more important tasks.',
          imageSrc: 'time-saving.jpg',
          altText: 'icon displaying clock symbol',
        },
        {
          title: 'Enhanced Personalization',
          description:
            'By recalling and referencing previous responses, the Information Recall feature enables a more personalized user experience. Users feel recognized and engaged as their individual information is seamlessly incorporated into subsequent questions or actions.',
          imageSrc: 'enhanced-personalization.jpg',
          altText: 'icon showing personlization',
        },
        {
          title: 'Improved Data Accuracy',
          description:
            'With Information Recall, the risk of errors in data entry is minimized. By pulling information from previous responses, the feature ensures data consistency and integrity, resulting in more accurate and reliable data collection.',
          imageSrc: 'improved-data-accuracy.jpg',
          altText: 'icon showing storage for storing datas',
        },
        {
          title: 'Streamlined Workflows ',
          description:
            'The ability to recall information and pre-fill form fields simplifies the form-filling process for users. It streamlines workflows, reduces friction, and enhances overall user satisfaction, leading to higher form completion rates and improved data quality.',
          imageSrc: 'streamlined-workflow.jpg',
          altText: 'icon showing work flows',
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
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
}

.card {
  border-radius: 18px;
  border: none;
}

@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
