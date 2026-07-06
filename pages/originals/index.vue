<template>
  <div class="guild-page" style="min-height:100vh; background:var(--canvas); color:var(--text); font-family:var(--font);">

    <!-- Top bar -->
    <nav style="position:sticky; top:0; z-index:40; backdrop-filter:blur(10px); background:rgba(250,249,251,.82); border-bottom:1px solid var(--border);">
      <div class="o-nav" style="max-width:1080px; margin:0 auto; padding:14px 28px; display:flex; align-items:center; justify-content:space-between; gap:16px;">
        <div style="display:flex; align-items:center; gap:12px; min-width:0;">
          <a href="/" aria-label="Formester home" style="display:block; line-height:0;">
            <img src="/originals/formester-lockup.svg" alt="Formester" style="height:20px; width:auto; display:block;">
          </a>
          <span class="o-nav__sep" style="width:1px; height:18px; background:var(--border);"></span>
          <span class="o-nav__label" style="font-size:13px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--accent-600);">Originals</span>
          <span class="o-nav__sep" style="width:1px; height:18px; background:var(--border);"></span>
          <span class="voice o-nav__tagline" style="font-size:15px; color:var(--text-muted);">Made for people, not funnels.</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <a href="#guilds" class="o-nav__ghost" style="text-decoration:none;"><span class="btn btn--ghost" style="font-size:13px;">The guilds</span></a>
          <a href="/originals/guild-36" style="text-decoration:none;"><span class="btn btn--primary" style="font-size:13px;">Guild 36 is live</span></a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <header class="o-hero" style="max-width:1080px; margin:0 auto; padding:76px 28px 30px;">
      <div style="display:inline-flex; align-items:center; gap:9px; padding:6px 14px; border-radius:var(--r-full); background:var(--surface); border:1px solid var(--border); box-shadow:var(--shadow-rest); font-size:12px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--text-soft);">
        <span style="width:7px; height:7px; border-radius:50%; background:var(--accent-500);"></span>
        A small movement inside Formester
      </div>
      <h1 style="font-size:clamp(40px,8vw,64px); line-height:1.05; letter-spacing:-0.035em; font-weight:800; margin:26px 0 0; max-width:16ch;">
        We build with the people who use it.
      </h1>
      <p style="font-size:20px; line-height:1.6; color:var(--text-soft); max-width:56ch; margin:24px 0 0;">
        Every so often we open something new to a small group first — the people who actually want it. The ones who show up early help shape what it becomes. And the price they join at? Theirs to keep — long after the deal is gone.
      </p>
      <p class="voice" style="font-size:23px; line-height:1.5; color:var(--accent-600); margin:26px 0 0;">
        No countdown tricks, no fake scarcity. Just a gift for showing up — because we think about people.
      </p>
      <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:34px;">
        <a href="/originals/guild-36" style="text-decoration:none;"><span class="btn btn--primary" style="padding:13px 22px; font-size:15px;">See what's live now
          <IconArrowRight :size="16" />
        </span></a>
        <a href="#wall" style="text-decoration:none;"><span class="btn btn--secondary" style="padding:13px 22px; font-size:15px;">See the wall</span></a>
      </div>
    </header>

    <!-- How it works (3 quiet steps) -->
    <section class="o-sec" style="max-width:1080px; margin:0 auto; padding:44px 28px;">
      <div class="rgrid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px;">
        <div class="card" style="padding:22px;">
          <div style="width:38px; height:38px; border-radius:11px; background:var(--accent-tint); color:var(--accent-600); display:grid; place-items:center; font-weight:700; font-size:15px;">01</div>
          <h3 style="font-size:16px; margin:16px 0 6px;">A small guild opens</h3>
          <p style="font-size:14px; color:var(--text-soft); margin:0; line-height:1.6;">We pick one idea and open it to a limited group — no waitlist theatre, just enough people to build it with.</p>
        </div>
        <div class="card" style="padding:22px;">
          <div style="width:38px; height:38px; border-radius:11px; background:var(--accent-tint); color:var(--accent-600); display:grid; place-items:center; font-weight:700; font-size:15px;">02</div>
          <h3 style="font-size:16px; margin:16px 0 6px;">Early believers shape it</h3>
          <p style="font-size:14px; color:var(--text-soft); margin:0; line-height:1.6;">Members get a direct line to the team building it. What you ask for is what gets built next.</p>
        </div>
        <div class="card" style="padding:22px;">
          <div style="width:38px; height:38px; border-radius:11px; background:var(--accent-tint); color:var(--accent-600); display:grid; place-items:center; font-weight:700; font-size:15px;">03</div>
          <h3 style="font-size:16px; margin:16px 0 6px;">Your founding price is locked in</h3>
          <p style="font-size:14px; color:var(--text-soft); margin:0; line-height:1.6;">Whatever it costs to join now is what you pay — even when the feature goes mainstream and the price goes up.</p>
        </div>
      </div>
    </section>

    <!-- Wall of Believers (honest, starts empty) -->
    <section id="wall" class="o-sec" style="max-width:1080px; margin:0 auto; padding:44px 28px 20px;">
      <div style="max-width:64ch;">
        <div style="font-size:12px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--accent-600);">The Wall of Believers</div>
        <h2 style="font-size:34px; letter-spacing:-0.03em; margin:12px 0 0;">The wall starts here.</h2>
        <p style="font-size:16px; color:var(--text-soft); margin:14px 0 0; line-height:1.65;">
          For five years, <b style="color:var(--text);">59,921 and counting</b> people believed in us quietly and shaped what Formester became. Guild 36 is the first time we're doing this out in the open — so these are the first names on the wall. <span class="voice" style="color:var(--accent-600); font-size:17px;">Yours could be one of them.</span>
        </p>
      </div>

      <div class="rgrid-4" style="display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:28px;">
        <!-- first, inviting tile -->
        <div style="border:1.5px dashed var(--accent-500); border-radius:var(--r-card); background:var(--accent-tint); padding:13px 14px; display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:50%; background:#fff; color:var(--accent-600); display:grid; place-items:center; flex:none; border:1.5px dashed var(--accent-500);">
            <IconPlus :size="18" />
          </div>
          <div style="min-width:0;">
            <div style="font-size:14px; font-weight:700; color:var(--accent-600);">The first name goes here</div>
            <div style="font-size:12.5px; color:var(--accent-600); opacity:.8;">be an Original</div>
          </div>
        </div>
        <!-- reserved placeholders -->
        <div v-for="n in 7" :key="n" style="border:1.5px dashed var(--border); border-radius:var(--r-card); background:transparent; padding:13px 14px; display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:50%; background:var(--border-soft); flex:none;"></div>
          <div style="font-size:13px; color:var(--text-muted); font-weight:500;">Guild 36 — coming soon</div>
        </div>
      </div>
      <p style="font-size:13px; color:var(--text-muted); margin:18px 0 0; text-align:center;">The names fill in as people join Guild 36 — pull up a chair, and your name stays here for good.</p>
    </section>

    <!-- Guilds -->
    <section id="guilds" class="o-sec" style="max-width:1080px; margin:0 auto; padding:52px 28px;">
      <div style="text-align:center; margin-bottom:8px;">
        <div style="font-size:12px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--accent-600);">The Guilds</div>
        <h2 style="font-size:34px; letter-spacing:-0.03em; margin:12px 0 0;">One at a time.</h2>
        <p style="font-size:16px; color:var(--text-soft); max-width:52ch; margin:12px auto 0;">Where we've been, and what's open right now. The whole honest shelf.</p>
      </div>

      <div class="o-timeline" style="position:relative; margin-top:40px; padding-left:44px;">
        <!-- timeline rail -->
        <div style="position:absolute; left:15px; top:8px; bottom:8px; width:2px; background:linear-gradient(var(--border), var(--border-soft));"></div>

        <!-- Guild 36 — LIVE -->
        <div style="position:relative; margin-bottom:22px;">
          <div style="position:absolute; left:-37px; top:26px; width:16px; height:16px; border-radius:50%; background:var(--success); border:3px solid var(--canvas); animation:livePulse 2.4s ease-in-out infinite;"></div>
          <a href="/originals/guild-36" style="text-decoration:none; color:inherit; display:block;">
            <div class="card" style="padding:0; overflow:hidden; border-color:#cdeeda;">
              <div class="rgrid" style="display:grid; grid-template-columns:1fr auto; gap:24px; padding:26px 28px; align-items:center;">
                <div>
                  <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span style="font-size:13px; font-weight:700; letter-spacing:.08em; color:var(--text-muted);">GUILD 36</span>
                    <span class="badge badge--live"><span class="badge__dot"></span>Live now</span>
                    <span class="chip" style="background:var(--accent-tint); color:var(--accent-600);">🎁 First month free</span>
                  </div>
                  <h3 style="font-size:26px; letter-spacing:-0.02em; margin:14px 0 0;">The Scheduler</h3>
                  <p style="font-size:15px; color:var(--text-soft); margin:9px 0 0; max-width:60ch; line-height:1.6;">A booking + scheduling feature, opening to <b style="color:var(--text);">100 founding members</b> at <b style="color:var(--text);">$5/month — locked for {{ priceLock }}</b> (first month free). Everything in Free, minus the Formester branding, plus the new scheduler.</p>
                  <div style="display:flex; align-items:center; gap:8px; margin-top:16px; font-size:13.5px; color:var(--warning); font-weight:600;">
                    <IconClock :size="15" />
                    <span v-if="isFull">Founding spots are full — join the waitlist</span>
                    <span v-else-if="isExpired">Window closed — share on social to still get in</span>
                    <span v-else>{{ spotsLeft }} of {{ spotsTotal }} spots left · closes in {{ closesIn }}</span>
                  </div>
                </div>
                <div style="text-align:right; flex:none;">
                  <span class="btn btn--primary" style="padding:12px 20px;">Enter Guild 36
                    <IconArrowRight :size="16" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Guild 0–35 — The story so far (origin) -->
        <div style="position:relative;">
          <div style="position:absolute; left:-38px; top:26px; width:18px; height:18px; border-radius:50%; background:var(--accent-500); border:3px solid var(--canvas);"></div>
          <div class="card" style="padding:28px 30px; background:var(--surface);">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <span style="font-size:13px; font-weight:700; letter-spacing:.08em; color:var(--text-muted);">GUILD 0–35</span>
              <span class="badge" style="background:var(--accent-tint); color:var(--accent-600);"><span class="badge__dot"></span>Where it started</span>
            </div>
            <h3 style="font-size:24px; letter-spacing:-0.02em; margin:14px 0 0;">Guild 0-35 — The story so far</h3>
            <p style="font-size:15px; color:var(--text-soft); margin:14px 0 0; max-width:70ch; line-height:1.7;">
              In 2020, Formester began with one person and a simple frustration: people had websites but juggled a dozen tools just to collect a little data — then stitched the emails together by hand, with no way to make a form actually beautiful. We believed there was a better way.
            </p>
            <p style="font-size:15px; color:var(--text-soft); margin:14px 0 0; max-width:70ch; line-height:1.7;">
              So we did the unglamorous thing — we talked to customers, one by one. Understood their businesses. Asked what was missing. And built it, brick by brick: iterating, testing, fixing, shipping. We only grew the team when the people we served needed us to — from one, to eight. Bootstrapped from day one, and still bootstrapped today — every feature paid for by people choosing to stay, not by a runway.
            </p>
            <p style="font-size:15px; color:var(--text-soft); margin:14px 0 0; max-width:70ch; line-height:1.7;">
              Five years on, 59,921 people — and counting — use Formester, 35+ features have shipped — almost every one shaped by a real conversation — and our team of eight ships something meaningful nearly every day.
            </p>

            <div style="display:flex; align-items:center; gap:24px; margin-top:20px; padding-top:18px; border-top:1px solid var(--border); font-size:13px; color:var(--text-muted); flex-wrap:wrap;">
              <span><b style="color:var(--text); font-size:16px;">59,921</b> people &amp; counting</span>
              <span><b style="color:var(--text); font-size:16px;">35+</b> features shipped</span>
              <span><b style="color:var(--text); font-size:16px;">8</b>-person team</span>
              <span><b style="color:var(--text); font-size:16px;">2020</b> · bootstrapped since</span>
            </div>

            <p class="voice" style="font-size:19px; color:var(--accent-600); margin:22px 0 0; max-width:60ch; line-height:1.5;">
              We build tools. But if we're honest, what we really build is bonds with the people who use them.
            </p>
            <p style="font-size:15px; color:var(--text-soft); margin:14px 0 0; max-width:68ch; line-height:1.7;">
              Now that we're a little bigger, we finally have the freedom to listen to more people, everywhere. That's why Formester Originals exists — and Guild 36 is where we start doing it out loud.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing ethos -->
    <section style="background:var(--accent-600); color:#fff; margin-top:24px;">
      <div class="o-ethos" style="max-width:1080px; margin:0 auto; padding:72px 28px; text-align:center;">
        <img src="/originals/formester-icon.svg" alt="" style="height:34px; width:auto; filter:brightness(0) invert(1); opacity:.9;">
        <h2 class="voice o-ethos__h2" style="font-size:40px; line-height:1.3; letter-spacing:-0.01em; font-weight:500; margin:26px auto 0; max-width:20ch;">
          A price you keep, a feature you helped shape, and a name on the wall that never comes down.
        </h2>
        <p style="font-size:17px; line-height:1.6; color:rgba(255,255,255,.82); max-width:52ch; margin:22px auto 0;">
          That's the whole idea. We'd rather have a small room of people we actually know than a big one we don't. If that sounds like you, there's a guild open right now.
        </p>
        <div style="display:flex; justify-content:center; gap:12px; margin-top:32px; flex-wrap:wrap;">
          <a href="/originals/guild-36" style="text-decoration:none;">
            <span class="btn" style="background:#fff; color:var(--accent-600); padding:13px 24px; font-size:15px;">Join Guild 36 — The Scheduler
              <IconArrowRight :size="16" />
            </span>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconPlus from '~/components/icons/IconPlus.vue'
