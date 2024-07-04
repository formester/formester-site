<template>
  <div class="comparison-option-select__card">
    <div
      class="comparison__logo-wrapper d-flex justify-content-center align-items-center"
    >
      <img
        class="form-builder-logo"
        v-if="modelSelectedOption"
        :src="formBuildersLogoSrc[modelSelectedOption]"
      />
      <nuxt-img v-else src="/form-building-platforms/plus.svg" />
    </div>
    <div class="comparison__dropdown-wrapper">
      <select
        class="form-select"
        v-model="modelSelectedOption"
        @change="emitChange"
      >
        <option disabled value="">Select a tool</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardNumber: {
      type: Number,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: String,
      default: '',
    },
    formBuildersLogoSrc: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modelSelectedOption: this.selectedOption,
    }
  },
  methods: {
    emitChange() {
      this.$emit('change', this.modelSelectedOption, this.cardNumber)
    },
  },
}
</script>

<style scoped>
.comparison-option-select__card {
  border-radius: 4px;
  border: 1px solid #eaecf0;
  box-shadow: var(--box-shadow-lg);
}

.comparison__logo-wrapper {
  padding: 48px 24px 12px;
  min-height: 154px;
}

.form-builder-logo {
  max-height: 40px;
}

.comparison__dropdown-wrapper {
  border-top: 1px solid #eaecf0;
  padding: 40px 24px 72px;
}
</style>
