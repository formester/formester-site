<template>
  <div v-if="variant === 'pill'" class="badge-pill p-1 py-1  max-w-[80vw]" :class="{ 'pr-2': arrow, 'px-2': onlyText }">
    <span v-if="tag" class="badge-pill__tag">{{ tag }}</span>
    <span v-if="sep" class="badge-pill__sep"></span>
    <span class="truncate" :title="text">{{ text }}</span>
    <span v-if="arrow" class="badge-pill__arrow">
      <ArrowRightIcon />
    </span>
  </div>
  <span v-else class="badge-label">{{ text }}</span>
</template>

<script>
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

export default {
  name: 'SectionBadge',
  components: { ArrowRightIcon },
  props: {
    text: { type: String, required: true },
    variant: { type: String, default: 'label' },
    tag: { type: String, default: null },
    sep: { type: Boolean, default: false },
    arrow: { type: Boolean, default: false },
  },
  computed: {
    onlyText() {
      return !this.tag && !this.sep;
    }
  }
}
</script>

<style scoped>
/* --- Label variant (section eyebrow) --- */
.badge-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--violet-500);
}

.badge-label::before {
  content: '';
  width: 16px;
  height: 1.5px;
  background: var(--violet-300);
  border-radius: 2px;
  flex-shrink: 0;
}

/* --- Pill variant (hero eyebrow chip) --- */
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-full);
  font-size: 13px;
  font-weight: var(--fw-medium);
  color: var(--fg-strong);
  box-shadow: var(--shadow-xs);
}

.badge-pill__tag {
  background: var(--violet-50);
  color: var(--violet-700);
  font-size: 11px;
  font-weight: var(--fw-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0 8px;
  border-radius: var(--r-full);
  white-space: nowrap;
}

.badge-pill__sep {
  width: 1px;
  height: 14px;
  background: var(--border-light);
  flex-shrink: 0;
}

.badge-pill__arrow {
  color: var(--fg-muted);
  display: inline-flex;
  align-items: center;
}
</style>
