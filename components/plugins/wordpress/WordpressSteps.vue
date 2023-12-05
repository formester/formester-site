<template>
  <section class="container py-5 mt-3">
    <h2 class="section__heading text-center">
      Steps to Embed a Formester Form
    </h2>

    <div class="row steps-container px-3 py-5 d-flex flex-column flex-lg-row">
      <div
        class="col d-flex flex-column-reverse align-items-center justify-content-center"
      >
        <div class="mt-5">
          <span class="step__heading">Step 1</span>
          <h3 class="step__section-heading">Install the Formester Plugin</h3>
          <p class="step__section-description">
            Navigate to WordPress.org here or WordPress.com here to install the
            plugin. Log into your WordPress account. Follow the installation
            instructions for WordPress.org users.
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/wordpress/step1.svg"
            class="img-fluid my-auto"
            alt="Signup with a free account"
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="col d-flex flex-column-reverse align-items-center justify-content-center"
      >
        <div class="mt-5">
          <span class="step__heading">Step 2</span>
          <h3 class="step__section-heading">
            Add a Formester Block in WordPress
          </h3>
          <p class="step__section-description">
            In your WordPress editor, when adding a new block, look for the
            Formester option. Click on the Formester option to launch the
            plugin. This allows you to add a Formester form to your page.
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/wordpress/step2.svg"
            class="img-fluid my-auto"
            alt="Select a template or Create a form"
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="col d-flex flex-column-reverse align-items-center justify-content-lg-center"
      >
        <div class="mt-5">
          <span class="step__heading">Step 3</span>
          <h3 class="step__section-heading">Embed Your Formester Form</h3>
          <p class="step__section-description">
            Paste your form's share URL into the provided field. Ensure that
            your form is already published. <br />
            Note: The Formester plugin does not collect, store, or share any
            personal information of its users.
          </p>
        </div>
        <div class="d-flex flex-column flex-lg-row">
          <nuxt-img
            src="/wordpress/step3.svg"
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
