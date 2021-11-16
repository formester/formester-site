<template>
  <section class="call-to-action-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="call-to-action-content text-center mx-2 my-5 position-relative">
            <h5 class="section__heading">Ready to dive in?</h5>
            <h4 class="section__heading">
              <span class="hglt">Register with us Now.</span>
            </h4>
            <div class="mt-5">
              <div class="d-inline p-2 mx-2">
                <a
                  href="https://app.formester.com/users/sign_up"
                  class="button cta-button"
                  target="_blank"
                  >Sign Up</a
                >
              </div>
              <div class="d-inline p-2 mx-2">
                <NuxtLink to="/contact" class="button cta-button__invert"
                  >Contact Us</NuxtLink
                >
              </div>
            </div>
            <img src="@/assets/images/plane.png" alt="NA" class="plane position-absolute">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
</style>
