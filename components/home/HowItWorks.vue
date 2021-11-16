<template>
  <section class="how-it-works container">
    <h2 class="section__heading text-center">How it <span>works</span></h2>
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
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          step: 1,
          heading: 'Create a form',
          description: `Power an existing form on your website using the Formester link or create a sharable hosted form using our builder tool.`,
        },
        {
          step: 2,
          heading: 'Spam filtering',
          description:
            'Easily filter out spam using ReCaptcha. It takes a few clicks to configure while allowing you to control all settings when you have to. No expert knowledge is required.',
        },
        {
          step: 3,
          heading: 'Automatic response',
          description:
            'Replying to submissions is automatic. You can create and configure emails to go to your users on submission. We also notify you via email, Slack or any other way you like.',
        }
      ],
    }
  },
}
</script>

<style scoped>
.how-it-works {
  margin-top: 5em;
  margin-bottom: 5em;
}

.howitworks__card::before {
  content: attr(data-step);
  position: absolute;
  left: -12%;
  background-color: var(--clr-primary-light);
  width: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
}

.howitworks__card h6 {
  font-size: var(--ft-subtitle);
  font-weight: 600;
  color: var(--clr-primary);
}
.howitworks__card p {
  font-size: var(--ft-small-body);
}
</style>
