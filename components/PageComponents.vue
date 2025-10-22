<template>
  <div>
    <div v-if="!components || components.length === 0">
      <p>No components to display</p>
    </div>
    <component
      v-for="(component, idx) in components"
      :key="`${component.id}-${idx}`"
      :is="getComponent(component.__component)"
      v-bind="component"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import componentMapping from '@/constants/componentMapping'

export default {
  props: {
    components: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loadedComponents: {}
    }
  },
  methods: {
    getComponent(name) {
      if (!componentMapping[name]) {
        return null
      }
      
      // Cache the async component
      if (!this.loadedComponents[name]) {
        this.loadedComponents[name] = defineAsyncComponent({
          loader: componentMapping[name]
        })
      }
      
      return this.loadedComponents[name]
    },
  },
}
</script>
