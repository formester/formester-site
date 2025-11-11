<template>
  <div v-if="selectedFormBuildersDetails && selectedFormBuildersDetails.length" class="my-5 pt-5">
    <!-- desktop -->
    <div class="d-none d-lg-block w-100 my-5">
      <div class="d-flex formbuilder__logo-container pt-2">
        <div
          v-for="fb in selectedFormBuildersDetails"
          :key="fb.id"
          class="w-100 px-2"
        >
          <div class="formbuilder__logo-wrapper d-flex align-items-center justify-content-center text-center">
            <!-- If not using @nuxt/image, replace NuxtImg with img -->
            <NuxtImg
              class="formbuilder__logo"
              :src="fb?.logo?.data?.attributes?.url || ''"
              :alt="fb?.name || 'Form builder logo'"
              height="40"
              loading="lazy"
            />
          </div>
          <div class="formbuilder__select-plan">
            <select
              class="form-select select-plan__option"
              v-model="selectedPlans[fb.id]"
            >
              <option
                v-for="plan in (fb?.plan || [])"
                :key="`${fb?.name || 'fb'}-${plan?.name}`"
                :value="plan?.name"
              >
                {{ plan?.name }} - ${{ plan?.amount }}/mo
              </option>
            </select>
          </div>
        </div>
      </div>

      <FormBuilderFeatureAccordion :grouped-features="groupedFeatures">
        <template #default="{ categoryFeatures }">
          <FormBuilderFeatureList :feature-list="categoryFeatures" />
          <div class="d-flex overflow-auto w-100">
            <div
              v-for="fb in selectedFormBuildersDetails"
              :key="fb.id"
              class="w-100"
            >
              <FormBuilderDetails
                :formBuilder="fb"
                :selectedPlans="selectedPlans"
                :feature-list="categoryFeatures"
                @onPlanChange="onPlanChange"
              />
            </div>
          </div>
        </template>
      </FormBuilderFeatureAccordion>
    </div>

    <!-- mobile -->
    <div class="d-lg-none mobile__formbuilder-details-wrapper d-flex flex-column mx-auto">
      <div
        v-for="fb in selectedFormBuildersDetails"
        :key="fb.id"
        class="d-flex flex-column"
      >
        <div class="formbuilder__logo-wrapper d-flex align-items-center justify-content-center text-center">
          <NuxtImg
            class="formbuilder__logo"
            :src="fb?.logo?.data?.attributes?.url || ''"
            :alt="fb?.name || 'Form builder logo'"
            height="40"
            loading="lazy"
          />
        </div>
        <div class="formbuilder__select-plan">
          <select
            class="form-select select-plan__option"
            v-model="selectedPlans[fb.id]"
          >
            <option
              v-for="plan in (fb?.plan || [])"
              :key="`${fb?.name || 'fb'}-${plan?.name}`"
              :value="plan?.name"
            >
              {{ plan?.name }} - ${{ plan?.amount }}/mo
            </option>
          </select>
        </div>

        <FormBuilderFeatureAccordion :grouped-features="groupedFeatures">
          <template #default="{ categoryFeatures }">
            <div class="d-flex overflow-auto w-100">
              <FormBuilderFeatureList :feature-list="categoryFeatures" />
              <div class="w-100">
                <FormBuilderDetails
                  :formBuilder="fb"
                  :selectedPlans="selectedPlans"
                  :feature-list="categoryFeatures"
                  @onPlanChange="onPlanChange"
                />
              </div>
            </div>
          </template>
        </FormBuilderFeatureAccordion>
      </div>
    </div>

    <div class="disparity__text-sm mt-5 text-center">
      Want to list your form?
      <a
        href="https://sxqzooev.formester.com/f/d6abd30c-aeaf-4d16-aa15-fab9c07a967d"
        target="_blank"
        class="disparity__text-link"
      >Click Here</a>
    </div>
    <div class="disparity__text-sm mt-2 text-center">
      <a
        href="https://sxqzooev.formester.com/f/dc66d38b-49a1-4d79-b53c-b44c2f5925c6"
        target="_blank"
        class="disparity__text-link"
      >Click here</a>
      to report any disparity in the information provided.
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import FormBuilderFeatureList from '@/components/comparision/FormBuilderFeatureList.vue'
import FormBuilderDetails from '@/components/comparision/FormBuilderDetails.vue'
import FormBuilderFeatureAccordion from '@/components/comparision/FormBuilderFeatureAccordion.vue'

