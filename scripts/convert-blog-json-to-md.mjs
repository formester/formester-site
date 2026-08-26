// One-off, local-only conversion: content/blog/*.json -> content/blog/*.md.
// No network calls — the JSON files were already fetched from Strapi by
// migrate-from-strapi.mjs earlier; this just reshapes what's already on
// disk into the format the blog collection now expects (type: 'page',
// source blog/**/*.md, with `rawbody` as the reserved raw-source field).
//
// Frontmatter values are written as JSON.stringify(value) per field, which
// is valid YAML (JSON is a YAML subset) — avoids hand-rolled YAML escaping
// and an extra dependency for something JSON.stringify already does safely.
//
// Run once: node scripts/convert-blog-json-to-md.mjs
// Delete the old content/blog/*.json afterwards once verified.

import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const BLOG_DIR = path.join(ROOT, 'content/blog')

function main() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json'))
  let count = 0

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'))
    const { body, ...frontmatterFields } = data

    const frontmatterLines = Object.entries(frontmatterFields).map(
      ([key, value]) => `${key}: ${JSON.stringify(value)}`
    )

    const md = `---\n${frontmatterLines.join('\n')}\n---\n${body || ''}\n`

    const slug = data.slug || file.replace(/\.json$/, '')
    fs.writeFileSync(path.join(BLOG_DIR, `${slug}.md`), md)
    count += 1
  }

  console.log(`[convert] wrote ${count} content/blog/*.md files from existing *.json`)
}

main()