import IconClock from '~/components/icons/IconClock.vue'
import { guild36 } from '~/constants/guild.js'

definePageMeta({ layout: 'originals' })

const END = new Date(guild36.closesAt).getTime()
const spotsTotal = guild36.spotsTotal
const spotsLeft = Math.max(0, guild36.spotsTotal - guild36.spotsClaimed)
const isFull = spotsLeft <= 0
const priceLock = guild36.priceLockLabel
const now = ref(END)
const ready = ref(false)

let timer = null
onMounted(() => {
  now.value = Date.now()
  ready.value = true
  timer = setInterval(() => {
    now.value = Date.now()
    if (now.value >= END) clearInterval(timer)
  }, 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const isExpired = computed(() => ready.value && now.value >= END)
const closesIn = computed(() => {
  const diff = Math.max(0, END - now.value)
  return Math.floor(diff / 86400000) + ' days'
})

useHead({
  title: 'Formester Originals — We build with the people who use it',
  bodyAttrs: { style: 'background:#faf9fb;' },
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500;0,6..72,500&display=swap',
    },
  ],
})
</script>

<!-- Global keyframes: referenced from inline styles, so must not be scope-renamed -->
<style>
@keyframes livePulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, .5); }
  50% { box-shadow: 0 0 0 5px rgba(22, 163, 74, 0); }
}
</style>

