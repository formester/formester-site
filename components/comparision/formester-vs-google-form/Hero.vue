<template>
  <section class="hero">
    <div class="container horizontal__padding">
      <div class="row my-5">
        <div
          class="col-lg-7 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center text-lg-start"
        >
          <h1 class="section__heading">
            Switch to <span class="hglight">Formester</span> and build beautiful
            online forms – The Best Alternative to Google Forms
          </h1>
          <p class="section__subtitle mt-3">
            Tired of Google Forms's bland interface and lack of templates?
            Formester is here to unleash your inner form-building genius! Craft
            stunning, on-brand forms that capture attention, collect data,
            process orders and automate tasks like a pro. No coding required
            thanks to our Drag and Drop Interface!
          </p>
          <a
            href="https://app.formester.com/users/sign_up"
            class="btn button hero__button mt-4"
          >
            Try for Free
          </a>
        </div>
        <div class="col-lg-5 d-flex align-items-center justify-content-center">
          <nuxt-img
            src="/comparision/formester-vs-google-form/formester-vs-google-form-hero-image.svg"
            alt="Formester form building with drag and drop interface"
            class="img-fluid hero__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.hero {
  margin-bottom: 74px;
}

.hero__image {
  padding-left: 30px;
}

.section__heading {
  font-size: var(--ft-df-heading);
  font-weight: 700;
  line-height: 60px;
}

.section__subtitle {
  font-size: var(--ft-big-body);
  line-height: 30px;
}

@media (max-width: 768px) {
  .section__heading {
    line-height: 52px;
    font-size: 2rem;
  }
}
</style>
