<template>
  <div class="accordion-item">
    <h3 class="accordion-header" :id="headingId">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + collapseId"
        aria-expanded="false"
        :aria-controls="collapseId"
      >
        {{ title }}
      </button>
    </h3>
    <div
      :id="collapseId"
      class="accordion-collapse collapse"
      :aria-labelledby="headingId"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    headingId: {
      type: String,
      required: true,
    },
    collapseId: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.accordion-item {
  border: none;
  font-size: var(--ft-small-body);
}
.accordion-button {
  font-size: var(--ft-df-body);
  font-weight: 600;
  color: rgb(70, 70, 70);
}
.accordion-button:focus {
  box-shadow: none;
  background: none;
}
.accordion-body {
  padding: 0 1.25rem;
  width: 80%;
}
</style>
