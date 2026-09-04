import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const read = (path) => readFile(new URL(path, root), 'utf8')
const target = await read('pages/ai-form-generator.vue')
const hero = await read('components/features/AiHero.vue')

const sources = [
  ['pages/consent-form-generator.vue', '/ai-form-generator/#pdf-to-form'],
  ['pages/free-form-creator.vue', '/ai-form-generator/#ai-form-builder'],
  ['pages/ai-survey-generator.vue', '/ai-form-generator/#ai-form-builder'],
  ['pages/ai-quiz-maker.vue', '/ai-form-generator/#ai-form-builder'],
  ['pages/build-conditional-logic-forms-with-ai.vue', '/ai-form-generator/#editable-form'],
  ['pages/questionnaire-maker.vue', '/ai-form-generator/#ai-form-builder'],
  ['pages/test-creator.vue', '/ai-form-generator/#ai-form-builder'],
  ['pages/tools/event-registration-software.vue', '/ai-form-generator/#pdf-to-form'],
]

test('AI form builder has proof anchors for editorial internal links', () => {
  for (const anchor of ['id="editable-form"', 'id="pdf-to-form"', 'id="templates"']) {
    assert.match(target, new RegExp(anchor))
  }
  assert.match(hero, /id="ai-form-builder"/)
})

test('priority source pages link contextually to the matching AI builder proof', async () => {
  for (const [path, href] of sources) {
    const source = await read(path)
    assert.match(source, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})
