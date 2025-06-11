<template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-xl bg-white floating-navbar">
      <div class="container d-flex align-items-center">
        <!-- Logo -->
        <NuxtLink class="navbar-brand" to="/">
          <nuxt-img src="/logo.svg" alt="Formester" />
        </NuxtLink>

        <!-- Mobile Toggle Button -->
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

        <!-- Navigation Menu -->
        <div
          class="collapse navbar-collapse"
          ref="siteNav"
          id="navbarSupportedContent"
        >
          <ul
            class="navbar-nav ms-auto navbar-nav-scroll"
            style="--bs-scroll-height: calc(100vh - 54px)"
          >
            <li
              class="nav-item dropdown me-2 position-static"
              :class="{ open: dropdownActive }"
              @mouseenter="!isMobile && onDropdownMouseEnter()"
              @mouseleave="!isMobile && onDropdownMouseLeave()"
            >
              <template v-if="isMobile">
                <button
                  class="nav-link"
                  :class="{ active: dropdownActive || hoveringDropdown }"
                  id="navbarDropdown"
                  type="button"
                  @click="toggleDropdown"
                >
                  Features
                  <span class="chevron-stack">
                    <nuxt-img
                      src="/chevron-down-gray.svg"
                      class="chevron chevron-gray"
                      :class="{ open: dropdownActive }"
                    />
                    <nuxt-img
                      src="/chevron-down-colored.svg"
                      class="chevron chevron-colored"
                      :class="{ open: dropdownActive }"
                    />
                  </span>
                </button>
              </template>
              <template v-else>
                <button
                  class="nav-link"
                  :class="{ active: dropdownActive || hoveringDropdown }"
                  id="navbarDropdown"
                  type="button"
                  @click="toggleDropdown"
                  @mouseenter="onDropdownMouseEnter"
                  @mouseleave="onDropdownMouseLeave"
                  :aria-expanded="dropdownActive.toString()"
                >
                  Features
                  <span class="chevron-stack">
                    <nuxt-img
                      src="/chevron-down-gray.svg"
                      class="chevron chevron-gray"
                      :class="{ open: dropdownActive }"
                    />
                    <nuxt-img
                      src="/chevron-down-colored.svg"
                      class="chevron chevron-colored"
                      :class="{ open: dropdownActive }"
                    />
                  </span>
                </button>
              </template>

              <!-- Mega Dropdown using FeaturesDropdown component -->
              <FeaturesDropdown
                :dropdownActive="dropdownActive"
                :isMobile="isMobile"
                :featureCategories="featureCategories"
                :activeFeatureCategory="activeFeatureCategory"
                :dropdownItems="dropdownItems"
                :filteredDropdownItems="filteredDropdownItems"
                @mouseenter="onDropdownMouseEnter"
                @mouseleave="onDropdownMouseLeave"
                @category-change="activeFeatureCategory = $event"
                @dropdown-close="handleDropdownClose"
              />
            </li>

            <!-- Regular Nav Items -->
            <li class="nav-item me-2" @click="collapseNav">
              <NuxtLink to="/pricing/" class="nav-link">Pricing</NuxtLink>
            </li>
            <li
              class="nav-item dropdown me-2 position-static"
              :class="{ open: templatesDropdownActive }"
              @mouseenter="!isMobile && onTemplatesDropdownMouseEnter()"
              @mouseleave="!isMobile && onTemplatesDropdownMouseLeave()"
            >
              <template v-if="isMobile">
                <button
                  class="nav-link"
                  :class="{
                    active:
                      templatesDropdownActive || hoveringTemplatesDropdown,
                  }"
                  id="navbarTemplatesDropdown"
                  type="button"
                  @click="toggleTemplatesDropdown"
                >
                  Templates
                  <span class="chevron-stack">
                    <nuxt-img
                      src="/chevron-down-gray.svg"
                      class="chevron chevron-gray"
                      :class="{ open: templatesDropdownActive }"
                    />
                    <nuxt-img
                      src="/chevron-down-colored.svg"
                      class="chevron chevron-colored"
                      :class="{ open: templatesDropdownActive }"
                    />
                  </span>
                </button>
              </template>
              <template v-else>
                <button
                  class="nav-link"
                  :class="{
                    active:
                      templatesDropdownActive || hoveringTemplatesDropdown,
                  }"
                  id="navbarTemplatesDropdown"
                  type="button"
                  @click="toggleTemplatesDropdown"
                  @mouseenter="onTemplatesDropdownMouseEnter"
                  @mouseleave="onTemplatesDropdownMouseLeave"
                  :aria-expanded="templatesDropdownActive.toString()"
                >
                  Templates
                  <span class="chevron-stack">
                    <nuxt-img
                      src="/chevron-down-gray.svg"
                      class="chevron chevron-gray"
                      :class="{ open: templatesDropdownActive }"
                    />
                    <nuxt-img
                      src="/chevron-down-colored.svg"
                      class="chevron chevron-colored"
                      :class="{ open: templatesDropdownActive }"
                    />
                  </span>
                </button>
              </template>

              <!-- Templates Dropdown Component -->
              <TemplatesDropdown
                :dropdownActive="templatesDropdownActive"
                :isMobile="isMobile"
                @mouseenter="onTemplatesDropdownMouseEnter"
                @mouseleave="onTemplatesDropdownMouseLeave"
                @dropdown-close="handleTemplatesDropdownClose"
              />
            </li>
            <li class="nav-item me-2" @click="collapseNav">
              <NuxtLink to="/integrations/" class="nav-link"
                >Integrations</NuxtLink
              >
            </li>

            <li
              class="nav-item dropdown me-2 position-relative"
              :class="{ open: resourcesDropdownActive }"
              @mouseenter="!isMobile && onResourcesDropdownMouseEnter()"
              @mouseleave="!isMobile && onResourcesDropdownMouseLeave()"
            >
              <template v-if="isMobile">
                <button
                  class="nav-link"
                  :class="{
                    active:
                      resourcesDropdownActive || hoveringResourcesDropdown,
                  }"
                  type="button"
                  @click="toggleResourcesDropdown"
                >
                  Resources
                  <span class="chevron-stack">
                    <nuxt-img
                      src="/chevron-down-gray.svg"
                      class="chevron chevron-gray"
                      :class="{ open: resourcesDropdownActive }"
                    />
                    <nuxt-img
                      src="/chevron-down-colored.svg"
                      class="chevron chevron-colored"
                      :class="{ open: resourcesDropdownActive }"
                    />
                  </span>
                </button>
              </template>
              <template v-else>
                <button
                  class="nav-link"
                  :class="{
                    active:
                      resourcesDropdownActive || hoveringResourcesDropdown,
                  }"
                  type="button"
                  @click="toggleResourcesDropdown"
                  @mouseenter="onResourcesDropdownMouseEnter"
                  @mouseleave="onResourcesDropdownMouseLeave"
                  :aria-expanded="resourcesDropdownActive.toString()"
                >
                  Resources
                  <span class="chevron-stack">
                    <nuxt-img
                      src="/chevron-down-gray.svg"
                      class="chevron chevron-gray"
                      :class="{ open: resourcesDropdownActive }"
                    />
                    <nuxt-img
                      src="/chevron-down-colored.svg"
                      class="chevron chevron-colored"
                      :class="{ open: resourcesDropdownActive }"
                    />
                  </span>
                </button>
              </template>

              <!-- Resources Dropdown component -->
              <ResourcesDropdown
                :dropdownActive="resourcesDropdownActive"
                :isMobile="isMobile"
                :resourcesList="resourcesList"
                @mouseenter="onResourcesDropdownMouseEnter"
                @mouseleave="onResourcesDropdownMouseLeave"
                @dropdown-close="handleResourcesDropdownClose"
              />
            </li>
          </ul>

          <!-- Auth Buttons -->
          <div class="d-flex flex-column flex-lg-row ms-auto">
            <a
              href="https://app.formester.com/users/sign_in"
              @click="collapseNav"
              class="mt-3 mt-lg-0"
            >
              <button type="button" class="button nav__outline__button">
                Log In
              </button>
            </a>
            <a
              href="https://app.formester.com/users/sign_up"
              @click="collapseNav"
              class="mt-3 mt-lg-0 ms-lg-2"
            >
              <button type="button" class="button nav__button">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import DropdownItem from './DropdownItem.vue'
