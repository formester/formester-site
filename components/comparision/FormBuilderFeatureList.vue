<template>
  <div class="feature__list d-flex flex-column">
    <div
      v-for="(featureName, index) in featureNameList"
      :key="featureName"
      class="feature__cell"
      :class="{ 'alternate-bg': index % 2 !== 0 }"
    >
      {{ featureName }}
      <!-- <div class="custom__tooltip">
        <img
          class="question__icon"
          src="@/assets/images/icons/question.svg"
          alt="question icon"
        />
        <span class="custom__tooltiptext"></span>
      </div> -->
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

.question__icon {
  margin-left: 2px;
}

/* custom__tooltip container */

.custom__tooltip {
  position: relative;
  display: inline-block;
}

/* custom__tooltip text */
.custom__tooltip .custom__tooltiptext {
  visibility: hidden;
  min-width: 250px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 4px 4px;
  border-radius: 6px;

  /* Position the custom__tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in custom__tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* custom__tooltip arrow */
.custom__tooltip .custom__tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 24%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the custom__tooltip text when you mouse over the custom__tooltip container */
.custom__tooltip:hover .custom__tooltiptext {
  visibility: visible;
  opacity: 1;
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
