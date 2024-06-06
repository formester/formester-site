<template>
  <div class="comparison__card">
    <div class="comparison__logo-wrapper text-center">
      <nuxt-img
        v-if="selectedOption"
        :src="formBuilderLogoSrc[selectedOption]"
      />
      <nuxt-img v-else src="/form-building-platform/plus.svg" />
    </div>
    <div class="comparison__dropdown-wrapper">
      <select class="form-select" v-model="selectedOption">
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
      default: null,
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
  padding: 80px 24px 40px;
}

.comparison__dropdown-wrapper {
  border-top: 1px solid #eaecf0;
  padding: 40px 24px 72px;
}
</style>
