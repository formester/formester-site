import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const page = await readFile(new URL('../pages/integrations/asana.vue', import.meta.url), 'utf8')
const directory = await readFile(new URL('../pages/integrations/index.vue', import.meta.url), 'utf8')
const icons = await readFile(new URL('../constants/integrationIcons.js', import.meta.url), 'utf8')
const slackPage = await readFile(new URL('../pages/integrations/slack.vue', import.meta.url), 'utf8')
const notionPage = await readFile(new URL('../pages/integrations/notion.vue', import.meta.url), 'utf8')
const stickySteps = await readFile(new URL('../components/v2/StickyStepsSection.vue', import.meta.url), 'utf8')
const contactFormPage = await readFile(new URL('../pages/contact-form-generator.vue', import.meta.url), 'utf8')
const formManagementPage = await readFile(new URL('../pages/form-management-software.vue', import.meta.url), 'utf8')
const inspectionFormPage = await readFile(new URL('../pages/inspection-form-builder.vue', import.meta.url), 'utf8')

test('Asana page targets the integration intent and documents the real workflow', () => {
  assert.match(page, /Asana Form Integration: Create Tasks from Forms \| Formester/)
  assert.match(page, /Turn every form submission into an [\s\S]*Asana task/)
  assert.match(page, /workspace, project, and optional section/i)
  assert.match(page, /task title/i)
  assert.match(page, /custom fields/i)
  assert.match(page, /Sync existing submissions/i)
  assert.match(page, /Native integration/i)
  assert.match(page, /available on Formester Business plans/)
  assert.match(page, /https:\/\/help\.formester\.com\/en\/article\/asana-integration-v1tuq7\//)
  assert.match(page, /Read the setup guide/)
})

test('Asana page has complete SEO metadata and aligned structured data', () => {
  assert.match(page, /https:\/\/formester\.com\/integrations\/asana\//)
  assert.match(page, /asana form integration/)
  assert.match(page, /create asana tasks from form submissions/)
  assert.match(
    page,
    /content: 'asana form integration, create asana tasks from form submissions, connect form to asana, asana forms'/,
  )
  assert.match(page, /FAQPage/)
  assert.match(page, /BreadcrumbList/)
  assert.match(page, /What does the Asana integration do\?/)
  assert.match(page, /property: 'og:site_name', content: 'Formester'/)
  assert.match(page, /property: 'og:image:alt'/)
  assert.match(page, /prefers-reduced-motion:reduce/)
})

test('shared setup steps resolve their arrow icon without a Vue warning', () => {
  assert.match(stickySteps, /import IconArrowRight from '@\/components\/icons\/ArrowRightIcon\.vue'/)
})

test('integrations directory links to Asana and reports its verified total', () => {
  assert.match(directory, /name: 'Asana'/)
  assert.match(directory, /link: '\/integrations\/asana\/'/)
  const integrationBlock = directory.slice(
    directory.indexOf('const c0_integrations'),
    directory.indexOf('const c0_directoryTitle'),
  )
  const integrationCount = [...integrationBlock.matchAll(/\n\s+name: '[^']+',/g)].length
  const declaredCount = Number(directory.match(/metaText="(\d+) native integrations/)?.[1])
  assert.equal(declaredCount, integrationCount)
  assert.equal(integrationCount, 34)
  assert.match(directory, /34 native integrations · 8,000\+ more via Zapier · No-code setup/)
  assert.match(icons, /asana: 'asana\.svg'/)
})

test('related work-management pages link visitors to the Asana integration', () => {
  for (const source of [slackPage, notionPage]) {
    assert.match(source, /name: 'Asana'/)
    assert.match(source, /link: '\/integrations\/asana\/'/)
  }
})

test('relevant form workflows link contextually to Asana capability proof', () => {
  assert.match(page, /id="capabilities"/)

  const contextualSources = [contactFormPage, formManagementPage, inspectionFormPage]
  for (const source of contextualSources) {
    assert.match(source, /href="\/integrations\/asana\/#capabilities"/)
  }

  assert.match(contactFormPage, />project requests to Asana</)
  assert.match(formManagementPage, />Turn submissions into Asana tasks/)
  assert.match(inspectionFormPage, />Asana integration to turn failed checks into trackable Asana tasks/)
})
