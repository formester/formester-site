export default (markdownContent, wordsPerMinute = 200) => {
  // Remove code blocks
  const contentWithoutCode = markdownContent.replace(/```[\s\S]*?```/g, '')
  const contentWithoutInlineCode = contentWithoutCode.replace(/`[^`\n]+`/g, '')
  const contentWithoutUrls = contentWithoutInlineCode.replace(
    /https?:\/\/\S+/g,
    ''
  )
  const cleanContent = contentWithoutUrls.replace(/[#*_\[\]()~]/g, '')

  const words = cleanContent.trim().split(/\s+/)
  const wordCount = words.length
  // Calculate reading time and ceil it
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute)

  return {
    text: `${readingTimeMinutes} min read`,
  }
}
