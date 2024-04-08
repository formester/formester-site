export default async () => {
  const axios = require('axios')
  
  const {
    data: { data },
  } = await axios.get(`${process.env.strapiUrl}api/blogs?populate=*`);

  const articles = data.map((item) => {
    return `/blog/${item.attributes.slug}`
  })

  return articles;
};