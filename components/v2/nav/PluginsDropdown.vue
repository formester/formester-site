<template>
  <div class="dropdown-container">
    <transition :name="!isMobile ? 'dropdown' : 'mobile-dropdown'" appear>
      <div
        v-show="dropdownActive"
        class="plugins-dropdown"
        :class="{ active: dropdownActive, 'is-mobile': isMobile }"
        v-on="
          !isMobile
            ? { mouseenter: onDropdownMouseEnter, mouseleave: onDropdownMouseLeave }
            : {}
        "
      >
        <div class="dropdown-arrow" v-if="!isMobile"></div>
        <div class="plugins-list">
          <div class="plugins-group-label">Website Builders</div>

          <NuxtLink to="/plugins/wordpress/" class="plugin-item" @click="$emit('dropdown-close')">
            <span class="plugin-item__icon"><Wordpress :size="28" /></span>
            <span class="plugin-item__body">
              <span class="plugin-item__title">WordPress</span>
              <span class="plugin-item__desc">Embed forms on your WP site</span>
            </span>
          </NuxtLink>

          <NuxtLink to="/plugins/webflow/" class="plugin-item" @click="$emit('dropdown-close')">
            <span class="plugin-item__icon"><Webflow :size="28" /></span>
            <span class="plugin-item__body">
              <span class="plugin-item__title">Webflow</span>
              <span class="plugin-item__desc">Integrate with Webflow sites</span>
            </span>
          </NuxtLink>

          <NuxtLink to="/plugins/wix-forms/" class="plugin-item" @click="$emit('dropdown-close')">
            <span class="plugin-item__icon"><Wix :size="28" /></span>
            <span class="plugin-item__body">
              <span class="plugin-item__title">Wix</span>
              <span class="plugin-item__desc">Add forms to Wix websites</span>
            </span>
          </NuxtLink>

          <div class="plugins-divider"></div>
          <div class="plugins-group-label">Platforms</div>

          <NuxtLink to="/plugins/shopify-form-builder/" class="plugin-item" @click="$emit('dropdown-close')">
            <span class="plugin-item__icon"><Shopify :size="28" /></span>
            <span class="plugin-item__body">
              <span class="plugin-item__title">Shopify</span>
              <span class="plugin-item__desc">Forms for your Shopify store</span>
            </span>
          </NuxtLink>

          <NuxtLink to="/plugins/canva-form-builder/" class="plugin-item" @click="$emit('dropdown-close')">
            <span class="plugin-item__icon"><Canva :size="28" /></span>
            <span class="plugin-item__body">
              <span class="plugin-item__title">Canva</span>
              <span class="plugin-item__desc">Embed forms in Canva designs</span>
            </span>
          </NuxtLink>

          <NuxtLink to="/plugins/slack/" class="plugin-item" @click="$emit('dropdown-close')">
            <span class="plugin-item__icon">
              <nuxt-img src="/icons/slack.svg" alt="Slack" width="28" height="28" />
            </span>
            <span class="plugin-item__body">
              <span class="plugin-item__title">Slack</span>
              <span class="plugin-item__desc">Send form notifications to Slack</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Wordpress from '../../icons/Wordpress.vue'
import Webflow from '../../icons/Webflow.vue'
import Wix from '../../icons/Wix.vue'
import Shopify from '../../icons/Shopify.vue'
import Canva from '../../icons/Canva.vue'

export default {
  name: 'PluginsDropdown',
  components: { Wordpress, Webflow, Wix, Shopify, Canva },
  props: {
    dropdownActive: Boolean,
    isMobile: Boolean,
  },
  emits: ['mouseenter', 'mouseleave', 'dropdown-close'],
  methods: {
    onDropdownMouseEnter() { this.$emit('mouseenter') },
    onDropdownMouseLeave() { this.$emit('mouseleave') },
  },
}
</script>

<style scoped>
@keyframes slideDown {
  0%   { opacity: 0; transform: translateX(-50%) translateY(-8px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}
@keyframes slideUp {
  0%   { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-5px); }
}

.dropdown-enter-active { animation: slideDown 0.25s ease-out forwards; }
.dropdown-leave-active { animation: slideUp 0.1s ease-in forwards; }

.plugins-dropdown {
  width: 300px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(16, 30, 54, 0.08);
  border-radius: var(--r-lg);
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(0);
  z-index: 9999;
  border: 1px solid var(--border-light);
  overflow: visible;
}

.plugins-list {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
}

.plugins-group-label {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--fg-3);
  padding: 2px 16px 8px;
}

.plugins-divider {
  height: 1px;
  background: var(--border-light);
  margin: 4px 16px;
}

.plugin-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 16px;
  text-decoration: none;
  transition: background 0.12s;
}
.plugin-item:hover { background: var(--bg-violet-50); }

.plugin-item__icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plugin-item__body {
  display: flex;
  flex-direction: column;
}

.plugin-item__title {
  display: block;
  color: var(--fg-1);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  line-height: 1.4;
}

.plugin-item__desc {
  display: block;
  color: var(--fg-2);
  font-size: var(--fs-xs);
  line-height: 1.5;
}

.dropdown-arrow {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #fff;
  border-left: 1px solid var(--border-light);
  border-top: 1px solid var(--border-light);
  transform: rotate(45deg);
  top: -8px;
  left: 45%;
  z-index: 10000;
  box-shadow: -3px -3px 5px rgba(16, 30, 54, 0.02);
}

/* Mobile */
@media (max-width: 1199px) {
  .plugins-dropdown.is-mobile { overflow: hidden; }

  .mobile-dropdown-enter-active { animation: mobileSlideDown 0.5s ease-out forwards; }
  .mobile-dropdown-leave-active { animation: mobileSlideUp 0.2s ease-in forwards; }

  @keyframes mobileSlideDown {
    0%   { opacity: 0; max-height: 0; }
    20%  { opacity: 1; max-height: 0; }
    100% { opacity: 1; max-height: 2000px; }
  }
  @keyframes mobileSlideUp {
    0%   { opacity: 1; max-height: 2000px; }
    80%  { opacity: 0; max-height: 0; }
    100% { opacity: 0; max-height: 0; }
  }

  .dropdown-enter-active,
  .dropdown-leave-active { animation: none !important; }

  .plugins-dropdown {
    position: static;
    min-width: unset;
    max-width: unset;
    width: 100%;
    left: unset;
    transform: none;
    box-shadow: none;
    border-radius: 0;
    border: none;
  }
}
</style>
