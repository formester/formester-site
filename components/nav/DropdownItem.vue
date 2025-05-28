<template>
  <NuxtLink
    class="dropdown-item d-flex align-items-center"
    :to="`/features/${slug}/`"
    @click="collapseNav"
  >
    <nuxt-img :src="imageUrl" :alt="imageAlt" class="dropdown-item__img" />
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center gap-2">
        <span class="dropdown-item__title">{{ title }}</span>
        <div 
          v-if="featurePlan === 'Business'" 
          class="plan-icon-wrapper" 
          title="Available in Business Plan"
        >
          <img 
            src="assets/images/business.svg" 
            alt="Business plan"
            class="plan-icon"
          />
        </div>
        <div 
          v-if="featurePlan === 'Personal'" 
          class="plan-icon-wrapper" 
          title="Available in Personal Plan"
        >
          <img 
            src="assets/images/personal.svg" 
            alt="Personal plan"
            class="plan-icon"
          />
        </div>
      </div>
      <span class="dropdown-item__desc">{{ description }}</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    featurePlan: {
      type: String,
      required: false,
      default: null,
      validator: (value) => {
        return value === null || ['Business', 'Personal', 'Free'].includes(value)
      }
    },
  },
  methods: {
    collapseNav() {
      if (window.screen.width >= 992) return
      const bsCollapse = new bootstrap.Collapse(this.$refs.siteNav)
      bsCollapse.toggle()
    },
  },
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

@media (max-width: 992px) {
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
