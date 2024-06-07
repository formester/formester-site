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
      <div class="d-flex">
        <div class="d-flex flex-column">
          <div v-for="featureName in featureNameList" :key="featureName">
            {{ featureName }}
          </div>
        </div>
        <div class="d-flex">
          <div v-for="(fb, idx) in selectedFormBuildersDetails" :key="fb.id">
            <div class="plan__name">
              <nuxt-img :src="formBuildersLogoSrc[fb.name]" />
            </div>
            <select
              class="option-select"
              v-model="selectedPlans[fb.id]"
              @change="handlePlanChange($event, fb.id)"
            >
              <option v-for="(plan, i) in fb.plan" :key="i" :value="plan.name">
                {{ plan.name }}
              </option>
            </select>
            <div
              v-for="(feature, index) in getSelectedPlanFeatures(fb.id)"
              :key="index"
            >
              <div>{{ feature ?? '-' }}</div>
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
    }
  },
  created() {
    this.formBuilders.forEach((fb) => {
      this.$set(this.selectedPlans, fb.id, fb.plan[0].name)
    })
  },
  computed: {
    selectedFormBuildersDetails() {
      return this.formBuilders.filter((fb) =>
        Object.values(this.selectedFormBuilders).includes(fb.name)
      )
    },
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
      this.$set(this.selectedFormBuilders, cardNumber, selectedOption)
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
