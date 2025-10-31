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

<script setup>
import { defineAsyncComponent } from 'vue'
import componentMapping from '@/constants/componentMapping'

const props = defineProps({
  components: {
    type: Array,
    default: () => [],
  },
})

const loadedComponents = {}

const getComponent = (name) => {
  if (!componentMapping[name]) {
    return null
  }
  
  // Cache the async component
  if (!loadedComponents[name]) {
    loadedComponents[name] = defineAsyncComponent({
      loader: componentMapping[name]
    })
  }
  
  return loadedComponents[name]
}
</script>
