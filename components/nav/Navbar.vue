<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-white">
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
        class="collapse navbar-collapse mt-2"
        ref="siteNav"
        id="navbarSupportedContent"
      >
        <ul
          class="navbar-nav ms-auto navbar-nav-scroll"
          style="--bs-scroll-height: calc(100vh - 54px)"
        >
          <li
            class="nav-item dropdown me-3 position-static"
            @click="collapseNav"
            @mouseenter="dropdownActive = true"
            @mouseleave="dropdownActive = false"
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
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
              :class="{ active: dropdownActive }"
            >
              <li
                v-for="dropdownItem in dropdownItems"
                :key="dropdownItem.id"
                @click="dropdownActive = false"
              >
                <DropdownItem
                  :title="dropdownItem.title"
                  :description="dropdownItem.description"
                  :imageUrl="dropdownItem.imageUrl"
                  :imageAlt="dropdownItem.imageAlt"
                  :slug="dropdownItem.slug"
                />
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
          <li class="nav-item me-4" @click="collapseNav">
            <NuxtLink to="/comparison-tool/" class="nav-link"
              >Compare
            </NuxtLink>
          </li>
          <div class="d-flex flex-column flex-lg-row">
            <a
              href="https://app.formester.com/users/sign_in"
              @click="collapseNav"
              class="mt-3 mt-lg-0"
            >
              <button class="button nav__outline__button">Login</button>
            </a>
            <a
              href="https://app.formester.com/users/sign_up"
              @click="collapseNav"
              class="mt-3 mt-lg-0 ms-lg-3"
            >
              <button class="button nav__button">Sign Up</button>
            </a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import DropdownItem from './DropdownItem.vue'
import NavItem from './NavItem.vue'
import axios from 'axios'
export default {
  components: {
    NavItem,
    DropdownItem,
  },
  data() {
    return {
      dropdownActive: false,
      dropdownItems: [],
    }
  },
  mounted() {
    this.getFeatures()
  },
  methods: {
    collapseNav() {
      if (window.screen.width >= 992) return
      const bsCollapse = new bootstrap.Collapse(this.$refs.siteNav)
      bsCollapse.toggle()
    },
    async getFeatures() {
      const {
        data: { data },
      } = await axios.get(`${process.env.strapiUrl}/api/features`, {
        params: {
          populate: 'deep',
          'sort[0]': 'id',
        },
      })
      this.dropdownItems = data.map((item) => ({
        id: item.id,
        title: item.navTitle,
        description: item.navDescription,
        imageUrl: item.navIcon?.imageUrl || item.navIcon?.image.url,
        imageAlt: item.navIcon.imageAlt,
        slug: item.slug,
      }))
    },
  },
}
</script>

<style scoped>
nav {
  padding: 1em 0;
  z-index: 99999;
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
  /* prevent wrappping of text */
  white-space: nowrap;
}

.nav__button:hover {
  background-color: var(--clr-primary-hover);
}

.nav__outline__button {
  background: transparent;
  border: 1px solid #ebebeb;
  color: #6e6e6e;
}

.nav__outline__button:hover {
  background: #f9f9f9;
}

.nav-link {
  font-size: 16px;
  font-weight: 500;
  color: #6e6e6e;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.nav-link:hover {
  color: var(--clr-primary);
  border-bottom: 2px solid var(--clr-primary);
}

.navbar-toggler:focus,
.navbar-toggler:hover {
  border: none;
  outline: none;
  box-shadow: none;
}

.dropdown-menu.active {
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

@media (max-width: 1199px) {
  .nav-link {
    font-size: 16px;
    padding-right: 5px !important;
    padding-left: 5px !important;
  }
}
@media (max-width: 991px) {
  .nav-link {
    padding-block: 0;
  }

  .nav-link:hover {
    color: var(--clr-primary);
    border-bottom: 2px solid transparent;
  }

  .nav-item {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0.5em;
  }

  .dropdown-menu {
    display: grid;
    position: relative;
    box-shadow: none;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }

  .dropdown-menu.active {
    grid-template-columns: repeat(2, 1fr) !important;
    padding-inline: 0 !important;
  }
}

@media screen and (max-width: 1300px) {
  .dropdown-menu.active {
    padding-inline: 3vw;
  }
}

@media screen and (max-width: 1170px) {
  .dropdown-menu.active {
    grid-template-columns: repeat(3, 1fr);
    padding-inline: 3vw;
  }
}

@media screen and (max-width: 640px) {
  .dropdown-menu {
    grid-template-columns: 1fr;
  }

  .dropdown-menu.active {
    grid-template-columns: 1fr !important;
  }
}
</style>
