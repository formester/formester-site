<template>
  <div>
    <component
      v-for="component in components"
      :key="component.id"
      :is="getComponent(component.__component)"
      v-bind="component"
    />
  </div>
</template>

<script>
import componentMapping from '@/constants/componentMapping'
import axios from 'axios'

export default {
  props: {
    endpoint: String,
  },
  data() {
    return {
      components: [],
    }
  },
  async fetch() {
    const {
      data: { data },
    } = await axios.get(`${process.env.strapiUrl}/api/${this.endpoint}`, {
      params: {
        populate: 'deep',
      },
    })
    this.components = data.components
  },
  methods: {
    getComponent(name) {
      return componentMapping[name] || null
    },
  },
}
</script>
