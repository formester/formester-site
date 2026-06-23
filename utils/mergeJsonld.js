// Merges custom-authored JSON-LD (a raw string set in the import sheet or category admin) into the auto-generated blocks. 
// A custom block overrides an auto block of the same @type; invalid JSON is dropped (logged) so a bad value never breaks the page.
export function mergeJsonld(auto, raw) {
  if (!raw) return auto
  let custom
  try {
    custom = [].concat(JSON.parse(raw))
  } catch (e) {
    console.error('[jsonld] invalid schema markup:', e)
    return auto
  }
  const overridden = new Set(custom.map((b) => b?.['@type']))
  return [...auto.filter((b) => !overridden.has(b['@type'])), ...custom]
}
