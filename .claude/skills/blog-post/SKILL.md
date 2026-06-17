---
name: blog-post
description: Author, reformat, or structure a blog post / article for the Formester marketing site. Converts finished blog content into the clean, on-brand HTML that goes in the Strapi CMS `body` field, using the site's blog design-system blocks (tldr, note, steps, rank, pros/cons, comparison table, cta, faq). Use when writing a new post, restructuring an existing one, or producing CMS-ready blog HTML for any type — how-to, "best X" listicle, X-vs-Y comparison, alternatives, what-is explainer, guide. Keeps the author's words verbatim; all styling comes from the site, never the content.
---

# Formester blog post authoring

Turn finished blog copy into the HTML for the Strapi `body` field. **You are a structurer,
not a writer — never change the author's words.** The styling lives in the site
(`components/blog/BlogPostView.vue`, the `.nuxt-content` block CSS), so the HTML you produce
carries class names only, never CSS.

## Workflow
1. Get **(a)** the blog type and **(b)** the finished copy. Ask for whichever is missing — never invent content.
2. Wrap the copy in the blocks below. **Plain prose is the default**; reach for a block only where the content genuinely calls for it.
3. Output **one HTML fragment** (see Output format). Then offer to push it to the CMS (see Publishing).

## Hard rules
- **Verbatim content.** Never reword, shorten, summarise, add sentences, or invent facts/stats. Structure only.
- **No styling in the content:** no `<style>`, no `style="..."`, no `<svg>`/icons/emoji-as-UI, no colors, no gradients.
- **Start at `<h2>`.** No `<h1>`, title, author, date, or cover image — the page renders those.
- **Plain semantic HTML needs NO class:** `h2 h3 h4 p ul ol li a strong em table figure blockquote details summary`.
- **Use a class ONLY for the custom blocks below** (un-prefixed names). Unknown classes get no styling.
- **FAQ** is `<section class="faq">` with `<details>` — the site lifts it into the shared FAQ component.
- **No filler / meta intros** ("In this article we'll explore…"), no fake urgency.

## Custom blocks (clean, un-prefixed class names)

```html
<!-- TL;DR / key takeaways — first child is the label -->
<div class="tldr">
<p>Quick answer</p>
<ul><li><strong>Option A</strong> for X.</li></ul>
</div>

<!-- Callout / note (also the listicle "Best for:" line). Warn variant: class="note note--warn" -->
<div class="note"><p>A short tip, caveat, or definition.</p></div>

<!-- Step-by-step (how-tos / guides) — auto-numbered -->
<ol class="steps">
<li><h3>Step title</h3><p>What to do.</p></li>
</ol>

<!-- Ranked entry (best X / top N / alternatives). Badge only on genuine top pick(s). -->
<div class="rank">
<span class="rank-num">1</span>
<h3>Tool name <span class="rank-badge">Editor's pick</span></h3>
<p class="note">Best for: [use case].</p>
<h4>What makes it stand out</h4>
<ul><li>Differentiator</li></ul>
<h4>Pricing</h4>
<ul><li><strong>Free plan:</strong> Yes</li></ul>
<div class="proscons">
<div class="pros"><strong>Pros</strong><ul><li>Honest pro</li></ul></div>
<div class="cons"><strong>Cons</strong><ul><li>Real, specific con</li></ul></div>
</div>
</div>

<!-- Wide / comparison table — contained card that scrolls on mobile -->
<div class="table-wrap">
<table><thead><tr><th>Tool</th><th>Best for</th></tr></thead>
<tbody><tr><td>Formester</td><td>...</td></tr></tbody></table>
</div>

<!-- Inline CTA — at most one per article -->
<div class="cta">
<p>Build this in minutes with Formester.</p>
<a href="https://app.formester.com/users/sign_up">Get started free</a>
</div>

<!-- FAQ — always last -->
<section class="faq">
<h2>Frequently asked questions</h2>
<details><summary>Question?</summary><div>Answer.</div></details>
</section>
```

## Pick blocks by type
- **how-to / guide** → `ol.steps` for the procedure; a `note` tip; one `cta`.
- **best-X / top-N / alternatives** → `table-wrap` at-a-glance + one `div.rank` per item (with pros/cons).
- **X vs Y comparison** → `table-wrap` + `<h2>` sections per dimension + a `note` verdict.
- **what-is / explainer / general** → mostly `h2/h3` + `p` + lists; blocks only where the content calls for it.

## Output format
- One HTML fragment, ready to paste into the blog `body`.
- The CMS runs a Markdown pass, so: **do NOT indent any HTML line**, and **no blank lines inside a block** (blank lines only *between* top-level blocks) — otherwise it mangles to `<pre>`.

## Publishing
The `body` lives in the Strapi CMS; the block styling lives in this repo (`components/blog/BlogPostView.vue`, the `.nuxt-content` block CSS). The new design must be deployed before content using it goes live, and the static site rebuilt afterward. (The CMS repo carries a local `tooling/push-blog-prod.mjs` helper for body-only prod pushes.)
