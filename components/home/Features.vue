<template>
  <div>
    <Section
      heading="Easy Web forms"
      content="Creating a form has never been simpler. Just point your form to our endpoint and start getting submissions in a matter of minutes. If you are a power user you get complete control over how the form looks."
    />
    <Section
      heading="Auto Responser"
      content="Respond to the customer as soon as you get a submission. The email is easy to create with our intuitive editor. Sending customised HTML email is also an option for the power user."
      alter="true"
    />
    <Section
      heading="Spam Protection"
      content="The web form is an easy target for spam. Use our one-click Recaptcha to curb spam and keep your list clean. You can customise this to meet the look and feel of your app."
    />
    <Section
      heading="Powerful Analytics"
      content="Understand how users are interacting with your form. Get insights on ways to improve engagement on your form. Identify trends to see when you get most responses."
      alter="true"
    />
  </div>
</template>

<script>
import Section from '@/components/Section.vue'

export default {
  components: {
    Section,
  },
}
</script>
