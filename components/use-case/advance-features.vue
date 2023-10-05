<template>
  <div class="feature__hero">
    <div class="container py-5 my-3">
      <h2 class="section__heading text-center">
        Advanced Features for Your Software & Tech Business
      </h2>
      <FeatureToggle :features="features" />
    </div>
  </div>
</template>

<script>
import FeatureToggle from '../FeatureToggle.vue'
export default {
  components: {
    FeatureToggle,
  },
  data() {
    return {
      features: [
        {
          heading: 'HTML Form Backend',
          content:
            'Making your HTML forms work has never been more straightforward. Just point your form to our endpoint and start getting submissions in a matter of minutes. As a power user, you get complete control over the look and feel of your web form.',
          imgName: 'features/html-form',
          alt: 'Hero-Image',
        },
        {
          heading: 'Auto Responder',
          content:
            'Send personalised replies automatically to your customers on form submission. Emails are easy to create using our intuitive email builder. You can also customise the emails to go from your personal email account.',
          imgName: 'features/auto-responder',
          alt: 'Hero-Image',
        },
        {
          heading: 'Spam Protection',
          content:
            'Web forms are an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean, along with an option to configure your own Google Re-Captcha for greater control.',
          imgName: 'features/spam-protection',
          alt: 'Hero-Image',
        },
        {
          heading: 'Powerful Analytics',
          content:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          imgName: 'features/powerful-analytics',
          alt: 'Hero-Image',
        },
        {
          heading: 'Conditional Logic',
          content:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          imgName: 'features/conditional-logic',
          alt: 'Hero-Image',
        },
        {
          heading: 'Digital Signature',
          content:
            'Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.',
          imgName: 'features/digital-signature',
          alt: 'Hero-Image',
        },
        {
          heading: 'Powerful Analytics',
          content:
            'Understand how users interact with your form. Get insights on ways to improve engagement and increase conversion. Identify trends to see where users are dropping off and what works for you.',
          imgName: 'features/powerful-analytics',
          alt: 'Hero-Image',
        },
        {
          heading: 'Conditional Logic',
          content:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          imgName: 'features/conditional-logic',
          alt: 'Hero-Image',
        },
        {
          heading: 'Digital Signature',
          content:
            'Add e-sign to your online form easily using formester. E-sign has become increasingly popular in recent years as it offers a convenient and efficient way to sign documents. Traditional handwritten signatures can most often be replaced by electronic signatures.',
          imgName: 'features/digital-signature',
          alt: 'Hero-Image',
        },
      ],
    }
  },
}
</script>
<style scoped></style>
