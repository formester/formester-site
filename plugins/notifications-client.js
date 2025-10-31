// Simple toast notification system for Nuxt 3
export default defineNuxtPlugin((nuxtApp) => {
  const notify = (options) => {
    if (typeof options === 'string') {
      options = { text: options, type: 'info' }
    }
    
    const { text, type = 'info', duration = 3000 } = options
    
    // Create toast element
    const toast = document.createElement('div')
    toast.className = `toast-notification toast-${type}`
    toast.textContent = text || options.title || 'Notification'
    
    // Add styles if not already added
    if (!document.getElementById('toast-styles')) {
      const style = document.createElement('style')
      style.id = 'toast-styles'
      style.textContent = `
        .toast-notification {
          position: fixed;
          top: 24px;
          right: 24px;
          padding: 16px 24px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          font-size: 14px;
          font-weight: 500;
          animation: slideIn 0.3s ease-out;
          max-width: 400px;
          border-left: 4px solid #6434d0;
        }
        
        .toast-success {
          border-left-color: #10b981;
          color: #065f46;
        }
        
        .toast-error {
          border-left-color: #ef4444;
          color: #991b1b;
        }
        
        .toast-info {
          border-left-color: #3b82f6;
          color: #1e40af;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .toast-notification {
            top: 16px;
            right: 16px;
            left: 16px;
            max-width: none;
          }
        }
      `
      document.head.appendChild(style)
    }
    
    // Add to DOM
    document.body.appendChild(toast)
    
    // Remove after duration
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-out'
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast)
        }
      }, 300)
    }, duration)
  }

  return {
    provide: {
      notify
    }
  }
})