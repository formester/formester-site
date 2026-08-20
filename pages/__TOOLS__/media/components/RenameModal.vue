<template>
  <Teleport to="body">
    <div class="media-tool-scope">
      <div class="s3-modal-scrim" @click="$emit('close')">
        <div class="dlg" @click.stop>
          <div class="dlg__h"><div class="dlg__title">Rename</div></div>
          <div class="dlg__b">
            <div class="field">
              <input ref="input" v-model="draft" class="input" type="text" @keydown.enter="confirm" />
            </div>
          </div>
          <div class="dlg__f">
            <button class="btn btn--secondary" @click="$emit('close')">Cancel</button>
            <button class="btn btn--primary" :disabled="!draft.trim() || saving" @click="confirm">
              {{ saving ? 'Saving…' : 'Save' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  value: { type: String, required: true },
  saving: { type: Boolean, default: false }
})
const emit = defineEmits(['close', 'confirm'])

const draft = ref(props.value)
const input = useTemplateRef('input')

onMounted(() => {
  input.value?.focus()
  input.value?.select()
})

function confirm() {
  if (!draft.value.trim()) return
  emit('confirm', draft.value.trim())
}
</script>
