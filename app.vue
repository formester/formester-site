<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Default self-referencing canonical for every route. Pages that declare
// their own `hid: 'canonical'` link via useHead() override this one.
const route = useRoute()
useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: computed(() => `https://formester.com${route.path.endsWith('/') ? route.path : `${route.path}/`}`),
    },
  ],
})
</script>
