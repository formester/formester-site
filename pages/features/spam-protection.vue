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
            <h3 class="section__heading">Spam Protection</h3>
            <p class="hero__subheading mt-3">
              The first response is critical to any business. Formester makes it
              dead easy to respond to any form submission. With our
              autoresponder, you can send personalised emails to your customers.
              Do all this while not looking like a bot. We guarantee to make you
              look human.
            </p>
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
              src="@/assets/images/features/spam-protection.png"
              alt="Hero-Image"
              class="img-fluid hero__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-md-6 my-3">
          <img
            src="@/assets/images/features/one-click-re-captcha-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="text-center feature__heading">One Click Re-Captcha</h5>
          <p>
            With our one-click ReCaptcha feature, prevent spam in under 2
            minutes. Send user to a clean page on formester where they are
            verified as humans
          </p>
        </div>
        <div class="col-md-6 my-3">
          <img
            src="@/assets/images/features/custom-re-captcha-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="text-center feature__heading">Custom Re-Captcha</h5>
          <p>
            Keep user on the same page and increase the chance of the
            conversion. Our philosophy has always been to keep things simple but
            give enough control for those who need it.
          </p>
        </div>
        <div class="col-md-6 my-3">
          <img
            src="@/assets/images/features/smart-filters-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="text-center feature__heading">Smart Filters</h5>
          <p>
            Our database is getting smarter each day. We use machine learning to
            predict spam submissions. Your every form will improve our
            prediction.
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
  font-weight: 700;
}
</style>