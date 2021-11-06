<template>
  <div class="feature_container">
    <div class="feature__hero">
      <div class="container">
        <div class="row">
          <div
            class="
              col-lg-5
              d-flex
              flex-column
              justify-content-center
              align-items-lg-start align-items-center
              text-center text-lg-start
              mt-xl-0 mt-5
            "
          >
            <h3 class="section__heading">Auto Responder</h3>
            <p class="hero__subheading mt-3">
              The first response is critical to any business. Formester makes it
              dead easy to respond to any form submission. With our
              autoresponder, you can send personalised emails to your customers.
              Do all this while not looking like a bot. We guarantee to make you
              look human.
            </p>
            <a
              href="https://app.formester.com/users/sign_up"
              class="hero__invert__button mt-4"
              >Create Your Form</a
            >
          </div>
          <div
            class="
              col-lg-7
              d-flex
              align-items-center
              justify-content-center
              mt-lg-0 mt-5
            "
          >
            <img
              src="@/assets/images/features/auto-responder-illus.png"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-md-6">
          <img
            src="@/assets/images/features/white-label-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="text-center feature__heading">White Label</h5>
          <p>
            We make your email look humane. All emails are delivered using your
            official email address. Look more professional without all the
            hassles.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="@/assets/images/features/easy-email-builder-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="text-center feature__heading">Easy Email Builder</h5>
          <p>
            Creating beautiful response has never been simpler. Our easy to use
            editor enables you to write powerful content. Add images, links or
            videos in a matter of click.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="@/assets/images/features/personalised-response-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="text-center feature__heading">Personalised Response</h5>
          <p>
            Getting attention is difficult as every brand fights for users
            attention. Personalisation can increase your chance of engaging
            users. Use fields from your form to make your email more relevant.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="@/assets/images/features/realtime-tracking-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="text-center feature__heading">Realtime Tracking</h5>
          <p>
            Monitor how people are reacting to your response. Analyse useful
            metrics like open rate and link clicks to get insights into users
            behaviour. Use this data to make changes to your communication.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .pr__button {
  background-color: var(--clr-primary);
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
} */

.feature__hero {
  padding: 8em 0;
  background: var(--clr-primary);
  color: white;
}
.feature__heading {
  font-size: 2.25rem;
  line-height: 44px;
}
</style>