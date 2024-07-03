<template>
  <div class="">
    <!-- <div class="feature__cell">
      <select
        class="form-select select-plan__option"
        v-model="selectedPlans[formBuilder.id]"
        @change="$emit('onPlanChange', $event, formBuilder.id)"
      >
        <option
          v-for="plan in formBuilder.plan"
          :key="`${formBuilder.name}-${plan.name}`"
          :value="plan.name"
        >
          {{ plan.name }} - ${{ plan.amount }}/mo
        </option>
      </select>
    </div> -->
    <div
      v-for="(feature, index) in getSelectedPlanFeatures(formBuilder)"
      :key="`${formBuilder.name}-row${index}-${feature.id}`"
      class="feature__cell info text-center"
    >
      <template v-if="trimString(feature.value) === 'Available'">
        <img src="@/assets/images/check-green.svg" />
      </template>
      <template v-else>
        {{ feature.value ?? '-' }}
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formBuilder: {
      type: Object,
      required: true,
    },
    selectedPlans: {
      type: Object,
      required: true,
    },
    featureList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    trimString(feature) {
      const featureText = String(feature)
      return featureText.trim()
    },
    getSelectedPlanFeatures(formBuilder) {
      const selectedPlan = formBuilder.plan.find(
        (plan) => plan.name === this.selectedPlans[formBuilder.id]
      )
      if (!selectedPlan || !selectedPlan.features) {
        return this.featureList.map((feature) => ({
          value: '-',
          id: feature.title,
        }))
      }

      // Extracting features and filtering out null form_builder_feature
      const features = Object.values(selectedPlan.features).filter(
        (feature) =>
          feature.form_builder_feature && feature.form_builder_feature.data
      )

      // Creating a map for quick lookup
      const featureMap = features.reduce((map, feature) => {
        const title = feature.form_builder_feature.data.attributes.title
        map[title] = feature.value
        return map
      }, {})

      // Creating the list in sequence to the featureList
      const orderedFeatures = this.featureList.map((feature) => ({
        value: featureMap[feature.title] || '-',
        id: feature.title, // Using title as id
      }))

      return orderedFeatures
    },
  },
}
</script>

<style scoped>
.feature__cell {
  padding: 20px 24px;
  border-bottom: 1px solid #eaecf0;
}

.feature__cell:first-child {
  border-top: 1px solid #eaecf0;
}

.feature__cell:last-child {
  border-bottom: none;
}

.feature__cell.info {
  color: var(--clr-text-secondary);
  font-size: 14px;
  line-height: 20px;
  min-width: 200px;
  width: 100%;
}

.select-plan__option {
  max-width: 200px;
  margin: auto;
}

@media screen and (max-width: 992px) {
  .feature__cell {
    font-size: 13px;
    padding: 16px 12px;
  }

  .feature__cell.info {
    min-width: fit-content;
  }
}
</style>
