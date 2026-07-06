<template>
  <div class="guild-page" style="min-height:100vh; background:var(--canvas); color:var(--text); font-family:var(--font);">

    <!-- Top bar -->
    <nav style="position:sticky; top:0; z-index:40; backdrop-filter:blur(10px); background:rgba(250,249,251,.82); border-bottom:1px solid var(--border);">
      <div class="g-nav" style="max-width:1000px; margin:0 auto; padding:14px 28px; display:flex; align-items:center; justify-content:space-between; gap:16px;">
        <a href="/originals" style="text-decoration:none;">
          <span class="btn btn--ghost" style="font-size:13px; padding-left:10px;">
            <IconArrowLeft :size="16" />
            All Originals
          </span>
        </a>
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:13px; font-weight:700; letter-spacing:.08em; color:var(--text-muted);">GUILD 36</span>
          <span v-if="state === 'open'" class="badge badge--live"><span class="badge__dot"></span>Live now</span>
          <span v-else class="badge" style="background:var(--border-soft); color:var(--text-muted);"><span class="badge__dot"></span>{{ state === 'full' ? 'Full' : 'Closed' }}</span>
        </div>
      </div>
    </nav>

    <!-- Hero + countdown -->
    <header class="g-hero" style="max-width:1000px; margin:0 auto; padding:64px 28px 20px; text-align:center;">
      <div style="display:inline-flex; align-items:center; gap:9px; padding:6px 14px; border-radius:var(--r-full); background:var(--accent-tint); color:var(--accent-600); font-size:12px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;">
        <span style="width:7px; height:7px; border-radius:50%; background:var(--success); animation:livePulse 2.4s ease-in-out infinite;"></span>
        Guild 36 · The Scheduler · founding guild
      </div>
      <h1 style="font-size:clamp(36px,7.5vw,60px); line-height:1.06; letter-spacing:-0.035em; font-weight:800; margin:22px auto 0; max-width:15ch;">
        Book meetings inside the tool you already build with.
      </h1>
      <p style="font-size:19px; line-height:1.6; color:var(--text-soft); max-width:56ch; margin:20px auto 0;">
        We're opening our new Scheduler to a small founding guild. <b style="color:var(--text);">Your first month is on us</b> — after that it's just <b style="color:var(--text);">$5/month, locked for {{ priceLock }}</b>. Even when the feature goes mainstream and the price climbs, yours holds.
      </p>

      <!-- Founding spots -->
      <div style="margin:34px auto 0; max-width:440px;">
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:12px; margin-bottom:9px;">
          <span style="font-size:14px; font-weight:600; color:var(--text-soft);"><b style="color:var(--accent-600);">{{ spotsLeft }}</b> of {{ spotsTotal }} founding spots left</span>
          <span style="font-size:12.5px; color:var(--text-muted);">{{ spotsClaimed }} claimed</span>
        </div>
        <div style="height:10px; border-radius:9999px; background:var(--accent-tint); overflow:hidden;">
          <div :style="{ width: spotsPct + '%' }" style="height:100%; border-radius:9999px; background:linear-gradient(90deg,#6434d0,#472594); transition:width .4s ease;"></div>
        </div>
      </div>

      <!-- Open: countdown -->
      <div v-if="state === 'open'" style="margin:34px auto 0; display:inline-flex; flex-direction:column; align-items:center; gap:12px;">
        <div style="font-size:12px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--text-muted);">Closes when they're gone — or in</div>
        <div class="g-countdown" style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
          <div class="card" style="padding:16px 20px; min-width:88px;">
            <div class="tnum" style="font-size:42px; font-weight:800; letter-spacing:-0.02em; line-height:1; color:var(--accent-600);">{{ cd.dd }}</div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:8px; letter-spacing:.05em;">DAYS</div>
          </div>
          <div class="card" style="padding:16px 20px; min-width:88px;">
            <div class="tnum" style="font-size:42px; font-weight:800; letter-spacing:-0.02em; line-height:1; color:var(--accent-600);">{{ cd.hh }}</div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:8px; letter-spacing:.05em;">HOURS</div>
          </div>
          <div class="card" style="padding:16px 20px; min-width:88px;">
            <div class="tnum" style="font-size:42px; font-weight:800; letter-spacing:-0.02em; line-height:1; color:var(--accent-600);">{{ cd.mm }}</div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:8px; letter-spacing:.05em;">MINUTES</div>
          </div>
          <div class="card" style="padding:16px 20px; min-width:88px;">
            <div class="tnum" style="font-size:42px; font-weight:800; letter-spacing:-0.02em; line-height:1; color:var(--text-soft);">{{ cd.ss }}</div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:8px; letter-spacing:.05em;">SECONDS</div>
          </div>
        </div>
        <p class="voice" style="font-size:16px; color:var(--text-soft); margin:6px 0 0;">When it closes, the public price closes with it. But there's still one way in — see below.</p>
      </div>

      <!-- Expired: social-unlock -->
      <div v-else-if="state === 'expired'" style="margin:32px auto 0; max-width:52ch;">
        <span class="badge" style="background:var(--border-soft); color:var(--text-muted); font-weight:700; font-size:13px; padding:6px 14px;">The founding window has closed</span>
        <p class="voice" style="font-size:17px; color:var(--text-soft); margin:14px 0 0;">Missed the deadline? Give us a shout-out on social and we'll still hand you the founding deal — <b style="color:var(--text);">$5/month, locked for {{ priceLock }}</b>.</p>
      </div>

      <!-- Full: waitlist -->
      <div v-else style="margin:32px auto 0; max-width:48ch;">
        <span class="badge" style="background:var(--accent-tint); color:var(--accent-600); font-weight:700; font-size:13px; padding:6px 14px;">All 100 founding spots are taken</span>
        <p class="voice" style="font-size:17px; color:var(--text-soft); margin:14px 0 0;">The founding circle is complete. Leave your email below and you'll be first to know when the next guild opens.</p>
      </div>
    </header>

    <!-- The offer -->
    <section class="g-sec" style="max-width:1000px; margin:0 auto; padding:44px 28px;">
      <div class="rgrid" style="display:grid; grid-template-columns:1.15fr .85fr; gap:20px; align-items:start;">
        <!-- Plan card -->
        <div class="card" style="padding:0; overflow:hidden; border-color:var(--accent-500); box-shadow:0 0 0 1px var(--accent-500), var(--shadow-raised);">
          <div style="padding:24px 28px; background:var(--accent-tint); border-bottom:1px solid #e6d6fb;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
              <div style="font-size:13px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--accent-600);">Founding plan</div>
              <div class="chip" style="flex:none; background:#fff; color:var(--accent-600); font-weight:700; box-shadow:var(--shadow-rest); white-space:nowrap;">
                <IconLockClosed :size="14" />
                Locked for {{ priceLock }}
              </div>
            </div>
            <div style="display:flex; align-items:baseline; gap:8px; margin-top:8px;">
              <span style="font-size:48px; font-weight:800; letter-spacing:-0.03em; color:var(--text);">$0</span>
              <span style="font-size:16px; color:var(--text-soft); white-space:nowrap;">first month</span>
            </div>
            <div style="font-size:14px; color:var(--text-soft); margin-top:6px;">then <b style="color:var(--text);">$5/month</b>, locked for {{ priceLock }}</div>
            <div style="font-size:12.5px; color:var(--accent-600); font-weight:600; margin-top:4px;">Your founding coupon covers month one.</div>
          </div>
          <div style="padding:22px 28px;">
            <div style="display:flex; gap:12px; align-items:flex-start; background:var(--accent-tint); border:1px solid #e6d6fb; border-radius:12px; padding:14px 16px; margin-bottom:18px;">
              <span style="flex:none; width:26px; height:26px; border-radius:50%; background:var(--accent-500); color:#fff; display:grid; place-items:center;"><IconCheck :size="15" /></span>
              <div>
                <div style="font-weight:700; color:var(--text); font-size:15px;">Unlimited forms &amp; unlimited submissions</div>
                <div style="font-size:13px; color:var(--text-soft); margin-top:3px; line-height:1.55;">No caps, no metering, no per-response fees. Most builders make you pay to grow — with Formester it's simply included.</div>
              </div>
            </div>
            <div style="font-size:14px; font-weight:600; color:var(--text-soft); margin-bottom:12px;">Everything in Free, plus:</div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="display:flex; gap:11px; align-items:flex-start;">
                <span style="flex:none; width:20px; height:20px; border-radius:50%; background:var(--success-bg); color:var(--success); display:grid; place-items:center;"><IconCheck :size="12" /></span>
                <div><b>The Scheduler</b> — booking pages, availability, and buffers, built right into Formester.</div>
              </div>
              <div style="display:flex; gap:11px; align-items:flex-start;">
                <span style="flex:none; width:20px; height:20px; border-radius:50%; background:var(--success-bg); color:var(--success); display:grid; place-items:center;"><IconCheck :size="12" /></span>
                <div><b>No Formester branding</b> on your forms and booking pages.</div>
              </div>
              <div style="display:flex; gap:11px; align-items:flex-start;">
                <span style="flex:none; width:20px; height:20px; border-radius:50%; background:var(--success-bg); color:var(--success); display:grid; place-items:center;"><IconCheck :size="12" /></span>
                <div><b>A direct line to the builders</b> — every founding member helps shape the Scheduler as we build it.</div>
              </div>
              <div style="display:flex; gap:11px; align-items:flex-start;">
                <span style="flex:none; width:20px; height:20px; border-radius:50%; background:var(--success-bg); color:var(--success); display:grid; place-items:center;"><IconCheck :size="12" /></span>
                <div><b>A permanent spot</b> on the Wall of Believers.</div>
              </div>
            </div>
            <a href="#request" style="text-decoration:none;"><span class="btn btn--primary" style="width:100%; margin-top:22px; padding:13px;">{{ state === 'full' ? 'Join the waitlist' : state === 'expired' ? 'Share to unlock it' : 'Claim my free first month' }}</span></a>
            <p v-if="state === 'open'" style="font-size:12.5px; color:var(--text-muted); text-align:center; margin:10px 0 0;">Cancel anytime. If you leave and come back later, the $5 price is gone — so we won't pretend otherwise.</p>
            <p v-else-if="state === 'expired'" style="font-size:12.5px; color:var(--text-muted); text-align:center; margin:10px 0 0;">The window's closed — but a shout-out on social still gets you in.</p>
            <p v-else style="font-size:12.5px; color:var(--text-muted); text-align:center; margin:10px 0 0;">All 100 founding spots are taken — join the waitlist for the next round.</p>
          </div>
        </div>

        <!-- Scheduling is part of Formester (additive framing) -->
        <div style="display:flex; flex-direction:column; gap:20px;">
          <div class="card" style="padding:24px;">
            <h3 style="font-size:18px; margin:0 0 6px;">Scheduling is now part of Formester</h3>
            <p style="font-size:14.5px; color:var(--text-soft); line-height:1.65; margin:0;">
              Now you can let people book time with you — availability, booking pages, and buffers — right inside Formester, next to the forms, payments, and quizzes you already build. It all lives in one account, so the people you work with have one simple place to reach you.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:16px;">
              <span class="chip"><IconCalendar :size="13" />Scheduling</span>
              <span class="chip">Forms</span>
              <span class="chip">Payments</span>
              <span class="chip">Quizzes</span>
              <span class="chip">E-signatures</span>
            </div>
            <p class="voice" style="font-size:15px; color:var(--accent-600); margin:16px 0 0;">We're not measuring ourselves against anyone — everyone building something has poured real care into it. We just think about people, and we build it together with them. That's the whole idea.</p>
          </div>
          <div class="alert alert--info" style="align-items:center;">
            <IconInfoCircle :size="18" />
            <div><span class="alert__title">How the free month works.</span> Once you're approved, we email you a $5-off coupon — exactly one month of Scheduler. Apply it and month one is $0; after that it's $5/month, locked for {{ priceLock }}. The coupon's good for two weeks, so don't sit on it.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Request coupon form -->
    <section id="request" class="g-sec" style="max-width:1000px; margin:0 auto; padding:24px 28px 44px;">
      <div class="card" style="padding:32px; scroll-margin-top:80px;">
        <div v-if="submitted" style="text-align:center; padding:24px 12px;">
          <div style="width:56px; height:56px; border-radius:50%; background:var(--success-bg); color:var(--success); display:grid; place-items:center; margin:0 auto;">
            <IconCheck :size="28" :stroke-width="2.5" />
          </div>
          <h3 style="font-size:24px; letter-spacing:-0.02em; margin:18px 0 0;">{{ copy.successHeading }}, {{ firstName }}.</h3>
          <p style="font-size:15.5px; color:var(--text-soft); max-width:44ch; margin:12px auto 0; line-height:1.6;">{{ copy.successBody }}</p>
          <button @click="reset" class="btn btn--ghost" style="margin-top:20px;">Submit another</button>
        </div>
        <div v-else class="rgrid" style="display:grid; grid-template-columns:.8fr 1.2fr; gap:32px; align-items:start;">
          <div>
            <div style="font-size:12px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--accent-600);">{{ copy.eyebrow }}</div>
            <h2 style="font-size:28px; letter-spacing:-0.02em; margin:12px 0 0;">{{ copy.heading }}</h2>
            <p style="font-size:15px; color:var(--text-soft); line-height:1.6; margin:14px 0 0;">{{ copy.intro }}</p>
            <div class="voice" style="font-size:16px; color:var(--accent-600); margin-top:18px;">Real reply, real person. Promise.</div>
          </div>
          <div style="display:flex; flex-direction:column; gap:18px;">
            <div class="field">
              <label class="field__label" for="rq-name">Your name</label>
              <input id="rq-name" class="input" placeholder="Maya Okonkwo" v-model="name">
            </div>
            <div class="field">
              <label class="field__label" for="rq-email">Email</label>
              <input id="rq-email" class="input" type="email" placeholder="you@studio.com" v-model="email">
              <div class="field__hint">{{ copy.emailHint }}</div>
            </div>
            <div v-if="copy.showUse" class="field">
              <label class="field__label" for="rq-use">{{ copy.useLabel }}</label>
              <textarea id="rq-use" class="input" rows="3" style="resize:vertical; font-family:inherit;" :placeholder="copy.usePlaceholder" v-model="use"></textarea>
            </div>
            <button @click="submit" class="btn btn--primary" style="padding:13px; font-size:15px;" :disabled="disabled">
              {{ submitting ? copy.sending : copy.button }}
              <IconSendArrow v-if="!submitting" :size="16" />
            </button>
            <p v-if="error" role="alert" style="font-size:13px; color:#b91c1c; margin:0;">{{ error }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Talk to the builders -->
    <section style="background:var(--accent-600); color:#fff;">
      <div class="g-sec" style="max-width:1000px; margin:0 auto; padding:60px 28px;">
        <div class="rgrid" style="display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center;">
          <div>
            <div style="font-size:12px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.7);">Talk directly to the builders</div>
            <h2 class="g-builders__h2" style="font-size:34px; letter-spacing:-0.03em; margin:14px 0 0; line-height:1.15;">Tell us what the Scheduler is missing. We build it.</h2>
            <p style="font-size:16px; line-height:1.65; color:rgba(255,255,255,.85); margin:16px 0 0;">
              This guild is small on purpose. Every founding member gets a direct line to the people building it — not a support queue. You ask, we discuss, and the good ideas ship into the next release.
            </p>
            <p class="voice" style="font-size:19px; color:#fff; margin:20px 0 0;">You're not a ticket. You're the reason it exists.</p>
          </div>
          <div style="background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.16); border-radius:var(--r-card); padding:22px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:18px;">
              <div style="width:44px; height:44px; border-radius:50%; background:#fff; display:grid; place-items:center; flex:none;">
                <img src="/originals/formester-icon.svg" alt="Formester" style="height:22px; width:auto; display:block;">
              </div>
              <div>
                <div style="font-weight:600; font-size:15px;">The Formester team</div>
                <div style="font-size:13px; color:rgba(255,255,255,.7);">the people building it — not a support queue</div>
              </div>
            </div>
            <div style="font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.6); margin-bottom:10px;">How the direct line works</div>
            <div style="background:rgba(255,255,255,.95); color:var(--text); border-radius:12px; padding:14px 16px; font-size:14px; line-height:1.55;">
              <div style="font-size:11px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--text-muted); margin-bottom:5px;">You</div>
              Ask for what you need the Scheduler to do — a feature, a tweak, a fix.
            </div>
            <div style="background:rgba(255,255,255,.16); border-radius:12px; padding:14px 16px; font-size:14px; line-height:1.55; margin-top:10px;">
              <div style="font-size:11px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:rgba(255,255,255,.7); margin-bottom:5px;">The team</div>
              We reply — and the good ideas ship into a release.
            </div>
            <p style="font-size:13px; color:rgba(255,255,255,.7); margin:14px 0 0; line-height:1.5;">This is just how it works — your real conversation starts the day you join.</p>
            <a href="#request" style="text-decoration:none;"><span class="btn" style="width:100%; background:#fff; color:var(--accent-600); margin-top:16px;">Get your direct line</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Founding members so far -->
    <section class="g-sec" style="max-width:1000px; margin:0 auto; padding:52px 28px;">
      <div style="display:flex; align-items:baseline; justify-content:space-between; gap:16px; flex-wrap:wrap;">
        <h2 style="font-size:26px; letter-spacing:-0.02em; margin:0;">Founding members so far</h2>
        <span style="font-size:14px; color:var(--text-muted);"><b style="color:var(--accent-600); font-size:16px;">{{ spotsClaimed }}</b> of {{ spotsTotal }} claimed<template v-if="spotsClaimed === 0"> — be the first</template><template v-else-if="!isFull"> · {{ spotsLeft }} spots left</template></span>
      </div>
      <div class="card" style="margin-top:22px; padding:36px 24px; text-align:center; border-style:dashed; background:transparent;">
        <div style="width:52px; height:52px; border-radius:50%; background:var(--accent-tint); color:var(--accent-600); display:grid; place-items:center; margin:0 auto;">
          <IconUsersPlus :size="24" />
        </div>
        <template v-if="isFull">
          <h3 style="font-size:19px; margin:16px 0 0;">The founding circle is complete.</h3>
          <p style="font-size:15px; color:var(--text-soft); max-width:46ch; margin:10px auto 0; line-height:1.6;">All 100 founders are in. Join the waitlist and you'll be first to hear when the next guild opens. <span class="voice" style="color:var(--accent-600); font-size:16px;">There's always a next one.</span></p>
          <a href="#request" style="text-decoration:none;"><span class="btn btn--primary" style="margin-top:18px; padding:11px 20px;">Join the waitlist</span></a>
        </template>
        <template v-else-if="spotsClaimed === 0">
          <h3 style="font-size:19px; margin:16px 0 0;">No names yet — and we won't invent any.</h3>
          <p style="font-size:15px; color:var(--text-soft); max-width:46ch; margin:10px auto 0; line-height:1.6;">This guild just opened. The first person to join Guild 36 is the first name on the wall — the founding circle of makers starts right here. <span class="voice" style="color:var(--accent-600); font-size:16px;">It could be you.</span></p>
          <a href="#request" style="text-decoration:none;"><span class="btn btn--primary" style="margin-top:18px; padding:11px 20px;">Be the first Original</span></a>
        </template>
        <template v-else>
          <h3 style="font-size:19px; margin:16px 0 0;">{{ spotsClaimed }} founders in — {{ spotsLeft }} spots left.</h3>
          <p style="font-size:15px; color:var(--text-soft); max-width:46ch; margin:10px auto 0; line-height:1.6;">The founding circle is filling up. Grab one of the remaining spots before Guild 36 closes. <span class="voice" style="color:var(--accent-600); font-size:16px;">It could be you.</span></p>
          <a href="#request" style="text-decoration:none;"><span class="btn btn--primary" style="margin-top:18px; padding:11px 20px;">Claim your spot</span></a>
        </template>
      </div>
      <div style="text-align:center; margin-top:28px;">
        <a href="/originals" style="text-decoration:none;"><span class="btn btn--secondary" style="padding:11px 20px;">
          <IconArrowLeft :size="16" />
          Back to all Originals
        </span></a>
      </div>
    </section>

  </div>
</template>

<script setup>
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import IconLockClosed from '~/components/icons/IconLockClosed.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconInfoCircle from '~/components/icons/IconInfoCircle.vue'
import IconSendArrow from '~/components/icons/IconSendArrow.vue'
import IconUsersPlus from '~/components/icons/IconUsersPlus.vue'

import { guild36 } from '~/constants/guild.js'

definePageMeta({ layout: 'originals' })

const END = new Date(guild36.closesAt).getTime()

// Founding-cohort cap (manually maintained in constants/guild.js)
const spotsTotal = guild36.spotsTotal
const spotsClaimed = Math.min(guild36.spotsClaimed, guild36.spotsTotal)
const spotsLeft = computed(() => Math.max(0, spotsTotal - spotsClaimed))
const isFull = computed(() => spotsLeft.value <= 0)
const spotsPct = computed(() => Math.min(100, Math.round((spotsClaimed / spotsTotal) * 100)))

// How long the founding $5 price is held.
const priceLock = guild36.priceLockLabel

// `ready` gates time-based state so we don't flash "expired" before the client
// clock is read (now is seeded to END for SSR).
const ready = ref(false)
const SUBMIT_URL = 'https://app.formester.com/forms/HZZomLdfb/submissions'

const now = ref(END)
const name = ref('')
const email = ref('')
const use = ref('')
const submitted = ref(false)
const submitting = ref(false)
const error = ref('')

let timer = null
onMounted(() => {
  now.value = Date.now()
  ready.value = true
  timer = setInterval(() => {
    now.value = Date.now()
    if (now.value >= END) clearInterval(timer) // stop ticking once expired
  }, 1000)
})
onBeforeUnmount(() => clearInterval(timer))

// Time-based expiry, and the resolved page state (cap wins over the clock).
const isExpired = computed(() => ready.value && now.value >= END)
const state = computed(() => isFull.value ? 'full' : (isExpired.value ? 'expired' : 'open'))

const pad = (n) => String(n).padStart(2, '0')

const cd = computed(() => {
  const diff = Math.max(0, END - now.value)
  return {
    dd: pad(Math.floor(diff / 86400000)),
    hh: pad(Math.floor((diff % 86400000) / 3600000)),
    mm: pad(Math.floor((diff % 3600000) / 60000)),
    ss: pad(Math.floor((diff % 60000) / 1000)),
  }
})

const firstName = computed(() => name.value.trim().split(' ')[0] || 'friend')
const valid = computed(() => !!name.value.trim() && /.+@.+\..+/.test(email.value.trim()))
const disabled = computed(() => !valid.value || submitting.value)

// Form copy switches across the three states: open / expired (social unlock) / full.
const copy = computed(() => {
  if (state.value === 'full') return {
    eyebrow: 'Join the waitlist',
    heading: 'Guild 36 is full — get in line for the next one.',
    intro: "All 100 founding spots are taken. Leave your details and you'll be first to hear when the next founding guild opens.",
    emailHint: "We'll email you the moment the next guild opens.",
    showUse: false,
    useLabel: '',
    usePlaceholder: '',
    button: 'Join the waitlist',
    sending: 'Adding you…',
    successHeading: "You're on the waitlist",
    successBody: "We'll email you the moment the next founding guild opens. Thanks for wanting in.",
  }
  if (state.value === 'expired') return {
    eyebrow: 'The window closed — share your way in',
    heading: 'Missed it? Get in with a shout-out.',
    intro: `The founding window has closed — but we love people who spread the word. Post about Formester, tag us, and we'll still hand you the founding deal: $5/month locked for ${priceLock}.`,
    emailHint: "Where we'll send your founding coupon once we spot your post.",
    showUse: true,
    useLabel: 'Link to your post about us',
    usePlaceholder: 'Paste the link to your tweet, LinkedIn post, video…',
    button: 'Request via shout-out',
    sending: 'Sending…',
    successHeading: "Nice — we'll look for your post",
    successBody: `As soon as we spot your shout-out, we'll email your founding coupon — $5/month locked for ${priceLock}. Thanks for spreading the word.`,
  }
  return {
    eyebrow: 'Apply for your spot',
    heading: 'Tell us a little, claim your spot.',
    intro: "We read every application by hand — Guild 36 is capped at 100 founders. If you're a fit, your coupon (your free first month) lands in your inbox within a day or two.",
    emailHint: 'This is where your coupon goes — and where a builder will reach you.',
    showUse: true,
    useLabel: 'What would you use scheduling for?',
    usePlaceholder: 'Coaching calls, client intake, demo bookings…',
    button: 'Apply for my spot',
    sending: 'Sending…',
    successHeading: "You're in the running",
    successBody: "We review every application by hand. If you're a fit for Guild 36, your coupon — your free first month — lands in your inbox within a day or two.",
  }
})

// app.formester.com sends a Cross-Origin-Resource-Policy header that makes the
// browser block any fetch/XHR response (even in no-cors mode). A native form
// POST isn't subject to that, so we submit through a hidden form + iframe — the
// iframe absorbs the response so the page never navigates away. This mirrors the
// approach in pages/contact.vue.
const postViaHiddenForm = (url, fields) => {
  const iframe = document.createElement('iframe')
  iframe.name = 'formester-guild36-sink'
  iframe.style.display = 'none'
  document.body.appendChild(iframe)

  const form = document.createElement('form')
  form.method = 'POST'
  form.action = url
  form.target = iframe.name
  form.style.display = 'none'
  for (const [key, value] of Object.entries(fields)) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = value
    form.appendChild(input)
  }
  document.body.appendChild(form)
  form.submit()

  // Keep the nodes around long enough for the request to complete, then remove.
  setTimeout(() => { form.remove(); iframe.remove() }, 15000)
}

