<template>
  <div class="table-responsive mt-5">
    <table class="table text-start">
      <thead>
        <tr class="plan-header">
          <td></td>
          <td>
            <div class="plan__name mb-3">Free</div>
            <a
              href="https://app.formester.com/users/sign_up"
              class="table__button muted d-block text-center"
              >Start for free</a
            >
          </td>
          <td>
            <div class="plan__name mb-3">Personal</div>
            <a
              href="https://app.formester.com/users/sign_up"
              class="table__button hglt d-block text-center"
              >Get started</a
            >
          </td>
          <td>
            <div class="plan__name mb-3">Business</div>
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
              >Get started</a
            >
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    comparisonTableFeatures: {
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
  border: 1px solid var(--clr-primary);
  background: white;
  color: var(--clr-primary);
}

.table__button.muted:hover {
  background: #f9f9f9;
  opacity: 1;
}

.feature {
  font-weight: 500;
}
</style>
