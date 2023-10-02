<template>
  <div class="container py-5 px-2">
    <div class="row">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">
          Experience the Power of Calculation Fields in Action
        </h2>
      </div>
      <div
        id="stepsSlider"
        class="carousel slide"
        data-bs-ride="carousel"
        style="min-height: 535px"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#stepsSlider"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Step 1"
          ></li>
          <li
            data-bs-target="#stepsSlider"
            data-bs-slide-to="1"
            aria-label="Step 2"
          ></li>
          <li
            data-bs-target="#stepsSlider"
            data-bs-slide-to="2"
            aria-label="Step 3"
          ></li>
          <li
            data-bs-target="#stepsSlider"
            data-bs-slide-to="3"
            aria-label="Step 4"
          ></li>
        </ol>
        <div class="carousel-inner px-3 py-5">
          <div class="carousel-item active">
            <div
              class="d-flex flex-column-reverse flex-lg-row align-items-center"
            >
              <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 1</span>
                <h3 class="step__section-heading">
                  Create your form Using Formester
                </h3>
                <span class="step__description"
                  >You can start by designing your own form, right from scratch
                  using Formester's drag-and-drop form builder; Or simply pick a
                  template from Formester’s Template Library and make edits Add
                  the necessary fields and elements to collect the required
                  data.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <nuxt-img
                  src="/features/calculation-field-in-action/step1.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="build your form easy with formester form builder"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex flex-column-reverse flex-lg-row align-items-center"
            >
              <div class="col-lg-6 ms-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 2</span>
                <h3 class="step__section-heading">Add Calculation Field</h3>
                <span class="step__description"
                  >In the form builder, select the Calculation Field feature. 
                  Simply, drag-and-drop it into your form where you want the
                  calculation to take place.</span
                >
              </div> 
              <div class="col-lg-5 m-auto">
                <nuxt-img
                  src="/features/calculation-field-in-action/step2.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="adding calculation field in the form"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-column-reverse flex-lg-row align-items-center">
              <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 3</span>
                <h3 class="step__section-heading">
                  Set up formula and conditions
                </h3>
                <span class="step__description"
                  >Customize the formula for your calculation by selecting the
                  relevant fields and applying mathematical operators.  You can
                  also incorporate conditional logic to perform calculations
                  based on certain conditions or user inputs.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <nuxt-img
                  src="/features/calculation-field-in-action/step3.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="creating formula for the calculation field"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-column-reverse flex-lg-row align-items-center">
              <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 4</span>
                <h3 class="step__section-heading">
                  Validate and Personalize with Calculation Field
                </h3>
                <span class="step__description"
                  >Use the preview mode to ensure accurate calculations. Once
                  done, deploy the form to deliver dynamic and personalized
                  experiences to your respondents.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <nuxt-img
                  src="/features/calculation-field-in-action/step4.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="publishing the form"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subheading__text {
  font-size: 16px;
  margin-top: 12px;
}
.step__heading {
  color: var(--clr-primary);
  font-weight: 700;
  margin-bottom: 8px;
}
.step__description {
  font-size: 15px;
  font-weight: 500;
}
.step__section-heading {
  font-size: 28px;
  font-weight: 600;
}
.step__circle {
  position: absolute;
  top: 50%;
  right: 50%;
}
.carousel-indicators li {
  background-color: var(--clr-primary);
}
</style>
