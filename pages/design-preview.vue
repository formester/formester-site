<template>
  <div>
    <HeroV2 :badge="hero.badge" :title="hero.title" :description="hero.description" :buttons="hero.buttons"
      :trust-text="hero.trustText" :image="hero.image" :tab-card-content="hero.tabCardContent" />

    <TrustSeals :title="[]" />

    <StatsSection background="var(--gray-100)" :badge="stats.badge" :heading="stats.heading" :description="stats.description" :stats="stats.items" />

    <StickyStepsSection :badge="ai.badge" :heading="ai.heading" :description="ai.description" :buttons="ai.buttons"
      :steps="ai.steps" />

    <CardCarousel background="var(--gray-100)" :badge="usecases.badge" :heading="usecases.heading" :description="usecases.description" :cta="usecases.cta" :usecases="usecases.items" />

    <IntegrationsShowcase :badge="integrations.badge" :heading="integrations.heading" :description="integrations.description"
      :cta="integrations.cta" />

    <TestimonialsV2 :heading="testimonials.heading" :testimonials="testimonials.items" background="var(--gray-100)" />

    <FaqSection :badge="faq.badge" :title="faq.title" :description="faq.description" :faq-list="faq.faqList" :cta-button="faq.ctaButton" />

    <CtaDark :badge="cta.badge" :heading="cta.heading" :description="cta.description" :buttons="cta.buttons"
      :trust-text="cta.trustText" />
  </div>
</template>

<script setup>
import HeroV2 from '@/components/v2/HeroV2.vue'
import { getPageBySlug } from '@/utils/getAllPages'
import TrustSeals from '@/components/home/TrustSeals.vue'
import StatsSection from '@/components/v2/StatsSection.vue'
import StickyStepsSection from '@/components/v2/StickyStepsSection.vue'
import CardCarousel from '@/components/v2/CardCarousel.vue'
import IntegrationsShowcase from '@/components/v2/IntegrationsShowcase.vue'
import TestimonialsV2 from '@/components/v2/testimonials/TestimonialsV2.vue'
import FaqSection from '@/components/v2/FaqSection.vue'
import CtaDark from '@/components/v2/CtaDark.vue'

useHead({ title: 'Design Preview — Formester Redesign' })

