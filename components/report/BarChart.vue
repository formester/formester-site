<template>
  <figure class="rbar">
    <figcaption v-if="title" class="rbar__title">{{ title }}</figcaption>

    <div class="rbar__rows">
      <div v-for="(row, i) in rows" :key="row.label" class="rbar__row">
        <span class="rbar__label">{{ row.label }}</span>
        <span class="rbar__track">
          <span class="rbar__fill" :class="{ 'rbar__fill--dim': row.dim }" :style="{ width: width(row.value) }" />
          <span v-if="refLine" class="rbar__ref" :style="{ left: width(refLine.value) }" />
          <span v-if="refLine && i === 0" class="rbar__reflabel" :style="{ left: width(refLine.value) }">{{ refLine.label }}</span>
        </span>
        <span class="rbar__value">{{ row.display }}</span>
      </div>
    </div>

    <p v-if="note" class="rbar__note">{{ note }}</p>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  rows: { type: Array, required: true },
  max: { type: Number, default: 0 },
  refLine: { type: Object, default: null },
  note: { type: String, default: '' },
})

const ceiling = computed(() => props.max || Math.max(...props.rows.map((r) => r.value)) * 1.02)
const width = (v) => `${(v / ceiling.value) * 100}%`
</script>

<style scoped>
.rbar {
  margin: 0;
  border: 1px solid var(--border-light);
  border-radius: 14px;
  background: var(--bg-primary);
  padding: 20px 18px;
}

.rbar__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--fg-1);
  line-height: 1.4;
  margin-bottom: 16px;
}

.rbar__rows {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rbar__row {
  display: grid;
  grid-template-columns: 178px minmax(0, 1fr) 62px;
  align-items: center;
  gap: 12px;
}

.rbar__label {
  font-size: 13px;
  color: var(--fg-strong);
  line-height: 1.35;
}

.rbar__track {
  position: relative;
  display: block;
  height: 22px;
  background: var(--bg-grey-75);
  border-radius: 4px;
  min-width: 0;
}

.rbar__fill {
  display: block;
  height: 100%;
  background: var(--color-primary);
  border-radius: 4px;
  transition: width 0.4s ease;
}

.rbar__fill--dim {
  background: var(--violet-300);
}

.rbar__ref {
  position: absolute;
  top: -4px;
  bottom: -4px;
  width: 0;
  border-left: 1px dashed var(--fg-strong);
}

.rbar__reflabel {
  position: absolute;
  top: -20px;
  transform: translateX(4px);
  font-size: 11px;
  color: var(--fg-2);
  white-space: nowrap;
}

.rbar__value {
  font-size: 13px;
  font-weight: 600;
  color: var(--fg-1);
  text-align: right;
}

.rbar__note {
  font-size: 13px;
  color: var(--fg-3);
  margin: 14px 0 0;
}

@media (max-width: 640px) {
  .rbar {
    padding: 16px 14px;
  }

  .rbar__row {
    grid-template-columns: minmax(0, 1fr) 58px;
    grid-template-areas:
      'label label'
      'track value';
    row-gap: 4px;
  }

  .rbar__label {
    grid-area: label;
    font-size: 12.5px;
  }

  .rbar__track {
    grid-area: track;
    height: 18px;
  }

  .rbar__value {
    grid-area: value;
  }

  .rbar__reflabel {
    display: none;
  }
}
</style>
