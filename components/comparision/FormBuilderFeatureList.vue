<template>
  <div class="feature__list d-flex flex-column">
    <div
      v-for="(feature, index) in featureList"
      :key="feature.id"
      class="feature__cell d-flex"
    >
      <div :title="feature.title" class="feature__title">
        {{ feature.title }}
      </div>
      <div v-if="feature.description" class="custom__tooltip ms-1">
        <img
          class="question__icon"
          src="@/assets/images/icons/question.svg"
          alt="question icon"
        />
        <span class="custom__tooltiptext">{{ feature.description ?? '' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featureList: {
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
  min-width: fit-content;
}

.feature__cell {
  padding: 20px 24px;
  border-bottom: 1px solid #eaecf0;
  min-width: 242px;
}

.feature__cell:first-child {
  border-top: 1px solid #eaecf0;
}

.feature__cell:last-child {
  border-bottom: none;
}

.feature__title {
  max-width: 172px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  z-index: 10;
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
  }

  .feature__cell {
    font-size: 13px;
    padding: 16px 12px;
  }
}
</style>
