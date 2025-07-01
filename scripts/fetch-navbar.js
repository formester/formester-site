// scripts/fetch-navbar.js
const fs = require('fs')
const axios = require('axios')

async function fetchNavbar() {
  const {
    data: { data },
  } = await axios.get(`https://cms.formester.com/api/features`, {
    params: {
      populate: 'deep',
      'sort[0]': 'id',
    },
  })

  // Extract only the required fields for each item
  const extractedNavItems = data.map(item => {
    return {
      id: item.id,
      slug: item.slug,
      navTitle: item.navTitle,
      navDescription: item.navDescription,
      featureCategory: item.featureCategory,
      featurePlan: item.featurePlan,
      navIcon: item.navIcon ? {
        imageUrl: item.navIcon?.imageUrl,
        imageAlt: item.navIcon?.imageAlt,
        image: item.navIcon?.image ? {
          url: item.navIcon.image.url,
          alt: item.navIcon?.imageAlt
        } : null
      } : null
    };
  });

  // Save the extracted data to navbar.json
  fs.writeFileSync('static/navbar.json', JSON.stringify(extractedNavItems, null, 2))
  console.log('✅ navbar.json saved with extracted fields.')
}

fetchNavbar()
