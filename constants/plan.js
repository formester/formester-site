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
    category: 'Core Features',
    features: [
      {
        name: 'Forms',
        description: 'Total number of forms you can create and manage',
        free: '10',
        pro: 'Unlimited',
        business: 'Unlimited',
      },
      {
        name: 'Submission per month',
        description: 'Maximum number of form submissions you can receive each month',
        free: '100',
        pro: '1k',
        business: '15k',
      },
      {
        name: 'Members',
        description: 'Number of team members who can collaborate on your forms',
        free: '0',
        pro: '0',
        business: '25',
      },
      {
        name: 'File Uploads',
        description: 'Total storage space available for file uploads across all forms',
        free: '100 MB',
        pro: '1 GB',
        business: '50 GB',
      },
      {
        name: 'Spam Protection',
        description: 'Advanced filtering to prevent spam submissions and protect your forms',
        free: 'Basic',
        pro: 'AI Powered',
        business: 'Adaptive AI',
      },
      {
        name: 'Analytics',
        description: 'Detailed insights and reporting on form performance and submissions',
        free: 'Basic',
        pro: 'Advanced',
        business: 'Advanced',
      },
      {
        name: 'AI Forms',
        description: 'Use AI to automatically generate forms based on your requirements',
        free: '2 Daily',
        pro: '10 Daily',
        business: '50 Daily'
      },
    ]
  },
  {
    category: 'Form Features',
    features: [
      {
        name: 'Multi Step Forms',
        description: 'Break long forms into multiple steps to improve user experience and completion rates',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Conversational Forms',
        description: 'Create engaging, chat-like forms that feel like natural conversations',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Conditional Logic',
        description: 'Show or hide fields based on user responses to create dynamic, personalized forms',
        free: '-',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Calculations',
        description: 'Automatically calculate values based on user inputs (totals, taxes, etc.)',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Pre Fill Fields',
        description: 'Automatically populate form fields with default values or URL parameters',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Hidden Fields',
        description: 'Include invisible fields to capture additional data like UTM parameters',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Form Limiter',
        description: 'Set limits on form submissions (date ranges, maximum submissions, etc.)',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Countdown Timer',
        description: 'Add urgency with countdown timers for limited-time offers or deadlines',
        free: '-',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Generate QR Code',
        description: 'Create QR codes for easy mobile access to your forms',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
    ]
  },
  {
    category: 'Integrations',
    features: [
      {
        name: 'Google Sheets Integration',
        description: 'Automatically send form submissions to Google Sheets for easy data management',
        free: 'Unlimited',
        pro: 'Unlimited',
        business: 'Unlimited',
      },
      {
        name: 'Webhooks',
        description: 'Send form data to external services and APIs in real-time',
        free: '1',
        pro: '50',
        business: 'Unlimited',
      },
      {
        name: 'Zapier Integration',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes',
      },
      {
        name: 'Slack Integration',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes',
      },
      {
        name: 'Mailchimp Integration',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes',
      },
      {
        name: 'Hubspot Integration',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes',
      },
      {
        name: 'Airtable Integration',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes',
      },
      {
        name: 'Google Calendar Integration',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes',
      },
    ]
  },
  {
    category: 'Notifications & Communication',
    features: [
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
        name: 'Email Confirmation',
        free: '-',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Send Submission Copy',
        free: '-',
        pro: 'Yes',
        business: 'Yes'
      },
    ]
  },
  {
    category: 'Customization & Branding',
    features: [
      {
        name: 'Remove Formester Branding',
        free: '-',
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
        name: 'Custom Scripts',
        free: '-',
        pro: 'Yes',
        business: 'Yes'
      },
    ]
  },
  {
    category: 'Advanced Features',
    features: [
      {
        name: 'Signature',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Signature Workflows',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Appointment Scheduler',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Trusted Form Certificate',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Backend Only',
        free: '-',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Collect Partial Submissions',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes',
      },
      {
        name: 'Drop Off Rates',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
      {
        name: 'Field Wise Analysis',
        free: 'Yes',
        pro: 'Yes',
        business: 'Yes'
      },
    ]
  },
  {
    category: 'Enterprise Features',
    features: [
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
        name: 'Team Collaboration',
        free: '-',
        pro: '-',
        business: 'Yes'
      },
      {
        name: 'Submission PDF',
        free: '-',
        pro: '-',
        business: 'Yes',
      },
      {
        name: 'Address Autocomplete',
        free: '-',
        pro: '-',
        business: 'Yes'
      },
      {
        name: 'Save And Resume Submissions',
        free: '-',
        pro: '-',
        business: 'Yes'
      },
      {
        name: 'AI Multilanguage Translations',
        free: '-',
        pro: '-',
        business: 'Yes'
      },
      {
        name: 'Connect Form to PDF',
        free: '-',
        pro: '-',
        business: 'Yes'
      },
    ]
  }
]
