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
        <div class="row d-flex flex-column justify-content-center align-items-center code-block">
          <h1 class="section__heading">Easy form endpoints for your HTML forms</h1>
          <div class="card mt-3" style="width: fit-content;">
            <div class="card-header">
              <h3>HTML Form Backend</h3>
            </div>
            <div class="card-body">
              <p class="html">
                &lt;form accept-charset='UTF-8' action="<mark style="background-color: #ffc7fb!important;">https://app.formester.com/forms/your@form/submissions</mark>"
                  method="POST"&gt;<br>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for="email"&gt;Email&lt;/label&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="email" id="email-address" name="email" placeholder="your@email.com"&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="submit"&gt;Submit&lt;/button&gt;<br>
                  </span>
                  &lt;/form&gt;
              </p>
            </div>
          </div>
          <p class="hero__subheading mt-3">
            Design a form for your site, and be sure to name all the fields. Then, just point the action to us and confirm your email address!
          </p>
          <h3 class="section__heading backend-steps">1. CONNECT YOUR FORM</h3>
          <p class="hero__subheading mt-1">
            Pointing the action-attribute of your form to our URL will enable submissions to be sent to your email address.
          </p>
          <div class="card-body card ">
            <span class="html">
              &lt;form action="<mark style="background-color: #ffc7fb!important;">https://app.formester.com/forms/your@form/submissions</mark>" method="POST" /&gt;  
            </span>
          </div>   
          <h3 class="section__heading backend-steps">2. ADD NAME ATTRIBUTES</h3>
          <p class="hero__subheading mt-1">
            Include a name attribute in all form elements (i.e. &lt;input&gt;, &lt;select&gt;, and &lt;textarea&gt;) to receive the submission data.
          </p>
          <div class="card-body card ">
            <span class="html">
              &lt;input type="email" name="email"&gt;
            </span>
          </div>   
          <h3 class="section__heading backend-steps">3. Submit AND CONFIRM</h3>
          <p class="hero__subheading mt-1">
            Submit the form once. This first-time-use will trigger an email requesting confirmation.
          </p>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row py-5">
        <FeatureDetail
          :feature="feature"
          class="col-md-6 my-3"
          v-for="feature in features"
          :key="feature.title"
        />
      </div>
    </div>
    <CallToActionSection />
  </div>
</template>

<script>
import CallToActionSection from '@/components/CallToActionSection.vue'
import FeatureDetail from '../../components/FeatureDetail.vue'

// MetaTags
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  components: { FeatureDetail, CallToActionSection },
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
      }
      return getSiteMeta(metaData)
    },
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
    return {}
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
          title: 'Realtime Notification',
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
  padding: 8em 0 4em 0;
  background: var(--clr-primary);
  color: white;
}
.code-block {
  margin-top: 70px;
  align-content: flex-start;
}
.card {
  font-weight: 600;
  color: var(--bs-dark);
  background: var(--bs-white);
  font-size: 12px;
  padding: 0;
  font-weight: 700;
  width: -webkit-fill-available;
  margin: 20px 0 ;
  margin-right: calc(var(--bs-gutter-x) * .5);
  margin-left: calc(var(--bs-gutter-x) * .5);
}
.card-body {
  padding: 12px 35px;
}
.backend-steps{
  font-size: 25px;
  margin-top: 15px;
}
</style>
