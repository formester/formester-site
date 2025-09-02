<template>
  <component :is="cellType" :style="textStyle">
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    text: String,
    isHighlighted: Boolean,
    textColor: String,
    isBold: Boolean,
    bold: {
      type: Boolean,
      default: null, // can be true, false, or null
    },
    cellType: {
      type: String,
      default: 'td',
      validator: (value) => ['td', 'th'].includes(value),
    },
  },
  computed: {
    textStyle() {
      return {
        color: this.textColor || 'inherit',
        fontWeight: this.bold || this.isBold ? 'bold' : 'normal',
        backgroundColor: this.isHighlighted ? '#f8f9fa' : 'transparent',
      };
    },
  },
};
</script>
