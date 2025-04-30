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
      let fontWeight = 'normal';

      // Check if 'bold' is set explicitly
      if (this.bold === true) {
        fontWeight = '500'; // Bold
      } else if (this.bold === false) {
        fontWeight = 'normal'; // Normal weight
      } else if (this.isHighlighted) {
        fontWeight = '500'; // Semi-bold when highlighted
      }

      return {
        color: this.isHighlighted ? this.textColor : 'inherit',
        fontWeight: fontWeight, // Ensure font-weight is applied here
        verticalAlign: 'top',
      };
    },
  },
};
</script>
