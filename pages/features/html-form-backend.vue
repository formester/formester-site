<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-xl-0 mt-5"
          >
            <h1 class="section__heading">HTML Form Backend</h1>
            <p class="hero__subheading mt-3">
              Making your HTML forms work has never been more straightforward.
              Just point your form to our endpoint and start getting submissions
              in a matter of minutes. As a power user, you get complete control
              over the look and feel of your web form.
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
            <img
              src="@/assets/images/features/html-form-backend/easy-web-form.svg"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="code__container">
      <div class="container">
        <div class="row d-flex flex-column justify-content-center align-items-center ">
          <div class=" col-lg-9 code-block">
            <h2 class="section__heading">Easy form endpoints for your HTML forms</h2>
            <div class="card mt-5">
              <div class="card-header">
                <h3>HTML Form Backend</h3>
              </div>
              <div class="card-body">
                <p class="html">
                  &lt;<span style="color: #27AE60;">form</span> <span style="color: #9B51E0;">accept-charset</span>='UTF-8' <span style="color: #9B51E0;">action</span>="https://app.formester.com/forms/your@form/submissions" <span style="color: #9B51E0;">method</span>="POST" &gt;<br>
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #27AE60;">label</span> <span style="color: #9B51E0;">for</span>="email"&gt;Email &lt;<span style="color: #27AE60;">/label</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #27AE60;">input</span> <span style="color: #9B51E0;">type</span>="email" <span style="color: #9B51E0;">id</span>="email-address" <span style="color: #9B51E0;">name</span>="email" <span style="color: #9B51E0;">placeholder</span>="your@email.com" <span style="color: #27AE60;">/</span>&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #27AE60;">button</span> <span style="color: #9B51E0;">type</span>="submit"&gt;Submit &lt;<span style="color: #27AE60;">/button</span>&gt;<br>
                    </span>
                    &lt;<span style="color: #27AE60;">/form</span>&gt;
                </p>
              </div>
            </div>
            <p class="hero__subheading mt-3">
              Design a form for your site, and be sure to name all the fields. Then, just point the action to us and confirm your email address!
            </p>
            <h3 class="section__heading backend-steps">1. Connect Your Form</h3>
            <p class="hero__subheading mt-1">
              Pointing the action-attribute of your form to our URL will enable submissions to be sent to your email address.
            </p>
            <div class="card-body card ">
              <span class="html">
                &lt;<span style="color: #27AE60;">form </span> <span style="color: #9B51E0;">accept-charset</span>='UTF-8'  <span style="color: #9B51E0;">action</span>="https://app.formester.com/forms/your@form/submissions" <span style="color: #9B51E0;">method</span>="POST" &gt;  
              </span>
            </div>   
            <h3 class="section__heading backend-steps">2. Add Name Attributes</h3>
            <p class="hero__subheading mt-1">
              Include a name attribute in all form elements (i.e. &lt;input&gt;, &lt;select&gt;, and &lt;textarea&gt;) to receive the submission data.
            </p>
            <div class="card-body card ">
              <span class="html">
                &lt;<span style="color: #27AE60;">input</span> <span style="color: #9B51E0;">type</span>="email" <span style="color: #9B51E0;"> name</span>="email" <span style="color: #27AE60;">/</span>&gt;
              </span>
            </div>   
            <h3 class="section__heading backend-steps">3. Submit and Confirm</h3>
            <p class="hero__subheading mt-1">
              Submit the form and get the submissions details on your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row py-5">
        <div class="feature__heading d-flex align-items-center justify-content-center">
          <h2 class="section__heading">Features</h2>
        </div>
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <ThreeStepsCreateForm />
    <Testimonial 
      :testimonials="randomTestimonials"
    />
    <TemplateSection />
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'
import Testimonial from '@/components/Testimonial.vue'
import { allTestimonials } from '@/constants/testimonials'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'
import TemplateSection from '../../components/TemplateSection.vue'

