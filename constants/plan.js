export const free = {
  name: 'Free',
  price: '$0',
  type: 'All',
  description:
    'For individuals who need to quickly collect data through forms.',
  features: [
    '10 forms',
    '100 responses per month',
    'AI form creator',
    'All field types',
    'Card-style forms',
    'Quiz auto-scoring',
    'Drop-off analysis',
    'Custom email notifications',
    'Payment collection',
  ],
}

export const enterprise = {
  name: 'Enterprise',
  description: 'For organizations needing custom plan as per the requirements.',
  type: 'All',
  features: [
    'Everything in Business',
    'Custom limits',
    'Custom form building',
    'Unlimited webhooks',
    'High-volume file uploads',
    'Unlimited signatures',
    'Add unlimited team members',
    'Priority support',
  ],
}

export const personalMonthly = {
  name: 'Personal',
  price: '$13',
  type: 'Monthly',
  description:
    'For individuals who need to create beautiful, branded forms on a regular basis.',
  features: [
    'Everything in Free',
    'Unlimited forms',
    '1,000 responses per month',
    '40 GB individual data',
    '50+ webhooks',
    'Edit meta tags',
    'Remove all branding',
    'Conditional logic and rules',
    'Redirect on completion',
  ],
}

export const businessMonthly = {
  name: 'Business',
  price: '$49',
  type: 'Monthly',
  description:
    'For organizations to create unlimited forms that are fully customisable.',
    features: [
      'Everything in Personal',
      '15,000 responses per month',
      'API access',
      'PDF exports',
      'Workspaces',
      'Real-time collaboration',
      'Advanced spam protection',
      'View partial submissions',
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
      'Everything in Free',
      'Unlimited forms',
      '1,000 responses per month',
      '40 GB individual data',
      '50+ webhooks',
      'Edit meta tags',
      'Remove all branding',
      'Conditional logic and rules',
      'Redirect on completion',
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
    'Everything in Personal',
    '15,000 responses per month',
    'API access',
    'PDF exports',
    'Workspaces',
    'Real-time collaboration',
    'Advanced spam protection',
    'View partial submissions',
  ],
}

