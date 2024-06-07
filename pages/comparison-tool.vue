<template>
  <div>
    <ComparisonToolHero />
    <div class="container">
      <div class="comparison__card-container mx-auto my-5">
        <div v-for="(selectedFB, index) in selectedFormBuilders" :key="index">
          <ComparisonCard
            :options="filteredOptions(index)"
            :selected-option="selectedFB"
            :card-number="index"
            :form-builders-logo-src="formBuildersLogoSrc"
            @change="handleOptionChange"
          />
        </div>
      </div>
      <div v-if="selectedFormBuildersDetails.length" class="d-flex">
        <div class="feature__list d-flex flex-column">
          <div
            v-for="(featureName, index) in featureNameList"
            :key="featureName"
            class="feature__cell"
            :class="{ 'alternate-bg': index % 2 !== 0 }"
          >
            {{ featureName }}
          </div>
        </div>
        <div class="d-flex">
          <div v-for="fb in selectedFormBuildersDetails" :key="fb.id">
            <div class="plan__name text-center">
              <nuxt-img
                class="formbuilder__logo"
                :src="formBuildersLogoSrc[fb.name]"
              />
            </div>
            <div class="feature__cell">
              <select
                class="form-select select-plan__option"
                v-model="selectedPlans[fb.id]"
                @change="handlePlanChange($event, fb.id)"
              >
                <option
                  v-for="plan in fb.plan"
                  :key="`${fb.name}-${plan.name}`"
                  :value="plan.name"
                >
                  {{ plan.name }}
                </option>
              </select>
            </div>
            <div
              v-for="(feature, index) in getSelectedPlanFeatures(fb.id)"
              :key="`${fb.name}-row${index}-${feature}`"
              class="feature__cell info text-center"
              :class="{
                'alternate-bg': index % 2 !== 0,
                'd-none': index === 0,
              }"
            >
              {{ feature ?? '-' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComparisonToolHero from '@/components/comparision/ComparisonToolHero.vue'
import ComparisonCard from '@/components/comparision/ComparisonCard.vue'
import { comparisonTableFeatures, featureNameList } from '@/constants/plan'
import axios from 'axios'

export default {
  components: {
    ComparisonToolHero,
    ComparisonCard,
  },
  async asyncData() {
    const {
      data: { data },
    } = await axios.get(`${process.env.strapiUrl}/api/form-builders`, {
      params: {
        populate: ['plan', 'plan.features'],
      },
    })

    let formBuilders = data.map((item) => {
      return {
        id: item.id,
        ...item.attributes,
      }
    })

    const options = formBuilders.map((fb) => fb.name)

    return { formBuilders, options }
  },
  data() {
    return {
      options: [],
      selectedFormBuilders: {
        0: '',
        1: '',
        2: '',
        3: '',
      },
      comparisonTableFeatures,
      featureNameList,
      selectedPlans: {},
      formBuildersLogoSrc: {
        Formester: '/logo.svg',
        Typeform: '/form-building-platforms/typeform.svg',
        Jotform: '/form-building-platforms/jotform.svg',
        Fillout: '/form-building-platforms/fillout.svg',
      },
      selectedFormBuildersDetails: [],
    }
  },
  created() {
    this.formBuilders.forEach((fb) => {
      this.$set(this.selectedPlans, fb.id, fb.plan[0].name)
    })
  },
  methods: {
    filteredOptions(cardNumber) {
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
      const oldOption = this.selectedFormBuilders[cardNumber]
      this.$set(this.selectedFormBuilders, cardNumber, selectedOption)

      if (oldOption) {
        // Remove the old form builder from selectedFormBuildersDetails
        const index = this.selectedFormBuildersDetails.findIndex(
          (fb) => fb.name === oldOption
        )
        if (index !== -1) {
          this.selectedFormBuildersDetails.splice(index, 1)
        }
      }

      if (selectedOption) {
        // Add the new form builder to selectedFormBuildersDetails
        const newFormBuilder = this.formBuilders.find(
          (fb) => fb.name === selectedOption
        )
        if (
          newFormBuilder &&
          !this.selectedFormBuildersDetails.some(
            (fb) => fb.id === newFormBuilder.id
          )
        ) {
          this.selectedFormBuildersDetails.push(newFormBuilder)
        }
      }
    },
    handlePlanChange(event, formBuilderId) {
      const selectedPlan = event.target.value
      this.$set(this.selectedPlans, formBuilderId, selectedPlan)
    },
    getSelectedPlanFeatures(formBuilderId) {
      const formBuilder = this.formBuilders.find(
        (fb) => fb.id === formBuilderId
      )
      const selectedPlan = formBuilder.plan.find(
        (plan) => plan.name === this.selectedPlans[formBuilderId]
      )
      return selectedPlan && selectedPlan.features
        ? Object.values(selectedPlan.features)
        : []
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

.comparision__table-heading {
  font-size: 28px;
  line-height: 40px;
}

thead tr td {
  border: none;
}

tr td,
tr th {
  padding-block: 12px;
  font-size: 14px;
}

tr td,
thead tr td {
  padding-inline: 20px;
}

table td {
  min-width: 169px;
}

.plan__name {
  font-size: 18px;
  font-weight: 600;
}

.table__button {
  padding: 12px 16px;
  border: 1px solid var(--clr-primary);
  background: white;
  color: var(--clr-primary);
  border-radius: 8px;
}

.table__button:hover {
  background: #f9f9f9;
}

.table__button.hglt {
  background-color: var(--clr-primary);
  color: white;
}

.table__button.hglt:hover {
  opacity: 0.9;
}

.feature {
  font-weight: 500;
}

/*  */
.formbuilder__logo {
  height: 22px;
  width: auto;
}

.feature__list {
  color: var(--clr-text-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 46px;
}

.feature__cell {
  padding: 20px 24px;
}

.feature__cell.alternate-bg {
  background-color: #f9fafb;
}

.feature__cell.info {
  color: var(--clr-text-secondary);
  font-size: 14px;
  line-height: 20px;
  min-width: 300px;
}

.select-plan__option {
  max-width: 200px;
  margin: auto;
  text-transform: capitalize;
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
