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
            <h3 class="section__heading">Easy Web forms</h3>
            <p class="hero__subheading mt-3">
              Creating a form has never been simpler. Just point your form to
              our endpoint and start getting submissions in a matter of minutes.
              If you are a power user you get complete control over how the form
              looks.
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
              src="@/assets/images/features/easy-web-form.png"
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
            src="@/assets/images/features/control-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="feature__heading">Complete Control</h5>
          <p>
            Never worry about your form not looking perfect like your website.
            With Formester you have everything under control. Style the forms
            and make it look the way you want it. No embedding or JavaScript
            required.
          </p>
        </div>
        <div class="col-md-6 my-3">
          <img
            src="@/assets/images/features/embedding-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="feature__heading">Easy Embedding</h5>
          <p>
            If you are looking a form that just works out of the box, Formester
            is for you. Just copy our snippet and get started. It takes less
            than 5 minutes to make a working form on your website.
          </p>
        </div>
        <div class="col-md-6 my-3">
          <img
            src="@/assets/images/features/notification.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="feature__heading">Realtime Notification</h5>
          <p>
            Get a real-time notification on form submission. Stay on top of your
            business. You can configure Formester to notify you on Slack, Gmail
            or anywhere else.
          </p>
        </div>
        <div class="col-md-6 my-3">
          <img
            src="@/assets/images/features/export-illus.png"
            alt=""
            class="img-fluid"
          />
          <h5 class="feature__heading">Export/Import</h5>
          <p>
            You own your data. We offer zero friction data import and export. If
            you decide to move on you can take everything with you. We also
            offer guided migration from other tools. Our team will do the work
            for you.
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