import NavItem from './NavItem.vue'
import FeaturesDropdown from './FeaturesDropdown.vue'
import ResourcesDropdown from './ResourcesDropdown.vue'
import TemplatesDropdown from './TemplatesDropdown.vue'
import axios from 'axios'
import navItems from '~/static/navbar.json'

export default {
  name: 'NavNavbar',
  components: {
    NavItem,
    DropdownItem,
    FeaturesDropdown,
    ResourcesDropdown,
    TemplatesDropdown,
  },
  data() {
    return {
      dropdownActive: false,
      hoveringDropdown: false,
      templatesDropdownActive: false,
      hoveringTemplatesDropdown: false,
      resourcesDropdownActive: false,
      hoveringResourcesDropdown: false,
      isMobile: false,
      dropdownItems: [],
      featureCategories: [],
      activeFeatureCategory: '',
      dropdownTimer: null,
      resourcesDropdownTimer: null,
      resourcesList: [
        {
          id: 1,
          title: 'Compare',
          description: 'Compare us with other form builders',
          imageUrl: '/compare.svg',
          imageAlt: 'Compare icon',
          slug: 'comparison-tool',
        },
        {
          id: 2,
          title: 'Blogs',
          description: 'Read our latest articles and guides',
          imageUrl: '/blog.svg',
          imageAlt: 'Blogs icon',
          slug: 'blog',
        },
        {
          id: 3,
          title: 'Enterprise',
          description: 'Solutions for large organizations',
          imageUrl: '/enterprise.svg',
          imageAlt: 'Enterprise icon',
          slug: 'enterprise',
        },
      ],
    }
  },
  computed: {
    filteredDropdownItems() {
      if (!this.activeFeatureCategory) return this.dropdownItems
      return this.dropdownItems.filter(
        (item) => item.featureCategory === this.activeFeatureCategory
      )
    },
  },
  mounted() {
    this.getFeatures()
    this.checkIsMobile()
    window.addEventListener('resize', this.checkIsMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIsMobile)
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth < 1200
      if (!this.isMobile) {
        this.dropdownActive = false // Reset dropdown state when switching to desktop
      }
    },
    toggleDropdown() {
      this.dropdownActive = !this.dropdownActive
      if (this.dropdownActive) {
        this.templatesDropdownActive = false
        this.resourcesDropdownActive = false
      }
    },

    toggleTemplatesDropdown() {
      this.templatesDropdownActive = !this.templatesDropdownActive
      if (this.templatesDropdownActive) {
        this.dropdownActive = false
        this.resourcesDropdownActive = false
      }
    },

    collapseNav() {
      if (window.innerWidth >= 1200) return
      const bsCollapse = new bootstrap.Collapse(this.$refs.siteNav)
      bsCollapse.hide()
    },

    getFeatures() {
      this.dropdownItems = navItems.map((item) => ({
        id: item.id,
        title: item.navTitle,
        description: item.navDescription,
        imageUrl: item.navIcon?.imageUrl || item.navIcon?.image?.url,
        imageAlt: item.navIcon?.imageAlt || '',
        slug: item.slug,
        featureCategory: item.featureCategory || 'Other',
        featurePlan: item.featurePlan || null,
      }))

      // Extract unique categories
      const categories = [
        ...new Set(this.dropdownItems.map((item) => item.featureCategory)),
      ]
      this.featureCategories = categories
      this.activeFeatureCategory = categories[0] || ''
    },

    onDropdownMouseEnter() {
      if (this.dropdownTimer) {
        clearTimeout(this.dropdownTimer)
        this.dropdownTimer = null
      }
      this.dropdownActive = true
      this.hoveringDropdown = true
    },

    onDropdownMouseLeave() {
      this.hoveringDropdown = false
      this.dropdownTimer = setTimeout(() => {
        if (!this.hoveringDropdown) {
          this.dropdownActive = false
        }
      }, 200)
    },

    handleDropdownClose() {
      this.dropdownActive = false
      this.collapseNav()
    },

    onTemplatesDropdownMouseEnter() {
      this.hoveringTemplatesDropdown = true
      // Close other dropdowns if open
      if (this.dropdownActive) {
        this.dropdownActive = false
      }
      if (this.resourcesDropdownActive) {
        this.resourcesDropdownActive = false
      }
      this.templatesDropdownActive = true
    },

    onTemplatesDropdownMouseLeave() {
      this.hoveringTemplatesDropdown = false
      setTimeout(() => {
        if (!this.hoveringTemplatesDropdown) {
          this.templatesDropdownActive = false
        }
      }, 200)
    },

    handleTemplatesDropdownClose() {
      this.templatesDropdownActive = false
      this.collapseNav()
    },

    toggleResourcesDropdown() {
      this.resourcesDropdownActive = !this.resourcesDropdownActive
      if (this.resourcesDropdownActive) {
        this.dropdownActive = false
        this.templatesDropdownActive = false
      }
    },

    onResourcesDropdownMouseEnter() {
      this.hoveringResourcesDropdown = true
      clearTimeout(this.resourcesDropdownTimer)

      // Close features dropdown if open
      if (this.dropdownActive) {
        this.dropdownActive = false
      }

      this.resourcesDropdownActive = true
    },

    onResourcesDropdownMouseLeave() {
      this.hoveringResourcesDropdown = false
      this.resourcesDropdownTimer = setTimeout(() => {
        if (!this.hoveringResourcesDropdown) {
          this.resourcesDropdownActive = false
        }
      }, 300)
    },

    handleResourcesDropdownClose() {
      this.resourcesDropdownActive = false
      this.collapseNav()
    },
  },
}
</script>

