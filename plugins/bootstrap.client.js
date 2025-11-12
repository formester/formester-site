// Import Bootstrap bundle (includes Popper)
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.bootstrap = bootstrap
  }
})
