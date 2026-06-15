<template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-lg floating-navbar">
      <div class="container d-flex align-items-center pr-3">
        <!-- Logo -->
        <NuxtLink class="navbar-brand-wrapper" to="/">
          <nuxt-img class="navbar-brand" src="/logo.svg" alt="Formester" width="175" height="24" />
        </NuxtLink>

        <!-- Mobile: auth buttons always visible beside hamburger -->
        <div class="nav-mobile-actions">
          <FButton href="https://app.formester.com/users/sign_in" variant="text" size="sm" class="nav-login-btn">Log in
          </FButton>
          <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation" @click="toggleNav">
            <nuxt-img src="/toggle.svg" alt="Nav-menu-button" width="24" height="24" />
          </button>
        </div>

        <!-- Navigation Menu -->
        <div class="collapse navbar-collapse" ref="siteNav" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto navbar-nav-scroll" style="--bs-scroll-height: calc(100vh - 54px)">
            <li class="nav-item dropdown me-2 position-static" :class="{ open: dropdownActive }"
              @mouseenter="!isMobile && onDropdownMouseEnter()" @mouseleave="!isMobile && onDropdownMouseLeave()">
              <template v-if="isMobile">
                <button class="nav-link" :class="{ active: dropdownActive || hoveringDropdown }" id="navbarDropdown"
                  type="button" @click="toggleDropdown">
                  Features
                  <span class="chevron-stack">
                    <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" alt="Chevron" width="24"
                      height="24" :class="{ open: dropdownActive }" />
                    <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored" alt="" width="24"
                      height="24" :class="{ open: dropdownActive }" />
                  </span>
                </button>
              </template>
              <template v-else>
                <button class="nav-link" :class="{ active: dropdownActive || hoveringDropdown }" id="navbarDropdown"
                  type="button" @click="toggleDropdown" @mouseenter="onDropdownMouseEnter"
                  @mouseleave="onDropdownMouseLeave" :aria-expanded="dropdownActive.toString()">
                  Features
                  <span class="chevron-stack">
                    <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" alt="Chevron" width="24"
                      height="24" :class="{ open: dropdownActive }" />
                    <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored" alt="" width="24"
                      height="24" :class="{ open: dropdownActive }" />
                  </span>
                </button>
              </template>

              <!-- Mega Dropdown using FeaturesDropdown component -->
              <FeaturesDropdown :dropdownActive="dropdownActive" :isMobile="isMobile"
                :activeFeatureCategory="activeFeatureCategory" @mouseenter="onDropdownMouseEnter"
                @mouseleave="onDropdownMouseLeave" @category-change="activeFeatureCategory = $event"
                @dropdown-close="handleDropdownClose" />
            </li>

            <li class="nav-item dropdown me-2 position-static" :class="{ open: templatesDropdownActive }"
              @mouseenter="!isMobile && onTemplatesDropdownMouseEnter()"
              @mouseleave="!isMobile && onTemplatesDropdownMouseLeave()">
              <template v-if="isMobile">
                <button class="nav-link" :class="{
                  active:
                    templatesDropdownActive || hoveringTemplatesDropdown,
                }" id="navbarTemplatesDropdown" type="button" @click="toggleTemplatesDropdown">
                  Templates
                  <span class="chevron-stack">
                    <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" alt="Chevron"
                      :class="{ open: templatesDropdownActive }" />
                    <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored"
                      :class="{ open: templatesDropdownActive }" />
                  </span>
                </button>
              </template>
              <template v-else>
                <button class="nav-link" :class="{
                  active:
                    templatesDropdownActive || hoveringTemplatesDropdown,
                }" id="navbarTemplatesDropdown" type="button" @click="toggleTemplatesDropdown"
                  @mouseenter="onTemplatesDropdownMouseEnter" @mouseleave="onTemplatesDropdownMouseLeave"
                  :aria-expanded="templatesDropdownActive.toString()">
                  Templates
                  <span class="chevron-stack">
                    <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" alt="Chevron"
                      :class="{ open: templatesDropdownActive }" />
                    <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored" alt="Chevron"
                      :class="{ open: templatesDropdownActive }" />
                  </span>
                </button>
              </template>

              <!-- Templates Dropdown Component -->
              <TemplatesDropdown :dropdownActive="templatesDropdownActive" :isMobile="isMobile"
                @mouseenter="onTemplatesDropdownMouseEnter" @mouseleave="onTemplatesDropdownMouseLeave"
                @dropdown-close="handleTemplatesDropdownClose" />
            </li>
            <li class="nav-item dropdown me-2 position-relative" :class="{ open: resourcesDropdownActive }"
              @mouseenter="!isMobile && onResourcesDropdownMouseEnter()"
              @mouseleave="!isMobile && onResourcesDropdownMouseLeave()">
              <template v-if="isMobile">
                <button class="nav-link" :class="{
                  active:
                    resourcesDropdownActive || hoveringResourcesDropdown,
                }" type="button" @click="toggleResourcesDropdown">
                  Resources
                  <span class="chevron-stack">
                    <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" alt="Chevron"
                      :class="{ open: resourcesDropdownActive }" />
                    <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored" alt="Chevron"
                      :class="{ open: resourcesDropdownActive }" />
                  </span>
                </button>
              </template>
              <template v-else>
                <button class="nav-link" :class="{
                  active:
                    resourcesDropdownActive || hoveringResourcesDropdown,
                }" type="button" @click="toggleResourcesDropdown" @mouseenter="onResourcesDropdownMouseEnter"
                  @mouseleave="onResourcesDropdownMouseLeave" :aria-expanded="resourcesDropdownActive.toString()">
                  Resources
                  <span class="chevron-stack">
                    <nuxt-img src="/chevron-down-gray.svg" class="chevron chevron-gray" alt="Chevron"
                      :class="{ open: resourcesDropdownActive }" />
                    <nuxt-img src="/chevron-down-colored.svg" class="chevron chevron-colored" alt="Chevron"
                      :class="{ open: resourcesDropdownActive }" />
                  </span>
                </button>
              </template>

              <!-- Resources Dropdown component -->
              <ResourcesDropdown :dropdownActive="resourcesDropdownActive" :isMobile="isMobile"
                :resourcesList="resourcesList" @mouseenter="onResourcesDropdownMouseEnter"
                @mouseleave="onResourcesDropdownMouseLeave" @dropdown-close="handleResourcesDropdownClose" />
            </li>
            <li class="nav-item me-2" @click="collapseNav">
              <NuxtLink to="/integrations/" class="nav-link">Integrations</NuxtLink>
            </li>
            <li class="nav-item me-2" @click="collapseNav">
              <NuxtLink to="/pricing/" class="nav-link">Pricing</NuxtLink>
            </li>
          </ul>

          <!-- Auth Buttons -->
          <div class="nav-auth">
            <FButton href="https://app.formester.com/users/sign_in" variant="text" size="md" @click="collapseNav">Log in
            </FButton>
            <FButton href="https://app.formester.com/users/sign_up" variant="primary" size="md" @click="collapseNav">
              Start free
            </FButton>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FButton from '@/components/UI/FButton.vue'
