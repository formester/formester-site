<template>
  <div>
    <section class="hero">
      <div class="container horizontal__padding">
        <div class="row my-5">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start"
          >
            <h1 class="section__heading">
              Forms.App Alternative that Gives <span class="highlight__text">More</span>
            </h1>
            <p class="section__subtitle mt-3">
              Declutter your work with a faster and intuitive form builder.
              Build good looking forms without fighting the system. With
              Formester, you can now make your forms ‘work’ for you. Our deep
              form features - analytics, productive integrations and HTML form
              backend helps you collect and analyze your audience’s data like
              never before.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="btn button hero__button mt-4"
            >
              Try for Free
            </a>
          </div>
          <div
            class="col-lg-7 d-flex align-items-center justify-content-center"
          >
            <nuxt-img
              src="/formester-vs-page-hero-img.svg"
              alt="Formester form building with drag and drop interface"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container text-center">
      <h2 class="section__heading">Formester vs. Forms.App: Head To Head</h2>
      <div class="table-responsive">
        <table class="table text-start comparision__table mx-auto">
          <thead class="bg__light-primary">
            <tr>
              <th scope="col">Features</th>
              <th scope="col">Formester</th>
              <th scope="col">Forms.App</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c of comparisions" :key="c[0]">
              <td style="font-weight: 600" v-html="c.title"></td>
              <td v-html="c.formester"></td>
              <td v-html="c.forms"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="container text-center">
      <i class="fa-solid fa-angle-up"></i>
      <h3 class="section__heading">Pricing</h3>
      <div class="table-responsive">
        <table
          class="table text-start comparision__table comparision__table-pricing mx-auto"
        >
          <thead class="bg__light-primary">
            <tr>
              <th scope="col">Features</th>
              <th scope="col">Formester</th>
              <th scope="col">Forms.App</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p of pricing" :key="p[0]">
              <td style="font-weight: 600" v-html="p.title"></td>
              <td v-html="p.formester"></td>
              <td v-html="p.forms"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="how-it-works container">
      <h2 class="section__heading text-center">
        3 Reasons Why You Will Love Formester
      </h2>
      <div class="row text-start mt-5">
        <div
          v-for="step in steps"
          :key="step.step"
          class="mt-4 col-lg-3 mx-auto howitworks__card position-relative"
          :data-step="step.step"
        >
          <h6>{{ step.heading }}</h6>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </section>

    <section class="container my-5 py-5">
      <h2 class="section__heading">
        Create Solutions with Formester, Not Mere Forms
      </h2>
      <p class="section__subtitle mb-5">
        Remarkable experience for your users and comprehensive solution for your
        data-collection needs, Formester enables you to go beyond building
        forms.
      </p>
      <div class="row">
        <div class="col-md-5 d-flex flex-column gap-5">
          <div class="d-flex flex-column">
            <h3 class="section__subheading">Spam Protection</h3>
            <p class="section__subheading-content">
              You don’t want spammers to spill water in your data collection
              efforts. It just takes a click with Formester to safeguard your
              forms from them. Enable captcha and you’re good to go!
            </p>
          </div>
          <div class="d-flex flex-column">
            <h3 class="section__subheading">Cloud Integrations</h3>
            <p class="section__subheading-content">
              Slack, Google Sheets, Salesforce and numerous other Zapier
              integrations make work easier for you. Don’t just create forms,
              but solve your problems – Formester lets you add any number of
              integrations seamlessly.
            </p>
          </div>
          <div class="d-flex flex-column">
            <h3 class="section__subheading">Many Forms, One Builder</h3>
            <p class="section__subheading-content">
              Wish to choose from single-page or multi-page forms? Want to share
              standalone forms or integrate them into your website? We have good
              news, you don’t need multiple form builders, Formester does it
              all.
            </p>
          </div>
        </div>
        <div class="col-md-7">
          <nuxt-img
            class="img-fluid"
            src="/create-solution-with-formester.svg"
            alt="Create Design with Formester"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <SwitchToFormester />

    <section class="container testimonials text-center my-5 py-5">
      <h2 class="section__heading">Testimonials</h2>
      <p class="section__subtitle mb-5">
        Here’s what some of our happy customer have to say about us!
      </p>
      <div
        class="d-flex flex-column flex-lg-row gap-5 justify-content-center align-items-center mt-5"
      >
        <div
          class="gradient-testimonial__container text-start position-relative"
        >
          <nuxt-img
            src="/quotes.svg"
            alt="Quotes Watermark"
            class="quotes__watermark position-absolute"
            loading="lazy"
          />
          <p class="testimonial__content">
            I really enjoy Formester. It’s clean and straightforward and it does
            well what it is supposed to do.
          </p>
          <div class="d-flex flex-column mt-4">
            <span class="testimonial__person--name">Thibaud Martinez</span>
            <span class="testimonial__person--post mt-2">Organizer</span>
            <nuxt-img
              src="/tedx.png"
              alt="Tedx Paris Organizer"
              width="110"
              class="company__logo mt-4"
              loading="lazy"
            />
          </div>
        </div>
        <div
          class="gradient-testimonial__container text-start position-relative"
        >
          <nuxt-img
            src="/quotes.svg"
            alt="Quotes Watermark"
            class="quotes__watermark position-absolute"
            loading="lazy"
          />
          <p class="testimonial__content">
            At Rumie we use Formester to get feedback from our educators and
            volunteers. It's intuitive, fast and easy to share.
          </p>
          <div class="d-flex flex-column mt-4">
            <span class="testimonial__person--name">Bogdan Arsenie</span>
            <span class="testimonial__person--post mt-2"
              >Chief Technology Officer</span
            >
            <nuxt-img
              src="/rumie.svg"
              alt="Rumie Logo"
              width="150"
              class="company__logo mt-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container text-center mb-5">
      <h2 class="section__heading">Other Comparisons</h2>
      <div class="row mt-4 px-2">
        <RelatedArticleCard
          v-for="(relatedComparison, index) in relatedComparisons"
          :key="index"
          :article="relatedComparison"
          class="col-lg-4 py-md-4 related-article-card"
        />
      </div>
    </section>

    <CallToActionSection />
  </div>
