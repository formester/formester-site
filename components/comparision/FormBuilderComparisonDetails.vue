<template>
  <div v-if="selectedFormBuildersDetails.length" class="d-flex w-100 my-5 pt-5">
    <div class="feature__list d-flex flex-column">
      <div
        v-for="(featureName, index) in featureNameList"
        :key="featureName"
        class="feature__cell feature__row-name"
        :class="{ 'alternate-bg': index % 2 !== 0 }"
      >
        {{ featureName }}
      </div>
    </div>
    <div class="d-flex overflow-auto w-100">
      <div
        v-for="fb in selectedFormBuildersDetails"
        :key="fb.id"
        class="w-100 mw-300"
      >
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
</template>

<script>
export default {
  props: {
    selectedFormBuildersDetails: Array,
    selectedPlans: Object,
    formBuildersLogoSrc: Object,
    featureNameList: Array,
    formBuilders: Array,
  },
  methods: {
    handlePlanChange(event, formBuilderId) {
      const selectedPlan = event.target.value
      this.$emit('update:selectedPlans', { formBuilderId, selectedPlan })
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

.feature__row-name {
  min-width: 262px;
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

.mw-300 {
  max-width: 300px;
}

.select-plan__option {
  max-width: 200px;
  margin: auto;
  text-transform: capitalize;
}

.formbuilder__logo {
  height: 22px;
  width: auto;
}
</style>
