<template>
  <div
    v-if="loading"
    class="d-flex justify-content-center full-height full-width align-items-center"
  >
    <div class="loader m-t-45" />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style>
.loader {
  width: 60px;
  height: 60px;
  border: 3px solid rgb(142, 142, 142);
  border-bottom: none;
  border-right: none;
  border-radius: 50%;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
