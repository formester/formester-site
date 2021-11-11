<template>
  <div class="container mt-3">
    <h3 class="text-center">FEATURES</h3>
    <h1 class="text-center section__heading">
      Services We <span class="hglt">Provide</span>
    </h1>
    <div class="row my-2">
      <FeatureCard
        v-for="feature in features"
        :key="feature.heading"
        class="col-md-6 my-3"
        :feature="feature"
      />
    </div>
  </div>
</template>

<script>
import Section from '@/components/Section.vue'
import FeatureCard from './FeatureCard.vue'

export default {
  components: {
    Section,
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          heading: '<span class="hglt">Easy</span> Web Forms',
          content:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          imgName: 'easy-web-form-illus.png',
        },
        {
          heading: '<span class="hglt">Auto</span> Responser',
          content:
            'Respond to the customer as soon as you get a submission. The email is easy to create with our intuitive editor. Sending customised HTML email is also an option for the power user.',
          imgName: 'auto-response-illus.png',
        },
        {
          heading: '<span class="hglt">Spam</span> Protection',
          content:
            'The web form is an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean. You can customise this to meet the look and feel of your app.',
          imgName: 'spam-proctection-illus.png',
        },
        {
          heading: '<span class="hglt">Powerful</span> Analytics',
          content:
            'Understand how users are interacting with your form. Get insights on ways to improve engagement on your form. Identify trends to see when you get most responses.',
          imgName: 'Powerful-analytics-illus.png',
        },
      ],
    }
  },
}
</script>

<style>
.hglt {
  color: var(--clr-primary);
}
</style>
