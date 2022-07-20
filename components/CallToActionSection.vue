<template>
  <section class="call-to-action-section" :class="{ 'd-none': content.hidden }">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="call-to-action-content text-center mx-2 my-5 position-relative"
          >
            <h3 class="section__heading">
              {{ content.heading || 'Ready to dive in?' }}
            </h3>
            <h2 class="section__heading">
              <span class="hglt">
                {{ content.subHeading || 'Register with us Now.' }}
              </span>
            </h2>
            <div class="mt-5">
              <div class="d-inline p-2 mx-2 mt-5">
                <a
                  :href="content.btnPrimaryLink ||'https://app.formester.com/users/sign_up'"
                  class="btn button cta-button"
                  target="_blank"
                >
                  {{ content.btnPrimary || 'Sign Up' }}
                </a>
              </div>
              <div class="d-inline p-2 mx-2 mt-5">
                <NuxtLink
                  :to="content.btnSecondaryLink || '/contact'"
                  class="btn button cta-button__invert"
                >
                  {{ content.btnSecondary || 'Contact Us' }}
                </NuxtLink>
              </div>
            </div>
            <img
              src="@/assets/images/plane.png"
              alt="plane image on call to action section"
              class="plane position-absolute"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style scoped>
.call-to-action-section {
  padding-top: 50px;
  padding-bottom: 50px;
}
.cta-bullets {
  opacity: 0.5;
  font-size: 14px;
  text-decoration: none;
  list-style-type: none;
}

.cta-button {
  background-color: var(--clr-primary);
  font-size: var(--ft-md-btn);
  padding: 1em 2em;
  border-radius: 8px;
  color: white;
  font-weight: 700;
}

.cta-button__invert {
  background-color: #eee8ff;
  font-size: var(--ft-md-btn);
  padding: 1em 2em;
  border-radius: 8px;
  color: var(--clr-primary);
  font-weight: 700;
}

.cta-button:hover {
  color: white;
  opacity: 0.9;
}

.plane {
  right: -10%;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
}

@media (max-width: 1456px) {
  .plane {
    right: -5%;
  }
}
@media (max-width: 1400px) {
  .plane {
    right: -7%;
  }
}
@media (max-width: 1200px) {
  .plane {
    right: -10%;
  }
}
@media (max-width: 1017px) {
  .plane {
    display: none;
  }
}

@media (max-width: 575px) {
  .section__heading {
    font-size: 2rem;
  }
}
</style>
