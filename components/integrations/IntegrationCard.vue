<template>
  <div class="d-flex flex-column align-items-start">
    <div class="img__box">
      <nuxt-img :src="`/integrations/${app.img}`" />
    </div>
    <nuxt-link
      v-if="app.url"
      :to="app.url"
      class="mt-4 app__name"
    >
        {{ app.name }}
        <nuxt-img src="/integrations/link.png" alt="redirect-link" class="redirect-link" />
    </nuxt-link>
    <h5 v-else class="mt-4 app__name">{{ app.name }}</h5>
    <p>{{ app.desc }}</p>
  </div>
</template>

<script>
export default {
  props: ['app'],
}
</script>

<style scoped>
.img__box {
  padding: 20px;
  box-shadow: 0px 63.34px 100.827px rgba(55, 0, 108, 0.04),
    0px 24.3976px 32.1153px rgba(55, 0, 108, 0.0242963),
    0px 5.16104px 8.21553px rgba(55, 0, 108, 0.0157037);
  border-radius: 0.5em;
}
.img__box img{
    height: 60px;
    width: 60px;
}
.app__name {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 32px;
}
.redirect-link{
    height: 18px;
    width: 18px;
    margin-left: 2px;
    margin-bottom: 2px;
}
</style>
