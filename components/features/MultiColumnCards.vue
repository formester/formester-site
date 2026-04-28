<template>
  <div class="multi-column-cards-section py-5">
    <div class="container">
      <div class="heading-wrapper mb-5">
        <SectionTitle v-if="Array.isArray(title) && title.length > 0" :heading="title" class="text-start m-0 p-0 custom-section-title" />
        <h2 v-else-if="title" class="section-title">{{ title }}</h2>
        <p v-if="description" class="section-description mt-3">{{ description }}</p>
      </div>

      <div class="row g-4">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="['col-12 col-md-6', Number(columns) === 4 ? 'col-lg-3' : 'col-lg-4']"
        >
          <div class="custom-card d-flex flex-column h-100">
            <div class="card-icon-wrapper mb-4">
              <nuxt-img
                v-if="getIconUrl(card)"
                :src="getIconUrl(card)"
                alt=""
                class="card-icon"
                loading="lazy"
              />
              <div v-else class="placeholder-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <h3 class="card-title mb-3">{{ card.title }}</h3>
            <p class="card-text flex-grow-1">{{ card.description }}</p>

            <div v-if="card.linkText" class="card-footer-link mt-4 pt-4">
              <a :href="card.linkUrl || '#'" class="d-flex align-items-center">
                {{ card.linkText }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
                  <path d="M3.33331 8H12.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiColumnCards',
  components: {
    SectionTitle: () => import('@/components/SectionTitle.vue')
  },
  props: {
    title: {
      type: [String, Array],
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    columns: {
      type: [Number, String],
      default: 3
    },
    cards: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getIconUrl(card) {
      if (card.iconUrl) return card.iconUrl;
      if (card.icon && card.icon.url) return card.icon.url;
      if (card.icon && card.icon.data && card.icon.data.attributes && card.icon.data.attributes.url) {
        return card.icon.data.attributes.url;
      }
      return null;
    }
  }
}
</script>

<style scoped>
.multi-column-cards-section {
  background-color: transparent;
}

.heading-wrapper {
  max-width: 800px;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  color: #111827;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

:deep(.custom-section-title) {
  text-align: left !important;
  font-size: 36px;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 18px;
  line-height: 1.6;
  color: #6b7280;
  margin-bottom: 0;
}

.custom-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid #f3f4f6;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.card-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: #f5f3ff;
  color: #8b5cf6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.placeholder-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
}

.card-text {
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 0;
}

.card-footer-link {
  border-top: 1px solid #f3f4f6;
}

.card-footer-link a {
  color: #6d28d9;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s;
}

.card-footer-link a:hover {
  color: #5b21b6;
}

@media screen and (max-width: 768px) {
  .section-title, :deep(.custom-section-title) {
    font-size: 28px;
  }
  .section-description {
    font-size: 16px;
  }
  .custom-card {
    padding: 24px;
  }
}
</style>
