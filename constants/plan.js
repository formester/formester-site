export const free = {
  name: 'Free',
  price: '$0',
  type: 'All',
  description:
    'For individuals who need to quickly collect data through forms.',
  features: [
    '10 forms',
    '100 responses/mo',
    'Basic spam protection',
    'AI forms (2/day) (Limited AI features)',
    'File uploads (100 MB)',
    'Dropoff analysis',
    'Unlimited integrations',
    'e-signature',
  ],
}

export const enterprise = {
  name: 'Enterprise',
  description: 'For organizations needing custom plan as per the requirements.',
  type: 'All',
  features: [
    'Everything in business',
    'Custom form building support',
    'High-volume file uploads',
    'Unlimited signature workflows',
    'Add unlimited team members',
    'Priority support & onboarding',
  ],
}

export const personalMonthly = {
  name: 'Personal',
  price: '$13',
  type: 'Monthly',
  description:
    'For individuals who need to create beautiful, branded forms on a regular basis.',
  features: [
    'Everything in free',
    'Unlimited forms',
    '1,000 responses/mo',
    'AI forms (10/day)',
    'Conditional logic',
    'File uploads (1 GB)',
    'Remove branding',
    'Multilingual forms',
  ],
}

export const businessMonthly = {
  name: 'Business',
  price: '$49',
  type: 'Monthly',
  description:
    'For organizations to create unlimited forms that are fully customisable.',
  features: [
    'Everything in personal',
    '15,000 responses/mo',
    'Team collaboration (25 seats)',
    'API & Webhooks',
    'PDF exports',
    'Advanced spam protection',
    'View partial submissions',
    'Granular permissions',
  ],
}

export const personalYearly = {
  name: 'Personal',
  price: '$12',
  prevPrice: '$12',
  type: 'Yearly',
  description:
    'For individuals who need to create beautiful, branded forms on a regular basis.',
  features: [
    'Everything in free',
    'Unlimited forms',
    '1,000 responses/mo',
    'AI forms (10/day)',
    'Conditional logic',
    'File uploads (1 GB)',
    'Remove branding',
    'Multilingual forms',
  ],
}

export const businessYearly = {
  name: 'Business',
  price: '$45',
  prevPrice: '$45',
  type: 'Yearly',
  description:
    'For organizations to create unlimited forms that are fully customisable.',
  features: [
    'Everything in personal',
    '15,000 responses/mo',
    'Team collaboration (25 seats)',
    'API & Webhooks',
    'PDF exports',
    'Advanced spam protection',
    'View partial submissions',
    'Granular permissions',
  ],
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
    name: 'Members',
    free: '0',
    pro: '0',
    business: '25',
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
    free: 'Yes',
    pro: 'Yes',
    business: 'Yes',
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
    "name": "AI Forms",
    "free": "2 Daily",
    "pro": "10 Daily",
    "business": "50 Daily"
  },
  {
    "name": "Generate QR Code",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Pre Fill Fields",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Form Limiter",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Trusted Form Certificate",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Appointment Scheduler",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Auto Unique ID For Submissions",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Calculation Field",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Quiz Scoring",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Outcome Quiz",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Offline Forms",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "View Pending Submissions",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Custom Variables",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Repeater Fields",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Drop Off Rates",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Export Submissions",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Field Wise Analysis",
    "free": "Yes",
    "pro": "Yes",
    "business": "Yes"
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
    "name": "Email Confirmation",
    "free": "-",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Countdown Timer",
    "free": "-",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Conditional Logic",
    "free": "-",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Send Submission Copy",
    "free": "-",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Backend Only",
    "free": "-",
    "pro": "Yes",
    "business": "Yes"
  },
  {
    "name": "Custom Scripts",
    "free": "-",
    "pro": "Yes",
    "business": "Yes"
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
  {
    "name": "Team Collaboration",
    "free": "-",
    "pro": "-",
    "business": "Yes"
  },
  {
    "name": "Address Autocomplete",
    "free": "-",
    "pro": "-",
    "business": "Yes"
  },
  {
    "name": "Save And Resume Submissions",
    "free": "-",
    "pro": "-",
    "business": "Yes"
  },
  {
    "name": "AI Multilanguage Translations",
    "free": "-",
    "pro": "-",
    "business": "Yes"
  },
  {
    "name": "Connect Form to PDF",
    "free": "-",
    "pro": "-",
    "business": "Yes"
  }
]
