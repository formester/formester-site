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
      <FormBuilderComparisonDetails
        :selected-form-builders-details="selectedFormBuildersDetails"
        :selected-plans="selectedPlans"
        :form-builders-logo-src="formBuildersLogoSrc"
        :feature-name-list="featureNameList"
        :form-builders="formBuilders"
        @update:selectedPlans="updateSelectedPlans"
      />
    </div>
  </div>
</template>

<script>
import ComparisonToolHero from '@/components/comparision/ComparisonToolHero.vue'
import ComparisonCard from '@/components/comparision/ComparisonCard.vue'
import FormBuilderComparisonDetails from '@/components/comparision/FormBuilderComparisonDetails.vue'
import { comparisonTableFeatures, featureNameList } from '@/constants/plan'
import axios from 'axios'

export default {
  components: {
    ComparisonToolHero,
    ComparisonCard,
    FormBuilderComparisonDetails,
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
    updateSelectedPlans({ formBuilderId, selectedPlan }) {
      this.$set(this.selectedPlans, formBuilderId, selectedPlan)
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