import FeaturesDropdown from './FeaturesDropdown.vue'
import ResourcesDropdown from './ResourcesDropdown.vue'
import TemplatesDropdown from './TemplatesDropdown.vue'

const siteNav = ref(null)

const dropdownActive = ref(false)
const hoveringDropdown = ref(false)
const templatesDropdownActive = ref(false)
const hoveringTemplatesDropdown = ref(false)
const resourcesDropdownActive = ref(false)
const hoveringResourcesDropdown = ref(false)
const isMobile = ref(false)
const activeFeatureCategory = ref('')

let dropdownTimer = null
let resourcesDropdownTimer = null
let bsCollapse = null

const resourcesList = [
  { id: 1, title: 'Compare',     description: 'Compare us with other form builders',  imageUrl: '/compare.svg',    imageAlt: 'Compare icon',     slug: 'comparison-tool' },
  { id: 2, title: 'Blogs',       description: 'Read our latest articles and guides',   imageUrl: '/blog.svg',       imageAlt: 'Blogs icon',        slug: 'blog' },
  { id: 3, title: 'Enterprise',  description: 'Solutions for large organizations',     imageUrl: '/enterprise.svg', imageAlt: 'Enterprise icon',   slug: 'enterprise' },
  { id: 4, title: 'API Docs',    description: 'Comprehensive API documentation',       imageUrl: '/api-docs.svg',   imageAlt: 'API Docs icon',     href: 'https://docs.formester.com/formester-api.html' },
  { id: 5, title: 'Help Center', description: 'Get help and support',                  imageUrl: '/support.svg',    imageAlt: 'Help Center icon',  href: 'https://help.formester.com/' },
]

