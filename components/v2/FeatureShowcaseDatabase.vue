<template>
  <div class="fsv-db">
    <div class="fsv-db__table">
      <div class="fsv-db__toolbar">
        <div>
          <span class="fsv-db__eyebrow">Database</span>
          <strong class="fsv-db__title">Client records</strong>
        </div>
        <span class="fsv-db__import">3 sources connected</span>
      </div>

      <div class="fsv-db__columns">
        <span>Name</span>
        <span>Status</span>
        <span>Source</span>
      </div>
      <div v-for="record in records" :key="record.name" class="fsv-db__row">
        <span class="fsv-db__person">
          <span class="fsv-db__avatar">{{ record.initials }}</span>
          {{ record.name }}
        </span>
        <span :class="['fsv-db__status', `fsv-db__status--${record.statusKey}`]">{{ record.status }}</span>
        <span class="fsv-db__source">{{ record.source }}</span>
      </div>
    </div>

    <div class="fsv-db__uses">
      <span class="fsv-db__uses-label">Use this data in</span>
      <span class="fsv-db__use">Forms</span>
      <span class="fsv-db__use">Documents</span>
      <span class="fsv-db__use">Workflows</span>
    </div>
  </div>
</template>

<script setup>
const records = [
  { initials: 'AK', name: 'Aarav Kumar', status: 'Ready', statusKey: 'ready', source: 'Form' },
  { initials: 'MS', name: 'Maya Shah', status: 'Review', statusKey: 'review', source: 'HubSpot' },
  { initials: 'RN', name: 'Rohan Nair', status: 'New', statusKey: 'new', source: 'CSV import' },
]
</script>

<style scoped>
.fsv-db {
  position: relative;
  width: 100%;
  max-width: 360px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
}

.fsv-db__table {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #bae6fd;
  border-radius: var(--r-2xl);
  box-shadow: 0 22px 48px -20px rgba(3, 105, 161, 0.3);
  animation: db-table-in 0.5s ease both;
}

.fsv-db__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  border-bottom: 1px solid #e0f2fe;
}

.fsv-db__eyebrow,
.fsv-db__title {
  display: block;
}

.fsv-db__eyebrow {
  color: #0284c7;
  font-size: 8px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.fsv-db__title {
  margin-top: 2px;
  color: var(--fg-1);
  font-size: 12px;
}

.fsv-db__import {
  padding: 4px 8px;
  color: #0369a1;
  background: #f0f9ff;
  border-radius: var(--r-full);
  font-size: 8px;
  font-weight: var(--fw-semibold);
}

.fsv-db__columns,
.fsv-db__row {
  display: grid;
  grid-template-columns: 1.35fr 0.75fr 0.8fr;
  align-items: center;
  column-gap: var(--space-2);
}

.fsv-db__columns {
  padding: 8px var(--space-4);
  color: var(--fg-muted);
  background: #f8fcff;
  font-size: 8px;
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
}

.fsv-db__row {
  min-height: 49px;
  padding: 0 var(--space-4);
  color: var(--fg-1);
  border-top: 1px solid #f0f9ff;
  font-size: 9px;
}

.fsv-db__person {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: var(--fw-semibold);
}

.fsv-db__avatar {
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(135deg, #38bdf8, #2563eb);
  border-radius: var(--r-full);
  font-size: 7px;
  font-weight: var(--fw-bold);
}

.fsv-db__status {
  justify-self: start;
  padding: 3px 7px;
  border-radius: var(--r-full);
  font-size: 8px;
  font-weight: var(--fw-semibold);
}

.fsv-db__status--ready {
  color: #047857;
  background: #ecfdf5;
}
.fsv-db__status--review {
  color: #b45309;
  background: #fffbeb;
}
.fsv-db__status--new {
  color: #1d4ed8;
  background: #eff6ff;
}

.fsv-db__source {
  color: var(--fg-muted);
  font-size: 8px;
}

.fsv-db__uses {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  width: 92%;
  margin-left: auto;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #bae6fd;
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-sm);
  animation: db-uses-in 0.5s 0.12s ease both;
}

.fsv-db__uses-label {
  margin-right: 2px;
  color: var(--fg-muted);
  font-size: 8px;
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
}

.fsv-db__use {
  padding: 4px 7px;
  color: #0369a1;
  background: #f0f9ff;
  border-radius: var(--r-full);
  font-size: 8px;
  font-weight: var(--fw-semibold);
}

@keyframes db-table-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes db-uses-in {
  from {
    opacity: 0;
    transform: translateX(18px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
