<template>
  <div class="nav-dropdown-category">
    <div class="category-container">
      <h3 class="category-title">{{ title }}</h3>
      <div class="items-list">
        <DropdownItem
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :image-url="item.imageUrl"
          :image-alt="item.imageAlt"
          :slug="item.slug"
          @click="$emit('itemClick')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DropdownItem from './DropdownItem.vue'

export default {
  components: {
    DropdownItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        return items.every(item => 
          item.id && 
          item.title && 
          item.description && 
          item.imageUrl && 
          item.imageAlt && 
          item.link
        )
      }
    }
  },
  emits: ['itemClick']
}
</script>

<style scoped>
.nav-dropdown-category {
  width: 100%;
}


.category-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: #475467;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
  padding: 0 4px;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 1300px) {
  .dropdown-menu.active {
    padding-inline: 3vw;
  }
}

@media (max-width: 991px) {
  .category-container {
    padding: 12px 0;
  }

  .category-title {
    padding: 0 12px;
  }
}

@media (max-width: 640px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}
</style>
