<template>
  <div class="comparison__card">
    <div class="comparison__logo-wrapper d-flex justify-content-center">
      <nuxt-img
        v-if="selectedOption"
        :src="formBuilderLogoSrc[selectedOption]"
        class="commparison__logo"
      />
      <nuxt-img
        v-else
        src="/form-building-platforms/plus.svg"
        class="commparison__logo"
      />
    </div>
    <div class="comparison__dropdown-wrapper">
      <select class="form-select" v-model="selectedOption">
        <option disabled hidden value="">Select a tool</option>
        <option
          v-for="option in options"
          :key="option"
          :selected="option === selectedOption"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    defaultSelectedOption: {
      type: String,
      default: '',
      validator(value) {
        return ['Formester', 'Typeform', 'Jotform', 'Fillout'].includes(value)
      },
    },
  },
  data() {
    return {
      selectedOption: this.defaultSelectedOption,
      formBuilderLogoSrc: {
        Formester: '/logo.svg',
        Typeform: '/form-building-platforms/typeform.svg',
        Jotform: '/form-building-platforms/jotform.svg',
        Fillout: '/form-building-platforms/fillout.svg',
      },
    }
  },
}
</script>

<style scoped>
.comparison__card {
  border-radius: 4px;
  border: 1px solid #eaecf0;
  box-shadow: var(--box-shadow-lg);
}

.comparison__logo-wrapper {
  padding: 48px 24px 12px;
  min-height: 154px;
}

.comparison__dropdown-wrapper {
  border-top: 1px solid #eaecf0;
  padding: 40px 24px 72px;
}
</style>
