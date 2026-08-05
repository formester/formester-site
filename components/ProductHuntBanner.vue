<template>
  <div class="ph-banner">
    <a
      class="ph-banner__link"
      href="https://www.producthunt.com/products/formester?launch=formester-2-0"
      target="_blank"
      rel="noopener"
      @click="trackClick"
    >
      <IconsIconProductHunt :size="22" mark-color="#ffffff" letter-color="#DA552F" />
      <span class="ph-banner__text">
        <strong>We're live on Product Hunt!</strong>
        <span class="ph-banner__sub">Formester 2.0 just launched — your upvote means a lot.</span>
      </span>
      <span class="ph-banner__cta">
        Support us
        <IconsIconArrowRight :size="16" />
      </span>
    </a>

    <button
      type="button"
      class="ph-banner__close"
      aria-label="Dismiss Product Hunt banner"
      @click="$emit('dismiss')"
    >
      <IconsCloseIcon :size="14" />
    </button>
  </div>
</template>

<script setup>
defineEmits(['dismiss'])

const trackClick = () => {
  if (typeof window !== 'undefined' && window.__trackingEnabled && window.dataLayer) {
    window.dataLayer.push({ event: 'product_hunt_banner_click', launch: 'formester-2-0' })
  }
}
</script>

<style scoped>
.ph-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1040;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--banner-h);
  padding: 8px 44px 8px 16px;
  background: linear-gradient(90deg, #da552f 0%, #ff6154 55%, #ff8a5b 100%);
  color: #fff;
}

.ph-banner__link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
  line-height: 1.3;
}

.ph-banner__text {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
}

.ph-banner__sub {
  opacity: 0.9;
}

.ph-banner__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 5px 12px;
  border-radius: 100px;
  background: #fff;
  color: #da552f;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.ph-banner__link:hover .ph-banner__cta {
  transform: translateX(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}

.ph-banner__close {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  cursor: pointer;
}

.ph-banner__close:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media screen and (max-width: 991px) {
  .ph-banner__sub {
    display: none;
  }
}

@media screen and (max-width: 575px) {
  .ph-banner {
    padding: 8px 40px 8px 12px;
  }

  .ph-banner__link {
    gap: 8px;
  }

  .ph-banner__text {
    font-size: 13px;
  }

  .ph-banner__cta {
    padding: 4px 10px;
    font-size: 13px;
  }
}
</style>
