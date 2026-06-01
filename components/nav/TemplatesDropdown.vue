<template>
  <div class="dropdown-container">
    <transition :name="!isMobile ? 'dropdown' : 'mobile-dropdown'" appear>
      <div
        v-show="dropdownActive"
        class="templates-dropdown-mega"
        :class="{ active: dropdownActive, 'is-mobile': isMobile }"
        v-on="
          !isMobile
            ? {
                mouseenter: onDropdownMouseEnter,
                mouseleave: onDropdownMouseLeave,
              }
            : {}
        "
      >
        <div class="dropdown-arrow" v-if="!isMobile"></div>
        <div class="templates-dropdown-content-wrap">
          <div class="templates-dropdown-columns">
            <!-- Forms Column -->
            <div class="templates-dropdown-column">
              <div class="templates-dropdown-title">
                <span class="templates-dropdown-icon">
                  <nuxt-img
                    src="/form-icon.svg"
                    alt="Forms"
                    width="20"
                    height="20"
                  />
                </span>
                Forms
              </div>
              <ul class="templates-dropdown-list">
                <li
                  v-for="item in formsTemplates"
                  :key="item.id"
                  @click="$emit('dropdown-close')"
                >
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
                  <nuxt-img
                    src="/survey-icon.svg"
                    alt="Surveys"
                    width="20"
                    height="20"
                  />
                </span>
                Surveys
              </div>
              <ul class="templates-dropdown-list">
                <li
                  v-for="item in surveysTemplates"
                  :key="item.id"
                  @click="$emit('dropdown-close')"
                >
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
                  <nuxt-img
                    src="/quiz-icon.svg"
                    alt="Quizzes"
                    width="20"
                    height="20"
                  />
                </span>
                Quizzes
              </div>
              <ul class="templates-dropdown-list">
                <li
                  v-for="item in quizzesTemplates"
                  :key="item.id"
                  @click="$emit('dropdown-close')"
                >
                  <NuxtLink :to="item.slug" class="templates-dropdown-link">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

              <!-- PDF Templates Column -->
              <div class="templates-dropdown-column">
              <div class="templates-dropdown-title">
                <span class="templates-dropdown-icon">
                  <nuxt-img
                    src="/pdf-icon.svg"
                    alt="PDF Templates"
                    width="20"
                    height="20"
                  />
                </span>
                PDF Templates
              </div>
              <ul class="templates-dropdown-list">
                <li
                  v-for="item in pdfTemplates"
                  :key="item.id"
                  @click="$emit('dropdown-close')"
                >
                  <NuxtLink :to="item.slug" class="templates-dropdown-link">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="templates-dropdown-footer">
            <NuxtLink
              to="/templates/"
              class="templates-dropdown-all"
              @click="$emit('dropdown-close')"
            >
              <span>Explore all templates</span>
              <span class="arrow-icon">
                <nuxt-img
                  src="/arrow-right.svg"
                  alt="Arrow Right"
                  width="20"
                  height="20"
                />
              </span>
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
        {
          id: 1,
          title: 'Contact Forms',
          slug: '/templates/categories/contact-forms/',
        },
        {
          id: 2,
          title: 'Employee Management Forms',
          slug: '/templates/categories/employee-management/',
        },
        {
          id: 3,
          title: 'Booking Forms',
          slug: '/templates/categories/booking-forms/',
        },
        {
          id: 4,
          title: 'Lead Generation Forms',
          slug: '/templates/categories/lead-generation/',
        },
        {
          id: 5,
          title: 'Application Forms',
          slug: '/templates/categories/application-and-registration/',
        },
        {
          id: 6,
          title: 'Order Forms',
          slug: '/templates/categories/order-forms/',
        },
      ],
      surveysTemplates: [
        {
          id: 1,
          title: 'Surveys',
          slug: '/templates/categories/survey-forms/',
        },
        {
          id: 2,
          title: 'Questionnaire',
          slug: '/templates/categories/questionnaire/',
        },
        {
          id: 3,
          title: 'New Product Survey',
          slug: '/templates/new-product-survey-form-1919/',
        },
        {
          id: 4,
          title: 'Marketing Research Survey',
          slug: '/templates/market-research-survey-701/',
        },
        {
          id: 5,
          title: 'Employee Engagement Survey',
          slug: '/templates/employee-engagement-survey-template-17645/',
        },
        {
          id: 6,
          title: 'Event Feedback Survey',
          slug: '/templates/event-feedback-survey-698/',
        },
      ],
      quizzesTemplates: [
        {
          id: 1,
          title: 'General Knowledge Quiz',
          slug: '/templates/general-knowledge-mcq-quiz-27608/',
        },
        {
          id: 2,
          title: 'Personality Quiz',
          slug: '/templates/uncover-your-inner-you-4124/',
        },
        {
          id: 3,
          title: 'Trivia Quiz',
          slug: '/templates/funny-trivia-quiz-14818/',
        },
        {
          id: 4,
          title: 'Magazine Quiz',
          slug: '/templates/magazine-quiz-27610/',
        },
        {
          id: 5,
          title: 'Vocabulary Quiz',
          slug: '/templates/vocabulary-quiz-27609/',
        },
      ],
      pdfTemplates: [
        {
          id: 1,
          title: 'Employee Agreement PDF Form',
          slug: '/templates/employee-agreement-pdf-form-49926/',
        },
        {
          id: 2,
          title: 'Lease Agreement PDF Form',
          slug: '/templates/lease-agreement-pdf-form-template-49894/',
        },
        {
          id: 3,
          title: 'NDA Agreement PDF Form',
          slug: '/templates/nda-agreement-pdf-form-template-49898/',
        },
        {
          id: 4,
          title: 'Photography Services Contract',
          slug: '/templates/photography-services-contract-template-51951/',
        },
        {
          id: 5,
          title: 'Business Contract Agreement PDF Form',
          slug: '/templates/business-contract-agreement-pdf-form-49913/',
        },
      ],
    }
  },
  methods: {
    onDropdownMouseEnter() {
      this.$emit('mouseenter')
    },
    onDropdownMouseLeave() {
      this.$emit('mouseleave')
    },
  },
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