const hero = {
  badge: {
    tag: 'AI · V2.0',
    text: 'Now with form generation from a single prompt',
    link: '/features/ai-form-builder',
  },
  title: [
    { id: 1, text: 'Forms that work as hard as your ', highlight: false },
    { id: 2, text: 'team does.', highlight: true },
  ],
  description:
    'Build, distribute and analyze high-converting forms with AI. Conditional logic, payments, and 50+ integrations — no dev ticket required.',
  buttons: [
    { id: 1, text: 'Start free', link: 'https://app.formester.com/users/sign_up', type: 'Primary' },
    { id: 2, text: 'Book a demo', link: '/contact', type: 'Secondary' },
  ],
  trustText: 'Free forever plan · No credit card · Setup in 2 minutes',
  image: null,
  tabCardContent: [
    {
      id: 2,
      navTitle: 'Collaboration',
      title: 'Invite team members to build and manage forms together.',
      image: { id: 2590, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3778, name: 'Collaboration.png', alternativeText: null, width: 644, height: 430, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Collaboration_04ed2957f5.png' } },
      feature: [
        { id: 2, featureTitle: 'Let multiple people fill the same form at once.', icon: { id: 2591, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3780, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/2_a478ca0bb9.svg' } } },
        { id: 3, featureTitle: 'Manage access using permissions at the field and form levels.', icon: { id: 2592, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3781, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/3_a6e59b0281.svg' } } },
      ],
    },
    {
      id: 3,
      navTitle: 'White Label',
      title: 'Match forms to your brand with full design control.',
      image: { id: 2593, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3784, name: '3_2 screen mockup.png', alternativeText: null, width: 644, height: 430, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/3_2_screen_mockup_e1d360566d.png' } },
      feature: [
        { id: 5, featureTitle: 'Use your own domain and custom form links.', icon: { id: 2594, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3782, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785696_afa4df307a.svg' } } },
        { id: 4, featureTitle: 'Build trust with branded, seamless user experience.', icon: { id: 2595, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3783, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785697_737c35b407.svg' } } },
      ],
    },
    {
      id: 4,
      navTitle: 'Generate PDF',
      title: 'Turn responses into ready-to-use downloadable PDFs.',
      image: { id: 2596, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3787, name: '3_2 screen mockup.png', alternativeText: null, width: 644, height: 430, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/3_2_screen_mockup_004dd521b6.png' } },
      feature: [
        { id: 6, featureTitle: 'Design custom layouts for invoices or agreements.', icon: { id: 2597, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3786, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785686_46a853ce4f.svg' } } },
        { id: 7, featureTitle: 'No formatting needed, everything auto-generated.', icon: { id: 2598, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3785, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785680_52367487a0.svg' } } },
      ],
    },
    {
      id: 5,
      navTitle: 'Data Protection',
      title: 'Let users save and finish forms across any device.',
      image: { id: 2599, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3790, name: 'CustomPDFs.png', alternativeText: null, width: 644, height: 430, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Custom_PD_Fs_0bf349ef31.png' } },
      feature: [
        { id: 8, featureTitle: 'Fill forms offline and sync when back online.', icon: { id: 2600, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3788, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785698_4fce483246.svg' } } },
        { id: 9, featureTitle: 'Prevent drop-offs with seamless resume options.', icon: { id: 2601, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3789, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785699_11ac2f76f7.svg' } } },
      ],
    },
    {
      id: 6,
      navTitle: 'Automations',
      title: 'Send auto-confirmation and follow-up emails.',
      image: { id: 2602, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3793, name: 'automations.png', alternativeText: 'automations', width: 644, height: 430, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/Automations_0ada4ec9d6.png' } },
      feature: [
        { id: 10, featureTitle: 'Get alerts and route responses to your team.', icon: { id: 2603, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3792, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/1_6db3ee3368.svg' } } },
        { id: 11, featureTitle: 'Connect with CRMs, Slack, and 1000+ other tools.', icon: { id: 2604, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3791, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/3_1533ef9e10.svg' } } },
      ],
    },
    {
      id: 7,
      navTitle: 'Multi Language',
      title: 'Add multiple languages to reach global users',
      image: { id: 2605, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3796, name: 'form builder.png', alternativeText: 'form builder', width: 644, height: 430, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/AI_Native_b2cc469b26.png' } },
      feature: [
        { id: 13, featureTitle: 'Translate forms instantly using AI', icon: { id: 2606, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3794, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785693_c9fed37b30.svg' } } },
        { id: 12, featureTitle: 'Make your forms accessible to everyone', icon: { id: 2607, imageAlt: null, imageUrl: null, width: null, height: null, image: { id: 3795, width: 30, height: 30, url: 'https://formester-strapi.s3.ap-south-1.amazonaws.com/25785694_a5e7dd58a2.svg' } } },
      ],
    },
  ],
}

const stats = {
  badge: 'By the numbers',
  heading: 'Why teams switch to Formester — and stay.',
  description:
    'Independent data from 12,000+ Formester customers across HR, marketing, education, and finance teams.',
  items: [
    { id: 1, value: '3.4×', label: 'higher completion vs. industry average' },
    { id: 2, value: '50k+', label: 'businesses on Formester' },
    { id: 3, value: '4.7', label: 'rating on Capterra · G2 (2,800+ reviews)' },
    { id: 4, value: '12 min', label: 'from signup to first published form' },
  ],
}

const ai = {
  badge: 'AI Form Builder',
  heading: 'From a sentence to a shipped form.',
  description:
    'Describe your audience, goals, and field types. Formester structures the questions, picks field types, sets validation rules, and adds conditional logic — all editable.',
  buttons: [
    { id: 1, text: 'Try the AI builder', link: 'https://app.formester.com/users/sign_up', type: 'Primary' },
    { id: 2, text: 'Watch demo', link: '#', type: 'Secondary', icon: '/arrow-right.svg' },
  ],
  steps: [
    {
      id: 1,
      title: 'Describe your form',
      description: 'Type "Customer onboarding survey, 8 questions, contact info first" — and stop.',
      image: null,
      rawHtml: `<style>@keyframes fmst-blink{0%,100%{opacity:1}50%{opacity:0}}</style><div style="margin-top:16px;border-radius:12px;background-color:#f3f4f6;padding:16px 20px;font-family:monospace;font-size:14px;line-height:1.625"><span style="color:#8b5cf6">›</span><span style="color:#1f2937;margin-left:8px">Customer onboarding survey,</span><br><span style="color:#6b7280;margin-left:16px">8 questions, contact first…</span><span style="display:inline-block;width:8px;height:13px;background-color:#7c3aed;vertical-align:text-bottom;margin-left:3px;animation:fmst-blink 1s step-end infinite"></span></div>`,
    },
    {
      id: 2,
      title: 'Review the draft',
      description: 'Formester drafts every field, validation rules, and conditional logic. You get to edit everything.',
      image: null,
      rawHtml: `<div style="margin-top:16px;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;font-size:14px"><div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid #f3f4f6"><span style="font-family:monospace;font-size:12px;color:#9ca3af;width:24px;flex-shrink:0">01</span><span style="margin-left:12px;font-weight:500;color:#111827;flex:1">Full name</span><span style="font-size:12px;color:#9ca3af">Short text</span></div><div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid #f3f4f6"><span style="font-family:monospace;font-size:12px;color:#9ca3af;width:24px;flex-shrink:0">02</span><span style="margin-left:12px;font-weight:500;color:#111827;flex:1">Work email</span><span style="font-size:12px;color:#9ca3af">Email · validated</span></div><div style="display:flex;align-items:center;padding:12px 16px"><span style="font-family:monospace;font-size:12px;color:#9ca3af;width:24px;flex-shrink:0">03</span><span style="margin-left:12px;font-weight:500;color:#111827;flex:1">Company size</span><span style="font-size:12px;color:#9ca3af;margin-right:8px">Multiple choice</span><span style="font-size:12px;font-weight:600;background-color:#ede9fe;color:#7c3aed;border-radius:4px;padding:2px 6px">AI</span></div></div>`,
    },
    {
      id: 3,
      title: 'Ship and iterate',
      description: 'Embed, share via link or QR. Watch responses come in with analytics that flag drop-in spots.',
      image: null,
      rawHtml: `<div style="margin-top:16px;border-radius:12px;border:1px solid #e5e7eb;background-color:#fff;padding:16px 20px"><p style="font-size:10px;font-weight:600;letter-spacing:0.1em;color:#9ca3af;text-transform:uppercase;margin:0 0 4px">Responses · Today</p><p style="font-size:30px;font-weight:700;color:#111827;line-height:1;margin:0">1,247</p><p style="font-size:12px;color:#16a34a;margin:4px 0 0">↑ 38% vs last week</p><div style="margin-top:16px;display:flex;align-items:flex-end;gap:6px;height:40px"><div style="flex:1;border-radius:2px;background-color:#ede9fe;height:35%"></div><div style="flex:1;border-radius:2px;background-color:#ede9fe;height:55%"></div><div style="flex:1;border-radius:2px;background-color:#ede9fe;height:45%"></div><div style="flex:1;border-radius:2px;background-color:#ddd6fe;height:70%"></div><div style="flex:1;border-radius:2px;background-color:#ddd6fe;height:60%"></div><div style="flex:1;border-radius:2px;background-color:#c4b5fd;height:80%"></div><div style="flex:1;border-radius:2px;background-color:#7c3aed;height:100%"></div></div></div>`,
    },
  ],
}

const usecases = {
  badge: 'Built for every team',
  heading: 'One builder. Every workflow.',
  description: 'Learn how Formester can help your business grow and scale efficiently.',
  // cta: { text: 'See all use cases', link: '/use-case' },
  items: [
    {
      id: 1,
      category: 'HR & People',
      description: 'Collect documents, run payroll setup, and automate welcome surveys — multi-department support.',
      iconBg: '#FEF9C3',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:#CA8A04"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      id: 2,
      category: 'Marketing',
      description: 'Generate leads, capture event registrations, and run customer satisfaction surveys seamlessly.',
      iconBg: '#FEF3C7',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:#D97706"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      id: 3,
      category: 'Education',
      description: 'Build quizzes, surveys, and feedback forms for students and teams with an easy drag-and-drop builder.',
      iconBg: '#DCFCE7',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:#16A34A"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 12v5c3.33 2 8.67 2 12 0v-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      id: 4,
      category: 'IT & Operations',
      description: 'Streamline internal ticketing, bug tracking, and equipment request workflows.',
      iconBg: '#EDE9FE',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:#7C3AED"><rect x="2" y="3" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="2" y="11" width="20" height="5" rx="1" stroke="currentColor" stroke-width="1.8"/><circle cx="6" cy="5.5" r="1" fill="currentColor"/><circle cx="6" cy="13.5" r="1" fill="currentColor"/></svg>`,
    },
    {
      id: 5,
      category: 'Healthcare',
      description: 'Securely collect patient intake forms, consent documents, and appointment requests.',
      iconBg: '#CCFBF1',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:#0D9488"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      id: 6,
      category: 'Real Estate',
      description: 'Manage property applications, tenant on-boarding, and inspection reports in one place.',
      iconBg: '#FEF3C7',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color:#B45309"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
  ],
}

const integrations = {
  badge: 'Integrations',
  heading: 'Plays well with your stack.',
  description: 'Native connections to 50+ tools, plus webhooks and a typed API for the rest.',
  cta: { text: 'Browse all integrations', link: '/integrations' },
  items: [
    { id: 1, name: 'Slack', image: null },
    { id: 2, name: 'Notion', image: null },
    { id: 3, name: 'HubSpot', image: null },
    { id: 4, name: 'Salesforce', image: null },
    { id: 5, name: 'Zapier', image: null },
    { id: 6, name: 'Stripe', image: null },
    { id: 7, name: 'Mailchimp', image: null },
    { id: 8, name: 'Google Drive', image: null },
    { id: 9, name: 'Sheets', image: null },
    { id: 10, name: 'Webhooks', image: null },
    { id: 11, name: 'Calendar', image: null },
    { id: 12, name: 'Airtable', image: null },
  ],
}

const testimonials = {
  heading: [
    { id: 1, text: 'Trusted where the ', highlight: false },
    { id: 2, text: 'forms have to work.', highlight: true },
  ],
  items: [
    {
      id: 1,
      comment: 'We replaced three form tools with Formester. The AI builder cut our launch time from days to under an hour. What used to take a full sprint — scoping, dev time, QA, deployment — now takes one person less than 60 minutes. The ROI was obvious within the first week.',
      name: 'Maya Chen',
      position: 'Head of Operations, Lattice',
      companyLogo: null,
    },
    {
      id: 2,
      comment: 'Conditional logic that actually works the first time. Our admissions team writes their own forms — no eng tickets.',
      name: 'Rohit Sharma',
      position: 'Director of IT, Ashoka University',
      companyLogo: null,
    },
    {
      id: 3,
      comment: 'Field-level drop-off analytics is the feature I didn\'t know I needed. Conversions up 31% in two months. We could see exactly which question made people abandon the form, rewrite it in plain language, and watch the completion rate jump. No A/B testing platform required — the built-in analytics told us everything.',
      name: 'Sara Lindqvist',
      position: 'Growth Lead, Notable',
      companyLogo: null,
    },
    {
      id: 4,
      comment: 'Our HR team went from spreadsheets to automated onboarding flows in a single afternoon. Formester just works.',
      name: 'Priya Nambiar',
      position: 'VP People, Razorpay',
      companyLogo: null,
    },
    {
      id: 5,
      comment: 'The Stripe integration meant we could collect payments inside our intake form. No extra tools, no custom code. We handle retainer agreements, deposits, and event fees all through the same form our clients already fill out. It removed an entire step from our onboarding and our close rate improved noticeably.',
      name: 'James Okafor',
      position: 'Founder, Clearline Legal',
      companyLogo: null,
    },
    {
      id: 6,
      comment: 'We run 200+ event registrations a year. Formester handles them all — conditional logic, payments, confirmations.',
      name: 'Elena Vasquez',
      position: 'Events Director, TechSpark',
      companyLogo: null,
    },
    {
      id: 7,
      comment: 'Switching from Typeform saved us $800/month and we actually got more features. The migration took two hours.',
      name: 'Daniel Park',
      position: 'CTO, Growthline',
      companyLogo: null,
    },
    {
      id: 8,
      comment: 'Our students complete feedback surveys at 3× the rate we saw before. The mobile experience makes the difference. We\'d struggled for years with low response rates on course evaluations. After switching to Formester, the mobile-first layout and shorter perceived length — thanks to multi-step forms — completely changed student behaviour. Admin now actually has enough data to act on.',
      name: 'Ananya Krishnan',
      position: 'Head of Student Success, Manipal Online',
      companyLogo: null,
    },
    {
      id: 9,
      comment: 'The webhook support is rock-solid. We pipe every submission straight into our internal tools with zero data loss.',
      name: 'Tom Eriksson',
      position: 'Engineering Lead, Finlo',
      companyLogo: null,
    },
    {
      id: 10,
      comment: 'I built a multi-step lead qualifier in 20 minutes. Our sales team finally gets warm, pre-screened leads.',
      name: 'Neha Bhatia',
      position: 'Head of Marketing, Zomentum',
      companyLogo: null,
    },
    {
      id: 11,
      comment: 'White-labelling was seamless. Clients see our brand everywhere — URL, emails, the form itself. We\'d been manually editing confirmation emails and embedding workarounds for years. With Formester, everything — the subdomain, the logo, the email sender name, the form theme — is ours. Clients have stopped asking "what tool is this?" which means they stay focused on filling it out.',
      name: 'Marcus Webb',
      position: 'Product Manager, AgencyStack',
      companyLogo: null,
    },
    {
      id: 12,
      comment: 'GDPR compliance was a blocker for us. EU data residency and the audit log gave our legal team the confidence to approve.',
      name: 'Ingrid Solvang',
      position: 'Head of Compliance, Norvik Health',
      companyLogo: null,
    },
  ],
}

const faq = {
  badge: 'FAQ',
  title: 'Questions we get a lot.',
  description: 'Still curious? Our docs cover everything in depth — or just chat with us.',
  ctaButton: { text: 'Visit help center', link: '/docs' },
  faqList: [
    {
      id: 1,
      question: 'Is Formester really free to start?',
      answer: 'Yes. The free plan includes unlimited forms, up to 100 responses/month, and all core features. No credit card required.',
    },
    {
      id: 2,
      question: 'How does the AI form builder work?',
      answer: 'Describe your goal in plain English. Formester generates a complete form with fields, validation, and conditional logic. You can edit every detail before publishing.',
    },
    {
      id: 3,
      question: 'Can I accept payments through my forms?',
      answer: 'Yes — Stripe integration is built in. Collect one-time or recurring payments, issue receipts, and manage payouts without leaving Formester.',
    },
    {
      id: 4,
      question: 'Does Formester integrate with my existing tools?',
      answer: 'Formester connects natively to 50+ tools including HubSpot, Slack, Notion, Google Sheets, Salesforce, and Zapier. A typed REST API and webhooks cover everything else.',
    },
    {
      id: 5,
      question: 'Where is my data stored?',
      answer: 'Data is stored in AWS data centres (us-east-1 by default). EU data residency is available on Business and Enterprise plans.',
    },
    {
      id: 6,
      question: 'Can I embed forms on my website?',
      answer: "Yes. Formester generates an embed snippet you can drop into any HTML page, WordPress site, or web app. Forms inherit your page's font and adapt to any container width.",
    },
    {
      id: 7,
      question: 'Does Formester support multi-step forms?',
      answer: 'Yes. Break long forms into pages, add progress bars, and control navigation with conditional logic — all without writing code.',
    },
    {
      id: 8,
      question: 'Can I white-label forms with my own domain and branding?',
      answer: 'White-labelling is available on Business and Enterprise plans. Use a custom subdomain, remove Formester branding, and match your brand colours, fonts, and logo.',
    },
    {
      id: 9,
      question: 'How does conditional logic work?',
      answer: 'Set rules on any field to show, hide, skip, or branch to a different page based on previous answers. Rules support AND/OR conditions and can trigger across multiple fields at once.',
    },
    {
      id: 10,
      question: 'Is there an API I can use?',
      answer: 'Yes. Formester offers a typed REST API for creating forms, reading submissions, and managing workspaces programmatically. API keys are generated from your account settings.',
    },
    {
      id: 11,
      question: 'What file types can respondents upload?',
      answer: 'The file upload field accepts any file type by default. You can restrict to specific types (PDF, image, CSV, etc.) and set a maximum file size per upload.',
    },
    {
      id: 12,
      question: 'Can I collect electronic signatures?',
      answer: 'Yes. The signature field lets respondents draw or type their signature directly in the form. Submissions include a timestamped record for audit purposes.',
    },
    {
      id: 13,
      question: 'How do I prevent spam submissions?',
      answer: 'Formester includes built-in honeypot detection, reCAPTCHA v3 support, and submission rate limiting. You can also restrict responses to specific email domains.',
    },
    {
      id: 14,
      question: 'Can I schedule when a form is open or closed?',
      answer: 'Yes. Set an open date, a close date, or a maximum response limit. Once the condition is met the form automatically displays a custom closed message of your choice.',
    },
    {
      id: 15,
      question: 'Does Formester offer HIPAA or GDPR compliance?',
      answer: 'GDPR controls (consent fields, data deletion, DPA) are available on all paid plans. HIPAA-compliant data handling with a signed BAA is available on Enterprise.',
    },
  ],
}

const cta = {
  badge: 'Get started in a minute',
  heading: 'Ship your next form before your coffee gets cold.',
  description: 'Free forever plan. No credit card required. Upgrade when you\'re ready.',
  buttons: [
    { id: 1, text: 'Start free', link: 'https://app.formester.com/users/sign_up', type: 'Primary' },
    { id: 2, text: 'Talk to sales', link: '/contact', type: 'Secondary' },
  ],
  trustText: '56,000+ teams · Free forever · Live support',
}

useHead(() => ({
  title: 'Home Page Preview',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
}))
</script>