const props = defineProps({
  selectedFormBuildersDetails: {
    type: Array,
    required: true
  },
  formBuilders: {
    type: Array,
    required: true
  }
})

// reactive map: fb.id -> plan name
const selectedPlans = reactive({})

// runtime config + fetch features from Strapi
const config = useRuntimeConfig()

// useFetch returns { data, pending, error }
const { data: featureResp, error: featureError } = await useFetch(
  () => `${config.public.strapiUrl}/api/form-builder-features`,
  {
    query: { sort: 'createdAt', populate: 'category' },
    // If you fetch on client only, uncomment:
    // server: false,
    // key helps Nuxt cache/dedupe between SSR/CSR
    key: 'form-builder-features'
  }
)

const featureList = ref([])

// Safely parse Strapi v4 response shapes
watch(
  () => featureResp.value,
  (val) => {
    // Some setups return { data: [...] }, others nest more deeply when proxied.
    const arr =
      (val && Array.isArray(val.data) && val.data) ||
      (val && val.data && Array.isArray(val.data.data) && val.data.data) ||
      []
    featureList.value = arr.map((item) => ({
      id: item.id,
      ...(item.attributes || {})
    }))
  },
  { immediate: true }
)

// (Re)seed selected plans whenever formBuilders changes
watch(
  () => props.formBuilders,
  (builders) => {
    if (!builders) return
    builders.forEach((fb) => {
      const firstPlan = fb && Array.isArray(fb.plan) && fb.plan.length ? fb.plan[0].name : ''
      if (fb && selectedPlans[fb.id] == null) {
        selectedPlans[fb.id] = firstPlan
      }
    })
  },
  { immediate: true, deep: true }
)

// Group features into ordered categories
const groupedFeatures = computed(() => {
  const base = {
    'Usage limits': null,
    'Form Fields & Creation': null,
    'Quiz Features': null,
    Branding: null,
    Customization: null,
    'Publishing & Sharing': null,
    'Workflow Automation': null,
    'Payment Integrations': null,
    'CRM Integrations': null,
    'Email Marketing Integrations': null,
    'Collaboration Tool Integrations': null,
    'Ecommerce Integrations': null,
    'Reporting & Analytics': null,
    'Set Response & Time Limits': null,
    'Email Notification': null,
    'AI Capabilities': null,
    'Spam Protection': null,
    'Security & Compliance': null,
    Support: null
  }

  const grouped = { ...base }

  featureList.value.forEach((feature) => {
    const cat = (feature && feature.category && feature.category.name) || 'Other'
    if (!(cat in grouped)) grouped[cat] = null
    if (grouped[cat] === null) grouped[cat] = { name: cat, features: [] }
    grouped[cat].features.push(feature)
  })

  Object.values(grouped).forEach((cat) => {
    if (cat) {
      cat.features.sort((a, b) => {
        const posA = (a.category && a.category.position) != null ? a.category.position : Infinity
        const posB = (b.category && b.category.position) != null ? b.category.position : Infinity
        if (posA === posB) return (a.name || '').localeCompare(b.name || '')
        return posA - posB
      })
    }
  })

  return Object.values(grouped).filter(Boolean)
})

// Uniform plan-change handler (don’t depend on child’s custom event payload)
function onPlanChange(e) {
  const el = e && e.target
  const formBuilderId = el && el.getAttribute && el.getAttribute('data-formbuilder-id')
  if (!formBuilderId || !el) return
  selectedPlans[formBuilderId] = el.value
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
  transform: scale(0.8);
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

.formbuilder__logo-container {
  position: sticky;
  top: 86px;
  background: white;
  padding-left: 354px;
  z-index: 100;
}

.formbuilder__select-plan {
  margin: 28px auto 32px;
  max-width: 200px;
}

/* === mobile === */
.mobile__formbuilder-details-wrapper .formbuilder__select-plan {
  margin: 12px auto 20px;
}

@media screen and (max-width: 992px) {
  .mobile__formbuilder-details-wrapper {
    gap: 48px;
    overflow: hidden;
  }
}

@media screen and (max-width: 1200px) {
  .formbuilder__logo {
    transform: scale(1);
  }
}
</style>
