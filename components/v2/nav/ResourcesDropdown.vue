<template>
  <div class="dropdown-container">
    <transition :name="!isMobile ? 'dropdown' : 'mobile-dropdown'" appear>
      <div
        v-show="dropdownActive"
        class="resources-dropdown-mega"
        :class="{ active: dropdownActive, 'is-mobile': isMobile }"
        v-on="
          !isMobile
            ? {
                mouseenter: onDropdownMouseEnter,
                mouseleave: onDropdownMouseLeave,
              }
            : {}
        "
      >
        <div class="dropdown-arrow" v-if="!isMobile"></div>
        <div class="resources-dropdown-content-wrap">
          <ul class="resources-dropdown-content">
            <li v-for="resource in resourcesList" :key="resource.id">
              <a
                v-if="resource.href"
                class="resource-dropdown-item d-flex align-items-center"
                :href="resource.href"
                target="_blank"
                rel="noopener noreferrer"
                @click="$emit('dropdown-close')"
              >
                <ResourceDropdownItem
                  :title="resource.title"
                  :description="resource.description"
                  :imageUrl="resource.imageUrl"
                  :imageAlt="resource.imageAlt"
                />
              </a>
              <NuxtLink
                v-else
                class="resource-dropdown-item d-flex align-items-center"
                :to="`/${resource.slug}/`"
                @click="$emit('dropdown-close')"
              >
                <ResourceDropdownItem
                  :title="resource.title"
                  :description="resource.description"
                  :imageUrl="resource.imageUrl"
                  :imageAlt="resource.imageAlt"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ResourceDropdownItem from './ResourceDropdownItem.vue'

export default {
  name: 'ResourcesDropdown',
  components: { ResourceDropdownItem },
  props: {
    dropdownActive: Boolean,
    isMobile: Boolean,
    resourcesList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDropdownMouseEnter() {
      this.$emit('mouseenter')
    },
    onDropdownMouseLeave() {
      this.$emit('mouseleave')
    },
  },
}
</script>

<style scoped>
/* Transition Effects */
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes slideUp {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-5px);
  }
}

.dropdown-enter-active {
  animation: slideDown 0.25s ease-out forwards;
}

.dropdown-leave-active {
  animation: slideUp 0.1s ease-in forwards;
}

.resources-dropdown-mega {
  display: flex;
  width: auto;
  min-width: 300px;
  max-width: 300px;
  height: auto;
  background: #fff;
  box-shadow: 0 16px 48px -12px rgba(16, 24, 40, 0.18), 0 4px 16px -4px rgba(16, 24, 40, 0.08);
  border-radius: 14px;
  position: absolute;
  top: 100%;
  transform: translateY(4px) translateX(-50%);
  left: 50%;
  z-index: 9999;
  border: 1px solid #eaecf0;
  align-items: stretch;
  overflow: visible;
}

.resources-dropdown-content-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-bottom: 12px;
  min-width: 0;
  justify-content: flex-start;
}

.resources-dropdown-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--clr-text-primary);
}

.resources-dropdown-content {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4px;
  list-style: none;
  background: #fff;
  height: 100%;
  box-sizing: border-box;
  align-content: start;
  padding: 0;
}

@media (max-width: 1199px) {
  /* Mobile specific styles */
  .resources-dropdown-mega.is-mobile {
    overflow: hidden;
  }

  /* Mobile transitions */
  .mobile-dropdown-enter-active {
    animation: mobileSlideDown 0.5s ease-out forwards;
  }

  .mobile-dropdown-leave-active {
    animation: mobileSlideUp 0.2s ease-in forwards;
  }

  @keyframes mobileSlideDown {
    0% {
      opacity: 0;
      max-height: 0;
    }
    20% {
      opacity: 1;
      max-height: 0;
    }
    100% {
      opacity: 1;
      max-height: 2000px;
    }
  }

  @keyframes mobileSlideUp {
    0% {
      opacity: 1;
      max-height: 2000px;
    }
    80% {
      opacity: 0;
      max-height: 0;
    }
    100% {
      opacity: 0;
      max-height: 0;
    }
  }

  /* Override desktop animations for mobile */
  .dropdown-enter-active,
  .dropdown-leave-active {
    animation: none !important;
  }

  @keyframes slideDown {
    from,
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes slideUp {
    from,
    to {
      opacity: 1;
      transform: none;
    }
  }

  .resources-dropdown-mega {
    position: static;
    flex-direction: column;
    min-width: unset;
    max-width: unset;
    width: 100%;
    min-height: unset;
    left: unset;
    right: unset;
    transform: none;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    box-shadow: none;
    border-radius: 0;
    border: none;
  }

  .resources-dropdown-content {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: auto;
    padding: 0px;
  }

  .resources-dropdown-content-wrap {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}

.dropdown-arrow {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #fff;
  border-left: 1px solid #eaecf0;
  border-top: 1px solid #eaecf0;
  transform: rotate(45deg);
  top: -8px;
  left: 45%;
  z-index: 10000;
  box-shadow: -3px -3px 5px rgba(16, 30, 54, 0.02);
}

@media (max-width: 767px) {
  .resources-dropdown-content {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Resource Dropdown Item Styles */
.resource-dropdown-item {
  padding: 10px 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.resource-dropdown-item:hover {
  background: #f9fafb;
}

@media (max-width: 767px) {
  .resource-dropdown-item {
    padding: 8px;
  }
}
</style>
