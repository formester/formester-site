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
        :selected-form-builders-details="filteredSelectedFormBuildersDetails"
        :feature-name-list="featureNameList"
        :form-builders="formBuilders"
      />

      <div
        v-if="!selectedFormBuildersOption.filter(Boolean).length"
        class="how-section"
      >
        <div class="how-section__header">
          <h2>How to Use the Tool?</h2>
          <p>
            Using our comparison tool to find the best form builder is simple
            and effective. First, select up to four form builders from our list
            that you want to compare.
          </p>
        </div>
        <div class="how-section__body">
          <div class="section-body__step step-1">
            <div class="step__content">
              <span>STEP 1</span>
              <h4>Select Form Builders</h4>
              <p>
                First, select up to four form builders from our list that you
                want to compare.
              </p>
            </div>
            <div class="step__image">
              <img
                src="../assets/images/comparision/how-to-use-step-1.svg"
                alt="Select Form Builders"
              />
            </div>
          </div>
          <div class="section-body__step step-2">
            <div class="step__content">
              <span>STEP 2</span>
              <h4>Select Right Plans for Each Form Builder</h4>
              <p>
                Then select the pricing plan of the tool you are trying to
                compare, Our tool will display a table with pricing plans and
                features. The features include conditional logic, form fields,
                email autoresponder, number of users, number of forms available,
                and more for each option. This makes it simple to compare the
                different options.
              </p>
            </div>
            <div class="step__image">
              <img
                src="../assets/images/comparision/how-to-use-step-2.svg"
                alt="Select Form Builders"
              />
            </div>
          </div>
          <div class="section-body__step step-3">
            <div class="step__content">
              <span>STEP 3</span>
              <h4>Compare different Form Builders</h4>
              <p>
                You can easily see what each form builder offers for each of
                their pricing plan, helping you decide which one suits your
                needs best. Find the best form builder for your business or
                personal use with our tool. Get all the information you need in
                one place. Our tool is made to help you save time and make
                decisions easier.
              </p>
            </div>
            <div class="step__image">
              <img
                src="../assets/images/comparision/how-to-use-step-3.svg"
                alt="Select Form Builders"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="!selectedFormBuildersOption.filter(Boolean).length"
        class="why-section"
      >
        <div class="why-section__content">
          <h2>Why Is This Tool Awesome?</h2>
          <p>
            This tool is great for easily finding the best form builder
            software. It works for small businesses, freelancers, and large
            companies. You can compare options quickly and effectively with our
            tool.
            <br /><br />
            Use our tool to find the best form software for your needs, whether
            it's for simple contact forms or complex surveys such as brand
            awareness surveys. Gain confidence in your choice with our
            comparison tool.
            <br /><br />
            You'll save a lot of time and effort by avoiding the need to visit
            multiple websites to gather information. Instead, we conveniently
            present everything you need in one place, making your
            decision-making process more informed!
          </p>
          <!-- <p>
            Use our tool to find the best form software for your needs, whether
            it's for simple contact forms or complex surveys such as brand
            awareness surveys. Gain confidence in your choice with our
            comparison tool.
          </p>
          <p>
            You'll save a lot of time and effort by avoiding the need to visit
            multiple websites to gather information. Instead, we conveniently
            present everything you need in one place, making your
            decision-making process more informed!
          </p> -->
        </div>
        <div class="why-section__image">
          <img
            src="../assets/images/comparision/why-this-tool-awesome.svg"
            alt="Why use comparison tool"
          />
        </div>
      </div>

      <div
        v-if="!selectedFormBuildersOption.filter(Boolean).length"
        class="features-section"
      >
        <h2>Key Features of Our Tool</h2>
        <div class="features-section__body">
          <div class="feature">
            <img
              src="../assets/images/comparision/features/feature-1.svg"
              alt="1"
            />
            <h6>Unique Tool</h6>
            <p>
              Our tool is unique because it lets you compare prices and features
              of the top form builder tools on the market.
            </p>
          </div>
          <div class="feature">
            <img
              src="../assets/images/comparision/features/feature-2.svg"
              alt="2"
            />
            <h6>Easy Comparison</h6>
            <p>
              You can easily customize your comparison by choosing up to four
              form builders at once. This helps you see a detailed comparison
              with a clear focus.
            </p>
          </div>
          <div class="feature">
            <img
              src="../assets/images/comparision/features/feature-3.svg"
              alt="3"
            />
            <h6>Compare Pricing Plans</h6>
            <p>
              You can compare pricing plans of online form builders to decide
              which one is best for you.
            </p>
          </div>
          <div class="feature">
            <img
              src="../assets/images/comparision/features/feature-4.svg"
              alt="4"
            />
            <h6>Find the best tool</h6>
            <p>
              This feature helps people find the best software for making forms.
              It shows which tool has the right features at the best price.
            </p>
          </div>
          <div class="feature">
            <img
              src="../assets/images/comparision/features/feature-5.svg"
              alt="5"
            />
            <h6>Regular Updates</h6>
            <p>
              Our tool is regularly updated to give you the most current and
              accurate information on all form builders.
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="!selectedFormBuildersOption.filter(Boolean).length"
        class="popular-comparisons"
      >
        <h2 class="popular-comparisons__heading">
          Popular Form Builder Comparisons
        </h2>
        <div class="popular-comparisons__grid">
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
      </div>

      <div
        v-if="!selectedFormBuildersOption.filter(Boolean).length"
        class="faq-section"
      >
        <h2>Frequently Asked Questions</h2>
        <div class="faq-section__body">
          <template v-for="(faq, index) in faqs">
            <FaqAccordion
              :id="index"
              :index="index"
              :name="faq.name"
              :content="faq.content"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComparisonToolHero from '@/components/comparision/ComparisonToolHero.vue'
