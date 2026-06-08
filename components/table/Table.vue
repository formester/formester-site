<template>
  <section class="v2-table-section">
    <div class="v2-table-inner">
      <SectionTitle :heading="title" />
      <div class="v2-table-scroll">
        <table class="tablestyle">
          <thead>
            <TableRow
              :rowData="rows[0].rowData"
              :rowType="rows[0].rowType"
              :highlightColumn="highlightColumn"
            />
          </thead>
          <tbody>
            <TableRow
              v-for="(row, index) in rows.slice(1)"
              :key="index"
              :rowData="row.rowData"
              :rowType="row.rowType"
              :highlightColumn="highlightColumn"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import TableRow from './TableRow.vue'

export default {
  props: {
    title: {
      type: Array,
      required: true,
    },
    rows: Array,
    highlightColumn: {
      type: Number,
      default: null,
    },
  },
  components: {
    TableRow,
  },
}
</script>

<style scoped>
.v2-table-section {
  padding: var(--space-16) var(--space-6);
}

.v2-table-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.v2-table-scroll {
  margin-top: var(--space-8);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: var(--r-2xl);
}

.tablestyle {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: inherit;
  background: #fff;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-xs);
  table-layout: fixed;
  border-radius: var(--r-2xl);
  overflow: hidden;
}

/* Cell separators are drawn in TableRow (cells live in that child scope).
   Strip the final row's border here via :deep so the rounded corner reads clean. */
.tablestyle tbody tr:last-child :deep(td) {
  border-bottom: none;
}

@media (max-width: 600px) {
  .v2-table-section {
    padding: var(--space-12) var(--space-4);
  }
  .tablestyle {
    min-width: 560px;
  }
}
</style>
