<template>
  <div
    class="features-dropdown-mega"
    :class="{ active: dropdownActive }"
    v-show="dropdownActive"
    v-on="!isMobile ? { mouseenter: onDropdownMouseEnter, mouseleave: onDropdownMouseLeave } : {}"
  >
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
          @mouseenter="activeFeatureCategory = category"
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
            @click="!isMobile && (dropdownActive = false)"
          >
            <DropdownItem
              :title="dropdownItem.title"
              :description="dropdownItem.description"
              :imageUrl="dropdownItem.imageUrl"
              :imageAlt="dropdownItem.imageAlt"
              :slug="dropdownItem.slug"
            />
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <!-- Mobile: Flat list of all features, no categories -->
      <div class="features-dropdown-content-wrap" style="width:100%">
        <div class="features-dropdown-title-features">Features</div>
        <ul class="features-dropdown-content">
          <li
            v-for="dropdownItem in dropdownItems"
            :key="dropdownItem.id"
            @click="!isMobile && (dropdownActive = false)"
          >
            <DropdownItem
              :title="dropdownItem.title"
              :description="dropdownItem.description"
              :imageUrl="dropdownItem.imageUrl"
              :imageAlt="dropdownItem.imageAlt"
              :slug="dropdownItem.slug"
            />
          </li>
        </ul>
      </div>
    </template>
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
    }
  }
}
</script>
