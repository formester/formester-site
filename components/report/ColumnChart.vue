<template>
  <figure class="rcol" :class="{ 'rcol--few': columns.length <= 6 }">
    <figcaption v-if="title" class="rcol__title">{{ title }}</figcaption>

    <div class="rcol__plot" :style="{ height: `${height}px` }">
      <div v-for="col in columns" :key="col.label" class="rcol__col">
        <span class="rcol__value">{{ col.display }}</span>
        <span v-if="col.caption" class="rcol__caption">{{ col.caption }}</span>
        <span class="rcol__bar" :class="{ 'rcol__bar--dim': col.dim }" :style="{ height: barHeight(col.value) }" />
      </div>
    </div>

    <div class="rcol__labels">
      <span v-for="(col, i) in columns" :key="`x${col.label}`" class="rcol__label" :class="{ 'rcol__label--alt': i % 2 === 1 }">{{ col.label }}</span>
    </div>

    <p v-if="note" class="rcol__note">{{ note }}</p>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  columns: { type: Array, required: true },
  max: { type: Number, default: 0 },
  height: { type: Number, default: 240 },
  note: { type: String, default: '' },
})

const ceiling = computed(() => props.max || Math.max(...props.columns.map((c) => c.value)) * 1.12)
const barHeight = (v) => `${(v / ceiling.value) * 100}%`
</script>

<style scoped>
.rcol {
  margin: 0;
  border: 1px solid var(--border-light);
  border-radius: 14px;
  background: var(--bg-primary);
  padding: 20px 18px 16px;
}

.rcol__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--fg-1);
  line-height: 1.4;
  margin-bottom: 18px;
}

.rcol__plot {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border-bottom: 1px solid var(--border-light);
}

.rcol__col {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
}

.rcol__value {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--fg-1);
}

.rcol__caption {
  font-size: 10.5px;
  color: var(--fg-3);
  text-align: center;
  line-height: 1.25;
}

.rcol__bar {
  display: block;
  width: 100%;
  max-width: 54px;
  background: var(--color-primary);
  border-radius: 4px 4px 0 0;
  transition: height 0.4s ease;
}

.rcol__bar--dim {
  background: var(--violet-300);
}

.rcol__labels {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.rcol__label {
  flex: 1 1 0;
  min-width: 0;
  text-align: center;
  font-size: 11px;
  color: var(--fg-3);
}

.rcol__note {
  font-size: 13px;
  color: var(--fg-3);
  margin: 14px 0 0;
}

@media (max-width: 600px) {
  .rcol {
    padding: 16px 12px 12px;
  }

  .rcol__value {
    font-size: 10px;
  }

  .rcol__caption {
    display: none;
  }

  .rcol:not(.rcol--few) .rcol__label--alt {
    visibility: hidden;
  }

  .rcol--few .rcol__caption {
    display: block;
  }
}
</style>
