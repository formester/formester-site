// Step colours, matched to the app's workflow canvas.
export const ACCENTS = {
  trigger: { fg: '#6434d0', bg: '#f0ebfa' },
  ai: { fg: '#c11574', bg: '#fdf2fa' },
  logic: { fg: '#b54708', bg: '#fffaeb' },
  email: { fg: '#175cd3', bg: '#eff8ff' },
  webhook: { fg: '#475467', bg: '#f2f4f7' },
  wait: { fg: '#027a48', bg: '#ecfdf3' },
  approval: { fg: '#067647', bg: '#ecfdf3' },
}

// What each workflow step type (the API's `stepTypes`, the app's node types) looks like on the site.
export const WORKFLOW_STEPS = {
  form_submission: { label: 'Form submitted', icon: 'zap', accent: 'trigger' },
  partial_submission: { label: 'Form abandoned', icon: 'file-clock', accent: 'trigger' },
  submission_updated: { label: 'Submission updated', icon: 'pencil', accent: 'trigger' },
  schedule: { label: 'On a schedule', icon: 'calendar', accent: 'trigger' },
  send_email: { label: 'Send email', icon: 'mail', accent: 'email' },
  sms: { label: 'Send SMS', icon: 'message-square', accent: 'email' },
  whatsapp: { label: 'WhatsApp message', icon: 'message-circle', accent: 'email' },
  provider_message: { label: 'Send message', icon: 'send', accent: 'email' },
  send_form: { label: 'Send a form', icon: 'file-text', accent: 'email' },
  approval: { label: 'Approval', icon: 'user-check', accent: 'approval' },
  branch: { label: 'Condition', icon: 'git-branch', accent: 'logic' },
  merge: { label: 'Merge paths', icon: 'git-merge', accent: 'logic' },
  terminate: { label: 'Stop workflow', icon: 'octagon-x', accent: 'logic' },
  delay: { label: 'Delay', icon: 'clock', accent: 'wait' },
  wait_until: { label: 'Wait until', icon: 'hourglass', accent: 'wait' },
  webhook: { label: 'Webhook', icon: 'globe', accent: 'webhook' },
  code: { label: 'Run code', icon: 'code', accent: 'webhook' },
  update_submission: { label: 'Update submission', icon: 'pencil-line', accent: 'webhook' },
  ai_agent: { label: 'AI agent', icon: 'bot', accent: 'ai' },
  ai_summarize: { label: 'AI summary', icon: 'sparkles', accent: 'ai' },
  ai_categorize: { label: 'AI categorize', icon: 'tags', accent: 'ai' },
  ai_extract: { label: 'AI extract', icon: 'scan-text', accent: 'ai' },
  ai_sentiment: { label: 'AI sentiment', icon: 'smile', accent: 'ai' },
  ai_preset: { label: 'AI step', icon: 'sparkles', accent: 'ai' },
}

const UNKNOWN_STEP = { label: 'Step', icon: 'circle-dot', accent: 'webhook' }

/**
 * How a step type looks on the site, with a plain fallback for a type added to the app after this list.
 * @param {string} type e.g. "send_email"
 * @returns {{label: string, icon: string, accent: {fg: string, bg: string}}} e.g. {label: "Send email", icon: "mail", accent: {fg: "#175cd3", bg: "#eff8ff"}}
 */
export const workflowStep = (type) => {
  const step = WORKFLOW_STEPS[type] || UNKNOWN_STEP
  return { ...step, accent: ACCENTS[step.accent] }
}
