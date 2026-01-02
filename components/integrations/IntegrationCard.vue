<template>
  <div 
    class="integration-card-slim" 
    :class="{ 'clickable': getLink(app) }"
    @click="handleCardClick"
  >
    <div class="card-inner">
      <div class="icon-wrapper">
        <div class="icon-glow"></div>
        <nuxt-img 
          :src="getImgUrl(app)" 
          :alt="app.name"
          class="app-icon"
        />
      </div>
      
      <div class="card-content">
        <h4 class="app-name">{{ app.name }}</h4>
        <p class="app-description">{{ app.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['app'],
  methods: {
    handleCardClick() {
      const link = this.getLink(this.app)
      if (!link) return

      if (link.startsWith('http')) {
        // External link - open in new tab
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        // Internal route navigation
        this.$router.push(link);
      }
    },
    getImgUrl(app) {
      if (app.icon?.image?.url || app.icon?.imageUrl) {
        return app.icon.image?.url || app.icon.imageUrl
      }
      if (app.image?.url || app.imageUrl) {
        return app.image?.url || app.imageUrl
      }
      if (app.img) {
        return `/integrations/${app.img}`
      }
      return ''
    },
    getLink(app) {
      return app.url || app.helpArticle || app.link
    }
  }
}
</script>

<style scoped>
.integration-card-slim {
  position: relative;
  border-radius: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid rgba(100, 52, 208, 0.1);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.integration-card-slim::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(100, 52, 208, 0.05) 0%, rgba(100, 52, 208, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.integration-card-slim.clickable {
  cursor: pointer;
}

.integration-card-slim:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 24px rgba(100, 52, 208, 0.12),
    0 0 0 1px rgba(100, 52, 208, 0.15);
  border-color: rgba(100, 52, 208, 0.25);
}

.integration-card-slim:hover::before {
  opacity: 1;
}

.card-inner {
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.icon-wrapper {
  position: relative;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 12px;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(100, 52, 208, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.integration-card-slim:hover .icon-wrapper {
  transform: scale(1.05);
  box-shadow: 
    0 6px 12px rgba(100, 52, 208, 0.12),
    0 0 0 1px rgba(100, 52, 208, 0.15);
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(100, 52, 208, 0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.integration-card-slim:hover .icon-glow {
  opacity: 1;
}

.app-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.integration-card-slim:hover .app-icon {
  transform: scale(1.1);
}

.card-content {
  flex: 1;
  min-width: 0;
}

.app-name {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: #1e293b;
  margin: 0 0 4px 0;
  transition: color 0.3s ease;
}

.integration-card-slim:hover .app-name {
  color: #6434D0;
}

.app-description {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #64748b;
  margin: 0;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.integration-card-slim:hover .app-description {
  color: #475569;
}

.integration-card-slim:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}

.arrow-icon svg {
  transition: transform 0.3s ease;
}

.integration-card-slim:hover .arrow-icon svg {
  transform: translateX(4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-inner {
    padding: 16px 20px;
    gap: 12px;
  }
  
  .icon-wrapper {
    width: 48px;
    height: 48px;
  }
  
  .app-icon {
    width: 28px;
    height: 28px;
  }
  
  .app-name {
    font-size: 1rem;
  }
  
  .app-description {
    font-size: 0.8125rem;
  }
  
  .arrow-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
