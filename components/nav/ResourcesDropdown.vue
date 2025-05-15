<template>
  <div
    class="resources-dropdown-mega"
    :class="{ active: dropdownActive }"
    v-show="dropdownActive"
    v-on="
      !isMobile
        ? { mouseenter: onDropdownMouseEnter, mouseleave: onDropdownMouseLeave }
        : {}
    "
  >
    <div class="resources-dropdown-content-wrap">
      <ul class="resources-dropdown-content">
        <li
          v-for="resource in resourcesList"
          :key="resource.id"
          @click="$emit('dropdown-close')"
        >
          <NuxtLink
            class="resource-dropdown-item d-flex align-items-center"
            :to="`/${resource.slug}/`"
            @click="collapseNav"
          >
            <nuxt-img
              :src="resource.imageUrl"
              :alt="resource.imageAlt"
              class="resource-dropdown-item__img"
            />
            <div class="d-flex flex-column">
              <span class="resource-dropdown-item__title">{{ resource.title }}</span>
              <span class="resource-dropdown-item__desc">{{ resource.description }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesDropdown',
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
    collapseNav() {
      if (window.screen.width >= 992) return
      const bsCollapse = new bootstrap.Collapse(this.$refs.siteNav)
      bsCollapse.toggle()
    },
  },
}
</script>

<style scoped>
.resources-dropdown-mega {
  display: flex;
  width: auto;
  min-width: 300px;
  max-width: 300px;
  height: auto;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(16, 30, 54, 0.08);
  border-radius: 8px;
  position: absolute;
  top: 100%;
  transform: translateY(4px) translateX(-50%);
  left: 50%;
  z-index: 9999;
  border: 1px solid #eaecf0;
  align-items: stretch;
  overflow: hidden;
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

@media (max-width: 768px) {
  .resources-dropdown-content {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Resource Dropdown Item Styles */
.resource-dropdown-item {
  padding: 10px 16px;
  gap: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.resource-dropdown-item:hover {
  background: #f9fafb;
}

.resource-dropdown-item__title {
  color: var(--clr-text-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
}

.resource-dropdown-item__desc {
  color: var(--clr-text-secondary);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.resource-dropdown-item__img {
  height: 24px;
  width: 24px;
}

@media (max-width: 992px) {
  .resource-dropdown-item {
    padding: 8px;
  }
}
</style>
