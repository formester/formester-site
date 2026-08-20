---
name: blog-content
description: Create, edit, list, or delete Formester blog posts stored as markdown files in `content/blog/*.md` (Nuxt Content v3). Handles the frontmatter/file lifecycle — slug, metadata, cover image, SEO fields — for a post. Use when asked to add a new blog post, update a post's metadata/frontmatter, rename/retire a post, or find posts matching some criteria. Delegates writing/structuring the post body HTML to the `blog-post` skill — don't duplicate that work here.
---

# Blog content management (`content/blog/*.md`)

Manages the **file and frontmatter** lifecycle of blog posts. This repo no longer pulls blog
content from Strapi at build time — every post is a real file at `content/blog/<slug>.md`,
validated against the `blog` zod schema in `content/schemas/misc.ts` and loaded through the
`blog` collection in `content.config.ts` (`type: 'page'`, `source: 'blog/**/*.md'`).

**Division of labor:** this skill owns the frontmatter and file itself. If the task is about
writing or restructuring the post's *body* (headings, steps, FAQ, comparison tables, tone),
use the **`blog-post`** skill for that part — invoke it, then drop its output in as the file body.

## The schema (`content/schemas/misc.ts` → `export const blog`)

```ts
export const blog = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.string().optional(),
  author: z.string().optional(),
  authorProfile: z.string().optional(),
  coverImgAlt: z.string().optional(),
  featured: z.boolean().default(false),
  rawbody: z.string(),
  coverImg: media, // { url, width, height }
  metaImage: z.array(z.object({ imageURL: z.string().optional() }).passthrough()).default([]),
  jsonld: z.array(anyObject).default([]),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  publishedAt: z.string().optional(),
})
```

- **`rawbody` is reserved.** Because the collection is `type: 'page'`, Nuxt Content
  auto-populates `rawbody` with the file's raw text and `getAllBlogs.js` remaps it to
  `attributes.body`. **Never hand-write a `rawbody` frontmatter field** — leave it out of new
  files entirely; it's populated at read time, not authored.
- **`slug` must match the filename.** File `content/blog/<slug>.md` and frontmatter
  `slug: "<slug>"` must be identical (kebab-case). Nothing enforces this automatically — check
  it by hand.
- **`featured: true`** puts a post in the homepage-of-blog hero section
  (`composables/useBlogData.js` → `heroArticles`); everything else paginates 9-per-page.
  Don't set it without being asked — it's a deliberate editorial choice.
- **Dates are ISO 8601 strings** (`"2026-08-20T00:00:00.000Z"`), not bare dates. `publishedAt`
  drives sort order (`queryCollection('blog').order('publishedAt', 'DESC')`) and gating (a post
  with `publishedAt` in the future may still build — there's no publish-date gate in the
  queries, so don't set a future `publishedAt` unless the intent is genuinely to backdate).
- **No local image assets.** Every existing post's `coverImg`/`metaImage`/body images point at
  already-hosted S3 URLs (`https://formester-strapi.s3.ap-south-1.amazonaws.com/...`). There is
  no `content/blog/<slug>/` asset subfolder convention. If the user has a new image to add, ask
  where it's hosted (or should be uploaded) rather than inventing a local path — a `content/`
  relative path will not resolve like the existing image pipeline expects.

## Frontmatter formatting convention

Object and array fields are written as **inline JSON on one line**, not nested YAML — this
matches every existing post and the original converter (`scripts/convert-blog-json-to-md.mjs`,
which literally does `${key}: ${JSON.stringify(value)}` per field). Follow the same shape:

```yaml
---
slug: "your-post-slug"
title: "Human-readable title"
description: "One paragraph summary used for previews/meta."
metaTitle: "SEO title, can differ from title"
metaDescription: "SEO meta description."
keywords: "comma, separated, keywords"
author: "Author Name"
authorProfile: "https://www.linkedin.com/in/..."
coverImgAlt: "Alt text for the cover image"
featured: false
coverImg: {"url":"https://.../cover.png","width":1200,"height":631}
metaImage: []
jsonld: []
createdAt: "2026-08-20T00:00:00.000Z"
updatedAt: "2026-08-20T00:00:00.000Z"
publishedAt: "2026-08-20T00:00:00.000Z"
---
Body markdown starts here.
```

Quote every string value (titles/descriptions often contain colons or quotes — YAML will
misparse unquoted). Omit `rawbody` entirely.

## Workflows

### Create a new post
1. Get the slug and title (ask if missing). Check `content/blog/<slug>.md` doesn't already exist.
2. Get the body content — if it's not already structured, invoke the **`blog-post`** skill to
   turn finished copy into the on-brand body HTML/markdown. Never invent body content yourself.
3. Fill frontmatter per the schema above. Required: `slug`, `title`, `rawbody` is omitted,
   `coverImg` (ask for a hosted image URL + dimensions if not given), sensible defaults for the
   rest (`featured: false`, `jsonld: []`, `metaImage: []`, current-time ISO strings for
   `createdAt`/`updatedAt`/`publishedAt` unless told otherwise).
3. Write `content/blog/<slug>.md`.
4. Mention that a full rebuild (`npm run generate` or `npm run dev` restart — content collections
   are indexed into SQLite at build/dev-server start) is needed to see it live; don't run heavy
   build commands yourself, ask the user to run them.

### Edit an existing post
1. Read the file first — preserve every field you're not explicitly changing.
2. If only frontmatter changes (author, title, cover image, `featured`), edit just the
   frontmatter block; don't touch the body.
3. If the body needs restructuring, hand that part to the **`blog-post`** skill and splice the
   result back in below the frontmatter fence.
4. Bump `updatedAt` to reflect the edit.

### List / find posts
Grep `content/blog/*.md` frontmatter directly (fast, no build step needed) — e.g. `grep -l
'featured: true' content/blog/*.md` for hero candidates, or `grep -l 'author: "X"'` for a given
author. Don't assume you need to run the dev server to inspect content.

### Retire / remove a post
Deleting the `.md` file removes it from the collection entirely (no soft-delete field exists in
the schema). Confirm with the user before deleting — if they just want it unlisted, setting
`featured: false` and checking whether any other page links to its slug (`grep -r
"/blog/<slug>" pages/ components/`) is safer than an outright delete, since removing the file
breaks any inbound `/blog/<slug>` link with no redirect.
