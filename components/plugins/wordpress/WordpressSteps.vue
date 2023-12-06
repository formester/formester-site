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
          <h3 class="step__section-heading">Install Formester Plugin</h3>
          <p class="step__section-description">
            Visit
            <a
              href="https://WordPress.org"
              target="_blank"
              class="text-decoration-underline"
              >WordPress.org</a
            >
            or
            <a
              href="https://WordPress.com"
              target="_blank"
              class="text-decoration-underline"
              >WordPress.com</a
            >
            to install the Formester plugin. Log in to your WordPress account
            and activate the plugin after installation.
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
            Add Formester Block in WordPress
          </h3>
          <p class="step__section-description">
            Locate and select the Formester Block in your WordPress editor.
            Click on it to launch the plugin and easily integrate a Formester
            form into your page.
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
          <h3 class="step__section-heading">
            Embed Formester Form in Wordpress
          </h3>
          <p class="step__section-description">
            You can also embed a form by pasting your form's shared URL into
            WordPress editor. Ensure that your contact form is published before
            embedding in the WordPress site.
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