const MOBILE_MQ = '(max-width: 991px)'

const checkIsMobile = () => {
  isMobile.value = window.matchMedia(MOBILE_MQ).matches
  if (!isMobile.value) dropdownActive.value = false
}

const ensureBsCollapse = () => {
  if (!bsCollapse && typeof window !== 'undefined' && window.bootstrap) {
    bsCollapse = new window.bootstrap.Collapse(siteNav.value, { toggle: false })
  }
  return bsCollapse
}

const toggleNav = () => {
  const c = ensureBsCollapse()
  if (c) c.toggle()
}

const collapseNav = () => {
  if (!window.matchMedia(MOBILE_MQ).matches) return
  const c = ensureBsCollapse()
  if (c) c.hide()
}

const toggleDropdown = () => {
  dropdownActive.value = !dropdownActive.value
  if (dropdownActive.value) {
    templatesDropdownActive.value = false
    resourcesDropdownActive.value = false
  }
}

const toggleTemplatesDropdown = () => {
  templatesDropdownActive.value = !templatesDropdownActive.value
  if (templatesDropdownActive.value) {
    dropdownActive.value = false
    resourcesDropdownActive.value = false
  }
}

const onDropdownMouseEnter = () => {
  if (dropdownTimer) { clearTimeout(dropdownTimer); dropdownTimer = null }
  dropdownActive.value = true
  hoveringDropdown.value = true
}

const onDropdownMouseLeave = () => {
  hoveringDropdown.value = false
  dropdownTimer = setTimeout(() => {
    if (!hoveringDropdown.value) dropdownActive.value = false
  }, 80)
}

const handleDropdownClose = () => {
  dropdownActive.value = false
  collapseNav()
}

const onTemplatesDropdownMouseEnter = () => {
  hoveringTemplatesDropdown.value = true
  if (dropdownActive.value) dropdownActive.value = false
  if (resourcesDropdownActive.value) resourcesDropdownActive.value = false
  templatesDropdownActive.value = true
}

const onTemplatesDropdownMouseLeave = () => {
  hoveringTemplatesDropdown.value = false
  setTimeout(() => {
    if (!hoveringTemplatesDropdown.value) templatesDropdownActive.value = false
  }, 80)
}

const handleTemplatesDropdownClose = () => {
  templatesDropdownActive.value = false
  collapseNav()
}

const toggleResourcesDropdown = () => {
  resourcesDropdownActive.value = !resourcesDropdownActive.value
  if (resourcesDropdownActive.value) {
    dropdownActive.value = false
    templatesDropdownActive.value = false
  }
}

const onResourcesDropdownMouseEnter = () => {
  hoveringResourcesDropdown.value = true
  clearTimeout(resourcesDropdownTimer)
  if (dropdownActive.value) dropdownActive.value = false
  resourcesDropdownActive.value = true
}

const onResourcesDropdownMouseLeave = () => {
  hoveringResourcesDropdown.value = false
  resourcesDropdownTimer = setTimeout(() => {
    if (!hoveringResourcesDropdown.value) resourcesDropdownActive.value = false
  }, 80)
}

