<template>
  <component :is="iconComponent" :size="size" :stroke-width="strokeWidth" :color="color" aria-hidden="true" />
</template>

<script>
import * as lucide from 'lucide-vue-next'

// kebab-case ("file-check-2") -> PascalCase ("FileCheck2")
function toPascal(name) {
  return String(name || '')
    .split('-')
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

export default {
  name: 'LucideIcon',
  props: {
    name: { type: String, default: '' },
    size: { type: [Number, String], default: 18 },
    strokeWidth: { type: [Number, String], default: 2 },
    color: { type: String, default: 'currentColor' },
    fallback: { type: String, default: 'FileText' }, // used when name is empty/unknown
  },
  computed: {
    iconComponent() {
      return lucide[toPascal(this.name)] || lucide[this.fallback]
    },
  },
}
</script>
