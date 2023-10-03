<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-md-5"
          >
            <h1 class="section__heading">Auto Responder</h1>
            <p class="hero__subheading mt-3">
              Send personalised replies automatically to your customers on form
              submission. Emails are easy to create using our intuitive email
              builder. You can also customise the emails to go from your
              personal email account.
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
              src="/features/auto-responder/auto-responder-message.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
              sizes="80vw"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div
        class="row justify-content-center align-items-center text-center mt-5"
      >
        <div>
          <h2 class="section__heading">
            Boost Your Business with Autoresponder
          </h2>
          <p class="hero__subheading">
            Unlock the Power of Automated Email Marketing for Your Business
          </p>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mt-md-5"
        >
          <div
            class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
          >
            <nuxt-img
              style="width: 69px"
              src="/round-access-time.jpg"
              alt="Formester"
            />
            <h4 class="sub__section-heading mt-4">Time-saving</h4>
            <p class="subheading__text">
              Retain customers by sending them follow-up emails after a
              purchase, asking for feedback, and offering incentives for repeat
              purchases.
            </p>
          </div>
          <div
            class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
          >
            <nuxt-img style="width: 69px" src="/leads.jpg" alt="Formester" />
            <h4 class="sub__section-heading mt-4">Lead generation</h4>
            <p class="subheading__text">
              Capture leads and grow your email list by offering incentives such
              as free e-books, whitepapers, or exclusive discounts.
            </p>
          </div>
          <div
            class="d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-4 col-md-4 my-3 mt-lg-5"
          >
            <nuxt-img
              style="width: 69px"
              src="/customer-support.jpg"
              alt="Formester"
            />
            <h4 class="sub__section-heading mt-4">Customer retention</h4>
            <p class="subheading__text">
              Automating repetitive tasks such as sending welcome emails,
              confirmation emails, and follow-up emails.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div
          class="feature__heading d-flex align-items-center justify-content-center"
        >
          <h2 class="section__heading">How does Autoresponder help?</h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>

    <ApplicationOfWebForms />
    <ThreeStepsCreateForm />
    <Testimonial :testimonials="randomTestimonials" />
    <TemplateSection />
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '@/components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import TemplateSection from '@/components/TemplateSection.vue'
// MetaTags
import getSiteMeta from '@/utils/getSiteMeta'
import ApplicationOfWebForms from '@/components/ApplicationOfWebForms.vue'
import { fetchRandomTestimonials } from '@/utils/getTestimonials'

export default {
  components: {
    FeatureDetail,
    CallToActionSection,
    Testimonial,
    TemplateSection,
    ApplicationOfWebForms,
  },
  setup() {
    const meta = computed(() => {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/auto-responder/',
        title:
          'Email Autoresponder Message | Personalised Email Responder - Formester',
        description:
          'Boost your email marketing with a personalised email autoresponder message. Try Formester and engage your subscribers today! Sign up now.',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with auto-responder page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with auto-responder page image alt
        keywords: [
          'formester web forms with autoresponder feature',
          'formester web forms with autorespond feature',
          'formester web form features autorespond',
          'Autoresponder',
          'Web forms Autoresponder',
          'Autoresponder for web forms',
          'Autoresponder web forms',
          'Autoresponder feature for web forms',
          'Autorespond feature for web forms',
          'Automate SMS after each form submission',
          'Automate emails after each form submission',
          'Automate email',
          'Automate SMS',
          'web forms for customer support',
          'Best Autoresponder Software in 2023',
          'autoresponder software solutions to implement for your own business',
          'web forms productivity',
          'How to add Autoresponder Web Forms to your website',
          'How to add Autoresponder to your Web Forms',
          'best way to create an auto responder when someone completes a web form',
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
    })
    const features = [
      {
        title: 'White Label',
        description:
          'Make your emails look personal by using your company email address. You also get an option to choose between HTML and text-based emails.',
        src: 'auto-responder/white-label-illus.svg',
        alt: 'Get noticed by making the email personalized',
      },
      {
        title: 'Easy Email Builder',
        description:
          'Creating a captivating response has never been simpler. Our easy to use editor enables you to write compelling content. Add images, links or videos in a matter of a click.',
        src: 'auto-responder/easy-email-builder-illus.svg',
        alt: 'Email can be eaily build with auto responder',
      },
      {
        title: 'Personalised Response',
        description:
          'Notifications can be personalised to include fields from the submissions. Make your users feel unique with messages which seem to be coming from actual humans and not a bot.',
        src: 'auto-responder/personalised-response.svg',
        alt: 'Have a personalised respose to end user',
      },
      {
        title: 'Realtime Tracking',
        description:
          'Monitor how people are interacting with your auto-response. Analyse useful metrics like open rate and link clicks to get insights into users behaviour. Use this data to make changes to your communication.',
        src: 'auto-responder/realtime-tracking-illus.svg',
        alt: 'Track your forms in real time',
      },
    ]

    const randomTestimonials = ref([])

    const fetchTestimonials = async () => {
      try {
        randomTestimonials.value = await fetchRandomTestimonials()
      } catch (error) {
        console.error('Error fetching random testimonials:', error)
      }
    }

    useHead({
      title:
        'Email Autoresponder Message | Personalised Email Responder - Formester',
      meta: [meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/auto-responder/',
        },
      ],
    })

    useJsonld({
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Email Autoresponder Message | Personalised Email Responder - Formester',
          description:
            'Boost your email marketing with a personalised email autoresponder message. Try Formester and engage your subscribers today! Sign up now.',
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
              name: 'Auto Responder',
              item: 'https://formester.com/features/auto-responder/',
            },
          ],
        },
      ],
    })

    onMounted(() => {
      fetchTestimonials()
    })

    return {
      randomTestimonials,
      features
    }
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
@media (max-width: 992px) {
  .feature__hero {
    padding-block: 4em;
  }
}
</style>
