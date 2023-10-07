export async function fetchTemplates() {
    const templatesResponse  = await fetch('https://app.formester.com/templates.json')
    const templatesData = await templatesResponse.json()
    return templatesData
}

export async function fetchTemplateCategories() {
    const categoriesResponse = await fetch('https://app.formester.com/template_categories.json')
    const categoriesData = await categoriesResponse.json()
    return categoriesData
}
