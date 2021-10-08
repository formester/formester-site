<template>
  <div class="auth">
    <div class="auth__container text-center">
      <h3><nuxt-link to="/" class="logo">Formester</nuxt-link></h3>
      <h4 class="auth__title mt-4">Login</h4>
      <form class="d-flex flex-column mt-5">
        <slot></slot>
      </form>
    </div>
    <img
      src="../../assets/images/auth_svg.png"
      alt="NA"
      class="auth__svg img-fluid"
    />
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.auth {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
.auth__container {
  max-width: 800px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  border-radius: var(--df-brd-rd);
  padding: 2.5em 4em;
  background-color: white;
}

.logo {
  font-size: var(--ft-sm-heading);
  font-weight: 700;
}
.auth__title {
  font-size: var(--ft-bigger-body);
  font-weight: 600;
}

.auth__svg {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* SLOT */
.form-label {
  font-size: var(--ft-small-body);
}

.form-control {
  border: none;
  background-color: #f5eff8;
  width: clamp(300px, 10vw, 600px);
}

.form-control:focus,
.form-control:active {
  box-shadow: none;
  border: none;
  outline: none;
}

.auth__button {
  background-color: var(--clr-primary);
  color: white;
  font-size: var(--ft-small-body);
  font-weight: 700;
  padding: 0.7em;
  border-radius: var(--df-brd-rd);
}

.auth__bottom {
  font-size: var(--ft-small-body);
}

.auth__bottom a {
  text-decoration: underline;
}
</style>
