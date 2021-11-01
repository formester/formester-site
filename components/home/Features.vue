<template>
  <div>
    <div v-for="feature in features" :key="feature.id">
      <Section :feature="feature" />
    </div>
  </div>
</template>

<script>
import Section from '@/components/Section.vue'

export default {
  components: {
    Section,
  },
  data() {
    return {
      features: [
        {
          id: 0,
          heading: '<span class="hglt">Easy</span> Web Forms',
          content:
            'Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks.',
          alter: false,
          imgName: 'easy-web-forms.png',
        },
        {
          id: 1,
          heading: '<span class="hglt">Auto</span> Responser',
          content:
            'Respond to the customer as soon as you get a submission. The email is easy to create with our intuitive editor. Sending customised HTML email is also an option for the power user.',
          alter: true,
          imgName: 'auto-response.png',
        },
        {
          id: 2,
          heading: '<span class="hglt">Spam</span> Protection',
          content:
            'The web form is an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean. You can customise this to meet the look and feel of your app.',
          alter: false,
          imgName: 'spam-protection.png',
        },
        {
          id: 3,
          heading: '<span class="hglt">Powerful</span> Analytics',
          content:
            'Understand how users are interacting with your form. Get insights on ways to improve engagement on your form. Identify trends to see when you get most responses.',
          alter: true,
          imgName: 'powerful-analytics.png',
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
