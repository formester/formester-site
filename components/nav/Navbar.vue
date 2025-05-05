<template>
  <nav class="navbar navbar-expand-xl  sticky-top bg-white">
    <div class="container">
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
        class="collapse navbar-collapse mt-2"
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
  <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" :class="{ open: dropdownActive }" />
  <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored" :class="{ open: dropdownActive }" />
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
  <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" :class="{ open: dropdownActive }" />
  <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored" :class="{ open: dropdownActive }" />
</span>
              </button>
            </template>

            <!-- Mega Dropdown -->
            <div
              class="features-dropdown-mega"
              :class="{ active: dropdownActive }"
              v-show="dropdownActive"
              v-on="!isMobile ? { mouseenter: onDropdownMouseEnter, mouseleave: onDropdownMouseLeave } : {}"
            >
              <template v-if="!isMobile">
                <!-- Categories Sidebar -->
                <div class="features-dropdown-sidebar">
                  <div class="features-dropdown-title-category">Categories</div>
                  <button
                    v-for="category in featureCategories"
                    :key="category"
                    type="button"
                    :class="[
                      'features-vertical-tab',
                      { active: activeFeatureCategory === category },
                    ]"
                    @mouseenter="activeFeatureCategory = category"
                  >
                    {{ category }}
                  </button>
                </div>

                <!-- Features Content -->
                <div class="features-dropdown-content-wrap">
                  <div class="features-dropdown-title-features">Features</div>
                  <ul class="features-dropdown-content">
                    <li
                      v-for="dropdownItem in filteredDropdownItems"
                      :key="dropdownItem.id"
                      @click="!isMobile && (dropdownActive = false)"
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
                </div>
              </template>
              <template v-else>
                <!-- Mobile: Flat list of all features, no categories -->
                <div class="features-dropdown-content-wrap" style="width:100%">
                  <div class="features-dropdown-title-features">Features</div>
                  <ul class="features-dropdown-content">
                    <li
                      v-for="dropdownItem in dropdownItems"
                      :key="dropdownItem.id"
                      @click="!isMobile && (dropdownActive = false)"
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
                </div>
              </template>
            </div>
          </li>

          <!-- Regular Nav Items -->
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/pricing/" class="nav-link">Pricing</NuxtLink>
          </li>
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/blog/" class="nav-link">Blog</NuxtLink>
          </li>
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/templates/" class="nav-link">Templates</NuxtLink>
          </li>
          <li class="nav-item me-2" @click="collapseNav">
            <NuxtLink to="/integrations/" class="nav-link"
              >Integrations</NuxtLink
            >
          </li>
          <li class="nav-item me-3" @click="collapseNav">
            <NuxtLink to="/comparison-tool/" class="nav-link">Compare</NuxtLink>
          </li>

          <!-- Auth Buttons -->
          <div class="d-flex flex-column flex-lg-row">
            <a
              href="https://app.formester.com/users/sign_in"
              @click="collapseNav"
              class="mt-3 mt-lg-0"
            >
              <button type="button" class="button nav__outline__button">
                Login
              </button>
            </a>
            <a
              href="https://app.formester.com/users/sign_up"
              @click="collapseNav"
              class="mt-3 mt-lg-0 ms-lg-3"
            >
              <button type="button" class="button nav__button">Sign Up</button>
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
  name: 'NavNavbar',
  components: {
    NavItem,
    DropdownItem,
  },
  data() {
    return {
      dropdownActive: false,
      dropdownItems: [],
      featureCategories: [],
      activeFeatureCategory: '',
      dropdownCloseTimeout: null,
      isMobile: false,
      hoveringDropdown: false,
    }
  },
  computed: {
    /**
     * Filter dropdown items based on the active category
     */
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
      this.isMobile = window.innerWidth < 1200;
      if (!this.isMobile) {
        this.dropdownActive = false; // Reset dropdown state when switching to desktop
      }
    },
    toggleDropdown() {
      this.dropdownActive = !this.dropdownActive
      
    },
    /**
     * Toggle mobile navigation collapse
     */
    collapseNav() {
      if (window.screen.width >= 1200) return;
      const bsCollapse = new bootstrap.Collapse(this.$refs.siteNav);
      bsCollapse.toggle();
    },

    /**
     * Fetch features from API and organize by category
     */
    async getFeatures() {
      const {
        data: { data },
      } = await axios.get(`${process.env.strapiUrl}/api/features`, {
        params: {
          populate: 'deep',
          'sort[0]': 'id',
        },
      })

      // Map API data to dropdown items
      this.dropdownItems = data.map((item) => ({
        id: item.id,
        title: item.navTitle,
        description: item.navDescription,
        imageUrl: item.navIcon?.imageUrl || item.navIcon?.image.url,
        imageAlt: item.navIcon.imageAlt,
        slug: item.slug,
        featureCategory: item.featureCategory || 'Other',
      }))

      // Extract unique categories
      const categories = [
        ...new Set(this.dropdownItems.map((item) => item.featureCategory)),
      ]
      this.featureCategories = categories
      this.activeFeatureCategory = categories[0] || ''
    },

    /**
     * Handle mouse enter on dropdown - clear timeout and show dropdown
     */
    onDropdownMouseEnter() {
      if (this.dropdownCloseTimeout) {
        clearTimeout(this.dropdownCloseTimeout)
        this.dropdownCloseTimeout = null
      }
      this.dropdownActive = true
      this.hoveringDropdown = true
    },

    /**
     * Handle mouse leave on dropdown - set timeout to hide dropdown with delay
     */
    onDropdownMouseLeave() {
      this.hoveringDropdown = false
      this.dropdownCloseTimeout = setTimeout(() => {
        if (!this.hoveringDropdown) {
          this.dropdownActive = false
        }
      }, 200)
    },
  },
}
</script>

<style scoped>

nav {
  padding: 1em 0;
  z-index: 99999;
}

/* Nav Links */
.nav-link {
  font-size: 16px;
  font-weight: 500;
  color: #697586;
  border-bottom: none;
  transition: color 0.3s ease;
  background: none;
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
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
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
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s;
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



@media (max-width: 1199px) {


  .nav-item {
    margin-top: 8px;
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