export default {
  components: { FeatureDetail, CallToActionSection, Testimonial, TemplateSection },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/features/html-form-backend/',
        title: 'HTML Form Attributes | HTML Form Backend - Formester',
        description:
          "Maximize your website's potential with Formester's HTML form attributes and backend. Start converting leads into customers today. Get Started now!",
        mainImage:
          'https://formester.com/formester-form-builder-background.png', // need to update with Html Form Backend page image
        mainImageAlt: 'Form builder showing drag and drop functionality', // need to update with Html Form Backend page image alt
        keywords: [
          'formester','form backend',
          'form endpoint',
          'serverless form',
          'backendless form',
          'html form',
          'static form',
          'form service',
          'php form',
          'forms',
          'form',
          'form builder',
          'form creator',
          'form backend service',
          'form data',
          'sign up form backend',
          'node.js contact form backend',
          'joomla contact form backend',
          'bootstrap search form backend',
          'how to create the backend of an html and css signup form',
          'how to get a google form backend',
          'gravity form backend code for selecting category',
          'php login form backend',
          'get information form backend to jsp',
          'wordpress aplly shortcode form backend to the theme',
          'siteorigin contact form backend validation',
          'app contact form backend',
          'form backend to frontend joomla',
          'registration form backend',
          'web form backend call to action crm',
          'django form backend',
          'how to find backend for google form',
          'how to get to a google form backend',
          'how to connect a form to sharepoint on the backend',
          'how to make an online sign up form that connects to backend',
          'php generic form backend',
          'no code form',
          'free form builder',
          'free form database',
          'free form backend',
          'free form endpoint',
          'free contact us form',
          'form endpoints for designers and developers',
          'website form backend service',
          'website form backend send to google sheets',
          'how to make an online sign up form that connects to backend',
          'and 30 percent front end',
          'backend deal',
          'form endpoints for designers ',
          'form endpoints for developers',
          'contact form backend'
        ]
      }
      return getSiteMeta(metaData)
    },
  },
  async asyncData() {
    let randomTestimonials = await allTestimonials
    const randIndex = Math.floor(Math.random() * (randomTestimonials.length - 2))
    randomTestimonials = randomTestimonials.slice(randIndex,  randIndex + 2);
    return {randomTestimonials}
  },
  head() {
    return {
      title: 'HTML Form Attributes | HTML Form Backend - Formester',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/features/html-form-backend/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebApplication',
      name: 'Formester - HTML Form Backend',
      description:
        "Maximize your website's potential with Formester's HTML form attributes and backend. Start converting leads into customers today. Get Started now!",
      logo: 'https://formester.com/logo.png',
      url: 'https://formester.com',
      operatingSystem: 'all',
      browserRequirements: 'Requires Javascript and HTML5 support',
      sameAs: [
        'https://www.facebook.com/formester/',
        'https://twitter.com/_formester_',
        'https://www.instagram.com/_formester_/',
        'https://www.linkedin.com/company/formester-inc/',
        'https://www.producthunt.com/products/formester',
        'https://www.softwareadvice.com/forms-automation/formester-profile/',
        'https://www.capterra.com/p/166904/Formester/',
        'https://www.getapp.com/website-ecommerce-software/a/formester/'
      ],
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
      }
    }
  },
  data() {
    return {
      features: [
        {
          title: 'Complete Control',
          description:
            'For those who like to take control, never again worry about your form not blending perfectly with your website. You do the styling and use our form endpoint to start receiving submissions.',
          src: 'html-form-backend/control-illus.svg',
        },
        {
          title: 'Easy Embedding',
          description:
            'Have a form up and running on your website quickly and with minimal coding. Select an existing template, modify it to match your brand theme, add your required data fields and paste our link on your webpage. Simple?',
          src: 'html-form-backend/embedding-illus.svg',
        },
        {
          title: 'Realtime Notifications',
          description:
            "On new submissions, Formester ensures that you get informed in real-time for you to stay on top of what's essential for your business. Notifications are delivered where they matter - Slack, email or 100+ apps.",
          src: 'html-form-backend/notification.svg',
        },
        {
          title: 'Own Your Data',
          description:
            'We offer zero-friction data import & export. If you decide to move on, you can take everything with you. We also provide guided migration from other tools. Our team will ensure the transition is seamless.',
          src: 'html-form-backend/export-illus.svg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.feature__hero {
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}
.code-block {
  margin-top: 70px;
}
.card {
  font-size: 12px;
  padding: 0;
  font-weight: 700;
  width: -webkit-fill-available;
  margin: 20px 0 ;
  background: var(--bs-dark);
  color: var(--bs-white);
}
.card-body {
  padding: 12px 35px;
}
.backend-steps{
  font-size: 25px;
  margin-top: 35px;
}
</style>
