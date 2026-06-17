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
                <NuxtLink to="/integrations/google-sheets/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/google-sheets.png" alt="Google Sheets" width="18" height="18" /></span>
                  <span class="intg-item-name">Google Sheets</span>
                </NuxtLink>
                <NuxtLink to="/integrations/notion/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/notion.png" alt="Notion" width="18" height="18" /></span>
                  <span class="intg-item-name">Notion</span>
                </NuxtLink>
                <NuxtLink to="/integrations/google-drive/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/gdrive.png" alt="Google Drive" width="18" height="18" /></span>
                  <span class="intg-item-name">Google Drive</span>
                </NuxtLink>
              </div>
            </div>

            <div class="intg-group">
              <div class="intg-group-label">Communication</div>
              <div class="intg-grid">
                <NuxtLink to="/integrations/slack/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/slack.png" alt="Slack" width="18" height="18" /></span>
                  <span class="intg-item-name">Slack</span>
                </NuxtLink>
                <NuxtLink to="/integrations/gmail/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/gmail.svg" alt="Gmail" width="18" height="18" /></span>
                  <span class="intg-item-name">Gmail</span>
                </NuxtLink>
                <NuxtLink to="/integrations/outlook/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/ms_outlook.svg" alt="Outlook" width="18" height="18" /></span>
                  <span class="intg-item-name">Outlook</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="intg-groups-grid">
            <div class="intg-group">
              <div class="intg-group-label">CRM &amp; Sales</div>
              <div class="intg-grid">
                <NuxtLink to="/integrations/hubspot/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/hubspot.png" alt="HubSpot" width="18" height="18" /></span>
                  <span class="intg-item-name">HubSpot</span>
                </NuxtLink>
                <NuxtLink to="/integrations/monday/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/monday-com.svg" alt="Monday.com" width="18" height="18" /></span>
                  <span class="intg-item-name">Monday.com</span>
                </NuxtLink>
                <NuxtLink to="/integrations/gohighlevel/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/gohighlevel.svg" alt="GoHighLevel" width="18" height="18" /></span>
                  <span class="intg-item-name">GoHighLevel</span>
                </NuxtLink>
              </div>
            </div>

            <div class="intg-group">
              <div class="intg-group-label">Automation</div>
              <div class="intg-grid">
                <NuxtLink to="/integrations/zapier/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/zapier.svg" alt="Zapier" width="18" height="18" /></span>
                  <span class="intg-item-name">Zapier</span>
                </NuxtLink>
                <NuxtLink to="/integrations/n8n/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/n8n.png" alt="n8n" width="18" height="18" /></span>
                  <span class="intg-item-name">n8n</span>
                </NuxtLink>
                <NuxtLink to="/integrations/webhook/" class="intg-item" @click="$emit('dropdown-close')">
                  <span class="intg-icon"><nuxt-img src="/integrations/webhook.svg" alt="Webhooks" width="18" height="18" /></span>
                  <span class="intg-item-name">Webhooks</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="intg-divider"></div>
          <div class="intg-footer">
            <NuxtLink to="/integrations/" class="intg-all-link" @click="$emit('dropdown-close')">
              Browse all integrations
              <nuxt-img src="/arrow-right.svg" alt="" width="14" height="14" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'IntegrationsDropdown',
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

/* Mobile — must match the Navbar's mobile breakpoint (991px) so the floating
   desktop panel is used across the whole 992+ horizontal-nav range. */
@media (max-width: 991.98px) {
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
