<template>
   <PageComponents endpoint="features" :params="{'filters[slug][$eqi]': slug}" />
</template>

<script>
import PageComponents from '@/components/PageComponents.vue'
export default {
  components: { PageComponents },
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
}
</script>