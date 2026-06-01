<template>
  <div class="dropdown-container">
    <transition :name="!isMobile ? 'dropdown' : 'mobile-dropdown'" appear>
      <div
        v-show="dropdownActive"
        class="intg-dropdown"
        :class="{ active: dropdownActive, 'is-mobile': isMobile }"
        v-on="
          !isMobile
            ? { mouseenter: onDropdownMouseEnter, mouseleave: onDropdownMouseLeave }
            : {}
        "
      >
        <div class="dropdown-arrow" v-if="!isMobile"></div>
        <div class="intg-body">
          <div class="intg-groups-grid">
            <div class="intg-group">
              <div class="intg-group-label">Productivity</div>
              <div class="intg-grid">
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/googlesheets.svg" alt="Google Sheets" width="18" height="18" /></span>
                  <span class="intg-item-name">Google Sheets</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/notion.svg" alt="Notion" width="18" height="18" /></span>
                  <span class="intg-item-name">Notion</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/googledrive.svg" alt="Google Drive" width="18" height="18" /></span>
                  <span class="intg-item-name">Google Drive</span>
                </a>
              </div>
            </div>

            <div class="intg-group">
              <div class="intg-group-label">Communication</div>
              <div class="intg-grid">
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/slack.svg" alt="Slack" width="18" height="18" /></span>
                  <span class="intg-item-name">Slack</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/gmail.svg" alt="Gmail" width="18" height="18" /></span>
                  <span class="intg-item-name">Gmail</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/ms_outlook.svg" alt="Outlook" width="18" height="18" /></span>
                  <span class="intg-item-name">Outlook</span>
                </a>
              </div>
            </div>
          </div>

          <div class="intg-groups-grid">
            <div class="intg-group">
              <div class="intg-group-label">CRM &amp; Sales</div>
              <div class="intg-grid">
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/hubspot.svg" alt="HubSpot" width="18" height="18" /></span>
                  <span class="intg-item-name">HubSpot</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><MondayCom :size="18" /></span>
                  <span class="intg-item-name">Monday.com</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/icons/gohighlevel.png" alt="GoHighLevel" width="18" height="18" /></span>
                  <span class="intg-item-name">GoHighLevel</span>
                </a>
              </div>
            </div>

            <div class="intg-group">
              <div class="intg-group-label">Automation</div>
              <div class="intg-grid">
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><Zapier :size="18" /></span>
                  <span class="intg-item-name">Zapier</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><N8n :size="18" /></span>
                  <span class="intg-item-name">n8n</span>
                </a>
                <a href="/integrations/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><Webhooks :size="18" /></span>
                  <span class="intg-item-name">Webhooks</span>
                </a>
              </div>
            </div>
          </div>

          <div class="intg-divider"></div>
          <div class="intg-footer">
            <NuxtLink to="/integrations/" class="intg-all-link" @click="$emit('dropdown-close')">
              Browse all integrations
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MondayCom from '../../icons/MondayCom.vue'
import Zapier from '../../icons/Zapier.vue'
import Make from '../../icons/Make.vue'
import N8n from '../../icons/N8n.vue'
import Webhooks from '../../icons/Webhooks.vue'

export default {
  name: 'IntegrationsDropdown',
  components: { MondayCom, Zapier, Make, N8n, Webhooks },
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

.intg-dropdown {
  width: 480px;
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

.intg-body { padding: 0; }

.intg-groups-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 8px;
  padding: 16px 16px 4px;
}

.intg-group { padding: 0 4px 12px; }

.intg-group-label {
  font-size: var(--fs-tiny);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--fg-3);
  padding: 0 6px;
  margin-bottom: 4px;
}

.intg-grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.intg-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 8px;
  border-radius: var(--r-md);
  text-decoration: none;
  transition: background 0.12s;
}
.intg-item:hover { background: var(--bg-violet-50); }

.intg-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intg-item-name {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--fg-1);
  line-height: 1.3;
}

.intg-divider {
  height: 1px;
  background: var(--border-light);
  margin: 0 16px;
}

.intg-footer {
  padding: 10px 16px;
  display: flex;
  justify-content: center;
}

.intg-all-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--color-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  text-decoration: none;
}
.intg-all-link:hover { text-decoration: underline; }

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
  .intg-dropdown.is-mobile { overflow: hidden; }

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

  .intg-dropdown {
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

  .intg-groups-grid {
    grid-template-columns: 1fr;
  }
}
</style>
