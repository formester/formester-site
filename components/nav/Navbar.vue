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
          <li class="nav-item me-3" @click="collapseNav">
            <NuxtLink to="/" class="nav-link"> Home </NuxtLink>
          </li>
          <li
            class="nav-item dropdown me-3 position-static"
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
                  to="/features/collaboration/"
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
          <li class="nav-item me-3" @click="collapseNav">
            <NuxtLink to="/pricing/" class="nav-link"> Pricing </NuxtLink>
          </li>
          <li class="nav-item me-3" @click="collapseNav">
            <NuxtLink to="/blog/" class="nav-link">Blog </NuxtLink>
          </li>
          <li class="nav-item me-3" @click="collapseNav">
            <NuxtLink to="/templates/" class="nav-link"> Templates </NuxtLink>
          </li>
          <li class="nav-item me-4" @click="collapseNav">
            <NuxtLink to="/integrations/" class="nav-link"
              >Integrations
            </NuxtLink>
          </li>
        </ul>
        <div>
          <a
            href="https://app.formester.com/users/sign_in"
            @click="collapseNav"
          >
            <button class="button nav__outline__button">Login</button>
          </a>
          <a
            href="https://app.formester.com/users/sign_up"
            @click="collapseNav"
            class="ms-3"
          >
            <button class="button nav__button">Sign Up Free</button>
          </a>
        </div>
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

.button {
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
}

.nav__button {
  background-color: var(--clr-primary);
  color: white;
}

.nav__button:hover {
  opacity: 0.9;
}

.nav__outline__button {
  background: transparent;
  border: 1px solid #ebebeb;
  color: #7e7e7e;
}

.nav__outline__button:hover {
  background: #f9f9f9;
}

.nav-link {
  font-size: 16px;
  font-weight: 500;
  color: #7e7e7e;
}

.nav-link:hover {
  color: var(--clr-primary);
}

.navbar-toggler:focus,
.navbar-toggler:hover {
  border: none;
  outline: none;
  box-shadow: none;
}

.nav-item.dropdown:hover .dropdown-menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-inline: 9vw;
  z-index: 9999;
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
  }

  .nav-item.dropdown:hover .dropdown-menu {
    grid-template-columns: repeat(2, 1fr) !important;
    padding-inline: 0 !important;
  }

  .dropdown-item {
    padding: 8px;
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
    grid-template-columns: 1fr !important;
  }
}
</style>
