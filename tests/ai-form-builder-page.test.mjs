import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const page = await readFile(new URL('../pages/ai-form-generator.vue', import.meta.url), 'utf8')
const hero = await readFile(new URL('../components/features/AiHero.vue', import.meta.url), 'utf8')
const faq = await readFile(new URL('../components/v2/FaqSection.vue', import.meta.url), 'utf8')
const cta = await readFile(new URL('../components/CallToActionSection.vue', import.meta.url), 'utf8')
const testimonials = await readFile(new URL('../components/v2/testimonials/TestimonialsV2.vue', import.meta.url), 'utf8')

test('AI form builder page leads with proof and does not market a daily AI limit', () => {
  assert.match(page, /Free AI Form Builder/)
  assert.match(page, /Trusted by 56,000\+ teams/)
  assert.match(page, /Free forever/)
  assert.doesNotMatch(page, /2 AI generations/)
  assert.doesNotMatch(page, /about 30 seconds/)
  assert.match(page, /AI Form Builder: create, edit, and publish a form/i)
  assert.match(page, /in 30 seconds/)
  assert.match(page, /Compare current free-plan limits and pricing\./)
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

test('page avoids duplicate how-it-works labels and uses the standard testimonial carousel', () => {
  assert.match(page, /What you can start with/)
  assert.doesNotMatch(page, /TestimonialWall/)
  assert.match(page, /<TestimonialsV2/)
  assert.match(page, /The AI form builder makes things a breeze to set up/)
  assert.match(page, /v-if="false"\s+class="fmstr-cmp-afg-quality-control"/)
  assert.match(testimonials, /const COMMENT_LIMIT/)
})

test('FAQs render their text, not literal paragraph tags', () => {
  assert.match(faq, /toPlainText/)
  assert.match(faq, /answer: toPlainText\(faq\.answer \|\| faq\.body\)/)
})
