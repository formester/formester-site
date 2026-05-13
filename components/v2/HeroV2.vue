<template>
  <section class="hero-v2" :style="{ '--gradient-x': mouseX + '%' }" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <canvas ref="particleCanvas" class="hero-v2__particles" aria-hidden="true" />
    <div class="hero-v2__inner">
      <a v-if="badge?.text" :href="badge.link || '#'" class="hero-v2__badge-link">
        <SectionBadge
          variant="pill"
          :text="badge.text"
          :tag="badge.tag"
          :sep="!!(badge.tag && badge.text)"
          arrow
        />
      </a>

      <h1 class="hero-v2__heading">
        <span
          v-for="item in title"
          :key="item.id"
          :class="['hero-v2__title-span', { 'hero-v2__title-highlight': item.highlight }]"
        >{{ item.text }}</span>
      </h1>

      <p class="hero-v2__desc">{{ description }}</p>

      <div class="hero-v2__ctas">
        <FButton
          v-for="btn in buttons"
          :key="btn.id"
          :href="btn.link"
          :variant="btn.type === 'Primary' ? 'primary' : 'secondary'"
          size="lg"
          class="hero-v2__btn"
        >
          {{ btn.text }}
          <svg v-if="btn.type === 'Primary'" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </FButton>
      </div>

      <p v-if="trustText" class="hero-v2__trust">{{ trustText }}</p>

      <div v-if="image?.url" class="hero-v2__mockup">
        <div class="hero-v2__mockup-bar">
          <span class="hero-v2__dot hero-v2__dot--red"></span>
          <span class="hero-v2__dot hero-v2__dot--yellow"></span>
          <span class="hero-v2__dot hero-v2__dot--green"></span>
          <span class="hero-v2__url-bar">app.formester.com / forms</span>
        </div>
        <img
          :src="image.url"
          :alt="image.alternativeText || 'Formester dashboard'"
          class="hero-v2__screenshot"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FButton from '@/components/UI/FButton.vue'
import SectionBadge from '@/components/UI/SectionBadge.vue'

