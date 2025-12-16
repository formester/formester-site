// scripts/fetch-navbar.js
import fs from 'fs'
import axios from 'axios'

async function fetchNavbar() {
  try {
    const {
      data: { data },
    } = await axios.get(`https://cms.formester.com/api/features`, {
      params: {
        populate: 'deep',
        'sort[0]': 'id',
      },
      timeout: 10000,
    })

    // Extract only the required fields for each item
    const extractedNavItems = data.map((item) => {
      return {
        id: item.id,
        slug: item.slug,
        navTitle: item.navTitle,
        navDescription: item.navDescription,
        featureCategory: item.featureCategory,
        featurePlan: item.featurePlan,
        navIcon: item.navIcon
          ? {
            imageUrl: item.navIcon?.imageUrl,
            imageAlt: item.navIcon?.imageAlt,
            image: item.navIcon?.image
              ? {
                url: item.navIcon.image.url,
                alt: item.navIcon?.imageAlt,
              }
              : null,
          }
          : null,
      }
    })

    // Save the extracted data to an importable path (bundled by Vite/Nuxt)
    fs.writeFileSync('constants/navbar.json', JSON.stringify(extractedNavItems, null, 2))
    console.log('✅ constants/navbar.json saved with extracted fields.')
  } catch (error) {
    console.warn('⚠️  Failed to fetch navbar data from API:', error.message)
  }
}

fetchNavbar()

