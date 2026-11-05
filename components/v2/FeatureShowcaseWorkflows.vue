<template>
  <div class="fsv-flow">
    <div class="fsv-flow__canvas">
      <div class="fsv-flow__header">
        <div>
          <span class="fsv-flow__eyebrow">Client onboarding</span>
          <strong class="fsv-flow__title">Workflow</strong>
        </div>
        <span class="fsv-flow__live">Live</span>
      </div>

      <div class="fsv-flow__steps">
        <div v-for="(step, index) in steps" :key="step.title" class="fsv-flow__step">
          <span :class="['fsv-flow__number', `fsv-flow__number--${step.kind}`]">{{ index + 1 }}</span>
          <div class="fsv-flow__step-copy">
            <strong>{{ step.title }}</strong>
            <span>{{ step.detail }}</span>
          </div>
          <span :class="['fsv-flow__state', `fsv-flow__state--${step.stateKey}`]">{{ step.state }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  { title: 'Client submits intake', detail: 'Form step', state: 'Done', stateKey: 'done', kind: 'form' },
  { title: 'Team reviews details', detail: 'Human approval', state: 'Active', stateKey: 'active', kind: 'review' },
  { title: 'Generate agreement', detail: 'Document step', state: 'Next', stateKey: 'next', kind: 'document' },
  { title: 'Send for signature', detail: 'Final step', state: 'Queued', stateKey: 'next', kind: 'sign' },
]
</script>

<style scoped>
.fsv-flow {
  position: relative;
  width: 100%;
  max-width: 340px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fsv-flow__canvas {
  width: 100%;
  padding: var(--space-4);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #c7d2fe;
  border-radius: var(--r-2xl);
  box-shadow: 0 22px 50px -22px rgba(79, 70, 229, 0.32);
  animation: flow-in 0.5s ease both;
}

.fsv-flow__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid #eef2ff;
}

.fsv-flow__eyebrow,
.fsv-flow__title {
  display: block;
}

.fsv-flow__eyebrow {
  color: #6366f1;
  font-size: 8px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.fsv-flow__title {
  margin-top: 2px;
  color: var(--fg-1);
  font-size: 12px;
}

.fsv-flow__live {
  position: relative;
  padding: 4px 8px 4px 17px;
  color: #047857;
  background: #ecfdf5;
  border-radius: var(--r-full);
  font-size: 8px;
  font-weight: var(--fw-semibold);
}

.fsv-flow__live::before {
  position: absolute;
  top: 50%;
  left: 7px;
  width: 5px;
  height: 5px;
  background: #10b981;
  border-radius: var(--r-full);
  content: '';
  transform: translateY(-50%);
}

.fsv-flow__steps {
  display: flex;
  flex-direction: column;
}

.fsv-flow__step {
  position: relative;
  display: grid;
  grid-template-columns: 32px 1fr auto;
  gap: var(--space-3);
  align-items: center;
  min-height: 58px;
}

.fsv-flow__step:not(:last-child)::after {
  position: absolute;
  top: 43px;
  bottom: -15px;
  left: 15px;
  width: 2px;
  background: #e0e7ff;
  content: '';
}

.fsv-flow__number {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  color: #4338ca;
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  border-radius: 10px;
  font-size: 9px;
  font-weight: var(--fw-bold);
}

.fsv-flow__number--review {
  color: #b45309;
  background: #fffbeb;
  border-color: #fde68a;
}
.fsv-flow__number--document {
  color: #7e22ce;
  background: #faf5ff;
  border-color: #e9d5ff;
}
.fsv-flow__number--sign {
  color: #0f766e;
  background: #f0fdfa;
  border-color: #99f6e4;
}

.fsv-flow__step-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 2px;
}

.fsv-flow__step-copy strong {
  overflow: hidden;
  color: var(--fg-1);
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fsv-flow__step-copy span {
  color: var(--fg-muted);
  font-size: 8px;
}

.fsv-flow__state {
  padding: 3px 7px;
  border-radius: var(--r-full);
  font-size: 8px;
  font-weight: var(--fw-semibold);
}

.fsv-flow__state--done {
  color: #047857;
  background: #ecfdf5;
}
.fsv-flow__state--active {
  color: #b45309;
  background: #fffbeb;
}
.fsv-flow__state--next {
  color: var(--fg-muted);
  background: var(--bg-grey-50);
}

@keyframes flow-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
