import { ACCENTS } from './workflow-steps.js'

// The category page hero art: which step the category is about and the sample form that feeds it.
const LOOKS = {
  approvals: { icon: 'user-check', step: 'Approval', form: 'Expense claim', accent: ACCENTS.approval },
  reminders: { icon: 'clock', step: 'Reminder', form: 'Invoice form', accent: ACCENTS.logic },
  email: { icon: 'mail', step: 'Email sent', form: 'Contact form', accent: ACCENTS.email },
  sms: { icon: 'message-square', step: 'SMS sent', form: 'Booking form', accent: ACCENTS.ai },
  ai: { icon: 'sparkles', step: 'AI summary', form: 'Support request', accent: ACCENTS.trigger },
  webhooks: { icon: 'globe', step: 'Webhook', form: 'Order form', accent: ACCENTS.webhook },
}

const GENERIC = { icon: 'zap', step: 'Workflow', form: 'Your form', accent: ACCENTS.trigger }

/**
 * How a category's hero illustration looks; a category added later gets the generic look.
 * @param {string} slug e.g. "approvals"
 * @returns {{kind: string, icon: string, step: string, form: string, accent: {fg: string, bg: string}}} e.g. {kind: "approvals", icon: "user-check", step: "Approval", form: "Expense claim", accent: {fg: "#067647", bg: "#ecfdf3"}}
 */
export const categoryLook = (slug) => {
  if (LOOKS[slug]) return { kind: slug, ...LOOKS[slug] }
  return { kind: 'generic', ...GENERIC }
}
