<template>
  <footer>
    <div class="footer__container text-center">
      <NuxtLink to="/">
        <div class="footer__logo">
          <img src="../assets/images/logo-light.svg" alt="Formester" />
        </div>
      </NuxtLink>
      <ul
        class="footer__items d-flex flex-column flex-md-row align-items-center justify-content-center mt-4"
      >
        <NuxtLink to="/">
          <li class="mx-3 footer__link">Home</li>
        </NuxtLink>
        <NuxtLink to="/features/html-form-backend">
          <li class="mx-3 footer__link">Features</li>
        </NuxtLink>
        <NuxtLink to="/pricing">
          <li class="mx-3 footer__link">Pricing</li>
        </NuxtLink>
        <NuxtLink to="/blog">
          <li class="mx-3 footer__link">Blog</li>
        </NuxtLink>
        <NuxtLink to="/integrations">
          <li class="mx-3 footer__link">Integrations</li>
        </NuxtLink>
        <NuxtLink to="/privacy">
          <li class="mx-3 footer__link">Privacy Policy</li>
        </NuxtLink>
        <NuxtLink to="/contact">
          <li class="mx-3 footer__link">Contact Us</li>
        </NuxtLink>
        <a href="mailto:support@formester.com">
          <li class="mx-3 footer__link">Support Us</li>
        </a>
      </ul>
      <div class="socials mt-4">
        <a
          href="https://instagram.com/_formester_?utm_medium=copy_link"
          class="mx-1"
          target="_blank"
          ><img
            src="@/assets/images/social/instagram.svg"
            alt="Fomester instagram page"
        /></a>
        <a
          href="https://twitter.com/_Formester_?t=-m1pNwXvxR6KOf9kfPi9lQ&s=09"
          class="mx-1"
          target="_blank"
          ><img
            src="@/assets/images/social/twitter.svg"
            alt="Formester twitter page"
        /></a>
        <!-- <a href="#" class="mx-1" target="_blank"
          ><img
            src="@/assets/images/social/youtube.svg"
            alt="Formester youtube page"
        /></a> -->
      </div>
      <div class="divider mt-4"></div>
      <div class="copyright d-flex justify-content-center mt-3">
        © 2021 Acorn Globus. All rights reserved
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
  background-color: var(--clr-primary);
  color: var(--clr-primary-light);
  padding: 2em 0 1em 0;
}

.footer__logo {
  font-size: var(--ft-subtitle);
  font-weight: 600;
  text-transform: uppercase;
  color: white;
}

.footer__items {
  list-style: none;
}

.footer__link {
  font-size: 14px;
  color: var(--clr-primary-light);
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
</style>
