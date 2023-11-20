<template>
  <nuxt-link
    to="/pricing/"
    class="d-flex align-items-center justify-content-center gap-8 bg__primary py-2"
  >
    <p class="banner__text">Don’t miss out 40% off Black Friday Deal</p>
    <nuxt-img src="/confetti.svg" />
    <nuxt-img src="/chevron-right.svg" />
  </nuxt-link>
</template>

<style scoped>
.bg__primary {
  background-color: var(--clr-primary);
  color: white;
}
  
.banner__text {
  font-size: 18px;
  margin: 0;
}

.gap-8 {
  gap: 8px;
}
</style>
