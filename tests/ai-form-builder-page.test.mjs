import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const page = await readFile(new URL('../pages/ai-form-generator.vue', import.meta.url), 'utf8')
const hero = await readFile(new URL('../components/features/AiHero.vue', import.meta.url), 'utf8')
const faq = await readFile(new URL('../components/v2/FaqSection.vue', import.meta.url), 'utf8')
const cta = await readFile(new URL('../components/CallToActionSection.vue', import.meta.url), 'utf8')
const testimonials = await readFile(new URL('../components/v2/testimonials/TestimonialsV2.vue', import.meta.url), 'utf8')

test('AI form builder page leads with proof and does not market a daily AI limit', () => {
  assert.match(page, /Free AI Form Builder & Generator \| Formester/)
  assert.match(page, /Create a live form in 30 seconds from a prompt, PDF, image, or URL\./)
  assert.match(page, /Trusted by 56,000\+ teams/)
  assert.match(page, /Free forever/)
  assert.doesNotMatch(page, /2 AI generations/)
  assert.doesNotMatch(page, /about 30 seconds/)
  assert.match(page, /AI Form Builder: create, edit, and publish a form/i)
  assert.match(page, /in 30 seconds/)
  assert.match(page, /Compare current free-plan limits and pricing\./)
})

test('hero exposes every real form source and gives the live builder full width', () => {
  for (const source of ['Describe it', 'Paste questions', 'PDF', 'Image', 'URL']) {
    assert.match(hero, new RegExp(`label: '${source}'`))
  }
  assert.match(hero, /grid-template-columns: 1fr/)
  assert.match(hero, /rows="3"/)
  assert.match(hero, /class="attach-fab"/)
  assert.doesNotMatch(hero, /class="attach-row"/)
  assert.doesNotMatch(hero, /AI drafts the form\. You edit every field before publishing\./)
  assert.match(hero, /justify-content: center/)
  assert.match(hero, /border-radius: 9999px/)
})

test('trust proof comes before workflow and the PDF proof follows it', () => {
  const trust = page.indexOf('<TrustSeals')
  const workflow = page.indexOf('fmstr-cmp-afg-steps')
  const pdf = page.indexOf('fmstr-cmp-afg-pdf')
  assert.ok(trust < workflow)
  assert.ok(workflow < pdf)
})

test('workflow follows trust proof', () => {
  assert.ok(page.indexOf('<TrustSeals') < page.indexOf('fmstr-cmp-afg-steps'))
})

test('generated-form result gives visitors a save path, not only an edit path', () => {
  assert.match(hero, /Save this form free/)
  assert.match(hero, /No account yet\? Save your form and keep editing it free\./)
})

test('the lower CTA returns visitors to the live generator', () => {
  assert.match(hero, /id="ai-form-builder"/)
  assert.match(page, /link: '#ai-form-builder'/)
  assert.match(page, /text: 'Generate a form'/)
  assert.match(cta, /primaryButton\.link/)
  assert.match(cta, /primaryButton\.text/)
})

test('page keeps one visible workflow and uses linked template use cases', () => {
  assert.match(page, /v-if="false"\s+class="fmstr-cmp-afg-3ways"/)
  assert.match(page, /v-if="false"\s+class="fmstr-cmp-afg-freeplan"/)
  assert.match(page, /v-if="false"\s+class="fmstr-cmp-afg-engine"/)
  assert.match(page, /Templates for every team\. Make yours with AI\./)
  assert.match(page, /For marketers, HR teams, educators, and operations teams/)
  for (const category of ['lead-generation', 'job-application-forms', 'quizzes', 'training-forms', 'feedback-forms', 'analysis-and-assessment', 'registration-forms', 'donation-forms']) {
    assert.match(page, new RegExp(`/templates/categories/${category}/`))
  }
  assert.doesNotMatch(page, /TestimonialWall/)
  assert.match(page, /<TestimonialsV2/)
  assert.match(page, /The AI form builder makes things a breeze to set up/)
  assert.match(page, /v-if="false"\s+class="fmstr-cmp-afg-quality-control"/)
  assert.match(testimonials, /const COMMENT_LIMIT/)
})

test('privacy copy is clear and avoids unsupported certification claims', () => {
  assert.match(page, /Your form content is encrypted in transit and at rest, with encrypted backups and deletion on request\./)
  assert.doesNotMatch(page, /We are not SOC 2 or ISO 27001 certified yet/)
})

test('FAQs answer live SERP questions and render plain text', () => {
  for (const question of [
    'Is an AI form builder free?',
    'Which AI is best for creating forms?',
    'Can ChatGPT make a form?',
    'Can I turn a PDF, image, or URL into a form?',
  ]) {
    assert.match(page, new RegExp(question.replace(/[?]/g, '\\?')))
  }
  assert.doesNotMatch(page, /Is the AI Form Generator easy to use\?/)
  assert.match(faq, /toPlainText/)
  assert.match(faq, /answer: toPlainText\(faq\.answer \|\| faq\.body\)/)
})
