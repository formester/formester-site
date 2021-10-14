<template>
  <footer>
    <div class="footer__container text-center">
      <div class="footer__logo">formester</div>
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
        <li><nuxt-link to="/" class="footer__link ms-md-3">Features</nuxt-link></li>
        <li><nuxt-link to="/template" class="footer__link ms-md-3">Template</nuxt-link></li>
        <li><nuxt-link to="/pricing" class="footer__link ms-md-3">Pricing</nuxt-link></li>
        <li><nuxt-link to="/contact" class="footer__link ms-md-3">Contact</nuxt-link></li>
        <li><nuxt-link to="/policy" class="footer__link ms-md-3">Privacy Policy</nuxt-link></li>
      </ul>
      <div class="socials mt-3">
        <a href="" class="mx-1"
          ><img src="assets/socials/Social Icons.png" alt=""
        /></a>
        <a href="" class="mx-1"
          ><img src="assets/socials/Social Icons-1.png" alt=""
        /></a>
        <a href="" class="mx-1"
          ><img src="assets/socials/Social Icons-2.png" alt=""
        /></a>
      </div>
      <div class="divider mt-4"></div>
      <div class="d-flex justify-content-center mt-3">
        © 2021 Formester. All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
/* TODO: check this out */
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
