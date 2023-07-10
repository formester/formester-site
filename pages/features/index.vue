<template>
  <div>
    <featureHero />
    <featureContainer
      v-for="feature in features1"
      :key="feature.heading"
      :feature="feature"
    />
    <Testimonials :testimonials="randomTestimonials" />
    <featureContainer
      v-for="feature in features2"
      :key="feature.heading"
      :feature="feature"
    />
    <ThreeStepsCreateForm />
    <TemplateSection />
  </div>
</template>

<script>
import featureHero from '@/components/features/featureHero.vue'
import featureContainer from '@/components/features/featureContainer.vue'
import { allTestimonials } from '@/constants/testimonials'
import Testimonials from '@/components/Testimonial.vue'
import TemplateSection from '@/components/TemplateSection.vue'

import getSiteMeta from '@/utils/getSiteMeta'

export default {
  components: {
    featureHero,
    featureContainer,
    Testimonials,
    TemplateSection,
  },
  data() {
    return {
      features1: [
        {
          heading: 'HTML Form Backend',
          description:
            'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
          img: 'html-form',
          contents: [
            {
              title: 'Complete Control',
              description:
                'Never worry about your form not looking perfect like your website. With Formester you have everything under control. Style the forms and make it look the way you want it. No embedding or JavaScript required.',
              img: 'control',
            },
            {
              title: 'Realtime Notification',
              description:
                'Get a real-time notification on form submission. Stay on top of your business. You can configure Formester to notify you on Slack, Gmail or anywhere else.',
              img: 'notification',
            },
            {
              title: 'Easy Embedding',
              description:
                'If you are looking a form that just works out of the box, Formester is for you. Just copy our snippet and get started. It takes less than 5 minutes to make a working form on your website.',
              img: 'embedding',
            },
          ],
          link: 'html-form-backend',
        },
        {
          heading: 'Auto Responder',
          description:
            'Send personalised replies automatically to your customers on form submission. Emails are easy to create using our intuitive email builder. You can also customise the emails to go from your personal email account.',
          img: 'auto-responder',
          contents: [
            {
              title: 'White Label',
              description:
                'Make your emails look personal by using your company email address. You also get an option to choose between HTML and text-based emails.',
              img: 'label',
            },
            {
              title: 'Personalised Response',
              description:
                'Notifications can be personalised to include fields from the submissions. Make your users feel unique with messages which seem to be coming from actual humans and not a bot.',
              img: 'response',
            },
            {
              title: 'Realtime Tracking',
              description:
                'Monitor how people are interacting with your auto-response. Analyse useful metrics like open rate and link clicks to get insights into users behaviour. Use this data to make changes to your communication.',
              img: 'tracking',
            },
          ],
          link: 'auto-responder',
          bgPink: true,
        },
        {
          heading: 'Spam Protection',
          description:
            'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
          img: 'spam-protection',
          contents: [
            {
              title: 'One Click Re-Captcha',
              description:
                'With our one-click ReCaptcha feature, prevent spam in under minutes. Send user to a clean page on Formester where they are verified as humans.',
              img: 'one-click-recaptcha',
            },
            {
              title: 'Custom Re-Captcha',
              description:
                'Keep user on the same page and increase the chance of the conversion. Our philosophy has always been to keep things simple but give enough control for those who need it.',
              img: 'custom-recaptcha',
            },
            {
              title: 'Smart Filters',
              description:
                'Our database is getting smarter each day. We use machine learning to predict spam submissions. Your every form will improve our prediction.',
              img: 'filter',
            },
          ],
          link: 'spam-protection',
        },
      ],
      features2: [
        {
          heading: 'Powerful Analytics',
          description:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          img: 'powerful-analytics',
          contents: [
            {
              title: 'Knowing Your Customers',
              description:
                'The data can be filtered by traffic source, device, location, browser, operating system, and other crucial factors. Using your analytics account, you can analyze user behavior and statistics over time.',
              img: 'knowing-your-customers',
            },
            {
              title: 'Track your traffic by analyzing it',
              description:
                'You can see in detail where your visitors are coming from, what technology platforms they use, and which devices they are using to interact with your form in the traffic panel.',
              img: 'analyzing-traffic',
            },
            {
              title: 'Provide critical insight',
              description:
                'Conversion rate is crucial. When your conversion rate is low, you have a high view rate but little interaction. This indicates that your questions are too long or that there is room for improvement.',
              img: 'insight',
            },
          ],
          link: 'powerful-analytics',
        },
        {
          heading: 'Conditional Logic',
          description:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          img: 'conditional-logic',
          contents: [
            {
              title: 'Skip to other pages',
              description:
                "In order to collect the most accurate data for your research, you can ask questions that don't apply to each user, allowing them to skip irrelevant pages in your survey.",
              img: 'skip-to-other-pages',
            },
            {
              title: 'Skip to follow up questions',
              description:
                'For best results, allow your respondents to skip irrelevant questions in your survey.',
              img: 'skip-to-follow-up-questions',
            },
            {
              title: 'Skip Logic',
              description:
                'Display only the questions your respondents must answer. You simply need to specify the conditions and choose the fields to hide from the drop-down list.',
              img: 'skip-logic',
            },
          ],
          link: 'conditional-logic',
          bgPink: true,
        },
        {
          heading: 'Digital Signature',
          description:
            'Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.',
          img: 'digital-signature',
          contents: [
            {
              title: 'Speed and Efficiency',
              description:
                'Getting a signature faster is one of its greatest advantages. Signing this form electronically takes just a few minutes.',
              img: 'speed-efficiency',
            },
            {
              title: 'Professional Documents',
              description:
                'Create documents that look professional with your company branding and logo. With custom domain feature you can personalize it even further.',
              img: 'professional-document',
            },
            {
              title: 'Easy Sharing',
              description:
                'One click share to send documents to one or hundred users in under a minute. They get the document in their inbox with a link to sign and complete it',
              img: 'easy-sharing',
            },
          ],
          link: 'digital-signature',
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
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/',
        title: 'Feature Page - Formester',
        description:
          "Experience the perfect blend of simplicity and versatility, empowering you to create engaging and efficient forms effortlessly.",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with powerful analytics page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with powerful analytics page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Exciting Features for your Form Builder | Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/',
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
          name: 'Formester',
          description:
            "Sign up now for the best No Code Form Builder! Create stunning HTML Forms with Formester's easy-to-use Online HTML Form Builder. Start building today!",
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
              name: 'Home',
              item: 'https://formester.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Features',
              item: 'https://formester.com/features',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
