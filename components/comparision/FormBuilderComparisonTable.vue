<template>
  <div v-if="selectedFormBuildersDetails.length" class="my-5 pt-5">
    <!-- desktop -->
    <div class="d-none d-lg-flex w-100">
      <FormBuilderFeatureList :feature-list="featureList" />
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
          <FormBuilderDetails
            :formBuilder="fb"
            :selectedPlans="selectedPlans"
            @onPlanChange="handlePlanChange"
          />
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
          <FormBuilderFeatureList :feature-list="featureList" />
          <div class="w-100">
            <FormBuilderDetails
              :formBuilder="fb"
              :selectedPlans="selectedPlans"
              @onPlanChange="handlePlanChange"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="disparity__text-sm mt-5 text-center">
      Want to list your form?
      <a
        href="https://sxqzooev.formester.com/f/d6abd30c-aeaf-4d16-aa15-fab9c07a967d"
        target="_blank"
        class="disparity__text-link"
        >Click Here</a
      >
    </div>
    <div class="disparity__text-sm mt-2 text-center">
      <a
        href="https://sxqzooev.formester.com/f/dc66d38b-49a1-4d79-b53c-b44c2f5925c6"
        target="_blank"
        class="disparity__text-link"
        >Click here</a
      >
      to report any disparity in the information provided.
    </div>
  </div>
</template>

<script>
import FormBuilderFeatureList from '@/components/comparision/FormBuilderFeatureList.vue'
import FormBuilderDetails from '@/components/comparision/FormBuilderDetails.vue'
import axios from 'axios'

export default {
  components: {
    FormBuilderFeatureList,
    FormBuilderDetails,
  },
  data() {
    return {
      selectedPlans: {},
      featureList: [],
    }
  },
  props: {
    selectedFormBuildersDetails: {
      type: Array,
      required: true,
    },
    formBuilders: {
      type: Array,
      required: true,
    },
  },
  async created() {
    const {
      data: { data },
    } = await axios.get(`${process.env.strapiUrl}/api/form-builder-features`, {
      params: {
        sort: 'createdAt',
        populate: '*',
      },
    })

    let fbFeatures = data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }))

    this.featureList = [...fbFeatures]
  },
  mounted() {
    this.formBuilders.forEach((fb) => {
      this.$set(this.selectedPlans, fb.id, fb.plan[0].name)
    })
  },
  methods: {
    handlePlanChange(event, formBuilderId) {
      const selectedPlan = event.target.value
      this.$set(this.selectedPlans, formBuilderId, selectedPlan)
    },
  },
}
</script>

<style scoped>
.mw-300 {
  max-width: 300px;
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

.disparity__text-sm {
  font-size: 14px;
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
}
</style>
