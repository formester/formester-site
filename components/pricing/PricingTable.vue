<template>
  <div>
    <!-- desktop -->
    <div class="table-responsive mt-5 d-none d-md-block">
      <table class="table text-start">
        <thead>
          <tr class="plan-header">
            <td></td>
            <td>
              <div class="plan__name mb-3">Free</div>
              <div class="d-flex align-items-baseline mt-2 mb-3">
                <span class="pricing__amount">{{ pricingPlans.free }}</span>
                <span class="pricing__timeline ms-1 text-nowrap"
                  >per month</span
                >
              </div>
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button muted d-block text-center"
              >
                Start for free</a
              >
            </td>
            <td>
              <div class="plan__name mb-3">Personal</div>
              <div class="d-flex align-items-baseline mt-2 mb-3">
                <span class="pricing__amount">{{ pricingPlans.personal }}</span>
                <span class="pricing__timeline ms-1 text-nowrap"
                  >per month</span
                >
              </div>
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button d-block text-center"
                >Get started</a
              >
            </td>
            <td>
              <div class="plan__name mb-3">
                Business<span class="badge ms-2">Popular</span>
              </div>
              <div class="d-flex align-items-baseline mt-2 mb-3">
                <span class="pricing__amount">{{ pricingPlans.business }}</span>
                <span class="pricing__timeline ms-1 text-nowrap"
                  >per month</span
                >
              </div>
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button hglt d-block text-center"
                >Get started</a
              >
            </td>
          </tr>
        </thead>
        <tbody>
          <template v-for="category in comparisonTableFeatures" :key="`${category.category}`">
            <tr class="category-header">
              <th colspan="4" class="category-title">{{ category.category }}</th>
            </tr>
            <tr v-for="feature in category.features" :key="`${category.category}-${feature.name}`">
              <th class="feature">
                <div class="feature-with-tooltip">
                  <template v-if="feature.link">
                    <a :href="feature.link" target="_blank" rel="noopener noreferrer" class="feature-link">
                      {{ feature.name }}
                    </a>
                  </template>
                  <template v-else>
                    {{ feature.name }}
                  </template>
                  <div class="info-icon-container" v-if="feature.description">
                    <img
                      class="question__icon"
                      src="@/assets/images/icons/question.svg"
                      alt="question icon"
                    />
                    <div class="tooltip">{{ feature.description }}</div>
                  </div>
                </div>
              </th>
              <td>
                <template v-if="feature.free === 'Yes'">
                  <nuxt-img src="check-green.svg" />
                </template>
                <template v-else>
                  {{ feature.free }}
                </template>
              </td>
              <td>
                <template v-if="feature.pro === 'Yes'">
                  <nuxt-img src="check-green.svg" />
                </template>
                <template v-else>
                  {{ feature.pro }}
                </template>
              </td>
              <td>
                <template v-if="feature.business === 'Yes'">
                  <nuxt-img src="check-green.svg" />
                </template>
                <template v-else>
                  {{ feature.business }}
                </template>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr class="plan-header">
            <td></td>
            <td>
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button muted d-block text-center"
                >Start for free</a
              >
            </td>
            <td>
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button d-block text-center"
                >Get started</a
              >
            </td>
            <td>
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button hglt d-block text-center"
              >
                Get started
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- mobile -->
    <div class="d-md-none d-flex flex-column text-start">
      <!-- free -->
      <div class="mt-4">
        <div class="plan__name mb-3">Free</div>
        <div class="d-flex align-items-baseline mt-3 mb-4">
          <span class="pricing__amount">{{ pricingPlans.free }}</span>
          <span class="pricing__timeline ms-1 text-nowrap">per month</span>
        </div>
        <a
          href="https://app.formester.com/users/sign_up"
          class="table__button muted d-block text-center"
        >
          Start for free
        </a>
      </div>
      <table class="table text-start">
        <tbody>
          <template v-for="category in comparisonTableFeatures" :key="`${category.category}-free`">
            <tr class="category-header">
              <th colspan="2" class="category-title">{{ category.category }}</th>
            </tr>
            <tr v-for="feature in category.features" :key="`${category.category}-${feature.name}-free`">
              <th class="feature">
                <div class="feature-with-tooltip">
                  <template v-if="feature.link">
                    <a :href="feature.link" target="_blank" rel="noopener noreferrer" class="feature-link">
                      {{ feature.name }}
                    </a>
                  </template>
                  <template v-else>
                    {{ feature.name }}
                  </template>
                  <div class="info-icon-container" v-if="feature.description">
                    <img
                      class="question__icon"
                      src="@/assets/images/icons/question.svg"
                      alt="question icon"
                    />
                    <div class="tooltip">{{ feature.description }}</div>
                  </div>
                </div>
              </th>
              <td>
                <template v-if="feature.free === 'Yes'">
                  <nuxt-img src="check-green.svg" />
                </template>
                <template v-else>
                  {{ feature.free }}
                </template>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button muted d-block text-center"
              >
                Start for free
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
      <!-- personal -->
      <div class="mt-5">
        <div class="plan__name mb-3">Personal</div>
        <div class="d-flex align-items-baseline mt-3 mb-4">
          <span class="pricing__amount">{{ pricingPlans.personal }}</span>
          <span class="pricing__timeline ms-1 text-nowrap">per month</span>
        </div>
        <a
          href="https://app.formester.com/users/sign_up"
          class="table__button d-block text-center"
        >
          Get Started
        </a>
      </div>
      <table class="table text-start">
        <tbody>
          <template v-for="category in comparisonTableFeatures" :key="`${category.category}-personal`">
            <tr class="category-header">
              <th colspan="2" class="category-title">{{ category.category }}</th>
            </tr>
            <tr v-for="feature in category.features" :key="`${category.category}-${feature.name}-personal`">
              <th class="feature">
                <div class="feature-with-tooltip">
                  <template v-if="feature.link">
                    <a :href="feature.link" target="_blank" rel="noopener noreferrer" class="feature-link">
                      {{ feature.name }}
                    </a>
                  </template>
                  <template v-else>
                    {{ feature.name }}
                  </template>
                  <div class="info-icon-container" v-if="feature.description">
                    <img
          class="question__icon"
          src="@/assets/images/icons/question.svg"
          alt="question icon"
        />
                    <div class="tooltip">{{ feature.description }}</div>
                  </div>
                </div>
              </th>
              <td>
                <template v-if="feature.pro === 'Yes'">
                  <nuxt-img src="check-green.svg" />
                </template>
                <template v-else>
                  {{ feature.pro }}
                </template>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button d-block text-center"
              >
                Get Started
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
      <!-- business -->
      <div class="mt-5">
        <div class="plan__name mb-3">
          Business<span class="badge ms-2">Popular</span>
        </div>
        <div class="d-flex align-items-baseline mt-3 mb-4">
          <span class="pricing__amount">{{ pricingPlans.business }}</span>
          <span class="pricing__timeline ms-1 text-nowrap">per month</span>
        </div>
        <a
          href="https://app.formester.com/users/sign_up"
          class="table__button hglt d-block text-center"
        >
          Get Started
        </a>
      </div>
      <table class="table text-start">
        <tbody>
          <template v-for="category in comparisonTableFeatures" :key="`${category.category}-business`">
            <tr class="category-header">
              <th colspan="2" class="category-title">{{ category.category }}</th>
            </tr>
            <tr v-for="feature in category.features" :key="`${category.category}-${feature.name}-business`">
              <th class="feature">
                <div class="feature-with-tooltip">
                  <template v-if="feature.link">
                    <a :href="feature.link" target="_blank" rel="noopener noreferrer" class="feature-link">
                      {{ feature.name }}
                    </a>
                  </template>
                  <template v-else>
                    {{ feature.name }}
                  </template>
                  <div class="info-icon-container" v-if="feature.description">
                    <img
                      class="question__icon"
                      src="@/assets/images/icons/question.svg"
                      alt="question icon"
                    />
                    <div class="tooltip">{{ feature.description }}</div>
                  </div>
                </div>
              </th>
              <td>
                <template v-if="feature.business === 'Yes'">
                  <nuxt-img src="check-green.svg" />
                </template>
                <template v-else>
                  {{ feature.business }}
                </template>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button hglt d-block text-center"
              >
                Get Started
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comparisonTableFeatures: {
      type: Array,
      required: true,
    },
    pricingPlans: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
