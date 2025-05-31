<template>
  <div class="dropdown-container">
    <transition :name="!isMobile ? 'dropdown' : 'mobile-dropdown'" appear>
      <div
        v-show="dropdownActive"
        class="features-dropdown-mega"
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
              @mouseenter="$emit('category-change', category)"
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
                @click="$emit('dropdown-close')"
              >
                <DropdownItem
                  :title="dropdownItem.title"
                  :description="dropdownItem.description"
                  :imageUrl="dropdownItem.imageUrl"
                  :imageAlt="dropdownItem.imageAlt"
                  :slug="dropdownItem.slug"
                  :featurePlan="dropdownItem.featurePlan"
                />
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <!-- Mobile: Flat list of all features, no categories -->
          <div class="features-dropdown-content-wrap" style="width: 100%">
            <div class="features-dropdown-title-features">Features</div>
            <ul class="features-dropdown-content">
              <li
                v-for="dropdownItem in dropdownItems"
                :key="dropdownItem.id"
                @click="$emit('dropdown-close')"
              >
                <DropdownItem
                  :title="dropdownItem.title"
                  :description="dropdownItem.description"
                  :imageUrl="dropdownItem.imageUrl"
                  :imageAlt="dropdownItem.imageAlt"
                  :slug="dropdownItem.slug"
                  :featurePlan="dropdownItem.featurePlan"
                />
              </li>
            </ul>
          </div>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import DropdownItem from './DropdownItem.vue'

export default {
  name: 'FeaturesDropdown',
  components: {
    DropdownItem,
  },
  props: {
    dropdownActive: Boolean,
    isMobile: Boolean,
    featureCategories: Array,
    activeFeatureCategory: String,
    dropdownItems: Array,
    filteredDropdownItems: Array,
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
/* ---------- Features Mega Dropdown ---------- */
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

.features-dropdown-mega {
  display: flex;
  width: 900px;
  min-width: 900px;
  max-width: 900px;
  min-height: 340px;
  background: #fff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  will-change: transform, opacity;
  border-radius: 8px;
  position: absolute;
  left: 40%;
  top: 100%;
  transform: translateX(-50%) translateY(0px);
  z-index: 9999;
  border: 1px solid #eaecf0;
  align-items: stretch;
  overflow: visible;
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
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.features-dropdown-title-category {
  font-size: 14px;
  font-weight: 500;
  color: #8a94a6;
  margin-left: 24px;
  margin-bottom: 12px;
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
  font-size: 14px;
  font-weight: 500;
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

.dropdown-arrow {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #fff;
  border-left: 1px solid #eaecf0;
  border-top: 1px solid #eaecf0;
  transform: rotate(45deg);
  top: -8px;
  left: 36%;
  z-index: 10000;
  box-shadow: -3px -3px 5px rgba(16, 30, 54, 0.02);
}

@media (max-width: 1199px) {
  /* Mobile specific styles */
  .features-dropdown-mega.is-mobile {
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
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  }

  .features-dropdown-sidebar {
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #eee;
    height: auto;
    align-items: flex-start;
    border-radius: 0;
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
