export const free = {
  name: 'Free',
  price: '$0',
  type: 'Monthly',
  description:
    'For individuals who need to quickly collect data through forms.',
  features: {
    general: [
      '10 forms',
      '100 Submission/month',
      '100 MB file uploads',
      '1 Google Sheets Integration',
      '1 Webhook',
      '10 Signatures',
    ],
    keyFeatures: [
      'Email Auto-responder',
      'Basic Analytics',
      'Access to Template Library',
      'Zapier Integrations',
      'SMTP Integration',
      'Accept Payments (1% commission)',
      'Spam Protection',
      'Self Email Notifications',
      'Respondent Email Notifications',
      'Redirect to URL',
      'Hidden Fields',
    ],
  },
}

export const personalMonthly = {
  name: 'Personal',
  price: '$13',
  type: 'Monthly',
  description:
    'For individuals who need to create beautiful, branded forms on a regular basis.',
  features: {
    general: [
      'Unlimited forms',
      '1k Submission/month',
      '1 GB file uploads',
      'Unlimited Google Sheets Integration',
      '50 Webhooks',
      '250 Signatures',
    ],
    keyFeatures: [
      'Brandkit',
      'Advanced Analytics',
      'Question Branching & Logic Jumps',
      'Unlimited Collaborators',
      'Accept Payments (0% commission)',
      'Custom meta information',
      'Add script to page - GTM, GA, Pixel',
      'Send submission copy',
      'AI Powered Spam Protection',
    ],
  },
}

export const businessMonthly = {
  name: 'Business',
  price: '$49',
  type: 'Monthly',
  description:
    'For organizations and agencies to create unlimited forms that are fully customisable to handle any complexity.',
  features: {
    general: [
      'Unlimited forms',
      '15k Submission/month',
      '50 GB file uploads',
      'Unlimited Google Sheets Integration',
      'Unlimited Webhooks',
      '2,500 Signatures',
    ],
    keyFeatures: [
      'Submission PDF',
      'API Access',
      'Custom Domain',
      'Adaptive AI Spam Protection',
      'White Label',
    ],
  },
}

export const freeYearly = {
  name: 'Free',
  price: '$0',
  type: 'Yearly',
  description:
    'For individuals who need to quickly collect data through forms.',
  features: {
    general: [
      '10 forms',
      '100 Submission/month',
      '100 MB file uploads',
      '1 Google Sheets Integration',
      '1 Webhook',
      '10 Signatures',
    ],
    keyFeatures: [
      'Email Auto-responder',
      'Basic Analytics',
      'Access to Template Library',
      'Zapier Integrations',
      'SMTP Integration',
      'Accept Payments (1% commission)',
      'Spam Protection',
      'Self Email Notifications',
      'Respondent Email Notifications',
      'Redirect to URL',
      'Hidden Fields',
    ],
  },
}

export const personalYearly = {
  name: 'Personal',
  price: '$12',
  prevPrice: '$12',
  type: 'Yearly',
  description:
    'For individuals who need to create beautiful, branded forms on a regular basis.',
  features: {
    general: [
      'Unlimited forms',
      '1k Submission/month',
      '1 GB file uploads',
      'Unlimited Google Sheets Integration',
      '50 Webhooks',
      '250 Signatures',
    ],
    keyFeatures: [
      'Brandkit',
      'Advanced Analytics',
      'Question Branching & Logic Jumps',
      'Unlimited Collaborators',
      'Accept Payments (0% commission)',
      'Custom meta information',
      'Add script to page - GTM, GA, Pixel',
      'Send submission copy',
      'AI Powered Spam Protection',
    ],
  },
}

export const businessYearly = {
  name: 'Business',
  price: '$45',
  prevPrice: '$45',
  type: 'Yearly',
  description:
    'For organizations and agencies to create unlimited forms that are fully customisable to handle any complexity.',
  features: {
    general: [
      'Unlimited forms',
      '15k Submission/month',
      '50 GB file uploads',
      'Unlimited Google Sheets Integration',
      'Unlimited Webhooks',
      '2,500 Signatures',
    ],
    keyFeatures: [
      'Submission PDF',
      'API Access',
      'Custom Domain',
      'Adaptive AI Spam Protection',
      'White Label',
    ],
  },
}

export const comparisonTableFeatures = [
  {
    name: 'Forms',
    free: '10',
    pro: 'Unlimited',
    business: 'Unlimited',
  },
  {
    name: 'Submission per month',
    free: '100',
    pro: '1k',
    business: '15k',
  },
  {
    name: 'Collaborators',
    free: '0',
    pro: 'Unlimited',
    business: 'Unlimited',
  },
  {
    name: 'Remove Formester Branding',
    free: '-',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'File Uploads',
    free: '100 MB',
    pro: '1 GB',
    business: '50 GB',
  },
  {
    name: 'Spam Protection',
    free: 'Basic',
    pro: ' AI Powered',
    business: 'Adaptive AI',
  },
  {
    name: 'Access to Template Library',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Self Email Notifications',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Respondent Email Notifications',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Redirect to URL',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Hidden Fields',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Signatures',
    free: '10',
    pro: '250',
    business: '2,500',
  },
  {
    name: 'SMTP Integration',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Zapier Integrations',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Google Sheets Integration',
    free: '1',
    pro: 'Unlimited',
    business: 'Unlimited',
  },
  {
    name: 'Accept Payments (Commission)',
    free: '1%',
    pro: '0%',
    business: '0%',
  },
  {
    name: 'Webhooks',
    free: '1',
    pro: '50',
    business: 'Unlimited',
  },
  {
    name: 'Analytics',
    free: 'Basic',
    pro: 'Advanced',
    business: 'Advanced',
  },
  {
    name: 'Question Branching & Logic Jumps',
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Brandkit',
    free: '-',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Custom Meta Information',
    free: '-',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Scripts (GTM, GA, Pixel)',
    free: '-',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Send submission copy',
    free: '-',
    pro: 'Yes',
    business: 'Yes',
  },
  {
    name: 'Submission PDF',
    free: '-',
    pro: '-',
    business: 'Yes',
  },
  {
    name: 'API Access',
    free: '-',
    pro: '-',
    business: 'Yes',
  },
  {
    name: 'Custom Domain',
    free: '-',
    pro: '-',
    business: 'Yes',
  },
  {
    name: 'White Label',
    free: '-',
    pro: '-',
    business: 'Yes',
  },
]

export const featureNameList = [
  'Select Plan',
  'No of Forms',
  'Submission per month',
  'Remove Branding',
  'File Uploads',
  'Spam Protection',
  'Access to Templates',
  'Self Email Notifications',
  'Respondent Email Notifications',
  'Redirect to URL',
  'Signatures',
  'SMTP Integration',
  'Zapier Integrations',
  'Google Sheets Integration',
  'Accept Payments (Commission)',
  'Webhooks',
  'Analytics',
  'Question Branching',
  'Brandkit',
  'Custom Meta Information',
  'Scripts (GTM, GA, Pixel)',
  'Send submission copy',
  'Submission PDF',
  'API Access',
  'Custom Domain',
  'White Label',
]
