<template>
  <div class="faq__container mx-auto text-start">
    <h2 class="text-center faq__heading">Frequently Asked Questions</h2>
    <div class="accordion accordion-flush my-5" id="accordionFlushExample">
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Can I try before I buy?
          </button>
        </h6>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            It’s free to set up an account and create a campaign. But to get
            more than 100 submissions, you’ll need to choose a plan.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Can I change plans at anytime?
          </button>
        </h6>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Yes. Formester is a pay-as-you-go service and you can upgrade,
            downgrade or cancel at any time. You can upgrade anytime right from
            your account page.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            What happens if I don't like the service?
          </button>
        </h6>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Don't worry, if you are ever unhappy with our service and wish to
            cancel, we'll happily reimburse your last month -- no questions
            asked.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Do I get a discount on yearly plan?
          </button>
        </h6>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            You do, If you buy yearly plan you only have to pay for 11 months and you get 1 month free.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Is there an referral/affiliate program?
          </button>
        </h6>
        <div
          id="flush-collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Yes we do. It's an invite only program. If you need access to this please reach out to our support.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            Do you offer discount for NGO and School?
          </button>
        </h6>
        <div
          id="flush-collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Yes. Get in touch and we’ll help you out.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingSeven">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSeven"
            aria-expanded="false"
            aria-controls="flush-collapseSeven"
          >
            What if I want a reseller account?
          </button>
        </h6>
        <div
          id="flush-collapseSeven"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingSeven"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            We do support resellers. Please reach out to us at support@formester.com and we will love to help you.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h6 class="accordion-header" id="flush-headingEight">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseEight"
            aria-expanded="false"
            aria-controls="flush-collapseEight"
          >
            I have more questions
          </button>
        </h6>
        <div
          id="flush-collapseEight"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingEight"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            No problem! Contact us and we'll get in touch with you shortly :)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.faq__container {
  max-width: 900px;
  margin-top: 3em;
}
.faq__heading {
  font-size: var(--ft-subtitle);
  font-weight: 600;
}
.accordion-button {
  font-size: var(--ft-df-body);
  font-weight: 600;
  color: rgb(70, 70, 70);
}
.accordion-item {
  border: none;
  font-size: var(--ft-small-body);
}
.accordion-button:focus {
  box-shadow: none;
  background: none;
}
.accordion-body {
  padding: 0 1.25rem;
  width: 80%;
}
</style>
