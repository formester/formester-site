<template>
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <img src="@/assets/images/logo.svg" alt="Formester" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="@/assets/images/toggle.svg" alt="Nav-menu-button" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item me-3">
            <NuxtLink to="/" class="nav-link">
              Home
              <HoverSvg />
            </NuxtLink>
          </li>
          <li class="nav-item dropdown me-3">
            <a
              class="nav-link"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Features
              <HoverSvg />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NuxtLink class="dropdown-item" to="/features/html-form-backend"
                  >HTML Form Backend</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/features/auto-responder"
                  >Auto Responder
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/features/spam-protection"
                  >Spam Protection</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item me-4">
            <NuxtLink to="/pricing" class="nav-link">
              Pricing
              <HoverSvg />
            </NuxtLink>
          </li>
          <li class="nav-item me-4">
            <NuxtLink to="/blogs" class="nav-link"
              >Blogs
              <HoverSvg />
            </NuxtLink>
          </li>
          <li class="nav-item me-4">
            <NuxtLink to="/integrations" class="nav-link"
              >Integrations
              <HoverSvg />
            </NuxtLink>
          </li>
          <!-- <li class="nav-item">Contact us</li> -->
          <li class="nav-item me-4">
            <a href="https://app.formester.com/users/sign_in">
              <button class="nav__outline__button">Login</button>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://app.formester.com/users/sign_up">
              <button class="nav__button">Register</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from './NavItem.vue'
import HoverSvg from './HoverSvg.vue'
export default {
  components: {
    NavItem,
    HoverSvg
  },
}
</script>

<style scoped>
nav {
  padding: 1em 0;
}

a.nuxt-link-exact-active {
  font-weight: 700;
}

.nav__button {
  background-color: var(--clr-primary);
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
}

.nav__outline__button {
  background-color: #eee8ff;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--clr-primary);
}

.nav-link {
  color: var(--clr-dark);
}

.navbar-toggler:focus,
.navbar-toggler:hover {
  border: none;
  outline: none;
  box-shadow: none;
}

/* .nav-item.dropdown:hover .dropdown-menu {
  display: block;
} */

.dropdown-item:hover {
  background: var(--clr-primary-light);
}

.nav-item {
  position: relative;
}

.nav-item svg {
  fill: none;
  stroke: hsla(277, 100%, 83%, 1);
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke-dasharray: 338;
  stroke-dashoffset: 338;
  stroke-linecap: round;
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 25px);
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
  z-index: -1;
}

/* NAV HOVER */

.nav-item:hover svg {
  stroke-dashoffset: 0;
  opacity: 1;
  transition: opacity 0s,
    stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

@media (max-width: 768px) {
  .nav-item:hover svg {
    opacity: 0;
  }

  .nav-item {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0.5em;
  }

  .nav__outline__button {
    margin-bottom: 10px;
  }

  .dropdown-menu {
    border: none;
  }
}
</style>