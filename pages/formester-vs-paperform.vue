<template>
  <div>
    <section class="hero">
      <div class="container horizontal__padding">
        <div class="row my-5">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start"
          >
            <h1 class="section__heading">
              Paperform Alternative that Gives <span class="highlight__text">More</span>
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
      <h2 class="section__heading">Formester vs. Paperform: Head To Head</h2>
      <div class="table-responsive">
        <table class="table text-start comparision__table mx-auto">
          <thead class="bg__light-primary">
            <tr>
              <th scope="col">Features</th>
              <th scope="col">Formester</th>
              <th scope="col">Paperform</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c of comparisions" :key="c[0]">
              <td style="font-weight: 600" v-html="c.title"></td>
              <td v-html="c.formester"></td>
              <td v-html="c.paperform"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="container text-center">
      <h3 class="section__heading">Pricing</h3>
      <div class="table-responsive">
        <table
          class="table text-start comparision__table comparision__table-pricing mx-auto"
        >
          <thead class="bg__light-primary">
            <tr>
              <th scope="col">Features</th>
              <th scope="col">Formester</th>
              <th scope="col">Paperform</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c of pricing" :key="c[0]">
              <td style="font-weight: 600" v-html="c.title"></td>
              <td v-html="c.formester"></td>
              <td v-html="c.paperform"></td>
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
          class="col-lg-4 related-article-card"
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
          title: 'HTML Form Backend Service',
          formester: '<span class="present">Present</span>',
          paperform: '<span class="absent">Not Available</span>',
        },
        {
          title: 'White Labeled Surveys Creation',
          formester: '<span class="present">Present</span>',
          paperform: '<span class="absent">Not Available</span>',
        },
        {
          title: 'Logo addition to form',
          formester:
            '<span class="present">Available</span> even with the <span class="present">free</span> plan',
          paperform: '<span class="absent">Not Available</span> specifically',
        },
        {
          title: 'Automated Email Responses',
          formester:
            '<span class="present">Present</span> with custom integration',
          paperform: 'Only in <span class="absent">paid plans</span>',
        },
        {
          title: 'Website Embedment',
          formester: '<span class="present">Easy and quickly</span> embedment',
          paperform: '<span class="absent">Complex</span> embedment execution',
        },
        {
          title: 'End-to-End Design Customization',
          formester: '<span class="present">Present</span>',
          paperform: '<span class="absent">Minimal</span> customization',
        },
        {
          title: 'Mobile First UX',
          formester: '<span class="present">Perfectly</span> mobile-first',
          paperform:
            '<span class="absent">Complicated</span> for design-heavy forms',
        },
        {
          title: 'Conditional Logic',
          formester: '<span class="present">Present</span>',
          paperform:
            'Present with a <span class="absent">lower degree</span> of flexibility',
        },
        {
          title: 'Monthly Form Views',
          formester:
            '<span class="present">Unlimited</span> including <span class="present">free</span> plan users',
          paperform:
            '<span class="absent">Limited</span> Form Views - 10000 views for <span class="absent">$24/month</span>, <span class="absent">$49/month</span> for Unlimited Views',
        },

        {
          title: 'Collaborators',
          formester:
            '<span class="present">Allow collaborators</span> even in <span class="present">free</span> plan',
          paperform:
            'Single user upto <span class="absent">$49/month</span>, 5 users in <span class="absent">$159/month</span>',
        },
        {
          title: 'Total Submission Storage',
          formester:
            '<span class="present">Unlimited</span> including <span class="present">free</span> plan users',
          paperform:
            '1000 Total Submission Storage in<span class="absent">$24/month</span>, <span class="absent">$159/month</span> for Unlimited',
        },
        {
          title: 'Best For',
          formester:
            '<span class="present">All kinds of forms and applications</span> including survey lead generation, feedback etc',
          paperform: '<span class="absent">Not suitable</span>  for long forms',
        },
        {
          title: 'Monthly Payment Submissions',
          formester: 'Build in <span class="absent">Progress</span>',
          paperform:
            '<span class="present">$24/month</span> for 1 Payment Account',
        },
        {
          title: 'Redirection on Submission',
          formester:
            '<span class="present">Customization</span> available even with the <span class="present">free</span> plan',
          paperform:
            'Paperform forms <span class="present">also allows</span> redirection',
        },
        {
          title: 'Add Media to Forms',
          formester: '<span class="present">Present</span>',
          paperform: '<span class="present">Present</span>',
        },
        {
          title: 'Spam Protection',
          formester: '<span class="present">Present</span>',
          paperform: '<span class="present">Present</span>',
        },
        {
          title: 'Cloud Integrations with Zapier',
          formester: '<span class="present">Present</span>',
          paperform: '<span class="present">Present</span>',
        },
        {
          title: 'Deep Performance Analytics',
          formester: '<span class="present">Present</span>',
          paperform: '<span class="present">Present</span>',
        },
      ],
      pricing: [
        {
          title: 'Free',
          formester:
            '<span class="present">Starts</span> free for 100 submissions',
          paperform:
            '<span class="absent">$24/month</span> for 1000 submissions',
        },
        {
          title: 'Personal',
          formester:
            '<span class="present">$13/month</span> for 1000 submissions',
          paperform:
            '<span class="absent">$49/month</span> for 10k submissions',
        },
        {
          title: 'Bussiness',
          formester:
            '<span class="present">$49/month</span> for <span class="present">15k</span> submissions',
          paperform:
            '<span class="absent">$159/month</span> for unlimited submissions',
        },
      ],
      relatedComparisons: [
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
        {
          title: 'Formester vs Typeform',
          coverImg: '/img/formester-vs-typeform.png',
          coverImgAlt: 'Formester vs Typeform',
          link: { name: 'formester-vs-typeform' },
          type: 'comparison',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/formester-vs-paperform/',
        title: 'Formester vs Paperform | Paperform Alternative - Formester',
        description:
          'Powerful Alternative to Paperform - Try Formester for Online, No-Code, Customizable Forms with Advanced Features | Sign-up for Free!',
        mainImage: 'https://formester.com/formester-logo-meta-image.png',
        mainImageAlt: 'Formester Logo',
        keywords: [
          'paperform alternative',
          'paperform alternative free',
          'paperform competitor',
          'free alternative to paperform',
          'paperform alternative open source',
          'paperform alternative wordpress',
          'paperform alternatives free',
          'paperform open source alternative',
          'best paperform alternative',
          'paperform wordpress alternative',
          'paperform alternative reddit',
          'paperform alternative for wordpress',
          'open source paperform alternative',
          'paperform alternative free reddit',
          'paperform similar free',
          'paperform equivalent',
          'wordpress paperform alternative',
          'free paperform alternatives',
          'free alternative paperform	',
          'paperform like open source	',
          'similar to paperform free',
          'privacy focused alternatives to paperform',
          'free paperform alternative with conditional formatting',
          'open source paperform alternatives',
          'forms',
          'web forms',
          'formester',
          'online forms',
          'online web forms',
          'paperform wufoo alternatives',
          'cheaper paperform alternative',
          'easier alternatives to paperform',
          'paid alternatives to paperform',
          'private alternatives to paperform',
          'paperform alternate thank you pages',
          'paperform alternates commerce',
          'paperform alternatives cheaper',
          'paperform alternative quiz',
          'better paperform alternatives',
          'completele free alternatives to paperform',
          'rank alternatives paperform',
          'paperform alternative for gravity forms',
          'paperform alternative for registration',
          'paperform alternative squarespace',
          'paperform alternative with branching',
          'paperform cheaper alternatives',
          'paperform wordpress alternative',
          'paperform alternative free reddit',
          'paperform alternative deutsch',
          'free alternatives to paperform',
        ],
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Formester vs Paperform | Paperform Alternative - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/formester-vs-paperform/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Corporation',
      name: 'Formester vs Paperform | Paperform Alternative - Formester',
      description:
        'Powerful Alternative to Paperform - Try Formester for Online, No-Code, Customizable Forms with Advanced Features | Sign-up for Free!',
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
