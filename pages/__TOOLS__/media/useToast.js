import { ref } from 'vue'

const toasts = ref([])
let seq = 0

export function useToast() {
  function showToast(message, duration = 2600) {
    const id = ++seq
    toasts.value.push({ id, message })
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }, duration)
  }
  return { toasts, showToast }
}