<style scoped>
.container {
  padding-left: 16px !important;
  padding-right: 8px !important;
}

.navbar-container {
  z-index: 1030;
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  top: 16px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
}

.floating-navbar {
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 8px 0;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
}
nav {
  padding: 0.5em 0;
  z-index: 99999;
}

.navbar-brand {
  display: flex;
  align-items: center;
  margin-right: 0;
  padding: 0;
}

.navbar-collapse {
  display: flex;
  align-items: center;
}

/* Center navigation styles */
.nav-center {
  display: flex;
  justify-content: center;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  color: #697586;
  border-bottom: none;
  transition: color 0.3s ease;
  background: none;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

.nav-link:hover,
.nav-link:focus,
.nav-link.active,
.router-link-exact-active {
  color: var(--clr-primary);
  border-bottom: none;
}

/* Buttons */
.button {
  font-size: 14px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  white-space: nowrap;
}

.nav__button {
  background-color: var(--clr-primary);
  color: white;
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

/* Mobile Toggle */
.navbar-toggler:focus,
.navbar-toggler:hover {
  border: none;
  outline: none;
  box-shadow: none;
}

/* Desktop navbar styles */
@media (min-width: 1200px) {
  .navbar-nav {
    padding-right: 16px;
  }
}

/* ---------- Features Mega Dropdown ---------- */
.features-dropdown-mega {
  display: flex;
  width: 900px;
  min-width: 900px;
  max-width: 900px;
  min-height: 340px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(16, 30, 54, 0.08);
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(-8px);
  z-index: 9999;
  border: 1px solid #eaecf0;
  align-items: stretch;
  overflow: hidden;
}

/* Sidebar (Categories) */
.features-dropdown-sidebar {
  width: 230px;
  min-width: 230px;
  max-width: 230px;
  background: #f9fafb;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  gap: 2px;
  height: 100%;
  align-items: flex-start;
  box-sizing: border-box;
}

.features-dropdown-title-category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #8a94a6;
  margin-left: 24px;
  margin-bottom: 12px;
}

.chevron-stack {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  margin-left: 2px;
  vertical-align: middle;
}

.chevron {
  position: absolute;
  top: -2px;
  left: 0;
  width: 18px;
  height: 18px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s;
  will-change: transform;
  pointer-events: none;
}

.chevron-gray {
  opacity: 1;
  z-index: 1;
}

.chevron-colored {
  opacity: 0;
  z-index: 2;
}

.nav-link:hover .chevron-gray,
.nav-link:focus .chevron-gray,
.nav-link.active .chevron-gray,
.router-link-exact-active .chevron-gray,
.chevron-gray.open {
  opacity: 0;
}

.nav-link:hover .chevron-colored,
.nav-link:focus .chevron-colored,
.nav-link.active .chevron-colored,
.router-link-exact-active .chevron-colored,
.chevron-colored.open {
  opacity: 1;
}

.chevron.open {
  transform: rotate(180deg);
}

.nav-link:hover .chevron,
.nav-link:focus .chevron,
.nav-link.active .chevron,
.router-link-exact-active .chevron {
  filter: none;
  /* Optionally, you can use a color filter if your SVG is black/gray:
     filter: invert(36%) sepia(95%) saturate(749%) hue-rotate(192deg) brightness(95%) contrast(101%);
     Or use a colored SVG if needed. */
}

.features-vertical-tab {
  background: none;
  border: none;
  text-align: left;
  padding: 8px 28px;
  color: #697586;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  width: 100%;
  box-sizing: border-box;
  display: block;
}

.features-vertical-tab.active,
.features-vertical-tab:hover {
  background: #f2f4f7;
  color: var(--clr-primary);
  font-weight: 600;
}

/* Content Area (Features) */
.features-dropdown-content-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  min-width: 0;
  justify-content: flex-start;
}

