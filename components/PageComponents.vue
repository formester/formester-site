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
    components: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getComponent(name) {
      return componentMapping[name] || null
    },
  },
}
</script>
