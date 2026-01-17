// scripts/fetch-templates.js
import fs from 'fs'
import axios from 'axios'

const dummyDescription =
  'Check out this pre-designed template and start customising with just a single click. Personalise with your branding, incorporate electronic signatures for security and add multiple collaborators to make changes simultaneously. Use this template and start getting data driven actionable insights with robust analytics.'

async function fetchTemplates() {
  try {
    const appUrl = process.env.NUXT_PUBLIC_APP_URL || 'https://app.formester.com'

    console.log('🔄 Fetching templates data...')

    // Fetch all data in parallel
    const [templatesRes, categoriesRes, groupedRes, pdfRes] = await Promise.all([
      axios.get(`${appUrl}/templates.json`, {
        params: { with_details: true },
        timeout: 30000
      }),
      axios.get(`${appUrl}/template_categories.json`, {
        timeout: 30000
      }),
      axios.get(`${appUrl}/template_categories/grouped_by_category.json`, {
        timeout: 30000
      }),
      axios.get('https://cms.formester.com/api/pdf-templates', {
        params: { populate: 'deep' },
        timeout: 30000
      }).catch(() => ({ data: { data: [] } })) // Fallback to empty array on error
    ])

    // Process templates - add description if missing
    const templates = templatesRes.data.map(template =>
      template.description ? template : { ...template, description: dummyDescription }
    )

    const categories = categoriesRes.data
    const groupedCategories = groupedRes.data
    const pdfTemplates = pdfRes.data?.data || []

    const templateData = {
      templates,
      categories,
      groupedCategories,
      pdfTemplates
    }

    // Save to constants folder
    fs.writeFileSync('constants/templates.json', JSON.stringify(templateData, null, 2))

    console.log(`✅ Saved templates data to constants/templates.json`)
    console.log(`   - ${templates.length} templates`)
    console.log(`   - ${Object.keys(categories).length} categories`)
    console.log(`   - ${groupedCategories.length} grouped categories`)
    console.log(`   - ${pdfTemplates.length} PDF templates`)
  } catch (error) {
    console.error('❌ Failed to fetch template data:', error.message)
    process.exit(1)
  }
}

fetchTemplates()