</template>

<script>
// MetaTags
import getSiteMeta from '../utils/getSiteMeta'
import RelatedArticleCard from '@/components/RelatedArticleCard.vue'

export default {
  components: { RelatedArticleCard },
  data() {
    return {
      steps: [
        {
          step: 1,
          heading: 'Multi-Purpose Form Creation Made Easy',
          description: `It takes minutes, not hours to create forms using Formester. You can customize them the way you want and use them as standalone or web-integrated forms. Just drag and drop to build a form as per your requirements or integrate an existing HTML form’s backend.`,
        },
        {
          step: 2,
          heading: 'Responses on Auto-Pilot',
          description:
            'Stop jumping from one platform to another for each of your form-related tasks. Send automated replies to your audience when they fill out your form, and never compromise on personalization. One of Formester’s unique propositions in the industry, Auto Responder allows you the convenience of two tools in one.',
        },
        {
          step: 3,
          heading: 'End-to-End Form Analytics',
          description:
            'Just collecting data isn’t enough. Unless you extract meaningful insights from your form responses, your business isn’t going to benefit. Formester serves powerful analytics that are easier to comprehend and help you study engagement and conversions. Analyze your performance to act towards reducing your drop-offs.',
        },
      ],
      comparisions: [
        {
          title: 'White Labeled Surveys Creation',
          formester: '<span class="present">Present</span>',
          forms: '<span class="absent">Not Available</span>',
        },
        {
          title: 'Logo addition to form',
          formester:
            '<span class="present">Available</span> even with the <span class="present">free</span> plan',
          forms: '<span class="absent">Not Available</span>',
        },
        {
          title: 'HTML Form Backend Service',
          formester: '<span class="present">Present</span>',
          forms: '<span class="absent">Not Available</span>',
        },
        {
          title: 'Spam Protection',
          formester: '<span class="present">Present</span>',
          forms: '<span class="absent">Basic</span>',
        },
        {
          title: 'Deep Performance Analytics',
          formester: '<span class="present">Present</span>',
          forms: '<span class="absent">Basic</span>',
        },
        {
          title: 'Redirection on Submission',
          formester:
            '<span class="present">Customization</span> available even with the <span class="present">basic</span> plan',
          forms: 'Only in <span class="absent">paid</span> plans',
        },
        {
          title: 'Website Embedment',
          formester: '<span class="present">Easy and quickly</span> embedment',
          forms: '<span class="absent">Complex</span> embedment execution',
        },
        {
          title: 'End-to-End Design Customization',
          formester: '<span class="present">Present</span>',
          forms: '<span class="absent">Minimal</span> customization',
        },
        {
          title: 'Mobile First UX',
          formester: '<span class="present">Perfectly</span> mobile-first',
          forms:
            '<span class="absent">Complicated</span> for design-heavy forms',
        },
        {
          title: 'Conditional Logic',
          formester: '<span class="present">Present</span>',
          forms:
            'Present with a <span class="absent">lower degree</span> of flexibility',
        },
        {
          title: 'Form Limit',
          formester:
            '<span class="present">Unlimited</span> including <span class="present">free</span> plan users',
          forms:
            '<span class="absent">Limited</span> Forms - 10 Forms for free, <span class="absent">$29/month</span> for Unlimited Forms',
        },
        {
          title: 'Monthly Form Views',
          formester:
            '<span class="present">Unlimited</span> including <span class="present">free</span> plan users',
          forms:
            '<span class="absent">Limited</span> Form Views - 1000 views for free, <span class="absent">$29/month</span> for Unlimited Views',
        },
        {
          title: 'Total Submission Storage',
          formester:
            '<span class="present">Unlimited</span> including <span class="present">free</span> plan users',
          forms:
            '<span class="absent">1000</span> Total Submission Storage for free, <span class="absent">$19/month</span> for Unlimited',
        },
        {
          title: 'Automated Email Responses',
          formester:
            '<span class="present">Present</span> with custom integration',
          forms:
            '<span class="absent">25</span> email notifications/month for free, <span class="absent">$19/month</span> for unlimited email notifications',
        },
        {
          title: 'Best For',
          formester:
            '<span class="present">All kinds of forms and applications</span> including survey lead generation, feedback etc',
          forms: '<span class="absent">Not</span> suitable for long forms',
        },
        {
          title: 'Add Media to Forms',
          formester: '<span class="present">Present</span>',
          forms: '<span class="present">Present</span>',
        },
        {
          title: 'Cloud Integrations with Zapier',
          formester: '<span class="present">Present</span>',
          forms: '<span class="present">Present</span>',
        },
        {
          title: 'Monthly Payment Submissions',
          formester: 'Build in <span class="absent">Progress</span>',
          forms:
            '<span class="present">$19/month</span> for <span class="present">100</span> Monthly Payment Submissions',
        },
        {
          title: 'Storage',
          formester:
            'Basic Plan: <span class="absent">$13/month</span> & Maximum Storage: <span class="absent">1GB</span>.<span></br></span> Business Plan: <span class="absent">$49/monthv</span> & Maximum Storage: <span class="absent">50GB</span>',
          forms:
            'Basic Plan: <span class="present">$19/month</span>  & Maximum Storage: <span class="present">10GB</span>.<span></br></span> Pro Plan: <span class="present">$29/month</span> & Maximum Storage <span class="present">100GB</span>  ',
        },
      ],
      pricing: [
        {
          title: 'Free',
          formester:
            'Starts <span class="present">free</span> for <span class="present">100</span> submissions',
          forms:
            'Starts <span class="present">free</span> for <span class="present">100</span> submissions',
        },
        {
          title: 'Personal',
          formester:
            '<span class="absent">$13/month</span> for <span class="absent">1000</span> submissions',
          forms:
            '<span class="present">$12/month</span> for <span class="present">1000</span> submissions',
        },
        {
          title: 'Bussiness',
          formester:
            '<span class="absent">$49/month</span> for <span class="absent">15k</span> submissions',
          forms:
            '<span class="present">$19/month</span> for <span class="present">100k</span> submissions',
        },
      ],
      relatedComparisons: [
        {
          title: 'Formester vs Typeform',
          coverImg: '/img/formester-vs-typeform.png',
          coverImgAlt: 'Formester vs Typeform',
          link: { name: 'formester-vs-typeform' },
          type: 'comparison',
        },
        {
          title: 'Formester vs Jotform',
          coverImg: '/img/formester-vs-jotform.png',
          coverImgAlt: 'Formester vs Jotform',
          link: { name: 'formester-vs-jotform' },
          type: 'comparison',
        },
        {
          title: 'Formester vs Zoho Form',
          coverImg: '/img/formester-vs-zoho-form.png',
          coverImgAlt: 'Formester vs Zoho Form',
          link: { name: 'formester-vs-zoho-form' },
          type: 'comparison',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/formester-vs-forms-app/',
        title: 'Formester vs Forms App | Forms App Alternative - Formester',
        description:
          'Clear out your confusion now! With custom forms, data collection, actionable insights and affordable prices, see how Formester offers you more!',
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
        keywords: [
          'forms app alternative',
          'forms app alternative free',
          'forms app competitor',
          'free alternative to forms app',
          'forms app alternative open source',
          'forms app alternative wordpress',
          'forms app alternatives free',
          'forms app open source alternative',
          'best forms app alternative',
          'forms app wordpress alternative',
          'forms app alternative reddit',
          'forms app alternative for wordpress',
          'open source forms app alternative',
          'forms app alternative free reddit',
          'forms app similar free',
          'forms app equivalent',
          'wordpress forms app alternative',
          'free forms app alternatives',
          'free alternative forms app',
          'forms app like open source',
          'similar to forms app free',
          'privacy focused alternatives to forms app',
          'free forms app alternative with conditional formatting',
          'open source forms app alternatives',
          'forms',
          'web forms',
          'formester',
          'online forms',
          'online web forms',
          'forms app wufoo alternatives',
          'cheaper forms app alternative',
          'easier alternatives to forms app',
          'paid alternatives to forms app',
          'private alternatives to forms app',
          'forms app alternate thank you pages',
          'forms app alternates commerce',
          'forms app alternatives cheaper',
          'forms app alternative quiz',
          'better forms app alternatives',
          'completele free alternatives to forms app',
          'rank alternatives forms app',
          'forms app alternative for gravity forms',
          'forms app alternative for registration',
          'forms app alternative squarespace',
          'forms app alternative with branching',
          'forms app cheaper alternatives',
          'forms app wordpress alternative',
          'forms app alternative free reddit',
          'forms app alternative deutsch',
          'free alternatives to forms app',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Formester vs Forms App | Forms App Alternative - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/formester-vs-forms-app/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Formester vs Forms App | Forms App Alternative - Formester',
      description:
        'Clear out your confusion now! With custom forms, data collection, actionable insights and affordable prices, see how Formester offers you more!',
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delaware',
        addressCountry: 'United States',
      },
      creator: {
        '@type': 'Organization',
        '@id': '#organization',
        url: 'https://formester.com/',
        name: 'Formester',
        logo: {
          '@type': 'ImageObject',
          url: 'https://formester.com/logo.png',
        },
      },
    }
  },
}
</script>

<style scoped>
/* HERO */
.hero {
  margin-bottom: 74px;
}

.hero__image {
  padding-left: 30px;
}

.section__heading {
  font-size: var(--ft-df-heading);
  font-weight: 700;
  line-height: 72px;
}

.section__subheading {
  color: #28213d;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.25rem;
}

.section__subheading-content {
  color: #4e4664;
  font-size: 1rem;
  line-height: 160%;
}

.section__subtitle {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

@media (max-width: 768px) {
  .section__heading {
    line-height: 52px;
    font-size: 2rem;
  }
}

/* TESTIMONIALS */
.gradient-testimonial__container {
  background: linear-gradient(180deg, #423569 0%, #5e4b96 100%);
  border-radius: 0.5rem;
  padding: 4rem 3rem 3rem;
  max-width: 32rem;
}

.testimonial__content {
  position: relative;
  color: white;
  font-size: 2rem;
  line-height: 160%;
  z-index: 10;
}

.testimonial__person--name {
  color: white;
  font-size: var(--ft-big-body);
  font-weight: 900;
}

.testimonial__person--post {
  font-size: var(--ft-df-body);
  letter-spacing: 2%;
  color: var(--clr-primary-light);
}

.quotes__watermark {
  height: 100px;
  top: 1rem;
  left: 1rem;
  opacity: 0.5;
}

/* COMPARISION */
.comparision__table {
  margin-top: 3.5rem;
  max-width: 60rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}

.comparision__table-pricing {
  margin-top: 10px;
}
.table > :not(caption) > * > * {
  padding: 1rem;
}

thead th {
  border: none;
}

@media only screen and (max-width: 992px) {
  .comparision__table {
    max-width: 45rem;
  }
}
@media only screen and (max-width: 768px) {
  .comparision__table {
    max-width: 32rem;
  }
}
@media only screen and (max-width: 576px) {
  .comparision__table {
    max-width: 20rem;
  }
}

@media only screen and (max-width: 500px) {
  .comparision__table {
    font-size: 12px;
    line-height: 20px;
    max-width: 20rem;
  }
  .comparision__table td {
    padding: 0.5em;
  }
}
</style>
