<template>
  <section class="cmp-section" :style="{ background }">
    <div class="cmp-inner">
      <SectionHeader :eyebrow="eyebrow" :title="title" :description="description" />

      <div class="cmp-scroll">
        <table class="cmp-table">
          <thead>
            <tr>
              <th class="cmp-th"></th>
              <th class="cmp-th cmp-th--us">{{ colUs }}</th>
              <th class="cmp-th">{{ colThem }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in rows" :key="i">
              <td class="cmp-feat">{{ row.feature }}</td>
              <td class="cmp-cell cmp-cell--us">
                <span class="cmp-yes">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  {{ row.us }}
                </span>
              </td>
              <td class="cmp-cell">
                <span class="cmp-no">
                  <svg
                    v-if="isNegative(row.them)"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.4"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                  {{ row.them }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="note" class="cmp-note">{{ note }}</div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/v2/SectionHeader.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  background: { type: String, default: '' },
  colUs: { type: String, default: 'Formester' },
  colThem: { type: String, default: 'Alternative' },
  rows: { type: Array, default: () => [] },
  note: { type: String, default: '' },
})

const isNegative = (v) => !v || /^(no|none|n\/a|—|-)$/i.test(String(v).trim())
</script>

<style scoped>
.cmp-section {
  padding: var(--space-16) var(--space-6);
}
.cmp-inner {
  max-width: 880px;
  margin: 0 auto;
}

.cmp-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: var(--r-xl);
}

.cmp-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #fff;
  border: 1px solid var(--gray-200);
  border-radius: var(--r-xl);
  overflow: hidden;
}
.cmp-th {
  text-align: left;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  color: var(--fg-2);
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--gray-200);
}
.cmp-th--us {
  color: var(--violet-600);
  background: var(--violet-50);
}

.cmp-feat {
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--fg-1);
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--gray-200);
}
.cmp-cell {
  font-size: var(--fs-sm);
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--gray-200);
  vertical-align: top;
}
.cmp-cell--us {
  background: var(--violet-50);
}
tr:last-child .cmp-feat,
tr:last-child .cmp-cell {
  border-bottom: none;
}

.cmp-yes {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--fg-1);
  font-weight: var(--fw-medium);
}
.cmp-yes svg {
  color: var(--violet-500);
  flex-shrink: 0;
}
.cmp-no {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--fg-muted);
}
.cmp-no svg {
  flex-shrink: 0;
}

.cmp-note {
  margin-top: var(--space-5);
  background: var(--violet-50);
  border: 1px solid #ece3fb;
  border-radius: var(--r-lg);
  padding: var(--space-4) var(--space-5);
  font-size: var(--fs-sm);
  line-height: 1.6;
  color: var(--fg-1);
}

@media (max-width: 600px) {
  .cmp-th,
  .cmp-feat,
  .cmp-cell {
    padding: var(--space-3);
    font-size: 13px;
  }
  /* keep columns readable — scroll instead of crushing the 3 columns */
  .cmp-table {
    min-width: 480px;
  }
}
</style>
