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
    category: "Usage",
    features: [
      {
        name: "No. of forms",
        description: "Number of forms you can create in your account",
        free: 10,
        pro: "Unlimited",
        business: "Unlimited"
      },
      {
        name: "Responses",
        description: "Total number of submissions/responses collected per month",
        free: 100,
        pro: "1k",
        business: "15k"
      },
      {
        name: "Fields per form",
        description: "Maximum number of fields you can add in a single form",
        free: "Unlimited",
        pro: "Unlimited",
        business: "Unlimited"
      },
      {
        name: "Card style forms",
        description: "Use card-based layout for a cleaner, step-by-step form experience",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "No. of seats",
        description: "Team members that can collaborate in your workspace",
        free: "-",
        pro: "-",
        business: 25
      }
    ]
  },
    {
    category: "AI native",
    features: [
      {
        name: "AI form generation",
        description: "Generate full forms instantly using AI prompts",
        free: "2 daily",
        pro: "10 daily",
        business: "50 daily"
      },
      {
        name: "AI editing",
        description: "Make smart edits to existing forms using AI suggestions",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "AI multilingual translation",
        description: "Automatically translate forms into multiple languages using AI",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "AI logic branching",
        description: "Use AI to show or hide fields based on respondents input",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "AI powered emails",
        description: "Create personalized autoresponding emails with AI",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "AI powered spam protection",
        description: "Block spam entries using AI-powered detection",
        free: "Basic",
        pro: "AI powered",
        business: "Adaptive AI"
      }
    ]
  },
   {
    category: "Core features",
    features: [
      {
        name: "Premium fields",
        description: "Use advanced fields like signatures, calculations, etc.",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Dynamic forms",
        description: "Show or hide fields based on user input",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Pre-built themes",
        description: "Ready-made templates for faster form creation",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Collect e-sign",
        description: "Let users add legally binding electronic signatures",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Embed media",
        description: "Add images, videos, or audio files into your form",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Rating scales",
        description: "Get feedback with star or number rating fields",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Pre-fill fields",
        description: "Pre-fill forms with known information",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Collect payment",
        description: "Accept online payments via Stripe and PayPal",
        free: "1% fee",
        pro: "0% fee",
        business: "0% fee",
      },
      {
        name: "Form limiter",
        description: "Limit form responses by date, time or count",
        free: "Yes",
        pro: "Yes",
        business: "Yes",
      },
      {
        name: "Generate QR Code",
        description: "Create a custom QR code for your forms & surveys",
        free: "Yes",
        pro: "Yes",
        business: "Yes",
      },
      {
        name: "Address autocomplete",
        description: "Auto-fill addresses using Google Maps or other APIs",
        free: "-",
        pro: "Yes",
        business: "Yes",
      },
      {
        name: "Appointment scheduling",
        description: "Let users book time slots with built-in calendar sync",
        free: "Yes",
        pro: "Yes",
        business: "Yes",
      },
      {
        name: "Collect files",
        description: "Allow file uploads (resumes, images, documents)",
        free: "100 MB",
        pro: "1 GB",
        business: "50 GB",
      },
      {
        name: "Redirect to URL",
        description: "Send users to a custom page after form submission",
        free: "Yes",
        pro: "Yes",
        business: "Yes",
      },
      {
        name: "Cloudflare Turnstile",
        description: "Add Cloudflare anti-bot protection without CAPTCHAs",
        free: "Yes",
        pro: "Yes",
        business: "Yes",
      },
      {
        name: "Recaptcha",
        description: "Add Google\u2019s CAPTCHA to block spam bots",
        free: "Yes",
        pro: "Yes",
        business: "Yes",
      },
      {
        name: "Backend only forms",
        description: "Send your existing form responses to Formester's backend",
        free: "-",
        pro: "Yes",
        business: "Yes",
      }
    ]
  },
  {
    category: "Quiz features",
    features: [
      {
        name: "Autoscoring",
        description: "Automatically calculate quiz scores after submission",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Outcome quiz",
        description: "Show different results based on how users answer",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Timer",
        description: "Set time limits to complete the quiz",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Show real-time feedback",
        description: "Give instant right/wrong feedback as users answer",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      }
    ]
  },
   {
    category: "Branding",
    features: [
      {
        name: "Add logo",
        description: "Add your brand logo to forms for personalization",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Remove branding",
        description: "Make your forms truely yours",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Add custom domain",
        description: "Have your own domain in the form URL",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "Custom URL",
        description: "Edit form URL slugs",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "Edit meta tags",
        description: "Customize SEO meta tags like title and description",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Custom branding kit",
        description: "Set consistent fonts, colors, and logos across all forms",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Add favicon",
        description: "Add your brand's logo as the form favicon",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Embed scripts",
        description: "Embed custom code within the form",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      }
    ]
  },
  {
    category: "PDF generation",
    features: [
      {
        name: "Convert PDFs to fillable forms",
        description: "Turn static PDFs into interactive, fillable online forms",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Generate custom PDF with submission",
        description: "Generate a personalized PDF after form is submitted",
        free: "-",
        pro: "-",
        business: "Yes"
      }
    ]
  },
  {
    category: "Emails",
    features: [
      {
        name: "Email verification",
        description: "Verify email addresses with OTP confirmation",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Respondent emails",
        description: "Send automatic emails to users who fill the form",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Send submission copy",
        description: "Share a copy of the form submission with the user",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Self email notifications",
        description: "Get notified by email whenever a new submission happens",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Custom emails",
        description: "Personalize email content and subject lines",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Email attachments",
        description: "Send downloadable files as email attachments post-submission",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Conditional emails",
        description: "Send different emails based on how users answer",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      }
    ]
  },
  {
    category: "Admin & collaboration",
    features: [
      {
        name: "Workspaces",
        description: "Manage multiple forms or projects under organized workspaces",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Real time submission collaboration",
        description: "Let team members fill parts of a form in stages (great for approvals)",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "Save and resume submissions",
        description: "Allow respondents to save and resume their progress",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "Granular permissions",
        description: "Set who can edit, view, or submit at a detailed level",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "Close forms",
        description: "Stop form submissions anytime with a simple toggle",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      }
    ]
  },
   {
    category: "Automation",
    features: [
      {
        name: "Webhooks",
        description: "Push form data instantly to other tools or services",
        free: 1,
        pro: 50,
        business: "Unlimited"
      },
      {
        name: "Access to Formester\u2019s API",
        description: "Get full API access to manage forms and responses programmatically",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "API powered forms",
        description: "Pre-fill forms using external data via API",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "Pre-fill with API",
        description: "Pull and prefill form data dynamically from external sources",
        free: "-",
        pro: "-",
        business: "Yes"
      }
    ]
  },
  {
    category: "Analytics",
    features: [
      {
        name: "Submissions control",
        description: "View, filter, and sort responses in a table format",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Connect to GTM & GA4",
        description: "Add tracking or automation scripts inside the form",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Form analytics",
        description: "Get deep insights into form performance and usage",
        free: "Basic",
        pro: "Advanced",
        business: "Advanced"
      },
      {
        name: "Field wise analytics",
        description: "Summarize answers on a field level",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "View partial submissions",
        description: "See responses from users who didn't finish the form",
        free: "-",
        pro: "-",
        business: "Yes"
      },
      {
        name: "Drop off rates",
        description: "See how many users dropped off before completion",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Alert users before drop off",
        description: "Show a message to stop users from abandoning the form",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Drop off page",
        description: "Identify the exact page users leave the form",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Demographics",
        description: "See where users are submitting the form from",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "IP tracking",
        description: "See form submitters IP address",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Devices",
        description: "See what devices users are submitting from (mobile, desktop, etc.)",
        free: "-",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "UTM Tracking",
        description: "Track UTM parameters using hidden fields",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      }
    ]
  },
  {
    category: "Integrations",
    features: [
      {
        name: "Stripe",
        description: "Collect payments directly using Stripe",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "PayPal",
        description: "Accept PayPal payments via your forms",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "SMTP Integration",
        description: "Send emails from your SMTP email",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "HubSpot",
        description: "Send leads and responses to your HubSpot CRM",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Google Sheets",
        description: "Push form data to a Google spreadsheet",
        free: 1,
        pro: "Unlimited",
        business: "Unlimited"
      },
      {
        name: "Slack",
        description: "Get real-time notifications in Slack",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Discord",
        description: "Send alerts or updates to your Discord server",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Notion",
        description: "Log form responses into Notion automatically",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Zapier",
        description: "Connect Formester to 5000+ apps using Zapier",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Salesforce",
        description: "Sync form data directly to Salesforce CRM",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Gmail",
        description: "Send customized Gmail emails based on form logic",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Mailchimp",
        description: "Add form leads directly to Mailchimp lists",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "SureTriggers",
        description: "Trigger automated workflows using SureTriggers integration",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      }
    ]
  },
  {
    category: "Support",
    features: [
      {
        name: "Chat support",
        description: "Chat with our experts in real time",
        free: "Yes",
        pro: "Yes",
        business: "Yes"
      },
      {
        name: "Priority support",
        description: "Get a dedicated expert to help you solve your queries",
        free: "-",
        pro: "-",
        business: "Yes"
      }
    ]
  }
]
