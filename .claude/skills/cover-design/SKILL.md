---
name: cover-design
description: Design a blog cover image in the Formester house style using Claude Design (the `design` skill). Encodes the brand cover anatomy (deep violet ground, white title with one orange keyword, light UI mockup card, Formester wordmark) and theme tokens. Use when a post needs a cover image, or to produce cover variants for the user to pick from. Hand the exported file to `content-graphics` for upload.
---

# Blog cover design (Formester house style)

Covers are the most visible brand surface of the blog. This skill turns a post title into
an on-brand cover via a Claude Design canvas the user can tweak by hand.

## Picked standards (Ankit, 2026-09-01)

Two approved layouts — don't design new directions unless asked:
- **A — Classic split (default):** wordmark top-left, title on one half with the orange
  keyword, cream UI-mockup card on the other. Use for how-to and feature posts.
- **E — Type led (alternate):** wordmark top-center, big centered title, small topic pill
  above, one-line subtitle below. Use for opinion/announcement posts.
Reference artboards live in `.claude/content-ops/covers/create-online-form-from-pdf/`
(Main.dc.html = A, TypeLed.dc.html = E) — copy one and adapt.

**Logo: always the exact brand asset `public/logo-light.svg` (white wordmark, 169×24,
scale ~240×34). Never redraw or approximate the logo or the robot mark.** On a light
ground use `public/logo.svg` instead.

## House anatomy (from the existing cover library, verified 2026-09-01)

Every recent cover follows this formula:

1. **Ground:** deep violet, flat or with a subtle tone-on-tone pattern (squiggles) or a
   soft blob shape in a nearby violet. Never busy.
2. **Formester wordmark + robot logo mark** in white, top corner or top center.
3. **Title, big and bold:** white, heavy sans (Poppins-like), 3 lines max, sentence
   trimmed to its shortest readable form. **Exactly one keyword highlighted in orange.**
4. **One light "UI card"** (cream/white rounded rectangle) showing a simplified product
   mockup relevant to the topic: a form, a dashboard table, a PDF page. Flat illustration,
   soft shadow, no real screenshots inside the cover.
5. Layout: title on one half, card on the other (either side). Generous margins.

## Theme tokens (assets/css/design-tokens.css + main.css)

- Violet ground: `#2a1866` to `#372580` range (covers use a deeper shade than UI violet)
- Brand violet (UI/accents): `#6434d0`, hover `#472594`, deep `#53389e`, tint `#9777e0`
- Light tints: `#f0ebfa`, `#f7f3ff`
- Card cream: `#f7f3ee` / white `#ffffff`
- Highlight orange: `#f4551c` (sampled from covers)
- Text: white `#ffffff`

## Workflow

1. Read the post's plan/frontmatter: title, `coverImgAlt`, topic. Shorten the title for
   the cover (covers say "How to Auto-Fill and Sign PDFs with a Form", not the full SEO
   title). Pick the one keyword to set in orange.
2. **Load the `design` skill** and build the cover as a canvas artboard at **1200×630**.
   Follow the anatomy above; sketch the UI card as flat vector shapes (rounded rects,
   field rows, buttons) in the light tints, topic-specific (a PDF page turning into form
   fields, a dashboard table, etc.).
3. When exploring (new variant, or the user hasn't picked a standard yet), put 3–5
   variants on one canvas so the user can compare and tweak inline. For a standard-layout
   cover, skip exploration and adapt the picked reference artboard directly.
4. **Export yourself — end to end, no manual step (proven 2026-09-01).** Convert the
   artboard to a plain HTML file (strip `<x-dc>`/`<helmet>`, put the font link + styles in
   `<head>`, reference `logo-light.svg` from the same directory), then render headlessly:
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new
   --disable-gpu --screenshot=cover.png --window-size=1200,630 --hide-scrollbars
   --virtual-time-budget=8000 "file://<abs path>/render-cover.html"` — use absolute paths.
   Read the PNG back to eyeball it before shipping. Then hand it to `content-graphics` to
   upload to the blog's CMS folder and set `coverImg` + `coverImgAlt`.
   If the user edited the canvas after your last seed, re-read the artifact and re-extract
   first so the render matches what they approved.

## Guardrails

- Don't invent a new palette; stay on the tokens above.
- One orange highlight only. All other title words white.
- No stock photos, no real screenshots, no third-party logos inside a cover (competitor
  wordmarks in text form are fine on comparison posts — see the Wufoo cover).
- Keep the artboard exactly 1200×630 (og:image ratio) unless told otherwise.
