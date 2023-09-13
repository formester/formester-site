<template>
  <NuxtLink
    class="dropdown-item d-flex align-items-center"
    :to="`/features/${linkName}/`"
    @click="collapseNav"
  >
    <nuxt-img
      :src="`/nav-dropdown/${linkName}.png`"
      class="dropdown-item__img"
    />
    <div class="d-flex flex-column ms-3">
      <span class="dropdown-item__title">{{ title }}</span>
      <span class="dropdown-item__desc">{{ description }}</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linkName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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
.dropdown-item {
  padding: 12px;
  border-radius: 8px;
}

.dropdown-item:hover {
  background: #f9f9f9;
}

.dropdown-item__title {
  color: var(#171717);
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
}

.dropdown-item__desc {
  color: #5d5d5d !important;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
}

.dropdown-item__img {
  height: 32px;
  width: 32px;
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
