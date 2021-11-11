<template>
  <footer>
    <div class="footer__container text-center">
      <div class="footer__logo">
        <img src="../assets/images/logo-light.svg" alt="Formester" />
      </div>
      <ul
        class="
          footer__items
          d-flex
          flex-column flex-md-row
          align-items-center
          justify-content-center
          mt-4
        "
      >
        <li class="mx-3">Features</li>
        <li class="mx-3">Template</li>
        <NuxtLink to="/pricing">
          <li class="mx-3 footer__link">Pricing</li>
        </NuxtLink>
        <li class="mx-3">Contact us</li>
        <li class="mx-3">Terms</li>
        <li class="mx-3">Privacy Policy</li>
      </ul>
      <div class="socials mt-3">
        <a href="#" class="mx-1"
          ><img src="@/assets/images/social/instagram.svg" alt=""
        /></a>
        <a href="#" class="mx-1"
          ><img src="@/assets/images/social/twitter.svg" alt=""
        /></a>
        <a href="#" class="mx-1"
          ><img src="@/assets/images/social/youtube.svg" alt=""
        /></a>
      </div>
      <div class="divider mt-4"></div>
      <div class="d-flex justify-content-center mt-3">
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
</style>