export const comparisonTableFeatures = 
[
  {
    "category": "Usage",
    "features": [
      {
        "name": "Number of Forms",
        "description": "Total forms you can create",
        "free": 10.0,
        "pro": "Unlimited",
        "business": "Unlimited",
        "link": null
      },
      {
        "name": "Responses",
        "description": "Monthly responses you can collect",
        "free": 100.0,
        "pro": "1k",
        "business": "15k",
        "link": null
      },
      {
        "name": "Fields per Form",
        "description": "Max fields allowed per form",
        "free": "Unlimited",
        "pro": "Unlimited",
        "business": "Unlimited",
        "link": null
      },
      {
        "name": "Card Style Forms",
        "description": "Step-by-step card form layout",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Number of Seats",
        "description": "Team members in your workspace",
        "free": "-",
        "pro": "-",
        "business": 25.0,
        "link": null
      }
    ]
  },
  {
    "category": "AI native",
    "features": [
      {
        "name": "AI Form Generation",
        "description": "Create detailed forms & surveys with prompts",
        "free": "2 daily",
        "pro": "10 daily",
        "business": "50 daily",
        "link": "https://formester.com/ai-form-generator/"
      },
      {
        "name": "AI Editing",
        "description": "Edit existing forms with prompts",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "AI Multilingual Translation",
        "description": "Translate forms into 80+ languages",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": "https://formester.com/ai-powered-multilingual-forms/"
      },
      {
        "name": "AI Logic Branching",
        "description": "Create conditional rules with prompts",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "AI Powered Emails",
        "description": "Personalize email subject & body with form data",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "AI Powered Spam Protection",
        "description": "Block all kinds of spam with powerful AI detection",
        "free": "Basic",
        "pro": "AI powered",
        "business": "Adaptive AI",
        "link": null
      },
      {
        "name": "Conditional logic",
        "description": "Show or hide fields based on user input",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": "https://formester.com/features/conditional-logic"
      },
      {
        "name": "Pre-built Themes",
        "description": "Ready-to-use form templates",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Collect E-signatures",
        "description": "Capture legally binding signs",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Embed Media",
        "description": "Embed images, videos, or audio inside the form",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Rating Scales",
        "description": "Collect ratings and feedback with customizable scales",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Pre-fill Fields",
        "description": "Pre-fill forms with known user details",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Collect Payments",
        "description": "Accept payments in forms",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": "https://formester.com/features/online-payments/"
      },
      {
        "name": "Form Limiter",
        "description": "Close forms on a specific date, time or count",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Generate QR Code",
        "description": "Create unique QR codes for your forms & surveys",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Address Autocomplete",
        "description": "Auto-fill address fields with Google Maps API",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Appointment Scheduling",
        "description": "Let users book time slots within the form",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": "https://formester.com/features/appointment-scheduler/"
      },
      {
        "name": "File uploads",
        "description": "Let users uploads all types of files and documents",
        "free": "100 MB",
        "pro": "1 GB",
        "business": "50 GB",
        "link": null
      },
      {
        "name": "Redirect to URL",
        "description": "Send users to a custom page after completion",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Cloudflare Turnstile",
        "description": "Let Turnstile auto-check for spam (Better than CAPTCHA)",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Recaptcha",
        "description": "Add Google\u2019s CAPTCHA to block spam bots",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Backend only forms",
        "description": "Use Formester's backend to store all the submissions from an existing form",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "Quiz features",
    "features": [
      {
        "name": "Auto-scoring",
        "description": "Assign scores to each answers and calculate totals in real time",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": "https://formester.com/features/quiz-maker-features/"
      },
      {
        "name": "Outcome Quiz",
        "description": "Show different results based on user's responses",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Timer",
        "description": "Add urgency with count-down timer",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Show Real-time Feedback",
        "description": "Give instant right/wrong feedback as users answer",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "Branding",
    "features": [
      {
        "name": "Add Logo",
        "description": "Add your brand logo to forms for personalization",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Remove Branding",
        "description": "Make your forms truely yours",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Add Custom Domain",
        "description": "Use your own domain in form URL",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": "https://formester.com/features/custom-subdomains-for-form-url/"
      },
      {
        "name": "Custom URL",
        "description": "Edit and personalize form URL slug",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Edit Meta Tags",
        "description": "Customize SEO meta tags like title and description",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Custom Branding Kit",
        "description": "Set consistent fonts, colors, and logos across all forms",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Add Favicon",
        "description": "Add your brand's logo as the form favicon",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Embed Scripts",
        "description": "Add tracking or custom scripts inside the form",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "PDF generation",
    "features": [
      {
        "name": "Convert PDFs to Fillable Forms",
        "description": "Turn static PDFs into interactive, fillable online forms",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": "https://formester.com/features/convert-pdf-to-fillable-form/"
      },
      {
        "name": "Generate Custom PDF with Submission",
        "description": "Generate a personalized PDF after form is submitted",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "Emails",
    "features": [
      {
        "name": "Email Verification",
        "description": "Verify email addresses with OTP confirmation",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": "https://formester.com/features/email-verification/"
      },
      {
        "name": "Respondent Emails",
        "description": "Send automatic emails to users who fill the form",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Send Submission Copy",
        "description": "Share a copy of the form submission with the user",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Self Email Notifications",
        "description": "Get notified by email whenever a new submission happens",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Custom Emails",
        "description": "Personalize email content & subject with form data",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Email Attachments",
        "description": "Send downloadable files as email attachments post-submission",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Conditional Emails",
        "description": "Send different emails based on how users answer",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "Admin & collaboration",
    "features": [
      {
        "name": "Workspaces",
        "description": "Manage multiple forms or projects under organized workspaces",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Real-Time Submission Collaboration",
        "description": "Let team members fill parts of a form in stages (great for approvals)",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": "https://formester.com/features/collaborate-on-form-submission/"
      },
      {
        "name": "Save and Resume Submissions",
        "description": "Allow respondents to save and resume their progress",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Granular Permissions",
        "description": "Set who can edit, view, or submit at a detailed level",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": "https://formester.com/features/collaborative-forms/"
      },
      {
        "name": "Close Forms",
        "description": "Stop form submissions anytime with a simple toggle",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "Automation",
    "features": [
      {
        "name": "Webhooks",
        "description": "Push form data instantly to other tools or services",
        "free": 1.0,
        "pro": 50.0,
        "business": "Unlimited",
        "link": null
      },
      {
        "name": "Access to Formester\u2019s API",
        "description": "Get full API access to manage forms and responses programmatically",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": null
      },
      {
        "name": "API Powered Forms",
        "description": "Prefill form data dynamically from external sources",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": "https://formester.com/features/auto-fill-forms-with-external-data/"
      },
      {
        "name": "Offline Forms",
        "description": "Allow users to fill out the form even when they are offline",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": "https://formester.com/features/offline-forms/"
      }
    ]
  },
  {
    "category": "Analytics",
    "features": [
      {
        "name": "Submissions Control",
        "description": "View, filter, and sort responses in a table format",
        "free": null,
        "pro": null,
        "business": null,
        "link": null
      },
      {
        "name": "Connect to GTM & GA4",
        "description": "Add tracking or automation scripts inside the form",
        "free": "-",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Form Analytics",
        "description": "Get deep insights into form performance and usage",
        "free": "Basic",
        "pro": "Advanced",
        "business": "Advanced",
        "link": null
      },
      {
        "name": "Field Wise Analytics",
        "description": "Summarize answers on a field level",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "View Partial Submissions",
        "description": "See responses from users who didn\u2019t finish the form",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": "https://formester.com/features/partial-submissions/"
      },
      {
        "name": "Drop Off Rates",
        "description": "See how many users dropped off before completion",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Alert Users Before Drop Off",
        "description": "Show a message to stop users from abandoning the form",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Drop Off Page",
        "description": "Identify the exact page users leave the form",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Demographics",
        "description": "See where users are submitting the form from",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "IP Tracking",
        "description": "See form submitters IP address",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Devices",
        "description": "See what devices users are submitting from (mobile, desktop, etc.)",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "UTM Tracking",
        "description": "Track UTM parameters using hidden fields",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "Integrations",
    "features": [
      {
        "name": "Stripe",
        "description": "Collect payments directly using Stripe",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "PayPal",
        "description": "Accept PayPal payments via your forms",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "SMTP Integration",
        "description": "Send emails from your SMTP email",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "HubSpot",
        "description": "Send leads and responses to your HubSpot CRM",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Google Sheets",
        "description": "Push form data to a Google spreadsheet",
        "free": 1.0,
        "pro": "Unlimited",
        "business": "Unlimited",
        "link": null
      },
      {
        "name": "Slack",
        "description": "Get real-time notifications in Slack",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Discord",
        "description": "Send alerts or updates to your Discord server",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Notion",
        "description": "Log form responses into Notion automatically",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Zapier",
        "description": "Connect Formester to 5000+ apps using Zapier",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Salesforce",
        "description": "Sync form data directly to Salesforce CRM",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Gmail",
        "description": "Send customized Gmail emails based on form logic",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Mailchimp",
        "description": "Add form leads directly to Mailchimp lists",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "SureTriggers",
        "description": "Trigger automated workflows using SureTriggers integration",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      }
    ]
  },
  {
    "category": "Support",
    "features": [
      {
        "name": "Chat Support",
        "description": "Chat with our experts in real time",
        "free": "Yes",
        "pro": "Yes",
        "business": "Yes",
        "link": null
      },
      {
        "name": "Priority Support",
        "description": "Get a dedicated expert to help you solve your queries",
        "free": "-",
        "pro": "-",
        "business": "Yes",
        "link": null
      }
    ]
  }
]