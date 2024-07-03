<template>
  <div v-if="selectedFormBuildersDetails.length" class="my-5 pt-5">
    <!-- desktop -->
    <div class="d-none d-lg-block w-100 my-5">
      <div class="d-flex formbuilder__logo-container">
        <div
          v-for="fb in selectedFormBuildersDetails"
          :key="fb.id"
          class="w-100"
        >
          <div
            class="formbuilder__logo-wrapper d-flex align-items-center justify-content-center text-center"
          >
            <img
              class="formbuilder__logo"
              :src="fb.logo.data.attributes.url"
              height="40"
            />
          </div>
          <div class="formbuilder__select-plan">
            <select
              class="form-select select-plan__option"
              v-model="selectedPlans[fb.id]"
            >
              <option
                v-for="plan in fb.plan"
                :key="`${fb.name}-${plan.name}`"
                :value="plan.name"
              >
                {{ plan.name }} - ${{ plan.amount }}/mo
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="formbuilder__features accordion accordion-flush">
        <div
          v-for="(category, index) in groupedFeatures"
          :key="generateSlug(category.name)"
          class="category__group accordion-item"
        >
          <h3 class="category__name accordion-header" :id="category.name">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + generateSlug(category.name)"
              aria-expanded="false"
              :aria-controls="generateSlug(category.name)"
            >
              {{ category.name }}
            </button>
          </h3>
          <div
            :id="generateSlug(category.name)"
            class="accordion-collapse collapse"
            :aria-labelledby="generateSlug(category.name)"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body d-flex">
              <FormBuilderFeatureList :feature-list="category.features" />
              <div class="d-flex overflow-auto w-100">
                <div
                  v-for="fb in selectedFormBuildersDetails"
                  :key="fb.id"
                  class="w-100"
                >
                  <!-- <div
                    class="formbuilder__logo-wrapper d-flex align-items-center justify-content-center text-center"
                  >
                    <img
                      class="formbuilder__logo"
                      :src="fb.logo.data.attributes.url"
                      height="40"
                    />
                  </div> -->
                  <FormBuilderDetails
                    :formBuilder="fb"
                    :selectedPlans="selectedPlans"
                    :feature-list="category.features"
                    @onPlanChange="handlePlanChange"
                  />
                </div>
              </div>
            </div>
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
          <img
            class="formbuilder__logo"
            :src="fb.logo.data.attributes.url"
            height="40"
          />
        </div>
        <div class="formbuilder__select-plan">
          <select
            class="form-select select-plan__option"
            v-model="selectedPlans[fb.id]"
          >
            <option
              v-for="plan in fb.plan"
              :key="`${fb.name}-${plan.name}`"
              :value="plan.name"
            >
              {{ plan.name }} - ${{ plan.amount }}/mo
            </option>
          </select>
        </div>
        <div class="formbuilder__features accordion accordion-flush">
          <div
            v-for="(category, index) in groupedFeatures"
            :key="generateSlug(category.name)"
            class="category__group accordion-item"
          >
            <h3 class="category__name accordion-header" :id="category.name">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + generateSlug(category.name)"
                aria-expanded="false"
                :aria-controls="generateSlug(category.name)"
              >
                {{ category.name }}
              </button>
            </h3>
            <div
              :id="generateSlug(category.name)"
              class="accordion-collapse collapse"
              :aria-labelledby="generateSlug(category.name)"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body d-flex">
                <div class="d-flex overflow-auto w-100">
                  <FormBuilderFeatureList :feature-list="featureList" />
                  <div class="w-100">
                    <FormBuilderDetails
                      :formBuilder="fb"
                      :selectedPlans="selectedPlans"
                      :feature-list="featureList"
                      @onPlanChange="handlePlanChange"
                    />
                  </div>
                </div>
              </div>
            </div>
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
        populate: 'category',
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
  computed: {
    groupedFeatures() {
      const grouped = {
        'Usage Limits': null,
        'Form Creation': null,
        Customization: null,
        Payments: null,
        'Form Analytics & Automation': null,
        'Sharing & Embeding': null,
        'Security & Compliance': null,
        Support: null,
      }

      this.featureList.forEach((feature) => {
        const category = feature.category?.name || 'Other'

        if (!(category in grouped)) {
          grouped[category] = null
        }

        if (grouped[category] === null) {
          grouped[category] = {
            name: category,
            features: [],
          }
        }

        grouped[category].features.push(feature)
      })

      // Sort features within each category
      Object.values(grouped).forEach((category) => {
        if (category) {
          category.features.sort((a, b) => {
            const posA = a.category?.position ?? Infinity
            const posB = b.category?.position ?? Infinity
            if (posA === posB) {
              return (a.name || '').localeCompare(b.name || '')
            }
            return posA - posB
          })
        }
      })

      // Filter out null categories and convert to array
      const sortedCategories = Object.entries(grouped)
        .filter(([_, value]) => value !== null)
        .map(([_, value]) => value)

      return sortedCategories
    },
  },
  methods: {
    handlePlanChange(event, formBuilderId) {
      const selectedPlan = event.target.value
      this.$set(this.selectedPlans, formBuilderId, selectedPlan)
    },
    generateSlug(title) {
      return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
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
  padding-inline: 12px;
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

.accordion-body {
  padding: 0;
}

.category__name {
  font-size: 16px;
  line-height: 24px;
}

.category__name button {
  background-color: #f9fafb;
  font-weight: 500;
}

.formbuilder__logo-container {
  margin-left: 354px;
}

.formbuilder__select-plan {
  margin: 28px auto 32px;
  max-width: 200px;
}

.formbuilder__features {
  border: 1px solid #eaecf0;
}

.accordion-button:not(.collapsed) {
  color: inherit;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}

/* === mobile === */
.mobile__formbuilder-details-wrapper .formbuilder__select-plan {
  margin: 12px auto 20px;
}

.mobile__formbuilder-details-wrapper .accordion-button {
  font-size: 14px;
  line-height: 20px;
  padding: 16px 12px;
}

@media screen and (max-width: 992px) {
  .mobile__formbuilder-details-wrapper {
    gap: 48px;
    overflow: hidden;
  }
}
</style>
