<template>
  <NuxtLink
    class="dropdown-item d-flex align-items-center"
    :to="`/features/${slug}/`"
    @click="collapseNav"
  >
    <nuxt-img v-if="imageUrl" :src="imageUrl" :alt="imageAlt" class="dropdown-item__img" width="24" height="24" loading="lazy" />
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center gap-2">
        <span class="dropdown-item__title">{{ title }}</span>
        <div 
          v-if="featurePlan === 'Business'" 
          class="plan-icon-wrapper" 
          title="Available in Business Plan"
        >
          <img
            src="/assets/images/business.svg"
            alt="Business plan"
            class="plan-icon"
            width="20"
            height="20"
          />
        </div>
        <div 
          v-if="featurePlan === 'Personal'" 
          class="plan-icon-wrapper" 
          title="Available in Personal Plan"
        >
          <img
            src="/assets/images/personal.svg"
            alt="Personal plan"
            class="plan-icon"
            width="20"
            height="20"
          />
        </div>
      </div>
      <span class="dropdown-item__desc">{{ description }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  imageUrl:    { type: String, default: null },
  imageAlt:    { type: String, default: '' },
  slug:        { type: String, required: true },
  featurePlan: {
    type: String,
    default: null,
    validator: (value) => value === null || ['Business', 'Personal', 'Free'].includes(value),
  },
})

const collapseNav = () => {
  if (window.screen.width >= 1200) return
  // bootstrap is loaded globally via plugin
  if (typeof bootstrap !== 'undefined') {
    const siteNavEl = document.getElementById('navbarSupportedContent')
    if (siteNavEl) new bootstrap.Collapse(siteNavEl).toggle()
  }
}
</script>

<style>
.plan-icon {
  height: 16px;
  width: 16px;
}
.dropdown-item {
  padding: 12px;
  border-radius: 8px;
  gap: 12px;
}

.dropdown-item:hover {
  background: #f9fafb;
}

.dropdown-item__title {
  color: var(--clr-text-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
}

.dropdown-item__desc {
  color: var(--clr-text-secondary);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.dropdown-item__img {
  height: 24px;
  width: 24px;
}

.plan-icon-wrapper {
  display: inline-flex;
  position: relative;
  cursor: pointer;
}

.plan-icon {
  height: 20px;
  width: 20px;
}

@media (max-width: 767px) {
  .dropdown-item {
    padding: 8px;
  }

  .dropdown-menu .dropdown-item__title {
    font-size: 14px;
    font-weight: 400;
  }

  .dropdown-menu .dropdown-item__desc {
    display: none;
  }

  .dropdown-menu .dropdown-item__img {
    height: 24px;
    width: 24px;
  }
}
</style>
