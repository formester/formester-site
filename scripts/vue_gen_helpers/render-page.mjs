import { jsLiteral, escapeAttr, isInlineScalar, camel } from './literals.mjs'
import { needsRawHtmlComponent, extractStyles, isWellFormedHtml, isWellFormedCss, processHarvestedCss } from './html-css.mjs'

function renderComponentBlock(component, index, mapping, importsUsed, warnings, harvestedCss) {
  const key = component.__component

  if (key === 'micro-components.raw-html' && !needsRawHtmlComponent(component.markup || '')) {
    const { cleanMarkup, css } = extractStyles(component.markup || '')
    if (isWellFormedHtml(cleanMarkup) && css.every(isWellFormedCss)) {
      harvestedCss.push(...css)
      const sectionClass = component.useContainer ? 'page-component-item container' : 'page-component-item'
      const tag = [
        `    <section class="${sectionClass}">`,
        `      <div class="raw-html-content">`,
        cleanMarkup,
        `      </div>`,
        `    </section>`,
      ].join('\n')
      return { tag, constLines: [] }
    }
    warnings.push(`malformed raw-html markup at index ${index}, falling back to <RawHtml> component`)
  }

  const info = mapping[key]
  if (!info) {
    warnings.push(`unmapped component "${key}" at index ${index}`)
    return { tag: `    <!-- unmapped component: ${key} (index ${index}) -->`, constLines: [] }
  }
  importsUsed.set(info.localName, info.importPath)

  const attrLines = []
  const constLines = []
  for (const [propKey, value] of Object.entries(component)) {
    if (propKey === '__component' || propKey === 'id') continue
    if (value === null || value === undefined) continue

    if (isInlineScalar(value)) {
      if (typeof value === 'boolean') {
        attrLines.push(value ? `      ${propKey}` : `      :${propKey}="false"`)
      } else if (typeof value === 'number') {
        attrLines.push(`      :${propKey}="${value}"`)
      } else {
        attrLines.push(`      ${propKey}="${escapeAttr(value)}"`)
      }
    } else {
      const constName = `c${index}_${camel(propKey)}`
      constLines.push(`const ${constName} = ${jsLiteral(value)}`)
      attrLines.push(`      :${propKey}="${constName}"`)
    }
  }
  attrLines.push('      class="page-component-item"')

  const tag = [`    <${info.localName}`, ...attrLines, `    />`].join('\n')
  return { tag, constLines }
}

function buildHeadJsonldScript(head, jsonld) {
  const lines = []
  if (head && Object.keys(head).length) {
    lines.push(`useHead(${jsLiteral(head)})`)
  }
  if (Array.isArray(jsonld) && jsonld.length) {
    lines.push(`useJsonld(${jsLiteral(jsonld)})`)
  }
  return lines
}

// data: {components, head, jsonld} — the shape process-item.mjs's
// processItem() produces. warnings: array pushed to for unmapped
// components / malformed raw-html, so the caller can surface them per item.
export function buildGenericPage(data, mapping, warnings) {
  const components = data.components || []
  const importsMap = new Map()
  const constLines = []
  const tagLines = []
  const harvestedCss = []

  components.forEach((component, index) => {
    const { tag, constLines: cl } = renderComponentBlock(component, index, mapping, importsMap, warnings, harvestedCss)
    tagLines.push(tag)
    constLines.push(...cl)
  })

  const importLines = [...importsMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([localName, importPath]) => `import ${localName} from '${importPath}'`)

  const headJsonldLines = buildHeadJsonldScript(data.head, data.jsonld)

  const scriptParts = [...importLines]
  if (constLines.length) scriptParts.push('', ...constLines)
  if (headJsonldLines.length) scriptParts.push('', ...headJsonldLines)

  const templateBody = tagLines.length ? tagLines.join('\n\n') : '    <p>No components to display</p>'

  const styleBlock = harvestedCss.length
    ? `\n\n<style scoped>\n${processHarvestedCss(harvestedCss.join('\n\n'))}\n</style>\n`
    : ''

  return `<template>\n  <div>\n${templateBody}\n  </div>\n</template>\n\n<script setup>\n${scriptParts.join('\n')}\n</script>\n${styleBlock}`
}