.features-dropdown-title-features {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #8a94a6;
  margin-left: 36px;
  margin-bottom: 12px;
}

.features-dropdown-content {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 32px;
  list-style: none;
  background: #fff;
  height: 100%;
  box-sizing: border-box;
  align-content: start;
  padding: 0 24px;
}

.button {
  transition: all 0.3s ease;
}

@media (max-width: 1199px) {
  .nav-item {
    margin-top: 8px;
  }
  
  /* Fix for mobile navbar */
  .navbar-collapse:not(.show) {
    display: none;
  }
  
  .navbar-collapse.show {
    display: block;
  }
  
  .container {
    width: 100%;
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  
  /* Align navbar links with logo */
  .navbar-nav {
    padding-left: 0;
    margin-top: 16px;
  }
  
  .nav-link {
    padding-left: 0;
  }
  
  /* Remove padding from dropdown items */
  .dropdown-item {
    padding-left: 0;
  }
  
  /* Increase bottom padding in mobile */
  .floating-navbar {
    padding-bottom: 16px;
  }
}

/* Fix for smaller screens (500px and below) */
@media (max-width: 500px) {
  .navbar-container {
    padding: 0 8px;
  }
  
  .container {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
  
  .floating-navbar {
    border-radius: 4px;
    width: 100%;
  }
  
  /* Remove padding from mobile menu items */
  .features-dropdown-content .dropdown-item,
  .features-vertical-tab {
    padding-left: 0;
  }

  .features-dropdown-mega {
    position: static;
    flex-direction: column;
    min-width: unset;
    max-width: unset;
    width: 100%;
    min-height: unset;
    left: unset;
    right: unset;
    transform: none;
    box-shadow: none;
    border-radius: 0;
    border: none;
  }

  .features-dropdown-sidebar {
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #eee;
    height: auto;
    align-items: flex-start;
  }

  .features-dropdown-content {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: auto;
    padding: 0px;
  }

  .features-dropdown-content-wrap {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .features-dropdown-title-features {
    display: none;
  }
}

@media (max-width: 768px) {
  .features-dropdown-content {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
