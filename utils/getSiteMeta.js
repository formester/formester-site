const type = 'website'
const url = 'https://formester.com'
const title = 'HTML Form Generator | No-Code Web Form Builder - Formester'
const description =
  'Build web forms using our Free HTML Form Builder with Drag-and-Drop Interface - Advanced Features, Third-Party Integrations & Robust Analytics!'
const mainImage = 'https://formester.com/formester-logo-meta-image.png'
const mainImageAlt = 'Formester Logo'
const keywords = [
  'HTML form builder',
  'Web form creation',
  'Drag and drop forms',
  'Online form generator',
  'Easy form building',
  'Form design tool',
  'Form creation software',
  'User-friendly form builder',
  'HTML form maker',
  'Formester features',
  'Custom web forms',
  'Responsive form builder',
  'HTML form creator',
  'Form design made easy',
  'User-friendly form generator',
  'Simplified form development',
  'Build forms quickly',
  'Effortless form design',
  'Drag and drop form editor',
  'Formester benefits',
  'Free HTML form builder',
  'Create free web forms',
  'Drag and drop forms for free',
  'Free online form generator',
  'Build forms for free',
  'Free form design too',
  "Formester's free plan",
  'Free HTML form creation',
  'Get started for free',
  'Free form builder features',
  'No code form builder',
  'Online HTML form builder',
  'HTML form generator',
  'Form builder HTML',
  'Form generator HTML',
  'HTML form maker',
  'Form builder',
  'Online form builder',
  'Web form builder',
  'Website form builder',
  'Free form builder',
]

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description,
    },
    // Facebook
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: ((meta && meta.url) || url).replace(/([^/])$/, '$1/'),
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: (meta && meta.mainImageAlt) || mainImageAlt,
    },
    // Twitter
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: ((meta && meta.url) || url).replace(/([^/])$/, '$1/'),
    },
    {
      name: 'twitter:site',
      content: '@_formester_',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: (meta && meta.mainImageAlt) || mainImageAlt,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: 'Formester',
    },
    // Linkedin
    {
      hid: 'image',
      name: 'image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: (meta && meta.keywords) || keywords,
    },
  ]
}
