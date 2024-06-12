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
              <div class="plan__name mb-3">
                Personal<span class="badge ms-2">Popular</span>
              </div>
              <div class="d-flex align-items-baseline mt-2 mb-3">
                <span class="pricing__amount">{{ pricingPlans.personal }}</span>
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
            <td>
              <div class="plan__name mb-3">Business</div>
              <div class="d-flex align-items-baseline mt-2 mb-3">
                <span class="pricing__amount">{{ pricingPlans.business }}</span>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="feature in comparisonTableFeatures" :key="feature.name">
            <th class="feature">{{ feature.name }}</th>
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
                class="table__button hglt d-block text-center"
                >Get started</a
              >
            </td>
            <td>
              <a
                href="https://app.formester.com/users/sign_up"
                class="table__button d-block text-center"
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
          <tr v-for="feature in comparisonTableFeatures" :key="feature.name">
            <th class="feature">{{ feature.name }}</th>
            <td>
              <template v-if="feature.free === 'Yes'">
                <nuxt-img src="check-green.svg" />
              </template>
              <template v-else>
                {{ feature.free }}
              </template>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td colspan="2">
            <a
              href="https://app.formester.com/users/sign_up"
              class="table__button muted d-block text-center"
            >
              Start for free
            </a>
          </td>
        </tfoot>
      </table>
      <!-- personal -->
      <div class="mt-5">
        <div class="plan__name mb-3">
          Personal<span class="badge ms-2">Popular</span>
        </div>
        <div class="d-flex align-items-baseline mt-3 mb-4">
          <span class="pricing__amount">{{ pricingPlans.personal }}</span>
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
          <tr v-for="feature in comparisonTableFeatures" :key="feature.name">
            <th class="feature">{{ feature.name }}</th>
            <td>
              <template v-if="feature.pro === 'Yes'">
                <nuxt-img src="check-green.svg" />
              </template>
              <template v-else>
                {{ feature.pro }}
              </template>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td colspan="2">
            <a
              href="https://app.formester.com/users/sign_up"
              class="table__button hglt d-block text-center"
            >
              Get Started
            </a>
          </td>
        </tfoot>
      </table>
      <!-- business -->
      <div class="mt-5">
        <div class="plan__name mb-3">Business</div>
        <div class="d-flex align-items-baseline mt-3 mb-4">
          <span class="pricing__amount">{{ pricingPlans.business }}</span>
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
          <tr v-for="feature in comparisonTableFeatures" :key="feature.name">
            <th class="feature">{{ feature.name }}</th>
            <td>
              <template v-if="feature.business === 'Yes'">
                <nuxt-img src="check-green.svg" />
              </template>
              <template v-else>
                {{ feature.business }}
              </template>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td colspan="2">
            <a
              href="https://app.formester.com/users/sign_up"
              class="table__button d-block text-center"
            >
              Get Started
            </a>
          </td>
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
      type: Array,
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
}

.table__button {
  padding: 8px 12px;
  background-color: var(--clr-primary-light);
  color: var(--clr-primary);
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease-out;
}

.table__button:hover {
  opacity: 0.8;
}

.table__button.hglt {
  background-color: var(--clr-primary);
  color: white;
}

.table__button.hglt:hover {
  opacity: 0.9;
}

.table__button.muted {
  color: var(--clr-text-secondary);
  border: 1px solid #d0d5dd;
  background: white;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.table__button.muted:hover {
  opacity: 1;
  border: 1px solid #dfe4eb;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.01);
}

.feature {
  font-weight: 500;
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

@media screen and (max-width: 768px) {
  table td {
    text-align: right;
  }
}
</style>
