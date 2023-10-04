<template>
  <section class="container py-5 my-3">
    <h2 class="section__heading text-center"> <span class="hglt">How</span> it works</h2>
    <div class="d-flex align-items-center justify-content-center toggler__container mx-auto mt-4">
      <span v-for="(step, index) in computedSteps[0]" :key="index" class="toggler__button"
        :class="activeIndex === index ? 'active' : ''" @click="setActive(index)" v-html="step.heading"></span>
    </div>
    <div class="d-flex align-items-center toggler__container mobile mx-auto mt-4">
      <span v-for="(step, index) in steps" :key="index" class="toggler__button"
        :class="activeIndex === index ? 'active' : ''" @click="setActive(index)" v-html="step.heading"></span>
    </div>
    <div class="row py-3">
      <div
        class=" col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start mt-5">
        <h3 class=" section__heading" v-html="steps[activeIndex].heading" >
        </h3>
        <p class="step__description mt-3">
          {{ steps[activeIndex].description }}
        </p>
      </div>
      <div class="col-lg-5 d-flex align-items-center justify-content-center mt-lg-0 mt-5">
        <img :src="require(`@/assets/images/features/${steps[activeIndex].img}.svg`)
          " alt="Hero-Image" class="img-fluid step__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,

      steps: [
        {
          
          heading: '<span class="hglt">Create</span> a form',
          description: `Use Formester backend link to power any existing HTML form on the web or create a sharable hosted form using our form builder tool.`,
          img: 'html-form',
        },
        {
          heading: '<span class="hglt">Spam</span> filtering',
          description:
            'Easily filter out spam using ReCaptcha. It takes a few clicks to configure while allowing you to control all settings when you have to. No expert knowledge is required.',
          img: 'spam-protection',
        },
        {
          heading: '<span class="hglt">Automatic</span> response',
          description:
            'Replying to submissions is automatic. You can create and configure emails to go to your users on submission. We also notify you via email, Slack or any other way you like.',
          img: 'auto-responder',
        },
      ],
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    },
  },
  computed: {
    computedSteps() {
      const ArrOfSubArr = []
      const stepsCopy = [...this.steps]
      while (stepsCopy.length) {
        ArrOfSubArr.push(stepsCopy.splice(0, 5))
      }
      return ArrOfSubArr
    },
  },
}
</script>

<style>
.how-it-works {
  margin-top: 5em;
  margin-bottom: 5em;
}

.toggler__container {
  padding: 8px 12px;
  gap: 16px;
  border-radius: 32px;
  background: #f9f0ff;
  max-width: 1052px;
  width: fit-content;
  block-size: fit-content;
}

.toggler__container.mobile {
  display: none !important;
}

.toggler__button {
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  padding: 8px 12px;
  border-radius: 32px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.toggler__button.active {
  background: white;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.05) inset;
}

.step__heading {
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
}

@media screen and (max-width: 992px) {
  .toggler__container {
    padding: 12px;
    overflow-x: auto;
    white-space: nowrap;
    display: none !important;
    width: auto;
    block-size: auto;
  }

  .toggler__container.mobile {
    display: block !important;
  }

  .toggler__button {
    font-size: 12px;
  }
}
</style>
