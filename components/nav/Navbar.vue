<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        <nuxt-img src="/logo.svg" alt="Formester" />
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
        <nuxt-img src="/toggle.svg" alt="Nav-menu-button" />
      </button>
      <div
        class="collapse navbar-collapse"
        ref="siteNav"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/" class="nav-link">
              Home
              <HoverSvg />
            </NuxtLink>
          </li>
          <li
            class="nav-item dropdown me-2 position-static"
            @click="collapseNav"
          >
            <NuxtLink
              class="nav-link"
              id="navbarDropdown"
              role="button"
              aria-expanded="false"
              to="/features/"
            >
              Features
              <HoverSvg />
            </NuxtLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/html-form-backend/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/html-form-backend.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">HTML Form Backend</span>
                    <span class="dropdown-item__desc"
                      >Simplify form integration</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/auto-responder/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/auto-responders.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Auto Responder</span>
                    <span class="dropdown-item__desc"
                      >Set up automated responses</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/spam-protection/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/spam-protection.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Spam Protection</span>
                    <span class="dropdown-item__desc"
                      >Protect sensitive data</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/powerful-analytics/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/powerful-analytics.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Powerful Analytics</span>
                    <span class="dropdown-item__desc"
                      >Get Insights of Engagements</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/conditional-logic/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/advanced-conditional-logic.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Conditional Logic</span>
                    <span class="dropdown-item__desc"
                      >Create intelligent forms</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/online-payment/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/collect-online-payments.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Online Payments</span>
                    <span class="dropdown-item__desc"
                      >Start collecting payments</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/digital-signature/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/digital-signature.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Digital Signature</span>
                    <span class="dropdown-item__desc"
                      >Incorporate e-signatures</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/branding-kit/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/brand-kit.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Brand Kit</span>
                    <span class="dropdown-item__desc"
                      >Elevate your brand identity</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/information-recall/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/information-recall.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Information Recall</span>
                    <span class="dropdown-item__desc"
                      >Referencing previous answers</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/digital-signature/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/calculation-fields.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title">Calculation Fields</span>
                    <span class="dropdown-item__desc"
                      >Forms that perform calculations</span
                    >
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dropdown-item d-flex align-items-center"
                  to="/features/branding-kit/"
                  @click="collapseNav"
                >
                  <nuxt-img
                    src="/nav-dropdown/multi-user-collaboration.png"
                    class="dropdown-item__img"
                  />
                  <div class="d-flex flex-column ms-3">
                    <span class="dropdown-item__title"
                      >Multi-User Collaboration</span
                    >
                    <span class="dropdown-item__desc"
                      >Collaborate with team members
                    </span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/pricing/" class="nav-link">
              Pricing
              <HoverSvg />
            </NuxtLink>
          </li>
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/blog/" class="nav-link"
              >Blog
              <HoverSvg />
            </NuxtLink>
          </li>
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/templates/" class="nav-link">
              Templates
              <HoverSvg />
            </NuxtLink>
          </li>
          <li class="nav-item me-4" @click="collapseNav">
            <NuxtLink to="/integrations/" class="nav-link"
              >Integrations
              <HoverSvg />
            </NuxtLink>
          </li>
          <li class="nav-item me-2">
            <a
              href="https://app.formester.com/users/sign_in"
              @click="collapseNav"
            >
              <button class="nav__outline__button">Login</button>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://app.formester.com/users/sign_up"
              @click="collapseNav"
            >
              <button class="nav__button">Sign Up Free</button>
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
    HoverSvg,
  },
  methods: {
    collapseNav() {
      if (window.screen.width >= 992) return
      const bsCollapse = new bootstrap.Collapse(this.$refs.siteNav)
      bsCollapse.toggle()
    },
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

.dropdown-menu {
  padding-block: 16px;
  border: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  left: 0;
  right: 0;
}

.dropdown-item {
  padding: 12px;
}

.dropdown-item:hover {
  background: #f6f6f6;
}

.dropdown-item:active {
  color: #212529;
}

.dropdown-item__title {
  color: var(#171717);
  font-size: 18px;
  font-weight: 500;
  line-height: 140%;
}

.dropdown-item__desc {
  color: var(#525252);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.dropdown-item__img {
  height: 32px;
  width: 32px;
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

/* Removing the hover effect on 'feature' nav-item */
.nav-item.position-static svg {
  opacity: 0;
}

@media (hover: hover) {
  .nav-item.dropdown:hover .dropdown-menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-inline: 9vw;
    z-index: 9999;
  }
}

@media (max-width: 1199px) {
  .nav-link {
    font-size: 16px;
    padding-right: 5px !important;
    padding-left: 5px !important;
  }
}
@media (max-width: 992px) {
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
    display: grid;
    position: relative;
    box-shadow: none;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    pointer-events: none;
  }

  .nav-item.dropdown:hover .dropdown-menu {
    grid-template-columns: repeat(2, 1fr);
    padding-inline: 0 !important;
  }

  /* .nav-item.dropdown:hover .dropdown-menu {
    grid-template-columns: repeat(2, 1fr);
    padding-inline: 0;
  } */

  .dropdown-item {
    padding: 8px;
    border: 1px solid red;
  }

  .dropdown-menu .dropdown-item__title {
    font-size: 14px;
    font-weight: 400;
  }

  .dropdown-menu .dropdown-item__desc {
    display: none;
  }

  .dropdown-menu .dropdown-item__img {
    height: 24px;
    width: 24px;
  }
}

@media screen and (max-width: 1300px) {
  .nav-item.dropdown:hover .dropdown-menu {
    padding-inline: 3vw;
  }
}

@media screen and (max-width: 1170px) {
  .nav-item.dropdown:hover .dropdown-menu {
    grid-template-columns: repeat(3, 1fr);
    padding-inline: 3vw;
  }
}

@media screen and (max-width: 640px) {
  .dropdown-menu {
    grid-template-columns: 1fr;
  }

  .nav-item.dropdown:hover .dropdown-menu {
    grid-template-columns: 1fr;
  }
}
</style>