import ComparisonOptionCard from '@/components/comparision/ComparisonOptionCard.vue'
import ComparisonCard from '@/components/comparision/ComparisonCard.vue'
import FormBuilderComparisonTable from '@/components/comparision/FormBuilderComparisonTable.vue'
import FaqAccordion from '@/components/comparision/FaqAccordion.vue'
import { featureNameList } from '@/constants/plan'
import getSiteMeta from '@/utils/getSiteMeta'
import axios from 'axios'

export default {
  components: {
    ComparisonToolHero,
    ComparisonOptionCard,
    ComparisonCard,
    FormBuilderComparisonTable,
    FaqAccordion,
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
      selectedFormBuildersDetails: { 0: null, 1: null, 2: null, 3: null },
      faqs: [
        {
          name: 'What key features should I look for in an online form builder?',
          content:
            'When choosing an online form builder, look for features like easy drag-and-drop design, a variety of templates, integration with other apps (like email and CRM tools), customizable fields, responsive design for mobile devices, and reliable customer support. These features will help you create effective forms that meet your needs.',
        },
        {
          name: 'How often do you update the information?',
          content: 'We keep our tool up to date with the latest pricing, features, and user feedback so you get the most current information.',
        },
        {
          name: 'Is there a cost to use your comparison tool?',
          content: "No, our tool is completely free for you to use. It's designed to help you make an informed decision without any fees.",
        },
        {
          name: 'Does the tool cover all the features of the pricing plans?',
          content: 'No, this tool focuses on comparing the most sought-after features among online form builders. While we strive to cover the essential features that most users look for, it may not include every detail of every pricing plan.\n We prioritize the features that are most commonly considered important by users to provide a clear and meaningful comparison.',
        },
        {
          name: 'How does your tool help me find the right form builder?',
          content: 'Our tool lets you compare prices and features of different form builders so you can easily pick the best one for your needs.',
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        url: 'https://formester.com/comparison-tool/',
        title: 'Easy way to compare Form Builders!',
        description: "Compare features and pricing of 30+ form builders. Unbiased analysis to help you choose the perfect tool for your needs."
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
    filteredSelectedFormBuildersDetails() {
      return Object.values(this.selectedFormBuildersDetails).filter(Boolean)
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
      this.$set(this.selectedFormBuildersOption, cardNumber, selectedOption)

      if (selectedOption) {
        const newFormBuilder = this.formBuilders.find(
          (fb) => fb.name === selectedOption
        )
        if (newFormBuilder) {
          this.selectedFormBuildersDetails[cardNumber] = newFormBuilder
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
      title:
        'Compare the Best Form Builder Software: Pricing & Features Comparison',
      description:
        'Find the best software to create forms. Use our comparison tool to see prices and features side-by-side. Find your form builder today!',
      meta: [...this.meta],
      keywords: [
        'best form builder',
        'best software to create forms',
        'best form software',
        'software to build forms',
        'best form buider tools',
      ],
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
          name: 'Compare the Best Form Builder Software: Pricing & Features Comparison',
          description:
            'Find the best software to create forms. Use our comparison tool to see prices and features side-by-side. Find your form builder today!',
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
              name: 'Compare the Best Form Builder Software: Pricing & Features Comparison',
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

/* How to use the tool */
.how-section {
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}
.how-section__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}
.how-section__header > h2 {
  color: var(--clr-text-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 0;
}
.how-section__header > p {
  color: var(--clr-neutral-700);
  font-size: 18px;
  font-weight: 400;
  max-width: 780px;
  margin-bottom: 0;
  line-height: 28px;
}
.how-section__body {
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.section-body__step {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 52px;
}
.step-1,
.step-3 {
  flex-direction: row;
}
.step-2 {
  flex-direction: row-reverse;
}
.step__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;
}
.step__content > span {
  color: var(--clr-primary-600);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.28px;
  text-transform: uppercase;
  margin-bottom: 0;
}
.step__content > h4 {
  color: var(--clr-text-primary);
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 0;
}
.step__content > p {
  color: var(--clr-neutral-700);
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 0;
}
.step__image {
  max-width: 600px;
  width: 50%;
}
.step__image > img {
  width: 100%;
}

/* Why is this tool awesome */
.why-section {
  margin-top: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 52px;
}
.why-section__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  width: 60%;
}
.why-section__content > h2 {
  color: var(--clr-text-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 0;
}
.why-section__content > p {
  color: var(--clr-neutral-700);
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 0;
}
.why-section__image {
  width: 40%;
}
.why-section__image > img {
  width: 100%;
}

/* Features Section */
.features-section {
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}
.features-section > h2 {
  color: var(--clr-text-primary);
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 0;
}
.features-section__body {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}
.feature {
  width: 360px;
  text-align: center;
  margin-bottom: 32px;
}
.feature > img {
  padding: 4px;
  border-radius: 50%;
  border: 8px solid #f9f5ff;
  background: #f4ebff;
  margin-bottom: 0.5rem;
}
.feature > h6 {
  color: var(--clr-text-primary);
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.feature > p {
  color: var(--clr-text-secondary);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0;
}

/* Popular Form Builder Comparisons */
.popular-comparisons {
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
}
.popular-comparisons__heading {
  color: var(--clr-text-primary);
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;
  margin-bottom: 0;
}
.popular-comparisons__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
}

.faq-section {
  margin: 128px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.faq-section > h2 {
  text-align: center;
}
.faq-section__body {
  margin: auto;
  width: 768px;
}

@media screen and (max-width: 1200px) {
  .comparison_card-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .popular-comparisons__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
}
@media screen and (max-width: 1024px) {
  .faq-section__body {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .comparison_card-container {
    grid-template-columns: 1fr;
  }

  /* How to use the tool */
  .how-section {
    gap: 64px;
  }
  .how-section__header > h2 {
    font-weight: 600;
    letter-spacing: -0.72px;
  }
  .how-section__body {
    gap: 48px;
  }
  .section-body__step {
    flex-direction: column-reverse;
    gap: 24px;
  }
  .step__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .step__content > span {
    font-size: 12px;
    line-height: 18px;
  }
  .step__content > h4 {
    font-size: 18px;
    line-height: 28px;
  }
  .step__content > p {
    font-size: 16px;
    line-height: 24px;
  }
  .step__image {
    width: 100%;
  }

  /* Why is this tool awesome */
  .why-section {
    gap: 56px;
    flex-direction: column-reverse;
  }
  .why-section__content {
    width: 100%;
    gap: 16px;
  }
  .why-section__content > h2 {
    text-align: center;
    font-weight: 600;
  }
  .why-section__content > p {
    text-align: center;
    line-height: 28px;
  }
  .why-section__image {
    width: 100%;
  }
  .why-section__image > img {
    width: 100%;
  }

  /* Features Section */
  .feature {
    margin-bottom: 0;
  }

  /* Popular Form Builder Comparisons */
  .popular-comparisons__grid {
    grid-template-columns: 1fr;
  }
}
</style>