.templates-dropdown-all {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-enter-active {
  animation: slideDown 0.25s ease-out forwards;
}

.dropdown-leave-active {
  animation: slideUp 0.1s ease-in forwards;
}

.templates-dropdown-mega {
  display: flex;
  width: 900px;
  min-width: 900px;
  max-width: 900px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(16, 30, 54, 0.08);
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(0px);
  z-index: 9999;
  border: 1px solid #eaecf0;
  overflow: visible;
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
  gap: 0;
  width: 100%;
}

.templates-dropdown-column {
  flex: 1;
  padding-right: 20px;
  border-right: 1px solid var(--bg-violet-50);
}
.templates-dropdown-column:last-child {
  border-right: none;
  padding-right: 0;
}

.templates-dropdown-title {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--violet-500);
  color: #fff;
  padding: 5px 12px 5px 8px;
  border-radius: var(--r-full);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: 0.01em;
  margin-bottom: 16px;
  white-space: nowrap;
}

.templates-dropdown-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  filter: brightness(0) invert(1);
}

.templates-dropdown-title-icon {
  width: 15px;
  height: 15px;
}

.templates-dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.templates-dropdown-link {
  color: var(--fg-strong);
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 6px;
  border-radius: var(--r-md);
  transition: background 0.12s, color 0.12s, padding-left 0.12s;
}

.templates-dropdown-link:hover {
  color: var(--violet-500);
  background: var(--bg-violet-50);
  padding-left: 10px;
}

.templates-dropdown-footer {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #eaecf0;
  display: flex;
  justify-content: center;
}

.templates-dropdown-all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--violet-500);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: var(--r-full);
  border: 1.5px solid var(--border-violet);
  transition: background 0.15s, border-color 0.15s;
}

.templates-dropdown-all:hover {
  background: var(--bg-violet-50);
  border-color: var(--violet-500);
}

.templates-dropdown-all:hover .arrow-icon {
  transform: translateX(3px);
}

.arrow-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}

.dropdown-arrow {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #fff;
  border-left: 1px solid #eaecf0;
  border-top: 1px solid #eaecf0;
  transform: rotate(45deg);
  top: -8px;
  left: 46%;
  z-index: 10000;
  box-shadow: -3px -3px 5px rgba(16, 30, 54, 0.02);
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
    animation: mobileSlideUp 0.2s ease-in forwards;
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
    from,
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes slideUp {
    from,
    to {
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
