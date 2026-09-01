---
name: content-graphics
description: Collect, upload, and wire in the images for a blog post or page — replaces the `placeholder://` slots a `content-draft` draft leaves behind. Captures app screenshots via the browser (browser MCP if connected, local Playwright fallback), uploads every asset to the Formester CMS media library in a per-blog folder, swaps the placeholder URLs for real CMS URLs, and cleans up any demo forms/files it created. Use when a draft has image placeholders to fill, or when asked to capture/upload screenshots for content.
---

# Content graphics (capture → upload → wire in → clean up)

Fills the image slots in a draft. Input: a draft file with `placeholder://<slug>-<n>` image
URLs, each followed by an `<!-- IMAGE: what to capture -->` comment (the `content-draft`
convention). Output: the same draft with real, hosted CMS URLs and correct dimensions.

## 1. Capture

**Tooling order:**
1. **Claude in Chrome** (the user's real browser, already logged in) — tools appear when the
   session was started interactively with `claude --chrome` (or `/chrome` set to enabled).
   Has screenshot-to-disk. **Not available in background/headless sessions** — if this is a
   background job and no browser tools exist, that's why; ask the user to either run the
   capture step from an interactive `claude --chrome` session or connect option 2.
2. A browser MCP if one is connected (Playwright MCP with a persistent profile keeps login
   state across runs; check with ToolSearch for navigate/screenshot tools).
3. Fallback for public, unauthenticated pages only: headless Chrome via Bash
   (`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new
   --screenshot=... --window-size=...` — no login session).
4. None available and the shot needs a logged-in session → stop and ask. Don't fake
   screenshots and don't ship placeholders silently.

**App screenshots (app.formester.com):**
- The user keeps the session logged in; if you hit a login wall, ask them to log in, don't
  handle credentials yourself.
- Work on staging when available. Create a **draft demo form** for the walkthrough (name it
  `demo-<blog-slug>` so it's obviously disposable); never screenshot real customer forms or
  submission data.
- Capture at 1440×900 minimum, crop to the region the `<!-- IMAGE -->` comment describes.
  Hide personal data (account email, workspace names) if visible; re-shoot rather than blur.
- **Cleanup is mandatory:** delete the demo form when done (via the app UI — the MCP has no
  delete-form tool). Also delete any test submissions you made.

**Third-party sites** (comparison shots): public pages only, capture the relevant region,
no logged-in areas of other products.

Save captures to `$CLAUDE_JOB_DIR/tmp/<blog-slug>/` (or a temp dir), named after their
placeholder: `<slug>-1.png`, `<slug>-2.png`, `<slug>-cover.png`.

## 2. Upload (Formester CMS MCP, per-blog folder)

Every asset is scoped to one folder per blog/page so the library stays maintainable:

1. `search_cms_media` with the blog slug — reuse the folder if it already exists.
2. Else `cms_create_folder` named exactly the blog slug (e.g. `create-online-form-from-pdf`),
   under the **"Blog posts" folder (id 268)** — the established parent for per-post folders.
   (Gotcha: pass absolute file paths to `curl --data-binary @...` — the shell cwd resets
   between Bash calls.)
3. Per file: `presign_cms_media_upload` (filename + mime, `folder_id`) → `curl -X PUT` the
   file to `upload_url` with the given headers → `upload_cms_media` with the returned `key`
   to finalize. Base64 direct upload only as fallback for small files (<10MB).
4. Record the final URL per file from the upload result.

**Optimize before upload — mandatory, with hard budgets:**
- **Body images/screenshots → WebP.** Resize to max 1440px wide (`sips -Z 1440` keeps
  aspect), then `cwebp -q 82 in.png -o out.webp` (installed at `/opt/homebrew/bin/cwebp`).
  Budget: **≤120KB** per body image. Verified win: a 537KB blog PNG → 71KB WebP at q82
  with no visible loss. If q82 misses the budget, try q75 before shrinking dimensions.
- **Covers → PNG at exactly 1200×630, ≤100KB.** Covers double as the og:image, and PNG is
  the safest og:image format across link-preview scrapers. Brand-flat covers land ~40KB
  anyway; a photographic cover that can't hit 100KB as PNG may ship as `-q 90` WebP (the
  library already has WebP covers) — but say so in the handoff.
- Never upload a raw screenshot. Check every file's final size (`du -h`) before presigning,
  and report per-image sizes in the handoff.

## 3. Wire in

- Replace each `placeholder://<slug>-<n>` URL in the draft with its CMS URL. Keep the alt
  text as-is (it was final copy).
- `coverImg`: set the real URL plus the file's true width/height.
- Delete the `<!-- IMAGE: ... -->` comments once their slot is filled.
- Get image dimensions with `sips -g pixelWidth -g pixelHeight <file>`.

## 4. Verify + clean up

- Grep the draft for `placeholder://` — must be zero hits when done (or report which slots
  remain and why).
- Confirm every uploaded URL returns 200 (`curl -sI`).
- Delete the demo form and local temp files.
- Hand back: list of slots filled, the CMS folder used, anything still missing.

## Proven run notes (first end-to-end run 2026-09-01)

- **Demo PDF:** generate one locally with headless Chrome
  (`--headless=new --print-to-pdf=... file:///tmp/demo.html`) from a simple HTML form
  layout; a patient-intake sheet detects well (AI split name into first/last, made DOB a
  date picker).
- **Upload into the app:** never click the upload button (native picker). `find` the
  `type="file"` input and use `file_upload` with its ref.
- **The AI-created form is single-page**, so the dashboard's saved filters (e.g.
  Multi-Page) can hide it from search. Don't fight the list: keep the form id from the
  builder URL (`/forms/<id>/builder`) and navigate directly.
- **Best shots from the flow:** the create screen itself (full-page, no customer data),
  the upload dialog, the builder right after AI detection, and the post-publish Share
  modal (publish first — the unpublished Share tab shows a warning banner).
- **Delete = trash:** card's ⋮ menu → Delete → app modal "Yes, Move to Trash" (an app
  modal, not a native confirm — safe to click). 30-day recovery.
- **Leave the user's dashboard as found:** restore any filter you cleared, clear your
  search text, close your tab.
- Chrome-extension screenshots save to a /var/folders temp dir — copy them to your
  scratch dir immediately; the temp dir can vanish.

## Division of labor

`content-draft` leaves placeholders; this skill fills them; `content-review` checks no
placeholder survives to publish. Cover image *design* is the `cover-design` skill — this
skill only uploads and wires in the file it produces.
