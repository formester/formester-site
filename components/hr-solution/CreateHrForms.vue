<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center">
      Create Customizable HR Forms with a simple 3 Step Process
    </h2>

    <div class="steps-container px-3 py-5 d-flex flex-column flex-lg-row">
      <div
        class="row d-flex flex-column-reverse align-items-center justify-content-center"
      >
        <div class="mt-5">
          <span class="step__heading">Step 1</span>
          <h3 class="step__section-heading">Signup with a free account</h3>
          <p class="step__section-description">
            Sign up with your email address to start using Formester. Our free
            plan allows you to create 10 forms with 100 submissions per month.
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/hr-solution/CreateHrForms/step1.svg"
            class="img-fluid my-auto"
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
            Select a template or Create a form
          </h3>
          <p class="step__section-description">
            We have multiple customisable templates for HR functions along with
            an intuitive drag and drop form builder with personalized branding.
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/hr-solution/CreateHrForms/step2.svg"
            class="img-fluid my-auto"
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
          <h3 class="step__section-heading">Publish and Share the Form</h3>
          <p class="step__section-description">
            Once the form is created, share it via link or embed it in your
            website. Our built-in analytics turn form inputs into actionable
            insights.
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/hr-solution/CreateHrForms/step3.svg"
            class="img-fluid my-auto"
            alt="Publish and Share the Form"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

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

@media (max-width: 992px) {
  .step__section-description {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
