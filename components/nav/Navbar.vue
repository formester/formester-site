<template>
  <nav class="nav__container d-flex align-items-center">
    <div
      class="
        container
        horizontal__padding
        d-flex
        align-items-center
        justify-content-between
      "
    >
      <NuxtLink to="/" class="nav__logo"
        ><img src="../../assets/images/logo.svg" alt="Fromester"
      /></NuxtLink>
      <input type="checkbox" id="check" />
      <label for="check" class="menu__btn">
        <i class="ri-menu-3-line">
          <img src="@/assets/images/menu.svg" alt="Nav-menu-button" />
        </i>
      </label>
      <div class="nav__items">
        <NuxtLink to="/">
          <NavItem navName="Home" />
        </NuxtLink>
        <!-- <li class="dropdown">
          <a class="dropbtn">Features</a>
          <input type="checkbox" id="dropdown__input" class="dropdown__input" />
          <div class="dropdown__content">
            <NuxtLink to="/features/html-forms">
              <NavItem navName="Html Forms" />
            </NuxtLink>
            <NuxtLink to="/features/auto-responder">
              <NavItem navName="Auto Responder" />
            </NuxtLink>
            <NuxtLink to="/features/integration">
              <NavItem navName="Integration" />
            </NuxtLink>
            <NuxtLink to="/features/spam-protection">
              <NavItem navName="Spam Protection" />
            </NuxtLink>
          </div>
        </li> -->
        <NuxtLink to="/pricing">
          <NavItem navName="Pricing" />
        </NuxtLink>
        <NuxtLink to="/features/auto-responder">
          <NavItem navName="Auto Responder" />
        </NuxtLink>
        <NuxtLink to="/features/easy-web-forms">
          <NavItem navName="Web Forms" />
        </NuxtLink>
        <NuxtLink to="/features/spam-protection">
          <NavItem navName="Spam Protection" />
        </NuxtLink>
        <li>
          <a
            href="https://app.formester.com/users/sign_in"
            class="nav__link nav__outline__button"
            >Sign in</a
          >
        </li>
        <li>
          <a
            href="https://app.formester.com/users/sign_up"
            class="nav__link nav__button"
            >Sign up</a
          >
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  components: {
    NavItem,
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  font-weight: 700;
}

.nav__container {
  height: 75px;
  background-color: var(--clr-bg);
  /* box-shadow: 0 2px 10px rgba(136, 130, 130, 0.15); */
}

.nav__logo {
  font-size: var(--ft-subtitle);
  font-weight: 600;
}

.nav__items {
  list-style: none;
  display: flex;
  align-items: center;
  font-size: var(--ft-small-body);
}

.nav__items li {
  margin: 0 12px;
  cursor: pointer;
}

.nav__button {
  background-color: var(--clr-primary);
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
}

.nav__button:hover {
  opacity: 0.9;
  color: white;
}

.nav__outline__button {
  background-color: #eee8ff;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--clr-primary);
}

.menu__btn i {
  display: none;
  font-size: 1.6rem;
  cursor: pointer;
}

.nav__container #check {
  display: none;
}

/* DROPDOWN */

/* .dropbtn {
  background-color: var(--clr-bg);
  font-weight: 500;
}

.dropdown__content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown__content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown__content a:hover {
  background-color: var(--clr-primary-light);
}

.dropdown:hover .dropdown__content {
  display: block;
}

.dropdown__label,
.dropdown__input {
  display: none;
} */

@media screen and (max-width: 991px) {
  .nav__items {
    position: fixed;
    flex-direction: column;
    align-items: stretch;
    top: 75px;
    left: -110%;
    height: 100vh;
    width: 100vw;
    background-color: var(--clr-bg);
    text-align: center;
    z-index: -10;
    transition: all 400ms ease-in-out;
    background-color: white;
  }

  .menu__btn i.ri-menu-3-line {
    display: inline;
  }

  #check:checked ~ div.nav__items {
    left: 0;
    z-index: 100;
  }

  .nav__button {
    display: block;
    padding: 1em 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  /* .dropbtn {
    display: none;
  }

  #dropdown__input:checked + .dropdown__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: static;
    box-shadow: none;
    background-color: var(--clr-bg);
  }

  .dropdown:hover .dropdown__content {
    display: none;
  }

  .dropdown__label {
    display: inline;
    display: block;
    padding: 1em 0;
    font-size: 1.4rem;
    font-weight: 600;
  } */
}
</style>
