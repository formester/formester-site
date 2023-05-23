<template>
  <div class="container mt-5">
    <BlogFeatured
      v-for="article in heroArticles"
      :key="article.slug"
      :article="article"
      class="my-4"
    />
    <div class="row mt-4">
      <BlogCard
        v-for="article in articles"
        :key="article.slug"
        class="col-lg-4 mt-3 mb-5"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from '../../components/blog/BlogCard.vue'
import BlogFeatured from '../../components/blog/BlogFeatured.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: {
    BlogCard,
    BlogFeatured,
  },
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .where({
        published: true,
        featured: false,
      })
      .sortBy('createdAt', 'desc')
      .fetch()

    const heroArticles = await $content('blog')
      .where({
        published: true,
        featured: true,
      })
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
      heroArticles,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/blog/',
        title: 'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
        description:
          'Discover the Latest Form Builder Software in 2023 with Formester. Get the Best Online Form Builder to Use in 2023, with easy to use features and advanced customization options. Read more now!',
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with blog page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with blog page image alt
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Latest form Builder Software in 2023 | Best Online Form Builder to Use in 2023 - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/blog/',
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
          sameAs: [
            'https://www.facebook.com/formester/',
            'https://twitter.com/_formester_',
            'https://www.instagram.com/_formester_/',
            'https://www.linkedin.com/company/formester-inc/',
            'https://www.producthunt.com/products/formester',
            'https://www.softwareadvice.com/forms-automation/formester-profile/',
            'https://www.capterra.com/p/166904/Formester/',
            'https://www.getapp.com/website-ecommerce-software/a/formester/',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
          owns: {
            '@type': 'Product',
            name: 'Acorn Globus',
            url: 'https://acornglobus.com',
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Building your first form with formester',
              item: 'https://formester.com/blog/building-your-first-form-with-formester/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Single Page vs Multi Page Forms',
              item: 'http://localhost:3000/blog/single-page-vs-multi-page-forms/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: '7 Assured Ways to Improve Your Online Surveys',
              item: 'https://formester.com/blog/seven-assured-ways-to-improve-your-online-surveys/',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'The Best Survey Questions in 2023 (With Examples)',
              item: 'https://formester.com/blog/best-survey-questions/',
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'How to Create a Lead Capture Form Effectively?',
              item: 'https://formester.com/blog/create-lead-capture-form-effectively/',
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Why Do You Need Online Quizzes for Your Website?',
              item: 'https://formester.com/blog/need-online-quizzes-for-your-website/',
            },
            {
              '@type': 'ListItem',
              position: 7,
              name: 'How to Create an Impressive Intake Form in 5 Easy Steps',
              item: 'https://formester.com/blog/create-impressive-intake-form/',
            },
            {
              '@type': 'ListItem',
              position: 8,
              name: 'Why Do You Need Online Quizzes for Your Website?',
              item: 'https://formester.com/blog/need-online-quizzes-for-your-website/',
            },
            {
              '@type': 'ListItem',
              position: 9,
              name: 'Top benefits of using online form builder',
              item: 'https://formester.com/blog/top-benefits-of-using-online-form-builder/',
            },
            {
              '@type': 'ListItem',
              position: 10,
              name: 'How to Create a Form or Survey Using an Easy Form Builder?',
              item: 'https://formester.com/blog/how-to-create-form-or-survey/',
            },
            {
              '@type': 'ListItem',
              position: 11,
              name: 'What is web form spam, and how to prevent it?',
              item: 'https://formester.com/blog/what-is-web-form-spam-and-how-to-prevent-it/',
            },
            {
              '@type': 'ListItem',
              position: 12,
              name: 'Top 8 Survey Questions to Ask',
              item: 'https://formester.com/blog/top-eight-survey-questions-to-ask/',
            },
            {
              '@type': 'ListItem',
              position: 13,
              name: 'Why and When Should I Use a Form Builder?',
              item: 'https://formester.com/blog/why-and-when-should-i-use-a-form-builder/',
            },
            {
              '@type': 'ListItem',
              position: 14,
              name: 'Surveys vs Forms: Which one is right for you?',
              item: 'https://formester.com/blog/surveys-vs-forms-which-one-is-right-for-you/',
            },
            {
              '@type': 'ListItem',
              position: 15,
              name: 'Mobile Forms vs Desktop Forms - Pros & Cons of Each Form Type',
              item: 'https://formester.com/blog/mobile-forms-vs-desktop-forms-pros-cons-of-each-form-type/',
            },
            {
              '@type': 'ListItem',
              position: 16,
              name: '5 Things You Can Do With Survey Forms',
              item: 'https://formester.com/blog/5-things-you-can-do-with-survey-forms/',
            },
            {
              '@type': 'ListItem',
              position: 17,
              name: 'How to integrate Google SMTP with Formester',
              item: 'https://formester.com/blog/how-to-integrate-google-smtp-with-formester/',
            },
            {
              '@type': 'ListItem',
              position: 18,
              name: 'How to integrate SendGrid SMTP with Formester',
              item: 'https://formester.com/blog/how-to-integrate-sendgrid-smtp-with-formester/',
            },
            {
              '@type': 'ListItem',
              position: 19,
              name: 'Why and When Should I Use a Form Builder?',
              item: 'https://formester.com/blog/why-and-when-should-i-use-a-form-builder/',
            },
            {
              '@type': 'ListItem',
              position: 20,
              name: 'How to integrate MailGun SMTP with Formester',
              item: 'https://formester.com/blog/how-to-integrate-mailgun-smtp-with-formester/',
            },
            {
              '@type': 'ListItem',
              position: 21,
              name: '10 Reasons Why You Are Still Not Doing Surveys - Good idea for any business',
              item: 'https://formester.com/blog/10-reasons-why-you-should-be-using-surveys/',
            },
            {
              '@type': 'ListItem',
              position: 22,
              name: 'How to integrate Amazon SES SMTP with Formester',
              item: 'https://formester.com/blog/how-to-integrate-amazon-ses-smtp-with-formester/',
            },
            {
              '@type': 'ListItem',
              position: 23,
              name: 'Web Forms: How And Where To Use Them For Your Business',
              item: 'https://formester.com/blog/web-forms-how-and-where-to-use-them-for-your-business/',
            },
            {
              '@type': 'ListItem',
              position: 24,
              name: 'Tips & Tricks to get the most out of your leads on Formester',
              item: 'https://formester.com/blog/tips-tricks-to-get-the-most-out-of-your-leads-on-formester/',
            },
            {
              '@type': 'ListItem',
              position: 25,
              name: 'How to add a WordPress Contact Form without a Plugin',
              item: 'https://formester.com/blog/how-to-add-a-wordpress-contact-form-without-a-plugin/',
            },
            {
              '@type': 'ListItem',
              position: 26,
              name: 'How Branded Surveys Can Help You Unlock Your Brand’s Potential',
              item: 'https://formester.com/blog/how-branded-surveys-can-help-you-unlock-your-brand%E2%80%99s-potential/',
            },
            {
              '@type': 'ListItem',
              position: 27,
              name: 'How to Create A Quiz in Google Forms: The Only Guide You’ll Need in 2023',
              item: 'https://formester.com/blog/how-to-create-a-quiz-in-google-forms-the-only-guide-you%E2%80%99ll-need-in-2023-1/',
            },
            {
              '@type': 'ListItem',
              position: 28,
              name: 'How to Create the Perfect Product Map Using Surveys in 2023',
              item: 'https://formester.com/blog/how-to-create-the-perfect-product-map-using-surveys-in-2023/',
            },
            {
              '@type': 'ListItem',
              position: 29,
              name: 'Top 5 Web Forms with Conditional Logic to Integrate with your Website in 2023',
              item: 'https://formester.com/blog/top-5-web-forms-with-conditional-logic-to-integrate-with-your-website-in-2023/',
            },
            {
              '@type': 'ListItem',
              position: 30,
              name: 'How to Expand Your Small Business using Web Forms in 2023',
              item: 'https://formester.com/blog/why-your-small-business-needs-web-forms-to-expand-in-2023/',
            },
            {
              '@type': 'ListItem',
              position: 31,
              name: 'How to Add a Timer to Your Google Quiz in 4 Simple Steps + Free Alternative: Works Without Add-ons (2023)',
              item: 'https://formester.com/blog/how-to-add-a-timer-to-your-google-quiz-includes-latest-alternative-works-without-add-ons-2023/',
            },
            {
              '@type': 'ListItem',
              position: 32,
              name: 'Employee Engagement Surveys: The Complete Guide to the What, Why and How!',
              item: 'https://formester.com/blog/employee-engagement-surveys-the-complete-guide-to-the-what-why-and-how/',
            },
            {
              '@type': 'ListItem',
              position: 33,
              name: 'Best Online Form Builders 2023: How to Choose the Ideal One?',
              item: 'https://formester.com/blog/best-online-form-builders/',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
