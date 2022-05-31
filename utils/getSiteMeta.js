const type = 'website'
const url = 'https://formester.com'
const title = 'Formester | HTML Form Backend & Form Builder'
const description =
  'Form solution for your business that is easy to use. Formester provides an interactive drag and drop builder to create amazing survey forms.'
const mainImage = 'https://formester.com/formester-form-builder-background.png'
const mainImageAlt = 'Form builder showing drag and drop functionality'

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
      content: (meta && meta.url) || url,
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
      content: (meta && meta.url) || url,
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
      name: 'twitter:site',
      content: '@_formester_'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: 'Formester'
    },
    // Linkedin
    {
      hid: 'image',
      name: 'image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage,
    },
  ]
}
