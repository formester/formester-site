<template>
  <component :is="cellType" :style="textStyle">
    <span v-if="!iconSrc">{{ text }}</span>
    <span v-else-if="iconSrc">
      <nuxt-img class="cell__icon" :src="iconSrc" :alt="cellIcon.imageAlt || text || ''" />
    </span>
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
      validator(value) {
        return ['td', 'th'].includes(value);
      },
    },
    cellIcon: {
      type: Object,
      default: () => (null)
    }
  },
  computed: {
    iconSrc() {
      if (!this.cellIcon) return null;
      
      // Case 1: Direct URL in image object
      if (this.cellIcon.image?.url) {
        return this.cellIcon.image.url;
      }
      
      // Case 2: Direct imageUrl property
      if (this.cellIcon.imageUrl) {
        return this.cellIcon.imageUrl;
      }
      
      // Case 3: Uploaded image in Strapi v4
      if (this.cellIcon.image?.data?.attributes?.url) {
        return this.cellIcon.image.data.attributes.url;
      }

      // Case 4: Direct upload in Strapi (your specific case)
      if (this.cellIcon.image && typeof this.cellIcon.image === 'object' && this.cellIcon.image.url) {
        return this.cellIcon.image.url;
      }
      
      return null;
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
