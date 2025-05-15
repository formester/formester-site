<template>
  <component :is="cellType">
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
      default: null,
    },
    cellType: {
      type: String,
      default: 'td',
    }
  }
};
</script>

<style scoped>
.cell__icon {
  width: 24px;
  height: 24px;
}
</style>