<style scoped>
/* Design tokens from the Formester "Calm Canvas" foundation, scoped to this page */
.guild-page {
  --accent-500: #6434d0;
  --accent-600: #472594;
  --accent-tint: #f4ebff;
  --canvas: #faf9fb;
  --surface: #ffffff;
  --border: #ececef;
  --border-soft: #f4f3f7;
  --text: #1c1b22;
  --text-soft: #5b5966;
  --text-muted: #9a98a6;
  --hover: #f6f5f9;
  --focus-ring: 0 0 0 4px var(--accent-tint);
  --success: #16a34a;
  --success-bg: #e9f7ef;
  --warning: #b45309;
  --r-input: 12px;
  --r-card: 16px;
  --r-full: 9999px;
  --shadow-rest: 0 1px 2px rgba(20, 20, 40, .05);
  --shadow-raised: 0 4px 16px -6px rgba(20, 20, 40, .10);
  --font: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.guild-page *,
.guild-page *::before,
.guild-page *::after { box-sizing: border-box; }

.guild-page ::selection { background: #e7d8ff; }

.guild-page h1,
.guild-page h2,
.guild-page h3,
.guild-page h4 { letter-spacing: -0.02em; font-weight: 600; margin: 0; line-height: 1.25; }

.voice { font-family: 'Newsreader', Georgia, serif; font-style: italic; }

/* Buttons */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font: inherit; font-size: 14px; font-weight: 600; line-height: 1; cursor: pointer;
  padding: 10px 16px; border-radius: var(--r-input); border: 1px solid transparent; white-space: nowrap;
  transition: background-color .15s ease, box-shadow .15s ease, border-color .15s ease, color .15s ease;
}
.btn svg { width: 16px; height: 16px; flex: none; }
.btn--primary { background: var(--accent-500); color: #fff; box-shadow: 0 1px 2px rgba(100, 52, 208, .18); }
.btn--primary:hover { background: #5a2ec2; box-shadow: 0 2px 8px -1px rgba(100, 52, 208, .30); }
.btn--secondary { background: var(--surface); color: var(--text); border-color: var(--border); box-shadow: var(--shadow-rest); }
.btn--secondary:hover { background: var(--hover); }
.btn--ghost { background: transparent; color: var(--text-soft); }
.btn--ghost:hover { background: var(--hover); color: var(--text); }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }

/* Cards */
.card {
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-card);
  box-shadow: var(--shadow-rest); overflow: visible; position: relative;
  transition: box-shadow .16s ease, border-color .16s ease;
}
.card:hover { box-shadow: var(--shadow-raised); }

/* Badges */
.badge {
  display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500;
  padding: 3px 10px; border-radius: var(--r-full);
}
.badge__dot { width: 6px; height: 6px; border-radius: var(--r-full); background: currentColor; }
.badge--live { background: var(--success-bg); color: var(--success); }

/* Chip / tag */
.chip {
  display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500;
  padding: 5px 11px; border-radius: var(--r-full); background: var(--border-soft); color: var(--text-soft);
}

@media (max-width: 820px) {
  .rgrid { grid-template-columns: 1fr !important; }
  .rgrid-4 { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 640px) {
  /* Trim nav to essentials so it fits a phone row */
  .o-nav { padding: 12px 16px !important; }
  .o-nav__tagline, .o-nav__sep, .o-nav__ghost, .o-nav__label { display: none !important; }

  /* Tighter page gutters + lighter vertical rhythm */
  .o-hero { padding: 44px 18px 24px !important; }
  .o-sec { padding-left: 18px !important; padding-right: 18px !important; }
  .o-ethos { padding: 52px 20px !important; }
  .o-ethos__h2 { font-size: 28px !important; }

  /* Pull the timeline in so nested card padding doesn't crush the text */
  .o-timeline { padding-left: 30px !important; }
  .o-timeline [style*="left:-37px"] { left: -23px !important; }
  .o-timeline [style*="left:-38px"] { left: -24px !important; }
}
@media (max-width: 460px) {
  .rgrid-4 { grid-template-columns: 1fr !important; }
}
</style>
