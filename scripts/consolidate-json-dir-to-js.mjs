// One-off, local-only conversion: a directory of per-item *.json files ->
// a single constants/<name>.js file exporting `<exportName>` as an array of
// objects. Used to fold the CMS-migrated collections (form-builders,
// form-builder-features, platform-testimonials, recommended-templates,
// pdf-templates) out of many small files into one array literal per
// collection — still plain, grep-able JSON-shaped data, just fewer files.
//
// Run once per collection:
//   node scripts/consolidate-json-dir-to-js.mjs <dir> <exportName> [outFile]
// e.g.
//   node scripts/consolidate-json-dir-to-js.mjs constants/form-builders formBuilders constants/form-builders.js
//
// outFile defaults to `<dir>.js` (dir's parent + basename + .js). Delete the
// source directory afterwards once the output is verified.

import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')

function main() {
  const [dirArg, exportName, outArg] = process.argv.slice(2)
  if (!dirArg || !exportName) {
    console.error(
      'Usage: node scripts/consolidate-json-dir-to-js.mjs <dir> <exportName> [outFile]'
    )
    process.exit(1)
  }

  const dir = path.resolve(ROOT, dirArg)
  const outFile = path.resolve(ROOT, outArg || `${dir}.js`)

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  const items = files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')))

  const body = JSON.stringify(items, null, 2)
  const js = `// Consolidated from ${files.length} files previously under ${path.relative(
    ROOT,
    dir
  )}/ via scripts/consolidate-json-dir-to-js.mjs. Edit items directly in this array.\nexport const ${exportName} = ${body}\n`

  fs.writeFileSync(outFile, js)
  console.log(`[consolidate] wrote ${files.length} items to ${path.relative(ROOT, outFile)}`)
}

main()
