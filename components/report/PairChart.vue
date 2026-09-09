<template>
  <figure class="rpair">
    <figcaption v-if="title" class="rpair__title">{{ title }}</figcaption>

    <div class="rpair__grid">
      <div v-for="pair in pairs" :key="pair.label" class="rpair__cell">
        <span class="rpair__metric">{{ pair.label }}</span>
        <div class="rpair__plot">
          <div class="rpair__col">
            <span class="rpair__value">{{ pair.aiDisplay }}</span>
            <span class="rpair__bar" :style="{ height: h(pair, pair.ai) }" />
          </div>
          <div class="rpair__col">
            <span class="rpair__value">{{ pair.otherDisplay }}</span>
            <span class="rpair__bar rpair__bar--dim" :style="{ height: h(pair, pair.other) }" />
          </div>
        </div>
        <div class="rpair__legs">
          <span class="rpair__leg">Used AI</span>
          <span class="rpair__leg">Did not</span>
        </div>
      </div>
    </div>
  </figure>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  pairs: { type: Array, required: true },
})

const h = (pair, value) => `${(value / (Math.max(pair.ai, pair.other) * 1.05)) * 100}%`
</script>

<style scoped>
.rpair {
  margin: 0;
  border: 1px solid var(--border-light);
  border-radius: 14px;
  background: var(--bg-primary);
  padding: 20px 18px;
}

.rpair__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--fg-1);
  line-height: 1.4;
  margin-bottom: 18px;
}

.rpair__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.rpair__cell {
  min-width: 0;
}

.rpair__metric {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--fg-strong);
  line-height: 1.35;
  min-height: 34px;
}

.rpair__plot {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 132px;
  margin-top: 8px;
  border-bottom: 1px solid var(--border-light);
}

.rpair__col {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
}

.rpair__value {
  font-size: 12px;
  font-weight: 600;
  color: var(--fg-1);
}

.rpair__bar {
  display: block;
  width: 100%;
  max-width: 40px;
  background: var(--color-primary);
  border-radius: 4px 4px 0 0;
}

.rpair__bar--dim {
  background: var(--gray-300);
}

.rpair__legs {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}

.rpair__leg {
  flex: 1 1 0;
  min-width: 0;
  text-align: center;
  font-size: 10.5px;
  color: var(--fg-3);
}

@media (max-width: 720px) {
  .rpair__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
