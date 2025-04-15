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
          <li class="nav-item dropdown position-static"
            @mouseenter="showDropdown"
            @mouseleave="hideDropdown"
          >
            <NuxtLink
              to="/features/"
              class="nav-link d-flex align-items-center"
              @click="showDropdown"
            >
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                class="chevron-icon ms-2"
                :class="{ 'chevron-rotate': dropdownActive }"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
            <div 
              class="dropdown-menu"
              :class="{ active: dropdownActive }"
            >
              <div class="dropdown-menu-inner">
                <NavDropdownCategory
                  v-for="category in categories"
                  :key="category.id"
                  :title="category.title"
                  :items="category.items"
                  :slug="category.slug"
                  @itemClick="hideDropdown"
                />
              </div>
            </div>
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
import NavDropdownCategory from './NavDropdownCategory.vue'
import axios from 'axios'

export default {
  components: {
    NavItem,
    DropdownItem,
    NavDropdownCategory,
  },
  data() {
    return {
      dropdownActive: false,
      dropdownTimeout: null,
      categories: [
        {
          id: 1,
          title: 'Form Building',
          items: []
        },
        {
          id: 2,
          title: 'Security & Validation',
          items: []
        },
        {
          id: 3,
          title: 'Submission & Data Handling',
          items: []
        },
        {
          id: 4,
          title: 'Advanced Controls',
          items: []
        },
        {
          id: 5,
          title: 'Branding & Integration',
          items: []
        },
        {
          id: 6,
          title: 'Notifications & Reporting',
          items: []
        }
      ]
    }
  },
  mounted() {
    // Try to load cached features first
    const cachedFeatures = localStorage.getItem('navFeatures')
    if (cachedFeatures) {
      this.populateFeatures(JSON.parse(cachedFeatures))
    }
    // Then fetch fresh data
    this.getFeatures()
  },
  methods: {
    collapseNav() {
      const bsCollapse = new bootstrap.Collapse(this.$refs.siteNav)
      bsCollapse.toggle()
    },
    showDropdown() {
      if (this.dropdownTimeout) {
        clearTimeout(this.dropdownTimeout)
        this.dropdownTimeout = null
      }
      this.dropdownActive = true
    },
    hideDropdown() {
      this.dropdownTimeout = setTimeout(() => {
        this.dropdownActive = false
      }, 300) // 300ms delay before closing for better UX
    },
    populateFeatures(data) {
      // Reset all category items
      this.categories.forEach(category => {
        category.items = []
      })

      // Map features to categories
      data.forEach((item) => {
        const categoryTitle = item.featureCategory;
        const category = this.categories.find(cat => cat.title === categoryTitle);
        
        if (category) {
          category.items.push({
            id: item.id,
            title: item.navTitle,
            description: item.navDescription,
            imageUrl: item.navIcon?.imageUrl || item.navIcon?.image?.url,
            imageAlt: item.navIcon?.imageAlt || item.navTitle,
            slug: item.slug,
          });
        }
      });
    },
    async getFeatures() {
      try {
        const {
          data: { data },
        } = await axios.get(`${process.env.strapiUrl}/api/features`, {
          params: {
            populate: 'deep',
            'sort[0]': 'id',
          },
        })

        // Cache the fresh data
        localStorage.setItem('navFeatures', JSON.stringify(data))
        
        // Update the features
        this.populateFeatures(data)
      } catch (error) {
        console.error('Error fetching features:', error);
      }
    }
  }
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
  transition: all 0.2s ease;
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
   transition: all 0.2s ease;
}

.navbar-toggler:focus,
.navbar-toggler:hover {
  border: none;
  outline: none;
  box-shadow: none;
}

.dropdown-menu {
  padding: 24px 0;
  border: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
  background: white;
  width: 100%;
  display: block !important;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
  z-index: 9999;
  transition: all 0.3s ease;
}

.dropdown-menu-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 24px;
  padding: 0 24px;
}

.chevron-icon {
  transition: transform 0.3s ease;
}

.chevron-rotate {
  transform: rotate(180deg);
}

@media (max-width: 1199px) {
  .dropdown-menu {
    padding: 16px 0;
  }
  .dropdown-menu-inner {
    gap: 16px;
    padding: 0 16px;
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
    position: relative;
    box-shadow: none;
    border-radius: 0;
  }

  .dropdown-menu-inner {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 0 16px;
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
