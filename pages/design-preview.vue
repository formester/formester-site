<template>
  <div>
    <HeroV2
      :badge="hero.badge"
      :title="hero.title"
      :description="hero.description"
      :buttons="hero.buttons"
      :trust-text="hero.trustText"
      :image="hero.image"
    />

    <TrustSeals :title="[]" />

    <StatsSection
      :badge="stats.badge"
      :heading="stats.heading"
      :description="stats.description"
      :stats="stats.items"
    />

    <StickyStepsSection
      :badge="ai.badge"
      :heading="ai.heading"
      :description="ai.description"
      :buttons="ai.buttons"
      :steps="ai.steps"
    />

    <CardGrid
      :badge="usecases.badge"
      :heading="usecases.heading"
      :cta="usecases.cta"
      :usecases="usecases.items"
    />

    <DualMarquee
      :badge="integrations.badge"
      :heading="integrations.heading"
      :description="integrations.description"
      :integrations="integrations.items"
      :cta="integrations.cta"
    />

    <Carousel
      :badge="testimonials.badge"
      :heading="testimonials.heading"
      :testimonials="testimonials.items"
    />

    <CtaDark
      :badge="cta.badge"
      :heading="cta.heading"
      :description="cta.description"
      :buttons="cta.buttons"
      :trust-text="cta.trustText"
    />
  </div>
</template>

<script setup>
import HeroV2 from '@/components/home/HeroV2.vue'
import TrustSeals from '@/components/home/TrustSeals.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import StickyStepsSection from '@/components/home/StickyStepsSection.vue'
import CardGrid from '@/components/home/CardGrid.vue'
import DualMarquee from '@/components/home/DualMarquee.vue'
import Carousel from '@/components/home/Carousel.vue'
import CtaDark from '@/components/home/CtaDark.vue'

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
    { id: 2, text: 'Watch demo ↓', link: '#', type: 'Secondary' },
  ],
  steps: [
    {
      id: 1,
      title: 'Describe your form',
      description: 'Type "Customer onboarding survey, 8 questions, contact info first" — and stop.',
      image: null,
    },
    {
      id: 2,
      title: 'Review the draft',
      description: 'Formester drafts every field, validation rules, and conditional logic. You get to edit everything.',
      image: null,
    },
    {
      id: 3,
      title: 'Ship and iterate',
      description: 'Embed, share via link or QR. Watch responses come in with analytics that flag drop-in spots.',
      image: null,
    },
  ],
}

const usecases = {
  badge: 'Built for every team',
  heading: 'One form builder. Every workflow that needs input.',
  cta: { text: 'See all use cases', link: '/use-case' },
  items: [
    {
      id: 1,
      category: 'HR & People',
      title: 'Onboard new hires faster',
      description: 'Collect documents, run payroll setup, and automate welcome surveys — multi-department support.',
      image: null,
    },
    {
      id: 2,
      category: 'Marketing',
      title: 'Capture and qualify leads',
      description: 'Multi-step forms, scoring, and CRM syncing in less than 30 minutes.',
      image: null,
    },
    {
      id: 3,
      category: 'Finance',
      title: 'Run admissions & surveys',
      description: 'Collect data, run pre-admit, accept multi-lingual support.',
      image: null,
    },
    {
      id: 4,
      category: 'Operations',
      title: 'Standardize internal requests',
      description: 'IT tickets, expense claims, vendor onboarding — one tool for everything.',
      image: null,
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
  badge: 'Customer stories',
  heading: 'Trusted where the forms have to work.',
  items: [
    {
      id: 1,
      rating: 5,
      review:
        'We replaced three form tools with Formester. The AI builder cut our launch time from days to under an hour.',
      authorName: 'Maya Chen',
      authorDesignation: 'Head of Operations, Lattice',
      image: null,
    },
    {
      id: 2,
      rating: 5,
      review:
        'Conditional logic that actually works the first time. Our admissions team writes their own forms — no eng tickets.',
      authorName: 'Rohit Sharma',
      authorDesignation: 'Director of IT, Ashoka University',
      image: null,
    },
    {
      id: 3,
      rating: 5,
      review:
        'Field-level drop-off analytics is the feature I didn\'t know I needed. Conversions up 31% in two months.',
      authorName: 'Sara Lindqvist',
      authorDesignation: 'Growth Lead, Notable',
      image: null,
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
  trustText: '50,000+ teams · Free forever · Real support',
}
</script>
