<template>
  <div>
    <ComparisonToolHero />
    <div class="container">
      <div class="comparison__card-container mx-auto my-5">
        <div
          v-for="(selectedFB, index) in selectedFormBuilders"
          :key="selectedFB"
        >
          <ComparisonCard
            :options="filteredOptions(index)"
            :selected-option="selectedFB"
            :card-number="index"
            @change="handleOptionChange"
          />
        </div>
      </div>
      <div class="mt-5 py-5">
        <div class="table-responsive mt-5">
          <table class="table text-start">
            <thead>
              <tr class="plan-header">
                <td></td>
                <td>
                  <div class="plan__name mb-3">Free</div>
                  <a
                    href="https://app.formester.com/users/sign_up"
                    class="table__button"
                    >Start for free</a
                  >
                </td>
                <td>
                  <div class="plan__name mb-3">Personal</div>
                  <a
                    href="https://app.formester.com/users/sign_up"
                    class="table__button hglt"
                    >Get started</a
                  >
                </td>
                <td>
                  <div class="plan__name mb-3">Business</div>
                  <a
                    href="https://app.formester.com/users/sign_up"
                    class="table__button"
                    >Get started</a
                  >
                </td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in comparisonTableFeatures"
                :key="feature.name"
              >
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
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComparisonToolHero from '@/components/comparision/ComparisonToolHero.vue'
import ComparisonCard from '@/components/comparision/ComparisonCard.vue'
import { comparisonTableFeatures } from '@/constants/plan'

export default {
  components: {
    ComparisonToolHero,
    ComparisonCard,
  },
  data() {
    return {
      options: ['Formester', 'Typeform', 'Jotform', 'Fillout'],
      selectedFormBuilders: {
        0: null,
        1: null,
        2: null,
        3: null,
      },
      comparisonTableFeatures,
    }
  },
  methods: {
    filteredOptions(cardNumber) {
      // Returns options that are not selected by any other card (or are currently selected by this card).
      const selectedOptions = Object.values(this.selectedFormBuilders).filter(
        Boolean
      )
      return this.options.filter(
        (option) =>
          !selectedOptions.includes(option) ||
          this.selectedFormBuilders[cardNumber] === option
      )
    },
    handleOptionChange(selectedOption, cardNumber) {
      // Updates the selected option for the specified card
      this.selectedFormBuilders[cardNumber] = selectedOption
    },
  },
}
</script>

<style scoped>
.comparison__card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
}

@media screen and (max-width: 1200px) {
  .comparison__card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .comparison__card-container {
    grid-template-columns: 1fr;
  }
}
</style>