const submit = () => {
  if (!valid.value || submitting.value) return
  submitting.value = true
  error.value = ''
  try {
    postViaHiddenForm(SUBMIT_URL, {
      status: state.value === 'full' ? 'waitlist' : state.value === 'expired' ? 'social-unlock' : 'application',
      name: name.value.trim(),
      email: email.value.trim(),
      use: use.value.trim(),
    })
    submitted.value = true
  } catch (e) {
    error.value = "Something went wrong sending your request. Please try again in a moment."
    console.error('Guild 36 submission failed:', e)
  } finally {
    submitting.value = false
  }
}
const reset = () => { submitted.value = false; error.value = ''; name.value = ''; email.value = ''; use.value = '' }

useHead({
  title: 'Guild 36 · The Scheduler — Formester Originals',
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
  --info-bg: #eaf0fe;
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
.tnum { font-variant-numeric: tabular-nums; }

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

/* Inputs */
.input {
  font: inherit; font-size: 14px; color: var(--text); background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--r-input); padding: 10px 14px; width: 100%;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.input::placeholder { color: var(--text-muted); }
.input:focus { outline: none; border-color: var(--accent-500); box-shadow: var(--focus-ring); }

/* Cards */
.card {
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-card);
  box-shadow: var(--shadow-rest); overflow: visible; position: relative;
  transition: box-shadow .16s ease, border-color .16s ease;
}

/* Badges */
.badge {
  display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500;
  padding: 3px 10px; border-radius: var(--r-full);
}
.badge__dot { width: 6px; height: 6px; border-radius: var(--r-full); background: currentColor; }
.badge--live { background: var(--success-bg); color: var(--success); }

/* Inline alert / banner */
.alert {
  display: flex; align-items: flex-start; gap: 11px; padding: 13px 16px; border-radius: var(--r-input);
  font-size: 14px; border: 1px solid transparent;
}
.alert svg { width: 18px; height: 18px; flex: none; margin-top: 1px; }
.alert__title { font-weight: 600; }
.alert--info { background: var(--info-bg); color: #1e40af; border-color: #dbe4fe; }

/* Chip / tag */
.chip {
  display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500;
  padding: 5px 11px; border-radius: var(--r-full); background: var(--border-soft); color: var(--text-soft);
}

/* Field wrapper */
.field { display: flex; flex-direction: column; gap: 7px; }
.field__label { font-size: 14px; font-weight: 600; color: var(--text); }
.field__hint { font-size: 13px; color: var(--text-muted); }

@media (max-width: 820px) {
  .rgrid { grid-template-columns: 1fr !important; }
}
@media (max-width: 640px) {
  /* Tighter gutters + lighter vertical rhythm on phones */
  .g-nav { padding: 12px 16px !important; }
  .g-hero { padding: 40px 18px 16px !important; }
  .g-sec { padding-left: 18px !important; padding-right: 18px !important; }
  .g-builders__h2 { font-size: 26px !important; }
  /* Countdown: balanced 2x2 instead of an orphaned 3+1 wrap */
  .g-countdown > .card { flex: 1 1 calc(50% - 6px) !important; min-width: 0 !important; }
}
</style>
