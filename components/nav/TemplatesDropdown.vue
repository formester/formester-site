<template>
  <div class="dropdown-container">
    <transition
      :name="!isMobile ? 'dropdown' : 'mobile-dropdown'"
      appear
    >
      <div
        v-show="dropdownActive"
        class="templates-dropdown-mega"
        :class="{ active: dropdownActive, 'is-mobile': isMobile }"
        v-on="!isMobile ? { mouseenter: onDropdownMouseEnter, mouseleave: onDropdownMouseLeave } : {}"
      >
        <div class="templates-dropdown-content-wrap">
          <div class="templates-dropdown-columns">
            <!-- Forms Column -->
            <div class="templates-dropdown-column">
              <div class="templates-dropdown-title">
                <span class="templates-dropdown-icon">
                  <nuxt-img src="/form-icon.svg" alt="Forms" width="20" height="20" />
                </span>
                Forms
              </div>
              <ul class="templates-dropdown-list">
                <li v-for="item in formsTemplates" :key="item.id" @click="$emit('dropdown-close')">
                  <NuxtLink :to="item.slug" class="templates-dropdown-link">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            
            <!-- Surveys Column -->
            <div class="templates-dropdown-column">
              <div class="templates-dropdown-title">
                <span class="templates-dropdown-icon">
                  <nuxt-img src="/survey-icon.svg" alt="Surveys" width="20" height="20" />
                </span>
                Surveys
              </div>
              <ul class="templates-dropdown-list">
                <li v-for="item in surveysTemplates" :key="item.id" @click="$emit('dropdown-close')">
                  <NuxtLink :to="item.slug" class="templates-dropdown-link">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            
            <!-- Quizzes Column -->
            <div class="templates-dropdown-column">
              <div class="templates-dropdown-title">
                <span class="templates-dropdown-icon">
                  <nuxt-img src="/quiz-icon.svg" alt="Quizzes" width="20" height="20" />
                </span>
                Quizzes
              </div>
              <ul class="templates-dropdown-list">
                <li v-for="item in quizzesTemplates" :key="item.id" @click="$emit('dropdown-close')">
                  <NuxtLink :to="item.slug" class="templates-dropdown-link">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="templates-dropdown-footer">
            <NuxtLink to="/templates/" class="templates-dropdown-all" @click="$emit('dropdown-close')">
              Explore all templates →
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TemplatesDropdown',
  props: {
    dropdownActive: Boolean,
    isMobile: Boolean,
  },
  data() {
    return {
      formsTemplates: [
        { id: 1, title: 'Application forms', slug: '/templates/application-forms/' },
        { id: 2, title: 'Booking forms', slug: '/templates/booking-forms/' },
        { id: 3, title: 'Contact forms', slug: '/templates/contact-forms/' },
        { id: 4, title: 'Consent forms', slug: '/templates/consent-forms/' },
        { id: 5, title: 'Payment forms', slug: '/templates/payment-forms/' },
        { id: 6, title: 'Registration forms', slug: '/templates/registration-forms/' },
      ],
      surveysTemplates: [
        { id: 1, title: 'Customer satisfaction surveys', slug: '/templates/customer-satisfaction-surveys/' },
        { id: 2, title: 'Employee Satisfaction Surveys', slug: '/templates/employee-satisfaction-surveys/' },
        { id: 3, title: 'Feedback Surveys', slug: '/templates/feedback-surveys/' },
        { id: 4, title: 'Marketing Surveys', slug: '/templates/marketing-surveys/' },
        { id: 5, title: 'Product Surveys', slug: '/templates/product-surveys/' },
        { id: 6, title: 'Research Surveys', slug: '/templates/research-surveys/' },
      ],
      quizzesTemplates: [
        { id: 1, title: 'Personality Quiz', slug: '/templates/personality-quiz/' },
        { id: 2, title: 'General Knowledge Quiz', slug: '/templates/general-knowledge-quiz/' },
        { id: 3, title: 'Vocabulary Quiz', slug: '/templates/vocabulary-quiz/' },
        { id: 4, title: 'Trivia Quiz', slug: '/templates/trivia-quiz/' },
        { id: 5, title: 'Science Quiz', slug: '/templates/science-quiz/' },
        { id: 6, title: 'Webinar Quiz', slug: '/templates/webinar-quiz/' },
      ]
    }
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

<style scoped>
/* Transition Effects */
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes slideUp {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-5px);
  }
}

.dropdown-enter-active {
  animation: slideDown 0.25s ease-out forwards;
}

.dropdown-leave-active {
  animation: slideUp 0.2s ease-in forwards;
}

/* Templates Mega Dropdown */
.templates-dropdown-mega {
  display: flex;
  width: 800px;
  min-width: 800px;
  max-width: 800px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(16, 30, 54, 0.08);
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(0px);
  z-index: 9999;
  border: 1px solid #eaecf0;
  overflow: hidden;
}

.templates-dropdown-content-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
}

.templates-dropdown-columns {
  display: flex;
  gap: 40px;
  width: 100%;
}

.templates-dropdown-column {
  flex: 1;
}

.templates-dropdown-title {
  font-size: 14px;
  font-weight: 500;
  color: #8a94a6;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.templates-dropdown-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.templates-dropdown-title-icon {
  width: 20px;
  height: 20px;
}

.templates-dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.templates-dropdown-link {
  color: var(--clr-text-primary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  display: block;
}

.templates-dropdown-link:hover {
  color: var(--clr-primary);
}

.templates-dropdown-footer {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #eaecf0;
  display: flex;
  justify-content: center;
}

.templates-dropdown-all {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--clr-primary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.templates-dropdown-all:hover {
  text-decoration: underline;
  transition: all 0.2s ease;
}

.arrow-icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 1199px) {
  /* Mobile specific styles */
  .templates-dropdown-mega.is-mobile {
    overflow: hidden;
  }
  
  /* Mobile transitions */
  .mobile-dropdown-enter-active {
    animation: mobileSlideDown 0.5s ease-out forwards;
  }
  
  .mobile-dropdown-leave-active {
    animation: mobileSlideUp 0.3s ease-in forwards;
  }
  
  @keyframes mobileSlideDown {
    0% {
      opacity: 0;
      max-height: 0;
    }
    20% {
      opacity: 1;
      max-height: 0;
    }
    100% {
      opacity: 1;
      max-height: 2000px;
    }
  }
  
  @keyframes mobileSlideUp {
    0% {
      opacity: 1;
      max-height: 2000px;
    }
    80% {
      opacity: 0;
      max-height: 0;
    }
    100% {
      opacity: 0;
      max-height: 0;
    }
  }
  
  /* Override desktop animations for mobile */
  .dropdown-enter-active,
  .dropdown-leave-active {
    animation: none !important;
  }
  
  @keyframes slideDown {
    from, to {
      opacity: 1;
      transform: none;
    }
  }
  
  @keyframes slideUp {
    from, to {
      opacity: 1;
      transform: none;
    }
  }
  
  .templates-dropdown-mega {
    position: static;
    flex-direction: column;
    min-width: unset;
    max-width: unset;
    width: 100%;
    min-height: unset;
    left: unset;
    right: unset;
    transform: none;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    box-shadow: none;
    border-radius: 0;
    border: none;
  }
  
  .templates-dropdown-content-wrap {
    padding: 16px;
  }
  
  .templates-dropdown-columns {
    flex-direction: column;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .templates-dropdown-columns {
    gap: 16px;
  }
  
  .templates-dropdown-list {
    gap: 8px;
  }
}
</style>
