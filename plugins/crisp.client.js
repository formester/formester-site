/*
  Crisp chat integration (client-only)
  - Injects Crisp on initial load unless route is a blog page
  - Toggles visibility based on route changes (hides on blog pages)
*/

export default ({ app }) => {
  if (process.server) return

  const WEBSITE_ID = '81cb6489-5b12-46a7-a688-9f67f7894421'
  const CRISP_SRC = 'https://client.crisp.chat/l.js'

  // Determine if current route is a blog page
  const isBlogRoute = (route) => {
    // Matches /blog, /blog/...
    const path = route?.path || ''
    return path === '/blog' || path.startsWith('/blog/')
  }

  // Create and append Crisp loader script once
  const loadCrisp = () => {
    if (window.$crisp?.__loaded) return
    window.$crisp = window.$crisp || []
    window.CRISP_WEBSITE_ID = WEBSITE_ID

    // Avoid duplicating the script tag
    if (!document.querySelector('script[data-crisp-loader]')) {
      const s = document.createElement('script')
      s.src = CRISP_SRC
      s.async = true
      s.defer = true
      s.setAttribute('data-crisp-loader', 'true')
      document.head.appendChild(s)
      // mark as queued; Crisp sets $crisp once loaded
      window.$crisp.__loaded = true
    }
  }

  const hideCrisp = () => {
    try {
      if (window.$crisp) {
        window.$crisp.push(['do', 'chat:hide'])
      }
      // Also hide the bubble element if present
      const bubble = document.querySelector('#crisp-chatbox')
      if (bubble) {
        bubble.style.display = 'none'
      }
    } catch (e) {}
  }

  const showCrisp = () => {
    try {
      if (window.$crisp) {
        window.$crisp.push(['do', 'chat:show'])
      }
      const bubble = document.querySelector('#crisp-chatbox')
      if (bubble) {
        bubble.style.display = ''
      }
    } catch (e) {}
  }

  const handleRoute = (route) => {
    if (isBlogRoute(route)) {
      hideCrisp()
    } else {
      // Load on first non-blog page visit, then ensure it's shown
      loadCrisp()
      showCrisp()
    }
  }

  // Initial load
  handleRoute(app.router.currentRoute)

  // On every route change
  app.router.afterEach((to) => {
    handleRoute(to)
  })
}
