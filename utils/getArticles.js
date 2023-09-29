export async function fetchArticle(route) {
    const result = await queryContent('blog').where({ _path: `/blog/` + route.slug }).find()
    const article = result[0]
    return article
}

export async function fetchRelatedArticles(article) {
    const result = await queryContent('blog').find()
    console.log(article);
    let relatedArticlesData = result.filter((relatedArticle) => article._path !== relatedArticle._path)
    const randIndex = Math.floor(Math.random() * (relatedArticlesData.value.length - 2))
    const relatedArticles = relatedArticlesData.slice(randIndex, randIndex + 2)
    return relatedArticles
}