<template>
  <nuxt-link
    to="/pricing/"
    class="d-flex align-items-center justify-content-center gap-8 bg__banner py-3"
  >
    <nuxt-img src="/blackfriday.svg" />
    <p class="banner__text ms-2">Don’t miss out <b>40% </b>off</p>
    <nuxt-img src="/confetti.svg" />
    <nuxt-img src="/chevron-right.svg" />
  </nuxt-link>
</template>

<style scoped>
.bg__banner {
  background-color: #15034c;
  color: white;
}

.banner__text {
  font-size: 24px;
  margin: 0;
}

.gap-8 {
  gap: 8px;
}
</style>
