<template>
  <Teleport to="body">
    <div class="media-tool-scope">
      <div class="s3-modal-scrim" @click="$emit('close')">
        <div class="dlg" @click.stop>
          <div class="dlg__h"><div class="dlg__title">Keyboard shortcuts</div></div>
          <div class="dlg__b">
            <div class="s3-panel__row"><span class="s3-panel__row-label">Move focus</span><span class="s3-panel__row-val">Arrow keys</span></div>
            <div class="s3-panel__row"><span class="s3-panel__row-label">Open</span><span class="s3-panel__row-val">Enter</span></div>
            <div class="s3-panel__row"><span class="s3-panel__row-label">Select</span><span class="s3-panel__row-val">Space</span></div>
            <div class="s3-panel__row"><span class="s3-panel__row-label">Select all</span><span class="s3-panel__row-val">Ctrl / ⌘ + A</span></div>
            <div class="s3-panel__row"><span class="s3-panel__row-label">Delete</span><span class="s3-panel__row-val">Delete / Backspace</span></div>
            <div class="s3-panel__row"><span class="s3-panel__row-label">Close / deselect</span><span class="s3-panel__row-val">Escape</span></div>
          </div>
          <div class="dlg__f"><button class="btn btn--secondary" @click="$emit('close')">Close</button></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineEmits(['close'])
</script>
