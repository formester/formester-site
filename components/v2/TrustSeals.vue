<template>
  <section class="trust-seals-section">
    <div class="ticker-container">
      <div class="gradient-overlay left" />

      <div class="ticker-wrapper">
        <div class="ticker" ref="ticker">
          <div class="ticker-track" ref="tickerTrack">
            <div
              v-for="n in duplicateCount"
              :key="`track-${n}`"
              class="ticker-content"
            >
              <div v-for="logo in logos" :key="logo.alt" class="ticker-item">
                <nuxt-img
                  :src="logo.src"
                  :alt="logo.alt"
                  :width="logo.width"
                  :height="logo.height"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gradient-overlay right" />
    </div>
  </section>
</template>

<script setup>
const logos = [
  { src: '/v2/trustseals/01.svg', alt: 'Peabody',                           width: 118, height: 40 },
  { src: '/v2/trustseals/02.svg', alt: 'Aramark',                           width: 142, height: 40 },
  { src: '/v2/trustseals/03.svg', alt: "L'Oreal",                           width: 177, height: 32 },
  { src: '/v2/trustseals/04.svg', alt: 'Toptal',                            width: 131, height: 40 },
  { src: '/v2/trustseals/05.svg', alt: 'Grab',                              width: 108, height: 38 },
  { src: '/v2/trustseals/06.svg', alt: 'SFU',                               width: 154, height: 36 },
  { src: '/v2/trustseals/07.svg', alt: 'World of Hyatt',                    width: 321, height: 32 },
  { src: '/v2/trustseals/08.svg', alt: 'Iolani School',                     width: 225, height: 40 },
  { src: '/v2/trustseals/09.svg', alt: 'Austin Independent School District', width: 146, height: 44 },
  { src: '/v2/trustseals/10.svg', alt: 'Virgin',                            width: 73,  height: 64 },
]

const tickerTrack = useTemplateRef('tickerTrack')
const ticker = useTemplateRef('ticker')
const duplicateCount = ref(1)
let currentPosition = 0
let animationId = null
let contentWidth = 0

function initTicker() {
  if (!tickerTrack.value || !ticker.value) return

  const firstContent = tickerTrack.value.querySelector('.ticker-content')
  if (!firstContent) return

  contentWidth = firstContent.offsetWidth
  const tickerWidth = ticker.value.offsetWidth

  const minDuplicates = Math.ceil((tickerWidth * 3) / contentWidth) || 3
  if (minDuplicates > duplicateCount.value) {
    duplicateCount.value = minDuplicates
    setTimeout(initTicker, 100)
    return
  }

  currentPosition = 0
  tickerTrack.value.style.transform = 'translateX(0px)'

  if (contentWidth > 0) startAnimation()
}

function startAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
  if (!tickerTrack.value) return

  const pixelsPerSecond = contentWidth / 60
  let lastTime = null

  const animate = (timestamp) => {
    if (!lastTime) lastTime = timestamp
    const delta = timestamp - lastTime
    lastTime = timestamp

    currentPosition += (pixelsPerSecond / 1000) * delta
    if (contentWidth > 0) currentPosition = currentPosition % contentWidth

    tickerTrack.value.style.transform = `translateX(-${currentPosition}px)`
    animationId = requestAnimationFrame(animate)
  }

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  setTimeout(() => {
    initTicker()
    window.addEventListener('resize', initTicker)
  }, 100)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', initTicker)
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.trust-seals-section {
  margin-top: 96px;
  margin-bottom: 48px;
  overflow: hidden;
  width: 100%;
}

@media (max-width: 400px) {
  .trust-seals-section {
    margin-top: 64px;
    margin-bottom: 32px;
  }
}

.ticker-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.ticker-wrapper {
  width: 100%;
  overflow: hidden;
}

.ticker {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.ticker-track {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  will-change: transform;
}

.ticker-content {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  padding: 0 48px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.ticker-item:hover {
  opacity: 1;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 120px;
  pointer-events: none;
  z-index: 2;
}

.gradient-overlay.left {
  left: 0;
  background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
}

.gradient-overlay.right {
  right: 0;
  background: linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
}

@media (max-width: 800px) {
  .ticker-item {
    padding: 0 16px;
  }

  .ticker-item :deep(img) {
    transform: scale(0.75);
  }

  .gradient-overlay {
    width: 80px;
  }
}
</style>
