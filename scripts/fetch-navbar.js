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
  const navItems = data
  fs.writeFileSync('static/navbar.json', JSON.stringify(navItems, null, 2))
  console.log('✅ navbar.json saved.')
}

fetchNavbar()
