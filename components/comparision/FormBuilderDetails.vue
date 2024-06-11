<template>
  <div class="">
    <div class="feature__cell">
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
          {{ plan.name }}
          - ${{ plan.amount }}/mo
        </option>
      </select>
    </div>
    <div
      v-for="(feature, index) in getSelectedPlanFeatures(formBuilder)"
      :key="`${formBuilder.name}-row${index}-${feature.id}`"
      class="feature__cell info text-center"
      :class="{
        'alternate-bg': index % 2 === 0,
      }"
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
        return []
      }

      // Extracting features and sorting by createdAt
      const features = Object.values(selectedPlan.features)
      features.sort((a, b) => {
        const dateA = new Date(a.form_builder_feature.data.attributes.createdAt)
        const dateB = new Date(b.form_builder_feature.data.attributes.createdAt)
        return dateA - dateB
      })

      return features
    },
  },
}
</script>

<style scoped>
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
