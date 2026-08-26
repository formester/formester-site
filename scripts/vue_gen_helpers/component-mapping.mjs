import fs from 'node:fs'
import path from 'node:path'

export function loadComponentMapping(mappingFile) {
  const src = fs.readFileSync(mappingFile, 'utf8')
  const map = {}
  const re = /['"]([\w.-]+)['"]\s*:\s*\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)/g
  let m
  while ((m = re.exec(src))) {
    const [, key, importPath] = m
    map[key] = { importPath, localName: path.basename(importPath, '.vue') }
  }
  return map
}
