export default (content, wordsPerMinute = 200) => {
  const src = content || ''

  // Strip non-prose so HTML/CKEditor bodies don't count markup, CSS, or embeds
  // as "words" (which wildly inflates the estimate).
  const withoutEmbeds = src
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
  const withoutHtmlTags = withoutEmbeds.replace(/<[^>]+>/g, ' ')

  // Strip markdown code, urls, entities, and markdown punctuation.
  const contentWithoutCode = withoutHtmlTags.replace(/```[\s\S]*?```/g, '')
  const contentWithoutInlineCode = contentWithoutCode.replace(/`[^`\n]+`/g, '')
  const contentWithoutUrls = contentWithoutInlineCode.replace(/https?:\/\/\S+/g, '')
  const cleanContent = contentWithoutUrls
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/[#*_\[\]()~]/g, '')

  const words = cleanContent.trim().split(/\s+/).filter(Boolean)
  // Calculate reading time and ceil it (min 1)
  const readingTimeMinutes = Math.max(1, Math.ceil(words.length / wordsPerMinute))

  return {
    text: `${readingTimeMinutes} min read`,
  }
}
