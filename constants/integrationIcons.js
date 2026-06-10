// Local icon files (public/integrations/) keyed by lowercased integration name.
// Used by the integrations directory and integration cards when the CMS entry
// doesn't carry its own icon.
export const INTEGRATION_ICONS = {
  'google tag manager': 'gtm.svg',
  'google analytics': 'analytics.svg',
  'facebook pixel': 'pixel.png',
  'hubspot crm': 'hubspot.png',
  'google sheets': 'google-sheets.png',
  slack: 'slack.png',
  calendly: 'calendly.svg',
  webhook: 'webhook.svg',
  stripe: 'stripe.svg',
  paypal: 'paypal.svg',
  recaptcha: 'recaptcha.svg',
  'cloudflare turnstile': 'turnstile.svg',
  trustedform: 'trustedform.png',
  'google forms': 'forms.svg',
  typeform: 'Typeform.svg',
  gmail: 'gmail.svg',
  outlook: 'ms_outlook.svg',
  sendgrid: 'sendgrid.svg',
  mailgun: 'mailgun.svg',
  'amazon ses': 'aws-ses.svg',
  zapier: 'zapier.svg',
  'ottokit (formerly suretriggers)': 'suretriggers.png',
  'pabbly connect': 'pabbly.png',
  n8n: 'n8n.png',
  'google drive': 'gdrive.png',
  notion: 'notion.png',
  'authorize.net': 'authorize-net.webp',
  'monday.com': 'monday-com.svg',
  gohighlevel: 'gohighlevel.svg',
  'custom smtp': 'custom-smtp.svg',
  'automotive crm (adf/xml)': 'automotive-crm.svg',
}

export function integrationIconSrc(name, iconUrl) {
  if (iconUrl) return iconUrl
  const file = INTEGRATION_ICONS[(name || '').toLowerCase()]
  return file ? `/integrations/${file}` : ''
}
