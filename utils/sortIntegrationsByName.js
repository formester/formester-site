const nameCollator = new Intl.Collator('en', { sensitivity: 'base', numeric: true })

export function sortIntegrationsByName(integrations) {
  return [...integrations].sort((a, b) => nameCollator.compare(a.name, b.name))
}
