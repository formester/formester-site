<template>
  <footer>
    <div class="footer__container text-center">
      <NuxtLink to="/">
        <div class="footer__logo">
          <nuxt-img src="/logo-light.svg" alt="Formester" />
        </div>
      </NuxtLink>
      <section class="mt-5 container">
        <div class="row">
          <div class="col-lg-3 col-sm-6 mb-4 mb-md-0 text-lg-start">
            <h5 class="text-uppercase footer__items--heading mb-3">
              Formester
            </h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink to="/" class="footer__link">Home</NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/pricing/" class="footer__link">Pricing</NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/blog/" class="footer__link">Blog</NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/templates/" class="footer__link"
                  >Templates</NuxtLink
                >
              </li>
              <li class="mt-2">
                <NuxtLink to="/integrations/" class="footer__link"
                  >Integrations</NuxtLink
                >
              </li>
            </ul>

            <h5 class="text-uppercase footer__items--heading mb-3 mt-5">
              Use Case
            </h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink
                  to="/use-case/software-and-technology/"
                  class="footer__link"
                  >Software and Technology</NuxtLink
                >
              </li>
            </ul>

            <h5 class="text-uppercase footer__items--heading mb-3 mt-5">
              Solutions
            </h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink
                  to="/online-form-builder/"
                  class="footer__link"
                  >Online Form Builder</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-sm-6 mb-4 mb-md-0 text-lg-start">
            <h5 class="text-uppercase footer__items--heading mb-3">Feature</h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink
                  to="/features/html-form-backend/"
                  class="footer__link"
                >
                  HTML Form Backend
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/features/auto-responder/" class="footer__link">
                  Auto Responder
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/features/spam-protection/" class="footer__link">
                  Spam Protection
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink
                  to="/features/powerful-analytics/"
                  class="footer__link"
                >
                  Powerful Analytics
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink
                  to="/features/conditional-logic/"
                  class="footer__link"
                >
                  Conditional Logic
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/features/online-payment/" class="footer__link">
                  Online Payment
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink
                  to="/features/digital-signature/"
                  class="footer__link"
                >
                  Digital Signature
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/features/branding-kit/" class="footer__link">
                  Branding Kit
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink
                  to="/features/information-recall/"
                  class="footer__link"
                >
                  Information Recall
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink
                  to="/features/calculation-fields/"
                  class="footer__link"
                >
                  Calculation Fields
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink
                  to="/features/collaboration/"
                  class="footer__link"
                >
                  Collaboration
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div
            class="col-lg-3 col-sm-6 mb-4 mb-md-0 mt-0 mt-sm-4 mt-lg-0 text-lg-start"
          >
            <h5 class="text-uppercase footer__items--heading mb-3">Others</h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink to="/privacy/" class="footer__link">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/terms-of-service/" class="footer__link">
                  Terms of Service
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/contact/" class="footer__link">
                  Contact Us
                </NuxtLink>
              </li>
              <li class="mt-2">
                <a href="mailto:support@formester.com" class="footer__link">
                  Get Support
                </a>
              </li>
              <li class="mt-2">
                <a href="https://status.formester.com" class="footer__link">
                  Status
                </a>
              </li>
            </ul>

            <h5 class="text-uppercase footer__items--heading mb-3 mt-5">
              Competitor Insights
            </h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink to="/jotform-101/" class="footer__link">
                  Jotform
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/typeform-101/" class="footer__link">
                  Typeform
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div
            class="col-lg-3 col-sm-6 mb-4 mb-md-0 mt-0 mt-sm-4 mt-lg-0 text-lg-start"
          >
            <h5 class="text-uppercase footer__items--heading mb-3">Compare</h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink to="/formester-vs-typeform/" class="footer__link">
                  Formester vs Typeform
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/formester-vs-jotform/" class="footer__link">
                  Formester vs Jotform
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/formester-vs-forms-app/" class="footer__link">
                  Formester vs Forms App
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/formester-vs-zoho-form/" class="footer__link">
                  Formester vs Zoho Form
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/formester-vs-paperform/" class="footer__link">
                  Formester vs Paperform
                </NuxtLink>
              </li>
              <li class="mt-2">
                <NuxtLink to="/formester-vs-formstack/" class="footer__link">
                  Formester vs Formstack
                </NuxtLink>
              </li>
            </ul>

            <h5 class="text-uppercase footer__items--heading mb-3 mt-5">
              Case Studies
            </h5>

            <ul class="list-unstyled mt-2">
              <li class="mt-2">
                <NuxtLink
                  to="/case-study/using-formester-for-lead-generation-success/"
                  class="footer__link"
                >
                  Formester For Lead Generation Success
                </NuxtLink>
              </li>
              <li class="mt-2">
                <div class="socials mt-4">
                  <a
                    href="https://instagram.com/_formester_?utm_medium=copy_link"
                    class="mx-1"
                    target="_blank"
                    ><nuxt-img
                      sizes="30vw"
                      src="/social/instagram.svg"
                      alt="Fomester instagram page"
                  /></a>
                  <a
                    href="https://twitter.com/_Formester_?t=-m1pNwXvxR6KOf9kfPi9lQ&s=09"
                    class="mx-1"
                    target="_blank"
                    ><nuxt-img
                      sizes="30vw"
                      src="/social/twitter.svg"
                      alt="Formester twitter page"
                  /></a>
                  <a
                    href="https://www.facebook.com/formester"
                    class="mx-1"
                    target="_blank"
                    ><nuxt-img
                      sizes="30vw"
                      src="/social/facebook.svg"
                      alt="Formester facebook page"
                  /></a>
                  <a
                    href="https://www.linkedin.com/company/formester-inc/"
                    class="mx-1"
                    target="_blank"
                    ><nuxt-img
                      sizes="30vw"
                      src="/social/linkedin.svg"
                      alt="Formester linkedin page"
                  /></a>
                  <a
                    href="https://www.youtube.com/channel/UCVfBesiZINubCEC9Xu5Z6gQ"
                    class="mx-1"
                    target="_blank"
                    ><nuxt-img
                      sizes="30vw"
                      src="/social/youtube.svg"
                      alt="Formester youtube page"
                  /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="divider mt-4"></div>
      <div class="copyright d-flex justify-content-center mt-3">
        © 2023 Acorn Globus. All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
  padding: 0;
}

.footer__container {
  background: linear-gradient(180deg, #4f3895 0.01%, #1d1240 100%);
  color: var(--clr-primary-light);
  padding: 2em 0 1em 0;
}

.footer__logo {
  font-size: var(--ft-subtitle);
  font-weight: 600;
  text-transform: uppercase;
  color: white;
}

.footer__items--heading {
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: var(--clr-primary-light);
}

.footer__link {
  font-size: 14px;
  line-height: 21px;
  color: white;
}

.footer__link:hover {
  color: white;
}

.divider {
  width: 70%;
  background-color: rgba(146, 146, 146, 0.2);
  height: 2px;
  margin: auto;
}

.copyright {
  font-size: 14px;
}

@media only screen and (max-width: 992px) {
  .footer__link {
    margin: 0.25rem 0px;
  }
}

@media only screen and (min-width: 768px) {
  .socials {
    display: flex;
    gap: 5px;
  }
}
</style>
