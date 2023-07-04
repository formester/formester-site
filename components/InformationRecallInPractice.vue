<template>
  <div class="container py-5 px-2">
    <div class="row">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">
          See how our Information Recall feature works in practice
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
        </ol>
        <div class="carousel-inner px-3 py-5">
          <div class="carousel-item active">
            <div class="d-flex flex-column-reverse flex-lg-row">
              <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 1</span>
                <h3 class="step__section-heading">
                  Create Your Form Using Formester
                </h3>
                <span class="step__description"
                  >You can start by designing your own form, right from scratch
                  using Formester's drag-and-drop form builder; Or simply pick a
                  template from Formester’s Template Library and make edits.
                  Define the questions, options, and desired structure for
                  collecting information.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <img
                  src="@/assets/images/features/three-steps-create-form/step1.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="build your form easy with formester form builder"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-column-reverse flex-lg-row">
              <div class="col-lg-6 ms-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 2</span>
                <h3 class="step__section-heading">
                  Configure Recall Points and Actions
                </h3>
                <span class="step__description"
                  >Identify the questions or variables in your form that require
                  information recall. Specify the conditions for recalling data,
                  such as dependent answers or pre-filled data. Define the
                  actions associated with information recall, including
                  dynamically populating fields and displaying previous
                  responses.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <img
                  src="@/assets/images/features/information-recall-in-practice/step_information_recall.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="share your form"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-column-reverse flex-lg-row">
              <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 3</span>
                <h3 class="step__section-heading">Preview & Deploy</h3>
                <span class="step__description"
                  >Use the preview mode to simulate user interactions and verify
                  the accuracy of recalled information. Publish your form and
                  start collecting responses. As respondents progress through
                  the form, the Information Recall feature will automatically
                  populate relevant fields and provide a more personalized
                  experience.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <img
                  src="@/assets/images/features/three-steps-create-form/step3.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="Third slide"
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
