<template>
  <div
    class="arrow-button"
    :class="{
      'left-arrow-button': direction === 'left',
      'right-arrow-button': direction === 'right',
    }"
    @click="$emit('click')"
  >
    <nuxt-img :src="arrowSrc" alt="Arrow" loading="lazy" />
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      required: true,
      validator: (value) => ['left', 'right'].includes(value),
    },
  },
  computed: {
    arrowSrc() {
      return this.direction === 'left'
        ? 'UI Block/Duotone/ArrowLeft.svg'
        : 'UI Block/Solid/32/ArrowRight.svg'
    },
  },
}
</script>

<style scoped>
.arrow-button {
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;
}

.left-arrow-button {
  background: var(--clr-primary-light);
}
.left-arrow-button:hover {
  background: var(--clr-primary-light-hover);
}

.right-arrow-button {
  background: var(--clr-primary);
}
.right-arrow-button:hover {
  background: var(--clr-primary-hover);
}

@media screen and (max-width: 768px) {
  .arrow-button {
    padding: 12px;
  }
}
</style>
