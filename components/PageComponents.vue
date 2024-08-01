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
    params: {
      type: Object,
      default: {}
    }
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
        ...this.params,
        populate: 'deep',
      },
    })
    this.components = data.components || data[0].components
  },
  methods: {
    getComponent(name) {
      return componentMapping[name] || null
    },
  },
}
</script>
