<template>
  <section class="call-to-action-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="call-to-action-content text-center mx-2 my-5">
            <h2 class="section__heading">
              Create a <span class="hglt">Formester</span> Account
            </h2>
            <p class="cta-bullets">
              No credit card is required. The basic plan is always free. Take
              your data with you, no lock-in.
            </p>
            <!-- <ul class="cta-bullets">
              <li>No credit card is required</li>
              <li>The basic plan is always free</li>
              <li>Take your data with you, no lock-in</li>
            </ul> -->
            <div class="mt-5">
              <a href="/auth/register" class="button cta-button"
                >Register Now</a
              >
            </div>
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
  font-size: var(--ft-lg-btn);
  padding: 1em 2em;
  border-radius: 8px;
  color: white;
  font-weight: 700;
}

.cta-button:hover {
  color: white;
  opacity: 0.9;
}
</style>