const handleResourcesDropdownClose = () => {
  resourcesDropdownActive.value = false
  collapseNav()
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
  if (typeof window !== 'undefined' && window.bootstrap) {
    bsCollapse = new window.bootstrap.Collapse(siteNav.value, { toggle: false })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  top: 0;
}

.container {
  padding-left: 20px !important;
  padding-right: 12px !important;
}

.navbar-container {
  z-index: 1030;
  background: transparent;
  position: fixed;
  left: 0;
  right: 0;
  top: 12px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
}

.floating-navbar {
  border-radius: 100px;
  box-shadow: 0 4px 24px -4px rgba(16, 24, 40, 0.10), 0 1px 4px -1px rgba(16, 24, 40, 0.06);
  padding: 8px 0;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  transition: border-radius 0.2s ease;
}

/* When the mobile menu is open, the pill becomes a solid panel — glass is for
   the floating bar over content, not for a menu you need to read. */
.floating-navbar:has(.navbar-collapse.show) {
  border-radius: 16px;
  background: #fff;
  backdrop-filter: none;
}

nav {
  padding: 0.5em 0;
  z-index: 99999;
}

.navbar-brand-wrapper {
  height: 18px;
  align-items: center;
  display: flex;
}

.navbar-brand {
  height: 18px;
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
  font-size: 14px;
  font-weight: 500;
  color: #344054;
  border-bottom: none;
  transition: background 100ms ease, color 100ms ease;
  background: none;
  padding: 7px 11px;
  border-radius: 999px;
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
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 999px;
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
  background: white;
  border: 1px solid #d0d5dd;
  color: #344054;
}

.nav__outline__button:hover {
  background: #f9f8ff;
  border-color: #c7c4e8;
  color: #344054;
}

.nav__outline__button:hover {
  background: #f9f9f9;
}


/* Mobile Toggle */
.navbar-toggler {
  border: none;
  background: none;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
}

.navbar-toggler:focus,
.navbar-toggler:hover {
  border: none;
  outline: none;
  box-shadow: none;
  background: #f4f2ff;
}

/* Mobile actions wrapper (Start free + hamburger) */
.nav-mobile-actions {
  display: none;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

/* Desktop navbar styles (lg and up) */
@media (min-width: 992px) {
  .navbar-nav {
    padding-right: 16px;
  }

  /* Bootstrap .collapse sets visibility:collapse — reset it at desktop */
  .navbar-collapse {
    visibility: visible !important;
    display: flex !important;
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

.nav-auth {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
}

/* ---- Tablet + phones: keep floating pill, show hamburger ---- */
@media (max-width: 991px) {
  .nav-mobile-actions {
    display: flex;
  }

  .navbar-collapse:not(.show) {
    display: none !important;
    visibility: collapse !important;
  }

  .navbar-collapse.show {
    display: block !important;
    visibility: visible !important;
    border-top: 1px solid #f2f4f7;
    margin-top: 8px;
    padding-top: 8px;
    padding-bottom: 16px;
  }

  .navbar-nav {
    padding-left: 0;
    margin-top: 4px;
  }

  .nav-item {
    margin-top: 4px;
  }

  .nav-link {
    padding-left: var(--space-3);
  }

  .dropdown-item {
    padding-left: 0;
  }

  /* Auth buttons inside collapsed menu */
  .d-flex.flex-column {
    flex-direction: column !important;
    align-items: flex-start;
    padding-bottom: 8px;
  }

  /* Hide nav-auth in the bar — show it only inside the open collapsed menu */
  .nav-auth {
    display: none;
  }

  .navbar-collapse.show .nav-auth {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 0 4px;
    margin-left: 0;
  }

}

/* ---- Tablet + phones: collapsed menu renders the dropdown as an inline list ---- */
@media (max-width: 991px) {
  .navbar-container {
    padding: 0 12px;
  }

  .container {
    padding-left: 16px !important;
    padding-right: 12px !important;
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
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid #eee;
    height: auto;
    align-items: flex-start;
  }

  .features-dropdown-content {
    grid-template-columns: 1fr;
    width: 100%;
    height: auto;
    padding: 0;
  }

  .features-dropdown-content-wrap {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .features-dropdown-title-features {
    display: none;
  }
}
</style>
