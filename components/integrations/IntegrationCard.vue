<template>
  <div 
    class="integration-card" 
    :class="{ 'clickable': app.url || app.helpArticle }"
    @click="handleCardClick"
  >
    <div class="card-inner">
      <div class="icon-wrapper">
        <div class="icon-glow"></div>
        <nuxt-img 
          :src="`/integrations/${app.img}`" 
          :alt="app.name"
          class="app-icon"
        />
      </div>
      
      <div class="card-content">
        <div class="app-header">
          <h3 class="app-name">{{ app.name }}</h3>
        </div>
        
        <p class="app-description">{{ app.desc }}</p>
        
        <div v-if="app.url || app.helpArticle" class="explore-link">
          <span>{{ app.helpArticle ? 'Learn More' : 'Explore Integration' }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['app'],
  methods: {
    handleCardClick() {
      if (this.app.url) {
        // Internal route navigation
        this.$router.push(this.app.url);
      } else if (this.app.helpArticle) {
        // External link - open in new tab
        window.open(this.app.helpArticle, '_blank', 'noopener,noreferrer');
      }
    }
  }
}
</script>

<style scoped>
.integration-card {
  position: relative;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid rgba(100, 52, 208, 0.1);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.integration-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(100, 52, 208, 0.05) 0%, rgba(100, 52, 208, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.integration-card.clickable {
  cursor: pointer;
}

.integration-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(100, 52, 208, 0.15),
    0 0 0 1px rgba(100, 52, 208, 0.2),
    0 0 60px rgba(100, 52, 208, 0.1);
  border-color: rgba(100, 52, 208, 0.3);
}

.integration-card:hover::before {
  opacity: 1;
}

.card-inner {
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(100, 52, 208, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.integration-card:hover .icon-wrapper {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 
    0 12px 24px rgba(100, 52, 208, 0.15),
    0 0 0 1px rgba(100, 52, 208, 0.2);
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(100, 52, 208, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 16px;
}

.integration-card:hover .icon-glow {
  opacity: 1;
}

.app-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.integration-card:hover .app-icon {
  transform: scale(1.1);
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
}

.app-name {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #1e293b;
  margin: 0;
  transition: color 0.3s ease;
  flex: 1;
}

.integration-card:hover .app-name {
  color: #6434D0;
}

.app-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0 0 20px 0;
  flex: 1;
  transition: color 0.3s ease;
}

.integration-card:hover .app-description {
  color: #475569;
}

.explore-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #6434D0;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: auto;
}

.integration-card:hover .explore-link {
  opacity: 1;
  transform: translateY(0);
}

.explore-link svg {
  transition: transform 0.3s ease;
}

.integration-card:hover .explore-link svg {
  transform: translateX(4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-inner {
    padding: 24px;
  }
  
  .icon-wrapper {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }
  
  .app-icon {
    width: 40px;
    height: 40px;
  }
  
  .app-name {
    font-size: 1.25rem;
  }
  
  .app-description {
    font-size: 0.9rem;
  }
}
</style>
