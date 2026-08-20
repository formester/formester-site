<template>
  <Teleport to="body">
    <div class="media-tool-scope">
      <div class="s3-modal-scrim" @click="$emit('close')">
        <div class="dlg" @click.stop>
          <div class="dlg__h">
            <div>
              <div class="dlg__title">{{ title }}</div>
              <div class="dlg__sub">This can't be undone.</div>
            </div>
          </div>
          <div class="dlg__b">
            <div class="alert alert--danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12"/><path d="M10 11v6M14 11v6"/></svg>
              <div>{{ namesLabel }}</div>
            </div>
          </div>
          <div class="dlg__f">
            <button class="btn btn--secondary" @click="$emit('close')">Cancel</button>
            <button class="btn btn--danger" :disabled="deleting" @click="$emit('confirm')">{{ deleting ? 'Deleting…' : 'Delete' }}</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  names: { type: Array, required: true },
  deleting: { type: Boolean, default: false }
})
defineEmits(['close', 'confirm'])

const title = computed(() =>
  props.names.length === 1 ? `Delete "${props.names[0]}"?` : `Delete ${props.names.length} items?`
)
const namesLabel = computed(() => {
  const shown = props.names.slice(0, 3).join(', ')
  return props.names.length > 3 ? `${shown} and ${props.names.length - 3} more` : shown
})
</script>
