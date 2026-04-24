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
      default: 'span',
      validator: (value) => ['td', 'th', 'span', 'div'].includes(value),
    },
  },
  computed: {
    textStyle() {
      return {
        color: this.textColor || 'inherit',
        fontWeight: this.bold || this.isBold ? 'bold' : 'normal',
        backgroundColor: this.isHighlighted ? '#f8f9fa' : 'transparent',
        display: this.cellType === 'span' ? 'inline-block' : 'block',
      };
    },
  },
};
</script>
