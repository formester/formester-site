<template>
  <header>
    <nav class="nav__container d-flex align-items-center">
      <div class="container horizontal__padding d-flex align-items-center justify-content-between">
        <nuxt-link to="/" class="nav__logo"><img src="../../assets/images/logo.svg" alt="Fromester"></nuxt-link>
        <input type="checkbox" id="check" />
        <label for="check" class="menu__btn">
          <i class="ri-menu-3-line">
            <img src="@/assets/images/menu.svg" alt="Nav-menu-button" />
          </i>
        </label>
        <div class="nav__items">
          <NavItem navName="Home" navLink="/" />
          <li class="dropdown">
            <label for="dropdown__input" class="dropdown__label">
              Features
            </label>
            <a class="dropbtn">Our Projects </a>
            <input
              type="checkbox"
              id="dropdown__input"
              class="dropdown__input"
            />
            <div class="dropdown__content">
              <a>Html Form</a>
              <a>Auto Responder</a>
              <a>Integration</a>
              <a>Spam Protection</a>
            </div>
          </li>
          <NavItem navName="Templates" navLink="/templates" />
          <NavItem navName="Pricing" navLink="/pricing" />
          <NavItem navName="Contact" navLink="/contact" />
          <li>
            <nuxt-link to="/auth/login" class="nav__link nav__button"
              >Sign in</nuxt-link
            >
          </li>
        </div>
      </div>
    </nav>
  </header>
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

.nav__container {
  height: 75px;
  background-color: var(--clr-bg);
  box-shadow: 0 2px 10px rgba(136, 130, 130, 0.15);
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

.menu__btn i {
  display: none;
  font-size: 1.6rem;
  cursor: pointer;
}

.nav__container #check {
  display: none;
}

/* DROPDOWN */

.dropbtn {
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
}

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

  .dropbtn {
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
  }
}

</style>
