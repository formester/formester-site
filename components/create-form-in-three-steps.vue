<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center">
      {{sectionHeading}}
    </h2>

    <div class="steps-container px-3 py-5 d-flex flex-column flex-lg-row">
      <div
        class="row d-flex flex-column-reverse align-items-center justify-content-center"
      >
        <div class="mt-5">
          <span class="step__heading">Step 1</span>
          <h3 class="step__section-heading">{{steps.step1.title}}</h3>
          <p class="step__section-description">
           {{ steps.step1.description }}
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/hr-solution/CreateHrForms/step1.svg"
            class="step__image img-fluid "
            alt="Signup with a free account"
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="row d-flex flex-column-reverse align-items-center justify-content-center"
      >
        <div class="mt-5">
          <span class="step__heading">Step 2</span>
          <h3 class="step__section-heading">
            {{steps.step2.title}}
          </h3>
          <p class="step__section-description">
           {{ steps.step2.description }}
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/hr-solution/CreateHrForms/step2.svg"
            class="step__image img-fluid "
            alt="Select a template or Create a form"
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="row d-flex flex-column-reverse align-items-center justify-content-lg-center"
      >
        <div class="mt-5">
          <span class="step__heading">Step 3</span>
          <h3 class="step__section-heading">{{ steps.step3.title }}</h3>
          <p class="step__section-description">
           {{steps.step3.description}}
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/hr-solution/CreateHrForms/step3.svg"
            class="step__image img-fluid "
            alt="Publish and Share the Form"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
props :{
  sectionHeading:{
    type:String,
    required:true
  },
  steps:{
    type:Object,
    required: true
  }
}
}
</script>


<style scoped>
.step__heading {
  color: var(--clr-primary);
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.28px;
  text-transform: uppercase;
}

.step__section-heading {
  color: var(--dark, #211447);
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
}
.step__section-description {
  color: var(--neutral #404040);
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
}
.steps-container {
  gap: 40px;
}

.step__image{
  margin: auto;
}

.row{
  max-width: calc(100%  / 3);
}

@media (max-width: 992px) {
  .step__section-description {
    font-size: 14px;
    line-height: 22px;
  }

  .step__image{
    margin: initial;
  }

  .row{
    max-width: 100%;
  }
}
</style>
