<template>
  <div v-if="selectedFormBuildersDetails.length" class="my-5 pt-5">
    <!-- desktop -->
    <div class="d-none d-lg-flex w-100">
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
          <div
            class="formbuilder__logo-wrapper d-flex align-items-center justify-content-center text-center"
          >
            <img class="formbuilder__logo" :src="fb.logo.data.attributes.url" />
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
    <!-- mobile -->
    <div
      class="d-lg-none mobile__formbuilder-details-wrapper d-flex flex-column mx-auto"
    >
      <div
        v-for="fb in selectedFormBuildersDetails"
        :key="fb.id"
        class="d-flex flex-column"
      >
        <div
          class="formbuilder__logo-wrapper d-flex align-items-center justify-content-center text-center"
        >
          <img class="formbuilder__logo" :src="fb.logo.data.attributes.url" />
        </div>
        <div class="d-flex overflow-auto">
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
          <div class="w-100">
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
    <!-- <div class="disparity__text mt-5 text-center">
      <a
        href="https://rdjguczw.formester.com/f/0dc9b105-dfda-4e31-b59d-fff7befbbc73"
        target="_blank"
        class="disparity__text-link"
        >Click here</a
      >
      to report any disparity in the information provided.
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    selectedFormBuildersDetails: {
      type: Array,
      required: true,
    },
    selectedPlans: {
      type: Object,
      required: true,
    },
    featureNameList: {
      type: Array,
      required: true,
    },
    formBuilders: {
      type: Array,
      required: true,
    },
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
  margin-top: 58px;
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

.formbuilder__logo-wrapper {
  min-height: 40px;
}

.formbuilder__logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.disparity__text {
  font-size: 16px;
  color: var(--clr-text-secondary);
}

.disparity__text-link {
  color: var(--clr-primary);
  text-decoration: underline;
}

/* === mobile === */
@media screen and (max-width: 992px) {
  .mobile__formbuilder-details-wrapper {
    gap: 48px;
    overflow: hidden;
  }

  .feature__list {
    margin-top: 19px;
  }

  .feature__list {
    min-width: fit-content;
  }

  .feature__cell {
    font-size: 13px;
    padding: 16px 12px;
  }

  .feature__cell.info {
    min-width: fit-content;
  }
}
</style>