export default {
  name: 'HeroV2',
  components: { FButton, SectionBadge },
  props: {
    badge:       { type: Object, default: () => null },
    title:       { type: Array,  default: () => [] },
    description: { type: String, default: '' },
    buttons:     { type: Array,  default: () => [] },
    trustText:   { type: String, default: '' },
    image:       { type: Object, default: () => null },
  },
  data() {
    return {
      mouseX:     50,
      targetX:    50,
      _rafId:     null,
      _particles: [],
      _ctx:       null,
      _canvasW:   0,
      _canvasH:   0,
      _tick:      0,
    }
  },
  mounted() {
    this._initParticles()
    window.addEventListener('resize', this._resizeCanvas)

    const animate = () => {
      this.mouseX += (this.targetX - this.mouseX) * 0.08
      this._tick++
      this._tickParticles()
      this._rafId = requestAnimationFrame(animate)
    }
    this._rafId = requestAnimationFrame(animate)
  },
  beforeUnmount() {
    if (this._rafId) cancelAnimationFrame(this._rafId)
    window.removeEventListener('resize', this._resizeCanvas)
  },
  methods: {
    onMouseMove(e) {
      const rect = this.$el.getBoundingClientRect()
      this.targetX = Math.min(100, Math.max(0, (e.clientX - rect.left) / rect.width * 100))
    },
    onMouseLeave() {
      this.targetX = 50
    },
    _initParticles() {
      const canvas = this.$refs.particleCanvas
      if (!canvas) return
      const section = this.$el
      this._canvasW = canvas.width  = section.offsetWidth
      this._canvasH = canvas.height = section.offsetHeight
      this._ctx = canvas.getContext('2d')

      this._particles = Array.from({ length: 70 }, () => this._makeParticle(true))
    },
    _resizeCanvas() {
      const canvas = this.$refs.particleCanvas
      if (!canvas) return
      const section = this.$el
      this._canvasW = canvas.width  = section.offsetWidth
      this._canvasH = canvas.height = section.offsetHeight
    },
    _makeParticle(scattered = false) {
      const isViolet = Math.random() > 0.45
      return {
        x:       Math.random() * (this._canvasW || 800),
        y:       scattered ? Math.random() * (this._canvasH || 600) : (this._canvasH || 600) + Math.random() * 40,
        r:       0.8 + Math.random() * 2.2,
        speed:   0.2 + Math.random() * 0.55,
        phase:   Math.random() * Math.PI * 2,
        freq:    0.003 + Math.random() * 0.004,
        sway:    0.18 + Math.random() * 0.22,
        opacity: 0.08 + Math.random() * 0.27,
        color:   isViolet ? '100,52,208' : '167,139,250',
      }
    },
    _tickParticles() {
      const ctx = this._ctx
      if (!ctx) return
      ctx.clearRect(0, 0, this._canvasW, this._canvasH)

      const lightX = (this.mouseX / 100) * this._canvasW

      for (const p of this._particles) {
        p.y -= p.speed
        p.x += Math.sin(this._tick * p.freq + p.phase) * p.sway
        // subtle pull toward light source
        p.x += (lightX - p.x) * 0.0003

        if (p.y + p.r < 0) {
          Object.assign(p, this._makeParticle(false))
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`
        ctx.fill()
      }
    },
  },
}
</script>

<style scoped>
.hero-v2 {
  --gradient-x: 50%;
  position: relative;
  background:
    radial-gradient(ellipse 55% 35% at var(--gradient-x) -5%, rgba(167, 139, 250, 0.45) 0%, transparent 75%),
    linear-gradient(180deg, var(--bg-violet-50) 0%, var(--bg-primary) 100%);
  padding: var(--space-30) var(--space-6) var(--space-20);
  overflow: hidden;
}

.hero-v2::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: conic-gradient(
    from -90deg at var(--gradient-x) -8%,
    transparent         0deg,
    rgba(167,139,250,0.07)  4deg,
    transparent         8deg,
    transparent        18deg,
    rgba(167,139,250,0.05) 22deg,
    transparent        26deg,
    transparent        36deg,
    rgba(167,139,250,0.06) 40deg,
    transparent        44deg,
    transparent        54deg,
    rgba(167,139,250,0.04) 57deg,
    transparent        61deg,
    transparent        70deg,
    rgba(167,139,250,0.05) 74deg,
    transparent        78deg,
    transparent        88deg,
    rgba(167,139,250,0.03) 91deg,
    transparent        95deg,
    transparent       105deg,
    rgba(167,139,250,0.06) 108deg,
    transparent       112deg,
    transparent       122deg,
    rgba(167,139,250,0.04) 126deg,
    transparent       130deg,
    transparent       180deg
  );
  animation: rayBreathe 6s ease-in-out infinite;
}

.hero-v2__particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.hero-v2__inner {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes rayBreathe {
  0%, 100% { opacity: 0.6; }
  50%       { opacity: 1; }
}

.hero-v2__badge-link {
  margin-bottom: var(--space-8);
  text-decoration: none;
  transition: opacity 140ms ease;
}
.hero-v2__badge-link:hover { opacity: 0.85; }

.hero-v2__heading {
  font-size: clamp(44px, 6vw, 72px);
  font-weight: var(--fw-bold);
  line-height: 1.1;
  color: var(--fg-1);
  letter-spacing: -1.5px;
  margin-bottom: var(--space-6);
}

.hero-v2__title-span { display: inline; }

.hero-v2__title-highlight {
  color: var(--violet-500);
  font-style: italic;
  font-family: var(--font-display);
}

.hero-v2__desc {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--fg-2);
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: var(--space-9);
}

.hero-v2__ctas {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.hero-v2__trust {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  margin-bottom: var(--space-14);
}

.hero-v2__mockup {
  width: 100%;
  max-width: 900px;
  border-radius: var(--r-2xl);
  overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow: 0 24px 80px rgba(15, 14, 26, 0.12), 0 8px 24px rgba(15, 14, 26, 0.06);
}

.hero-v2__mockup-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: var(--space-3) var(--space-4);
  background: var(--bg-grey-100);
  border-bottom: 1px solid var(--border-light);
}

.hero-v2__dot {
  width: 12px;
  height: 12px;
  border-radius: var(--r-half);
  flex-shrink: 0;
}
.hero-v2__dot--red    { background: #ff6058; }
.hero-v2__dot--yellow { background: #ffbd2e; }
.hero-v2__dot--green  { background: #27c93f; }

.hero-v2__url-bar {
  font-size: var(--fs-xs);
  color: var(--fg-muted);
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--r-md);
  padding: 3px 12px;
  margin-left: 12px;
}

.hero-v2__screenshot {
  width: 100%;
  display: block;
}

@media (max-width: 768px) {
  .hero-v2 { padding: var(--space-24) var(--space-5) var(--space-14); }

  .hero-v2__inner { max-width: 100%; }

  .hero-v2__heading { letter-spacing: -1px; }

  .hero-v2__desc { font-size: var(--fs-md); max-width: 100%; }

  .hero-v2__ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: var(--space-3);
  }

  .hero-v2__btn { justify-content: center; }

  .hero-v2__trust { margin-bottom: var(--space-9); }

  .hero-v2__mockup { border-radius: var(--r-xl); }

  .hero-v2__url-bar { display: none; }
}

@media (max-width: 480px) {
  /* hide badge text on very small screens — handled by SectionBadge pill variant */
}
</style>
