<template>
  <div>
    <ComparisonToolHero />
    <div class="container">
      <div class="comparison_card-container mx-auto my-5">
        <div
          v-for="(selectedFB, index) in selectedFormBuildersOption"
          :key="selectedFB + index"
        >
          <ComparisonOptionCard
            :options="filteredOptions(index)"
            :selected-option="selectedFB"
            :card-number="index"
            :form-builders-logo-src="formBuildersLogoSrc"
            @change="handleOptionChange"
          />
        </div>
      </div>
      <FormBuilderComparisonTable
        :selected-form-builders-details="selectedFormBuildersDetails"
        :feature-name-list="featureNameList"
        :form-builders="formBuilders"
      />
      <!-- <div
        v-if="!selectedFormBuildersOption.filter(Boolean).length"
        class="my-5"
      >
        <h2 class="section__heading">Popular Form Builder Comparisons</h2>
        <div class="section__grid">
          <ComparisonCard
            imgSrc="/form-building-platforms/formester-vs-typeform.svg"
            formBuilder1="Formester"
            formBuilder2="Typeform"
            @onViewComparisonButtonClick="handleViewComparisonClick"
          />
          <ComparisonCard
            imgSrc="/form-building-platforms/jotform-vs-typeform.svg"
            formBuilder1="Jotform"
            formBuilder2="Typeform"
            @onViewComparisonButtonClick="handleViewComparisonClick"
          />
          <ComparisonCard
            imgSrc="/form-building-platforms/formester-vs-jotform.svg"
            formBuilder1="Formester"
            formBuilder2="Jotform"
            @onViewComparisonButtonClick="handleViewComparisonClick"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import ComparisonToolHero from '@/components/comparision/ComparisonToolHero.vue'
import ComparisonOptionCard from '@/components/comparision/ComparisonOptionCard.vue'
import ComparisonCard from '@/components/comparision/ComparisonCard.vue'
import FormBuilderComparisonTable from '@/components/comparision/FormBuilderComparisonTable.vue'
import { featureNameList } from '@/constants/plan'
import getSiteMeta from '@/utils/getSiteMeta'
import axios from 'axios'

export default {
  components: {
    ComparisonToolHero,
    ComparisonOptionCard,
    ComparisonCard,
    FormBuilderComparisonTable,
  },
  async asyncData() {
    const {
      data: { data },
    } = await axios.get(`${process.env.strapiUrl}/api/form-builders`, {
      params: {
        sort: 'name',
        populate: [
          'logo',
          'plan',
          'plan.features',
          'plan.features.form_builder_feature',
        ],
      },
    })

    let formBuilders = data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }))

    const options = formBuilders.map((fb) => fb.name)

    return { formBuilders, options }
  },
  data() {
    return {
      selectedFormBuildersOption: ['', '', '', ''],
      featureNameList,
      selectedFormBuildersDetails: [],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/comparison-tool/',
        title: 'Easy way to compare Form Builders!',
      }
      return getSiteMeta(metaData)
    },
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
      const selectedOptions = this.selectedFormBuildersOption.filter(Boolean)
      return this.options.filter(
        (option) =>
          !selectedOptions.includes(option) ||
          this.selectedFormBuildersOption[cardNumber] === option
      )
    },
    handleOptionChange(selectedOption, cardNumber) {
      const oldOption = this.selectedFormBuildersOption[cardNumber]
      this.$set(this.selectedFormBuildersOption, cardNumber, selectedOption)

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
    handleViewComparisonClick(formBuilder1, formBuilder2) {
      this.handleOptionChange(formBuilder1, 0)
      this.handleOptionChange(formBuilder2, 1)
    },
  },
  head() {
    return {
      title: 'Easy way to compare Form Builders!',
      description:
        'Compare form builders side by side with Formester’s comparison tool. Find the best form builder for your needs with ease!',
      meta: [...this.meta],
      keywords:
        'form builder, form builder comparison, form builder comparison tool',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://formester.com/comparison-tool/',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': 'https://acornglobus.com',
          name: 'Easy way to compare Form Builders!',
          description:
            'Compare form builders side by side with Formester’s comparison tool. Find the best form builder for your needs with ease!',
          logo: 'https://formester.com/logo.png',
          url: 'https://formester.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delaware',
            addressCountry: 'United States',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://acornglobus.com',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Formester',
              item: 'https://formester.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Easy way to compare Form Builders!',
              item: 'https://formester.com/comparison-tool/',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.comparison_card-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px;
}

.section__heading {
  color: var(--clr-text-primary);
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;
  margin-bottom: 32px;
}

.section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
}

@media screen and (max-width: 1200px) {
  .comparison_card-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
}

@media screen and (max-width: 768px) {
  .comparison_card-container {
    grid-template-columns: 1fr;
  }

  .section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
