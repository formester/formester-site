const type = 'website'
const url = 'https://formester.com'
const title = 'No-code Survey Form and Quiz Builder | Formester'
const description =
  'Build online forms using a No-Code, Drag-and-Drop Form Builder - Starts Free! Advanced Features, Third-Party Integrations & Robust Analytics!'
const mainImage = 'https://formester.com/formester-form-builder-background.png'
const mainImageAlt = 'Form builder showing drag and drop functionality in Formester'
const keywords = [
  'web form',
  'formester',
  'web forms',
  'forms',
  'online form builder',
  'online form builder software',
  'typeform alternative',
  'jotform alternative',
  'free typeform alternative',
  'free jotform alternative',
  'html form builder',
  'no code form builder',
  'drag and drop form builder',
  'Form builder',
  'Web forms form builder',
  'how to create online forms',
  'digital web forms',
  'how to create digital web forms',
  'create online digital web forms',
  'free form builder',
  'webform tutorial ',
  'webform introduction',
  'discover how web forms can help businesses discover how web forms can help businesses track online leads',
  'track online leads',
  'learn more about customers',
  'enhance user experience',
  'increase conversions',
  'features',
  'project',
  'example',
  'server controls',
  'labels',
  'textbox',
  'button',
  'hyperlink',
  'radiobutton',
  'calendar',
  'checkbox',
  'fileupload',
  'events handling',
  'authentication ',
  'webforms model binding',
  'html server control',
  'compare validator',
  'range validator',
  'validation summary',
  'mvc introduction',
  'mvc project',
  'view, validation',
  'entity framework',
  'authentication',
  'web forms example',
  'web forms in html',
  'types of web forms',
  'create free web forms online',
  'create free web forms online formester forms',
  'create free web forms online typeform alternative',
  'create free web forms online jotform alternative',
  'create free web forms online zoho alternative',
  'create free web forms online formstack alternative',
  'create free web forms online paperform alternative',
  'create free web forms online surveysparrow alternative',
  'create free web forms online getform alternative',
  'create free web forms online formsapp alternative',
  'create powerful web forms',
  'create powerful web forms for free',
  'create powerful web forms for free for your website',
  'customize & amp your web forms',
 ' build a web form the easy way',
  'build web forms the easy way',
  'create attractive web forms',
  'create customizable web forms',
  'create attractive and customizable web forms',
  'create attractive and customizable web forms using our online form builder',
  'create attractive web forms using our online form builder',
  'create customizable web forms using our online form builder',
  'capture and generate more leads instantly',
  'use web forms to capture and generate more leads instantly',
  'use formester to capture and generate more leads instantly',
  'business sign up forms',
  'business sign up forms to turn website visitors into subscribers',
  'business sign up forms to turn website visitors into subscribers forms are customizable and include pop-up and embedded options',
  'forms are customizable',
  'forms include pop-up and embedded options',
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
    {
      hid: 'keywords',
      name: 'keywords',
      content: (meta && meta.keywords) || keywords,
    },
  ]
}
