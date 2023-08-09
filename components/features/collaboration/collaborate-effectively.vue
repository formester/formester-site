<template>
  <div class="container py-5 px-2">
    <div class="row">
      <div class="heading d-flex flex-column align-items-center text-center">
        <h2 class="section__heading">
          How it Works - Collaborate Effectively In 3 Simple Steps
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
          <!-- <li
            data-bs-target="#stepsSlider"
            data-bs-slide-to="2"
            aria-label="Step 3"
          ></li> -->
        </ol>
        <div class="carousel-inner px-3 py-5">
          <div class="carousel-item active">
            <div class="d-flex flex-column-reverse flex-lg-row">
              <div
                class="d-flex flex-column justify-content-center col-lg-6 me-lg-5 mt-5 mt-lg-0"
              >
                <span class="step__heading">Step 1</span>
                <h3 class="step__section-heading">
                  Add Collaborators by Sending An Invite
                </h3>
                <span class="step__description"
                  >Access your Formester dashboard, click on the Collaborators
                  Tab. In the Add Collaborator field, add the required person’s
                  email address and click invite!.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <nuxt-img
                  src="/features/collaboration/add-collaborators-by-sending-an-invite.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="build your form easy with formester form builder"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex flex-column-reverse flex-lg-row flex-lg-row-reverse"
            >
              <div
                class="d-flex flex-column justify-content-center col-lg-6 ms-lg-5 mt-5 mt-lg-0"
              >
                <span class="step__heading">Step 2</span>
                <h3 class="step__section-heading">Assign Permissions</h3>
                <span class="step__description"
                  >Efficiently manage form collaboration with Formester's role
                  designation and permission settings. Choose from a range of
                  roles like "Editor" for content changes and "Viewer" for
                  read-only access. Maintain data security, preserve integrity,
                  and enjoy the flexibility to adjust permissions as your
                  project evolves. Assign appropriate roles to maintain control
                  over permissions and collaborate seamlessly.</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <nuxt-img
                  src="/features/collaboration/assign-permissions.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="share your form"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <!-- <div class="carousel-item">
            <div class="d-flex flex-column-reverse flex-lg-row">
              <div class="col-lg-6 me-lg-5 mt-5 mt-lg-0">
                <span class="step__heading">Step 3</span>
                <h3 class="step__section-heading">
                  Gather and Analyze Responses
                </h3>
                <span class="step__description"
                  >You don't have to constantly check your dashboard for new
                  responses – you'll receive email notifications when
                  submissions occur. Sit back and get to know your customers one
                  person at a time. Export results as Excel documents or Google
                  Sheets for analysis at your convenience. Alternatively,
                  evaluate key stats and response data in informative
                  visualizations through Formester's web interface. With this
                  valuable data, you can plan ahead for the next steps of your
                  project or business!"</span
                >
              </div>
              <div class="col-lg-5 m-auto">
                <nuxt-img
                  src="/features/three-steps-create-form/step3.svg"
                  class="w-lg-40 d-block img-fluid my-auto"
                  alt="Third slide"
                  loading="lazy"
                />
              </div>
            </div>
          </div> -->
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
