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
import { featureNameList } from '@/constants/plan'
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
        populate: ['logo', 'plan', 'plan.features'],
      },
    })

    let formBuilders = data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }))

    const options = formBuilders.map((fb) => fb.name)

    const selectedPlans = {}
    formBuilders.forEach((fb) => {
      selectedPlans[fb.id] = fb.plan[0].name
    })

    return { formBuilders, options, selectedPlans }
  },
  data() {
    return {
      selectedFormBuilders: ['', '', '', ''],
      featureNameList,
      selectedFormBuildersDetails: [],
    }
  },
  computed: {
    formBuildersLogoSrc() {
      const logoSrc = {}
      this.formBuilders.forEach((fb) => {
        if (fb.logo && fb.logo.data && fb.logo.data.attributes) {
          logoSrc[fb.name] = fb.logo.data.attributes.url
        } else {
          console.warn(`Logo not found for form builder: ${fb.name}`)
        }
      })
      return logoSrc
    },
  },
  methods: {
    filteredOptions(cardNumber) {
      const selectedOptions = this.selectedFormBuilders.filter(Boolean)
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
        this.selectedFormBuildersDetails =
          this.selectedFormBuildersDetails.filter((fb) => fb.name !== oldOption)
      }

      if (selectedOption) {
        const newFormBuilder = this.formBuilders.find(
          (fb) => fb.name === selectedOption
        )
        if (newFormBuilder) {
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