/* TABLE */
thead tr td {
  border: none;
}

tr td,
tr th {
  padding-block: 12px;
  font-size: 14px;
  border: none;
}

tr td,
thead tr td {
  padding-inline: 20px;
}

table td {
  text-align: center;
  min-width: 169px;
}

table tr:nth-child(even) {
  background: #f9fafb;
}

.plan__name {
  font-size: 18px;
  font-weight: 600;
  text-align: start;
}

.table__button {
  padding: 8px 12px;
  background-color: var(--clr-primary-light);
  color: var(--clr-primary);
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease-out;
  white-space: nowrap;
}

.table__button:hover {
  color: #371d72;
  border-radius: 4px;
  background: #d1ceff;
}

.table__button.hglt {
  background-color: var(--clr-primary);
  color: white;
}

.table__button.hglt:hover {
  border-radius: 4px;
  background: var(--clr-primary-hover);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.table__button.muted {
  color: var(--clr-text-secondary);
  border: 1px solid #d0d5dd;
  background: white;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.table__button.muted:hover {
  border: 1px solid #d0d5dd;
  background: #f9fafb;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.feature {
  font-weight: 500;
}

.category-header {
  background: white !important;
}

.category-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--clr-primary);
  padding-inline: 8px ;
  padding-top: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
}

/* Tooltip Styles */
.feature-with-tooltip {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icon-container {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.info-icon {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.info-icon:hover {
  opacity: 1;
}

.tooltip {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: 12px;
  padding: 8px 12px;
  background: #1f2937;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  border-radius: 6px;
  width: fit-content;
  max-width: none;
  white-space: nowrap;
  word-wrap: break-word;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 10;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -4px;
  transform: translateY(-50%);
  border: 4px solid transparent;
  border-right-color: #1f2937;
}

.info-icon-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 768px) {
  .tooltip {
    position: fixed;
    bottom: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    max-width: calc(100% - 32px);
    white-space: normal;
    z-index: 1000;
  }
  
  .tooltip::after {
    display: none;
  }
}

.plan__name:has(.badge) {
  white-space: nowrap;
}

.badge {
  color: var(--clr-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: #f9f5ff;
  border-radius: 8px;
}

.pricing__amount {
  color: var(--clr-text-primary);
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.96px;
}

.pricing__timeline {
  color: var(--clr-text-secondary);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.feature-link {
  color: var(--clr-text-primary);
  transition: color 0.2s ease;
  text-decoration: none; 
  background-image: radial-gradient(currentColor 1.5px, transparent 1.5px);
  background-size: 6px 6px; 
  background-repeat: repeat-x;
  background-position: 0 calc(100% - 1px); 
}

.feature-link:hover {
  color: var(--clr-primary);
  transition: color 0.2s ease;
  text-decoration: none; 
  background-image: radial-gradient(currentColor 1.5px, transparent 1.5px);
  background-size: 6px 6px; 
  background-repeat: repeat-x;
  background-position: 0 calc(100% - 1px); 
}

@media screen and (max-width: 768px) {
  table td {
    text-align: right;
  }
}
</style>
