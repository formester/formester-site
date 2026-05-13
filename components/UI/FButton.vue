<template>
  <component
    :is="tag || (href ? 'a' : 'button')"
    :href="href || undefined"
    :class="['fbt', `fbt--${variant}`, `fbt--${size}`, { 'fbt--dark': dark }]"
    v-bind="$attrs"
  ><slot /></component>
</template>

<script>
export default {
  name: 'FButton',
  props: {
    variant: { type: String, default: 'primary' },
    size:    { type: String, default: 'md' },
    href:    { type: String, default: null },
    dark:    { type: Boolean, default: false },
    tag:     { type: String, default: null },
  },
}
</script>

<style scoped>
.fbt {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-primary);
  font-weight: var(--fw-semibold);
  border-radius: var(--r-full);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: background 140ms ease, border-color 140ms ease, box-shadow 140ms ease, color 140ms ease;
  text-decoration: none;
  white-space: nowrap;
  line-height: 1;
}

.fbt--sm { padding: 7px 14px;  font-size: var(--fs-xs); }
.fbt--md { padding: 10px 18px; font-size: var(--fs-sm); }
.fbt--lg { padding: 13px 22px; font-size: 15px; }

/* Primary */
.fbt--primary {
  background: var(--violet-500);
  color: #fff;
  border-color: var(--violet-500);
}
.fbt--primary:hover {
  background: var(--violet-600);
  border-color: var(--violet-600);
  color: #fff;
}

/* Secondary (light bg) */
.fbt--secondary {
  background: var(--bg-primary);
  color: var(--fg-strong);
  border-color: var(--border-dark);
  box-shadow: var(--shadow-xs);
}
.fbt--secondary:hover {
  background: var(--gray-50);
  color: var(--fg-strong);
}

/* Secondary on dark background */
.fbt--secondary.fbt--dark {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow: none;
}
.fbt--secondary.fbt--dark:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

/* Ghost */
.fbt--ghost {
  background: transparent;
  color: var(--fg-strong);
  border-color: var(--border-dark);
}
.fbt--ghost:hover {
  background: var(--gray-50);
  color: var(--fg-strong);
}

/* White (for dark sections) */
.fbt--white {
  background: #fff;
  color: var(--fg-1);
  border-color: #fff;
}
.fbt--white:hover {
  background: var(--gray-300);
  color: var(--fg-1);
}

/* Text — no background, no border */
.fbt--text {
  background: transparent;
  color: var(--fg-strong);
  border-color: transparent;
}
.fbt--text:hover {
  background: var(--bg-violet-25);
  color: var(--violet-500);
}
</style>
