<template>
  <section class="cmp-section" :style="{ background }">
    <div class="cmp-inner">
      <SectionHeader :eyebrow="eyebrow" :title="title" :description="description" />

      <div class="cmp-scroll">
        <table class="cmp-table" :class="{ 'cmp-table--wide': colThem2 }">
          <thead>
            <tr>
              <th class="cmp-th"></th>
              <th class="cmp-th cmp-th--us">{{ colUs }}</th>
              <th class="cmp-th">{{ colThem }}</th>
              <th v-if="colThem2" class="cmp-th">{{ colThem2 }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in rows" :key="i">
              <td class="cmp-feat">{{ row.feature }}</td>
              <td class="cmp-cell cmp-cell--us">
                <span class="cmp-yes">
                  <IconCheck :size="15" :stroke-width="2.6" />
                  {{ row.us }}
                </span>
              </td>
              <td class="cmp-cell">
                <span class="cmp-no">
                  <IconX v-if="isNegative(row.them)" :size="15" />
                  {{ row.them }}
                </span>
              </td>
              <td v-if="colThem2" class="cmp-cell">
                <span class="cmp-no">
                  <IconX v-if="isNegative(row.them2)" :size="15" />
                  {{ row.them2 }}
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
import IconCheck from '@/components/icons/IconCheck.vue'
import IconX from '@/components/icons/X.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: Array, default: () => [] },
  description: { type: String, default: '' },
  background: { type: String, default: '' },
  colUs: { type: String, default: 'Formester' },
  colThem: { type: String, default: 'Alternative' },
  // Optional second comparison column; rows then read `them2`.
  colThem2: { type: String, default: '' },
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
  .cmp-table--wide {
    min-width: 640px;
  }
}
</style>
