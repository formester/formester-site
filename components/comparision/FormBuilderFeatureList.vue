<template>
  <div class="feature__list d-flex flex-column">
    <div
      v-for="(featureName, index) in featureNameList"
      :key="featureName"
      class="feature__cell"
      :class="{ 'alternate-bg': index % 2 !== 0 }"
    >
      {{ featureName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featureNameList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.feature__list {
  color: var(--clr-text-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 58px;
  min-width: fit-content;
}

.feature__cell {
  padding: 20px 24px;
}

.feature__cell.alternate-bg {
  background-color: #f9fafb;
}

/* === mobile === */
@media screen and (max-width: 992px) {
  .feature__list {
    min-width: fit-content;
    margin-top: 19px;
  }

  .feature__cell {
    font-size: 13px;
    padding: 16px 12px;
  }
}
</style>
